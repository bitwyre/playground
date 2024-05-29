// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = b;
exports.Fragment = k;
exports.cloneElement = E;
exports.createContext = G;
exports.h = exports.createElement = _;
exports.createRef = m;
exports.hydrate = D;
exports.options = exports.isValidElement = void 0;
exports.render = B;
exports.toChildArray = H;
var n,
  l,
  u,
  t,
  i,
  o,
  r,
  f,
  e,
  c,
  s,
  a,
  h = {},
  p = [],
  v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  y = Array.isArray;
function d(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function w(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function _(l, u, t) {
  var i,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return g(l, f, i, o, null);
}
function g(n, t, i, o, r) {
  var f = {
    type: n,
    props: t,
    key: i,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == r ? ++u : r,
    __i: -1,
    __u: 0
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}
function m() {
  return {
    current: null
  };
}
function k(n) {
  return n.children;
}
function b(n, l) {
  this.props = n, this.context = l;
}
function x(n, l) {
  if (null == l) return n.__ ? x(n.__, n.__i + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? x(n) : null;
}
function C(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return C(n);
  }
}
function M(n) {
  (!n.__d && (n.__d = !0) && i.push(n) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
}
function P() {
  var n, u, t, o, r, e, c, s;
  for (i.sort(f); n = i.shift();) n.__d && (u = i.length, o = void 0, e = (r = (t = n).__v).__e, c = [], s = [], t.__P && ((o = d({}, r)).__v = r.__v + 1, l.vnode && l.vnode(o), O(t.__P, o, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [e] : null, c, null == e ? x(r) : e, !!(32 & r.__u), s), o.__v = r.__v, o.__.__k[o.__i] = o, j(c, o, s), o.__e != e && C(o)), i.length > u && i.sort(f));
  P.__r = 0;
}
function S(n, l, u, t, i, o, r, f, e, c, s) {
  var a,
    v,
    y,
    d,
    w,
    _ = t && t.__k || p,
    g = l.length;
  for (u.__d = e, $(u, l, _), e = u.__d, a = 0; a < g; a++) null != (y = u.__k[a]) && "boolean" != typeof y && "function" != typeof y && (v = -1 === y.__i ? h : _[y.__i] || h, y.__i = a, O(n, y, v, i, o, r, f, e, c, s), d = y.__e, y.ref && v.ref != y.ref && (v.ref && N(v.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), 65536 & y.__u || v.__k === y.__k ? (e && !e.isConnected && (e = x(v)), e = I(y, e, n)) : "function" == typeof y.type && void 0 !== y.__d ? e = y.__d : d && (e = d.nextSibling), y.__d = void 0, y.__u &= -196609);
  u.__d = e, u.__e = w;
}
function $(n, l, u) {
  var t,
    i,
    o,
    r,
    f,
    e = l.length,
    c = u.length,
    s = c,
    a = 0;
  for (n.__k = [], t = 0; t < e; t++) r = t + a, null != (i = n.__k[t] = null == (i = l[t]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? g(null, i, null, null, null) : y(i) ? g(k, {
    children: i
  }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? g(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = n, i.__b = n.__b + 1, f = L(i, u, r, s), i.__i = f, o = null, -1 !== f && (s--, (o = u[f]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == f && a--, "function" != typeof i.type && (i.__u |= 65536)) : f !== r && (f === r + 1 ? a++ : f > r ? s > e - r ? a += f - r : a-- : f < r ? f == r - 1 && (a = f - r) : a = 0, f !== t + a && (i.__u |= 65536))) : (o = u[r]) && null == o.key && o.__e && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x(o)), V(o, o, !1), u[r] = null, s--);
  if (s) for (t = 0; t < c; t++) null != (o = u[t]) && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x(o)), V(o, o));
}
function I(n, l, u) {
  var t, i;
  if ("function" == typeof n.type) {
    for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = I(t[i], l, u));
    return l;
  }
  n.__e != l && (u.insertBefore(n.__e, l || null), l = n.__e);
  do {
    l = l && l.nextSibling;
  } while (null != l && 8 === l.nodeType);
  return l;
}
function H(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (y(n) ? n.some(function (n) {
    H(n, l);
  }) : l.push(n)), l;
}
function L(n, l, u, t) {
  var i = n.key,
    o = n.type,
    r = u - 1,
    f = u + 1,
    e = l[u];
  if (null === e || e && i == e.key && o === e.type && 0 == (131072 & e.__u)) return u;
  if (t > (null != e && 0 == (131072 & e.__u) ? 1 : 0)) for (; r >= 0 || f < l.length;) {
    if (r >= 0) {
      if ((e = l[r]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return r;
      r--;
    }
    if (f < l.length) {
      if ((e = l[f]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return f;
      f++;
    }
  }
  return -1;
}
function T(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || v.test(l) ? u : u + "px";
}
function A(n, l, u, t, i) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || T(n.style, l, "");
      if (u) for (l in u) t && u[l] === t[l] || T(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")), l = l.toLowerCase() in n || "onFocusOut" === l || "onFocusIn" === l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = e, n.addEventListener(l, o ? s : c, o)) : n.removeEventListener(l, o ? s : c, o);else {
    if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function F(n) {
  return function (u) {
    if (this.l) {
      var t = this.l[u.type + n];
      if (null == u.t) u.t = e++;else if (u.t < t.u) return;
      return t(l.event ? l.event(u) : u);
    }
  };
}
function O(n, u, t, i, o, r, f, e, c, s) {
  var a,
    h,
    p,
    v,
    w,
    _,
    g,
    m,
    x,
    C,
    M,
    P,
    $,
    I,
    H,
    L = u.type;
  if (void 0 !== u.constructor) return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [e = u.__e = t.__e]), (a = l.__b) && a(u);
  n: if ("function" == typeof L) try {
    if (m = u.props, x = (a = L.contextType) && i[a.__c], C = a ? x ? x.props.value : a.__ : i, t.__c ? g = (h = u.__c = t.__c).__ = h.__E : ("prototype" in L && L.prototype.render ? u.__c = h = new L(m, C) : (u.__c = h = new b(m, C), h.constructor = L, h.render = q), x && x.sub(h), h.props = m, h.state || (h.state = {}), h.context = C, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != L.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d({}, h.__s)), d(h.__s, L.getDerivedStateFromProps(m, h.__s))), v = h.props, w = h.state, h.__v = u, p) null == L.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
      if (null == L.getDerivedStateFromProps && m !== v && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, C), !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, C) || u.__v === t.__v)) {
        for (u.__v !== t.__v && (h.props = m, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
          n && (n.__ = u);
        }), M = 0; M < h._sb.length; M++) h.__h.push(h._sb[M]);
        h._sb = [], h.__h.length && f.push(h);
        break n;
      }
      null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
        h.componentDidUpdate(v, w, _);
      });
    }
    if (h.context = C, h.props = m, h.__P = n, h.__e = !1, P = l.__r, $ = 0, "prototype" in L && L.prototype.render) {
      for (h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), I = 0; I < h._sb.length; I++) h.__h.push(h._sb[I]);
      h._sb = [];
    } else do {
      h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
    } while (h.__d && ++$ < 25);
    h.state = h.__s, null != h.getChildContext && (i = d(d({}, i), h.getChildContext())), p || null == h.getSnapshotBeforeUpdate || (_ = h.getSnapshotBeforeUpdate(v, w)), S(n, y(H = null != a && a.type === k && null == a.key ? a.props.children : a) ? H : [H], u, t, i, o, r, f, e, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && f.push(h), g && (h.__E = h.__ = null);
  } catch (n) {
    u.__v = null, c || null != r ? (u.__e = e, u.__u |= c ? 160 : 32, r[r.indexOf(e)] = null) : (u.__e = t.__e, u.__k = t.__k), l.__e(n, u, t);
  } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z(t.__e, u, t, i, o, r, f, c, s);
  (a = l.diffed) && a(u);
}
function j(n, u, t) {
  u.__d = void 0;
  for (var i = 0; i < t.length; i++) N(t[i], t[++i], t[++i]);
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}
function z(l, u, t, i, o, r, f, e, c) {
  var s,
    a,
    p,
    v,
    d,
    _,
    g,
    m = t.props,
    k = u.props,
    b = u.type;
  if ("svg" === b ? o = "http://www.w3.org/2000/svg" : "math" === b ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != r) for (s = 0; s < r.length; s++) if ((d = r[s]) && "setAttribute" in d == !!b && (b ? d.localName === b : 3 === d.nodeType)) {
    l = d, r[s] = null;
    break;
  }
  if (null == l) {
    if (null === b) return document.createTextNode(k);
    l = document.createElementNS(o, b, k.is && k), r = null, e = !1;
  }
  if (null === b) m === k || e && l.data === k || (l.data = k);else {
    if (r = r && n.call(l.childNodes), m = t.props || h, !e && null != r) for (m = {}, s = 0; s < l.attributes.length; s++) m[(d = l.attributes[s]).name] = d.value;
    for (s in m) if (d = m[s], "children" == s) ;else if ("dangerouslySetInnerHTML" == s) p = d;else if ("key" !== s && !(s in k)) {
      if ("value" == s && "defaultValue" in k || "checked" == s && "defaultChecked" in k) continue;
      A(l, s, null, d, o);
    }
    for (s in k) d = k[s], "children" == s ? v = d : "dangerouslySetInnerHTML" == s ? a = d : "value" == s ? _ = d : "checked" == s ? g = d : "key" === s || e && "function" != typeof d || m[s] === d || A(l, s, d, m[s], o);
    if (a) e || p && (a.__html === p.__html || a.__html === l.innerHTML) || (l.innerHTML = a.__html), u.__k = [];else if (p && (l.innerHTML = ""), S(l, y(v) ? v : [v], u, t, i, "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : o, r, f, r ? r[0] : t.__k && x(t, 0), e, c), null != r) for (s = r.length; s--;) null != r[s] && w(r[s]);
    e || (s = "value", void 0 !== _ && (_ !== l[s] || "progress" === b && !_ || "option" === b && _ !== m[s]) && A(l, s, _, m[s], o), s = "checked", void 0 !== g && g !== l[s] && A(l, s, g, m[s], o));
  }
  return l;
}
function N(n, u, t) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, t);
  }
}
function V(n, u, t) {
  var i, o;
  if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && V(i[o], u, t || "function" != typeof n.type);
  t || null == n.__e || w(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function q(n, l, u) {
  return this.constructor(n, u);
}
function B(u, t, i) {
  var o, r, f, e;
  l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], O(t, u = (!o && i || t).__k = _(k, null, [u]), r || h, h, t.namespaceURI, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), j(f, u, e);
}
function D(n, l) {
  B(n, l, D);
}
function E(l, u, t) {
  var i,
    o,
    r,
    f,
    e = d({}, l.props);
  for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
  return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), g(l.type, e, i || l.key, o || l.ref, null);
}
function G(n, l) {
  var u = {
    __c: l = "__cC" + a++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, t;
      return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
        return t;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(function (n) {
          n.__e = !0, M(n);
        });
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = p.slice, exports.options = l = {
  __e: function (n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, exports.isValidElement = t = function (n) {
  return null != n && null == n.constructor;
}, b.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n && (n = n(d({}, u), this.props)), n && d(u, n), null != n && this.__v && (l && this._sb.push(l), M(this));
}, b.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), M(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, P.__r = 0, e = 0, c = F(!1), s = F(!0), a = 0;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallback = x;
exports.useContext = P;
exports.useDebugValue = V;
exports.useEffect = _;
exports.useErrorBoundary = b;
exports.useId = g;
exports.useImperativeHandle = T;
exports.useLayoutEffect = A;
exports.useMemo = q;
exports.useReducer = y;
exports.useRef = F;
exports.useState = p;
var _preact = require("preact");
var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = _preact.options,
  a = e.__b,
  v = e.__r,
  l = e.diffed,
  m = e.__c,
  s = e.unmount,
  d = e.__;
function h(n, t) {
  e.__h && e.__h(r, n, o || t), o = 0;
  var u = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({
    __V: c
  }), u.__[n];
}
function p(n) {
  return o = 1, y(D, n);
}
function y(n, u, i) {
  var o = h(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return !!n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function _(n, u) {
  var i = h(t++, 3);
  !e.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__H.__h.push(i));
}
function A(n, u) {
  var i = h(t++, 4);
  !e.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__h.push(i));
}
function F(n) {
  return o = 5, q(function () {
    return {
      current: n
    };
  }, []);
}
function T(n, t, r) {
  o = 6, A(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function q(n, r) {
  var u = h(t++, 7);
  return C(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function x(n, t) {
  return o = 8, q(function () {
    return n;
  }, t);
}
function P(n) {
  var u = r.context[n.__c],
    i = h(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function V(n, t) {
  e.useDebugValue && e.useDebugValue(t ? t(n) : n);
}
function b(n) {
  var u = h(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function g() {
  var n = h(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function j() {
  for (var n; n = f.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], e.__e(t, n.__v);
  }
}
e.__b = function (n) {
  r = null, a && a(n);
}, e.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), d && d(n, t);
}, e.__r = function (n) {
  v && v(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, e.diffed = function (n) {
  l && l(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === e.requestAnimationFrame || ((i = e.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, e.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], e.__e(r, n.__v);
    }
  }), m && m(n, t);
}, e.unmount = function (n) {
  s && s(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && e.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function () {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"components/TTTBoard.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
require("./style.css");
var _hooks = require("preact/hooks");
var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var boardArrays = [{
  id: 1,
  item: [0, 1, 2]
}, {
  id: 2,
  item: [3, 4, 5]
}, {
  id: 3,
  item: [6, 7, 8]
}];
var TicTacToeBoard = function TicTacToeBoard() {
  var _a = (0, _hooks.useState)(Array(9).fill("")),
    cells = _a[0],
    setCells = _a[1];
  var getCurrentPlayerSymbol = function getCurrentPlayerSymbol() {
    var totalMoves = cells.filter(function (cell) {
      return cell !== "";
    }).length;
    return totalMoves % 2 === 0 ? "X" : "O";
  };
  var checkGameResult = function checkGameResult(cells) {
    var winningCombinations = [[0, 1, 2],
    // Rows
    [3, 4, 5], [6, 7, 8], [0, 3, 6],
    // Columns
    [1, 4, 7], [2, 5, 8], [0, 4, 8],
    // Diagonals
    [2, 4, 6]];
    for (var _i = 0, winningCombinations_1 = winningCombinations; _i < winningCombinations_1.length; _i++) {
      var combination = winningCombinations_1[_i];
      // determine a 3 Lines
      var a = combination[0],
        b = combination[1],
        c = combination[2];
      if (cells[a] !== "" && cells[a] === cells[b] && cells[a] === cells[c]) {
        alert("Player ".concat(cells[a], " wins!"));
        setCells(Array(9).fill(""));
      }
    }
    // Check for a draw
    if (!cells.includes("")) {
      alert("Draw!!");
    }
  };
  var handleClick = function handleClick(index) {
    if (cells[index] === "") {
      var updatedCells = __spreadArray([], cells, true);
      var currentPlayerSymbol = getCurrentPlayerSymbol();
      // [" "] = ["X"]
      updatedCells[index] = currentPlayerSymbol;
      setCells(updatedCells);
      checkGameResult(updatedCells);
    }
  };
  return (0, _preact.h)("div", {
    className: "board"
  }, (0, _preact.h)("p", {
    style: {
      fontSize: 30,
      textAlign: "center",
      marginBottom: 8
    }
  }, "Now Turn Player : ", getCurrentPlayerSymbol()), boardArrays.map(function (item) {
    return (0, _preact.h)("div", {
      className: "row",
      key: item.id
    }, item.item.map(function (item) {
      return (0, _preact.h)("div", {
        className: "cell",
        onClick: function onClick() {
          return handleClick(item);
        },
        key: item
      }, (0, _preact.h)("div", {
        style: {
          fontSize: "50px",
          textAlign: "center",
          height: "100%"
        }
      }, (0, _preact.h)("p", {
        style: {
          marginTop: 15
        }
      }, cells[item])));
    }));
  }));
};
var _default = exports.default = TicTacToeBoard;
},{"preact":"../node_modules/preact/dist/preact.module.js","./style.css":"components/style.css","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js"}],"App.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
require("./style.css");
var _TTTBoard = _interopRequireDefault(require("./components/TTTBoard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var App = function App() {
  return (0, _preact.h)("div", {
    class: "container"
  }, (0, _preact.h)("div", {
    class: "board-wrapper"
  }, (0, _preact.h)(_TTTBoard.default, null)));
};
var _default = exports.default = App;
},{"preact":"../node_modules/preact/dist/preact.module.js","./style.css":"style.css","./components/TTTBoard":"components/TTTBoard.tsx"}],"index.tsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _preact.render)((0, _preact.h)(_App.default, null), document.getElementById("root"));
},{"preact":"../node_modules/preact/dist/preact.module.js","./App":"App.tsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63999" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.tsx"], null)
//# sourceMappingURL=/src.f69400ca.js.map