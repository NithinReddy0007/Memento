var MementoFxPackage = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w = /* @__PURE__ */ Symbol.for("react.suspense");
      var x2 = /* @__PURE__ */ Symbol.for("react.memo");
      var y = /* @__PURE__ */ Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
        else if (f = A2(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a) return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X2() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q2;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X2;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x2, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X2;
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x2 = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x2, C) ? (a[d] = x2, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x2, c)) a[d] = x2, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q2 = p.now();
        exports.unstable_now = function() {
          return p.now() - q2;
        };
      }
      var l;
      var p;
      var q2;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A2 = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k(t);
          else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A2) if (null !== h(r)) A2 = true, I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A2 = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z || (A2 = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A2 || z || (A2 = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b) {
        ha2(a, b);
        ha2(a + "Capture", b);
      }
      function ha2(a, b) {
        ea2[a] = b;
        for (a = 0; a < b.length; a++) da2.add(b[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja2 = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma2 = {};
      function oa(a) {
        if (ja2.call(ma2, a)) return true;
        if (ja2.call(la2, a)) return false;
        if (ka2.test(a)) return ma2[a] = true;
        la2[a] = true;
        return false;
      }
      function pa2(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa2(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra,
          sa2
        );
        z[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra, sa2);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra, sa2);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa2(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua2 = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca2 = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja2 = Symbol.iterator;
      function Ka2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja2 && a[Ja2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A2 = Object.assign;
      var La2;
      function Ma2(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b && b[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa2(a, b) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l) {
              d = l;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma2(a) : "";
      }
      function Pa2(a) {
        switch (a.tag) {
          case 5:
            return Ma2(a.type);
          case 16:
            return Ma2("Lazy");
          case 13:
            return Ma2("Suspense");
          case 19:
            return Ma2("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa2(a.type, false), a;
          case 11:
            return a = Oa2(a.type.render, false), a;
          case 1:
            return a = Oa2(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za2:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca2:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b = a.displayName || null, null !== b ? b : Qa2(a.type) || "Memo";
          case Ha2:
            b = a._payload;
            a = a._init;
            try {
              return Qa2(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra2(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b);
          case 8:
            return b === za2 ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua2(a) {
        var b = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa2(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya2(a, b) {
        var c = b.checked;
        return A2({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za2(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa2(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta2(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa2(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa2(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A2({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b) {
        var c = Sa2(b.value), d = Sa2(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      })(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
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
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia2) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c) return Xb(e), a;
              if (f === d) return Xb(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca2.unstable_scheduleCallback;
      var bc = ca2.unstable_cancelCallback;
      var cc = ca2.unstable_shouldYield;
      var dc = ca2.unstable_requestPaint;
      var B = ca2.unstable_now;
      var ec = ca2.unstable_getCurrentPriorityLevel;
      var fc = ca2.unstable_ImmediatePriority;
      var gc = ca2.unstable_UserBlockingPriority;
      var hc = ca2.unstable_NormalPriority;
      var ic = ca2.unstable_LowPriority;
      var jc = ca2.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
          } else k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - oc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca2.unstable_scheduleCallback(ca2.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua2.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e = Yc(a, b, c, d);
          if (null === e) hd(a, b, d, id, c), Sc(a, d);
          else if (Uc(e, a, b, c, d)) d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a, b, c, d);
              null === f && hd(a, b, d, id, c);
              if (f === e) break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else hd(a, b, d, null, c);
        }
      }
      var id = null;
      function Yc(a, b, c, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A2({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A2({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A2({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A2({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
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
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
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
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A2({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A2({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae2 = ia2 && "CompositionEvent" in window;
      var be2 = null;
      ia2 && "documentMode" in document && (be2 = document.documentMode);
      var ce = ia2 && "TextEvent" in window && !be2;
      var de = ia2 && (!ae2 || be2 && 8 < be2 && 11 >= be2);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge2(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he2(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie2 = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he2(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie2) return "compositionend" === a || !ae2 && ge2(a, b) ? (a = nd(), md = ld = kd = null, ie2 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me2(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le2[a.type] : "textarea" === b ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe2(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe2 = null;
      var qe = null;
      function re2(a) {
        se2(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa2(b)) return a;
      }
      function ve2(a, b) {
        if ("change" === a) return b;
      }
      var we2 = false;
      if (ia2) {
        if (ia2) {
          ye2 = "oninput" in document;
          if (!ye2) {
            ze2 = document.createElement("div");
            ze2.setAttribute("oninput", "return;");
            ye2 = "function" === typeof ze2.oninput;
          }
          xe = ye2;
        } else xe = false;
        we2 = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye2;
      var ze2;
      function Ae2() {
        pe2 && (pe2.detachEvent("onpropertychange", Be2), qe = pe2 = null);
      }
      function Be2(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          Jb(re2, b);
        }
      }
      function Ce2(a, b, c) {
        "focusin" === a ? (Ae2(), pe2 = b, qe = c, pe2.attachEvent("onpropertychange", Be2)) : "focusout" === a && Ae2();
      }
      function De2(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
      }
      function Ee(a, b) {
        if ("click" === a) return te(b);
      }
      function Fe2(a, b) {
        if ("input" === a || "change" === a) return te(b);
      }
      function Ge2(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He2 = "function" === typeof Object.is ? Object.is : Ge2;
      function Ie(a, b) {
        if (He2(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja2.call(b, e) || !He2(a[e], b[e])) return false;
        }
        return true;
      }
      function Je2(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke(a, b) {
        var c = Je2(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je2(c);
        }
      }
      function Le2(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le2(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me2() {
        for (var a = window, b = Xa2(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa2(a.document);
        }
        return b;
      }
      function Ne2(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe2(a) {
        var b = Me2(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le2(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne2(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(
                c,
                d
              );
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe2 = ia2 && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re2 = null;
      var Se2 = null;
      var Te2 = false;
      function Ue2(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te2 || null == Qe || Qe !== Xa2(d) || (d = Qe, "selectionStart" in d && Ne2(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se2 && Ie(Se2, d) || (Se2 = d, d = oe2(Re2, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve2(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We2 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe2 = {};
      var Ye2 = {};
      ia2 && (Ye2 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
      function Ze(a) {
        if (Xe2[a]) return Xe2[a];
        if (!We2[a]) return a;
        var b = We2[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye2) return Xe2[a] = b[c];
        return a;
      }
      var $e2 = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa2(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e2, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se2(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da2.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k2 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e2:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b & 4), J = !t && "scroll" === a, x2 = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x2 && (F = Kb(w, x2), null != F && t.push(tf(w, F, u))));
                if (J) break;
                w = w.return;
              }
              0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k2 = null, n = d2;
                if (k2 !== n) {
                  t = Bd;
                  F = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x2 = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n ? h2 : ue(n);
                  h2 = new t(F, w + "leave", k2, c, e2);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x2, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n) b: {
                    t = k2;
                    x2 = n;
                    w = 0;
                    for (u = t; u; u = vf(u)) w++;
                    u = 0;
                    for (F = x2; F; F = vf(F)) u++;
                    for (; 0 < w - u; ) t = vf(t), w--;
                    for (; 0 < u - w; ) x2 = vf(x2), u--;
                    for (; w--; ) {
                      if (t === x2 || null !== x2 && t === x2.alternate) break b;
                      t = vf(t);
                      x2 = vf(x2);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k2 && wf(g2, h2, k2, t, false);
                  null !== n && null !== J && wf(g2, J, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve2;
              else if (me2(h2)) if (we2) na = Fe2;
              else {
                na = De2;
                var xa2 = Ce2;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g2, na, c, e2);
                break a;
              }
              xa2 && xa2(a, h2, d2);
              "focusout" === a && (xa2 = h2._wrapperState) && xa2.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa2 = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me2(xa2) || "true" === xa2.contentEditable) Qe = xa2, Re2 = d2, Se2 = null;
                break;
              case "focusout":
                Se2 = Re2 = Qe = null;
                break;
              case "mousedown":
                Te2 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te2 = false;
                Ue2(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe2) break;
              case "keydown":
              case "keyup":
                Ue2(g2, c, e2);
            }
            var $a;
            if (ae2) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie2 ? ge2(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de && "ko" !== c.locale && (ie2 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie2 && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), xa2 = oe2(d2, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a, null, c, e2), g2.push({ event: ba2, listeners: xa2 }), $a ? ba2.data = $a : ($a = he2(c), null !== $a && (ba2.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se2(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe2(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e = a, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf) throw Error(p(168));
        G(H, b);
        G(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d) if (!(e in b)) throw Error(p(108, Ra2(a) || "Unknown", e));
        return A2({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - oc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c << e | d;
          sg = f + a;
        } else rg = 1 << f | c << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I) return Fg(a), I = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ya2) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha2 && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q2(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va2:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa2:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha2:
                var d2 = b2._init;
                return q2(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka2(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case wa2:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ha2:
                return e2 = c2._init, r(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka2(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ha2:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka2(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x2 = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x2 = u, u = null) : x2 = u.sibling;
            var n2 = r(e2, u, h2[w], k2);
            if (null === n2) {
              null === u && (u = x2);
              break;
            }
            a && u && null === n2.alternate && b(e2, u);
            g2 = f(n2, g2, w);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x2;
          }
          if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
          if (null === u) {
            for (; w < h2.length; w++) u = q2(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I && tg(e2, w);
            return l2;
          }
          for (u = d(e2, u); w < h2.length; w++) x2 = y(u, e2, w, h2[w], k2), null !== x2 && (a && null !== x2.alternate && u.delete(null === x2.key ? w : x2.key), g2 = f(x2, g2, w), null === m2 ? l2 = x2 : m2.sibling = x2, m2 = x2);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function t(e2, g2, h2, k2) {
          var l2 = Ka2(h2);
          if ("function" !== typeof l2) throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l2 = null, m2 = g2, w = g2 = 0, x2 = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r(e2, m2, n2.value, k2);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a && m2 && null === t2.alternate && b(e2, m2);
            g2 = f(t2, g2, w);
            null === u ? l2 = t2 : u.sibling = t2;
            u = t2;
            m2 = x2;
          }
          if (n2.done) return c(
            e2,
            m2
          ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next()) n2 = q2(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya2 && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va2:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya2) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha2 && Ng(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = Lg(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya2 ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
            }
            if (eb(f2)) return n(a2, d2, f2, h2);
            if (Ka2(f2)) return t(a2, d2, f2, h2);
            Mg(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e = a.updateQueue;
        jh = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q2 = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y, q2, r);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q2, r) : n;
                    if (null === r || void 0 === r) break a;
                    q2 = A2({}, q2, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q2) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q2);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else null === f && (e.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q2;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G(wh, b);
        G(vh, a);
        G(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E(uh);
        G(uh, b);
      }
      function zh() {
        E(uh);
        E(vh);
        E(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G(vh, a), G(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E(uh), E(vh));
      }
      var L = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua2.ReactCurrentDispatcher;
      var Gh = ua2.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He2(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e, f) {
        Hh = f;
        M = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e);
        if (Jh) {
          f = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            O = N = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N && null !== N.next;
        Hh = 0;
        O = N = M = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
        return O;
      }
      function Uh() {
        if (null === N) {
          var a = M.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N.next;
        var b = null === O ? M.memoizedState : O.next;
        if (null !== b) O = b, N = a;
        else {
          if (null === a) throw Error(p(310));
          N = a;
          a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O ? M.memoizedState = O = a : O = O.next = a;
        }
        return O;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q2 = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q2, g = d) : k = k.next = q2;
              M.lanes |= m;
              rh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He2(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, M.lanes |= f, rh |= f, e = e.next;
          while (e !== a);
        } else null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He2(f, b.memoizedState) || (dh = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M, d = Uh(), e = b(), f = !He2(d.memoizedState, e);
        f && (d.memoizedState = e, dh = true);
        d = d.queue;
        $h(ai2.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi2(9, ci2.bind(null, c, d, e, b), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di2(c, b, e);
        }
        return e;
      }
      function di2(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci2(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei2(b) && fi2(a);
      }
      function ai2(a, b, c) {
        return c(function() {
          ei2(b) && fi2(a);
        });
      }
      function ei2(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He2(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi2(a) {
        var b = ih(a, 1);
        null !== b && gi2(b, a, 1, -1);
      }
      function hi2(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii2.bind(null, M, a);
        return [b.memoizedState, a];
      }
      function bi2(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji2() {
        return Uh().memoizedState;
      }
      function ki2(a, b, c, d) {
        var e = Th();
        M.flags |= a;
        e.memoizedState = bi2(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li2(a, b, c, d) {
        var e = Uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== N) {
          var g = N.memoizedState;
          f = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e.memoizedState = bi2(b, c, f, d);
            return;
          }
        }
        M.flags |= a;
        e.memoizedState = bi2(1 | b, c, f, d);
      }
      function mi2(a, b) {
        return ki2(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li2(2048, 8, a, b);
      }
      function ni2(a, b) {
        return li2(4, 2, a, b);
      }
      function oi2(a, b) {
        return li2(4, 4, a, b);
      }
      function pi2(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi2(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li2(4, 4, pi2.bind(null, b, a), c);
      }
      function ri2() {
      }
      function si2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui2(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He2(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi2(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi2() {
        return Uh().memoizedState;
      }
      function xi2(a, b, c) {
        var d = yi2(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e = R();
          gi2(c, a, d, e);
          Bi2(c, b, d);
        }
      }
      function ii2(a, b, c) {
        var d = yi2(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (He2(h, g)) {
              var k = b.interleaved;
              null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c = hh(a, b, e, d);
          null !== c && (e = R(), gi2(c, a, d, e), Bi2(c, b, d));
        }
      }
      function zi2(a) {
        var b = a.alternate;
        return a === M || null !== b && b === M;
      }
      function Ai2(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi2(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi2, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki2(
          4194308,
          4,
          pi2.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki2(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki2(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi2.bind(null, M, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi2, useDebugValue: ri2, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi2(false), b = a[0];
        a = vi2.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M, e = Th();
        if (I) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di2(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        mi2(ai2.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        bi2(9, ci2.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si2,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi2,
        useInsertionEffect: ni2,
        useLayoutEffect: oi2,
        useMemo: ti2,
        useReducer: Wh,
        useRef: ji2,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri2,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui2(b, N.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi2,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si2, useContext: eh, useEffect: $h, useImperativeHandle: qi2, useInsertionEffect: ni2, useLayoutEffect: oi2, useMemo: ti2, useReducer: Xh, useRef: ji2, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri2, useDeferredValue: function(a) {
        var b = Uh();
        return null === N ? b.memoizedState = a : ui2(b, N.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi2, unstable_isNewReconciler: false };
      function Ci2(a, b) {
        if (a && a.defaultProps) {
          b = A2({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di2(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A2({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei2 = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi2(a), f = mh(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi2(b, a, e, d), oh(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi2(a), f = mh(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi2(b, a, e, d), oh(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R(), d = yi2(a), e = mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = nh(a, e, d);
        null !== b && (gi2(b, a, d, c), oh(b, a, d));
      } };
      function Fi2(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
      }
      function Gi2(a, b, c) {
        var d = false, e = Vf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei2;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Hi2(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei2.enqueueReplaceState(b, b.state, null);
      }
      function Ii2(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = {};
        kh(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Di2(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei2.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function Ji2(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa2(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Ki2(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li2(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi2 = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni2(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi2 || (Oi2 = true, Pi2 = d);
          Li2(a, b);
        };
        return c;
      }
      function Qi2(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Li2(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Li2(a, b);
          "function" !== typeof d && (null === Ri2 ? Ri2 = /* @__PURE__ */ new Set([this]) : Ri2.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si2(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi2();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ti2.bind(null, a, b, c), b.then(a, a));
      }
      function Ui2(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi2(a, b, c, d, e) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Wi2 = ua2.ReactCurrentOwner;
      var dh = false;
      function Xi2(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        ch(b, e);
        d = Nh(a, b, c, d, f, e);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi2(a, b, e);
        I && c && vg(b);
        b.flags |= 1;
        Xi2(a, b, d, e);
        return b.child;
      }
      function $i2(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
          a = Rg(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie;
          if (c(g, d) && a.ref === b.ref) return Zi2(a, b, e);
        }
        b.flags |= 1;
        a = Pg(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi2(a, b, e);
        }
        return cj(a, b, c, d, e);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f ? f.baseLanes : c;
          G(ej, fj);
          fj |= d;
        }
        else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
        Xi2(a, b, e, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e) {
        var f = Zf(c) ? Xf : H.current;
        f = Yf(b, f);
        ch(b, e);
        c = Nh(a, b, c, d, f, e);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi2(a, b, e);
        I && d && vg(b);
        b.flags |= 1;
        Xi2(a, b, c, e);
        return b.child;
      }
      function hj(a, b, c, d, e) {
        if (Zf(c)) {
          var f = true;
          cg(b);
        } else f = false;
        ch(b, e);
        if (null === b.stateNode) ij(a, b), Gi2(b, c, d), Ii2(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
          var m = c.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi2(b, g, d, l);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          k = b.memoizedState;
          h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di2(b, c, m, d), k = b.memoizedState), (h = jh || Fi2(b, c, h, d, r, k, l)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Ci2(b.type, h);
          g.props = l;
          q2 = b.pendingProps;
          r = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r !== k) && Hi2(b, g, d, k);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          var n = b.memoizedState;
          h !== q2 || r !== n || Wf.current || jh ? ("function" === typeof y && (Di2(b, c, y, d), n = b.memoizedState), (l = jh || Fi2(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f, e);
      }
      function jj(a, b, c, d, e, f) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e && dg(b, c, false), Zi2(a, b, f);
        d = b.stateNode;
        Wi2.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi2(a, b, h, f);
        b.memoizedState = d.state;
        e && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Xi2(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e |= 1;
        G(L, e & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = Pg(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki2(Error(p(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = pj({ mode: "visible", children: d.children }, e, 0, null);
          f = Tg(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Ki2(f, d, void 0);
          return sj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi2(d, a, e, -1));
          }
          tj();
          d = Ki2(Error(p(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
        a = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        Xi2(a, b, d.children, c);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G(L, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            wj(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            wj(b, true, c, null, f);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi2(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Wg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G(L, L.current & 1);
              a = Zi2(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi2(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya2(a, e);
              d = Ya2(a, d);
              f = [];
              break;
            case "select":
              e = A2({}, e, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea2.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else c || (f || (f = []), f.push(
              l,
              c
            )), c = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea2.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
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
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E(Wf);
            E(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za2(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c, f);
                e = null;
                for (var g in f) if (f.hasOwnProperty(g)) {
                  var h = f[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e = ["children", "" + h]) : ea2.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za2(a, d);
                      e = Ya2(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A2({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c, e);
                  h = e;
                  for (f in h) if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea2.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta2(a, f, k, g));
                  }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E(L);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
              else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f) throw Error(p(318));
                  f = b.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f) throw Error(p(317));
                  f[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f = false;
              } else null !== zg && (Fj(zg), zg = null), f = true;
              if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E(L);
            f = b.memoizedState;
            if (null === f) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) if (d) Dj(f, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G(L, L.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
              } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E(L);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me2();
        if (Ne2(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset, f = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f.nodeType;
              } catch (F) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k = -1, l = 0, m = 0, q2 = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                  q2 !== f || 0 !== d && 3 !== q2.nodeType || (k = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y = q2.firstChild)) break;
                  r = q2;
                  q2 = y;
                }
                for (; ; ) {
                  if (q2 === a) break b;
                  r === c && ++l === e && (h = g);
                  r === f && ++m === d && (k = g);
                  if (null !== (y = q2.nextSibling)) break;
                  q2 = r;
                  r = q2.parentNode;
                }
                q2 = y;
              }
              c = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
        else for (; null !== V; ) {
          b = V;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J = n.memoizedState, x2 = b.stateNode, w = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci2(b.type, t), J);
                  x2.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F) {
            W(b, b.return, F);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Mj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X2 = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U || Lj(c, b);
          case 6:
            var d = X2, e = Xj;
            X2 = null;
            Yj(a, b, c);
            X2 = d;
            Xj = e;
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
            break;
          case 18:
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
            break;
          case 4:
            d = X2;
            e = Xj;
            X2 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X2 = d;
            Xj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W(c, b, h);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f = a, g = b, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X2 = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X2) throw Error(p(160));
            Zj(f, g, e);
            X2 = null;
            Xj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            W(e, b, l);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a, a.return, t);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                vb(h, g);
                var l = vb(h, f);
                for (g = 0; g < k.length; g += 2) {
                  var m = k[g], q2 = k[g + 1];
                  "style" === m ? sb(e, q2) : "dangerouslySetInnerHTML" === m ? nb(e, q2) : "children" === m ? ob(e, q2) : ta2(e, m, q2, l);
                }
                switch (h) {
                  case "input":
                    bb(e, f);
                    break;
                  case "textarea":
                    ib(e, f);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f.multiple;
                    var y = f.value;
                    null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                      e,
                      !!f.multiple,
                      f.defaultValue,
                      true
                    ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                }
                e[Pf] = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e = a.stateNode;
              f = a.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q2 = V = m; null !== V; ) {
                  r = V;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q2);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V = y) : gk(q2);
                }
                m = m.sibling;
              }
              a: for (m = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m) {
                    m = q2;
                    try {
                      e = q2.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q2.stateNode, k = q2.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W(a, a.return, t);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m) try {
                    q2.stateNode.nodeValue = l ? "" : q2.memoizedProps;
                  } catch (t) {
                    W(a, a.return, t);
                  }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a) break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a) break a;
                  m === q2 && (m = null);
                  q2 = q2.return;
                }
                m === q2 && (m = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Uj(a);
                Wj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Jj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l = U;
              Jj = g;
              if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
              for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
              V = e;
              Jj = h;
              U = l;
            }
            kk(a, b, c);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Ci2(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b.updateQueue;
                  null !== f && sh(b, f, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c.focus();
                        break;
                      case "img":
                        k.src && (c.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l = b.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var q2 = m.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U || b.flags & 512 && Rj(b);
            } catch (r) {
              W(b, b.return, r);
            }
          }
          if (b === a) {
            V = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b = V;
          if (b === a) {
            V = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k) {
                  W(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi2 = false;
      var Pi2 = null;
      var Ri2 = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi2(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi2(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e = K;
          K |= 2;
          var f = Jk();
          if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f;
          K = e;
          null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          if (6 === b) Ck(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    R();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e = c[d], f = e.getSnapshot;
              e = e.value;
              try {
                if (!He2(f(), e)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K & 6)) throw Error(p(327));
        Hk();
        var b = uc(a, 0);
        if (0 === (b & 1)) return Dk(a, B()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B());
        return null;
      }
      function Qk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b = K;
        K |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y = a = Pg(a.current, null);
        Z = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui2(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi2(y, g, h, f, b);
                  y.mode & 1 && Si2(f, l, b);
                  b = y;
                  k = l;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b.updateQueue = t;
                  } else n.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si2(f, l, b);
                    tj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Ui2(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi2(J, g, h, f, b);
                  Jg(Ji2(k, h));
                  break a;
                }
              }
              f = k = Ji2(k, h);
              4 !== T && (T = 2);
              null === sk ? sk = [f] : sk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var x2 = Ni2(f, k, b);
                    ph(f, x2);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri2 || !Ri2.has(u)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var F = Qi2(f, h, b);
                      ph(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Sk(c);
          } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a, b) {
        var c = K;
        K |= 2;
        var d = Jk();
        if (Q !== a || Z !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e) {
            Mk(a, e);
          }
        while (1);
        $g();
        K = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a, b, c) {
        var d = C, e = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Bc(a, f);
        a === Q && (Y = Q = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe2(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e);
          dc();
          K = h;
          C = g;
          ok.transition = f;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e);
        f = a.pendingLanes;
        0 === f && (Ri2 = null);
        mc(c.stateNode, d);
        Dk(a, B());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Oi2) throw Oi2 = false, a = Pi2, Pi2 = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f);
                        }
                        var q2 = m.child;
                        if (null !== q2) q2.return = m, V = q2;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V = r;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                else b: for (; null !== V; ) {
                  f = V;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f, f.return);
                  }
                  var x2 = f.sibling;
                  if (null !== x2) {
                    x2.return = f.return;
                    V = x2;
                    break b;
                  }
                  V = f.return;
                }
              }
              var w = a.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji2(c, b);
        b = Ni2(a, b, 1);
        a = nh(a, b, 1);
        b = R();
        null !== a && (Ac(a, 1, b), Dk(a, b));
      }
      function W(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri2 || !Ri2.has(d))) {
              a = Ji2(c, a);
              a = Qi2(b, a, 1);
              b = nh(b, a, 1);
              a = R();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti2(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R();
        a = ih(a, b);
        null !== a && (Ac(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            ch(b, c);
            e = Nh(null, b, d, a, e, c);
            var f = Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei2, b.stateNode = e, e._reactInternals = b, Ii2(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi2(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = Zk(d);
              a = Ci2(d, a);
              switch (e) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i2(null, b, d, Ci2(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci2(d, e), cj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci2(d, e), hj(a, b, d, e, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                e = Ji2(Error(p(423)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Ji2(Error(p(424)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e) {
                  b = Zi2(a, b, c);
                  break a;
                }
                Xi2(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi2(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi2(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci2(d, e), Yi(a, b, d, e, c);
          case 7:
            return Xi2(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f) if (He2(f.value, g)) {
                if (f.children === e.children && !Wf.current) {
                  b = Zi2(a, b, c);
                  break a;
                }
              } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = mh(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      bh(
                        f.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else for (g = f; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              Xi2(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi2(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = Ci2(d, b.pendingProps), e = Ci2(d.type, e), $i2(a, b, d, e, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci2(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi2(b, d, e), Ii2(b, d, e, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e, f, b);
          case za2:
            g = 8;
            e |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa2, a.lanes = f, a;
          case Ea2:
            return a = Bg(13, c, b, e), a.elementType = Ea2, a.lanes = f, a;
          case Fa2:
            return a = Bg(19, c, b, e), a.elementType = Fa2, a.lanes = f, a;
          case Ia2:
            return pj(c, e, f, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g = 10;
                break a;
              case Ca2:
                g = 9;
                break a;
              case Da2:
                g = 11;
                break a;
              case Ga2:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a, b, c, d, e, f, g, h, k) {
        a = new al(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = Bg(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f);
        return a;
      }
      function cl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el(a, b, c, d, e, f, g, h, k) {
        a = bl(c, d, true, a, e, f, g, h, k);
        a.context = dl(null);
        c = a.current;
        d = R();
        e = yi2(c);
        f = mh(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Dk(a, d);
        return a;
      }
      function fl(a, b, c, d) {
        var e = b.current, f = R(), g = yi2(e);
        c = dl(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e, b, g);
        null !== a && (gi2(a, e, g, f), oh(a, e, g));
        return g;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il(a, b) {
        hl(a, b);
        (a = a.alternate) && hl(a, b);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl(a, b, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a2 = gl(g);
              f.call(a2);
            };
          }
          var g = el(b, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e = a.lastChild; ) a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k);
            h.call(a2);
          };
        }
        var k = bl(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl(b, k, c, d);
        });
        return k;
      }
      function rl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = gl(g);
              h.call(a2);
            };
          }
          fl(b, g, a, e);
        } else g = ql(c, b, a, e, d);
        return gl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R();
                gi2(b2, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R();
            gi2(b, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi2(a), c = ih(a, b);
          if (null !== c) {
            var d = R();
            gi2(c, a, b, d);
          }
          il(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e) throw Error(p(90));
                  Wa2(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b)) throw Error(p(200));
        return cl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e = kl;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = bl(a, 1, false, null, null, c, false, d, e);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
          c,
          e
        );
        return new ml(b);
      };
      exports.render = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f = require_react();
      var k = /* @__PURE__ */ Symbol.for("react.element");
      var l = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q2(c, a, g) {
        var b, d = {}, e = null, h = null;
        void 0 !== g && (e = "" + g);
        void 0 !== a.key && (e = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l;
      exports.jsx = q2;
      exports.jsxs = q2;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/fx/bundle-entry.jsx
  var import_react8 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // node_modules/liquid-gooey/dist/index.js
  var import_react = __toESM(require_react(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react3 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_react_dom = __toESM(require_react_dom(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_meta = {};
  var GooeyContext = (0, import_react2.createContext)(null);
  function useGooeyContext() {
    const ctx = (0, import_react2.useContext)(GooeyContext);
    if (!ctx) throw new Error("<Gooey.Item> must be rendered inside a <Gooey> group.");
    return ctx;
  }
  var BINARIZE = "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -29.5";
  function InsetPass({ i, s }) {
    const parts = [];
    let src2 = "bin";
    if (s.spread !== 0) {
      parts.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "feMorphology",
          {
            in: src2,
            operator: s.spread > 0 ? "erode" : "dilate",
            radius: Math.abs(s.spread),
            result: `s${i}-er`
          },
          "er"
        )
      );
      src2 = `s${i}-er`;
    }
    if (s.x !== 0 || s.y !== 0) {
      parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", { in: src2, dx: s.x, dy: s.y, result: `s${i}-o` }, "o"));
      src2 = `s${i}-o`;
    }
    if (s.blur > 0) {
      parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { in: src2, stdDeviation: s.blur / 2, result: `s${i}-b` }, "b"));
      src2 = `s${i}-b`;
    }
    parts.push(
      // The band: silhouette minus its shrunk/offset self.
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in: "bin", in2: src2, operator: "out", result: `s${i}-band` }, "band"),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { floodColor: s.color, result: `s${i}-c` }, "c"),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in: `s${i}-c`, in2: `s${i}-band`, operator: "in", result: `s${i}` }, "f")
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts });
  }
  function ShadowPass({ i, s }) {
    const parts = [];
    let src2 = "shape";
    if (s.spread !== 0) {
      parts.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "feMorphology",
          {
            in: "bin",
            operator: s.spread > 0 ? "dilate" : "erode",
            radius: Math.abs(s.spread),
            result: `s${i}-sp`
          },
          "sp"
        )
      );
      src2 = `s${i}-sp`;
    }
    if (s.blur > 0) {
      parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { in: src2, stdDeviation: s.blur / 2, result: `s${i}-b` }, "b"));
      src2 = `s${i}-b`;
    }
    if (s.x !== 0 || s.y !== 0) {
      parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", { in: src2, dx: s.x, dy: s.y, result: `s${i}-o` }, "o"));
      src2 = `s${i}-o`;
    }
    parts.push(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { floodColor: s.color, result: `s${i}-c` }, "c"),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in: `s${i}-c`, in2: src2, operator: "in", result: `s${i}` }, "f")
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts });
  }
  function GooFilterPrimitives({
    blur,
    contrast,
    shadows,
    waviness = 0,
    wavinessFreq = 0.018
  }) {
    const wavy = waviness > 0;
    const intercept = Math.round((0.5 - contrast * (5 / 12)) * 100) / 100;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: blur, result: "blur" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "feColorMatrix",
        {
          in: "blur",
          type: "matrix",
          values: `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${contrast} ${intercept}`,
          result: "goo"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "feComposite",
        {
          in: "SourceGraphic",
          in2: "goo",
          operator: "atop",
          result: wavy ? "shape-raw" : "shape"
        }
      ),
      wavy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "feTurbulence",
          {
            type: "fractalNoise",
            baseFrequency: wavinessFreq,
            numOctaves: 2,
            seed: "7",
            result: "wave-noise"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "feDisplacementMap",
          {
            in: "shape-raw",
            in2: "wave-noise",
            scale: waviness * 2,
            xChannelSelector: "R",
            yChannelSelector: "G",
            result: "shape"
          }
        )
      ] }),
      shadows.some((s) => s.inset || s.spread !== 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { in: "shape", type: "matrix", values: BINARIZE, result: "bin" }),
      shadows.map(
        (s, i) => s.inset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsetPass, { i, s }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShadowPass, { i, s }, i)
      ),
      shadows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [
        shadows.map((s, i) => !s.inset ? i : -1).filter((i) => i >= 0).reverse().map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: `s${i}` }, i)),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "shape" }),
        shadows.map((s, i) => s.inset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: `s${i}` }, i) : null)
      ] })
    ] });
  }
  var IMAGE_MELT_DEFAULTS = {
    blur: 7,
    contrast: 40,
    reach: 0.8,
    fade: 17,
    warp: 0,
    mix: 1,
    mixBlur: 8,
    gravity: 1.9,
    waviness: 12
  };
  function createImageMeltRegistry() {
    const set = /* @__PURE__ */ new Set();
    const subs = /* @__PURE__ */ new Set();
    const notify = () => subs.forEach((f) => f());
    return {
      register(entry) {
        set.add(entry);
        notify();
        return () => {
          set.delete(entry);
          notify();
        };
      },
      subscribe(fn2) {
        subs.add(fn2);
        return () => subs.delete(fn2);
      },
      entries: () => [...set]
    };
  }
  function readGeom(group, el) {
    const gr2 = group.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const rad = parseFloat(cs.borderTopLeftRadius) || 0;
    return {
      x: r.left - gr2.left,
      y: r.top - gr2.top,
      w: r.width,
      h: r.height,
      r: Math.min(rad, r.width / 2, r.height / 2)
    };
  }
  var geomKey = (g) => `${Math.round(g.x * 2)},${Math.round(g.y * 2)},${Math.round(g.w)},${Math.round(g.h)},${Math.round(g.r)}`;
  function useEasedValue(target, rate = 14) {
    const [value, setValue] = (0, import_react3.useState)(target);
    const st = (0, import_react3.useRef)({ value: target, target, raf: 0, last: 0 });
    (0, import_react3.useEffect)(() => {
      const s = st.current;
      s.target = target;
      if (s.raf) return;
      s.last = performance.now();
      const tick = (now) => {
        const dt = Math.min(0.05, (now - s.last) / 1e3);
        s.last = now;
        const k = 1 - Math.exp(-rate * dt);
        s.value += (s.target - s.value) * k;
        if (Math.abs(s.value - s.target) < 4e-3) s.value = s.target;
        setValue(s.value);
        s.raf = s.value === s.target ? 0 : requestAnimationFrame(tick);
      };
      s.raf = requestAnimationFrame(tick);
      return () => {
        if (s.raf) cancelAnimationFrame(s.raf);
        s.raf = 0;
      };
    }, [target, rate]);
    return value;
  }
  function MeltPair({
    a,
    b,
    srcA,
    srcB,
    opts,
    width,
    height
  }) {
    const uid = `lgm-${(0, import_react3.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const { blur: gooBlur, contrast, reach, fade, warp, mix, mixBlur, gravity, waviness } = opts;
    const ca2 = { x: a.x + a.w / 2, y: a.y + a.h / 2 };
    const cb = { x: b.x + b.w / 2, y: b.y + b.h / 2 };
    const gap = Math.max(
      0,
      Math.hypot(
        Math.max(Math.abs(ca2.x - cb.x) - (a.w + b.w) / 2, 0),
        Math.max(Math.abs(ca2.y - cb.y) - (a.h + b.h) / 2, 0)
      )
    );
    const near2 = Math.max(0, Math.min(1, 1 - gap / Math.max(8, gooBlur * 2.6)));
    const proxTarget = near2 * near2 * (3 - 2 * near2);
    const prox = useEasedValue(proxTarget);
    const intercept = Math.round((0.5 - contrast * (5 / 12)) * 100) / 100;
    const rA = Math.hypot(a.w, a.h) / 2 * reach * prox;
    const rB = Math.hypot(b.w, b.h) / 2 * reach * prox;
    const seam = { x: (ca2.x + cb.x) / 2, y: (ca2.y + cb.y) / 2 };
    const dxc = cb.x - ca2.x;
    const dyc = cb.y - ca2.y;
    const dc = Math.max(1e-3, Math.hypot(dxc, dyc));
    const tx = -dyc / dc;
    const ty = dxc / dc;
    const ovx = Math.max(0, (a.w + b.w) / 2 - Math.abs(dxc));
    const ovy = Math.max(0, (a.h + b.h) / 2 - Math.abs(dyc));
    const tanHalf = 0.5 * (ovx * Math.abs(tx) + ovy * Math.abs(ty)) * prox;
    const seamDeg = Math.round(Math.atan2(ty, tx) * 180 / Math.PI);
    const mixAmt = Math.round(mix * prox * 100) / 100;
    const blurEff = Math.round((2 + (gooBlur - 2) * prox) * 10) / 10;
    const warpEff = Math.round(warp * prox * 10) / 10;
    const colorBlur = Math.round(blurEff * 2.5 * 10) / 10;
    const edgeSoft = Math.round((0.4 + (2 + gooBlur * 0.8) * prox) * 10) / 10;
    const gA = `translate(${a.x}, ${a.y})`;
    const gB = `translate(${b.x}, ${b.y})`;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "svg",
      {
        "aria-hidden": "true",
        focusable: "false",
        "data-gooey-imagemelt": "",
        width,
        height,
        viewBox: `0 0 ${width} ${height}`,
        style: {
          position: "absolute",
          inset: 0,
          overflow: "visible",
          pointerEvents: "none"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("defs", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pattern", { id: `${uid}-pa`, patternUnits: "userSpaceOnUse", width: a.w, height: a.h, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("image", { href: srcA, width: a.w, height: a.h, preserveAspectRatio: "xMidYMid slice" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pattern", { id: `${uid}-pb`, patternUnits: "userSpaceOnUse", width: b.w, height: b.h, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("image", { href: srcB, width: b.w, height: b.h, preserveAspectRatio: "xMidYMid slice" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("filter", { id: `${uid}-goo`, x: "-15%", y: "-15%", width: "130%", height: "130%", colorInterpolationFilters: "sRGB", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: blurEff, result: "b" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feColorMatrix",
                {
                  in: "b",
                  type: "matrix",
                  values: `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${contrast} ${intercept}`,
                  result: "goo"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: colorBlur, result: "bc" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feComposite", { in: "bc", in2: "goo", operator: "in", result: "mix" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feTurbulence",
                {
                  type: "fractalNoise",
                  baseFrequency: (2 + waviness * 1.2) / 1e3,
                  numOctaves: "2",
                  seed: "4",
                  result: "wn"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feDisplacementMap", { in: "mix", in2: "wn", scale: warpEff, xChannelSelector: "R", yChannelSelector: "G", result: "warped" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feComposite", { in: "warped", in2: "warped", operator: "over", result: "s1" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feComposite", { in: "s1", in2: "s1", operator: "over", result: "s2" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feComposite", { in: "s2", in2: "s2", operator: "over", result: "solid" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { in: "solid", stdDeviation: "0.6" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("filter", { id: `${uid}-soft`, x: "-60%", y: "-60%", width: "220%", height: "220%", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { stdDeviation: fade }) }),
            mixAmt > 0.01 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("filter", { id: `${uid}-marble`, x: "-25%", y: "-25%", width: "150%", height: "150%", colorInterpolationFilters: "sRGB", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: mixBlur, result: "c" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feTurbulence", { type: "fractalNoise", baseFrequency: "0.011", numOctaves: "2", seed: "5", result: "n1" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feDisplacementMap", { in: "c", in2: "n1", scale: mixAmt * 90, xChannelSelector: "R", yChannelSelector: "G", result: "d1" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feTurbulence", { type: "fractalNoise", baseFrequency: "0.019", numOctaves: "2", seed: "11", result: "n2" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feDisplacementMap", { in: "d1", in2: "n2", scale: mixAmt * 50, xChannelSelector: "R", yChannelSelector: "G", result: "d2" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feComposite", { in: "d2", in2: "d2", operator: "over", result: "m1" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feComposite", { in: "m1", in2: "m1", operator: "over", result: "m2" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { in: "m2", stdDeviation: "0.6", result: "marble" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: blurEff, result: "mb" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feColorMatrix",
                {
                  in: "mb",
                  type: "matrix",
                  values: `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${contrast} ${intercept}`,
                  result: "mg"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "feTurbulence",
                {
                  type: "fractalNoise",
                  baseFrequency: (2 + waviness * 1.2) / 1e3,
                  numOctaves: "2",
                  seed: "4",
                  result: "mwn"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feDisplacementMap", { in: "mg", in2: "mwn", scale: warpEff, xChannelSelector: "R", yChannelSelector: "G", result: "mshape" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feComposite", { in: "marble", in2: "mshape", operator: "in" })
            ] }),
            mixAmt > 0.01 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("mask", { id: `${uid}-marblemask`, maskUnits: "userSpaceOnUse", x: "0", y: "0", width, height, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { filter: `url(#${uid}-soft)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "ellipse",
              {
                cx: seam.x,
                cy: seam.y,
                rx: (rA + rB) / 2 + tanHalf,
                ry: (rA + rB) / 2 * gravity,
                transform: `rotate(${seamDeg}, ${seam.x}, ${seam.y})`,
                fill: "#fff"
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("filter", { id: `${uid}-edge`, x: "-40%", y: "-40%", width: "180%", height: "180%", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feGaussianBlur", { stdDeviation: edgeSoft }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("mask", { id: `${uid}-ma`, maskUnits: "userSpaceOnUse", x: "0", y: "0", width, height, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { filter: `url(#${uid}-edge)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gA, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: a.w, height: a.h, rx: a.r, fill: "#fff" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { filter: `url(#${uid}-soft)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "ellipse",
                {
                  cx: seam.x,
                  cy: seam.y,
                  rx: rB + tanHalf,
                  ry: rB,
                  transform: `rotate(${seamDeg}, ${seam.x}, ${seam.y})`,
                  fill: "#000"
                }
              ) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("mask", { id: `${uid}-mb`, maskUnits: "userSpaceOnUse", x: "0", y: "0", width, height, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { filter: `url(#${uid}-edge)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gB, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: b.w, height: b.h, rx: b.r, fill: "#fff" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { filter: `url(#${uid}-soft)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "ellipse",
                {
                  cx: seam.x,
                  cy: seam.y,
                  rx: rA + tanHalf,
                  ry: rA,
                  transform: `rotate(${seamDeg}, ${seam.x}, ${seam.y})`,
                  fill: "#000"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { filter: `url(#${uid}-goo)`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gA, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: a.w, height: a.h, rx: a.r, fill: `url(#${uid}-pa)` }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gB, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: b.w, height: b.h, rx: b.r, fill: `url(#${uid}-pb)` }) })
          ] }),
          mixAmt > 0.01 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { mask: `url(#${uid}-marblemask)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { filter: `url(#${uid}-marble)`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gA, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: a.w, height: a.h, rx: a.r, fill: `url(#${uid}-pa)` }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gB, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: b.w, height: b.h, rx: b.r, fill: `url(#${uid}-pb)` }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { mask: `url(#${uid}-ma)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gA, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: a.w, height: a.h, rx: a.r, fill: `url(#${uid}-pa)` }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { mask: `url(#${uid}-mb)`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: gB, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: b.w, height: b.h, rx: b.r, fill: `url(#${uid}-pb)` }) }) })
        ]
      }
    );
  }
  function ImageMeltLayer({ registry }) {
    const { getGroup } = useGooeyContext();
    const [, bump] = (0, import_react3.useState)(0);
    const [geoms, setGeoms] = (0, import_react3.useState)(null);
    const keyRef = (0, import_react3.useRef)("");
    (0, import_react3.useEffect)(() => registry.subscribe(() => bump((v) => v + 1)), [registry]);
    const pair = registry.entries().slice(0, 2);
    const active = pair.length === 2;
    (0, import_react3.useEffect)(() => {
      if (!active) {
        setGeoms(null);
        keyRef.current = "";
        return;
      }
      let raf2 = 0;
      const tick = () => {
        const group2 = getGroup();
        if (group2) {
          const a = readGeom(group2, pair[0].el);
          const b = readGeom(group2, pair[1].el);
          const key = geomKey(a) + "|" + geomKey(b);
          if (key !== keyRef.current) {
            keyRef.current = key;
            setGeoms({ a, b });
          }
        }
        raf2 = requestAnimationFrame(tick);
      };
      raf2 = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf2);
    }, [active, pair[0]?.el, pair[1]?.el, getGroup]);
    if (!active || !geoms) return null;
    const group = getGroup();
    const w = group?.offsetWidth ?? 0;
    const h = group?.offsetHeight ?? 0;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MeltPair,
      {
        a: geoms.a,
        b: geoms.b,
        srcA: pair[0].src,
        srcB: pair[1].src,
        opts: pair[0].opts,
        width: w,
        height: h
      }
    );
  }
  function ImageMeltItem({
    src: src2,
    opts,
    registry,
    children
  }) {
    const hostRef = (0, import_react3.useRef)(null);
    (0, import_react3.useEffect)(() => {
      const host = hostRef.current;
      const target = host?.firstElementChild;
      if (!target) return;
      const img = src2 ?? target.querySelector("img")?.src ?? target.src;
      if (!img) {
        if (false) {
          console.warn('[liquid-gooey] effect="melt" needs an image: pass melt={{ src }} or put an <img> inside the item.');
        }
        return;
      }
      const prevOpacity = target.style.opacity;
      target.style.opacity = "0";
      const unregister = registry.register({ el: target, src: img, opts });
      return () => {
        target.style.opacity = prevOpacity;
        unregister();
      };
    }, [src2, opts, registry]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { ref: hostRef, style: { display: "contents" }, children });
  }
  var useIsoLayoutEffect = typeof window !== "undefined" ? import_react4.useLayoutEffect : import_react4.useEffect;
  function useReducedMotion() {
    const [reduced, setReduced] = (0, import_react4.useState)(false);
    (0, import_react4.useEffect)(() => {
      const mq2 = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduced(mq2.matches);
      const onChange = (e) => setReduced(e.matches);
      mq2.addEventListener("change", onChange);
      return () => mq2.removeEventListener("change", onChange);
    }, []);
    return reduced;
  }
  function offsetTo(el, ancestor) {
    let x2 = 0;
    let y = 0;
    let node = el;
    while (node && node !== ancestor && ancestor.contains(node)) {
      x2 += node.offsetLeft;
      y += node.offsetTop;
      node = node.offsetParent;
    }
    return { x: x2, y };
  }
  function measureRadius(el, w, h) {
    const cs = getComputedStyle(el);
    const parse = (v) => {
      const first = v.split(" ")[0];
      if (first.endsWith("%")) return (parseFloat(first) || 0) / 100 * Math.min(w, h);
      return parseFloat(first) || 0;
    };
    return [
      parse(cs.borderTopLeftRadius),
      parse(cs.borderTopRightRadius),
      parse(cs.borderBottomRightRadius),
      parse(cs.borderBottomLeftRadius)
    ];
  }
  function normalizeRadius(r) {
    return typeof r === "number" ? [r, r, r, r] : r;
  }
  function roundedRectPath(x2, y, w, h, radii) {
    let [tl, tr2, br2, bl] = radii.map((v) => Math.max(0, v));
    const f = Math.min(
      1,
      w / Math.max(1e-6, tl + tr2),
      w / Math.max(1e-6, bl + br2),
      h / Math.max(1e-6, tl + bl),
      h / Math.max(1e-6, tr2 + br2)
    );
    tl *= f;
    tr2 *= f;
    br2 *= f;
    bl *= f;
    return `M ${x2 + tl} ${y} H ${x2 + w - tr2} A ${tr2} ${tr2} 0 0 1 ${x2 + w} ${y + tr2} V ${y + h - br2} A ${br2} ${br2} 0 0 1 ${x2 + w - br2} ${y + h} H ${x2 + bl} A ${bl} ${bl} 0 0 1 ${x2} ${y + h - bl} V ${y + tl} A ${tl} ${tl} 0 0 1 ${x2 + tl} ${y} Z`;
  }
  var viteHot = import_meta.hot;
  if (viteHot) viteHot.accept(() => viteHot.invalidate());
  var EVOLVE_DEFAULTS = {
    massStiffness: 320,
    massDamping: 17,
    sizeStiffness: 170,
    sizeDamping: 11.5,
    radiusStiffness: 900,
    radiusDamping: 60,
    contentBlur: 7,
    roundness: 1,
    cornerDuration: 460,
    cornerDelay: 0,
    cornerEase: "cubic-bezier(0.3, 1.05, 0.4, 1)",
    anticipation: 90,
    travel: 32
  };
  var easeCache = /* @__PURE__ */ new Map();
  function easingFn(spec) {
    let fn2 = easeCache.get(spec);
    if (fn2) return fn2;
    const m = /cubic-bezier\(([^)]+)\)/.exec(spec);
    if (m) {
      const [x1, y1, x2, y2] = m[1].split(",").map(Number);
      fn2 = (t) => {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        let lo = 0;
        let hi2 = 1;
        for (let i = 0; i < 24; i++) {
          const mid = (lo + hi2) / 2;
          const x3 = 3 * mid * (1 - mid) * (1 - mid) * x1 + 3 * mid * mid * (1 - mid) * x2 + mid ** 3;
          if (x3 < t) lo = mid;
          else hi2 = mid;
        }
        const u = (lo + hi2) / 2;
        return 3 * u * (1 - u) * (1 - u) * y1 + 3 * u * u * (1 - u) * y2 + u ** 3;
      };
    } else if (spec === "ease-in-out") {
      fn2 = easingFn("cubic-bezier(0.42, 0, 0.58, 1)");
    } else {
      fn2 = (t) => Math.min(1, Math.max(0, t));
    }
    easeCache.set(spec, fn2);
    return fn2;
  }
  var MOVE_DEFAULTS = {
    stiffness: 380,
    damping: 18,
    stretch: 0.18,
    tail: 0.46,
    force: 0.5,
    // Both bows are OPT-IN. As defaults they deformed every move item: the
    // sliders' circular thumbs turned egg-shaped mid-drag (cap deformation)
    // and sagged off the track's centreline (vertical bow) from nothing but
    // spring wobble in the velocity.
    bend: 0,
    bendX: 0
  };
  var MELT_LAYERS = 3;
  function cornerTotalOf(eo2) {
    return Math.max(0, eo2.cornerDelay) + Math.max(1, eo2.cornerDuration);
  }
  function pillRadius(r, w, h) {
    return Math.max(0, Math.min(r, Math.min(w, h) / 2));
  }
  function springStep(cur, vel, target, k, c, dt) {
    const a = k * (target - cur) - c * vel;
    const v = vel + a * dt;
    return [cur + v * dt, v];
  }
  function springSteps(cur, vel, target, k, c, dt) {
    let n = Math.max(1, Math.ceil(dt * 60));
    const h = dt / n;
    let p = cur;
    let v = vel;
    while (n-- > 0) {
      const step2 = springStep(p, v, target, k, c, h);
      p = step2[0];
      v = step2[1];
    }
    return [p, v];
  }
  function q(v, step2) {
    return Math.round(v / step2) * step2;
  }
  var SVG_NS = "http://www.w3.org/2000/svg";
  var meltCounter = 0;
  function smoothstep(t) {
    const c = Math.min(1, Math.max(0, t));
    return c * c * (3 - 2 * c);
  }
  function svg(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    return el;
  }
  function downscaleHref(el) {
    try {
      if (!el.complete || !el.naturalWidth) return null;
      const dw = Math.max(2, Math.min(el.naturalWidth, Math.round((el.offsetWidth || 40) * 3)));
      const dh = Math.max(2, Math.min(el.naturalHeight, Math.round((el.offsetHeight || 40) * 3)));
      if (el.naturalWidth <= dw * 1.5) return null;
      const cv = document.createElement("canvas");
      cv.width = dw;
      cv.height = dh;
      const c2 = cv.getContext("2d");
      if (!c2) return null;
      const scale = Math.max(dw / el.naturalWidth, dh / el.naturalHeight);
      const sw = dw / scale;
      const sh = dh / scale;
      c2.drawImage(el, (el.naturalWidth - sw) / 2, (el.naturalHeight - sh) / 2, sw, sh, 0, 0, dw, dh);
      return cv.toDataURL();
    } catch {
      return null;
    }
  }
  var ObserveEngine = class {
    constructor(getGroup) {
      this.getGroup = getGroup;
      this.gooBlur = 6;
      this.items = /* @__PURE__ */ new Set();
      this.awake = false;
      this.clean = 0;
      this.raf = 0;
      this.sourcesReady = false;
      this.mo = null;
      this.interval = null;
      this.removeListeners = [];
      this.wake = () => {
        this.clean = 0;
        if (this.awake || this.items.size === 0) return;
        this.awake = true;
        this.raf = requestAnimationFrame(this.loop);
      };
      this.lastNow = 0;
      this.frameEma = 17;
      this.loop = (now) => {
        if (this.items.size === 0) {
          this.awake = false;
          this.lastNow = 0;
          return;
        }
        const dt = this.lastNow ? Math.min(0.25, Math.max(1 / 240, (now - this.lastNow) / 1e3)) : 1 / 60;
        if (this.lastNow) {
          this.frameEma += (Math.min(now - this.lastNow, 80) - this.frameEma) * 0.12;
        }
        this.lastNow = now;
        if (this.measureAll(dt)) this.clean = 0;
        else this.clean++;
        if (this.clean > 30) {
          this.awake = false;
          this.lastNow = 0;
          return;
        }
        this.raf = requestAnimationFrame(this.loop);
      };
    }
    add(t) {
      const item = {
        ...t,
        baseW: t.target.offsetWidth || 1,
        baseH: t.target.offsetHeight || 1,
        radiusPx: this.resolveRadius(t),
        last: null,
        frame: null,
        lastBlend: null,
        melt: null,
        sim: null,
        motionEnv: 0,
        tPrev: null,
        tvx: 0,
        tvy: 0,
        lead01: 0,
        cornerT0: 0,
        lastTargetMoveT: 0,
        lastTargetSize: null,
        morphActive: false,
        round01: 0,
        tailEl: null,
        tailMidA: null,
        tailMidB: null,
        tailPhase: 0,
        bendCur: 0,
        bendCurX: 0,
        bendPathEl: null,
        lastBendD: null,
        lastBendVars: null,
        tailX: 0,
        tailY: 0,
        tailVx: 0,
        tailVy: 0,
        tailR: 0,
        contentBlurred: false,
        lastPaint: null,
        lastTail: null,
        lastBi: t.blobInset ?? 0,
        biSmooth: null,
        meltFade: 0,
        meltRel: null,
        meltOp: 1,
        meltPhase: 0,
        meltPrev: null,
        meltGeom: null,
        meltWroteAt: 0,
        meltAxis: null,
        meltHostLast: null,
        ro: new ResizeObserver(() => {
          item.baseW = t.target.offsetWidth || 1;
          item.baseH = t.target.offsetHeight || 1;
          item.radiusPx = this.resolveRadius(t);
          this.syncMelt(item);
          this.wake();
        })
      };
      item.ro.observe(t.target);
      this.items.add(item);
      this.refreshMelt(item);
      if (t.dynamics?.move) {
        const tail = svg("circle", { cx: "0", cy: "0", r: "0" });
        const midA = svg("circle", { cx: "0", cy: "0", r: "0" });
        const midB = svg("circle", { cx: "0", cy: "0", r: "0" });
        t.blob.parentNode?.insertBefore(tail, t.blob);
        t.blob.parentNode?.insertBefore(midA, t.blob);
        t.blob.parentNode?.insertBefore(midB, t.blob);
        item.tailEl = tail;
        item.tailMidA = midA;
        item.tailMidB = midB;
        const bendPath = svg("path", { d: "" });
        t.blob.parentNode?.insertBefore(bendPath, t.blob);
        item.bendPathEl = bendPath;
      }
      this.ensureSources();
      this.measureAll();
      this.wake();
      return () => {
        item.ro.disconnect();
        this.items.delete(item);
        this.clearBlend(item);
        if (item.contentBlurred) item.target.style.removeProperty("filter");
        item.tailEl?.remove();
        item.tailMidA?.remove();
        item.tailMidB?.remove();
        item.bendPathEl?.remove();
      };
    }
    dispose() {
      cancelAnimationFrame(this.raf);
      this.mo?.disconnect();
      this.removeListeners.forEach((off) => off());
      this.removeListeners = [];
      if (this.interval) clearInterval(this.interval);
      this.items.forEach((i) => i.ro.disconnect());
      this.items.clear();
      this.awake = false;
      this.sourcesReady = false;
    }
    resolveRadius(t) {
      if (t.radius != null) return t.radius;
      return measureRadius(t.target, t.target.offsetWidth, t.target.offsetHeight)[0];
    }
    /** (Re)build the warped-image SVG structure for a melt item. Two graded
     *  warp layers share ONE noise field (same frequency + seed): a wide gentle
     *  ripple and a tight strong core. Same field, different displacement
     *  scales → the layers align and read as a single liquid getting deeper
     *  toward the contact. The noise frequency is derived from the melt zone,
     *  so several ripple wavelengths fit across it — a fixed low frequency
     *  displaces the whole zone as one chunk, which reads as a shifted ghost
     *  copy instead of liquid. */
    /** Resize response. The melt DOM only needs REBUILDING when the set of
     *  images changes; a resize alone just makes the cached corner radii stale.
     *
     *  Rebuilding on every resize tore down and recreated three turbulence
     *  filters plus a pattern + <image> per photo, and WebKit re-decodes and
     *  re-rasterises all of it synchronously. The pill resizes the moment the
     *  hover gap opens — i.e. exactly as the flight begins — so that landed as
     *  a ~120ms main-thread stall. CSS transitions keep running on the
     *  compositor through a stall, but the silhouette is written from this
     *  loop, so the liquid froze while the content sailed on: the timing
     *  mismatch, and it never showed in Chromium because the rebuild is cheap
     *  enough there to fit in a frame. */
    syncMelt(item) {
      if (!item.blend) return;
      const melt = item.melt;
      const t = item.target;
      const imgs = t instanceof HTMLImageElement ? [t] : Array.from(t.querySelectorAll("img"));
      const same = !!melt && melt.entries.length === imgs.length && melt.entries.every((e, i) => e.el === imgs[i]);
      if (!same) {
        this.refreshMelt(item);
        return;
      }
      for (const entry of melt.entries) {
        entry.radiusPx = measureRadius(entry.el, entry.el.offsetWidth, entry.el.offsetHeight)[0];
        entry.lastGeom = null;
      }
    }
    refreshMelt(item) {
      const blend = item.blend;
      if (!blend) return;
      const host = blend.host;
      while (host.firstChild) host.removeChild(host.firstChild);
      const t = item.target;
      const imgs = t instanceof HTMLImageElement ? [t] : Array.from(t.querySelectorAll("img"));
      const uid = `gooey-melt-${++meltCounter}`;
      const seed = String(meltCounter * 7 % 100);
      const zone = blend.zone ?? this.gooBlur * 2.2 + 4;
      const freqK = Math.max(0.2, blend.warpFreq ?? 1);
      const bf = Math.min(0.3, Math.max(0.01, freqK / (zone * 1.1))).toFixed(4);
      const octaves = String(Math.max(1, Math.round(blend.detail ?? 2)));
      const noiseType = blend.warpStyle ?? "fractalNoise";
      const defs = svg("defs", {});
      const gradient = svg("radialGradient", { id: `${uid}-g` });
      gradient.append(
        // Long, smooth falloff: the melt reads as a gradient from intact rim
        // to fully mixed core, not as a disc with a soft edge.
        // Core-to-mid FULLY opaque, rim tight. Two failure modes shaped this:
        // a translucent middle let the white silhouette neck glow through the
        // copy right at the seam (a bright ring/dot wherever the goo bridges
        // dark imagery — the neck sits between the photos' rounded corners, so
        // nothing else can cover it), and a half-opaque rim let the copy's
        // blurred imagery drift far past the neck, reading as fog over a
        // contrasting neighbour. Opaque to 55%, then a fast falloff.
        svg("stop", { offset: "0%", "stop-color": "#fff" }),
        svg("stop", { offset: "55%", "stop-color": "#fff" }),
        svg("stop", { offset: "78%", "stop-color": "#fff", "stop-opacity": "0.55" }),
        svg("stop", { offset: "100%", "stop-color": "#fff", "stop-opacity": "0" })
      );
      defs.append(gradient);
      const mkLayer = (suffix) => {
        const filter = svg("filter", {
          id: `${uid}-f${suffix}`,
          filterUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "0",
          height: "0",
          "color-interpolation-filters": "sRGB"
        });
        const turb = svg("feTurbulence", {
          type: noiseType,
          baseFrequency: bf,
          numOctaves: octaves,
          seed,
          result: "noise0"
        });
        filter.append(turb);
        const noiseOffset = svg("feOffset", { in: "noise0", dx: "0", dy: "0", result: "noise" });
        const disp = svg("feDisplacementMap", {
          in: "SourceGraphic",
          in2: "noise",
          scale: "0",
          xChannelSelector: "R",
          yChannelSelector: "G",
          result: "disp"
        });
        filter.append(noiseOffset);
        const blurEl = svg("feGaussianBlur", { in: "disp", stdDeviation: "0", result: "soft" });
        const sat = svg("feColorMatrix", {
          in: "soft",
          type: "saturate",
          values: "1.2",
          result: "col"
        });
        const erode = svg("feColorMatrix", {
          in: "noise",
          type: "matrix",
          values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1",
          result: "erode"
        });
        const clip = svg("feComposite", { in: "col", in2: "erode", operator: "in" });
        filter.append(disp, blurEl, sat, erode, clip);
        const mask = svg("mask", {
          id: `${uid}-m${suffix}`,
          maskUnits: "userSpaceOnUse",
          x: "-10000",
          y: "-10000",
          width: "20000",
          height: "20000"
        });
        const circle = svg("circle", { cx: "0", cy: "0", r: "0", fill: `url(#${uid}-g)` });
        mask.append(circle);
        defs.append(filter, mask);
        const gl = svg("g", {});
        gl.setAttribute("mask", `url(#${uid}-m${suffix})`);
        gl.setAttribute("opacity", "0");
        const filtered = svg("g", {});
        filtered.setAttribute("filter", `url(#${uid}-f${suffix})`);
        const shift = svg("g", {});
        filtered.append(shift);
        gl.append(filtered);
        return { filter, disp, blurEl, erode, turb, noiseOffset, circle, gl, shift };
      };
      const layers = Array.from({ length: MELT_LAYERS }, (_, i) => mkLayer(`l${i}`));
      host.append(defs, ...layers.map((l) => l.gl));
      let seam = null;
      if ((blend.seamBlur ?? 1) > 0) {
        const filter = svg("filter", {
          id: `${uid}-fs`,
          filterUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "0",
          height: "0",
          "color-interpolation-filters": "sRGB"
        });
        const blurEl = svg("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "0" });
        filter.append(blurEl);
        const mask = svg("mask", {
          id: `${uid}-ms`,
          maskUnits: "userSpaceOnUse",
          x: "-10000",
          y: "-10000",
          width: "20000",
          height: "20000"
        });
        const circle = svg("circle", { cx: "0", cy: "0", r: "0", fill: `url(#${uid}-g)` });
        mask.append(circle);
        defs.append(filter, mask);
        const gl = svg("g", {});
        gl.setAttribute("mask", `url(#${uid}-ms)`);
        gl.setAttribute("opacity", "0");
        const filtered = svg("g", {});
        filtered.setAttribute("filter", `url(#${uid}-fs)`);
        gl.append(filtered);
        host.insertBefore(gl, defs.nextSibling);
        seam = { gl, filter, blurEl, circle };
      }
      const entries = imgs.map((el, i) => {
        const pattern = svg("pattern", {
          id: `${uid}-p${i}`,
          patternUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "1",
          height: "1"
        });
        const image = svg("image", { width: "1", height: "1", preserveAspectRatio: "xMidYMid slice" });
        image.setAttribute("href", el.currentSrc || el.src);
        pattern.append(image);
        defs.append(pattern);
        const rects = layers.map((l) => {
          const rect = svg("rect", { x: "0", y: "0", width: "0", height: "0", fill: `url(#${uid}-p${i})` });
          l.shift.append(rect);
          return rect;
        });
        if (seam) {
          const rect = svg("rect", { x: "0", y: "0", width: "0", height: "0", fill: `url(#${uid}-p${i})` });
          seam.gl.firstElementChild.append(rect);
          rects.push(rect);
        }
        const radiusPx = measureRadius(el, el.offsetWidth, el.offsetHeight)[0];
        return {
          el,
          rects,
          pattern,
          image,
          radiusPx,
          lowRes: false,
          measured: null,
          lastGeom: null,
          lastHole: null
        };
      });
      host.setAttribute("opacity", "0");
      item.melt = { layers, entries, seam };
      if (blend.surface === "image" && imgs[0]) {
        const bp = svg("pattern", {
          id: `${uid}-bp`,
          patternUnits: "objectBoundingBox",
          patternContentUnits: "objectBoundingBox",
          width: "1",
          height: "1"
        });
        const bpImage = svg("image", {
          width: "1",
          height: "1",
          preserveAspectRatio: "xMidYMid slice"
        });
        bpImage.setAttribute("href", imgs[0].currentSrc || imgs[0].src);
        bp.append(bpImage);
        defs.append(bp);
        item.blob.setAttribute("fill", `url(#${uid}-bp)`);
      } else {
        item.blob.removeAttribute("fill");
      }
    }
    /** Remove all melt traces: hide the warped overlay, restore image masks. */
    clearBlend(item) {
      item.blend?.host.setAttribute("opacity", "0");
      item.meltHostLast = null;
      item.meltWroteAt = 0;
      item.meltAxis = null;
      for (const layer of item.melt?.layers ?? []) layer.last = void 0;
      if (item.melt?.seam) {
        item.melt.seam.last = void 0;
        item.melt.seam.gl.setAttribute("opacity", "0");
      }
      for (const entry of item.melt?.entries ?? []) {
        entry.el.style.removeProperty("mask-image");
        entry.el.style.removeProperty("-webkit-mask-image");
        entry.el.style.removeProperty("mask-composite");
        entry.el.style.removeProperty("-webkit-mask-composite");
        entry.lastHole = null;
        entry.lastGeom = null;
      }
    }
    measureAll(dt = 1 / 60) {
      const group = this.getGroup();
      if (!group || this.items.size === 0) return false;
      const g = group.getBoundingClientRect();
      let changed = false;
      for (const item of this.items) {
        const r = item.target.getBoundingClientRect();
        item.frame = { x: r.left - g.left, y: r.top - g.top, w: r.width, h: r.height };
      }
      for (const item of this.items) {
        if (!item.blend || !item.melt) continue;
        for (const entry of item.melt.entries) {
          const ir2 = entry.el.getBoundingClientRect();
          entry.measured = {
            x: ir2.left - g.left,
            y: ir2.top - g.top,
            w: ir2.width,
            h: ir2.height,
            ow: entry.el.offsetWidth,
            oh: entry.el.offsetHeight
          };
        }
      }
      for (const item of this.items) {
        if (this.writeBlob(item, dt)) changed = true;
      }
      for (const item of this.items) {
        if (item.blend && this.writeBlend(item, dt)) changed = true;
      }
      return changed;
    }
    /** Effective blob inset: bridgeGrow pulls it toward negative (a visible
     *  liquid coat) as the nearest neighbour approaches.
     *
     *  Smoothed on a time constant rather than tracking proximity instantly.
     *  The raw value is a function of the dragged neighbour's position, so it
     *  moves as fast as the pointer does and lands on a different value every
     *  frame; the blob grows symmetrically from it, so that per-frame step is
     *  visible on the silhouette's far edge as a size flicker. It stayed small
     *  enough to read as smooth at 60fps, but a frame-rate drop multiplies the
     *  per-frame delta — which is why the pill's left edge flashed in Safari
     *  and not in Chromium. dt-based smoothing makes the growth rate identical
     *  at any frame rate. */
    effectiveInset(item, dt) {
      let bi2 = item.blobInset ?? 0;
      const grow = item.bridgeGrow ?? 0;
      if (grow > 0 && item.frame) {
        const f = item.frame;
        const range = Math.max(14, this.gooBlur * 3);
        let best = Infinity;
        for (const other of this.items) {
          if (other === item || !other.frame) continue;
          const o = other.frame;
          const dx = Math.max(o.x - (f.x + f.w), f.x - (o.x + o.w), 0);
          const dy = Math.max(o.y - (f.y + f.h), f.y - (o.y + o.h), 0);
          const gap = Math.hypot(dx, dy);
          if (gap < best) best = gap;
        }
        if (best < range) bi2 -= grow * smoothstep(1 - best / range);
      }
      if (grow <= 0) {
        item.biSmooth = bi2;
        return bi2;
      }
      if (item.biSmooth === null) item.biSmooth = bi2;
      else item.biSmooth += (bi2 - item.biSmooth) * Math.min(1, dt * 18);
      return item.biSmooth;
    }
    writeBlob(item, dt) {
      const f = item.frame;
      const dyn = item.dynamics;
      if (!dyn || !dyn.evolve && !dyn.move) {
        const bi22 = this.effectiveInset(item, dt);
        const last2 = item.last;
        const frameChanged = !last2 || Math.abs(last2.x - f.x) >= 0.05 || Math.abs(last2.y - f.y) >= 0.05 || Math.abs(last2.w - f.w) >= 0.05 || Math.abs(last2.h - f.h) >= 0.05;
        const biChanged = Math.abs(bi22 - item.lastBi) >= 0.05;
        if (!frameChanged && !biChanged) return false;
        item.blob.style.transform = `translate(${f.x + bi22}px, ${f.y + bi22}px)`;
        if (frameChanged || biChanged) {
          const bw2 = Math.max(0, f.w - bi22 * 2);
          const bh2 = Math.max(0, f.h - bi22 * 2);
          item.blob.setAttribute("width", String(bw2));
          item.blob.setAttribute("height", String(bh2));
          const scale = item.baseW > 0 ? f.w / item.baseW : 1;
          item.blob.setAttribute("rx", String(pillRadius(item.radiusPx * scale - bi22, bw2, bh2)));
        }
        item.lastPaint = null;
        item.last = f;
        item.lastBi = bi22;
        return true;
      }
      const tcx = f.x + f.w / 2;
      const tcy = f.y + f.h / 2;
      let tr2;
      if (dyn.evolve) {
        const ow = item.target.offsetWidth;
        const oh = item.target.offsetHeight;
        tr2 = measureRadius(item.target, ow, oh)[0];
      } else {
        tr2 = item.radiusPx * (item.baseW > 0 ? f.w / item.baseW : 1);
      }
      if (!item.sim) {
        item.sim = { cx: tcx, cy: tcy, w: f.w, h: f.h, r: tr2, vcx: 0, vcy: 0, vw: 0, vh: 0, vr: 0 };
      }
      const s = item.sim;
      if (dyn.move) {
        const mo = dyn.moveOpts ?? MOVE_DEFAULTS;
        [s.cx, s.vcx] = springSteps(s.cx, s.vcx, tcx, mo.stiffness, mo.damping, dt);
        [s.cy, s.vcy] = springSteps(s.cy, s.vcy, tcy, mo.stiffness, mo.damping, dt);
      } else if (dyn.evolve) {
        const eo2 = dyn.evolveOpts ?? EVOLVE_DEFAULTS;
        const rawVx = item.tPrev ? (tcx - item.tPrev.cx) / dt : 0;
        const rawVy = item.tPrev ? (tcy - item.tPrev.cy) / dt : 0;
        item.tvx = item.tvx * 0.7 + rawVx * 0.3;
        item.tvy = item.tvy * 0.7 + rawVy * 0.3;
        item.tPrev = { cx: tcx, cy: tcy };
        const remX = tcx - s.cx;
        const remY = tcy - s.cy;
        const rem = Math.hypot(remX, remY);
        const vMag = Math.hypot(item.tvx, item.tvy);
        let dx = 0;
        let dy = 0;
        if (vMag > 1e-3) {
          dx = item.tvx / vMag;
          dy = item.tvy / vMag;
        } else if (rem > 1e-3) {
          dx = remX / rem;
          dy = remY / rem;
        }
        const tau = Math.max(0, eo2.anticipation) / 1e3;
        const k = tau > 0 ? 1 - Math.exp(-dt / tau) : 1;
        item.lead01 += ((rem > 0.5 ? 1 : 0) - item.lead01) * k;
        const reach = Math.min(Math.max(0, eo2.travel) * item.lead01, rem);
        const ox = dx * reach;
        const oy = dy * reach;
        [s.cx, s.vcx] = springSteps(s.cx, s.vcx, tcx + ox, eo2.massStiffness, eo2.massDamping, dt);
        [s.cy, s.vcy] = springSteps(s.cy, s.vcy, tcy + oy, eo2.massStiffness, eo2.massDamping, dt);
      } else {
        s.cx = tcx;
        s.cy = tcy;
        s.vcx = 0;
        s.vcy = 0;
      }
      if (dyn.evolve) {
        const eo2 = dyn.evolveOpts ?? EVOLVE_DEFAULTS;
        [s.w, s.vw] = springSteps(s.w, s.vw, f.w, eo2.sizeStiffness, eo2.sizeDamping, dt);
        [s.h, s.vh] = springSteps(s.h, s.vh, f.h, eo2.sizeStiffness, eo2.sizeDamping, dt);
        [s.r, s.vr] = springSteps(s.r, s.vr, tr2, eo2.radiusStiffness, eo2.radiusDamping, dt);
      } else {
        s.w = f.w;
        s.h = f.h;
        s.r = tr2;
        s.vw = 0;
        s.vh = 0;
        s.vr = 0;
      }
      let extra = "";
      const speed = Math.hypot(s.vcx, s.vcy);
      if (dyn.move && speed > 2) {
        const st = Math.min((dyn.moveOpts ?? MOVE_DEFAULTS).stretch, speed * 6e-4);
        const a = Math.round(Math.atan2(s.vcy, s.vcx) * 100) / 100;
        extra += ` rotate(${a}rad) scale(${(1 + st).toFixed(3)}, ${(1 / (1 + st * 0.65)).toFixed(3)}) rotate(${-a}rad)`;
      }
      if (dyn.move && item.tailEl) {
        const round = (v) => Math.round(v * 10) / 10;
        if (item.tailR === 0 && Math.abs(item.tailX) < 1e-3 && Math.abs(item.tailY) < 1e-3) {
          item.tailX = s.cx;
          item.tailY = s.cy;
        }
        ;
        [item.tailX, item.tailVx] = springSteps(item.tailX, item.tailVx, s.cx, 170, 22, dt);
        [item.tailY, item.tailVy] = springSteps(item.tailY, item.tailVy, s.cy, 170, 22, dt);
        const bi22 = item.blobInset ?? 0;
        const ux = speed > 1e-3 ? s.vcx / speed : 1;
        const uy = speed > 1e-3 ? s.vcy / speed : 0;
        const perp = Math.max(4, Math.abs(ux) * s.h + Math.abs(uy) * s.w - bi22 * 2);
        const halfAlong = (Math.abs(ux) * s.w + Math.abs(uy) * s.h) / 2;
        const base = perp / 2;
        const lagX = item.tailX - s.cx;
        const lagY = item.tailY - s.cy;
        const lag = Math.hypot(lagX, lagY);
        const mo = dyn.moveOpts ?? MOVE_DEFAULTS;
        const maxLag = halfAlong + base * (0.2 + mo.force * 1.6);
        if (lag > maxLag) {
          item.tailX = s.cx + lagX / lag * maxLag;
          item.tailY = s.cy + lagY / lag * maxLag;
        }
        const tailK = mo.tail;
        const onset = Math.max(0, Math.min(1, (speed - 20) / 120));
        const targetR = base * tailK * onset;
        item.tailR += (targetR - item.tailR) * Math.min(1, dt * 10);
        if (item.tailR < 0.3) {
          if (item.lastTail !== "hidden") {
            item.tailEl.setAttribute("r", "0");
            item.tailMidA?.setAttribute("r", "0");
            item.tailMidB?.setAttribute("r", "0");
            item.lastTail = "hidden";
          }
        } else {
          item.tailPhase += speed * dt * 0.045;
          const wob = item.tailR * 0.16;
          const px2 = -uy;
          const py2 = ux;
          const w1 = Math.sin(item.tailPhase) * wob;
          const w2 = Math.sin(item.tailPhase + 2.4) * -wob;
          const aX = s.cx + lagX * 0.45 + px2 * w1;
          const aY = s.cy + lagY * 0.45 + py2 * w1;
          const bX = s.cx + lagX * 0.75 + px2 * w2;
          const bY = s.cy + lagY * 0.75 + py2 * w2;
          const tail = `${round(item.tailX)},${round(item.tailY)},${round(item.tailR)},${round(aX)},${round(aY)},${round(bX)},${round(bY)}`;
          if (tail !== item.lastTail) {
            item.tailEl.setAttribute("cx", String(round(item.tailX)));
            item.tailEl.setAttribute("cy", String(round(item.tailY)));
            item.tailEl.setAttribute("r", String(round(item.tailR)));
            if (item.tailMidA) {
              item.tailMidA.setAttribute("cx", String(round(aX)));
              item.tailMidA.setAttribute("cy", String(round(aY)));
              item.tailMidA.setAttribute("r", String(round(item.tailR * 0.62)));
            }
            if (item.tailMidB) {
              item.tailMidB.setAttribute("cx", String(round(bX)));
              item.tailMidB.setAttribute("cy", String(round(bY)));
              item.tailMidB.setAttribute("r", String(round(item.tailR * 0.4)));
            }
            item.lastTail = tail;
          }
        }
      }
      let renderR = Math.max(0, s.r);
      let cornerActive = false;
      if (dyn.evolve) {
        const eo2 = dyn.evolveOpts ?? EVOLVE_DEFAULTS;
        const now = performance.now();
        const prevSize = item.lastTargetSize;
        const sizeDelta = prevSize ? Math.abs(f.w - prevSize.w) + Math.abs(f.h - prevSize.h) : 0;
        if (sizeDelta > 0.5) {
          if (!item.morphActive) {
            item.cornerT0 = now;
            item.morphActive = true;
          }
          item.lastTargetMoveT = now;
        } else if (item.morphActive && now - item.lastTargetMoveT > 150 && now - item.cornerT0 > cornerTotalOf(eo2)) {
          item.morphActive = false;
        }
        item.lastTargetSize = { w: f.w, h: f.h };
        const cornerTotal = cornerTotalOf(eo2);
        let target01 = 0;
        if (item.cornerT0 > 0 && eo2.roundness > 0 && now - item.cornerT0 < cornerTotal) {
          const p = Math.min(
            1,
            Math.max(0, (now - item.cornerT0 - Math.max(0, eo2.cornerDelay)) / Math.max(1, eo2.cornerDuration))
          );
          const eased = easingFn(eo2.cornerEase)(p);
          target01 = Math.min(1, Math.max(0, (1 - eased) * eo2.roundness));
        }
        const maxStep = dt * 8;
        item.round01 += Math.max(-maxStep, Math.min(maxStep, target01 - item.round01));
        cornerActive = item.cornerT0 > 0 && now - item.cornerT0 < cornerTotal + 80 || Math.abs(target01 - item.round01) > 4e-3 || item.round01 > 4e-3;
        if (item.round01 > 1e-3) {
          const roundTarget = Math.max(Math.min(s.w, s.h) / 2, renderR);
          renderR = renderR + (roundTarget - renderR) * item.round01;
          renderR = Math.max(renderR, tr2);
        }
        const motionRaw = Math.min(
          1,
          (Math.hypot(s.vcx, s.vcy) + Math.abs(s.vw) + Math.abs(s.vh)) / 420
        );
        item.motionEnv = Math.max(motionRaw, item.motionEnv - dt * 1.9);
        const motion = item.motionEnv;
        const blurPx = motion * motion * Math.max(0, eo2.contentBlur);
        if (blurPx > 0.3) {
          item.target.style.filter = `blur(${blurPx.toFixed(1)}px)`;
          item.contentBlurred = true;
        } else if (item.contentBlurred) {
          item.target.style.removeProperty("filter");
          item.contentBlurred = false;
        }
      }
      const bi2 = item.blobInset ?? 0;
      const bw = Math.max(0, s.w - bi2 * 2);
      const bh = Math.max(0, s.h - bi2 * 2);
      const paintRx = pillRadius(renderR - bi2, bw, bh);
      let bendD = "";
      if (dyn.move && item.bendPathEl) {
        const mo = dyn.moveOpts ?? MOVE_DEFAULTS;
        const cap = Math.min(bw, bh) * 0.5;
        const bTy = Math.max(-cap, Math.min(cap, s.vcy * 0.05)) * mo.bend;
        const capX = Math.min(bw, bh) * 0.9;
        const bTx = Math.max(-capX, Math.min(capX, s.vcx * 0.09)) * mo.bendX;
        item.bendCur += (bTy - item.bendCur) * Math.min(1, dt * 9);
        item.bendCurX += (bTx - item.bendCurX) * Math.min(1, dt * 9);
        const bvx = Math.round(item.bendCurX * 10) / 10;
        const bvy = Math.round(item.bendCur * 10) / 10;
        const bendVars = `${bvx},${bvy}`;
        if (bendVars !== item.lastBendVars) {
          item.target.style.setProperty("--lg-bend-x", `${bvx}px`);
          item.target.style.setProperty("--lg-bend-y", `${bvy}px`);
          item.target.style.setProperty("--lg-bend-xn", String(bvx));
          item.target.style.setProperty("--lg-bend-yn", String(bvy));
          item.lastBendVars = bendVars;
        }
        const bendActive = Math.abs(item.bendCur) > 0.5 || Math.abs(item.bendCurX) > 0.5;
        if (bendActive && bw > 1 && bh > 1) {
          const r = Math.min(paintRx, bw / 2, bh / 2);
          const cy = Math.round(item.bendCur * 2 * 10) / 10;
          const k = item.bendCurX;
          const rxR = Math.max(r * 0.2, Math.min(r * 3, k > 0 ? r - 0.8 * k : r + 1.6 * -k));
          const rxL = Math.max(r * 0.2, Math.min(r * 3, k > 0 ? r + 1.6 * k : r - 0.8 * -k));
          const K = 0.5523;
          const f2 = (v) => Math.round(v * 10) / 10;
          bendD = `M ${f2(rxL)} 0 Q ${f2(bw / 2)} ${cy} ${f2(bw - rxR)} 0 C ${f2(bw - rxR + K * rxR)} 0 ${f2(bw)} ${f2(r - K * r)} ${f2(bw)} ${f2(r)} L ${f2(bw)} ${f2(bh - r)} C ${f2(bw)} ${f2(bh - r + K * r)} ${f2(bw - rxR + K * rxR)} ${f2(bh)} ${f2(bw - rxR)} ${f2(bh)} Q ${f2(bw / 2)} ${f2(bh + item.bendCur * 2)} ${f2(rxL)} ${f2(bh)} C ${f2(rxL - K * rxL)} ${f2(bh)} 0 ${f2(bh - r + K * r)} 0 ${f2(bh - r)} L 0 ${f2(r)} C 0 ${f2(r - K * r)} ${f2(rxL - K * rxL)} 0 ${f2(rxL)} 0 Z`;
        }
      }
      const bending = bendD !== "";
      const paint2 = {
        t: `translate(${s.cx - s.w / 2 + bi2}px, ${s.cy - s.h / 2 + bi2}px)` + extra,
        w: bending ? "0" : String(bw),
        h: String(bh),
        rx: String(paintRx)
      };
      const lp = item.lastPaint;
      if (!lp || lp.t !== paint2.t) item.blob.style.transform = paint2.t;
      if (!lp || lp.w !== paint2.w) item.blob.setAttribute("width", paint2.w);
      if (!lp || lp.h !== paint2.h) item.blob.setAttribute("height", paint2.h);
      if (!lp || lp.rx !== paint2.rx) item.blob.setAttribute("rx", paint2.rx);
      item.lastPaint = paint2;
      if (item.bendPathEl) {
        if (bendD !== (item.lastBendD ?? "")) {
          item.bendPathEl.setAttribute("d", bendD);
          item.lastBendD = bendD;
        }
        if (bending) item.bendPathEl.style.transform = paint2.t;
      }
      item.last = f;
      const settled = Math.abs(s.cx - tcx) < 0.05 && Math.abs(s.cy - tcy) < 0.05 && Math.abs(s.w - f.w) < 0.05 && Math.abs(s.h - f.h) < 0.05 && Math.abs(s.r - tr2) < 0.05 && speed < 1 && Math.abs(s.vw) + Math.abs(s.vh) + Math.abs(s.vr) < 1 && item.motionEnv < 0.01 && item.tailR < 0.3 && !cornerActive;
      return !settled;
    }
    /** Nearest-neighbour proximity → a liquid warp-melt at the contact point.
     *  The strength is ONE smoothed value: fast attack while approaching, and
     *  a gradual `releaseMs` decay whenever the target drops — whether from a
     *  drag release (`active: false`), moving out of range, or absorption. No
     *  path clears instantly. */
    writeBlend(item, dt) {
      const f = item.frame;
      const blend = item.blend;
      const melt = item.melt;
      if (!melt) return false;
      const range = blend.range ?? Math.max(10, this.gooBlur * 2.5);
      let bestGap = Infinity;
      let bestOther = null;
      for (const other of this.items) {
        if (other === item || !other.frame) continue;
        const o2 = other.frame;
        const dx = Math.max(o2.x - (f.x + f.w), f.x - (o2.x + o2.w), 0);
        const dy = Math.max(o2.y - (f.y + f.h), f.y - (o2.y + o2.h), 0);
        const gap = Math.hypot(dx, dy);
        if (gap < bestGap) {
          bestGap = gap;
          bestOther = o2;
        }
      }
      let embed = 0;
      let contactSpan = 0;
      if (bestOther && bestGap === 0) {
        const o2 = bestOther;
        const ox = Math.min(f.x + f.w, o2.x + o2.w) - Math.max(f.x, o2.x);
        const oy = Math.min(f.y + f.h, o2.y + o2.h) - Math.max(f.y, o2.y);
        const span = Math.max(1, Math.min(f.w, f.h, o2.w, o2.h));
        embed = Math.max(0, Math.min(ox, oy)) / span;
        contactSpan = Math.max(0, Math.max(ox, oy));
      }
      let sTarget = 0;
      if (bestOther && bestGap < range && blend.active !== false) {
        const sRaw = smoothstep(Math.min(1, (1 - bestGap / range) / 0.65));
        const strength = Math.max(0, Math.min(1, blend.strength ?? 1));
        const sink = Math.max(0.01, blend.sink ?? 0.45);
        const sunk = smoothstep(
          Math.max(0, Math.min(1, (embed - sink * 0.2) / Math.max(0.01, sink * 0.8)))
        );
        sTarget = Math.pow(sRaw, 1.25) * strength * (1 - sunk);
      }
      if (sTarget >= item.meltFade) {
        item.meltFade += (sTarget - item.meltFade) * Math.min(1, dt * 16);
        item.meltRel = null;
      } else if (sTarget > 0.02) {
        item.meltFade += (sTarget - item.meltFade) * Math.min(1, dt * 6);
        item.meltRel = null;
      } else {
        const relMs = Math.max(
          40,
          Math.max(blend.releaseMs ?? 240, blend.fadeMs ?? blend.releaseMs ?? 240)
        );
        if (!item.meltRel) item.meltRel = { from: item.meltFade, t: 0 };
        const rel2 = item.meltRel;
        rel2.t += dt * 1e3;
        const k = Math.min(1, rel2.t / relMs);
        item.meltFade = sTarget + (rel2.from - sTarget) * (1 - k) * (1 - k);
      }
      if (sTarget === 0 && item.meltFade < 1e-3) item.meltFade = 0;
      const s = item.meltFade;
      if (s <= 1e-3) {
        if (item.lastBlend && item.lastBlend.s !== 0) {
          this.clearBlend(item);
          item.lastBlend = { cx: 0, cy: 0, s: 0, d: 0, pk: "" };
          return true;
        }
        return false;
      }
      let o = bestOther;
      if ((!o || bestGap >= range) && item.meltGeom) o = item.meltGeom.o;
      if (!o) return false;
      const cx = f.x + f.w < o.x ? (f.x + f.w + o.x) / 2 : o.x + o.w < f.x ? (o.x + o.w + f.x) / 2 : (Math.max(f.x, o.x) + Math.min(f.x + f.w, o.x + o.w)) / 2;
      const cy = f.y + f.h < o.y ? (f.y + f.h + o.y) / 2 : o.y + o.h < f.y ? (o.y + o.h + f.y) / 2 : (Math.max(f.y, o.y) + Math.min(f.y + f.h, o.y + o.h)) / 2;
      item.meltGeom = { o: { ...o } };
      const rel = item.meltRel;
      const fadeMs = Math.max(40, blend.fadeMs ?? blend.releaseMs ?? 240);
      const fadeK = rel ? Math.min(1, rel.t / fadeMs) : 0;
      const relFade = rel ? (1 - fadeK) * (1 - fadeK) : 1;
      const sStruct = rel ? Math.min(1, rel.from * (0.55 + 0.45 * (1 - fadeK))) : s;
      const eStruct = sStruct * sStruct * (3 - 2 * sStruct);
      item.meltOp = relFade < item.meltOp ? relFade : item.meltOp + (relFade - item.meltOp) * Math.min(1, dt * 16);
      const zone = blend.zone ?? this.gooBlur * 2.2 + 4;
      const d = Math.min(Math.min(f.w, f.h) * 0.9, zone * (0.7 + 0.6 * sStruct));
      const flowSpeed = Math.max(0, blend.flowSpeed ?? 26);
      const prevPos = item.meltPrev;
      const moveSpeed = prevPos ? Math.hypot(f.x - prevPos.x, f.y - prevPos.y) / Math.max(1e-3, dt) : 0;
      item.meltPrev = { x: f.x, y: f.y };
      const phaseAdv = Math.min(dt, 1 / 24) * flowSpeed * 0.12 * Math.min(1, moveSpeed / 40);
      item.meltPhase += phaseAdv;
      const lb = item.lastBlend;
      const paramKey = `${blend.seamBlur ?? ""}/${blend.strength ?? ""}/${blend.warp}/${blend.blur}/${blend.mix ?? ""}/${blend.gravity ?? ""}`;
      if (phaseAdv < 1e-4 && lb && lb.pk === paramKey && Math.abs(lb.cx - cx) < 0.05 && Math.abs(lb.cy - cy) < 0.05 && Math.abs(lb.s - s) < 5e-3 && Math.abs(lb.d - d) < 0.05) {
        return false;
      }
      const nowMs = performance.now();
      if (this.frameEma > 20 && nowMs - item.meltWroteAt < 35) return true;
      item.meltWroteAt = nowMs;
      const round = (v) => Math.round(v * 10) / 10;
      const host = blend.host;
      const n = melt.layers.length;
      const ncx = o.x + o.w / 2;
      const ncy = o.y + o.h / 2;
      const gdx = ncx - cx;
      const gdy = ncy - cy;
      const gdl = Math.hypot(gdx, gdy) || 1;
      const gux = gdx / gdl;
      const guy = gdy / gdl;
      const gAmt = Math.max(0, blend.gravity ?? 25) * eStruct;
      const gDeg = round(Math.atan2(guy, gux) * 180 / Math.PI);
      const r3 = (v) => Math.round(v * 1e3) / 1e3;
      const taper = Math.max(0, Math.min(1, blend.taper ?? 0.65));
      const freqK = Math.max(0.2, blend.warpFreq ?? 1);
      const zoneBase = blend.zone ?? this.gooBlur * 2.2 + 4;
      const bfBase = Math.min(0.3, Math.max(0.01, freqK / (zoneBase * 1.1)));
      const alongF = (bfBase * 0.35).toFixed(4);
      const acrossF = (bfBase * 1.6).toFixed(4);
      const ax = Math.abs(gux);
      const ay = Math.abs(guy);
      const axis = item.meltAxis === "x" ? ay > ax * 1.25 ? "y" : "x" : item.meltAxis === "y" ? ax > ay * 1.25 ? "x" : "y" : ax >= ay ? "x" : "y";
      item.meltAxis = axis;
      const bfStr = axis === "x" ? `${alongF} ${acrossF}` : `${acrossF} ${alongF}`;
      const bx = cx + gux * d * 0.05;
      const by = cy + guy * d * 0.05;
      const layerVals = melt.layers.map((_, i) => {
        const t = n > 1 ? i / (n - 1) : 1;
        const blurK = 0.15 + 0.85 * Math.pow(t, 1.4);
        const warpK = 0.45 + 0.55 * t;
        const pr2 = 0.7 + 0.45 * t;
        const oa = 6 * Math.sin(item.meltPhase * pr2);
        const ob = 2 * Math.sin(item.meltPhase * pr2 * 1.31 + 1.7);
        return [
          String(q(blend.warp * warpK * eStruct, 0.25)),
          String(q(blend.blur * blurK * eStruct, 0.25)),
          String(q(gux * oa - guy * ob, 0.5)),
          String(q(guy * oa + gux * ob, 0.5)),
          String(q(bx, 0.5)),
          String(q(by, 0.5)),
          // Outermost disc at 0.95d, not 1.15d: past d the copy has left the
          // neck entirely, and its blurred rim smearing onto the neighbour's
          // body was half of the white-fog-ring report (the other half was the
          // gradient rim above).
          String(q(d * (0.95 - 0.55 * t), 0.5)),
          String(q(Math.min(1, eStruct * (0.75 + 0.25 * t)), 0.02))
        ];
      });
      const anchorX = cx - gux * d;
      const anchorY = cy - guy * d;
      const settle = 1 - 0.45 * smoothstep(Math.min(1, embed * 2.2));
      const kFlow = Math.min(2.2, (gAmt + bestGap) / Math.max(8, 2 * d)) * (0.5 + taper) * settle;
      const flow = (k) => {
        const sx = r3(1 + kFlow * k);
        const sy = r3(1 / (1 + kFlow * 0.35 * k));
        return `translate(${round(anchorX)}, ${round(anchorY)}) rotate(${gDeg}) scale(${sx}, ${sy}) rotate(${-gDeg}) translate(${round(-anchorX)}, ${round(-anchorY)})`;
      };
      const mixAmt = Math.max(0, Math.min(1, blend.mix ?? 0)) * eStruct;
      const erodeRow = (amt) => {
        if (amt < 2e-3) return "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1";
        const k = r3(1 + 4 * amt);
        const c = r3(1 - k * (0.38 + 0.12 * amt));
        return `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${k} 0 0 0 ${c}`;
      };
      const elong = q(1 + Math.min(1.8, bestGap / Math.max(8, 2 * d)), 0.05);
      const zoneT = elong > 1.001 ? `translate(${round(bx)}, ${round(by)}) rotate(${gDeg}) scale(${r3(elong)}, 1) rotate(${-gDeg}) translate(${round(-bx)}, ${round(-by)})` : "";
      const spread = blend.blur * 2.5 + blend.warp + gAmt * 0.5 + kFlow * d + 8;
      const rr2 = q(d * 1.15 * elong + spread, 8);
      const regionX = String(q(bx - rr2, 8));
      const regionY = String(q(by - rr2, 8));
      const regionW = String(q(rr2 * 2, 8));
      melt.layers.forEach((layer, i) => {
        const t = n > 1 ? i / (n - 1) : 1;
        const v = layerVals[i];
        const shiftT = flow(0.4 + 0.6 * t);
        const erodeV = erodeRow(q(mixAmt * (0.15 + 0.85 * t), 0.01));
        const fp = v.join(",") + "|" + bfStr + "|" + shiftT + "|" + erodeV + "|" + zoneT + "|" + regionX + "," + regionY + "," + regionW;
        if (layer.last === fp) return;
        layer.last = fp;
        layer.filter.setAttribute("x", regionX);
        layer.filter.setAttribute("y", regionY);
        layer.filter.setAttribute("width", regionW);
        layer.filter.setAttribute("height", regionW);
        layer.disp.setAttribute("scale", v[0]);
        layer.blurEl.setAttribute("stdDeviation", v[1]);
        if (layer.turb.getAttribute("baseFrequency") !== bfStr) {
          layer.turb.setAttribute("baseFrequency", bfStr);
        }
        layer.noiseOffset.setAttribute("dx", v[2]);
        layer.noiseOffset.setAttribute("dy", v[3]);
        layer.circle.setAttribute("cx", v[4]);
        layer.circle.setAttribute("cy", v[5]);
        layer.circle.setAttribute("r", v[6]);
        if (zoneT) layer.circle.setAttribute("transform", zoneT);
        else layer.circle.removeAttribute("transform");
        layer.gl.setAttribute("opacity", v[7]);
        layer.shift.setAttribute("transform", shiftT);
        layer.erode.setAttribute("values", erodeV);
      });
      if (melt.seam) {
        const seam = melt.seam;
        const sBlur = q((blend.seamBlur ?? blend.blur * 1.6) * eStruct, 0.25);
        const sOp = q(Math.min(1, eStruct * 1.2) * 0.55, 0.02);
        const sR = q(d * 1.25, 0.5);
        const fp = `${sBlur}|${sOp}|${q(bx, 0.5)},${q(by, 0.5)},${sR}|${zoneT}|${regionX},${regionY},${regionW}`;
        if (seam.last !== fp) {
          seam.last = fp;
          seam.filter.setAttribute("x", regionX);
          seam.filter.setAttribute("y", regionY);
          seam.filter.setAttribute("width", regionW);
          seam.filter.setAttribute("height", regionW);
          seam.blurEl.setAttribute("stdDeviation", String(sBlur));
          seam.circle.setAttribute("cx", String(q(bx, 0.5)));
          seam.circle.setAttribute("cy", String(q(by, 0.5)));
          seam.circle.setAttribute("r", String(sR));
          if (zoneT) seam.circle.setAttribute("transform", zoneT);
          else seam.circle.removeAttribute("transform");
          seam.gl.setAttribute("opacity", String(sOp));
        }
      }
      const icx = f.x + f.w / 2;
      const icy = f.y + f.h / 2;
      const ang = Math.atan2(cy - icy, cx - icx);
      const pull = blend.pull * sStruct;
      const hostStr = r3(item.meltOp).toString() + `|translate(${round(Math.cos(ang) * pull)}px, ${round(Math.sin(ang) * pull)}px)`;
      if (hostStr !== item.meltHostLast) {
        item.meltHostLast = hostStr;
        const parts = hostStr.split("|");
        host.setAttribute("opacity", parts[0]);
        host.style.transform = parts[1];
      }
      const bridgeRange = Math.max(10, this.gooBlur * 2.5);
      const sBridge = bestOther ? bestGap < bridgeRange ? smoothstep(1 - bestGap / bridgeRange) : 0 : s;
      const holeAlpha = q(Math.max(0, 1 - Math.min(s, sBridge) * 2.2), 0.05).toFixed(2);
      const holeMid = (Math.round((1 + 2 * Number(holeAlpha)) / 3 * 20) / 20).toFixed(2);
      for (const entry of melt.entries) {
        if (!entry.lowRes) {
          const lo = downscaleHref(entry.el);
          if (lo) {
            entry.image.setAttribute("href", lo);
            entry.lowRes = true;
          } else if (entry.el.complete && entry.el.naturalWidth) {
            entry.lowRes = true;
          }
        }
        const ir2 = entry.measured;
        if (!ir2 || ir2.w < 1 || ir2.h < 1) continue;
        const ix = ir2.x;
        const iy = ir2.y;
        const kx = (ir2.ow || ir2.w) / ir2.w;
        const geom = `${round(ix)},${round(iy)},${round(ir2.w)},${round(ir2.h)},${round(pillRadius(entry.radiusPx / (kx || 1), ir2.w, ir2.h))}`;
        if (geom !== entry.lastGeom) {
          entry.lastGeom = geom;
          for (const rect of entry.rects) {
            rect.setAttribute("x", String(round(ix)));
            rect.setAttribute("y", String(round(iy)));
            rect.setAttribute("width", String(round(ir2.w)));
            rect.setAttribute("height", String(round(ir2.h)));
            rect.setAttribute(
              "rx",
              String(round(pillRadius(entry.radiusPx / (kx || 1), ir2.w, ir2.h)))
            );
          }
          entry.pattern.setAttribute("x", String(round(ix)));
          entry.pattern.setAttribute("y", String(round(iy)));
          entry.pattern.setAttribute("width", String(round(ir2.w)));
          entry.pattern.setAttribute("height", String(round(ir2.h)));
          entry.image.setAttribute("width", String(round(ir2.w)));
          entry.image.setAttribute("height", String(round(ir2.h)));
        }
        const ky = (ir2.oh || ir2.h) / ir2.h;
        const gapToImg = Math.hypot(
          Math.max(ix - cx, cx - (ix + ir2.w), 0),
          Math.max(iy - cy, cy - (iy + ir2.h), 0)
        );
        if (gapToImg > d) {
          if (entry.lastHole !== null) {
            entry.lastHole = null;
            entry.el.style.removeProperty("mask-image");
            entry.el.style.removeProperty("-webkit-mask-image");
            entry.el.style.removeProperty("mask-composite");
            entry.el.style.removeProperty("-webkit-mask-composite");
          }
          continue;
        }
        const ow = ir2.ow || ir2.w;
        const oh = ir2.oh || ir2.h;
        const rim = Math.min(ow, oh) / 2;
        let lx = (cx - ix) * kx;
        let ly = (cy - iy) * ky;
        let vx = lx - ow / 2;
        let vy = ly - oh / 2;
        const vlen = Math.hypot(vx, vy);
        if (vlen < rim) {
          if (vlen < 1e-3) {
            vx = gux;
            vy = guy;
          } else {
            vx /= vlen;
            vy /= vlen;
          }
          lx = ow / 2 + vx * rim;
          ly = oh / 2 + vy * rim;
        }
        const hx = Math.round(lx);
        const hy = Math.round(ly);
        const hd = q(
          Math.min(Math.max(d, contactSpan * 0.75) * Math.min(kx, ky), rim),
          1
        );
        const far = round(
          Math.max(
            Math.hypot(hx, hy),
            Math.hypot(hx - ow, hy),
            Math.hypot(hx, hy - oh),
            Math.hypot(hx - ow, hy - oh)
          )
        ) + 2;
        let hole;
        if (bestGap === 0 && contactSpan > 4 && bestOther) {
          const o2 = bestOther;
          const ncx2 = (o2.x + o2.w / 2 - ix) * kx;
          const ncy2 = (o2.y + o2.h / 2 - iy) * ky;
          const ovx0 = (Math.max(f.x, o2.x) - ix) * kx;
          const ovy0 = (Math.max(f.y, o2.y) - iy) * ky;
          const ovx1 = (Math.min(f.x + f.w, o2.x + o2.w) - ix) * kx;
          const ovy1 = (Math.min(f.y + f.h, o2.y + o2.h) - iy) * ky;
          const rEnd = Math.round(
            Math.max(
              Math.hypot(ovx0 - ncx2, ovy0 - ncy2),
              Math.hypot(ovx1 - ncx2, ovy0 - ncy2),
              Math.hypot(ovx0 - ncx2, ovy1 - ncy2),
              Math.hypot(ovx1 - ncx2, ovy1 - ncy2)
            ) + 3
          );
          const band = Math.round(
            Math.min(
              rim * 2.6,
              Math.max(hd, (blend.seamBlur ?? blend.blur * 1.6) * 3.2)
            )
          );
          const rCore = Math.max(0, rEnd - band);
          const farR = Math.round(
            Math.max(
              Math.hypot(ncx2, ncy2),
              Math.hypot(ncx2 - ow, ncy2),
              Math.hypot(ncx2, ncy2 - oh),
              Math.hypot(ncx2 - ow, ncy2 - oh)
            )
          ) + 2;
          hole = `radial-gradient(circle at ${Math.round(ncx2)}px ${Math.round(ncy2)}px, rgba(255,255,255,${holeAlpha}) ${rCore}px, #fff ${rEnd}px, #fff ${farR}px)`;
        } else {
          hole = `radial-gradient(circle at ${hx}px ${hy}px, rgba(255,255,255,${holeAlpha}) ${round(hd * 0.2)}px, rgba(255,255,255,${holeMid}) ${round(hd * 0.45)}px, #fff ${round(hd * 0.78)}px, #fff ${far}px)`;
        }
        if (hole !== entry.lastHole) {
          entry.lastHole = hole;
          entry.el.style.setProperty("mask-image", hole);
          entry.el.style.setProperty("-webkit-mask-image", hole);
          entry.el.style.removeProperty("mask-composite");
          entry.el.style.removeProperty("-webkit-mask-composite");
        }
      }
      item.lastBlend = { cx, cy, s, d, pk: paramKey };
      return true;
    }
    ensureSources() {
      if (this.sourcesReady) return;
      const group = this.getGroup();
      if (!group) return;
      this.sourcesReady = true;
      this.mo = new MutationObserver((muts) => {
        for (const m of muts) {
          const t = m.target;
          if (!(t instanceof Element) || !t.closest("[data-gooey-svg], [data-gooey-overlay]")) {
            this.wake();
            return;
          }
        }
      });
      this.mo.observe(group, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["style", "class"]
      });
      const wake = () => this.wake();
      for (const type of ["transitionrun", "animationstart", "pointerdown"]) {
        group.addEventListener(type, wake, true);
        this.removeListeners.push(() => group.removeEventListener(type, wake, true));
      }
      window.addEventListener("scroll", wake, { capture: true, passive: true });
      this.removeListeners.push(() => window.removeEventListener("scroll", wake, true));
      this.interval = setInterval(() => {
        if (!this.awake && this.measureAll()) this.wake();
      }, 300);
    }
  };
  function splitTop(s, sep) {
    const parts = [];
    let depth = 0;
    let cur = "";
    for (const ch of s) {
      if (ch === "(") depth++;
      else if (ch === ")") depth--;
      if (depth === 0 && (sep === "," ? ch === "," : /\s/.test(ch))) {
        if (cur.trim()) parts.push(cur.trim());
        cur = "";
      } else {
        cur += ch;
      }
    }
    if (cur.trim()) parts.push(cur.trim());
    return parts;
  }
  var LENGTH = /^[+-]?(\d+\.?\d*|\.\d+)(px)?$/;
  function parseShadow(input) {
    if (!input || input.trim() === "" || input.trim() === "none") return [];
    const out = [];
    for (const layer of splitTop(input, ",")) {
      const tokens = splitTop(layer, " ");
      if (tokens.length === 0) continue;
      const inset = tokens.includes("inset");
      const nums = [];
      const colorParts = [];
      for (const tok of tokens) {
        if (tok === "inset") continue;
        if (nums.length < 4 && LENGTH.test(tok)) nums.push(parseFloat(tok));
        else colorParts.push(tok);
      }
      const [x2 = 0, y = 0, blur = 0, spread = 0] = nums;
      out.push({ x: x2, y, blur, spread, color: colorParts.join(" ") || "rgba(0, 0, 0, 0.35)", inset });
    }
    return out;
  }
  var GooeyRoot = (0, import_react.forwardRef)(function Gooey({
    blur = 6,
    contrast = 18,
    fill = "#fff",
    shadow,
    filterPadding = 24,
    waviness = 0,
    wavinessFreq = 0.018,
    filter: customFilter,
    className,
    style,
    children,
    ...rest
  }, fwd) {
    const groupRef = (0, import_react.useRef)(null);
    const [portal, setPortal] = (0, import_react.useState)(null);
    const [meltPortal, setMeltPortal] = (0, import_react.useState)(null);
    const [size, setSize] = (0, import_react.useState)({ w: 0, h: 0 });
    const setRefs = (0, import_react.useCallback)(
      (node) => {
        groupRef.current = node;
        if (typeof fwd === "function") fwd(node);
        else if (fwd) fwd.current = node;
      },
      [fwd]
    );
    const filterId = `gooey-${(0, import_react.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const shadows = (0, import_react.useMemo)(() => parseShadow(shadow), [shadow]);
    useIsoLayoutEffect(() => {
      const el = groupRef.current;
      if (!el) return;
      const measure = () => setSize(
        (prev) => prev.w === el.offsetWidth && prev.h === el.offsetHeight ? prev : { w: el.offsetWidth, h: el.offsetHeight }
      );
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }, []);
    const engine = (0, import_react.useMemo)(() => new ObserveEngine(() => groupRef.current), []);
    const imageMelt = (0, import_react.useMemo)(() => createImageMeltRegistry(), []);
    (0, import_react.useEffect)(() => () => engine.dispose(), [engine]);
    (0, import_react.useEffect)(() => {
      engine.gooBlur = blur;
    }, [engine, blur]);
    const ctx = (0, import_react.useMemo)(
      () => ({ portal, meltPortal, fill, getGroup: () => groupRef.current, engine, imageMelt }),
      [portal, meltPortal, fill, engine, imageMelt]
    );
    const svgShadows = shadows.filter((s) => s.inset || s.spread !== 0);
    const cssShadowFilter = shadows.filter((s) => !s.inset && s.spread === 0).map((s) => `drop-shadow(${s.x}px ${s.y}px ${s.blur}px ${s.color})`).join(" ");
    const shadowExtent = svgShadows.reduce(
      (m, s) => Math.max(m, Math.max(Math.abs(s.x), Math.abs(s.y)) + s.blur * 1.5 + Math.max(0, s.spread)),
      0
    );
    const pad = Math.ceil(blur * 3 + shadowExtent + filterPadding);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        ...rest,
        ref: setRefs,
        className,
        style: { position: "relative", isolation: "isolate", ...style },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              "data-gooey-svg": "",
              style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "visible",
                pointerEvents: "none",
                zIndex: -1,
                // The GPU half of the shadow stack (see above).
                filter: cssShadowFilter || void 0,
                // Promote the filtered layer: WebKit otherwise repaints the goo a
                // frame or two behind the plain-DOM content.
                willChange: "filter, transform"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("defs", { children: customFilter ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "filter",
                  {
                    id: filterId,
                    filterUnits: "userSpaceOnUse",
                    x: -pad,
                    y: -pad,
                    width: size.w + pad * 2,
                    height: size.h + pad * 2,
                    colorInterpolationFilters: "sRGB",
                    dangerouslySetInnerHTML: { __html: customFilter }
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "filter",
                  {
                    id: filterId,
                    filterUnits: "userSpaceOnUse",
                    x: -pad,
                    y: -pad,
                    width: size.w + pad * 2,
                    height: size.h + pad * 2,
                    colorInterpolationFilters: "sRGB",
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      GooFilterPrimitives,
                      {
                        blur,
                        contrast,
                        shadows: svgShadows,
                        waviness,
                        wavinessFreq
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { id: `${filterId}-sil`, ref: setPortal, filter: `url(#${filterId})`, style: { fill } })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              "data-gooey-overlay": "",
              style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "visible",
                pointerEvents: "none",
                // Above the content layer by design, and high enough that an app's
                // own stacking (e.g. a dragged item raised over its neighbours)
                // can't slip in front and hide the melt. Scoped: the group is an
                // isolated stacking context, so this can't escape it.
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "mask",
                  {
                    id: `${filterId}-meltmask`,
                    maskUnits: "userSpaceOnUse",
                    x: -pad,
                    y: -pad,
                    width: size.w + pad * 2,
                    height: size.h + pad * 2,
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("use", { href: `#${filterId}-sil` })
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { mask: `url(#${filterId}-meltmask)`, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { ref: setMeltPortal }) })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(GooeyContext.Provider, { value: ctx, children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ImageMeltLayer, { registry: imageMelt })
          ] })
        ]
      }
    );
  });
  var presets = {
    snappy: { stiffness: 480, damping: 34, mass: 1 },
    smooth: { stiffness: 190, damping: 26, mass: 1 },
    bouncy: { stiffness: 320, damping: 17, mass: 1 }
  };
  var DT = 1 / 240;
  function simulate(c) {
    let x2 = 0;
    let v = 0;
    let t = 0;
    let settledAt = -1;
    let max = 0;
    const xs = [0];
    while (t < 10) {
      const a = (-c.stiffness * (x2 - 1) - c.damping * v) / c.mass;
      v += a * DT;
      x2 += v * DT;
      t += DT;
      xs.push(x2);
      if (x2 > max) max = x2;
      if (Math.abs(x2 - 1) < 1e-3 && Math.abs(v) < 0.02) {
        if (settledAt < 0) settledAt = t;
        if (t - settledAt >= 0.064) break;
      } else {
        settledAt = -1;
      }
    }
    const duration = settledAt > 0 ? settledAt : t;
    const n = Math.round(Math.min(120, Math.max(24, duration * 90)));
    const lastIdx = Math.min(xs.length - 1, duration / DT);
    const values = [];
    for (let i = 0; i <= n; i++) {
      const idx = Math.min(xs.length - 1, Math.round(i / n * lastIdx));
      values.push(Math.round(xs[idx] * 1e4) / 1e4);
    }
    values[values.length - 1] = 1;
    return { duration, values, overshoots: max > 1.001 };
  }
  var linearOK = null;
  function supportsLinear() {
    if (linearOK == null) {
      linearOK = typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports("transition-timing-function", "linear(0, 1)");
    }
    return linearOK;
  }
  var cache = /* @__PURE__ */ new Map();
  var evalCache = /* @__PURE__ */ new Map();
  function easingFunction(spec) {
    let fn2 = evalCache.get(spec);
    if (fn2) return fn2;
    const lin = /^linear\(([^)]+)\)$/.exec(spec.trim());
    const bez = /^cubic-bezier\(([^)]+)\)$/.exec(spec.trim());
    if (lin) {
      const values = lin[1].split(",").map(Number);
      fn2 = (t) => {
        if (t <= 0) return values[0];
        if (t >= 1) return values[values.length - 1];
        const f = t * (values.length - 1);
        const i = Math.floor(f);
        return values[i] + (values[i + 1] - values[i]) * (f - i);
      };
    } else if (bez) {
      const [x1, y1, x2, y2] = bez[1].split(",").map(Number);
      fn2 = (t) => {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        let lo = 0;
        let hi2 = 1;
        for (let i = 0; i < 24; i++) {
          const mid = (lo + hi2) / 2;
          const xm = 3 * mid * (1 - mid) * (1 - mid) * x1 + 3 * mid * mid * (1 - mid) * x2 + mid ** 3;
          if (xm < t) lo = mid;
          else hi2 = mid;
        }
        const u = (lo + hi2) / 2;
        return 3 * u * (1 - u) * (1 - u) * y1 + 3 * u * u * (1 - u) * y2 + u ** 3;
      };
    } else if (spec === "ease") {
      fn2 = easingFunction("cubic-bezier(0.25, 0.1, 0.25, 1)");
    } else if (spec === "ease-in") {
      fn2 = easingFunction("cubic-bezier(0.42, 0, 1, 1)");
    } else if (spec === "ease-out") {
      fn2 = easingFunction("cubic-bezier(0, 0, 0.58, 1)");
    } else if (spec === "ease-in-out") {
      fn2 = easingFunction("cubic-bezier(0.42, 0, 0.58, 1)");
    } else {
      fn2 = (t) => Math.min(1, Math.max(0, t));
    }
    evalCache.set(spec, fn2);
    return fn2;
  }
  function resolveTransition(t, reducedMotion = false) {
    if (reducedMotion) return { duration: 0, easing: "linear" };
    const cfg = t ?? "smooth";
    if (typeof cfg === "object" && "duration" in cfg) {
      return {
        duration: cfg.duration,
        easing: cfg.ease ?? "cubic-bezier(0.22, 1, 0.36, 1)"
      };
    }
    const spring = typeof cfg === "string" ? presets[cfg] : { stiffness: 300, damping: 24, mass: 1, ...cfg };
    const key = `${spring.stiffness}/${spring.damping}/${spring.mass}/${supportsLinear()}`;
    let resolved = cache.get(key);
    if (!resolved) {
      const sim = simulate(spring);
      resolved = {
        duration: Math.round(sim.duration * 1e3),
        easing: supportsLinear() ? `linear(${sim.values.join(", ")})` : sim.overshoots ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "cubic-bezier(0.22, 1, 0.36, 1)"
      };
      cache.set(key, resolved);
    }
    return resolved;
  }
  function toEffects(effect) {
    return Array.isArray(effect) ? effect : effect ? [effect] : [];
  }
  function GooeyItem(props) {
    const ctx = useGooeyContext();
    const needsEngine = props.observe || toEffects(props.effect).some((e) => e !== "morph");
    return needsEngine ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ObservedItem, { ...props, ctx }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MirroredItem, { ...props, ctx });
  }
  function transitionKey(t) {
    return typeof t === "string" ? t : JSON.stringify(t ?? null);
  }
  function sameBox(a, b) {
    return !!a && a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h && a.r.every((v, i) => v === b.r[i]);
  }
  function MirroredItem({
    x: x2 = 0,
    y = 0,
    scale = 1,
    transition = "smooth",
    delay = 0,
    radius,
    className,
    style,
    children,
    ctx
  }) {
    const wrapRef = (0, import_react5.useRef)(null);
    const blobRef = (0, import_react5.useRef)(null);
    const [box, setBox] = (0, import_react5.useState)(null);
    const reduced = useReducedMotion();
    const tKey = transitionKey(transition);
    const { duration, easing } = (0, import_react5.useMemo)(
      () => resolveTransition(transition, reduced),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [tKey, reduced]
    );
    const radiusKey = radius == null ? "" : JSON.stringify(radius);
    useIsoLayoutEffect(() => {
      const el = wrapRef.current;
      const group = ctx.getGroup();
      if (!el || !group) return;
      const measure = () => {
        const base = offsetTo(el, group);
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        const target = el.firstElementChild ?? el;
        const r = radius != null ? normalizeRadius(radius) : measureRadius(target, w, h);
        const next = { x: base.x, y: base.y, w, h, r };
        setBox((prev) => sameBox(prev, next) ? prev : next);
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      ro.observe(group);
      return () => ro.disconnect();
    }, [ctx, radiusKey]);
    const cur = (0, import_react5.useRef)(null);
    const writeTransform = (px2, py2, ps) => {
      const t = `translate(${px2}px, ${py2}px)` + (ps !== 1 ? ` scale(${ps})` : "");
      if (wrapRef.current) wrapRef.current.style.transform = t;
      if (blobRef.current) blobRef.current.style.transform = t;
    };
    useIsoLayoutEffect(() => {
      const from = cur.current;
      if (!from || duration <= 0 || from.x === x2 && from.y === y && from.s === scale) {
        cur.current = { x: x2, y, s: scale };
        writeTransform(x2, y, scale);
        return;
      }
      const f = { ...from };
      const ease = easingFunction(easing);
      const start = performance.now() + delay;
      let raf2 = 0;
      const tick = (now) => {
        const p = Math.min(1, Math.max(0, (now - start) / duration));
        const e = ease(p);
        const cx = f.x + (x2 - f.x) * e;
        const cy = f.y + (y - f.y) * e;
        const cs = f.s + (scale - f.s) * e;
        cur.current = { x: cx, y: cy, s: cs };
        writeTransform(cx, cy, cs);
        if (p < 1) raf2 = requestAnimationFrame(tick);
      };
      raf2 = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf2);
    }, [x2, y, scale, duration, easing, delay]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "div",
        {
          ref: wrapRef,
          className,
          style: {
            display: "inline-block",
            ...style,
            // `transform` is owned imperatively (see above) — React must never
            // render it, or a re-render mid-flight would snap to the target.
            willChange: "transform"
          },
          children
        }
      ),
      ctx.portal && box && (0, import_react_dom.createPortal)(
        renderBlob(
          box,
          {
            transformBox: "fill-box",
            transformOrigin: "center",
            willChange: "transform"
          },
          (el) => {
            blobRef.current = el;
            if (el) {
              const c = cur.current ?? { x: x2, y, s: scale };
              el.style.transform = `translate(${c.x}px, ${c.y}px)` + (c.s !== 1 ? ` scale(${c.s})` : "");
            }
          }
        ),
        ctx.portal
      )
    ] });
  }
  function renderBlob(box, style, setRef) {
    const [tl, tr2, br2, bl] = box.r;
    const uniform = tl === tr2 && tr2 === br2 && br2 === bl;
    if (uniform) {
      const rx = Math.max(0, Math.min(tl, Math.min(box.w, box.h) / 2));
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "rect",
        {
          ref: setRef,
          x: box.x,
          y: box.y,
          width: box.w,
          height: box.h,
          rx,
          style
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "path",
      {
        ref: setRef,
        d: roundedRectPath(box.x, box.y, box.w, box.h, box.r),
        style
      }
    );
  }
  function ObservedItem({
    radius,
    blobInset,
    bridgeGrow,
    contactBlur,
    effect,
    evolve,
    move,
    className,
    style,
    children,
    ctx
  }) {
    const hostRef = (0, import_react5.useRef)(null);
    const blobRef = (0, import_react5.useRef)(null);
    const meltRef = (0, import_react5.useRef)(null);
    const blendRef = (0, import_react5.useRef)(null);
    const opts = typeof contactBlur === "object" ? contactBlur : {};
    const blendBlur = opts.blur ?? 8;
    const blendWarp = opts.warp ?? 26;
    const blendPull = opts.pull ?? 4;
    const blendRange = opts.range;
    const blendZone = opts.zone;
    const blendMix = opts.mix ?? 0;
    const blendGravity = opts.gravity ?? 60;
    const blendTaper = opts.taper ?? 1;
    const blendWarpFreq = opts.warpFreq ?? 1.7;
    const blendFlowSpeed = opts.flowSpeed ?? 22;
    const blendWarpStyle = opts.warpStyle ?? "fractalNoise";
    const blendDetail = opts.detail ?? 2;
    const blendActive = opts.active !== false;
    const blendRelease = opts.releaseMs ?? 240;
    const blendFade = opts.fadeMs;
    const blendStrength = opts.strength ?? 1;
    const blendSink = opts.sink;
    const blendSurface = opts.surface;
    const blendSeamBlur = opts.seamBlur;
    const effects = toEffects(effect);
    const dynamics = {
      evolve: effects.includes("evolve"),
      move: effects.includes("move"),
      evolveOpts: { ...EVOLVE_DEFAULTS, ...evolve },
      moveOpts: { ...MOVE_DEFAULTS, ...move }
    };
    const hasDynamics = dynamics.evolve || dynamics.move;
    const radiusKey = radius == null ? "" : JSON.stringify(radius);
    const blendKey = contactBlur ? `${blendBlur}/${blendWarp}/${blendPull}/${blendRange ?? "auto"}/${blendZone ?? "auto"}/${blendMix}/${blendGravity}/${blendTaper}/${blendWarpFreq}/${blendFlowSpeed}/${blendWarpStyle}/${blendDetail}/${blendSurface ?? "liquid"}/${(blendSeamBlur ?? 1) > 0 ? "seam" : "noseam"}` : "";
    const effectKey = effects.join(",") + (dynamics.evolve ? JSON.stringify(dynamics.evolveOpts) : "") + (dynamics.move ? JSON.stringify(dynamics.moveOpts) : "");
    useIsoLayoutEffect(() => {
      const host = hostRef.current;
      const blob = blobRef.current;
      const target = host?.firstElementChild ?? null;
      if (!target || !blob) return;
      const blend = contactBlur && meltRef.current ? {
        host: meltRef.current,
        blur: blendBlur,
        warp: blendWarp,
        pull: blendPull,
        range: blendRange,
        zone: blendZone,
        mix: blendMix,
        gravity: blendGravity,
        taper: blendTaper,
        warpFreq: blendWarpFreq,
        flowSpeed: blendFlowSpeed,
        warpStyle: blendWarpStyle,
        detail: blendDetail,
        active: blendActive,
        releaseMs: blendRelease,
        fadeMs: blendFade,
        strength: blendStrength,
        sink: blendSink,
        surface: blendSurface,
        seamBlur: blendSeamBlur
      } : void 0;
      blendRef.current = blend ?? null;
      return ctx.engine.add({
        target,
        blob,
        radius: radius == null ? void 0 : normalizeRadius(radius)[0],
        blobInset,
        bridgeGrow,
        blend,
        dynamics: hasDynamics ? dynamics : void 0
      });
    }, [ctx, radiusKey, blendKey, effectKey, blobInset, bridgeGrow]);
    (0, import_react5.useEffect)(() => {
      if (!blendRef.current) return;
      blendRef.current.active = blendActive;
      blendRef.current.releaseMs = blendRelease;
      blendRef.current.fadeMs = blendFade;
      blendRef.current.strength = blendStrength;
      blendRef.current.sink = blendSink;
      blendRef.current.seamBlur = blendSeamBlur;
      ctx.engine.wake();
    }, [ctx, blendActive, blendRelease, blendFade, blendStrength, blendSink, blendSeamBlur]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { ref: hostRef, className, style: { display: "contents", ...style }, children }),
      ctx.portal && (0, import_react_dom.createPortal)(
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "rect",
          {
            ref: blobRef,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            style: {
              willChange: "transform",
              // Dynamics scale (stretch / squash) about the blob's own centre.
              transformBox: "fill-box",
              transformOrigin: "center"
            }
          }
        ),
        ctx.portal
      ),
      contactBlur !== void 0 && contactBlur !== false && ctx.meltPortal && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { ref: meltRef, opacity: 0 }), ctx.meltPortal)
    ] });
  }
  function zeta(bounce) {
    return Math.max(0.12, 1 - 1.1 * Math.min(1, Math.max(0, bounce)));
  }
  function mapMorphSprings(t) {
    const s = Math.max(0.25, t?.speed ?? 1);
    const k = zeta(t?.bounce ?? 0.5) / zeta(0.5);
    return {
      massStiffness: EVOLVE_DEFAULTS.massStiffness * s * s,
      massDamping: EVOLVE_DEFAULTS.massDamping * s * k,
      sizeStiffness: EVOLVE_DEFAULTS.sizeStiffness * s * s,
      sizeDamping: EVOLVE_DEFAULTS.sizeDamping * s * k,
      // The radius spring stays critically damped at every bounce setting — the
      // roundness envelope supplies the liquid look; a bouncing radius reads as
      // flicker, not jelly.
      radiusStiffness: EVOLVE_DEFAULTS.radiusStiffness * s * s,
      radiusDamping: EVOLVE_DEFAULTS.radiusDamping * s,
      cornerDuration: EVOLVE_DEFAULTS.cornerDuration / s,
      contentBlur: t?.contentBlur ?? EVOLVE_DEFAULTS.contentBlur
    };
  }
  function mapDissolve(d) {
    const k = typeof d === "number" ? Math.min(1, Math.max(0, d)) : 1;
    return {
      warp: 26,
      blur: 8,
      mix: 0.7,
      gravity: 60,
      taper: 1,
      warpFreq: 1.7,
      flowSpeed: 22,
      detail: 2,
      zone: 18,
      range: 49,
      releaseMs: 110,
      strength: k
    };
  }
  function mapMove(t) {
    const p = Math.min(1, Math.max(0, t?.springiness ?? 0.5));
    const stiffness = MOVE_DEFAULTS.stiffness * Math.pow(10, p - 0.5);
    const damping = MOVE_DEFAULTS.damping * Math.sqrt(stiffness / MOVE_DEFAULTS.stiffness) * (zeta(t?.wobble ?? 0.5) / zeta(0.5));
    return {
      stiffness,
      damping,
      stretch: 0.5 * Math.min(1, Math.max(0, t?.stretch ?? 0.36)),
      tail: 0.8 * Math.min(1, Math.max(0, t?.trail ?? 0.575)),
      ...t?.advanced
    };
  }
  function mapBend(t) {
    return {
      // Springiness 1 on the public curve: the surface tracks the content
      // 1:1, so all liquid character comes from the bends.
      ...mapMove({ springiness: 1, stretch: 0, trail: 0 }),
      bend: Math.min(1, Math.max(0, t?.vertical ?? 0.6)),
      bendX: Math.min(1, Math.max(0, t?.horizontal ?? 0.35)),
      ...t?.advanced
    };
  }
  function MeltItem({
    melt,
    children
  }) {
    const { imageMelt } = useGooeyContext();
    const { src: src2, ...tuning2 } = melt ?? {};
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ImageMeltItem, { src: src2, opts: { ...IMAGE_MELT_DEFAULTS, ...tuning2 }, registry: imageMelt, children });
  }
  function LiquidItem(props) {
    const { effect = "morph", morph, move, bend: bend2, melt, dissolve, observe, ...rest } = props;
    if (effect === "melt") {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MeltItem, { melt, children: rest.children });
    }
    if (effect === "bend") {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GooeyItem, { ...rest, observe: true, effect: "move", move: mapBend(bend2) });
    }
    if (effect === "move") {
      if (false) {
        console.warn(
          '[liquid-gooey] `dissolve` is ignored with effect="move": the melt follows the element while the liquid lags on its spring, so the two would visibly disagree. Use it on a morph item.'
        );
      }
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GooeyItem, { ...rest, observe: true, effect: "move", move: mapMove(move) });
    }
    const adv = morph?.advanced;
    const shape = !!morph?.shape;
    const wantsDissolve = dissolve !== void 0 && dissolve !== false;
    const contactBlur = wantsDissolve ? typeof dissolve === "object" ? { ...mapDissolve(true), ...dissolve } : mapDissolve(dissolve) : void 0;
    const evolve = shape ? { ...mapMorphSprings(morph), ...adv?.evolve } : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      GooeyItem,
      {
        ...rest,
        observe: observe || shape || !!contactBlur || void 0,
        effect: shape ? "evolve" : void 0,
        evolve,
        contactBlur,
        blobInset: adv?.blobInset,
        bridgeGrow: adv?.bridgeGrow
      }
    );
  }
  var Liquid = Object.assign(GooeyRoot, { Item: LiquidItem });

  // node_modules/metal-fx/dist/index.es.js
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react6 = __toESM(require_react(), 1);
  function vo(t) {
    let e = t.replace("#", "");
    (e.length === 3 || e.length === 4) && (e = e.split("").map((o) => o + o).join(""));
    const n = e.length >= 8 ? parseInt(e.slice(6, 8), 16) / 255 : 1;
    return [
      parseInt(e.slice(0, 2), 16) / 255,
      parseInt(e.slice(2, 4), 16) / 255,
      parseInt(e.slice(4, 6), 16) / 255,
      n
    ];
  }
  function ca(t, e, n) {
    t /= 255, e /= 255, n /= 255;
    const o = Math.max(t, e, n), a = Math.min(t, e, n), i = o - a;
    let r = 0;
    const l = o === 0 ? 0 : i / o;
    return i !== 0 && (o === t ? r = ((e - n) / i + 6) % 6 : o === e ? r = (n - t) / i + 2 : r = (t - e) / i + 4, r /= 6), [r, l, o];
  }
  function ua(t, e, n) {
    const o = Math.floor(t * 6), a = t * 6 - o, i = n * (1 - e), r = n * (1 - a * e), l = n * (1 - (1 - a) * e);
    let s = 0, c = 0, u = 0;
    switch (o % 6) {
      case 0:
        s = n, c = l, u = i;
        break;
      case 1:
        s = r, c = n, u = i;
        break;
      case 2:
        s = i, c = n, u = l;
        break;
      case 3:
        s = i, c = r, u = n;
        break;
      case 4:
        s = l, c = i, u = n;
        break;
      case 5:
        s = n, c = i, u = r;
        break;
    }
    return [Math.round(s * 255), Math.round(c * 255), Math.round(u * 255)];
  }
  var qa = 66;
  var Ka = 66;
  var Qa = 1500;
  var Za = 1;
  var bo = 16;
  var Ja = 96;
  var tr = 2;
  var er = 0;
  var nr = 1;
  var Se = {
    colorBack: "#00000000",
    speed: 1,
    repetition: 1.5,
    softness: 0.05,
    shiftRed: 0.3,
    shiftBlue: 0.3,
    distortion: 0.1,
    contour: 0.4,
    angle: 90,
    shape: er,
    scale: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    originX: 0.5,
    originY: 0.5,
    worldWidth: 0,
    worldHeight: 0,
    fit: nr
  };
  var or = {
    name: "chromatic",
    modes: {
      // Cool blue burn with the dispersion pushed well past Paper's default —
      // the R/B channel split is the only knob that produces colour separation
      // in this shader, so it carries what the 5-stop palette used to do.
      dark: { ...Se, colorTint: "#88ccff2e", shiftRed: 0.75, shiftBlue: 0.75, repetition: 2, softness: 0.09, shaderOpacity: 1 },
      light: { ...Se, colorTint: "#66b0ff99", shiftRed: 0.6, shiftBlue: 0.6, shaderOpacity: 1 }
    }
  };
  var ar = {
    name: "silver",
    modes: {
      // White tint at low amount = Paper's material essentially untouched.
      dark: { ...Se, colorTint: "#ffffff66", shaderOpacity: 0.88 },
      light: { ...Se, colorTint: "#ffffff40", shaderOpacity: 1 }
    }
  };
  var rr = {
    name: "gold",
    modes: {
      dark: { ...Se, colorTint: "#ffcc55cc", speed: 0.85, shaderOpacity: 0.92 },
      light: { ...Se, colorTint: "#f7d488aa", shaderOpacity: 1 }
    }
  };
  var da = {
    chromatic: or,
    silver: ar,
    gold: rr
  };
  var ir = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`;
  var sr = `
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`;
  var lr = `
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`;
  var cr = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;
  var ur = `#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${ir}
${sr}
${cr}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${lr}

  fragColor = vec4(color, opacity);
}
`;
  var dr = (
    /* glsl */
    `#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`
  );
  var fr = ur;
  function wo(t, e, n) {
    const o = t.createShader(e);
    if (!o) throw new Error("metal-fx: gl.createShader returned null");
    if (t.shaderSource(o, n), t.compileShader(o), !t.getShaderParameter(o, t.COMPILE_STATUS)) {
      const a = t.getShaderInfoLog(o);
      throw t.deleteShader(o), new Error(`metal-fx: shader compile failed: ${a ?? "(no info log)"}`);
    }
    return o;
  }
  function hr(t, e, n) {
    const o = t.createProgram();
    if (!o) throw new Error("metal-fx: gl.createProgram returned null");
    if (t.attachShader(o, e), t.attachShader(o, n), t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS)) {
      const a = t.getProgramInfoLog(o);
      throw t.deleteProgram(o), new Error(`metal-fx: program link failed: ${a ?? "(no info log)"}`);
    }
    return o;
  }
  var fa = 140;
  var ha = 40;
  var ma = 1.6;
  var pa = 1.3;
  var x = null;
  var he = null;
  function mr() {
    var t;
    if (he !== null) return he;
    if (typeof document > "u") return he = false;
    try {
      const n = document.createElement("canvas").getContext("webgl2");
      he = !!n, (t = n == null ? void 0 : n.getExtension("WEBGL_lose_context")) == null || t.loseContext();
    } catch {
      he = false;
    }
    return he;
  }
  var en = null;
  function pr(t) {
    en = t;
  }
  var gr = [
    // Fragment stage (Paper liquidMetal)
    "u_resolution",
    "u_time",
    "u_pixelRatio",
    "u_colorBack",
    "u_colorTint",
    "u_repetition",
    "u_softness",
    "u_shiftRed",
    "u_shiftBlue",
    "u_distortion",
    "u_contour",
    "u_angle",
    "u_shape",
    "u_isImage",
    "u_image",
    // Vertex stage (Paper sizing)
    "u_originX",
    "u_originY",
    "u_worldWidth",
    "u_worldHeight",
    "u_fit",
    "u_scale",
    "u_rotation",
    "u_offsetX",
    "u_offsetY",
    "u_imageAspectRatio"
  ];
  function yo(t) {
    t.enable(t.BLEND), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA);
    const e = wo(t, t.VERTEX_SHADER, dr), n = wo(t, t.FRAGMENT_SHADER, fr), o = hr(t, e, n);
    t.useProgram(o);
    const a = t.createBuffer();
    if (!a) throw new Error("metal-fx: gl.createBuffer returned null");
    t.bindBuffer(t.ARRAY_BUFFER, a), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), t.STATIC_DRAW);
    const i = t.getAttribLocation(o, "a_position");
    t.enableVertexAttribArray(i), t.vertexAttribPointer(i, 2, t.FLOAT, false, 0, 0);
    const r = {};
    for (const s of gr) r[s] = t.getUniformLocation(o, s);
    const l = t.createTexture();
    return l && (t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, l), t.texImage2D(
      t.TEXTURE_2D,
      0,
      t.RGBA,
      1,
      1,
      0,
      t.RGBA,
      t.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 255])
    ), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), r.u_image && t.uniform1i(r.u_image, 0)), { program: o, buffer: a, uniforms: r, dummyTexture: l };
  }
  function Kn() {
    if (x) return x;
    const t = Math.min(tr, typeof window < "u" && window.devicePixelRatio || 1), e = Math.round(Ja * t), n = typeof OffscreenCanvas < "u";
    let o, a;
    if (n)
      o = new OffscreenCanvas(e, e), a = o.getContext("webgl2", {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false
      });
    else {
      const d = document.createElement("canvas");
      d.width = e, d.height = e, a = d.getContext("webgl2", {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        preserveDrawingBuffer: true
      }), o = d;
    }
    if (!a) throw new Error("metal-fx: WebGL2 not supported");
    const { program: i, buffer: r, uniforms: l, dummyTexture: s } = yo(a), c = (d) => {
      d.preventDefault(), x && (x.contextLost = true);
    }, u = () => {
      if (!x) return;
      const d = yo(x.gl);
      x.program = d.program, x.buffer = d.buffer, x.uniforms = d.uniforms, x.dummyTexture = d.dummyTexture, x.presetDirty = true, x.contextLost = false, en == null || en();
    };
    return o.addEventListener("webglcontextlost", c, false), o.addEventListener("webglcontextrestored", u, false), x = {
      glCanvas: o,
      gl: a,
      program: i,
      buffer: r,
      uniforms: l,
      dummyTexture: s,
      preset: da.chromatic.modes.dark,
      presetDirty: true,
      contextLost: false,
      useOffscreen: n,
      frameBitmap: null,
      startMs: performance.now(),
      pausedMs: 0,
      pausedAtMs: null,
      rafId: 0,
      dpr: t,
      instances: /* @__PURE__ */ new Set(),
      frameCount: 0,
      glowQueue: [],
      glowIdx: 0,
      glowSkip: 0,
      glowPixels: new Uint8Array(e * e * 4),
      glowPixelsW: e,
      glowPixelsH: e
    }, x;
  }
  function xr() {
    var i;
    if (!x) return;
    const { gl: t, program: e, buffer: n, frameBitmap: o, dummyTexture: a } = x;
    try {
      o == null || o.close(), t.deleteBuffer(n), t.deleteProgram(e), a && t.deleteTexture(a), (i = t.getExtension("WEBGL_lose_context")) == null || i.loseContext();
    } catch {
    }
    x = null;
  }
  var Mo = 0;
  function vr() {
    if (!x) return;
    const t = performance.now();
    if (t - Mo < Qa) return;
    Mo = t;
    const { gl: e, glCanvas: n } = x, o = n.width, a = n.height;
    (x.glowPixelsW !== o || x.glowPixelsH !== a) && (x.glowPixelsW = o, x.glowPixelsH = a, x.glowPixels = new Uint8Array(o * a * 4)), e.readPixels(0, 0, o, a, e.RGBA, e.UNSIGNED_BYTE, x.glowPixels);
  }
  var me = { bx: 0, by: 0 };
  function ln(t, e, n) {
    if (!x)
      return me.bx = 0, me.by = 0, me;
    const { glCanvas: o } = x, a = o.width, i = o.height, r = t.dpr, l = t.cssWidth * r, s = t.cssHeight * r, c = fa * r, u = ha * r;
    let d = l * (a / c) / t.shaderScale, h = s * (i / u) / t.shaderScale;
    d > a && (d = a), h > i && (h = i);
    const f = (a - d) / 2, p = (i - h) / 2, g = f + e / t.cssWidth * d, v = p + n / t.cssHeight * h;
    return me.bx = Math.round(g), me.by = Math.round(i - 1 - v), me;
  }
  var Ct = { r: 0, g: 0, b: 0, lum: 0, count: 0 };
  function ga(t, e, n, o, a, i) {
    const r = Math.max(1, i | 0), l = Math.max(0, o - r), s = Math.min(e, o + r + 1), c = Math.max(0, a - r), u = Math.min(n, a + r + 1);
    Ct.r = 0, Ct.g = 0, Ct.b = 0, Ct.lum = 0, Ct.count = 0;
    for (let d = c; d < u; d++) {
      const h = d * e;
      for (let f = l; f < s; f++) {
        const p = (h + f) * 4;
        Ct.r += t[p], Ct.g += t[p + 1], Ct.b += t[p + 2], Ct.lum += (0.2126 * t[p] + 0.7152 * t[p + 1] + 0.0722 * t[p + 2]) / 255, Ct.count++;
      }
    }
    return Ct;
  }
  var lt = { r: 255, g: 255, b: 255 };
  function Fn(t, e, n, o) {
    if (!x) return 0;
    const a = ln(t, e, n), i = ga(x.glowPixels, x.glowPixelsW, x.glowPixelsH, a.bx, a.by, o);
    return i.count > 0 ? i.lum / i.count : 0;
  }
  function xa(t, e, n, o) {
    if (!x)
      return lt.r = 255, lt.g = 255, lt.b = 255, lt;
    const a = ln(t, e, n), i = ga(x.glowPixels, x.glowPixelsW, x.glowPixelsH, a.bx, a.by, o);
    return i.count === 0 ? (lt.r = 255, lt.g = 255, lt.b = 255, lt) : (lt.r = i.r / i.count, lt.g = i.g / i.count, lt.b = i.b / i.count, lt);
  }
  function br(t, e, n, o) {
    if (!x)
      return lt.r = 255, lt.g = 255, lt.b = 255, lt;
    const a = ln(t, e, n), { glowPixels: i, glowPixelsW: r, glowPixelsH: l } = x, s = Math.max(1, o | 0), c = Math.max(0, a.bx - s), u = Math.min(r, a.bx + s + 1), d = Math.max(0, a.by - s), h = Math.min(l, a.by + s + 1);
    let f = -1;
    lt.r = 255, lt.g = 255, lt.b = 255;
    for (let p = d; p < h; p++) {
      const g = p * r;
      for (let v = c; v < u; v++) {
        const m = (g + v) * 4, b = i[m], w = i[m + 1], M = i[m + 2], y = Math.max(b, w, M), C = Math.min(b, w, M), E = (y > 0 ? (y - C) / y : 0) * (0.35 + 0.65 * (y / 255));
        E > f && (f = E, lt.r = b, lt.g = w, lt.b = M);
      }
    }
    return lt;
  }
  var Tt = { r: 255, g: 255, b: 255, lum: 0 };
  function wr(t, e, n, o) {
    if (Tt.r = 255, Tt.g = 255, Tt.b = 255, Tt.lum = 0, !x) return Tt;
    const a = ln(t, e, n), { glowPixels: i, glowPixelsW: r, glowPixelsH: l } = x, s = Math.max(1, o | 0), c = Math.max(0, a.bx - s), u = Math.min(r, a.bx + s + 1), d = Math.max(0, a.by - s), h = Math.min(l, a.by + s + 1);
    for (let f = d; f < h; f++) {
      const p = f * r;
      for (let g = c; g < u; g++) {
        const v = (p + g) * 4, m = (0.2126 * i[v] + 0.7152 * i[v + 1] + 0.0722 * i[v + 2]) / 255;
        m > Tt.lum && (Tt.lum = m, Tt.r = i[v], Tt.g = i[v + 1], Tt.b = i[v + 2]);
      }
    }
    return Tt;
  }
  var Mn = 14;
  var _o = 1.5;
  var _n = { x: 0, y: 0 };
  function Re(t = 512) {
    return { xy: new Float32Array(t * 2), n: 0 };
  }
  function Ce(t, e, n, o, a, i, r = Re()) {
    a = Math.max(0, Math.min(a, Math.min(n, o) / 2));
    const l = 4 * (Mn + 1) + Math.ceil(2 * (n + o) / _o) + 8;
    r.xy.length < l * 2 && (r.xy = new Float32Array(l * 2));
    const s = r.xy;
    let c = 0;
    const u = (f, p) => {
      i ? (i(f, p, _n), s[c * 2] = _n.x, s[c * 2 + 1] = _n.y) : (s[c * 2] = f, s[c * 2 + 1] = p), c++;
    }, d = (f, p, g, v) => {
      const m = Math.hypot(g - f, v - p), b = Math.max(1, Math.ceil(m / _o));
      for (let w = 0; w < b; w++) {
        const M = w / b;
        u(f + (g - f) * M, p + (v - p) * M);
      }
    }, h = (f, p, g, v) => {
      for (let m = 0; m <= Mn; m++) {
        const b = g + (v - g) * (m / Mn);
        u(f + a * Math.cos(b), p + a * Math.sin(b));
      }
    };
    return d(t + a, e, t + n - a, e), h(t + n - a, e + a, -Math.PI / 2, 0), d(t + n, e + a, t + n, e + o - a), h(t + n - a, e + o - a, 0, Math.PI / 2), d(t + n - a, e + o, t + a, e + o), h(t + a, e + o - a, Math.PI / 2, Math.PI), d(t, e + o - a, t, e + a), h(t + a, e + a, Math.PI, 1.5 * Math.PI), r.n = c, r;
  }
  pr(() => {
    x && x.instances.size > 0 && x.pausedAtMs === null && Ae();
  });
  typeof document < "u" && document.addEventListener("visibilitychange", () => {
    !x || x.pausedAtMs !== null || x.contextLost || (document.hidden ? Qn() : x.instances.size > 0 && Ae());
  });
  function yr(t) {
    const e = Kn(), n = t.hostCanvas.getContext("2d", { alpha: true });
    if (!n) throw new Error("metal-fx: canvas 2D context unavailable");
    const o = t.scale ?? 1, a = {
      canvas: t.hostCanvas,
      ctx: n,
      cssWidth: t.cssWidth,
      cssHeight: t.cssHeight,
      cornerRadius: t.cornerRadius,
      kind: t.kind,
      ringCssPx: t.ringCssPx ?? (t.kind === "circle" ? 2 : 1) * o,
      shaderScale: t.shaderScale ?? (t.kind === "circle" ? pa : ma) * o,
      opacityMul: t.opacityMul ?? 1,
      glowGain: t.glowGain ?? 1,
      visible: true,
      paused: t.paused ?? false,
      everCopied: false,
      frozen: null,
      dpr: typeof window < "u" && window.devicePixelRatio || 1,
      scale: o,
      onAfterFrame: t.onAfterFrame,
      onComposite: t.onComposite,
      onFirstCopy: t.onFirstCopy,
      mask: t.mask ?? null,
      deform: null,
      deformLayers: null,
      overscan: 0,
      cursorLight: null,
      glowFast: false,
      rawCanvas: null,
      wantRaw: false,
      ringCanvas: null,
      wantRing: false
    };
    return cn(a), e.instances.add(a), e.rafId === 0 && e.pausedAtMs === null && Ae(), a;
  }
  function Mr(t) {
    if (!x) return;
    x.instances.delete(t);
    const e = x.glowQueue.indexOf(t);
    e !== -1 && x.glowQueue.splice(e, 1), x.instances.size === 0 && (Qn(), xr());
  }
  function _r(t) {
    x && (x.glowQueue.includes(t) || x.glowQueue.push(t));
  }
  function Sr(t) {
    if (!x) return;
    const e = x.glowQueue.indexOf(t);
    e !== -1 && x.glowQueue.splice(e, 1);
  }
  function pe(t, e) {
    let n = false;
    e.mask !== void 0 && (t.mask = e.mask), e.cssWidth !== void 0 && e.cssWidth !== t.cssWidth && (t.cssWidth = e.cssWidth, n = true), e.cssHeight !== void 0 && e.cssHeight !== t.cssHeight && (t.cssHeight = e.cssHeight, n = true), e.cornerRadius !== void 0 && (t.cornerRadius = e.cornerRadius), e.scale !== void 0 && (t.scale = e.scale), e.kind !== void 0 && e.kind !== t.kind && (t.kind = e.kind, e.shaderScale === void 0 && (t.shaderScale = (e.kind === "circle" ? pa : ma) * t.scale), e.ringCssPx === void 0 && (t.ringCssPx = (e.kind === "circle" ? 2 : 1) * t.scale)), e.shaderScale !== void 0 && (t.shaderScale = e.shaderScale), e.ringCssPx !== void 0 && (t.ringCssPx = e.ringCssPx), e.opacityMul !== void 0 && (t.opacityMul = e.opacityMul), e.glowGain !== void 0 && (t.glowGain = e.glowGain), e.paused !== void 0 && e.paused !== t.paused && (t.paused = e.paused, e.paused ? wa(t) : t.frozen = null, !e.paused && x && x.rafId === 0 && x.pausedAtMs === null && !x.contextLost && Ae()), n && cn(t);
  }
  function Rr(t, e) {
    t.visible = e, e && x && x.rafId === 0 && x.pausedAtMs === null && !x.contextLost && Ae();
  }
  function So(t, e, n = null, o = 0) {
    const a = va(t);
    if (!a) return false;
    a.deform = e, a.deformLayers = e ? n : null;
    const i = e ? Math.max(0, Math.round(o)) : 0;
    return i !== a.overscan && (a.overscan = i, cn(a)), un(a), true;
  }
  function Cr(t) {
    return (typeof window < "u" && window.devicePixelRatio || 1) === t.dpr ? false : (cn(t), un(t), true);
  }
  function Tr(t) {
    const e = va(t);
    e && un(e);
  }
  function va(t) {
    if (!x) return null;
    for (const e of x.instances) if (e.canvas === t) return e;
    return null;
  }
  var ba = null;
  function Ar(t, e) {
    const n = Kn();
    n.preset = ba ?? da[t].modes[e], n.presetDirty = true;
  }
  var ie = null;
  function Er(t) {
    ie = t;
  }
  function Sn(t, e) {
    !ie || !x || !t.visible || t.paused || x.glowQueue.includes(t) && (t.glowFast = !!ie(t, e));
  }
  function cn(t) {
    t.dpr = typeof window < "u" && window.devicePixelRatio || 1;
    const e = t.overscan, n = Math.max(1, Math.round((t.cssWidth + 2 * e) * t.dpr)), o = Math.max(1, Math.round((t.cssHeight + 2 * e) * t.dpr));
    t.canvas.width !== n && (t.canvas.width = n), t.canvas.height !== o && (t.canvas.height = o);
    const a = t.canvas.style;
    e > 0 ? (a.left = `${-e}px`, a.top = `${-e}px`, a.width = `calc(100% + ${2 * e}px)`, a.height = `calc(100% + ${2 * e}px)`, a.borderRadius = "0") : a.left !== "" && (a.left = "", a.top = "", a.width = "100%", a.height = "100%", a.borderRadius = "");
  }
  function kr(t) {
    const { ctx: e, dpr: n, canvas: o } = t, a = t.ringCssPx * n, i = o.width, r = o.height, l = Math.max(0, (t.cornerRadius - t.ringCssPx) * n);
    e.save(), e.globalCompositeOperation = "destination-out", e.fillStyle = "#000", e.beginPath(), e.roundRect(a, a, i - 2 * a, r - 2 * a, l), e.fill(), e.restore();
  }
  var Ir = Re();
  function oe(t, e, n, o, a, i, r, l) {
    const { xy: s, n: c } = Ce(e, n, o, a, i, r, Ir);
    t.beginPath();
    for (let u = 0; u < c; u++)
      u === 0 ? t.moveTo(s[0] * l, s[1] * l) : t.lineTo(s[u * 2] * l, s[u * 2 + 1] * l);
    t.closePath();
  }
  function wa(t) {
    if (!x) return null;
    const e = x.frameBitmap ?? x.glCanvas, n = x.glCanvas.width, o = x.glCanvas.height;
    if (n < 1 || o < 1) return null;
    let a = t.frozen;
    a || (a = document.createElement("canvas"), t.frozen = a), (a.width !== n || a.height !== o) && (a.width = n, a.height = o);
    const i = a.getContext("2d");
    return i ? (i.clearRect(0, 0, n, o), i.drawImage(e, 0, 0), a) : (t.frozen = null, null);
  }
  function un(t) {
    var w, M;
    if (!x) return;
    const e = (t.paused ? t.frozen ?? wa(t) : null) ?? x.frameBitmap ?? x.glCanvas, n = t.dpr, o = t.canvas.width, a = t.canvas.height;
    if (o < 1 || a < 1) return;
    const i = Math.max(1, Math.round(t.cssWidth * n)), r = Math.max(1, Math.round(t.cssHeight * n)), l = t.overscan * n, s = e.width, c = e.height, u = fa * n, d = ha * n;
    let h = i * (s / u) / t.shaderScale, f = r * (c / d) / t.shaderScale;
    h > s && (h = s), f > c && (f = c);
    const p = Math.max(0, (s - h) / 2), g = Math.max(0, (c - f) / 2), v = t.opacityMul * x.preset.shaderOpacity, m = t.ctx;
    m.clearRect(0, 0, o, a);
    const b = t.deform;
    if (t.mask) {
      if (v < 1 && (m.globalAlpha = v), m.drawImage(e, p, g, h, f, 0, 0, o, a), v < 1 && (m.globalAlpha = 1), t.wantRaw) {
        let y = t.rawCanvas;
        y || (y = document.createElement("canvas"), t.rawCanvas = y), (y.width !== o || y.height !== a) && (y.width = o, y.height = a);
        const C = y.getContext("2d");
        C && (C.clearRect(0, 0, o, a), C.drawImage(t.canvas, 0, 0));
      }
      m.save(), m.globalCompositeOperation = "destination-in", m.fillStyle = "#000", t.mask(m, o, a, n), m.restore(), m.globalCompositeOperation = "source-over";
    } else if (!b)
      v < 1 && (m.globalAlpha = v), m.drawImage(e, p, g, h, f, 0, 0, o, a), v < 1 && (m.globalAlpha = 1), kr(t);
    else {
      const y = t.cssWidth, C = t.cssHeight, N = t.cornerRadius, E = t.ringCssPx, P = t.deformLayers;
      m.save(), m.translate(l, l);
      const G = i / h, at = r / f, F = Math.min(s, h * (i + 2 * l) / i), S = Math.min(c, f * (r + 2 * l) / r), B = Math.max(0, (s - F) / 2), K = Math.max(0, (c - S) / 2), nt = F * G, U = S * at;
      if (v < 1 && (m.globalAlpha = v), m.drawImage(e, B, K, F, S, i / 2 - nt / 2, r / 2 - U / 2, nt, U), v < 1 && (m.globalAlpha = 1), m.globalCompositeOperation = "destination-in", oe(m, 0, 0, y, C, N, b, n), m.fillStyle = "#000", m.fill(), m.globalCompositeOperation = "destination-out", oe(m, E, E, y - 2 * E, C - 2 * E, Math.max(0, N - E), b, n), m.fill(), t.wantRing) {
        let _ = t.ringCanvas;
        _ || (_ = document.createElement("canvas"), t.ringCanvas = _), (_.width !== o || _.height !== a) && (_.width = o, _.height = a);
        const T = _.getContext("2d");
        T && (T.setTransform(1, 0, 0, 1, 0, 0), T.globalCompositeOperation = "source-over", T.clearRect(0, 0, o, a), T.translate(l, l), v < 1 && (T.globalAlpha = v), T.drawImage(e, B, K, F, S, i / 2 - nt / 2, r / 2 - U / 2, nt, U), T.globalAlpha = 1, T.globalCompositeOperation = "destination-out", oe(T, E, E, y - 2 * E, C - 2 * E, Math.max(0, N - E), b, n), T.fillStyle = "#000", T.fill(), T.globalCompositeOperation = "source-over", T.setTransform(1, 0, 0, 1, 0, 0));
      }
      if (P != null && P.hairline) {
        const _ = P.hairline;
        m.globalCompositeOperation = "destination-over", oe(m, _.inset, _.inset, y - 2 * _.inset, C - 2 * _.inset, Math.max(0, N - _.inset), b, n), m.lineWidth = _.width * n, m.strokeStyle = _.color, m.stroke();
      }
      if (P != null && P.fill && (m.globalCompositeOperation = "destination-over", oe(m, 0, 0, y, C, N, b, n), m.fillStyle = P.fill, m.fill()), P != null && P.rim) {
        const _ = P.rim;
        m.globalCompositeOperation = "source-over", m.save(), oe(m, 0, 0, y, C, N, b, n), m.clip();
        const T = _.inset + _.width / 2;
        oe(m, T, T, y - 2 * T, C - 2 * T, Math.max(0, N - T), b, n), m.lineWidth = _.width * n, m.strokeStyle = _.color, m.stroke(), m.restore();
      }
      m.restore(), m.globalCompositeOperation = "source-over";
    }
    if ((w = t.onComposite) == null || w.call(t), t.onFirstCopy) {
      const y = t.onFirstCopy;
      t.onFirstCopy = void 0, y();
    }
    (M = t.onAfterFrame) == null || M.call(t);
  }
  function Or() {
    if (!x) return;
    const { gl: t, uniforms: e, preset: n, glCanvas: o, dpr: a } = x;
    e.u_resolution && t.uniform2f(e.u_resolution, o.width, o.height), e.u_pixelRatio && t.uniform1f(e.u_pixelRatio, a), e.u_colorBack && t.uniform4fv(e.u_colorBack, vo(n.colorBack)), e.u_colorTint && t.uniform4fv(e.u_colorTint, vo(n.colorTint)), e.u_repetition && t.uniform1f(e.u_repetition, n.repetition), e.u_softness && t.uniform1f(e.u_softness, n.softness), e.u_shiftRed && t.uniform1f(e.u_shiftRed, n.shiftRed), e.u_shiftBlue && t.uniform1f(e.u_shiftBlue, n.shiftBlue), e.u_distortion && t.uniform1f(e.u_distortion, n.distortion), e.u_contour && t.uniform1f(e.u_contour, n.contour), e.u_angle && t.uniform1f(e.u_angle, n.angle), e.u_shape && t.uniform1f(e.u_shape, n.shape), e.u_isImage && t.uniform1i(e.u_isImage, 0), e.u_imageAspectRatio && t.uniform1f(e.u_imageAspectRatio, 1), e.u_originX && t.uniform1f(e.u_originX, n.originX), e.u_originY && t.uniform1f(e.u_originY, n.originY), e.u_worldWidth && t.uniform1f(e.u_worldWidth, n.worldWidth), e.u_worldHeight && t.uniform1f(e.u_worldHeight, n.worldHeight), e.u_fit && t.uniform1f(e.u_fit, n.fit), e.u_scale && t.uniform1f(e.u_scale, n.scale), e.u_rotation && t.uniform1f(e.u_rotation, n.rotation), e.u_offsetX && t.uniform1f(e.u_offsetX, n.offsetX), e.u_offsetY && t.uniform1f(e.u_offsetY, n.offsetY), x.presetDirty = false;
  }
  function Lr(t) {
    if (!x) return;
    const { gl: e, uniforms: n, preset: o, glCanvas: a } = x, i = (t - x.startMs - x.pausedMs) / 1e3 * o.speed;
    e.viewport(0, 0, a.width, a.height), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), x.presetDirty && Or(), n.u_time && e.uniform1f(n.u_time, i), e.drawArrays(e.TRIANGLES, 0, 6), x.frameCount++;
  }
  var Ro = 0;
  function ya(t) {
    var n;
    if (!x) return;
    if (x.contextLost) {
      x.rafId = 0;
      return;
    }
    let e = false;
    for (const o of x.instances)
      if (o.visible && (!o.paused || !o.everCopied)) {
        e = true;
        break;
      }
    if (!e) {
      x.rafId = 0;
      return;
    }
    if (x.rafId = requestAnimationFrame(ya), t - Ro < qa) {
      if (ie)
        for (const o of x.glowQueue)
          o.glowFast && o.visible && !o.paused && (o.glowFast = !!ie(o, t));
      return;
    }
    Ro = t, Lr(t), vr(), x.useOffscreen && ((n = x.frameBitmap) == null || n.close(), x.frameBitmap = x.glCanvas.transferToImageBitmap());
    for (const o of x.instances)
      o.visible && (o.paused && o.everCopied || (un(o), o.everCopied = true));
    if (ie && x.glowQueue.length > 0 && ++x.glowSkip % Za === 0)
      for (const o of x.glowQueue)
        o.visible && !o.paused && (o.glowFast = !!ie(o, t));
  }
  function Ae() {
    !x || x.rafId !== 0 || (x.rafId = requestAnimationFrame(ya));
  }
  function Qn() {
    x && (x.rafId !== 0 && cancelAnimationFrame(x.rafId), x.rafId = 0);
  }
  var Bn = {
    linear: (t) => t,
    smoothstep: (t) => t * t * (3 - 2 * t)
  };
  function Oe(t, e, n, o = Bn.linear) {
    return { from: t, to: e, dur: n, ease: o, startMs: -1, val: t, done: false };
  }
  function Le(t, e) {
    t.startMs = e, t.val = t.from, t.done = false;
  }
  function Co(t, e) {
    if (t.done || t.startMs < 0) return t.val;
    const n = Math.min(1, (e - t.startMs) / t.dur);
    return t.val = t.from + (t.to - t.from) * t.ease(n), n >= 1 && (t.done = true), t.val;
  }
  var Ma = Object.freeze({
    haloOpMul: 2,
    extraIntensity: 3.51,
    peakOp: 0.85,
    baseOp: 0.34,
    inset: 1.5,
    extraOutward: 1,
    wanderRange: 15,
    wanderLerp: 75e-4,
    fadeRate: 875e-5,
    lumLo: 0.08,
    lumHi: 0.32,
    minDwellMs: 1500,
    relocFadeMs: 300,
    relocFadeOutMs: 450,
    pointGain: 2.5,
    haloHalfLen: 7.8,
    extraHalfLen: 9.13952 / 3,
    haloStrokeXl: 26.4,
    haloStrokeLg: 15.6,
    haloStrokeMd: 7.2,
    haloStrokeSm: 3,
    haloBlurXl: 8.4,
    haloBlurLg: 4.8,
    haloBlurMd: 2.1,
    haloBlurSm: 0.9,
    haloOpXl: 0.385,
    haloOpLg: 0.595,
    haloOpMd: 0.7,
    haloOpSm: 0.7,
    extraStrokeOuter: 4 / 3,
    extraStrokeCore: 2 / 3,
    extraBlurOuter: 2 / 3,
    extraBlurCore: 1.35 / 3,
    extraFadeR: 13 / 3,
    extraOpOuter: 0.85
  });
  var A = { ...Ma };
  var Pn = /* @__PURE__ */ new Set();
  function Pr(t) {
    return Pn.add(t), () => {
      Pn.delete(t);
    };
  }
  var _a = Object.freeze({
    enabled: true,
    reach: 56,
    fadeMs: 200,
    cursor: true,
    cursorDistance: 186,
    cursorStrength: 3.35,
    cursorDiffuse: 1.4,
    cursorFalloff: 37,
    cursorDepth: 0.4,
    cursorEdge: 0,
    cursorReach: 11.5,
    cursorBlur: 0.5,
    cursorZoom: 3,
    spill: false,
    spillRadius: 48,
    spillStrength: 0.55,
    spillOffset: 0.35,
    spillLumGain: 0.7,
    spillSaturation: 1.3,
    spillInside: 0.5,
    spillBlur: 0,
    catchLight: false,
    catchFollow: 0.25,
    catchGain: 1
  });
  var Yt = { ..._a };
  function Nr(t) {
    Object.assign(Yt, t), !Yt.spill && kt && on(), Yt.cursor || Dt(), dn();
  }
  var Qt = null;
  var _e = null;
  var Nn = 0;
  function Ur() {
    const t = window.devicePixelRatio || 1;
    return Nn > 0 ? Nn / t : 1;
  }
  function Sa(t, e) {
    if (!Rt || !Qt) return;
    const n = Ur(), o = (t - Qt.hotX * n).toFixed(2), a = (e - Qt.hotY * n).toFixed(2);
    Rt.style.transform = n === 1 ? `translate3d(${o}px,${a}px,0)` : `translate3d(${o}px,${a}px,0) scale(${n.toFixed(4)})`;
  }
  var Zn = false;
  var Jn = 0;
  var Be = 0;
  var ye = null;
  var jt = { x: 0, y: 0 };
  var Pe = null;
  var To = 0;
  function Dr(t, e, n, o, a) {
    if (Pe && To === n && Pe.length === o * a) return Pe;
    const i = document.createElement("canvas");
    i.width = o, i.height = a;
    const r = i.getContext("2d", { willReadFrequently: true });
    if (!r) return null;
    r.scale(n, n), r.drawImage(t, 0, 0, e.width, e.height);
    const l = r.getImageData(0, 0, o, a).data, s = new Uint8ClampedArray(o * a);
    for (let c = 0, u = 3; c < s.length; c++, u += 4) s[c] = l[u] >= 128 ? 255 : 0;
    return Pe = s, To = n, s;
  }
  function Ao(t, e, n, o) {
    const a = t.getImageData(0, 0, e, n), i = a.data;
    for (let r = 0, l = 0, s = 3; r < n; r++)
      for (let c = 0; c < e; c++, l++, s += 4) {
        const u = i[s];
        if (u === 0) continue;
        const d = o(c, r, l);
        i[s] = d >= 1 ? u : d <= 0 ? 0 : u * d;
      }
    t.putImageData(a, 0, 0);
  }
  function zr(t, e) {
    if (!ye) return 0;
    let n = -1 / 0;
    for (let o = 0; o < ye.length; o += 2) {
      const a = ye[o] * t + ye[o + 1] * e;
      a > n && (n = a);
    }
    return n === -1 / 0 ? 0 : n;
  }
  var De = 0;
  var Te = false;
  var se = 0;
  var Un = 0;
  var Et = Number.NaN;
  var qt = Number.NaN;
  var Ge = 0;
  var We = 0;
  var ae = 0;
  var re = 0;
  var it = null;
  var X = { d: 0, nx: 0, ny: 0, k: 1, left: 0, top: 0 };
  var Rn = { x: 0, y: 0 };
  var Pt = { r: 255, g: 255, b: 255 };
  var kt = null;
  var Dn = "";
  var Hn = -1;
  var zn = -1;
  var Ve = false;
  function Gr() {
    De++, Vr();
  }
  function Wr() {
    De = Math.max(0, De - 1), De === 0 && $r();
  }
  var Ne = (t) => typeof window.matchMedia == "function" && window.matchMedia(t).matches;
  function Eo() {
    if (Zn || performance.now() < Jn || !Qt || !_e || Ne("(prefers-reduced-motion: reduce)") || Ne("(forced-colors: active)") || !Ne("(pointer: fine)") || !Ne("(hover: hover)")) return false;
    const t = window.visualViewport;
    return !(t && Math.abs(t.scale - 1) > 1e-3);
  }
  function Vr() {
    Te || De === 0 || typeof document > "u" || Ne("(pointer: fine)") && (Te = true, document.addEventListener("pointermove", Ra, { passive: true }), document.addEventListener("pointerleave", Kt), document.addEventListener("pointercancel", Kt), document.addEventListener("keydown", Ca, { passive: true }), document.addEventListener("visibilitychange", Kt), window.addEventListener("blur", Kt));
  }
  function $r() {
    Te && (Te = false, document.removeEventListener("pointermove", Ra), document.removeEventListener("pointerleave", Kt), document.removeEventListener("pointercancel", Kt), document.removeEventListener("keydown", Ca), document.removeEventListener("visibilitychange", Kt), window.removeEventListener("blur", Kt), se !== 0 && (cancelAnimationFrame(se), se = 0), it && (it.cursorLight = null, it = null), ae = 0, re = 0, kt && (kt.remove(), kt = null, Dn = "", Hn = -1, zn = -1, Ve = false), Dt(), Rt && (Rt.remove(), Rt = null));
  }
  var Gn = true;
  var to = false;
  function Ra(t) {
    Gn = t.pointerType === "mouse" || t.pointerType === "", to = false, Et = Ge = t.clientX, qt = We = t.clientY, $e && Rt && (Gn && Ta(Et, qt) ? Sa(Et, qt) : Dt()), dn();
  }
  function Ca() {
    to = true, Dt();
  }
  function Kt() {
    Et = qt = Number.NaN, dn();
  }
  function dn() {
    !Te || se !== 0 || (Un = performance.now(), se = requestAnimationFrame(Aa));
  }
  function Xr(t, e, n, o, a, i, r) {
    const l = i === "circle" ? Math.min(n, o) / 2 : Math.max(0, Math.min(a, Math.min(n, o) / 2)), s = n / 2, c = o / 2, u = Math.max(0, n / 2 - l), d = Math.max(0, o / 2 - l), h = Math.max(-u, Math.min(u, t - s)), f = Math.max(-d, Math.min(d, e - c)), p = t - s - h, g = e - c - f, v = Math.hypot(p, g);
    if (v > 1e-6)
      return r.x = s + h + p / v * l, r.y = c + f + g / v * l, v - l;
    const m = t, b = n - t, w = e, M = o - e, y = Math.min(m, b, w, M);
    return y === m ? (r.x = 0, r.y = e) : y === b ? (r.x = n, r.y = e) : y === w ? (r.x = t, r.y = 0) : (r.x = t, r.y = o), -y;
  }
  var Rt = null;
  var $t = null;
  var Wn = null;
  var gt = null;
  var Ue = null;
  var ko = false;
  var Io = 0;
  var Oo = 0;
  var Lo = 0;
  var $e = false;
  var Me = false;
  var Vn = "";
  var Ut = null;
  var He = "";
  var Yr = /^(INPUT|TEXTAREA|SELECT)$/;
  var $n = /* @__PURE__ */ new WeakMap();
  var Fo = 0;
  var Xn = null;
  function jr(t) {
    let e = t;
    for (; e && e !== document.body; ) {
      if (Yr.test(e.tagName) || e.isContentEditable) return true;
      e = e.parentElement;
    }
    return false;
  }
  function qr() {
    if (Rt) return true;
    const t = document.createElement("div");
    t.className = "metal-fx-cursor", t.setAttribute("aria-hidden", "true"), t.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";
    const e = document.createElement("canvas");
    e.style.display = "block", t.appendChild(e), document.body.appendChild(t);
    const n = e.getContext("2d"), o = document.createElement("canvas"), a = o.getContext("2d");
    return !n || !a ? (t.remove(), false) : (Rt = t, $t = e, Wn = n, gt = o, Ue = a, true);
  }
  function Ta(t, e, n = false) {
    const o = performance.now();
    if (!n && Me && o - Fo < 12) return true;
    Fo = o;
    const a = document.elementFromPoint(t, e);
    if (!a)
      return Yn(), false;
    if (a === Xn && Me) return true;
    Xn = a;
    let i = $n.get(a);
    if (i === void 0) {
      if (i = !jr(a), i) {
        const r = getComputedStyle(a).cursor;
        i = r === "auto" || r === "default" || r === "none";
      }
      $n.set(a, i);
    }
    if (!i)
      return Yn(), false;
    if (!Me) {
      const r = document.documentElement;
      Vn = r.style.cursor, r.style.cursor = "none", Me = true;
    }
    return a !== Ut && (Ut && (Ut.style.cursor = He, Ut = null, He = ""), getComputedStyle(a).cursor !== "none" && (Ut = a, He = a.style.cursor, a.style.cursor = "none")), true;
  }
  function Yn() {
    Ut && (Ut.isConnected && (Ut.style.cursor = He), Ut = null, He = ""), Me && (document.documentElement.style.cursor = Vn, Me = false, Vn = ""), Xn = null, $n = /* @__PURE__ */ new WeakMap();
  }
  function Dt() {
    Yn(), Rt && $e && (Rt.style.display = "none", $e = false);
  }
  function Kr(t, e, n) {
    if (!Wn || !Ue || !$t || !gt || !Rt || !Qt || !_e) return;
    const o = Qt, a = Math.min(3, window.devicePixelRatio || 1);
    if ((a !== Io || o.width !== Oo || o.height !== Lo) && (Io = a, Oo = o.width, Lo = o.height, $t.width = gt.width = Math.ceil(o.width * a), $t.height = gt.height = Math.ceil(o.height * a), $t.style.width = `${o.width}px`, $t.style.height = `${o.height}px`), !ko && (Ue = gt.getContext("2d", { willReadFrequently: true }), ko = true, !Ue))
      return;
    const i = Wn, r = Ue, l = o.width, s = o.height;
    i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, $t.width, $t.height), i.scale(a, a), i.drawImage(_e, 0, 0, l, s);
    const c = X.left + X.nx * X.k, u = X.top + X.ny * X.k, d = Ge - o.hotX + jt.x, h = We - o.hotY + jt.y, f = c - d, p = u - h, g = Math.hypot(f, p), v = g > 0.01 ? f / g : 1, m = g > 0.01 ? p / g : 0, b = zr(v, m) + e.cursorEdge, w = Math.max(0, g - b), M = Math.max(1, e.cursorFalloff), y = 1 / (1 + w / M * (w / M)), C = t.cssWidth / 2, N = t.cssHeight / 2, E = C - X.nx, P = N - X.ny, G = Math.hypot(E, P) || 1, at = t.mask ? 0 : t.ringCssPx * 0.5 + 1, F = X.nx + E / G * at, S = X.ny + P / G * at, B = wr(t, F, S, 4), K = B.lum, nt = B.r, U = B.g, _ = B.b, T = e.cursorStrength * y * n, V = e.cursorDiffuse * y * (0.5 + 0.5 * Math.min(1, K / 0.5)) * n;
    if (g > 0.01 && T + V > 5e-3) {
      const Z = f / g, Y = p / g, ut = Math.atan2(Y, Z), L = Math.max(0.1, Math.min(1, e.cursorDepth)), O = jt.x + b * Z, D = jt.y + b * Y, $ = Math.max(1, e.cursorReach);
      if (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, gt.width, gt.height), r.scale(a, a), T > 5e-3) {
        r.save(), r.filter = e.cursorBlur > 0 ? `blur(${e.cursorBlur}px)` : "none";
        const et = Math.max(1, e.cursorZoom);
        r.translate(O, D), r.rotate(ut), r.scale(-1, 1), r.translate((g - b) * L, 0), r.rotate(-ut), r.scale(et, et);
        const rt = t.overscan, st = X.k, dt = Math.max(1, Math.ceil(T));
        r.globalAlpha = Math.min(1, T / dt), r.globalCompositeOperation = "lighter";
        const ct = t.mask && t.rawCanvas ? t.rawCanvas : t.canvas;
        for (let H = 0; H < dt; H++)
          r.drawImage(ct, -(X.nx + rt) * st, -(X.ny + rt) * st, (t.cssWidth + 2 * rt) * st, (t.cssHeight + 2 * rt) * st);
        r.restore();
        const ot = 1 / a, k = 1 / $;
        Ao(r, gt.width, gt.height, (H, Q) => {
          const q2 = -(((H + 0.5) * ot - O) * Z + ((Q + 0.5) * ot - D) * Y);
          return q2 <= 0 ? 1 : 1 - q2 * k;
        });
      }
      if (V > 5e-3) {
        const et = Math.max(nt, U, _) || 1, rt = Math.round(nt * 255 / et), st = Math.round(U * 255 / et), dt = Math.round(_ * 255 / et), ct = $ * 1.2, ot = r.createLinearGradient(O + 0.5 * Z, D + 0.5 * Y, O - ct * Z, D - ct * Y), k = Math.min(1, V);
        ot.addColorStop(0, `rgba(${rt},${st},${dt},${k.toFixed(3)})`), ot.addColorStop(0.45, `rgba(${rt},${st},${dt},${(k * 0.4).toFixed(3)})`), ot.addColorStop(1, `rgba(${rt},${st},${dt},0)`), r.globalCompositeOperation = "lighter", r.fillStyle = ot, r.fillRect(0, 0, l, s), r.globalCompositeOperation = "source-over";
      }
      const W = Dr(_e, o, a, gt.width, gt.height);
      W && Ao(r, gt.width, gt.height, (et, rt, st) => W[st] === 0 ? 0 : 1), i.globalCompositeOperation = "lighter", i.drawImage(gt, 0, 0, l, s), i.globalCompositeOperation = "source-over";
    }
    Sa(Ge, We), $e || (Rt.style.display = "", $e = true);
  }
  function Qr() {
    if (kt) return kt;
    const t = document.createElement("div");
    return t.className = "metal-fx-cursor-spill", t.setAttribute("aria-hidden", "true"), t.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none", document.body.appendChild(t), kt = t, t;
  }
  function on() {
    !kt || !Ve || (kt.style.display = "none", kt.style.opacity = "0", Ve = false);
  }
  function Aa(t) {
    if (se = 0, !Te) return;
    const e = performance.now();
    try {
      Zr(t);
    } catch (o) {
      Zn = true, Dt(), on(), it && (it.cursorLight = null, it = null), typeof console < "u" && console.warn("metal-fx: cursor light disabled after error", o);
      return;
    }
    performance.now() - e > 6 ? ++Be >= 20 && (Be = 0, Jn = performance.now() + 5e3, Dt()) : Be > 0 && Be--;
  }
  function Zr(t) {
    const e = Yt, n = Math.min(0.05, Math.max(1e-3, (t - Un) / 1e3));
    Un = t;
    let o = null, a = 0, i = 0;
    if (e.enabled && x && !Number.isNaN(Et)) {
      let l = Number.POSITIVE_INFINITY;
      const s = Math.max(1, e.reach), c = e.cursor && Eo() ? Math.max(1, e.cursorDistance) : 0, u = Math.max(s, c);
      for (const d of x.instances) {
        if (!d.visible || !d.canvas.isConnected) continue;
        const h = d.canvas.getBoundingClientRect();
        if (h.width <= 0) continue;
        const f = d.overscan, p = h.width / (d.cssWidth + 2 * f), g = h.left + f * p, v = h.top + f * p, m = u * p;
        if (Et < g - m || Et > g + d.cssWidth * p + m || qt < v - m || qt > v + d.cssHeight * p + m) continue;
        const b = (Et - g) / p, w = (qt - v) / p, M = Xr(b, w, d.cssWidth, d.cssHeight, d.cornerRadius, d.kind, Rn), y = Math.abs(M);
        y <= u && y < l && (l = y, o = d, X.d = M, X.nx = Rn.x, X.ny = Rn.y, X.k = p, X.left = g, X.top = v);
      }
      if (o) {
        if (l <= s) {
          const d = 1 - l / s;
          a = d * d * (3 - 2 * d);
        }
        l <= c && (i = Math.min(1, (1 - l / c) * 3)), o.mask && (X.nx = o.cssWidth / 2, X.ny = o.cssHeight / 2, o.wantRaw = true);
      }
    }
    const r = 1 - Math.exp(-(n * 1e3) / (Math.max(1, e.fadeMs) / 3));
    if (ae += (a - ae) * r, re += (i - re) * r, o && o !== it && (it && (it.cursorLight = null, Sn(it, t)), it = o), !o && ae < 2e-3 && re < 2e-3) {
      ae = 0, re = 0, it && (it.cursorLight = null, Sn(it, t), it = null), on(), Dt();
      return;
    }
    if (it) {
      if (e.catchLight) {
        const l = it.cursorLight ?? (it.cursorLight = { x: 0, y: 0, w: 0 });
        l.x = X.nx, l.y = X.ny, l.w = ae;
      } else it.cursorLight && (it.cursorLight = null);
      if (Sn(it, t), e.cursor && re > 2e-3 && Gn && !to && !Number.isNaN(Et) && Eo() && qr() && Ta(Et, qt) ? Kr(it, e, re) : Dt(), e.spill) {
        const l = Qr(), s = xa(it, X.nx, X.ny, 2), c = Fn(it, X.nx, X.ny, 3), u = Math.max(s.r, s.g, s.b) || 1, d = ca(s.r * 255 / u, s.g * 255 / u, s.b * 255 / u), [h, f, p] = ua(d[0], Math.min(1, d[1] * e.spillSaturation), 1);
        Pt.r += (h - Pt.r) * 0.15, Pt.g += (f - Pt.g) * 0.15, Pt.b += (p - Pt.b) * 0.15;
        const g = Math.round(Pt.r / 6) * 6, v = Math.round(Pt.g / 6) * 6, m = Math.round(Pt.b / 6) * 6, b = `radial-gradient(closest-side, rgba(${g},${v},${m},1) 0%, rgba(${g},${v},${m},0.35) 45%, rgba(${g},${v},${m},0) 100%)`;
        b !== Dn && (Dn = b, l.style.background = b);
        const w = Math.max(1, e.spillRadius * X.k);
        w !== Hn && (Hn = w, l.style.width = `${(2 * w).toFixed(1)}px`, l.style.height = `${(2 * w).toFixed(1)}px`), e.spillBlur !== zn && (zn = e.spillBlur, l.style.filter = e.spillBlur > 0 ? `blur(${e.spillBlur}px)` : "");
        const M = X.left + X.nx * X.k, y = X.top + X.ny * X.k, C = Ge + (M - Ge) * e.spillOffset, N = We + (y - We) * e.spillOffset;
        l.style.transform = `translate3d(${(C - w).toFixed(2)}px,${(N - w).toFixed(2)}px,0)`;
        const E = Math.min(1, Math.max(0, c / 0.3)), P = 1 - e.spillLumGain + e.spillLumGain * E, G = X.d < 0 ? e.spillInside : 1, at = Math.max(0, Math.min(1, e.spillStrength * ae * P * G));
        Ve || (l.style.display = "", Ve = true), l.style.opacity = at.toFixed(3);
      } else
        on();
      se = requestAnimationFrame(Aa);
    }
  }
  var an = /* @__PURE__ */ new Map();
  function Jr(t, e) {
    const n = Math.sqrt(12 * t * t / e + 1);
    let o = Math.floor(n);
    o % 2 === 0 && o--;
    const a = o + 2, i = (12 * t * t - e * o * o - 4 * e * o - 3 * e) / (-4 * o - 4), r = Math.round(i), l = [];
    for (let s = 0; s < e; s++) l.push(s < r ? o : a);
    return l;
  }
  function ti(t, e, n, o, a) {
    const i = 1 / (a + a + 1);
    for (let r = 0; r < o; r++) {
      const l = r * n;
      let s = 0;
      for (let c = -a; c <= a; c++) s += t[l + Math.min(n - 1, Math.max(0, c))];
      for (let c = 0; c < n; c++) {
        e[l + c] = s * i;
        const u = l + Math.max(0, c - a), d = l + Math.min(n - 1, c + a + 1);
        s += t[d] - t[u];
      }
    }
  }
  function ei(t, e, n, o, a) {
    const i = 1 / (a + a + 1);
    for (let r = 0; r < n; r++) {
      let l = 0;
      for (let s = -a; s <= a; s++) l += t[Math.min(o - 1, Math.max(0, s)) * n + r];
      for (let s = 0; s < o; s++) {
        e[s * n + r] = l * i;
        const c = Math.max(0, s - a) * n + r, u = Math.min(o - 1, s + a + 1) * n + r;
        l += t[u] - t[c];
      }
    }
  }
  function fn(t, e, n, o) {
    if (o <= 0.05) return t;
    const a = new Float32Array(t.length);
    let i = t;
    for (const r of Jr(o, 3)) {
      const l = (r - 1) / 2;
      ti(i, a, e, n, l), ei(a, i, e, n, l);
    }
    return i;
  }
  function ni(t, e, n, o, a, i, r) {
    const l = document.createElement("canvas");
    l.width = n, l.height = o;
    const s = l.getContext("2d", { willReadFrequently: true }), c = new Float32Array(n * o);
    if (!s) return c;
    s.scale(a, a), s.strokeStyle = "#fff", s.lineCap = "round", s.lineJoin = "round", s.lineWidth = e, s.beginPath(), s.moveTo(i - t, r), s.lineTo(i + t, r), s.stroke();
    const u = s.getImageData(0, 0, n, o).data;
    for (let d = 0, h = 3; d < c.length; d++, h += 4) c[d] = u[h] / 255;
    return c;
  }
  function Ea(t, e, n, o, a) {
    let i = 0;
    for (const g of t) i = Math.max(i, (g.stroke / 2 + 3 * g.blur) * n);
    const r = Math.ceil(i) + 1, l = 2 * e + 2 * r, s = 2 * r, c = Math.ceil(l * o), u = Math.ceil(s * o), d = new Float32Array(c * u);
    for (const g of t) {
      let v = ni(e, g.stroke * n, c, u, o, r, r);
      v = fn(v, c, u, g.blur * n * o);
      const m = g.opacity;
      for (let b = 0; b < d.length; b++) {
        const w = v[b] * m;
        d[b] = d[b] + w * (1 - d[b]);
      }
    }
    if (a > 0) {
      const g = r * o, v = r * o, m = a * n * o;
      for (let b = 0; b < u; b++) for (let w = 0; w < c; w++) {
        const M = Math.hypot(w + 0.5 - g, b + 0.5 - v) / m;
        let y;
        M <= 0.3 ? y = 1 : M <= 0.65 ? y = 1 - (M - 0.3) / 0.35 * 0.75 : M < 1 ? y = 0.25 * (1 - (M - 0.65) / 0.35) : y = 0, d[b * c + w] *= y;
      }
    }
    const h = document.createElement("canvas");
    h.width = c, h.height = u;
    const f = h.getContext("2d"), p = new Uint8ClampedArray(c * u);
    for (let g = 0; g < d.length; g++) p[g] = Math.round(Math.min(1, d[g]) * 255);
    if (f) {
      const g = f.createImageData(c, u), v = g.data;
      for (let m = 0, b = 0; m < d.length; m++, b += 4)
        v[b] = 255, v[b + 1] = 255, v[b + 2] = 255, v[b + 3] = p[m];
      f.putImageData(g, 0, 0);
    }
    return { canvas: h, alpha: p, w: l, h: s, ax: r, ay: r };
  }
  function ka() {
    return [
      A.haloStrokeXl,
      A.haloStrokeLg,
      A.haloStrokeMd,
      A.haloStrokeSm,
      A.haloBlurXl,
      A.haloBlurLg,
      A.haloBlurMd,
      A.haloBlurSm,
      A.haloOpXl,
      A.haloOpLg,
      A.haloOpMd,
      A.haloOpSm,
      A.extraStrokeOuter,
      A.extraStrokeCore,
      A.extraBlurOuter,
      A.extraBlurCore,
      A.extraFadeR,
      A.extraOpOuter
    ].join(",");
  }
  function oi(t, e, n) {
    const o = `h|${t.toFixed(2)}|${e}|${n}|${ka()}`;
    let a = an.get(o);
    return a || (a = Ea([
      { stroke: A.haloStrokeXl, blur: A.haloBlurXl, opacity: A.haloOpXl },
      { stroke: A.haloStrokeLg, blur: A.haloBlurLg, opacity: A.haloOpLg },
      { stroke: A.haloStrokeMd, blur: A.haloBlurMd, opacity: A.haloOpMd },
      { stroke: A.haloStrokeSm, blur: A.haloBlurSm, opacity: A.haloOpSm }
    ], t, e, n, 0), an.set(o, a)), a;
  }
  function ai(t, e, n) {
    const o = `e|${t.toFixed(2)}|${e}|${n}|${ka()}`;
    let a = an.get(o);
    return a || (a = Ea([
      { stroke: A.extraStrokeOuter, blur: A.extraBlurOuter, opacity: A.extraOpOuter },
      { stroke: A.extraStrokeCore, blur: A.extraBlurCore, opacity: 1 }
    ], t, e, n, A.extraFadeR), an.set(o, a)), a;
  }
  function Bo(t, e, n, o, a) {
    var c;
    const i = e << 16 | n << 8 | o;
    if (a.canvas && a.tint === i && a.src === t) return a.canvas;
    let r = a.canvas, l = a.img;
    (!r || !l || a.src !== t) && (r = document.createElement("canvas"), r.width = t.canvas.width, r.height = t.canvas.height, l = ((c = r.getContext("2d")) == null ? void 0 : c.createImageData(r.width, r.height)) ?? null);
    const s = r.getContext("2d");
    if (s && l) {
      const u = l.data, d = t.alpha;
      for (let h = 0, f = 0; h < d.length; h++, f += 4)
        u[f] = e, u[f + 1] = n, u[f + 2] = o, u[f + 3] = d[h];
      s.putImageData(l, 0, 0);
    }
    return a.canvas = r, a.img = l, a.tint = i, a.src = t, r;
  }
  function eo(t, e, n) {
    const o = Math.max(0, Math.min(n, Math.min(t, e) / 2));
    return 2 * Math.max(0, t - 2 * o) + 2 * Math.max(0, e - 2 * o) + 2 * Math.PI * o;
  }
  function rn(t, e, n, o) {
    return o === "circle" ? 2 * Math.PI * Math.max(0, Math.min(n, Math.min(t, e) / 2)) : eo(t, e, n);
  }
  function Xe(t, e, n, o, a, i, r, l) {
    const s = l || { x: 0, y: 0 }, c = Math.max(0, Math.min(o, Math.min(e, n) / 2));
    if (r === "circle") {
      const m = 2 * Math.PI * c;
      if (m <= 1e-4)
        return s.x = e * 0.5, s.y = n * 0.5, s;
      t = (t % m + m) % m;
      const b = -Math.PI / 2 + t / m * Math.PI * 2, w = Math.max(0, c - a + i);
      return s.x = e * 0.5 + w * Math.cos(b), s.y = n * 0.5 + w * Math.sin(b), s;
    }
    const u = Math.max(0, e - 2 * c), d = Math.max(0, n - 2 * c), h = Math.PI * c / 2, f = 2 * (u + d) + 4 * h;
    t = (t % f + f) % f;
    const p = Math.max(0, c - a + i);
    let g = t;
    if (g < u)
      return s.x = c + g, s.y = a - i, s;
    if (g -= u, g < h) {
      const m = -Math.PI / 2 + (h > 0 ? g / h : 0) * (Math.PI / 2);
      return s.x = e - c + p * Math.cos(m), s.y = c + p * Math.sin(m), s;
    }
    if (g -= h, g < d)
      return s.x = e - a + i, s.y = c + g, s;
    if (g -= d, g < h) {
      const m = (h > 0 ? g / h : 0) * (Math.PI / 2);
      return s.x = e - c + p * Math.cos(m), s.y = n - c + p * Math.sin(m), s;
    }
    if (g -= h, g < u)
      return s.x = e - c - g, s.y = n - a + i, s;
    if (g -= u, g < h) {
      const m = Math.PI / 2 + (h > 0 ? g / h : 0) * (Math.PI / 2);
      return s.x = c + p * Math.cos(m), s.y = n - c + p * Math.sin(m), s;
    }
    if (g -= h, g < d)
      return s.x = a - i, s.y = n - c - g, s;
    g -= d;
    const v = Math.PI + (h > 0 ? g / h : 0) * (Math.PI / 2);
    return s.x = c + p * Math.cos(v), s.y = c + p * Math.sin(v), s;
  }
  function ri(t, e, n, o, a, i) {
    const r = Math.max(0, Math.min(a, Math.min(n, o) / 2));
    if (i === "circle") {
      const y = 2 * Math.PI * r;
      return y <= 1e-4 ? 0 : ((Math.atan2(e - o / 2, t - n / 2) + Math.PI / 2) / (2 * Math.PI) * y % y + y) % y;
    }
    const l = Math.max(0, n - 2 * r), s = Math.max(0, o - 2 * r), c = Math.PI * r / 2, u = Math.PI / 2, d = l, h = d + c, f = h + s, p = f + c, g = p + l, v = g + c, m = v + s, b = t >= r && t <= n - r, w = e >= r && e <= o - r;
    if (b && w) {
      const y = t, C = n - t, N = e, E = o - e, P = Math.min(y, C, N, E);
      return P === N ? t - r : P === C ? h + (e - r) : P === E ? p + (n - r - t) : v + (o - r - e);
    }
    if (b) return e < o / 2 ? t - r : p + (n - r - t);
    if (w) return t > n / 2 ? h + (e - r) : v + (o - r - e);
    if (t > n / 2 && e < o / 2) {
      const y = Math.atan2(e - r, t - (n - r));
      return d + (y + u) / u * c;
    }
    if (t > n / 2) {
      const y = Math.atan2(e - (o - r), t - (n - r));
      return f + y / u * c;
    }
    if (e > o / 2) {
      const y = Math.atan2(e - (o - r), t - r);
      return g + (y - u) / u * c;
    }
    const M = Math.atan2(e - r, t - r);
    return m + (M + Math.PI) / u * c;
  }
  var Cn = { x: 0, y: 0 };
  var Tn = { x: 0, y: 0 };
  function ii(t, e, n, o, a, i) {
    return Xe(t - 0.1, e, n, o, a, 0, i, Cn), Xe(t + 0.1, e, n, o, a, 0, i, Tn), Math.atan2(Tn.y - Cn.y, Tn.x - Cn.x);
  }
  function Po(t, e, n) {
    if (t === e) return n < t ? 0 : 1;
    const o = Math.max(0, Math.min(1, (n - t) / (e - t)));
    return o * o * (3 - 2 * o);
  }
  function si(t) {
    if (t.samplePoints && t.samplePoints.length > 0)
      return t.samplePoints.map((a, i) => ({ x: a.x, y: a.y, arc: i }));
    const e = rn(t.width, t.height, t.cornerRadius, t.kind), n = A.inset * (t.scale ?? 1), o = [];
    for (let a = 0; a < bo; a++) {
      const i = a / bo * e, r = Xe(i, t.width, t.height, t.cornerRadius, n, 0, t.kind);
      o.push({ x: r.x, y: r.y, arc: i });
    }
    return o;
  }
  var li = 0.05;
  var ci = 120 * (1e3 / 15);
  var No = 1e3 / 15;
  var Uo = 2e3;
  var An = 400;
  var ui = 2.625;
  var di = 1.008;
  var fi = 0.31;
  var Ia = 140;
  var Oa = 40;
  var La = 20;
  var hi = 34;
  var Je = 0.25;
  var mi = 0.01;
  var Do = 4e-3;
  var pi = 0.5;
  var gi = 3.5;
  var Mt = { x: 0, y: 0 };
  function Ho(t, e) {
    const { width: n, height: o } = e, a = e.scale ?? 1, i = Math.min(3, typeof window < "u" && window.devicePixelRatio || 1), r = rn(n, o, e.cornerRadius, e.kind) / eo(Ia, Oa, La), l = Math.max(1, A.haloHalfLen * r), s = Math.max(0.6, A.extraHalfLen * r), c = oi(l, a, i), u = ai(s, a, i), d = Math.ceil(Math.max(c.ay, u.ay) + A.extraOutward * r * a + 2), h = document.createElement("div");
    h.className = "metal-fx-glow-svg", h.setAttribute("aria-hidden", "true");
    const f = document.createElement("div");
    f.className = "metal-fx-glow-env", f.style.cssText = "position:absolute;inset:0;pointer-events:none;opacity:0";
    const p = document.createElement("canvas");
    p.className = "metal-fx-glow-canvas";
    const g = n + 2 * d, v = o + 2 * d;
    p.width = Math.ceil(g * i), p.height = Math.ceil(v * i), p.style.cssText = `position:absolute;left:${-d}px;top:${-d}px;width:${g}px;height:${v}px;pointer-events:none`, f.appendChild(p), h.appendChild(f), t.appendChild(h);
    const m = p.getContext("2d", { willReadFrequently: !!e.maskDataUrl });
    if (!m) throw new Error("metal-fx: glow canvas 2D context unavailable");
    const b = {
      wrap: h,
      env: f,
      canvas: p,
      ctx: m,
      surroundPath: null,
      bandPath: null,
      maskAlpha: null,
      maskReady: false,
      margin: d,
      dpr: i,
      halo: c,
      extra: u,
      haloTint: { canvas: null, img: null, tint: -1, src: null },
      extraTint: { canvas: null, img: null, tint: -1, src: null },
      mO: Re(),
      mI: Re(),
      maskSum: Number.NaN,
      maskDeformed: false,
      deform: null,
      width: n,
      height: o,
      cornerRadius: e.cornerRadius,
      kind: e.kind,
      scale: a,
      perim: si(e),
      pointMode: !!(e.samplePoints && e.samplePoints.length > 0),
      currentIdx: 0,
      appearedAt: 0,
      glowOpacity: 0,
      relocTween: null,
      relocNextIdx: -1,
      relocMul: 0,
      envClock: 0,
      cursorMode: false,
      cursorArc: 0,
      cursorTargetArc: 0,
      lastTickMs: 0,
      wanderS: 0,
      wanderTargetS: 0,
      wanderFrames: 0,
      tintFrom: { r: 255, g: 255, b: 255 },
      tintTarget: { r: 255, g: 255, b: 255 },
      tintTween: null,
      tintHoldUntil: 0,
      dX: Number.NaN,
      dY: Number.NaN,
      dAng: Number.NaN,
      dEX: Number.NaN,
      dEY: Number.NaN,
      dHOp: Number.NaN,
      dEOp: Number.NaN,
      dHaloTint: "",
      dExtraTint: "",
      dirty: true,
      dEnv: -1
    };
    if (e.maskDataUrl) {
      const w = new Image();
      w.onload = () => {
        const M = document.createElement("canvas");
        M.width = p.width, M.height = p.height;
        const y = M.getContext("2d", { willReadFrequently: true });
        if (!y) return;
        y.scale(i, i), y.drawImage(w, d, d, n, o);
        const C = y.getImageData(0, 0, M.width, M.height).data, N = M.width * M.height, E = new Float32Array(N);
        for (let S = 0, B = 3; S < N; S++, B += 4) E[S] = C[B] / 255;
        const P = fn(Float32Array.from(E), M.width, M.height, gi * i);
        let G = 0;
        for (let S = 0; S < N; S++) P[S] > G && (G = P[S]);
        const at = G > 0 ? pi / G : 0, F = new Uint8ClampedArray(N);
        for (let S = 0; S < N; S++) F[S] = Math.round(Math.max(E[S], P[S] * at) * 255);
        b.maskAlpha = F, b.maskReady = true, b.dirty = true;
      }, w.src = e.maskDataUrl;
    } else
      jn(b, null);
    return b;
  }
  function jn(t, e) {
    if (t.pointMode) return;
    const { margin: n, width: o, height: a, cornerRadius: i } = t, r = t.kind === "circle" ? 2 : 1;
    Ce(0, 0, o, a, i, e, t.mO), Ce(r, r, o - 2 * r, a - 2 * r, Math.max(0, i - r), e, t.mI);
    const l = new Path2D();
    En(l, t.mO, n);
    const s = new Path2D();
    En(s, t.mO, n), En(s, t.mI, n);
    const c = new Path2D();
    c.rect(0, 0, o + 2 * n, a + 2 * n), c.addPath(l), t.surroundPath = c, t.bandPath = s, t.maskReady = true;
  }
  function En(t, e, n) {
    const o = e.xy;
    for (let a = 0; a < e.n; a++) {
      const i = o[a * 2] + n, r = o[a * 2 + 1] + n;
      a === 0 ? t.moveTo(i, r) : t.lineTo(i, r);
    }
    t.closePath();
  }
  function xi(t, e) {
    if (!t) return 0;
    Ce(0, 0, e.width, e.height, e.cornerRadius, t, e.mO);
    let n = 0;
    const o = e.mO.xy;
    for (let a = 0; a < e.mO.n; a += 4) n += o[a * 2] * 1.37 + o[a * 2 + 1];
    return n;
  }
  function vi(t, e) {
    if (t.deform = e, !t.pointMode)
      if (e) {
        const n = xi(e, t);
        n !== t.maskSum && (t.maskSum = n, jn(t, e), t.maskDeformed = true, t.dirty = true);
      } else t.maskDeformed && (t.maskSum = Number.NaN, jn(t, null), t.maskDeformed = false, t.dirty = true);
  }
  function bi(t, e, n, o, a = "dark") {
    var ot;
    const { width: i, height: r, cornerRadius: l, perim: s } = t;
    if (s.length === 0) return false;
    const c = 2;
    let u = -1, d = t.currentIdx, h = 0;
    for (let k = 0; k < s.length; k++) {
      const H = s[k], Q = Fn(e, H.x, H.y, c);
      Q > u && (u = Q, d = k), k === t.currentIdx && (h = Q);
    }
    const f = t.appearedAt > 0 && n - t.appearedAt < A.minDwellMs, p = A.baseOp + (A.peakOp - A.baseOp) * Po(A.lumLo, A.lumHi, h), g = !f && u - h > li, v = e.cursorLight, m = Yt.enabled && Yt.catchLight && !t.pointMode && !!v && v.w > 0.02, b = rn(i, r, l, t.kind);
    m && (t.cursorTargetArc = ri(v.x, v.y, i, r, l, t.kind));
    const w = m ? Math.min(1, A.peakOp * Yt.catchGain * v.w) : 0, M = t.lastTickMs > 0 ? Math.min(200, Math.max(0.5, n - t.lastTickMs)) : No;
    t.lastTickMs = n, t.envClock += Math.min(M, hi);
    const y = (k) => 1 - Math.pow(1 - k, M / No), C = Math.max(1, A.relocFadeMs), N = Math.max(1, A.relocFadeOutMs), E = -2, P = -3, G = () => {
      t.appearedAt = n, t.wanderS = 0, t.wanderTargetS = 0, t.wanderFrames = 0, t.relocTween = Oe(0, 1, C, Bn.smoothstep), Le(t.relocTween, t.envClock);
    }, at = (k) => {
      t.relocNextIdx = k, t.relocTween = Oe(1, 0, N, Bn.smoothstep), Le(t.relocTween, t.envClock);
    };
    if ((ot = t.relocTween) != null && ot.done && t.relocTween.to === 0) {
      let k = t.relocNextIdx;
      if (k === E && !m && (k = P), k === P)
        t.cursorMode = false, t.appearedAt = 0, t.relocTween = null;
      else if (k === E)
        t.cursorMode = true, t.cursorArc = t.cursorTargetArc, t.glowOpacity = w, G();
      else {
        t.currentIdx = k;
        const H = s[t.currentIdx], Q = Fn(e, H.x, H.y, c);
        t.glowOpacity = A.baseOp + (A.peakOp - A.baseOp) * Po(A.lumLo, A.lumHi, Q), G();
      }
    }
    if ((!t.relocTween || t.relocTween.done) && (t.appearedAt === 0 ? (m ? (t.cursorMode = true, t.cursorArc = t.cursorTargetArc, t.glowOpacity = w) : (t.cursorMode = false, t.currentIdx = d, t.glowOpacity = p), G()) : m !== t.cursorMode ? at(m ? E : P) : !t.cursorMode && g && at(d)), t.cursorMode) {
      m && (t.glowOpacity = w);
      const k = Math.max(0.01, Math.min(1, Yt.catchFollow)), H = 1 - Math.pow(1 - k, M / (1e3 / 60));
      let Q = t.cursorTargetArc - t.cursorArc;
      Q = (Q % b + b * 1.5) % b - b / 2, t.cursorArc += Q * H;
    } else
      t.glowOpacity += (p - t.glowOpacity) * y(A.fadeRate);
    t.glowOpacity = Math.max(0, Math.min(1, t.glowOpacity)), t.relocMul = t.relocTween ? Co(t.relocTween, t.envClock) : 1;
    const F = rn(i, r, l, t.kind) / eo(Ia, Oa, La), S = A.wanderRange * F;
    t.wanderFrames += M, t.wanderFrames >= ci && (t.wanderTargetS = (Math.random() * 2 - 1) * S, t.wanderFrames = 0), t.wanderS += (t.wanderTargetS - t.wanderS) * y(A.wanderLerp);
    let B, K, nt, U, _;
    if (t.pointMode) {
      const k = s[t.currentIdx];
      B = k.x + t.wanderS, K = k.y, nt = 0, U = B, _ = K;
    } else {
      const k = t.cursorMode ? t.cursorArc : s[t.currentIdx].arc + t.wanderS, H = A.inset * t.scale;
      Xe(k, i, r, l, H, 0, t.kind, Mt), B = Mt.x, K = Mt.y, nt = ii(k, i, r, l, H, t.kind);
      const Q = A.extraOutward * F * t.scale;
      Xe(k, i, r, l, H, Q, t.kind, Mt), U = Mt.x, _ = Mt.y;
    }
    t.deform && (t.deform(B, K, Mt), B = Mt.x, K = Mt.y, t.deform(U, _, Mt), U = Mt.x, _ = Mt.y);
    const T = a === "light", V = T ? br(e, B, K, c) : xa(e, B, K, c);
    t.tintTween ? t.tintTween.done && (T ? (t.tintFrom = {
      r: t.tintFrom.r + (t.tintTarget.r - t.tintFrom.r) * t.tintTween.val,
      g: t.tintFrom.g + (t.tintTarget.g - t.tintFrom.g) * t.tintTween.val,
      b: t.tintFrom.b + (t.tintTarget.b - t.tintFrom.b) * t.tintTween.val
    }, t.tintTarget = { ...V }, t.tintTween = Oe(0, 1, An), Le(t.tintTween, n)) : n >= t.tintHoldUntil && (t.tintFrom = { ...t.tintTarget }, t.tintTarget = { ...V }, t.tintTween = Oe(0, 1, An), Le(t.tintTween, n), t.tintHoldUntil = n + Uo)) : (t.tintFrom = { ...V }, t.tintTarget = { ...V }, t.tintTween = Oe(0, 1, An), Le(t.tintTween, n), t.tintHoldUntil = T ? 0 : n + Uo), Co(t.tintTween, n);
    const Z = t.tintTween.val;
    let Y, ut, L;
    if (T)
      Y = Math.round(t.tintFrom.r + (t.tintTarget.r - t.tintFrom.r) * Z), ut = Math.round(t.tintFrom.g + (t.tintTarget.g - t.tintFrom.g) * Z), L = Math.round(t.tintFrom.b + (t.tintTarget.b - t.tintFrom.b) * Z);
    else {
      const k = t.tintFrom.r + (t.tintTarget.r - t.tintFrom.r) * Z, H = t.tintFrom.g + (t.tintTarget.g - t.tintFrom.g) * Z, Q = t.tintFrom.b + (t.tintTarget.b - t.tintFrom.b) * Z, q2 = Math.max(k, H, Q) || 1;
      Y = Math.round(255 * (k / q2)), ut = Math.round(255 * (H / q2)), L = Math.round(255 * (Q / q2));
    }
    const O = `rgb(${Y},${ut},${L})`;
    let D = "#ffffff";
    if (T) {
      const k = ca(Y, ut, L), [H, Q, q2] = ua(k[0], Math.min(1, k[1] * ui), Math.max(fi, k[2] * di));
      D = `rgb(${H},${Q},${q2})`;
    }
    const $ = Math.max(0, Math.min(1, o)) * (t.pointMode ? A.pointGain : 1), W = Math.min(1, t.glowOpacity * A.haloOpMul * $), et = Math.min(1, t.glowOpacity * A.extraIntensity * $);
    if (Math.abs(t.relocMul - t.dEnv) > 2e-3) {
      const k = t.relocMul >= 0.998 && t.dEnv < 0.998;
      t.dEnv = t.relocMul, t.env.style.opacity = t.relocMul.toFixed(3), k && (t.dirty = true);
    }
    const rt = !!(t.relocTween && !t.relocTween.done) || t.cursorMode, st = !(Math.abs(B - t.dX) < Je && Math.abs(K - t.dY) < Je && Math.abs(nt - t.dAng) < mi && Math.abs(U - t.dEX) < Je && Math.abs(_ - t.dEY) < Je), dt = !(Math.abs(W - t.dHOp) < Do && Math.abs(et - t.dEOp) < Do), ct = O !== t.dHaloTint || D !== t.dExtraTint;
    return (t.dirty || st || dt || ct) && (t.dX = B, t.dY = K, t.dAng = nt, t.dEX = U, t.dEY = _, t.dHOp = W, t.dEOp = et, t.dHaloTint = O, t.dExtraTint = D, t.dirty = false, wi(t, B, K, nt, U, _, W, et, O, D)), rt;
  }
  function wi(t, e, n, o, a, i, r, l, s, c) {
    const { ctx: u, canvas: d, dpr: h, margin: f } = t;
    if (u.setTransform(1, 0, 0, 1, 0, 0), u.globalCompositeOperation = "source-over", u.globalAlpha = 1, u.clearRect(0, 0, d.width, d.height), r <= 2e-3 && l <= 2e-3 || !t.maskReady) return;
    const p = r > 2e-3 ? Bo(t.halo, ...zo(s), t.haloTint) : null, g = l > 2e-3 ? c === "#ffffff" ? t.extra.canvas : Bo(t.extra, ...zo(c), t.extraTint) : null, v = (M) => {
      p && (u.save(), u.translate(e + f, n + f), u.rotate(o), u.globalAlpha = r * M, u.drawImage(p, -t.halo.ax, -t.halo.ay, t.halo.w, t.halo.h), u.restore()), g && (u.save(), u.translate(a + f, i + f), u.rotate(o), u.globalAlpha = l * M, u.drawImage(g, -t.extra.ax, -t.extra.ay, t.extra.w, t.extra.h), u.restore());
    };
    if (!t.pointMode && t.surroundPath && t.bandPath) {
      u.save(), u.scale(h, h), u.clip(t.surroundPath, "evenodd"), v(0.5), u.restore(), u.save(), u.scale(h, h), u.clip(t.bandPath, "evenodd"), v(1), u.restore();
      return;
    }
    u.save(), u.scale(h, h), v(1), u.restore();
    const m = t.maskAlpha;
    if (!m) return;
    const b = u.getImageData(0, 0, d.width, d.height), w = b.data;
    for (let M = 0, y = 3; M < m.length; M++, y += 4) {
      const C = m[M];
      if (C !== 255) {
        if (C === 0) {
          w[y] = 0;
          continue;
        }
        w[y] = (w[y] * C + 127) / 255;
      }
    }
    u.putImageData(b, 0, 0);
  }
  var ge = [255, 255, 255];
  function zo(t) {
    if (t[0] === "#")
      return ge[0] = parseInt(t.slice(1, 3), 16), ge[1] = parseInt(t.slice(3, 5), 16), ge[2] = parseInt(t.slice(5, 7), 16), ge;
    let e = 4, n = 0, o = 0;
    for (; e < t.length && o < 3; ) {
      const a = t.charCodeAt(e++);
      a >= 48 && a <= 57 ? n = n * 10 + (a - 48) : (a === 44 || a === 41) && (ge[o++] = n, n = 0);
    }
    return ge;
  }
  function yi(t, e) {
    t.pointMode === e.pointMode && (e.currentIdx = Math.min(t.currentIdx, Math.max(0, e.perim.length - 1)), e.appearedAt = t.appearedAt, e.glowOpacity = t.glowOpacity, e.relocTween = t.relocTween, e.relocNextIdx = t.relocNextIdx, e.relocMul = t.relocMul, e.envClock = t.envClock, e.cursorMode = t.cursorMode, e.cursorArc = t.cursorArc, e.cursorTargetArc = t.cursorTargetArc, e.lastTickMs = t.lastTickMs, e.wanderS = t.wanderS, e.wanderTargetS = t.wanderTargetS, e.wanderFrames = t.wanderFrames, e.tintFrom = t.tintFrom, e.tintTarget = t.tintTarget, e.tintTween = t.tintTween, e.tintHoldUntil = t.tintHoldUntil, e.dEnv = t.relocMul, e.env.style.opacity = t.relocMul.toFixed(3));
  }
  var Go = Object.freeze({ offsetY: 1, blur: 0.5, alpha: 0.9, color: "#ffffff" });
  function Mi(t, e, n) {
    const o = Math.min(3, typeof window < "u" && window.devicePixelRatio || 1), a = Math.ceil(3 * n.blur + Math.abs(n.offsetY) + 1), i = e.width + 2 * a, r = e.height + 2 * a, l = document.createElement("canvas");
    l.className = "metal-fx-rim-canvas", l.setAttribute("aria-hidden", "true"), l.width = Math.ceil(i * o), l.height = Math.ceil(r * o), l.style.cssText = `position:absolute;left:${-a}px;top:${-a}px;width:${i}px;height:${r}px;pointer-events:none`;
    const s = l.getContext("2d"), c = document.createElement("canvas");
    c.width = l.width, c.height = l.height;
    const u = c.getContext("2d", { willReadFrequently: true });
    if (!s || !u) return null;
    t.appendChild(l);
    const d = {
      canvas: l,
      ctx: s,
      scratch: c,
      sctx: u,
      width: e.width,
      height: e.height,
      cornerRadius: e.cornerRadius,
      kind: e.kind,
      ring: e.ring,
      margin: a,
      dpr: o,
      opts: n,
      mO: Re(),
      mI: Re(),
      sum: Number.NaN
    };
    return Fa(d, null, true), d;
  }
  function Wo(t, e, n) {
    const o = e.xy;
    for (let a = 0; a < e.n; a++) {
      const i = o[a * 2] + n, r = o[a * 2 + 1] + n;
      a === 0 ? t.moveTo(i, r) : t.lineTo(i, r);
    }
    t.closePath();
  }
  function Fa(t, e, n = false) {
    const { width: o, height: a, cornerRadius: i, ring: r, margin: l, dpr: s } = t;
    Ce(0, 0, o, a, i, e, t.mO), Ce(r, r, o - 2 * r, a - 2 * r, Math.max(0, i - r), e, t.mI);
    let c = 0;
    const u = t.mO.xy;
    for (let S = 0; S < t.mO.n; S += 4) c += u[S * 2] * 1.37 + u[S * 2 + 1];
    if (!n && c === t.sum) return;
    t.sum = c;
    const { sctx: d, scratch: h, ctx: f, canvas: p, opts: g } = t, v = h.width, m = h.height;
    d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, v, m), d.scale(s, s), d.fillStyle = "#fff", d.beginPath(), Wo(d, t.mO, l), Wo(d, t.mI, l), d.fill("evenodd");
    const b = d.getImageData(0, 0, v, m).data, w = v * m, M = new Float32Array(w);
    for (let S = 0, B = 3; S < w; S++, B += 4) M[S] = b[B] / 255;
    const y = Math.round(g.offsetY * s) * v, C = new Float32Array(w);
    if (y >= 0)
      for (let S = 0; S < w; S++) C[S] = Math.max(0, M[S] - (S >= y ? M[S - y] : 0));
    else
      for (let S = 0; S < w; S++) C[S] = Math.max(0, M[S] - (S - y < w ? M[S - y] : 0));
    const N = fn(C, v, m, g.blur * s), E = parseInt(g.color.slice(1, 3), 16), P = parseInt(g.color.slice(3, 5), 16), G = parseInt(g.color.slice(5, 7), 16), at = f.createImageData(v, m), F = at.data;
    for (let S = 0, B = 0; S < w; S++, B += 4)
      F[B] = E, F[B + 1] = P, F[B + 2] = G, F[B + 3] = Math.round(Math.min(1, N[S] * M[S] * g.alpha) * 255);
    f.setTransform(1, 0, 0, 1, 0, 0), f.putImageData(at, 0, 0);
  }
  function Vo(t) {
    t && t.canvas.remove();
  }
  var nn = 12;
  var $o = 32;
  var Xo = 1;
  var Yo = 0.55;
  var _i = 1;
  var Si = 1;
  var Ri = 0.85;
  var Ci = 0;
  var Ti = 1.3;
  var jo = 3.6;
  var Ai = 0.7;
  var Ei = 1;
  var ki = 0.52;
  var Ii = 1;
  var Oi = 0.044;
  var Li = 235;
  var Fi = 2.535;
  var qo = 0.7;
  var Bi = 0.5;
  var Pi = /* @__PURE__ */ new Set(["INPUT", "TEXTAREA", "SELECT", "OPTION"]);
  function Ni(t, e) {
    const n = Math.max(t.left - e.right, e.left - t.right, 0), o = Math.max(t.top - e.bottom, e.top - t.bottom, 0);
    return Math.sqrt(n * n + o * o);
  }
  function Ui(t, e, n, o) {
    return !(Math.min(t.bottom, e.bottom) - Math.max(t.top, e.top) < n || Math.max(
      t.left - e.right,
      e.left - t.right,
      0
    ) > o);
  }
  function Di(t, e, n, o) {
    return Math.min(t.right, e.right) - Math.max(t.left, e.left) < n ? false : Math.max(
      t.top - e.bottom,
      e.top - t.bottom,
      0
    ) <= o;
  }
  function le(t, e, n, o, a, i) {
    const r = Math.max(0, Math.min(i, o * 0.5, a * 0.5)), l = t.roundRect;
    if (typeof l == "function") {
      l.call(t, e, n, o, a, r);
      return;
    }
    t.moveTo(e + r, n), t.lineTo(e + o - r, n), t.quadraticCurveTo(e + o, n, e + o, n + r), t.lineTo(e + o, n + a - r), t.quadraticCurveTo(e + o, n + a, e + o - r, n + a), t.lineTo(e + r, n + a), t.quadraticCurveTo(e, n + a, e, n + a - r), t.lineTo(e, n + r), t.quadraticCurveTo(e, n, e + r, n);
  }
  function Ba(t, e, n, o, a) {
    if (!a.flipX && !a.flipY) {
      t.drawImage(e, a.sx ?? 0, a.sy ?? 0, n, o, a.x, a.y, a.w, a.h);
      return;
    }
    t.save(), a.flipX && (t.translate(a.x + a.w, 0), t.scale(-1, 1)), a.flipY && (t.translate(0, a.y + a.h), t.scale(1, -1)), t.drawImage(
      e,
      a.sx ?? 0,
      a.sy ?? 0,
      n,
      o,
      a.flipX ? 0 : a.x,
      a.flipY ? 0 : a.y,
      a.w,
      a.h
    ), t.restore();
  }
  var Hi = 4;
  function zi(t, e, n, o, a, i, r) {
    if (o <= 2 * r || a <= 2 * r) {
      t.beginPath(), le(t, e, n, o, a, i), t.clip();
      return;
    }
    t.beginPath(), le(t, e, n, o, a, i), le(t, e + r, n + r, o - 2 * r, a - 2 * r, Math.max(0, i - r)), t.clip("evenodd");
  }
  function Gi(t, e, n, o, a, i, r, l, s, c, u, d) {
    const h = d ?? Math.max(1, Math.round((nn + Hi * 3) * u));
    let f = Math.max(0, r), p = true;
    for (let g = 0; g < 3 && f > 1e-4; g++) {
      const v = Math.min(1, f);
      t.save(), zi(t, c.x, c.y, c.w, c.h, c.r, h), t.globalCompositeOperation = p ? "source-over" : "lighter", p = false, t.globalAlpha = v, Ba(t, e, n, o, s), t.globalAlpha = 1, t.globalCompositeOperation = "destination-in", t.fillStyle = l, t.fillRect(0, 0, a, i), t.restore(), f -= v;
    }
  }
  function Pa(t, e, n, o, a, i, r) {
    const l = r | 0;
    if (l < 1 || o <= 2 * l || a <= 2 * l) {
      t.beginPath(), le(t, e, n, o, a, i), t.clip();
      return;
    }
    t.beginPath(), le(t, e, n, o, a, i), le(t, e + l, n + l, o - 2 * l, a - 2 * l, Math.max(0, i - l)), t.clip("evenodd");
  }
  function Wi(t, e, n, o, a, i, r, l, s, c, u, d) {
    let h = l * u, f = true;
    for (let p = 0; p < 3 && h > 1e-4; p++) {
      const g = Math.min(1, h);
      t.save(), Pa(t, r.x, r.y, r.w, r.h, r.r, s), t.globalCompositeOperation = f ? "source-over" : "lighter", f = false, t.globalAlpha = g, Ba(t, e, n, o, d), t.globalAlpha = 1, t.globalCompositeOperation = "destination-in", t.fillStyle = c, t.fillRect(0, 0, a, i), t.restore(), h -= g;
    }
  }
  function Vi(t, e, n, o, a, i, r, l) {
    const s = t.createLinearGradient(o, a, i, r);
    s.addColorStop(0, `rgba(255,255,255,${l.toFixed(3)})`), s.addColorStop(0.5, `rgba(255,255,255,${(l * 0.45).toFixed(3)})`), s.addColorStop(1, "rgba(255,255,255,0)"), t.save(), Pa(t, e.x, e.y, e.w, e.h, e.r, n), t.globalCompositeOperation = "lighter", t.lineWidth = n * 2, t.strokeStyle = s, t.beginPath(), le(t, e.x, e.y, e.w, e.h, e.r), t.stroke(), t.restore();
  }
  function Na(t) {
    const e = getComputedStyle(t), n = [
      parseFloat(e.borderTopLeftRadius) || 0,
      parseFloat(e.borderTopRightRadius) || 0,
      parseFloat(e.borderBottomRightRadius) || 0,
      parseFloat(e.borderBottomLeftRadius) || 0
    ].filter((o) => o > 0);
    return n.length ? Math.min.apply(null, n) : 0;
  }
  function Ua(t) {
    const e = getComputedStyle(t), n = Math.max(
      parseFloat(e.borderTopWidth) || 0,
      parseFloat(e.borderRightWidth) || 0,
      parseFloat(e.borderBottomWidth) || 0,
      parseFloat(e.borderLeftWidth) || 0
    );
    let o = 0, a = 0;
    const i = e.boxShadow;
    if (i && i !== "none") {
      const c = i.replace(/rgba?\([^)]*\)/g, (h) => h.replace(/,/g, "\0")).split(/,\s*/);
      let u = 1 / 0, d = 1 / 0;
      for (const h of c) {
        const f = h.match(/-?\d+(?:\.\d+)?px/g);
        if (!f || f.length < 4) continue;
        const p = parseFloat(f[3]);
        p > 0 && (/\binset\b/.test(h) ? p < u && (u = p) : p < d && (d = p));
      }
      Number.isFinite(u) && (o = u), Number.isFinite(d) && (a = d);
    }
    const r = Math.max(n, a);
    return { width: Math.max(n, o, a) || 1, outerCssPx: r };
  }
  function Ko(t) {
    t.cornerRadius = Na(t.el);
    const e = Ua(t.el);
    t.hairlineWidth = e.width, t.hairlineOuterCssPx = e.outerCssPx;
  }
  function $i(t) {
    typeof ResizeObserver < "u" && (t.resizeObserver = new ResizeObserver(() => Ko(t)), t.resizeObserver.observe(t.el)), typeof MutationObserver < "u" && (t.mutationObserver = new MutationObserver(() => Ko(t)), t.mutationObserver.observe(t.el, {
      attributes: true,
      attributeFilter: ["style", "class"]
    }));
  }
  function Xi(t) {
    var e, n;
    (e = t.resizeObserver) == null || e.disconnect(), t.resizeObserver = null, (n = t.mutationObserver) == null || n.disconnect(), t.mutationObserver = null;
  }
  var Zt = /* @__PURE__ */ new Set();
  var Da = Object.freeze({
    enabled: true,
    radius: 11.5,
    strength: 0.57,
    penumbra: 0.55,
    falloff: 0.21,
    edgeFade: 0.7,
    softness: 0.24,
    repaintMs: 36
  });
  var Ye = { ...Da };
  var Xt = null;
  var kn = 0;
  var Qo = 0;
  var Zo = false;
  function hn() {
    kn !== 0 || typeof requestAnimationFrame > "u" || (kn = requestAnimationFrame((t) => {
      if (kn = 0, t - Qo < Ye.repaintMs) {
        hn();
        return;
      }
      Qo = t, za();
    }));
  }
  var sn = false;
  function ji(t, e) {
    const n = Ye.radius;
    for (const o of Zt) {
      const a = o.anchorEl.getBoundingClientRect(), i = o.el.getBoundingClientRect(), r = Math.min(a.left, i.left) - n, l = Math.max(a.right, i.right) + n, s = Math.min(a.top, i.top) - n, c = Math.max(a.bottom, i.bottom) + n;
      if (t >= r && t <= l && e >= s && e <= c) return true;
    }
    return false;
  }
  function Jo(t) {
    if (Xt = { x: t.clientX, y: t.clientY }, !Ye.enabled) return;
    const e = ji(t.clientX, t.clientY);
    (e || sn) && hn(), sn = e;
  }
  function tn() {
    Xt = null, sn && hn(), sn = false;
  }
  function Ha(t) {
    typeof document > "u" || t === Zo || (Zo = t, t ? (document.addEventListener("pointermove", Jo, { passive: true }), document.addEventListener("pointerleave", tn), window.addEventListener("blur", tn)) : (document.removeEventListener("pointermove", Jo), document.removeEventListener("pointerleave", tn), window.removeEventListener("blur", tn), Xt = null));
  }
  function qi(t, e, n, o, a, i, r, l, s) {
    if (!Xt) return;
    const c = Ye;
    if (!c.enabled || c.strength <= 0) return;
    const u = c.radius;
    let d, h, f, p, g, v;
    if (a) {
      const U = n.left >= o.right;
      d = U ? o.right : n.right, h = U ? n.left : o.left, f = Xt.x, p = Xt.y, g = Math.max(n.top, o.top), v = Math.min(n.bottom, o.bottom);
    } else {
      const U = n.top >= o.bottom;
      d = U ? o.bottom : n.bottom, h = U ? n.top : o.top, f = Xt.y, p = Xt.x, g = Math.max(n.left, o.left), v = Math.min(n.right, o.right);
    }
    const m = Math.min(d, h), b = Math.max(d, h), w = Math.max(1, b - m);
    if (f < m - u || f > b + u || p < g - u || p > v + u) return;
    const M = Math.max(0, Math.min(1, Math.abs(f - d) / w)), y = Math.max(0.5, u * c.edgeFade), C = Math.min(1, Math.min(f - (m - u), b + u - f) / y), N = Math.min(1, Math.min(p - (g - u), v + u - p) / y), E = c.strength * (1 - c.falloff * M) * C * N;
    if (E <= 1e-3) return;
    const P = u * s * (1 + c.penumbra * M), G = a ? (p - o.top + l) * s : (p - o.left + l) * s, at = Math.max(0, Math.min(0.5, (1 - c.softness) * 0.5)), F = Math.max(1e-3, 0.5 - at), S = a ? r : i, B = Math.max(0, Math.floor(G - P)), K = Math.min(S, Math.ceil(G + P));
    if (K <= B) return;
    const nt = new Float32Array(K - B);
    for (let U = B; U < K; U++) {
      const _ = (U + 0.5 - (G - P)) / (2 * P), T = _ < F ? _ / F : _ > 1 - F ? (1 - _) / F : 1;
      nt[U - B] = 1 - E * Math.max(0, Math.min(1, T));
    }
    for (const U of [t, e]) {
      const _ = a ? 0 : B, T = a ? B : 0, V = a ? i : K - B, Z = a ? K - B : r, Y = U.getImageData(_, T, V, Z), ut = Y.data;
      if (a)
        for (let L = 0; L < Z; L++) {
          const O = nt[L];
          if (!(O >= 0.999))
            for (let D = L * V * 4 + 3, $ = (L + 1) * V * 4; D < $; D += 4) ut[D] = ut[D] * O;
        }
      else
        for (let L = 0; L < Z; L++)
          for (let O = 0; O < V; O++) {
            const D = nt[O];
            if (D >= 0.999) continue;
            const $ = (L * V + O) * 4 + 3;
            ut[$] = ut[$] * D;
          }
      U.putImageData(Y, _, T);
    }
  }
  var Nt = null;
  var ve = null;
  var be = null;
  var we = null;
  function Ki(t, e) {
    return Nt || (Nt = document.createElement("canvas"), ve = document.createElement("canvas"), be = Nt.getContext("2d", { alpha: true }), we = ve.getContext("2d", { alpha: true })), !be || !we || !Nt || !ve ? false : (Nt.width !== t && (Nt.width = t, ve.width = t), Nt.height !== e && (Nt.height = e, ve.height = e), be.setTransform(1, 0, 0, 1, 0, 0), we.setTransform(1, 0, 0, 1, 0, 0), be.globalCompositeOperation = "source-over", we.globalCompositeOperation = "source-over", be.clearRect(0, 0, t, e), we.clearRect(0, 0, t, e), true);
  }
  function Qi(t, e, n, o = 1) {
    if (typeof document > "u" || Pi.has(t.tagName)) return null;
    for (const p of Zt)
      if (p.el === t)
        return p.strength = o, p;
    const a = document.createElement("div");
    a.setAttribute("data-metal-fx-reflection", ""), a.setAttribute("aria-hidden", "true");
    const i = document.createElement("canvas");
    i.className = "metal-fx-reflection-canvas";
    const r = i.getContext("2d", { alpha: true, willReadFrequently: true });
    if (!r) return null;
    const l = document.createElement("canvas");
    l.className = "metal-fx-reflection-stroke-canvas";
    const s = l.getContext("2d", { alpha: true, willReadFrequently: true });
    if (!s) return null;
    a.appendChild(i), a.appendChild(l);
    const c = getComputedStyle(t);
    let u = false;
    c.position === "static" && (t.style.position = "relative", u = true);
    let d = false;
    c.isolation !== "isolate" && (t.style.isolation = "isolate", d = true), t.setAttribute("data-metal-fx-reflect-host", ""), t.insertBefore(a, t.firstChild);
    const h = Ua(t), f = {
      el: t,
      anchor: e,
      anchorEl: n,
      strength: o,
      wrap: a,
      canvas: i,
      ctx: r,
      strokeCanvas: l,
      strokeCtx: s,
      cornerRadius: Na(t),
      hairlineWidth: h.width,
      hairlineOuterCssPx: h.outerCssPx,
      appliedPositionRelative: u,
      appliedIsolation: d,
      resizeObserver: null,
      mutationObserver: null
    };
    return $i(f), Zt.add(f), Ha(true), f;
  }
  function Zi(t) {
    for (const e of Zt)
      if (e.el === t) {
        Xi(e), e.canvas.width = 0, e.canvas.height = 0, e.strokeCanvas.width = 0, e.strokeCanvas.height = 0, e.wrap.parentNode === e.el && e.el.removeChild(e.wrap), e.el.removeAttribute("data-metal-fx-reflect-host"), e.appliedPositionRelative && (e.el.style.position = ""), e.appliedIsolation && (e.el.style.isolation = ""), Zt.delete(e), Zt.size === 0 && Ha(false);
        return;
      }
  }
  function Ji(t, e, n, o, a) {
    if (o < 1 || a < 1) return null;
    const i = t.getContext("2d");
    if (!i) return null;
    const r = i.getImageData(e, n, o, a).data;
    let l = o, s = a, c = -1, u = -1;
    for (let d = 0; d < a; d++) {
      const h = d * o;
      for (let f = 0; f < o; f++)
        r[(h + f) * 4 + 3] > 8 && (f < l && (l = f), f > c && (c = f), d < s && (s = d), d > u && (u = d));
    }
    return c < 0 ? null : { x: e + l, y: n + s, w: c - l + 1, h: u - s + 1 };
  }
  function za() {
    if (Zt.size === 0) return;
    const t = typeof window < "u" && window.devicePixelRatio || 1, e = /* @__PURE__ */ new Map();
    for (const n of Zt) {
      const o = n.el.getBoundingClientRect();
      let a = e.get(n.anchorEl);
      if (a || (a = n.anchorEl.getBoundingClientRect(), e.set(n.anchorEl, a)), o.width < 1 || o.height < 1 || a.width < 1 || a.height < 1) continue;
      const i = n.el.hasAttribute("data-metal-fx-text");
      if (i && !n.glyphStyled && (n.canvas.style.filter = "blur(0.4px) saturate(1.35) brightness(1.2)", n.glyphStyled = true), !Ui(a, o, Xo, $o) && !Di(a, o, Xo, $o)) {
        n.canvas.width !== 1 && (n.canvas.width = 1, n.canvas.height = 1), n.strokeCanvas.width !== 1 && (n.strokeCanvas.width = 1, n.strokeCanvas.height = 1);
        continue;
      }
      const r = i && !!n.anchor.mask;
      r && !n.anchor.wantRaw && (n.anchor.wantRaw = true), n.anchor.wantRing || (n.anchor.wantRing = true);
      const l = !!n.anchor.deform && !!n.anchor.ringCanvas, s = r && n.anchor.rawCanvas ? n.anchor.rawCanvas : l ? n.anchor.ringCanvas : n.anchor.canvas, c = Math.round(n.anchor.overscan * t);
      let u = c, d = c, h = (s.width | 0) - 2 * c, f = (s.height | 0) - 2 * c;
      if (n.anchor.mask && !r) {
        const Y = Ji(s, u, d, h, f);
        Y && (u = Y.x, d = Y.y, h = Y.w, f = Y.h);
      }
      if (h < 4 || f < 4) continue;
      const p = (a.left + a.right) * 0.5, g = (a.top + a.bottom) * 0.5, v = (o.left + o.right) * 0.5, m = (o.top + o.bottom) * 0.5, b = p - v, w = g - m, M = Math.max(a.left - o.right, o.left - a.right, 0), y = Math.max(a.top - o.bottom, o.top - a.bottom, 0), C = M >= y, N = Ni(a, o);
      let E = 1 - Math.min(1, N / nn);
      E = E * E * (3 - 2 * E);
      const P = Yo + (_i - Yo) * E, G = Math.min(
        jo,
        P * Ti * Ai
      ) * n.strength, F = a.left >= o.left && a.right <= o.right && a.top >= o.top && a.bottom <= o.bottom ? [true, false] : [C], S = n.anchor.scale ?? 1, B = Math.max(Ei * S, n.hairlineWidth), K = Math.max(1, Math.round(B * t)), nt = Math.max(
        1,
        Math.round(Math.max(Ii * S, n.hairlineWidth) * t)
      ), U = n.hairlineOuterCssPx;
      n.wrap.style.inset = `${-U}px`, n.wrap.style.borderRadius = `${Math.max(0, n.cornerRadius)}px`;
      const _ = Math.max(1, Math.round((o.width + U * 2) * t)), T = Math.max(1, Math.round((o.height + U * 2) * t));
      n.canvas.width !== _ && (n.canvas.width = _), n.canvas.height !== T && (n.canvas.height = T), n.strokeCanvas.width !== _ && (n.strokeCanvas.width = _), n.strokeCanvas.height !== T && (n.strokeCanvas.height = T);
      const V = n.ctx;
      V.setTransform(1, 0, 0, 1, 0, 0), V.clearRect(0, 0, _, T);
      const Z = n.strokeCtx;
      Z.setTransform(1, 0, 0, 1, 0, 0), Z.clearRect(0, 0, _, T);
      for (const [Y, ut] of F.entries()) {
        const L = Y > 0 && Ki(_, T), O = L ? be : V, D = L ? we : Z, $ = Math.min((i ? nn * 1.5 : nn) * t, Math.max(_, T));
        let W, et, rt, st;
        ut ? (W = b > 0 ? _ : 0, rt = b > 0 ? _ - $ : $, et = T * 0.5, st = T * 0.5) : (et = w > 0 ? T : 0, st = w > 0 ? T - $ : $, W = _ * 0.5, rt = _ * 0.5);
        const dt = V.createLinearGradient(W, et, rt, st);
        dt.addColorStop(0, `rgba(0,0,0,${Si})`), dt.addColorStop(0.5, `rgba(0,0,0,${Ri})`), dt.addColorStop(1, `rgba(0,0,0,${Ci})`);
        const ct = h / t, ot = i ? Math.max(1, Math.min(ut ? _ : T, Math.round(ut ? h : f))) : Math.max(1, Math.round(Li * Math.max(0.1, ct / 140) * t));
        let k, H, Q, q2, bt = false, xt = false;
        if (ut) {
          const z = Math.max(a.top, o.top), J = Math.min(a.bottom, o.bottom);
          bt = true, k = b > 0 ? _ - ot : 0, H = Math.round((z - o.top + U) * t), Q = ot, q2 = Math.max(1, Math.round((J - z) * t));
        } else {
          const z = Math.max(a.left, o.left), J = Math.min(a.right, o.right);
          xt = true, k = Math.round((z - o.left + U) * t), H = w > 0 ? T - ot : 0, Q = Math.max(1, Math.round((J - z) * t)), q2 = ot;
        }
        const It = { x: k, y: H, w: Q, h: q2, flipX: bt, flipY: xt, sx: u, sy: d }, ht = { x: 0, y: 0, w: _, h: T, r: Math.max(0, n.cornerRadius * t) }, I = i ? Math.min(1, G * qo) : Math.min(jo, G * Fi * qo * Bi);
        Gi(O, s, h, f, _, T, I, dt, It, ht, t, i ? Math.max(_, T) : void 0), i || (Wi(
          D,
          s,
          h,
          f,
          _,
          T,
          ht,
          G,
          K,
          dt,
          ki,
          It
        ), Vi(
          D,
          ht,
          nt,
          W,
          et,
          rt,
          st,
          Math.min(0.85, Oi * G)
        )), L && (V.globalCompositeOperation = "lighter", V.drawImage(Nt, 0, 0), Z.globalCompositeOperation = "lighter", Z.drawImage(ve, 0, 0));
      }
      for (const Y of F)
        qi(V, Z, a, o, Y, _, T, U, t);
      V.globalCompositeOperation = "source-over", Z.globalCompositeOperation = "source-over";
    }
  }
  var In = false;
  var ta = 0;
  function ts() {
    In || (In = true, !(typeof requestAnimationFrame > "u") && requestAnimationFrame((t) => {
      In = false, !(t - ta < Ka) && (ta = t, za());
    }));
  }
  var ea = "metal-fx-styles";
  var es = (
    /* css */
    `
.metal-fx-root {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  overflow: visible;
  background: #272727;
  color: #f8f8f8;
}
.metal-fx-root[data-theme='light'] {
  background: #ffffff;
  color: #1d1d1d;
}

.metal-fx-root::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 50px 0 rgba(255, 255, 255, 0.02);
}
.metal-fx-root[data-theme='light']::before {
  box-shadow: inset 0 0 50px 0 rgba(0, 0, 0, 0.02);
}

.metal-fx-root::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 4;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light']::after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
/* Circle variant gets a thicker outer rim than the button variant. */
.metal-fx-root[data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light'][data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
}

.metal-fx-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
}

/* The inner spacer \u2014 defines the inset geometry where the metal ring meets
   the interior (3 px for Button, 1-2 px for Circle) and carries the Circle dark
   hairline ('box-shadow: inset' rules below). Intentionally transparent so
   the wrapper's background propagates through to the punched shader centre,
   giving consumers a single surface tone to override. See "Single-surface
   background" in the file header for the rationale. */
.metal-fx-inner {
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
}

.metal-fx-root[data-variant='button'][data-shape='pill'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 20px) - 3px);
}
.metal-fx-root[data-variant='button'][data-shape='circle'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 16px) - 3px);
}
.metal-fx-root[data-variant='circle'][data-shape='pill'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 20px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
.metal-fx-root[data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 16px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
/* Circle-variant hairline alpha \u2014 light mode.
   Source-of-truth: index.html L2261-2267. The 0.45-alpha black inset that
   reads as a single-pixel frame against the dark interior is too heavy
   on a #ffffff inner: it ends up looking like a hard 2-px black ring
   against the iridescent shader. Suppressed entirely (alpha 0) \u2014 the
   shader's own iridescent rim already defines the silhouette in light
   mode, so an extra dark hairline only competes with it. The rule is
   kept (rather than deleted) as a tunable hook in case a future variant
   wants to re-introduce a soft edge. NOTE: we keep the dark-mode inset
   and border-radius values because \u2014 unlike index.html \u2014 our renderer
   does NOT overscan the canvas in light mode, so there is no 1-px gap
   between inner element and shader to compensate for. */
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='pill'] .metal-fx-inner,
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
}

/* \u2500\u2500\u2500 Combined glow SVG (z=3) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Single SVG per instance that holds BOTH the wide-halo group
   (#mfx_haloTravel) and the catch-light group (#mfx_extraTravel), exactly
   mirroring canonical's _buildGlowSvgInner (index.html L8078). One
   mix-blend-mode: screen lifts the combined composite onto the shader
   ring; per-frame opacity attributes on each inner group still drive the
   independent fade-in / fade-out cycles for the halo and the catch-light.

   Why a single SVG: the circle variant anchors halo + catch-light at the same
   perimeter point, so they overlap in the bright zone. Two separately-
   screened SVGs would double-screen the overlap (A + B + C - AB - AC -
   BC + ABC instead of A + B + C - AB - AC once both groups composite
   in source-over inside one SVG and then screen against the host once).
   That overlap looked muted versus canonical specifically on the circle
   variant where both layers travel together.

   Source-of-truth opacity: #btnGlowSvg drops to 0.7 in dark and 0.2746 in
   light (index.html L632/L643). */
.metal-fx-glow-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 3;
  pointer-events: none;
  opacity: 0.7;
}
.metal-fx-root[data-theme='light'] .metal-fx-glow-svg {
  /* Light-mode 1-px overscan mirrors .btn-glow-svg in metal.html so the
     halo stays glued to the visible silhouette (the shader ring there sits
     1 px outside the host's padding box). */
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  mix-blend-mode: multiply;
  /* Source-of-truth: html[data-theme="light"] #btnGlowSvg { opacity: 0.2746 }
     \u2192 \u221235 % from 0.4225 from the original 0.7 dark-mode opacity. */
  opacity: 0.2746;
  filter: saturate(5.355) brightness(0.78);
}
/* Circle light-mode small variants (e.g. 36\xD736 send button): the geometrically
   shrunk halo loses density when multiplied against #ffffff. Mirror the
   canonical override at index.html L2316 \u2014 bump saturation + drop brightness
   so the small glow holds together visually. */
.metal-fx-root[data-variant='circle'][data-shape='circle'][data-theme='light'] .metal-fx-glow-svg {
  filter: saturate(7.5) brightness(0.6);
}

/* The wrapped child \u2014 hoisted into z=5 so it sits above every overlay, with
   normalized chrome so consumer button styles don't fight the metal frame. */
.metal-fx-content {
  position: relative;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}
.metal-fx-content > * {
  pointer-events: auto;
}
.metal-fx-root[data-normalize='true'] .metal-fx-content > * {
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  /* Sizing: we deliberately DO NOT force \`width: 100%; height: 100%\` on the
     child here. That used to be the contract ("the wrapper is the visible
     button surface; the child stretches to fill it"), but it created a cyclic
     percentage dependency: the wrapper is \`inline-flex\` with no intrinsic
     size, .metal-fx-content is \`width/height: 100%\` of the wrapper, and the
     child was \`100%\` of .metal-fx-content. With nothing breaking the cycle,
     icon-only / class-sized children collapsed.

     The new contract: the child sizes itself (intrinsic content, CSS class,
     or inline style \u2014 all work), and the wrapper's \`inline-flex\` wraps it
     tightly. Consumers who want a metal frame BIGGER than the child (e.g.
     padding around an icon) size <MetalFx style={{ width, height }}> AND
     explicitly set width/height on the child to fill (or accept that the
     child renders at its intrinsic size, centered).

     Typography is intentionally NOT touched. We used to apply
     \`color: inherit; font: inherit;\` here to "match" the wrapper, but
     \`font: inherit\` is a shorthand that overrides font-family, font-size,
     font-weight, AND line-height on the child \u2014 which (a) shrank the
     button height (line-height changes propagate through the flex
     content box) and (b) scaled em-based icons / font-icons inside the
     child to whatever the wrapper inherited. The wrapper now stays out
     of the child's typography entirely; consumers who want typographic
     normalization can apply it themselves on the child element. */
}

[data-metal-fx-reflection] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  z-index: 0;
  isolation: isolate;
}
.metal-fx-reflection-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: blur(4px) saturate(1.2) brightness(1.58);
}
.metal-fx-reflection-stroke-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: saturate(1.35) brightness(1.75);
}
/* Hosts that participate as reflection targets need positioning + isolation
   so the wrap composites only against the host (not the parent stack). The
   wrap injects these inline as well, but stating them here keeps reflections
   working on hosts that already have other inline styles applied. */
[data-metal-fx-reflect-host] {
  isolation: isolate;
}
`
  );
  var On = false;
  function ns() {
    if (On || typeof document > "u") return;
    if (document.getElementById(ea)) {
      On = true;
      return;
    }
    const t = document.createElement("style");
    t.id = ea, t.textContent = es, document.head.appendChild(t), On = true;
  }
  ns();
  var os = { position: "absolute", inset: 0, width: "100%", height: "100%" };
  var as = { position: "absolute", inset: 3 };
  var rs = { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3, borderRadius: "inherit" };
  var is = { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 4 };
  var ze = /* @__PURE__ */ new Map();
  function ss() {
    const t = globalThis;
    t.__MFX_DEBUG__ && (t.__mfxGlow = ze);
  }
  Er((t, e) => {
    const n = ze.get(t);
    return n ? bi(n.handles, t, e, t.opacityMul * t.glowGain, n.themeRef.current) : false;
  });
  function ls(t) {
    const [e, n] = (0, import_react6.useState)(() => t !== "auto" ? t : typeof window > "u" || !window.matchMedia || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    return (0, import_react6.useEffect)(() => {
      if (t !== "auto") {
        n(t);
        return;
      }
      if (typeof window > "u" || !window.matchMedia) return;
      const o = window.matchMedia("(prefers-color-scheme: dark)"), a = () => n(o.matches ? "dark" : "light");
      return a(), o.addEventListener("change", a), () => o.removeEventListener("change", a);
    }, [t]), e;
  }
  var no = (0, import_react6.forwardRef)(function({
    children: e,
    variant: n = "button",
    preset: o = "chromatic",
    theme: a = "auto",
    strength: i = 1,
    glowGain: r = 1,
    paused: l = false,
    borderRadius: s,
    normalizeHostStyles: c = true,
    reflectionTargets: u,
    disableGlow: d = false,
    innerShadow: h,
    shaderScale: f,
    ringCssPx: p,
    scale: g = 1,
    mask: v,
    glowMode: m = "mask",
    className: b,
    style: w,
    ...M
  }, y) {
    const C = (0, import_react6.useRef)(null), N = (0, import_react6.useRef)(null), E = (0, import_react6.useRef)(null), P = (0, import_react6.useRef)(null), G = (0, import_react6.useRef)(null), at = (0, import_react6.useRef)(null), F = (0, import_react6.useRef)(null), S = (0, import_react6.useRef)(null), B = (0, import_react6.useRef)("dark"), K = (0, import_react6.useRef)(0), [nt, U] = (0, import_react6.useState)(false), _ = ls(a), T = (0, import_react6.useMemo)(() => mr(), []);
    B.current = _;
    const V = n === "circle" ? "circle" : "pill", Z = !d;
    (0, import_react6.useImperativeHandle)(y, () => C.current, []);
    const Y = (L, O) => {
      if (V === "circle") return Math.min(L, O) / 2;
      const D = typeof s == "number" ? s : (() => {
        var W;
        const $ = (W = at.current) == null ? void 0 : W.firstElementChild;
        if ($) {
          const et = parseFloat(getComputedStyle($).borderTopLeftRadius);
          if (Number.isFinite(et) && et > 0) return et;
        }
        return K.current;
      })();
      return Math.min(D, Math.min(L, O) / 2);
    };
    (0, import_react6.useEffect)(() => {
      T && Ar(o, _);
    }, [o, _, T]), (0, import_react6.useEffect)(() => {
      const L = F.current;
      L && pe(L, { mask: v ?? null });
    }, [v]), (0, import_react6.useEffect)(() => {
      const L = F.current;
      L && pe(L, { paused: l });
    }, [l]), (0, import_react6.useEffect)(() => {
      const L = F.current;
      if (!L) return;
      const O = {};
      f !== void 0 && (O.shaderScale = f), p !== void 0 && (O.ringCssPx = p), g !== void 0 && (O.scale = g), Object.keys(O).length > 0 && pe(L, O);
    }, [f, p, g]), (0, import_react6.useLayoutEffect)(() => {
      const L = N.current, O = C.current, D = E.current;
      if (!L || !O || !T) return;
      {
        const I = getComputedStyle(O), z = parseFloat(I.borderTopLeftRadius);
        K.current = Number.isFinite(z) ? z : 0;
      }
      const $ = () => {
        const I = O.getBoundingClientRect(), z = Math.max(1, Math.round(I.width)), J = Math.max(1, Math.round(I.height));
        return { cssWidth: z, cssHeight: J, cornerRadius: Y(z, J) };
      }, W = $();
      F.current = yr({
        onComposite: () => {
          const I = F.current, z = S.current;
          I && z && vi(z, I.deform);
          const J = G.current;
          I && J && Fa(J, I.deform);
        },
        hostCanvas: L,
        cssWidth: W.cssWidth,
        cssHeight: W.cssHeight,
        cornerRadius: W.cornerRadius,
        kind: V,
        paused: l,
        shaderScale: f,
        ringCssPx: p,
        scale: g,
        mask: v ?? null,
        onFirstCopy: () => U(true)
      }), O.style.setProperty("--mfx-radius", `${W.cornerRadius}px`), O.style.borderRadius = `${W.cornerRadius}px`;
      const et = (I, z) => {
        if (!v || m === "ring") return {};
        const J = window.devicePixelRatio || 1, mt = document.createElement("canvas");
        mt.width = Math.max(1, Math.round(I * J)), mt.height = Math.max(1, Math.round(z * J));
        const Ot = mt.getContext("2d");
        if (!Ot) return {};
        Ot.fillStyle = "#fff", v(Ot, mt.width, mt.height, J);
        const mn = Ot.getImageData(0, 0, mt.width, mt.height).data, ce = [], ue = Math.max(1, Math.round(2 * J));
        for (let Lt = ue >> 1; Lt < mt.height; Lt += ue)
          for (let Jt = ue >> 1; Jt < mt.width; Jt += ue)
            mn[(Lt * mt.width + Jt) * 4 + 3] > 128 && ce.push({ x: Jt / J, y: Lt / J });
        return { samplePoints: ce, maskDataUrl: mt.toDataURL("image/png") };
      };
      D && (S.current = Ho(D, {
        width: W.cssWidth,
        height: W.cssHeight,
        cornerRadius: W.cornerRadius,
        kind: V,
        scale: g,
        ...et(W.cssWidth, W.cssHeight)
      }));
      const rt = (I) => {
        if (!D) return;
        const z = S.current;
        D.innerHTML = "", S.current = Ho(D, {
          width: I.cssWidth,
          height: I.cssHeight,
          cornerRadius: I.cornerRadius,
          kind: V,
          scale: g,
          ...et(I.cssWidth, I.cssHeight)
        }), z && yi(z, S.current);
        const J = F.current;
        J && S.current && ze.set(J, { handles: S.current, themeRef: B });
      }, st = () => h ? h === true ? Go : { ...Go, ...h } : null, dt = (I) => {
        const z = P.current, J = F.current;
        Vo(G.current), G.current = null;
        const mt = st();
        !z || !J || !mt || (G.current = Mi(z, { width: I.cssWidth, height: I.cssHeight, cornerRadius: I.cornerRadius, kind: V, ring: J.ringCssPx }, mt));
      };
      dt(W);
      let ct = 0, ot = W.cssWidth, k = W.cssHeight, H = W.cornerRadius;
      const Q = new ResizeObserver(() => {
        ct === 0 && (ct = requestAnimationFrame(() => {
          ct = 0;
          const I = $(), z = F.current;
          !z || Math.abs(I.cssWidth - ot) < 0.5 && Math.abs(I.cssHeight - k) < 0.5 && Math.abs(I.cornerRadius - H) < 0.5 || (ot = I.cssWidth, k = I.cssHeight, H = I.cornerRadius, pe(z, { cssWidth: I.cssWidth, cssHeight: I.cssHeight, cornerRadius: I.cornerRadius }), O.style.setProperty("--mfx-radius", `${I.cornerRadius}px`), O.style.borderRadius = `${I.cornerRadius}px`, rt(I), dt(I));
        }));
      });
      Q.observe(O);
      let q2 = null;
      const bt = () => {
        const I = F.current;
        if (I && Cr(I)) {
          const z = $();
          rt(z), dt(z);
        }
        xt();
      }, xt = () => {
        q2 == null || q2.removeEventListener("change", bt), q2 = typeof window.matchMedia == "function" ? window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`) : null, q2 == null || q2.addEventListener("change", bt);
      };
      xt();
      const It = Pr((I) => {
        I && F.current && rt($());
      });
      let ht = null;
      return typeof IntersectionObserver < "u" && (ht = new IntersectionObserver(
        (I) => {
          const z = F.current;
          if (z)
            for (const J of I) Rr(z, J.isIntersecting);
        },
        { rootMargin: "64px" }
      ), ht.observe(O)), F.current && S.current && (ze.set(F.current, { handles: S.current, themeRef: B }), _r(F.current)), Gr(), ss(), () => {
        Wr(), Vo(G.current), G.current = null, Q.disconnect(), q2 == null || q2.removeEventListener("change", bt), ht == null || ht.disconnect(), It(), ct !== 0 && cancelAnimationFrame(ct);
        const I = F.current;
        I && (ze.delete(I), Sr(I), Mr(I)), F.current = null, S.current = null, D && (D.innerHTML = "");
      };
    }, [V]), (0, import_react6.useEffect)(() => {
      const L = F.current;
      L && pe(L, { opacityMul: Math.max(0, Math.min(1, i)), glowGain: Math.max(0, r) });
    }, [i, r, n]), (0, import_react6.useEffect)(() => {
      const L = F.current, O = C.current;
      if (!L || !O || !u || _ !== "dark") return;
      L.onAfterFrame = ts;
      const D = u.flatMap(($) => {
        const W = "current" in $ ? $ : $.ref, et = "current" in $ ? 1 : $.strength ?? 1;
        return W.current ? [{ el: W.current, strength: et }] : [];
      });
      for (const { el: $, strength: W } of D) Qi($, L, O, W);
      return () => {
        L.onAfterFrame = void 0;
        for (const { el: $ } of D) Zi($);
      };
    }, [u, _]), (0, import_react6.useEffect)(() => {
      const L = C.current, O = F.current;
      if (!L || !O) return;
      const D = Y(O.cssWidth, O.cssHeight);
      pe(O, { cornerRadius: D }), L.style.setProperty("--mfx-radius", `${D}px`), L.style.borderRadius = `${D}px`;
    }, [s, _, n, V]);
    const ut = (0, import_react6.useMemo)(
      () => ({
        ...w,
        "--mfx-strength": String(Math.min(1, Math.max(0, i))),
        opacity: nt ? 1 : 0,
        visibility: nt ? "visible" : "hidden",
        transition: nt ? "opacity 0.15s ease-out" : "none"
      }),
      [w, i, nt]
    );
    return T ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        ...M,
        ref: C,
        className: b ? `metal-fx-root ${b}` : "metal-fx-root",
        "data-variant": n,
        "data-shape": V,
        "data-theme": _,
        "data-paused": l ? "true" : void 0,
        "data-normalize": c ? "true" : "false",
        style: ut,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("canvas", { ref: N, className: "metal-fx-canvas", style: os }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "metal-fx-inner", "aria-hidden": "true", style: as }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ref: E, "aria-hidden": "true", style: { ...rs, display: Z ? void 0 : "none" } }),
          h ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ref: P, "aria-hidden": "true", style: is }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ref: at, className: "metal-fx-content", children: e })
        ]
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        ...M,
        ref: C,
        className: b ? `metal-fx-fallback ${b}` : "metal-fx-fallback",
        "data-metal-fx-unsupported": "",
        style: { display: "inline-flex", ...w },
        children: e
      }
    );
  });
  no.displayName = "MetalFx";
  var Ga = { offsetY: 1, blur: 0.5, alpha: 0.9 };
  var Ln = Object.freeze({ metalOpacity: 0.62, shaderScale: 2.8, glowGain: 2.5, innerShadow: Ga });
  var qn = 45;
  var fs = 26.667;
  var aa = (qn - fs) / 2;
  var Fe = Object.freeze({
    metalOpacity: 0.8,
    shaderScale: 1.6,
    /** White core under the label: solid radius (% of ellipse), ramp width, opacity, ellipse size (% of box). */
    core: Object.freeze({ r: 46, blur: 100, a: 0.94, size: 49 }),
    gradient: 0,
    glow: 0.41
  });
  var Wa = Object.freeze({
    enabled: true,
    applyTo: "ring",
    strength: 0.74,
    fadeInMs: 200,
    fadeOutMs: 350,
    smoothMs: 140,
    reach: 36,
    blob: 13,
    liquidBlob: 10,
    maxDisp: 9,
    gain: 0.6,
    pressGain: 0.55,
    pullGain: 0.49,
    press: 5,
    liquid: 7.5,
    liquidReach: 8,
    liquidStiffness: 53,
    liquidDamping: 9,
    stiffness: 260,
    damping: 13,
    mass: 1,
    follow: 0.32,
    mapRes: 2,
    smooth: 0.25
  });
  var ao = { ...Wa };
  function Bs(t, e = () => ao) {
    (0, import_react6.useEffect)(() => {
      const n = t.current;
      if (!n || typeof document > "u") return;
      const o = n.querySelector("canvas.metal-fx-canvas"), a = n.querySelector(".metal-fx-inner");
      let i = null, r = null, l = false, s = false, c = 0, u = 0, d = 0, h = 0, f = 0, p = 0, g = 0, v = 0, m = 0, b = 0, w = 0, M = 0, y = 0, C = 0, N = 0, E = 0, P = 0, G = 0, at = NaN, F = NaN, S = NaN, B = NaN, K = NaN, nt = 0, U = 0, _ = 0, T = 1, V = 1;
      const Z = (j, R, tt) => {
        const pt = j - c, ft = R - u, wt = pt * pt + ft * ft, At = Math.exp(-wt / T), Ht = Math.exp(-wt / V);
        tt.x = nt * At + pt * _ * Ht, tt.y = U * At + ft * _ * Ht;
      }, Y = { x: 0, y: 0 }, ut = (j, R, tt) => {
        Z(j, R, Y), tt.x = j + Y.x, tt.y = R + Y.y;
      }, L = "mfx-bend-style";
      if (!document.getElementById(L)) {
        const j = document.createElement("style");
        j.id = L, j.textContent = ".metal-fx-root[data-mfx-bend]::before,.metal-fx-root[data-mfx-bend]::after{box-shadow:none!important}", document.head.appendChild(j);
      }
      let O = false, D = null;
      const $ = n.style.background, W = (a == null ? void 0 : a.style.visibility) ?? "", et = (j) => {
        if (!j || j === "none") return null;
        const R = j.match(/^(rgba?\([^)]*\)|#[0-9a-fA-F]+|[a-z]+)\s+(-?[\d.]+)px\s+(-?[\d.]+)px\s+(-?[\d.]+)px\s+(-?[\d.]+)px/);
        return R ? { color: R[1], spread: Math.abs(parseFloat(R[5])) } : null;
      }, rt = (j) => {
        if (O || !o) return;
        const R = et(getComputedStyle(n, "::after").boxShadow), tt = a ? et(getComputedStyle(a).boxShadow) : null, pt = a && parseFloat(getComputedStyle(a).inset) || 0;
        D = {
          fill: getComputedStyle(n).backgroundColor,
          rim: R && R.spread > 0 ? { inset: 0, width: R.spread, color: R.color } : null,
          hairline: tt && tt.spread > 0 ? { inset: pt, width: tt.spread, color: tt.color } : null
        }, n.style.background = "transparent", n.setAttribute("data-mfx-bend", ""), a && (a.style.visibility = "hidden"), So(o, ut, D, j), O = true;
      }, st = () => {
        !O || !o || (So(o, null, null, 0), n.style.background = $, n.removeAttribute("data-mfx-bend"), a && (a.style.visibility = W), O = false);
      }, dt = `mfx-bend-${Math.random().toString(36).slice(2, 8)}`, ct = "http://www.w3.org/2000/svg", ot = 0.75, k = document.createElementNS(ct, "svg");
      k.setAttribute("aria-hidden", "true"), k.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
      const H = document.createElementNS(ct, "filter");
      H.setAttribute("id", dt), H.setAttribute("x", `-${ot * 100}%`), H.setAttribute("y", `-${ot * 100}%`), H.setAttribute("width", `${(1 + 2 * ot) * 100}%`), H.setAttribute("height", `${(1 + 2 * ot) * 100}%`), H.setAttribute("color-interpolation-filters", "sRGB");
      const Q = document.createElementNS(ct, "feFlood");
      Q.setAttribute("flood-color", "rgb(128,128,0)"), Q.setAttribute("flood-opacity", "1"), Q.setAttribute("result", "neutral");
      const q2 = document.createElementNS(ct, "feImage");
      q2.setAttribute("result", "img"), q2.setAttribute("preserveAspectRatio", "none");
      const bt = document.createElementNS(ct, "feComposite");
      bt.setAttribute("in", "img"), bt.setAttribute("in2", "neutral"), bt.setAttribute("operator", "over"), bt.setAttribute("result", "map");
      const xt = document.createElementNS(ct, "feDisplacementMap");
      xt.setAttribute("in", "SourceGraphic"), xt.setAttribute("in2", "map"), xt.setAttribute("xChannelSelector", "R"), xt.setAttribute("yChannelSelector", "G"), xt.setAttribute("result", "bent");
      const It = document.createElementNS(ct, "feGaussianBlur");
      It.setAttribute("in", "bent"), It.setAttribute("stdDeviation", "0");
      for (const j of [Q, q2, bt, xt, It]) H.appendChild(j);
      k.appendChild(H), document.body.appendChild(k);
      const ht = document.createElement("canvas"), I = ht.getContext("2d", { alpha: false, willReadFrequently: true });
      let z = null, J = null;
      const mt = 4278222976;
      let Ot = false;
      const mn = n.style.filter, ce = () => {
        Ot && (n.style.filter = mn, Ot = false);
      }, ue = (j, R, tt, pt) => {
        if (!I) return;
        const ft = Math.max(0.25, j.mapRes), wt = -R * ot, At = -tt * ot, Ht = R * (1 + 2 * ot), Ft = tt * (1 + 2 * ot), yt = Math.max(2, Math.round(Ht * ft)), zt = Math.max(2, Math.round(Ft * ft));
        (ht.width !== yt || ht.height !== zt || !z || !J) && (ht.width = yt, ht.height = zt, z = I.createImageData(yt, zt), J = new Uint32Array(z.data.buffer)), J.fill(mt);
        const de = z.data, Gt = 3 * Math.max(j.blob, j.liquidBlob), Ke = Math.max(0, Math.floor((c - Gt - wt) * ft)), Ee = Math.min(yt - 1, Math.ceil((c + Gt - wt) * ft)), pn = Math.max(0, Math.floor((u - Gt - At) * ft)), gn = Math.min(zt - 1, Math.ceil((u + Gt - At) * ft)), Qe = 255 / pt;
        for (let Wt = pn; Wt <= gn; Wt++) {
          const ke = At + (Wt + 0.5) / ft;
          let te = (Wt * yt + Ke) * 4;
          for (let fe = Ke; fe <= Ee; fe++, te += 4) {
            const Ze = wt + (fe + 0.5) / ft;
            Z(Ze, ke, Y);
            let Bt = 127.5 - Y.x * Qe;
            Bt = Bt < 0 ? 0 : Bt > 255 ? 255 : Bt;
            let ee = 127.5 - Y.y * Qe;
            ee = ee < 0 ? 0 : ee > 255 ? 255 : ee, de[te] = Bt, de[te + 1] = ee;
          }
        }
        I.putImageData(z, 0, 0), q2.setAttribute("x", wt.toFixed(2)), q2.setAttribute("y", At.toFixed(2)), q2.setAttribute("width", Ht.toFixed(2)), q2.setAttribute("height", Ft.toFixed(2)), q2.setAttribute("href", ht.toDataURL("image/png")), xt.setAttribute("scale", pt.toFixed(2)), It.setAttribute("stdDeviation", Math.max(0, j.smooth).toFixed(3)), Ot || (n.style.filter = `url(#${dt})`, Ot = true);
      }, Lt = () => {
        E === 0 && (P = performance.now(), E = requestAnimationFrame(Jt));
      }, Jt = (j) => {
        E = 0;
        const R = e(), tt = Math.min(0.032, Math.max(1e-3, (j - P) / 1e3));
        P = j;
        const pt = n.getBoundingClientRect(), ft = pt.width, wt = pt.height, At = ft / 2, Ht = wt / 2;
        let Ft = 0, yt = 0;
        if (M = 0, R.enabled && i) {
          const ne = i.x - pt.left, xn = i.y - pt.top, so = ne - At, lo = xn - Ht, Vt = Math.hypot(so, lo), co = Math.min(ft, wt) / 2, uo = Math.max(ft, wt) / 2 + R.reach, $a = s;
          s = Vt < uo;
          const vn = Math.max(0, 1 - Math.abs(Vt - co) / Math.max(1, R.liquidReach));
          if (M = vn * vn * (3 - 2 * vn), s) {
            $a || (c = ne, u = xn);
            const fo = 1 - Math.pow(1 - Math.min(0.999, R.follow), tt * 60);
            c += (ne - c) * fo, u += (xn - u) * fo;
            const ho = 1 - Math.max(0, (Vt - (uo - R.reach)) / R.reach);
            Ft = C * (R.gain / 100) * ho, yt = N * (R.gain / 100) * ho;
            const mo = Vt > 1e-3 ? so / Vt : 0, po = Vt > 1e-3 ? lo / Vt : 0, bn = co - Vt;
            if (bn > 0) {
              const Ie = bn * R.pressGain;
              Ft -= mo * Ie, yt -= po * Ie;
            } else {
              const Ie = -bn, yn = Math.max(0, 1 - Ie / Math.max(1, R.reach)), go = Ie * R.pullGain * (yn * yn * (3 - 2 * yn));
              Ft += mo * go, yt += po * go;
            }
            const wn = Math.hypot(Ft, yt);
            wn > R.maxDisp && (Ft *= R.maxDisp / wn, yt *= R.maxDisp / wn);
          }
        } else
          s = false;
        C *= Math.exp(-tt * 12), N *= Math.exp(-tt * 12);
        const zt = 1 - Math.exp(-(tt * 1e3) / Math.max(1, R.smoothMs));
        m += (Ft - m) * zt, b += (yt - b) * zt;
        const de = Math.max(0.05, R.mass);
        f += (-R.stiffness * (d - m) - R.damping * f) / de * tt, p += (-R.stiffness * (h - b) - R.damping * p) / de * tt, d += f * tt, h += p * tt;
        const Gt = l && s && R.enabled ? R.press : 0, Ke = s && R.enabled ? R.liquid * (M + (l ? 0.5 : 0)) : 0;
        w += (Ke - w) * zt, v += (-R.liquidStiffness * (g - w) - R.liquidDamping * v) / de * tt, g += v * tt;
        const Ee = s && R.enabled ? 1 : 0, pn = Math.max(1, Ee ? R.fadeInMs : R.fadeOutMs) / 3;
        y += (Ee - y) * (1 - Math.exp(-(tt * 1e3) / pn)), y < 2e-3 && Ee === 0 && (y = 0);
        const gn = Math.hypot(d, h), Qe = !s && y === 0 && gn < 0.05 && Math.hypot(f, p) < 1 && Math.abs(g) < 0.05 && Gt === 0;
        if (R.applyTo === "ring" ? ce() : st(), Qe) {
          d = h = f = p = g = v = 0, m = b = w = 0, at = F = S = B = K = NaN, st(), ce();
          return;
        }
        const Wt = Math.max(0, R.strength) * y;
        let ke = At - c, te = Ht - u;
        const fe = Math.hypot(ke, te) || 1;
        ke /= fe, te /= fe;
        const Ze = Math.max(0.5, R.blob), Bt = Math.max(0.5, R.liquidBlob);
        T = 2 * Ze * Ze, V = 2 * Bt * Bt, nt = (d + ke * Gt) * Wt, U = (h + te * Gt) * Wt, _ = g / Bt * Wt;
        const ee = !(Math.abs(d - at) < 0.05 && Math.abs(h - F) < 0.05 && Math.abs(g - S) < 0.05 && Math.abs(c - B) < 0.05 && Math.abs(u - K) < 0.05), Va = j - G >= 1e3 / 60 - 0.5;
        if (ee && Va)
          if (G = j, at = d, F = h, S = g, B = c, K = u, R.applyTo === "ring" && o) {
            const ne = Math.ceil((R.maxDisp + R.liquid * 1.5) * Math.max(1, R.strength)) + 4;
            rt(ne), Tr(o);
          } else {
            const ne = Math.max(1, (R.maxDisp + R.liquid * 1.5) * 2 * Math.max(1, R.strength));
            ue(R, ft, wt, ne);
          }
        else R.applyTo === "ring" && o && !O && rt(Math.ceil((R.maxDisp + R.liquid * 1.5) * Math.max(1, R.strength)) + 4);
        E = requestAnimationFrame(Jt);
      }, ro = (j) => {
        const R = performance.now();
        if (r) {
          const tt = Math.max(4e-3, (R - r.t) / 1e3), pt = 1 - Math.exp(-tt / 0.04);
          C += ((j.clientX - r.x) / tt - C) * pt, N += ((j.clientY - r.y) / tt - N) * pt;
        }
        r = { x: j.clientX, y: j.clientY, t: R }, i = { x: j.clientX, y: j.clientY }, Lt();
      }, je = () => {
        i = null, r = null, Lt();
      }, io = () => {
        l = true, Lt();
      }, qe = () => {
        l = false, Lt();
      };
      return document.addEventListener("pointermove", ro, { passive: true }), document.addEventListener("pointerleave", je), window.addEventListener("blur", je), n.addEventListener("pointerdown", io), document.addEventListener("pointerup", qe), document.addEventListener("pointercancel", qe), () => {
        E !== 0 && cancelAnimationFrame(E), document.removeEventListener("pointermove", ro), document.removeEventListener("pointerleave", je), window.removeEventListener("blur", je), n.removeEventListener("pointerdown", io), document.removeEventListener("pointerup", qe), document.removeEventListener("pointercancel", qe), st(), ce(), k.parentNode && k.parentNode.removeChild(k);
      };
    }, [t, e]);
  }

  // node_modules/thinking-orbs/dist/index.es.js
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_react7 = __toESM(require_react(), 1);

  // node_modules/thinking-orbs/dist/index-B8WsUNf5.js
  function lerp(a, b, f) {
    return a + (b - a) * f;
  }
  function frac(x2) {
    return x2 - Math.floor(x2);
  }
  function vnoise(x2, y) {
    const xi2 = Math.floor(x2);
    const yi2 = Math.floor(y);
    let fx = x2 - xi2;
    let fy = y - yi2;
    fx = fx * fx * (3 - 2 * fx);
    fy = fy * fy * (3 - 2 * fy);
    const a = hashD(xi2, yi2);
    const b = hashD(xi2 + 1, yi2);
    const c = hashD(xi2, yi2 + 1);
    const d = hashD(xi2 + 1, yi2 + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  }
  function hashD(a, b) {
    const h = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
    return h - Math.floor(h);
  }
  function fibDir(i, n) {
    const golden = Math.PI * (3 - Math.sqrt(5));
    const y = 1 - 2 * (i + 0.5) / n;
    const rad = Math.sqrt(1 - y * y);
    const a = i * golden;
    return [rad * Math.cos(a), y, rad * Math.sin(a)];
  }
  function angleDelta(a, b) {
    return Math.atan2(Math.sin(a - b), Math.cos(a - b));
  }
  function makeProj(yaw, tilt, cx, cy, scale) {
    const st = Math.sin(tilt);
    const ct = Math.cos(tilt);
    const sy = Math.sin(yaw);
    const cyw = Math.cos(yaw);
    return (x2, y, z) => {
      const x1 = x2 * cyw + z * sy;
      const z1 = -x2 * sy + z * cyw;
      const y1 = y * ct - z1 * st;
      const z2 = y * st + z1 * ct;
      return [cx + x1 * scale, cy - y1 * scale, z2];
    };
  }
  function inkColor(w, alpha, dark, tint) {
    if (!tint) {
      const g = Math.round((dark ? 1 - w : w) * 255);
      return `rgba(${g},${g},${g},${alpha})`;
    }
    const ramp = (c) => Math.round(dark ? c * (1 - w) : c + (255 - c) * w);
    return `rgba(${ramp(tint.r)},${ramp(tint.g)},${ramp(tint.b)},${alpha})`;
  }
  function paint(ctx, dots, dark, rMin = 0.3, tint) {
    for (const d of dots) {
      const alpha = d.a ?? 1;
      const w = Math.min(1, Math.max(0, d.white));
      ctx.fillStyle = inkColor(w, alpha, dark, tint);
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  function paintLines(ctx, lines, dark, tint) {
    for (const l of lines) {
      const alpha = l.a ?? 1;
      const w = Math.min(1, Math.max(0, l.white));
      ctx.strokeStyle = inkColor(w, alpha, dark, tint);
      ctx.lineWidth = l.w;
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
    }
  }
  function finalizeFrame(dots, lines, rMin = 0.3) {
    const visible = [];
    for (const d of dots) {
      if ((d.a ?? 1) < 0.02) continue;
      d.r = Math.max(rMin, d.r);
      visible.push(d);
    }
    visible.sort((a, b) => a.z - b.z);
    return { dots: visible, lines: lines.filter((l) => (l.a ?? 1) >= 0.02) };
  }
  function paintFrame(ctx, frame, dark, tint) {
    if (frame.lines.length) paintLines(ctx, frame.lines, dark, tint);
    paint(ctx, frame.dots, dark, 0.3, tint);
  }
  function radiusScale(size, pow) {
    return (size / 300) ** pow;
  }
  var COUNT_PAIRS = [
    ["latRings", "lonDensity"],
    ["rings", "lonDensity"],
    ["lanes", "segs"]
  ];
  var COUNT_KEYS = ["orbitN", "ghostN", "nodeN", "strandN", "signals"];
  var ICON_DENSITY_KEYS = ["iconD"];
  var RADIUS_KEYS = [
    "rBase",
    "rDepth",
    "rActive",
    "rDot",
    "ghostR",
    "partR",
    "partRDepth",
    "nodeR",
    "nodeRDepth"
  ];
  function scaleCounts(opts, scale) {
    const out = { ...opts };
    const done = /* @__PURE__ */ new Set();
    const rt = Math.sqrt(scale);
    for (const [a, b] of COUNT_PAIRS) {
      const va2 = out[a];
      const vb = out[b];
      if (va2 != null && vb != null && !done.has(a) && !done.has(b)) {
        out[a] = Math.max(2, Math.round(va2 * rt));
        out[b] = Math.max(2, Math.round(vb * rt));
        done.add(a);
        done.add(b);
      }
    }
    for (const k of COUNT_KEYS) {
      const v = out[k];
      if (v != null && v !== 0 && !done.has(k)) out[k] = Math.max(1, Math.round(v * scale));
    }
    for (const k of ICON_DENSITY_KEYS) {
      const v = out[k];
      if (v != null) out[k] = Math.max(0.02, v * scale);
    }
    return out;
  }
  function scaleRadii(opts, scale) {
    const out = { ...opts };
    for (const k of RADIUS_KEYS) {
      const v = out[k];
      if (v != null) out[k] = v * scale;
    }
    out.rSizeMul = (out.rSizeMul ?? 1) * scale;
    return out;
  }
  var BASE_PROFILES = {
    globe: {
      latRings: 17,
      lonDensity: 44,
      rBase: 0.6,
      rDepth: 1.7,
      rBoost: 1,
      inkFar: 0.62,
      inkSpan: 0.54,
      rsPow: 0.6,
      rMin: 0.3
    },
    orbits: {
      orbitN: 12,
      ghostN: 40,
      ghostR: 0.9,
      ghostA: 0.5,
      particles: 3,
      partR: 1.2,
      partRDepth: 1.6,
      rsPow: 0.6,
      rMin: 0.3
    },
    rubik: {
      latRings: 15,
      lonDensity: 40,
      moveCount: 14,
      rBase: 0.6,
      rDepth: 1.7,
      rActive: 0.3,
      inkFar: 0.62,
      inkSpan: 0.54,
      rsPow: 0.6,
      rMin: 0.3
    },
    wave: {
      rings: 15,
      lonDensity: 40,
      rBase: 0.6,
      rDepth: 1.7,
      rsPow: 0.6,
      rMin: 0.3
    },
    web: {
      nodeN: 30,
      thr: 0.72,
      signals: 5,
      nodeR: 1.4,
      nodeRDepth: 1.8,
      lineW: 0.8,
      rsPow: 0.6,
      rMin: 0.3
    },
    braid: {
      strandN: 52,
      turns: 3,
      ghostN: 150,
      rBase: 1.2,
      rDepth: 1.8,
      rsPow: 0.6,
      rMin: 0.3
    },
    ribbon: {
      lanes: 5,
      segs: 88,
      ghostN: 150,
      rBase: 1.1,
      rDepth: 1.7,
      rsPow: 0.6,
      rMin: 0.3
    },
    // ring shares ribbon's painter; faceOn cancels the camera tilt and moves
    // the undulation onto the radius, and there is no ghost sphere behind it
    ring: {
      lanes: 5,
      segs: 88,
      ghostN: 0,
      faceOn: 1,
      rBase: 1.1,
      rDepth: 1.7,
      rsPow: 0.6,
      rMin: 0.3
    },
    morph: {
      rDot: 0.021,
      iconD: 1,
      rMin: 0.25
    }
  };
  var frameBraid = (size, t, o) => {
    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 * 0.76;
    const pt = makeProj(t * 0.4, 0.3, cx, cy, 1);
    const rs2 = radiusScale(size, o.rsPow ?? 0.6);
    const dots = [];
    const ghostN = o.ghostN ?? 150;
    for (let i = 0; i < ghostN; i++) {
      const d = fibDir(i, ghostN);
      const [px2, py2, z] = pt(d[0] * R, d[1] * R, d[2] * R);
      const depth = (z / R + 1) / 2;
      dots.push({ x: px2, y: py2, z, r: 0.8 * rs2, white: 0.78, a: 0.1 + 0.22 * depth });
    }
    const strandN = o.strandN ?? 52;
    const turns = o.turns ?? 3;
    for (let s = 0; s < 3; s++) {
      const phase = s / 3 * 2 * Math.PI;
      for (let i = 0; i < strandN; i++) {
        const u = (frac(i / strandN + t * 0.045) * 2 - 1) * 0.96;
        const surf = Math.sqrt(Math.max(0, 1 - u * u));
        const endFade = Math.min(1, (1 - Math.abs(u)) / 0.1);
        const a = u * Math.PI * turns + phase;
        const weave = 1 + 0.075 * Math.sin(u * Math.PI * turns * 2 + phase * 2 + t * 0.8);
        const rr2 = surf * R * weave;
        const [px2, py2, zr2] = pt(Math.cos(a) * rr2, u * R * weave, Math.sin(a) * rr2);
        const depth = (zr2 / R + 1) / 2;
        dots.push({
          x: px2,
          y: py2,
          z: zr2,
          r: ((o.rBase ?? 1.2) + (o.rDepth ?? 1.8) * depth) * rs2,
          white: 0.55 - 0.45 * depth,
          a: endFade * (0.45 + 0.55 * depth)
        });
      }
    }
    return finalizeFrame(dots, [], o.rMin);
  };
  function solveCycle(time, count, slotDur, rest) {
    const cyc = 2 * count * slotDur + rest;
    const tc = time % cyc;
    const amount = new Array(count).fill(0);
    let active = -1;
    if (tc < 2 * count * slotDur) {
      const slot = Math.floor(tc / slotDur);
      const p = (tc - slot * slotDur) / slotDur;
      const cl = Math.min(1, p / 0.7);
      const ep = 1 - (1 - cl) ** 3;
      if (slot < count) {
        for (let i = 0; i < slot; i++) amount[i] = 1;
        amount[slot] = ep;
        active = slot;
      } else {
        const u = 2 * count - 1 - slot;
        for (let i = 0; i < u; i++) amount[i] = 1;
        amount[u] = 1 - ep;
        active = u;
      }
    }
    return { amount, active };
  }
  function applyMoves(pt3, moves, sc) {
    let [x2, y, z] = pt3;
    let inActive = false;
    for (let i = 0; i < moves.length; i++) {
      if (sc.amount[i] <= 0) continue;
      const mv = moves[i];
      const coord = mv.axis === 0 ? x2 : mv.axis === 1 ? y : z;
      if (coord < mv.lo || coord >= mv.hi) continue;
      if (i === sc.active) inActive = true;
      const a = mv.ang * sc.amount[i];
      const ca2 = Math.cos(a);
      const sa2 = Math.sin(a);
      if (mv.axis === 0) {
        const y2 = y * ca2 - z * sa2;
        z = y * sa2 + z * ca2;
        y = y2;
      } else if (mv.axis === 1) {
        const x22 = x2 * ca2 + z * sa2;
        z = -x2 * sa2 + z * ca2;
        x2 = x22;
      } else {
        const x22 = x2 * ca2 - y * sa2;
        y = x2 * sa2 + y * ca2;
        x2 = x22;
      }
    }
    return [x2, y, z, inActive];
  }
  function makeMoves(count) {
    const moves = [];
    for (let i = 0; i < count; i++) {
      const axis = Math.min(2, Math.floor(hashD(i, 2.3) * 3));
      const lo = -1 + 0.5 * Math.min(3, Math.floor(hashD(i, 5.9) * 4));
      const dir = hashD(i, 7.7) < 0.5 ? 1 : -1;
      moves.push({ axis, lo, hi: lo + 0.5, ang: dir * Math.PI / 2 });
    }
    return moves;
  }
  var frameGlobe = (size, t, o) => {
    const spin = 0.5;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 * 0.82;
    const tilt = 0.4 + 0.06 * Math.sin(t * 0.35);
    const pt = makeProj(t * spin, tilt, cx, cy, radius);
    const scan = t * (spin + (1.7 - spin) * (o.scanMul ?? 1));
    const rs2 = radiusScale(size, o.rsPow ?? 0.6);
    const dimBase = o.dimBase ?? 1;
    const dots = [];
    const latRings = o.latRings ?? 17;
    const lonDensity = o.lonDensity ?? 44;
    for (let li2 = 0; li2 <= latRings; li2++) {
      const lat = -Math.PI / 2 + li2 / latRings * Math.PI;
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
      for (let lj = 0; lj < lonCount; lj++) {
        const lon = lj / lonCount * 2 * Math.PI;
        const [px2, py2, z] = pt(cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon));
        const depth = (z + 1) / 2;
        const d = angleDelta(lon + t * spin, scan);
        const boost = Math.exp(-(d * d) / 0.18) * Math.max(0, z);
        dots.push({
          x: px2,
          y: py2,
          z,
          r: ((o.rBase ?? 0.6) + (o.rDepth ?? 1.7) * depth + (o.rBoost ?? 1) * boost) * rs2,
          white: (o.inkFar ?? 0.62) - (o.inkSpan ?? 0.54) * depth,
          // dimBase < 1 fades un-scanned dots so the meridian reads clearly
          a: dimBase + (1 - dimBase) * Math.min(1, boost)
        });
      }
    }
    return finalizeFrame(dots, [], o.rMin);
  };
  var frameRubik = (size, t, o) => {
    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 * 0.82;
    const pt = makeProj(t * 0.55, 0.35 + 0.1 * Math.sin(t * 0.9), cx, cy, R);
    const rs2 = radiusScale(size, o.rsPow ?? 0.6);
    const moveCount = o.moveCount ?? 14;
    const moves = makeMoves(moveCount);
    const sc = solveCycle(t, moveCount, 0.42, 1.2);
    const dots = [];
    const latRings = o.latRings ?? 15;
    const lonDensity = o.lonDensity ?? 40;
    for (let li2 = 0; li2 <= latRings; li2++) {
      const lat = -Math.PI / 2 + li2 / latRings * Math.PI;
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
      for (let lj = 0; lj < lonCount; lj++) {
        const lon = lj / lonCount * 2 * Math.PI;
        const [x2, y, z, inActive] = applyMoves([cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon)], moves, sc);
        const [px2, py2, zr2] = pt(x2, y, z);
        const depth = (zr2 + 1) / 2;
        dots.push({
          x: px2,
          y: py2,
          z: zr2,
          r: ((o.rBase ?? 0.6) + (o.rDepth ?? 1.7) * depth + (inActive ? o.rActive ?? 0.3 : 0)) * rs2,
          white: (o.inkFar ?? 0.62) - (o.inkSpan ?? 0.54) * depth - (inActive ? 0.14 : 0)
        });
      }
    }
    return finalizeFrame(dots, [], o.rMin);
  };
  var frameWave = (size, t, o) => {
    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 * 0.874;
    const pt = makeProj(t * 0.18, 0.38, cx, cy, 1);
    const rs2 = radiusScale(size, o.rsPow ?? 0.6);
    const dots = [];
    const rings = o.rings ?? 15;
    const lonDensity = o.lonDensity ?? 40;
    for (let ri2 = 0; ri2 <= rings; ri2++) {
      const lat = -Math.PI / 2 + ri2 / rings * Math.PI;
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      const w = 0.62 * Math.sin(t * 2.1 - ri2 * 0.52) + 0.38 * Math.sin(t * 1.27 + ri2 * 0.83);
      const rr2 = R * (0.88 + 0.105 * w);
      const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
      for (let lj = 0; lj < lonCount; lj++) {
        const lon = lj / lonCount * 2 * Math.PI;
        const [px2, py2, z] = pt(cosLat * Math.cos(lon) * rr2, sinLat * rr2, cosLat * Math.sin(lon) * rr2);
        const depth = (z / R + 1) / 2;
        const crest = Math.max(0, w);
        dots.push({
          x: px2,
          y: py2,
          z,
          r: ((o.rBase ?? 0.6) + (o.rDepth ?? 1.7) * depth) * (1 + 0.4 * crest) * rs2,
          white: 0.66 - 0.56 * depth - 0.1 * crest
        });
      }
    }
    return finalizeFrame(dots, [], o.rMin);
  };
  function smoothE(x2) {
    return x2 * x2 * (3 - 2 * x2);
  }
  function polyPath(verts) {
    const V = verts.length;
    const L = [];
    let total = 0;
    for (let i = 0; i < V; i++) {
      const a = verts[i];
      const b = verts[(i + 1) % V];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
      L.push(l);
      total += l;
    }
    return (f) => {
      let target = f * total;
      let i = 0;
      while (target > L[i] && i < V - 1) {
        target -= L[i];
        i++;
      }
      const a = verts[i];
      const b = verts[(i + 1) % V];
      const ff = L[i] ? Math.min(1, target / L[i]) : 0;
      return [a[0] + (b[0] - a[0]) * ff, a[1] + (b[1] - a[1]) * ff];
    };
  }
  var CIRCLE = (f) => {
    const a = -Math.PI / 2 + f * 2 * Math.PI;
    return [Math.cos(a) * 0.24, Math.sin(a) * 0.24];
  };
  var TRIANGLE = polyPath([
    [0, -0.26],
    [0.24, 0.16],
    [-0.24, 0.16]
  ]);
  var SQUARE = polyPath([
    [0, -0.2],
    [0.2, -0.2],
    [0.2, 0.2],
    [-0.2, 0.2],
    [-0.2, -0.2]
  ]);
  var CYCLE = [CIRCLE, TRIANGLE, SQUARE];
  function morphN(d) {
    return Math.max(6, Math.round(34 * d));
  }
  var HOLD = 1.4;
  var MORPH = 0.9;
  var SEG = HOLD + MORPH;
  var frameMorph = (size, t, o) => {
    const K = CYCLE.length;
    const tc = t % (SEG * K);
    const held = o.shape != null && o.shape >= 0 && o.shape < K ? Math.floor(o.shape) : -1;
    const k = held >= 0 ? held : Math.floor(tc / SEG);
    const local = held >= 0 ? t % SEG : tc - k * SEG;
    const m = held >= 0 ? 0 : local > HOLD ? smoothE((local - HOLD) / MORPH) : 0;
    const sprd = o.spread ?? 1;
    const pA = CYCLE[k];
    const pB = held >= 0 ? pA : CYCLE[(k + 1) % K];
    const M = 160;
    const pts = [];
    for (let i = 0; i < M; i++) {
      const f = i / M;
      const a = pA(f);
      const b = pB(f);
      pts.push([(a[0] + (b[0] - a[0]) * m) * sprd, (a[1] + (b[1] - a[1]) * m) * sprd]);
    }
    const L = [];
    let total = 0;
    for (let i = 0; i < M; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % M];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
      L.push(l);
      total += l;
    }
    const n = morphN(o.iconD ?? 1);
    const re2 = (o.rDot ?? 0.021) * 1.35 * sprd;
    const pulse = 1 + 0.02 * Math.sin(local * 3.1);
    const dots = [];
    const c2 = size / 2;
    let seg = 0;
    let acc = 0;
    for (let k2 = 0; k2 < n; k2++) {
      const target = k2 / n * total;
      while (acc + L[seg] < target && seg < M - 1) {
        acc += L[seg];
        seg++;
      }
      const a = pts[seg];
      const b = pts[(seg + 1) % M];
      const f = L[seg] ? Math.min(1, (target - acc) / L[seg]) : 0;
      const x2 = (a[0] + (b[0] - a[0]) * f) * pulse;
      const y = (a[1] + (b[1] - a[1]) * f) * pulse;
      dots.push({
        x: c2 + x2 * size,
        y: c2 + y * size,
        z: 0,
        r: Math.max(0.35, re2 * size),
        white: 0.1
      });
    }
    return finalizeFrame(dots, [], o.rMin);
  };
  var frameOrbits = (size, t, o) => {
    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 * 0.82;
    const pt = makeProj(t * 0.12, 0.3, cx, cy, 1);
    const rs2 = radiusScale(size, o.rsPow ?? 0.6);
    const dots = [];
    const orbitN = o.orbitN ?? 12;
    const ghostN = o.ghostN ?? 40;
    const particles = o.particles ?? 3;
    for (let orb = 0; orb < orbitN; orb++) {
      const h1 = hashD(orb, 1.7);
      const h2 = hashD(orb, 5.2);
      const h3 = hashD(orb, 8.9);
      const ro = R * (0.45 + 0.52 * h1);
      const th = h1 * 2 * Math.PI;
      const phi = Math.acos(2 * h2 - 1);
      const nx = Math.sin(phi) * Math.cos(th);
      const ny = Math.cos(phi);
      const nz = Math.sin(phi) * Math.sin(th);
      let ux = -ny;
      let uy = nx;
      const uz = 0;
      const ul = Math.max(1e-6, Math.sqrt(ux * ux + uy * uy));
      ux /= ul;
      uy /= ul;
      const vx = ny * uz - nz * uy;
      const vy = nz * ux - nx * uz;
      const vz = nx * uy - ny * ux;
      const speed = (0.25 + 0.55 * h3) * (h3 > 0.5 ? 1 : -1);
      for (let k = 0; k < ghostN; k++) {
        const a = k / ghostN * 2 * Math.PI;
        const [px2, py2, z] = pt(
          (ux * Math.cos(a) + vx * Math.sin(a)) * ro,
          (uy * Math.cos(a) + vy * Math.sin(a)) * ro,
          (uz * Math.cos(a) + vz * Math.sin(a)) * ro
        );
        const depth = (z / ro + 1) / 2;
        dots.push({
          x: px2,
          y: py2,
          z,
          r: (o.ghostR ?? 0.9) * rs2,
          white: 0.72,
          a: (o.ghostA ?? 0.5) * (0.4 + 0.6 * depth)
        });
      }
      for (let m = 0; m < particles; m++) {
        const a = t * speed + m / particles * 2 * Math.PI + h2 * 6;
        const [px2, py2, z] = pt(
          (ux * Math.cos(a) + vx * Math.sin(a)) * ro,
          (uy * Math.cos(a) + vy * Math.sin(a)) * ro,
          (uz * Math.cos(a) + vz * Math.sin(a)) * ro
        );
        const depth = (z / ro + 1) / 2;
        dots.push({
          x: px2,
          y: py2,
          z,
          r: ((o.partR ?? 1.2) + (o.partRDepth ?? 1.6) * depth) * rs2,
          white: 0.3 - 0.22 * depth
        });
      }
    }
    return finalizeFrame(dots, [], o.rMin);
  };
  var frameRibbon = (size, t, o) => {
    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 * 0.78;
    const spin = o.spin ?? 1;
    const camTilt = 0.3;
    const pt = makeProj(t * 0.1 * spin, camTilt, cx, cy, 1);
    const rs2 = radiusScale(size, o.rsPow ?? 0.6);
    const dots = [];
    const ghostN = o.ghostN ?? 150;
    for (let i = 0; i < ghostN; i++) {
      const d = fibDir(i, ghostN);
      const [px2, py2, z] = pt(d[0] * R, d[1] * R, d[2] * R);
      const depth = (z / R + 1) / 2;
      dots.push({ x: px2, y: py2, z, r: 0.8 * rs2, white: 0.78, a: 0.1 + 0.22 * depth });
    }
    const ya2 = t * 0.24 * spin;
    const ta2 = o.faceOn ? -camTilt : 0.55 + 0.3 * Math.sin(t * 0.18) * spin;
    const ux = Math.cos(ya2);
    const uy = 0;
    const uz = Math.sin(ya2);
    const vx = -uz * Math.sin(ta2);
    const vy = Math.cos(ta2);
    const vz = ux * Math.sin(ta2);
    const nx = uy * vz - uz * vy;
    const ny = uz * vx - ux * vz;
    const nz = ux * vy - uy * vx;
    const wobAmp = 0.23 * (o.wobMul ?? 1);
    const baseR = o.faceOn ? R / (1 + 0.85 * wobAmp) : R;
    const baseLanes = o.lanes ?? 5;
    const segs = o.segs ?? 88;
    const lanes = Math.max(1, Math.round(baseLanes * (o.bandMul ?? 1)));
    for (let w = 0; w < lanes; w++) {
      const laneOff = (w - (lanes - 1) / 2) * 0.075;
      const edge = Math.abs(w - (lanes - 1) / 2) / Math.max(1, (lanes - 1) / 2);
      for (let k = 0; k < segs; k++) {
        const a = k / segs * 2 * Math.PI;
        const wob = (0.16 * Math.sin(a * 3 - t * 1.7 + w * 0.22) + 0.07 * Math.sin(a * 5 + t * 1.1)) * (o.wobMul ?? 1);
        const radial = o.faceOn ? 1 + wob : 1;
        const off = o.faceOn ? laneOff : laneOff + wob;
        const x2 = ux * Math.cos(a) + vx * Math.sin(a) + nx * off;
        const y = uy * Math.cos(a) + vy * Math.sin(a) + ny * off;
        const z = uz * Math.cos(a) + vz * Math.sin(a) + nz * off;
        const l = Math.sqrt(x2 * x2 + y * y + z * z);
        const rr2 = baseR * radial;
        const [px2, py2, zr2] = pt(x2 / l * rr2, y / l * rr2, z / l * rr2);
        const depth = (zr2 / R + 1) / 2;
        dots.push({
          x: px2,
          y: py2,
          z: zr2,
          r: ((o.rBase ?? 1.1) + (o.rDepth ?? 1.7) * depth) * (1 - 0.25 * edge) * rs2,
          white: 0.52 - 0.44 * depth + 0.18 * edge,
          a: 0.4 + 0.6 * depth
        });
      }
    }
    return finalizeFrame(dots, [], o.rMin);
  };
  var frameWeb = (size, t, o) => {
    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 * 0.8 * (o.spread ?? 1);
    const pt = makeProj(t * 0.12, 0.32, cx, cy, R);
    const rs2 = radiusScale(size, o.rsPow ?? 0.6);
    const nodeN = o.nodeN ?? 30;
    const thr = o.thr ?? 0.72;
    const nodeR = o.nodeR ?? 1.4;
    const nodeRDepth = o.nodeRDepth ?? 1.8;
    const nodes = [];
    for (let i = 0; i < nodeN; i++) {
      const d = fibDir(i, nodeN);
      const x2 = d[0] + 0.3 * (vnoise(i * 0.31 + 9, t * 0.24) - 0.5) * 2;
      const y = d[1] + 0.3 * (vnoise(i * 0.53 + 27, t * 0.21) - 0.5) * 2;
      const z = d[2] + 0.3 * (vnoise(i * 0.77 + 55, t * 0.27) - 0.5) * 2;
      const l = Math.sqrt(x2 * x2 + y * y + z * z);
      nodes.push([x2 / l, y / l, z / l]);
    }
    const lines = [];
    const dots = [];
    for (let i = 0; i < nodeN; i++) {
      for (let j = i + 1; j < nodeN; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist >= thr) continue;
        const [x1, y1, z1] = pt(nodes[i][0], nodes[i][1], nodes[i][2]);
        const [x2, y2, z2] = pt(nodes[j][0], nodes[j][1], nodes[j][2]);
        const depth = ((z1 + z2) / 2 + 1) / 2;
        lines.push({
          x1,
          y1,
          x2,
          y2,
          white: 0.42,
          a: (1 - dist / thr) * (0.3 + 0.55 * depth),
          w: Math.max(0.6, (o.lineW ?? 0.8) * rs2)
        });
      }
    }
    for (let i = 0; i < nodeN; i++) {
      const [px2, py2, z] = pt(nodes[i][0], nodes[i][1], nodes[i][2]);
      const depth = (z + 1) / 2;
      const pulse = 1 + 0.25 * Math.sin(t * 1.4 + i * 2.7);
      dots.push({
        x: px2,
        y: py2,
        z,
        r: (nodeR + nodeRDepth * depth) * pulse * rs2,
        white: 0.55 - 0.45 * depth
      });
    }
    const signals = o.signals ?? 5;
    for (let s = 0; s < signals; s++) {
      const seg = Math.floor(t * 0.55 + s * 7.31);
      const a = Math.floor(hashD(seg, s * 3.1 + 1.7) * nodeN);
      const b = Math.floor(hashD(seg, s * 5.7 + 4.2) * nodeN);
      if (a === b) continue;
      const f = frac(t * 0.55 + s * 7.31);
      const x2 = lerp(nodes[a][0], nodes[b][0], f);
      const y = lerp(nodes[a][1], nodes[b][1], f);
      const z = lerp(nodes[a][2], nodes[b][2], f);
      const l = Math.max(1e-6, Math.sqrt(x2 * x2 + y * y + z * z));
      const [px2, py2, zr2] = pt(x2 / l, y / l, z / l);
      const depth = (zr2 + 1) / 2;
      dots.push({
        x: px2,
        y: py2,
        z: zr2,
        r: (nodeR * 1.5 + nodeRDepth * depth) * rs2,
        white: 0.05,
        a: 0.5 + 0.5 * depth
      });
    }
    return finalizeFrame(dots, lines, o.rMin);
  };
  var MODE_FRAMES = {
    orbits: frameOrbits,
    globe: frameGlobe,
    rubik: frameRubik,
    wave: frameWave,
    web: frameWeb,
    braid: frameBraid,
    ribbon: frameRibbon,
    // ring shares ribbon's geometry — the `faceOn` profile flag switches it
    ring: frameRibbon,
    morph: frameMorph
  };
  var MODE_DRAWS = Object.fromEntries(
    Object.entries(MODE_FRAMES).map(([key, frame]) => [
      key,
      (ctx, size, t, dark, opts) => paintFrame(ctx, frame(size, t, opts), dark)
    ])
  );
  var STATE_TO_MODE = {
    working: "orbits",
    searching: "globe",
    solving: "rubik",
    listening: "wave",
    connecting: "web",
    weaving: "braid",
    composing: "ribbon",
    breathing: "ring",
    shaping: "morph"
  };
  var PRESETS = {
    orbits: {
      64: { speed: 1.885, count: 1, size: 1 },
      32: { speed: 2.9072, count: 0.4251, size: 1.6849 },
      20: { speed: 3.9, count: 0.238, size: 2.4 }
    },
    globe: {
      64: { speed: 2.015, count: 0.42, size: 1.15, extra: { scanMul: 4.08, dimBase: 0.45 } },
      32: { speed: 2.3803, count: 0.1839, size: 1.4769, extra: { scanMul: 4.2301, dimBase: 0.45 } },
      20: { speed: 2.665, count: 0.105, size: 1.75, extra: { scanMul: 4.335, dimBase: 0.45 } }
    },
    rubik: {
      64: { speed: 1.82, count: 0.35, size: 1.05 },
      32: { speed: 1.8964, count: 0.1537, size: 1.4951 },
      20: { speed: 1.95, count: 0.088, size: 1.9 }
    },
    wave: {
      64: { speed: 4.388, count: 0.341, size: 1 },
      32: { speed: 4.1512, count: 0.169, size: 1.3232 },
      20: { speed: 3.998, count: 0.105, size: 1.6 }
    },
    web: {
      64: { speed: 3.315, count: 1.35, size: 0.95 },
      32: { speed: 5.0104, count: 0.4942, size: 1.2571 },
      20: { speed: 6.63, count: 0.25, size: 1.52 }
    },
    braid: {
      64: { speed: 1.625, count: 0.5, size: 1 },
      32: { speed: 2.2234, count: 0.2056, size: 1.2011 },
      20: { speed: 2.75, count: 0.1125, size: 1.36 }
    },
    ribbon: {
      64: { speed: 2.34, count: 0.25, size: 0.85, extra: { spin: 0, bandMul: 3.9, wobMul: 1 } },
      32: { speed: 2.7776, count: 0.0969, size: 0.9766, extra: { spin: 0, bandMul: 4.49, wobMul: 1 } },
      20: { speed: 3.12, count: 0.051, size: 1.073, extra: { spin: 0, bandMul: 4.94, wobMul: 1 } }
    },
    ring: {
      64: { speed: 3.24, count: 0.25, size: 0.956, extra: { spin: 0, bandMul: 3.627, wobMul: 0.368 } },
      32: { speed: 3.5517, count: 0.0678, size: 1.31, extra: { spin: 0, bandMul: 3.8265, wobMul: 0.4751 } },
      20: { speed: 3.78, count: 0.028, size: 1.622, extra: { spin: 0, bandMul: 3.968, wobMul: 0.565 } }
    },
    morph: {
      64: { speed: 2.405, count: 0.702, size: 0.395, extra: { spread: 1.45 } },
      32: { speed: 2.2057, count: 0.5937, size: 0.6916, extra: { spread: 1.45 } },
      20: { speed: 2.08, count: 0.53, size: 1.011, extra: { spread: 1.45 } }
    }
  };
  var cache2 = /* @__PURE__ */ new Map();
  function resolvePreset(state, size) {
    const key = `${state}-${size}`;
    const hit = cache2.get(key);
    if (hit) return hit;
    const mode = STATE_TO_MODE[state];
    const preset = PRESETS[mode][size];
    let opts = { ...BASE_PROFILES[mode] };
    if (preset.count !== 1) opts = scaleCounts(opts, preset.count);
    if (preset.size !== 1) opts = scaleRadii(opts, preset.size);
    if (preset.extra) opts = { ...opts, ...preset.extra };
    const resolved = { mode, speed: preset.speed, opts };
    cache2.set(key, resolved);
    return resolved;
  }

  // node_modules/thinking-orbs/dist/index.es.js
  function ancestorTheme(el) {
    let node = el;
    while (node) {
      const attr = node.getAttribute("data-theme");
      if (attr === "dark") return true;
      if (attr === "light") return false;
      if (node.classList.contains("dark")) return true;
      if (node.classList.contains("light")) return false;
      node = node.parentElement;
    }
    return null;
  }
  function systemDark() {
    return typeof matchMedia === "undefined" || matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function useResolvedDark(theme, hostRef) {
    const [dark, setDark] = (0, import_react7.useState)(true);
    (0, import_react7.useEffect)(() => {
      if (theme === "dark") {
        setDark(true);
        return;
      }
      if (theme === "light") {
        setDark(false);
        return;
      }
      const resolve = () => {
        const fromTree = ancestorTheme(hostRef.current);
        setDark(fromTree ?? systemDark());
      };
      resolve();
      const mq2 = typeof matchMedia !== "undefined" ? matchMedia("(prefers-color-scheme: dark)") : null;
      const onMq = () => resolve();
      mq2 == null ? void 0 : mq2.addEventListener("change", onMq);
      let mo = null;
      if (typeof MutationObserver !== "undefined" && hostRef.current) {
        mo = new MutationObserver(resolve);
        mo.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["class", "data-theme"],
          subtree: true
        });
      }
      return () => {
        mq2 == null ? void 0 : mq2.removeEventListener("change", onMq);
        mo == null ? void 0 : mo.disconnect();
      };
    }, [theme, hostRef]);
    return dark;
  }
  function useReducedMotion2() {
    const [reduced, setReduced] = (0, import_react7.useState)(false);
    (0, import_react7.useEffect)(() => {
      if (typeof matchMedia === "undefined") return;
      const mq2 = matchMedia("(prefers-reduced-motion: reduce)");
      setReduced(mq2.matches);
      const on2 = (e2) => setReduced(e2.matches);
      mq2.addEventListener("change", on2);
      return () => mq2.removeEventListener("change", on2);
    }, []);
    return reduced;
  }
  var GRAVITY_DEFAULTS = Object.freeze({
    reach: 160,
    strength: 11,
    deform: 19,
    taper: 1.95,
    curve: 2.8,
    falloff: 24,
    smoothing: 0.3,
    handover: 0.6,
    squash: 1.2,
    blur: 1,
    fadeMs: 180
  });
  var tuning = null;
  var sprite = null;
  var spriteImg = null;
  var src = null;
  var srcDpr = 0;
  var spriteDpr = 0;
  var disabled = false;
  var disabledReason = "";
  var slowFrames = 0;
  function setGravitySprite(next) {
    if (next === sprite) return;
    sprite = next;
    spriteImg = null;
    src = null;
    disabled = false;
    slowFrames = 0;
    spriteDpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    hideCursor();
    if (!next || typeof Image === "undefined") return;
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (sprite !== next) return;
      spriteImg = img;
      kick();
    };
    img.src = next.src;
  }
  var instances = /* @__PURE__ */ new Set();
  var tracking = false;
  var raf = 0;
  var last = 0;
  var px = Number.NaN;
  var py = Number.NaN;
  var lpx = 0;
  var lpy = 0;
  var uS = 0;
  var near = null;
  var pointerIsMouse = true;
  var typing = false;
  function attachGravity(el, options = true) {
    const o = options === true ? {} : options;
    if (o.sprite) setGravitySprite(o.sprite);
    const inst = {
      el,
      opts: {
        reach: Math.max(1, o.reach ?? GRAVITY_DEFAULTS.reach),
        strength: Math.max(0, Math.min(64, o.strength ?? GRAVITY_DEFAULTS.strength)),
        deform: Math.max(0, Math.min(32, o.deform ?? GRAVITY_DEFAULTS.deform)),
        taper: Math.max(1, Math.min(4, o.taper ?? GRAVITY_DEFAULTS.taper)),
        curve: Math.max(1, Math.min(4, o.curve ?? GRAVITY_DEFAULTS.curve)),
        falloff: Math.max(2, Math.min(200, o.falloff ?? GRAVITY_DEFAULTS.falloff)),
        smoothing: clamp01(o.smoothing ?? GRAVITY_DEFAULTS.smoothing),
        handover: clamp01(o.handover ?? GRAVITY_DEFAULTS.handover),
        squash: Math.max(0, Math.min(3, o.squash ?? GRAVITY_DEFAULTS.squash)),
        blur: Math.max(0, Math.min(24, o.blur ?? GRAVITY_DEFAULTS.blur)),
        fadeMs: Math.max(1, o.fadeMs ?? GRAVITY_DEFAULTS.fadeMs)
      }
    };
    instances.add(inst);
    ensureTracking();
    kick();
    return () => {
      instances.delete(inst);
      if (near === inst) near = null;
      if (instances.size === 0) queueMicrotask(() => {
        if (instances.size === 0) stopTracking();
      });
    };
  }
  var clamp01 = (v2) => Math.max(0, Math.min(1, v2));
  var effective = (inst) => tuning ? { ...inst.opts, ...tuning } : inst.opts;
  var mq = (q2) => typeof window.matchMedia === "function" && window.matchMedia(q2).matches;
  function swapBlockedBy() {
    if (disabled) return disabledReason || "disabled by a fail-safe";
    if (!sprite) return "no pointer sprite set";
    if (!spriteImg) return "pointer sprite still loading";
    if (mq("(prefers-reduced-motion: reduce)")) return "prefers-reduced-motion is on";
    if (mq("(forced-colors: active)")) return "forced colours are active";
    if (!mq("(pointer: fine)") || !mq("(hover: hover)")) return "no fine pointer";
    if ((window.devicePixelRatio || 1) !== spriteDpr) return "display scale changed since the sprite was set \u2014 reload";
    const vv = window.visualViewport;
    if (vv && Math.abs(vv.scale - 1) > 1e-3) return "page is zoomed";
    return null;
  }
  function swapAllowed() {
    return swapBlockedBy() === null;
  }
  function ensureTracking() {
    if (tracking || instances.size === 0 || typeof document === "undefined") return;
    if (!mq("(pointer: fine)")) return;
    tracking = true;
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointercancel", onLeave);
    document.addEventListener("keydown", onKey, { passive: true });
    document.addEventListener("visibilitychange", onLeave);
    window.addEventListener("blur", onLeave);
  }
  function stopTracking() {
    if (!tracking) return;
    tracking = false;
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerleave", onLeave);
    document.removeEventListener("pointercancel", onLeave);
    document.removeEventListener("keydown", onKey);
    document.removeEventListener("visibilitychange", onLeave);
    window.removeEventListener("blur", onLeave);
    if (raf !== 0) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
    near = null;
    uS = 0;
    hideCursor();
    if (curEl) {
      curEl.remove();
      curEl = null;
      curCanvas = null;
      curCtx = null;
    }
    if (hideStyle) {
      hideStyle.remove();
      hideStyle = null;
    }
  }
  function onMove(e2) {
    pointerIsMouse = e2.pointerType === "mouse" || e2.pointerType === "";
    typing = false;
    moveSeq++;
    px = lpx = e2.clientX;
    py = lpy = e2.clientY;
    if (releasePending) {
      releasePending = false;
      hideSprite();
      amp = 0;
      bend = 0;
      wcx = wcy = Number.NaN;
    }
    kick();
  }
  function onKey() {
    typing = true;
    hideCursor();
  }
  function onLeave() {
    px = py = Number.NaN;
    kick();
  }
  function kick() {
    if (!tracking || raf !== 0) return;
    last = performance.now();
    raf = requestAnimationFrame(step);
  }
  var curEl = null;
  var curCanvas = null;
  var curCtx = null;
  var curShown = false;
  var HIDE_CLASS = "thinking-orb-gravity-hide";
  var hideStyle = null;
  var hiding = false;
  var naturalCursor = /* @__PURE__ */ new WeakMap();
  var moveSeq = 0;
  var claimMove = -1;
  var stepSeq = 0;
  var claimStep = -1;
  function ensureCursor() {
    if (curEl) return true;
    const el = document.createElement("div");
    el.className = "thinking-orb-gravity-cursor";
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;display:none";
    const c2 = document.createElement("canvas");
    c2.style.display = "block";
    el.appendChild(c2);
    document.body.appendChild(el);
    const ctx = c2.getContext("2d");
    if (!ctx) {
      el.remove();
      return false;
    }
    curEl = el;
    curCanvas = c2;
    curCtx = ctx;
    curDpr = 0;
    return true;
  }
  function ensureHideStyle() {
    if (hideStyle) return;
    hideStyle = document.createElement("style");
    hideStyle.textContent = `html.${HIDE_CLASS}, html.${HIDE_CLASS} * { cursor: none !important; }`;
    document.head.appendChild(hideStyle);
  }
  function cursorOf(el) {
    const cached = naturalCursor.get(el);
    if (cached) return cached;
    const root = document.documentElement;
    const had = root.classList.contains(HIDE_CLASS);
    if (had) root.classList.remove(HIDE_CLASS);
    const cur = getComputedStyle(el).cursor;
    if (had) root.classList.add(HIDE_CLASS);
    naturalCursor.set(el, cur);
    return cur;
  }
  function claimCursor(x2, y) {
    const target = document.elementFromPoint(x2, y);
    if (!target) return false;
    const cur = cursorOf(target);
    if (cur !== "auto" && cur !== "default") {
      releaseCursor();
      return false;
    }
    if (!hiding) {
      ensureHideStyle();
      document.documentElement.classList.add(HIDE_CLASS);
      hiding = true;
      claimMove = moveSeq;
      claimStep = stepSeq;
    }
    return true;
  }
  function releaseCursor() {
    if (!hiding) return;
    document.documentElement.classList.remove(HIDE_CLASS);
    hiding = false;
    claimMove = -1;
  }
  function hideSprite() {
    if (curEl && curShown) {
      curEl.style.display = "none";
      curShown = false;
    }
  }
  var LINGER_MS = 500;
  var lastReach = Number.NEGATIVE_INFINITY;
  var releasePending = false;
  function hideCursor() {
    releasePending = false;
    releaseCursor();
    hideSprite();
    amp = 0;
    bend = 0;
    wcx = wcy = Number.NaN;
  }
  var _c = { cx: 0, cy: 0, r: 0 };
  var amp = 0;
  var bend = 0;
  var wcx = Number.NaN;
  var wcy = Number.NaN;
  var PAD = 48;
  var PASSES = 10;
  var refCanvas = null;
  var refCtx = null;
  var bentCanvas = null;
  var bentCtx = null;
  var bentData = null;
  var curDpr = 0;
  var curW = 0;
  var curH = 0;
  function readSprite(dpr) {
    if (!spriteImg || !sprite) return null;
    const c2 = document.createElement("canvas");
    c2.width = Math.ceil(sprite.width * dpr);
    c2.height = Math.ceil(sprite.height * dpr);
    const g2 = c2.getContext("2d", { willReadFrequently: true });
    if (!g2) return null;
    g2.scale(dpr, dpr);
    g2.drawImage(spriteImg, 0, 0, sprite.width, sprite.height);
    return g2.getImageData(0, 0, c2.width, c2.height);
  }
  function bendSprite(B, taper, P, hx, hy, cxo, cyo) {
    if (!src || !bentData) return;
    const OW = bentData.width, OH = bentData.height;
    const S2 = src, SW = S2.width, SH = S2.height, sd = S2.data;
    const od = bentData.data;
    od.fill(0);
    const L = Math.max(1, Math.hypot(SW, SH));
    const tdx = cxo - hx, tdy = cyo - hy;
    const tdl = Math.hypot(tdx, tdy) || 1;
    const tux = tdx / tdl, tuy = tdy / tdl;
    const x1 = Math.max(0, Math.floor(P + Math.min(0, B * tux) - 3)), x2 = Math.min(OW, Math.ceil(P + SW + Math.max(0, B * tux) + 3));
    const y1 = Math.max(0, Math.floor(P + Math.min(0, B * tuy) - 3)), y2 = Math.min(OH, Math.ceil(P + SH + Math.max(0, B * tuy) + 3));
    for (let y = y1; y < y2; y++) {
      for (let x3 = x1; x3 < x2; x3++) {
        const i2 = (y * OW + x3) * 4;
        let sx = x3 - P, sy = y - P;
        if (B > 0.01) {
          let qx = x3, qy = y;
          let m2 = 0, dx = 0, dy = 0, dl = 1;
          for (let it2 = 0; it2 < 7; it2++) {
            const s = Math.hypot(qx - hx, qy - hy) / L;
            m2 = B * Math.pow(Math.min(1, s), taper);
            dx = cxo - qx;
            dy = cyo - qy;
            dl = Math.hypot(dx, dy) || 1;
            qx += (x3 - m2 * dx / dl - qx) * 0.5;
            qy += (y - m2 * dy / dl - qy) * 0.5;
          }
          const ex = qx + m2 * dx / dl - x3, ey = qy + m2 * dy / dl - y;
          if (ex * ex + ey * ey > 2.25) {
            od[i2] = od[i2 + 1] = od[i2 + 2] = od[i2 + 3] = 0;
            continue;
          }
          sx = qx - P;
          sy = qy - P;
        }
        const x0 = Math.floor(sx), y0 = Math.floor(sy);
        if (x0 < -1 || y0 < -1 || x0 >= SW || y0 >= SH) {
          od[i2] = od[i2 + 1] = od[i2 + 2] = od[i2 + 3] = 0;
          continue;
        }
        const fx = sx - x0, fy = sy - y0;
        let r = 0, g2 = 0, b2 = 0, a = 0;
        for (let k = 0; k < 4; k++) {
          const xx = x0 + (k & 1), yy = y0 + (k >> 1);
          if (xx < 0 || yy < 0 || xx >= SW || yy >= SH) continue;
          const wgt = (k & 1 ? fx : 1 - fx) * (k >> 1 ? fy : 1 - fy);
          const j = (yy * SW + xx) * 4;
          const wa2 = wgt * sd[j + 3];
          r += sd[j] * wa2;
          g2 += sd[j + 1] * wa2;
          b2 += sd[j + 2] * wa2;
          a += wa2;
        }
        if (a > 0) {
          od[i2] = r / a;
          od[i2 + 1] = g2 / a;
          od[i2 + 2] = b2 / a;
          od[i2 + 3] = a;
        } else {
          od[i2] = od[i2 + 1] = od[i2 + 2] = od[i2 + 3] = 0;
        }
      }
    }
  }
  function drawCursor(inst, w, dt) {
    if (!curCtx || !curCanvas || !curEl || !sprite || !spriteImg) return;
    const sp = sprite;
    const o = effective(inst);
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    if (!refCanvas) {
      refCanvas = document.createElement("canvas");
      refCtx = refCanvas.getContext("2d");
    }
    if (!bentCanvas) {
      bentCanvas = document.createElement("canvas");
      bentCtx = bentCanvas.getContext("2d");
    }
    if (!refCtx || !bentCtx) return;
    if (!src || srcDpr !== dpr) {
      src = readSprite(dpr);
      srcDpr = dpr;
    }
    if (!src) return;
    if (dpr !== curDpr || sp.width !== curW || sp.height !== curH) {
      curDpr = dpr;
      curW = sp.width;
      curH = sp.height;
      const OW2 = Math.ceil((sp.width + 2 * PAD) * dpr), OH2 = Math.ceil((sp.height + 2 * PAD) * dpr);
      curCanvas.width = refCanvas.width = bentCanvas.width = OW2;
      curCanvas.height = refCanvas.height = bentCanvas.height = OH2;
      curCanvas.style.width = `${sp.width + 2 * PAD}px`;
      curCanvas.style.height = `${sp.height + 2 * PAD}px`;
      bentData = bentCtx.createImageData(OW2, OH2);
    }
    const OW = curCanvas.width, OH = curCanvas.height;
    const k = Math.pow(w, o.curve);
    const ease = 1 - Math.exp(-dt / (0.012 + o.smoothing * 0.14));
    amp += (o.strength * k - amp) * ease;
    bend += (o.deform * k - bend) * ease;
    let A2 = amp * dpr, B = bend * dpr;
    if (Number.isNaN(wcx)) {
      wcx = _c.cx;
      wcy = _c.cy;
    } else {
      const swing = 1 - Math.exp(-dt / (0.05 + o.handover * 0.6));
      wcx += (_c.cx - wcx) * swing;
      wcy += (_c.cy - wcy) * swing;
    }
    const P = PAD * dpr;
    const hx = P + sp.hotX * dpr, hy = P + sp.hotY * dpr;
    const cxo = hx + (wcx - lpx) * dpr, cyo = hy + (wcy - lpy) * dpr;
    const dTip = Math.hypot(cxo - hx, cyo - hy) || 1;
    const ux = (cxo - hx) / dTip, uy = (cyo - hy) / dTip;
    const F = o.falloff * dpr;
    if (o.squash > 0) {
      const axL = Math.hypot(sp.width * 0.5 - sp.hotX, sp.height - sp.hotY) || 1;
      const axx = (sp.width * 0.5 - sp.hotX) / axL, axy = (sp.height - sp.hotY) / axL;
      const against = Math.max(0, -(ux * axx + uy * axy));
      const gain = 1 + o.squash * against;
      A2 *= gain;
      B *= gain;
    }
    const grow = Math.ceil(Math.max(B, 1)) + 4;
    const bx1 = Math.floor(Math.min(P, P + ux * A2) - grow), by1 = Math.floor(Math.min(P, P + uy * A2) - grow);
    const bx2 = Math.ceil(Math.max(P, P + ux * A2) + sp.width * dpr + grow), by2 = Math.ceil(Math.max(P, P + uy * A2) + sp.height * dpr + grow);
    const rx = Math.max(0, bx1), ry = Math.max(0, by1);
    const rw = Math.min(OW, bx2) - rx, rh = Math.min(OH, by2) - ry;
    if (B > 0.01) {
      bendSprite(B, o.taper, P, hx, hy, cxo, cyo);
      bentCtx.putImageData(bentData, 0, 0, rx, ry, rw, rh);
    } else {
      bentCtx.setTransform(1, 0, 0, 1, 0, 0);
      bentCtx.clearRect(0, 0, OW, OH);
      bentCtx.drawImage(spriteImg, P, P, sp.width * dpr, sp.height * dpr);
    }
    const ctx = curCtx, rctx = refCtx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, OW, OH);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(bentCanvas, 0, 0);
    if (A2 > 0.5) {
      const bcx = P + sp.width * dpr * 0.42, bcy = P + sp.height * dpr * 0.5;
      const half = F / 2;
      const mask = rctx.createLinearGradient(bcx - ux * half, bcy - uy * half, bcx + ux * half, bcy + uy * half);
      mask.addColorStop(0, "rgba(0,0,0,0)");
      mask.addColorStop(1, "rgba(0,0,0,1)");
      for (let i2 = PASSES; i2 >= 1; i2--) {
        const t = i2 / PASSES;
        rctx.setTransform(1, 0, 0, 1, 0, 0);
        rctx.globalCompositeOperation = "source-over";
        rctx.globalAlpha = 1;
        rctx.clearRect(rx, ry, rw, rh);
        rctx.drawImage(bentCanvas, rx, ry, rw, rh, rx + ux * A2 * t, ry + uy * A2 * t, rw, rh);
        rctx.globalCompositeOperation = "destination-in";
        rctx.fillStyle = mask;
        rctx.fillRect(rx, ry, rw, rh);
        ctx.globalCompositeOperation = "destination-over";
        ctx.globalAlpha = Math.pow(1 - t, 1.6) * 0.9;
        if (o.blur > 0) ctx.filter = `blur(${(o.blur * Math.sqrt(t) * dpr).toFixed(2)}px)`;
        ctx.drawImage(refCanvas, rx, ry, rw, rh, rx, ry, rw, rh);
      }
      ctx.filter = "none";
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    }
    curEl.style.transform = `translate3d(${(lpx - sp.hotX - PAD).toFixed(2)}px,${(lpy - sp.hotY - PAD).toFixed(2)}px,0)`;
    if (!curShown) {
      curEl.style.display = "";
      curShown = true;
    }
  }
  function step(now) {
    raf = 0;
    if (!tracking) return;
    const t0 = performance.now();
    try {
      stepInner(now);
    } catch (err) {
      disabled = true;
      disabledReason = `disabled after an error (${err instanceof Error ? err.message : String(err)})`;
      hideCursor();
      near = null;
      if (typeof console !== "undefined") console.warn("thinking-orbs: gravity disabled after error", err);
      return;
    }
    const took = performance.now() - t0;
    if (took > 12) {
      if (++slowFrames >= 30 && !disabled) {
        disabled = true;
        disabledReason = `disabled after slow frames (~${Math.round(took)}ms each)`;
        hideCursor();
      }
    } else slowFrames = 0;
  }
  function stepInner(now) {
    const dt = Math.min(0.05, Math.max(1e-3, (now - last) / 1e3));
    last = now;
    stepSeq++;
    let best = null;
    let u = 0;
    if (!Number.isNaN(px) && swapAllowed()) {
      let bestEdge = Number.POSITIVE_INFINITY;
      for (const inst of instances) {
        if (!inst.el.isConnected) continue;
        const r = inst.el.getBoundingClientRect();
        if (r.width <= 0) continue;
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const orbR = Math.min(r.width, r.height) / 2;
        const reach = effective(inst).reach;
        if (px < cx - orbR - reach || px > cx + orbR + reach || py < cy - orbR - reach || py > cy + orbR + reach) continue;
        const edge = Math.hypot(px - cx, py - cy) - orbR;
        if (edge <= reach && edge < bestEdge) {
          bestEdge = edge;
          best = inst;
          _c.cx = cx;
          _c.cy = cy;
          _c.r = orbR;
        }
      }
      if (best) {
        const t = 1 - Math.max(0, bestEdge) / effective(best).reach;
        u = t * t * (3 - 2 * t);
        lastReach = now;
      }
    }
    const nearest = near ?? best;
    const fade = nearest ? effective(nearest).fadeMs : GRAVITY_DEFAULTS.fadeMs;
    const a = 1 - Math.exp(-(dt * 1e3) / (fade / 3));
    uS += (u - uS) * a;
    if (best && best !== near) near = best;
    if (!best && uS < 2e-3) {
      uS = 0;
      if (near && hiding && !releasePending && pointerIsMouse && !typing && !Number.isNaN(px)) {
        if (now - lastReach < LINGER_MS) {
          if (claimCursor(px, py)) drawCursor(near, 0, dt);
          else hideSprite();
          raf = requestAnimationFrame(step);
          return;
        }
        if (curShown) {
          releaseCursor();
          releasePending = true;
          near = null;
          return;
        }
      }
      near = null;
      hideCursor();
      return;
    }
    if (!near) return;
    if (uS > 2e-3 && pointerIsMouse && !typing && !Number.isNaN(px) && ensureCursor() && claimCursor(px, py)) {
      const holding = claimMove === moveSeq && stepSeq - claimStep < 2 && !curShown;
      if (holding) hideSprite();
      else drawCursor(near, uS, dt);
    } else if (uS > 2e-3 && !Number.isNaN(px) && pointerIsMouse && !typing) {
      hideSprite();
    } else {
      hideCursor();
    }
    raf = requestAnimationFrame(step);
  }
  function parseTint(color) {
    if (!color) return void 0;
    const hex = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hex) {
      let h2 = hex[1];
      if (h2.length === 3) h2 = h2.replace(/./g, (c2) => c2 + c2);
      const n = parseInt(h2, 16);
      return { r: n >> 16 & 255, g: n >> 8 & 255, b: n & 255 };
    }
    const fn2 = color.trim().match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
    if (fn2) return { r: Number(fn2[1]), g: Number(fn2[2]), b: Number(fn2[3]) };
    return void 0;
  }
  var LABELS = {
    working: "Working\u2026",
    searching: "Searching\u2026",
    solving: "Solving\u2026",
    listening: "Listening\u2026",
    connecting: "Connecting\u2026",
    weaving: "Weaving\u2026",
    composing: "Composing\u2026",
    breathing: "Thinking\u2026",
    shaping: "Shaping\u2026"
  };
  function ThinkingOrb({
    state = "working",
    size = 64,
    theme = "auto",
    speed = 1,
    paused = false,
    color,
    dots = 1,
    dotSize = 1,
    opts: optsOverride,
    frame: customFrame,
    gravity,
    style,
    "aria-label": ariaLabel,
    ...rest
  }) {
    const ref = (0, import_react7.useRef)(null);
    const optsKey = optsOverride ? JSON.stringify(optsOverride) : "";
    const dark = useResolvedDark(theme, ref);
    const gravityKey = gravity ? JSON.stringify(gravity) : "";
    (0, import_react7.useEffect)(() => {
      const canvas = ref.current;
      if (!canvas || !gravity) return;
      return attachGravity(canvas, gravity === true ? true : gravity);
    }, [gravityKey]);
    const reduced = useReducedMotion2();
    (0, import_react7.useEffect)(() => {
      const canvas = ref.current;
      if (!canvas) return;
      const dpr = Math.min(2, typeof devicePixelRatio !== "undefined" && devicePixelRatio || 1);
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const { mode, speed: baseSpeed, opts: presetOpts } = resolvePreset(state, size);
      let opts = dots !== 1 ? scaleCounts(presetOpts, Math.max(0.1, dots)) : presetOpts;
      if (dotSize !== 1) opts = scaleRadii(opts, Math.max(0.1, dotSize));
      if (optsOverride) opts = { ...opts, ...optsOverride };
      const frameFn = customFrame ?? MODE_FRAMES[mode];
      const tint = parseTint(color);
      const effSpeed = baseSpeed * speed;
      const frame = (tSec) => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, size, size);
        paintFrame(ctx, frameFn(size, tSec, opts), dark, tint);
      };
      if (reduced) {
        frame(0.6);
        return;
      }
      let raf2 = 0;
      let running = false;
      const loop = () => {
        frame(performance.now() / 1e3 * effSpeed);
        if (running) raf2 = requestAnimationFrame(loop);
      };
      const start = () => {
        if (running || paused) return;
        running = true;
        raf2 = requestAnimationFrame(loop);
      };
      const stop = () => {
        running = false;
        cancelAnimationFrame(raf2);
      };
      frame(performance.now() / 1e3 * effSpeed);
      let visible = true;
      const io = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && document.visibilityState !== "hidden") start();
        else stop();
      }) : null;
      io == null ? void 0 : io.observe(canvas);
      const onVis = () => {
        if (document.visibilityState === "hidden") stop();
        else if (visible) start();
      };
      document.addEventListener("visibilitychange", onVis);
      if (!io) start();
      return () => {
        stop();
        io == null ? void 0 : io.disconnect();
        document.removeEventListener("visibilitychange", onVis);
      };
    }, [state, size, dark, speed, paused, reduced, color, dots, dotSize, optsKey, customFrame]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "canvas",
      {
        ref,
        role: "img",
        "aria-label": ariaLabel ?? LABELS[state],
        style: { width: size, height: size, display: "block", ...style },
        ...rest
      }
    );
  }

  // src/fx/bundle-entry.jsx
  try {
    Nr({ cursor: false });
  } catch (e) {
    console.warn("MetalFx cursor light config error:", e);
  }
  function LiquidActionMenu({ onAddContent, onImportPoster }) {
    const [open, setOpen] = (0, import_react8.useState)(false);
    const containerRef = (0, import_react8.useRef)(null);
    (0, import_react8.useEffect)(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape" && open) setOpen(false);
      };
      const handleClickOutside = (e) => {
        if (open && containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("pointerdown", handleClickOutside);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("pointerdown", handleClickOutside);
      };
    }, [open]);
    const toggle = () => setOpen((prev) => !prev);
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        ref: containerRef,
        className: "memento-liquid-fab-container",
        style: {
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9990,
          pointerEvents: "none"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement("div", { style: { pointerEvents: "auto" } }, /* @__PURE__ */ import_react8.default.createElement(
        Liquid,
        {
          blur: 6,
          contrast: 18,
          fill: "var(--p-red, #da525d)",
          shadow: "0 8px 24px rgba(218,82,93,0.38), 0 2px 8px rgba(0,0,0,0.3)"
        },
        /* @__PURE__ */ import_react8.default.createElement(Liquid.Item, { x: 0, y: 0, transition: "bouncy" }, /* @__PURE__ */ import_react8.default.createElement(
          "button",
          {
            type: "button",
            className: `memento-liquid-fab-trigger ${open ? "is-active" : ""}`,
            onClick: toggle,
            "aria-label": open ? "Close action menu" : "Open action menu",
            "aria-expanded": open,
            title: "Add content or import poster",
            style: {
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "none",
              background: "var(--p-red, #da525d)",
              color: "#ffffff",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
            }
          },
          /* @__PURE__ */ import_react8.default.createElement(
            "svg",
            {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: {
                transform: open ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            },
            /* @__PURE__ */ import_react8.default.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ import_react8.default.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          )
        )),
        /* @__PURE__ */ import_react8.default.createElement(
          Liquid.Item,
          {
            x: 0,
            y: open ? -64 : 0,
            transition: "bouncy",
            delay: open ? 0 : 35
          },
          /* @__PURE__ */ import_react8.default.createElement(
            "button",
            {
              type: "button",
              className: "memento-liquid-action-btn",
              onClick: () => {
                setOpen(false);
                if (typeof onAddContent === "function") onAddContent();
              },
              "aria-label": "Add Content",
              tabIndex: open ? 0 : -1,
              style: {
                display: open ? "inline-flex" : "none",
                alignItems: "center",
                gap: "8px",
                height: "46px",
                padding: "0 16px 0 12px",
                borderRadius: "23px",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "var(--surface, #141414)",
                color: "var(--ink, #ffffff)",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "var(--sans)",
                whiteSpace: "nowrap",
                position: "absolute",
                right: "0",
                bottom: "0"
              }
            },
            /* @__PURE__ */ import_react8.default.createElement(
              "span",
              {
                style: {
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--p-maple, #c59f6b)",
                  color: "#ffffff",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0
                }
              },
              /* @__PURE__ */ import_react8.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react8.default.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "2.18", ry: "2.18" }), /* @__PURE__ */ import_react8.default.createElement("line", { x1: "7", y1: "2", x2: "7", y2: "22" }), /* @__PURE__ */ import_react8.default.createElement("line", { x1: "17", y1: "2", x2: "17", y2: "22" }), /* @__PURE__ */ import_react8.default.createElement("line", { x1: "2", y1: "12", x2: "22", y2: "12" }), /* @__PURE__ */ import_react8.default.createElement("line", { x1: "2", y1: "7", x2: "7", y2: "7" }), /* @__PURE__ */ import_react8.default.createElement("line", { x1: "2", y1: "17", x2: "7", y2: "17" }), /* @__PURE__ */ import_react8.default.createElement("line", { x1: "17", y1: "17", x2: "22", y2: "17" }), /* @__PURE__ */ import_react8.default.createElement("line", { x1: "17", y1: "7", x2: "22", y2: "7" }))
            ),
            /* @__PURE__ */ import_react8.default.createElement("span", null, "Add Content")
          )
        ),
        /* @__PURE__ */ import_react8.default.createElement(
          Liquid.Item,
          {
            x: 0,
            y: open ? -120 : 0,
            transition: "bouncy",
            delay: open ? 35 : 0
          },
          /* @__PURE__ */ import_react8.default.createElement(
            "button",
            {
              type: "button",
              className: "memento-liquid-action-btn",
              onClick: () => {
                setOpen(false);
                if (typeof onImportPoster === "function") onImportPoster();
              },
              "aria-label": "Import Poster",
              tabIndex: open ? 0 : -1,
              style: {
                display: open ? "inline-flex" : "none",
                alignItems: "center",
                gap: "8px",
                height: "46px",
                padding: "0 16px 0 12px",
                borderRadius: "23px",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "var(--surface, #141414)",
                color: "var(--ink, #ffffff)",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "var(--sans)",
                whiteSpace: "nowrap",
                position: "absolute",
                right: "0",
                bottom: "0"
              }
            },
            /* @__PURE__ */ import_react8.default.createElement(
              "span",
              {
                style: {
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--p-green, #96d1aa)",
                  color: "#1a3322",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0
                }
              },
              /* @__PURE__ */ import_react8.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react8.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }), /* @__PURE__ */ import_react8.default.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }), /* @__PURE__ */ import_react8.default.createElement("polyline", { points: "21 15 16 10 5 21" }))
            ),
            /* @__PURE__ */ import_react8.default.createElement("span", null, "Import Poster")
          )
        )
      ))
    );
  }
  function MetalSearchInput({
    id,
    name = "query",
    placeholder = "Start typing a title...",
    initialValue = "",
    onInput,
    onKeyDown,
    onFocus,
    onBlur,
    theme = "auto",
    autoComplete = "off",
    minLength = 2
  }) {
    const containerRef = (0, import_react8.useRef)(null);
    const inputRef = (0, import_react8.useRef)(null);
    const [val, setVal] = (0, import_react8.useState)(initialValue);
    try {
      Bs(containerRef);
    } catch (err) {
    }
    const handleChange = (e) => {
      const next = e.target.value;
      setVal(next);
      if (onInput) onInput(e);
    };
    const handleClear = () => {
      setVal("");
      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.focus();
        const event = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(event);
        if (onInput) onInput(event);
      }
    };
    const supported = typeof mr === "function" ? mr() : true;
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        ref: containerRef,
        className: "memento-metal-search-container",
        style: {
          position: "relative",
          width: "100%",
          maxWidth: "560px",
          display: "inline-block"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement(
        no,
        {
          preset: "chromatic",
          variant: "button",
          strength: 0.9,
          innerShadow: { alpha: 0.9, offsetY: 1, blur: 0.5 },
          theme
        },
        /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            className: "memento-metal-search-inner",
            style: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "46px",
              borderRadius: "8px",
              background: "var(--surface, #111111)",
              padding: "0 12px 0 16px",
              transition: "background 0.2s ease"
            }
          },
          /* @__PURE__ */ import_react8.default.createElement(
            "svg",
            {
              width: "17",
              height: "17",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "var(--muted, #8e8e93)",
              strokeWidth: "2.2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { flexShrink: 0, marginRight: "10px" }
            },
            /* @__PURE__ */ import_react8.default.createElement("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ import_react8.default.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ),
          /* @__PURE__ */ import_react8.default.createElement(
            "input",
            {
              ref: inputRef,
              id,
              name,
              type: "search",
              placeholder,
              value: val,
              autoComplete,
              minLength,
              onChange: handleChange,
              onKeyDown,
              onFocus,
              onBlur,
              className: "memento-metal-search-input-field",
              style: {
                flex: 1,
                height: "100%",
                border: "none",
                background: "transparent",
                color: "var(--ink, #ffffff)",
                fontSize: "14px",
                fontFamily: "var(--sans)",
                outline: "none",
                padding: 0
              }
            }
          ),
          val ? /* @__PURE__ */ import_react8.default.createElement(
            "button",
            {
              type: "button",
              onClick: handleClear,
              "aria-label": "Clear search",
              style: {
                background: "transparent",
                border: "none",
                color: "var(--muted, #8e8e93)",
                cursor: "pointer",
                fontSize: "16px",
                padding: "4px",
                display: "grid",
                placeItems: "center",
                borderRadius: "50%"
              }
            },
            "\u2715"
          ) : null
        )
      )
    );
  }
  function ThinkingOrbContainer({
    size = 64,
    state = "listening",
    text = "Loading...",
    theme = "auto",
    inline = false
  }) {
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: "memento-thinking-orb-wrap",
        style: {
          display: inline ? "inline-flex" : "flex",
          flexDirection: inline ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          gap: inline ? "12px" : "14px",
          padding: inline ? "8px 12px" : "24px 16px",
          textAlign: "center"
        },
        role: "status",
        "aria-live": "polite"
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: {
            width: `${size}px`,
            height: `${size}px`,
            display: "grid",
            placeItems: "center",
            flexShrink: 0
          }
        },
        /* @__PURE__ */ import_react8.default.createElement(ThinkingOrb, { size, state, theme })
      ),
      text ? /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          style: {
            color: "var(--muted, #8e8e93)",
            fontSize: size <= 24 ? "12px" : "13.5px",
            fontFamily: "var(--sans)",
            fontWeight: 500,
            letterSpacing: "0.2px"
          }
        },
        text
      ) : null
    );
  }
  var activeRoots = /* @__PURE__ */ new Map();
  window.MementoFx = {
    // Mount Liquid Action Menu
    mountLiquidMenu: (container, props = {}) => {
      if (!container) return null;
      let root = activeRoots.get(container);
      if (!root) {
        root = import_client.default.createRoot(container);
        activeRoots.set(container, root);
      }
      root.render(/* @__PURE__ */ import_react8.default.createElement(LiquidActionMenu, { ...props }));
      return root;
    },
    // Mount MetalFx Search
    mountMetalSearch: (container, props = {}) => {
      if (!container) return null;
      let root = activeRoots.get(container);
      if (!root) {
        root = import_client.default.createRoot(container);
        activeRoots.set(container, root);
      }
      root.render(/* @__PURE__ */ import_react8.default.createElement(MetalSearchInput, { ...props }));
      return root;
    },
    // Mount ThinkingOrb Loader
    mountThinkingOrb: (container, { size = 64, state = "listening", text = "Loading...", theme = "auto", inline = false } = {}) => {
      if (!container) return null;
      let root = activeRoots.get(container);
      if (!root) {
        root = import_client.default.createRoot(container);
        activeRoots.set(container, root);
      }
      root.render(
        /* @__PURE__ */ import_react8.default.createElement(
          ThinkingOrbContainer,
          {
            size,
            state,
            text,
            theme,
            inline
          }
        )
      );
      return root;
    },
    // Unmount any mounted component
    unmount: (container) => {
      if (!container) return;
      const root = activeRoots.get(container);
      if (root) {
        try {
          root.unmount();
        } catch (err) {
        }
        activeRoots.delete(container);
      }
    },
    // Direct component exports
    Liquid,
    MetalFx: no,
    useMetalBend: Bs,
    setCursorLightConfig: Nr,
    ThinkingOrb
  };
  console.log("MementoFx bundle initialized with Liquid, MetalFx, and ThinkingOrb.");
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
