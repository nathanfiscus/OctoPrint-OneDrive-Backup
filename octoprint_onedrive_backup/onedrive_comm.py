"""
OneDrive Communication Module

This module handles all interactions with Microsoft Graph API for OneDrive operations.
Replaces the unmaintained octo-onedrive library with updated Graph API compatibility.
"""

import base64
import logging
import os
import threading
import urllib.parse
from typing import Optional, Callable, Dict, Any

import requests
from cryptography.fernet import Fernet, InvalidToken
from dateutil.parser import parse
from msal import PublicClientApplication, SerializableTokenCache

GRAPH_URL = "https://graph.microsoft.com/v1.0"
REQUEST_TIMEOUT = 5  # Seconds
UNKNOWN_ERROR = "Unknown error, check octoprint.log for details"
CHUNK_SIZE = 1024 * 320 * 16  # 5MB chunks for upload


class AuthInProgressError(Exception):
    """Raised when an auth flow is already in progress"""
    pass


class PersistentTokenStore(SerializableTokenCache):
    """
    Subclasses the default TokenCache to write it out to a file path.
    Optionally encrypts the cache file.
    """

    def __init__(
        self,
        path: str,
        secret_key: Optional[str] = None,
        logger: str = "octo_onedrive.PersistentTokenStore",
    ):
        super().__init__()
        self.path = path
        self._logger = logging.getLogger(logger)

        if secret_key is not None and not isinstance(secret_key, str):
            raise TypeError("secret_key must be a string, or None")

        if secret_key is None:
            self._logger.warning("No secret key provided, token cache will be unencrypted")

        self.secret_key = secret_key

    def save(self) -> None:
        """Serialize and save the current cache state to disk."""
        if self.has_state_changed:
            try:
                os.makedirs(os.path.dirname(self.path), exist_ok=True)
                content = self.serialize()
                if self.secret_key:
                    content = self._encrypt(content)
                with open(self.path, "wb") as file:
                    file.write(content)
            except Exception as e:
                self._logger.error("Failed to write token cache")
                self._logger.exception(e)

    def load(self) -> None:
        """Load and deserialize the cache state from disk."""
        if os.path.exists(self.path):
            try:
                with open(self.path, "rb") as file:
                    content = file.read()
                    if self.secret_key:
                        content = self._decrypt(content)
                    self.deserialize(content)
            except Exception as e:
                self._logger.error("Failed to read token cache")
                self._logger.exception(e)
                self.deserialize("{}")
        else:
            self.deserialize("{}")

    def add(self, event, **kwargs):
        """Override to persist cache when new tokens are added."""
        super().add(event, **kwargs)
        self.save()

    def modify(self, credential_type, old_entry, new_key_value_pairs):
        """Override to persist cache when tokens are modified."""
        super().modify(credential_type, old_entry, new_key_value_pairs)
        self.save()

    def remove_item(self, item):
        """Override to persist cache when items are removed."""
        super().remove_item(item)
        self.save()

    def _encrypt(self, content: str) -> bytes:
        """Encrypt the cache content."""
        try:
            # Generate a deterministic key from the secret_key
            key = base64.urlsafe_b64encode(
                self.secret_key.encode().ljust(32)[:32]
            )
            cipher = Fernet(key)
            return cipher.encrypt(content.encode())
        except Exception as e:
            self._logger.error("Failed to encrypt token cache")
            self._logger.exception(e)
            return content.encode()

    def _decrypt(self, content: bytes) -> str:
        """Decrypt the cache content."""
        try:
            key = base64.urlsafe_b64encode(
                self.secret_key.encode().ljust(32)[:32]
            )
            cipher = Fernet(key)
            return cipher.decrypt(content).decode()
        except InvalidToken:
            self._logger.error("Failed to decrypt token cache - invalid token")
            return "{}"
        except Exception as e:
            self._logger.error("Failed to decrypt token cache")
            self._logger.exception(e)
            return "{}"


