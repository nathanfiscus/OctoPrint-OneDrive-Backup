(() => {
  var Xf = Object.create;
  var ql = Object.defineProperty;
  var Zf = Object.getOwnPropertyDescriptor;
  var Jf = Object.getOwnPropertyNames;
  var bf = Object.getPrototypeOf,
    ed = Object.prototype.hasOwnProperty;
  var he = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t),
    t.exports
  );
  var td = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Jf(t))
        !ed.call(e, i) &&
          i !== n &&
          ql(e, i, {
            get: () => t[i],
            enumerable: !(r = Zf(t, i)) || r.enumerable,
          });
    return e;
  };
  var I = (e, t, n) => (
    (n = e != null ? Xf(bf(e)) : {}),
    td(
      t || !e || !e.__esModule
        ? ql(n, "default", { value: e, enumerable: !0 })
        : n,
      e,
    )
  );
  var Ir = he(($h, Hl) => {
    "use strict";
    var Vl = Object.getOwnPropertySymbols,
      nd = Object.prototype.hasOwnProperty,
      rd = Object.prototype.propertyIsEnumerable;
    function id(e) {
      if (e == null)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined",
        );
      return Object(e);
    }
    function od() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5"))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (o) {
          return t[o];
        });
        if (r.join("") !== "0123456789") return !1;
        var i = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (o) {
            i[o] = o;
          }),
          Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
        );
      } catch {
        return !1;
      }
    }
    Hl.exports = od()
      ? Object.assign
      : function (e, t) {
          for (var n, r = id(e), i, o = 1; o < arguments.length; o++) {
            n = Object(arguments[o]);
            for (var u in n) nd.call(n, u) && (r[u] = n[u]);
            if (Vl) {
              i = Vl(n);
              for (var l = 0; l < i.length; l++)
                rd.call(n, i[l]) && (r[i[l]] = n[i[l]]);
            }
          }
          return r;
        };
  });
  var ls = he((M) => {
    "use strict";
    var uo = Ir(),
      Ut = 60103,
      Yl = 60106;
    M.Fragment = 60107;
    M.StrictMode = 60108;
    M.Profiler = 60114;
    var Gl = 60109,
      Xl = 60110,
      Zl = 60112;
    M.Suspense = 60113;
    var Jl = 60115,
      bl = 60116;
    typeof Symbol == "function" &&
      Symbol.for &&
      ((me = Symbol.for),
      (Ut = me("react.element")),
      (Yl = me("react.portal")),
      (M.Fragment = me("react.fragment")),
      (M.StrictMode = me("react.strict_mode")),
      (M.Profiler = me("react.profiler")),
      (Gl = me("react.provider")),
      (Xl = me("react.context")),
      (Zl = me("react.forward_ref")),
      (M.Suspense = me("react.suspense")),
      (Jl = me("react.memo")),
      (bl = me("react.lazy")));
    var me,
      Wl = typeof Symbol == "function" && Symbol.iterator;
    function ud(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (Wl && e[Wl]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    function _n(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var es = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      ts = {};
    function jt(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = ts),
        (this.updater = n || es));
    }
    jt.prototype.isReactComponent = {};
    jt.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(_n(85));
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    jt.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function ns() {}
    ns.prototype = jt.prototype;
    function lo(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = ts),
        (this.updater = n || es));
    }
    var so = (lo.prototype = new ns());
    so.constructor = lo;
    uo(so, jt.prototype);
    so.isPureReactComponent = !0;
    var ao = { current: null },
      rs = Object.prototype.hasOwnProperty,
      is = { key: !0, ref: !0, __self: !0, __source: !0 };
    function os(e, t, n) {
      var r,
        i = {},
        o = null,
        u = null;
      if (t != null)
        for (r in (t.ref !== void 0 && (u = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
          rs.call(t, r) && !is.hasOwnProperty(r) && (i[r] = t[r]);
      var l = arguments.length - 2;
      if (l === 1) i.children = n;
      else if (1 < l) {
        for (var s = Array(l), a = 0; a < l; a++) s[a] = arguments[a + 2];
        i.children = s;
      }
      if (e && e.defaultProps)
        for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
      return {
        $$typeof: Ut,
        type: e,
        key: o,
        ref: u,
        props: i,
        _owner: ao.current,
      };
    }
    function ld(e, t) {
      return {
        $$typeof: Ut,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function co(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Ut;
    }
    function sd(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (n) {
          return t[n];
        })
      );
    }
    var Kl = /\/+/g;
    function oo(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? sd("" + e.key)
        : t.toString(36);
    }
    function Ar(e, t, n, r, i) {
      var o = typeof e;
      (o === "undefined" || o === "boolean") && (e = null);
      var u = !1;
      if (e === null) u = !0;
      else
        switch (o) {
          case "string":
          case "number":
            u = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case Ut:
              case Yl:
                u = !0;
            }
        }
      if (u)
        return (
          (u = e),
          (i = i(u)),
          (e = r === "" ? "." + oo(u, 0) : r),
          Array.isArray(i)
            ? ((n = ""),
              e != null && (n = e.replace(Kl, "$&/") + "/"),
              Ar(i, t, n, "", function (a) {
                return a;
              }))
            : i != null &&
              (co(i) &&
                (i = ld(
                  i,
                  n +
                    (!i.key || (u && u.key === i.key)
                      ? ""
                      : ("" + i.key).replace(Kl, "$&/") + "/") +
                    e,
                )),
              t.push(i)),
          1
        );
      if (((u = 0), (r = r === "" ? "." : r + ":"), Array.isArray(e)))
        for (var l = 0; l < e.length; l++) {
          o = e[l];
          var s = r + oo(o, l);
          u += Ar(o, t, n, s, i);
        }
      else if (((s = ud(e)), typeof s == "function"))
        for (e = s.call(e), l = 0; !(o = e.next()).done; )
          ((o = o.value), (s = r + oo(o, l++)), (u += Ar(o, t, n, s, i)));
      else if (o === "object")
        throw (
          (t = "" + e),
          Error(
            _n(
              31,
              t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t,
            ),
          )
        );
      return u;
    }
    function Qr(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        Ar(e, r, "", "", function (o) {
          return t.call(n, o, i++);
        }),
        r
      );
    }
    function ad(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          (e._status = 0),
          (e._result = t),
          t.then(
            function (n) {
              e._status === 0 &&
                ((n = n.default), (e._status = 1), (e._result = n));
            },
            function (n) {
              e._status === 0 && ((e._status = 2), (e._result = n));
            },
          ));
      }
      if (e._status === 1) return e._result;
      throw e._result;
    }
    var us = { current: null };
    function je() {
      var e = us.current;
      if (e === null) throw Error(_n(321));
      return e;
    }
    var cd = {
      ReactCurrentDispatcher: us,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: ao,
      IsSomeRendererActing: { current: !1 },
      assign: uo,
    };
    M.Children = {
      map: Qr,
      forEach: function (e, t, n) {
        Qr(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          Qr(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          Qr(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!co(e)) throw Error(_n(143));
        return e;
      },
    };
    M.Component = jt;
    M.PureComponent = lo;
    M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cd;
    M.cloneElement = function (e, t, n) {
      if (e == null) throw Error(_n(267, e));
      var r = uo({}, e.props),
        i = e.key,
        o = e.ref,
        u = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (u = ao.current)),
          t.key !== void 0 && (i = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var l = e.type.defaultProps;
        for (s in t)
          rs.call(t, s) &&
            !is.hasOwnProperty(s) &&
            (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
      }
      var s = arguments.length - 2;
      if (s === 1) r.children = n;
      else if (1 < s) {
        l = Array(s);
        for (var a = 0; a < s; a++) l[a] = arguments[a + 2];
        r.children = l;
      }
      return {
        $$typeof: Ut,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: u,
      };
    };
    M.createContext = function (e, t) {
      return (
        t === void 0 && (t = null),
        (e = {
          $$typeof: Xl,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (e.Provider = { $$typeof: Gl, _context: e }),
        (e.Consumer = e)
      );
    };
    M.createElement = os;
    M.createFactory = function (e) {
      var t = os.bind(null, e);
      return ((t.type = e), t);
    };
    M.createRef = function () {
      return { current: null };
    };
    M.forwardRef = function (e) {
      return { $$typeof: Zl, render: e };
    };
    M.isValidElement = co;
    M.lazy = function (e) {
      return { $$typeof: bl, _payload: { _status: -1, _result: e }, _init: ad };
    };
    M.memo = function (e, t) {
      return { $$typeof: Jl, type: e, compare: t === void 0 ? null : t };
    };
    M.useCallback = function (e, t) {
      return je().useCallback(e, t);
    };
    M.useContext = function (e, t) {
      return je().useContext(e, t);
    };
    M.useDebugValue = function () {};
    M.useEffect = function (e, t) {
      return je().useEffect(e, t);
    };
    M.useImperativeHandle = function (e, t, n) {
      return je().useImperativeHandle(e, t, n);
    };
    M.useLayoutEffect = function (e, t) {
      return je().useLayoutEffect(e, t);
    };
    M.useMemo = function (e, t) {
      return je().useMemo(e, t);
    };
    M.useReducer = function (e, t, n) {
      return je().useReducer(e, t, n);
    };
    M.useRef = function (e) {
      return je().useRef(e);
    };
    M.useState = function (e) {
      return je().useState(e);
    };
    M.version = "17.0.2";
  });
  var xe = he((qh, ss) => {
    "use strict";
    ss.exports = ls();
  });
  var hs = he((D) => {
    "use strict";
    var $t, Rn, $r, go;
    typeof performance == "object" && typeof performance.now == "function"
      ? ((as = performance),
        (D.unstable_now = function () {
          return as.now();
        }))
      : ((fo = Date),
        (cs = fo.now()),
        (D.unstable_now = function () {
          return fo.now() - cs;
        }));
    var as, fo, cs;
    typeof window > "u" || typeof MessageChannel != "function"
      ? ((zt = null),
        (po = null),
        (ho = function () {
          if (zt !== null)
            try {
              var e = D.unstable_now();
              (zt(!0, e), (zt = null));
            } catch (t) {
              throw (setTimeout(ho, 0), t);
            }
        }),
        ($t = function (e) {
          zt !== null ? setTimeout($t, 0, e) : ((zt = e), setTimeout(ho, 0));
        }),
        (Rn = function (e, t) {
          po = setTimeout(e, t);
        }),
        ($r = function () {
          clearTimeout(po);
        }),
        (D.unstable_shouldYield = function () {
          return !1;
        }),
        (go = D.unstable_forceFrameRate = function () {}))
      : ((fs = window.setTimeout),
        (ds = window.clearTimeout),
        typeof console < "u" &&
          ((ps = window.cancelAnimationFrame),
          typeof window.requestAnimationFrame != "function" &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
            ),
          typeof ps != "function" &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
            )),
        (Pn = !1),
        (On = null),
        (Ur = -1),
        (mo = 5),
        (vo = 0),
        (D.unstable_shouldYield = function () {
          return D.unstable_now() >= vo;
        }),
        (go = function () {}),
        (D.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (mo = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (yo = new MessageChannel()),
        (jr = yo.port2),
        (yo.port1.onmessage = function () {
          if (On !== null) {
            var e = D.unstable_now();
            vo = e + mo;
            try {
              On(!0, e) ? jr.postMessage(null) : ((Pn = !1), (On = null));
            } catch (t) {
              throw (jr.postMessage(null), t);
            }
          } else Pn = !1;
        }),
        ($t = function (e) {
          ((On = e), Pn || ((Pn = !0), jr.postMessage(null)));
        }),
        (Rn = function (e, t) {
          Ur = fs(function () {
            e(D.unstable_now());
          }, t);
        }),
        ($r = function () {
          (ds(Ur), (Ur = -1));
        }));
    var zt, po, ho, fs, ds, ps, Pn, On, Ur, mo, vo, yo, jr;
    function wo(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = (n - 1) >>> 1,
          i = e[r];
        if (i !== void 0 && 0 < zr(i, t)) ((e[r] = t), (e[n] = i), (n = r));
        else break e;
      }
    }
    function ke(e) {
      return ((e = e[0]), e === void 0 ? null : e);
    }
    function Br(e) {
      var t = e[0];
      if (t !== void 0) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, i = e.length; r < i; ) {
            var o = 2 * (r + 1) - 1,
              u = e[o],
              l = o + 1,
              s = e[l];
            if (u !== void 0 && 0 > zr(u, n))
              s !== void 0 && 0 > zr(s, u)
                ? ((e[r] = s), (e[l] = n), (r = l))
                : ((e[r] = u), (e[o] = n), (r = o));
            else if (s !== void 0 && 0 > zr(s, n))
              ((e[r] = s), (e[l] = n), (r = l));
            else break e;
          }
        }
        return t;
      }
      return null;
    }
    function zr(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n !== 0 ? n : e.id - t.id;
    }
    var Re = [],
      Ge = [],
      fd = 1,
      ve = null,
      J = 3,
      qr = !1,
      St = !1,
      Nn = !1;
    function So(e) {
      for (var t = ke(Ge); t !== null; ) {
        if (t.callback === null) Br(Ge);
        else if (t.startTime <= e)
          (Br(Ge), (t.sortIndex = t.expirationTime), wo(Re, t));
        else break;
        t = ke(Ge);
      }
    }
    function Eo(e) {
      if (((Nn = !1), So(e), !St))
        if (ke(Re) !== null) ((St = !0), $t(Co));
        else {
          var t = ke(Ge);
          t !== null && Rn(Eo, t.startTime - e);
        }
    }
    function Co(e, t) {
      ((St = !1), Nn && ((Nn = !1), $r()), (qr = !0));
      var n = J;
      try {
        for (
          So(t), ve = ke(Re);
          ve !== null &&
          (!(ve.expirationTime > t) || (e && !D.unstable_shouldYield()));
        ) {
          var r = ve.callback;
          if (typeof r == "function") {
            ((ve.callback = null), (J = ve.priorityLevel));
            var i = r(ve.expirationTime <= t);
            ((t = D.unstable_now()),
              typeof i == "function"
                ? (ve.callback = i)
                : ve === ke(Re) && Br(Re),
              So(t));
          } else Br(Re);
          ve = ke(Re);
        }
        if (ve !== null) var o = !0;
        else {
          var u = ke(Ge);
          (u !== null && Rn(Eo, u.startTime - t), (o = !1));
        }
        return o;
      } finally {
        ((ve = null), (J = n), (qr = !1));
      }
    }
    var dd = go;
    D.unstable_IdlePriority = 5;
    D.unstable_ImmediatePriority = 1;
    D.unstable_LowPriority = 4;
    D.unstable_NormalPriority = 3;
    D.unstable_Profiling = null;
    D.unstable_UserBlockingPriority = 2;
    D.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    D.unstable_continueExecution = function () {
      St || qr || ((St = !0), $t(Co));
    };
    D.unstable_getCurrentPriorityLevel = function () {
      return J;
    };
    D.unstable_getFirstCallbackNode = function () {
      return ke(Re);
    };
    D.unstable_next = function (e) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = J;
      }
      var n = J;
      J = t;
      try {
        return e();
      } finally {
        J = n;
      }
    };
    D.unstable_pauseExecution = function () {};
    D.unstable_requestPaint = dd;
    D.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = J;
      J = e;
      try {
        return t();
      } finally {
        J = n;
      }
    };
    D.unstable_scheduleCallback = function (e, t, n) {
      var r = D.unstable_now();
      switch (
        (typeof n == "object" && n !== null
          ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
          : (n = r),
        e)
      ) {
        case 1:
          var i = -1;
          break;
        case 2:
          i = 250;
          break;
        case 5:
          i = 1073741823;
          break;
        case 4:
          i = 1e4;
          break;
        default:
          i = 5e3;
      }
      return (
        (i = n + i),
        (e = {
          id: fd++,
          callback: t,
          priorityLevel: e,
          startTime: n,
          expirationTime: i,
          sortIndex: -1,
        }),
        n > r
          ? ((e.sortIndex = n),
            wo(Ge, e),
            ke(Re) === null &&
              e === ke(Ge) &&
              (Nn ? $r() : (Nn = !0), Rn(Eo, n - r)))
          : ((e.sortIndex = i), wo(Re, e), St || qr || ((St = !0), $t(Co))),
        e
      );
    };
    D.unstable_wrapCallback = function (e) {
      var t = J;
      return function () {
        var n = J;
        J = t;
        try {
          return e.apply(this, arguments);
        } finally {
          J = n;
        }
      };
    };
  });
  var vs = he((Hh, ms) => {
    "use strict";
    ms.exports = hs();
  });
  var nf = he((Ce) => {
    "use strict";
    var Qi = xe(),
      j = Ir(),
      K = vs();
    function E(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!Qi) throw Error(E(227));
    var Na = new Set(),
      or = {};
    function Mt(e, t) {
      (an(e, t), an(e + "Capture", t));
    }
    function an(e, t) {
      for (or[e] = t, e = 0; e < t.length; e++) Na.add(t[e]);
    }
    var He = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      pd =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      ys = Object.prototype.hasOwnProperty,
      gs = {},
      ws = {};
    function hd(e) {
      return ys.call(ws, e)
        ? !0
        : ys.call(gs, e)
          ? !1
          : pd.test(e)
            ? (ws[e] = !0)
            : ((gs[e] = !0), !1);
    }
    function md(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return r
            ? !1
            : n !== null
              ? !n.acceptsBooleans
              : ((e = e.toLowerCase().slice(0, 5)),
                e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function vd(e, t, n, r) {
      if (t === null || typeof t > "u" || md(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function oe(e, t, n, r, i, o, u) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = u));
    }
    var X = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        X[e] = new oe(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      X[t] = new oe(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        X[e] = new oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    );
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      X[e] = new oe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        X[e] = new oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      X[e] = new oe(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      X[e] = new oe(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      X[e] = new oe(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      X[e] = new oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Mu = /[\-:]([a-z])/g;
    function Tu(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Mu, Tu);
        X[t] = new oe(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Mu, Tu);
        X[t] = new oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Mu, Tu);
      X[t] = new oe(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      X[e] = new oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    X.xlinkHref = new oe(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      X[e] = new oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Du(e, t, n, r) {
      var i = X.hasOwnProperty(t) ? X[t] : null,
        o =
          i !== null
            ? i.type === 0
            : r
              ? !1
              : !(
                  !(2 < t.length) ||
                  (t[0] !== "o" && t[0] !== "O") ||
                  (t[1] !== "n" && t[1] !== "N")
                );
      o ||
        (vd(t, n, i, r) && (n = null),
        r || i === null
          ? hd(t) &&
            (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((i = i.type),
                  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Tt = Qi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      Bn = 60103,
      Ct = 60106,
      Ze = 60107,
      Lu = 60108,
      Kn = 60114,
      Iu = 60109,
      Qu = 60110,
      Ai = 60112,
      Yn = 60113,
      pi = 60120,
      Ui = 60115,
      Au = 60116,
      Uu = 60121,
      ju = 60128,
      Fa = 60129,
      zu = 60130,
      Ho = 60131;
    typeof Symbol == "function" &&
      Symbol.for &&
      ((V = Symbol.for),
      (Bn = V("react.element")),
      (Ct = V("react.portal")),
      (Ze = V("react.fragment")),
      (Lu = V("react.strict_mode")),
      (Kn = V("react.profiler")),
      (Iu = V("react.provider")),
      (Qu = V("react.context")),
      (Ai = V("react.forward_ref")),
      (Yn = V("react.suspense")),
      (pi = V("react.suspense_list")),
      (Ui = V("react.memo")),
      (Au = V("react.lazy")),
      (Uu = V("react.block")),
      V("react.scope"),
      (ju = V("react.opaque.id")),
      (Fa = V("react.debug_trace_mode")),
      (zu = V("react.offscreen")),
      (Ho = V("react.legacy_hidden")));
    var V,
      Ss = typeof Symbol == "function" && Symbol.iterator;
    function Fn(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (Ss && e[Ss]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var xo;
    function qn(e) {
      if (xo === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          xo = (t && t[1]) || "";
        }
      return (
        `
` +
        xo +
        e
      );
    }
    var ko = !1;
    function Vr(e, t) {
      if (!e || ko) return "";
      ko = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (s) {
              var r = s;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (s) {
              r = s;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (s) {
            r = s;
          }
          e();
        }
      } catch (s) {
        if (s && r && typeof s.stack == "string") {
          for (
            var i = s.stack.split(`
`),
              o = r.stack.split(`
`),
              u = i.length - 1,
              l = o.length - 1;
            1 <= u && 0 <= l && i[u] !== o[l];
          )
            l--;
          for (; 1 <= u && 0 <= l; u--, l--)
            if (i[u] !== o[l]) {
              if (u !== 1 || l !== 1)
                do
                  if ((u--, l--, 0 > l || i[u] !== o[l]))
                    return (
                      `
` + i[u].replace(" at new ", " at ")
                    );
                while (1 <= u && 0 <= l);
              break;
            }
        }
      } finally {
        ((ko = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
    }
    function yd(e) {
      switch (e.tag) {
        case 5:
          return qn(e.type);
        case 16:
          return qn("Lazy");
        case 13:
          return qn("Suspense");
        case 19:
          return qn("SuspenseList");
        case 0:
        case 2:
        case 15:
          return ((e = Vr(e.type, !1)), e);
        case 11:
          return ((e = Vr(e.type.render, !1)), e);
        case 22:
          return ((e = Vr(e.type._render, !1)), e);
        case 1:
          return ((e = Vr(e.type, !0)), e);
        default:
          return "";
      }
    }
    function Jt(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ze:
          return "Fragment";
        case Ct:
          return "Portal";
        case Kn:
          return "Profiler";
        case Lu:
          return "StrictMode";
        case Yn:
          return "Suspense";
        case pi:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Qu:
            return (e.displayName || "Context") + ".Consumer";
          case Iu:
            return (e._context.displayName || "Context") + ".Provider";
          case Ai:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ""),
              e.displayName ||
                (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
          case Ui:
            return Jt(e.type);
          case Uu:
            return Jt(e._render);
          case Au:
            ((t = e._payload), (e = e._init));
            try {
              return Jt(e(t));
            } catch {}
        }
      return null;
    }
    function at(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function Ma(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function gd(e) {
      var t = Ma(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
      ) {
        var i = n.get,
          o = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (u) {
              ((r = "" + u), o.call(this, u));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (u) {
              r = "" + u;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Hr(e) {
      e._valueTracker || (e._valueTracker = gd(e));
    }
    function Ta(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = Ma(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
      );
    }
    function hi(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Wo(e, t) {
      var n = t.checked;
      return j({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked,
      });
    }
    function Es(e, t) {
      var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
      ((n = at(t.value != null ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        }));
    }
    function Da(e, t) {
      ((t = t.checked), t != null && Du(e, "checked", t, !1));
    }
    function Ko(e, t) {
      Da(e, t);
      var n = at(t.value),
        r = t.type;
      if (n != null)
        r === "number"
          ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
      }
      (t.hasOwnProperty("value")
        ? Yo(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Yo(e, t.type, at(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function Cs(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            (r !== "submit" && r !== "reset") ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        ((t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n));
    }
    function Yo(e, t, n) {
      (t !== "number" || hi(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function wd(e) {
      var t = "";
      return (
        Qi.Children.forEach(e, function (n) {
          n != null && (t += n);
        }),
        t
      );
    }
    function Go(e, t) {
      return (
        (e = j({ children: void 0 }, t)),
        (t = wd(t.children)) && (e.children = t),
        e
      );
    }
    function bt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = "" + at(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Xo(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
      return j({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function xs(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(E(92));
          if (Array.isArray(n)) {
            if (!(1 >= n.length)) throw Error(E(93));
            n = n[0];
          }
          t = n;
        }
        (t == null && (t = ""), (n = t));
      }
      e._wrapperState = { initialValue: at(n) };
    }
    function La(e, t) {
      var n = at(t.value),
        r = at(t.defaultValue);
      (n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r));
    }
    function ks(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    var Zo = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg",
    };
    function Ia(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Jo(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Ia(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
    }
    var Wr,
      Qa = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== Zo.svg || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            Wr = Wr || document.createElement("div"),
              Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = Wr.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function ur(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Gn = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Sd = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Gn).forEach(function (e) {
      Sd.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]));
      });
    });
    function Aa(e, t, n) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
            typeof t != "number" ||
            t === 0 ||
            (Gn.hasOwnProperty(e) && Gn[e])
          ? ("" + t).trim()
          : t + "px";
    }
    function Ua(e, t) {
      e = e.style;
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0,
            i = Aa(n, t[n], r);
          (n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : (e[n] = i));
        }
    }
    var Ed = j(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function bo(e, t) {
      if (t) {
        if (Ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(E(60));
          if (
            !(
              typeof t.dangerouslySetInnerHTML == "object" &&
              "__html" in t.dangerouslySetInnerHTML
            )
          )
            throw Error(E(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(E(62));
      }
    }
    function eu(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function $u(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var tu = null,
      en = null,
      tn = null;
    function _s(e) {
      if ((e = Sr(e))) {
        if (typeof tu != "function") throw Error(E(280));
        var t = e.stateNode;
        t && ((t = Vi(t)), tu(e.stateNode, e.type, t));
      }
    }
    function ja(e) {
      en ? (tn ? tn.push(e) : (tn = [e])) : (en = e);
    }
    function za() {
      if (en) {
        var e = en,
          t = tn;
        if (((tn = en = null), _s(e), t))
          for (e = 0; e < t.length; e++) _s(t[e]);
      }
    }
    function Bu(e, t) {
      return e(t);
    }
    function $a(e, t, n, r, i) {
      return e(t, n, r, i);
    }
    function qu() {}
    var Ba = Bu,
      xt = !1,
      _o = !1;
    function Vu() {
      (en !== null || tn !== null) && (qu(), za());
    }
    function Cd(e, t, n) {
      if (_o) return e(t, n);
      _o = !0;
      try {
        return Ba(e, t, n);
      } finally {
        ((_o = !1), Vu());
      }
    }
    function lr(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = Vi(n);
      if (r === null) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !r));
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != "function") throw Error(E(231, t, typeof n));
      return n;
    }
    var nu = !1;
    if (He)
      try {
        ((Bt = {}),
          Object.defineProperty(Bt, "passive", {
            get: function () {
              nu = !0;
            },
          }),
          window.addEventListener("test", Bt, Bt),
          window.removeEventListener("test", Bt, Bt));
      } catch {
        nu = !1;
      }
    var Bt;
    function xd(e, t, n, r, i, o, u, l, s) {
      var a = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, a);
      } catch (m) {
        this.onError(m);
      }
    }
    var Xn = !1,
      mi = null,
      vi = !1,
      ru = null,
      kd = {
        onError: function (e) {
          ((Xn = !0), (mi = e));
        },
      };
    function _d(e, t, n, r, i, o, u, l, s) {
      ((Xn = !1), (mi = null), xd.apply(kd, arguments));
    }
    function Pd(e, t, n, r, i, o, u, l, s) {
      if ((_d.apply(this, arguments), Xn)) {
        if (Xn) {
          var a = mi;
          ((Xn = !1), (mi = null));
        } else throw Error(E(198));
        vi || ((vi = !0), (ru = a));
      }
    }
    function Dt(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function qa(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function Ps(e) {
      if (Dt(e) !== e) throw Error(E(188));
    }
    function Od(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Dt(e)), t === null)) throw Error(E(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === o.child) {
          for (o = i.child; o; ) {
            if (o === n) return (Ps(i), e);
            if (o === r) return (Ps(i), t);
            o = o.sibling;
          }
          throw Error(E(188));
        }
        if (n.return !== r.return) ((n = i), (r = o));
        else {
          for (var u = !1, l = i.child; l; ) {
            if (l === n) {
              ((u = !0), (n = i), (r = o));
              break;
            }
            if (l === r) {
              ((u = !0), (r = i), (n = o));
              break;
            }
            l = l.sibling;
          }
          if (!u) {
            for (l = o.child; l; ) {
              if (l === n) {
                ((u = !0), (n = o), (r = i));
                break;
              }
              if (l === r) {
                ((u = !0), (r = o), (n = i));
                break;
              }
              l = l.sibling;
            }
            if (!u) throw Error(E(189));
          }
        }
        if (n.alternate !== r) throw Error(E(190));
      }
      if (n.tag !== 3) throw Error(E(188));
      return n.stateNode.current === n ? e : t;
    }
    function Va(e) {
      if (((e = Od(e)), !e)) return null;
      for (var t = e; ; ) {
        if (t.tag === 5 || t.tag === 6) return t;
        if (t.child) ((t.child.return = t), (t = t.child));
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return null;
    }
    function Os(e, t) {
      for (var n = e.alternate; t !== null; ) {
        if (t === e || t === n) return !0;
        t = t.return;
      }
      return !1;
    }
    var Ha,
      Hu,
      Wa,
      Ka,
      iu = !1,
      Ne = [],
      tt = null,
      nt = null,
      rt = null,
      sr = new Map(),
      ar = new Map(),
      Mn = [],
      Rs =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " ",
        );
    function ou(e, t, n, r, i) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: n | 16,
        nativeEvent: i,
        targetContainers: [r],
      };
    }
    function Ns(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          tt = null;
          break;
        case "dragenter":
        case "dragleave":
          nt = null;
          break;
        case "mouseover":
        case "mouseout":
          rt = null;
          break;
        case "pointerover":
        case "pointerout":
          sr.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ar.delete(t.pointerId);
      }
    }
    function Tn(e, t, n, r, i, o) {
      return e === null || e.nativeEvent !== o
        ? ((e = ou(t, n, r, i, o)),
          t !== null && ((t = Sr(t)), t !== null && Hu(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Rd(e, t, n, r, i) {
      switch (t) {
        case "focusin":
          return ((tt = Tn(tt, e, t, n, r, i)), !0);
        case "dragenter":
          return ((nt = Tn(nt, e, t, n, r, i)), !0);
        case "mouseover":
          return ((rt = Tn(rt, e, t, n, r, i)), !0);
        case "pointerover":
          var o = i.pointerId;
          return (sr.set(o, Tn(sr.get(o) || null, e, t, n, r, i)), !0);
        case "gotpointercapture":
          return (
            (o = i.pointerId),
            ar.set(o, Tn(ar.get(o) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Nd(e) {
      var t = kt(e.target);
      if (t !== null) {
        var n = Dt(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = qa(n)), t !== null)) {
              ((e.blockedOn = t),
                Ka(e.lanePriority, function () {
                  K.unstable_runWithPriority(e.priority, function () {
                    Wa(n);
                  });
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.hydrate) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ri(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null)
          return ((t = Sr(n)), t !== null && Hu(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Fs(e, t, n) {
      ri(e) && n.delete(t);
    }
    function Fd() {
      for (iu = !1; 0 < Ne.length; ) {
        var e = Ne[0];
        if (e.blockedOn !== null) {
          ((e = Sr(e.blockedOn)), e !== null && Ha(e));
          break;
        }
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (n !== null) {
            e.blockedOn = n;
            break;
          }
          t.shift();
        }
        e.blockedOn === null && Ne.shift();
      }
      (tt !== null && ri(tt) && (tt = null),
        nt !== null && ri(nt) && (nt = null),
        rt !== null && ri(rt) && (rt = null),
        sr.forEach(Fs),
        ar.forEach(Fs));
    }
    function Dn(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        iu ||
          ((iu = !0),
          K.unstable_scheduleCallback(K.unstable_NormalPriority, Fd)));
    }
    function Ya(e) {
      function t(i) {
        return Dn(i, e);
      }
      if (0 < Ne.length) {
        Dn(Ne[0], e);
        for (var n = 1; n < Ne.length; n++) {
          var r = Ne[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        tt !== null && Dn(tt, e),
          nt !== null && Dn(nt, e),
          rt !== null && Dn(rt, e),
          sr.forEach(t),
          ar.forEach(t),
          n = 0;
        n < Mn.length;
        n++
      )
        ((r = Mn[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < Mn.length && ((n = Mn[0]), n.blockedOn === null); )
        (Nd(n), n.blockedOn === null && Mn.shift());
    }
    function Kr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var Wt = {
        animationend: Kr("Animation", "AnimationEnd"),
        animationiteration: Kr("Animation", "AnimationIteration"),
        animationstart: Kr("Animation", "AnimationStart"),
        transitionend: Kr("Transition", "TransitionEnd"),
      },
      Po = {},
      Ga = {};
    He &&
      ((Ga = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Wt.animationend.animation,
        delete Wt.animationiteration.animation,
        delete Wt.animationstart.animation),
      "TransitionEvent" in window || delete Wt.transitionend.transition);
    function ji(e) {
      if (Po[e]) return Po[e];
      if (!Wt[e]) return e;
      var t = Wt[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Ga) return (Po[e] = t[n]);
      return e;
    }
    var Xa = ji("animationend"),
      Za = ji("animationiteration"),
      Ja = ji("animationstart"),
      ba = ji("transitionend"),
      ec = new Map(),
      Wu = new Map(),
      Md = [
        "abort",
        "abort",
        Xa,
        "animationEnd",
        Za,
        "animationIteration",
        Ja,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        ba,
        "transitionEnd",
        "waiting",
        "waiting",
      ];
    function Ku(e, t) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
          i = e[n + 1];
        ((i = "on" + (i[0].toUpperCase() + i.slice(1))),
          Wu.set(r, t),
          ec.set(r, i),
          Mt(i, [r]));
      }
    }
    var Td = K.unstable_now;
    Td();
    var Q = 8;
    function Vt(e) {
      if ((1 & e) !== 0) return ((Q = 15), 1);
      if ((2 & e) !== 0) return ((Q = 14), 2);
      if ((4 & e) !== 0) return ((Q = 13), 4);
      var t = 24 & e;
      return t !== 0
        ? ((Q = 12), t)
        : (e & 32) !== 0
          ? ((Q = 11), 32)
          : ((t = 192 & e),
            t !== 0
              ? ((Q = 10), t)
              : (e & 256) !== 0
                ? ((Q = 9), 256)
                : ((t = 3584 & e),
                  t !== 0
                    ? ((Q = 8), t)
                    : (e & 4096) !== 0
                      ? ((Q = 7), 4096)
                      : ((t = 4186112 & e),
                        t !== 0
                          ? ((Q = 6), t)
                          : ((t = 62914560 & e),
                            t !== 0
                              ? ((Q = 5), t)
                              : e & 67108864
                                ? ((Q = 4), 67108864)
                                : (e & 134217728) !== 0
                                  ? ((Q = 3), 134217728)
                                  : ((t = 805306368 & e),
                                    t !== 0
                                      ? ((Q = 2), t)
                                      : (1073741824 & e) !== 0
                                        ? ((Q = 1), 1073741824)
                                        : ((Q = 8), e))))));
    }
    function Dd(e) {
      switch (e) {
        case 99:
          return 15;
        case 98:
          return 10;
        case 97:
        case 96:
          return 8;
        case 95:
          return 2;
        default:
          return 0;
      }
    }
    function Ld(e) {
      switch (e) {
        case 15:
        case 14:
          return 99;
        case 13:
        case 12:
        case 11:
        case 10:
          return 98;
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
          return 97;
        case 3:
        case 2:
        case 1:
          return 95;
        case 0:
          return 90;
        default:
          throw Error(E(358, e));
      }
    }
    function cr(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return (Q = 0);
      var r = 0,
        i = 0,
        o = e.expiredLanes,
        u = e.suspendedLanes,
        l = e.pingedLanes;
      if (o !== 0) ((r = o), (i = Q = 15));
      else if (((o = n & 134217727), o !== 0)) {
        var s = o & ~u;
        s !== 0
          ? ((r = Vt(s)), (i = Q))
          : ((l &= o), l !== 0 && ((r = Vt(l)), (i = Q)));
      } else
        ((o = n & ~u),
          o !== 0 ? ((r = Vt(o)), (i = Q)) : l !== 0 && ((r = Vt(l)), (i = Q)));
      if (r === 0) return 0;
      if (
        ((r = 31 - ct(r)),
        (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
        t !== 0 && t !== r && (t & u) === 0)
      ) {
        if ((Vt(t), i <= Q)) return t;
        Q = i;
      }
      if (((t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
          ((n = 31 - ct(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
      return r;
    }
    function tc(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function yi(e, t) {
      switch (e) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return ((e = Ht(24 & ~t)), e === 0 ? yi(10, t) : e);
        case 10:
          return ((e = Ht(192 & ~t)), e === 0 ? yi(8, t) : e);
        case 8:
          return (
            (e = Ht(3584 & ~t)),
            e === 0 && ((e = Ht(4186112 & ~t)), e === 0 && (e = 512)),
            e
          );
        case 2:
          return ((t = Ht(805306368 & ~t)), t === 0 && (t = 268435456), t);
      }
      throw Error(E(358, e));
    }
    function Ht(e) {
      return e & -e;
    }
    function Oo(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function zi(e, t, n) {
      e.pendingLanes |= t;
      var r = t - 1;
      ((e.suspendedLanes &= r),
        (e.pingedLanes &= r),
        (e = e.eventTimes),
        (t = 31 - ct(t)),
        (e[t] = n));
    }
    var ct = Math.clz32 ? Math.clz32 : Ad,
      Id = Math.log,
      Qd = Math.LN2;
    function Ad(e) {
      return e === 0 ? 32 : (31 - ((Id(e) / Qd) | 0)) | 0;
    }
    var Ud = K.unstable_UserBlockingPriority,
      jd = K.unstable_runWithPriority,
      ii = !0;
    function zd(e, t, n, r) {
      xt || qu();
      var i = Yu,
        o = xt;
      xt = !0;
      try {
        $a(i, e, t, n, r);
      } finally {
        (xt = o) || Vu();
      }
    }
    function $d(e, t, n, r) {
      jd(Ud, Yu.bind(null, e, t, n, r));
    }
    function Yu(e, t, n, r) {
      if (ii) {
        var i;
        if ((i = (t & 4) === 0) && 0 < Ne.length && -1 < Rs.indexOf(e))
          ((e = ou(null, e, t, n, r)), Ne.push(e));
        else {
          var o = Gu(e, t, n, r);
          if (o === null) i && Ns(e, r);
          else {
            if (i) {
              if (-1 < Rs.indexOf(e)) {
                ((e = ou(o, e, t, n, r)), Ne.push(e));
                return;
              }
              if (Rd(o, e, t, n, r)) return;
              Ns(e, r);
            }
            hc(e, t, r, null, n);
          }
        }
      }
    }
    function Gu(e, t, n, r) {
      var i = $u(r);
      if (((i = kt(i)), i !== null)) {
        var o = Dt(i);
        if (o === null) i = null;
        else {
          var u = o.tag;
          if (u === 13) {
            if (((i = qa(o)), i !== null)) return i;
            i = null;
          } else if (u === 3) {
            if (o.stateNode.hydrate)
              return o.tag === 3 ? o.stateNode.containerInfo : null;
            i = null;
          } else o !== i && (i = null);
        }
      }
      return (hc(e, t, r, i, n), null);
    }
    var Je = null,
      Xu = null,
      oi = null;
    function nc() {
      if (oi) return oi;
      var e,
        t = Xu,
        n = t.length,
        r,
        i = "value" in Je ? Je.value : Je.textContent,
        o = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var u = n - e;
      for (r = 1; r <= u && t[n - r] === i[o - r]; r++);
      return (oi = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function ui(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Yr() {
      return !0;
    }
    function Ms() {
      return !1;
    }
    function pe(e) {
      function t(n, r, i, o, u) {
        ((this._reactName = n),
          (this._targetInst = i),
          (this.type = r),
          (this.nativeEvent = o),
          (this.target = u),
          (this.currentTarget = null));
        for (var l in e)
          e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
        return (
          (this.isDefaultPrevented = (
            o.defaultPrevented != null
              ? o.defaultPrevented
              : o.returnValue === !1
          )
            ? Yr
            : Ms),
          (this.isPropagationStopped = Ms),
          this
        );
      }
      return (
        j(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n &&
              (n.preventDefault
                ? n.preventDefault()
                : typeof n.returnValue != "unknown" && (n.returnValue = !1),
              (this.isDefaultPrevented = Yr));
          },
          stopPropagation: function () {
            var n = this.nativeEvent;
            n &&
              (n.stopPropagation
                ? n.stopPropagation()
                : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
              (this.isPropagationStopped = Yr));
          },
          persist: function () {},
          isPersistent: Yr,
        }),
        t
      );
    }
    var pn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Zu = pe(pn),
      wr = j({}, pn, { view: 0, detail: 0 }),
      Bd = pe(wr),
      Ro,
      No,
      Ln,
      $i = j({}, wr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ju,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== Ln &&
                (Ln && e.type === "mousemove"
                  ? ((Ro = e.screenX - Ln.screenX),
                    (No = e.screenY - Ln.screenY))
                  : (No = Ro = 0),
                (Ln = e)),
              Ro);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : No;
        },
      }),
      Ts = pe($i),
      qd = j({}, $i, { dataTransfer: 0 }),
      Vd = pe(qd),
      Hd = j({}, wr, { relatedTarget: 0 }),
      Fo = pe(Hd),
      Wd = j({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Kd = pe(Wd),
      Yd = j({}, pn, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Gd = pe(Yd),
      Xd = j({}, pn, { data: 0 }),
      Ds = pe(Xd),
      Zd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      Jd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      bd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function ep(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = bd[e])
          ? !!t[e]
          : !1;
    }
    function Ju() {
      return ep;
    }
    var tp = j({}, wr, {
        key: function (e) {
          if (e.key) {
            var t = Zd[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
              ? Jd[e.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ju,
        charCode: function (e) {
          return e.type === "keypress" ? ui(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? ui(e)
            : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
        },
      }),
      np = pe(tp),
      rp = j({}, $i, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Ls = pe(rp),
      ip = j({}, wr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ju,
      }),
      op = pe(ip),
      up = j({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      lp = pe(up),
      sp = j({}, $i, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      ap = pe(sp),
      cp = [9, 13, 27, 32],
      bu = He && "CompositionEvent" in window,
      Zn = null;
    He && "documentMode" in document && (Zn = document.documentMode);
    var fp = He && "TextEvent" in window && !Zn,
      rc = He && (!bu || (Zn && 8 < Zn && 11 >= Zn)),
      Is = String.fromCharCode(32),
      Qs = !1;
    function ic(e, t) {
      switch (e) {
        case "keyup":
          return cp.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function oc(e) {
      return (
        (e = e.detail),
        typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var Kt = !1;
    function dp(e, t) {
      switch (e) {
        case "compositionend":
          return oc(t);
        case "keypress":
          return t.which !== 32 ? null : ((Qs = !0), Is);
        case "textInput":
          return ((e = t.data), e === Is && Qs ? null : e);
        default:
          return null;
      }
    }
    function pp(e, t) {
      if (Kt)
        return e === "compositionend" || (!bu && ic(e, t))
          ? ((e = nc()), (oi = Xu = Je = null), (Kt = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return rc && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var hp = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function As(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!hp[e.type] : t === "textarea";
    }
    function uc(e, t, n, r) {
      (ja(r),
        (t = gi(t, "onChange")),
        0 < t.length &&
          ((n = new Zu("onChange", "change", null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var Jn = null,
      fr = null;
    function mp(e) {
      fc(e, 0);
    }
    function Bi(e) {
      var t = Gt(e);
      if (Ta(t)) return e;
    }
    function vp(e, t) {
      if (e === "change") return t;
    }
    var lc = !1;
    He &&
      (He
        ? ((Xr = "oninput" in document),
          Xr ||
            ((Mo = document.createElement("div")),
            Mo.setAttribute("oninput", "return;"),
            (Xr = typeof Mo.oninput == "function")),
          (Gr = Xr))
        : (Gr = !1),
      (lc = Gr && (!document.documentMode || 9 < document.documentMode)));
    var Gr, Xr, Mo;
    function Us() {
      Jn && (Jn.detachEvent("onpropertychange", sc), (fr = Jn = null));
    }
    function sc(e) {
      if (e.propertyName === "value" && Bi(fr)) {
        var t = [];
        if ((uc(t, fr, e, $u(e)), (e = mp), xt)) e(t);
        else {
          xt = !0;
          try {
            Bu(e, t);
          } finally {
            ((xt = !1), Vu());
          }
        }
      }
    }
    function yp(e, t, n) {
      e === "focusin"
        ? (Us(), (Jn = t), (fr = n), Jn.attachEvent("onpropertychange", sc))
        : e === "focusout" && Us();
    }
    function gp(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Bi(fr);
    }
    function wp(e, t) {
      if (e === "click") return Bi(t);
    }
    function Sp(e, t) {
      if (e === "input" || e === "change") return Bi(t);
    }
    function Ep(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var ye = typeof Object.is == "function" ? Object.is : Ep,
      Cp = Object.prototype.hasOwnProperty;
    function dr(e, t) {
      if (ye(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!Cp.call(t, n[r]) || !ye(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    function js(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function zs(e, t) {
      var n = js(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = js(n);
      }
    }
    function ac(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? ac(e, t.parentNode)
              : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function $s() {
      for (var e = window, t = hi(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = hi(e.document);
      }
      return t;
    }
    function uu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    var xp = He && "documentMode" in document && 11 >= document.documentMode,
      Yt = null,
      lu = null,
      bn = null,
      su = !1;
    function Bs(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      su ||
        Yt == null ||
        Yt !== hi(r) ||
        ((r = Yt),
        "selectionStart" in r && uu(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (bn && dr(bn, r)) ||
          ((bn = r),
          (r = gi(lu, "onSelect")),
          0 < r.length &&
            ((t = new Zu("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Yt))));
    }
    Ku(
      "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " ",
      ),
      0,
    );
    Ku(
      "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
        " ",
      ),
      1,
    );
    Ku(Md, 2);
    for (
      To =
        "change selectionchange textInput compositionstart compositionend compositionupdate".split(
          " ",
        ),
        Zr = 0;
      Zr < To.length;
      Zr++
    )
      Wu.set(To[Zr], 0);
    var To, Zr;
    an("onMouseEnter", ["mouseout", "mouseover"]);
    an("onMouseLeave", ["mouseout", "mouseover"]);
    an("onPointerEnter", ["pointerout", "pointerover"]);
    an("onPointerLeave", ["pointerout", "pointerover"]);
    Mt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    );
    Mt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    );
    Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Mt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    );
    Mt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    );
    Mt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
    var Vn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      cc = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Vn),
      );
    function qs(e, t, n) {
      var r = e.type || "unknown-event";
      ((e.currentTarget = n), Pd(r, t, void 0, e), (e.currentTarget = null));
    }
    function fc(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        e: {
          var o = void 0;
          if (t)
            for (var u = r.length - 1; 0 <= u; u--) {
              var l = r[u],
                s = l.instance,
                a = l.currentTarget;
              if (((l = l.listener), s !== o && i.isPropagationStopped()))
                break e;
              (qs(i, l, a), (o = s));
            }
          else
            for (u = 0; u < r.length; u++) {
              if (
                ((l = r[u]),
                (s = l.instance),
                (a = l.currentTarget),
                (l = l.listener),
                s !== o && i.isPropagationStopped())
              )
                break e;
              (qs(i, l, a), (o = s));
            }
        }
      }
      if (vi) throw ((e = ru), (vi = !1), (ru = null), e);
    }
    function A(e, t) {
      var n = vc(t),
        r = e + "__bubble";
      n.has(r) || (pc(t, e, 2, !1), n.add(r));
    }
    var Vs = "_reactListening" + Math.random().toString(36).slice(2);
    function dc(e) {
      e[Vs] ||
        ((e[Vs] = !0),
        Na.forEach(function (t) {
          (cc.has(t) || Hs(t, !1, e, null), Hs(t, !0, e, null));
        }));
    }
    function Hs(e, t, n, r) {
      var i =
          4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
        o = n;
      if (
        (e === "selectionchange" && n.nodeType !== 9 && (o = n.ownerDocument),
        r !== null && !t && cc.has(e))
      ) {
        if (e !== "scroll") return;
        ((i |= 2), (o = r));
      }
      var u = vc(o),
        l = e + "__" + (t ? "capture" : "bubble");
      u.has(l) || (t && (i |= 4), pc(o, e, i, t), u.add(l));
    }
    function pc(e, t, n, r) {
      var i = Wu.get(t);
      switch (i === void 0 ? 2 : i) {
        case 0:
          i = zd;
          break;
        case 1:
          i = $d;
          break;
        default:
          i = Yu;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !nu ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (i = !0),
        r
          ? i !== void 0
            ? e.addEventListener(t, n, { capture: !0, passive: i })
            : e.addEventListener(t, n, !0)
          : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1));
    }
    function hc(e, t, n, r, i) {
      var o = r;
      if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
        e: for (;;) {
          if (r === null) return;
          var u = r.tag;
          if (u === 3 || u === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
            if (u === 4)
              for (u = r.return; u !== null; ) {
                var s = u.tag;
                if (
                  (s === 3 || s === 4) &&
                  ((s = u.stateNode.containerInfo),
                  s === i || (s.nodeType === 8 && s.parentNode === i))
                )
                  return;
                u = u.return;
              }
            for (; l !== null; ) {
              if (((u = kt(l)), u === null)) return;
              if (((s = u.tag), s === 5 || s === 6)) {
                r = o = u;
                continue e;
              }
              l = l.parentNode;
            }
          }
          r = r.return;
        }
      Cd(function () {
        var a = o,
          m = $u(n),
          S = [];
        e: {
          var h = ec.get(e);
          if (h !== void 0) {
            var y = Zu,
              w = e;
            switch (e) {
              case "keypress":
                if (ui(n) === 0) break e;
              case "keydown":
              case "keyup":
                y = np;
                break;
              case "focusin":
                ((w = "focus"), (y = Fo));
                break;
              case "focusout":
                ((w = "blur"), (y = Fo));
                break;
              case "beforeblur":
              case "afterblur":
                y = Fo;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                y = Ts;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                y = Vd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                y = op;
                break;
              case Xa:
              case Za:
              case Ja:
                y = Kd;
                break;
              case ba:
                y = lp;
                break;
              case "scroll":
                y = Bd;
                break;
              case "wheel":
                y = ap;
                break;
              case "copy":
              case "cut":
              case "paste":
                y = Gd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                y = Ls;
            }
            var C = (t & 4) !== 0,
              d = !C && e === "scroll",
              c = C ? (h !== null ? h + "Capture" : null) : h;
            C = [];
            for (var f = a, p; f !== null; ) {
              p = f;
              var v = p.stateNode;
              if (
                (p.tag === 5 &&
                  v !== null &&
                  ((p = v),
                  c !== null &&
                    ((v = lr(f, c)), v != null && C.push(pr(f, v, p)))),
                d)
              )
                break;
              f = f.return;
            }
            0 < C.length &&
              ((h = new y(h, w, null, n, m)),
              S.push({ event: h, listeners: C }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (
              ((h = e === "mouseover" || e === "pointerover"),
              (y = e === "mouseout" || e === "pointerout"),
              h &&
                (t & 16) === 0 &&
                (w = n.relatedTarget || n.fromElement) &&
                (kt(w) || w[hn]))
            )
              break e;
            if (
              (y || h) &&
              ((h =
                m.window === m
                  ? m
                  : (h = m.ownerDocument)
                    ? h.defaultView || h.parentWindow
                    : window),
              y
                ? ((w = n.relatedTarget || n.toElement),
                  (y = a),
                  (w = w ? kt(w) : null),
                  w !== null &&
                    ((d = Dt(w)), w !== d || (w.tag !== 5 && w.tag !== 6)) &&
                    (w = null))
                : ((y = null), (w = a)),
              y !== w)
            ) {
              if (
                ((C = Ts),
                (v = "onMouseLeave"),
                (c = "onMouseEnter"),
                (f = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((C = Ls),
                  (v = "onPointerLeave"),
                  (c = "onPointerEnter"),
                  (f = "pointer")),
                (d = y == null ? h : Gt(y)),
                (p = w == null ? h : Gt(w)),
                (h = new C(v, f + "leave", y, n, m)),
                (h.target = d),
                (h.relatedTarget = p),
                (v = null),
                kt(m) === a &&
                  ((C = new C(c, f + "enter", w, n, m)),
                  (C.target = p),
                  (C.relatedTarget = d),
                  (v = C)),
                (d = v),
                y && w)
              )
                t: {
                  for (C = y, c = w, f = 0, p = C; p; p = qt(p)) f++;
                  for (p = 0, v = c; v; v = qt(v)) p++;
                  for (; 0 < f - p; ) ((C = qt(C)), f--);
                  for (; 0 < p - f; ) ((c = qt(c)), p--);
                  for (; f--; ) {
                    if (C === c || (c !== null && C === c.alternate)) break t;
                    ((C = qt(C)), (c = qt(c)));
                  }
                  C = null;
                }
              else C = null;
              (y !== null && Ws(S, h, y, C, !1),
                w !== null && d !== null && Ws(S, d, w, C, !0));
            }
          }
          e: {
            if (
              ((h = a ? Gt(a) : window),
              (y = h.nodeName && h.nodeName.toLowerCase()),
              y === "select" || (y === "input" && h.type === "file"))
            )
              var k = vp;
            else if (As(h))
              if (lc) k = Sp;
              else {
                k = gp;
                var g = yp;
              }
            else
              (y = h.nodeName) &&
                y.toLowerCase() === "input" &&
                (h.type === "checkbox" || h.type === "radio") &&
                (k = wp);
            if (k && (k = k(e, a))) {
              uc(S, k, n, m);
              break e;
            }
            (g && g(e, h, a),
              e === "focusout" &&
                (g = h._wrapperState) &&
                g.controlled &&
                h.type === "number" &&
                Yo(h, "number", h.value));
          }
          switch (((g = a ? Gt(a) : window), e)) {
            case "focusin":
              (As(g) || g.contentEditable === "true") &&
                ((Yt = g), (lu = a), (bn = null));
              break;
            case "focusout":
              bn = lu = Yt = null;
              break;
            case "mousedown":
              su = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((su = !1), Bs(S, n, m));
              break;
            case "selectionchange":
              if (xp) break;
            case "keydown":
            case "keyup":
              Bs(S, n, m);
          }
          var _;
          if (bu)
            e: {
              switch (e) {
                case "compositionstart":
                  var R = "onCompositionStart";
                  break e;
                case "compositionend":
                  R = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  R = "onCompositionUpdate";
                  break e;
              }
              R = void 0;
            }
          else
            Kt
              ? ic(e, n) && (R = "onCompositionEnd")
              : e === "keydown" &&
                n.keyCode === 229 &&
                (R = "onCompositionStart");
          (R &&
            (rc &&
              n.locale !== "ko" &&
              (Kt || R !== "onCompositionStart"
                ? R === "onCompositionEnd" && Kt && (_ = nc())
                : ((Je = m),
                  (Xu = "value" in Je ? Je.value : Je.textContent),
                  (Kt = !0))),
            (g = gi(a, R)),
            0 < g.length &&
              ((R = new Ds(R, e, null, n, m)),
              S.push({ event: R, listeners: g }),
              _ ? (R.data = _) : ((_ = oc(n)), _ !== null && (R.data = _)))),
            (_ = fp ? dp(e, n) : pp(e, n)) &&
              ((a = gi(a, "onBeforeInput")),
              0 < a.length &&
                ((m = new Ds("onBeforeInput", "beforeinput", null, n, m)),
                S.push({ event: m, listeners: a }),
                (m.data = _))));
        }
        fc(S, t);
      });
    }
    function pr(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function gi(e, t) {
      for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
          o = i.stateNode;
        (i.tag === 5 &&
          o !== null &&
          ((i = o),
          (o = lr(e, n)),
          o != null && r.unshift(pr(e, o, i)),
          (o = lr(e, t)),
          o != null && r.push(pr(e, o, i))),
          (e = e.return));
      }
      return r;
    }
    function qt(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function Ws(e, t, n, r, i) {
      for (var o = t._reactName, u = []; n !== null && n !== r; ) {
        var l = n,
          s = l.alternate,
          a = l.stateNode;
        if (s !== null && s === r) break;
        (l.tag === 5 &&
          a !== null &&
          ((l = a),
          i
            ? ((s = lr(n, o)), s != null && u.unshift(pr(n, s, l)))
            : i || ((s = lr(n, o)), s != null && u.push(pr(n, s, l)))),
          (n = n.return));
      }
      u.length !== 0 && e.push({ event: t, listeners: u });
    }
    function wi() {}
    var Do = null,
      Lo = null;
    function mc(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function au(e, t) {
      return (
        e === "textarea" ||
        e === "option" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Ks = typeof setTimeout == "function" ? setTimeout : void 0,
      kp = typeof clearTimeout == "function" ? clearTimeout : void 0;
    function el(e) {
      e.nodeType === 1
        ? (e.textContent = "")
        : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
    }
    function nn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
      }
      return e;
    }
    function Ys(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0) return e;
            t--;
          } else n === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Io = 0;
    function _p(e) {
      return { $$typeof: ju, toString: e, valueOf: e };
    }
    var qi = Math.random().toString(36).slice(2),
      be = "__reactFiber$" + qi,
      Si = "__reactProps$" + qi,
      hn = "__reactContainer$" + qi,
      Gs = "__reactEvents$" + qi;
    function kt(e) {
      var t = e[be];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[hn] || n[be])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = Ys(e); e !== null; ) {
              if ((n = e[be])) return n;
              e = Ys(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Sr(e) {
      return (
        (e = e[be] || e[hn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function Gt(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(E(33));
    }
    function Vi(e) {
      return e[Si] || null;
    }
    function vc(e) {
      var t = e[Gs];
      return (t === void 0 && (t = e[Gs] = new Set()), t);
    }
    var cu = [],
      Xt = -1;
    function ht(e) {
      return { current: e };
    }
    function U(e) {
      0 > Xt || ((e.current = cu[Xt]), (cu[Xt] = null), Xt--);
    }
    function $(e, t) {
      (Xt++, (cu[Xt] = e.current), (e.current = t));
    }
    var ft = {},
      ne = ht(ft),
      ae = ht(!1),
      Rt = ft;
    function cn(e, t) {
      var n = e.type.contextTypes;
      if (!n) return ft;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {},
        o;
      for (o in n) i[o] = t[o];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function ce(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function Ei() {
      (U(ae), U(ne));
    }
    function Xs(e, t, n) {
      if (ne.current !== ft) throw Error(E(168));
      ($(ne, t), $(ae, n));
    }
    function yc(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
      r = r.getChildContext();
      for (var i in r)
        if (!(i in e)) throw Error(E(108, Jt(t) || "Unknown", i));
      return j({}, n, r);
    }
    function li(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          ft),
        (Rt = ne.current),
        $(ne, e),
        $(ae, ae.current),
        !0
      );
    }
    function Zs(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(E(169));
      (n
        ? ((e = yc(e, t, Rt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          U(ae),
          U(ne),
          $(ne, e))
        : U(ae),
        $(ae, n));
    }
    var tl = null,
      Ot = null,
      Pp = K.unstable_runWithPriority,
      nl = K.unstable_scheduleCallback,
      fu = K.unstable_cancelCallback,
      Op = K.unstable_shouldYield,
      Js = K.unstable_requestPaint,
      du = K.unstable_now,
      Rp = K.unstable_getCurrentPriorityLevel,
      Hi = K.unstable_ImmediatePriority,
      gc = K.unstable_UserBlockingPriority,
      wc = K.unstable_NormalPriority,
      Sc = K.unstable_LowPriority,
      Ec = K.unstable_IdlePriority,
      Qo = {},
      Np = Js !== void 0 ? Js : function () {},
      ze = null,
      si = null,
      Ao = !1,
      bs = du(),
      ee =
        1e4 > bs
          ? du
          : function () {
              return du() - bs;
            };
    function fn() {
      switch (Rp()) {
        case Hi:
          return 99;
        case gc:
          return 98;
        case wc:
          return 97;
        case Sc:
          return 96;
        case Ec:
          return 95;
        default:
          throw Error(E(332));
      }
    }
    function Cc(e) {
      switch (e) {
        case 99:
          return Hi;
        case 98:
          return gc;
        case 97:
          return wc;
        case 96:
          return Sc;
        case 95:
          return Ec;
        default:
          throw Error(E(332));
      }
    }
    function Nt(e, t) {
      return ((e = Cc(e)), Pp(e, t));
    }
    function hr(e, t, n) {
      return ((e = Cc(e)), nl(e, t, n));
    }
    function Le() {
      if (si !== null) {
        var e = si;
        ((si = null), fu(e));
      }
      xc();
    }
    function xc() {
      if (!Ao && ze !== null) {
        Ao = !0;
        var e = 0;
        try {
          var t = ze;
          (Nt(99, function () {
            for (; e < t.length; e++) {
              var n = t[e];
              do n = n(!0);
              while (n !== null);
            }
          }),
            (ze = null));
        } catch (n) {
          throw (ze !== null && (ze = ze.slice(e + 1)), nl(Hi, Le), n);
        } finally {
          Ao = !1;
        }
      }
    }
    var Fp = Tt.ReactCurrentBatchConfig;
    function _e(e, t) {
      if (e && e.defaultProps) {
        ((t = j({}, t)), (e = e.defaultProps));
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    var Ci = ht(null),
      xi = null,
      Zt = null,
      ki = null;
    function rl() {
      ki = Zt = xi = null;
    }
    function il(e) {
      var t = Ci.current;
      (U(Ci), (e.type._context._currentValue = t));
    }
    function kc(e, t) {
      for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) === t) {
          if (n === null || (n.childLanes & t) === t) break;
          n.childLanes |= t;
        } else ((e.childLanes |= t), n !== null && (n.childLanes |= t));
        e = e.return;
      }
    }
    function rn(e, t) {
      ((xi = e),
        (ki = Zt = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Pe = !0), (e.firstContext = null)));
    }
    function Se(e, t) {
      if (ki !== e && t !== !1 && t !== 0)
        if (
          ((typeof t != "number" || t === 1073741823) &&
            ((ki = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          Zt === null)
        ) {
          if (xi === null) throw Error(E(308));
          ((Zt = t),
            (xi.dependencies = {
              lanes: 0,
              firstContext: t,
              responders: null,
            }));
        } else Zt = Zt.next = t;
      return e._currentValue;
    }
    var Xe = !1;
    function ol(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null },
        effects: null,
      };
    }
    function _c(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function it(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function ot(e, t) {
      if (((e = e.updateQueue), e !== null)) {
        e = e.shared;
        var n = e.pending;
        (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t));
      }
    }
    function ea(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var u = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (o === null ? (i = o = u) : (o = o.next = u), (n = n.next));
          } while (n !== null);
          o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: o,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function mr(e, t, n, r) {
      var i = e.updateQueue;
      Xe = !1;
      var o = i.firstBaseUpdate,
        u = i.lastBaseUpdate,
        l = i.shared.pending;
      if (l !== null) {
        i.shared.pending = null;
        var s = l,
          a = s.next;
        ((s.next = null), u === null ? (o = a) : (u.next = a), (u = s));
        var m = e.alternate;
        if (m !== null) {
          m = m.updateQueue;
          var S = m.lastBaseUpdate;
          S !== u &&
            (S === null ? (m.firstBaseUpdate = a) : (S.next = a),
            (m.lastBaseUpdate = s));
        }
      }
      if (o !== null) {
        ((S = i.baseState), (u = 0), (m = a = s = null));
        do {
          l = o.lane;
          var h = o.eventTime;
          if ((r & l) === l) {
            m !== null &&
              (m = m.next =
                {
                  eventTime: h,
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                });
            e: {
              var y = e,
                w = o;
              switch (((l = t), (h = n), w.tag)) {
                case 1:
                  if (((y = w.payload), typeof y == "function")) {
                    S = y.call(h, S, l);
                    break e;
                  }
                  S = y;
                  break e;
                case 3:
                  y.flags = (y.flags & -4097) | 64;
                case 0:
                  if (
                    ((y = w.payload),
                    (l = typeof y == "function" ? y.call(h, S, l) : y),
                    l == null)
                  )
                    break e;
                  S = j({}, S, l);
                  break e;
                case 2:
                  Xe = !0;
              }
            }
            o.callback !== null &&
              ((e.flags |= 32),
              (l = i.effects),
              l === null ? (i.effects = [o]) : l.push(o));
          } else
            ((h = {
              eventTime: h,
              lane: l,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            }),
              m === null ? ((a = m = h), (s = S)) : (m = m.next = h),
              (u |= l));
          if (((o = o.next), o === null)) {
            if (((l = i.shared.pending), l === null)) break;
            ((o = l.next),
              (l.next = null),
              (i.lastBaseUpdate = l),
              (i.shared.pending = null));
          }
        } while (1);
        (m === null && (s = S),
          (i.baseState = s),
          (i.firstBaseUpdate = a),
          (i.lastBaseUpdate = m),
          (Cr |= u),
          (e.lanes = u),
          (e.memoizedState = S));
      }
    }
    function ta(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            i = r.callback;
          if (i !== null) {
            if (((r.callback = null), (r = n), typeof i != "function"))
              throw Error(E(191, i));
            i.call(r);
          }
        }
    }
    var Pc = new Qi.Component().refs;
    function _i(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : j({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Wi = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Dt(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = de(),
          i = ut(e),
          o = it(r, i);
        ((o.payload = t), n != null && (o.callback = n), ot(e, o), lt(e, i, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = de(),
          i = ut(e),
          o = it(r, i);
        ((o.tag = 1),
          (o.payload = t),
          n != null && (o.callback = n),
          ot(e, o),
          lt(e, i, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = de(),
          r = ut(e),
          i = it(n, r);
        ((i.tag = 2), t != null && (i.callback = t), ot(e, i), lt(e, r, n));
      },
    };
    function na(e, t, n, r, i, o, u) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(r, o, u)
          : t.prototype && t.prototype.isPureReactComponent
            ? !dr(n, r) || !dr(i, o)
            : !0
      );
    }
    function Oc(e, t, n) {
      var r = !1,
        i = ft,
        o = t.contextType;
      return (
        typeof o == "object" && o !== null
          ? (o = Se(o))
          : ((i = ce(t) ? Rt : ne.current),
            (r = t.contextTypes),
            (o = (r = r != null) ? cn(e, i) : ft)),
        (t = new t(n, o)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Wi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function ra(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Wi.enqueueReplaceState(t, t.state, null));
    }
    function pu(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = Pc), ol(e));
      var o = t.contextType;
      (typeof o == "object" && o !== null
        ? (i.context = Se(o))
        : ((o = ce(t) ? Rt : ne.current), (i.context = cn(e, o))),
        mr(e, n, i, r),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (_i(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((t = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && Wi.enqueueReplaceState(i, i.state, null),
          mr(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4));
    }
    var Jr = Array.isArray;
    function In(e, t, n) {
      if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
      ) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(E(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(E(147, e));
          var i = "" + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === i
            ? t.ref
            : ((t = function (o) {
                var u = r.refs;
                (u === Pc && (u = r.refs = {}),
                  o === null ? delete u[i] : (u[i] = o));
              }),
              (t._stringRef = i),
              t);
        }
        if (typeof e != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, e));
      }
      return e;
    }
    function br(e, t) {
      if (e.type !== "textarea")
        throw Error(
          E(
            31,
            Object.prototype.toString.call(t) === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
          ),
        );
    }
    function Rc(e) {
      function t(d, c) {
        if (e) {
          var f = d.lastEffect;
          (f !== null
            ? ((f.nextEffect = c), (d.lastEffect = c))
            : (d.firstEffect = d.lastEffect = c),
            (c.nextEffect = null),
            (c.flags = 8));
        }
      }
      function n(d, c) {
        if (!e) return null;
        for (; c !== null; ) (t(d, c), (c = c.sibling));
        return null;
      }
      function r(d, c) {
        for (d = new Map(); c !== null; )
          (c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
            (c = c.sibling));
        return d;
      }
      function i(d, c) {
        return ((d = pt(d, c)), (d.index = 0), (d.sibling = null), d);
      }
      function o(d, c, f) {
        return (
          (d.index = f),
          e
            ? ((f = d.alternate),
              f !== null
                ? ((f = f.index), f < c ? ((d.flags = 2), c) : f)
                : ((d.flags = 2), c))
            : c
        );
      }
      function u(d) {
        return (e && d.alternate === null && (d.flags = 2), d);
      }
      function l(d, c, f, p) {
        return c === null || c.tag !== 6
          ? ((c = Bo(f, d.mode, p)), (c.return = d), c)
          : ((c = i(c, f)), (c.return = d), c);
      }
      function s(d, c, f, p) {
        return c !== null && c.elementType === f.type
          ? ((p = i(c, f.props)), (p.ref = In(d, c, f)), (p.return = d), p)
          : ((p = di(f.type, f.key, f.props, null, d.mode, p)),
            (p.ref = In(d, c, f)),
            (p.return = d),
            p);
      }
      function a(d, c, f, p) {
        return c === null ||
          c.tag !== 4 ||
          c.stateNode.containerInfo !== f.containerInfo ||
          c.stateNode.implementation !== f.implementation
          ? ((c = qo(f, d.mode, p)), (c.return = d), c)
          : ((c = i(c, f.children || [])), (c.return = d), c);
      }
      function m(d, c, f, p, v) {
        return c === null || c.tag !== 7
          ? ((c = sn(f, d.mode, p, v)), (c.return = d), c)
          : ((c = i(c, f)), (c.return = d), c);
      }
      function S(d, c, f) {
        if (typeof c == "string" || typeof c == "number")
          return ((c = Bo("" + c, d.mode, f)), (c.return = d), c);
        if (typeof c == "object" && c !== null) {
          switch (c.$$typeof) {
            case Bn:
              return (
                (f = di(c.type, c.key, c.props, null, d.mode, f)),
                (f.ref = In(d, null, c)),
                (f.return = d),
                f
              );
            case Ct:
              return ((c = qo(c, d.mode, f)), (c.return = d), c);
          }
          if (Jr(c) || Fn(c))
            return ((c = sn(c, d.mode, f, null)), (c.return = d), c);
          br(d, c);
        }
        return null;
      }
      function h(d, c, f, p) {
        var v = c !== null ? c.key : null;
        if (typeof f == "string" || typeof f == "number")
          return v !== null ? null : l(d, c, "" + f, p);
        if (typeof f == "object" && f !== null) {
          switch (f.$$typeof) {
            case Bn:
              return f.key === v
                ? f.type === Ze
                  ? m(d, c, f.props.children, p, v)
                  : s(d, c, f, p)
                : null;
            case Ct:
              return f.key === v ? a(d, c, f, p) : null;
          }
          if (Jr(f) || Fn(f)) return v !== null ? null : m(d, c, f, p, null);
          br(d, f);
        }
        return null;
      }
      function y(d, c, f, p, v) {
        if (typeof p == "string" || typeof p == "number")
          return ((d = d.get(f) || null), l(c, d, "" + p, v));
        if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
            case Bn:
              return (
                (d = d.get(p.key === null ? f : p.key) || null),
                p.type === Ze
                  ? m(c, d, p.props.children, v, p.key)
                  : s(c, d, p, v)
              );
            case Ct:
              return (
                (d = d.get(p.key === null ? f : p.key) || null),
                a(c, d, p, v)
              );
          }
          if (Jr(p) || Fn(p))
            return ((d = d.get(f) || null), m(c, d, p, v, null));
          br(c, p);
        }
        return null;
      }
      function w(d, c, f, p) {
        for (
          var v = null, k = null, g = c, _ = (c = 0), R = null;
          g !== null && _ < f.length;
          _++
        ) {
          g.index > _ ? ((R = g), (g = null)) : (R = g.sibling);
          var P = h(d, g, f[_], p);
          if (P === null) {
            g === null && (g = R);
            break;
          }
          (e && g && P.alternate === null && t(d, g),
            (c = o(P, c, _)),
            k === null ? (v = P) : (k.sibling = P),
            (k = P),
            (g = R));
        }
        if (_ === f.length) return (n(d, g), v);
        if (g === null) {
          for (; _ < f.length; _++)
            ((g = S(d, f[_], p)),
              g !== null &&
                ((c = o(g, c, _)),
                k === null ? (v = g) : (k.sibling = g),
                (k = g)));
          return v;
        }
        for (g = r(d, g); _ < f.length; _++)
          ((R = y(g, d, _, f[_], p)),
            R !== null &&
              (e &&
                R.alternate !== null &&
                g.delete(R.key === null ? _ : R.key),
              (c = o(R, c, _)),
              k === null ? (v = R) : (k.sibling = R),
              (k = R)));
        return (
          e &&
            g.forEach(function (fe) {
              return t(d, fe);
            }),
          v
        );
      }
      function C(d, c, f, p) {
        var v = Fn(f);
        if (typeof v != "function") throw Error(E(150));
        if (((f = v.call(f)), f == null)) throw Error(E(151));
        for (
          var k = (v = null), g = c, _ = (c = 0), R = null, P = f.next();
          g !== null && !P.done;
          _++, P = f.next()
        ) {
          g.index > _ ? ((R = g), (g = null)) : (R = g.sibling);
          var fe = h(d, g, P.value, p);
          if (fe === null) {
            g === null && (g = R);
            break;
          }
          (e && g && fe.alternate === null && t(d, g),
            (c = o(fe, c, _)),
            k === null ? (v = fe) : (k.sibling = fe),
            (k = fe),
            (g = R));
        }
        if (P.done) return (n(d, g), v);
        if (g === null) {
          for (; !P.done; _++, P = f.next())
            ((P = S(d, P.value, p)),
              P !== null &&
                ((c = o(P, c, _)),
                k === null ? (v = P) : (k.sibling = P),
                (k = P)));
          return v;
        }
        for (g = r(d, g); !P.done; _++, P = f.next())
          ((P = y(g, d, _, P.value, p)),
            P !== null &&
              (e &&
                P.alternate !== null &&
                g.delete(P.key === null ? _ : P.key),
              (c = o(P, c, _)),
              k === null ? (v = P) : (k.sibling = P),
              (k = P)));
        return (
          e &&
            g.forEach(function (ue) {
              return t(d, ue);
            }),
          v
        );
      }
      return function (d, c, f, p) {
        var v =
          typeof f == "object" && f !== null && f.type === Ze && f.key === null;
        v && (f = f.props.children);
        var k = typeof f == "object" && f !== null;
        if (k)
          switch (f.$$typeof) {
            case Bn:
              e: {
                for (k = f.key, v = c; v !== null; ) {
                  if (v.key === k) {
                    switch (v.tag) {
                      case 7:
                        if (f.type === Ze) {
                          (n(d, v.sibling),
                            (c = i(v, f.props.children)),
                            (c.return = d),
                            (d = c));
                          break e;
                        }
                        break;
                      default:
                        if (v.elementType === f.type) {
                          (n(d, v.sibling),
                            (c = i(v, f.props)),
                            (c.ref = In(d, v, f)),
                            (c.return = d),
                            (d = c));
                          break e;
                        }
                    }
                    n(d, v);
                    break;
                  } else t(d, v);
                  v = v.sibling;
                }
                f.type === Ze
                  ? ((c = sn(f.props.children, d.mode, p, f.key)),
                    (c.return = d),
                    (d = c))
                  : ((p = di(f.type, f.key, f.props, null, d.mode, p)),
                    (p.ref = In(d, c, f)),
                    (p.return = d),
                    (d = p));
              }
              return u(d);
            case Ct:
              e: {
                for (v = f.key; c !== null; ) {
                  if (c.key === v)
                    if (
                      c.tag === 4 &&
                      c.stateNode.containerInfo === f.containerInfo &&
                      c.stateNode.implementation === f.implementation
                    ) {
                      (n(d, c.sibling),
                        (c = i(c, f.children || [])),
                        (c.return = d),
                        (d = c));
                      break e;
                    } else {
                      n(d, c);
                      break;
                    }
                  else t(d, c);
                  c = c.sibling;
                }
                ((c = qo(f, d.mode, p)), (c.return = d), (d = c));
              }
              return u(d);
          }
        if (typeof f == "string" || typeof f == "number")
          return (
            (f = "" + f),
            c !== null && c.tag === 6
              ? (n(d, c.sibling), (c = i(c, f)), (c.return = d), (d = c))
              : (n(d, c), (c = Bo(f, d.mode, p)), (c.return = d), (d = c)),
            u(d)
          );
        if (Jr(f)) return w(d, c, f, p);
        if (Fn(f)) return C(d, c, f, p);
        if ((k && br(d, f), typeof f > "u" && !v))
          switch (d.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(E(152, Jt(d.type) || "Component"));
          }
        return n(d, c);
      };
    }
    var Pi = Rc(!0),
      Nc = Rc(!1),
      Er = {},
      Te = ht(Er),
      vr = ht(Er),
      yr = ht(Er);
    function _t(e) {
      if (e === Er) throw Error(E(174));
      return e;
    }
    function hu(e, t) {
      switch (($(yr, t), $(vr, e), $(Te, Er), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Jo(t, e)));
      }
      (U(Te), $(Te, t));
    }
    function dn() {
      (U(Te), U(vr), U(yr));
    }
    function ia(e) {
      _t(yr.current);
      var t = _t(Te.current),
        n = Jo(t, e.type);
      t !== n && ($(vr, e), $(Te, n));
    }
    function ul(e) {
      vr.current === e && (U(Te), U(vr));
    }
    var z = ht(0);
    function Oi(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (
            n !== null &&
            ((n = n.dehydrated),
            n === null || n.data === "$?" || n.data === "$!")
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 64) !== 0) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var Be = null,
      et = null,
      De = !1;
    function Fc(e, t) {
      var n = ge(5, null, null, 0);
      ((n.elementType = "DELETED"),
        (n.type = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (n.flags = 8),
        e.lastEffect !== null
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n));
    }
    function oa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t =
              t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null ? ((e.stateNode = t), !0) : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), !0) : !1
          );
        case 13:
          return !1;
        default:
          return !1;
      }
    }
    function mu(e) {
      if (De) {
        var t = et;
        if (t) {
          var n = t;
          if (!oa(e, t)) {
            if (((t = nn(n.nextSibling)), !t || !oa(e, t))) {
              ((e.flags = (e.flags & -1025) | 2), (De = !1), (Be = e));
              return;
            }
            Fc(Be, n);
          }
          ((Be = e), (et = nn(t.firstChild)));
        } else ((e.flags = (e.flags & -1025) | 2), (De = !1), (Be = e));
      }
    }
    function ua(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      Be = e;
    }
    function ei(e) {
      if (e !== Be) return !1;
      if (!De) return (ua(e), (De = !0), !1);
      var t = e.type;
      if (
        e.tag !== 5 ||
        (t !== "head" && t !== "body" && !au(t, e.memoizedProps))
      )
        for (t = et; t; ) (Fc(e, t), (t = nn(t.nextSibling)));
      if ((ua(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(E(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === "/$") {
                if (t === 0) {
                  et = nn(e.nextSibling);
                  break e;
                }
                t--;
              } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          et = null;
        }
      } else et = Be ? nn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Uo() {
      ((et = Be = null), (De = !1));
    }
    var on = [];
    function ll() {
      for (var e = 0; e < on.length; e++)
        on[e]._workInProgressVersionPrimary = null;
      on.length = 0;
    }
    var er = Tt.ReactCurrentDispatcher,
      we = Tt.ReactCurrentBatchConfig,
      gr = 0,
      B = null,
      b = null,
      Y = null,
      Ri = !1,
      tr = !1;
    function le() {
      throw Error(E(321));
    }
    function sl(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!ye(e[n], t[n])) return !1;
      return !0;
    }
    function al(e, t, n, r, i, o) {
      if (
        ((gr = o),
        (B = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (er.current = e === null || e.memoizedState === null ? Tp : Dp),
        (e = n(r, i)),
        tr)
      ) {
        o = 0;
        do {
          if (((tr = !1), !(25 > o))) throw Error(E(301));
          ((o += 1),
            (Y = b = null),
            (t.updateQueue = null),
            (er.current = Lp),
            (e = n(r, i)));
        } while (tr);
      }
      if (
        ((er.current = Ti),
        (t = b !== null && b.next !== null),
        (gr = 0),
        (Y = b = B = null),
        (Ri = !1),
        t)
      )
        throw Error(E(300));
      return e;
    }
    function Pt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (Y === null ? (B.memoizedState = Y = e) : (Y = Y.next = e), Y);
    }
    function Lt() {
      if (b === null) {
        var e = B.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = b.next;
      var t = Y === null ? B.memoizedState : Y.next;
      if (t !== null) ((Y = t), (b = e));
      else {
        if (e === null) throw Error(E(310));
        ((b = e),
          (e = {
            memoizedState: b.memoizedState,
            baseState: b.baseState,
            baseQueue: b.baseQueue,
            queue: b.queue,
            next: null,
          }),
          Y === null ? (B.memoizedState = Y = e) : (Y = Y.next = e));
      }
      return Y;
    }
    function Fe(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Qn(e) {
      var t = Lt(),
        n = t.queue;
      if (n === null) throw Error(E(311));
      n.lastRenderedReducer = e;
      var r = b,
        i = r.baseQueue,
        o = n.pending;
      if (o !== null) {
        if (i !== null) {
          var u = i.next;
          ((i.next = o.next), (o.next = u));
        }
        ((r.baseQueue = i = o), (n.pending = null));
      }
      if (i !== null) {
        ((i = i.next), (r = r.baseState));
        var l = (u = o = null),
          s = i;
        do {
          var a = s.lane;
          if ((gr & a) === a)
            (l !== null &&
              (l = l.next =
                {
                  lane: 0,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                }),
              (r = s.eagerReducer === e ? s.eagerState : e(r, s.action)));
          else {
            var m = {
              lane: a,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            };
            (l === null ? ((u = l = m), (o = r)) : (l = l.next = m),
              (B.lanes |= a),
              (Cr |= a));
          }
          s = s.next;
        } while (s !== null && s !== i);
        (l === null ? (o = r) : (l.next = u),
          ye(r, t.memoizedState) || (Pe = !0),
          (t.memoizedState = r),
          (t.baseState = o),
          (t.baseQueue = l),
          (n.lastRenderedState = r));
      }
      return [t.memoizedState, n.dispatch];
    }
    function An(e) {
      var t = Lt(),
        n = t.queue;
      if (n === null) throw Error(E(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var u = (i = i.next);
        do ((o = e(o, u.action)), (u = u.next));
        while (u !== i);
        (ye(o, t.memoizedState) || (Pe = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function la(e, t, n) {
      var r = t._getVersion;
      r = r(t._source);
      var i = t._workInProgressVersionPrimary;
      if (
        (i !== null
          ? (e = i === r)
          : ((e = e.mutableReadLanes),
            (e = (gr & e) === e) &&
              ((t._workInProgressVersionPrimary = r), on.push(t))),
        e)
      )
        return n(t._source);
      throw (on.push(t), Error(E(350)));
    }
    function Mc(e, t, n, r) {
      var i = ie;
      if (i === null) throw Error(E(349));
      var o = t._getVersion,
        u = o(t._source),
        l = er.current,
        s = l.useState(function () {
          return la(i, t, n);
        }),
        a = s[1],
        m = s[0];
      s = Y;
      var S = e.memoizedState,
        h = S.refs,
        y = h.getSnapshot,
        w = S.source;
      S = S.subscribe;
      var C = B;
      return (
        (e.memoizedState = { refs: h, source: t, subscribe: r }),
        l.useEffect(
          function () {
            ((h.getSnapshot = n), (h.setSnapshot = a));
            var d = o(t._source);
            if (!ye(u, d)) {
              ((d = n(t._source)),
                ye(m, d) ||
                  (a(d),
                  (d = ut(C)),
                  (i.mutableReadLanes |= d & i.pendingLanes)),
                (d = i.mutableReadLanes),
                (i.entangledLanes |= d));
              for (var c = i.entanglements, f = d; 0 < f; ) {
                var p = 31 - ct(f),
                  v = 1 << p;
                ((c[p] |= d), (f &= ~v));
              }
            }
          },
          [n, t, r],
        ),
        l.useEffect(
          function () {
            return r(t._source, function () {
              var d = h.getSnapshot,
                c = h.setSnapshot;
              try {
                c(d(t._source));
                var f = ut(C);
                i.mutableReadLanes |= f & i.pendingLanes;
              } catch (p) {
                c(function () {
                  throw p;
                });
              }
            });
          },
          [t, r],
        ),
        (ye(y, n) && ye(w, t) && ye(S, r)) ||
          ((e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Fe,
            lastRenderedState: m,
          }),
          (e.dispatch = a = dl.bind(null, B, e)),
          (s.queue = e),
          (s.baseQueue = null),
          (m = la(i, t, n)),
          (s.memoizedState = s.baseState = m)),
        m
      );
    }
    function Tc(e, t, n) {
      var r = Lt();
      return Mc(r, e, t, n);
    }
    function Un(e) {
      var t = Pt();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = t.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Fe,
            lastRenderedState: e,
          }),
        (e = e.dispatch = dl.bind(null, B, e)),
        [t.memoizedState, e]
      );
    }
    function Ni(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = B.updateQueue),
        t === null
          ? ((t = { lastEffect: null }),
            (B.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function sa(e) {
      var t = Pt();
      return ((e = { current: e }), (t.memoizedState = e));
    }
    function Fi() {
      return Lt().memoizedState;
    }
    function vu(e, t, n, r) {
      var i = Pt();
      ((B.flags |= e),
        (i.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function cl(e, t, n, r) {
      var i = Lt();
      r = r === void 0 ? null : r;
      var o = void 0;
      if (b !== null) {
        var u = b.memoizedState;
        if (((o = u.destroy), r !== null && sl(r, u.deps))) {
          Ni(t, n, o, r);
          return;
        }
      }
      ((B.flags |= e), (i.memoizedState = Ni(1 | t, n, o, r)));
    }
    function aa(e, t) {
      return vu(516, 4, e, t);
    }
    function Mi(e, t) {
      return cl(516, 4, e, t);
    }
    function Dc(e, t) {
      return cl(4, 2, e, t);
    }
    function Lc(e, t) {
      if (typeof t == "function")
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Ic(e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        cl(4, 2, Lc.bind(null, t, e), n)
      );
    }
    function fl() {}
    function Qc(e, t) {
      var n = Lt();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && sl(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function Ac(e, t) {
      var n = Lt();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && sl(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function Mp(e, t) {
      var n = fn();
      (Nt(98 > n ? 98 : n, function () {
        e(!0);
      }),
        Nt(97 < n ? 97 : n, function () {
          var r = we.transition;
          we.transition = 1;
          try {
            (e(!1), t());
          } finally {
            we.transition = r;
          }
        }));
    }
    function dl(e, t, n) {
      var r = de(),
        i = ut(e),
        o = {
          lane: i,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null,
        },
        u = t.pending;
      if (
        (u === null ? (o.next = o) : ((o.next = u.next), (u.next = o)),
        (t.pending = o),
        (u = e.alternate),
        e === B || (u !== null && u === B))
      )
        tr = Ri = !0;
      else {
        if (
          e.lanes === 0 &&
          (u === null || u.lanes === 0) &&
          ((u = t.lastRenderedReducer), u !== null)
        )
          try {
            var l = t.lastRenderedState,
              s = u(l, n);
            if (((o.eagerReducer = u), (o.eagerState = s), ye(s, l))) return;
          } catch {
          } finally {
          }
        lt(e, i, r);
      }
    }
    var Ti = {
        readContext: Se,
        useCallback: le,
        useContext: le,
        useEffect: le,
        useImperativeHandle: le,
        useLayoutEffect: le,
        useMemo: le,
        useReducer: le,
        useRef: le,
        useState: le,
        useDebugValue: le,
        useDeferredValue: le,
        useTransition: le,
        useMutableSource: le,
        useOpaqueIdentifier: le,
        unstable_isNewReconciler: !1,
      },
      Tp = {
        readContext: Se,
        useCallback: function (e, t) {
          return ((Pt().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Se,
        useEffect: aa,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = n != null ? n.concat([e]) : null),
            vu(4, 2, Lc.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return vu(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Pt();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = Pt();
          return (
            (t = n !== void 0 ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = r.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }),
            (e = e.dispatch = dl.bind(null, B, e)),
            [r.memoizedState, e]
          );
        },
        useRef: sa,
        useState: Un,
        useDebugValue: fl,
        useDeferredValue: function (e) {
          var t = Un(e),
            n = t[0],
            r = t[1];
          return (
            aa(
              function () {
                var i = we.transition;
                we.transition = 1;
                try {
                  r(e);
                } finally {
                  we.transition = i;
                }
              },
              [e],
            ),
            n
          );
        },
        useTransition: function () {
          var e = Un(!1),
            t = e[0];
          return ((e = Mp.bind(null, e[1])), sa(e), [e, t]);
        },
        useMutableSource: function (e, t, n) {
          var r = Pt();
          return (
            (r.memoizedState = {
              refs: { getSnapshot: t, setSnapshot: null },
              source: e,
              subscribe: n,
            }),
            Mc(r, e, t, n)
          );
        },
        useOpaqueIdentifier: function () {
          if (De) {
            var e = !1,
              t = _p(function () {
                throw (
                  e || ((e = !0), n("r:" + (Io++).toString(36))),
                  Error(E(355))
                );
              }),
              n = Un(t)[1];
            return (
              (B.mode & 2) === 0 &&
                ((B.flags |= 516),
                Ni(
                  5,
                  function () {
                    n("r:" + (Io++).toString(36));
                  },
                  void 0,
                  null,
                )),
              t
            );
          }
          return ((t = "r:" + (Io++).toString(36)), Un(t), t);
        },
        unstable_isNewReconciler: !1,
      },
      Dp = {
        readContext: Se,
        useCallback: Qc,
        useContext: Se,
        useEffect: Mi,
        useImperativeHandle: Ic,
        useLayoutEffect: Dc,
        useMemo: Ac,
        useReducer: Qn,
        useRef: Fi,
        useState: function () {
          return Qn(Fe);
        },
        useDebugValue: fl,
        useDeferredValue: function (e) {
          var t = Qn(Fe),
            n = t[0],
            r = t[1];
          return (
            Mi(
              function () {
                var i = we.transition;
                we.transition = 1;
                try {
                  r(e);
                } finally {
                  we.transition = i;
                }
              },
              [e],
            ),
            n
          );
        },
        useTransition: function () {
          var e = Qn(Fe)[0];
          return [Fi().current, e];
        },
        useMutableSource: Tc,
        useOpaqueIdentifier: function () {
          return Qn(Fe)[0];
        },
        unstable_isNewReconciler: !1,
      },
      Lp = {
        readContext: Se,
        useCallback: Qc,
        useContext: Se,
        useEffect: Mi,
        useImperativeHandle: Ic,
        useLayoutEffect: Dc,
        useMemo: Ac,
        useReducer: An,
        useRef: Fi,
        useState: function () {
          return An(Fe);
        },
        useDebugValue: fl,
        useDeferredValue: function (e) {
          var t = An(Fe),
            n = t[0],
            r = t[1];
          return (
            Mi(
              function () {
                var i = we.transition;
                we.transition = 1;
                try {
                  r(e);
                } finally {
                  we.transition = i;
                }
              },
              [e],
            ),
            n
          );
        },
        useTransition: function () {
          var e = An(Fe)[0];
          return [Fi().current, e];
        },
        useMutableSource: Tc,
        useOpaqueIdentifier: function () {
          return An(Fe)[0];
        },
        unstable_isNewReconciler: !1,
      },
      Ip = Tt.ReactCurrentOwner,
      Pe = !1;
    function se(e, t, n, r) {
      t.child = e === null ? Nc(t, null, n, r) : Pi(t, e.child, n, r);
    }
    function ca(e, t, n, r, i) {
      n = n.render;
      var o = t.ref;
      return (
        rn(t, i),
        (r = al(e, t, n, r, o, i)),
        e !== null && !Pe
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -517),
            (e.lanes &= ~i),
            qe(e, t, i))
          : ((t.flags |= 1), se(e, t, r, i), t.child)
      );
    }
    function fa(e, t, n, r, i, o) {
      if (e === null) {
        var u = n.type;
        return typeof u == "function" &&
          !gl(u) &&
          u.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = u), Uc(e, t, u, r, i, o))
          : ((e = di(n.type, null, r, t, t.mode, o)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      return (
        (u = e.child),
        (i & o) === 0 &&
        ((i = u.memoizedProps),
        (n = n.compare),
        (n = n !== null ? n : dr),
        n(i, r) && e.ref === t.ref)
          ? qe(e, t, o)
          : ((t.flags |= 1),
            (e = pt(u, r)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e))
      );
    }
    function Uc(e, t, n, r, i, o) {
      if (e !== null && dr(e.memoizedProps, r) && e.ref === t.ref)
        if (((Pe = !1), (o & i) !== 0)) (e.flags & 16384) !== 0 && (Pe = !0);
        else return ((t.lanes = e.lanes), qe(e, t, o));
      return yu(e, t, n, r, o);
    }
    function jo(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
      if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
        if ((t.mode & 4) === 0)
          ((t.memoizedState = { baseLanes: 0 }), ni(t, n));
        else if ((n & 1073741824) !== 0)
          ((t.memoizedState = { baseLanes: 0 }),
            ni(t, o !== null ? o.baseLanes : n));
        else
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e }),
            ni(t, e),
            null
          );
      else
        (o !== null
          ? ((r = o.baseLanes | n), (t.memoizedState = null))
          : (r = n),
          ni(t, r));
      return (se(e, t, i, n), t.child);
    }
    function jc(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        (t.flags |= 128);
    }
    function yu(e, t, n, r, i) {
      var o = ce(n) ? Rt : ne.current;
      return (
        (o = cn(t, o)),
        rn(t, i),
        (n = al(e, t, n, r, o, i)),
        e !== null && !Pe
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -517),
            (e.lanes &= ~i),
            qe(e, t, i))
          : ((t.flags |= 1), se(e, t, n, i), t.child)
      );
    }
    function da(e, t, n, r, i) {
      if (ce(n)) {
        var o = !0;
        li(t);
      } else o = !1;
      if ((rn(t, i), t.stateNode === null))
        (e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          Oc(t, n, r),
          pu(t, n, r, i),
          (r = !0));
      else if (e === null) {
        var u = t.stateNode,
          l = t.memoizedProps;
        u.props = l;
        var s = u.context,
          a = n.contextType;
        typeof a == "object" && a !== null
          ? (a = Se(a))
          : ((a = ce(n) ? Rt : ne.current), (a = cn(t, a)));
        var m = n.getDerivedStateFromProps,
          S =
            typeof m == "function" ||
            typeof u.getSnapshotBeforeUpdate == "function";
        (S ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((l !== r || s !== a) && ra(t, u, r, a)),
          (Xe = !1));
        var h = t.memoizedState;
        ((u.state = h),
          mr(t, r, u, i),
          (s = t.memoizedState),
          l !== r || h !== s || ae.current || Xe
            ? (typeof m == "function" &&
                (_i(t, n, m, r), (s = t.memoizedState)),
              (l = Xe || na(t, n, l, r, h, s, a))
                ? (S ||
                    (typeof u.UNSAFE_componentWillMount != "function" &&
                      typeof u.componentWillMount != "function") ||
                    (typeof u.componentWillMount == "function" &&
                      u.componentWillMount(),
                    typeof u.UNSAFE_componentWillMount == "function" &&
                      u.UNSAFE_componentWillMount()),
                  typeof u.componentDidMount == "function" && (t.flags |= 4))
                : (typeof u.componentDidMount == "function" && (t.flags |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = s)),
              (u.props = r),
              (u.state = s),
              (u.context = a),
              (r = l))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4),
              (r = !1)));
      } else {
        ((u = t.stateNode),
          _c(e, t),
          (l = t.memoizedProps),
          (a = t.type === t.elementType ? l : _e(t.type, l)),
          (u.props = a),
          (S = t.pendingProps),
          (h = u.context),
          (s = n.contextType),
          typeof s == "object" && s !== null
            ? (s = Se(s))
            : ((s = ce(n) ? Rt : ne.current), (s = cn(t, s))));
        var y = n.getDerivedStateFromProps;
        ((m =
          typeof y == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((l !== S || h !== s) && ra(t, u, r, s)),
          (Xe = !1),
          (h = t.memoizedState),
          (u.state = h),
          mr(t, r, u, i));
        var w = t.memoizedState;
        l !== S || h !== w || ae.current || Xe
          ? (typeof y == "function" && (_i(t, n, y, r), (w = t.memoizedState)),
            (a = Xe || na(t, n, a, r, h, w, s))
              ? (m ||
                  (typeof u.UNSAFE_componentWillUpdate != "function" &&
                    typeof u.componentWillUpdate != "function") ||
                  (typeof u.componentWillUpdate == "function" &&
                    u.componentWillUpdate(r, w, s),
                  typeof u.UNSAFE_componentWillUpdate == "function" &&
                    u.UNSAFE_componentWillUpdate(r, w, s)),
                typeof u.componentDidUpdate == "function" && (t.flags |= 4),
                typeof u.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 256))
              : (typeof u.componentDidUpdate != "function" ||
                  (l === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                typeof u.getSnapshotBeforeUpdate != "function" ||
                  (l === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 256),
                (t.memoizedProps = r),
                (t.memoizedState = w)),
            (u.props = r),
            (u.state = w),
            (u.context = s),
            (r = a))
          : (typeof u.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 256),
            (r = !1));
      }
      return gu(e, t, n, r, o, i);
    }
    function gu(e, t, n, r, i, o) {
      jc(e, t);
      var u = (t.flags & 64) !== 0;
      if (!r && !u) return (i && Zs(t, n, !1), qe(e, t, o));
      ((r = t.stateNode), (Ip.current = t));
      var l =
        u && typeof n.getDerivedStateFromError != "function"
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        e !== null && u
          ? ((t.child = Pi(t, e.child, null, o)), (t.child = Pi(t, null, l, o)))
          : se(e, t, l, o),
        (t.memoizedState = r.state),
        i && Zs(t, n, !0),
        t.child
      );
    }
    function pa(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? Xs(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Xs(e, t.context, !1),
        hu(e, t.containerInfo));
    }
    var ti = { dehydrated: null, retryLane: 0 };
    function ha(e, t, n) {
      var r = t.pendingProps,
        i = z.current,
        o = !1,
        u;
      return (
        (u = (t.flags & 64) !== 0) ||
          (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        u
          ? ((o = !0), (t.flags &= -65))
          : (e !== null && e.memoizedState === null) ||
            r.fallback === void 0 ||
            r.unstable_avoidThisFallback === !0 ||
            (i |= 1),
        $(z, i & 1),
        e === null
          ? (r.fallback !== void 0 && mu(t),
            (e = r.children),
            (i = r.fallback),
            o
              ? ((e = ma(t, e, i, n)),
                (t.child.memoizedState = { baseLanes: n }),
                (t.memoizedState = ti),
                e)
              : typeof r.unstable_expectedLoadTime == "number"
                ? ((e = ma(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = ti),
                  (t.lanes = 33554432),
                  e)
                : ((n = wl({ mode: "visible", children: e }, t.mode, n, null)),
                  (n.return = t),
                  (t.child = n)))
          : e.memoizedState !== null
            ? o
              ? ((r = ya(e, t, r.children, r.fallback, n)),
                (o = t.child),
                (i = e.child.memoizedState),
                (o.memoizedState =
                  i === null
                    ? { baseLanes: n }
                    : { baseLanes: i.baseLanes | n }),
                (o.childLanes = e.childLanes & ~n),
                (t.memoizedState = ti),
                r)
              : ((n = va(e, t, r.children, n)), (t.memoizedState = null), n)
            : o
              ? ((r = ya(e, t, r.children, r.fallback, n)),
                (o = t.child),
                (i = e.child.memoizedState),
                (o.memoizedState =
                  i === null
                    ? { baseLanes: n }
                    : { baseLanes: i.baseLanes | n }),
                (o.childLanes = e.childLanes & ~n),
                (t.memoizedState = ti),
                r)
              : ((n = va(e, t, r.children, n)), (t.memoizedState = null), n)
      );
    }
    function ma(e, t, n, r) {
      var i = e.mode,
        o = e.child;
      return (
        (t = { mode: "hidden", children: t }),
        (i & 2) === 0 && o !== null
          ? ((o.childLanes = 0), (o.pendingProps = t))
          : (o = wl(t, i, 0, null)),
        (n = sn(n, i, r, null)),
        (o.return = e),
        (n.return = e),
        (o.sibling = n),
        (e.child = o),
        n
      );
    }
    function va(e, t, n, r) {
      var i = e.child;
      return (
        (e = i.sibling),
        (n = pt(i, { mode: "visible", children: n })),
        (t.mode & 2) === 0 && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((e.nextEffect = null),
          (e.flags = 8),
          (t.firstEffect = t.lastEffect = e)),
        (t.child = n)
      );
    }
    function ya(e, t, n, r, i) {
      var o = t.mode,
        u = e.child;
      e = u.sibling;
      var l = { mode: "hidden", children: n };
      return (
        (o & 2) === 0 && t.child !== u
          ? ((n = t.child),
            (n.childLanes = 0),
            (n.pendingProps = l),
            (u = n.lastEffect),
            u !== null
              ? ((t.firstEffect = n.firstEffect),
                (t.lastEffect = u),
                (u.nextEffect = null))
              : (t.firstEffect = t.lastEffect = null))
          : (n = pt(u, l)),
        e !== null ? (r = pt(e, r)) : ((r = sn(r, o, i, null)), (r.flags |= 2)),
        (r.return = t),
        (n.return = t),
        (n.sibling = r),
        (t.child = n),
        r
      );
    }
    function ga(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      (n !== null && (n.lanes |= t), kc(e.return, t));
    }
    function zo(e, t, n, r, i, o) {
      var u = e.memoizedState;
      u === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            lastEffect: o,
          })
        : ((u.isBackwards = t),
          (u.rendering = null),
          (u.renderingStartTime = 0),
          (u.last = r),
          (u.tail = n),
          (u.tailMode = i),
          (u.lastEffect = o));
    }
    function wa(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
      if ((se(e, t, r.children, n), (r = z.current), (r & 2) !== 0))
        ((r = (r & 1) | 2), (t.flags |= 64));
      else {
        if (e !== null && (e.flags & 64) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && ga(e, n);
            else if (e.tag === 19) ga(e, n);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if (($(z, r), (t.mode & 2) === 0)) t.memoizedState = null;
      else
        switch (i) {
          case "forwards":
            for (n = t.child, i = null; n !== null; )
              ((e = n.alternate),
                e !== null && Oi(e) === null && (i = n),
                (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              zo(t, !1, i, n, o, t.lastEffect));
            break;
          case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && Oi(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            zo(t, !0, n, null, o, t.lastEffect);
            break;
          case "together":
            zo(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function qe(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Cr |= t.lanes),
        (n & t.childLanes) !== 0)
      ) {
        if (e !== null && t.child !== e.child) throw Error(E(153));
        if (t.child !== null) {
          for (
            e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;
          )
            ((e = e.sibling),
              (n = n.sibling = pt(e, e.pendingProps)),
              (n.return = t));
          n.sibling = null;
        }
        return t.child;
      }
      return null;
    }
    var zc, wu, $c, Bc;
    zc = function (e, t) {
      for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    };
    wu = function () {};
    $c = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        ((e = t.stateNode), _t(Te.current));
        var o = null;
        switch (n) {
          case "input":
            ((i = Wo(e, i)), (r = Wo(e, r)), (o = []));
            break;
          case "option":
            ((i = Go(e, i)), (r = Go(e, r)), (o = []));
            break;
          case "select":
            ((i = j({}, i, { value: void 0 })),
              (r = j({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((i = Xo(e, i)), (r = Xo(e, r)), (o = []));
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = wi);
        }
        bo(n, r);
        var u;
        n = null;
        for (a in i)
          if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
            if (a === "style") {
              var l = i[a];
              for (u in l) l.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              a !== "dangerouslySetInnerHTML" &&
                a !== "children" &&
                a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                a !== "autoFocus" &&
                (or.hasOwnProperty(a)
                  ? o || (o = [])
                  : (o = o || []).push(a, null));
        for (a in r) {
          var s = r[a];
          if (
            ((l = i != null ? i[a] : void 0),
            r.hasOwnProperty(a) && s !== l && (s != null || l != null))
          )
            if (a === "style")
              if (l) {
                for (u in l)
                  !l.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in s)
                  s.hasOwnProperty(u) &&
                    l[u] !== s[u] &&
                    (n || (n = {}), (n[u] = s[u]));
              } else (n || (o || (o = []), o.push(a, n)), (n = s));
            else
              a === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (l = l ? l.__html : void 0),
                  s != null && l !== s && (o = o || []).push(a, s))
                : a === "children"
                  ? (typeof s != "string" && typeof s != "number") ||
                    (o = o || []).push(a, "" + s)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    (or.hasOwnProperty(a)
                      ? (s != null && a === "onScroll" && A("scroll", e),
                        o || l === s || (o = []))
                      : typeof s == "object" && s !== null && s.$$typeof === ju
                        ? s.toString()
                        : (o = o || []).push(a, s));
        }
        n && (o = o || []).push("style", n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4);
      }
    };
    Bc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    };
    function jn(e, t) {
      if (!De)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Qp(e, t, n) {
      var r = t.pendingProps;
      switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return (ce(t.type) && Ei(), null);
        case 3:
          return (
            dn(),
            U(ae),
            U(ne),
            ll(),
            (r = t.stateNode),
            r.pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
            (e === null || e.child === null) &&
              (ei(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
            wu(t),
            null
          );
        case 5:
          ul(t);
          var i = _t(yr.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            ($c(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128));
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(E(166));
              return null;
            }
            if (((e = _t(Te.current)), ei(t))) {
              ((r = t.stateNode), (n = t.type));
              var o = t.memoizedProps;
              switch (((r[be] = t), (r[Si] = o), n)) {
                case "dialog":
                  (A("cancel", r), A("close", r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  A("load", r);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < Vn.length; e++) A(Vn[e], r);
                  break;
                case "source":
                  A("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  (A("error", r), A("load", r));
                  break;
                case "details":
                  A("toggle", r);
                  break;
                case "input":
                  (Es(r, o), A("invalid", r));
                  break;
                case "select":
                  ((r._wrapperState = { wasMultiple: !!o.multiple }),
                    A("invalid", r));
                  break;
                case "textarea":
                  (xs(r, o), A("invalid", r));
              }
              (bo(n, o), (e = null));
              for (var u in o)
                o.hasOwnProperty(u) &&
                  ((i = o[u]),
                  u === "children"
                    ? typeof i == "string"
                      ? r.textContent !== i && (e = ["children", i])
                      : typeof i == "number" &&
                        r.textContent !== "" + i &&
                        (e = ["children", "" + i])
                    : or.hasOwnProperty(u) &&
                      i != null &&
                      u === "onScroll" &&
                      A("scroll", r));
              switch (n) {
                case "input":
                  (Hr(r), Cs(r, o, !0));
                  break;
                case "textarea":
                  (Hr(r), ks(r));
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof o.onClick == "function" && (r.onclick = wi);
              }
              ((r = e), (t.updateQueue = r), r !== null && (t.flags |= 4));
            } else {
              switch (
                ((u = i.nodeType === 9 ? i : i.ownerDocument),
                e === Zo.html && (e = Ia(n)),
                e === Zo.html
                  ? n === "script"
                    ? ((e = u.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof r.is == "string"
                      ? (e = u.createElement(n, { is: r.is }))
                      : ((e = u.createElement(n)),
                        n === "select" &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                  : (e = u.createElementNS(e, n)),
                (e[be] = t),
                (e[Si] = r),
                zc(e, t, !1, !1),
                (t.stateNode = e),
                (u = eu(n, r)),
                n)
              ) {
                case "dialog":
                  (A("cancel", e), A("close", e), (i = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (A("load", e), (i = r));
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Vn.length; i++) A(Vn[i], e);
                  i = r;
                  break;
                case "source":
                  (A("error", e), (i = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (A("error", e), A("load", e), (i = r));
                  break;
                case "details":
                  (A("toggle", e), (i = r));
                  break;
                case "input":
                  (Es(e, r), (i = Wo(e, r)), A("invalid", e));
                  break;
                case "option":
                  i = Go(e, r);
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = j({}, r, { value: void 0 })),
                    A("invalid", e));
                  break;
                case "textarea":
                  (xs(e, r), (i = Xo(e, r)), A("invalid", e));
                  break;
                default:
                  i = r;
              }
              bo(n, i);
              var l = i;
              for (o in l)
                if (l.hasOwnProperty(o)) {
                  var s = l[o];
                  o === "style"
                    ? Ua(e, s)
                    : o === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Qa(e, s))
                      : o === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && ur(e, s)
                          : typeof s == "number" && ur(e, "" + s)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (or.hasOwnProperty(o)
                            ? s != null && o === "onScroll" && A("scroll", e)
                            : s != null && Du(e, o, s, u));
                }
              switch (n) {
                case "input":
                  (Hr(e), Cs(e, r, !1));
                  break;
                case "textarea":
                  (Hr(e), ks(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + at(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? bt(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        bt(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = wi);
              }
              mc(n, r) && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 128);
          }
          return null;
        case 6:
          if (e && t.stateNode != null) Bc(e, t, e.memoizedProps, r);
          else {
            if (typeof r != "string" && t.stateNode === null)
              throw Error(E(166));
            ((n = _t(yr.current)),
              _t(Te.current),
              ei(t)
                ? ((r = t.stateNode),
                  (n = t.memoizedProps),
                  (r[be] = t),
                  r.nodeValue !== n && (t.flags |= 4))
                : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(
                    r,
                  )),
                  (r[be] = t),
                  (t.stateNode = r)));
          }
          return null;
        case 13:
          return (
            U(z),
            (r = t.memoizedState),
            (t.flags & 64) !== 0
              ? ((t.lanes = n), t)
              : ((r = r !== null),
                (n = !1),
                e === null
                  ? t.memoizedProps.fallback !== void 0 && ei(t)
                  : (n = e.memoizedState !== null),
                r &&
                  !n &&
                  (t.mode & 2) !== 0 &&
                  ((e === null &&
                    t.memoizedProps.unstable_avoidThisFallback !== !0) ||
                  (z.current & 1) !== 0
                    ? G === 0 && (G = 3)
                    : ((G === 0 || G === 3) && (G = 4),
                      ie === null ||
                        ((Cr & 134217727) === 0 && (vn & 134217727) === 0) ||
                        un(ie, te))),
                (r || n) && (t.flags |= 4),
                null)
          );
        case 4:
          return (
            dn(),
            wu(t),
            e === null && dc(t.stateNode.containerInfo),
            null
          );
        case 10:
          return (il(t), null);
        case 17:
          return (ce(t.type) && Ei(), null);
        case 19:
          if ((U(z), (r = t.memoizedState), r === null)) return null;
          if (((o = (t.flags & 64) !== 0), (u = r.rendering), u === null))
            if (o) jn(r, !1);
            else {
              if (G !== 0 || (e !== null && (e.flags & 64) !== 0))
                for (e = t.child; e !== null; ) {
                  if (((u = Oi(e)), u !== null)) {
                    for (
                      t.flags |= 64,
                        jn(r, !1),
                        o = u.updateQueue,
                        o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                        r.lastEffect === null && (t.firstEffect = null),
                        t.lastEffect = r.lastEffect,
                        r = n,
                        n = t.child;
                      n !== null;
                    )
                      ((o = n),
                        (e = r),
                        (o.flags &= 2),
                        (o.nextEffect = null),
                        (o.firstEffect = null),
                        (o.lastEffect = null),
                        (u = o.alternate),
                        u === null
                          ? ((o.childLanes = 0),
                            (o.lanes = e),
                            (o.child = null),
                            (o.memoizedProps = null),
                            (o.memoizedState = null),
                            (o.updateQueue = null),
                            (o.dependencies = null),
                            (o.stateNode = null))
                          : ((o.childLanes = u.childLanes),
                            (o.lanes = u.lanes),
                            (o.child = u.child),
                            (o.memoizedProps = u.memoizedProps),
                            (o.memoizedState = u.memoizedState),
                            (o.updateQueue = u.updateQueue),
                            (o.type = u.type),
                            (e = u.dependencies),
                            (o.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (n = n.sibling));
                    return ($(z, (z.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                ee() > _u &&
                ((t.flags |= 64), (o = !0), jn(r, !1), (t.lanes = 33554432));
            }
          else {
            if (!o)
              if (((e = Oi(u)), e !== null)) {
                if (
                  ((t.flags |= 64),
                  (o = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  jn(r, !0),
                  r.tail === null &&
                    r.tailMode === "hidden" &&
                    !u.alternate &&
                    !De)
                )
                  return (
                    (t = t.lastEffect = r.lastEffect),
                    t !== null && (t.nextEffect = null),
                    null
                  );
              } else
                2 * ee() - r.renderingStartTime > _u &&
                  n !== 1073741824 &&
                  ((t.flags |= 64), (o = !0), jn(r, !1), (t.lanes = 33554432));
            r.isBackwards
              ? ((u.sibling = t.child), (t.child = u))
              : ((n = r.last),
                n !== null ? (n.sibling = u) : (t.child = u),
                (r.last = u));
          }
          return r.tail !== null
            ? ((n = r.tail),
              (r.rendering = n),
              (r.tail = n.sibling),
              (r.lastEffect = t.lastEffect),
              (r.renderingStartTime = ee()),
              (n.sibling = null),
              (t = z.current),
              $(z, o ? (t & 1) | 2 : t & 1),
              n)
            : null;
        case 23:
        case 24:
          return (
            yl(),
            e !== null &&
              (e.memoizedState !== null) != (t.memoizedState !== null) &&
              r.mode !== "unstable-defer-without-hiding" &&
              (t.flags |= 4),
            null
          );
      }
      throw Error(E(156, t.tag));
    }
    function Ap(e) {
      switch (e.tag) {
        case 1:
          ce(e.type) && Ei();
          var t = e.flags;
          return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
        case 3:
          if ((dn(), U(ae), U(ne), ll(), (t = e.flags), (t & 64) !== 0))
            throw Error(E(285));
          return ((e.flags = (t & -4097) | 64), e);
        case 5:
          return (ul(e), null);
        case 13:
          return (
            U(z),
            (t = e.flags),
            t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
          );
        case 19:
          return (U(z), null);
        case 4:
          return (dn(), null);
        case 10:
          return (il(e), null);
        case 23:
        case 24:
          return (yl(), null);
        default:
          return null;
      }
    }
    function pl(e, t) {
      try {
        var n = "",
          r = t;
        do ((n += yd(r)), (r = r.return));
        while (r);
        var i = n;
      } catch (o) {
        i =
          `
Error generating stack: ` +
          o.message +
          `
` +
          o.stack;
      }
      return { value: e, source: t, stack: i };
    }
    function Su(e, t) {
      try {
        console.error(t.value);
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    var Up = typeof WeakMap == "function" ? WeakMap : Map;
    function qc(e, t, n) {
      ((n = it(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (Li || ((Li = !0), (Pu = r)), Su(e, t));
        }),
        n
      );
    }
    function Vc(e, t, n) {
      ((n = it(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
          return (Su(e, t), r(i));
        };
      }
      var o = e.stateNode;
      return (
        o !== null &&
          typeof o.componentDidCatch == "function" &&
          (n.callback = function () {
            typeof r != "function" &&
              (Me === null ? (Me = new Set([this])) : Me.add(this), Su(e, t));
            var u = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: u !== null ? u : "",
            });
          }),
        n
      );
    }
    var jp = typeof WeakSet == "function" ? WeakSet : Set;
    function Sa(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function")
          try {
            t(null);
          } catch (n) {
            st(e, n);
          }
        else t.current = null;
    }
    function zp(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (t.flags & 256 && e !== null) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            ((e = t.stateNode),
              (t = e.getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : _e(t.type, n),
                r,
              )),
              (e.__reactInternalSnapshotBeforeUpdate = t));
          }
          return;
        case 3:
          t.flags & 256 && el(t.stateNode.containerInfo);
          return;
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(E(163));
    }
    function $p(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          if (
            ((t = n.updateQueue),
            (t = t !== null ? t.lastEffect : null),
            t !== null)
          ) {
            e = t = t.next;
            do {
              if ((e.tag & 3) === 3) {
                var r = e.create;
                e.destroy = r();
              }
              e = e.next;
            } while (e !== t);
          }
          if (
            ((t = n.updateQueue),
            (t = t !== null ? t.lastEffect : null),
            t !== null)
          ) {
            e = t = t.next;
            do {
              var i = e;
              ((r = i.next),
                (i = i.tag),
                (i & 4) !== 0 && (i & 1) !== 0 && (bc(n, e), Gp(n, e)),
                (e = r));
            } while (e !== t);
          }
          return;
        case 1:
          ((e = n.stateNode),
            n.flags & 4 &&
              (t === null
                ? e.componentDidMount()
                : ((r =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : _e(n.type, t.memoizedProps)),
                  e.componentDidUpdate(
                    r,
                    t.memoizedState,
                    e.__reactInternalSnapshotBeforeUpdate,
                  ))),
            (t = n.updateQueue),
            t !== null && ta(n, t, e));
          return;
        case 3:
          if (((t = n.updateQueue), t !== null)) {
            if (((e = null), n.child !== null))
              switch (n.child.tag) {
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }
            ta(n, t, e);
          }
          return;
        case 5:
          ((e = n.stateNode),
            t === null &&
              n.flags & 4 &&
              mc(n.type, n.memoizedProps) &&
              e.focus());
          return;
        case 6:
          return;
        case 4:
          return;
        case 12:
          return;
        case 13:
          n.memoizedState === null &&
            ((n = n.alternate),
            n !== null &&
              ((n = n.memoizedState),
              n !== null && ((n = n.dehydrated), n !== null && Ya(n))));
          return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(E(163));
    }
    function Ea(e, t) {
      for (var n = e; ; ) {
        if (n.tag === 5) {
          var r = n.stateNode;
          if (t)
            ((r = r.style),
              typeof r.setProperty == "function"
                ? r.setProperty("display", "none", "important")
                : (r.display = "none"));
          else {
            r = n.stateNode;
            var i = n.memoizedProps.style;
            ((i = i != null && i.hasOwnProperty("display") ? i.display : null),
              (r.style.display = Aa("display", i)));
          }
        } else if (n.tag === 6)
          n.stateNode.nodeValue = t ? "" : n.memoizedProps;
        else if (
          ((n.tag !== 23 && n.tag !== 24) ||
            n.memoizedState === null ||
            n === e) &&
          n.child !== null
        ) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    function Ca(e, t) {
      if (Ot && typeof Ot.onCommitFiberUnmount == "function")
        try {
          Ot.onCommitFiberUnmount(tl, t);
        } catch {}
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (
            ((e = t.updateQueue),
            e !== null && ((e = e.lastEffect), e !== null))
          ) {
            var n = (e = e.next);
            do {
              var r = n,
                i = r.destroy;
              if (((r = r.tag), i !== void 0))
                if ((r & 4) !== 0) bc(t, n);
                else {
                  r = t;
                  try {
                    i();
                  } catch (o) {
                    st(r, o);
                  }
                }
              n = n.next;
            } while (n !== e);
          }
          break;
        case 1:
          if (
            (Sa(t),
            (e = t.stateNode),
            typeof e.componentWillUnmount == "function")
          )
            try {
              ((e.props = t.memoizedProps),
                (e.state = t.memoizedState),
                e.componentWillUnmount());
            } catch (o) {
              st(t, o);
            }
          break;
        case 5:
          Sa(t);
          break;
        case 4:
          Hc(e, t);
      }
    }
    function xa(e) {
      ((e.alternate = null),
        (e.child = null),
        (e.dependencies = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.return = null),
        (e.updateQueue = null));
    }
    function ka(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function _a(e) {
      e: {
        for (var t = e.return; t !== null; ) {
          if (ka(t)) break e;
          t = t.return;
        }
        throw Error(E(160));
      }
      var n = t;
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
          ((t = t.containerInfo), (r = !0));
          break;
        case 4:
          ((t = t.containerInfo), (r = !0));
          break;
        default:
          throw Error(E(161));
      }
      n.flags & 16 && (ur(t, ""), (n.flags &= -17));
      e: t: for (n = e; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || ka(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          n.tag !== 5 && n.tag !== 6 && n.tag !== 18;
        ) {
          if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
          ((n.child.return = n), (n = n.child));
        }
        if (!(n.flags & 2)) {
          n = n.stateNode;
          break e;
        }
      }
      r ? Eu(e, n, t) : Cu(e, n, t);
    }
    function Eu(e, t, n) {
      var r = e.tag,
        i = r === 5 || r === 6;
      if (i)
        ((e = i ? e.stateNode : e.stateNode.instance),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = wi)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Eu(e, t, n), e = e.sibling; e !== null; )
          (Eu(e, t, n), (e = e.sibling));
    }
    function Cu(e, t, n) {
      var r = e.tag,
        i = r === 5 || r === 6;
      if (i)
        ((e = i ? e.stateNode : e.stateNode.instance),
          t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Cu(e, t, n), e = e.sibling; e !== null; )
          (Cu(e, t, n), (e = e.sibling));
    }
    function Hc(e, t) {
      for (var n = t, r = !1, i, o; ; ) {
        if (!r) {
          r = n.return;
          e: for (;;) {
            if (r === null) throw Error(E(160));
            switch (((i = r.stateNode), r.tag)) {
              case 5:
                o = !1;
                break e;
              case 3:
                ((i = i.containerInfo), (o = !0));
                break e;
              case 4:
                ((i = i.containerInfo), (o = !0));
                break e;
            }
            r = r.return;
          }
          r = !0;
        }
        if (n.tag === 5 || n.tag === 6) {
          e: for (var u = e, l = n, s = l; ; )
            if ((Ca(u, s), s.child !== null && s.tag !== 4))
              ((s.child.return = s), (s = s.child));
            else {
              if (s === l) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === l) break e;
                s = s.return;
              }
              ((s.sibling.return = s.return), (s = s.sibling));
            }
          o
            ? ((u = i),
              (l = n.stateNode),
              u.nodeType === 8 ? u.parentNode.removeChild(l) : u.removeChild(l))
            : i.removeChild(n.stateNode);
        } else if (n.tag === 4) {
          if (n.child !== null) {
            ((i = n.stateNode.containerInfo),
              (o = !0),
              (n.child.return = n),
              (n = n.child));
            continue;
          }
        } else if ((Ca(e, n), n.child !== null)) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return;
          ((n = n.return), n.tag === 4 && (r = !1));
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    function $o(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var n = t.updateQueue;
          if (((n = n !== null ? n.lastEffect : null), n !== null)) {
            var r = (n = n.next);
            do
              ((r.tag & 3) === 3 &&
                ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
                (r = r.next));
            while (r !== n);
          }
          return;
        case 1:
          return;
        case 5:
          if (((n = t.stateNode), n != null)) {
            r = t.memoizedProps;
            var i = e !== null ? e.memoizedProps : r;
            e = t.type;
            var o = t.updateQueue;
            if (((t.updateQueue = null), o !== null)) {
              for (
                n[Si] = r,
                  e === "input" &&
                    r.type === "radio" &&
                    r.name != null &&
                    Da(n, r),
                  eu(e, i),
                  t = eu(e, r),
                  i = 0;
                i < o.length;
                i += 2
              ) {
                var u = o[i],
                  l = o[i + 1];
                u === "style"
                  ? Ua(n, l)
                  : u === "dangerouslySetInnerHTML"
                    ? Qa(n, l)
                    : u === "children"
                      ? ur(n, l)
                      : Du(n, u, l, t);
              }
              switch (e) {
                case "input":
                  Ko(n, r);
                  break;
                case "textarea":
                  La(n, r);
                  break;
                case "select":
                  ((e = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? bt(n, !!r.multiple, o, !1)
                      : e !== !!r.multiple &&
                        (r.defaultValue != null
                          ? bt(n, !!r.multiple, r.defaultValue, !0)
                          : bt(n, !!r.multiple, r.multiple ? [] : "", !1)));
              }
            }
          }
          return;
        case 6:
          if (t.stateNode === null) throw Error(E(162));
          t.stateNode.nodeValue = t.memoizedProps;
          return;
        case 3:
          ((n = t.stateNode),
            n.hydrate && ((n.hydrate = !1), Ya(n.containerInfo)));
          return;
        case 12:
          return;
        case 13:
          (t.memoizedState !== null && ((vl = ee()), Ea(t.child, !0)), Pa(t));
          return;
        case 19:
          Pa(t);
          return;
        case 17:
          return;
        case 23:
        case 24:
          Ea(t, t.memoizedState !== null);
          return;
      }
      throw Error(E(163));
    }
    function Pa(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new jp()),
          t.forEach(function (r) {
            var i = Jp.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i));
          }));
      }
    }
    function Bp(e, t) {
      return e !== null &&
        ((e = e.memoizedState), e === null || e.dehydrated !== null)
        ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
        : !1;
    }
    var qp = Math.ceil,
      Di = Tt.ReactCurrentDispatcher,
      hl = Tt.ReactCurrentOwner,
      O = 0,
      ie = null,
      H = null,
      te = 0,
      Ft = 0,
      xu = ht(0),
      G = 0,
      Ki = null,
      mn = 0,
      Cr = 0,
      vn = 0,
      ml = 0,
      ku = null,
      vl = 0,
      _u = 1 / 0;
    function yn() {
      _u = ee() + 500;
    }
    var x = null,
      Li = !1,
      Pu = null,
      Me = null,
      dt = !1,
      nr = null,
      Hn = 90,
      Ou = [],
      Ru = [],
      Ve = null,
      rr = 0,
      Nu = null,
      ai = -1,
      $e = 0,
      ci = 0,
      ir = null,
      fi = !1;
    function de() {
      return (O & 48) !== 0 ? ee() : ai !== -1 ? ai : (ai = ee());
    }
    function ut(e) {
      if (((e = e.mode), (e & 2) === 0)) return 1;
      if ((e & 4) === 0) return fn() === 99 ? 1 : 2;
      if (($e === 0 && ($e = mn), Fp.transition !== 0)) {
        (ci !== 0 && (ci = ku !== null ? ku.pendingLanes : 0), (e = $e));
        var t = 4186112 & ~ci;
        return (
          (t &= -t),
          t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
          t
        );
      }
      return (
        (e = fn()),
        (O & 4) !== 0 && e === 98
          ? (e = yi(12, $e))
          : ((e = Dd(e)), (e = yi(e, $e))),
        e
      );
    }
    function lt(e, t, n) {
      if (50 < rr) throw ((rr = 0), (Nu = null), Error(E(185)));
      if (((e = Yi(e, t)), e === null)) return null;
      (zi(e, t, n), e === ie && ((vn |= t), G === 4 && un(e, te)));
      var r = fn();
      (t === 1
        ? (O & 8) !== 0 && (O & 48) === 0
          ? Fu(e)
          : (Ee(e, n), O === 0 && (yn(), Le()))
        : ((O & 4) === 0 ||
            (r !== 98 && r !== 99) ||
            (Ve === null ? (Ve = new Set([e])) : Ve.add(e)),
          Ee(e, n)),
        (ku = e));
    }
    function Yi(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    function Ee(e, t) {
      for (
        var n = e.callbackNode,
          r = e.suspendedLanes,
          i = e.pingedLanes,
          o = e.expirationTimes,
          u = e.pendingLanes;
        0 < u;
      ) {
        var l = 31 - ct(u),
          s = 1 << l,
          a = o[l];
        if (a === -1) {
          if ((s & r) === 0 || (s & i) !== 0) {
            ((a = t), Vt(s));
            var m = Q;
            o[l] = 10 <= m ? a + 250 : 6 <= m ? a + 5e3 : -1;
          }
        } else a <= t && (e.expiredLanes |= s);
        u &= ~s;
      }
      if (((r = cr(e, e === ie ? te : 0)), (t = Q), r === 0))
        n !== null &&
          (n !== Qo && fu(n),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else {
        if (n !== null) {
          if (e.callbackPriority === t) return;
          n !== Qo && fu(n);
        }
        (t === 15
          ? ((n = Fu.bind(null, e)),
            ze === null ? ((ze = [n]), (si = nl(Hi, xc))) : ze.push(n),
            (n = Qo))
          : t === 14
            ? (n = hr(99, Fu.bind(null, e)))
            : ((n = Ld(t)), (n = hr(n, Wc.bind(null, e)))),
          (e.callbackPriority = t),
          (e.callbackNode = n));
      }
    }
    function Wc(e) {
      if (((ai = -1), (ci = $e = 0), (O & 48) !== 0)) throw Error(E(327));
      var t = e.callbackNode;
      if (mt() && e.callbackNode !== t) return null;
      var n = cr(e, e === ie ? te : 0);
      if (n === 0) return null;
      var r = n,
        i = O;
      O |= 16;
      var o = Xc();
      (ie !== e || te !== r) && (yn(), ln(e, r));
      do
        try {
          Wp();
          break;
        } catch (l) {
          Gc(e, l);
        }
      while (1);
      if (
        (rl(),
        (Di.current = o),
        (O = i),
        H !== null ? (r = 0) : ((ie = null), (te = 0), (r = G)),
        (mn & vn) !== 0)
      )
        ln(e, 0);
      else if (r !== 0) {
        if (
          (r === 2 &&
            ((O |= 64),
            e.hydrate && ((e.hydrate = !1), el(e.containerInfo)),
            (n = tc(e)),
            n !== 0 && (r = Wn(e, n))),
          r === 1)
        )
          throw ((t = Ki), ln(e, 0), un(e, n), Ee(e, ee()), t);
        switch (
          ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
        ) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Et(e);
            break;
          case 3:
            if (
              (un(e, n),
              (n & 62914560) === n && ((r = vl + 500 - ee()), 10 < r))
            ) {
              if (cr(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & n) !== n)) {
                (de(), (e.pingedLanes |= e.suspendedLanes & i));
                break;
              }
              e.timeoutHandle = Ks(Et.bind(null, e), r);
              break;
            }
            Et(e);
            break;
          case 4:
            if ((un(e, n), (n & 4186112) === n)) break;
            for (r = e.eventTimes, i = -1; 0 < n; ) {
              var u = 31 - ct(n);
              ((o = 1 << u), (u = r[u]), u > i && (i = u), (n &= ~o));
            }
            if (
              ((n = i),
              (n = ee() - n),
              (n =
                (120 > n
                  ? 120
                  : 480 > n
                    ? 480
                    : 1080 > n
                      ? 1080
                      : 1920 > n
                        ? 1920
                        : 3e3 > n
                          ? 3e3
                          : 4320 > n
                            ? 4320
                            : 1960 * qp(n / 1960)) - n),
              10 < n)
            ) {
              e.timeoutHandle = Ks(Et.bind(null, e), n);
              break;
            }
            Et(e);
            break;
          case 5:
            Et(e);
            break;
          default:
            throw Error(E(329));
        }
      }
      return (Ee(e, ee()), e.callbackNode === t ? Wc.bind(null, e) : null);
    }
    function un(e, t) {
      for (
        t &= ~ml,
          t &= ~vn,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - ct(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function Fu(e) {
      if ((O & 48) !== 0) throw Error(E(327));
      if ((mt(), e === ie && (e.expiredLanes & te) !== 0)) {
        var t = te,
          n = Wn(e, t);
        (mn & vn) !== 0 && ((t = cr(e, t)), (n = Wn(e, t)));
      } else ((t = cr(e, 0)), (n = Wn(e, t)));
      if (
        (e.tag !== 0 &&
          n === 2 &&
          ((O |= 64),
          e.hydrate && ((e.hydrate = !1), el(e.containerInfo)),
          (t = tc(e)),
          t !== 0 && (n = Wn(e, t))),
        n === 1)
      )
        throw ((n = Ki), ln(e, 0), un(e, t), Ee(e, ee()), n);
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Et(e),
        Ee(e, ee()),
        null
      );
    }
    function Vp() {
      if (Ve !== null) {
        var e = Ve;
        ((Ve = null),
          e.forEach(function (t) {
            ((t.expiredLanes |= 24 & t.pendingLanes), Ee(t, ee()));
          }));
      }
      Le();
    }
    function Kc(e, t) {
      var n = O;
      O |= 1;
      try {
        return e(t);
      } finally {
        ((O = n), O === 0 && (yn(), Le()));
      }
    }
    function Yc(e, t) {
      var n = O;
      ((O &= -2), (O |= 8));
      try {
        return e(t);
      } finally {
        ((O = n), O === 0 && (yn(), Le()));
      }
    }
    function ni(e, t) {
      ($(xu, Ft), (Ft |= t), (mn |= t));
    }
    function yl() {
      ((Ft = xu.current), U(xu));
    }
    function ln(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), kp(n)), H !== null))
        for (n = H.return; n !== null; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              ((r = r.type.childContextTypes), r != null && Ei());
              break;
            case 3:
              (dn(), U(ae), U(ne), ll());
              break;
            case 5:
              ul(r);
              break;
            case 4:
              dn();
              break;
            case 13:
              U(z);
              break;
            case 19:
              U(z);
              break;
            case 10:
              il(r);
              break;
            case 23:
            case 24:
              yl();
          }
          n = n.return;
        }
      ((ie = e),
        (H = pt(e.current, null)),
        (te = Ft = mn = t),
        (G = 0),
        (Ki = null),
        (ml = vn = Cr = 0));
    }
    function Gc(e, t) {
      do {
        var n = H;
        try {
          if ((rl(), (er.current = Ti), Ri)) {
            for (var r = B.memoizedState; r !== null; ) {
              var i = r.queue;
              (i !== null && (i.pending = null), (r = r.next));
            }
            Ri = !1;
          }
          if (
            ((gr = 0),
            (Y = b = B = null),
            (tr = !1),
            (hl.current = null),
            n === null || n.return === null)
          ) {
            ((G = 1), (Ki = t), (H = null));
            break;
          }
          e: {
            var o = e,
              u = n.return,
              l = n,
              s = t;
            if (
              ((t = te),
              (l.flags |= 2048),
              (l.firstEffect = l.lastEffect = null),
              s !== null && typeof s == "object" && typeof s.then == "function")
            ) {
              var a = s;
              if ((l.mode & 2) === 0) {
                var m = l.alternate;
                m
                  ? ((l.updateQueue = m.updateQueue),
                    (l.memoizedState = m.memoizedState),
                    (l.lanes = m.lanes))
                  : ((l.updateQueue = null), (l.memoizedState = null));
              }
              var S = (z.current & 1) !== 0,
                h = u;
              do {
                var y;
                if ((y = h.tag === 13)) {
                  var w = h.memoizedState;
                  if (w !== null) y = w.dehydrated !== null;
                  else {
                    var C = h.memoizedProps;
                    y =
                      C.fallback === void 0
                        ? !1
                        : C.unstable_avoidThisFallback !== !0
                          ? !0
                          : !S;
                  }
                }
                if (y) {
                  var d = h.updateQueue;
                  if (d === null) {
                    var c = new Set();
                    (c.add(a), (h.updateQueue = c));
                  } else d.add(a);
                  if ((h.mode & 2) === 0) {
                    if (
                      ((h.flags |= 64),
                      (l.flags |= 16384),
                      (l.flags &= -2981),
                      l.tag === 1)
                    )
                      if (l.alternate === null) l.tag = 17;
                      else {
                        var f = it(-1, 1);
                        ((f.tag = 2), ot(l, f));
                      }
                    l.lanes |= 1;
                    break e;
                  }
                  ((s = void 0), (l = t));
                  var p = o.pingCache;
                  if (
                    (p === null
                      ? ((p = o.pingCache = new Up()),
                        (s = new Set()),
                        p.set(a, s))
                      : ((s = p.get(a)),
                        s === void 0 && ((s = new Set()), p.set(a, s))),
                    !s.has(l))
                  ) {
                    s.add(l);
                    var v = Zp.bind(null, o, a, l);
                    a.then(v, v);
                  }
                  ((h.flags |= 4096), (h.lanes = t));
                  break e;
                }
                h = h.return;
              } while (h !== null);
              s = Error(
                (Jt(l.type) || "A React component") +
                  ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
              );
            }
            (G !== 5 && (G = 2), (s = pl(s, l)), (h = u));
            do {
              switch (h.tag) {
                case 3:
                  ((o = s), (h.flags |= 4096), (t &= -t), (h.lanes |= t));
                  var k = qc(h, o, t);
                  ea(h, k);
                  break e;
                case 1:
                  o = s;
                  var g = h.type,
                    _ = h.stateNode;
                  if (
                    (h.flags & 64) === 0 &&
                    (typeof g.getDerivedStateFromError == "function" ||
                      (_ !== null &&
                        typeof _.componentDidCatch == "function" &&
                        (Me === null || !Me.has(_))))
                  ) {
                    ((h.flags |= 4096), (t &= -t), (h.lanes |= t));
                    var R = Vc(h, o, t);
                    ea(h, R);
                    break e;
                  }
              }
              h = h.return;
            } while (h !== null);
          }
          Jc(n);
        } catch (P) {
          ((t = P), H === n && n !== null && (H = n = n.return));
          continue;
        }
        break;
      } while (1);
    }
    function Xc() {
      var e = Di.current;
      return ((Di.current = Ti), e === null ? Ti : e);
    }
    function Wn(e, t) {
      var n = O;
      O |= 16;
      var r = Xc();
      (ie === e && te === t) || ln(e, t);
      do
        try {
          Hp();
          break;
        } catch (i) {
          Gc(e, i);
        }
      while (1);
      if ((rl(), (O = n), (Di.current = r), H !== null)) throw Error(E(261));
      return ((ie = null), (te = 0), G);
    }
    function Hp() {
      for (; H !== null; ) Zc(H);
    }
    function Wp() {
      for (; H !== null && !Op(); ) Zc(H);
    }
    function Zc(e) {
      var t = ef(e.alternate, e, Ft);
      ((e.memoizedProps = e.pendingProps),
        t === null ? Jc(e) : (H = t),
        (hl.current = null));
    }
    function Jc(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), (t.flags & 2048) === 0)) {
          if (((n = Qp(n, t, Ft)), n !== null)) {
            H = n;
            return;
          }
          if (
            ((n = t),
            (n.tag !== 24 && n.tag !== 23) ||
              n.memoizedState === null ||
              (Ft & 1073741824) !== 0 ||
              (n.mode & 4) === 0)
          ) {
            for (var r = 0, i = n.child; i !== null; )
              ((r |= i.lanes | i.childLanes), (i = i.sibling));
            n.childLanes = r;
          }
          e !== null &&
            (e.flags & 2048) === 0 &&
            (e.firstEffect === null && (e.firstEffect = t.firstEffect),
            t.lastEffect !== null &&
              (e.lastEffect !== null &&
                (e.lastEffect.nextEffect = t.firstEffect),
              (e.lastEffect = t.lastEffect)),
            1 < t.flags &&
              (e.lastEffect !== null
                ? (e.lastEffect.nextEffect = t)
                : (e.firstEffect = t),
              (e.lastEffect = t)));
        } else {
          if (((n = Ap(t)), n !== null)) {
            ((n.flags &= 2047), (H = n));
            return;
          }
          e !== null &&
            ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
        }
        if (((t = t.sibling), t !== null)) {
          H = t;
          return;
        }
        H = t = e;
      } while (t !== null);
      G === 0 && (G = 5);
    }
    function Et(e) {
      var t = fn();
      return (Nt(99, Kp.bind(null, e, t)), null);
    }
    function Kp(e, t) {
      do mt();
      while (nr !== null);
      if ((O & 48) !== 0) throw Error(E(327));
      var n = e.finishedWork;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(E(177));
      e.callbackNode = null;
      var r = n.lanes | n.childLanes,
        i = r,
        o = e.pendingLanes & ~i;
      ((e.pendingLanes = i),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= i),
        (e.mutableReadLanes &= i),
        (e.entangledLanes &= i),
        (i = e.entanglements));
      for (var u = e.eventTimes, l = e.expirationTimes; 0 < o; ) {
        var s = 31 - ct(o),
          a = 1 << s;
        ((i[s] = 0), (u[s] = -1), (l[s] = -1), (o &= ~a));
      }
      if (
        (Ve !== null && (r & 24) === 0 && Ve.has(e) && Ve.delete(e),
        e === ie && ((H = ie = null), (te = 0)),
        1 < n.flags
          ? n.lastEffect !== null
            ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
            : (r = n)
          : (r = n.firstEffect),
        r !== null)
      ) {
        if (
          ((i = O),
          (O |= 32),
          (hl.current = null),
          (Do = ii),
          (u = $s()),
          uu(u))
        ) {
          if ("selectionStart" in u)
            l = { start: u.selectionStart, end: u.selectionEnd };
          else
            e: if (
              ((l = ((l = u.ownerDocument) && l.defaultView) || window),
              (a = l.getSelection && l.getSelection()) && a.rangeCount !== 0)
            ) {
              ((l = a.anchorNode),
                (o = a.anchorOffset),
                (s = a.focusNode),
                (a = a.focusOffset));
              try {
                (l.nodeType, s.nodeType);
              } catch {
                l = null;
                break e;
              }
              var m = 0,
                S = -1,
                h = -1,
                y = 0,
                w = 0,
                C = u,
                d = null;
              t: for (;;) {
                for (
                  var c;
                  C !== l || (o !== 0 && C.nodeType !== 3) || (S = m + o),
                    C !== s || (a !== 0 && C.nodeType !== 3) || (h = m + a),
                    C.nodeType === 3 && (m += C.nodeValue.length),
                    (c = C.firstChild) !== null;
                )
                  ((d = C), (C = c));
                for (;;) {
                  if (C === u) break t;
                  if (
                    (d === l && ++y === o && (S = m),
                    d === s && ++w === a && (h = m),
                    (c = C.nextSibling) !== null)
                  )
                    break;
                  ((C = d), (d = C.parentNode));
                }
                C = c;
              }
              l = S === -1 || h === -1 ? null : { start: S, end: h };
            } else l = null;
          l = l || { start: 0, end: 0 };
        } else l = null;
        ((Lo = { focusedElem: u, selectionRange: l }),
          (ii = !1),
          (ir = null),
          (fi = !1),
          (x = r));
        do
          try {
            Yp();
          } catch (P) {
            if (x === null) throw Error(E(330));
            (st(x, P), (x = x.nextEffect));
          }
        while (x !== null);
        ((ir = null), (x = r));
        do
          try {
            for (u = e; x !== null; ) {
              var f = x.flags;
              if ((f & 16 && ur(x.stateNode, ""), f & 128)) {
                var p = x.alternate;
                if (p !== null) {
                  var v = p.ref;
                  v !== null &&
                    (typeof v == "function" ? v(null) : (v.current = null));
                }
              }
              switch (f & 1038) {
                case 2:
                  (_a(x), (x.flags &= -3));
                  break;
                case 6:
                  (_a(x), (x.flags &= -3), $o(x.alternate, x));
                  break;
                case 1024:
                  x.flags &= -1025;
                  break;
                case 1028:
                  ((x.flags &= -1025), $o(x.alternate, x));
                  break;
                case 4:
                  $o(x.alternate, x);
                  break;
                case 8:
                  ((l = x), Hc(u, l));
                  var k = l.alternate;
                  (xa(l), k !== null && xa(k));
              }
              x = x.nextEffect;
            }
          } catch (P) {
            if (x === null) throw Error(E(330));
            (st(x, P), (x = x.nextEffect));
          }
        while (x !== null);
        if (
          ((v = Lo),
          (p = $s()),
          (f = v.focusedElem),
          (u = v.selectionRange),
          p !== f &&
            f &&
            f.ownerDocument &&
            ac(f.ownerDocument.documentElement, f))
        ) {
          for (
            u !== null &&
              uu(f) &&
              ((p = u.start),
              (v = u.end),
              v === void 0 && (v = p),
              ("selectionStart" in f)
                ? ((f.selectionStart = p),
                  (f.selectionEnd = Math.min(v, f.value.length)))
                : ((v =
                    ((p = f.ownerDocument || document) && p.defaultView) ||
                    window),
                  v.getSelection &&
                    ((v = v.getSelection()),
                    (l = f.textContent.length),
                    (k = Math.min(u.start, l)),
                    (u = u.end === void 0 ? k : Math.min(u.end, l)),
                    !v.extend && k > u && ((l = u), (u = k), (k = l)),
                    (l = zs(f, k)),
                    (o = zs(f, u)),
                    l &&
                      o &&
                      (v.rangeCount !== 1 ||
                        v.anchorNode !== l.node ||
                        v.anchorOffset !== l.offset ||
                        v.focusNode !== o.node ||
                        v.focusOffset !== o.offset) &&
                      ((p = p.createRange()),
                      p.setStart(l.node, l.offset),
                      v.removeAllRanges(),
                      k > u
                        ? (v.addRange(p), v.extend(o.node, o.offset))
                        : (p.setEnd(o.node, o.offset), v.addRange(p)))))),
              p = [],
              v = f;
            (v = v.parentNode);
          )
            v.nodeType === 1 &&
              p.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
          for (
            typeof f.focus == "function" && f.focus(), f = 0;
            f < p.length;
            f++
          )
            ((v = p[f]),
              (v.element.scrollLeft = v.left),
              (v.element.scrollTop = v.top));
        }
        ((ii = !!Do), (Lo = Do = null), (e.current = n), (x = r));
        do
          try {
            for (f = e; x !== null; ) {
              var g = x.flags;
              if ((g & 36 && $p(f, x.alternate, x), g & 128)) {
                p = void 0;
                var _ = x.ref;
                if (_ !== null) {
                  var R = x.stateNode;
                  switch (x.tag) {
                    case 5:
                      p = R;
                      break;
                    default:
                      p = R;
                  }
                  typeof _ == "function" ? _(p) : (_.current = p);
                }
              }
              x = x.nextEffect;
            }
          } catch (P) {
            if (x === null) throw Error(E(330));
            (st(x, P), (x = x.nextEffect));
          }
        while (x !== null);
        ((x = null), Np(), (O = i));
      } else e.current = n;
      if (dt) ((dt = !1), (nr = e), (Hn = t));
      else
        for (x = r; x !== null; )
          ((t = x.nextEffect),
            (x.nextEffect = null),
            x.flags & 8 && ((g = x), (g.sibling = null), (g.stateNode = null)),
            (x = t));
      if (
        ((r = e.pendingLanes),
        r === 0 && (Me = null),
        r === 1 ? (e === Nu ? rr++ : ((rr = 0), (Nu = e))) : (rr = 0),
        (n = n.stateNode),
        Ot && typeof Ot.onCommitFiberRoot == "function")
      )
        try {
          Ot.onCommitFiberRoot(tl, n, void 0, (n.current.flags & 64) === 64);
        } catch {}
      if ((Ee(e, ee()), Li)) throw ((Li = !1), (e = Pu), (Pu = null), e);
      return ((O & 8) !== 0 || Le(), null);
    }
    function Yp() {
      for (; x !== null; ) {
        var e = x.alternate;
        fi ||
          ir === null ||
          ((x.flags & 8) !== 0
            ? Os(x, ir) && (fi = !0)
            : x.tag === 13 && Bp(e, x) && Os(x, ir) && (fi = !0));
        var t = x.flags;
        ((t & 256) !== 0 && zp(e, x),
          (t & 512) === 0 ||
            dt ||
            ((dt = !0),
            hr(97, function () {
              return (mt(), null);
            })),
          (x = x.nextEffect));
      }
    }
    function mt() {
      if (Hn !== 90) {
        var e = 97 < Hn ? 97 : Hn;
        return ((Hn = 90), Nt(e, Xp));
      }
      return !1;
    }
    function Gp(e, t) {
      (Ou.push(t, e),
        dt ||
          ((dt = !0),
          hr(97, function () {
            return (mt(), null);
          })));
    }
    function bc(e, t) {
      (Ru.push(t, e),
        dt ||
          ((dt = !0),
          hr(97, function () {
            return (mt(), null);
          })));
    }
    function Xp() {
      if (nr === null) return !1;
      var e = nr;
      if (((nr = null), (O & 48) !== 0)) throw Error(E(331));
      var t = O;
      O |= 32;
      var n = Ru;
      Ru = [];
      for (var r = 0; r < n.length; r += 2) {
        var i = n[r],
          o = n[r + 1],
          u = i.destroy;
        if (((i.destroy = void 0), typeof u == "function"))
          try {
            u();
          } catch (s) {
            if (o === null) throw Error(E(330));
            st(o, s);
          }
      }
      for (n = Ou, Ou = [], r = 0; r < n.length; r += 2) {
        ((i = n[r]), (o = n[r + 1]));
        try {
          var l = i.create;
          i.destroy = l();
        } catch (s) {
          if (o === null) throw Error(E(330));
          st(o, s);
        }
      }
      for (l = e.current.firstEffect; l !== null; )
        ((e = l.nextEffect),
          (l.nextEffect = null),
          l.flags & 8 && ((l.sibling = null), (l.stateNode = null)),
          (l = e));
      return ((O = t), Le(), !0);
    }
    function Oa(e, t, n) {
      ((t = pl(n, t)),
        (t = qc(e, t, 1)),
        ot(e, t),
        (t = de()),
        (e = Yi(e, 1)),
        e !== null && (zi(e, 1, t), Ee(e, t)));
    }
    function st(e, t) {
      if (e.tag === 3) Oa(e, e, t);
      else
        for (var n = e.return; n !== null; ) {
          if (n.tag === 3) {
            Oa(n, e, t);
            break;
          } else if (n.tag === 1) {
            var r = n.stateNode;
            if (
              typeof n.type.getDerivedStateFromError == "function" ||
              (typeof r.componentDidCatch == "function" &&
                (Me === null || !Me.has(r)))
            ) {
              e = pl(t, e);
              var i = Vc(n, e, 1);
              if ((ot(n, i), (i = de()), (n = Yi(n, 1)), n !== null))
                (zi(n, 1, i), Ee(n, i));
              else if (
                typeof r.componentDidCatch == "function" &&
                (Me === null || !Me.has(r))
              )
                try {
                  r.componentDidCatch(t, e);
                } catch {}
              break;
            }
          }
          n = n.return;
        }
    }
    function Zp(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = de()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ie === e &&
          (te & n) === n &&
          (G === 4 || (G === 3 && (te & 62914560) === te && 500 > ee() - vl)
            ? ln(e, 0)
            : (ml |= n)),
        Ee(e, t));
    }
    function Jp(e, t) {
      var n = e.stateNode;
      (n !== null && n.delete(t),
        (t = 0),
        t === 0 &&
          ((t = e.mode),
          (t & 2) === 0
            ? (t = 1)
            : (t & 4) === 0
              ? (t = fn() === 99 ? 1 : 2)
              : ($e === 0 && ($e = mn),
                (t = Ht(62914560 & ~$e)),
                t === 0 && (t = 4194304))),
        (n = de()),
        (e = Yi(e, t)),
        e !== null && (zi(e, t, n), Ee(e, n)));
    }
    var ef;
    ef = function (e, t, n) {
      var r = t.lanes;
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ae.current) Pe = !0;
        else if ((n & r) !== 0) Pe = (e.flags & 16384) !== 0;
        else {
          switch (((Pe = !1), t.tag)) {
            case 3:
              (pa(t), Uo());
              break;
            case 5:
              ia(t);
              break;
            case 1:
              ce(t.type) && li(t);
              break;
            case 4:
              hu(t, t.stateNode.containerInfo);
              break;
            case 10:
              r = t.memoizedProps.value;
              var i = t.type._context;
              ($(Ci, i._currentValue), (i._currentValue = r));
              break;
            case 13:
              if (t.memoizedState !== null)
                return (n & t.child.childLanes) !== 0
                  ? ha(e, t, n)
                  : ($(z, z.current & 1),
                    (t = qe(e, t, n)),
                    t !== null ? t.sibling : null);
              $(z, z.current & 1);
              break;
            case 19:
              if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
                if (r) return wa(e, t, n);
                t.flags |= 64;
              }
              if (
                ((i = t.memoizedState),
                i !== null &&
                  ((i.rendering = null),
                  (i.tail = null),
                  (i.lastEffect = null)),
                $(z, z.current),
                r)
              )
                break;
              return null;
            case 23:
            case 24:
              return ((t.lanes = 0), jo(e, t, n));
          }
          return qe(e, t, n);
        }
      else Pe = !1;
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            e !== null &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (e = t.pendingProps),
            (i = cn(t, ne.current)),
            rn(t, n),
            (i = al(null, t, r, e, i, n)),
            (t.flags |= 1),
            typeof i == "object" &&
              i !== null &&
              typeof i.render == "function" &&
              i.$$typeof === void 0)
          ) {
            if (
              ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ce(r))
            ) {
              var o = !0;
              li(t);
            } else o = !1;
            ((t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
              ol(t));
            var u = r.getDerivedStateFromProps;
            (typeof u == "function" && _i(t, r, u, e),
              (i.updater = Wi),
              (t.stateNode = i),
              (i._reactInternals = t),
              pu(t, r, e, n),
              (t = gu(null, t, r, !0, o, n)));
          } else ((t.tag = 0), se(null, t, i, n), (t = t.child));
          return t;
        case 16:
          i = t.elementType;
          e: {
            switch (
              (e !== null &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (o = i._init),
              (i = o(i._payload)),
              (t.type = i),
              (o = t.tag = eh(i)),
              (e = _e(i, e)),
              o)
            ) {
              case 0:
                t = yu(null, t, i, e, n);
                break e;
              case 1:
                t = da(null, t, i, e, n);
                break e;
              case 11:
                t = ca(null, t, i, e, n);
                break e;
              case 14:
                t = fa(null, t, i, _e(i.type, e), r, n);
                break e;
            }
            throw Error(E(306, i, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : _e(r, i)),
            yu(e, t, r, i, n)
          );
        case 1:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : _e(r, i)),
            da(e, t, r, i, n)
          );
        case 3:
          if ((pa(t), (r = t.updateQueue), e === null || r === null))
            throw Error(E(282));
          if (
            ((r = t.pendingProps),
            (i = t.memoizedState),
            (i = i !== null ? i.element : null),
            _c(e, t),
            mr(t, r, null, n),
            (r = t.memoizedState.element),
            r === i)
          )
            (Uo(), (t = qe(e, t, n)));
          else {
            if (
              ((i = t.stateNode),
              (o = i.hydrate) &&
                ((et = nn(t.stateNode.containerInfo.firstChild)),
                (Be = t),
                (o = De = !0)),
              o)
            ) {
              if (((e = i.mutableSourceEagerHydrationData), e != null))
                for (i = 0; i < e.length; i += 2)
                  ((o = e[i]),
                    (o._workInProgressVersionPrimary = e[i + 1]),
                    on.push(o));
              for (n = Nc(t, null, r, n), t.child = n; n; )
                ((n.flags = (n.flags & -3) | 1024), (n = n.sibling));
            } else (se(e, t, r, n), Uo());
            t = t.child;
          }
          return t;
        case 5:
          return (
            ia(t),
            e === null && mu(t),
            (r = t.type),
            (i = t.pendingProps),
            (o = e !== null ? e.memoizedProps : null),
            (u = i.children),
            au(r, i) ? (u = null) : o !== null && au(r, o) && (t.flags |= 16),
            jc(e, t),
            se(e, t, u, n),
            t.child
          );
        case 6:
          return (e === null && mu(t), null);
        case 13:
          return ha(e, t, n);
        case 4:
          return (
            hu(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Pi(t, null, r, n)) : se(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : _e(r, i)),
            ca(e, t, r, i, n)
          );
        case 7:
          return (se(e, t, t.pendingProps, n), t.child);
        case 8:
          return (se(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (se(e, t, t.pendingProps.children, n), t.child);
        case 10:
          e: {
            ((r = t.type._context),
              (i = t.pendingProps),
              (u = t.memoizedProps),
              (o = i.value));
            var l = t.type._context;
            if (($(Ci, l._currentValue), (l._currentValue = o), u !== null))
              if (
                ((l = u.value),
                (o = ye(l, o)
                  ? 0
                  : (typeof r._calculateChangedBits == "function"
                      ? r._calculateChangedBits(l, o)
                      : 1073741823) | 0),
                o === 0)
              ) {
                if (u.children === i.children && !ae.current) {
                  t = qe(e, t, n);
                  break e;
                }
              } else
                for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                  var s = l.dependencies;
                  if (s !== null) {
                    u = l.child;
                    for (var a = s.firstContext; a !== null; ) {
                      if (a.context === r && (a.observedBits & o) !== 0) {
                        (l.tag === 1 &&
                          ((a = it(-1, n & -n)), (a.tag = 2), ot(l, a)),
                          (l.lanes |= n),
                          (a = l.alternate),
                          a !== null && (a.lanes |= n),
                          kc(l.return, n),
                          (s.lanes |= n));
                        break;
                      }
                      a = a.next;
                    }
                  } else u = l.tag === 10 && l.type === t.type ? null : l.child;
                  if (u !== null) u.return = l;
                  else
                    for (u = l; u !== null; ) {
                      if (u === t) {
                        u = null;
                        break;
                      }
                      if (((l = u.sibling), l !== null)) {
                        ((l.return = u.return), (u = l));
                        break;
                      }
                      u = u.return;
                    }
                  l = u;
                }
            (se(e, t, i.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (i = t.type),
            (o = t.pendingProps),
            (r = o.children),
            rn(t, n),
            (i = Se(i, o.unstable_observedBits)),
            (r = r(i)),
            (t.flags |= 1),
            se(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (i = t.type),
            (o = _e(i, t.pendingProps)),
            (o = _e(i.type, o)),
            fa(e, t, i, o, r, n)
          );
        case 15:
          return Uc(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : _e(r, i)),
            e !== null &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (t.tag = 1),
            ce(r) ? ((e = !0), li(t)) : (e = !1),
            rn(t, n),
            Oc(t, r, i),
            pu(t, r, i, n),
            gu(null, t, r, !0, e, n)
          );
        case 19:
          return wa(e, t, n);
        case 23:
          return jo(e, t, n);
        case 24:
          return jo(e, t, n);
      }
      throw Error(E(156, t.tag));
    };
    function bp(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function ge(e, t, n, r) {
      return new bp(e, t, n, r);
    }
    function gl(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function eh(e) {
      if (typeof e == "function") return gl(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === Ai)) return 11;
        if (e === Ui) return 14;
      }
      return 2;
    }
    function pt(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = ge(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function di(e, t, n, r, i, o) {
      var u = 2;
      if (((r = e), typeof e == "function")) gl(e) && (u = 1);
      else if (typeof e == "string") u = 5;
      else
        e: switch (e) {
          case Ze:
            return sn(n.children, i, o, t);
          case Fa:
            ((u = 8), (i |= 16));
            break;
          case Lu:
            ((u = 8), (i |= 1));
            break;
          case Kn:
            return (
              (e = ge(12, n, t, i | 8)),
              (e.elementType = Kn),
              (e.type = Kn),
              (e.lanes = o),
              e
            );
          case Yn:
            return (
              (e = ge(13, n, t, i)),
              (e.type = Yn),
              (e.elementType = Yn),
              (e.lanes = o),
              e
            );
          case pi:
            return (
              (e = ge(19, n, t, i)),
              (e.elementType = pi),
              (e.lanes = o),
              e
            );
          case zu:
            return wl(n, i, o, t);
          case Ho:
            return (
              (e = ge(24, n, t, i)),
              (e.elementType = Ho),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Iu:
                  u = 10;
                  break e;
                case Qu:
                  u = 9;
                  break e;
                case Ai:
                  u = 11;
                  break e;
                case Ui:
                  u = 14;
                  break e;
                case Au:
                  ((u = 16), (r = null));
                  break e;
                case Uu:
                  u = 22;
                  break e;
              }
            throw Error(E(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = ge(u, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function sn(e, t, n, r) {
      return ((e = ge(7, e, r, t)), (e.lanes = n), e);
    }
    function wl(e, t, n, r) {
      return ((e = ge(23, e, r, t)), (e.elementType = zu), (e.lanes = n), e);
    }
    function Bo(e, t, n) {
      return ((e = ge(6, e, null, t)), (e.lanes = n), e);
    }
    function qo(e, t, n) {
      return (
        (t = ge(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function th(e, t, n) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Oo(0)),
        (this.expirationTimes = Oo(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Oo(0)),
        (this.mutableSourceEagerHydrationData = null));
    }
    function nh(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Ct,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function Ii(e, t, n, r) {
      var i = t.current,
        o = de(),
        u = ut(i);
      e: if (n) {
        n = n._reactInternals;
        t: {
          if (Dt(n) !== n || n.tag !== 1) throw Error(E(170));
          var l = n;
          do {
            switch (l.tag) {
              case 3:
                l = l.stateNode.context;
                break t;
              case 1:
                if (ce(l.type)) {
                  l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            l = l.return;
          } while (l !== null);
          throw Error(E(171));
        }
        if (n.tag === 1) {
          var s = n.type;
          if (ce(s)) {
            n = yc(n, s, l);
            break e;
          }
        }
        n = l;
      } else n = ft;
      return (
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = it(o, u)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        ot(i, t),
        lt(i, u, o),
        u
      );
    }
    function Vo(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function Ra(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Sl(e, t) {
      (Ra(e, t), (e = e.alternate) && Ra(e, t));
    }
    function rh() {
      return null;
    }
    function El(e, t, n) {
      var r =
        (n != null &&
          n.hydrationOptions != null &&
          n.hydrationOptions.mutableSources) ||
        null;
      if (
        ((n = new th(e, t, n != null && n.hydrate === !0)),
        (t = ge(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
        (n.current = t),
        (t.stateNode = n),
        ol(t),
        (e[hn] = n.current),
        dc(e.nodeType === 8 ? e.parentNode : e),
        r)
      )
        for (e = 0; e < r.length; e++) {
          t = r[e];
          var i = t._getVersion;
          ((i = i(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, i])
              : n.mutableSourceEagerHydrationData.push(t, i));
        }
      this._internalRoot = n;
    }
    El.prototype.render = function (e) {
      Ii(e, this._internalRoot, null, null);
    };
    El.prototype.unmount = function () {
      var e = this._internalRoot,
        t = e.containerInfo;
      Ii(null, e, null, function () {
        t[hn] = null;
      });
    };
    function xr(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function ih(e, t) {
      if (
        (t ||
          ((t = e
            ? e.nodeType === 9
              ? e.documentElement
              : e.firstChild
            : null),
          (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
        !t)
      )
        for (var n; (n = e.lastChild); ) e.removeChild(n);
      return new El(e, 0, t ? { hydrate: !0 } : void 0);
    }
    function Gi(e, t, n, r, i) {
      var o = n._reactRootContainer;
      if (o) {
        var u = o._internalRoot;
        if (typeof i == "function") {
          var l = i;
          i = function () {
            var a = Vo(u);
            l.call(a);
          };
        }
        Ii(t, u, e, i);
      } else {
        if (
          ((o = n._reactRootContainer = ih(n, r)),
          (u = o._internalRoot),
          typeof i == "function")
        ) {
          var s = i;
          i = function () {
            var a = Vo(u);
            s.call(a);
          };
        }
        Yc(function () {
          Ii(t, u, e, i);
        });
      }
      return Vo(u);
    }
    Ha = function (e) {
      if (e.tag === 13) {
        var t = de();
        (lt(e, 4, t), Sl(e, 4));
      }
    };
    Hu = function (e) {
      if (e.tag === 13) {
        var t = de();
        (lt(e, 67108864, t), Sl(e, 67108864));
      }
    };
    Wa = function (e) {
      if (e.tag === 13) {
        var t = de(),
          n = ut(e);
        (lt(e, n, t), Sl(e, n));
      }
    };
    Ka = function (e, t) {
      return t();
    };
    tu = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ko(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = Vi(r);
                if (!i) throw Error(E(90));
                (Ta(r), Ko(r, i));
              }
            }
          }
          break;
        case "textarea":
          La(e, n);
          break;
        case "select":
          ((t = n.value), t != null && bt(e, !!n.multiple, t, !1));
      }
    };
    Bu = Kc;
    $a = function (e, t, n, r, i) {
      var o = O;
      O |= 4;
      try {
        return Nt(98, e.bind(null, t, n, r, i));
      } finally {
        ((O = o), O === 0 && (yn(), Le()));
      }
    };
    qu = function () {
      (O & 49) === 0 && (Vp(), mt());
    };
    Ba = function (e, t) {
      var n = O;
      O |= 2;
      try {
        return e(t);
      } finally {
        ((O = n), O === 0 && (yn(), Le()));
      }
    };
    function tf(e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xr(t)) throw Error(E(200));
      return nh(e, t, null, n);
    }
    var oh = { Events: [Sr, Gt, Vi, ja, za, mt, { current: !1 }] },
      zn = {
        findFiberByHostInstance: kt,
        bundleType: 0,
        version: "17.0.2",
        rendererPackageName: "react-dom",
      },
      uh = {
        bundleType: zn.bundleType,
        version: zn.version,
        rendererPackageName: zn.rendererPackageName,
        rendererConfig: zn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Tt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = Va(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: zn.findFiberByHostInstance || rh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      (($n = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !$n.isDisabled && $n.supportsFiber)
    )
      try {
        ((tl = $n.inject(uh)), (Ot = $n));
      } catch {}
    var $n;
    Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oh;
    Ce.createPortal = tf;
    Ce.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(E(188))
          : Error(E(268, Object.keys(e)));
      return ((e = Va(t)), (e = e === null ? null : e.stateNode), e);
    };
    Ce.flushSync = function (e, t) {
      var n = O;
      if ((n & 48) !== 0) return e(t);
      O |= 1;
      try {
        if (e) return Nt(99, e.bind(null, t));
      } finally {
        ((O = n), Le());
      }
    };
    Ce.hydrate = function (e, t, n) {
      if (!xr(t)) throw Error(E(200));
      return Gi(null, e, t, !0, n);
    };
    Ce.render = function (e, t, n) {
      if (!xr(t)) throw Error(E(200));
      return Gi(null, e, t, !1, n);
    };
    Ce.unmountComponentAtNode = function (e) {
      if (!xr(e)) throw Error(E(40));
      return e._reactRootContainer
        ? (Yc(function () {
            Gi(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[hn] = null));
            });
          }),
          !0)
        : !1;
    };
    Ce.unstable_batchedUpdates = Kc;
    Ce.unstable_createPortal = function (e, t) {
      return tf(
        e,
        t,
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
      );
    };
    Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!xr(n)) throw Error(E(200));
      if (e == null || e._reactInternals === void 0) throw Error(E(38));
      return Gi(e, t, n, !1, r);
    };
    Ce.version = "17.0.2";
  });
  var Cl = he((Kh, of) => {
    "use strict";
    function rf() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf);
        } catch (e) {
          console.error(e);
        }
    }
    (rf(), (of.exports = nf()));
  });
  var sf = he((kr) => {
    "use strict";
    Ir();
    var lh = xe(),
      uf = 60103;
    kr.Fragment = 60107;
    typeof Symbol == "function" &&
      Symbol.for &&
      ((xl = Symbol.for),
      (uf = xl("react.element")),
      (kr.Fragment = xl("react.fragment")));
    var xl,
      sh =
        lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      ah = Object.prototype.hasOwnProperty,
      ch = { key: !0, ref: !0, __self: !0, __source: !0 };
    function lf(e, t, n) {
      var r,
        i = {},
        o = null,
        u = null;
      (n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (u = t.ref));
      for (r in t) ah.call(t, r) && !ch.hasOwnProperty(r) && (i[r] = t[r]);
      if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
      return {
        $$typeof: uf,
        type: e,
        key: o,
        ref: u,
        props: i,
        _owner: sh.current,
      };
    }
    kr.jsx = lf;
    kr.jsxs = lf;
  });
  var Z = he((Gh, af) => {
    "use strict";
    af.exports = sf();
  });
  var Af = he((Xv, Qf) => {
    Qf.exports = {
      ReactQueryDevtools: function () {
        return null;
      },
      ReactQueryDevtoolsPanel: function () {
        return null;
      },
    };
  });
  var $f = he((Jv, zf) => {
    zf.exports = function () {
      var e = document.getSelection();
      if (!e.rangeCount) return function () {};
      for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
        n.push(e.getRangeAt(r));
      switch (t.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          t.blur();
          break;
        default:
          t = null;
          break;
      }
      return (
        e.removeAllRanges(),
        function () {
          (e.type === "Caret" && e.removeAllRanges(),
            e.rangeCount ||
              n.forEach(function (i) {
                e.addRange(i);
              }),
            t && t.focus());
        }
      );
    };
  });
  var Vf = he((bv, qf) => {
    "use strict";
    var Nh = $f(),
      Bf = { "text/plain": "Text", "text/html": "Url", default: "Text" },
      Fh = "Copy to clipboard: #{key}, Enter";
    function Mh(e) {
      var t =
        (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return e.replace(/#{\s*key\s*}/g, t);
    }
    function Th(e, t) {
      var n,
        r,
        i,
        o,
        u,
        l,
        s = !1;
      (t || (t = {}), (n = t.debug || !1));
      try {
        ((i = Nh()),
          (o = document.createRange()),
          (u = document.getSelection()),
          (l = document.createElement("span")),
          (l.textContent = e),
          (l.style.all = "unset"),
          (l.style.position = "fixed"),
          (l.style.top = 0),
          (l.style.clip = "rect(0, 0, 0, 0)"),
          (l.style.whiteSpace = "pre"),
          (l.style.webkitUserSelect = "text"),
          (l.style.MozUserSelect = "text"),
          (l.style.msUserSelect = "text"),
          (l.style.userSelect = "text"),
          l.addEventListener("copy", function (m) {
            if ((m.stopPropagation(), t.format))
              if ((m.preventDefault(), typeof m.clipboardData > "u")) {
                (n && console.warn("unable to use e.clipboardData"),
                  n && console.warn("trying IE specific stuff"),
                  window.clipboardData.clearData());
                var S = Bf[t.format] || Bf.default;
                window.clipboardData.setData(S, e);
              } else
                (m.clipboardData.clearData(),
                  m.clipboardData.setData(t.format, e));
            t.onCopy && (m.preventDefault(), t.onCopy(m.clipboardData));
          }),
          document.body.appendChild(l),
          o.selectNodeContents(l),
          u.addRange(o));
        var a = document.execCommand("copy");
        if (!a) throw new Error("copy command was unsuccessful");
        s = !0;
      } catch (m) {
        (n && console.error("unable to copy using execCommand: ", m),
          n && console.warn("trying IE specific stuff"));
        try {
          (window.clipboardData.setData(t.format || "text", e),
            t.onCopy && t.onCopy(window.clipboardData),
            (s = !0));
        } catch (S) {
          (n && console.error("unable to copy using clipboardData: ", S),
            n && console.error("falling back to prompt"),
            (r = Mh("message" in t ? t.message : Fh)),
            window.prompt(r, e));
        }
      } finally {
        (u &&
          (typeof u.removeRange == "function"
            ? u.removeRange(o)
            : u.removeAllRanges()),
          l && document.body.removeChild(l),
          i());
      }
      return s;
    }
    qf.exports = Th;
  });
  var Yf = I(Cl());
  var Wf = I(xe());
  var cf = I(xe()),
    fh = I(Z()),
    _r = class extends cf.Component {
      constructor(t) {
        (super(t), (this.state = { hasError: !1 }));
      }
      static getDerivedStateFromError() {
        return { hasError: !0 };
      }
      componentDidCatch(t, n) {
        console.error(t, n);
      }
      render() {
        return this.state.hasError
          ? (0, fh.jsx)(this.props.onError, {})
          : this.props.children;
      }
    };
  var Tr = I(xe());
  var ph = I(Z()),
    dh = { error: "alert-error", success: "alert-success", info: "alert-info" };
  function ff({ variant: e, block: t, children: n, ...r }) {
    let i = "alert " + (e ? dh[e] : "") + (t ? " alert-block" : "");
    return (0, ph.jsx)("div", { className: i, ...r, children: n });
  }
  function Xi(e, t) {
    return (
      (Xi = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return ((n.__proto__ = r), n);
          }),
      Xi(e, t)
    );
  }
  function Ie(e, t) {
    ((e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Xi(e, t));
  }
  var Qe = (function () {
    function e() {
      this.listeners = [];
    }
    var t = e.prototype;
    return (
      (t.subscribe = function (r) {
        var i = this,
          o = r || function () {};
        return (
          this.listeners.push(o),
          this.onSubscribe(),
          function () {
            ((i.listeners = i.listeners.filter(function (u) {
              return u !== o;
            })),
              i.onUnsubscribe());
          }
        );
      }),
      (t.hasListeners = function () {
        return this.listeners.length > 0;
      }),
      (t.onSubscribe = function () {}),
      (t.onUnsubscribe = function () {}),
      e
    );
  })();
  function F() {
    return (
      (F = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      F.apply(null, arguments)
    );
  }
  var It = typeof window > "u";
  function q() {}
  function pf(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Or(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  }
  function Pr(e) {
    return Array.isArray(e) ? e : [e];
  }
  function Zi(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  }
  function gn(e, t, n) {
    return Ji(e)
      ? typeof t == "function"
        ? F({}, n, { queryKey: e, queryFn: t })
        : F({}, t, { queryKey: e })
      : e;
  }
  function Ae(e, t, n) {
    return Ji(e) ? [F({}, t, { queryKey: e }), n] : [e || {}, t];
  }
  function hh(e, t) {
    if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
    if (e === !1 && t === !1) return "none";
    var n = e != null ? e : !t;
    return n ? "active" : "inactive";
  }
  function _l(e, t) {
    var n = e.active,
      r = e.exact,
      i = e.fetching,
      o = e.inactive,
      u = e.predicate,
      l = e.queryKey,
      s = e.stale;
    if (Ji(l)) {
      if (r) {
        if (t.queryHash !== Rr(l, t.options)) return !1;
      } else if (!Nr(t.queryKey, l)) return !1;
    }
    var a = hh(n, o);
    if (a === "none") return !1;
    if (a !== "all") {
      var m = t.isActive();
      if ((a === "active" && !m) || (a === "inactive" && m)) return !1;
    }
    return !(
      (typeof s == "boolean" && t.isStale() !== s) ||
      (typeof i == "boolean" && t.isFetching() !== i) ||
      (u && !u(t))
    );
  }
  function Pl(e, t) {
    var n = e.exact,
      r = e.fetching,
      i = e.predicate,
      o = e.mutationKey;
    if (Ji(o)) {
      if (!t.options.mutationKey) return !1;
      if (n) {
        if (vt(t.options.mutationKey) !== vt(o)) return !1;
      } else if (!Nr(t.options.mutationKey, o)) return !1;
    }
    return !(
      (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
      (i && !i(t))
    );
  }
  function Rr(e, t) {
    var n = (t == null ? void 0 : t.queryKeyHashFn) || vt;
    return n(e);
  }
  function vt(e) {
    var t = Pr(e);
    return mh(t);
  }
  function mh(e) {
    return JSON.stringify(e, function (t, n) {
      return kl(n)
        ? Object.keys(n)
            .sort()
            .reduce(function (r, i) {
              return ((r[i] = n[i]), r);
            }, {})
        : n;
    });
  }
  function Nr(e, t) {
    return hf(Pr(e), Pr(t));
  }
  function hf(e, t) {
    return e === t
      ? !0
      : typeof e != typeof t
        ? !1
        : e && t && typeof e == "object" && typeof t == "object"
          ? !Object.keys(t).some(function (n) {
              return !hf(e[n], t[n]);
            })
          : !1;
  }
  function wn(e, t) {
    if (e === t) return e;
    var n = Array.isArray(e) && Array.isArray(t);
    if (n || (kl(e) && kl(t))) {
      for (
        var r = n ? e.length : Object.keys(e).length,
          i = n ? t : Object.keys(t),
          o = i.length,
          u = n ? [] : {},
          l = 0,
          s = 0;
        s < o;
        s++
      ) {
        var a = n ? s : i[s];
        ((u[a] = wn(e[a], t[a])), u[a] === e[a] && l++);
      }
      return r === o && l === r ? e : u;
    }
    return t;
  }
  function mf(e, t) {
    if ((e && !t) || (t && !e)) return !1;
    for (var n in e) if (e[n] !== t[n]) return !1;
    return !0;
  }
  function kl(e) {
    if (!df(e)) return !1;
    var t = e.constructor;
    if (typeof t > "u") return !0;
    var n = t.prototype;
    return !(!df(n) || !n.hasOwnProperty("isPrototypeOf"));
  }
  function df(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function Ji(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function vf(e) {
    return new Promise(function (t) {
      setTimeout(t, e);
    });
  }
  function Ol(e) {
    Promise.resolve()
      .then(e)
      .catch(function (t) {
        return setTimeout(function () {
          throw t;
        });
      });
  }
  function bi() {
    if (typeof AbortController == "function") return new AbortController();
  }
  var vh = (function (e) {
      Ie(t, e);
      function t() {
        var r;
        return (
          (r = e.call(this) || this),
          (r.setup = function (i) {
            var o;
            if (!It && ((o = window) == null ? void 0 : o.addEventListener)) {
              var u = function () {
                return i();
              };
              return (
                window.addEventListener("visibilitychange", u, !1),
                window.addEventListener("focus", u, !1),
                function () {
                  (window.removeEventListener("visibilitychange", u),
                    window.removeEventListener("focus", u));
                }
              );
            }
          }),
          r
        );
      }
      var n = t.prototype;
      return (
        (n.onSubscribe = function () {
          this.cleanup || this.setEventListener(this.setup);
        }),
        (n.onUnsubscribe = function () {
          if (!this.hasListeners()) {
            var i;
            ((i = this.cleanup) == null || i.call(this),
              (this.cleanup = void 0));
          }
        }),
        (n.setEventListener = function (i) {
          var o,
            u = this;
          ((this.setup = i),
            (o = this.cleanup) == null || o.call(this),
            (this.cleanup = i(function (l) {
              typeof l == "boolean" ? u.setFocused(l) : u.onFocus();
            })));
        }),
        (n.setFocused = function (i) {
          ((this.focused = i), i && this.onFocus());
        }),
        (n.onFocus = function () {
          this.listeners.forEach(function (i) {
            i();
          });
        }),
        (n.isFocused = function () {
          return typeof this.focused == "boolean"
            ? this.focused
            : typeof document > "u"
              ? !0
              : [void 0, "visible", "prerender"].includes(
                  document.visibilityState,
                );
        }),
        t
      );
    })(Qe),
    yt = new vh();
  var yh = (function (e) {
      Ie(t, e);
      function t() {
        var r;
        return (
          (r = e.call(this) || this),
          (r.setup = function (i) {
            var o;
            if (!It && ((o = window) == null ? void 0 : o.addEventListener)) {
              var u = function () {
                return i();
              };
              return (
                window.addEventListener("online", u, !1),
                window.addEventListener("offline", u, !1),
                function () {
                  (window.removeEventListener("online", u),
                    window.removeEventListener("offline", u));
                }
              );
            }
          }),
          r
        );
      }
      var n = t.prototype;
      return (
        (n.onSubscribe = function () {
          this.cleanup || this.setEventListener(this.setup);
        }),
        (n.onUnsubscribe = function () {
          if (!this.hasListeners()) {
            var i;
            ((i = this.cleanup) == null || i.call(this),
              (this.cleanup = void 0));
          }
        }),
        (n.setEventListener = function (i) {
          var o,
            u = this;
          ((this.setup = i),
            (o = this.cleanup) == null || o.call(this),
            (this.cleanup = i(function (l) {
              typeof l == "boolean" ? u.setOnline(l) : u.onOnline();
            })));
        }),
        (n.setOnline = function (i) {
          ((this.online = i), i && this.onOnline());
        }),
        (n.onOnline = function () {
          this.listeners.forEach(function (i) {
            i();
          });
        }),
        (n.isOnline = function () {
          return typeof this.online == "boolean"
            ? this.online
            : typeof navigator > "u" || typeof navigator.onLine > "u"
              ? !0
              : navigator.onLine;
        }),
        t
      );
    })(Qe),
    Sn = new yh();
  function gh(e) {
    return Math.min(1e3 * Math.pow(2, e), 3e4);
  }
  function Fr(e) {
    return typeof (e == null ? void 0 : e.cancel) == "function";
  }
  var yf = function (t) {
    ((this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent));
  };
  function En(e) {
    return e instanceof yf;
  }
  var eo = function (t) {
    var n = this,
      r = !1,
      i,
      o,
      u,
      l;
    ((this.abort = t.abort),
      (this.cancel = function (h) {
        return i == null ? void 0 : i(h);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return o == null ? void 0 : o();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (h, y) {
        ((u = h), (l = y));
      })));
    var s = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(y),
          o == null || o(),
          u(y));
      },
      a = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(y),
          o == null || o(),
          l(y));
      },
      m = function () {
        return new Promise(function (y) {
          ((o = y), (n.isPaused = !0), t.onPause == null || t.onPause());
        }).then(function () {
          ((o = void 0),
            (n.isPaused = !1),
            t.onContinue == null || t.onContinue());
        });
      },
      S = function h() {
        if (!n.isResolved) {
          var y;
          try {
            y = t.fn();
          } catch (w) {
            y = Promise.reject(w);
          }
          ((i = function (C) {
            if (
              !n.isResolved &&
              (a(new yf(C)), n.abort == null || n.abort(), Fr(y))
            )
              try {
                y.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = Fr(y)),
            Promise.resolve(y)
              .then(s)
              .catch(function (w) {
                var C, d;
                if (!n.isResolved) {
                  var c = (C = t.retry) != null ? C : 3,
                    f = (d = t.retryDelay) != null ? d : gh,
                    p = typeof f == "function" ? f(n.failureCount, w) : f,
                    v =
                      c === !0 ||
                      (typeof c == "number" && n.failureCount < c) ||
                      (typeof c == "function" && c(n.failureCount, w));
                  if (r || !v) {
                    a(w);
                    return;
                  }
                  (n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, w),
                    vf(p)
                      .then(function () {
                        if (!yt.isFocused() || !Sn.isOnline()) return m();
                      })
                      .then(function () {
                        r ? a(w) : h();
                      }));
                }
              }));
        }
      };
    S();
  };
  var wh = (function () {
      function e() {
        ((this.queue = []),
          (this.transactions = 0),
          (this.notifyFn = function (n) {
            n();
          }),
          (this.batchNotifyFn = function (n) {
            n();
          }));
      }
      var t = e.prototype;
      return (
        (t.batch = function (r) {
          var i;
          this.transactions++;
          try {
            i = r();
          } finally {
            (this.transactions--, this.transactions || this.flush());
          }
          return i;
        }),
        (t.schedule = function (r) {
          var i = this;
          this.transactions
            ? this.queue.push(r)
            : Ol(function () {
                i.notifyFn(r);
              });
        }),
        (t.batchCalls = function (r) {
          var i = this;
          return function () {
            for (var o = arguments.length, u = new Array(o), l = 0; l < o; l++)
              u[l] = arguments[l];
            i.schedule(function () {
              r.apply(void 0, u);
            });
          };
        }),
        (t.flush = function () {
          var r = this,
            i = this.queue;
          ((this.queue = []),
            i.length &&
              Ol(function () {
                r.batchNotifyFn(function () {
                  i.forEach(function (o) {
                    r.notifyFn(o);
                  });
                });
              }));
        }),
        (t.setNotifyFunction = function (r) {
          this.notifyFn = r;
        }),
        (t.setBatchNotifyFunction = function (r) {
          this.batchNotifyFn = r;
        }),
        e
      );
    })(),
    T = new wh();
  var gf = console;
  function Qt() {
    return gf;
  }
  function Rl(e) {
    gf = e;
  }
  var wf = (function () {
    function e(n) {
      ((this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc());
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        ((this.options = F({}, this.defaultOptions, r)),
          (this.meta = r == null ? void 0 : r.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3,
          )));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        (this.clearGcTimeout(),
          Or(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime)));
      }),
      (t.clearGcTimeout = function () {
        (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var o,
          u,
          l = this.state.data,
          s = pf(r, l);
        return (
          (o = (u = this.options).isDataEqual) != null && o.call(u, l, s)
            ? (s = l)
            : this.options.structuralSharing !== !1 && (s = wn(l, s)),
          this.dispatch({
            data: s,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
          }),
          s
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: "setState", state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          o = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r),
          o ? o.then(q).catch(q) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        (this.clearGcTimeout(), this.cancel({ silent: !0 }));
      }),
      (t.reset = function () {
        (this.destroy(), this.setState(this.initialState));
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !Zi(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnWindowFocus();
          });
        (i && i.refetch(), (r = this.retryer) == null || r.continue());
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnReconnect();
          });
        (i && i.refetch(), (r = this.retryer) == null || r.continue());
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (r, i) {
        var o = this,
          u,
          l,
          s;
        if (this.state.isFetching) {
          if (
            this.state.dataUpdatedAt &&
            (i == null ? void 0 : i.cancelRefetch)
          )
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var a;
            return (
              (a = this.retryer) == null || a.continueRetry(),
              this.promise
            );
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var m = this.observers.find(function (f) {
            return f.options.queryFn;
          });
          m && this.setOptions(m.options);
        }
        var S = Pr(this.queryKey),
          h = bi(),
          y = { queryKey: S, pageParam: void 0, meta: this.meta };
        Object.defineProperty(y, "signal", {
          enumerable: !0,
          get: function () {
            if (h) return ((o.abortSignalConsumed = !0), h.signal);
          },
        });
        var w = function () {
            return o.options.queryFn
              ? ((o.abortSignalConsumed = !1), o.options.queryFn(y))
              : Promise.reject("Missing queryFn");
          },
          C = {
            fetchOptions: i,
            options: this.options,
            queryKey: S,
            state: this.state,
            fetchFn: w,
            meta: this.meta,
          };
        if ((u = this.options.behavior) != null && u.onFetch) {
          var d;
          (d = this.options.behavior) == null || d.onFetch(C);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((l = C.fetchOptions) == null ? void 0 : l.meta))
        ) {
          var c;
          this.dispatch({
            type: "fetch",
            meta: (c = C.fetchOptions) == null ? void 0 : c.meta,
          });
        }
        return (
          (this.retryer = new eo({
            fn: C.fetchFn,
            abort: h == null || (s = h.abort) == null ? void 0 : s.bind(h),
            onSuccess: function (p) {
              (o.setData(p),
                o.cache.config.onSuccess == null ||
                  o.cache.config.onSuccess(p, o),
                o.cacheTime === 0 && o.optionalRemove());
            },
            onError: function (p) {
              ((En(p) && p.silent) || o.dispatch({ type: "error", error: p }),
                En(p) ||
                  (o.cache.config.onError == null ||
                    o.cache.config.onError(p, o),
                  Qt().error(p)),
                o.cacheTime === 0 && o.optionalRemove());
            },
            onFail: function () {
              o.dispatch({ type: "failed" });
            },
            onPause: function () {
              o.dispatch({ type: "pause" });
            },
            onContinue: function () {
              o.dispatch({ type: "continue" });
            },
            retry: C.options.retry,
            retryDelay: C.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        ((this.state = this.reducer(this.state, r)),
          T.batch(function () {
            (i.observers.forEach(function (o) {
              o.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: "queryUpdated", action: r }));
          }));
      }),
      (t.getDefaultState = function (r) {
        var i =
            typeof r.initialData == "function"
              ? r.initialData()
              : r.initialData,
          o = typeof r.initialData < "u",
          u = o
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          l = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: l ? (u != null ? u : Date.now()) : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: l ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var o, u;
        switch (i.type) {
          case "failed":
            return F({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return F({}, r, { isPaused: !0 });
          case "continue":
            return F({}, r, { isPaused: !1 });
          case "fetch":
            return F(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (o = i.meta) != null ? o : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: "loading" },
            );
          case "success":
            return F({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (u = i.dataUpdatedAt) != null ? u : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var l = i.error;
            return En(l) && l.revert && this.revertState
              ? F({}, this.revertState)
              : F({}, r, {
                  error: l,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return F({}, r, { isInvalidated: !0 });
          case "setState":
            return F({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })();
  var Sf = (function (e) {
    Ie(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.queries = []),
        (i.queriesMap = {}),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, o, u) {
        var l,
          s = o.queryKey,
          a = (l = o.queryHash) != null ? l : Rr(s, o),
          m = this.get(a);
        return (
          m ||
            ((m = new wf({
              cache: this,
              queryKey: s,
              queryHash: a,
              options: i.defaultQueryOptions(o),
              state: u,
              defaultOptions: i.getQueryDefaults(s),
              meta: o.meta,
            })),
            this.add(m)),
          m
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: "queryAdded", query: i }));
      }),
      (n.remove = function (i) {
        var o = this.queriesMap[i.queryHash];
        o &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (u) {
            return u !== i;
          })),
          o === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        T.batch(function () {
          i.queries.forEach(function (o) {
            i.remove(o);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, o) {
        var u = Ae(i, o),
          l = u[0];
        return (
          typeof l.exact > "u" && (l.exact = !0),
          this.queries.find(function (s) {
            return _l(l, s);
          })
        );
      }),
      (n.findAll = function (i, o) {
        var u = Ae(i, o),
          l = u[0];
        return Object.keys(l).length > 0
          ? this.queries.filter(function (s) {
              return _l(l, s);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var o = this;
        T.batch(function () {
          o.listeners.forEach(function (u) {
            u(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        T.batch(function () {
          i.queries.forEach(function (o) {
            o.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        T.batch(function () {
          i.queries.forEach(function (o) {
            o.onOnline();
          });
        });
      }),
      t
    );
  })(Qe);
  var Ef = (function () {
    function e(n) {
      ((this.options = F({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || Sh()),
        (this.meta = n.meta));
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: "setState", state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(q).catch(q))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          o = this.state.status === "loading",
          u = Promise.resolve();
        return (
          o ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (u = u
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (l) {
                l !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: l,
                    variables: r.state.variables,
                  });
              }))),
          u
            .then(function () {
              return r.executeMutation();
            })
            .then(function (l) {
              ((i = l),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(
                    i,
                    r.state.variables,
                    r.state.context,
                    r,
                  ));
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(
                    i,
                    null,
                    r.state.variables,
                    r.state.context,
                  );
            })
            .then(function () {
              return (r.dispatch({ type: "success", data: i }), i);
            })
            .catch(function (l) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    l,
                    r.state.variables,
                    r.state.context,
                    r,
                  ),
                Qt().error(l),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          l,
                          r.state.variables,
                          r.state.context,
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          l,
                          r.state.variables,
                          r.state.context,
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: l }), l);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new eo({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              r.dispatch({ type: "failed" });
            },
            onPause: function () {
              r.dispatch({ type: "pause" });
            },
            onContinue: function () {
              r.dispatch({ type: "continue" });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        ((this.state = Eh(this.state, r)),
          T.batch(function () {
            (i.observers.forEach(function (o) {
              o.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i));
          }));
      }),
      e
    );
  })();
  function Sh() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      isPaused: !1,
      status: "idle",
      variables: void 0,
    };
  }
  function Eh(e, t) {
    switch (t.type) {
      case "failed":
        return F({}, e, { failureCount: e.failureCount + 1 });
      case "pause":
        return F({}, e, { isPaused: !0 });
      case "continue":
        return F({}, e, { isPaused: !1 });
      case "loading":
        return F({}, e, {
          context: t.context,
          data: void 0,
          error: null,
          isPaused: !1,
          status: "loading",
          variables: t.variables,
        });
      case "success":
        return F({}, e, {
          data: t.data,
          error: null,
          status: "success",
          isPaused: !1,
        });
      case "error":
        return F({}, e, {
          data: void 0,
          error: t.error,
          failureCount: e.failureCount + 1,
          isPaused: !1,
          status: "error",
        });
      case "setState":
        return F({}, e, t.state);
      default:
        return e;
    }
  }
  var Cf = (function (e) {
    Ie(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.mutations = []),
        (i.mutationId = 0),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, o, u) {
        var l = new Ef({
          mutationCache: this,
          mutationId: ++this.mutationId,
          options: i.defaultMutationOptions(o),
          state: u,
          defaultOptions: o.mutationKey
            ? i.getMutationDefaults(o.mutationKey)
            : void 0,
          meta: o.meta,
        });
        return (this.add(l), l);
      }),
      (n.add = function (i) {
        (this.mutations.push(i), this.notify(i));
      }),
      (n.remove = function (i) {
        ((this.mutations = this.mutations.filter(function (o) {
          return o !== i;
        })),
          i.cancel(),
          this.notify(i));
      }),
      (n.clear = function () {
        var i = this;
        T.batch(function () {
          i.mutations.forEach(function (o) {
            i.remove(o);
          });
        });
      }),
      (n.getAll = function () {
        return this.mutations;
      }),
      (n.find = function (i) {
        return (
          typeof i.exact > "u" && (i.exact = !0),
          this.mutations.find(function (o) {
            return Pl(i, o);
          })
        );
      }),
      (n.findAll = function (i) {
        return this.mutations.filter(function (o) {
          return Pl(i, o);
        });
      }),
      (n.notify = function (i) {
        var o = this;
        T.batch(function () {
          o.listeners.forEach(function (u) {
            u(i);
          });
        });
      }),
      (n.onFocus = function () {
        this.resumePausedMutations();
      }),
      (n.onOnline = function () {
        this.resumePausedMutations();
      }),
      (n.resumePausedMutations = function () {
        var i = this.mutations.filter(function (o) {
          return o.state.isPaused;
        });
        return T.batch(function () {
          return i.reduce(function (o, u) {
            return o.then(function () {
              return u.continue().catch(q);
            });
          }, Promise.resolve());
        });
      }),
      t
    );
  })(Qe);
  function kf() {
    return {
      onFetch: function (t) {
        t.fetchFn = function () {
          var n,
            r,
            i,
            o,
            u,
            l,
            s =
              (n = t.fetchOptions) == null || (r = n.meta) == null
                ? void 0
                : r.refetchPage,
            a =
              (i = t.fetchOptions) == null || (o = i.meta) == null
                ? void 0
                : o.fetchMore,
            m = a == null ? void 0 : a.pageParam,
            S = (a == null ? void 0 : a.direction) === "forward",
            h = (a == null ? void 0 : a.direction) === "backward",
            y = ((u = t.state.data) == null ? void 0 : u.pages) || [],
            w = ((l = t.state.data) == null ? void 0 : l.pageParams) || [],
            C = bi(),
            d = C == null ? void 0 : C.signal,
            c = w,
            f = !1,
            p =
              t.options.queryFn ||
              function () {
                return Promise.reject("Missing queryFn");
              },
            v = function (Ke, At, Oe, kn) {
              return (
                (c = kn ? [At].concat(c) : [].concat(c, [At])),
                kn ? [Oe].concat(Ke) : [].concat(Ke, [Oe])
              );
            },
            k = function (Ke, At, Oe, kn) {
              if (f) return Promise.reject("Cancelled");
              if (typeof Oe > "u" && !At && Ke.length)
                return Promise.resolve(Ke);
              var Ye = {
                  queryKey: t.queryKey,
                  signal: d,
                  pageParam: Oe,
                  meta: t.meta,
                },
                wt = p(Ye),
                Lr = Promise.resolve(wt).then(function (Gf) {
                  return v(Ke, Oe, Gf, kn);
                });
              if (Fr(wt)) {
                var io = Lr;
                io.cancel = wt.cancel;
              }
              return Lr;
            },
            g;
          if (!y.length) g = k([]);
          else if (S) {
            var _ = typeof m < "u",
              R = _ ? m : xf(t.options, y);
            g = k(y, _, R);
          } else if (h) {
            var P = typeof m < "u",
              fe = P ? m : Ch(t.options, y);
            g = k(y, P, fe, !0);
          } else
            (function () {
              c = [];
              var re = typeof t.options.getNextPageParam > "u",
                Ke = s && y[0] ? s(y[0], 0, y) : !0;
              g = Ke ? k([], re, w[0]) : Promise.resolve(v([], w[0], y[0]));
              for (
                var At = function (Ye) {
                    g = g.then(function (wt) {
                      var Lr = s && y[Ye] ? s(y[Ye], Ye, y) : !0;
                      if (Lr) {
                        var io = re ? w[Ye] : xf(t.options, wt);
                        return k(wt, re, io);
                      }
                      return Promise.resolve(v(wt, w[Ye], y[Ye]));
                    });
                  },
                  Oe = 1;
                Oe < y.length;
                Oe++
              )
                At(Oe);
            })();
          var ue = g.then(function (re) {
              return { pages: re, pageParams: c };
            }),
            ro = ue;
          return (
            (ro.cancel = function () {
              ((f = !0), C == null || C.abort(), Fr(g) && g.cancel());
            }),
            ue
          );
        };
      },
    };
  }
  function xf(e, t) {
    return e.getNextPageParam == null
      ? void 0
      : e.getNextPageParam(t[t.length - 1], t);
  }
  function Ch(e, t) {
    return e.getPreviousPageParam == null
      ? void 0
      : e.getPreviousPageParam(t[0], t);
  }
  var Nl = (function () {
    function e(n) {
      (n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new Sf()),
        (this.mutationCache = n.mutationCache || new Cf()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []));
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        ((this.unsubscribeFocus = yt.subscribe(function () {
          yt.isFocused() &&
            Sn.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Sn.subscribe(function () {
            yt.isFocused() &&
              Sn.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          })));
      }),
      (t.unmount = function () {
        var r, i;
        ((r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this));
      }),
      (t.isFetching = function (r, i) {
        var o = Ae(r, i),
          u = o[0];
        return ((u.fetching = !0), this.queryCache.findAll(u).length);
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(F({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var o = i.queryKey,
              u = i.state,
              l = u.data;
            return [o, l];
          });
      }),
      (t.setQueryData = function (r, i, o) {
        var u = gn(r),
          l = this.defaultQueryOptions(u);
        return this.queryCache.build(this, l).setData(i, o);
      }),
      (t.setQueriesData = function (r, i, o) {
        var u = this;
        return T.batch(function () {
          return u
            .getQueryCache()
            .findAll(r)
            .map(function (l) {
              var s = l.queryKey;
              return [s, u.setQueryData(s, i, o)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state;
      }),
      (t.removeQueries = function (r, i) {
        var o = Ae(r, i),
          u = o[0],
          l = this.queryCache;
        T.batch(function () {
          l.findAll(u).forEach(function (s) {
            l.remove(s);
          });
        });
      }),
      (t.resetQueries = function (r, i, o) {
        var u = this,
          l = Ae(r, i, o),
          s = l[0],
          a = l[1],
          m = this.queryCache,
          S = F({}, s, { active: !0 });
        return T.batch(function () {
          return (
            m.findAll(s).forEach(function (h) {
              h.reset();
            }),
            u.refetchQueries(S, a)
          );
        });
      }),
      (t.cancelQueries = function (r, i, o) {
        var u = this,
          l = Ae(r, i, o),
          s = l[0],
          a = l[1],
          m = a === void 0 ? {} : a;
        typeof m.revert > "u" && (m.revert = !0);
        var S = T.batch(function () {
          return u.queryCache.findAll(s).map(function (h) {
            return h.cancel(m);
          });
        });
        return Promise.all(S).then(q).catch(q);
      }),
      (t.invalidateQueries = function (r, i, o) {
        var u,
          l,
          s,
          a = this,
          m = Ae(r, i, o),
          S = m[0],
          h = m[1],
          y = F({}, S, {
            active:
              (u = (l = S.refetchActive) != null ? l : S.active) != null
                ? u
                : !0,
            inactive: (s = S.refetchInactive) != null ? s : !1,
          });
        return T.batch(function () {
          return (
            a.queryCache.findAll(S).forEach(function (w) {
              w.invalidate();
            }),
            a.refetchQueries(y, h)
          );
        });
      }),
      (t.refetchQueries = function (r, i, o) {
        var u = this,
          l = Ae(r, i, o),
          s = l[0],
          a = l[1],
          m = T.batch(function () {
            return u.queryCache.findAll(s).map(function (h) {
              return h.fetch(
                void 0,
                F({}, a, {
                  meta: { refetchPage: s == null ? void 0 : s.refetchPage },
                }),
              );
            });
          }),
          S = Promise.all(m).then(q);
        return ((a != null && a.throwOnError) || (S = S.catch(q)), S);
      }),
      (t.fetchQuery = function (r, i, o) {
        var u = gn(r, i, o),
          l = this.defaultQueryOptions(u);
        typeof l.retry > "u" && (l.retry = !1);
        var s = this.queryCache.build(this, l);
        return s.isStaleByTime(l.staleTime)
          ? s.fetch(l)
          : Promise.resolve(s.state.data);
      }),
      (t.prefetchQuery = function (r, i, o) {
        return this.fetchQuery(r, i, o).then(q).catch(q);
      }),
      (t.fetchInfiniteQuery = function (r, i, o) {
        var u = gn(r, i, o);
        return ((u.behavior = kf()), this.fetchQuery(u));
      }),
      (t.prefetchInfiniteQuery = function (r, i, o) {
        return this.fetchInfiniteQuery(r, i, o).then(q).catch(q);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = T.batch(function () {
            return r.mutationCache.getAll().map(function (o) {
              return o.cancel();
            });
          });
        return Promise.all(i).then(q).catch(q);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var o = this.queryDefaults.find(function (u) {
          return vt(r) === vt(u.queryKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (o) {
              return Nr(r, o.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var o = this.mutationDefaults.find(function (u) {
          return vt(r) === vt(u.mutationKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (o) {
              return Nr(r, o.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = F(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 },
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = Rr(i.queryKey, i)),
          i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : F(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(r == null ? void 0 : r.mutationKey),
              r,
              { _defaulted: !0 },
            );
      }),
      (t.clear = function () {
        (this.queryCache.clear(), this.mutationCache.clear());
      }),
      e
    );
  })();
  var Fl = (function (e) {
    Ie(t, e);
    function t(r, i) {
      var o;
      return (
        (o = e.call(this) || this),
        (o.client = r),
        (o.options = i),
        (o.trackedProps = []),
        (o.previousSelectError = null),
        o.bindMethods(),
        o.setOptions(i),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        ((this.remove = this.remove.bind(this)),
          (this.refetch = this.refetch.bind(this)));
      }),
      (n.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          _f(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return _h(this.currentQuery, this.options);
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return Ph(this.currentQuery, this.options);
      }),
      (n.destroy = function () {
        ((this.listeners = []),
          this.clearTimers(),
          this.currentQuery.removeObserver(this));
      }),
      (n.setOptions = function (i, o) {
        var u = this.options,
          l = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        (this.options.queryKey || (this.options.queryKey = u.queryKey),
          this.updateQuery());
        var s = this.hasListeners();
        (s && Pf(this.currentQuery, l, this.options, u) && this.executeFetch(),
          this.updateResult(o),
          s &&
            (this.currentQuery !== l ||
              this.options.enabled !== u.enabled ||
              this.options.staleTime !== u.staleTime) &&
            this.updateStaleTimeout());
        var a = this.computeRefetchInterval();
        s &&
          (this.currentQuery !== l ||
            this.options.enabled !== u.enabled ||
            a !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(a);
      }),
      (n.getOptimisticResult = function (i) {
        var o = this.client.defaultQueryObserverOptions(i),
          u = this.client.getQueryCache().build(this.client, o);
        return this.createResult(u, o);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, o) {
        var u = this,
          l = {},
          s = function (m) {
            u.trackedProps.includes(m) || u.trackedProps.push(m);
          };
        return (
          Object.keys(i).forEach(function (a) {
            Object.defineProperty(l, a, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return (s(a), i[a]);
              },
            });
          }),
          (o.useErrorBoundary || o.suspense) && s("error"),
          l
        );
      }),
      (n.getNextResult = function (i) {
        var o = this;
        return new Promise(function (u, l) {
          var s = o.subscribe(function (a) {
            a.isFetching ||
              (s(),
              a.isError && (i == null ? void 0 : i.throwOnError)
                ? l(a.error)
                : u(a));
          });
        });
      }),
      (n.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n.refetch = function (i) {
        return this.fetch(
          F({}, i, {
            meta: { refetchPage: i == null ? void 0 : i.refetchPage },
          }),
        );
      }),
      (n.fetchOptimistic = function (i) {
        var o = this,
          u = this.client.defaultQueryObserverOptions(i),
          l = this.client.getQueryCache().build(this.client, u);
        return l.fetch().then(function () {
          return o.createResult(l, u);
        });
      }),
      (n.fetch = function (i) {
        var o = this;
        return this.executeFetch(i).then(function () {
          return (o.updateResult(), o.currentResult);
        });
      }),
      (n.executeFetch = function (i) {
        this.updateQuery();
        var o = this.currentQuery.fetch(this.options, i);
        return ((i != null && i.throwOnError) || (o = o.catch(q)), o);
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(It || this.currentResult.isStale || !Or(this.options.staleTime)))
        ) {
          var o = Zi(this.currentResult.dataUpdatedAt, this.options.staleTime),
            u = o + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, u);
        }
      }),
      (n.computeRefetchInterval = function () {
        var i;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery,
            )
          : (i = this.options.refetchInterval) != null
            ? i
            : !1;
      }),
      (n.updateRefetchInterval = function (i) {
        var o = this;
        (this.clearRefetchInterval(),
          (this.currentRefetchInterval = i),
          !(
            It ||
            this.options.enabled === !1 ||
            !Or(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (o.options.refetchIntervalInBackground || yt.isFocused()) &&
                o.executeFetch();
            }, this.currentRefetchInterval)));
      }),
      (n.updateTimers = function () {
        (this.updateStaleTimeout(),
          this.updateRefetchInterval(this.computeRefetchInterval()));
      }),
      (n.clearTimers = function () {
        (this.clearStaleTimeout(), this.clearRefetchInterval());
      }),
      (n.clearStaleTimeout = function () {
        (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
      }),
      (n.clearRefetchInterval = function () {
        (clearInterval(this.refetchIntervalId),
          (this.refetchIntervalId = void 0));
      }),
      (n.createResult = function (i, o) {
        var u = this.currentQuery,
          l = this.options,
          s = this.currentResult,
          a = this.currentResultState,
          m = this.currentResultOptions,
          S = i !== u,
          h = S ? i.state : this.currentQueryInitialState,
          y = S ? this.currentResult : this.previousQueryResult,
          w = i.state,
          C = w.dataUpdatedAt,
          d = w.error,
          c = w.errorUpdatedAt,
          f = w.isFetching,
          p = w.status,
          v = !1,
          k = !1,
          g;
        if (o.optimisticResults) {
          var _ = this.hasListeners(),
            R = !_ && _f(i, o),
            P = _ && Pf(i, u, o, l);
          (R || P) && ((f = !0), C || (p = "loading"));
        }
        if (
          o.keepPreviousData &&
          !w.dataUpdateCount &&
          (y == null ? void 0 : y.isSuccess) &&
          p !== "error"
        )
          ((g = y.data), (C = y.dataUpdatedAt), (p = y.status), (v = !0));
        else if (o.select && typeof w.data < "u") {
          var fe;
          if (
            s &&
            w.data === (a == null ? void 0 : a.data) &&
            o.select ===
              ((fe = this.previousSelect) == null ? void 0 : fe.fn) &&
            !this.previousSelectError
          )
            g = this.previousSelect.result;
          else
            try {
              ((g = o.select(w.data)),
                o.structuralSharing !== !1 &&
                  (g = wn(s == null ? void 0 : s.data, g)),
                (this.previousSelect = { fn: o.select, result: g }),
                (this.previousSelectError = null));
            } catch (re) {
              (Qt().error(re),
                (d = re),
                (this.previousSelectError = re),
                (c = Date.now()),
                (p = "error"));
            }
        } else g = w.data;
        if (
          typeof o.placeholderData < "u" &&
          typeof g > "u" &&
          (p === "loading" || p === "idle")
        ) {
          var ue;
          if (
            (s == null ? void 0 : s.isPlaceholderData) &&
            o.placeholderData === (m == null ? void 0 : m.placeholderData)
          )
            ue = s.data;
          else if (
            ((ue =
              typeof o.placeholderData == "function"
                ? o.placeholderData()
                : o.placeholderData),
            o.select && typeof ue < "u")
          )
            try {
              ((ue = o.select(ue)),
                o.structuralSharing !== !1 &&
                  (ue = wn(s == null ? void 0 : s.data, ue)),
                (this.previousSelectError = null));
            } catch (re) {
              (Qt().error(re),
                (d = re),
                (this.previousSelectError = re),
                (c = Date.now()),
                (p = "error"));
            }
          typeof ue < "u" && ((p = "success"), (g = ue), (k = !0));
        }
        var ro = {
          status: p,
          isLoading: p === "loading",
          isSuccess: p === "success",
          isError: p === "error",
          isIdle: p === "idle",
          data: g,
          dataUpdatedAt: C,
          error: d,
          errorUpdatedAt: c,
          failureCount: w.fetchFailureCount,
          isFetched: w.dataUpdateCount > 0 || w.errorUpdateCount > 0,
          isFetchedAfterMount:
            w.dataUpdateCount > h.dataUpdateCount ||
            w.errorUpdateCount > h.errorUpdateCount,
          isFetching: f,
          isRefetching: f && p !== "loading",
          isLoadingError: p === "error" && w.dataUpdatedAt === 0,
          isPlaceholderData: k,
          isPreviousData: v,
          isRefetchError: p === "error" && w.dataUpdatedAt !== 0,
          isStale: Mr(i, o),
          refetch: this.refetch,
          remove: this.remove,
        };
        return ro;
      }),
      (n.shouldNotifyListeners = function (i, o) {
        if (!o) return !0;
        var u = this.options,
          l = u.notifyOnChangeProps,
          s = u.notifyOnChangePropsExclusions;
        if ((!l && !s) || (l === "tracked" && !this.trackedProps.length))
          return !0;
        var a = l === "tracked" ? this.trackedProps : l;
        return Object.keys(i).some(function (m) {
          var S = m,
            h = i[S] !== o[S],
            y =
              a == null
                ? void 0
                : a.some(function (C) {
                    return C === m;
                  }),
            w =
              s == null
                ? void 0
                : s.some(function (C) {
                    return C === m;
                  });
          return h && !w && (!a || y);
        });
      }),
      (n.updateResult = function (i) {
        var o = this.currentResult;
        if (
          ((this.currentResult = this.createResult(
            this.currentQuery,
            this.options,
          )),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !mf(this.currentResult, o))
        ) {
          var u = { cache: !0 };
          ((i == null ? void 0 : i.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, o) &&
            (u.listeners = !0),
            this.notify(F({}, u, i)));
        }
      }),
      (n.updateQuery = function () {
        var i = this.client.getQueryCache().build(this.client, this.options);
        if (i !== this.currentQuery) {
          var o = this.currentQuery;
          ((this.currentQuery = i),
            (this.currentQueryInitialState = i.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (o == null || o.removeObserver(this), i.addObserver(this)));
        }
      }),
      (n.onQueryUpdate = function (i) {
        var o = {};
        (i.type === "success"
          ? (o.onSuccess = !0)
          : i.type === "error" && !En(i.error) && (o.onError = !0),
          this.updateResult(o),
          this.hasListeners() && this.updateTimers());
      }),
      (n.notify = function (i) {
        var o = this;
        T.batch(function () {
          (i.onSuccess
            ? (o.options.onSuccess == null ||
                o.options.onSuccess(o.currentResult.data),
              o.options.onSettled == null ||
                o.options.onSettled(o.currentResult.data, null))
            : i.onError &&
              (o.options.onError == null ||
                o.options.onError(o.currentResult.error),
              o.options.onSettled == null ||
                o.options.onSettled(void 0, o.currentResult.error)),
            i.listeners &&
              o.listeners.forEach(function (u) {
                u(o.currentResult);
              }),
            i.cache &&
              o.client
                .getQueryCache()
                .notify({
                  query: o.currentQuery,
                  type: "observerResultsUpdated",
                }));
        });
      }),
      t
    );
  })(Qe);
  function xh(e, t) {
    return (
      t.enabled !== !1 &&
      !e.state.dataUpdatedAt &&
      !(e.state.status === "error" && t.retryOnMount === !1)
    );
  }
  function kh(e, t) {
    return (
      t.enabled !== !1 &&
      e.state.dataUpdatedAt > 0 &&
      (t.refetchOnMount === "always" || (t.refetchOnMount !== !1 && Mr(e, t)))
    );
  }
  function _f(e, t) {
    return xh(e, t) || kh(e, t);
  }
  function _h(e, t) {
    return (
      t.enabled !== !1 &&
      (t.refetchOnReconnect === "always" ||
        (t.refetchOnReconnect !== !1 && Mr(e, t)))
    );
  }
  function Ph(e, t) {
    return (
      t.enabled !== !1 &&
      (t.refetchOnWindowFocus === "always" ||
        (t.refetchOnWindowFocus !== !1 && Mr(e, t)))
    );
  }
  function Pf(e, t, n, r) {
    return (
      n.enabled !== !1 &&
      (e !== t || r.enabled === !1) &&
      (!n.suspense || e.state.status !== "error") &&
      Mr(e, n)
    );
  }
  function Mr(e, t) {
    return e.isStaleByTime(t.staleTime);
  }
  var Of = I(Cl()),
    Rf = Of.default.unstable_batchedUpdates;
  T.setBatchNotifyFunction(Rf);
  var Nf = console;
  Rl(Nf);
  var gt = I(xe()),
    Ff = gt.default.createContext(void 0),
    Mf = gt.default.createContext(!1);
  function Tf(e) {
    return e && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = Ff),
        window.ReactQueryClientContext)
      : Ff;
  }
  var Ml = function () {
      var t = gt.default.useContext(Tf(gt.default.useContext(Mf)));
      if (!t)
        throw new Error(
          "No QueryClient set, use QueryClientProvider to set one",
        );
      return t;
    },
    Tl = function (t) {
      var n = t.client,
        r = t.contextSharing,
        i = r === void 0 ? !1 : r,
        o = t.children;
      gt.default.useEffect(
        function () {
          return (
            n.mount(),
            function () {
              n.unmount();
            }
          );
        },
        [n],
      );
      var u = Tf(i);
      return gt.default.createElement(
        Mf.Provider,
        { value: i },
        gt.default.createElement(u.Provider, { value: n }, o),
      );
    };
  var Dl = I(xe());
  function Oh() {
    var e = !1;
    return {
      clearReset: function () {
        e = !1;
      },
      reset: function () {
        e = !0;
      },
      isReset: function () {
        return e;
      },
    };
  }
  var Rh = Dl.default.createContext(Oh()),
    Df = function () {
      return Dl.default.useContext(Rh);
    };
  function Lf(e, t, n) {
    return typeof t == "function"
      ? t.apply(void 0, n)
      : typeof t == "boolean"
        ? t
        : !!e;
  }
  var Cn = I(xe());
  function If(e, t) {
    var n = Cn.default.useRef(!1),
      r = Cn.default.useState(0),
      i = r[1],
      o = Ml(),
      u = Df(),
      l = o.defaultQueryObserverOptions(e);
    ((l.optimisticResults = !0),
      l.onError && (l.onError = T.batchCalls(l.onError)),
      l.onSuccess && (l.onSuccess = T.batchCalls(l.onSuccess)),
      l.onSettled && (l.onSettled = T.batchCalls(l.onSettled)),
      l.suspense &&
        (typeof l.staleTime != "number" && (l.staleTime = 1e3),
        l.cacheTime === 0 && (l.cacheTime = 1)),
      (l.suspense || l.useErrorBoundary) &&
        (u.isReset() || (l.retryOnMount = !1)));
    var s = Cn.default.useState(function () {
        return new t(o, l);
      }),
      a = s[0],
      m = a.getOptimisticResult(l);
    if (
      (Cn.default.useEffect(
        function () {
          ((n.current = !0), u.clearReset());
          var S = a.subscribe(
            T.batchCalls(function () {
              n.current &&
                i(function (h) {
                  return h + 1;
                });
            }),
          );
          return (
            a.updateResult(),
            function () {
              ((n.current = !1), S());
            }
          );
        },
        [u, a],
      ),
      Cn.default.useEffect(
        function () {
          a.setOptions(l, { listeners: !1 });
        },
        [l, a],
      ),
      l.suspense && m.isLoading)
    )
      throw a
        .fetchOptimistic(l)
        .then(function (S) {
          var h = S.data;
          (l.onSuccess == null || l.onSuccess(h),
            l.onSettled == null || l.onSettled(h, null));
        })
        .catch(function (S) {
          (u.clearReset(),
            l.onError == null || l.onError(S),
            l.onSettled == null || l.onSettled(void 0, S));
        });
    if (
      m.isError &&
      !u.isReset() &&
      !m.isFetching &&
      Lf(l.suspense, l.useErrorBoundary, [m.error, a.getCurrentQuery()])
    )
      throw m.error;
    return (
      l.notifyOnChangeProps === "tracked" && (m = a.trackResult(m, l)),
      m
    );
  }
  function xn(e, t, n) {
    var r = gn(e, t, n);
    return If(r, Fl);
  }
  var N = I(Z()),
    to = window.OctoPrint;
  function Ll() {
    let [e, t] = Tr.useState(!1),
      [n, r] = Tr.useState("root"),
      [i, o] = Tr.useState([]),
      [u, l] = Tr.useState(0),
      s = (g = "root") =>
        g === "root"
          ? to.simpleApiCommand("onedrive_backup", "folders")
          : to.simpleApiCommand("onedrive_backup", "foldersById", { id: g }),
      {
        data: a,
        isLoading: m,
        error: S,
        refetch: h,
      } = xn(["folders", n], () => s(n), { enabled: e }),
      {
        data: y,
        isLoading: w,
        refetch: C,
      } = xn("accounts", () => to.simpleApiGet("onedrive_backup")),
      d = (g) => {
        (o((_) => _.concat([n])), r(g), l((_) => _ + 1));
      },
      c = () => {
        if (i.length >= 0 && u > 0) {
          let g = u - 1,
            _ = i[g];
          (l(g), r(_), o((R) => R.slice(0, g)));
        }
      },
      f = (g) => {
        to.simpleApiCommand("onedrive_backup", "setFolder", {
          id: g.id,
          path: g.path,
        }).done(() => C());
      },
      p =
        a != null && a.folders
          ? a.folders.map((g) =>
              (0, N.jsxs)(
                "tr",
                {
                  children: [
                    (0, N.jsx)("td", {
                      children:
                        g.childCount > 0
                          ? (0, N.jsxs)("a", {
                              onClick: () => d(g.id),
                              style: { cursor: "pointer" },
                              children: [
                                (0, N.jsx)("i", {
                                  className: "far fa-folder-open",
                                }),
                                " ",
                                g.name,
                              ],
                            })
                          : (0, N.jsxs)("span", {
                              children: [
                                (0, N.jsx)("i", {
                                  className: "far fa-folder-open",
                                }),
                                " ",
                                g.name,
                              ],
                            }),
                    }),
                    (0, N.jsx)("td", {
                      children: (0, N.jsx)("button", {
                        className: "btn btn-primary btn-mini",
                        onClick: () => f(g),
                        children: "Set upload destination",
                      }),
                    }),
                  ],
                },
                g.id,
              ),
            )
          : [],
      v = S || (a == null ? void 0 : a.error),
      k = m || w;
    return (0, N.jsxs)(N.Fragment, {
      children: [
        w
          ? (0, N.jsxs)("span", {
              children: [
                (0, N.jsx)("i", { className: "fas fa-spin fa-spinner" }),
                " Loading...",
              ],
            })
          : (0, N.jsxs)("span", {
              children: [
                "Currently configured upload destination: ",
                y != null && y.folder.path
                  ? (0, N.jsx)("code", { children: y.folder.path })
                  : "None",
              ],
            }),
        (0, N.jsxs)("div", {
          className: "row-fluid",
          children: [
            (y == null ? void 0 : y.folder.path) &&
              (0, N.jsxs)("button", {
                className: "btn btn-primary",
                style: { marginRight: "5px" },
                onClick: () => f({ id: "", path: "" }),
                children: [
                  (0, N.jsx)("i", {
                    className:
                      "fa-fw " +
                      (k ? "fas fa-spin fa-spinner" : "fas fa-times"),
                  }),
                  " Clear folder",
                ],
              }),
            !e &&
              (0, N.jsxs)("button", {
                className: "btn btn-primary",
                onClick: () => t(!0),
                children: [
                  (0, N.jsx)("i", {
                    className:
                      "fa-fw " +
                      (m ? "fas fa-spin fa-spinner" : "far fa-folder-open"),
                  }),
                  " Change folder",
                ],
              }),
            e &&
              (0, N.jsxs)("button", {
                className: "btn btn-primary",
                onClick: () => h(),
                children: [
                  (0, N.jsx)("i", {
                    className: "fa-fw fas fa-sync" + (m ? "fa-spin" : ""),
                  }),
                  " ",
                  v ? "Retry" : "Refresh",
                ],
              }),
          ],
        }),
        v &&
          (0, N.jsxs)(ff, {
            variant: "error",
            children: [
              (0, N.jsx)("i", { className: "fas fa-times text-error" }),
              (0, N.jsx)("strong", { children: " Error:" }),
              typeof a.error == "string"
                ? a.error
                : "Unknown error. Check octoprint.log for details.",
            ],
          }),
        e &&
          (0, N.jsxs)("table", {
            className: "table",
            children: [
              (0, N.jsx)("thead", {
                children: (0, N.jsxs)("tr", {
                  children: [
                    (0, N.jsxs)("th", {
                      children: [
                        "Folder name ",
                        k &&
                          (0, N.jsx)("i", {
                            className: "fas fa-spin fa-spinner",
                          }),
                        " ",
                      ],
                    }),
                    (0, N.jsx)("th", { children: "Actions" }),
                  ],
                }),
              }),
              (0, N.jsxs)("tbody", {
                children: [
                  u > 0 &&
                    (0, N.jsxs)("tr", {
                      children: [
                        (0, N.jsx)("td", {
                          children: (0, N.jsxs)("span", {
                            onClick: c,
                            style: { cursor: "pointer" },
                            children: [
                              (0, N.jsx)("i", {
                                className: "fas fa-arrow-left",
                              }),
                              " Back",
                            ],
                          }),
                        }),
                        (0, N.jsx)("td", {}),
                      ],
                    }),
                  p.length
                    ? p
                    : (0, N.jsx)(N.Fragment, {
                        children:
                          !m &&
                          !v &&
                          (0, N.jsx)("tr", {
                            children: (0, N.jsxs)("td", {
                              children: [
                                (0, N.jsx)("i", { className: "fas fa-times" }),
                                " No sub-folders found",
                              ],
                            }),
                          }),
                      }),
                ],
              }),
            ],
          }),
      ],
    });
  }
  var We = I(Z());
  function Il() {
    return (0, We.jsxs)(We.Fragment, {
      children: [
        (0, We.jsx)("hr", {}),
        (0, We.jsxs)("p", {
          children: [
            "OneDrive backup by",
            " ",
            (0, We.jsx)("a", {
              href: "https://github.com/cp2004",
              target: "_blank",
              rel: "noreferrer",
              children: "Charlie Powell",
            }),
            " | ",
            (0, We.jsx)("i", { className: "fas fa-tag text-success" }),
            (0, We.jsx)("a", {
              href: "https://github.com/cp2004/OctoPrint-OneDrive-Backup/releases",
              target: "_blank",
              rel: "noreferrer",
              children: " Release notes",
            }),
          ],
        }),
      ],
    });
  }
  var Kf = I(Af());
  var Ul = I(xe());
  var jf = I(xe()),
    Uf = window.OctoPrint;
  function Dr(e, t) {
    jf.useEffect(
      () => (
        Uf.socket.onMessage(e, t),
        () => {
          Uf.socket.removeMessage(e, t);
        }
      ),
    );
  }
  var Hf = I(Vf()),
    L = I(Z()),
    Ql = window.OctoPrint,
    Al = "onedrive_backup";
  function jl() {
    var C;
    let [e, t] = Ul.useState(null),
      [n, r] = Ul.useState(!1),
      {
        data: i,
        isLoading: o,
        error: u,
        refetch: l,
      } = xn("accounts", () => Ql.simpleApiGet(Al)),
      s = Boolean(i == null ? void 0 : i.accounts.length),
      a = i == null ? void 0 : i.flow,
      m = s ? i.accounts.map((d) => (0, L.jsx)("li", { children: d }, d)) : [];
    Dr("plugin", (d) => {
      if (d.data.plugin === "onedrive_backup") {
        let f = d.data.data.type;
        (f === "auth_done" && (t("success"), l()),
          f === "auth_failed" && t("failed"));
      }
    });
    let S = () => {
        (r(!0),
          Ql.simpleApiCommand(Al, "startAuth").done(() => {
            (l(), r(!1));
          }));
      },
      h = () => {
        (r(!0),
          Ql.simpleApiCommand(Al, "forget").done(() => {
            (l(), r(!1));
          }));
      },
      y = o || n,
      w =
        ((C = i == null ? void 0 : i.flow) == null ? void 0 : C.expires_at) *
          1e3 <
        Date.now();
    return (0, L.jsxs)(L.Fragment, {
      children: [
        s
          ? (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)("p", { children: "Account registered:" }),
                (0, L.jsx)("ul", { children: m }),
              ],
            })
          : (0, L.jsx)("p", {
              children: "No Microsoft accounts registered, add one below",
            }),
        (0, L.jsxs)("div", {
          children: [
            (0, L.jsxs)("button", {
              className: "btn btn-success",
              onClick: S,
              children: [
                (0, L.jsx)("i", {
                  className:
                    "fas fa-fw " +
                    (y
                      ? "fa-spin fa-spinner"
                      : s
                        ? "fa-user-edit"
                        : w
                          ? "fa-redo"
                          : "fa-user-plus"),
                }),
                " ",
                s ? "Change Account" : w ? "Regenerate code" : "Add account",
              ],
            }),
            s &&
              (0, L.jsxs)("button", {
                className: "btn btn-danger",
                style: { marginLeft: "5px" },
                onClick: h,
                children: [
                  (0, L.jsx)("i", { className: "fas fa-fw fa-trash" }),
                  " ",
                  "Forget Account",
                ],
              }),
          ],
        }),
        a &&
          (0, L.jsxs)("div", {
            className: "row-fluid",
            children: [
              (0, L.jsxs)("p", {
                style: { marginTop: "10px" },
                children: [
                  "Head to ",
                  (0, L.jsx)("a", {
                    href: i.flow.verification_uri,
                    target: "_blank",
                    rel: "noreferrer",
                    children: i.flow.verification_uri,
                  }),
                  " and enter code",
                  " ",
                  (0, L.jsx)("code", { children: i.flow.user_code }),
                  " to connect your Microsoft account",
                ],
              }),
              (0, L.jsxs)("p", {
                children: [
                  (0, L.jsxs)("button", {
                    className: "btn btn-mini",
                    onClick: () => {
                      (0, Hf.default)(i.flow.user_code);
                    },
                    children: [
                      (0, L.jsx)("i", { className: "fas fa-fw fa-copy" }),
                      " ",
                      "Copy code",
                    ],
                  }),
                  " ",
                  (0, L.jsx)("i", { className: "fas fa-clock" }),
                  " Code expires at " +
                    new Date(i.flow.expires_at * 1e3).toLocaleTimeString(),
                ],
              }),
            ],
          }),
        e === "success" &&
          (0, L.jsx)("div", {
            className: "alert alert-success",
            style: { marginTop: "5px" },
            children: (0, L.jsxs)("p", {
              children: [
                (0, L.jsx)("strong", { children: "Success! " }),
                "Your account has been successfully added to the plugin. Make sure to configure the path to upload your backups to below.",
              ],
            }),
          }),
        e === "failed" &&
          (0, L.jsx)("div", {
            className: "alert alert-error",
            style: { marginTop: "5px" },
            children: (0, L.jsxs)("p", {
              children: [
                (0, L.jsx)("strong", { children: "Error! " }),
                "There was an error adding your account. Please try again.",
              ],
            }),
          }),
      ],
    });
  }
  var Ue = I(Z());
  function zl() {
    return (0, Ue.jsxs)(Ue.Fragment, {
      children: [
        (0, Ue.jsx)("hr", {}),
        (0, Ue.jsx)("h5", { children: "Important Security Notice" }),
        (0, Ue.jsx)("p", {
          children:
            "Please be aware that this plugin stores its tokens for accessing your Microsoft account in OctoPrint's configuration folder. As a result, if your OctoPrint install (or the server it is running on) is compromised, your files in OneDrive are at risk.",
        }),
        (0, Ue.jsx)("p", {
          children: (0, Ue.jsx)("strong", {
            children:
              "It is not recommended to use this plugin on OctoPrint installs accessible directly from the internet, or multi-user installs where you may not trust every user.",
          }),
        }),
        (0, Ue.jsx)("p", {
          children:
            "The author of this plugin is not responsible for any damage caused as a result of using this plugin.",
        }),
      ],
    });
  }
  var W = I(Z()),
    $l = window.PNotify,
    Dh = window._,
    Lh = "onedrive_backup",
    Ih = new Nl({ defaultOptions: { queries: { refetchOnWindowFocus: !1 } } });
  function Bl() {
    return (0, W.jsx)(_r, {
      onError: Qh,
      children: (0, W.jsxs)(Tl, {
        client: Ih,
        children: [
          (0, W.jsx)(Kf.ReactQueryDevtools, { initialIsOpen: !1 }),
          (0, W.jsx)(Ah, {}),
        ],
      }),
    });
  }
  function Qh() {
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)("h2", {
          className: "text-error",
          children: "There was an error rendering the UI.",
        }),
        (0, W.jsxs)("p", {
          children: [
            "Please ",
            (0, W.jsx)("a", {
              href: "https://github.com/cp2004/OctoPrint-NextGen-UI/issues/new/choose",
              target: "_blank",
              rel: "noreferrer",
              children: "report this error",
            }),
            ", including the full JavaScript console contents in the report.",
          ],
        }),
      ],
    });
  }
  function Ah() {
    let [e, t] = Wf.useState(null);
    return (
      Dr("plugin", (n) => {
        if (n.data.plugin !== Lh) return;
        let i = n.data.data.type;
        if (i === "upload_progress") {
          let o = n.data.data.content.progress;
          if (e) e.update({ text: `Upload ${o}% complete...` });
          else {
            let u = new $l({
              title: "Uploading backup to OneDrive",
              text: `Upload ${o}% complete...`,
              hide: !1,
            });
            t(u);
          }
        }
        (i === "upload_complete" &&
          (e && (e.remove(), t(null)),
          new $l({
            title: "Upload complete",
            text: "Backup successfully uploaded to OneDrive",
            type: "success",
            hide: !0,
            delay: 30 * 1e3,
          })),
          i === "upload_error" &&
            (e && (e.remove(), t(null)),
            new $l({
              title: "Upload error",
              text: `There was an error uploading your backup. Please check the <code>octoprint.log</code> for details. <br> <pre>${Dh.escape(JSON.stringify(n.data.data.content.error))}</pre>`,
              type: "error",
              hide: !1,
            })));
      }),
      (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsx)("h5", { children: "OneDrive Backup Configuration" }),
          (0, W.jsx)(jl, {}),
          (0, W.jsx)("hr", {}),
          (0, W.jsx)(Ll, {}),
          (0, W.jsx)(zl, {}),
          (0, W.jsx)(Il, {}),
        ],
      })
    );
  }
  var jh = I(Z()),
    no = window.OctoPrint;
  no.socket.removeMessage = (e, t) => {
    if (!no.socket.registeredHandlers.hasOwnProperty(e)) return;
    let n = no.socket.registeredHandlers[e].indexOf(t);
    n > -1 && no.socket.registeredHandlers[e].splice(n, 1);
  };
  function Uh() {
    this.onStartup = () => {
      Yf.render(
        (0, jh.jsx)(Bl, {}),
        document.getElementById("onedrive_backup_root"),
      );
    };
  }
  window.OCTOPRINT_VIEWMODELS.push({
    construct: Uh,
    name: "OneDriveBackupViewModel",
  });
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=onedrive_backup.js.map
