import threading
import os
import logging
from typing import Optional

import octoprint.plugin

from .api import Commands, OneDriveBackupApi
from .onedrive_comm import OneDriveComm

APPLICATION_ID = "1fbab959-f7f1-43c4-a800-5f7f58eb068f"  # Not a secret :)

# WHEN CHANGING SCOPES we will need to think of a way to re-auth, hopefully this isn't needed...
SCOPES = [
    # "User.ReadBasic.All",  Seemed to cause issues looking up the AT from cache.
    # See https://github.com/AzureAD/microsoft-authentication-library-for-python/issues/450
    "Files.ReadWrite",
]

_logger = logging.getLogger(__name__)


class OneDriveBackupPlugin(
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.SimpleApiPlugin,
    octoprint.plugin.EventHandlerPlugin,
):
    def __init__(self):
        super().__init__()
        self.onedrive: Optional[OneDriveComm] = None
        self.api: Optional[OneDriveBackupApi] = None

    def initialize(self):
        try:
            self.api = OneDriveBackupApi(self)

            self.onedrive = OneDriveComm(
                app_id=APPLICATION_ID,
                scopes=SCOPES,
                token_cache_path=os.path.join(self.get_plugin_data_folder(), "cache.bin"),
                encryption_key=self._settings.global_get(["server", "secretKey"]),
                logger="octoprint.plugins.onedrive_backup.OneDriveComm"
            )
            _logger.info("OneDrive plugin initialized successfully")
        except Exception as e:
            _logger.error(f"Failed to initialize OneDrive plugin: {e}", exc_info=True)
            raise

    # SimpleApiPlugin
    def on_api_get(self, request):
        return self.api.on_api_get(request)

    def on_api_command(self, command, data):
        return self.api.on_api_command(command, data)

    def get_api_commands(self):
        return Commands.list_commands()

    def send_message(self, msg_type: str, msg_content: dict):
        self._plugin_manager.send_plugin_message(
            "onedrive_backup", {"type": msg_type, "content": msg_content}
        )

    def on_event(self, event, payload):
        if event == "plugin_backup_backup_created":
            # Check if a folder has been configured
            folder_id = self._settings.get(["folder", "id"])
            if folder_id:
                def upload_with_error_handling():
                    result = None
                    try:
                        # Perform upload; keep the result for diagnostics if needed
                        result = self.onedrive.upload_file(
                            file_name=payload.get("name"),
                            file_path=payload.get("path"),
                            upload_location_id=folder_id,
                            on_upload_progress=self.on_upload_progress,
                            on_upload_complete=self.on_upload_complete,
                            on_upload_error=self.on_upload_error,
                        )
                    except Exception as e:
                        _logger.error(f"Unexpected error during backup upload: {e}", exc_info=True)
                        try:
                            self.on_upload_error(e)
                        except Exception:
                            pass

                    # After upload (regardless of success), reconcile OneDrive folder with local backups
                    try:
                        local_dir = os.path.dirname(payload.get("path", ""))
                        if local_dir and os.path.isdir(local_dir):
                            local_files = set(
                                f for f in os.listdir(local_dir) if os.path.isfile(os.path.join(local_dir, f))
                            )
                        else:
                            local_files = set()

                        remote_items = self.onedrive.list_files(folder_id)

                        if isinstance(remote_items, dict) and "error" in remote_items:
                            _logger.warning(f"Unable to list OneDrive files for cleanup: {remote_items}")
                        else:
                            for item in remote_items:
                                name = item.get("name")
                                if not name:
                                    continue
                                if name not in local_files:
                                    try:
                                        deleted = self.onedrive.delete_file(file_name=name, folder_id=folder_id)
                                        if not deleted:
                                            _logger.warning(f"Failed to delete remote backup '{name}'")
                                    except Exception as e:
                                        _logger.error(f"Error deleting remote file '{name}': {e}", exc_info=True)
                    except Exception as e:
                        _logger.error(f"Error during OneDrive cleanup: {e}", exc_info=True)

                t = threading.Thread(target=upload_with_error_handling)
                t.daemon = True
                t.start()
            else:
                _logger.debug("Backup created but no OneDrive folder configured")

    def on_upload_progress(self, progress):
        # Called by the onedrive client for every chunk uploaded
        self.send_message("upload_progress", {"progress": progress})

    def on_upload_error(self, error):
        # If the upload fails, this will be called so we can notify the user
        _logger.error(f"OneDrive upload error: {error}", exc_info=True)
        error_msg = str(error)

        # Provide helpful diagnostics for common errors
        if "400" in error_msg or "Bad Request" in error_msg:
            error_msg += " (This may be due to Microsoft Graph API changes. Please check your folder selection)"
        elif "401" in error_msg or "Unauthorized" in error_msg:
            error_msg += " (Authentication issue. Please re-authenticate)"
        elif "404" in error_msg:
            error_msg += " (Folder not found. Please check your folder selection)"

        self.send_message("upload_error", {"error": error_msg})

    def on_upload_complete(self):
        self.send_message("upload_complete", {})

    # SettingsPlugin
    def get_settings_defaults(self):
        """
        Quite basic settings as the authentication tokens are stored separately, outside config.yaml.
        """
        return {
            "folder": {"id": "", "path": ""},
        }

    # AssetPlugin
    def get_assets(self):
        return {"js": ["dist/onedrive_backup.js"], "css": ["dist/onedrive_backup.css"]}

    # Software Update hook
    def get_update_information(self):
        return {
            "onedrive_backup": {
                "displayName": "OneDrive Backup",
                "displayVersion": self._plugin_version,
                "type": "github_release",
                "user": "cp2004",
                "repo": "OctoPrint-OneDrive-Backup",
                "stable_branch": {
                    "name": "Stable",
                    "branch": "main",
                    "comittish": ["main"],
                },
                "prerelease_branches": [
                    {
                        "name": "Release Candidate",
                        "branch": "pre-release",
                        "comittish": ["pre-release", "main"],
                    }
                ],
                "current": self._plugin_version,
                "pip": "https://github.com/cp2004/OctoPrint-OneDrive-Backup/releases/download/{target_version}/release.zip",
            }
        }

    def backup_excludes_hook(self, *args, **kwargs):
        """
        Excluding the MS Graph API token from the backup. Unnecessary security risk, if someone was to share
        the backup it could partly compromise their MS account.
        """
        return ["cache.bin"]


from ._version import get_versions

__plugin_name__ = "OneDrive Backup"
__plugin_version__ = get_versions()["version"]
__plugin_pythoncompat__ = ">=3.7,<4"


def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = OneDriveBackupPlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information,
        "octoprint.plugin.backup.additional_excludes": __plugin_implementation__.backup_excludes_hook,
    }