class OneDriveComm:
    """
    Handles communication with Microsoft Graph API for OneDrive operations.
    """

    def __init__(
        self,
        app_id: str,
        scopes: list,
        token_cache_path: str,
        authority: str = "https://login.microsoftonline.com/common",
        encryption_key: Optional[str] = None,
        logger: str = "octoprint.plugins.onedrive_backup.OneDriveComm",
    ):
        """
        Initialize OneDrive communicator.

        Parameters
        ----------
        app_id : str
            Azure Application ID
        scopes : list
            List of OAuth scopes to request
        token_cache_path : str
            Path to store the token cache
        authority : str
            Azure authority URL (default: common tenant)
        encryption_key : str, optional
            Encryption key for token cache
        logger : str
            Logger name
        """
        self._logger = logging.getLogger(logger)
        self.scopes = scopes
        self.authority = authority
        self.flow_in_progress = None
        self.auth_poll_thread = None

        # Initialize token cache
        self.cache = PersistentTokenStore(
            token_cache_path, secret_key=encryption_key, logger=logger
        )
        self.cache.load()

        # Initialize MSAL client
        self.client = PublicClientApplication(
            client_id=app_id,
            authority=authority,
            token_cache=self.cache,
        )

    def begin_auth_flow(
        self,
        on_success: Callable = None,
        on_error: Callable = None,
    ) -> Dict[str, Any]:
        """
        Begin the device flow authentication process.

        Parameters
        ----------
        on_success : callable
            Callback when auth succeeds
        on_error : callable
            Callback when auth fails

        Returns
        -------
        dict
            Device flow containing verification_uri and user_code
        """
        if not self.auth_poll_thread or not self.auth_poll_thread.is_alive():
            # Remove any previous accounts
            self.forget_account()

            # Initiate device flow
            self.flow_in_progress = self.client.initiate_device_flow(
                scopes=self.scopes
            )
            self._logger.info("Device flow initiated")

            # Start polling thread
            self.auth_poll_thread = threading.Thread(
                target=self.acquire_token,
                kwargs={
                    "flow": self.flow_in_progress,
                    "on_success": on_success,
                    "on_error": on_error,
                },
                daemon=True,
            )
            self.auth_poll_thread.start()

            return self.flow_in_progress
        else:
            raise AuthInProgressError("Auth flow is already in progress")

    def acquire_token(
        self,
        flow: dict,
        on_success: Optional[Callable] = None,
        on_error: Optional[Callable] = None,
    ) -> None:
        """
        Poll for token acquisition using device flow.

        Parameters
        ----------
        flow : dict
            Device flow from initiate_device_flow
        on_success : callable
            Callback on success
        on_error : callable
            Callback on error
        """
        response = self.client.acquire_token_by_device_flow(flow)

        if "access_token" in response:
            self._logger.info("Successfully authenticated")
            if callable(on_success):
                on_success(response)
            self.flow_in_progress = None
        else:
            self._logger.error(f"Auth failed: {response}")
            if callable(on_error):
                on_error(response)

        self.cache.save()

    def list_accounts(self) -> list:
        """
        Get list of authenticated accounts.

        Returns
        -------
        list
            List of account usernames
        """
        try:
            accounts = self.client.get_accounts()
            return [account["username"] for account in accounts]
        except Exception as e:
            self._logger.error(f"Error listing accounts: {e}")
            return []

    def forget_account(self) -> None:
        """Remove all authenticated accounts."""
        try:
            accounts = self.client.get_accounts()
            for account in accounts:
                self.client.remove_account(account)
            self.cache.save()
            self._logger.info("Account forgotten")
        except Exception as e:
            self._logger.error(f"Error forgetting account: {e}")

    def list_folders(self, folder_id: Optional[str] = None) -> Dict[str, Any]:
        """
        List folders in a given location.

        Parameters
        ----------
        folder_id : str, optional
            Parent folder ID (if None, lists root)

        Returns
        -------
        dict
            Dictionary with 'folders' key containing list of folders
        """
        response = self._list(folder_id)

        if "error" in response:
            return response

        folders = []
        for item in response:
            if "folder" in item:
                try:
                    path = item.get("parentReference", {}).get("path", "/root:")
                    path = path.split("/root:")[-1] if "/root:" in path else ""
                    folder_path = path + "/" + item["name"]

                    folders.append(
                        {
                            "name": item["name"],
                            "id": item["id"],
                            "parent": item["parentReference"]["id"],
                            "childCount": item["folder"].get("childCount", 0),
                            "path": folder_path,
                        }
                    )
                except (KeyError, AttributeError) as e:
                    self._logger.warning(f"Error processing folder item: {e}")
                    continue

        return {
            "root": folder_id is None,
            "folders": folders,
        }

    def _list(self, item_id: Optional[str] = None) -> Any:
        """
        List items in a given location (internal method).

        Parameters
        ----------
        item_id : str, optional
            Item ID (if None, lists root)

        Returns
        -------
        list or dict
            List of items or error dict
        """
        accounts = self.client.get_accounts()
        if not accounts:
            self._logger.error("No accounts registered, can't list folders")
            return {"error": {"message": "No accounts registered"}}

        location = "root" if item_id is None else f"items/{item_id}"

        def request_list(url: str) -> Any:
            """Recursively request list items, handling pagination."""
            resp = self._graph_request(url)

            if isinstance(resp, dict) and "error" in resp:
                return {"error": resp["error"]}

            if not isinstance(resp, dict):
                return resp

            result = resp.get("value", [])

            # Handle pagination
            if "@odata.nextLink" in resp:
                next_result = request_list(resp["@odata.nextLink"])
                if isinstance(next_result, dict) and "error" in next_result:
                    return next_result
                if isinstance(next_result, list):
                    result.extend(next_result)

            return result

        data = request_list(f"/me/drive/{location}/children")

        if isinstance(data, dict) and "error" in data:
            return {"error": data["error"]}

        return data

    def upload_file(
        self,
        file_name: str,
        file_path: str,
        upload_location_id: str,
        on_upload_progress: Callable = lambda x: None,
        on_upload_complete: Callable = lambda: None,
        on_upload_error: Callable = lambda x: None,
    ) -> Optional[Dict[str, str]]:
        """
        Upload a file to OneDrive.

        Parameters
        ----------
        file_name : str
            Name for the file on OneDrive
        file_path : str
            Local path to the file
        upload_location_id : str
            OneDrive folder ID for upload destination
        on_upload_progress : callable
            Callback for upload progress (0-100)
        on_upload_complete : callable
            Callback when upload completes
        on_upload_error : callable
            Callback on error

        Returns
        -------
        dict or None
            Upload result with id and eTag, or None on error
        """
        accounts = self.client.get_accounts()
        if not accounts:
            self._logger.error("No accounts registered, can't upload file")
            on_upload_error("No account authenticated")
            return None

        if not callable(on_upload_progress):
            raise TypeError("on_upload_progress must be callable")
        if not callable(on_upload_complete):
            raise TypeError("on_upload_complete must be callable")
        if not callable(on_upload_error):
            raise TypeError("on_upload_error must be callable")

        # Validate file exists
        if not os.path.exists(file_path):
            self._logger.error(f"File {file_path} does not exist")
            on_upload_error(f"File not found: {file_path}")
            return None

        file_size = os.path.getsize(file_path)
        self._logger.info(f"Starting upload session for {file_name} ({file_size} bytes)")

        # For small files, use simple upload
        if file_size < 4 * 1024 * 1024:  # 4MB threshold
            return self._upload_simple(
                file_name, file_path, upload_location_id, on_upload_error
            )

        # For larger files, use session-based upload
        return self._upload_session(
            file_name,
            file_path,
            upload_location_id,
            file_size,
            on_upload_progress,
            on_upload_complete,
            on_upload_error,
        )

    def _upload_simple(
        self,
        file_name: str,
        file_path: str,
        upload_location_id: str,
        on_upload_error: Callable,
    ) -> Optional[Dict[str, str]]:
        """
        Simple upload for small files (less than 4MB).

        Uses PUT request directly without creating an upload session.
        """
        try:
            self._logger.debug("Using simple upload for small file")

            with open(file_path, "rb") as f:
                file_content = f.read()

            # URL for simple upload
            upload_url = (
                f"/me/drive/items/{upload_location_id}:/"
                f"{urllib.parse.quote(file_name)}:/content"
            )

            response = self._graph_request(
                upload_url,
                method="PUT",
                data=file_content,
                timeout=30,
            )

            if isinstance(response, dict) and "error" in response:
                error_msg = response.get("error", {}).get("message", "Unknown error")
                self._logger.error(f"Simple upload failed: {error_msg}")
                on_upload_error(error_msg)
                return None

            self._logger.info("Simple upload complete")
            return {
                "id": response.get("id", ""),
                "eTag": response.get("eTag", ""),
            }

        except Exception as e:
            self._logger.error(f"Error in simple upload: {e}")
            on_upload_error(str(e))
            return None

    def _upload_session(
        self,
        file_name: str,
        file_path: str,
        upload_location_id: str,
        file_size: int,
        on_upload_progress: Callable,
        on_upload_complete: Callable,
        on_upload_error: Callable,
    ) -> Optional[Dict[str, str]]:
        """
        Session-based upload for large files (greater than 4MB).

        Creates an upload session and uploads file in chunks.
        """
        try:
            self._logger.debug("Creating upload session")

            # Prepare upload session request
            session_data = {
                "item": {
                    "@microsoft.graph.conflictBehavior": "rename",
                    "name": file_name,
                }
            }

            # Try new endpoint format first, fall back to old format if needed
            endpoints_to_try = [
                # New format (post-July 2024)
                f"/me/drive/items/{upload_location_id}:/{urllib.parse.quote(file_name)}:/createUploadSession",
                # Alternative format
                f"/drive/items/{upload_location_id}:/{urllib.parse.quote(file_name)}:/createUploadSession",
            ]

            upload_session = None
            for endpoint in endpoints_to_try:
                self._logger.debug(f"Trying upload session endpoint: {endpoint}")

                upload_session = self._graph_request(
                    endpoint,
                    method="POST",
                    data=session_data,
                )

                if upload_session and "uploadUrl" in upload_session:
                    self._logger.info(f"Upload session created via {endpoint}")
                    break
                elif upload_session and "error" not in upload_session:
                    # Some other response, might still be valid
                    break

            if not upload_session or (
                isinstance(upload_session, dict)
                and ("error" in upload_session or "uploadUrl" not in upload_session)
            ):
                error_msg = (
                    upload_session.get("error", {}).get("message", "Unknown error")
                    if isinstance(upload_session, dict)
                    else "Failed to create upload session"
                )
                self._logger.error(f"Error creating upload session: {error_msg}")

                # Provide helpful diagnostic info
                if "400" in str(error_msg) or "invalidRequest" in str(error_msg):
                    error_msg += (
                        " - This may indicate a Microsoft Graph API change. "
                        "Try using simple upload or re-authenticating."
                    )

                on_upload_error(error_msg)
                return None

            upload_url = upload_session.get("uploadUrl")
            if not upload_url:
                on_upload_error("No upload URL returned from session")
                return None

            self._logger.info("Uploading file to OneDrive...")

            # Upload file in chunks
            chunk_size = CHUNK_SIZE
            number_of_chunks = (file_size + chunk_size - 1) // chunk_size

            self._logger.debug(
                f"Uploading {file_size} bytes in {number_of_chunks} chunks "
                f"(chunk size: {chunk_size})"
            )

            try:
                with open(file_path, "rb") as f:
                    chunk_num = 0
                    while f.tell() < file_size:
                        chunk_num += 1

                        # Calculate chunk boundaries
                        chunk_start = f.tell()
                        chunk_data = f.read(chunk_size)
                        chunk_end = f.tell() - 1

                        self._logger.debug(
                            f"Uploading chunk {chunk_num}/{number_of_chunks} "
                            f"(bytes {chunk_start}-{chunk_end})"
                        )

                        # Prepare headers
                        headers = self._get_headers()
                        headers.update(
                            {
                                "Content-Range": (
                                    f"bytes {chunk_start}-{chunk_end}/{file_size}"
                                ),
                                "Content-Length": str(len(chunk_data)),
                            }
                        )

                        # Upload chunk
                        response = self._graph_request(
                            upload_url,
                            method="PUT",
                            data=chunk_data,
                            headers=headers,
                            timeout=60,
                            skip_graph_url=True,  # Upload URL is absolute
                        )

                        if isinstance(response, dict) and "error" in response:
                            error_msg = (
                                response.get("error", {}).get("message", "Unknown error")
                            )
                            self._logger.error(f"Error uploading chunk {chunk_num}: {error_msg}")
                            on_upload_error(error_msg)
                            return None

                        # Report progress
                        progress = (100 * chunk_num) // number_of_chunks
                        on_upload_progress(progress)
                        self._logger.debug(f"Chunk {chunk_num} uploaded, progress: {progress}%")

            except Exception as e:
                self._logger.error(f"Error uploading file: {e}")
                on_upload_error(str(e))
                return None

            self._logger.info("Upload complete")
            on_upload_complete()

            return {
                "id": response.get("id", ""),
                "eTag": response.get("eTag", ""),
            }

        except Exception as e:
            self._logger.error(f"Unexpected error in upload_session: {e}")
            on_upload_error(str(e))
            return None

    def _get_headers(self) -> Dict[str, str]:
        """
        Get headers including authorization token.

        Returns
        -------
        dict
            HTTP headers with authorization
        """
        try:
            accounts = self.client.get_accounts()
            if not accounts:
                self._logger.error("No account available for token")
                return {}

            token_result = self.client.acquire_token_silent_with_error(
                scopes=self.scopes,
                account=accounts[0],
            )

            if "error" in token_result:
                self._logger.error(f"Token error: {token_result['error']}")
                return {}

            if token_result is None:
                self._logger.error("No token available")
                return {}

            return {
                "Authorization": f"Bearer {token_result['access_token']}",
            }

        except Exception as e:
            self._logger.error(f"Error getting headers: {e}")
            return {}

    def _graph_request(
        self,
        endpoint: str,
        method: str = "GET",
        data: Any = None,
        headers: Optional[Dict[str, str]] = None,
        timeout: int = REQUEST_TIMEOUT,
        skip_graph_url: bool = False,
    ) -> Dict[str, Any]:
        """
        Make a request to Microsoft Graph API.

        Parameters
        ----------
        endpoint : str
            API endpoint (path)
        method : str
            HTTP method
        data : any
            Request body data (will be JSON-encoded if dict)
        headers : dict
            Additional headers
        timeout : int
            Request timeout in seconds
        skip_graph_url : bool
            If True, endpoint is used as absolute URL (for upload URLs)

        Returns
        -------
        dict
            API response or error dict
        """
        try:
            # Build URL
            if skip_graph_url:
                url = endpoint
            else:
                url = f"{GRAPH_URL}{endpoint}"

            # Prepare headers
            req_headers = self._get_headers()
            if headers:
                req_headers.update(headers)

            if "Content-Type" not in req_headers and method in ("POST", "PUT"):
                req_headers["Content-Type"] = "application/json"

            # Prepare body
            if isinstance(data, (dict, list)):
                import json
                body = json.dumps(data)
            else:
                body = data

            # Make request
            self._logger.debug(f"{method} {url}")

            response = requests.request(
                method=method,
                url=url,
                headers=req_headers,
                data=body,
                timeout=timeout,
            )

            # Check for HTTP errors
            if response.status_code >= 400:
                try:
                    error_data = response.json()
                    self._logger.error(
                        f"Graph API error {response.status_code}: "
                        f"{error_data.get('error', {}).get('message', 'Unknown')}"
                    )
                    return error_data
                except Exception:
                    self._logger.error(
                        f"Graph API error {response.status_code}: {response.text}"
                    )
                    return {
                        "error": {
                            "code": str(response.status_code),
                            "message": response.text,
                        }
                    }

            # Parse response
            if response.text:
                try:
                    return response.json()
                except Exception as e:
                    self._logger.warning(f"Could not parse JSON response: {e}")
                    return {"value": response.text}
            else:
                return {}

        except requests.RequestException as e:
            self._logger.error(f"Request error: {e}")
            return {"error": {"message": str(e)}}
        except Exception as e:
            self._logger.error(f"Unexpected error in graph request: {e}")
            return {"error": {"message": UNKNOWN_ERROR}}
