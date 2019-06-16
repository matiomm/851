(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var f = n[o] = {
                exports: {}
            };
            t[o][0].call(f.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, f, f.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {

    }, {}]
}, {}, [1]); ! function t(e, n, r) {
    function a(i, s) {
        if (!n[i]) {
            if (!e[i]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(i, !0);
                if (o) return o(i, !0);
                throw new Error("Cannot find module '" + i + "'")
            }
            var u = n[i] = {
                exports: {}
            };
            e[i][0].call(u.exports, function(t) {
                var n = e[i][1][t];
                return a(n ? n : t)
            }, u, u.exports, t, e, n, r)
        }
        return n[i].exports
    }
    for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) a(r[i]);
    return a
}({
    1: [function(t, e, n) {
        ! function() {
            function t(t, e) {
                return e > t ? -1 : t > e ? 1 : t >= e ? 0 : NaN
            }

            function n(t) {
                return null === t ? NaN : +t
            }

            function r(t) {
                return !isNaN(t)
            }

            function a(t) {
                return {
                    left: function(e, n, r, a) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (a = e.length); a > r;) {
                            var o = r + a >>> 1;
                            t(e[o], n) < 0 ? r = o + 1 : a = o
                        }
                        return r
                    },
                    right: function(e, n, r, a) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (a = e.length); a > r;) {
                            var o = r + a >>> 1;
                            t(e[o], n) > 0 ? a = o : r = o + 1
                        }
                        return r
                    }
                }
            }

            function o(t) {
                return t.length
            }

            function i(t) {
                for (var e = 1; t * e % 1;) e *= 10;
                return e
            }

            function s(t, e) {
                for (var n in e) Object.defineProperty(t.prototype, n, {
                    value: e[n],
                    enumerable: !1
                })
            }

            function l() {
                this._ = Object.create(null)
            }

            function u(t) {
                return (t += "") === fi || t[0] === hi ? hi + t : t
            }

            function c(t) {
                return (t += "")[0] === hi ? t.slice(1) : t
            }

            function f(t) {
                return u(t) in this._
            }

            function h(t) {
                return (t = u(t)) in this._ && delete this._[t]
            }

            function d() {
                var t = [];
                for (var e in this._) t.push(c(e));
                return t
            }

            function p() {
                var t = 0;
                for (var e in this._) ++t;
                return t
            }

            function g() {
                for (var t in this._) return !1;
                return !0
            }

            function m() {
                this._ = Object.create(null)
            }

            function _(t, e, n) {
                return function() {
                    var r = n.apply(e, arguments);
                    return r === e ? t : r
                }
            }

            function v(t, e) {
                if (e in t) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var n = 0, r = di.length; r > n; ++n) {
                    var a = di[n] + e;
                    if (a in t) return a
                }
            }

            function y() {}

            function b() {}

            function w(t) {
                function e() {
                    for (var e, r = n, a = -1, o = r.length; ++a < o;)(e = r[a].on) && e.apply(this, arguments);
                    return t
                }
                var n = [],
                    r = new l;
                return e.on = function(e, a) {
                    var o, i = r.get(e);
                    return arguments.length < 2 ? i && i.on : (i && (i.on = null, n = n.slice(0, o = n.indexOf(i)).concat(n.slice(o + 1)), r.remove(e)), a && n.push(r.set(e, {
                        on: a
                    })), t)
                }, e
            }

            function S() {
                Yo.event.preventDefault()
            }

            function x() {
                for (var t, e = Yo.event; t = e.sourceEvent;) e = t;
                return e
            }

            function C(t) {
                for (var e = new b, n = 0, r = arguments.length; ++n < r;) e[arguments[n]] = w(e);
                return e.of = function(n, r) {
                    return function(a) {
                        try {
                            var o = a.sourceEvent = Yo.event;
                            a.target = t, Yo.event = a, e[a.type].apply(n, r)
                        } finally {
                            Yo.event = o
                        }
                    }
                }, e
            }

            function D(t) {
                return gi(t, bi), t
            }

            function T(t) {
                return "function" == typeof t ? t : function() {
                    return mi(t, this)
                }
            }

            function M(t) {
                return "function" == typeof t ? t : function() {
                    return _i(t, this)
                }
            }

            function k(t, e) {
                function n() {
                    this.removeAttribute(t)
                }

                function r() {
                    this.removeAttributeNS(t.space, t.local)
                }

                function a() {
                    this.setAttribute(t, e)
                }

                function o() {
                    this.setAttributeNS(t.space, t.local, e)
                }

                function i() {
                    var n = e.apply(this, arguments);
                    null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
                }

                function s() {
                    var n = e.apply(this, arguments);
                    null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
                }
                return t = Yo.ns.qualify(t), null == e ? t.local ? r : n : "function" == typeof e ? t.local ? s : i : t.local ? o : a
            }

            function A(t) {
                return t.trim().replace(/\s+/g, " ")
            }

            function I(t) {
                return new RegExp("(?:^|\\s+)" + Yo.requote(t) + "(?:\\s+|$)", "g")
            }

            function F(t) {
                return (t + "").trim().split(/^|\s+/)
            }

            function N(t, e) {
                function n() {
                    for (var n = -1; ++n < a;) t[n](this, e)
                }

                function r() {
                    for (var n = -1, r = e.apply(this, arguments); ++n < a;) t[n](this, r)
                }
                t = F(t).map(L);
                var a = t.length;
                return "function" == typeof e ? r : n
            }

            function L(t) {
                var e = I(t);
                return function(n, r) {
                    if (a = n.classList) return r ? a.add(t) : a.remove(t);
                    var a = n.getAttribute("class") || "";
                    r ? (e.lastIndex = 0, e.test(a) || n.setAttribute("class", A(a + " " + t))) : n.setAttribute("class", A(a.replace(e, " ")))
                }
            }

            function E(t, e, n) {
                function r() {
                    this.style.removeProperty(t)
                }

                function a() {
                    this.style.setProperty(t, e, n)
                }

                function o() {
                    var r = e.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
                }
                return null == e ? r : "function" == typeof e ? o : a
            }

            function R(t, e) {
                function n() {
                    delete this[t]
                }

                function r() {
                    this[t] = e
                }

                function a() {
                    var n = e.apply(this, arguments);
                    null == n ? delete this[t] : this[t] = n
                }
                return null == e ? n : "function" == typeof e ? a : r
            }

            function P(t) {
                return "function" == typeof t ? t : (t = Yo.ns.qualify(t)).local ? function() {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                } : function() {
                    return this.ownerDocument.createElementNS(this.namespaceURI, t)
                }
            }

            function $(t) {
                return {
                    __data__: t
                }
            }

            function H(t) {
                return function() {
                    return yi(this, t)
                }
            }

            function U(e) {
                return arguments.length || (e = t),
                    function(t, n) {
                        return t && n ? e(t.__data__, n.__data__) : !t - !n
                    }
            }

            function B(t, e) {
                for (var n = 0, r = t.length; r > n; n++)
                    for (var a, o = t[n], i = 0, s = o.length; s > i; i++)(a = o[i]) && e(a, i, n);
                return t
            }

            function O(t) {
                return gi(t, Si), t
            }

            function j(t) {
                var e, n;
                return function(r, a, o) {
                    var i, s = t[o].update,
                        l = s.length;
                    for (o != n && (n = o, e = 0), a >= e && (e = a + 1); !(i = s[e]) && ++e < l;);
                    return i
                }
            }

            function G() {
                var t = this.__transition__;
                t && ++t.active
            }

            function z(t, e, n) {
                function r() {
                    var e = this[i];
                    e && (this.removeEventListener(t, e, e.$), delete this[i])
                }

                function a() {
                    var a = l(e, Ko(arguments));
                    r.call(this), this.addEventListener(t, this[i] = a, a.$ = n), a._ = e
                }

                function o() {
                    var e, n = new RegExp("^__on([^.]+)" + Yo.requote(t) + "$");
                    for (var r in this)
                        if (e = r.match(n)) {
                            var a = this[r];
                            this.removeEventListener(e[1], a, a.$), delete this[r]
                        }
                }
                var i = "__on" + t,
                    s = t.indexOf("."),
                    l = q;
                s > 0 && (t = t.slice(0, s));
                var u = Ci.get(t);
                return u && (t = u, l = W), s ? e ? a : r : e ? y : o
            }

            function q(t, e) {
                return function(n) {
                    var r = Yo.event;
                    Yo.event = n, e[0] = this.__data__;
                    try {
                        t.apply(this, e)
                    } finally {
                        Yo.event = r
                    }
                }
            }

            function W(t, e) {
                var n = q(t, e);
                return function(t) {
                    var e = this,
                        r = t.relatedTarget;
                    r && (r === e || 8 & r.compareDocumentPosition(e)) || n.call(e, t)
                }
            }

            function V() {
                var t = ".dragsuppress-" + ++Ti,
                    e = "click" + t,
                    n = Yo.select(ei).on("touchmove" + t, S).on("dragstart" + t, S).on("selectstart" + t, S);
                if (Di) {
                    var r = ti.style,
                        a = r[Di];
                    r[Di] = "none"
                }
                return function(o) {
                    function i() {
                        n.on(e, null)
                    }
                    n.on(t, null), Di && (r[Di] = a), o && (n.on(e, function() {
                        S(), i()
                    }, !0), setTimeout(i, 0))
                }
            }

            function J(t, e) {
                e.changedTouches && (e = e.changedTouches[0]);
                var n = t.ownerSVGElement || t;
                if (n.createSVGPoint) {
                    var r = n.createSVGPoint();
                    if (0 > Mi && (ei.scrollX || ei.scrollY)) {
                        n = Yo.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var a = n[0][0].getScreenCTM();
                        Mi = !(a.f || a.e), n.remove()
                    }
                    return Mi ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
                }
                var o = t.getBoundingClientRect();
                return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop]
            }

            function X() {
                return Yo.event.changedTouches[0].identifier
            }

            function Y() {
                return Yo.event.target
            }

            function Z() {
                return ei
            }

            function K(t) {
                return t > 0 ? 1 : 0 > t ? -1 : 0
            }

            function Q(t, e, n) {
                return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
            }

            function tt(t) {
                return t > 1 ? 0 : -1 > t ? ki : Math.acos(t)
            }

            function et(t) {
                return t > 1 ? Ii : -1 > t ? -Ii : Math.asin(t)
            }

            function nt(t) {
                return ((t = Math.exp(t)) - 1 / t) / 2
            }

            function rt(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }

            function at(t) {
                return ((t = Math.exp(2 * t)) - 1) / (t + 1)
            }

            function ot(t) {
                return (t = Math.sin(t / 2)) * t
            }

            function it() {}

            function st(t, e, n) {
                return this instanceof st ? (this.h = +t, this.s = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof st ? new st(t.h, t.s, t.l) : wt("" + t, St, st) : new st(t, e, n)
            }

            function lt(t, e, n) {
                function r(t) {
                    return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? o + (i - o) * t / 60 : 180 > t ? i : 240 > t ? o + (i - o) * (240 - t) / 60 : o
                }

                function a(t) {
                    return Math.round(255 * r(t))
                }
                var o, i;
                return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) ? 0 : 0 > e ? 0 : e > 1 ? 1 : e, n = 0 > n ? 0 : n > 1 ? 1 : n, i = .5 >= n ? n * (1 + e) : n + e - n * e, o = 2 * n - i, new _t(a(t + 120), a(t), a(t - 120))
            }

            function ut(t, e, n) {
                return this instanceof ut ? (this.h = +t, this.c = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof ut ? new ut(t.h, t.c, t.l) : t instanceof ft ? dt(t.l, t.a, t.b) : dt((t = xt((t = Yo.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new ut(t, e, n)
            }

            function ct(t, e, n) {
                return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new ft(n, Math.cos(t *= Li) * e, Math.sin(t) * e)
            }

            function ft(t, e, n) {
                return this instanceof ft ? (this.l = +t, this.a = +e, void(this.b = +n)) : arguments.length < 2 ? t instanceof ft ? new ft(t.l, t.a, t.b) : t instanceof ut ? ct(t.h, t.c, t.l) : xt((t = _t(t)).r, t.g, t.b) : new ft(t, e, n)
            }

            function ht(t, e, n) {
                var r = (t + 16) / 116,
                    a = r + e / 500,
                    o = r - n / 200;
                return a = pt(a) * zi, r = pt(r) * qi, o = pt(o) * Wi, new _t(mt(3.2404542 * a - 1.5371385 * r - .4985314 * o), mt(-.969266 * a + 1.8760108 * r + .041556 * o), mt(.0556434 * a - .2040259 * r + 1.0572252 * o))
            }

            function dt(t, e, n) {
                return t > 0 ? new ut(Math.atan2(n, e) * Ei, Math.sqrt(e * e + n * n), t) : new ut(NaN, NaN, t)
            }

            function pt(t) {
                return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
            }

            function gt(t) {
                return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
            }

            function mt(t) {
                return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
            }

            function _t(t, e, n) {
                return this instanceof _t ? (this.r = ~~t, this.g = ~~e, void(this.b = ~~n)) : arguments.length < 2 ? t instanceof _t ? new _t(t.r, t.g, t.b) : wt("" + t, _t, lt) : new _t(t, e, n)
            }

            function vt(t) {
                return new _t(t >> 16, t >> 8 & 255, 255 & t)
            }

            function yt(t) {
                return vt(t) + ""
            }

            function bt(t) {
                return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
            }

            function wt(t, e, n) {
                var r, a, o, i = 0,
                    s = 0,
                    l = 0;
                if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (a = r[2].split(","), r[1]) {
                    case "hsl":
                        return n(parseFloat(a[0]), parseFloat(a[1]) / 100, parseFloat(a[2]) / 100);
                    case "rgb":
                        return e(Dt(a[0]), Dt(a[1]), Dt(a[2]))
                }
                return (o = Xi.get(t)) ? e(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (i = (3840 & o) >> 4, i = i >> 4 | i, s = 240 & o, s = s >> 4 | s, l = 15 & o, l = l << 4 | l) : 7 === t.length && (i = (16711680 & o) >> 16, s = (65280 & o) >> 8, l = 255 & o)), e(i, s, l))
            }

            function St(t, e, n) {
                var r, a, o = Math.min(t /= 255, e /= 255, n /= 255),
                    i = Math.max(t, e, n),
                    s = i - o,
                    l = (i + o) / 2;
                return s ? (a = .5 > l ? s / (i + o) : s / (2 - i - o), r = t == i ? (e - n) / s + (n > e ? 6 : 0) : e == i ? (n - t) / s + 2 : (t - e) / s + 4, r *= 60) : (r = NaN, a = l > 0 && 1 > l ? 0 : r), new st(r, a, l)
            }

            function xt(t, e, n) {
                t = Ct(t), e = Ct(e), n = Ct(n);
                var r = gt((.4124564 * t + .3575761 * e + .1804375 * n) / zi),
                    a = gt((.2126729 * t + .7151522 * e + .072175 * n) / qi),
                    o = gt((.0193339 * t + .119192 * e + .9503041 * n) / Wi);
                return ft(116 * a - 16, 500 * (r - a), 200 * (a - o))
            }

            function Ct(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function Dt(t) {
                var e = parseFloat(t);
                return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
            }

            function Tt(t) {
                return "function" == typeof t ? t : function() {
                    return t
                }
            }

            function Mt(t) {
                return t
            }

            function kt(t) {
                return function(e, n, r) {
                    return 2 === arguments.length && "function" == typeof n && (r = n, n = null), At(e, n, t, r)
                }
            }

            function At(t, e, n, r) {
                function a() {
                    var t, e = l.status;
                    if (!e && Ft(l) || e >= 200 && 300 > e || 304 === e) {
                        try {
                            t = n.call(o, l)
                        } catch (r) {
                            return void i.error.call(o, r)
                        }
                        i.load.call(o, t)
                    } else i.error.call(o, l)
                }
                var o = {},
                    i = Yo.dispatch("beforesend", "progress", "load", "error"),
                    s = {},
                    l = new XMLHttpRequest,
                    u = null;
                return !ei.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(t) || (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = a : l.onreadystatechange = function() {
                    l.readyState > 3 && a()
                }, l.onprogress = function(t) {
                    var e = Yo.event;
                    Yo.event = t;
                    try {
                        i.progress.call(o, l)
                    } finally {
                        Yo.event = e
                    }
                }, o.header = function(t, e) {
                    return t = (t + "").toLowerCase(), arguments.length < 2 ? s[t] : (null == e ? delete s[t] : s[t] = e + "", o)
                }, o.mimeType = function(t) {
                    return arguments.length ? (e = null == t ? null : t + "", o) : e
                }, o.responseType = function(t) {
                    return arguments.length ? (u = t, o) : u
                }, o.response = function(t) {
                    return n = t, o
                }, ["get", "post"].forEach(function(t) {
                    o[t] = function() {
                        return o.send.apply(o, [t].concat(Ko(arguments)))
                    }
                }), o.send = function(n, r, a) {
                    if (2 === arguments.length && "function" == typeof r && (a = r, r = null), l.open(n, t, !0), null == e || "accept" in s || (s.accept = e + ",*/*"), l.setRequestHeader)
                        for (var c in s) l.setRequestHeader(c, s[c]);
                    return null != e && l.overrideMimeType && l.overrideMimeType(e), null != u && (l.responseType = u), null != a && o.on("error", a).on("load", function(t) {
                        a(null, t)
                    }), i.beforesend.call(o, l), l.send(null == r ? null : r), o
                }, o.abort = function() {
                    return l.abort(), o
                }, Yo.rebind(o, i, "on"), null == r ? o : o.get(It(r))
            }

            function It(t) {
                return 1 === t.length ? function(e, n) {
                    t(null == e ? n : null)
                } : t
            }

            function Ft(t) {
                var e = t.responseType;
                return e && "text" !== e ? t.response : t.responseText
            }

            function Nt() {
                var t = Lt(),
                    e = Et() - t;
                e > 24 ? (isFinite(e) && (clearTimeout(Qi), Qi = setTimeout(Nt, e)), Ki = 0) : (Ki = 1, es(Nt))
            }

            function Lt() {
                var t = Date.now();
                for (ts = Yi; ts;) t >= ts.t && (ts.f = ts.c(t - ts.t)), ts = ts.n;
                return t
            }

            function Et() {
                for (var t, e = Yi, n = 1 / 0; e;) e.f ? e = t ? t.n = e.n : Yi = e.n : (e.t < n && (n = e.t), e = (t = e).n);
                return Zi = t, n
            }

            function Rt(t, e) {
                return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
            }

            function Pt(t, e) {
                var n = Math.pow(10, 3 * ci(8 - e));
                return {
                    scale: e > 8 ? function(t) {
                        return t / n
                    } : function(t) {
                        return t * n
                    },
                    symbol: t
                }
            }

            function $t(t) {
                var e = t.decimal,
                    n = t.thousands,
                    r = t.grouping,
                    a = t.currency,
                    o = r && n ? function(t, e) {
                        for (var a = t.length, o = [], i = 0, s = r[0], l = 0; a > 0 && s > 0 && (l + s + 1 > e && (s = Math.max(1, e - l)), o.push(t.substring(a -= s, a + s)), !((l += s + 1) > e));) s = r[i = (i + 1) % r.length];
                        return o.reverse().join(n)
                    } : Mt;
                return function(t) {
                    var n = rs.exec(t),
                        r = n[1] || " ",
                        i = n[2] || ">",
                        s = n[3] || "-",
                        l = n[4] || "",
                        u = n[5],
                        c = +n[6],
                        f = n[7],
                        h = n[8],
                        d = n[9],
                        p = 1,
                        g = "",
                        m = "",
                        _ = !1,
                        v = !0;
                    switch (h && (h = +h.substring(1)), (u || "0" === r && "=" === i) && (u = r = "0", i = "="), d) {
                        case "n":
                            f = !0, d = "g";
                            break;
                        case "%":
                            p = 100, m = "%", d = "f";
                            break;
                        case "p":
                            p = 100, m = "%", d = "r";
                            break;
                        case "b":
                        case "o":
                        case "x":
                        case "X":
                            "#" === l && (g = "0" + d.toLowerCase());
                        case "c":
                            v = !1;
                        case "d":
                            _ = !0, h = 0;
                            break;
                        case "s":
                            p = -1, d = "r"
                    }
                    "$" === l && (g = a[0], m = a[1]), "r" != d || h || (d = "g"), null != h && ("g" == d ? h = Math.max(1, Math.min(21, h)) : ("e" == d || "f" == d) && (h = Math.max(0, Math.min(20, h)))), d = as.get(d) || Ht;
                    var y = u && f;
                    return function(t) {
                        var n = m;
                        if (_ && t % 1) return "";
                        var a = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === s ? "" : s;
                        if (0 > p) {
                            var l = Yo.formatPrefix(t, h);
                            t = l.scale(t), n = l.symbol + m
                        } else t *= p;
                        t = d(t, h);
                        var b, w, S = t.lastIndexOf(".");
                        if (0 > S) {
                            var x = v ? t.lastIndexOf("e") : -1;
                            0 > x ? (b = t, w = "") : (b = t.substring(0, x), w = t.substring(x))
                        } else b = t.substring(0, S), w = e + t.substring(S + 1);
                        !u && f && (b = o(b, 1 / 0));
                        var C = g.length + b.length + w.length + (y ? 0 : a.length),
                            D = c > C ? new Array(C = c - C + 1).join(r) : "";
                        return y && (b = o(D + b, D.length ? c - w.length : 1 / 0)), a += g, t = b + w, ("<" === i ? a + t + D : ">" === i ? D + a + t : "^" === i ? D.substring(0, C >>= 1) + a + t + D.substring(C) : a + (y ? t : D + t)) + n
                    }
                }
            }

            function Ht(t) {
                return t + ""
            }

            function Ut() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }

            function Bt(t, e, n) {
                function r(e) {
                    var n = t(e),
                        r = o(n, 1);
                    return r - e > e - n ? n : r
                }

                function a(n) {
                    return e(n = t(new is(n - 1)), 1), n
                }

                function o(t, n) {
                    return e(t = new is(+t), n), t
                }

                function i(t, r, o) {
                    var i = a(t),
                        s = [];
                    if (o > 1)
                        for (; r > i;) n(i) % o || s.push(new Date(+i)), e(i, 1);
                    else
                        for (; r > i;) s.push(new Date(+i)), e(i, 1);
                    return s
                }

                function s(t, e, n) {
                    try {
                        is = Ut;
                        var r = new Ut;
                        return r._ = t, i(r, e, n)
                    } finally {
                        is = Date
                    }
                }
                t.floor = t, t.round = r, t.ceil = a, t.offset = o, t.range = i;
                var l = t.utc = Ot(t);
                return l.floor = l, l.round = Ot(r), l.ceil = Ot(a), l.offset = Ot(o), l.range = s, t
            }

            function Ot(t) {
                return function(e, n) {
                    try {
                        is = Ut;
                        var r = new Ut;
                        return r._ = e, t(r, n)._
                    } finally {
                        is = Date
                    }
                }
            }

            function jt(t) {
                function e(t) {
                    function e(e) {
                        for (var n, a, o, i = [], s = -1, l = 0; ++s < r;) 37 === t.charCodeAt(s) && (i.push(t.slice(l, s)), null != (a = ls[n = t.charAt(++s)]) && (n = t.charAt(++s)), (o = k[n]) && (n = o(e, null == a ? "e" === n ? " " : "0" : a)), i.push(n), l = s + 1);
                        return i.push(t.slice(l, s)), i.join("")
                    }
                    var r = t.length;
                    return e.parse = function(e) {
                        var r = {
                                y: 1900,
                                m: 0,
                                d: 1,
                                H: 0,
                                M: 0,
                                S: 0,
                                L: 0,
                                Z: null
                            },
                            a = n(r, t, e, 0);
                        if (a != e.length) return null;
                        "p" in r && (r.H = r.H % 12 + 12 * r.p);
                        var o = null != r.Z && is !== Ut,
                            i = new(o ? Ut : is);
                        return "j" in r ? i.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (i.setFullYear(r.y, 0, 1), i.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (i.getDay() + 5) % 7 : r.w + 7 * r.U - (i.getDay() + 6) % 7)) : i.setFullYear(r.y, r.m, r.d), i.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), o ? i._ : i
                    }, e.toString = function() {
                        return t
                    }, e
                }

                function n(t, e, n, r) {
                    for (var a, o, i, s = 0, l = e.length, u = n.length; l > s;) {
                        if (r >= u) return -1;
                        if (a = e.charCodeAt(s++), 37 === a) {
                            if (i = e.charAt(s++), o = A[i in ls ? e.charAt(s++) : i], !o || (r = o(t, n, r)) < 0) return -1
                        } else if (a != n.charCodeAt(r++)) return -1
                    }
                    return r
                }

                function r(t, e, n) {
                    S.lastIndex = 0;
                    var r = S.exec(e.slice(n));
                    return r ? (t.w = x.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function a(t, e, n) {
                    b.lastIndex = 0;
                    var r = b.exec(e.slice(n));
                    return r ? (t.w = w.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function o(t, e, n) {
                    T.lastIndex = 0;
                    var r = T.exec(e.slice(n));
                    return r ? (t.m = M.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function i(t, e, n) {
                    C.lastIndex = 0;
                    var r = C.exec(e.slice(n));
                    return r ? (t.m = D.get(r[0].toLowerCase()), n + r[0].length) : -1
                }

                function s(t, e, r) {
                    return n(t, k.c.toString(), e, r)
                }

                function l(t, e, r) {
                    return n(t, k.x.toString(), e, r)
                }

                function u(t, e, r) {
                    return n(t, k.X.toString(), e, r)
                }

                function c(t, e, n) {
                    var r = y.get(e.slice(n, n += 2).toLowerCase());
                    return null == r ? -1 : (t.p = r, n)
                }
                var f = t.dateTime,
                    h = t.date,
                    d = t.time,
                    p = t.periods,
                    g = t.days,
                    m = t.shortDays,
                    _ = t.months,
                    v = t.shortMonths;
                e.utc = function(t) {
                    function n(t) {
                        try {
                            is = Ut;
                            var e = new is;
                            return e._ = t, r(e)
                        } finally {
                            is = Date
                        }
                    }
                    var r = e(t);
                    return n.parse = function(t) {
                        try {
                            is = Ut;
                            var e = r.parse(t);
                            return e && e._
                        } finally {
                            is = Date
                        }
                    }, n.toString = r.toString, n
                }, e.multi = e.utc.multi = le;
                var y = Yo.map(),
                    b = zt(g),
                    w = qt(g),
                    S = zt(m),
                    x = qt(m),
                    C = zt(_),
                    D = qt(_),
                    T = zt(v),
                    M = qt(v);
                p.forEach(function(t, e) {
                    y.set(t.toLowerCase(), e)
                });
                var k = {
                        a: function(t) {
                            return m[t.getDay()]
                        },
                        A: function(t) {
                            return g[t.getDay()]
                        },
                        b: function(t) {
                            return v[t.getMonth()]
                        },
                        B: function(t) {
                            return _[t.getMonth()]
                        },
                        c: e(f),
                        d: function(t, e) {
                            return Gt(t.getDate(), e, 2)
                        },
                        e: function(t, e) {
                            return Gt(t.getDate(), e, 2)
                        },
                        H: function(t, e) {
                            return Gt(t.getHours(), e, 2)
                        },
                        I: function(t, e) {
                            return Gt(t.getHours() % 12 || 12, e, 2)
                        },
                        j: function(t, e) {
                            return Gt(1 + os.dayOfYear(t), e, 3)
                        },
                        L: function(t, e) {
                            return Gt(t.getMilliseconds(), e, 3)
                        },
                        m: function(t, e) {
                            return Gt(t.getMonth() + 1, e, 2)
                        },
                        M: function(t, e) {
                            return Gt(t.getMinutes(), e, 2)
                        },
                        p: function(t) {
                            return p[+(t.getHours() >= 12)]
                        },
                        S: function(t, e) {
                            return Gt(t.getSeconds(), e, 2)
                        },
                        U: function(t, e) {
                            return Gt(os.sundayOfYear(t), e, 2)
                        },
                        w: function(t) {
                            return t.getDay()
                        },
                        W: function(t, e) {
                            return Gt(os.mondayOfYear(t), e, 2)
                        },
                        x: e(h),
                        X: e(d),
                        y: function(t, e) {
                            return Gt(t.getFullYear() % 100, e, 2)
                        },
                        Y: function(t, e) {
                            return Gt(t.getFullYear() % 1e4, e, 4)
                        },
                        Z: ie,
                        "%": function() {
                            return "%"
                        }
                    },
                    A = {
                        a: r,
                        A: a,
                        b: o,
                        B: i,
                        c: s,
                        d: te,
                        e: te,
                        H: ne,
                        I: ne,
                        j: ee,
                        L: oe,
                        m: Qt,
                        M: re,
                        p: c,
                        S: ae,
                        U: Vt,
                        w: Wt,
                        W: Jt,
                        x: l,
                        X: u,
                        y: Yt,
                        Y: Xt,
                        Z: Zt,
                        "%": se
                    };
                return e
            }

            function Gt(t, e, n) {
                var r = 0 > t ? "-" : "",
                    a = (r ? -t : t) + "",
                    o = a.length;
                return r + (n > o ? new Array(n - o + 1).join(e) + a : a)
            }

            function zt(t) {
                return new RegExp("^(?:" + t.map(Yo.requote).join("|") + ")", "i")
            }

            function qt(t) {
                for (var e = new l, n = -1, r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
                return e
            }

            function Wt(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 1));
                return r ? (t.w = +r[0], n + r[0].length) : -1
            }

            function Vt(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n));
                return r ? (t.U = +r[0], n + r[0].length) : -1
            }

            function Jt(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n));
                return r ? (t.W = +r[0], n + r[0].length) : -1
            }

            function Xt(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 4));
                return r ? (t.y = +r[0], n + r[0].length) : -1
            }

            function Yt(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 2));
                return r ? (t.y = Kt(+r[0]), n + r[0].length) : -1
            }

            function Zt(t, e, n) {
                return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
            }

            function Kt(t) {
                return t + (t > 68 ? 1900 : 2e3)
            }

            function Qt(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 2));
                return r ? (t.m = r[0] - 1, n + r[0].length) : -1
            }

            function te(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 2));
                return r ? (t.d = +r[0], n + r[0].length) : -1
            }

            function ee(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 3));
                return r ? (t.j = +r[0], n + r[0].length) : -1
            }

            function ne(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 2));
                return r ? (t.H = +r[0], n + r[0].length) : -1
            }

            function re(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 2));
                return r ? (t.M = +r[0], n + r[0].length) : -1
            }

            function ae(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 2));
                return r ? (t.S = +r[0], n + r[0].length) : -1
            }

            function oe(t, e, n) {
                us.lastIndex = 0;
                var r = us.exec(e.slice(n, n + 3));
                return r ? (t.L = +r[0], n + r[0].length) : -1
            }

            function ie(t) {
                var e = t.getTimezoneOffset(),
                    n = e > 0 ? "-" : "+",
                    r = ci(e) / 60 | 0,
                    a = ci(e) % 60;
                return n + Gt(r, "0", 2) + Gt(a, "0", 2)
            }

            function se(t, e, n) {
                cs.lastIndex = 0;
                var r = cs.exec(e.slice(n, n + 1));
                return r ? n + r[0].length : -1
            }

            function le(t) {
                for (var e = t.length, n = -1; ++n < e;) t[n][0] = this(t[n][0]);
                return function(e) {
                    for (var n = 0, r = t[n]; !r[1](e);) r = t[++n];
                    return r[0](e)
                }
            }

            function ue() {}

            function ce(t, e, n) {
                var r = n.s = t + e,
                    a = r - t,
                    o = r - a;
                n.t = t - o + (e - a)
            }

            function fe(t, e) {
                t && ps.hasOwnProperty(t.type) && ps[t.type](t, e)
            }

            function he(t, e, n) {
                var r, a = -1,
                    o = t.length - n;
                for (e.lineStart(); ++a < o;) r = t[a], e.point(r[0], r[1], r[2]);
                e.lineEnd()
            }

            function de(t, e) {
                var n = -1,
                    r = t.length;
                for (e.polygonStart(); ++n < r;) he(t[n], e, 1);
                e.polygonEnd()
            }

            function pe() {
                function t(t, e) {
                    t *= Li, e = e * Li / 2 + ki / 4;
                    var n = t - r,
                        i = n >= 0 ? 1 : -1,
                        s = i * n,
                        l = Math.cos(e),
                        u = Math.sin(e),
                        c = o * u,
                        f = a * l + c * Math.cos(s),
                        h = c * i * Math.sin(s);
                    ms.add(Math.atan2(h, f)), r = t, a = l, o = u
                }
                var e, n, r, a, o;
                _s.point = function(i, s) {
                    _s.point = t, r = (e = i) * Li, a = Math.cos(s = (n = s) * Li / 2 + ki / 4), o = Math.sin(s)
                }, _s.lineEnd = function() {
                    t(e, n)
                }
            }

            function ge(t) {
                var e = t[0],
                    n = t[1],
                    r = Math.cos(n);
                return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
            }

            function me(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            }

            function _e(t, e) {
                return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
            }

            function ve(t, e) {
                t[0] += e[0], t[1] += e[1], t[2] += e[2]
            }

            function ye(t, e) {
                return [t[0] * e, t[1] * e, t[2] * e]
            }

            function be(t) {
                var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= e, t[1] /= e, t[2] /= e
            }

            function we(t) {
                return [Math.atan2(t[1], t[0]), et(t[2])]
            }

            function Se(t, e) {
                return ci(t[0] - e[0]) < Fi && ci(t[1] - e[1]) < Fi
            }

            function xe(t, e) {
                t *= Li;
                var n = Math.cos(e *= Li);
                Ce(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
            }

            function Ce(t, e, n) {
                ++vs, bs += (t - bs) / vs, ws += (e - ws) / vs, Ss += (n - Ss) / vs
            }

            function De() {
                function t(t, a) {
                    t *= Li;
                    var o = Math.cos(a *= Li),
                        i = o * Math.cos(t),
                        s = o * Math.sin(t),
                        l = Math.sin(a),
                        u = Math.atan2(Math.sqrt((u = n * l - r * s) * u + (u = r * i - e * l) * u + (u = e * s - n * i) * u), e * i + n * s + r * l);
                    ys += u, xs += u * (e + (e = i)), Cs += u * (n + (n = s)), Ds += u * (r + (r = l)), Ce(e, n, r)
                }
                var e, n, r;
                As.point = function(a, o) {
                    a *= Li;
                    var i = Math.cos(o *= Li);
                    e = i * Math.cos(a), n = i * Math.sin(a), r = Math.sin(o), As.point = t, Ce(e, n, r)
                }
            }

            function Te() {
                As.point = xe
            }

            function Me() {
                function t(t, e) {
                    t *= Li;
                    var n = Math.cos(e *= Li),
                        i = n * Math.cos(t),
                        s = n * Math.sin(t),
                        l = Math.sin(e),
                        u = a * l - o * s,
                        c = o * i - r * l,
                        f = r * s - a * i,
                        h = Math.sqrt(u * u + c * c + f * f),
                        d = r * i + a * s + o * l,
                        p = h && -tt(d) / h,
                        g = Math.atan2(h, d);
                    Ts += p * u, Ms += p * c, ks += p * f, ys += g, xs += g * (r + (r = i)), Cs += g * (a + (a = s)), Ds += g * (o + (o = l)), Ce(r, a, o)
                }
                var e, n, r, a, o;
                As.point = function(i, s) {
                    e = i, n = s, As.point = t, i *= Li;
                    var l = Math.cos(s *= Li);
                    r = l * Math.cos(i), a = l * Math.sin(i), o = Math.sin(s), Ce(r, a, o)
                }, As.lineEnd = function() {
                    t(e, n), As.lineEnd = Te, As.point = xe
                }
            }

            function ke() {
                return !0
            }

            function Ae(t, e, n, r, a) {
                var o = [],
                    i = [];
                if (t.forEach(function(t) {
                        if (!((e = t.length - 1) <= 0)) {
                            var e, n = t[0],
                                r = t[e];
                            if (Se(n, r)) {
                                a.lineStart();
                                for (var s = 0; e > s; ++s) a.point((n = t[s])[0], n[1]);
                                return void a.lineEnd()
                            }
                            var l = new Fe(n, t, null, !0),
                                u = new Fe(n, null, l, !1);
                            l.o = u, o.push(l), i.push(u), l = new Fe(r, t, null, !1), u = new Fe(r, null, l, !0), l.o = u, o.push(l), i.push(u)
                        }
                    }), i.sort(e), Ie(o), Ie(i), o.length) {
                    for (var s = 0, l = n, u = i.length; u > s; ++s) i[s].e = l = !l;
                    for (var c, f, h = o[0];;) {
                        for (var d = h, p = !0; d.v;)
                            if ((d = d.n) === h) return;
                        c = d.z, a.lineStart();
                        do {
                            if (d.v = d.o.v = !0, d.e) {
                                if (p)
                                    for (var s = 0, u = c.length; u > s; ++s) a.point((f = c[s])[0], f[1]);
                                else r(d.x, d.n.x, 1, a);
                                d = d.n
                            } else {
                                if (p) {
                                    c = d.p.z;
                                    for (var s = c.length - 1; s >= 0; --s) a.point((f = c[s])[0], f[1])
                                } else r(d.x, d.p.x, -1, a);
                                d = d.p
                            }
                            d = d.o, c = d.z, p = !p
                        } while (!d.v);
                        a.lineEnd()
                    }
                }
            }

            function Ie(t) {
                if (e = t.length) {
                    for (var e, n, r = 0, a = t[0]; ++r < e;) a.n = n = t[r], n.p = a, a = n;
                    a.n = n = t[0], n.p = a
                }
            }

            function Fe(t, e, n, r) {
                this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
            }

            function Ne(t, e, n, r) {
                return function(a, o) {
                    function i(e, n) {
                        var r = a(e, n);
                        t(e = r[0], n = r[1]) && o.point(e, n)
                    }

                    function s(t, e) {
                        var n = a(t, e);
                        m.point(n[0], n[1])
                    }

                    function l() {
                        v.point = s, m.lineStart()
                    }

                    function u() {
                        v.point = i, m.lineEnd()
                    }

                    function c(t, e) {
                        g.push([t, e]);
                        var n = a(t, e);
                        b.point(n[0], n[1])
                    }

                    function f() {
                        b.lineStart(), g = []
                    }

                    function h() {
                        c(g[0][0], g[0][1]), b.lineEnd();
                        var t, e = b.clean(),
                            n = y.buffer(),
                            r = n.length;
                        if (g.pop(), p.push(g), g = null, r)
                            if (1 & e) {
                                t = n[0];
                                var a, r = t.length - 1,
                                    i = -1;
                                if (r > 0) {
                                    for (w || (o.polygonStart(), w = !0), o.lineStart(); ++i < r;) o.point((a = t[i])[0], a[1]);
                                    o.lineEnd()
                                }
                            } else r > 1 && 2 & e && n.push(n.pop().concat(n.shift())), d.push(n.filter(Le))
                    }
                    var d, p, g, m = e(o),
                        _ = a.invert(r[0], r[1]),
                        v = {
                            point: i,
                            lineStart: l,
                            lineEnd: u,
                            polygonStart: function() {
                                v.point = c, v.lineStart = f, v.lineEnd = h, d = [], p = []
                            },
                            polygonEnd: function() {
                                v.point = i, v.lineStart = l, v.lineEnd = u, d = Yo.merge(d);
                                var t = Ue(_, p);
                                d.length ? (w || (o.polygonStart(), w = !0), Ae(d, Re, t, n, o)) : t && (w || (o.polygonStart(), w = !0), o.lineStart(), n(null, null, 1, o), o.lineEnd()), w && (o.polygonEnd(), w = !1), d = p = null
                            },
                            sphere: function() {
                                o.polygonStart(), o.lineStart(), n(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                            }
                        },
                        y = Ee(),
                        b = e(y),
                        w = !1;
                    return v
                }
            }

            function Le(t) {
                return t.length > 1
            }

            function Ee() {
                var t, e = [];
                return {
                    lineStart: function() {
                        e.push(t = [])
                    },
                    point: function(e, n) {
                        t.push([e, n])
                    },
                    lineEnd: y,
                    buffer: function() {
                        var n = e;
                        return e = [], t = null, n
                    },
                    rejoin: function() {
                        e.length > 1 && e.push(e.pop().concat(e.shift()))
                    }
                }
            }

            function Re(t, e) {
                return ((t = t.x)[0] < 0 ? t[1] - Ii - Fi : Ii - t[1]) - ((e = e.x)[0] < 0 ? e[1] - Ii - Fi : Ii - e[1])
            }

            function Pe(t) {
                var e, n = NaN,
                    r = NaN,
                    a = NaN;
                return {
                    lineStart: function() {
                        t.lineStart(), e = 1
                    },
                    point: function(o, i) {
                        var s = o > 0 ? ki : -ki,
                            l = ci(o - n);
                        ci(l - ki) < Fi ? (t.point(n, r = (r + i) / 2 > 0 ? Ii : -Ii), t.point(a, r), t.lineEnd(), t.lineStart(), t.point(s, r), t.point(o, r), e = 0) : a !== s && l >= ki && (ci(n - a) < Fi && (n -= a * Fi), ci(o - s) < Fi && (o -= s * Fi), r = $e(n, r, o, i), t.point(a, r), t.lineEnd(), t.lineStart(), t.point(s, r), e = 0), t.point(n = o, r = i), a = s
                    },
                    lineEnd: function() {
                        t.lineEnd(), n = r = NaN
                    },
                    clean: function() {
                        return 2 - e
                    }
                }
            }

            function $e(t, e, n, r) {
                var a, o, i = Math.sin(t - n);
                return ci(i) > Fi ? Math.atan((Math.sin(e) * (o = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (a = Math.cos(e)) * Math.sin(t)) / (a * o * i)) : (e + r) / 2
            }

            function He(t, e, n, r) {
                var a;
                if (null == t) a = n * Ii, r.point(-ki, a), r.point(0, a), r.point(ki, a), r.point(ki, 0), r.point(ki, -a), r.point(0, -a), r.point(-ki, -a), r.point(-ki, 0), r.point(-ki, a);
                else if (ci(t[0] - e[0]) > Fi) {
                    var o = t[0] < e[0] ? ki : -ki;
                    a = n * o / 2, r.point(-o, a), r.point(0, a), r.point(o, a)
                } else r.point(e[0], e[1])
            }

            function Ue(t, e) {
                var n = t[0],
                    r = t[1],
                    a = [Math.sin(n), -Math.cos(n), 0],
                    o = 0,
                    i = 0;
                ms.reset();
                for (var s = 0, l = e.length; l > s; ++s) {
                    var u = e[s],
                        c = u.length;
                    if (c)
                        for (var f = u[0], h = f[0], d = f[1] / 2 + ki / 4, p = Math.sin(d), g = Math.cos(d), m = 1;;) {
                            m === c && (m = 0), t = u[m];
                            var _ = t[0],
                                v = t[1] / 2 + ki / 4,
                                y = Math.sin(v),
                                b = Math.cos(v),
                                w = _ - h,
                                S = w >= 0 ? 1 : -1,
                                x = S * w,
                                C = x > ki,
                                D = p * y;
                            if (ms.add(Math.atan2(D * S * Math.sin(x), g * b + D * Math.cos(x))), o += C ? w + S * Ai : w, C ^ h >= n ^ _ >= n) {
                                var T = _e(ge(f), ge(t));
                                be(T);
                                var M = _e(a, T);
                                be(M);
                                var k = (C ^ w >= 0 ? -1 : 1) * et(M[2]);
                                (r > k || r === k && (T[0] || T[1])) && (i += C ^ w >= 0 ? 1 : -1)
                            }
                            if (!m++) break;
                            h = _, p = y, g = b, f = t
                        }
                }
                return (-Fi > o || Fi > o && 0 > ms) ^ 1 & i
            }

            function Be(t) {
                function e(t, e) {
                    return Math.cos(t) * Math.cos(e) > o
                }

                function n(t) {
                    var n, o, l, u, c;
                    return {
                        lineStart: function() {
                            u = l = !1, c = 1
                        },
                        point: function(f, h) {
                            var d, p = [f, h],
                                g = e(f, h),
                                m = i ? g ? 0 : a(f, h) : g ? a(f + (0 > f ? ki : -ki), h) : 0;
                            if (!n && (u = l = g) && t.lineStart(), g !== l && (d = r(n, p), (Se(n, d) || Se(p, d)) && (p[0] += Fi, p[1] += Fi, g = e(p[0], p[1]))), g !== l) c = 0, g ? (t.lineStart(), d = r(p, n), t.point(d[0], d[1])) : (d = r(n, p), t.point(d[0], d[1]), t.lineEnd()), n = d;
                            else if (s && n && i ^ g) {
                                var _;
                                m & o || !(_ = r(p, n, !0)) || (c = 0, i ? (t.lineStart(), t.point(_[0][0], _[0][1]), t.point(_[1][0], _[1][1]), t.lineEnd()) : (t.point(_[1][0], _[1][1]), t.lineEnd(), t.lineStart(), t.point(_[0][0], _[0][1])))
                            }!g || n && Se(n, p) || t.point(p[0], p[1]), n = p, l = g, o = m
                        },
                        lineEnd: function() {
                            l && t.lineEnd(), n = null
                        },
                        clean: function() {
                            return c | (u && l) << 1
                        }
                    }
                }

                function r(t, e, n) {
                    var r = ge(t),
                        a = ge(e),
                        i = [1, 0, 0],
                        s = _e(r, a),
                        l = me(s, s),
                        u = s[0],
                        c = l - u * u;
                    if (!c) return !n && t;
                    var f = o * l / c,
                        h = -o * u / c,
                        d = _e(i, s),
                        p = ye(i, f),
                        g = ye(s, h);
                    ve(p, g);
                    var m = d,
                        _ = me(p, m),
                        v = me(m, m),
                        y = _ * _ - v * (me(p, p) - 1);
                    if (!(0 > y)) {
                        var b = Math.sqrt(y),
                            w = ye(m, (-_ - b) / v);
                        if (ve(w, p), w = we(w), !n) return w;
                        var S, x = t[0],
                            C = e[0],
                            D = t[1],
                            T = e[1];
                        x > C && (S = x, x = C, C = S);
                        var M = C - x,
                            k = ci(M - ki) < Fi,
                            A = k || Fi > M;
                        if (!k && D > T && (S = D, D = T, T = S), A ? k ? D + T > 0 ^ w[1] < (ci(w[0] - x) < Fi ? D : T) : D <= w[1] && w[1] <= T : M > ki ^ (x <= w[0] && w[0] <= C)) {
                            var I = ye(m, (-_ + b) / v);
                            return ve(I, p), [w, we(I)]
                        }
                    }
                }

                function a(e, n) {
                    var r = i ? t : ki - t,
                        a = 0;
                    return -r > e ? a |= 1 : e > r && (a |= 2), -r > n ? a |= 4 : n > r && (a |= 8), a
                }
                var o = Math.cos(t),
                    i = o > 0,
                    s = ci(o) > Fi,
                    l = gn(t, 6 * Li);
                return Ne(e, n, l, i ? [0, -t] : [-ki, t - ki])
            }

            function Oe(t, e, n, r) {
                return function(a) {
                    var o, i = a.a,
                        s = a.b,
                        l = i.x,
                        u = i.y,
                        c = s.x,
                        f = s.y,
                        h = 0,
                        d = 1,
                        p = c - l,
                        g = f - u;
                    if (o = t - l, p || !(o > 0)) {
                        if (o /= p, 0 > p) {
                            if (h > o) return;
                            d > o && (d = o)
                        } else if (p > 0) {
                            if (o > d) return;
                            o > h && (h = o)
                        }
                        if (o = n - l, p || !(0 > o)) {
                            if (o /= p, 0 > p) {
                                if (o > d) return;
                                o > h && (h = o)
                            } else if (p > 0) {
                                if (h > o) return;
                                d > o && (d = o)
                            }
                            if (o = e - u, g || !(o > 0)) {
                                if (o /= g, 0 > g) {
                                    if (h > o) return;
                                    d > o && (d = o)
                                } else if (g > 0) {
                                    if (o > d) return;
                                    o > h && (h = o)
                                }
                                if (o = r - u, g || !(0 > o)) {
                                    if (o /= g, 0 > g) {
                                        if (o > d) return;
                                        o > h && (h = o)
                                    } else if (g > 0) {
                                        if (h > o) return;
                                        d > o && (d = o)
                                    }
                                    return h > 0 && (a.a = {
                                        x: l + h * p,
                                        y: u + h * g
                                    }), 1 > d && (a.b = {
                                        x: l + d * p,
                                        y: u + d * g
                                    }), a
                                }
                            }
                        }
                    }
                }
            }

            function je(t, e, n, r) {
                function a(r, a) {
                    return ci(r[0] - t) < Fi ? a > 0 ? 0 : 3 : ci(r[0] - n) < Fi ? a > 0 ? 2 : 1 : ci(r[1] - e) < Fi ? a > 0 ? 1 : 0 : a > 0 ? 3 : 2
                }

                function o(t, e) {
                    return i(t.x, e.x)
                }

                function i(t, e) {
                    var n = a(t, 1),
                        r = a(e, 1);
                    return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
                }
                return function(s) {
                    function l(t) {
                        for (var e = 0, n = m.length, r = t[1], a = 0; n > a; ++a)
                            for (var o, i = 1, s = m[a], l = s.length, u = s[0]; l > i; ++i) o = s[i], u[1] <= r ? o[1] > r && Q(u, o, t) > 0 && ++e : o[1] <= r && Q(u, o, t) < 0 && --e, u = o;
                        return 0 !== e
                    }

                    function u(o, s, l, u) {
                        var c = 0,
                            f = 0;
                        if (null == o || (c = a(o, l)) !== (f = a(s, l)) || i(o, s) < 0 ^ l > 0) {
                            do u.point(0 === c || 3 === c ? t : n, c > 1 ? r : e); while ((c = (c + l + 4) % 4) !== f)
                        } else u.point(s[0], s[1])
                    }

                    function c(a, o) {
                        return a >= t && n >= a && o >= e && r >= o
                    }

                    function f(t, e) {
                        c(t, e) && s.point(t, e)
                    }

                    function h() {
                        A.point = p, m && m.push(_ = []), C = !0, x = !1, w = S = NaN
                    }

                    function d() {
                        g && (p(v, y), b && x && M.rejoin(), g.push(M.buffer())), A.point = f, x && s.lineEnd()
                    }

                    function p(t, e) {
                        t = Math.max(-Fs, Math.min(Fs, t)), e = Math.max(-Fs, Math.min(Fs, e));
                        var n = c(t, e);
                        if (m && _.push([t, e]), C) v = t, y = e, b = n, C = !1, n && (s.lineStart(), s.point(t, e));
                        else if (n && x) s.point(t, e);
                        else {
                            var r = {
                                a: {
                                    x: w,
                                    y: S
                                },
                                b: {
                                    x: t,
                                    y: e
                                }
                            };
                            k(r) ? (x || (s.lineStart(), s.point(r.a.x, r.a.y)), s.point(r.b.x, r.b.y), n || s.lineEnd(), D = !1) : n && (s.lineStart(), s.point(t, e), D = !1)
                        }
                        w = t, S = e, x = n
                    }
                    var g, m, _, v, y, b, w, S, x, C, D, T = s,
                        M = Ee(),
                        k = Oe(t, e, n, r),
                        A = {
                            point: f,
                            lineStart: h,
                            lineEnd: d,
                            polygonStart: function() {
                                s = M, g = [], m = [], D = !0
                            },
                            polygonEnd: function() {
                                s = T, g = Yo.merge(g);
                                var e = l([t, r]),
                                    n = D && e,
                                    a = g.length;
                                (n || a) && (s.polygonStart(), n && (s.lineStart(), u(null, null, 1, s), s.lineEnd()), a && Ae(g, o, e, u, s), s.polygonEnd()), g = m = _ = null
                            }
                        };
                    return A
                }
            }

            function Ge(t, e) {
                function n(n, r) {
                    return n = t(n, r), e(n[0], n[1])
                }
                return t.invert && e.invert && (n.invert = function(n, r) {
                    return n = e.invert(n, r), n && t.invert(n[0], n[1])
                }), n
            }

            function ze(t) {
                var e = 0,
                    n = ki / 3,
                    r = sn(t),
                    a = r(e, n);
                return a.parallels = function(t) {
                    return arguments.length ? r(e = t[0] * ki / 180, n = t[1] * ki / 180) : [e / ki * 180, n / ki * 180]
                }, a
            }

            function qe(t, e) {
                function n(t, e) {
                    var n = Math.sqrt(o - 2 * a * Math.sin(e)) / a;
                    return [n * Math.sin(t *= a), i - n * Math.cos(t)]
                }
                var r = Math.sin(t),
                    a = (r + Math.sin(e)) / 2,
                    o = 1 + r * (2 * a - r),
                    i = Math.sqrt(o) / a;
                return n.invert = function(t, e) {
                    var n = i - e;
                    return [Math.atan2(t, n) / a, et((o - (t * t + n * n) * a * a) / (2 * a))]
                }, n
            }

            function We() {
                function t(t, e) {
                    Ls += a * t - r * e, r = t, a = e
                }
                var e, n, r, a;
                Hs.point = function(o, i) {
                    Hs.point = t, e = r = o, n = a = i
                }, Hs.lineEnd = function() {
                    t(e, n)
                }
            }

            function Ve(t, e) {
                Es > t && (Es = t), t > Ps && (Ps = t), Rs > e && (Rs = e), e > $s && ($s = e)
            }

            function Je() {
                function t(t, e) {
                    i.push("M", t, ",", e, o)
                }

                function e(t, e) {
                    i.push("M", t, ",", e), s.point = n
                }

                function n(t, e) {
                    i.push("L", t, ",", e)
                }

                function r() {
                    s.point = t
                }

                function a() {
                    i.push("Z")
                }
                var o = Xe(4.5),
                    i = [],
                    s = {
                        point: t,
                        lineStart: function() {
                            s.point = e
                        },
                        lineEnd: r,
                        polygonStart: function() {
                            s.lineEnd = a
                        },
                        polygonEnd: function() {
                            s.lineEnd = r, s.point = t
                        },
                        pointRadius: function(t) {
                            return o = Xe(t), s
                        },
                        result: function() {
                            if (i.length) {
                                var t = i.join("");
                                return i = [], t
                            }
                        }
                    };
                return s
            }

            function Xe(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }

            function Ye(t, e) {
                bs += t, ws += e, ++Ss
            }

            function Ze() {
                function t(t, r) {
                    var a = t - e,
                        o = r - n,
                        i = Math.sqrt(a * a + o * o);
                    xs += i * (e + t) / 2, Cs += i * (n + r) / 2, Ds += i, Ye(e = t, n = r)
                }
                var e, n;
                Bs.point = function(r, a) {
                    Bs.point = t, Ye(e = r, n = a)
                }
            }

            function Ke() {
                Bs.point = Ye
            }

            function Qe() {
                function t(t, e) {
                    var n = t - r,
                        o = e - a,
                        i = Math.sqrt(n * n + o * o);
                    xs += i * (r + t) / 2, Cs += i * (a + e) / 2, Ds += i, i = a * t - r * e, Ts += i * (r + t), Ms += i * (a + e), ks += 3 * i, Ye(r = t, a = e)
                }
                var e, n, r, a;
                Bs.point = function(o, i) {
                    Bs.point = t, Ye(e = r = o, n = a = i)
                }, Bs.lineEnd = function() {
                    t(e, n)
                }
            }

            function tn(t) {
                function e(e, n) {
                    t.moveTo(e, n), t.arc(e, n, i, 0, Ai)
                }

                function n(e, n) {
                    t.moveTo(e, n), s.point = r
                }

                function r(e, n) {
                    t.lineTo(e, n)
                }

                function a() {
                    s.point = e
                }

                function o() {
                    t.closePath()
                }
                var i = 4.5,
                    s = {
                        point: e,
                        lineStart: function() {
                            s.point = n
                        },
                        lineEnd: a,
                        polygonStart: function() {
                            s.lineEnd = o
                        },
                        polygonEnd: function() {
                            s.lineEnd = a, s.point = e
                        },
                        pointRadius: function(t) {
                            return i = t, s
                        },
                        result: y
                    };
                return s
            }

            function en(t) {
                function e(t) {
                    return (s ? r : n)(t)
                }

                function n(e) {
                    return an(e, function(n, r) {
                        n = t(n, r), e.point(n[0], n[1])
                    })
                }

                function r(e) {
                    function n(n, r) {
                        n = t(n, r), e.point(n[0], n[1])
                    }

                    function r() {
                        y = NaN, C.point = o, e.lineStart()
                    }

                    function o(n, r) {
                        var o = ge([n, r]),
                            i = t(n, r);
                        a(y, b, v, w, S, x, y = i[0], b = i[1], v = n, w = o[0], S = o[1], x = o[2], s, e), e.point(y, b)
                    }

                    function i() {
                        C.point = n, e.lineEnd()
                    }

                    function l() {
                        r(), C.point = u, C.lineEnd = c
                    }

                    function u(t, e) {
                        o(f = t, h = e),
                            d = y, p = b, g = w, m = S, _ = x, C.point = o
                    }

                    function c() {
                        a(y, b, v, w, S, x, d, p, f, g, m, _, s, e), C.lineEnd = i, i()
                    }
                    var f, h, d, p, g, m, _, v, y, b, w, S, x, C = {
                        point: n,
                        lineStart: r,
                        lineEnd: i,
                        polygonStart: function() {
                            e.polygonStart(), C.lineStart = l
                        },
                        polygonEnd: function() {
                            e.polygonEnd(), C.lineStart = r
                        }
                    };
                    return C
                }

                function a(e, n, r, s, l, u, c, f, h, d, p, g, m, _) {
                    var v = c - e,
                        y = f - n,
                        b = v * v + y * y;
                    if (b > 4 * o && m--) {
                        var w = s + d,
                            S = l + p,
                            x = u + g,
                            C = Math.sqrt(w * w + S * S + x * x),
                            D = Math.asin(x /= C),
                            T = ci(ci(x) - 1) < Fi || ci(r - h) < Fi ? (r + h) / 2 : Math.atan2(S, w),
                            M = t(T, D),
                            k = M[0],
                            A = M[1],
                            I = k - e,
                            F = A - n,
                            N = y * I - v * F;
                        (N * N / b > o || ci((v * I + y * F) / b - .5) > .3 || i > s * d + l * p + u * g) && (a(e, n, r, s, l, u, k, A, T, w /= C, S /= C, x, m, _), _.point(k, A), a(k, A, T, w, S, x, c, f, h, d, p, g, m, _))
                    }
                }
                var o = .5,
                    i = Math.cos(30 * Li),
                    s = 16;
                return e.precision = function(t) {
                    return arguments.length ? (s = (o = t * t) > 0 && 16, e) : Math.sqrt(o)
                }, e
            }

            function nn(t) {
                var e = en(function(e, n) {
                    return t([e * Ei, n * Ei])
                });
                return function(t) {
                    return ln(e(t))
                }
            }

            function rn(t) {
                this.stream = t
            }

            function an(t, e) {
                return {
                    point: e,
                    sphere: function() {
                        t.sphere()
                    },
                    lineStart: function() {
                        t.lineStart()
                    },
                    lineEnd: function() {
                        t.lineEnd()
                    },
                    polygonStart: function() {
                        t.polygonStart()
                    },
                    polygonEnd: function() {
                        t.polygonEnd()
                    }
                }
            }

            function on(t) {
                return sn(function() {
                    return t
                })()
            }

            function sn(t) {
                function e(t) {
                    return t = s(t[0] * Li, t[1] * Li), [t[0] * h + l, u - t[1] * h]
                }

                function n(t) {
                    return t = s.invert((t[0] - l) / h, (u - t[1]) / h), t && [t[0] * Ei, t[1] * Ei]
                }

                function r() {
                    s = Ge(i = fn(_, v, y), o);
                    var t = o(g, m);
                    return l = d - t[0] * h, u = p + t[1] * h, a()
                }

                function a() {
                    return c && (c.valid = !1, c = null), e
                }
                var o, i, s, l, u, c, f = en(function(t, e) {
                        return t = o(t, e), [t[0] * h + l, u - t[1] * h]
                    }),
                    h = 150,
                    d = 480,
                    p = 250,
                    g = 0,
                    m = 0,
                    _ = 0,
                    v = 0,
                    y = 0,
                    b = Is,
                    w = Mt,
                    S = null,
                    x = null;
                return e.stream = function(t) {
                        return c && (c.valid = !1), c = ln(b(i, f(w(t)))), c.valid = !0, c
                    }, e.clipAngle = function(t) {
                        return arguments.length ? (b = null == t ? (S = t, Is) : Be((S = +t) * Li), a()) : S
                    }, e.clipExtent = function(t) {
                        return arguments.length ? (x = t, w = t ? je(t[0][0], t[0][1], t[1][0], t[1][1]) : Mt, a()) : x
                    }, e.scale = function(t) {
                        return arguments.length ? (h = +t, r()) : h
                    }, e.translate = function(t) {
                        return arguments.length ? (d = +t[0], p = +t[1], r()) : [d, p]
                    }, e.center = function(t) {
                        return arguments.length ? (g = t[0] % 360 * Li, m = t[1] % 360 * Li, r()) : [g * Ei, m * Ei]
                    }, e.rotate = function(t) {
                        return arguments.length ? (_ = t[0] % 360 * Li, v = t[1] % 360 * Li, y = t.length > 2 ? t[2] % 360 * Li : 0, r()) : [_ * Ei, v * Ei, y * Ei]
                    }, Yo.rebind(e, f, "precision"),
                    function() {
                        return o = t.apply(this, arguments), e.invert = o.invert && n, r()
                    }
            }

            function ln(t) {
                return an(t, function(e, n) {
                    t.point(e * Li, n * Li)
                })
            }

            function un(t, e) {
                return [t, e]
            }

            function cn(t, e) {
                return [t > ki ? t - Ai : -ki > t ? t + Ai : t, e]
            }

            function fn(t, e, n) {
                return t ? e || n ? Ge(dn(t), pn(e, n)) : dn(t) : e || n ? pn(e, n) : cn
            }

            function hn(t) {
                return function(e, n) {
                    return e += t, [e > ki ? e - Ai : -ki > e ? e + Ai : e, n]
                }
            }

            function dn(t) {
                var e = hn(t);
                return e.invert = hn(-t), e
            }

            function pn(t, e) {
                function n(t, e) {
                    var n = Math.cos(e),
                        s = Math.cos(t) * n,
                        l = Math.sin(t) * n,
                        u = Math.sin(e),
                        c = u * r + s * a;
                    return [Math.atan2(l * o - c * i, s * r - u * a), et(c * o + l * i)]
                }
                var r = Math.cos(t),
                    a = Math.sin(t),
                    o = Math.cos(e),
                    i = Math.sin(e);
                return n.invert = function(t, e) {
                    var n = Math.cos(e),
                        s = Math.cos(t) * n,
                        l = Math.sin(t) * n,
                        u = Math.sin(e),
                        c = u * o - l * i;
                    return [Math.atan2(l * o + u * i, s * r + c * a), et(c * r - s * a)]
                }, n
            }

            function gn(t, e) {
                var n = Math.cos(t),
                    r = Math.sin(t);
                return function(a, o, i, s) {
                    var l = i * e;
                    null != a ? (a = mn(n, a), o = mn(n, o), (i > 0 ? o > a : a > o) && (a += i * Ai)) : (a = t + i * Ai, o = t - .5 * l);
                    for (var u, c = a; i > 0 ? c > o : o > c; c -= l) s.point((u = we([n, -r * Math.cos(c), -r * Math.sin(c)]))[0], u[1])
                }
            }

            function mn(t, e) {
                var n = ge(e);
                n[0] -= t, be(n);
                var r = tt(-n[1]);
                return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - Fi) % (2 * Math.PI)
            }

            function _n(t, e, n) {
                var r = Yo.range(t, e - Fi, n).concat(e);
                return function(t) {
                    return r.map(function(e) {
                        return [t, e]
                    })
                }
            }

            function vn(t, e, n) {
                var r = Yo.range(t, e - Fi, n).concat(e);
                return function(t) {
                    return r.map(function(e) {
                        return [e, t]
                    })
                }
            }

            function yn(t) {
                return t.source
            }

            function bn(t) {
                return t.target
            }

            function wn(t, e, n, r) {
                var a = Math.cos(e),
                    o = Math.sin(e),
                    i = Math.cos(r),
                    s = Math.sin(r),
                    l = a * Math.cos(t),
                    u = a * Math.sin(t),
                    c = i * Math.cos(n),
                    f = i * Math.sin(n),
                    h = 2 * Math.asin(Math.sqrt(ot(r - e) + a * i * ot(n - t))),
                    d = 1 / Math.sin(h),
                    p = h ? function(t) {
                        var e = Math.sin(t *= h) * d,
                            n = Math.sin(h - t) * d,
                            r = n * l + e * c,
                            a = n * u + e * f,
                            i = n * o + e * s;
                        return [Math.atan2(a, r) * Ei, Math.atan2(i, Math.sqrt(r * r + a * a)) * Ei]
                    } : function() {
                        return [t * Ei, e * Ei]
                    };
                return p.distance = h, p
            }

            function Sn() {
                function t(t, a) {
                    var o = Math.sin(a *= Li),
                        i = Math.cos(a),
                        s = ci((t *= Li) - e),
                        l = Math.cos(s);
                    Os += Math.atan2(Math.sqrt((s = i * Math.sin(s)) * s + (s = r * o - n * i * l) * s), n * o + r * i * l), e = t, n = o, r = i
                }
                var e, n, r;
                js.point = function(a, o) {
                    e = a * Li, n = Math.sin(o *= Li), r = Math.cos(o), js.point = t
                }, js.lineEnd = function() {
                    js.point = js.lineEnd = y
                }
            }

            function xn(t, e) {
                function n(e, n) {
                    var r = Math.cos(e),
                        a = Math.cos(n),
                        o = t(r * a);
                    return [o * a * Math.sin(e), o * Math.sin(n)]
                }
                return n.invert = function(t, n) {
                    var r = Math.sqrt(t * t + n * n),
                        a = e(r),
                        o = Math.sin(a),
                        i = Math.cos(a);
                    return [Math.atan2(t * o, r * i), Math.asin(r && n * o / r)]
                }, n
            }

            function Cn(t, e) {
                function n(t, e) {
                    i > 0 ? -Ii + Fi > e && (e = -Ii + Fi) : e > Ii - Fi && (e = Ii - Fi);
                    var n = i / Math.pow(a(e), o);
                    return [n * Math.sin(o * t), i - n * Math.cos(o * t)]
                }
                var r = Math.cos(t),
                    a = function(t) {
                        return Math.tan(ki / 4 + t / 2)
                    },
                    o = t === e ? Math.sin(t) : Math.log(r / Math.cos(e)) / Math.log(a(e) / a(t)),
                    i = r * Math.pow(a(t), o) / o;
                return o ? (n.invert = function(t, e) {
                    var n = i - e,
                        r = K(o) * Math.sqrt(t * t + n * n);
                    return [Math.atan2(t, n) / o, 2 * Math.atan(Math.pow(i / r, 1 / o)) - Ii]
                }, n) : Tn
            }

            function Dn(t, e) {
                function n(t, e) {
                    var n = o - e;
                    return [n * Math.sin(a * t), o - n * Math.cos(a * t)]
                }
                var r = Math.cos(t),
                    a = t === e ? Math.sin(t) : (r - Math.cos(e)) / (e - t),
                    o = r / a + t;
                return ci(a) < Fi ? un : (n.invert = function(t, e) {
                    var n = o - e;
                    return [Math.atan2(t, n) / a, o - K(a) * Math.sqrt(t * t + n * n)]
                }, n)
            }

            function Tn(t, e) {
                return [t, Math.log(Math.tan(ki / 4 + e / 2))]
            }

            function Mn(t) {
                var e, n = on(t),
                    r = n.scale,
                    a = n.translate,
                    o = n.clipExtent;
                return n.scale = function() {
                    var t = r.apply(n, arguments);
                    return t === n ? e ? n.clipExtent(null) : n : t
                }, n.translate = function() {
                    var t = a.apply(n, arguments);
                    return t === n ? e ? n.clipExtent(null) : n : t
                }, n.clipExtent = function(t) {
                    var i = o.apply(n, arguments);
                    if (i === n) {
                        if (e = null == t) {
                            var s = ki * r(),
                                l = a();
                            o([
                                [l[0] - s, l[1] - s],
                                [l[0] + s, l[1] + s]
                            ])
                        }
                    } else e && (i = null);
                    return i
                }, n.clipExtent(null)
            }

            function kn(t, e) {
                return [Math.log(Math.tan(ki / 4 + e / 2)), -t]
            }

            function An(t) {
                return t[0]
            }

            function In(t) {
                return t[1]
            }

            function Fn(t) {
                for (var e = t.length, n = [0, 1], r = 2, a = 2; e > a; a++) {
                    for (; r > 1 && Q(t[n[r - 2]], t[n[r - 1]], t[a]) <= 0;) --r;
                    n[r++] = a
                }
                return n.slice(0, r)
            }

            function Nn(t, e) {
                return t[0] - e[0] || t[1] - e[1]
            }

            function Ln(t, e, n) {
                return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
            }

            function En(t, e, n, r) {
                var a = t[0],
                    o = n[0],
                    i = e[0] - a,
                    s = r[0] - o,
                    l = t[1],
                    u = n[1],
                    c = e[1] - l,
                    f = r[1] - u,
                    h = (s * (l - u) - f * (a - o)) / (f * i - s * c);
                return [a + h * i, l + h * c]
            }

            function Rn(t) {
                var e = t[0],
                    n = t[t.length - 1];
                return !(e[0] - n[0] || e[1] - n[1])
            }

            function Pn() {
                rr(this), this.edge = this.site = this.circle = null
            }

            function $n(t) {
                var e = tl.pop() || new Pn;
                return e.site = t, e
            }

            function Hn(t) {
                Jn(t), Zs.remove(t), tl.push(t), rr(t)
            }

            function Un(t) {
                var e = t.circle,
                    n = e.x,
                    r = e.cy,
                    a = {
                        x: n,
                        y: r
                    },
                    o = t.P,
                    i = t.N,
                    s = [t];
                Hn(t);
                for (var l = o; l.circle && ci(n - l.circle.x) < Fi && ci(r - l.circle.cy) < Fi;) o = l.P, s.unshift(l), Hn(l), l = o;
                s.unshift(l), Jn(l);
                for (var u = i; u.circle && ci(n - u.circle.x) < Fi && ci(r - u.circle.cy) < Fi;) i = u.N, s.push(u), Hn(u), u = i;
                s.push(u), Jn(u);
                var c, f = s.length;
                for (c = 1; f > c; ++c) u = s[c], l = s[c - 1], tr(u.edge, l.site, u.site, a);
                l = s[0], u = s[f - 1], u.edge = Kn(l.site, u.site, null, a), Vn(l), Vn(u)
            }

            function Bn(t) {
                for (var e, n, r, a, o = t.x, i = t.y, s = Zs._; s;)
                    if (r = On(s, i) - o, r > Fi) s = s.L;
                    else {
                        if (a = o - jn(s, i), !(a > Fi)) {
                            r > -Fi ? (e = s.P, n = s) : a > -Fi ? (e = s, n = s.N) : e = n = s;
                            break
                        }
                        if (!s.R) {
                            e = s;
                            break
                        }
                        s = s.R
                    }
                var l = $n(t);
                if (Zs.insert(e, l), e || n) {
                    if (e === n) return Jn(e), n = $n(e.site), Zs.insert(l, n), l.edge = n.edge = Kn(e.site, l.site), Vn(e), void Vn(n);
                    if (!n) return void(l.edge = Kn(e.site, l.site));
                    Jn(e), Jn(n);
                    var u = e.site,
                        c = u.x,
                        f = u.y,
                        h = t.x - c,
                        d = t.y - f,
                        p = n.site,
                        g = p.x - c,
                        m = p.y - f,
                        _ = 2 * (h * m - d * g),
                        v = h * h + d * d,
                        y = g * g + m * m,
                        b = {
                            x: (m * v - d * y) / _ + c,
                            y: (h * y - g * v) / _ + f
                        };
                    tr(n.edge, u, p, b), l.edge = Kn(u, t, null, b), n.edge = Kn(t, p, null, b), Vn(e), Vn(n)
                }
            }

            function On(t, e) {
                var n = t.site,
                    r = n.x,
                    a = n.y,
                    o = a - e;
                if (!o) return r;
                var i = t.P;
                if (!i) return -(1 / 0);
                n = i.site;
                var s = n.x,
                    l = n.y,
                    u = l - e;
                if (!u) return s;
                var c = s - r,
                    f = 1 / o - 1 / u,
                    h = c / u;
                return f ? (-h + Math.sqrt(h * h - 2 * f * (c * c / (-2 * u) - l + u / 2 + a - o / 2))) / f + r : (r + s) / 2
            }

            function jn(t, e) {
                var n = t.N;
                if (n) return On(n, e);
                var r = t.site;
                return r.y === e ? r.x : 1 / 0
            }

            function Gn(t) {
                this.site = t, this.edges = []
            }

            function zn(t) {
                for (var e, n, r, a, o, i, s, l, u, c, f = t[0][0], h = t[1][0], d = t[0][1], p = t[1][1], g = Ys, m = g.length; m--;)
                    if (o = g[m], o && o.prepare())
                        for (s = o.edges, l = s.length, i = 0; l > i;) c = s[i].end(), r = c.x, a = c.y, u = s[++i % l].start(), e = u.x, n = u.y, (ci(r - e) > Fi || ci(a - n) > Fi) && (s.splice(i, 0, new er(Qn(o.site, c, ci(r - f) < Fi && p - a > Fi ? {
                            x: f,
                            y: ci(e - f) < Fi ? n : p
                        } : ci(a - p) < Fi && h - r > Fi ? {
                            x: ci(n - p) < Fi ? e : h,
                            y: p
                        } : ci(r - h) < Fi && a - d > Fi ? {
                            x: h,
                            y: ci(e - h) < Fi ? n : d
                        } : ci(a - d) < Fi && r - f > Fi ? {
                            x: ci(n - d) < Fi ? e : f,
                            y: d
                        } : null), o.site, null)), ++l)
            }

            function qn(t, e) {
                return e.angle - t.angle
            }

            function Wn() {
                rr(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Vn(t) {
                var e = t.P,
                    n = t.N;
                if (e && n) {
                    var r = e.site,
                        a = t.site,
                        o = n.site;
                    if (r !== o) {
                        var i = a.x,
                            s = a.y,
                            l = r.x - i,
                            u = r.y - s,
                            c = o.x - i,
                            f = o.y - s,
                            h = 2 * (l * f - u * c);
                        if (!(h >= -Ni)) {
                            var d = l * l + u * u,
                                p = c * c + f * f,
                                g = (f * d - u * p) / h,
                                m = (l * p - c * d) / h,
                                f = m + s,
                                _ = el.pop() || new Wn;
                            _.arc = t, _.site = a, _.x = g + i, _.y = f + Math.sqrt(g * g + m * m), _.cy = f, t.circle = _;
                            for (var v = null, y = Qs._; y;)
                                if (_.y < y.y || _.y === y.y && _.x <= y.x) {
                                    if (!y.L) {
                                        v = y.P;
                                        break
                                    }
                                    y = y.L
                                } else {
                                    if (!y.R) {
                                        v = y;
                                        break
                                    }
                                    y = y.R
                                }
                            Qs.insert(v, _), v || (Ks = _)
                        }
                    }
                }
            }

            function Jn(t) {
                var e = t.circle;
                e && (e.P || (Ks = e.N), Qs.remove(e), el.push(e), rr(e), t.circle = null)
            }

            function Xn(t) {
                for (var e, n = Xs, r = Oe(t[0][0], t[0][1], t[1][0], t[1][1]), a = n.length; a--;) e = n[a], (!Yn(e, t) || !r(e) || ci(e.a.x - e.b.x) < Fi && ci(e.a.y - e.b.y) < Fi) && (e.a = e.b = null, n.splice(a, 1))
            }

            function Yn(t, e) {
                var n = t.b;
                if (n) return !0;
                var r, a, o = t.a,
                    i = e[0][0],
                    s = e[1][0],
                    l = e[0][1],
                    u = e[1][1],
                    c = t.l,
                    f = t.r,
                    h = c.x,
                    d = c.y,
                    p = f.x,
                    g = f.y,
                    m = (h + p) / 2,
                    _ = (d + g) / 2;
                if (g === d) {
                    if (i > m || m >= s) return;
                    if (h > p) {
                        if (o) {
                            if (o.y >= u) return
                        } else o = {
                            x: m,
                            y: l
                        };
                        n = {
                            x: m,
                            y: u
                        }
                    } else {
                        if (o) {
                            if (o.y < l) return
                        } else o = {
                            x: m,
                            y: u
                        };
                        n = {
                            x: m,
                            y: l
                        }
                    }
                } else if (r = (h - p) / (g - d), a = _ - r * m, -1 > r || r > 1)
                    if (h > p) {
                        if (o) {
                            if (o.y >= u) return
                        } else o = {
                            x: (l - a) / r,
                            y: l
                        };
                        n = {
                            x: (u - a) / r,
                            y: u
                        }
                    } else {
                        if (o) {
                            if (o.y < l) return
                        } else o = {
                            x: (u - a) / r,
                            y: u
                        };
                        n = {
                            x: (l - a) / r,
                            y: l
                        }
                    }
                else if (g > d) {
                    if (o) {
                        if (o.x >= s) return
                    } else o = {
                        x: i,
                        y: r * i + a
                    };
                    n = {
                        x: s,
                        y: r * s + a
                    }
                } else {
                    if (o) {
                        if (o.x < i) return
                    } else o = {
                        x: s,
                        y: r * s + a
                    };
                    n = {
                        x: i,
                        y: r * i + a
                    }
                }
                return t.a = o, t.b = n, !0
            }

            function Zn(t, e) {
                this.l = t, this.r = e, this.a = this.b = null
            }

            function Kn(t, e, n, r) {
                var a = new Zn(t, e);
                return Xs.push(a), n && tr(a, t, e, n), r && tr(a, e, t, r), Ys[t.i].edges.push(new er(a, t, e)), Ys[e.i].edges.push(new er(a, e, t)), a
            }

            function Qn(t, e, n) {
                var r = new Zn(t, null);
                return r.a = e, r.b = n, Xs.push(r), r
            }

            function tr(t, e, n, r) {
                t.a || t.b ? t.l === n ? t.b = r : t.a = r : (t.a = r, t.l = e, t.r = n)
            }

            function er(t, e, n) {
                var r = t.a,
                    a = t.b;
                this.edge = t, this.site = e, this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(a.x - r.x, r.y - a.y) : Math.atan2(r.x - a.x, a.y - r.y)
            }

            function nr() {
                this._ = null
            }

            function rr(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function ar(t, e) {
                var n = e,
                    r = e.R,
                    a = n.U;
                a ? a.L === n ? a.L = r : a.R = r : t._ = r, r.U = a, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
            }

            function or(t, e) {
                var n = e,
                    r = e.L,
                    a = n.U;
                a ? a.L === n ? a.L = r : a.R = r : t._ = r, r.U = a, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
            }

            function ir(t) {
                for (; t.L;) t = t.L;
                return t
            }

            function sr(t, e) {
                var n, r, a, o = t.sort(lr).pop();
                for (Xs = [], Ys = new Array(t.length), Zs = new nr, Qs = new nr;;)
                    if (a = Ks, o && (!a || o.y < a.y || o.y === a.y && o.x < a.x))(o.x !== n || o.y !== r) && (Ys[o.i] = new Gn(o), Bn(o), n = o.x, r = o.y), o = t.pop();
                    else {
                        if (!a) break;
                        Un(a.arc)
                    }
                e && (Xn(e), zn(e));
                var i = {
                    cells: Ys,
                    edges: Xs
                };
                return Zs = Qs = Xs = Ys = null, i
            }

            function lr(t, e) {
                return e.y - t.y || e.x - t.x
            }

            function ur(t, e, n) {
                return (t.x - n.x) * (e.y - t.y) - (t.x - e.x) * (n.y - t.y)
            }

            function cr(t) {
                return t.x
            }

            function fr(t) {
                return t.y
            }

            function hr() {
                return {
                    leaf: !0,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null
                }
            }

            function dr(t, e, n, r, a, o) {
                if (!t(e, n, r, a, o)) {
                    var i = .5 * (n + a),
                        s = .5 * (r + o),
                        l = e.nodes;
                    l[0] && dr(t, l[0], n, r, i, s), l[1] && dr(t, l[1], i, r, a, s), l[2] && dr(t, l[2], n, s, i, o), l[3] && dr(t, l[3], i, s, a, o)
                }
            }

            function pr(t, e) {
                t = Yo.rgb(t), e = Yo.rgb(e);
                var n = t.r,
                    r = t.g,
                    a = t.b,
                    o = e.r - n,
                    i = e.g - r,
                    s = e.b - a;
                return function(t) {
                    return "#" + bt(Math.round(n + o * t)) + bt(Math.round(r + i * t)) + bt(Math.round(a + s * t))
                }
            }

            function gr(t, e) {
                var n, r = {},
                    a = {};
                for (n in t) n in e ? r[n] = vr(t[n], e[n]) : a[n] = t[n];
                for (n in e) n in t || (a[n] = e[n]);
                return function(t) {
                    for (n in r) a[n] = r[n](t);
                    return a
                }
            }

            function mr(t, e) {
                return t = +t, e = +e,
                    function(n) {
                        return t * (1 - n) + e * n
                    }
            }

            function _r(t, e) {
                var n, r, a, o = rl.lastIndex = al.lastIndex = 0,
                    i = -1,
                    s = [],
                    l = [];
                for (t += "", e += "";
                    (n = rl.exec(t)) && (r = al.exec(e));)(a = r.index) > o && (a = e.slice(o, a), s[i] ? s[i] += a : s[++i] = a), (n = n[0]) === (r = r[0]) ? s[i] ? s[i] += r : s[++i] = r : (s[++i] = null, l.push({
                    i: i,
                    x: mr(n, r)
                })), o = al.lastIndex;
                return o < e.length && (a = e.slice(o), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? (e = l[0].x, function(t) {
                    return e(t) + ""
                }) : function() {
                    return e
                } : (e = l.length, function(t) {
                    for (var n, r = 0; e > r; ++r) s[(n = l[r]).i] = n.x(t);
                    return s.join("")
                })
            }

            function vr(t, e) {
                for (var n, r = Yo.interpolators.length; --r >= 0 && !(n = Yo.interpolators[r](t, e)););
                return n
            }

            function yr(t, e) {
                var n, r = [],
                    a = [],
                    o = t.length,
                    i = e.length,
                    s = Math.min(t.length, e.length);
                for (n = 0; s > n; ++n) r.push(vr(t[n], e[n]));
                for (; o > n; ++n) a[n] = t[n];
                for (; i > n; ++n) a[n] = e[n];
                return function(t) {
                    for (n = 0; s > n; ++n) a[n] = r[n](t);
                    return a
                }
            }

            function br(t) {
                return function(e) {
                    return 0 >= e ? 0 : e >= 1 ? 1 : t(e)
                }
            }

            function wr(t) {
                return function(e) {
                    return 1 - t(1 - e)
                }
            }

            function Sr(t) {
                return function(e) {
                    return .5 * (.5 > e ? t(2 * e) : 2 - t(2 - 2 * e))
                }
            }

            function xr(t) {
                return t * t
            }

            function Cr(t) {
                return t * t * t
            }

            function Dr(t) {
                if (0 >= t) return 0;
                if (t >= 1) return 1;
                var e = t * t,
                    n = e * t;
                return 4 * (.5 > t ? n : 3 * (t - e) + n - .75)
            }

            function Tr(t) {
                return function(e) {
                    return Math.pow(e, t)
                }
            }

            function Mr(t) {
                return 1 - Math.cos(t * Ii)
            }

            function kr(t) {
                return Math.pow(2, 10 * (t - 1))
            }

            function Ar(t) {
                return 1 - Math.sqrt(1 - t * t)
            }

            function Ir(t, e) {
                var n;
                return arguments.length < 2 && (e = .45), arguments.length ? n = e / Ai * Math.asin(1 / t) : (t = 1, n = e / 4),
                    function(r) {
                        return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - n) * Ai / e)
                    }
            }

            function Fr(t) {
                return t || (t = 1.70158),
                    function(e) {
                        return e * e * ((t + 1) * e - t)
                    }
            }

            function Nr(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }

            function Lr(t, e) {
                t = Yo.hcl(t), e = Yo.hcl(e);
                var n = t.h,
                    r = t.c,
                    a = t.l,
                    o = e.h - n,
                    i = e.c - r,
                    s = e.l - a;
                return isNaN(i) && (i = 0, r = isNaN(r) ? e.c : r), isNaN(o) ? (o = 0, n = isNaN(n) ? e.h : n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
                    function(t) {
                        return ct(n + o * t, r + i * t, a + s * t) + ""
                    }
            }

            function Er(t, e) {
                t = Yo.hsl(t), e = Yo.hsl(e);
                var n = t.h,
                    r = t.s,
                    a = t.l,
                    o = e.h - n,
                    i = e.s - r,
                    s = e.l - a;
                return isNaN(i) && (i = 0, r = isNaN(r) ? e.s : r), isNaN(o) ? (o = 0, n = isNaN(n) ? e.h : n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
                    function(t) {
                        return lt(n + o * t, r + i * t, a + s * t) + ""
                    }
            }

            function Rr(t, e) {
                t = Yo.lab(t), e = Yo.lab(e);
                var n = t.l,
                    r = t.a,
                    a = t.b,
                    o = e.l - n,
                    i = e.a - r,
                    s = e.b - a;
                return function(t) {
                    return ht(n + o * t, r + i * t, a + s * t) + ""
                }
            }

            function Pr(t, e) {
                return e -= t,
                    function(n) {
                        return Math.round(t + e * n)
                    }
            }

            function $r(t) {
                var e = [t.a, t.b],
                    n = [t.c, t.d],
                    r = Ur(e),
                    a = Hr(e, n),
                    o = Ur(Br(n, e, -a)) || 0;
                e[0] * n[1] < n[0] * e[1] && (e[0] *= -1, e[1] *= -1, r *= -1, a *= -1), this.rotate = (r ? Math.atan2(e[1], e[0]) : Math.atan2(-n[0], n[1])) * Ei, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o ? Math.atan2(a, o) * Ei : 0
            }

            function Hr(t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }

            function Ur(t) {
                var e = Math.sqrt(Hr(t, t));
                return e && (t[0] /= e, t[1] /= e), e
            }

            function Br(t, e, n) {
                return t[0] += n * e[0], t[1] += n * e[1], t
            }

            function Or(t, e) {
                var n, r = [],
                    a = [],
                    o = Yo.transform(t),
                    i = Yo.transform(e),
                    s = o.translate,
                    l = i.translate,
                    u = o.rotate,
                    c = i.rotate,
                    f = o.skew,
                    h = i.skew,
                    d = o.scale,
                    p = i.scale;
                return s[0] != l[0] || s[1] != l[1] ? (r.push("translate(", null, ",", null, ")"), a.push({
                        i: 1,
                        x: mr(s[0], l[0])
                    }, {
                        i: 3,
                        x: mr(s[1], l[1])
                    })) : l[0] || l[1] ? r.push("translate(" + l + ")") : r.push(""), u != c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), a.push({
                        i: r.push(r.pop() + "rotate(", null, ")") - 2,
                        x: mr(u, c)
                    })) : c && r.push(r.pop() + "rotate(" + c + ")"), f != h ? a.push({
                        i: r.push(r.pop() + "skewX(", null, ")") - 2,
                        x: mr(f, h)
                    }) : h && r.push(r.pop() + "skewX(" + h + ")"), d[0] != p[0] || d[1] != p[1] ? (n = r.push(r.pop() + "scale(", null, ",", null, ")"), a.push({
                        i: n - 4,
                        x: mr(d[0], p[0])
                    }, {
                        i: n - 2,
                        x: mr(d[1], p[1])
                    })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), n = a.length,
                    function(t) {
                        for (var e, o = -1; ++o < n;) r[(e = a[o]).i] = e.x(t);
                        return r.join("")
                    }
            }

            function jr(t, e) {
                return e = (e -= t = +t) || 1 / e,
                    function(n) {
                        return (n - t) / e
                    }
            }

            function Gr(t, e) {
                return e = (e -= t = +t) || 1 / e,
                    function(n) {
                        return Math.max(0, Math.min(1, (n - t) / e))
                    }
            }

            function zr(t) {
                for (var e = t.source, n = t.target, r = Wr(e, n), a = [e]; e !== r;) e = e.parent, a.push(e);
                for (var o = a.length; n !== r;) a.splice(o, 0, n), n = n.parent;
                return a
            }

            function qr(t) {
                for (var e = [], n = t.parent; null != n;) e.push(t), t = n, n = n.parent;
                return e.push(t), e
            }

            function Wr(t, e) {
                if (t === e) return t;
                for (var n = qr(t), r = qr(e), a = n.pop(), o = r.pop(), i = null; a === o;) i = a, a = n.pop(), o = r.pop();
                return i
            }

            function Vr(t) {
                t.fixed |= 2
            }

            function Jr(t) {
                t.fixed &= -7
            }

            function Xr(t) {
                t.fixed |= 4, t.px = t.x, t.py = t.y
            }

            function Yr(t) {
                t.fixed &= -5
            }

            function Zr(t, e, n) {
                var r = 0,
                    a = 0;
                if (t.charge = 0, !t.leaf)
                    for (var o, i = t.nodes, s = i.length, l = -1; ++l < s;) o = i[l], null != o && (Zr(o, e, n), t.charge += o.charge, r += o.charge * o.cx, a += o.charge * o.cy);
                if (t.point) {
                    t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                    var u = e * n[t.point.index];
                    t.charge += t.pointCharge = u, r += u * t.point.x, a += u * t.point.y
                }
                t.cx = r / t.charge, t.cy = a / t.charge
            }

            function Kr(t, e) {
                return Yo.rebind(t, e, "sort", "children", "value"), t.nodes = t, t.links = aa, t
            }

            function Qr(t, e) {
                for (var n = [t]; null != (t = n.pop());)
                    if (e(t), (a = t.children) && (r = a.length))
                        for (var r, a; --r >= 0;) n.push(a[r])
            }

            function ta(t, e) {
                for (var n = [t], r = []; null != (t = n.pop());)
                    if (r.push(t), (o = t.children) && (a = o.length))
                        for (var a, o, i = -1; ++i < a;) n.push(o[i]);
                for (; null != (t = r.pop());) e(t)
            }

            function ea(t) {
                return t.children
            }

            function na(t) {
                return t.value
            }

            function ra(t, e) {
                return e.value - t.value
            }

            function aa(t) {
                return Yo.merge(t.map(function(t) {
                    return (t.children || []).map(function(e) {
                        return {
                            source: t,
                            target: e
                        }
                    })
                }))
            }

            function oa(t) {
                return t.x
            }

            function ia(t) {
                return t.y
            }

            function sa(t, e, n) {
                t.y0 = e, t.y = n
            }

            function la(t) {
                return Yo.range(t.length)
            }

            function ua(t) {
                for (var e = -1, n = t[0].length, r = []; ++e < n;) r[e] = 0;
                return r
            }

            function ca(t) {
                for (var e, n = 1, r = 0, a = t[0][1], o = t.length; o > n; ++n)(e = t[n][1]) > a && (r = n, a = e);
                return r
            }

            function fa(t) {
                return t.reduce(ha, 0)
            }

            function ha(t, e) {
                return t + e[1]
            }

            function da(t, e) {
                return pa(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
            }

            function pa(t, e) {
                for (var n = -1, r = +t[0], a = (t[1] - r) / e, o = []; ++n <= e;) o[n] = a * n + r;
                return o
            }

            function ga(t) {
                return [Yo.min(t), Yo.max(t)]
            }

            function ma(t, e) {
                return t.value - e.value
            }

            function _a(t, e) {
                var n = t._pack_next;
                t._pack_next = e, e._pack_prev = t, e._pack_next = n, n._pack_prev = e
            }

            function va(t, e) {
                t._pack_next = e, e._pack_prev = t
            }

            function ya(t, e) {
                var n = e.x - t.x,
                    r = e.y - t.y,
                    a = t.r + e.r;
                return .999 * a * a > n * n + r * r
            }

            function ba(t) {
                function e(t) {
                    c = Math.min(t.x - t.r, c), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), d = Math.max(t.y + t.r, d)
                }
                if ((n = t.children) && (u = n.length)) {
                    var n, r, a, o, i, s, l, u, c = 1 / 0,
                        f = -(1 / 0),
                        h = 1 / 0,
                        d = -(1 / 0);
                    if (n.forEach(wa), r = n[0], r.x = -r.r, r.y = 0, e(r), u > 1 && (a = n[1], a.x = a.r, a.y = 0, e(a), u > 2))
                        for (o = n[2], Ca(r, a, o), e(o), _a(r, o), r._pack_prev = o, _a(o, a), a = r._pack_next, i = 3; u > i; i++) {
                            Ca(r, a, o = n[i]);
                            var p = 0,
                                g = 1,
                                m = 1;
                            for (s = a._pack_next; s !== a; s = s._pack_next, g++)
                                if (ya(s, o)) {
                                    p = 1;
                                    break
                                }
                            if (1 == p)
                                for (l = r._pack_prev; l !== s._pack_prev && !ya(l, o); l = l._pack_prev, m++);
                            p ? (m > g || g == m && a.r < r.r ? va(r, a = s) : va(r = l, a), i--) : (_a(r, o), a = o, e(o))
                        }
                    var _ = (c + f) / 2,
                        v = (h + d) / 2,
                        y = 0;
                    for (i = 0; u > i; i++) o = n[i], o.x -= _, o.y -= v, y = Math.max(y, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
                    t.r = y, n.forEach(Sa)
                }
            }

            function wa(t) {
                t._pack_next = t._pack_prev = t
            }

            function Sa(t) {
                delete t._pack_next, delete t._pack_prev
            }

            function xa(t, e, n, r) {
                var a = t.children;
                if (t.x = e += r * t.x, t.y = n += r * t.y, t.r *= r, a)
                    for (var o = -1, i = a.length; ++o < i;) xa(a[o], e, n, r)
            }

            function Ca(t, e, n) {
                var r = t.r + n.r,
                    a = e.x - t.x,
                    o = e.y - t.y;
                if (r && (a || o)) {
                    var i = e.r + n.r,
                        s = a * a + o * o;
                    i *= i, r *= r;
                    var l = .5 + (r - i) / (2 * s),
                        u = Math.sqrt(Math.max(0, 2 * i * (r + s) - (r -= s) * r - i * i)) / (2 * s);
                    n.x = t.x + l * a + u * o, n.y = t.y + l * o - u * a
                } else n.x = t.x + r, n.y = t.y
            }

            function Da(t, e) {
                return t.parent == e.parent ? 1 : 2
            }

            function Ta(t) {
                var e = t.children;
                return e.length ? e[0] : t.t
            }

            function Ma(t) {
                var e, n = t.children;
                return (e = n.length) ? n[e - 1] : t.t
            }

            function ka(t, e, n) {
                var r = n / (e.i - t.i);
                e.c -= r, e.s += n, t.c += r, e.z += n, e.m += n
            }

            function Aa(t) {
                for (var e, n = 0, r = 0, a = t.children, o = a.length; --o >= 0;) e = a[o], e.z += n, e.m += n, n += e.s + (r += e.c)
            }

            function Ia(t, e, n) {
                return t.a.parent === e.parent ? t.a : n
            }

            function Fa(t) {
                return 1 + Yo.max(t, function(t) {
                    return t.y
                })
            }

            function Na(t) {
                return t.reduce(function(t, e) {
                    return t + e.x
                }, 0) / t.length
            }

            function La(t) {
                var e = t.children;
                return e && e.length ? La(e[0]) : t
            }

            function Ea(t) {
                var e, n = t.children;
                return n && (e = n.length) ? Ea(n[e - 1]) : t
            }

            function Ra(t) {
                return {
                    x: t.x,
                    y: t.y,
                    dx: t.dx,
                    dy: t.dy
                }
            }

            function Pa(t, e) {
                var n = t.x + e[3],
                    r = t.y + e[0],
                    a = t.dx - e[1] - e[3],
                    o = t.dy - e[0] - e[2];
                return 0 > a && (n += a / 2, a = 0), 0 > o && (r += o / 2, o = 0), {
                    x: n,
                    y: r,
                    dx: a,
                    dy: o
                }
            }

            function $a(t) {
                var e = t[0],
                    n = t[t.length - 1];
                return n > e ? [e, n] : [n, e]
            }

            function Ha(t) {
                return t.rangeExtent ? t.rangeExtent() : $a(t.range())
            }

            function Ua(t, e, n, r) {
                var a = n(t[0], t[1]),
                    o = r(e[0], e[1]);
                return function(t) {
                    return o(a(t))
                }
            }

            function Ba(t, e) {
                var n, r = 0,
                    a = t.length - 1,
                    o = t[r],
                    i = t[a];
                return o > i && (n = r, r = a, a = n, n = o, o = i, i = n), t[r] = e.floor(o), t[a] = e.ceil(i), t
            }

            function Oa(t) {
                return t ? {
                    floor: function(e) {
                        return Math.floor(e / t) * t
                    },
                    ceil: function(e) {
                        return Math.ceil(e / t) * t
                    }
                } : gl
            }

            function ja(t, e, n, r) {
                var a = [],
                    o = [],
                    i = 0,
                    s = Math.min(t.length, e.length) - 1;
                for (t[s] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++i <= s;) a.push(n(t[i - 1], t[i])), o.push(r(e[i - 1], e[i]));
                return function(e) {
                    var n = Yo.bisect(t, e, 1, s) - 1;
                    return o[n](a[n](e))
                }
            }

            function Ga(t, e, n, r) {
                function a() {
                    var a = Math.min(t.length, e.length) > 2 ? ja : Ua,
                        l = r ? Gr : jr;
                    return i = a(t, e, l, n), s = a(e, t, l, vr), o
                }

                function o(t) {
                    return i(t)
                }
                var i, s;
                return o.invert = function(t) {
                    return s(t)
                }, o.domain = function(e) {
                    return arguments.length ? (t = e.map(Number), a()) : t
                }, o.range = function(t) {
                    return arguments.length ? (e = t, a()) : e
                }, o.rangeRound = function(t) {
                    return o.range(t).interpolate(Pr)
                }, o.clamp = function(t) {
                    return arguments.length ? (r = t, a()) : r
                }, o.interpolate = function(t) {
                    return arguments.length ? (n = t, a()) : n
                }, o.ticks = function(e) {
                    return Va(t, e)
                }, o.tickFormat = function(e, n) {
                    return Ja(t, e, n)
                }, o.nice = function(e) {
                    return qa(t, e), a()
                }, o.copy = function() {
                    return Ga(t, e, n, r)
                }, a()
            }

            function za(t, e) {
                return Yo.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
            }

            function qa(t, e) {
                return Ba(t, Oa(Wa(t, e)[2]))
            }

            function Wa(t, e) {
                null == e && (e = 10);
                var n = $a(t),
                    r = n[1] - n[0],
                    a = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
                    o = e / r * a;
                return .15 >= o ? a *= 10 : .35 >= o ? a *= 5 : .75 >= o && (a *= 2), n[0] = Math.ceil(n[0] / a) * a, n[1] = Math.floor(n[1] / a) * a + .5 * a, n[2] = a, n
            }

            function Va(t, e) {
                return Yo.range.apply(Yo, Wa(t, e))
            }

            function Ja(t, e, n) {
                var r = Wa(t, e);
                if (n) {
                    var a = rs.exec(n);
                    if (a.shift(), "s" === a[8]) {
                        var o = Yo.formatPrefix(Math.max(ci(r[0]), ci(r[1])));
                        return a[7] || (a[7] = "." + Xa(o.scale(r[2]))), a[8] = "f", n = Yo.format(a.join("")),
                            function(t) {
                                return n(o.scale(t)) + o.symbol
                            }
                    }
                    a[7] || (a[7] = "." + Ya(a[8], r)), n = a.join("")
                } else n = ",." + Xa(r[2]) + "f";
                return Yo.format(n)
            }

            function Xa(t) {
                return -Math.floor(Math.log(t) / Math.LN10 + .01)
            }

            function Ya(t, e) {
                var n = Xa(e[2]);
                return t in ml ? Math.abs(n - Xa(Math.max(ci(e[0]), ci(e[1])))) + +("e" !== t) : n - 2 * ("%" === t)
            }

            function Za(t, e, n, r) {
                function a(t) {
                    return (n ? Math.log(0 > t ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(e)
                }

                function o(t) {
                    return n ? Math.pow(e, t) : -Math.pow(e, -t)
                }

                function i(e) {
                    return t(a(e))
                }
                return i.invert = function(e) {
                    return o(t.invert(e))
                }, i.domain = function(e) {
                    return arguments.length ? (n = e[0] >= 0, t.domain((r = e.map(Number)).map(a)), i) : r
                }, i.base = function(n) {
                    return arguments.length ? (e = +n, t.domain(r.map(a)), i) : e
                }, i.nice = function() {
                    var e = Ba(r.map(a), n ? Math : vl);
                    return t.domain(e), r = e.map(o), i
                }, i.ticks = function() {
                    var t = $a(r),
                        i = [],
                        s = t[0],
                        l = t[1],
                        u = Math.floor(a(s)),
                        c = Math.ceil(a(l)),
                        f = e % 1 ? 2 : e;
                    if (isFinite(c - u)) {
                        if (n) {
                            for (; c > u; u++)
                                for (var h = 1; f > h; h++) i.push(o(u) * h);
                            i.push(o(u))
                        } else
                            for (i.push(o(u)); u++ < c;)
                                for (var h = f - 1; h > 0; h--) i.push(o(u) * h);
                        for (u = 0; i[u] < s; u++);
                        for (c = i.length; i[c - 1] > l; c--);
                        i = i.slice(u, c)
                    }
                    return i
                }, i.tickFormat = function(t, e) {
                    if (!arguments.length) return _l;
                    arguments.length < 2 ? e = _l : "function" != typeof e && (e = Yo.format(e));
                    var r, s = Math.max(.1, t / i.ticks().length),
                        l = n ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
                    return function(t) {
                        return t / o(l(a(t) + r)) <= s ? e(t) : ""
                    }
                }, i.copy = function() {
                    return Za(t.copy(), e, n, r)
                }, za(i, t)
            }

            function Ka(t, e, n) {
                function r(e) {
                    return t(a(e))
                }
                var a = Qa(e),
                    o = Qa(1 / e);
                return r.invert = function(e) {
                    return o(t.invert(e))
                }, r.domain = function(e) {
                    return arguments.length ? (t.domain((n = e.map(Number)).map(a)), r) : n
                }, r.ticks = function(t) {
                    return Va(n, t)
                }, r.tickFormat = function(t, e) {
                    return Ja(n, t, e)
                }, r.nice = function(t) {
                    return r.domain(qa(n, t))
                }, r.exponent = function(i) {
                    return arguments.length ? (a = Qa(e = i), o = Qa(1 / e), t.domain(n.map(a)), r) : e
                }, r.copy = function() {
                    return Ka(t.copy(), e, n)
                }, za(r, t)
            }

            function Qa(t) {
                return function(e) {
                    return 0 > e ? -Math.pow(-e, t) : Math.pow(e, t)
                }
            }

            function to(t, e) {
                function n(n) {
                    return o[((a.get(n) || ("range" === e.t ? a.set(n, t.push(n)) : NaN)) - 1) % o.length]
                }

                function r(e, n) {
                    return Yo.range(t.length).map(function(t) {
                        return e + n * t
                    })
                }
                var a, o, i;
                return n.domain = function(r) {
                    if (!arguments.length) return t;
                    t = [], a = new l;
                    for (var o, i = -1, s = r.length; ++i < s;) a.has(o = r[i]) || a.set(o, t.push(o));
                    return n[e.t].apply(n, e.a)
                }, n.range = function(t) {
                    return arguments.length ? (o = t, i = 0, e = {
                        t: "range",
                        a: arguments
                    }, n) : o
                }, n.rangePoints = function(a, s) {
                    arguments.length < 2 && (s = 0);
                    var l = a[0],
                        u = a[1],
                        c = (u - l) / (Math.max(1, t.length - 1) + s);
                    return o = r(t.length < 2 ? (l + u) / 2 : l + c * s / 2, c), i = 0, e = {
                        t: "rangePoints",
                        a: arguments
                    }, n
                }, n.rangeBands = function(a, s, l) {
                    arguments.length < 2 && (s = 0), arguments.length < 3 && (l = s);
                    var u = a[1] < a[0],
                        c = a[u - 0],
                        f = a[1 - u],
                        h = (f - c) / (t.length - s + 2 * l);
                    return o = r(c + h * l, h), u && o.reverse(), i = h * (1 - s), e = {
                        t: "rangeBands",
                        a: arguments
                    }, n
                }, n.rangeRoundBands = function(a, s, l) {
                    arguments.length < 2 && (s = 0), arguments.length < 3 && (l = s);
                    var u = a[1] < a[0],
                        c = a[u - 0],
                        f = a[1 - u],
                        h = Math.floor((f - c) / (t.length - s + 2 * l)),
                        d = f - c - (t.length - s) * h;
                    return o = r(c + Math.round(d / 2), h), u && o.reverse(), i = Math.round(h * (1 - s)), e = {
                        t: "rangeRoundBands",
                        a: arguments
                    }, n
                }, n.rangeBand = function() {
                    return i
                }, n.rangeExtent = function() {
                    return $a(e.a[0])
                }, n.copy = function() {
                    return to(t, e)
                }, n.domain(t)
            }

            function eo(e, a) {
                function o() {
                    var t = 0,
                        n = a.length;
                    for (s = []; ++t < n;) s[t - 1] = Yo.quantile(e, t / n);
                    return i
                }

                function i(t) {
                    return isNaN(t = +t) ? void 0 : a[Yo.bisect(s, t)]
                }
                var s;
                return i.domain = function(a) {
                    return arguments.length ? (e = a.map(n).filter(r).sort(t), o()) : e
                }, i.range = function(t) {
                    return arguments.length ? (a = t, o()) : a
                }, i.quantiles = function() {
                    return s
                }, i.invertExtent = function(t) {
                    return t = a.indexOf(t), 0 > t ? [NaN, NaN] : [t > 0 ? s[t - 1] : e[0], t < s.length ? s[t] : e[e.length - 1]]
                }, i.copy = function() {
                    return eo(e, a)
                }, o()
            }

            function no(t, e, n) {
                function r(e) {
                    return n[Math.max(0, Math.min(i, Math.floor(o * (e - t))))]
                }

                function a() {
                    return o = n.length / (e - t), i = n.length - 1, r
                }
                var o, i;
                return r.domain = function(n) {
                    return arguments.length ? (t = +n[0], e = +n[n.length - 1], a()) : [t, e]
                }, r.range = function(t) {
                    return arguments.length ? (n = t, a()) : n
                }, r.invertExtent = function(e) {
                    return e = n.indexOf(e), e = 0 > e ? NaN : e / o + t, [e, e + 1 / o]
                }, r.copy = function() {
                    return no(t, e, n)
                }, a()
            }

            function ro(t, e) {
                function n(n) {
                    return n >= n ? e[Yo.bisect(t, n)] : void 0
                }
                return n.domain = function(e) {
                    return arguments.length ? (t = e, n) : t
                }, n.range = function(t) {
                    return arguments.length ? (e = t, n) : e
                }, n.invertExtent = function(n) {
                    return n = e.indexOf(n), [t[n - 1], t[n]]
                }, n.copy = function() {
                    return ro(t, e)
                }, n
            }

            function ao(t) {
                function e(t) {
                    return +t
                }
                return e.invert = e, e.domain = e.range = function(n) {
                    return arguments.length ? (t = n.map(e), e) : t
                }, e.ticks = function(e) {
                    return Va(t, e)
                }, e.tickFormat = function(e, n) {
                    return Ja(t, e, n)
                }, e.copy = function() {
                    return ao(t)
                }, e
            }

            function oo(t) {
                return t.innerRadius
            }

            function io(t) {
                return t.outerRadius
            }

            function so(t) {
                return t.startAngle
            }

            function lo(t) {
                return t.endAngle
            }

            function uo(t) {
                function e(e) {
                    function i() {
                        u.push("M", o(t(c), s))
                    }
                    for (var l, u = [], c = [], f = -1, h = e.length, d = Tt(n), p = Tt(r); ++f < h;) a.call(this, l = e[f], f) ? c.push([+d.call(this, l, f), +p.call(this, l, f)]) : c.length && (i(), c = []);
                    return c.length && i(), u.length ? u.join("") : null
                }
                var n = An,
                    r = In,
                    a = ke,
                    o = co,
                    i = o.key,
                    s = .7;
                return e.x = function(t) {
                    return arguments.length ? (n = t, e) : n
                }, e.y = function(t) {
                    return arguments.length ? (r = t, e) : r
                }, e.defined = function(t) {
                    return arguments.length ? (a = t, e) : a
                }, e.interpolate = function(t) {
                    return arguments.length ? (i = "function" == typeof t ? o = t : (o = Dl.get(t) || co).key, e) : i
                }, e.tension = function(t) {
                    return arguments.length ? (s = t, e) : s
                }, e
            }

            function co(t) {
                return t.join("L")
            }

            function fo(t) {
                return co(t) + "Z"
            }

            function ho(t) {
                for (var e = 0, n = t.length, r = t[0], a = [r[0], ",", r[1]]; ++e < n;) a.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
                return n > 1 && a.push("H", r[0]), a.join("")
            }

            function po(t) {
                for (var e = 0, n = t.length, r = t[0], a = [r[0], ",", r[1]]; ++e < n;) a.push("V", (r = t[e])[1], "H", r[0]);
                return a.join("")
            }

            function go(t) {
                for (var e = 0, n = t.length, r = t[0], a = [r[0], ",", r[1]]; ++e < n;) a.push("H", (r = t[e])[0], "V", r[1]);
                return a.join("")
            }

            function mo(t, e) {
                return t.length < 4 ? co(t) : t[1] + yo(t.slice(1, t.length - 1), bo(t, e))
            }

            function _o(t, e) {
                return t.length < 3 ? co(t) : t[0] + yo((t.push(t[0]), t), bo([t[t.length - 2]].concat(t, [t[1]]), e))
            }

            function vo(t, e) {
                return t.length < 3 ? co(t) : t[0] + yo(t, bo(t, e))
            }

            function yo(t, e) {
                if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return co(t);
                var n = t.length != e.length,
                    r = "",
                    a = t[0],
                    o = t[1],
                    i = e[0],
                    s = i,
                    l = 1;
                if (n && (r += "Q" + (o[0] - 2 * i[0] / 3) + "," + (o[1] - 2 * i[1] / 3) + "," + o[0] + "," + o[1], a = t[1], l = 2), e.length > 1) {
                    s = e[1], o = t[l], l++, r += "C" + (a[0] + i[0]) + "," + (a[1] + i[1]) + "," + (o[0] - s[0]) + "," + (o[1] - s[1]) + "," + o[0] + "," + o[1];
                    for (var u = 2; u < e.length; u++, l++) o = t[l], s = e[u], r += "S" + (o[0] - s[0]) + "," + (o[1] - s[1]) + "," + o[0] + "," + o[1]
                }
                if (n) {
                    var c = t[l];
                    r += "Q" + (o[0] + 2 * s[0] / 3) + "," + (o[1] + 2 * s[1] / 3) + "," + c[0] + "," + c[1]
                }
                return r
            }

            function bo(t, e) {
                for (var n, r = [], a = (1 - e) / 2, o = t[0], i = t[1], s = 1, l = t.length; ++s < l;) n = o, o = i, i = t[s], r.push([a * (i[0] - n[0]), a * (i[1] - n[1])]);
                return r
            }

            function wo(t) {
                if (t.length < 3) return co(t);
                var e = 1,
                    n = t.length,
                    r = t[0],
                    a = r[0],
                    o = r[1],
                    i = [a, a, a, (r = t[1])[0]],
                    s = [o, o, o, r[1]],
                    l = [a, ",", o, "L", Do(kl, i), ",", Do(kl, s)];
                for (t.push(t[n - 1]); ++e <= n;) r = t[e], i.shift(), i.push(r[0]), s.shift(), s.push(r[1]), To(l, i, s);
                return t.pop(), l.push("L", r), l.join("")
            }

            function So(t) {
                if (t.length < 4) return co(t);
                for (var e, n = [], r = -1, a = t.length, o = [0], i = [0]; ++r < 3;) e = t[r], o.push(e[0]), i.push(e[1]);
                for (n.push(Do(kl, o) + "," + Do(kl, i)), --r; ++r < a;) e = t[r], o.shift(), o.push(e[0]), i.shift(), i.push(e[1]), To(n, o, i);
                return n.join("")
            }

            function xo(t) {
                for (var e, n, r = -1, a = t.length, o = a + 4, i = [], s = []; ++r < 4;) n = t[r % a], i.push(n[0]), s.push(n[1]);
                for (e = [Do(kl, i), ",", Do(kl, s)], --r; ++r < o;) n = t[r % a], i.shift(), i.push(n[0]), s.shift(), s.push(n[1]), To(e, i, s);
                return e.join("")
            }

            function Co(t, e) {
                var n = t.length - 1;
                if (n)
                    for (var r, a, o = t[0][0], i = t[0][1], s = t[n][0] - o, l = t[n][1] - i, u = -1; ++u <= n;) r = t[u], a = u / n, r[0] = e * r[0] + (1 - e) * (o + a * s), r[1] = e * r[1] + (1 - e) * (i + a * l);
                return wo(t)
            }

            function Do(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            }

            function To(t, e, n) {
                t.push("C", Do(Tl, e), ",", Do(Tl, n), ",", Do(Ml, e), ",", Do(Ml, n), ",", Do(kl, e), ",", Do(kl, n))
            }

            function Mo(t, e) {
                return (e[1] - t[1]) / (e[0] - t[0])
            }

            function ko(t) {
                for (var e = 0, n = t.length - 1, r = [], a = t[0], o = t[1], i = r[0] = Mo(a, o); ++e < n;) r[e] = (i + (i = Mo(a = o, o = t[e + 1]))) / 2;
                return r[e] = i, r
            }

            function Ao(t) {
                for (var e, n, r, a, o = [], i = ko(t), s = -1, l = t.length - 1; ++s < l;) e = Mo(t[s], t[s + 1]), ci(e) < Fi ? i[s] = i[s + 1] = 0 : (n = i[s] / e, r = i[s + 1] / e, a = n * n + r * r, a > 9 && (a = 3 * e / Math.sqrt(a), i[s] = a * n, i[s + 1] = a * r));
                for (s = -1; ++s <= l;) a = (t[Math.min(l, s + 1)][0] - t[Math.max(0, s - 1)][0]) / (6 * (1 + i[s] * i[s])), o.push([a || 0, i[s] * a || 0]);
                return o
            }

            function Io(t) {
                return t.length < 3 ? co(t) : t[0] + yo(t, Ao(t))
            }

            function Fo(t) {
                for (var e, n, r, a = -1, o = t.length; ++a < o;) e = t[a], n = e[0], r = e[1] + xl, e[0] = n * Math.cos(r), e[1] = n * Math.sin(r);
                return t
            }

            function No(t) {
                function e(e) {
                    function l() {
                        g.push("M", s(t(_), f), c, u(t(m.reverse()), f), "Z")
                    }
                    for (var h, d, p, g = [], m = [], _ = [], v = -1, y = e.length, b = Tt(n), w = Tt(a), S = n === r ? function() {
                            return d
                        } : Tt(r), x = a === o ? function() {
                            return p
                        } : Tt(o); ++v < y;) i.call(this, h = e[v], v) ? (m.push([d = +b.call(this, h, v), p = +w.call(this, h, v)]), _.push([+S.call(this, h, v), +x.call(this, h, v)])) : m.length && (l(), m = [], _ = []);
                    return m.length && l(), g.length ? g.join("") : null
                }
                var n = An,
                    r = An,
                    a = 0,
                    o = In,
                    i = ke,
                    s = co,
                    l = s.key,
                    u = s,
                    c = "L",
                    f = .7;
                return e.x = function(t) {
                    return arguments.length ? (n = r = t, e) : r
                }, e.x0 = function(t) {
                    return arguments.length ? (n = t, e) : n
                }, e.x1 = function(t) {
                    return arguments.length ? (r = t, e) : r
                }, e.y = function(t) {
                    return arguments.length ? (a = o = t, e) : o
                }, e.y0 = function(t) {
                    return arguments.length ? (a = t, e) : a
                }, e.y1 = function(t) {
                    return arguments.length ? (o = t, e) : o
                }, e.defined = function(t) {
                    return arguments.length ? (i = t, e) : i
                }, e.interpolate = function(t) {
                    return arguments.length ? (l = "function" == typeof t ? s = t : (s = Dl.get(t) || co).key, u = s.reverse || s, c = s.closed ? "M" : "L", e) : l
                }, e.tension = function(t) {
                    return arguments.length ? (f = t, e) : f
                }, e
            }

            function Lo(t) {
                return t.radius
            }

            function Eo(t) {
                return [t.x, t.y]
            }

            function Ro(t) {
                return function() {
                    var e = t.apply(this, arguments),
                        n = e[0],
                        r = e[1] + xl;
                    return [n * Math.cos(r), n * Math.sin(r)]
                }
            }

            function Po() {
                return 64
            }

            function $o() {
                return "circle"
            }

            function Ho(t) {
                var e = Math.sqrt(t / ki);
                return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
            }

            function Uo(t, e) {
                return gi(t, El), t.id = e, t
            }

            function Bo(t, e, n, r) {
                var a = t.id;
                return B(t, "function" == typeof n ? function(t, o, i) {
                    t.__transition__[a].tween.set(e, r(n.call(t, t.__data__, o, i)))
                } : (n = r(n), function(t) {
                    t.__transition__[a].tween.set(e, n)
                }))
            }

            function Oo(t) {
                return null == t && (t = ""),
                    function() {
                        this.textContent = t
                    }
            }

            function jo(t, e, n, r) {
                var a = t.__transition__ || (t.__transition__ = {
                        active: 0,
                        count: 0
                    }),
                    o = a[n];
                if (!o) {
                    var i = r.time;
                    o = a[n] = {
                        tween: new l,
                        time: i,
                        ease: r.ease,
                        delay: r.delay,
                        duration: r.duration
                    }, ++a.count, Yo.timer(function(r) {
                        function s(r) {
                            return a.active > n ? u() : (a.active = n, o.event && o.event.start.call(t, c, e), o.tween.forEach(function(n, r) {
                                (r = r.call(t, c, e)) && g.push(r)
                            }), void Yo.timer(function() {
                                return p.c = l(r || 1) ? ke : l, 1
                            }, 0, i))
                        }

                        function l(r) {
                            if (a.active !== n) return u();
                            for (var i = r / d, s = f(i), l = g.length; l > 0;) g[--l].call(t, s);
                            return i >= 1 ? (o.event && o.event.end.call(t, c, e), u()) : void 0
                        }

                        function u() {
                            return --a.count ? delete a[n] : delete t.__transition__, 1
                        }
                        var c = t.__data__,
                            f = o.ease,
                            h = o.delay,
                            d = o.duration,
                            p = ts,
                            g = [];
                        return p.t = h + i, r >= h ? s(r - h) : void(p.c = s)
                    }, 0, i)
                }
            }

            function Go(t, e, n) {
                t.attr("transform", function(t) {
                    var r = e(t);
                    return "translate(" + (isFinite(r) ? r : n(t)) + ",0)"
                })
            }

            function zo(t, e, n) {
                t.attr("transform", function(t) {
                    var r = e(t);
                    return "translate(0," + (isFinite(r) ? r : n(t)) + ")"
                })
            }

            function qo(t) {
                return t.toISOString()
            }

            function Wo(t, e, n) {
                function r(e) {
                    return t(e)
                }

                function a(t, n) {
                    var r = t[1] - t[0],
                        a = r / n,
                        o = Yo.bisect(Gl, a);
                    return o == Gl.length ? [e.year, Wa(t.map(function(t) {
                        return t / 31536e6
                    }), n)[2]] : o ? e[a / Gl[o - 1] < Gl[o] / a ? o - 1 : o] : [Wl, Wa(t, n)[2]]
                }
                return r.invert = function(e) {
                    return Vo(t.invert(e))
                }, r.domain = function(e) {
                    return arguments.length ? (t.domain(e), r) : t.domain().map(Vo)
                }, r.nice = function(t, e) {
                    function n(n) {
                        return !isNaN(n) && !t.range(n, Vo(+n + 1), e).length
                    }
                    var o = r.domain(),
                        i = $a(o),
                        s = null == t ? a(i, 10) : "number" == typeof t && a(i, t);
                    return s && (t = s[0], e = s[1]), r.domain(Ba(o, e > 1 ? {
                        floor: function(e) {
                            for (; n(e = t.floor(e));) e = Vo(e - 1);
                            return e
                        },
                        ceil: function(e) {
                            for (; n(e = t.ceil(e));) e = Vo(+e + 1);
                            return e
                        }
                    } : t))
                }, r.ticks = function(t, e) {
                    var n = $a(r.domain()),
                        o = null == t ? a(n, 10) : "number" == typeof t ? a(n, t) : !t.range && [{
                            range: t
                        }, e];
                    return o && (t = o[0], e = o[1]), t.range(n[0], Vo(+n[1] + 1), 1 > e ? 1 : e)
                }, r.tickFormat = function() {
                    return n
                }, r.copy = function() {
                    return Wo(t.copy(), e, n)
                }, za(r, t)
            }

            function Vo(t) {
                return new Date(t)
            }

            function Jo(t) {
                return JSON.parse(t.responseText)
            }

            function Xo(t) {
                var e = Qo.createRange();
                return e.selectNode(Qo.body), e.createContextualFragment(t.responseText)
            }
            var Yo = {
                version: "3.4.13"
            };
            Date.now || (Date.now = function() {
                return +new Date
            });
            var Zo = [].slice,
                Ko = function(t) {
                    return Zo.call(t)
                },
                Qo = document,
                ti = Qo.documentElement,
                ei = window;
            try {
                Ko(ti.childNodes)[0].nodeType
            } catch (ni) {
                Ko = function(t) {
                    for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
                    return n
                }
            }
            try {
                Qo.createElement("div").style.setProperty("opacity", 0, "")
            } catch (ri) {
                var ai = ei.Element.prototype,
                    oi = ai.setAttribute,
                    ii = ai.setAttributeNS,
                    si = ei.CSSStyleDeclaration.prototype,
                    li = si.setProperty;
                ai.setAttribute = function(t, e) {
                    oi.call(this, t, e + "")
                }, ai.setAttributeNS = function(t, e, n) {
                    ii.call(this, t, e, n + "")
                }, si.setProperty = function(t, e, n) {
                    li.call(this, t, e + "", n)
                }
            }
            Yo.ascending = t, Yo.descending = function(t, e) {
                return t > e ? -1 : e > t ? 1 : e >= t ? 0 : NaN
            }, Yo.min = function(t, e) {
                var n, r, a = -1,
                    o = t.length;
                if (1 === arguments.length) {
                    for (; ++a < o && !(null != (n = t[a]) && n >= n);) n = void 0;
                    for (; ++a < o;) null != (r = t[a]) && n > r && (n = r)
                } else {
                    for (; ++a < o && !(null != (n = e.call(t, t[a], a)) && n >= n);) n = void 0;
                    for (; ++a < o;) null != (r = e.call(t, t[a], a)) && n > r && (n = r)
                }
                return n
            }, Yo.max = function(t, e) {
                var n, r, a = -1,
                    o = t.length;
                if (1 === arguments.length) {
                    for (; ++a < o && !(null != (n = t[a]) && n >= n);) n = void 0;
                    for (; ++a < o;) null != (r = t[a]) && r > n && (n = r)
                } else {
                    for (; ++a < o && !(null != (n = e.call(t, t[a], a)) && n >= n);) n = void 0;
                    for (; ++a < o;) null != (r = e.call(t, t[a], a)) && r > n && (n = r)
                }
                return n
            }, Yo.extent = function(t, e) {
                var n, r, a, o = -1,
                    i = t.length;
                if (1 === arguments.length) {
                    for (; ++o < i && !(null != (n = a = t[o]) && n >= n);) n = a = void 0;
                    for (; ++o < i;) null != (r = t[o]) && (n > r && (n = r), r > a && (a = r))
                } else {
                    for (; ++o < i && !(null != (n = a = e.call(t, t[o], o)) && n >= n);) n = void 0;
                    for (; ++o < i;) null != (r = e.call(t, t[o], o)) && (n > r && (n = r), r > a && (a = r))
                }
                return [n, a]
            }, Yo.sum = function(t, e) {
                var n, a = 0,
                    o = t.length,
                    i = -1;
                if (1 === arguments.length)
                    for (; ++i < o;) r(n = +t[i]) && (a += n);
                else
                    for (; ++i < o;) r(n = +e.call(t, t[i], i)) && (a += n);
                return a
            }, Yo.mean = function(t, e) {
                var a, o = 0,
                    i = t.length,
                    s = -1,
                    l = i;
                if (1 === arguments.length)
                    for (; ++s < i;) r(a = n(t[s])) ? o += a : --l;
                else
                    for (; ++s < i;) r(a = n(e.call(t, t[s], s))) ? o += a : --l;
                return l ? o / l : void 0
            }, Yo.quantile = function(t, e) {
                var n = (t.length - 1) * e + 1,
                    r = Math.floor(n),
                    a = +t[r - 1],
                    o = n - r;
                return o ? a + o * (t[r] - a) : a
            }, Yo.median = function(e, a) {
                var o, i = [],
                    s = e.length,
                    l = -1;
                if (1 === arguments.length)
                    for (; ++l < s;) r(o = n(e[l])) && i.push(o);
                else
                    for (; ++l < s;) r(o = n(a.call(e, e[l], l))) && i.push(o);
                return i.length ? Yo.quantile(i.sort(t), .5) : void 0
            };
            var ui = a(t);
            Yo.bisectLeft = ui.left, Yo.bisect = Yo.bisectRight = ui.right, Yo.bisector = function(e) {
                return a(1 === e.length ? function(n, r) {
                    return t(e(n), r)
                } : e)
            }, Yo.shuffle = function(t) {
                for (var e, n, r = t.length; r;) n = Math.random() * r-- | 0, e = t[r], t[r] = t[n], t[n] = e;
                return t
            }, Yo.permute = function(t, e) {
                for (var n = e.length, r = new Array(n); n--;) r[n] = t[e[n]];
                return r
            }, Yo.pairs = function(t) {
                for (var e, n = 0, r = t.length - 1, a = t[0], o = new Array(0 > r ? 0 : r); r > n;) o[n] = [e = a, a = t[++n]];
                return o
            }, Yo.zip = function() {
                if (!(r = arguments.length)) return [];
                for (var t = -1, e = Yo.min(arguments, o), n = new Array(e); ++t < e;)
                    for (var r, a = -1, i = n[t] = new Array(r); ++a < r;) i[a] = arguments[a][t];
                return n
            }, Yo.transpose = function(t) {
                return Yo.zip.apply(Yo, t)
            }, Yo.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e
            }, Yo.values = function(t) {
                var e = [];
                for (var n in t) e.push(t[n]);
                return e
            }, Yo.entries = function(t) {
                var e = [];
                for (var n in t) e.push({
                    key: n,
                    value: t[n]
                });
                return e
            }, Yo.merge = function(t) {
                for (var e, n, r, a = t.length, o = -1, i = 0; ++o < a;) i += t[o].length;
                for (n = new Array(i); --a >= 0;)
                    for (r = t[a], e = r.length; --e >= 0;) n[--i] = r[e];
                return n
            };
            var ci = Math.abs;
            Yo.range = function(t, e, n) {
                if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n === 1 / 0) throw new Error("infinite range");
                var r, a = [],
                    o = i(ci(n)),
                    s = -1;
                if (t *= o, e *= o, n *= o, 0 > n)
                    for (;
                        (r = t + n * ++s) > e;) a.push(r / o);
                else
                    for (;
                        (r = t + n * ++s) < e;) a.push(r / o);
                return a
            }, Yo.map = function(t) {
                var e = new l;
                if (t instanceof l) t.forEach(function(t, n) {
                    e.set(t, n)
                });
                else
                    for (var n in t) e.set(n, t[n]);
                return e
            };
            var fi = "__proto__",
                hi = "\x00";
            s(l, {
                has: f,
                get: function(t) {
                    return this._[u(t)]
                },
                set: function(t, e) {
                    return this._[u(t)] = e
                },
                remove: h,
                keys: d,
                values: function() {
                    var t = [];
                    for (var e in this._) t.push(this._[e]);
                    return t
                },
                entries: function() {
                    var t = [];
                    for (var e in this._) t.push({
                        key: c(e),
                        value: this._[e]
                    });
                    return t
                },
                size: p,
                empty: g,
                forEach: function(t) {
                    for (var e in this._) t.call(this, c(e), this._[e])
                }
            }), Yo.nest = function() {
                function t(e, i, s) {
                    if (s >= o.length) return r ? r.call(a, i) : n ? i.sort(n) : i;
                    for (var u, c, f, h, d = -1, p = i.length, g = o[s++], m = new l; ++d < p;)(h = m.get(u = g(c = i[d]))) ? h.push(c) : m.set(u, [c]);
                    return e ? (c = e(), f = function(n, r) {
                        c.set(n, t(e, r, s))
                    }) : (c = {}, f = function(n, r) {
                        c[n] = t(e, r, s)
                    }), m.forEach(f), c
                }

                function e(t, n) {
                    if (n >= o.length) return t;
                    var r = [],
                        a = i[n++];
                    return t.forEach(function(t, a) {
                        r.push({
                            key: t,
                            values: e(a, n)
                        })
                    }), a ? r.sort(function(t, e) {
                        return a(t.key, e.key)
                    }) : r
                }
                var n, r, a = {},
                    o = [],
                    i = [];
                return a.map = function(e, n) {
                    return t(n, e, 0)
                }, a.entries = function(n) {
                    return e(t(Yo.map, n, 0), 0)
                }, a.key = function(t) {
                    return o.push(t), a
                }, a.sortKeys = function(t) {
                    return i[o.length - 1] = t, a
                }, a.sortValues = function(t) {
                    return n = t, a
                }, a.rollup = function(t) {
                    return r = t, a
                }, a
            }, Yo.set = function(t) {
                var e = new m;
                if (t)
                    for (var n = 0, r = t.length; r > n; ++n) e.add(t[n]);
                return e
            }, s(m, {
                has: f,
                add: function(t) {
                    return this._[u(t += "")] = !0, t
                },
                remove: h,
                values: d,
                size: p,
                empty: g,
                forEach: function(t) {
                    for (var e in this._) t.call(this, c(e))
                }
            }), Yo.behavior = {}, Yo.rebind = function(t, e) {
                for (var n, r = 1, a = arguments.length; ++r < a;) t[n = arguments[r]] = _(t, e, e[n]);
                return t
            };
            var di = ["webkit", "ms", "moz", "Moz", "o", "O"];
            Yo.dispatch = function() {
                for (var t = new b, e = -1, n = arguments.length; ++e < n;) t[arguments[e]] = w(t);
                return t
            }, b.prototype.on = function(t, e) {
                var n = t.indexOf("."),
                    r = "";
                if (n >= 0 && (r = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
                if (2 === arguments.length) {
                    if (null == e)
                        for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
                    return this
                }
            }, Yo.event = null, Yo.requote = function(t) {
                return t.replace(pi, "\\$&")
            };
            var pi = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
                gi = {}.__proto__ ? function(t, e) {
                    t.__proto__ = e
                } : function(t, e) {
                    for (var n in e) t[n] = e[n]
                },
                mi = function(t, e) {
                    return e.querySelector(t)
                },
                _i = function(t, e) {
                    return e.querySelectorAll(t)
                },
                vi = ti.matches || ti[v(ti, "matchesSelector")],
                yi = function(t, e) {
                    return vi.call(t, e)
                };
            "function" == typeof Sizzle && (mi = function(t, e) {
                return Sizzle(t, e)[0] || null
            }, _i = Sizzle, yi = Sizzle.matchesSelector), Yo.selection = function() {
                return xi
            };
            var bi = Yo.selection.prototype = [];
            bi.select = function(t) {
                var e, n, r, a, o = [];
                t = T(t);
                for (var i = -1, s = this.length; ++i < s;) {
                    o.push(e = []), e.parentNode = (r = this[i]).parentNode;
                    for (var l = -1, u = r.length; ++l < u;)(a = r[l]) ? (e.push(n = t.call(a, a.__data__, l, i)), n && "__data__" in a && (n.__data__ = a.__data__)) : e.push(null)
                }
                return D(o)
            }, bi.selectAll = function(t) {
                var e, n, r = [];
                t = M(t);
                for (var a = -1, o = this.length; ++a < o;)
                    for (var i = this[a], s = -1, l = i.length; ++s < l;)(n = i[s]) && (r.push(e = Ko(t.call(n, n.__data__, s, a))), e.parentNode = n);
                return D(r)
            };
            var wi = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
            Yo.ns = {
                prefix: wi,
                qualify: function(t) {
                    var e = t.indexOf(":"),
                        n = t;
                    return e >= 0 && (n = t.slice(0, e), t = t.slice(e + 1)), wi.hasOwnProperty(n) ? {
                        space: wi[n],
                        local: t
                    } : t
                }
            }, bi.attr = function(t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var n = this.node();
                        return t = Yo.ns.qualify(t), t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
                    }
                    for (e in t) this.each(k(e, t[e]));
                    return this
                }
                return this.each(k(t, e))
            }, bi.classed = function(t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var n = this.node(),
                            r = (t = F(t)).length,
                            a = -1;
                        if (e = n.classList) {
                            for (; ++a < r;)
                                if (!e.contains(t[a])) return !1
                        } else
                            for (e = n.getAttribute("class"); ++a < r;)
                                if (!I(t[a]).test(e)) return !1;
                        return !0
                    }
                    for (e in t) this.each(N(e, t[e]));
                    return this
                }
                return this.each(N(t, e))
            }, bi.style = function(t, e, n) {
                var r = arguments.length;
                if (3 > r) {
                    if ("string" != typeof t) {
                        2 > r && (e = "");
                        for (n in t) this.each(E(n, t[n], e));
                        return this
                    }
                    if (2 > r) return ei.getComputedStyle(this.node(), null).getPropertyValue(t);
                    n = ""
                }
                return this.each(E(t, e, n))
            }, bi.property = function(t, e) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) return this.node()[t];
                    for (e in t) this.each(R(e, t[e]));
                    return this
                }
                return this.each(R(t, e))
            }, bi.text = function(t) {
                return arguments.length ? this.each("function" == typeof t ? function() {
                    var e = t.apply(this, arguments);
                    this.textContent = null == e ? "" : e
                } : null == t ? function() {
                    this.textContent = ""
                } : function() {
                    this.textContent = t
                }) : this.node().textContent
            }, bi.html = function(t) {
                return arguments.length ? this.each("function" == typeof t ? function() {
                    var e = t.apply(this, arguments);
                    this.innerHTML = null == e ? "" : e
                } : null == t ? function() {
                    this.innerHTML = ""
                } : function() {
                    this.innerHTML = t
                }) : this.node().innerHTML
            }, bi.append = function(t) {
                return t = P(t), this.select(function() {
                    return this.appendChild(t.apply(this, arguments))
                })
            }, bi.insert = function(t, e) {
                return t = P(t), e = T(e), this.select(function() {
                    return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
                })
            }, bi.remove = function() {
                return this.each(function() {
                    var t = this.parentNode;
                    t && t.removeChild(this)
                })
            }, bi.data = function(t, e) {
                function n(t, n) {
                    var r, a, o, i = t.length,
                        f = n.length,
                        h = Math.min(i, f),
                        d = new Array(f),
                        p = new Array(f),
                        g = new Array(i);
                    if (e) {
                        var m, _ = new l,
                            v = new Array(i);
                        for (r = -1; ++r < i;) _.has(m = e.call(a = t[r], a.__data__, r)) ? g[r] = a : _.set(m, a), v[r] = m;
                        for (r = -1; ++r < f;)(a = _.get(m = e.call(n, o = n[r], r))) ? a !== !0 && (d[r] = a, a.__data__ = o) : p[r] = $(o), _.set(m, !0);
                        for (r = -1; ++r < i;) _.get(v[r]) !== !0 && (g[r] = t[r])
                    } else {
                        for (r = -1; ++r < h;) a = t[r], o = n[r], a ? (a.__data__ = o, d[r] = a) : p[r] = $(o);
                        for (; f > r; ++r) p[r] = $(n[r]);
                        for (; i > r; ++r) g[r] = t[r]
                    }
                    p.update = d, p.parentNode = d.parentNode = g.parentNode = t.parentNode, s.push(p), u.push(d), c.push(g)
                }
                var r, a, o = -1,
                    i = this.length;
                if (!arguments.length) {
                    for (t = new Array(i = (r = this[0]).length); ++o < i;)(a = r[o]) && (t[o] = a.__data__);
                    return t
                }
                var s = O([]),
                    u = D([]),
                    c = D([]);
                if ("function" == typeof t)
                    for (; ++o < i;) n(r = this[o], t.call(r, r.parentNode.__data__, o));
                else
                    for (; ++o < i;) n(r = this[o], t);
                return u.enter = function() {
                    return s
                }, u.exit = function() {
                    return c
                }, u
            }, bi.datum = function(t) {
                return arguments.length ? this.property("__data__", t) : this.property("__data__")
            }, bi.filter = function(t) {
                var e, n, r, a = [];
                "function" != typeof t && (t = H(t));
                for (var o = 0, i = this.length; i > o; o++) {
                    a.push(e = []), e.parentNode = (n = this[o]).parentNode;
                    for (var s = 0, l = n.length; l > s; s++)(r = n[s]) && t.call(r, r.__data__, s, o) && e.push(r)
                }
                return D(a)
            }, bi.order = function() {
                for (var t = -1, e = this.length; ++t < e;)
                    for (var n, r = this[t], a = r.length - 1, o = r[a]; --a >= 0;)(n = r[a]) && (o && o !== n.nextSibling && o.parentNode.insertBefore(n, o), o = n);
                return this
            }, bi.sort = function(t) {
                t = U.apply(this, arguments);
                for (var e = -1, n = this.length; ++e < n;) this[e].sort(t);
                return this.order()
            }, bi.each = function(t) {
                return B(this, function(e, n, r) {
                    t.call(e, e.__data__, n, r)
                })
            }, bi.call = function(t) {
                var e = Ko(arguments);
                return t.apply(e[0] = this, e), this
            }, bi.empty = function() {
                return !this.node()
            }, bi.node = function() {
                for (var t = 0, e = this.length; e > t; t++)
                    for (var n = this[t], r = 0, a = n.length; a > r; r++) {
                        var o = n[r];
                        if (o) return o
                    }
                return null
            }, bi.size = function() {
                var t = 0;
                return B(this, function() {
                    ++t
                }), t
            };
            var Si = [];
            Yo.selection.enter = O, Yo.selection.enter.prototype = Si, Si.append = bi.append, Si.empty = bi.empty, Si.node = bi.node, Si.call = bi.call, Si.size = bi.size, Si.select = function(t) {
                for (var e, n, r, a, o, i = [], s = -1, l = this.length; ++s < l;) {
                    r = (a = this[s]).update, i.push(e = []), e.parentNode = a.parentNode;
                    for (var u = -1, c = a.length; ++u < c;)(o = a[u]) ? (e.push(r[u] = n = t.call(a.parentNode, o.__data__, u, s)), n.__data__ = o.__data__) : e.push(null)
                }
                return D(i)
            }, Si.insert = function(t, e) {
                return arguments.length < 2 && (e = j(this)), bi.insert.call(this, t, e)
            }, bi.transition = function() {
                for (var t, e, n = Il || ++Rl, r = [], a = Fl || {
                        time: Date.now(),
                        ease: Dr,
                        delay: 0,
                        duration: 250
                    }, o = -1, i = this.length; ++o < i;) {
                    r.push(t = []);
                    for (var s = this[o], l = -1, u = s.length; ++l < u;)(e = s[l]) && jo(e, l, n, a), t.push(e)
                }
                return Uo(r, n)
            }, bi.interrupt = function() {
                return this.each(G)
            }, Yo.select = function(t) {
                var e = ["string" == typeof t ? mi(t, Qo) : t];
                return e.parentNode = ti, D([e])
            }, Yo.selectAll = function(t) {
                var e = Ko("string" == typeof t ? _i(t, Qo) : t);
                return e.parentNode = ti, D([e])
            };
            var xi = Yo.select(ti);
            bi.on = function(t, e, n) {
                var r = arguments.length;
                if (3 > r) {
                    if ("string" != typeof t) {
                        2 > r && (e = !1);
                        for (n in t) this.each(z(n, t[n], e));
                        return this
                    }
                    if (2 > r) return (r = this.node()["__on" + t]) && r._;
                    n = !1
                }
                return this.each(z(t, e, n))
            };
            var Ci = Yo.map({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            });
            Ci.forEach(function(t) {
                "on" + t in Qo && Ci.remove(t)
            });
            var Di = "onselectstart" in Qo ? null : v(ti.style, "userSelect"),
                Ti = 0;
            Yo.mouse = function(t) {
                return J(t, x())
            };
            var Mi = /WebKit/.test(ei.navigator.userAgent) ? -1 : 0;
            Yo.touch = function(t, e, n) {
                if (arguments.length < 3 && (n = e, e = x().changedTouches), e)
                    for (var r, a = 0, o = e.length; o > a; ++a)
                        if ((r = e[a]).identifier === n) return J(t, r)
            }, Yo.behavior.drag = function() {
                function t() {
                    this.on("mousedown.drag", a).on("touchstart.drag", o)
                }

                function e(t, e, a, o, i) {
                    return function() {
                        function s() {
                            var t, n, r = e(h, g);
                            r && (t = r[0] - y[0], n = r[1] - y[1], p |= t | n, y = r, d({
                                type: "drag",
                                x: r[0] + u[0],
                                y: r[1] + u[1],
                                dx: t,
                                dy: n
                            }))
                        }

                        function l() {
                            e(h, g) && (_.on(o + m, null).on(i + m, null), v(p && Yo.event.target === f), d({
                                type: "dragend"
                            }))
                        }
                        var u, c = this,
                            f = Yo.event.target,
                            h = c.parentNode,
                            d = n.of(c, arguments),
                            p = 0,
                            g = t(),
                            m = ".drag" + (null == g ? "" : "-" + g),
                            _ = Yo.select(a()).on(o + m, s).on(i + m, l),
                            v = V(),
                            y = e(h, g);
                        r ? (u = r.apply(c, arguments), u = [u.x - y[0], u.y - y[1]]) : u = [0, 0], d({
                            type: "dragstart"
                        })
                    }
                }
                var n = C(t, "drag", "dragstart", "dragend"),
                    r = null,
                    a = e(y, Yo.mouse, Z, "mousemove", "mouseup"),
                    o = e(X, Yo.touch, Y, "touchmove", "touchend");
                return t.origin = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, Yo.rebind(t, n, "on")
            }, Yo.touches = function(t, e) {
                return arguments.length < 2 && (e = x().touches), e ? Ko(e).map(function(e) {
                    var n = J(t, e);
                    return n.identifier = e.identifier, n
                }) : []
            };
            var ki = Math.PI,
                Ai = 2 * ki,
                Ii = ki / 2,
                Fi = 1e-6,
                Ni = Fi * Fi,
                Li = ki / 180,
                Ei = 180 / ki,
                Ri = Math.SQRT2,
                Pi = 2,
                $i = 4;
            Yo.interpolateZoom = function(t, e) {
                function n(t) {
                    var e = t * v;
                    if (_) {
                        var n = rt(g),
                            i = o / (Pi * h) * (n * at(Ri * e + g) - nt(g));
                        return [r + i * u, a + i * c, o * n / rt(Ri * e + g)]
                    }
                    return [r + t * u, a + t * c, o * Math.exp(Ri * e)]
                }
                var r = t[0],
                    a = t[1],
                    o = t[2],
                    i = e[0],
                    s = e[1],
                    l = e[2],
                    u = i - r,
                    c = s - a,
                    f = u * u + c * c,
                    h = Math.sqrt(f),
                    d = (l * l - o * o + $i * f) / (2 * o * Pi * h),
                    p = (l * l - o * o - $i * f) / (2 * l * Pi * h),
                    g = Math.log(Math.sqrt(d * d + 1) - d),
                    m = Math.log(Math.sqrt(p * p + 1) - p),
                    _ = m - g,
                    v = (_ || Math.log(l / o)) / Ri;
                return n.duration = 1e3 * v, n
            }, Yo.behavior.zoom = function() {
                function t(t) {
                    t.on(M, u).on(Bi + ".zoom", f).on("dblclick.zoom", h).on(I, c)
                }

                function e(t) {
                    return [(t[0] - x.x) / x.k, (t[1] - x.y) / x.k]
                }

                function n(t) {
                    return [t[0] * x.k + x.x, t[1] * x.k + x.y]
                }

                function r(t) {
                    x.k = Math.max(T[0], Math.min(T[1], t))
                }

                function a(t, e) {
                    e = n(e), x.x += t[0] - e[0], x.y += t[1] - e[1]
                }

                function o() {
                    y && y.domain(v.range().map(function(t) {
                        return (t - x.x) / x.k
                    }).map(v.invert)), w && w.domain(b.range().map(function(t) {
                        return (t - x.y) / x.k
                    }).map(b.invert))
                }

                function i(t) {
                    t({
                        type: "zoomstart"
                    })
                }

                function s(t) {
                    o(), t({
                        type: "zoom",
                        scale: x.k,
                        translate: [x.x, x.y]
                    })
                }

                function l(t) {
                    t({
                        type: "zoomend"
                    })
                }

                function u() {
                    function t() {
                        c = 1, a(Yo.mouse(r), h), s(u)
                    }

                    function n() {
                        f.on(k, null).on(A, null), d(c && Yo.event.target === o), l(u)
                    }
                    var r = this,
                        o = Yo.event.target,
                        u = F.of(r, arguments),
                        c = 0,
                        f = Yo.select(ei).on(k, t).on(A, n),
                        h = e(Yo.mouse(r)),
                        d = V();
                    G.call(r), i(u)
                }

                function c() {
                    function t() {
                        var t = Yo.touches(d);
                        return h = x.k, t.forEach(function(t) {
                            t.identifier in g && (g[t.identifier] = e(t))
                        }), t
                    }

                    function n() {
                        var e = Yo.event.target;
                        Yo.select(e).on(y, o).on(b, f), w.push(e);
                        for (var n = Yo.event.changedTouches, i = 0, l = n.length; l > i; ++i) g[n[i].identifier] = null;
                        var u = t(),
                            c = Date.now();
                        if (1 === u.length) {
                            if (500 > c - _) {
                                var h = u[0],
                                    d = g[h.identifier];
                                r(2 * x.k), a(h, d), S(), s(p)
                            }
                            _ = c
                        } else if (u.length > 1) {
                            var h = u[0],
                                v = u[1],
                                C = h[0] - v[0],
                                D = h[1] - v[1];
                            m = C * C + D * D
                        }
                    }

                    function o() {
                        for (var t, e, n, o, i = Yo.touches(d), l = 0, u = i.length; u > l; ++l, o = null)
                            if (n = i[l], o = g[n.identifier]) {
                                if (e) break;
                                t = n, e = o
                            }
                        if (o) {
                            var c = (c = n[0] - t[0]) * c + (c = n[1] - t[1]) * c,
                                f = m && Math.sqrt(c / m);
                            t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2], e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2], r(f * h)
                        }
                        _ = null, a(t, e), s(p)
                    }

                    function f() {
                        if (Yo.event.touches.length) {
                            for (var e = Yo.event.changedTouches, n = 0, r = e.length; r > n; ++n) delete g[e[n].identifier];
                            for (var a in g) return void t()
                        }
                        Yo.selectAll(w).on(v, null), C.on(M, u).on(I, c), D(), l(p)
                    }
                    var h, d = this,
                        p = F.of(d, arguments),
                        g = {},
                        m = 0,
                        v = ".zoom-" + Yo.event.changedTouches[0].identifier,
                        y = "touchmove" + v,
                        b = "touchend" + v,
                        w = [],
                        C = Yo.select(d),
                        D = V();
                    G.call(d), n(), i(p), C.on(M, null).on(I, n)
                }

                function f() {
                    var t = F.of(this, arguments);
                    m ? clearTimeout(m) : (d = e(p = g || Yo.mouse(this)), G.call(this), i(t)), m = setTimeout(function() {
                        m = null, l(t)
                    }, 50), S(), r(Math.pow(2, .002 * Hi()) * x.k), a(p, d), s(t)
                }

                function h() {
                    var t = F.of(this, arguments),
                        n = Yo.mouse(this),
                        o = e(n),
                        u = Math.log(x.k) / Math.LN2;
                    i(t), r(Math.pow(2, Yo.event.shiftKey ? Math.ceil(u) - 1 : Math.floor(u) + 1)), a(n, o), s(t), l(t)
                }
                var d, p, g, m, _, v, y, b, w, x = {
                        x: 0,
                        y: 0,
                        k: 1
                    },
                    D = [960, 500],
                    T = Ui,
                    M = "mousedown.zoom",
                    k = "mousemove.zoom",
                    A = "mouseup.zoom",
                    I = "touchstart.zoom",
                    F = C(t, "zoomstart", "zoom", "zoomend");
                return t.event = function(t) {
                    t.each(function() {
                        var t = F.of(this, arguments),
                            e = x;
                        Il ? Yo.select(this).transition().each("start.zoom", function() {
                            x = this.__chart__ || {
                                x: 0,
                                y: 0,
                                k: 1
                            }, i(t)
                        }).tween("zoom:zoom", function() {
                            var n = D[0],
                                r = D[1],
                                a = n / 2,
                                o = r / 2,
                                i = Yo.interpolateZoom([(a - x.x) / x.k, (o - x.y) / x.k, n / x.k], [(a - e.x) / e.k, (o - e.y) / e.k, n / e.k]);
                            return function(e) {
                                var r = i(e),
                                    l = n / r[2];
                                this.__chart__ = x = {
                                    x: a - r[0] * l,
                                    y: o - r[1] * l,
                                    k: l
                                }, s(t)
                            }
                        }).each("end.zoom", function() {
                            l(t)
                        }) : (this.__chart__ = x, i(t), s(t), l(t))
                    })
                }, t.translate = function(e) {
                    return arguments.length ? (x = {
                        x: +e[0],
                        y: +e[1],
                        k: x.k
                    }, o(), t) : [x.x, x.y]
                }, t.scale = function(e) {
                    return arguments.length ? (x = {
                        x: x.x,
                        y: x.y,
                        k: +e
                    }, o(), t) : x.k
                }, t.scaleExtent = function(e) {
                    return arguments.length ? (T = null == e ? Ui : [+e[0], +e[1]], t) : T
                }, t.center = function(e) {
                    return arguments.length ? (g = e && [+e[0], +e[1]], t) : g
                }, t.size = function(e) {
                    return arguments.length ? (D = e && [+e[0], +e[1]], t) : D
                }, t.x = function(e) {
                    return arguments.length ? (y = e, v = e.copy(), x = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, t) : y
                }, t.y = function(e) {
                    return arguments.length ? (w = e, b = e.copy(), x = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, t) : w
                }, Yo.rebind(t, F, "on")
            };
            var Hi, Ui = [0, 1 / 0],
                Bi = "onwheel" in Qo ? (Hi = function() {
                    return -Yo.event.deltaY * (Yo.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in Qo ? (Hi = function() {
                    return Yo.event.wheelDelta
                }, "mousewheel") : (Hi = function() {
                    return -Yo.event.detail
                }, "MozMousePixelScroll");
            Yo.color = it, it.prototype.toString = function() {
                return this.rgb() + ""
            }, Yo.hsl = st;
            var Oi = st.prototype = new it;
            Oi.brighter = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new st(this.h, this.s, this.l / t)
            }, Oi.darker = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new st(this.h, this.s, t * this.l)
            }, Oi.rgb = function() {
                return lt(this.h, this.s, this.l)
            }, Yo.hcl = ut;
            var ji = ut.prototype = new it;
            ji.brighter = function(t) {
                return new ut(this.h, this.c, Math.min(100, this.l + Gi * (arguments.length ? t : 1)))
            }, ji.darker = function(t) {
                return new ut(this.h, this.c, Math.max(0, this.l - Gi * (arguments.length ? t : 1)))
            }, ji.rgb = function() {
                return ct(this.h, this.c, this.l).rgb()
            }, Yo.lab = ft;
            var Gi = 18,
                zi = .95047,
                qi = 1,
                Wi = 1.08883,
                Vi = ft.prototype = new it;
            Vi.brighter = function(t) {
                return new ft(Math.min(100, this.l + Gi * (arguments.length ? t : 1)), this.a, this.b)
            }, Vi.darker = function(t) {
                return new ft(Math.max(0, this.l - Gi * (arguments.length ? t : 1)), this.a, this.b)
            }, Vi.rgb = function() {
                return ht(this.l, this.a, this.b)
            }, Yo.rgb = _t;
            var Ji = _t.prototype = new it;
            Ji.brighter = function(t) {
                t = Math.pow(.7, arguments.length ? t : 1);
                var e = this.r,
                    n = this.g,
                    r = this.b,
                    a = 30;
                return e || n || r ? (e && a > e && (e = a), n && a > n && (n = a), r && a > r && (r = a), new _t(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, r / t))) : new _t(a, a, a)
            }, Ji.darker = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new _t(t * this.r, t * this.g, t * this.b)
            }, Ji.hsl = function() {
                return St(this.r, this.g, this.b)
            }, Ji.toString = function() {
                return "#" + bt(this.r) + bt(this.g) + bt(this.b)
            };
            var Xi = Yo.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });
            Xi.forEach(function(t, e) {
                Xi.set(t, vt(e))
            }), Yo.functor = Tt, Yo.xhr = kt(Mt), Yo.dsv = function(t, e) {
                function n(t, n, o) {
                    arguments.length < 3 && (o = n, n = null);
                    var i = At(t, e, null == n ? r : a(n), o);
                    return i.row = function(t) {
                        return arguments.length ? i.response(null == (n = t) ? r : a(t)) : n
                    }, i
                }

                function r(t) {
                    return n.parse(t.responseText)
                }

                function a(t) {
                    return function(e) {
                        return n.parse(e.responseText, t)
                    }
                }

                function o(e) {
                    return e.map(i).join(t)
                }

                function i(t) {
                    return s.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
                }
                var s = new RegExp('["' + t + "\n]"),
                    l = t.charCodeAt(0);
                return n.parse = function(t, e) {
                    var r;
                    return n.parseRows(t, function(t, n) {
                        if (r) return r(t, n - 1);
                        var a = new Function("d", "return {" + t.map(function(t, e) {
                            return JSON.stringify(t) + ": d[" + e + "]"
                        }).join(",") + "}");
                        r = e ? function(t, n) {
                            return e(a(t), n)
                        } : a
                    })
                }, n.parseRows = function(t, e) {
                    function n() {
                        if (c >= u) return i;
                        if (a) return a = !1, o;
                        var e = c;
                        if (34 === t.charCodeAt(e)) {
                            for (var n = e; n++ < u;)
                                if (34 === t.charCodeAt(n)) {
                                    if (34 !== t.charCodeAt(n + 1)) break;
                                    ++n
                                }
                            c = n + 2;
                            var r = t.charCodeAt(n + 1);
                            return 13 === r ? (a = !0, 10 === t.charCodeAt(n + 2) && ++c) : 10 === r && (a = !0), t.slice(e + 1, n).replace(/""/g, '"')
                        }
                        for (; u > c;) {
                            var r = t.charCodeAt(c++),
                                s = 1;
                            if (10 === r) a = !0;
                            else if (13 === r) a = !0, 10 === t.charCodeAt(c) && (++c, ++s);
                            else if (r !== l) continue;
                            return t.slice(e, c - s)
                        }
                        return t.slice(e)
                    }
                    for (var r, a, o = {}, i = {}, s = [], u = t.length, c = 0, f = 0;
                        (r = n()) !== i;) {
                        for (var h = []; r !== o && r !== i;) h.push(r), r = n();
                        e && null == (h = e(h, f++)) || s.push(h)
                    }
                    return s
                }, n.format = function(e) {
                    if (Array.isArray(e[0])) return n.formatRows(e);
                    var r = new m,
                        a = [];
                    return e.forEach(function(t) {
                        for (var e in t) r.has(e) || a.push(r.add(e))
                    }), [a.map(i).join(t)].concat(e.map(function(e) {
                        return a.map(function(t) {
                            return i(e[t])
                        }).join(t)
                    })).join("\n")
                }, n.formatRows = function(t) {
                    return t.map(o).join("\n")
                }, n
            }, Yo.csv = Yo.dsv(",", "text/csv"), Yo.tsv = Yo.dsv("  ", "text/tab-separated-values");
            var Yi, Zi, Ki, Qi, ts, es = ei[v(ei, "requestAnimationFrame")] || function(t) {
                setTimeout(t, 17)
            };
            Yo.timer = function(t, e, n) {
                var r = arguments.length;
                2 > r && (e = 0), 3 > r && (n = Date.now());
                var a = n + e,
                    o = {
                        c: t,
                        t: a,
                        f: !1,
                        n: null
                    };
                Zi ? Zi.n = o : Yi = o, Zi = o, Ki || (Qi = clearTimeout(Qi), Ki = 1, es(Nt))
            }, Yo.timer.flush = function() {
                Lt(), Et()
            }, Yo.round = function(t, e) {
                return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
            };
            var ns = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Pt);
            Yo.formatPrefix = function(t, e) {
                var n = 0;
                return t && (0 > t && (t *= -1), e && (t = Yo.round(t, Rt(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))), ns[8 + n / 3]
            };
            var rs = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                as = Yo.map({
                    b: function(t) {
                        return t.toString(2)
                    },
                    c: function(t) {
                        return String.fromCharCode(t)
                    },
                    o: function(t) {
                        return t.toString(8)
                    },
                    x: function(t) {
                        return t.toString(16)
                    },
                    X: function(t) {
                        return t.toString(16).toUpperCase()
                    },
                    g: function(t, e) {
                        return t.toPrecision(e)
                    },
                    e: function(t, e) {
                        return t.toExponential(e)
                    },
                    f: function(t, e) {
                        return t.toFixed(e)
                    },
                    r: function(t, e) {
                        return (t = Yo.round(t, Rt(t, e))).toFixed(Math.max(0, Math.min(20, Rt(t * (1 + 1e-15), e))))
                    }
                }),
                os = Yo.time = {},
                is = Date;
            Ut.prototype = {
                getDate: function() {
                    return this._.getUTCDate()
                },
                getDay: function() {
                    return this._.getUTCDay()
                },
                getFullYear: function() {
                    return this._.getUTCFullYear()
                },
                getHours: function() {
                    return this._.getUTCHours()
                },
                getMilliseconds: function() {
                    return this._.getUTCMilliseconds()
                },
                getMinutes: function() {
                    return this._.getUTCMinutes()
                },
                getMonth: function() {
                    return this._.getUTCMonth()
                },
                getSeconds: function() {
                    return this._.getUTCSeconds()
                },
                getTime: function() {
                    return this._.getTime()
                },
                getTimezoneOffset: function() {
                    return 0
                },
                valueOf: function() {
                    return this._.valueOf()
                },
                setDate: function() {
                    ss.setUTCDate.apply(this._, arguments)
                },
                setDay: function() {
                    ss.setUTCDay.apply(this._, arguments)
                },
                setFullYear: function() {
                    ss.setUTCFullYear.apply(this._, arguments)
                },
                setHours: function() {
                    ss.setUTCHours.apply(this._, arguments)
                },
                setMilliseconds: function() {
                    ss.setUTCMilliseconds.apply(this._, arguments)
                },
                setMinutes: function() {
                    ss.setUTCMinutes.apply(this._, arguments)
                },
                setMonth: function() {
                    ss.setUTCMonth.apply(this._, arguments)
                },
                setSeconds: function() {
                    ss.setUTCSeconds.apply(this._, arguments)
                },
                setTime: function() {
                    ss.setTime.apply(this._, arguments)
                }
            };
            var ss = Date.prototype;
            os.year = Bt(function(t) {
                return t = os.day(t), t.setMonth(0, 1), t
            }, function(t, e) {
                t.setFullYear(t.getFullYear() + e)
            }, function(t) {
                return t.getFullYear()
            }), os.years = os.year.range, os.years.utc = os.year.utc.range, os.day = Bt(function(t) {
                var e = new is(2e3, 0);
                return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e
            }, function(t, e) {
                t.setDate(t.getDate() + e)
            }, function(t) {
                return t.getDate() - 1
            }), os.days = os.day.range, os.days.utc = os.day.utc.range, os.dayOfYear = function(t) {
                var e = os.year(t);
                return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
            }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, e) {
                e = 7 - e;
                var n = os[t] = Bt(function(t) {
                    return (t = os.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7), t
                }, function(t, e) {
                    t.setDate(t.getDate() + 7 * Math.floor(e))
                }, function(t) {
                    var n = os.year(t).getDay();
                    return Math.floor((os.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e)
                });
                os[t + "s"] = n.range, os[t + "s"].utc = n.utc.range, os[t + "OfYear"] = function(t) {
                    var n = os.year(t).getDay();
                    return Math.floor((os.dayOfYear(t) + (n + e) % 7) / 7)
                }
            }), os.week = os.sunday, os.weeks = os.sunday.range, os.weeks.utc = os.sunday.utc.range, os.weekOfYear = os.sundayOfYear;
            var ls = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                us = /^\s*\d+/,
                cs = /^%/;
            Yo.locale = function(t) {
                return {
                    numberFormat: $t(t),
                    timeFormat: jt(t)
                }
            };
            var fs = Yo.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            Yo.format = fs.numberFormat, Yo.geo = {}, ue.prototype = {
                s: 0,
                t: 0,
                add: function(t) {
                    ce(t, this.t, hs), ce(hs.s, this.s, this), this.s ? this.t += hs.t : this.s = hs.t
                },
                reset: function() {
                    this.s = this.t = 0
                },
                valueOf: function() {
                    return this.s
                }
            };
            var hs = new ue;
            Yo.geo.stream = function(t, e) {
                t && ds.hasOwnProperty(t.type) ? ds[t.type](t, e) : fe(t, e)
            };
            var ds = {
                    Feature: function(t, e) {
                        fe(t.geometry, e)
                    },
                    FeatureCollection: function(t, e) {
                        for (var n = t.features, r = -1, a = n.length; ++r < a;) fe(n[r].geometry, e)
                    }
                },
                ps = {
                    Sphere: function(t, e) {
                        e.sphere()
                    },
                    Point: function(t, e) {
                        t = t.coordinates, e.point(t[0], t[1], t[2])
                    },
                    MultiPoint: function(t, e) {
                        for (var n = t.coordinates, r = -1, a = n.length; ++r < a;) t = n[r], e.point(t[0], t[1], t[2])
                    },
                    LineString: function(t, e) {
                        he(t.coordinates, e, 0)
                    },
                    MultiLineString: function(t, e) {
                        for (var n = t.coordinates, r = -1, a = n.length; ++r < a;) he(n[r], e, 0)
                    },
                    Polygon: function(t, e) {
                        de(t.coordinates, e)
                    },
                    MultiPolygon: function(t, e) {
                        for (var n = t.coordinates, r = -1, a = n.length; ++r < a;) de(n[r], e)
                    },
                    GeometryCollection: function(t, e) {
                        for (var n = t.geometries, r = -1, a = n.length; ++r < a;) fe(n[r], e)
                    }
                };
            Yo.geo.area = function(t) {
                return gs = 0, Yo.geo.stream(t, _s), gs
            };
            var gs, ms = new ue,
                _s = {
                    sphere: function() {
                        gs += 4 * ki
                    },
                    point: y,
                    lineStart: y,
                    lineEnd: y,
                    polygonStart: function() {
                        ms.reset(), _s.lineStart = pe
                    },
                    polygonEnd: function() {
                        var t = 2 * ms;
                        gs += 0 > t ? 4 * ki + t : t, _s.lineStart = _s.lineEnd = _s.point = y
                    }
                };
            Yo.geo.bounds = function() {
                function t(t, e) {
                    y.push(b = [c = t, h = t]), f > e && (f = e), e > d && (d = e)
                }

                function e(e, n) {
                    var r = ge([e * Li, n * Li]);
                    if (_) {
                        var a = _e(_, r),
                            o = [a[1], -a[0], 0],
                            i = _e(o, a);
                        be(i), i = we(i);
                        var l = e - p,
                            u = l > 0 ? 1 : -1,
                            g = i[0] * Ei * u,
                            m = ci(l) > 180;
                        if (m ^ (g > u * p && u * e > g)) {
                            var v = i[1] * Ei;
                            v > d && (d = v)
                        } else if (g = (g + 360) % 360 - 180, m ^ (g > u * p && u * e > g)) {
                            var v = -i[1] * Ei;
                            f > v && (f = v)
                        } else f > n && (f = n), n > d && (d = n);
                        m ? p > e ? s(c, e) > s(c, h) && (h = e) : s(e, h) > s(c, h) && (c = e) : h >= c ? (c > e && (c = e), e > h && (h = e)) : e > p ? s(c, e) > s(c, h) && (h = e) : s(e, h) > s(c, h) && (c = e)
                    } else t(e, n);
                    _ = r, p = e
                }

                function n() {
                    w.point = e
                }

                function r() {
                    b[0] = c, b[1] = h, w.point = t, _ = null
                }

                function a(t, n) {
                    if (_) {
                        var r = t - p;
                        v += ci(r) > 180 ? r + (r > 0 ? 360 : -360) : r
                    } else g = t, m = n;
                    _s.point(t, n), e(t, n)
                }

                function o() {
                    _s.lineStart()
                }

                function i() {
                    a(g, m), _s.lineEnd(), ci(v) > Fi && (c = -(h = 180)), b[0] = c, b[1] = h, _ = null
                }

                function s(t, e) {
                    return (e -= t) < 0 ? e + 360 : e
                }

                function l(t, e) {
                    return t[0] - e[0]
                }

                function u(t, e) {
                    return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
                }
                var c, f, h, d, p, g, m, _, v, y, b, w = {
                    point: t,
                    lineStart: n,
                    lineEnd: r,
                    polygonStart: function() {
                        w.point = a, w.lineStart = o, w.lineEnd = i, v = 0, _s.polygonStart()
                    },
                    polygonEnd: function() {
                        _s.polygonEnd(), w.point = t, w.lineStart = n, w.lineEnd = r, 0 > ms ? (c = -(h = 180), f = -(d = 90)) : v > Fi ? d = 90 : -Fi > v && (f = -90), b[0] = c, b[1] = h
                    }
                };
                return function(t) {
                    d = h = -(c = f = 1 / 0), y = [], Yo.geo.stream(t, w);
                    var e = y.length;
                    if (e) {
                        y.sort(l);
                        for (var n, r = 1, a = y[0], o = [a]; e > r; ++r) n = y[r], u(n[0], a) || u(n[1], a) ? (s(a[0], n[1]) > s(a[0], a[1]) && (a[1] = n[1]), s(n[0], a[1]) > s(a[0], a[1]) && (a[0] = n[0])) : o.push(a = n);
                        for (var i, n, p = -(1 / 0), e = o.length - 1, r = 0, a = o[e]; e >= r; a = n, ++r) n = o[r], (i = s(a[1], n[0])) > p && (p = i, c = n[0], h = a[1])
                    }
                    return y = b = null, c === 1 / 0 || f === 1 / 0 ? [
                        [NaN, NaN],
                        [NaN, NaN]
                    ] : [
                        [c, f],
                        [h, d]
                    ]
                }
            }(), Yo.geo.centroid = function(t) {
                vs = ys = bs = ws = Ss = xs = Cs = Ds = Ts = Ms = ks = 0, Yo.geo.stream(t, As);
                var e = Ts,
                    n = Ms,
                    r = ks,
                    a = e * e + n * n + r * r;
                return Ni > a && (e = xs, n = Cs, r = Ds, Fi > ys && (e = bs, n = ws, r = Ss), a = e * e + n * n + r * r, Ni > a) ? [NaN, NaN] : [Math.atan2(n, e) * Ei, et(r / Math.sqrt(a)) * Ei]
            };
            var vs, ys, bs, ws, Ss, xs, Cs, Ds, Ts, Ms, ks, As = {
                    sphere: y,
                    point: xe,
                    lineStart: De,
                    lineEnd: Te,
                    polygonStart: function() {
                        As.lineStart = Me
                    },
                    polygonEnd: function() {
                        As.lineStart = De
                    }
                },
                Is = Ne(ke, Pe, He, [-ki, -ki / 2]),
                Fs = 1e9;
            Yo.geo.clipExtent = function() {
                var t, e, n, r, a, o, i = {
                    stream: function(t) {
                        return a && (a.valid = !1), a = o(t), a.valid = !0, a
                    },
                    extent: function(s) {
                        return arguments.length ? (o = je(t = +s[0][0], e = +s[0][1], n = +s[1][0], r = +s[1][1]), a && (a.valid = !1, a = null), i) : [
                            [t, e],
                            [n, r]
                        ]
                    }
                };
                return i.extent([
                    [0, 0],
                    [960, 500]
                ])
            }, (Yo.geo.conicEqualArea = function() {
                return ze(qe)
            }).raw = qe, Yo.geo.albers = function() {
                return Yo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, Yo.geo.albersUsa = function() {
                function t(t) {
                    var o = t[0],
                        i = t[1];
                    return e = null, n(o, i), e || (r(o, i), e) || a(o, i), e
                }
                var e, n, r, a, o = Yo.geo.albers(),
                    i = Yo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    s = Yo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    l = {
                        point: function(t, n) {
                            e = [t, n]
                        }
                    };
                return t.invert = function(t) {
                    var e = o.scale(),
                        n = o.translate(),
                        r = (t[0] - n[0]) / e,
                        a = (t[1] - n[1]) / e;
                    return (a >= .12 && .234 > a && r >= -.425 && -.214 > r ? i : a >= .166 && .234 > a && r >= -.214 && -.115 > r ? s : o).invert(t)
                }, t.stream = function(t) {
                    var e = o.stream(t),
                        n = i.stream(t),
                        r = s.stream(t);
                    return {
                        point: function(t, a) {
                            e.point(t, a), n.point(t, a), r.point(t, a)
                        },
                        sphere: function() {
                            e.sphere(), n.sphere(), r.sphere()
                        },
                        lineStart: function() {
                            e.lineStart(), n.lineStart(), r.lineStart()
                        },
                        lineEnd: function() {
                            e.lineEnd(), n.lineEnd(), r.lineEnd()
                        },
                        polygonStart: function() {
                            e.polygonStart(), n.polygonStart(), r.polygonStart()
                        },
                        polygonEnd: function() {
                            e.polygonEnd(), n.polygonEnd(), r.polygonEnd()
                        }
                    }
                }, t.precision = function(e) {
                    return arguments.length ? (o.precision(e), i.precision(e), s.precision(e), t) : o.precision()
                }, t.scale = function(e) {
                    return arguments.length ? (o.scale(e), i.scale(.35 * e), s.scale(e), t.translate(o.translate())) : o.scale()
                }, t.translate = function(e) {
                    if (!arguments.length) return o.translate();
                    var u = o.scale(),
                        c = +e[0],
                        f = +e[1];
                    return n = o.translate(e).clipExtent([
                        [c - .455 * u, f - .238 * u],
                        [c + .455 * u, f + .238 * u]
                    ]).stream(l).point, r = i.translate([c - .307 * u, f + .201 * u]).clipExtent([
                        [c - .425 * u + Fi, f + .12 * u + Fi],
                        [c - .214 * u - Fi, f + .234 * u - Fi]
                    ]).stream(l).point, a = s.translate([c - .205 * u, f + .212 * u]).clipExtent([
                        [c - .214 * u + Fi, f + .166 * u + Fi],
                        [c - .115 * u - Fi, f + .234 * u - Fi]
                    ]).stream(l).point, t
                }, t.scale(1070)
            };
            var Ns, Ls, Es, Rs, Ps, $s, Hs = {
                    point: y,
                    lineStart: y,
                    lineEnd: y,
                    polygonStart: function() {
                        Ls = 0, Hs.lineStart = We
                    },
                    polygonEnd: function() {
                        Hs.lineStart = Hs.lineEnd = Hs.point = y, Ns += ci(Ls / 2)
                    }
                },
                Us = {
                    point: Ve,
                    lineStart: y,
                    lineEnd: y,
                    polygonStart: y,
                    polygonEnd: y
                },
                Bs = {
                    point: Ye,
                    lineStart: Ze,
                    lineEnd: Ke,
                    polygonStart: function() {
                        Bs.lineStart = Qe
                    },
                    polygonEnd: function() {
                        Bs.point = Ye, Bs.lineStart = Ze, Bs.lineEnd = Ke
                    }
                };
            Yo.geo.path = function() {
                function t(t) {
                    return t && ("function" == typeof s && o.pointRadius(+s.apply(this, arguments)), i && i.valid || (i = a(o)), Yo.geo.stream(t, i)), o.result()
                }

                function e() {
                    return i = null, t
                }
                var n, r, a, o, i, s = 4.5;
                return t.area = function(t) {
                    return Ns = 0, Yo.geo.stream(t, a(Hs)), Ns
                }, t.centroid = function(t) {
                    return bs = ws = Ss = xs = Cs = Ds = Ts = Ms = ks = 0, Yo.geo.stream(t, a(Bs)), ks ? [Ts / ks, Ms / ks] : Ds ? [xs / Ds, Cs / Ds] : Ss ? [bs / Ss, ws / Ss] : [NaN, NaN]
                }, t.bounds = function(t) {
                    return Ps = $s = -(Es = Rs = 1 / 0), Yo.geo.stream(t, a(Us)), [
                        [Es, Rs],
                        [Ps, $s]
                    ]
                }, t.projection = function(t) {
                    return arguments.length ? (a = (n = t) ? t.stream || nn(t) : Mt, e()) : n
                }, t.context = function(t) {
                    return arguments.length ? (o = null == (r = t) ? new Je : new tn(t), "function" != typeof s && o.pointRadius(s), e()) : r
                }, t.pointRadius = function(e) {
                    return arguments.length ? (s = "function" == typeof e ? e : (o.pointRadius(+e), +e), t) : s
                }, t.projection(Yo.geo.albersUsa()).context(null)
            }, Yo.geo.transform = function(t) {
                return {
                    stream: function(e) {
                        var n = new rn(e);
                        for (var r in t) n[r] = t[r];
                        return n
                    }
                }
            }, rn.prototype = {
                point: function(t, e) {
                    this.stream.point(t, e)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                }
            }, Yo.geo.projection = on, Yo.geo.projectionMutator = sn, (Yo.geo.equirectangular = function() {
                return on(un)
            }).raw = un.invert = un, Yo.geo.rotation = function(t) {
                function e(e) {
                    return e = t(e[0] * Li, e[1] * Li), e[0] *= Ei, e[1] *= Ei, e
                }
                return t = fn(t[0] % 360 * Li, t[1] * Li, t.length > 2 ? t[2] * Li : 0), e.invert = function(e) {
                    return e = t.invert(e[0] * Li, e[1] * Li), e[0] *= Ei, e[1] *= Ei, e
                }, e
            }, cn.invert = un, Yo.geo.circle = function() {
                function t() {
                    var t = "function" == typeof r ? r.apply(this, arguments) : r,
                        e = fn(-t[0] * Li, -t[1] * Li, 0).invert,
                        a = [];
                    return n(null, null, 1, {
                        point: function(t, n) {
                            a.push(t = e(t, n)), t[0] *= Ei, t[1] *= Ei
                        }
                    }), {
                        type: "Polygon",
                        coordinates: [a]
                    }
                }
                var e, n, r = [0, 0],
                    a = 6;
                return t.origin = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t.angle = function(r) {
                    return arguments.length ? (n = gn((e = +r) * Li, a * Li), t) : e
                }, t.precision = function(r) {
                    return arguments.length ? (n = gn(e * Li, (a = +r) * Li), t) : a
                }, t.angle(90)
            }, Yo.geo.distance = function(t, e) {
                var n, r = (e[0] - t[0]) * Li,
                    a = t[1] * Li,
                    o = e[1] * Li,
                    i = Math.sin(r),
                    s = Math.cos(r),
                    l = Math.sin(a),
                    u = Math.cos(a),
                    c = Math.sin(o),
                    f = Math.cos(o);
                return Math.atan2(Math.sqrt((n = f * i) * n + (n = u * c - l * f * s) * n), l * c + u * f * s)
            }, Yo.geo.graticule = function() {
                function t() {
                    return {
                        type: "MultiLineString",
                        coordinates: e()
                    }
                }

                function e() {
                    return Yo.range(Math.ceil(o / m) * m, a, m).map(h).concat(Yo.range(Math.ceil(u / _) * _, l, _).map(d)).concat(Yo.range(Math.ceil(r / p) * p, n, p).filter(function(t) {
                        return ci(t % m) > Fi
                    }).map(c)).concat(Yo.range(Math.ceil(s / g) * g, i, g).filter(function(t) {
                        return ci(t % _) > Fi
                    }).map(f))
                }
                var n, r, a, o, i, s, l, u, c, f, h, d, p = 10,
                    g = p,
                    m = 90,
                    _ = 360,
                    v = 2.5;
                return t.lines = function() {
                    return e().map(function(t) {
                        return {
                            type: "LineString",
                            coordinates: t
                        }
                    })
                }, t.outline = function() {
                    return {
                        type: "Polygon",
                        coordinates: [h(o).concat(d(l).slice(1), h(a).reverse().slice(1), d(u).reverse().slice(1))]
                    }
                }, t.extent = function(e) {
                    return arguments.length ? t.majorExtent(e).minorExtent(e) : t.minorExtent()
                }, t.majorExtent = function(e) {
                    return arguments.length ? (o = +e[0][0], a = +e[1][0], u = +e[0][1], l = +e[1][1], o > a && (e = o, o = a, a = e), u > l && (e = u, u = l, l = e), t.precision(v)) : [
                        [o, u],
                        [a, l]
                    ]
                }, t.minorExtent = function(e) {
                    return arguments.length ? (r = +e[0][0], n = +e[1][0], s = +e[0][1], i = +e[1][1], r > n && (e = r, r = n, n = e), s > i && (e = s, s = i, i = e), t.precision(v)) : [
                        [r, s],
                        [n, i]
                    ]
                }, t.step = function(e) {
                    return arguments.length ? t.majorStep(e).minorStep(e) : t.minorStep()
                }, t.majorStep = function(e) {
                    return arguments.length ? (m = +e[0], _ = +e[1], t) : [m, _]
                }, t.minorStep = function(e) {
                    return arguments.length ? (p = +e[0], g = +e[1], t) : [p, g]
                }, t.precision = function(e) {
                    return arguments.length ? (v = +e, c = _n(s, i, 90), f = vn(r, n, v), h = _n(u, l, 90), d = vn(o, a, v), t) : v
                }, t.majorExtent([
                    [-180, -90 + Fi],
                    [180, 90 - Fi]
                ]).minorExtent([
                    [-180, -80 - Fi],
                    [180, 80 + Fi]
                ])
            }, Yo.geo.greatArc = function() {
                function t() {
                    return {
                        type: "LineString",
                        coordinates: [e || r.apply(this, arguments), n || a.apply(this, arguments)]
                    }
                }
                var e, n, r = yn,
                    a = bn;
                return t.distance = function() {
                    return Yo.geo.distance(e || r.apply(this, arguments), n || a.apply(this, arguments))
                }, t.source = function(n) {
                    return arguments.length ? (r = n, e = "function" == typeof n ? null : n, t) : r
                }, t.target = function(e) {
                    return arguments.length ? (a = e, n = "function" == typeof e ? null : e, t) : a
                }, t.precision = function() {
                    return arguments.length ? t : 0
                }, t
            }, Yo.geo.interpolate = function(t, e) {
                return wn(t[0] * Li, t[1] * Li, e[0] * Li, e[1] * Li)
            }, Yo.geo.length = function(t) {
                return Os = 0, Yo.geo.stream(t, js), Os
            };
            var Os, js = {
                    sphere: y,
                    point: y,
                    lineStart: Sn,
                    lineEnd: y,
                    polygonStart: y,
                    polygonEnd: y
                },
                Gs = xn(function(t) {
                    return Math.sqrt(2 / (1 + t))
                }, function(t) {
                    return 2 * Math.asin(t / 2)
                });
            (Yo.geo.azimuthalEqualArea = function() {
                return on(Gs)
            }).raw = Gs;
            var zs = xn(function(t) {
                var e = Math.acos(t);
                return e && e / Math.sin(e)
            }, Mt);
            (Yo.geo.azimuthalEquidistant = function() {
                return on(zs)
            }).raw = zs, (Yo.geo.conicConformal = function() {
                return ze(Cn)
            }).raw = Cn, (Yo.geo.conicEquidistant = function() {
                return ze(Dn)
            }).raw = Dn;
            var qs = xn(function(t) {
                return 1 / t
            }, Math.atan);
            (Yo.geo.gnomonic = function() {
                return on(qs)
            }).raw = qs, Tn.invert = function(t, e) {
                return [t, 2 * Math.atan(Math.exp(e)) - Ii]
            }, (Yo.geo.mercator = function() {
                return Mn(Tn)
            }).raw = Tn;
            var Ws = xn(function() {
                return 1
            }, Math.asin);
            (Yo.geo.orthographic = function() {
                return on(Ws)
            }).raw = Ws;
            var Vs = xn(function(t) {
                return 1 / (1 + t)
            }, function(t) {
                return 2 * Math.atan(t)
            });
            (Yo.geo.stereographic = function() {
                return on(Vs)
            }).raw = Vs, kn.invert = function(t, e) {
                return [-e, 2 * Math.atan(Math.exp(t)) - Ii]
            }, (Yo.geo.transverseMercator = function() {
                var t = Mn(kn),
                    e = t.center,
                    n = t.rotate;
                return t.center = function(t) {
                    return t ? e([-t[1], t[0]]) : (t = e(), [t[1], -t[0]])
                }, t.rotate = function(t) {
                    return t ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = n(), [t[0], t[1], t[2] - 90])
                }, n([0, 0, 90])
            }).raw = kn, Yo.geom = {}, Yo.geom.hull = function(t) {
                function e(t) {
                    if (t.length < 3) return [];
                    var e, a = Tt(n),
                        o = Tt(r),
                        i = t.length,
                        s = [],
                        l = [];
                    for (e = 0; i > e; e++) s.push([+a.call(this, t[e], e), +o.call(this, t[e], e), e]);
                    for (s.sort(Nn), e = 0; i > e; e++) l.push([s[e][0], -s[e][1]]);
                    var u = Fn(s),
                        c = Fn(l),
                        f = c[0] === u[0],
                        h = c[c.length - 1] === u[u.length - 1],
                        d = [];
                    for (e = u.length - 1; e >= 0; --e) d.push(t[s[u[e]][2]]);
                    for (e = +f; e < c.length - h; ++e) d.push(t[s[c[e]][2]]);
                    return d
                }
                var n = An,
                    r = In;
                return arguments.length ? e(t) : (e.x = function(t) {
                    return arguments.length ? (n = t, e) : n
                }, e.y = function(t) {
                    return arguments.length ? (r = t, e) : r
                }, e)
            }, Yo.geom.polygon = function(t) {
                return gi(t, Js), t
            };
            var Js = Yo.geom.polygon.prototype = [];
            Js.area = function() {
                for (var t, e = -1, n = this.length, r = this[n - 1], a = 0; ++e < n;) t = r, r = this[e], a += t[1] * r[0] - t[0] * r[1];
                return .5 * a
            }, Js.centroid = function(t) {
                var e, n, r = -1,
                    a = this.length,
                    o = 0,
                    i = 0,
                    s = this[a - 1];
                for (arguments.length || (t = -1 / (6 * this.area())); ++r < a;) e = s, s = this[r], n = e[0] * s[1] - s[0] * e[1], o += (e[0] + s[0]) * n, i += (e[1] + s[1]) * n;
                return [o * t, i * t]
            }, Js.clip = function(t) {
                for (var e, n, r, a, o, i, s = Rn(t), l = -1, u = this.length - Rn(this), c = this[u - 1]; ++l < u;) {
                    for (e = t.slice(), t.length = 0, a = this[l], o = e[(r = e.length - s) - 1], n = -1; ++n < r;) i = e[n], Ln(i, c, a) ? (Ln(o, c, a) || t.push(En(o, i, c, a)), t.push(i)) : Ln(o, c, a) && t.push(En(o, i, c, a)), o = i;
                    s && t.push(t[0]), c = a
                }
                return t
            };
            var Xs, Ys, Zs, Ks, Qs, tl = [],
                el = [];
            Gn.prototype.prepare = function() {
                for (var t, e = this.edges, n = e.length; n--;) t = e[n].edge, t.b && t.a || e.splice(n, 1);
                return e.sort(qn), e.length
            }, er.prototype = {
                start: function() {
                    return this.edge.l === this.site ? this.edge.a : this.edge.b
                },
                end: function() {
                    return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
            }, nr.prototype = {
                insert: function(t, e) {
                    var n, r, a;
                    if (t) {
                        if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = e
                        } else t.R = e;
                        n = t
                    } else this._ ? (t = ir(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
                    for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) r = n.U, n === r.L ? (a = r.R, a && a.C ? (n.C = a.C = !1, r.C = !0, t = r) : (t === n.R && (ar(this, n), t = n, n = t.U), n.C = !1, r.C = !0, or(this, r))) : (a = r.L, a && a.C ? (n.C = a.C = !1, r.C = !0, t = r) : (t === n.L && (or(this, n), t = n, n = t.U), n.C = !1, r.C = !0, ar(this, r))), n = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var e, n, r, a = t.U,
                        o = t.L,
                        i = t.R;
                    if (n = o ? i ? ir(i) : o : i, a ? a.L === t ? a.L = n : a.R = n : this._ = n, o && i ? (r = n.C, n.C = t.C, n.L = o, o.U = n, n !== i ? (a = n.U, n.U = t.U, t = n.R, a.L = t, n.R = i, i.U = n) : (n.U = a, a = n, t = n.R)) : (r = t.C, t = n), t && (t.U = a), !r) {
                        if (t && t.C) return void(t.C = !1);
                        do {
                            if (t === this._) break;
                            if (t === a.L) {
                                if (e = a.R, e.C && (e.C = !1, a.C = !0, ar(this, a), e = a.R), e.L && e.L.C || e.R && e.R.C) {
                                    e.R && e.R.C || (e.L.C = !1, e.C = !0, or(this, e), e = a.R), e.C = a.C, a.C = e.R.C = !1, ar(this, a), t = this._;
                                    break
                                }
                            } else if (e = a.L, e.C && (e.C = !1, a.C = !0, or(this, a), e = a.L), e.L && e.L.C || e.R && e.R.C) {
                                e.L && e.L.C || (e.R.C = !1, e.C = !0, ar(this, e), e = a.L), e.C = a.C, a.C = e.L.C = !1, or(this, a), t = this._;
                                break
                            }
                            e.C = !0, t = a, a = a.U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
                }
            }, Yo.geom.voronoi = function(t) {
                function e(t) {
                    var e = new Array(t.length),
                        r = s[0][0],
                        a = s[0][1],
                        o = s[1][0],
                        i = s[1][1];
                    return sr(n(t), s).cells.forEach(function(n, s) {
                        var l = n.edges,
                            u = n.site,
                            c = e[s] = l.length ? l.map(function(t) {
                                var e = t.start();
                                return [e.x, e.y]
                            }) : u.x >= r && u.x <= o && u.y >= a && u.y <= i ? [
                                [r, i],
                                [o, i],
                                [o, a],
                                [r, a]
                            ] : [];
                        c.point = t[s]
                    }), e
                }

                function n(t) {
                    return t.map(function(t, e) {
                        return {
                            x: Math.round(o(t, e) / Fi) * Fi,
                            y: Math.round(i(t, e) / Fi) * Fi,
                            i: e
                        }
                    })
                }
                var r = An,
                    a = In,
                    o = r,
                    i = a,
                    s = nl;
                return t ? e(t) : (e.links = function(t) {
                    return sr(n(t)).edges.filter(function(t) {
                        return t.l && t.r
                    }).map(function(e) {
                        return {
                            source: t[e.l.i],
                            target: t[e.r.i]
                        }
                    })
                }, e.triangles = function(t) {
                    var e = [];
                    return sr(n(t)).cells.forEach(function(n, r) {
                        for (var a, o, i = n.site, s = n.edges.sort(qn), l = -1, u = s.length, c = s[u - 1].edge, f = c.l === i ? c.r : c.l; ++l < u;) a = c, o = f, c = s[l].edge, f = c.l === i ? c.r : c.l, r < o.i && r < f.i && ur(i, o, f) < 0 && e.push([t[r], t[o.i], t[f.i]])
                    }), e
                }, e.x = function(t) {
                    return arguments.length ? (o = Tt(r = t), e) : r
                }, e.y = function(t) {
                    return arguments.length ? (i = Tt(a = t), e) : a
                }, e.clipExtent = function(t) {
                    return arguments.length ? (s = null == t ? nl : t, e) : s === nl ? null : s
                }, e.size = function(t) {
                    return arguments.length ? e.clipExtent(t && [
                        [0, 0], t
                    ]) : s === nl ? null : s && s[1]
                }, e)
            };
            var nl = [
                [-1e6, -1e6],
                [1e6, 1e6]
            ];
            Yo.geom.delaunay = function(t) {
                return Yo.geom.voronoi().triangles(t)
            }, Yo.geom.quadtree = function(t, e, n, r, a) {
                function o(t) {
                    function o(t, e, n, r, a, o, i, s) {
                        if (!isNaN(n) && !isNaN(r))
                            if (t.leaf) {
                                var l = t.x,
                                    c = t.y;
                                if (null != l)
                                    if (ci(l - n) + ci(c - r) < .01) u(t, e, n, r, a, o, i, s);
                                    else {
                                        var f = t.point;
                                        t.x = t.y = t.point = null, u(t, f, l, c, a, o, i, s), u(t, e, n, r, a, o, i, s)
                                    }
                                else t.x = n, t.y = r, t.point = e
                            } else u(t, e, n, r, a, o, i, s)
                    }

                    function u(t, e, n, r, a, i, s, l) {
                        var u = .5 * (a + s),
                            c = .5 * (i + l),
                            f = n >= u,
                            h = r >= c,
                            d = (h << 1) + f;
                        t.leaf = !1, t = t.nodes[d] || (t.nodes[d] = hr()), f ? a = u : s = u, h ? i = c : l = c, o(t, e, n, r, a, i, s, l)
                    }
                    var c, f, h, d, p, g, m, _, v, y = Tt(s),
                        b = Tt(l);
                    if (null != e) g = e, m = n, _ = r, v = a;
                    else if (_ = v = -(g = m = 1 / 0), f = [], h = [], p = t.length, i)
                        for (d = 0; p > d; ++d) c = t[d], c.x < g && (g = c.x), c.y < m && (m = c.y), c.x > _ && (_ = c.x), c.y > v && (v = c.y), f.push(c.x), h.push(c.y);
                    else
                        for (d = 0; p > d; ++d) {
                            var w = +y(c = t[d], d),
                                S = +b(c, d);
                            g > w && (g = w), m > S && (m = S), w > _ && (_ = w), S > v && (v = S), f.push(w), h.push(S)
                        }
                    var x = _ - g,
                        C = v - m;
                    x > C ? v = m + x : _ = g + C;
                    var D = hr();
                    if (D.add = function(t) {
                            o(D, t, +y(t, ++d), +b(t, d), g, m, _, v)
                        }, D.visit = function(t) {
                            dr(t, D, g, m, _, v)
                        }, d = -1, null == e) {
                        for (; ++d < p;) o(D, t[d], f[d], h[d], g, m, _, v);
                        --d
                    } else t.forEach(D.add);
                    return f = h = t = c = null, D
                }
                var i, s = An,
                    l = In;
                return (i = arguments.length) ? (s = cr, l = fr, 3 === i && (a = n, r = e, n = e = 0), o(t)) : (o.x = function(t) {
                    return arguments.length ? (s = t, o) : s
                }, o.y = function(t) {
                    return arguments.length ? (l = t, o) : l
                }, o.extent = function(t) {
                    return arguments.length ? (null == t ? e = n = r = a = null : (e = +t[0][0], n = +t[0][1], r = +t[1][0], a = +t[1][1]), o) : null == e ? null : [
                        [e, n],
                        [r, a]
                    ]
                }, o.size = function(t) {
                    return arguments.length ? (null == t ? e = n = r = a = null : (e = n = 0, r = +t[0], a = +t[1]), o) : null == e ? null : [r - e, a - n]
                }, o)
            }, Yo.interpolateRgb = pr, Yo.interpolateObject = gr, Yo.interpolateNumber = mr, Yo.interpolateString = _r;
            var rl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                al = new RegExp(rl.source, "g");
            Yo.interpolate = vr, Yo.interpolators = [function(t, e) {
                var n = typeof e;
                return ("string" === n ? Xi.has(e) || /^(#|rgb\(|hsl\()/.test(e) ? pr : _r : e instanceof it ? pr : Array.isArray(e) ? yr : "object" === n && isNaN(e) ? gr : mr)(t, e)
            }], Yo.interpolateArray = yr;
            var ol = function() {
                    return Mt
                },
                il = Yo.map({
                    linear: ol,
                    poly: Tr,
                    quad: function() {
                        return xr
                    },
                    cubic: function() {
                        return Cr
                    },
                    sin: function() {
                        return Mr
                    },
                    exp: function() {
                        return kr
                    },
                    circle: function() {
                        return Ar
                    },
                    elastic: Ir,
                    back: Fr,
                    bounce: function() {
                        return Nr
                    }
                }),
                sl = Yo.map({
                    "in": Mt,
                    out: wr,
                    "in-out": Sr,
                    "out-in": function(t) {
                        return Sr(wr(t))
                    }
                });
            Yo.ease = function(t) {
                var e = t.indexOf("-"),
                    n = e >= 0 ? t.slice(0, e) : t,
                    r = e >= 0 ? t.slice(e + 1) : "in";
                return n = il.get(n) || ol, r = sl.get(r) || Mt, br(r(n.apply(null, Zo.call(arguments, 1))))
            }, Yo.interpolateHcl = Lr, Yo.interpolateHsl = Er, Yo.interpolateLab = Rr, Yo.interpolateRound = Pr, Yo.transform = function(t) {
                var e = Qo.createElementNS(Yo.ns.prefix.svg, "g");
                return (Yo.transform = function(t) {
                    if (null != t) {
                        e.setAttribute("transform", t);
                        var n = e.transform.baseVal.consolidate()
                    }
                    return new $r(n ? n.matrix : ll)
                })(t)
            }, $r.prototype.toString = function() {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            var ll = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            Yo.interpolateTransform = Or, Yo.layout = {}, Yo.layout.bundle = function() {
                return function(t) {
                    for (var e = [], n = -1, r = t.length; ++n < r;) e.push(zr(t[n]));
                    return e
                }
            }, Yo.layout.chord = function() {
                function t() {
                    var t, u, f, h, d, p = {},
                        g = [],
                        m = Yo.range(o),
                        _ = [];
                    for (n = [], r = [], t = 0, h = -1; ++h < o;) {
                        for (u = 0, d = -1; ++d < o;) u += a[h][d];
                        g.push(u), _.push(Yo.range(o)), t += u
                    }
                    for (i && m.sort(function(t, e) {
                            return i(g[t], g[e])
                        }), s && _.forEach(function(t, e) {
                            t.sort(function(t, n) {
                                return s(a[e][t], a[e][n])
                            })
                        }), t = (Ai - c * o) / t, u = 0, h = -1; ++h < o;) {
                        for (f = u, d = -1; ++d < o;) {
                            var v = m[h],
                                y = _[v][d],
                                b = a[v][y],
                                w = u,
                                S = u += b * t;
                            p[v + "-" + y] = {
                                index: v,
                                subindex: y,
                                startAngle: w,
                                endAngle: S,
                                value: b
                            }
                        }
                        r[v] = {
                            index: v,
                            startAngle: f,
                            endAngle: u,
                            value: (u - f) / t
                        }, u += c
                    }
                    for (h = -1; ++h < o;)
                        for (d = h - 1; ++d < o;) {
                            var x = p[h + "-" + d],
                                C = p[d + "-" + h];
                            (x.value || C.value) && n.push(x.value < C.value ? {
                                source: C,
                                target: x
                            } : {
                                source: x,
                                target: C
                            })
                        }
                    l && e()
                }

                function e() {
                    n.sort(function(t, e) {
                        return l((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
                    })
                }
                var n, r, a, o, i, s, l, u = {},
                    c = 0;
                return u.matrix = function(t) {
                    return arguments.length ? (o = (a = t) && a.length, n = r = null, u) : a
                }, u.padding = function(t) {
                    return arguments.length ? (c = t, n = r = null, u) : c
                }, u.sortGroups = function(t) {
                    return arguments.length ? (i = t, n = r = null, u) : i
                }, u.sortSubgroups = function(t) {
                    return arguments.length ? (s = t, n = null, u) : s
                }, u.sortChords = function(t) {
                    return arguments.length ? (l = t, n && e(), u) : l
                }, u.chords = function() {
                    return n || t(), n
                }, u.groups = function() {
                    return r || t(), r
                }, u
            }, Yo.layout.force = function() {
                function t(t) {
                    return function(e, n, r, a) {
                        if (e.point !== t) {
                            var o = e.cx - t.x,
                                i = e.cy - t.y,
                                s = a - n,
                                l = o * o + i * i;
                            if (l > s * s / m) {
                                if (p > l) {
                                    var u = e.charge / l;
                                    t.px -= o * u, t.py -= i * u
                                }
                                return !0
                            }
                            if (e.point && l && p > l) {
                                var u = e.pointCharge / l;
                                t.px -= o * u, t.py -= i * u
                            }
                        }
                        return !e.charge
                    }
                }

                function e(t) {
                    t.px = Yo.event.x, t.py = Yo.event.y, s.resume()
                }
                var n, r, a, o, i, s = {},
                    l = Yo.dispatch("start", "tick", "end"),
                    u = [1, 1],
                    c = .9,
                    f = ul,
                    h = cl,
                    d = -30,
                    p = fl,
                    g = .1,
                    m = .64,
                    _ = [],
                    v = [];
                return s.tick = function() {
                    if ((r *= .99) < .005) return l.end({
                        type: "end",
                        alpha: r = 0
                    }), !0;
                    var e, n, s, f, h, p, m, y, b, w = _.length,
                        S = v.length;
                    for (n = 0; S > n; ++n) s = v[n], f = s.source, h = s.target, y = h.x - f.x, b = h.y - f.y, (p = y * y + b * b) && (p = r * o[n] * ((p = Math.sqrt(p)) - a[n]) / p, y *= p, b *= p, h.x -= y * (m = f.weight / (h.weight + f.weight)), h.y -= b * m, f.x += y * (m = 1 - m), f.y += b * m);
                    if ((m = r * g) && (y = u[0] / 2, b = u[1] / 2, n = -1, m))
                        for (; ++n < w;) s = _[n], s.x += (y - s.x) * m, s.y += (b - s.y) * m;
                    if (d)
                        for (Zr(e = Yo.geom.quadtree(_), r, i), n = -1; ++n < w;)(s = _[n]).fixed || e.visit(t(s));
                    for (n = -1; ++n < w;) s = _[n], s.fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * c, s.y -= (s.py - (s.py = s.y)) * c);
                    l.tick({
                        type: "tick",
                        alpha: r
                    })
                }, s.nodes = function(t) {
                    return arguments.length ? (_ = t, s) : _
                }, s.links = function(t) {
                    return arguments.length ? (v = t, s) : v
                }, s.size = function(t) {
                    return arguments.length ? (u = t, s) : u
                }, s.linkDistance = function(t) {
                    return arguments.length ? (f = "function" == typeof t ? t : +t, s) : f
                }, s.distance = s.linkDistance, s.linkStrength = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h
                }, s.friction = function(t) {
                    return arguments.length ? (c = +t, s) : c
                }, s.charge = function(t) {
                    return arguments.length ? (d = "function" == typeof t ? t : +t, s) : d
                }, s.chargeDistance = function(t) {
                    return arguments.length ? (p = t * t, s) : Math.sqrt(p)
                }, s.gravity = function(t) {
                    return arguments.length ? (g = +t, s) : g
                }, s.theta = function(t) {
                    return arguments.length ? (m = t * t, s) : Math.sqrt(m)
                }, s.alpha = function(t) {
                    return arguments.length ? (t = +t, r ? r = t > 0 ? t : 0 : t > 0 && (l.start({
                        type: "start",
                        alpha: r = t
                    }), Yo.timer(s.tick)), s) : r
                }, s.start = function() {
                    function t(t, r) {
                        if (!n) {
                            for (n = new Array(l), s = 0; l > s; ++s) n[s] = [];
                            for (s = 0; u > s; ++s) {
                                var a = v[s];
                                n[a.source.index].push(a.target), n[a.target.index].push(a.source)
                            }
                        }
                        for (var o, i = n[e], s = -1, u = i.length; ++s < u;)
                            if (!isNaN(o = i[s][t])) return o;
                        return Math.random() * r
                    }
                    var e, n, r, l = _.length,
                        c = v.length,
                        p = u[0],
                        g = u[1];
                    for (e = 0; l > e; ++e)(r = _[e]).index = e, r.weight = 0;
                    for (e = 0; c > e; ++e) r = v[e], "number" == typeof r.source && (r.source = _[r.source]), "number" == typeof r.target && (r.target = _[r.target]), ++r.source.weight, ++r.target.weight;
                    for (e = 0; l > e; ++e) r = _[e], isNaN(r.x) && (r.x = t("x", p)), isNaN(r.y) && (r.y = t("y", g)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
                    if (a = [], "function" == typeof f)
                        for (e = 0; c > e; ++e) a[e] = +f.call(this, v[e], e);
                    else
                        for (e = 0; c > e; ++e) a[e] = f;
                    if (o = [], "function" == typeof h)
                        for (e = 0; c > e; ++e) o[e] = +h.call(this, v[e], e);
                    else
                        for (e = 0; c > e; ++e) o[e] = h;
                    if (i = [], "function" == typeof d)
                        for (e = 0; l > e; ++e) i[e] = +d.call(this, _[e], e);
                    else
                        for (e = 0; l > e; ++e) i[e] = d;
                    return s.resume()
                }, s.resume = function() {
                    return s.alpha(.1)
                }, s.stop = function() {
                    return s.alpha(0)
                }, s.drag = function() {
                    return n || (n = Yo.behavior.drag().origin(Mt).on("dragstart.force", Vr).on("drag.force", e).on("dragend.force", Jr)), arguments.length ? void this.on("mouseover.force", Xr).on("mouseout.force", Yr).call(n) : n
                }, Yo.rebind(s, l, "on")
            };
            var ul = 20,
                cl = 1,
                fl = 1 / 0;
            Yo.layout.hierarchy = function() {
                function t(a) {
                    var o, i = [a],
                        s = [];
                    for (a.depth = 0; null != (o = i.pop());)
                        if (s.push(o), (u = n.call(t, o, o.depth)) && (l = u.length)) {
                            for (var l, u, c; --l >= 0;) i.push(c = u[l]), c.parent = o, c.depth = o.depth + 1;
                            r && (o.value = 0), o.children = u
                        } else r && (o.value = +r.call(t, o, o.depth) || 0), delete o.children;
                    return ta(a, function(t) {
                        var n, a;
                        e && (n = t.children) && n.sort(e), r && (a = t.parent) && (a.value += t.value)
                    }), s
                }
                var e = ra,
                    n = ea,
                    r = na;
                return t.sort = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.children = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.value = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t.revalue = function(e) {
                    return r && (Qr(e, function(t) {
                        t.children && (t.value = 0)
                    }), ta(e, function(e) {
                        var n;
                        e.children || (e.value = +r.call(t, e, e.depth) || 0), (n = e.parent) && (n.value += e.value)
                    })), e
                }, t
            }, Yo.layout.partition = function() {
                function t(e, n, r, a) {
                    var o = e.children;
                    if (e.x = n, e.y = e.depth * a, e.dx = r, e.dy = a, o && (i = o.length)) {
                        var i, s, l, u = -1;
                        for (r = e.value ? r / e.value : 0; ++u < i;) t(s = o[u], n, l = s.value * r, a), n += l
                    }
                }

                function e(t) {
                    var n = t.children,
                        r = 0;
                    if (n && (a = n.length))
                        for (var a, o = -1; ++o < a;) r = Math.max(r, e(n[o]));
                    return 1 + r
                }

                function n(n, o) {
                    var i = r.call(this, n, o);
                    return t(i[0], 0, a[0], a[1] / e(i[0])), i
                }
                var r = Yo.layout.hierarchy(),
                    a = [1, 1];
                return n.size = function(t) {
                    return arguments.length ? (a = t, n) : a
                }, Kr(n, r)
            }, Yo.layout.pie = function() {
                function t(o) {
                    var i = o.map(function(n, r) {
                            return +e.call(t, n, r)
                        }),
                        s = +("function" == typeof r ? r.apply(this, arguments) : r),
                        l = (("function" == typeof a ? a.apply(this, arguments) : a) - s) / Yo.sum(i),
                        u = Yo.range(o.length);
                    null != n && u.sort(n === hl ? function(t, e) {
                        return i[e] - i[t]
                    } : function(t, e) {
                        return n(o[t], o[e])
                    });
                    var c = [];
                    return u.forEach(function(t) {
                        var e;
                        c[t] = {
                            data: o[t],
                            value: e = i[t],
                            startAngle: s,
                            endAngle: s += e * l
                        }
                    }), c
                }
                var e = Number,
                    n = hl,
                    r = 0,
                    a = Ai;
                return t.value = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.sort = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.startAngle = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t.endAngle = function(e) {
                    return arguments.length ? (a = e, t) : a
                }, t
            };
            var hl = {};
            Yo.layout.stack = function() {
                function t(s, l) {
                    if (!(h = s.length)) return s;
                    var u = s.map(function(n, r) {
                            return e.call(t, n, r)
                        }),
                        c = u.map(function(e) {
                            return e.map(function(e, n) {
                                return [o.call(t, e, n), i.call(t, e, n)]
                            })
                        }),
                        f = n.call(t, c, l);
                    u = Yo.permute(u, f), c = Yo.permute(c, f);
                    var h, d, p, g, m = r.call(t, c, l),
                        _ = u[0].length;
                    for (p = 0; _ > p; ++p)
                        for (a.call(t, u[0][p], g = m[p], c[0][p][1]), d = 1; h > d; ++d) a.call(t, u[d][p], g += c[d - 1][p][1], c[d][p][1]);
                    return s
                }
                var e = Mt,
                    n = la,
                    r = ua,
                    a = sa,
                    o = oa,
                    i = ia;
                return t.values = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.order = function(e) {
                    return arguments.length ? (n = "function" == typeof e ? e : dl.get(e) || la, t) : n
                }, t.offset = function(e) {
                    return arguments.length ? (r = "function" == typeof e ? e : pl.get(e) || ua, t) : r
                }, t.x = function(e) {
                    return arguments.length ? (o = e, t) : o
                }, t.y = function(e) {
                    return arguments.length ? (i = e, t) : i
                }, t.out = function(e) {
                    return arguments.length ? (a = e, t) : a
                }, t
            };
            var dl = Yo.map({
                    "inside-out": function(t) {
                        var e, n, r = t.length,
                            a = t.map(ca),
                            o = t.map(fa),
                            i = Yo.range(r).sort(function(t, e) {
                                return a[t] - a[e]
                            }),
                            s = 0,
                            l = 0,
                            u = [],
                            c = [];
                        for (e = 0; r > e; ++e) n = i[e], l > s ? (s += o[n], u.push(n)) : (l += o[n], c.push(n));
                        return c.reverse().concat(u)
                    },
                    reverse: function(t) {
                        return Yo.range(t.length).reverse()
                    },
                    "default": la
                }),
                pl = Yo.map({
                    silhouette: function(t) {
                        var e, n, r, a = t.length,
                            o = t[0].length,
                            i = [],
                            s = 0,
                            l = [];
                        for (n = 0; o > n; ++n) {
                            for (e = 0, r = 0; a > e; e++) r += t[e][n][1];
                            r > s && (s = r), i.push(r)
                        }
                        for (n = 0; o > n; ++n) l[n] = (s - i[n]) / 2;
                        return l
                    },
                    wiggle: function(t) {
                        var e, n, r, a, o, i, s, l, u, c = t.length,
                            f = t[0],
                            h = f.length,
                            d = [];
                        for (d[0] = l = u = 0, n = 1; h > n; ++n) {
                            for (e = 0, a = 0; c > e; ++e) a += t[e][n][1];
                            for (e = 0, o = 0, s = f[n][0] - f[n - 1][0]; c > e; ++e) {
                                for (r = 0, i = (t[e][n][1] - t[e][n - 1][1]) / (2 * s); e > r; ++r) i += (t[r][n][1] - t[r][n - 1][1]) / s;
                                o += i * t[e][n][1]
                            }
                            d[n] = l -= a ? o / a * s : 0, u > l && (u = l)
                        }
                        for (n = 0; h > n; ++n) d[n] -= u;
                        return d
                    },
                    expand: function(t) {
                        var e, n, r, a = t.length,
                            o = t[0].length,
                            i = 1 / a,
                            s = [];
                        for (n = 0; o > n; ++n) {
                            for (e = 0, r = 0; a > e; e++) r += t[e][n][1];
                            if (r)
                                for (e = 0; a > e; e++) t[e][n][1] /= r;
                            else
                                for (e = 0; a > e; e++) t[e][n][1] = i
                        }
                        for (n = 0; o > n; ++n) s[n] = 0;
                        return s
                    },
                    zero: ua
                });
            Yo.layout.histogram = function() {
                function t(t, o) {
                    for (var i, s, l = [], u = t.map(n, this), c = r.call(this, u, o), f = a.call(this, c, u, o), o = -1, h = u.length, d = f.length - 1, p = e ? 1 : 1 / h; ++o < d;) i = l[o] = [], i.dx = f[o + 1] - (i.x = f[o]), i.y = 0;
                    if (d > 0)
                        for (o = -1; ++o < h;) s = u[o], s >= c[0] && s <= c[1] && (i = l[Yo.bisect(f, s, 1, d) - 1], i.y += p, i.push(t[o]));
                    return l
                }
                var e = !0,
                    n = Number,
                    r = ga,
                    a = da;
                return t.value = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.range = function(e) {
                    return arguments.length ? (r = Tt(e), t) : r
                }, t.bins = function(e) {
                    return arguments.length ? (a = "number" == typeof e ? function(t) {
                        return pa(t, e)
                    } : Tt(e), t) : a
                }, t.frequency = function(n) {
                    return arguments.length ? (e = !!n, t) : e
                }, t
            }, Yo.layout.pack = function() {
                function t(t, o) {
                    var i = n.call(this, t, o),
                        s = i[0],
                        l = a[0],
                        u = a[1],
                        c = null == e ? Math.sqrt : "function" == typeof e ? e : function() {
                            return e
                        };
                    if (s.x = s.y = 0, ta(s, function(t) {
                            t.r = +c(t.value)
                        }), ta(s, ba), r) {
                        var f = r * (e ? 1 : Math.max(2 * s.r / l, 2 * s.r / u)) / 2;
                        ta(s, function(t) {
                            t.r += f
                        }), ta(s, ba), ta(s, function(t) {
                            t.r -= f
                        })
                    }
                    return xa(s, l / 2, u / 2, e ? 1 : 1 / Math.max(2 * s.r / l, 2 * s.r / u)), i
                }
                var e, n = Yo.layout.hierarchy().sort(ma),
                    r = 0,
                    a = [1, 1];
                return t.size = function(e) {
                    return arguments.length ? (a = e, t) : a
                }, t.radius = function(n) {
                    return arguments.length ? (e = null == n || "function" == typeof n ? n : +n, t) : e
                }, t.padding = function(e) {
                    return arguments.length ? (r = +e, t) : r
                }, Kr(t, n)
            }, Yo.layout.tree = function() {
                function t(t, a) {
                    var c = i.call(this, t, a),
                        f = c[0],
                        h = e(f);
                    if (ta(h, n), h.parent.m = -h.z, Qr(h, r), u) Qr(f, o);
                    else {
                        var d = f,
                            p = f,
                            g = f;
                        Qr(f, function(t) {
                            t.x < d.x && (d = t), t.x > p.x && (p = t), t.depth > g.depth && (g = t)
                        });
                        var m = s(d, p) / 2 - d.x,
                            _ = l[0] / (p.x + s(p, d) / 2 + m),
                            v = l[1] / (g.depth || 1);
                        Qr(f, function(t) {
                            t.x = (t.x + m) * _, t.y = t.depth * v
                        })
                    }
                    return c
                }

                function e(t) {
                    for (var e, n = {
                            A: null,
                            children: [t]
                        }, r = [n]; null != (e = r.pop());)
                        for (var a, o = e.children, i = 0, s = o.length; s > i; ++i) r.push((o[i] = a = {
                            _: o[i],
                            parent: e,
                            children: (a = o[i].children) && a.slice() || [],
                            A: null,
                            a: null,
                            z: 0,
                            m: 0,
                            c: 0,
                            s: 0,
                            t: null,
                            i: i
                        }).a = a);
                    return n.children[0]
                }

                function n(t) {
                    var e = t.children,
                        n = t.parent.children,
                        r = t.i ? n[t.i - 1] : null;
                    if (e.length) {
                        Aa(t);
                        var o = (e[0].z + e[e.length - 1].z) / 2;
                        r ? (t.z = r.z + s(t._, r._), t.m = t.z - o) : t.z = o
                    } else r && (t.z = r.z + s(t._, r._));
                    t.parent.A = a(t, r, t.parent.A || n[0])
                }

                function r(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function a(t, e, n) {
                    if (e) {
                        for (var r, a = t, o = t, i = e, l = a.parent.children[0], u = a.m, c = o.m, f = i.m, h = l.m; i = Ma(i), a = Ta(a), i && a;) l = Ta(l), o = Ma(o), o.a = t, r = i.z + f - a.z - u + s(i._, a._), r > 0 && (ka(Ia(i, t, n), t, r), u += r, c += r), f += i.m, u += a.m, h += l.m, c += o.m;
                        i && !Ma(o) && (o.t = i, o.m += f - c), a && !Ta(l) && (l.t = a, l.m += u - h, n = t)
                    }
                    return n
                }

                function o(t) {
                    t.x *= l[0], t.y = t.depth * l[1]
                }
                var i = Yo.layout.hierarchy().sort(null).value(null),
                    s = Da,
                    l = [1, 1],
                    u = null;
                return t.separation = function(e) {
                    return arguments.length ? (s = e, t) : s
                }, t.size = function(e) {
                    return arguments.length ? (u = null == (l = e) ? o : null, t) : u ? null : l
                }, t.nodeSize = function(e) {
                    return arguments.length ? (u = null == (l = e) ? null : o, t) : u ? l : null
                }, Kr(t, i)
            }, Yo.layout.cluster = function() {
                function t(t, o) {
                    var i, s = e.call(this, t, o),
                        l = s[0],
                        u = 0;
                    ta(l, function(t) {
                        var e = t.children;
                        e && e.length ? (t.x = Na(e), t.y = Fa(e)) : (t.x = i ? u += n(t, i) : 0, t.y = 0, i = t)
                    });
                    var c = La(l),
                        f = Ea(l),
                        h = c.x - n(c, f) / 2,
                        d = f.x + n(f, c) / 2;
                    return ta(l, a ? function(t) {
                        t.x = (t.x - l.x) * r[0], t.y = (l.y - t.y) * r[1]
                    } : function(t) {
                        t.x = (t.x - h) / (d - h) * r[0], t.y = (1 - (l.y ? t.y / l.y : 1)) * r[1]
                    }), s
                }
                var e = Yo.layout.hierarchy().sort(null).value(null),
                    n = Da,
                    r = [1, 1],
                    a = !1;
                return t.separation = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.size = function(e) {
                    return arguments.length ? (a = null == (r = e), t) : a ? null : r
                }, t.nodeSize = function(e) {
                    return arguments.length ? (a = null != (r = e), t) : a ? r : null
                }, Kr(t, e)
            }, Yo.layout.treemap = function() {
                function t(t, e) {
                    for (var n, r, a = -1, o = t.length; ++a < o;) r = (n = t[a]).value * (0 > e ? 0 : e), n.area = isNaN(r) || 0 >= r ? 0 : r
                }

                function e(n) {
                    var o = n.children;
                    if (o && o.length) {
                        var i, s, l, u = f(n),
                            c = [],
                            h = o.slice(),
                            p = 1 / 0,
                            g = "slice" === d ? u.dx : "dice" === d ? u.dy : "slice-dice" === d ? 1 & n.depth ? u.dy : u.dx : Math.min(u.dx, u.dy);
                        for (t(h, u.dx * u.dy / n.value), c.area = 0;
                            (l = h.length) > 0;) c.push(i = h[l - 1]), c.area += i.area, "squarify" !== d || (s = r(c, g)) <= p ? (h.pop(), p = s) : (c.area -= c.pop().area, a(c, g, u, !1), g = Math.min(u.dx, u.dy), c.length = c.area = 0, p = 1 / 0);
                        c.length && (a(c, g, u, !0), c.length = c.area = 0), o.forEach(e)
                    }
                }

                function n(e) {
                    var r = e.children;
                    if (r && r.length) {
                        var o, i = f(e),
                            s = r.slice(),
                            l = [];
                        for (t(s, i.dx * i.dy / e.value), l.area = 0; o = s.pop();) l.push(o), l.area += o.area, null != o.z && (a(l, o.z ? i.dx : i.dy, i, !s.length), l.length = l.area = 0);
                        r.forEach(n)
                    }
                }

                function r(t, e) {
                    for (var n, r = t.area, a = 0, o = 1 / 0, i = -1, s = t.length; ++i < s;)(n = t[i].area) && (o > n && (o = n), n > a && (a = n));
                    return r *= r, e *= e, r ? Math.max(e * a * p / r, r / (e * o * p)) : 1 / 0
                }

                function a(t, e, n, r) {
                    var a, o = -1,
                        i = t.length,
                        s = n.x,
                        u = n.y,
                        c = e ? l(t.area / e) : 0;
                    if (e == n.dx) {
                        for ((r || c > n.dy) && (c = n.dy); ++o < i;) a = t[o], a.x = s, a.y = u, a.dy = c, s += a.dx = Math.min(n.x + n.dx - s, c ? l(a.area / c) : 0);
                        a.z = !0, a.dx += n.x + n.dx - s, n.y += c, n.dy -= c
                    } else {
                        for ((r || c > n.dx) && (c = n.dx); ++o < i;) a = t[o], a.x = s, a.y = u, a.dx = c, u += a.dy = Math.min(n.y + n.dy - u, c ? l(a.area / c) : 0);
                        a.z = !1, a.dy += n.y + n.dy - u, n.x += c, n.dx -= c
                    }
                }

                function o(r) {
                    var a = i || s(r),
                        o = a[0];
                    return o.x = 0, o.y = 0, o.dx = u[0], o.dy = u[1], i && s.revalue(o), t([o], o.dx * o.dy / o.value), (i ? n : e)(o), h && (i = a), a
                }
                var i, s = Yo.layout.hierarchy(),
                    l = Math.round,
                    u = [1, 1],
                    c = null,
                    f = Ra,
                    h = !1,
                    d = "squarify",
                    p = .5 * (1 + Math.sqrt(5));
                return o.size = function(t) {
                    return arguments.length ? (u = t, o) : u
                }, o.padding = function(t) {
                    function e(e) {
                        var n = t.call(o, e, e.depth);
                        return null == n ? Ra(e) : Pa(e, "number" == typeof n ? [n, n, n, n] : n)
                    }

                    function n(e) {
                        return Pa(e, t)
                    }
                    if (!arguments.length) return c;
                    var r;
                    return f = null == (c = t) ? Ra : "function" == (r = typeof t) ? e : "number" === r ? (t = [t, t, t, t], n) : n, o
                }, o.round = function(t) {
                    return arguments.length ? (l = t ? Math.round : Number, o) : l != Number
                }, o.sticky = function(t) {
                    return arguments.length ? (h = t, i = null, o) : h
                }, o.ratio = function(t) {
                    return arguments.length ? (p = t, o) : p
                }, o.mode = function(t) {
                    return arguments.length ? (d = t + "", o) : d
                }, Kr(o, s)
            }, Yo.random = {
                normal: function(t, e) {
                    var n = arguments.length;
                    return 2 > n && (e = 1), 1 > n && (t = 0),
                        function() {
                            var n, r, a;
                            do n = 2 * Math.random() - 1, r = 2 * Math.random() - 1, a = n * n + r * r; while (!a || a > 1);
                            return t + e * n * Math.sqrt(-2 * Math.log(a) / a)
                        }
                },
                logNormal: function() {
                    var t = Yo.random.normal.apply(Yo, arguments);
                    return function() {
                        return Math.exp(t())
                    }
                },
                bates: function(t) {
                    var e = Yo.random.irwinHall(t);
                    return function() {
                        return e() / t
                    }
                },
                irwinHall: function(t) {
                    return function() {
                        for (var e = 0, n = 0; t > n; n++) e += Math.random();
                        return e
                    }
                }
            }, Yo.scale = {};
            var gl = {
                floor: Mt,
                ceil: Mt
            };
            Yo.scale.linear = function() {
                return Ga([0, 1], [0, 1], vr, !1)
            };
            var ml = {
                s: 1,
                g: 1,
                p: 1,
                r: 1,
                e: 1
            };
            Yo.scale.log = function() {
                return Za(Yo.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var _l = Yo.format(".0e"),
                vl = {
                    floor: function(t) {
                        return -Math.ceil(-t)
                    },
                    ceil: function(t) {
                        return -Math.floor(-t)
                    }
                };
            Yo.scale.pow = function() {
                return Ka(Yo.scale.linear(), 1, [0, 1])
            }, Yo.scale.sqrt = function() {
                return Yo.scale.pow().exponent(.5)
            }, Yo.scale.ordinal = function() {
                return to([], {
                    t: "range",
                    a: [
                        []
                    ]
                })
            }, Yo.scale.category10 = function() {
                return Yo.scale.ordinal().range(yl)
            }, Yo.scale.category20 = function() {
                return Yo.scale.ordinal().range(bl)
            }, Yo.scale.category20b = function() {
                return Yo.scale.ordinal().range(wl)
            }, Yo.scale.category20c = function() {
                return Yo.scale.ordinal().range(Sl)
            };
            var yl = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(yt),
                bl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(yt),
                wl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(yt),
                Sl = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(yt);
            Yo.scale.quantile = function() {
                return eo([], [])
            }, Yo.scale.quantize = function() {
                return no(0, 1, [0, 1])
            }, Yo.scale.threshold = function() {
                return ro([.5], [0, 1])
            }, Yo.scale.identity = function() {
                return ao([0, 1])
            }, Yo.svg = {}, Yo.svg.arc = function() {
                function t() {
                    var t = e.apply(this, arguments),
                        o = n.apply(this, arguments),
                        i = r.apply(this, arguments) + xl,
                        s = a.apply(this, arguments) + xl,
                        l = (i > s && (l = i, i = s, s = l), s - i),
                        u = ki > l ? "0" : "1",
                        c = Math.cos(i),
                        f = Math.sin(i),
                        h = Math.cos(s),
                        d = Math.sin(s);
                    return l >= Cl ? t ? "M0," + o + "A" + o + "," + o + " 0 1,1 0," + -o + "A" + o + "," + o + " 0 1,1 0," + o + "M0," + t + "A" + t + "," + t + " 0 1,0 0," + -t + "A" + t + "," + t + " 0 1,0 0," + t + "Z" : "M0," + o + "A" + o + "," + o + " 0 1,1 0," + -o + "A" + o + "," + o + " 0 1,1 0," + o + "Z" : t ? "M" + o * c + "," + o * f + "A" + o + "," + o + " 0 " + u + ",1 " + o * h + "," + o * d + "L" + t * h + "," + t * d + "A" + t + "," + t + " 0 " + u + ",0 " + t * c + "," + t * f + "Z" : "M" + o * c + "," + o * f + "A" + o + "," + o + " 0 " + u + ",1 " + o * h + "," + o * d + "L0,0Z"
                }
                var e = oo,
                    n = io,
                    r = so,
                    a = lo;
                return t.innerRadius = function(n) {
                    return arguments.length ? (e = Tt(n), t) : e
                }, t.outerRadius = function(e) {
                    return arguments.length ? (n = Tt(e), t) : n
                }, t.startAngle = function(e) {
                    return arguments.length ? (r = Tt(e), t) : r
                }, t.endAngle = function(e) {
                    return arguments.length ? (a = Tt(e), t) : a
                }, t.centroid = function() {
                    var t = (e.apply(this, arguments) + n.apply(this, arguments)) / 2,
                        o = (r.apply(this, arguments) + a.apply(this, arguments)) / 2 + xl;
                    return [Math.cos(o) * t, Math.sin(o) * t]
                }, t
            };
            var xl = -Ii,
                Cl = Ai - Fi;
            Yo.svg.line = function() {
                return uo(Mt)
            };
            var Dl = Yo.map({
                linear: co,
                "linear-closed": fo,
                step: ho,
                "step-before": po,
                "step-after": go,
                basis: wo,
                "basis-open": So,
                "basis-closed": xo,
                bundle: Co,
                cardinal: vo,
                "cardinal-open": mo,
                "cardinal-closed": _o,
                monotone: Io
            });
            Dl.forEach(function(t, e) {
                e.key = t, e.closed = /-closed$/.test(t)
            });
            var Tl = [0, 2 / 3, 1 / 3, 0],
                Ml = [0, 1 / 3, 2 / 3, 0],
                kl = [0, 1 / 6, 2 / 3, 1 / 6];
            Yo.svg.line.radial = function() {
                var t = uo(Fo);
                return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
            }, po.reverse = go, go.reverse = po, Yo.svg.area = function() {
                return No(Mt)
            }, Yo.svg.area.radial = function() {
                var t = No(Fo);
                return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
            }, Yo.svg.chord = function() {
                function t(t, s) {
                    var l = e(this, o, t, s),
                        u = e(this, i, t, s);
                    return "M" + l.p0 + r(l.r, l.p1, l.a1 - l.a0) + (n(l, u) ? a(l.r, l.p1, l.r, l.p0) : a(l.r, l.p1, u.r, u.p0) + r(u.r, u.p1, u.a1 - u.a0) + a(u.r, u.p1, l.r, l.p0)) + "Z"
                }

                function e(t, e, n, r) {
                    var a = e.call(t, n, r),
                        o = s.call(t, a, r),
                        i = l.call(t, a, r) + xl,
                        c = u.call(t, a, r) + xl;
                    return {
                        r: o,
                        a0: i,
                        a1: c,
                        p0: [o * Math.cos(i), o * Math.sin(i)],
                        p1: [o * Math.cos(c), o * Math.sin(c)]
                    }
                }

                function n(t, e) {
                    return t.a0 == e.a0 && t.a1 == e.a1
                }

                function r(t, e, n) {
                    return "A" + t + "," + t + " 0 " + +(n > ki) + ",1 " + e
                }

                function a(t, e, n, r) {
                    return "Q 0,0 " + r
                }
                var o = yn,
                    i = bn,
                    s = Lo,
                    l = so,
                    u = lo;
                return t.radius = function(e) {
                    return arguments.length ? (s = Tt(e), t) : s
                }, t.source = function(e) {
                    return arguments.length ? (o = Tt(e), t) : o
                }, t.target = function(e) {
                    return arguments.length ? (i = Tt(e), t) : i
                }, t.startAngle = function(e) {
                    return arguments.length ? (l = Tt(e), t) : l
                }, t.endAngle = function(e) {
                    return arguments.length ? (u = Tt(e), t) : u
                }, t
            }, Yo.svg.diagonal = function() {
                function t(t, a) {
                    var o = e.call(this, t, a),
                        i = n.call(this, t, a),
                        s = (o.y + i.y) / 2,
                        l = [o, {
                            x: o.x,
                            y: s
                        }, {
                            x: i.x,
                            y: s
                        }, i];
                    return l = l.map(r), "M" + l[0] + "C" + l[1] + " " + l[2] + " " + l[3]
                }
                var e = yn,
                    n = bn,
                    r = Eo;
                return t.source = function(n) {
                    return arguments.length ? (e = Tt(n), t) : e
                }, t.target = function(e) {
                    return arguments.length ? (n = Tt(e), t) : n
                }, t.projection = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t
            }, Yo.svg.diagonal.radial = function() {
                var t = Yo.svg.diagonal(),
                    e = Eo,
                    n = t.projection;
                return t.projection = function(t) {
                    return arguments.length ? n(Ro(e = t)) : e
                }, t
            }, Yo.svg.symbol = function() {
                function t(t, r) {
                    return (Al.get(e.call(this, t, r)) || Ho)(n.call(this, t, r))
                }
                var e = $o,
                    n = Po;
                return t.type = function(n) {
                    return arguments.length ? (e = Tt(n), t) : e
                }, t.size = function(e) {
                    return arguments.length ? (n = Tt(e), t) : n
                }, t
            };
            var Al = Yo.map({
                circle: Ho,
                cross: function(t) {
                    var e = Math.sqrt(t / 5) / 2;
                    return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
                },
                diamond: function(t) {
                    var e = Math.sqrt(t / (2 * Ll)),
                        n = e * Ll;
                    return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
                },
                square: function(t) {
                    var e = Math.sqrt(t) / 2;
                    return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
                },
                "triangle-down": function(t) {
                    var e = Math.sqrt(t / Nl),
                        n = e * Nl / 2;
                    return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
                },
                "triangle-up": function(t) {
                    var e = Math.sqrt(t / Nl),
                        n = e * Nl / 2;
                    return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
                }
            });
            Yo.svg.symbolTypes = Al.keys();
            var Il, Fl, Nl = Math.sqrt(3),
                Ll = Math.tan(30 * Li),
                El = [],
                Rl = 0;
            El.call = bi.call, El.empty = bi.empty, El.node = bi.node, El.size = bi.size, Yo.transition = function(t) {
                return arguments.length ? Il ? t.transition() : t : xi.transition()
            }, Yo.transition.prototype = El, El.select = function(t) {
                var e, n, r, a = this.id,
                    o = [];
                t = T(t);
                for (var i = -1, s = this.length; ++i < s;) {
                    o.push(e = []);
                    for (var l = this[i], u = -1, c = l.length; ++u < c;)(r = l[u]) && (n = t.call(r, r.__data__, u, i)) ? ("__data__" in r && (n.__data__ = r.__data__), jo(n, u, a, r.__transition__[a]), e.push(n)) : e.push(null)
                }
                return Uo(o, a)
            }, El.selectAll = function(t) {
                var e, n, r, a, o, i = this.id,
                    s = [];
                t = M(t);
                for (var l = -1, u = this.length; ++l < u;)
                    for (var c = this[l], f = -1, h = c.length; ++f < h;)
                        if (r = c[f]) {
                            o = r.__transition__[i], n = t.call(r, r.__data__, f, l), s.push(e = []);
                            for (var d = -1, p = n.length; ++d < p;)(a = n[d]) && jo(a, d, i, o), e.push(a)
                        }
                return Uo(s, i)
            }, El.filter = function(t) {
                var e, n, r, a = [];
                "function" != typeof t && (t = H(t));
                for (var o = 0, i = this.length; i > o; o++) {
                    a.push(e = []);
                    for (var n = this[o], s = 0, l = n.length; l > s; s++)(r = n[s]) && t.call(r, r.__data__, s, o) && e.push(r)
                }
                return Uo(a, this.id)
            }, El.tween = function(t, e) {
                var n = this.id;
                return arguments.length < 2 ? this.node().__transition__[n].tween.get(t) : B(this, null == e ? function(e) {
                    e.__transition__[n].tween.remove(t)
                } : function(r) {
                    r.__transition__[n].tween.set(t, e)
                })
            }, El.attr = function(t, e) {
                function n() {
                    this.removeAttribute(s)
                }

                function r() {
                    this.removeAttributeNS(s.space, s.local)
                }

                function a(t) {
                    return null == t ? n : (t += "", function() {
                        var e, n = this.getAttribute(s);
                        return n !== t && (e = i(n, t), function(t) {
                            this.setAttribute(s, e(t))
                        })
                    })
                }

                function o(t) {
                    return null == t ? r : (t += "", function() {
                        var e, n = this.getAttributeNS(s.space, s.local);
                        return n !== t && (e = i(n, t), function(t) {
                            this.setAttributeNS(s.space, s.local, e(t))
                        })
                    })
                }
                if (arguments.length < 2) {
                    for (e in t) this.attr(e, t[e]);
                    return this
                }
                var i = "transform" == t ? Or : vr,
                    s = Yo.ns.qualify(t);
                return Bo(this, "attr." + t, e, s.local ? o : a)
            }, El.attrTween = function(t, e) {
                function n(t, n) {
                    var r = e.call(this, t, n, this.getAttribute(a));
                    return r && function(t) {
                        this.setAttribute(a, r(t))
                    }
                }

                function r(t, n) {
                    var r = e.call(this, t, n, this.getAttributeNS(a.space, a.local));
                    return r && function(t) {
                        this.setAttributeNS(a.space, a.local, r(t))
                    }
                }
                var a = Yo.ns.qualify(t);
                return this.tween("attr." + t, a.local ? r : n)
            }, El.style = function(t, e, n) {
                function r() {
                    this.style.removeProperty(t)
                }

                function a(e) {
                    return null == e ? r : (e += "", function() {
                        var r, a = ei.getComputedStyle(this, null).getPropertyValue(t);
                        return a !== e && (r = vr(a, e), function(e) {
                            this.style.setProperty(t, r(e), n)
                        })
                    })
                }
                var o = arguments.length;
                if (3 > o) {
                    if ("string" != typeof t) {
                        2 > o && (e = "");
                        for (n in t) this.style(n, t[n], e);
                        return this
                    }
                    n = ""
                }
                return Bo(this, "style." + t, e, a)
            }, El.styleTween = function(t, e, n) {
                function r(r, a) {
                    var o = e.call(this, r, a, ei.getComputedStyle(this, null).getPropertyValue(t));
                    return o && function(e) {
                        this.style.setProperty(t, o(e), n)
                    }
                }
                return arguments.length < 3 && (n = ""), this.tween("style." + t, r)
            }, El.text = function(t) {
                return Bo(this, "text", t, Oo)
            }, El.remove = function() {
                return this.each("end.transition", function() {
                    var t;
                    this.__transition__.count < 2 && (t = this.parentNode) && t.removeChild(this)
                })
            }, El.ease = function(t) {
                var e = this.id;
                return arguments.length < 1 ? this.node().__transition__[e].ease : ("function" != typeof t && (t = Yo.ease.apply(Yo, arguments)), B(this, function(n) {
                    n.__transition__[e].ease = t
                }))
            }, El.delay = function(t) {
                var e = this.id;
                return arguments.length < 1 ? this.node().__transition__[e].delay : B(this, "function" == typeof t ? function(n, r, a) {
                    n.__transition__[e].delay = +t.call(n, n.__data__, r, a)
                } : (t = +t, function(n) {
                    n.__transition__[e].delay = t
                }))
            }, El.duration = function(t) {
                var e = this.id;
                return arguments.length < 1 ? this.node().__transition__[e].duration : B(this, "function" == typeof t ? function(n, r, a) {
                    n.__transition__[e].duration = Math.max(1, t.call(n, n.__data__, r, a))
                } : (t = Math.max(1, t), function(n) {
                    n.__transition__[e].duration = t
                }))
            }, El.each = function(t, e) {
                var n = this.id;
                if (arguments.length < 2) {
                    var r = Fl,
                        a = Il;
                    Il = n, B(this, function(e, r, a) {
                        Fl = e.__transition__[n], t.call(e, e.__data__, r, a)
                    }), Fl = r, Il = a
                } else B(this, function(r) {
                    var a = r.__transition__[n];
                    (a.event || (a.event = Yo.dispatch("start", "end"))).on(t, e)
                });
                return this
            }, El.transition = function() {
                for (var t, e, n, r, a = this.id, o = ++Rl, i = [], s = 0, l = this.length; l > s; s++) {
                    i.push(t = []);
                    for (var e = this[s], u = 0, c = e.length; c > u; u++)(n = e[u]) && (r = Object.create(n.__transition__[a]), r.delay += r.duration, jo(n, u, o, r)), t.push(n)
                }
                return Uo(i, o)
            }, Yo.svg.axis = function() {
                function t(t) {
                    t.each(function() {
                        var t, u = Yo.select(this),
                            c = this.__chart__ || n,
                            f = this.__chart__ = n.copy(),
                            h = null == l ? f.ticks ? f.ticks.apply(f, s) : f.domain() : l,
                            d = null == e ? f.tickFormat ? f.tickFormat.apply(f, s) : Mt : e,
                            p = u.selectAll(".tick").data(h, f),
                            g = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Fi),
                            m = Yo.transition(p.exit()).style("opacity", Fi).remove(),
                            _ = Yo.transition(p.order()).style("opacity", 1),
                            v = Math.max(a, 0) + i,
                            y = Ha(f),
                            b = u.selectAll(".domain").data([0]),
                            w = (b.enter().append("path").attr("class", "domain"), Yo.transition(b));
                        g.append("line"), g.append("text");
                        var S, x, C, D, T = g.select("line"),
                            M = _.select("line"),
                            k = p.select("text").text(d),
                            A = g.select("text"),
                            I = _.select("text"),
                            F = "top" === r || "left" === r ? -1 : 1;
                        if ("bottom" === r || "top" === r ? (t = Go, S = "x", C = "y", x = "x2", D = "y2", k.attr("dy", 0 > F ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + y[0] + "," + F * o + "V0H" + y[1] + "V" + F * o)) : (t = zo, S = "y", C = "x", x = "y2", D = "x2", k.attr("dy", ".32em").style("text-anchor", 0 > F ? "end" : "start"), w.attr("d", "M" + F * o + "," + y[0] + "H0V" + y[1] + "H" + F * o)), T.attr(D, F * a), A.attr(C, F * v), M.attr(x, 0).attr(D, F * a), I.attr(S, 0).attr(C, F * v), f.rangeBand) {
                            var N = f,
                                L = N.rangeBand() / 2;
                            c = f = function(t) {
                                return N(t) + L
                            }
                        } else c.rangeBand ? c = f : m.call(t, f, c);
                        g.call(t, c, f), _.call(t, f, f)
                    })
                }
                var e, n = Yo.scale.linear(),
                    r = Pl,
                    a = 6,
                    o = 6,
                    i = 3,
                    s = [10],
                    l = null;
                return t.scale = function(e) {
                    return arguments.length ? (n = e, t) : n
                }, t.orient = function(e) {
                    return arguments.length ? (r = e in $l ? e + "" : Pl, t) : r
                }, t.ticks = function() {
                    return arguments.length ? (s = arguments, t) : s
                }, t.tickValues = function(e) {
                    return arguments.length ? (l = e, t) : l
                }, t.tickFormat = function(n) {
                    return arguments.length ? (e = n, t) : e
                }, t.tickSize = function(e) {
                    var n = arguments.length;
                    return n ? (a = +e, o = +arguments[n - 1], t) : a
                }, t.innerTickSize = function(e) {
                    return arguments.length ? (a = +e, t) : a
                }, t.outerTickSize = function(e) {
                    return arguments.length ? (o = +e, t) : o
                }, t.tickPadding = function(e) {
                    return arguments.length ? (i = +e, t) : i
                }, t.tickSubdivide = function() {
                    return arguments.length && t
                }, t
            };
            var Pl = "bottom",
                $l = {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                };
            Yo.svg.brush = function() {
                function t(o) {
                    o.each(function() {
                        var o = Yo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", a).on("touchstart.brush", a),
                            i = o.selectAll(".background").data([0]);
                        i.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), o.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var s = o.selectAll(".resize").data(p, Mt);
                        s.exit().remove(), s.enter().append("g").attr("class", function(t) {
                            return "resize " + t
                        }).style("cursor", function(t) {
                            return Hl[t]
                        }).append("rect").attr("x", function(t) {
                            return /[ew]$/.test(t) ? -3 : null
                        }).attr("y", function(t) {
                            return /^[ns]/.test(t) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", t.empty() ? "none" : null);
                        var c, f = Yo.transition(o),
                            h = Yo.transition(i);
                        l && (c = Ha(l), h.attr("x", c[0]).attr("width", c[1] - c[0]), n(f)), u && (c = Ha(u), h.attr("y", c[0]).attr("height", c[1] - c[0]), r(f)), e(f)
                    })
                }

                function e(t) {
                    t.selectAll(".resize").attr("transform", function(t) {
                        return "translate(" + c[+/e$/.test(t)] + "," + f[+/^s/.test(t)] + ")"
                    })
                }

                function n(t) {
                    t.select(".extent").attr("x", c[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", c[1] - c[0])
                }

                function r(t) {
                    t.select(".extent").attr("y", f[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
                }

                function a() {
                    function a() {
                        32 == Yo.event.keyCode && (k || (v = null, I[0] -= c[1], I[1] -= f[1], k = 2), S())
                    }

                    function p() {
                        32 == Yo.event.keyCode && 2 == k && (I[0] += c[1], I[1] += f[1], k = 0, S())
                    }

                    function g() {
                        var t = Yo.mouse(b),
                            a = !1;
                        y && (t[0] += y[0], t[1] += y[1]), k || (Yo.event.altKey ? (v || (v = [(c[0] + c[1]) / 2, (f[0] + f[1]) / 2]), I[0] = c[+(t[0] < v[0])], I[1] = f[+(t[1] < v[1])]) : v = null), T && m(t, l, 0) && (n(C), a = !0), M && m(t, u, 1) && (r(C), a = !0), a && (e(C), x({
                            type: "brush",
                            mode: k ? "move" : "resize"
                        }))
                    }

                    function m(t, e, n) {
                        var r, a, s = Ha(e),
                            l = s[0],
                            u = s[1],
                            p = I[n],
                            g = n ? f : c,
                            m = g[1] - g[0];
                        return k && (l -= p, u -= m + p), r = (n ? d : h) ? Math.max(l, Math.min(u, t[n])) : t[n], k ? a = (r += p) + m : (v && (p = Math.max(l, Math.min(u, 2 * v[n] - r))), r > p ? (a = r, r = p) : a = p), g[0] != r || g[1] != a ? (n ? i = null : o = null, g[0] = r, g[1] = a, !0) : void 0
                    }

                    function _() {
                        g(), C.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), Yo.select("body").style("cursor", null), F.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), A(), x({
                            type: "brushend"
                        })
                    }
                    var v, y, b = this,
                        w = Yo.select(Yo.event.target),
                        x = s.of(b, arguments),
                        C = Yo.select(b),
                        D = w.datum(),
                        T = !/^(n|s)$/.test(D) && l,
                        M = !/^(e|w)$/.test(D) && u,
                        k = w.classed("extent"),
                        A = V(),
                        I = Yo.mouse(b),
                        F = Yo.select(ei).on("keydown.brush", a).on("keyup.brush", p);
                    if (Yo.event.changedTouches ? F.on("touchmove.brush", g).on("touchend.brush", _) : F.on("mousemove.brush", g).on("mouseup.brush", _), C.interrupt().selectAll("*").interrupt(), k) I[0] = c[0] - I[0], I[1] = f[0] - I[1];
                    else if (D) {
                        var N = +/w$/.test(D),
                            L = +/^n/.test(D);
                        y = [c[1 - N] - I[0], f[1 - L] - I[1]], I[0] = c[N], I[1] = f[L]
                    } else Yo.event.altKey && (v = I.slice());
                    C.style("pointer-events", "none").selectAll(".resize").style("display", null), Yo.select("body").style("cursor", w.style("cursor")), x({
                        type: "brushstart"
                    }), g()
                }
                var o, i, s = C(t, "brushstart", "brush", "brushend"),
                    l = null,
                    u = null,
                    c = [0, 0],
                    f = [0, 0],
                    h = !0,
                    d = !0,
                    p = Ul[0];
                return t.event = function(t) {
                    t.each(function() {
                        var t = s.of(this, arguments),
                            e = {
                                x: c,
                                y: f,
                                i: o,
                                j: i
                            },
                            n = this.__chart__ || e;
                        this.__chart__ = e, Il ? Yo.select(this).transition().each("start.brush", function() {
                            o = n.i, i = n.j, c = n.x, f = n.y, t({
                                type: "brushstart"
                            })
                        }).tween("brush:brush", function() {
                            var n = yr(c, e.x),
                                r = yr(f, e.y);
                            return o = i = null,
                                function(a) {
                                    c = e.x = n(a), f = e.y = r(a), t({
                                        type: "brush",
                                        mode: "resize"
                                    })
                                }
                        }).each("end.brush", function() {
                            o = e.i, i = e.j, t({
                                type: "brush",
                                mode: "resize"
                            }), t({
                                type: "brushend"
                            })
                        }) : (t({
                            type: "brushstart"
                        }), t({
                            type: "brush",
                            mode: "resize"
                        }), t({
                            type: "brushend"
                        }))
                    })
                }, t.x = function(e) {
                    return arguments.length ? (l = e, p = Ul[!l << 1 | !u], t) : l
                }, t.y = function(e) {
                    return arguments.length ? (u = e, p = Ul[!l << 1 | !u], t) : u
                }, t.clamp = function(e) {
                    return arguments.length ? (l && u ? (h = !!e[0], d = !!e[1]) : l ? h = !!e : u && (d = !!e), t) : l && u ? [h, d] : l ? h : u ? d : null
                }, t.extent = function(e) {
                    var n, r, a, s, h;
                    return arguments.length ? (l && (n = e[0], r = e[1], u && (n = n[0], r = r[0]), o = [n, r], l.invert && (n = l(n), r = l(r)), n > r && (h = n, n = r, r = h), (n != c[0] || r != c[1]) && (c = [n, r])), u && (a = e[0], s = e[1], l && (a = a[1], s = s[1]), i = [a, s], u.invert && (a = u(a), s = u(s)), a > s && (h = a, a = s, s = h), (a != f[0] || s != f[1]) && (f = [a, s])), t) : (l && (o ? (n = o[0], r = o[1]) : (n = c[0], r = c[1], l.invert && (n = l.invert(n), r = l.invert(r)), n > r && (h = n, n = r, r = h))), u && (i ? (a = i[0], s = i[1]) : (a = f[0], s = f[1], u.invert && (a = u.invert(a), s = u.invert(s)), a > s && (h = a, a = s, s = h))), l && u ? [
                        [n, a],
                        [r, s]
                    ] : l ? [n, r] : u && [a, s])
                }, t.clear = function() {
                    return t.empty() || (c = [0, 0], f = [0, 0], o = i = null), t
                }, t.empty = function() {
                    return !!l && c[0] == c[1] || !!u && f[0] == f[1]
                }, Yo.rebind(t, s, "on")
            };
            var Hl = {
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                },
                Ul = [
                    ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                    ["e", "w"],
                    ["n", "s"],
                    []
                ],
                Bl = os.format = fs.timeFormat,
                Ol = Bl.utc,
                jl = Ol("%Y-%m-%dT%H:%M:%S.%LZ");
            Bl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? qo : jl, qo.parse = function(t) {
                var e = new Date(t);
                return isNaN(e) ? null : e
            }, qo.toString = jl.toString, os.second = Bt(function(t) {
                return new is(1e3 * Math.floor(t / 1e3))
            }, function(t, e) {
                t.setTime(t.getTime() + 1e3 * Math.floor(e))
            }, function(t) {
                return t.getSeconds()
            }), os.seconds = os.second.range, os.seconds.utc = os.second.utc.range, os.minute = Bt(function(t) {
                return new is(6e4 * Math.floor(t / 6e4))
            }, function(t, e) {
                t.setTime(t.getTime() + 6e4 * Math.floor(e))
            }, function(t) {
                return t.getMinutes()
            }), os.minutes = os.minute.range, os.minutes.utc = os.minute.utc.range, os.hour = Bt(function(t) {
                var e = t.getTimezoneOffset() / 60;
                return new is(36e5 * (Math.floor(t / 36e5 - e) + e))
            }, function(t, e) {
                t.setTime(t.getTime() + 36e5 * Math.floor(e))
            }, function(t) {
                return t.getHours()
            }), os.hours = os.hour.range, os.hours.utc = os.hour.utc.range, os.month = Bt(function(t) {
                return t = os.day(t), t.setDate(1), t
            }, function(t, e) {
                t.setMonth(t.getMonth() + e)
            }, function(t) {
                return t.getMonth()
            }), os.months = os.month.range, os.months.utc = os.month.utc.range;
            var Gl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                zl = [
                    [os.second, 1],
                    [os.second, 5],
                    [os.second, 15],
                    [os.second, 30],
                    [os.minute, 1],
                    [os.minute, 5],
                    [os.minute, 15],
                    [os.minute, 30],
                    [os.hour, 1],
                    [os.hour, 3],
                    [os.hour, 6],
                    [os.hour, 12],
                    [os.day, 1],
                    [os.day, 2],
                    [os.week, 1],
                    [os.month, 1],
                    [os.month, 3],
                    [os.year, 1]
                ],
                ql = Bl.multi([
                    [".%L", function(t) {
                        return t.getMilliseconds()
                    }],
                    [":%S", function(t) {
                        return t.getSeconds()
                    }],
                    ["%I:%M", function(t) {
                        return t.getMinutes()
                    }],
                    ["%I %p", function(t) {
                        return t.getHours()
                    }],
                    ["%a %d", function(t) {
                        return t.getDay() && 1 != t.getDate()
                    }],
                    ["%b %d", function(t) {
                        return 1 != t.getDate()
                    }],
                    ["%B", function(t) {
                        return t.getMonth()
                    }],
                    ["%Y", ke]
                ]),
                Wl = {
                    range: function(t, e, n) {
                        return Yo.range(Math.ceil(t / n) * n, +e, n).map(Vo)
                    },
                    floor: Mt,
                    ceil: Mt
                };
            zl.year = os.year, os.scale = function() {
                return Wo(Yo.scale.linear(), zl, ql)
            };
            var Vl = zl.map(function(t) {
                    return [t[0].utc, t[1]]
                }),
                Jl = Ol.multi([
                    [".%L", function(t) {
                        return t.getUTCMilliseconds()
                    }],
                    [":%S", function(t) {
                        return t.getUTCSeconds()
                    }],
                    ["%I:%M", function(t) {
                        return t.getUTCMinutes()
                    }],
                    ["%I %p", function(t) {
                        return t.getUTCHours()
                    }],
                    ["%a %d", function(t) {
                        return t.getUTCDay() && 1 != t.getUTCDate()
                    }],
                    ["%b %d", function(t) {
                        return 1 != t.getUTCDate()
                    }],
                    ["%B", function(t) {
                        return t.getUTCMonth()
                    }],
                    ["%Y", ke]
                ]);
            Vl.year = os.year.utc, os.scale.utc = function() {
                return Wo(Yo.scale.linear(), Vl, Jl)
            }, Yo.text = kt(function(t) {
                return t.responseText
            }), Yo.json = function(t, e) {
                return At(t, "application/json", Jo, e)
            }, Yo.html = function(t, e) {
                return At(t, "text/html", Xo, e)
            }, Yo.xml = kt(function(t) {
                return t.responseXML
            }), "function" == typeof define && define.amd ? define(Yo) : "object" == typeof e && e.exports && (e.exports = Yo), this.d3 = Yo
        }()
    }, {}],
    2: [function(t, e, n) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function a(t) {
            return "function" == typeof t
        }

        function o(t) {
            return "number" == typeof t
        }

        function i(t) {
            return "object" == typeof t && null !== t
        }

        function s(t) {
            return void 0 === t
        }
        e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(t) {
            if (!o(t) || 0 > t || isNaN(t)) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, r.prototype.emit = function(t) {
            var e, n, r, o, l, u;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if (e = arguments[1], e instanceof Error) throw e;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if (n = this._events[t], s(n)) return !1;
            if (a(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    for (r = arguments.length, o = new Array(r - 1), l = 1; r > l; l++) o[l - 1] = arguments[l];
                    n.apply(this, o)
            } else if (i(n)) {
                for (r = arguments.length, o = new Array(r - 1), l = 1; r > l; l++) o[l - 1] = arguments[l];
                for (u = n.slice(), r = u.length, l = 0; r > l; l++) u[l].apply(this, o)
            }
            return !0
        }, r.prototype.addListener = function(t, e) {
            var n;
            if (!a(e)) throw TypeError("listener must be a function");
            if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, a(e.listener) ? e.listener : e), this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i(this._events[t]) && !this._events[t].warned) {
                var n;
                n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[t].length > n && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())
            }
            return this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(t, e) {
            function n() {
                this.removeListener(t, n), r || (r = !0, e.apply(this, arguments))
            }
            if (!a(e)) throw TypeError("listener must be a function");
            var r = !1;
            return n.listener = e, this.on(t, n), this
        }, r.prototype.removeListener = function(t, e) {
            var n, r, o, s;
            if (!a(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (n = this._events[t], o = n.length, r = -1, n === e || a(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
            else if (i(n)) {
                for (s = o; s-- > 0;)
                    if (n[s] === e || n[s].listener && n[s].listener === e) {
                        r = s;
                        break
                    }
                if (0 > r) return this;
                1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, r.prototype.removeAllListeners = function(t) {
            var e, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[t], a(n)) this.removeListener(t, n);
            else
                for (; n.length;) this.removeListener(t, n[n.length - 1]);
            return delete this._events[t], this
        }, r.prototype.listeners = function(t) {
            var e;
            return e = this._events && this._events[t] ? a(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, r.listenerCount = function(t, e) {
            var n;
            return n = t._events && t._events[e] ? a(t._events[e]) ? 1 : t._events[e].length : 0
        }
    }, {}],
    3: [function(t, e, n) {
        "function" == typeof Object.create ? e.exports = function(t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function(t, e) {
            t.super_ = e;
            var n = function() {};
            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
        }
    }, {}],
    4: [function(t, e, n) {
        (function(t) {
            (function() {
                function r(t, e, n) {
                    for (var r = (n || 0) - 1, a = t ? t.length : 0; ++r < a;)
                        if (t[r] === e) return r;
                    return -1
                }

                function a(t, e) {
                    var n = typeof e;
                    if (t = t.cache, "boolean" == n || null == e) return t[e] ? 0 : -1;
                    "number" != n && "string" != n && (n = "object");
                    var a = "number" == n ? e : b + e;
                    return t = (t = t[n]) && t[a], "object" == n ? t && r(t, e) > -1 ? 0 : -1 : t ? 0 : -1
                }

                function o(t) {
                    var e = this.cache,
                        n = typeof t;
                    if ("boolean" == n || null == t) e[t] = !0;
                    else {
                        "number" != n && "string" != n && (n = "object");
                        var r = "number" == n ? t : b + t,
                            a = e[n] || (e[n] = {});
                        "object" == n ? (a[r] || (a[r] = [])).push(t) : a[r] = !0
                    }
                }

                function i(t) {
                    return t.charCodeAt(0)
                }

                function s(t, e) {
                    for (var n = t.criteria, r = e.criteria, a = -1, o = n.length; ++a < o;) {
                        var i = n[a],
                            s = r[a];
                        if (i !== s) {
                            if (i > s || "undefined" == typeof i) return 1;
                            if (s > i || "undefined" == typeof s) return -1
                        }
                    }
                    return t.index - e.index
                }

                function l(t) {
                    var e = -1,
                        n = t.length,
                        r = t[0],
                        a = t[n / 2 | 0],
                        i = t[n - 1];
                    if (r && "object" == typeof r && a && "object" == typeof a && i && "object" == typeof i) return !1;
                    var s = f();
                    s["false"] = s["null"] = s["true"] = s.undefined = !1;
                    var l = f();
                    for (l.array = t, l.cache = s, l.push = o; ++e < n;) l.push(t[e]);
                    return l
                }

                function u(t) {
                    return "\\" + Y[t]
                }

                function c() {
                    return _.pop() || []
                }

                function f() {
                    return v.pop() || {
                        array: null,
                        cache: null,
                        criteria: null,
                        "false": !1,
                        index: 0,
                        "null": !1,
                        number: null,
                        object: null,
                        push: null,
                        string: null,
                        "true": !1,
                        undefined: !1,
                        value: null
                    }
                }

                function h(t) {
                    t.length = 0, _.length < S && _.push(t)
                }

                function d(t) {
                    var e = t.cache;
                    e && d(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, v.length < S && v.push(t)
                }

                function p(t, e, n) {
                    e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
                    for (var r = -1, a = n - e || 0, o = Array(0 > a ? 0 : a); ++r < a;) o[r] = t[e + r];
                    return o
                }

                function g(t) {
                    function e(t) {
                        return t && "object" == typeof t && !Kn(t) && En.call(t, "__wrapped__") ? t : new n(t)
                    }

                    function n(t, e) {
                        this.__chain__ = !!e, this.__wrapped__ = t
                    }

                    function o(t) {
                        function e() {
                            if (r) {
                                var t = p(r);
                                Rn.apply(t, arguments)
                            }
                            if (this instanceof e) {
                                var o = v(n.prototype),
                                    i = n.apply(o, t || arguments);
                                return It(i) ? i : o
                            }
                            return n.apply(a, t || arguments)
                        }
                        var n = t[0],
                            r = t[2],
                            a = t[4];
                        return Zn(e, t), e
                    }

                    function _(t, e, n, r, a) {
                        if (n) {
                            var o = n(t);
                            if ("undefined" != typeof o) return o
                        }
                        var i = It(t);
                        if (!i) return t;
                        var s = Mn.call(t);
                        if (!W[s]) return t;
                        var l = Xn[s];
                        switch (s) {
                            case U:
                            case B:
                                return new l(+t);
                            case j:
                            case q:
                                return new l(t);
                            case z:
                                return o = l(t.source, k.exec(t)), o.lastIndex = t.lastIndex, o
                        }
                        var u = Kn(t);
                        if (e) {
                            var f = !r;
                            r || (r = c()), a || (a = c());
                            for (var d = r.length; d--;)
                                if (r[d] == t) return a[d];
                            o = u ? l(t.length) : {}
                        } else o = u ? p(t) : or({}, t);
                        return u && (En.call(t, "index") && (o.index = t.index), En.call(t, "input") && (o.input = t.input)), e ? (r.push(t), a.push(o), (u ? Yt : lr)(t, function(t, i) {
                            o[i] = _(t, e, n, r, a)
                        }), f && (h(r), h(a)), o) : o
                    }

                    function v(t, e) {
                        return It(t) ? Bn(t) : {}
                    }

                    function S(t, e, n) {
                        if ("function" != typeof t) return Ze;
                        if ("undefined" == typeof e || !("prototype" in t)) return t;
                        var r = t.__bindData__;
                        if ("undefined" == typeof r && (Yn.funcNames && (r = !t.name), r = r || !Yn.funcDecomp, !r)) {
                            var a = Nn.call(t);
                            Yn.funcNames || (r = !A.test(a)), r || (r = L.test(a), Zn(t, r))
                        }
                        if (r === !1 || r !== !0 && 1 & r[1]) return t;
                        switch (n) {
                            case 1:
                                return function(n) {
                                    return t.call(e, n)
                                };
                            case 2:
                                return function(n, r) {
                                    return t.call(e, n, r)
                                };
                            case 3:
                                return function(n, r, a) {
                                    return t.call(e, n, r, a)
                                };
                            case 4:
                                return function(n, r, a, o) {
                                    return t.call(e, n, r, a, o)
                                }
                        }
                        return Ee(t, e)
                    }

                    function Y(t) {
                        function e() {
                            var t = l ? i : this;
                            if (a) {
                                var d = p(a);
                                Rn.apply(d, arguments)
                            }
                            if ((o || c) && (d || (d = p(arguments)), o && Rn.apply(d, o), c && d.length < s)) return r |= 16, Y([n, f ? r : -4 & r, d, null, i, s]);
                            if (d || (d = arguments), u && (n = t[h]), this instanceof e) {
                                t = v(n.prototype);
                                var g = n.apply(t, d);
                                return It(g) ? g : t
                            }
                            return n.apply(t, d)
                        }
                        var n = t[0],
                            r = t[1],
                            a = t[2],
                            o = t[3],
                            i = t[4],
                            s = t[5],
                            l = 1 & r,
                            u = 2 & r,
                            c = 4 & r,
                            f = 8 & r,
                            h = n;
                        return Zn(e, t), e
                    }

                    function K(t, e) {
                        var n = -1,
                            o = lt(),
                            i = t ? t.length : 0,
                            s = i >= w && o === r,
                            u = [];
                        if (s) {
                            var c = l(e);
                            c ? (o = a, e = c) : s = !1
                        }
                        for (; ++n < i;) {
                            var f = t[n];
                            o(e, f) < 0 && u.push(f)
                        }
                        return s && d(e), u
                    }

                    function Q(t, e, n, r) {
                        for (var a = (r || 0) - 1, o = t ? t.length : 0, i = []; ++a < o;) {
                            var s = t[a];
                            if (s && "object" == typeof s && "number" == typeof s.length && (Kn(s) || ht(s))) {
                                e || (s = Q(s, e, n));
                                var l = -1,
                                    u = s.length,
                                    c = i.length;
                                for (i.length += u; ++l < u;) i[c++] = s[l]
                            } else n || i.push(s)
                        }
                        return i
                    }

                    function tt(t, e, n, r, a, o) {
                        if (n) {
                            var i = n(t, e);
                            if ("undefined" != typeof i) return !!i
                        }
                        if (t === e) return 0 !== t || 1 / t == 1 / e;
                        var s = typeof t,
                            l = typeof e;
                        if (!(t !== t || t && X[s] || e && X[l])) return !1;
                        if (null == t || null == e) return t === e;
                        var u = Mn.call(t),
                            f = Mn.call(e);
                        if (u == $ && (u = G), f == $ && (f = G), u != f) return !1;
                        switch (u) {
                            case U:
                            case B:
                                return +t == +e;
                            case j:
                                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                            case z:
                            case q:
                                return t == Sn(e)
                        }
                        var d = u == H;
                        if (!d) {
                            var p = En.call(t, "__wrapped__"),
                                g = En.call(e, "__wrapped__");
                            if (p || g) return tt(p ? t.__wrapped__ : t, g ? e.__wrapped__ : e, n, r, a, o);
                            if (u != G) return !1;
                            var m = t.constructor,
                                _ = e.constructor;
                            if (m != _ && !(At(m) && m instanceof m && At(_) && _ instanceof _) && "constructor" in t && "constructor" in e) return !1
                        }
                        var v = !a;
                        a || (a = c()), o || (o = c());
                        for (var y = a.length; y--;)
                            if (a[y] == t) return o[y] == e;
                        var b = 0;
                        if (i = !0, a.push(t), o.push(e), d) {
                            if (y = t.length, b = e.length, i = b == y, i || r)
                                for (; b--;) {
                                    var w = y,
                                        S = e[b];
                                    if (r)
                                        for (; w-- && !(i = tt(t[w], S, n, r, a, o)););
                                    else if (!(i = tt(t[b], S, n, r, a, o))) break
                                }
                        } else sr(e, function(e, s, l) {
                            return En.call(l, s) ? (b++, i = En.call(t, s) && tt(t[s], e, n, r, a, o)) : void 0
                        }), i && !r && sr(t, function(t, e, n) {
                            return En.call(n, e) ? i = --b > -1 : void 0
                        });
                        return a.pop(), o.pop(), v && (h(a), h(o)), i
                    }

                    function et(t, e, n, r, a) {
                        (Kn(e) ? Yt : lr)(e, function(e, o) {
                            var i, s, l = e,
                                u = t[o];
                            if (e && ((s = Kn(e)) || ur(e))) {
                                for (var c = r.length; c--;)
                                    if (i = r[c] == e) {
                                        u = a[c];
                                        break
                                    }
                                if (!i) {
                                    var f;
                                    n && (l = n(u, e), (f = "undefined" != typeof l) && (u = l)), f || (u = s ? Kn(u) ? u : [] : ur(u) ? u : {}), r.push(e), a.push(u), f || et(u, e, n, r, a)
                                }
                            } else n && (l = n(u, e), "undefined" == typeof l && (l = e)), "undefined" != typeof l && (u = l);
                            t[o] = u
                        })
                    }

                    function rt(t, e) {
                        return t + Fn(Jn() * (e - t + 1))
                    }

                    function at(t, e, n) {
                        var o = -1,
                            i = lt(),
                            s = t ? t.length : 0,
                            u = [],
                            f = !e && s >= w && i === r,
                            p = n || f ? c() : u;
                        if (f) {
                            var g = l(p);
                            i = a, p = g
                        }
                        for (; ++o < s;) {
                            var m = t[o],
                                _ = n ? n(m, o, t) : m;
                            (e ? !o || p[p.length - 1] !== _ : i(p, _) < 0) && ((n || f) && p.push(_), u.push(m))
                        }
                        return f ? (h(p.array), d(p)) : n && h(p), u
                    }

                    function ot(t) {
                        return function(n, r, a) {
                            var o = {};
                            r = e.createCallback(r, a, 3);
                            var i = -1,
                                s = n ? n.length : 0;
                            if ("number" == typeof s)
                                for (; ++i < s;) {
                                    var l = n[i];
                                    t(o, l, r(l, i, n), n)
                                } else lr(n, function(e, n, a) {
                                    t(o, e, r(e, n, a), a)
                                });
                            return o
                        }
                    }

                    function it(t, e, n, r, a, i) {
                        var s = 1 & e,
                            l = 2 & e,
                            u = 4 & e,
                            c = 16 & e,
                            f = 32 & e;
                        if (!l && !At(t)) throw new xn;
                        c && !n.length && (e &= -17, c = n = !1), f && !r.length && (e &= -33, f = r = !1);
                        var h = t && t.__bindData__;
                        if (h && h !== !0) return h = p(h), h[2] && (h[2] = p(h[2])), h[3] && (h[3] = p(h[3])), !s || 1 & h[1] || (h[4] = a), !s && 1 & h[1] && (e |= 8), !u || 4 & h[1] || (h[5] = i), c && Rn.apply(h[2] || (h[2] = []), n), f && Hn.apply(h[3] || (h[3] = []), r), h[1] |= e, it.apply(null, h);
                        var d = 1 == e || 17 === e ? o : Y;
                        return d([t, e, n, r, a, i])
                    }

                    function st(t) {
                        return er[t]
                    }

                    function lt() {
                        var t = (t = e.indexOf) === _e ? r : t;
                        return t
                    }

                    function ut(t) {
                        return "function" == typeof t && kn.test(t)
                    }

                    function ct(t) {
                        var e, n;
                        return t && Mn.call(t) == G && (e = t.constructor, !At(e) || e instanceof e) ? (sr(t, function(t, e) {
                            n = e
                        }), "undefined" == typeof n || En.call(t, n)) : !1
                    }

                    function ft(t) {
                        return nr[t]
                    }

                    function ht(t) {
                        return t && "object" == typeof t && "number" == typeof t.length && Mn.call(t) == $ || !1
                    }

                    function dt(t, e, n, r) {
                        return "boolean" != typeof e && null != e && (r = n, n = e, e = !1), _(t, e, "function" == typeof n && S(n, r, 1))
                    }

                    function pt(t, e, n) {
                        return _(t, !0, "function" == typeof e && S(e, n, 1))
                    }

                    function gt(t, e) {
                        var n = v(t);
                        return e ? or(n, e) : n
                    }

                    function mt(t, n, r) {
                        var a;
                        return n = e.createCallback(n, r, 3), lr(t, function(t, e, r) {
                            return n(t, e, r) ? (a = e, !1) : void 0
                        }), a
                    }

                    function _t(t, n, r) {
                        var a;
                        return n = e.createCallback(n, r, 3), yt(t, function(t, e, r) {
                            return n(t, e, r) ? (a = e, !1) : void 0
                        }), a
                    }

                    function vt(t, e, n) {
                        var r = [];
                        sr(t, function(t, e) {
                            r.push(e, t)
                        });
                        var a = r.length;
                        for (e = S(e, n, 3); a-- && e(r[a--], r[a], t) !== !1;);
                        return t
                    }

                    function yt(t, e, n) {
                        var r = tr(t),
                            a = r.length;
                        for (e = S(e, n, 3); a--;) {
                            var o = r[a];
                            if (e(t[o], o, t) === !1) break
                        }
                        return t
                    }

                    function bt(t) {
                        var e = [];
                        return sr(t, function(t, n) {
                            At(t) && e.push(n)
                        }), e.sort()
                    }

                    function wt(t, e) {
                        return t ? En.call(t, e) : !1
                    }

                    function St(t) {
                        for (var e = -1, n = tr(t), r = n.length, a = {}; ++e < r;) {
                            var o = n[e];
                            a[t[o]] = o
                        }
                        return a
                    }

                    function xt(t) {
                        return t === !0 || t === !1 || t && "object" == typeof t && Mn.call(t) == U || !1
                    }

                    function Ct(t) {
                        return t && "object" == typeof t && Mn.call(t) == B || !1
                    }

                    function Dt(t) {
                        return t && 1 === t.nodeType || !1
                    }

                    function Tt(t) {
                        var e = !0;
                        if (!t) return e;
                        var n = Mn.call(t),
                            r = t.length;
                        return n == H || n == q || n == $ || n == G && "number" == typeof r && At(t.splice) ? !r : (lr(t, function() {
                            return e = !1
                        }), e)
                    }

                    function Mt(t, e, n, r) {
                        return tt(t, e, "function" == typeof n && S(n, r, 2))
                    }

                    function kt(t) {
                        return jn(t) && !Gn(parseFloat(t))
                    }

                    function At(t) {
                        return "function" == typeof t
                    }

                    function It(t) {
                        return !(!t || !X[typeof t])
                    }

                    function Ft(t) {
                        return Lt(t) && t != +t
                    }

                    function Nt(t) {
                        return null === t
                    }

                    function Lt(t) {
                        return "number" == typeof t || t && "object" == typeof t && Mn.call(t) == j || !1
                    }

                    function Et(t) {
                        return t && "object" == typeof t && Mn.call(t) == z || !1
                    }

                    function Rt(t) {
                        return "string" == typeof t || t && "object" == typeof t && Mn.call(t) == q || !1
                    }

                    function Pt(t) {
                        return "undefined" == typeof t
                    }

                    function $t(t, n, r) {
                        var a = {};
                        return n = e.createCallback(n, r, 3), lr(t, function(t, e, r) {
                            a[e] = n(t, e, r)
                        }), a
                    }

                    function Ht(t) {
                        var e = arguments,
                            n = 2;
                        if (!It(t)) return t;
                        if ("number" != typeof e[2] && (n = e.length), n > 3 && "function" == typeof e[n - 2]) var r = S(e[--n - 1], e[n--], 2);
                        else n > 2 && "function" == typeof e[n - 1] && (r = e[--n]);
                        for (var a = p(arguments, 1, n), o = -1, i = c(), s = c(); ++o < n;) et(t, a[o], r, i, s);
                        return h(i), h(s), t
                    }

                    function Ut(t, n, r) {
                        var a = {};
                        if ("function" != typeof n) {
                            var o = [];
                            sr(t, function(t, e) {
                                o.push(e)
                            }), o = K(o, Q(arguments, !0, !1, 1));
                            for (var i = -1, s = o.length; ++i < s;) {
                                var l = o[i];
                                a[l] = t[l]
                            }
                        } else n = e.createCallback(n, r, 3), sr(t, function(t, e, r) {
                            n(t, e, r) || (a[e] = t)
                        });
                        return a
                    }

                    function Bt(t) {
                        for (var e = -1, n = tr(t), r = n.length, a = pn(r); ++e < r;) {
                            var o = n[e];
                            a[e] = [o, t[o]]
                        }
                        return a
                    }

                    function Ot(t, n, r) {
                        var a = {};
                        if ("function" != typeof n)
                            for (var o = -1, i = Q(arguments, !0, !1, 1), s = It(t) ? i.length : 0; ++o < s;) {
                                var l = i[o];
                                l in t && (a[l] = t[l])
                            } else n = e.createCallback(n, r, 3), sr(t, function(t, e, r) {
                                n(t, e, r) && (a[e] = t)
                            });
                        return a
                    }

                    function jt(t, n, r, a) {
                        var o = Kn(t);
                        if (null == r)
                            if (o) r = [];
                            else {
                                var i = t && t.constructor,
                                    s = i && i.prototype;
                                r = v(s)
                            }
                        return n && (n = e.createCallback(n, a, 4), (o ? Yt : lr)(t, function(t, e, a) {
                            return n(r, t, e, a);
                        })), r
                    }

                    function Gt(t) {
                        for (var e = -1, n = tr(t), r = n.length, a = pn(r); ++e < r;) a[e] = t[n[e]];
                        return a
                    }

                    function zt(t) {
                        for (var e = arguments, n = -1, r = Q(e, !0, !1, 1), a = e[2] && e[2][e[1]] === t ? 1 : r.length, o = pn(a); ++n < a;) o[n] = t[r[n]];
                        return o
                    }

                    function qt(t, e, n) {
                        var r = -1,
                            a = lt(),
                            o = t ? t.length : 0,
                            i = !1;
                        return n = (0 > n ? qn(0, o + n) : n) || 0, Kn(t) ? i = a(t, e, n) > -1 : "number" == typeof o ? i = (Rt(t) ? t.indexOf(e, n) : a(t, e, n)) > -1 : lr(t, function(t) {
                            return ++r >= n ? !(i = t === e) : void 0
                        }), i
                    }

                    function Wt(t, n, r) {
                        var a = !0;
                        n = e.createCallback(n, r, 3);
                        var o = -1,
                            i = t ? t.length : 0;
                        if ("number" == typeof i)
                            for (; ++o < i && (a = !!n(t[o], o, t)););
                        else lr(t, function(t, e, r) {
                            return a = !!n(t, e, r)
                        });
                        return a
                    }

                    function Vt(t, n, r) {
                        var a = [];
                        n = e.createCallback(n, r, 3);
                        var o = -1,
                            i = t ? t.length : 0;
                        if ("number" == typeof i)
                            for (; ++o < i;) {
                                var s = t[o];
                                n(s, o, t) && a.push(s)
                            } else lr(t, function(t, e, r) {
                                n(t, e, r) && a.push(t)
                            });
                        return a
                    }

                    function Jt(t, n, r) {
                        n = e.createCallback(n, r, 3);
                        var a = -1,
                            o = t ? t.length : 0;
                        if ("number" != typeof o) {
                            var i;
                            return lr(t, function(t, e, r) {
                                return n(t, e, r) ? (i = t, !1) : void 0
                            }), i
                        }
                        for (; ++a < o;) {
                            var s = t[a];
                            if (n(s, a, t)) return s
                        }
                    }

                    function Xt(t, n, r) {
                        var a;
                        return n = e.createCallback(n, r, 3), Zt(t, function(t, e, r) {
                            return n(t, e, r) ? (a = t, !1) : void 0
                        }), a
                    }

                    function Yt(t, e, n) {
                        var r = -1,
                            a = t ? t.length : 0;
                        if (e = e && "undefined" == typeof n ? e : S(e, n, 3), "number" == typeof a)
                            for (; ++r < a && e(t[r], r, t) !== !1;);
                        else lr(t, e);
                        return t
                    }

                    function Zt(t, e, n) {
                        var r = t ? t.length : 0;
                        if (e = e && "undefined" == typeof n ? e : S(e, n, 3), "number" == typeof r)
                            for (; r-- && e(t[r], r, t) !== !1;);
                        else {
                            var a = tr(t);
                            r = a.length, lr(t, function(t, n, o) {
                                return n = a ? a[--r] : --r, e(o[n], n, o)
                            })
                        }
                        return t
                    }

                    function Kt(t, e) {
                        var n = p(arguments, 2),
                            r = -1,
                            a = "function" == typeof e,
                            o = t ? t.length : 0,
                            i = pn("number" == typeof o ? o : 0);
                        return Yt(t, function(t) {
                            i[++r] = (a ? e : t[e]).apply(t, n)
                        }), i
                    }

                    function Qt(t, n, r) {
                        var a = -1,
                            o = t ? t.length : 0;
                        if (n = e.createCallback(n, r, 3), "number" == typeof o)
                            for (var i = pn(o); ++a < o;) i[a] = n(t[a], a, t);
                        else i = [], lr(t, function(t, e, r) {
                            i[++a] = n(t, e, r)
                        });
                        return i
                    }

                    function te(t, n, r) {
                        var a = -(1 / 0),
                            o = a;
                        if ("function" != typeof n && r && r[n] === t && (n = null), null == n && Kn(t))
                            for (var s = -1, l = t.length; ++s < l;) {
                                var u = t[s];
                                u > o && (o = u)
                            } else n = null == n && Rt(t) ? i : e.createCallback(n, r, 3), Yt(t, function(t, e, r) {
                                var i = n(t, e, r);
                                i > a && (a = i, o = t)
                            });
                        return o
                    }

                    function ee(t, n, r) {
                        var a = 1 / 0,
                            o = a;
                        if ("function" != typeof n && r && r[n] === t && (n = null), null == n && Kn(t))
                            for (var s = -1, l = t.length; ++s < l;) {
                                var u = t[s];
                                o > u && (o = u)
                            } else n = null == n && Rt(t) ? i : e.createCallback(n, r, 3), Yt(t, function(t, e, r) {
                                var i = n(t, e, r);
                                a > i && (a = i, o = t)
                            });
                        return o
                    }

                    function ne(t, n, r, a) {
                        if (!t) return r;
                        var o = arguments.length < 3;
                        n = e.createCallback(n, a, 4);
                        var i = -1,
                            s = t.length;
                        if ("number" == typeof s)
                            for (o && (r = t[++i]); ++i < s;) r = n(r, t[i], i, t);
                        else lr(t, function(t, e, a) {
                            r = o ? (o = !1, t) : n(r, t, e, a)
                        });
                        return r
                    }

                    function re(t, n, r, a) {
                        var o = arguments.length < 3;
                        return n = e.createCallback(n, a, 4), Zt(t, function(t, e, a) {
                            r = o ? (o = !1, t) : n(r, t, e, a)
                        }), r
                    }

                    function ae(t, n, r) {
                        return n = e.createCallback(n, r, 3), Vt(t, function(t, e, r) {
                            return !n(t, e, r)
                        })
                    }

                    function oe(t, e, n) {
                        if (t && "number" != typeof t.length && (t = Gt(t)), null == e || n) return t ? t[rt(0, t.length - 1)] : m;
                        var r = ie(t);
                        return r.length = Wn(qn(0, e), r.length), r
                    }

                    function ie(t) {
                        var e = -1,
                            n = t ? t.length : 0,
                            r = pn("number" == typeof n ? n : 0);
                        return Yt(t, function(t) {
                            var n = rt(0, ++e);
                            r[e] = r[n], r[n] = t
                        }), r
                    }

                    function se(t) {
                        var e = t ? t.length : 0;
                        return "number" == typeof e ? e : tr(t).length
                    }

                    function le(t, n, r) {
                        var a;
                        n = e.createCallback(n, r, 3);
                        var o = -1,
                            i = t ? t.length : 0;
                        if ("number" == typeof i)
                            for (; ++o < i && !(a = n(t[o], o, t)););
                        else lr(t, function(t, e, r) {
                            return !(a = n(t, e, r))
                        });
                        return !!a
                    }

                    function ue(t, n, r) {
                        var a = -1,
                            o = Kn(n),
                            i = t ? t.length : 0,
                            l = pn("number" == typeof i ? i : 0);
                        for (o || (n = e.createCallback(n, r, 3)), Yt(t, function(t, e, r) {
                                var i = l[++a] = f();
                                o ? i.criteria = Qt(n, function(e) {
                                    return t[e]
                                }) : (i.criteria = c())[0] = n(t, e, r), i.index = a, i.value = t
                            }), i = l.length, l.sort(s); i--;) {
                            var u = l[i];
                            l[i] = u.value, o || h(u.criteria), d(u)
                        }
                        return l
                    }

                    function ce(t) {
                        return t && "number" == typeof t.length ? p(t) : Gt(t)
                    }

                    function fe(t) {
                        for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                            var a = t[e];
                            a && r.push(a)
                        }
                        return r
                    }

                    function he(t) {
                        return K(t, Q(arguments, !0, !0, 1))
                    }

                    function de(t, n, r) {
                        var a = -1,
                            o = t ? t.length : 0;
                        for (n = e.createCallback(n, r, 3); ++a < o;)
                            if (n(t[a], a, t)) return a;
                        return -1
                    }

                    function pe(t, n, r) {
                        var a = t ? t.length : 0;
                        for (n = e.createCallback(n, r, 3); a--;)
                            if (n(t[a], a, t)) return a;
                        return -1
                    }

                    function ge(t, n, r) {
                        var a = 0,
                            o = t ? t.length : 0;
                        if ("number" != typeof n && null != n) {
                            var i = -1;
                            for (n = e.createCallback(n, r, 3); ++i < o && n(t[i], i, t);) a++
                        } else if (a = n, null == a || r) return t ? t[0] : m;
                        return p(t, 0, Wn(qn(0, a), o))
                    }

                    function me(t, e, n, r) {
                        return "boolean" != typeof e && null != e && (r = n, n = "function" != typeof e && r && r[e] === t ? null : e, e = !1), null != n && (t = Qt(t, n, r)), Q(t, e)
                    }

                    function _e(t, e, n) {
                        if ("number" == typeof n) {
                            var a = t ? t.length : 0;
                            n = 0 > n ? qn(0, a + n) : n || 0
                        } else if (n) {
                            var o = Te(t, e);
                            return t[o] === e ? o : -1
                        }
                        return r(t, e, n)
                    }

                    function ve(t, n, r) {
                        var a = 0,
                            o = t ? t.length : 0;
                        if ("number" != typeof n && null != n) {
                            var i = o;
                            for (n = e.createCallback(n, r, 3); i-- && n(t[i], i, t);) a++
                        } else a = null == n || r ? 1 : n || a;
                        return p(t, 0, Wn(qn(0, o - a), o))
                    }

                    function ye() {
                        for (var t = [], e = -1, n = arguments.length, o = c(), i = lt(), s = i === r, u = c(); ++e < n;) {
                            var f = arguments[e];
                            (Kn(f) || ht(f)) && (t.push(f), o.push(s && f.length >= w && l(e ? t[e] : u)))
                        }
                        var p = t[0],
                            g = -1,
                            m = p ? p.length : 0,
                            _ = [];
                        t: for (; ++g < m;) {
                            var v = o[0];
                            if (f = p[g], (v ? a(v, f) : i(u, f)) < 0) {
                                for (e = n, (v || u).push(f); --e;)
                                    if (v = o[e], (v ? a(v, f) : i(t[e], f)) < 0) continue t;
                                _.push(f)
                            }
                        }
                        for (; n--;) v = o[n], v && d(v);
                        return h(o), h(u), _
                    }

                    function be(t, n, r) {
                        var a = 0,
                            o = t ? t.length : 0;
                        if ("number" != typeof n && null != n) {
                            var i = o;
                            for (n = e.createCallback(n, r, 3); i-- && n(t[i], i, t);) a++
                        } else if (a = n, null == a || r) return t ? t[o - 1] : m;
                        return p(t, qn(0, o - a))
                    }

                    function we(t, e, n) {
                        var r = t ? t.length : 0;
                        for ("number" == typeof n && (r = (0 > n ? qn(0, r + n) : Wn(n, r - 1)) + 1); r--;)
                            if (t[r] === e) return r;
                        return -1
                    }

                    function Se(t) {
                        for (var e = arguments, n = 0, r = e.length, a = t ? t.length : 0; ++n < r;)
                            for (var o = -1, i = e[n]; ++o < a;) t[o] === i && ($n.call(t, o--, 1), a--);
                        return t
                    }

                    function xe(t, e, n) {
                        t = +t || 0, n = "number" == typeof n ? n : +n || 1, null == e && (e = t, t = 0);
                        for (var r = -1, a = qn(0, An((e - t) / (n || 1))), o = pn(a); ++r < a;) o[r] = t, t += n;
                        return o
                    }

                    function Ce(t, n, r) {
                        var a = -1,
                            o = t ? t.length : 0,
                            i = [];
                        for (n = e.createCallback(n, r, 3); ++a < o;) {
                            var s = t[a];
                            n(s, a, t) && (i.push(s), $n.call(t, a--, 1), o--)
                        }
                        return i
                    }

                    function De(t, n, r) {
                        if ("number" != typeof n && null != n) {
                            var a = 0,
                                o = -1,
                                i = t ? t.length : 0;
                            for (n = e.createCallback(n, r, 3); ++o < i && n(t[o], o, t);) a++
                        } else a = null == n || r ? 1 : qn(0, n);
                        return p(t, a)
                    }

                    function Te(t, n, r, a) {
                        var o = 0,
                            i = t ? t.length : o;
                        for (r = r ? e.createCallback(r, a, 1) : Ze, n = r(n); i > o;) {
                            var s = o + i >>> 1;
                            r(t[s]) < n ? o = s + 1 : i = s
                        }
                        return o
                    }

                    function Me() {
                        return at(Q(arguments, !0, !0))
                    }

                    function ke(t, n, r, a) {
                        return "boolean" != typeof n && null != n && (a = r, r = "function" != typeof n && a && a[n] === t ? null : n, n = !1), null != r && (r = e.createCallback(r, a, 3)), at(t, n, r)
                    }

                    function Ae(t) {
                        return K(t, p(arguments, 1))
                    }

                    function Ie() {
                        for (var t = -1, e = arguments.length; ++t < e;) {
                            var n = arguments[t];
                            if (Kn(n) || ht(n)) var r = r ? at(K(r, n).concat(K(n, r))) : n
                        }
                        return r || []
                    }

                    function Fe() {
                        for (var t = arguments.length > 1 ? arguments : arguments[0], e = -1, n = t ? te(dr(t, "length")) : 0, r = pn(0 > n ? 0 : n); ++e < n;) r[e] = dr(t, e);
                        return r
                    }

                    function Ne(t, e) {
                        var n = -1,
                            r = t ? t.length : 0,
                            a = {};
                        for (e || !r || Kn(t[0]) || (e = []); ++n < r;) {
                            var o = t[n];
                            e ? a[o] = e[n] : o && (a[o[0]] = o[1])
                        }
                        return a
                    }

                    function Le(t, e) {
                        if (!At(e)) throw new xn;
                        return function() {
                            return --t < 1 ? e.apply(this, arguments) : void 0
                        }
                    }

                    function Ee(t, e) {
                        return arguments.length > 2 ? it(t, 17, p(arguments, 2), null, e) : it(t, 1, null, null, e)
                    }

                    function Re(t) {
                        for (var e = arguments.length > 1 ? Q(arguments, !0, !1, 1) : bt(t), n = -1, r = e.length; ++n < r;) {
                            var a = e[n];
                            t[a] = it(t[a], 1, null, null, t)
                        }
                        return t
                    }

                    function Pe(t, e) {
                        return arguments.length > 2 ? it(e, 19, p(arguments, 2), null, t) : it(e, 3, null, null, t)
                    }

                    function $e() {
                        for (var t = arguments, e = t.length; e--;)
                            if (!At(t[e])) throw new xn;
                        return function() {
                            for (var e = arguments, n = t.length; n--;) e = [t[n].apply(this, e)];
                            return e[0]
                        }
                    }

                    function He(t, e) {
                        return e = "number" == typeof e ? e : +e || t.length, it(t, 4, null, null, null, e)
                    }

                    function Ue(t, e, n) {
                        var r, a, o, i, s, l, u, c = 0,
                            f = !1,
                            h = !0;
                        if (!At(t)) throw new xn;
                        if (e = qn(0, e) || 0, n === !0) {
                            var d = !0;
                            h = !1
                        } else It(n) && (d = n.leading, f = "maxWait" in n && (qn(e, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
                        var p = function() {
                                var n = e - (gr() - i);
                                if (0 >= n) {
                                    a && In(a);
                                    var f = u;
                                    a = l = u = m, f && (c = gr(), o = t.apply(s, r), l || a || (r = s = null))
                                } else l = Pn(p, n)
                            },
                            g = function() {
                                l && In(l), a = l = u = m, (h || f !== e) && (c = gr(), o = t.apply(s, r), l || a || (r = s = null))
                            };
                        return function() {
                            if (r = arguments, i = gr(), s = this, u = h && (l || !d), f === !1) var n = d && !l;
                            else {
                                a || d || (c = i);
                                var m = f - (i - c),
                                    _ = 0 >= m;
                                _ ? (a && (a = In(a)), c = i, o = t.apply(s, r)) : a || (a = Pn(g, m))
                            }
                            return _ && l ? l = In(l) : l || e === f || (l = Pn(p, e)), n && (_ = !0, o = t.apply(s, r)), !_ || l || a || (r = s = null), o
                        }
                    }

                    function Be(t) {
                        if (!At(t)) throw new xn;
                        var e = p(arguments, 1);
                        return Pn(function() {
                            t.apply(m, e)
                        }, 1)
                    }

                    function Oe(t, e) {
                        if (!At(t)) throw new xn;
                        var n = p(arguments, 2);
                        return Pn(function() {
                            t.apply(m, n)
                        }, e)
                    }

                    function je(t, e) {
                        if (!At(t)) throw new xn;
                        var n = function() {
                            var r = n.cache,
                                a = e ? e.apply(this, arguments) : b + arguments[0];
                            return En.call(r, a) ? r[a] : r[a] = t.apply(this, arguments)
                        };
                        return n.cache = {}, n
                    }

                    function Ge(t) {
                        var e, n;
                        if (!At(t)) throw new xn;
                        return function() {
                            return e ? n : (e = !0, n = t.apply(this, arguments), t = null, n)
                        }
                    }

                    function ze(t) {
                        return it(t, 16, p(arguments, 1))
                    }

                    function qe(t) {
                        return it(t, 32, null, p(arguments, 1))
                    }

                    function We(t, e, n) {
                        var r = !0,
                            a = !0;
                        if (!At(t)) throw new xn;
                        return n === !1 ? r = !1 : It(n) && (r = "leading" in n ? n.leading : r, a = "trailing" in n ? n.trailing : a), V.leading = r, V.maxWait = e, V.trailing = a, Ue(t, e, V)
                    }

                    function Ve(t, e) {
                        return it(e, 16, [t])
                    }

                    function Je(t) {
                        return function() {
                            return t
                        }
                    }

                    function Xe(t, e, n) {
                        var r = typeof t;
                        if (null == t || "function" == r) return S(t, e, n);
                        if ("object" != r) return en(t);
                        var a = tr(t),
                            o = a[0],
                            i = t[o];
                        return 1 != a.length || i !== i || It(i) ? function(e) {
                            for (var n = a.length, r = !1; n-- && (r = tt(e[a[n]], t[a[n]], null, !0)););
                            return r
                        } : function(t) {
                            var e = t[o];
                            return i === e && (0 !== i || 1 / i == 1 / e)
                        }
                    }

                    function Ye(t) {
                        return null == t ? "" : Sn(t).replace(ar, st)
                    }

                    function Ze(t) {
                        return t
                    }

                    function Ke(t, r, a) {
                        var o = !0,
                            i = r && bt(r);
                        r && (a || i.length) || (null == a && (a = r), s = n, r = t, t = e, i = bt(r)), a === !1 ? o = !1 : It(a) && "chain" in a && (o = a.chain);
                        var s = t,
                            l = At(s);
                        Yt(i, function(e) {
                            var n = t[e] = r[e];
                            l && (s.prototype[e] = function() {
                                var e = this.__chain__,
                                    r = this.__wrapped__,
                                    a = [r];
                                Rn.apply(a, arguments);
                                var i = n.apply(t, a);
                                if (o || e) {
                                    if (r === i && It(i)) return this;
                                    i = new s(i), i.__chain__ = e
                                }
                                return i
                            })
                        })
                    }

                    function Qe() {
                        return t._ = Tn, this
                    }

                    function tn() {}

                    function en(t) {
                        return function(e) {
                            return e[t]
                        }
                    }

                    function nn(t, e, n) {
                        var r = null == t,
                            a = null == e;
                        if (null == n && ("boolean" == typeof t && a ? (n = t, t = 1) : a || "boolean" != typeof e || (n = e, a = !0)), r && a && (e = 1), t = +t || 0, a ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                            var o = Jn();
                            return Wn(t + o * (e - t + parseFloat("1e-" + ((o + "").length - 1))), e)
                        }
                        return rt(t, e)
                    }

                    function rn(t, e) {
                        if (t) {
                            var n = t[e];
                            return At(n) ? t[e]() : n
                        }
                    }

                    function an(t, n, r) {
                        var a = e.templateSettings;
                        t = Sn(t || ""), r = ir({}, r, a);
                        var o, i = ir({}, r.imports, a.imports),
                            s = tr(i),
                            l = Gt(i),
                            c = 0,
                            f = r.interpolate || N,
                            h = "__p += '",
                            d = wn((r.escape || N).source + "|" + f.source + "|" + (f === I ? M : N).source + "|" + (r.evaluate || N).source + "|$", "g");
                        t.replace(d, function(e, n, r, a, i, s) {
                            return r || (r = a), h += t.slice(c, s).replace(E, u), n && (h += "' +\n__e(" + n + ") +\n'"), i && (o = !0, h += "';\n" + i + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = s + e.length, e
                        }), h += "';\n";
                        var p = r.variable,
                            g = p;
                        g || (p = "obj", h = "with (" + p + ") {\n" + h + "\n}\n"), h = (o ? h.replace(C, "") : h).replace(D, "$1").replace(T, "$1;"), h = "function(" + p + ") {\n" + (g ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                        var _ = "\n/*\n//# sourceURL=" + (r.sourceURL || "/lodash/template/source[" + P++ + "]") + "\n*/";
                        try {
                            var v = _n(s, "return " + h + _).apply(m, l)
                        } catch (y) {
                            throw y.source = h, y
                        }
                        return n ? v(n) : (v.source = h, v)
                    }

                    function on(t, e, n) {
                        t = (t = +t) > -1 ? t : 0;
                        var r = -1,
                            a = pn(t);
                        for (e = S(e, n, 1); ++r < t;) a[r] = e(r);
                        return a
                    }

                    function sn(t) {
                        return null == t ? "" : Sn(t).replace(rr, ft)
                    }

                    function ln(t) {
                        var e = ++y;
                        return Sn(null == t ? "" : t) + e
                    }

                    function un(t) {
                        return t = new n(t), t.__chain__ = !0, t
                    }

                    function cn(t, e) {
                        return e(t), t
                    }

                    function fn() {
                        return this.__chain__ = !0, this
                    }

                    function hn() {
                        return Sn(this.__wrapped__)
                    }

                    function dn() {
                        return this.__wrapped__
                    }
                    t = t ? nt.defaults(Z.Object(), t, nt.pick(Z, R)) : Z;
                    var pn = t.Array,
                        gn = t.Boolean,
                        mn = t.Date,
                        _n = t.Function,
                        vn = t.Math,
                        yn = t.Number,
                        bn = t.Object,
                        wn = t.RegExp,
                        Sn = t.String,
                        xn = t.TypeError,
                        Cn = [],
                        Dn = bn.prototype,
                        Tn = t._,
                        Mn = Dn.toString,
                        kn = wn("^" + Sn(Mn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                        An = vn.ceil,
                        In = t.clearTimeout,
                        Fn = vn.floor,
                        Nn = _n.prototype.toString,
                        Ln = ut(Ln = bn.getPrototypeOf) && Ln,
                        En = Dn.hasOwnProperty,
                        Rn = Cn.push,
                        Pn = t.setTimeout,
                        $n = Cn.splice,
                        Hn = Cn.unshift,
                        Un = function() {
                            try {
                                var t = {},
                                    e = ut(e = bn.defineProperty) && e,
                                    n = e(t, t, t) && e
                            } catch (r) {}
                            return n
                        }(),
                        Bn = ut(Bn = bn.create) && Bn,
                        On = ut(On = pn.isArray) && On,
                        jn = t.isFinite,
                        Gn = t.isNaN,
                        zn = ut(zn = bn.keys) && zn,
                        qn = vn.max,
                        Wn = vn.min,
                        Vn = t.parseInt,
                        Jn = vn.random,
                        Xn = {};
                    Xn[H] = pn, Xn[U] = gn, Xn[B] = mn, Xn[O] = _n, Xn[G] = bn, Xn[j] = yn, Xn[z] = wn, Xn[q] = Sn, n.prototype = e.prototype;
                    var Yn = e.support = {};
                    Yn.funcDecomp = !ut(t.WinRTError) && L.test(g), Yn.funcNames = "string" == typeof _n.name, e.templateSettings = {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: I,
                        variable: "",
                        imports: {
                            _: e
                        }
                    }, Bn || (v = function() {
                        function e() {}
                        return function(n) {
                            if (It(n)) {
                                e.prototype = n;
                                var r = new e;
                                e.prototype = null
                            }
                            return r || t.Object()
                        }
                    }());
                    var Zn = Un ? function(t, e) {
                            J.value = e, Un(t, "__bindData__", J), J.value = null
                        } : tn,
                        Kn = On || function(t) {
                            return t && "object" == typeof t && "number" == typeof t.length && Mn.call(t) == H || !1
                        },
                        Qn = function(t) {
                            var e, n = t,
                                r = [];
                            if (!n) return r;
                            if (!X[typeof t]) return r;
                            for (e in n) En.call(n, e) && r.push(e);
                            return r
                        },
                        tr = zn ? function(t) {
                            return It(t) ? zn(t) : []
                        } : Qn,
                        er = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        },
                        nr = St(er),
                        rr = wn("(" + tr(nr).join("|") + ")", "g"),
                        ar = wn("[" + tr(er).join("") + "]", "g"),
                        or = function(t, e, n) {
                            var r, a = t,
                                o = a;
                            if (!a) return o;
                            var i = arguments,
                                s = 0,
                                l = "number" == typeof n ? 2 : i.length;
                            if (l > 3 && "function" == typeof i[l - 2]) var u = S(i[--l - 1], i[l--], 2);
                            else l > 2 && "function" == typeof i[l - 1] && (u = i[--l]);
                            for (; ++s < l;)
                                if (a = i[s], a && X[typeof a])
                                    for (var c = -1, f = X[typeof a] && tr(a), h = f ? f.length : 0; ++c < h;) r = f[c], o[r] = u ? u(o[r], a[r]) : a[r];
                            return o
                        },
                        ir = function(t, e, n) {
                            var r, a = t,
                                o = a;
                            if (!a) return o;
                            for (var i = arguments, s = 0, l = "number" == typeof n ? 2 : i.length; ++s < l;)
                                if (a = i[s], a && X[typeof a])
                                    for (var u = -1, c = X[typeof a] && tr(a), f = c ? c.length : 0; ++u < f;) r = c[u], "undefined" == typeof o[r] && (o[r] = a[r]);
                            return o
                        },
                        sr = function(t, e, n) {
                            var r, a = t,
                                o = a;
                            if (!a) return o;
                            if (!X[typeof a]) return o;
                            e = e && "undefined" == typeof n ? e : S(e, n, 3);
                            for (r in a)
                                if (e(a[r], r, t) === !1) return o;
                            return o
                        },
                        lr = function(t, e, n) {
                            var r, a = t,
                                o = a;
                            if (!a) return o;
                            if (!X[typeof a]) return o;
                            e = e && "undefined" == typeof n ? e : S(e, n, 3);
                            for (var i = -1, s = X[typeof a] && tr(a), l = s ? s.length : 0; ++i < l;)
                                if (r = s[i], e(a[r], r, t) === !1) return o;
                            return o
                        },
                        ur = Ln ? function(t) {
                            if (!t || Mn.call(t) != G) return !1;
                            var e = t.valueOf,
                                n = ut(e) && (n = Ln(e)) && Ln(n);
                            return n ? t == n || Ln(t) == n : ct(t)
                        } : ct,
                        cr = ot(function(t, e, n) {
                            En.call(t, n) ? t[n]++ : t[n] = 1
                        }),
                        fr = ot(function(t, e, n) {
                            (En.call(t, n) ? t[n] : t[n] = []).push(e)
                        }),
                        hr = ot(function(t, e, n) {
                            t[n] = e
                        }),
                        dr = Qt,
                        pr = Vt,
                        gr = ut(gr = mn.now) && gr || function() {
                            return (new mn).getTime()
                        },
                        mr = 8 == Vn(x + "08") ? Vn : function(t, e) {
                            return Vn(Rt(t) ? t.replace(F, "") : t, e || 0)
                        };
                    return e.after = Le, e.assign = or, e.at = zt, e.bind = Ee, e.bindAll = Re, e.bindKey = Pe, e.chain = un, e.compact = fe, e.compose = $e, e.constant = Je, e.countBy = cr, e.create = gt, e.createCallback = Xe, e.curry = He, e.debounce = Ue, e.defaults = ir, e.defer = Be, e.delay = Oe, e.difference = he, e.filter = Vt, e.flatten = me, e.forEach = Yt, e.forEachRight = Zt, e.forIn = sr, e.forInRight = vt, e.forOwn = lr, e.forOwnRight = yt, e.functions = bt, e.groupBy = fr, e.indexBy = hr, e.initial = ve, e.intersection = ye, e.invert = St, e.invoke = Kt, e.keys = tr, e.map = Qt, e.mapValues = $t, e.max = te, e.memoize = je, e.merge = Ht, e.min = ee, e.omit = Ut, e.once = Ge, e.pairs = Bt, e.partial = ze, e.partialRight = qe, e.pick = Ot, e.pluck = dr, e.property = en, e.pull = Se, e.range = xe, e.reject = ae, e.remove = Ce, e.rest = De, e.shuffle = ie, e.sortBy = ue, e.tap = cn, e.throttle = We, e.times = on, e.toArray = ce, e.transform = jt, e.union = Me, e.uniq = ke, e.values = Gt, e.where = pr, e.without = Ae, e.wrap = Ve, e.xor = Ie, e.zip = Fe, e.zipObject = Ne, e.collect = Qt, e.drop = De, e.each = Yt, e.eachRight = Zt, e.extend = or, e.methods = bt, e.object = Ne, e.select = Vt, e.tail = De, e.unique = ke, e.unzip = Fe, Ke(e), e.clone = dt, e.cloneDeep = pt, e.contains = qt, e.escape = Ye, e.every = Wt, e.find = Jt, e.findIndex = de, e.findKey = mt, e.findLast = Xt, e.findLastIndex = pe, e.findLastKey = _t, e.has = wt, e.identity = Ze, e.indexOf = _e, e.isArguments = ht, e.isArray = Kn, e.isBoolean = xt, e.isDate = Ct, e.isElement = Dt, e.isEmpty = Tt, e.isEqual = Mt, e.isFinite = kt, e.isFunction = At, e.isNaN = Ft, e.isNull = Nt, e.isNumber = Lt, e.isObject = It, e.isPlainObject = ur, e.isRegExp = Et, e.isString = Rt, e.isUndefined = Pt, e.lastIndexOf = we, e.mixin = Ke, e.noConflict = Qe, e.noop = tn, e.now = gr, e.parseInt = mr, e.random = nn, e.reduce = ne, e.reduceRight = re, e.result = rn, e.runInContext = g, e.size = se, e.some = le, e.sortedIndex = Te, e.template = an, e.unescape = sn, e.uniqueId = ln, e.all = Wt, e.any = le, e.detect = Jt, e.findWhere = Jt, e.foldl = ne, e.foldr = re, e.include = qt, e.inject = ne, Ke(function() {
                        var t = {};
                        return lr(e, function(n, r) {
                            e.prototype[r] || (t[r] = n)
                        }), t
                    }(), !1), e.first = ge, e.last = be, e.sample = oe, e.take = ge, e.head = ge, lr(e, function(t, r) {
                        var a = "sample" !== r;
                        e.prototype[r] || (e.prototype[r] = function(e, r) {
                            var o = this.__chain__,
                                i = t(this.__wrapped__, e, r);
                            return o || null != e && (!r || a && "function" == typeof e) ? new n(i, o) : i
                        })
                    }), e.VERSION = "2.4.2", e.prototype.chain = fn, e.prototype.toString = hn, e.prototype.value = dn, e.prototype.valueOf = dn, Yt(["join", "pop", "shift"], function(t) {
                        var r = Cn[t];
                        e.prototype[t] = function() {
                            var t = this.__chain__,
                                e = r.apply(this.__wrapped__, arguments);
                            return t ? new n(e, t) : e
                        }
                    }), Yt(["push", "reverse", "sort", "unshift"], function(t) {
                        var n = Cn[t];
                        e.prototype[t] = function() {
                            return n.apply(this.__wrapped__, arguments), this
                        }
                    }), Yt(["concat", "slice", "splice"], function(t) {
                        var r = Cn[t];
                        e.prototype[t] = function() {
                            return new n(r.apply(this.__wrapped__, arguments), this.__chain__)
                        }
                    }), e
                }
                var m, _ = [],
                    v = [],
                    y = 0,
                    b = +new Date + "",
                    w = 75,
                    S = 40,
                    x = "   \fÂ \ufeff\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",
                    C = /\b__p \+= '';/g,
                    D = /\b(__p \+=) '' \+/g,
                    T = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    M = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    k = /\w*$/,
                    A = /^\s*function[ \n\r\t]+\w/,
                    I = /<%=([\s\S]+?)%>/g,
                    F = RegExp("^[" + x + "]*0+(?=.$)"),
                    N = /($^)/,
                    L = /\bthis\b/,
                    E = /['\n\r\t\u2028\u2029\\]/g,
                    R = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
                    P = 0,
                    $ = "[object Arguments]",
                    H = "[object Array]",
                    U = "[object Boolean]",
                    B = "[object Date]",
                    O = "[object Function]",
                    j = "[object Number]",
                    G = "[object Object]",
                    z = "[object RegExp]",
                    q = "[object String]",
                    W = {};
                W[O] = !1, W[$] = W[H] = W[U] = W[B] = W[j] = W[G] = W[z] = W[q] = !0;
                var V = {
                        leading: !1,
                        maxWait: 0,
                        trailing: !1
                    },
                    J = {
                        configurable: !1,
                        enumerable: !1,
                        value: null,
                        writable: !1
                    },
                    X = {
                        "boolean": !1,
                        "function": !0,
                        object: !0,
                        number: !1,
                        string: !1,
                        undefined: !1
                    },
                    Y = {
                        "\\": "\\",
                        "'": "'",
                        "\n": "n",
                        "\r": "r",
                        " ": "t",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    Z = X[typeof window] && window || this,
                    K = X[typeof n] && n && !n.nodeType && n,
                    Q = X[typeof e] && e && !e.nodeType && e,
                    tt = Q && Q.exports === K && K,
                    et = X[typeof t] && t;
                !et || et.global !== et && et.window !== et || (Z = et);
                var nt = g();
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (Z._ = nt, define(function() {
                    return nt
                })) : K && Q ? tt ? (Q.exports = nt)._ = nt : K._ = nt : Z._ = nt
            }).call(this)
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    5: [function(t, e, n) {
        function r(t, e) {
            var n = e.offsetLeft,
                r = e.offsetTop,
                a = n + e.offsetWidth,
                o = r + e.offsetHeight;
            return t.pageX > n && t.pageX < a && t.pageY > r && t.pageY < o
        }
        t("node-inserted")("touch");
        var a = 15,
            o = 15;
        window.isTouchDevice || (window.isTouchDevice = !!("ontouchstart" in window)), e.exports = function() {
            document.addEventListener("inserted", function(t) {
                if ("touchNodeInserted" === t.animationName) {
                    var e = t.inserted,
                        n = {
                            pageX: void 0,
                            pageY: void 0
                        };
                    if (!window.isTouchDevice) return e.addEventListener("mouseover", function(t) {
                        this.classList.add("hover")
                    }, !1), void e.addEventListener("mouseout", function(t) {
                        this.classList.remove("hover")
                    }, !1);
                    var i = function(t) {
                        t.preventDefault()
                    };
                    e.addEventListener("mouseenter", i, !1), e.addEventListener("mousemove", i, !1), e.addEventListener("mouseleave", i, !1), e.addEventListener("touchstart", function(t) {
                        this.classList.add("hover"), n.pageX = t.changedTouches[0].pageX, n.pageY = t.changedTouches[0].pageY
                    }, !1), e.addEventListener("touchend", function(t) {
                        if (this.classList.remove("hover"), n.pageX || n.pageY) {
                            var r = Math.abs(t.changedTouches[0].pageX - n.pageX),
                                i = Math.abs(t.changedTouches[0].pageY - n.pageY);
                            if (a > r && o > i) {
                                var s = new Event("tap");
                                s.initEvent("tap", !0, !0), e.dispatchEvent(s)
                            }
                            n.pageX = void 0, n.pageY = void 0
                        }
                    }, !1);
                    var s = function(t) {
                        var n = t.touches[0] || t.changedTouches[0];
                        if (!r(n, e)) {
                            var a = new Event("touchleave");
                            a.initEvent("touchleave", !0, !0), e.dispatchEvent(a), e.removeEventListener("touchmove", s, !1)
                        }
                    };
                    e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", function(t) {
                        e.addEventListener("touchmove", s, !1)
                    }, !1), e.addEventListener("touchleave", function(t) {
                        n.pageX = void 0, n.pageY = void 0
                    }, !1);
                    var l, u, c = !1,
                        f = 0,
                        h = 0,
                        d = "",
                        p = 0;
                    e.addEventListener("touchstart", function(t) {
                        f = t.changedTouches[0].clientX, h = t.changedTouches[0].clientY, l = t.changedTouches[0]
                    }, !1), e.addEventListener("touchmove", function(t) {
                        var n = t.changedTouches[0].clientX - f,
                            r = t.changedTouches[0].clientY - h,
                            a = new Event("swipe");
                        return c ? (a.initEvent("swipemove", !0, !0), a.startTouch = l, a.prevTouch = u, a.changedTouch = t.changedTouches[0], u = t.changedTouches[0], void("RIGHT" === d || "LEFT" === d ? n !== p && (a.direction = d, a.delta = "RIGHT" === d ? n : -n, p = n, e.dispatchEvent(a)) : r !== p && (a.direction = d, a.delta = "DOWN" === d ? r : -r, p = r, e.dispatchEvent(a)))) : (c = !0, a.initEvent("swipestart", !0, !0), a.startTouch = l, a.changedTouch = t.changedTouches[0], u = t.changedTouches[0], Math.abs(n) > Math.abs(r) ? (d = n > 0 ? "RIGHT" : "LEFT", a.delta = n > 0 ? n : -n, p = n) : (d = r > 0 ? "DOWN" : "UP", a.delta = r > 0 ? r : -r, p = r), a.direction = d, void e.dispatchEvent(a))
                    }, !1), e.addEventListener("touchend", function(t) {
                        if (c) {
                            var n = new Event("swipeend");
                            n.initEvent("swipeend", !0, !0), n.startTouch = l, n.prevTouch = u, n.changedTouch = t.changedTouches[0], n.direction = d, n.delta = Math.abs(p), e.dispatchEvent(n), c = !1
                        }
                    }, !1)
                }
            }, !1)
        }
    }, {
        "node-inserted": 6
    }],
    6: [function(t, e, n) {
        e.exports = function(t) {
            t || (t = "inserted");
            var e = "@keyframes " + t + "NodeInserted { from { clip: rect(1px, auto, auto, auto); } to { clip: rect(0px, auto, auto, to); } } @-moz-keyframes " + t + "NodeInserted { from { clip: rect(1px, auto, auto, auto); } to { clip: rect(0px, auto, auto, auto); } } @-webkit-keyframes " + t + "NodeInserted { from { clip: rect(1px, auto, auto, auto); } to { clip: rect(0px, auto, auto, auto); } } @-ms-keyframes " + t + "NodeInserted { from { clip: rect(1px, auto, auto, auto); } to { clip: rect(0px, auto, auto, auto); } } @-o-keyframes " + t + "NodeInserted { from { clip: rect(1px, auto, auto, auto); } to { clip: rect(0px, auto, auto, auto); } } ." + t + " {  animation-duration: 0.001s; -o-animation-duration: 0.001s;  -ms-animation-duration: 0.001s; -moz-animation-duration: 0.001s; -webkit-animation-duration: 0.001s; animation-name: " + t + "NodeInserted; -o-animation-name: " + t + "NodeInserted; -ms-animation-name: " + t + "NodeInserted; -moz-animation-name: " + t + "NodeInserted; -webkit-animation-name: " + t + "NodeInserted;}",
                n = document.createElement("style"),
                r = document.createTextNode(e);
            n.appendChild(r), document.head.childNodes.length ? document.head.insertBefore(n, document.head.childNodes[0]) : document.head.appendChild(n), insertListener = function(e) {
                if (e.animationName === t + "NodeInserted" && !e.target.dataset.inserted) {
                    e.target.dataset.inserted = !0;
                    var n = new Event("inserted");
                    n.initEvent("inserted", !1, !0), n.inserted = e.target, n.animationName = e.animationName, e.target.parentNode && e.target.parentNode.dispatchEvent(n), document.dispatchEvent(n)
                }
            }, document.addEventListener("animationstart", insertListener, !1), document.addEventListener("MSAnimationStart", insertListener, !1), document.addEventListener("webkitAnimationStart", insertListener, !1)
        }
    }, {}],
    7: [function(t, e, n) {
        ! function(t) {
            "function" == typeof define && define.amd ? define(t) : "undefined" != typeof e && e.exports ? e.exports = t() : window.pym = t.call(this)
        }(function() {
            var t = "xPYMx",
                e = {},
                n = function(t) {
                    var e = new RegExp("[\\?&]" + t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)"),
                        n = e.exec(location.search);
                    return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
                },
                r = function(t, e) {
                    return "*" === e.xdomain || t.origin.match(new RegExp(e.xdomain + "$")) ? !0 : void 0
                },
                a = function(e, n, r) {
                    var a = ["pym", e, n, r];
                    return a.join(t)
                },
                o = function(e) {
                    var n = ["pym", e, "(\\S+)", "(.+)"];
                    return new RegExp("^" + n.join(t) + "$")
                },
                i = function() {
                    for (var t = document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"), n = t.length, r = 0; n > r; ++r) {
                        var a = t[r];
                        a.setAttribute("data-pym-auto-initialized", ""), "" === a.id && (a.id = "pym-" + r);
                        var o = a.getAttribute("data-pym-src"),
                            i = a.getAttribute("data-pym-xdomain"),
                            s = {};
                        i && (s.xdomain = i), new e.Parent(a.id, o, s)
                    }
                };
            return e.Parent = function(t, e, n) {
                this.id = t, this.url = e, this.el = document.getElementById(t), this.iframe = null, this.settings = {
                    xdomain: "*"
                }, this.messageRegex = o(this.id), this.messageHandlers = {}, this._constructIframe = function() {
                    var t = this.el.offsetWidth.toString();
                    this.iframe = document.createElement("iframe");
                    var e = "",
                        n = this.url.indexOf("#");
                    n > -1 ? (e = this.url.substring(n, this.url.length), this.url = this.url.substring(0, n)) : e = window.location.hash, this.url.indexOf("?") < 0 ? this.url += "?" : this.url += "&", this.iframe.src = this.url + "initialWidth=" + t + "&childId=" + this.id + e, this.iframe.setAttribute("width", "100%"), this.iframe.setAttribute("scrolling", "no"), this.iframe.setAttribute("marginheight", "0"), this.iframe.setAttribute("frameborder", "0"), this.el.appendChild(this.iframe);
                    var r = this;
                    window.addEventListener("resize", function() {
                        r.sendWidth()
                    })
                }, this._fire = function(t, e) {
                    if (t in this.messageHandlers)
                        for (var n = 0; n < this.messageHandlers[t].length; n++) this.messageHandlers[t][n].call(this, e)
                }, this._processMessage = function(t) {
                    if (r(t, this.settings)) {
                        var e = t.data.match(this.messageRegex);
                        if (!e || 3 !== e.length) return !1;
                        var n = e[1],
                            a = e[2];
                        this._fire(n, a)
                    }
                }, this._onHeightMessage = function(t) {
                    var e = parseInt(t);
                    this.iframe.setAttribute("height", e + "px")
                }, this.onMessage = function(t, e) {
                    t in this.messageHandlers || (this.messageHandlers[t] = []), this.messageHandlers[t].push(e)
                }, this.sendMessage = function(t, e) {
                    this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(a(this.id, t, e), "*")
                }, this.sendWidth = function() {
                    var t = this.el.offsetWidth.toString();
                    this.sendMessage("width", t)
                };
                for (var i in n) this.settings[i] = n[i];
                this.onMessage("height", this._onHeightMessage);
                var s = this;
                return window.addEventListener("message", function(t) {
                    return s._processMessage(t)
                }, !1), this._constructIframe(), this.onMessage("setFragmentId", function(t) {
                    "pushState" in history && ("#" === t && (t = window.location.pathname + window.location.search), history.pushState("pym:" + this.id + ":" + t, null, t))
                }), this
            }, e.Child = function(e) {
                this.parentWidth = null, this.id = null, this.settings = {
                    renderCallback: null,
                    xdomain: "*",
                    polling: 0
                }, this.messageRegex = null, this.messageHandlers = {}, this.onMessage = function(t, e) {
                    t in this.messageHandlers || (this.messageHandlers[t] = []), this.messageHandlers[t].push(e)
                }, this._fire = function(t, e) {
                    if (t in this.messageHandlers)
                        for (var n = 0; n < this.messageHandlers[t].length; n++) this.messageHandlers[t][n].call(this, e)
                }, this._processMessage = function(t) {
                    if (r(t, this.settings)) {
                        var e = t.data.match(this.messageRegex);
                        if (e && 3 === e.length) {
                            var n = e[1],
                                a = e[2];
                            this._fire(n, a)
                        }
                    }
                }, this.sendMessage = function(t, e) {
                    window.top.postMessage(a(this.id, t, e), "*")
                }, this.sendHeight = function() {
                    var t = document.getElementsByTagName("body")[0].offsetHeight.toString();
                    this.sendMessage("height", t)
                }, this._onWidthMessage = function(t) {
                    var e = parseInt(t);
                    e !== this.parentWidth && (this.parentWidth = e, this.settings.renderCallback && this.settings.renderCallback(e), this.sendHeight())
                }, this.id = n("childId"), this.messageRegex = new RegExp("^pym" + t + this.id + t + "(\\S+)" + t + "(.+)$");
                var o = parseInt(n("initialWidth"));
                this.onMessage("width", this._onWidthMessage);
                for (var i in e) this.settings[i] = e[i];
                var s = this;
                return window.addEventListener("message", function(t) {
                    s._processMessage(t)
                }, !1), this.settings.renderCallback && this.settings.renderCallback(o), this.sendHeight(), this.settings.polling && window.setInterval(this.sendHeight, this.settings.polling), this
            }, i(), e
        })
    }, {}],
    8: [function(t, e, n) {
        e.exports = globalData.matches;
    }, {}],
    9: [function(t, e, n) {
        e.exports = globalData.teams;
    }, {}],
    10: [function(t, e, n) {
        "use strict";
        var r = t("events"),
            a = new r.EventEmitter;
        e.exports = a
    }, {
        events: 2
    }],
    11: [function(t, e, n) {
        "use strict";
        var r = t("./utils/index.js"),
            a = t("./emitter"),
            o = t("pym.js"),
            i = new o.Child,
            s = t("./views/table"),
            l = new s($("#probabilities-table")),
            u = t("./views/groups"),
            c = new u($("#groups"));
        if (r.gamesTabEnabled) var f = t("./views/calendar"),
            h = new f($("#calendar"));
        var d = c,
            p = function(t) {
                return function() {
                    d !== t && d.$el.parent().fadeOut("fast", function() {
                        t.$el.parent().fadeIn("fast"), d = t, i.sendHeight()
                    })
                }
            };
        $("label[for=group-switch]").click(p(c)), $("label[for=table-switch]").click(p(l)), r.gamesTabEnabled && $("label[for=games-switch]").click(p(h));
        var g = $(window),
            m = [g.width()];
        g.resize(function() {
            m.unshift($(window).width()), m.length > 3 && m.pop();
            var t = Math.max.apply(null, m),
                e = Math.min.apply(null, m);
            t >= 960 && 960 > e && a.emit("redraw"), t >= 760 && 760 > e && a.emit("redraw")
        }), $(".placeholder-image").remove(), i.sendHeight()
    }, {
        "./emitter": 10,
        "./utils/index.js": 13,
        "./views/calendar": 14,
        "./views/groups": 16,
        "./views/table": 17,
        "pym.js": 7
    }],
    12: [function(require, module, exports) {
        ! function(window, document, undefined) {
            ! function(t) {
                "use strict";
                "function" == typeof define && define.amd ? define(["jquery"], t) : jQuery && !jQuery.fn.dataTable && t(jQuery)
            }(function($) {
                "use strict";
                var DataTable = function(oInit) {
                    function _fnAddColumn(t, e) {
                        var n = DataTable.defaults.columns,
                            r = t.aoColumns.length,
                            a = $.extend({}, DataTable.models.oColumn, n, {
                                sSortingClass: t.oClasses.sSortable,
                                sSortingClassJUI: t.oClasses.sSortJUI,
                                nTh: e ? e : document.createElement("th"),
                                sTitle: n.sTitle ? n.sTitle : e ? e.innerHTML : "",
                                aDataSort: n.aDataSort ? n.aDataSort : [r],
                                mData: n.mData ? n.oDefaults : r
                            });
                        if (t.aoColumns.push(a), t.aoPreSearchCols[r] === undefined || null === t.aoPreSearchCols[r]) t.aoPreSearchCols[r] = $.extend({}, DataTable.models.oSearch);
                        else {
                            var o = t.aoPreSearchCols[r];
                            o.bRegex === undefined && (o.bRegex = !0), o.bSmart === undefined && (o.bSmart = !0), o.bCaseInsensitive === undefined && (o.bCaseInsensitive = !0)
                        }
                        _fnColumnOptions(t, r, null)
                    }

                    function _fnColumnOptions(t, e, n) {
                        var r = t.aoColumns[e];
                        n !== undefined && null !== n && (n.mDataProp && !n.mData && (n.mData = n.mDataProp), n.sType !== undefined && (r.sType = n.sType, r._bAutoType = !1), $.extend(r, n), _fnMap(r, n, "sWidth", "sWidthOrig"), n.iDataSort !== undefined && (r.aDataSort = [n.iDataSort]), _fnMap(r, n, "aDataSort"));
                        var a = r.mRender ? _fnGetObjectDataFn(r.mRender) : null,
                            o = _fnGetObjectDataFn(r.mData);
                        r.fnGetData = function(t, e) {
                            var n = o(t, e);
                            return r.mRender && e && "" !== e ? a(n, e, t) : n
                        }, r.fnSetData = _fnSetObjectDataFn(r.mData), t.oFeatures.bSort || (r.bSortable = !1), !r.bSortable || -1 == $.inArray("asc", r.asSorting) && -1 == $.inArray("desc", r.asSorting) ? (r.sSortingClass = t.oClasses.sSortableNone, r.sSortingClassJUI = "") : -1 == $.inArray("asc", r.asSorting) && -1 == $.inArray("desc", r.asSorting) ? (r.sSortingClass = t.oClasses.sSortable, r.sSortingClassJUI = t.oClasses.sSortJUI) : -1 != $.inArray("asc", r.asSorting) && -1 == $.inArray("desc", r.asSorting) ? (r.sSortingClass = t.oClasses.sSortableAsc, r.sSortingClassJUI = t.oClasses.sSortJUIAscAllowed) : -1 == $.inArray("asc", r.asSorting) && -1 != $.inArray("desc", r.asSorting) && (r.sSortingClass = t.oClasses.sSortableDesc, r.sSortingClassJUI = t.oClasses.sSortJUIDescAllowed)
                    }

                    function _fnAdjustColumnSizing(t) {
                        if (t.oFeatures.bAutoWidth === !1) return !1;
                        _fnCalculateColumnWidths(t);
                        for (var e = 0, n = t.aoColumns.length; n > e; e++) t.aoColumns[e].nTh.style.width = t.aoColumns[e].sWidth
                    }

                    function _fnVisibleToColumnIndex(t, e) {
                        var n = _fnGetColumns(t, "bVisible");
                        return "number" == typeof n[e] ? n[e] : null
                    }

                    function _fnColumnIndexToVisible(t, e) {
                        var n = _fnGetColumns(t, "bVisible"),
                            r = $.inArray(e, n);
                        return -1 !== r ? r : null
                    }

                    function _fnVisbleColumns(t) {
                        return _fnGetColumns(t, "bVisible").length
                    }

                    function _fnGetColumns(t, e) {
                        var n = [];
                        return $.map(t.aoColumns, function(t, r) {
                            t[e] && n.push(r)
                        }), n
                    }

                    function _fnDetectType(t) {
                        for (var e = DataTable.ext.aTypes, n = e.length, r = 0; n > r; r++) {
                            var a = e[r](t);
                            if (null !== a) return a
                        }
                        return "string"
                    }

                    function _fnReOrderIndex(t, e) {
                        for (var n = e.split(","), r = [], a = 0, o = t.aoColumns.length; o > a; a++)
                            for (var i = 0; o > i; i++)
                                if (t.aoColumns[a].sName == n[i]) {
                                    r.push(i);
                                    break
                                }
                        return r
                    }

                    function _fnColumnOrdering(t) {
                        for (var e = "", n = 0, r = t.aoColumns.length; r > n; n++) e += t.aoColumns[n].sName + ",";
                        return e.length == r ? "" : e.slice(0, -1)
                    }

                    function _fnApplyColumnDefs(t, e, n, r) {
                        var a, o, i, s, l, u;
                        if (e)
                            for (a = e.length - 1; a >= 0; a--) {
                                var c = e[a].aTargets;
                                for ($.isArray(c) || _fnLog(t, 1, "aTargets must be an array of targets, not a " + typeof c), i = 0, s = c.length; s > i; i++)
                                    if ("number" == typeof c[i] && c[i] >= 0) {
                                        for (; t.aoColumns.length <= c[i];) _fnAddColumn(t);
                                        r(c[i], e[a])
                                    } else if ("number" == typeof c[i] && c[i] < 0) r(t.aoColumns.length + c[i], e[a]);
                                else if ("string" == typeof c[i])
                                    for (l = 0, u = t.aoColumns.length; u > l; l++)("_all" == c[i] || $(t.aoColumns[l].nTh).hasClass(c[i])) && r(l, e[a])
                            }
                        if (n)
                            for (a = 0, o = n.length; o > a; a++) r(a, n[a])
                    }

                    function _fnAddData(t, e) {
                        var n, r = $.isArray(e) ? e.slice() : $.extend(!0, {}, e),
                            a = t.aoData.length,
                            o = $.extend(!0, {}, DataTable.models.oRow);
                        o._aData = r, t.aoData.push(o);
                        for (var i, s = 0, l = t.aoColumns.length; l > s; s++)
                            if (n = t.aoColumns[s], "function" == typeof n.fnRender && n.bUseRendered && null !== n.mData ? _fnSetCellData(t, a, s, _fnRender(t, a, s)) : _fnSetCellData(t, a, s, _fnGetCellData(t, a, s)), n._bAutoType && "string" != n.sType) {
                                var u = _fnGetCellData(t, a, s, "type");
                                null !== u && "" !== u && (i = _fnDetectType(u), null === n.sType ? n.sType = i : n.sType != i && "html" != n.sType && (n.sType = "string"))
                            }
                        return t.aiDisplayMaster.push(a), t.oFeatures.bDeferRender || _fnCreateTr(t, a), a
                    }

                    function _fnGatherData(t) {
                        var e, n, r, a, o, i, s, l, u, c, f, h, d, p, g;
                        if (t.bDeferLoading || null === t.sAjaxSource)
                            for (s = t.nTBody.firstChild; s;) {
                                if ("TR" == s.nodeName.toUpperCase())
                                    for (l = t.aoData.length, s._DT_RowIndex = l, t.aoData.push($.extend(!0, {}, DataTable.models.oRow, {
                                            nTr: s
                                        })), t.aiDisplayMaster.push(l), i = s.firstChild, r = 0; i;) d = i.nodeName.toUpperCase(), ("TD" == d || "TH" == d) && (_fnSetCellData(t, l, r, $.trim(i.innerHTML)), r++), i = i.nextSibling;
                                s = s.nextSibling
                            }
                        for (o = _fnGetTrNodes(t), a = [], e = 0, n = o.length; n > e; e++)
                            for (i = o[e].firstChild; i;) d = i.nodeName.toUpperCase(), ("TD" == d || "TH" == d) && a.push(i), i = i.nextSibling;
                        for (f = 0, h = t.aoColumns.length; h > f; f++) {
                            p = t.aoColumns[f], null === p.sTitle && (p.sTitle = p.nTh.innerHTML);
                            var m, _, v, y, b = p._bAutoType,
                                w = "function" == typeof p.fnRender,
                                S = null !== p.sClass,
                                x = p.bVisible;
                            if (b || w || S || !x)
                                for (u = 0, c = t.aoData.length; c > u; u++) g = t.aoData[u], m = a[u * h + f], b && "string" != p.sType && (y = _fnGetCellData(t, u, f, "type"), "" !== y && (_ = _fnDetectType(y), null === p.sType ? p.sType = _ : p.sType != _ && "html" != p.sType && (p.sType = "string"))), p.mRender ? m.innerHTML = _fnGetCellData(t, u, f, "display") : p.mData !== f && (m.innerHTML = _fnGetCellData(t, u, f, "display")), w && (v = _fnRender(t, u, f), m.innerHTML = v, p.bUseRendered && _fnSetCellData(t, u, f, v)), S && (m.className += " " + p.sClass), x ? g._anHidden[f] = null : (g._anHidden[f] = m, m.parentNode.removeChild(m)), p.fnCreatedCell && p.fnCreatedCell.call(t.oInstance, m, _fnGetCellData(t, u, f, "display"), g._aData, u, f)
                        }
                        if (0 !== t.aoRowCreatedCallback.length)
                            for (e = 0, n = t.aoData.length; n > e; e++) g = t.aoData[e], _fnCallbackFire(t, "aoRowCreatedCallback", null, [g.nTr, g._aData, e])
                    }

                    function _fnNodeToDataIndex(t, e) {
                        return e._DT_RowIndex !== undefined ? e._DT_RowIndex : null
                    }

                    function _fnNodeToColumnIndex(t, e, n) {
                        for (var r = _fnGetTdNodes(t, e), a = 0, o = t.aoColumns.length; o > a; a++)
                            if (r[a] === n) return a;
                        return -1
                    }

                    function _fnGetRowData(t, e, n, r) {
                        for (var a = [], o = 0, i = r.length; i > o; o++) a.push(_fnGetCellData(t, e, r[o], n));
                        return a
                    }

                    function _fnGetCellData(t, e, n, r) {
                        var a, o = t.aoColumns[n],
                            i = t.aoData[e]._aData;
                        if ((a = o.fnGetData(i, r)) === undefined) return t.iDrawError != t.iDraw && null === o.sDefaultContent && (_fnLog(t, 0, "Requested unknown parameter " + ("function" == typeof o.mData ? "{mData function}" : "'" + o.mData + "'") + " from the data source for row " + e), t.iDrawError = t.iDraw), o.sDefaultContent;
                        if (null === a && null !== o.sDefaultContent) a = o.sDefaultContent;
                        else if ("function" == typeof a) return a();
                        return "display" == r && null === a ? "" : a
                    }

                    function _fnSetCellData(t, e, n, r) {
                        var a = t.aoColumns[n],
                            o = t.aoData[e]._aData;
                        a.fnSetData(o, r)
                    }

                    function _fnGetObjectDataFn(t) {
                        if (null === t) return function(t, e) {
                            return null
                        };
                        if ("function" == typeof t) return function(e, n, r) {
                            return t(e, n, r)
                        };
                        if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[")) return function(e, n) {
                            return e[t]
                        };
                        var e = function(t, n, r) {
                            var a, o, i, s = r.split(".");
                            if ("" !== r)
                                for (var l = 0, u = s.length; u > l; l++) {
                                    if (a = s[l].match(__reArray)) {
                                        s[l] = s[l].replace(__reArray, ""), "" !== s[l] && (t = t[s[l]]), o = [], s.splice(0, l + 1), i = s.join(".");
                                        for (var c = 0, f = t.length; f > c; c++) o.push(e(t[c], n, i));
                                        var h = a[0].substring(1, a[0].length - 1);
                                        t = "" === h ? o : o.join(h);
                                        break
                                    }
                                    if (null === t || t[s[l]] === undefined) return undefined;
                                    t = t[s[l]]
                                }
                            return t
                        };
                        return function(n, r) {
                            return e(n, r, t)
                        }
                    }

                    function _fnSetObjectDataFn(t) {
                        if (null === t) return function(t, e) {};
                        if ("function" == typeof t) return function(e, n) {
                            t(e, "set", n)
                        };
                        if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[")) return function(e, n) {
                            e[t] = n
                        };
                        var e = function(t, n, r) {
                            for (var a, o, i, s, l = r.split("."), u = 0, c = l.length - 1; c > u; u++) {
                                if (o = l[u].match(__reArray)) {
                                    l[u] = l[u].replace(__reArray, ""), t[l[u]] = [], a = l.slice(), a.splice(0, u + 1), s = a.join(".");
                                    for (var f = 0, h = n.length; h > f; f++) i = {}, e(i, n[f], s), t[l[u]].push(i);
                                    return
                                }(null === t[l[u]] || t[l[u]] === undefined) && (t[l[u]] = {}), t = t[l[u]]
                            }
                            t[l[l.length - 1].replace(__reArray, "")] = n
                        };
                        return function(n, r) {
                            return e(n, r, t)
                        }
                    }

                    function _fnGetDataMaster(t) {
                        for (var e = [], n = t.aoData.length, r = 0; n > r; r++) e.push(t.aoData[r]._aData);
                        return e
                    }

                    function _fnClearTable(t) {
                        t.aoData.splice(0, t.aoData.length), t.aiDisplayMaster.splice(0, t.aiDisplayMaster.length), t.aiDisplay.splice(0, t.aiDisplay.length), _fnCalculateEnd(t)
                    }

                    function _fnDeleteIndex(t, e) {
                        for (var n = -1, r = 0, a = t.length; a > r; r++) t[r] == e ? n = r : t[r] > e && t[r]--; - 1 != n && t.splice(n, 1)
                    }

                    function _fnRender(t, e, n) {
                        var r = t.aoColumns[n];
                        return r.fnRender({
                            iDataRow: e,
                            iDataColumn: n,
                            oSettings: t,
                            aData: t.aoData[e]._aData,
                            mDataProp: r.mData
                        }, _fnGetCellData(t, e, n, "display"))
                    }

                    function _fnCreateTr(t, e) {
                        var n, r = t.aoData[e];
                        if (null === r.nTr) {
                            r.nTr = document.createElement("tr"), r.nTr._DT_RowIndex = e, r._aData.DT_RowId && (r.nTr.id = r._aData.DT_RowId), r._aData.DT_RowClass && (r.nTr.className = r._aData.DT_RowClass);
                            for (var a = 0, o = t.aoColumns.length; o > a; a++) {
                                var i = t.aoColumns[a];
                                n = document.createElement(i.sCellType), n.innerHTML = "function" != typeof i.fnRender || i.bUseRendered && null !== i.mData ? _fnGetCellData(t, e, a, "display") : _fnRender(t, e, a), null !== i.sClass && (n.className = i.sClass), i.bVisible ? (r.nTr.appendChild(n), r._anHidden[a] = null) : r._anHidden[a] = n, i.fnCreatedCell && i.fnCreatedCell.call(t.oInstance, n, _fnGetCellData(t, e, a, "display"), r._aData, e, a)
                            }
                            _fnCallbackFire(t, "aoRowCreatedCallback", null, [r.nTr, r._aData, e])
                        }
                    }

                    function _fnBuildHead(t) {
                        var e, n, r, a = $("th, td", t.nTHead).length;
                        if (0 !== a)
                            for (e = 0, r = t.aoColumns.length; r > e; e++) n = t.aoColumns[e].nTh, n.setAttribute("role", "columnheader"), t.aoColumns[e].bSortable && (n.setAttribute("tabindex", t.iTabIndex), n.setAttribute("aria-controls", t.sTableId)), null !== t.aoColumns[e].sClass && $(n).addClass(t.aoColumns[e].sClass), t.aoColumns[e].sTitle != n.innerHTML && (n.innerHTML = t.aoColumns[e].sTitle);
                        else {
                            var o = document.createElement("tr");
                            for (e = 0, r = t.aoColumns.length; r > e; e++) n = t.aoColumns[e].nTh, n.innerHTML = t.aoColumns[e].sTitle, n.setAttribute("tabindex", "0"), null !== t.aoColumns[e].sClass && $(n).addClass(t.aoColumns[e].sClass), o.appendChild(n);
                            $(t.nTHead).html("")[0].appendChild(o), _fnDetectHeader(t.aoHeader, t.nTHead)
                        }
                        if ($(t.nTHead).children("tr").attr("role", "row"), t.bJUI)
                            for (e = 0, r = t.aoColumns.length; r > e; e++) {
                                n = t.aoColumns[e].nTh;
                                var i = document.createElement("div");
                                i.className = t.oClasses.sSortJUIWrapper, $(n).contents().appendTo(i);
                                var s = document.createElement("span");
                                s.className = t.oClasses.sSortIcon, i.appendChild(s), n.appendChild(i)
                            }
                        if (t.oFeatures.bSort)
                            for (e = 0; e < t.aoColumns.length; e++) t.aoColumns[e].bSortable !== !1 ? _fnSortAttachListener(t, t.aoColumns[e].nTh, e) : $(t.aoColumns[e].nTh).addClass(t.oClasses.sSortableNone);
                        if ("" !== t.oClasses.sFooterTH && $(t.nTFoot).children("tr").children("th").addClass(t.oClasses.sFooterTH), null !== t.nTFoot) {
                            var l = _fnGetUniqueThs(t, null, t.aoFooter);
                            for (e = 0, r = t.aoColumns.length; r > e; e++) l[e] && (t.aoColumns[e].nTf = l[e], t.aoColumns[e].sClass && $(l[e]).addClass(t.aoColumns[e].sClass))
                        }
                    }

                    function _fnDrawHead(t, e, n) {
                        var r, a, o, i, s, l, u, c, f, h = [],
                            d = [],
                            p = t.aoColumns.length;
                        for (n === undefined && (n = !1), r = 0, a = e.length; a > r; r++) {
                            for (h[r] = e[r].slice(), h[r].nTr = e[r].nTr, o = p - 1; o >= 0; o--) t.aoColumns[o].bVisible || n || h[r].splice(o, 1);
                            d.push([])
                        }
                        for (r = 0, a = h.length; a > r; r++) {
                            if (u = h[r].nTr)
                                for (; l = u.firstChild;) u.removeChild(l);
                            for (o = 0, i = h[r].length; i > o; o++)
                                if (c = 1, f = 1, d[r][o] === undefined) {
                                    for (u.appendChild(h[r][o].cell), d[r][o] = 1; h[r + c] !== undefined && h[r][o].cell == h[r + c][o].cell;) d[r + c][o] = 1, c++;
                                    for (; h[r][o + f] !== undefined && h[r][o].cell == h[r][o + f].cell;) {
                                        for (s = 0; c > s; s++) d[r + s][o + f] = 1;
                                        f++
                                    }
                                    h[r][o].cell.rowSpan = c, h[r][o].cell.colSpan = f
                                }
                        }
                    }

                    function _fnDraw(t) {
                        var e = _fnCallbackFire(t, "aoPreDrawCallback", "preDraw", [t]);
                        if (-1 !== $.inArray(!1, e)) return void _fnProcessingDisplay(t, !1);
                        var n, r, a, o = [],
                            i = 0,
                            s = t.asStripeClasses.length,
                            l = t.aoOpenRows.length;
                        if (t.bDrawing = !0, t.iInitDisplayStart !== undefined && -1 != t.iInitDisplayStart && (t.oFeatures.bServerSide ? t._iDisplayStart = t.iInitDisplayStart : t._iDisplayStart = t.iInitDisplayStart >= t.fnRecordsDisplay() ? 0 : t.iInitDisplayStart, t.iInitDisplayStart = -1, _fnCalculateEnd(t)), t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++;
                        else if (t.oFeatures.bServerSide) {
                            if (!t.bDestroying && !_fnAjaxUpdate(t)) return
                        } else t.iDraw++;
                        if (0 !== t.aiDisplay.length) {
                            var u = t._iDisplayStart,
                                c = t._iDisplayEnd;
                            t.oFeatures.bServerSide && (u = 0, c = t.aoData.length);
                            for (var f = u; c > f; f++) {
                                var h = t.aoData[t.aiDisplay[f]];
                                null === h.nTr && _fnCreateTr(t, t.aiDisplay[f]);
                                var d = h.nTr;
                                if (0 !== s) {
                                    var p = t.asStripeClasses[i % s];
                                    h._sRowStripe != p && ($(d).removeClass(h._sRowStripe).addClass(p), h._sRowStripe = p)
                                }
                                if (_fnCallbackFire(t, "aoRowCallback", null, [d, t.aoData[t.aiDisplay[f]]._aData, i, f]), o.push(d), i++, 0 !== l)
                                    for (var g = 0; l > g; g++)
                                        if (d == t.aoOpenRows[g].nParent) {
                                            o.push(t.aoOpenRows[g].nTr);
                                            break
                                        }
                            }
                        } else {
                            o[0] = document.createElement("tr"), t.asStripeClasses[0] && (o[0].className = t.asStripeClasses[0]);
                            var m = t.oLanguage,
                                _ = m.sZeroRecords;
                            1 != t.iDraw || null === t.sAjaxSource || t.oFeatures.bServerSide ? m.sEmptyTable && 0 === t.fnRecordsTotal() && (_ = m.sEmptyTable) : _ = m.sLoadingRecords;
                            var v = document.createElement("td");
                            v.setAttribute("valign", "top"), v.colSpan = _fnVisbleColumns(t), v.className = t.oClasses.sRowEmpty, v.innerHTML = _fnInfoMacros(t, _), o[i].appendChild(v)
                        }
                        _fnCallbackFire(t, "aoHeaderCallback", "header", [$(t.nTHead).children("tr")[0], _fnGetDataMaster(t), t._iDisplayStart, t.fnDisplayEnd(), t.aiDisplay]), _fnCallbackFire(t, "aoFooterCallback", "footer", [$(t.nTFoot).children("tr")[0], _fnGetDataMaster(t), t._iDisplayStart, t.fnDisplayEnd(), t.aiDisplay]);
                        var y, b = document.createDocumentFragment(),
                            w = document.createDocumentFragment();
                        if (t.nTBody) {
                            if (y = t.nTBody.parentNode, w.appendChild(t.nTBody), !t.oScroll.bInfinite || !t._bInitComplete || t.bSorted || t.bFiltered)
                                for (; a = t.nTBody.firstChild;) t.nTBody.removeChild(a);
                            for (n = 0, r = o.length; r > n; n++) b.appendChild(o[n]);
                            t.nTBody.appendChild(b), null !== y && y.appendChild(t.nTBody)
                        }
                        _fnCallbackFire(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1, t.oFeatures.bServerSide && (_fnProcessingDisplay(t, !1), t._bInitComplete || _fnInitComplete(t))
                    }

                    function _fnReDraw(t) {
                        t.oFeatures.bSort ? _fnSort(t, t.oPreviousSearch) : t.oFeatures.bFilter ? _fnFilterComplete(t, t.oPreviousSearch) : (_fnCalculateEnd(t), _fnDraw(t))
                    }

                    function _fnAddOptionsHtml(t) {
                        var e = $("<div></div>")[0];
                        t.nTable.parentNode.insertBefore(e, t.nTable), t.nTableWrapper = $('<div id="' + t.sTableId + '_wrapper" class="' + t.oClasses.sWrapper + '" role="grid"></div>')[0], t.nTableReinsertBefore = t.nTable.nextSibling;
                        for (var n, r, a, o, i, s, l, u = t.nTableWrapper, c = t.sDom.split(""), f = 0; f < c.length; f++) {
                            if (r = 0, a = c[f], "<" == a) {
                                if (o = $("<div></div>")[0], i = c[f + 1], "'" == i || '"' == i) {
                                    for (s = "", l = 2; c[f + l] != i;) s += c[f + l], l++;
                                    if ("H" == s ? s = t.oClasses.sJUIHeader : "F" == s && (s = t.oClasses.sJUIFooter), -1 != s.indexOf(".")) {
                                        var h = s.split(".");
                                        o.id = h[0].substr(1, h[0].length - 1), o.className = h[1]
                                    } else "#" == s.charAt(0) ? o.id = s.substr(1, s.length - 1) : o.className = s;
                                    f += l
                                }
                                u.appendChild(o), u = o
                            } else if (">" == a) u = u.parentNode;
                            else if ("l" == a && t.oFeatures.bPaginate && t.oFeatures.bLengthChange) n = _fnFeatureHtmlLength(t), r = 1;
                            else if ("f" == a && t.oFeatures.bFilter) n = _fnFeatureHtmlFilter(t), r = 1;
                            else if ("r" == a && t.oFeatures.bProcessing) n = _fnFeatureHtmlProcessing(t), r = 1;
                            else if ("t" == a) n = _fnFeatureHtmlTable(t), r = 1;
                            else if ("i" == a && t.oFeatures.bInfo) n = _fnFeatureHtmlInfo(t), r = 1;
                            else if ("p" == a && t.oFeatures.bPaginate) n = _fnFeatureHtmlPaginate(t), r = 1;
                            else if (0 !== DataTable.ext.aoFeatures.length)
                                for (var d = DataTable.ext.aoFeatures, p = 0, g = d.length; g > p; p++)
                                    if (a == d[p].cFeature) {
                                        n = d[p].fnInit(t), n && (r = 1);
                                        break
                                    }
                            1 == r && null !== n && ("object" != typeof t.aanFeatures[a] && (t.aanFeatures[a] = []), t.aanFeatures[a].push(n), u.appendChild(n))
                        }
                        e.parentNode.replaceChild(t.nTableWrapper, e)
                    }

                    function _fnDetectHeader(t, e) {
                        var n, r, a, o, i, s, l, u, c, f, h, d = $(e).children("tr"),
                            p = function(t, e, n) {
                                for (var r = t[e]; r[n];) n++;
                                return n
                            };
                        for (t.splice(0, t.length), a = 0, s = d.length; s > a; a++) t.push([]);
                        for (a = 0, s = d.length; s > a; a++)
                            for (n = d[a], u = 0, r = n.firstChild; r;) {
                                if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase())
                                    for (c = 1 * r.getAttribute("colspan"), f = 1 * r.getAttribute("rowspan"), c = c && 0 !== c && 1 !== c ? c : 1, f = f && 0 !== f && 1 !== f ? f : 1, l = p(t, a, u), h = 1 === c ? !0 : !1, i = 0; c > i; i++)
                                        for (o = 0; f > o; o++) t[a + o][l + i] = {
                                            cell: r,
                                            unique: h
                                        }, t[a + o].nTr = n;
                                r = r.nextSibling
                            }
                    }

                    function _fnGetUniqueThs(t, e, n) {
                        var r = [];
                        n || (n = t.aoHeader, e && (n = [], _fnDetectHeader(n, e)));
                        for (var a = 0, o = n.length; o > a; a++)
                            for (var i = 0, s = n[a].length; s > i; i++) !n[a][i].unique || r[i] && t.bSortCellsTop || (r[i] = n[a][i].cell);
                        return r
                    }

                    function _fnAjaxUpdate(t) {
                        if (t.bAjaxDataGet) {
                            t.iDraw++, _fnProcessingDisplay(t, !0);
                            var e = (t.aoColumns.length, _fnAjaxParameters(t));
                            return _fnServerParams(t, e), t.fnServerData.call(t.oInstance, t.sAjaxSource, e, function(e) {
                                _fnAjaxUpdateDraw(t, e)
                            }, t), !1
                        }
                        return !0
                    }

                    function _fnAjaxParameters(t) {
                        var e, n, r, a, o, i = t.aoColumns.length,
                            s = [];
                        for (s.push({
                                name: "sEcho",
                                value: t.iDraw
                            }), s.push({
                                name: "iColumns",
                                value: i
                            }), s.push({
                                name: "sColumns",
                                value: _fnColumnOrdering(t)
                            }), s.push({
                                name: "iDisplayStart",
                                value: t._iDisplayStart
                            }), s.push({
                                name: "iDisplayLength",
                                value: t.oFeatures.bPaginate !== !1 ? t._iDisplayLength : -1
                            }), a = 0; i > a; a++) e = t.aoColumns[a].mData, s.push({
                            name: "mDataProp_" + a,
                            value: "function" == typeof e ? "function" : e
                        });
                        if (t.oFeatures.bFilter !== !1)
                            for (s.push({
                                    name: "sSearch",
                                    value: t.oPreviousSearch.sSearch
                                }), s.push({
                                    name: "bRegex",
                                    value: t.oPreviousSearch.bRegex
                                }), a = 0; i > a; a++) s.push({
                                name: "sSearch_" + a,
                                value: t.aoPreSearchCols[a].sSearch
                            }), s.push({
                                name: "bRegex_" + a,
                                value: t.aoPreSearchCols[a].bRegex
                            }), s.push({
                                name: "bSearchable_" + a,
                                value: t.aoColumns[a].bSearchable
                            });
                        if (t.oFeatures.bSort !== !1) {
                            var l = 0;
                            for (n = null !== t.aaSortingFixed ? t.aaSortingFixed.concat(t.aaSorting) : t.aaSorting.slice(), a = 0; a < n.length; a++)
                                for (r = t.aoColumns[n[a][0]].aDataSort, o = 0; o < r.length; o++) s.push({
                                    name: "iSortCol_" + l,
                                    value: r[o]
                                }), s.push({
                                    name: "sSortDir_" + l,
                                    value: n[a][1]
                                }), l++;
                            for (s.push({
                                    name: "iSortingCols",
                                    value: l
                                }), a = 0; i > a; a++) s.push({
                                name: "bSortable_" + a,
                                value: t.aoColumns[a].bSortable
                            })
                        }
                        return s
                    }

                    function _fnServerParams(t, e) {
                        _fnCallbackFire(t, "aoServerParams", "serverParams", [e])
                    }

                    function _fnAjaxUpdateDraw(t, e) {
                        if (e.sEcho !== undefined) {
                            if (1 * e.sEcho < t.iDraw) return;
                            t.iDraw = 1 * e.sEcho
                        }(!t.oScroll.bInfinite || t.oScroll.bInfinite && (t.bSorted || t.bFiltered)) && _fnClearTable(t), t._iRecordsTotal = parseInt(e.iTotalRecords, 10), t._iRecordsDisplay = parseInt(e.iTotalDisplayRecords, 10);
                        var n, r = _fnColumnOrdering(t),
                            a = e.sColumns !== undefined && "" !== r && e.sColumns != r;
                        a && (n = _fnReOrderIndex(t, e.sColumns));
                        for (var o = _fnGetObjectDataFn(t.sAjaxDataProp)(e), i = 0, s = o.length; s > i; i++)
                            if (a) {
                                for (var l = [], u = 0, c = t.aoColumns.length; c > u; u++) l.push(o[i][n[u]]);
                                _fnAddData(t, l)
                            } else _fnAddData(t, o[i]);
                        t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, _fnDraw(t), t.bAjaxDataGet = !0, _fnProcessingDisplay(t, !1)
                    }

                    function _fnFeatureHtmlFilter(t) {
                        var e = t.oPreviousSearch,
                            n = t.oLanguage.sSearch;
                        n = -1 !== n.indexOf("_INPUT_") ? n.replace("_INPUT_", '<input type="text" />') : "" === n ? '<input type="text" />' : n + ' <input type="text" />';
                        var r = document.createElement("div");
                        r.className = t.oClasses.sFilter, r.innerHTML = "<label>" + n + "</label>", t.aanFeatures.f || (r.id = t.sTableId + "_filter");
                        var a = $('input[type="text"]', r);
                        return r._DT_Input = a[0], a.val(e.sSearch.replace('"', "&quot;")), a.bind("keyup.DT", function(n) {
                            for (var r = t.aanFeatures.f, a = "" === this.value ? "" : this.value, o = 0, i = r.length; i > o; o++) r[o] != $(this).parents("div.dataTables_filter")[0] && $(r[o]._DT_Input).val(a);
                            a != e.sSearch && _fnFilterComplete(t, {
                                sSearch: a,
                                bRegex: e.bRegex,
                                bSmart: e.bSmart,
                                bCaseInsensitive: e.bCaseInsensitive
                            })
                        }), a.attr("aria-controls", t.sTableId).bind("keypress.DT", function(t) {
                            return 13 == t.keyCode ? !1 : void 0
                        }), r
                    }

                    function _fnFilterComplete(t, e, n) {
                        var r = t.oPreviousSearch,
                            a = t.aoPreSearchCols,
                            o = function(t) {
                                r.sSearch = t.sSearch, r.bRegex = t.bRegex, r.bSmart = t.bSmart, r.bCaseInsensitive = t.bCaseInsensitive
                            };
                        if (t.oFeatures.bServerSide) o(e);
                        else {
                            _fnFilter(t, e.sSearch, n, e.bRegex, e.bSmart, e.bCaseInsensitive), o(e);
                            for (var i = 0; i < t.aoPreSearchCols.length; i++) _fnFilterColumn(t, a[i].sSearch, i, a[i].bRegex, a[i].bSmart, a[i].bCaseInsensitive);
                            _fnFilterCustom(t)
                        }
                        t.bFiltered = !0, $(t.oInstance).trigger("filter", t), t._iDisplayStart = 0, _fnCalculateEnd(t), _fnDraw(t), _fnBuildSearchArray(t, 0)
                    }

                    function _fnFilterCustom(t) {
                        for (var e = DataTable.ext.afnFiltering, n = _fnGetColumns(t, "bSearchable"), r = 0, a = e.length; a > r; r++)
                            for (var o = 0, i = 0, s = t.aiDisplay.length; s > i; i++) {
                                var l = t.aiDisplay[i - o],
                                    u = e[r](t, _fnGetRowData(t, l, "filter", n), l);
                                u || (t.aiDisplay.splice(i - o, 1), o++)
                            }
                    }

                    function _fnFilterColumn(t, e, n, r, a, o) {
                        if ("" !== e)
                            for (var i = 0, s = _fnFilterCreateSearch(e, r, a, o), l = t.aiDisplay.length - 1; l >= 0; l--) {
                                var u = _fnDataToSearch(_fnGetCellData(t, t.aiDisplay[l], n, "filter"), t.aoColumns[n].sType);
                                s.test(u) || (t.aiDisplay.splice(l, 1), i++)
                            }
                    }

                    function _fnFilter(t, e, n, r, a, o) {
                        var i, s = _fnFilterCreateSearch(e, r, a, o),
                            l = t.oPreviousSearch;
                        if (n || (n = 0), 0 !== DataTable.ext.afnFiltering.length && (n = 1), e.length <= 0) t.aiDisplay.splice(0, t.aiDisplay.length), t.aiDisplay = t.aiDisplayMaster.slice();
                        else if (t.aiDisplay.length == t.aiDisplayMaster.length || l.sSearch.length > e.length || 1 == n || 0 !== e.indexOf(l.sSearch))
                            for (t.aiDisplay.splice(0, t.aiDisplay.length), _fnBuildSearchArray(t, 1), i = 0; i < t.aiDisplayMaster.length; i++) s.test(t.asDataSearch[i]) && t.aiDisplay.push(t.aiDisplayMaster[i]);
                        else {
                            var u = 0;
                            for (i = 0; i < t.asDataSearch.length; i++) s.test(t.asDataSearch[i]) || (t.aiDisplay.splice(i - u, 1), u++)
                        }
                    }

                    function _fnBuildSearchArray(t, e) {
                        if (!t.oFeatures.bServerSide) {
                            t.asDataSearch = [];
                            for (var n = _fnGetColumns(t, "bSearchable"), r = 1 === e ? t.aiDisplayMaster : t.aiDisplay, a = 0, o = r.length; o > a; a++) t.asDataSearch[a] = _fnBuildSearchRow(t, _fnGetRowData(t, r[a], "filter", n))
                        }
                    }

                    function _fnBuildSearchRow(t, e) {
                        var n = e.join("  ");
                        return -1 !== n.indexOf("&") && (n = $("<div>").html(n).text()), n.replace(/[\n\r]/g, " ")
                    }

                    function _fnFilterCreateSearch(t, e, n, r) {
                        var a, o;
                        return n ? (a = e ? t.split(" ") : _fnEscapeRegex(t).split(" "), o = "^(?=.*?" + a.join(")(?=.*?") + ").*$", new RegExp(o, r ? "i" : "")) : (t = e ? t : _fnEscapeRegex(t), new RegExp(t, r ? "i" : ""))
                    }

                    function _fnDataToSearch(t, e) {
                        return "function" == typeof DataTable.ext.ofnSearch[e] ? DataTable.ext.ofnSearch[e](t) : null === t ? "" : "html" == e ? t.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "") : "string" == typeof t ? t.replace(/[\r\n]/g, " ") : t
                    }

                    function _fnEscapeRegex(t) {
                        var e = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"],
                            n = new RegExp("(\\" + e.join("|\\") + ")", "g");
                        return t.replace(n, "\\$1")
                    }

                    function _fnFeatureHtmlInfo(t) {
                        var e = document.createElement("div");
                        return e.className = t.oClasses.sInfo, t.aanFeatures.i || (t.aoDrawCallback.push({
                            fn: _fnUpdateInfo,
                            sName: "information"
                        }), e.id = t.sTableId + "_info"), t.nTable.setAttribute("aria-describedby", t.sTableId + "_info"), e
                    }

                    function _fnUpdateInfo(t) {
                        if (t.oFeatures.bInfo && 0 !== t.aanFeatures.i.length) {
                            var e, n = t.oLanguage,
                                r = t._iDisplayStart + 1,
                                a = t.fnDisplayEnd(),
                                o = t.fnRecordsTotal(),
                                i = t.fnRecordsDisplay();
                            e = 0 === i ? n.sInfoEmpty : n.sInfo, i != o && (e += " " + n.sInfoFiltered), e += n.sInfoPostFix, e = _fnInfoMacros(t, e), null !== n.fnInfoCallback && (e = n.fnInfoCallback.call(t.oInstance, t, r, a, o, i, e));
                            for (var s = t.aanFeatures.i, l = 0, u = s.length; u > l; l++) $(s[l]).html(e)
                        }
                    }

                    function _fnInfoMacros(t, e) {
                        var n = t._iDisplayStart + 1,
                            r = t.fnFormatNumber(n),
                            a = t.fnDisplayEnd(),
                            o = t.fnFormatNumber(a),
                            i = t.fnRecordsDisplay(),
                            s = t.fnFormatNumber(i),
                            l = t.fnRecordsTotal(),
                            u = t.fnFormatNumber(l);
                        return t.oScroll.bInfinite && (r = t.fnFormatNumber(1)), e.replace(/_START_/g, r).replace(/_END_/g, o).replace(/_TOTAL_/g, s).replace(/_MAX_/g, u)
                    }

                    function _fnInitialise(t) {
                        var e, n, r = t.iInitDisplayStart;
                        if (t.bInitialised === !1) return void setTimeout(function() {
                            _fnInitialise(t)
                        }, 200);
                        for (_fnAddOptionsHtml(t), _fnBuildHead(t), _fnDrawHead(t, t.aoHeader), t.nTFoot && _fnDrawHead(t, t.aoFooter), _fnProcessingDisplay(t, !0), t.oFeatures.bAutoWidth && _fnCalculateColumnWidths(t), e = 0, n = t.aoColumns.length; n > e; e++) null !== t.aoColumns[e].sWidth && (t.aoColumns[e].nTh.style.width = _fnStringToCss(t.aoColumns[e].sWidth));
                        if (t.oFeatures.bSort ? _fnSort(t) : t.oFeatures.bFilter ? _fnFilterComplete(t, t.oPreviousSearch) : (t.aiDisplay = t.aiDisplayMaster.slice(), _fnCalculateEnd(t), _fnDraw(t)), null !== t.sAjaxSource && !t.oFeatures.bServerSide) {
                            var a = [];
                            return _fnServerParams(t, a), void t.fnServerData.call(t.oInstance, t.sAjaxSource, a, function(n) {
                                var a = "" !== t.sAjaxDataProp ? _fnGetObjectDataFn(t.sAjaxDataProp)(n) : n;
                                for (e = 0; e < a.length; e++) _fnAddData(t, a[e]);
                                t.iInitDisplayStart = r, t.oFeatures.bSort ? _fnSort(t) : (t.aiDisplay = t.aiDisplayMaster.slice(), _fnCalculateEnd(t), _fnDraw(t)), _fnProcessingDisplay(t, !1), _fnInitComplete(t, n)
                            }, t)
                        }
                        t.oFeatures.bServerSide || (_fnProcessingDisplay(t, !1), _fnInitComplete(t))
                    }

                    function _fnInitComplete(t, e) {
                        t._bInitComplete = !0, _fnCallbackFire(t, "aoInitComplete", "init", [t, e])
                    }

                    function _fnLanguageCompat(t) {
                        var e = DataTable.defaults.oLanguage;
                        !t.sEmptyTable && t.sZeroRecords && "No data available in table" === e.sEmptyTable && _fnMap(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && t.sZeroRecords && "Loading..." === e.sLoadingRecords && _fnMap(t, t, "sZeroRecords", "sLoadingRecords")
                    }

                    function _fnFeatureHtmlLength(t) {
                        if (t.oScroll.bInfinite) return null;
                        var e, n, r = 'name="' + t.sTableId + '_length"',
                            a = '<select size="1" ' + r + ">",
                            o = t.aLengthMenu;
                        if (2 == o.length && "object" == typeof o[0] && "object" == typeof o[1])
                            for (e = 0, n = o[0].length; n > e; e++) a += '<option value="' + o[0][e] + '">' + o[1][e] + "</option>";
                        else
                            for (e = 0, n = o.length; n > e; e++) a += '<option value="' + o[e] + '">' + o[e] + "</option>";
                        a += "</select>";
                        var i = document.createElement("div");
                        return t.aanFeatures.l || (i.id = t.sTableId + "_length"), i.className = t.oClasses.sLength, i.innerHTML = "<label>" + t.oLanguage.sLengthMenu.replace("_MENU_", a) + "</label>", $('select option[value="' + t._iDisplayLength + '"]', i).attr("selected", !0), $("select", i).bind("change.DT", function(r) {
                            var a = $(this).val(),
                                o = t.aanFeatures.l;
                            for (e = 0, n = o.length; n > e; e++) o[e] != this.parentNode && $("select", o[e]).val(a);
                            t._iDisplayLength = parseInt(a, 10), _fnCalculateEnd(t), t.fnDisplayEnd() == t.fnRecordsDisplay() && (t._iDisplayStart = t.fnDisplayEnd() - t._iDisplayLength, t._iDisplayStart < 0 && (t._iDisplayStart = 0)), -1 == t._iDisplayLength && (t._iDisplayStart = 0), _fnDraw(t)
                        }), $("select", i).attr("aria-controls", t.sTableId), i
                    }

                    function _fnCalculateEnd(t) {
                        t.oFeatures.bPaginate === !1 ? t._iDisplayEnd = t.aiDisplay.length : t._iDisplayStart + t._iDisplayLength > t.aiDisplay.length || -1 == t._iDisplayLength ? t._iDisplayEnd = t.aiDisplay.length : t._iDisplayEnd = t._iDisplayStart + t._iDisplayLength
                    }

                    function _fnFeatureHtmlPaginate(t) {
                        if (t.oScroll.bInfinite) return null;
                        var e = document.createElement("div");
                        return e.className = t.oClasses.sPaging + t.sPaginationType, DataTable.ext.oPagination[t.sPaginationType].fnInit(t, e, function(t) {
                            _fnCalculateEnd(t), _fnDraw(t)
                        }), t.aanFeatures.p || t.aoDrawCallback.push({
                            fn: function(t) {
                                DataTable.ext.oPagination[t.sPaginationType].fnUpdate(t, function(t) {
                                    _fnCalculateEnd(t), _fnDraw(t)
                                })
                            },
                            sName: "pagination"
                        }), e
                    }

                    function _fnPageChange(t, e) {
                        var n = t._iDisplayStart;
                        if ("number" == typeof e) t._iDisplayStart = e * t._iDisplayLength, t._iDisplayStart > t.fnRecordsDisplay() && (t._iDisplayStart = 0);
                        else if ("first" == e) t._iDisplayStart = 0;
                        else if ("previous" == e) t._iDisplayStart = t._iDisplayLength >= 0 ? t._iDisplayStart - t._iDisplayLength : 0, t._iDisplayStart < 0 && (t._iDisplayStart = 0);
                        else if ("next" == e) t._iDisplayLength >= 0 ? t._iDisplayStart + t._iDisplayLength < t.fnRecordsDisplay() && (t._iDisplayStart += t._iDisplayLength) : t._iDisplayStart = 0;
                        else if ("last" == e)
                            if (t._iDisplayLength >= 0) {
                                var r = parseInt((t.fnRecordsDisplay() - 1) / t._iDisplayLength, 10) + 1;
                                t._iDisplayStart = (r - 1) * t._iDisplayLength
                            } else t._iDisplayStart = 0;
                        else _fnLog(t, 0, "Unknown paging action: " + e);
                        return $(t.oInstance).trigger("page", t), n != t._iDisplayStart
                    }

                    function _fnFeatureHtmlProcessing(t) {
                        var e = document.createElement("div");
                        return t.aanFeatures.r || (e.id = t.sTableId + "_processing"), e.innerHTML = t.oLanguage.sProcessing, e.className = t.oClasses.sProcessing, t.nTable.parentNode.insertBefore(e, t.nTable), e
                    }

                    function _fnProcessingDisplay(t, e) {
                        if (t.oFeatures.bProcessing)
                            for (var n = t.aanFeatures.r, r = 0, a = n.length; a > r; r++) n[r].style.visibility = e ? "visible" : "hidden";
                        $(t.oInstance).trigger("processing", [t, e])
                    }

                    function _fnFeatureHtmlTable(t) {
                        if ("" === t.oScroll.sX && "" === t.oScroll.sY) return t.nTable;
                        var e = document.createElement("div"),
                            n = document.createElement("div"),
                            r = document.createElement("div"),
                            a = document.createElement("div"),
                            o = document.createElement("div"),
                            i = document.createElement("div"),
                            s = t.nTable.cloneNode(!1),
                            l = t.nTable.cloneNode(!1),
                            u = t.nTable.getElementsByTagName("thead")[0],
                            c = 0 === t.nTable.getElementsByTagName("tfoot").length ? null : t.nTable.getElementsByTagName("tfoot")[0],
                            f = t.oClasses;
                        n.appendChild(r), o.appendChild(i), a.appendChild(t.nTable), e.appendChild(n), e.appendChild(a), r.appendChild(s), s.appendChild(u), null !== c && (e.appendChild(o), i.appendChild(l), l.appendChild(c)), e.className = f.sScrollWrapper, n.className = f.sScrollHead, r.className = f.sScrollHeadInner, a.className = f.sScrollBody, o.className = f.sScrollFoot, i.className = f.sScrollFootInner, t.oScroll.bAutoCss && (n.style.overflow = "hidden", n.style.position = "relative", o.style.overflow = "hidden", a.style.overflow = "auto"), n.style.border = "0", n.style.width = "100%", o.style.border = "0", r.style.width = "" !== t.oScroll.sXInner ? t.oScroll.sXInner : "100%", s.removeAttribute("id"), s.style.marginLeft = "0", t.nTable.style.marginLeft = "0", null !== c && (l.removeAttribute("id"), l.style.marginLeft = "0");
                        var h = $(t.nTable).children("caption");
                        return h.length > 0 && (h = h[0], "top" === h._captionSide ? s.appendChild(h) : "bottom" === h._captionSide && c && l.appendChild(h)), "" !== t.oScroll.sX && (n.style.width = _fnStringToCss(t.oScroll.sX), a.style.width = _fnStringToCss(t.oScroll.sX), null !== c && (o.style.width = _fnStringToCss(t.oScroll.sX)), $(a).scroll(function(t) {
                            n.scrollLeft = this.scrollLeft, null !== c && (o.scrollLeft = this.scrollLeft)
                        })), "" !== t.oScroll.sY && (a.style.height = _fnStringToCss(t.oScroll.sY)), t.aoDrawCallback.push({
                            fn: _fnScrollDraw,
                            sName: "scrolling"
                        }), t.oScroll.bInfinite && $(a).scroll(function() {
                            t.bDrawing || 0 === $(this).scrollTop() || $(this).scrollTop() + $(this).height() > $(t.nTable).height() - t.oScroll.iLoadGap && t.fnDisplayEnd() < t.fnRecordsDisplay() && (_fnPageChange(t, "next"), _fnCalculateEnd(t), _fnDraw(t))
                        }), t.nScrollHead = n, t.nScrollFoot = o, e
                    }

                    function _fnScrollDraw(t) {
                        var e, n, r, a, o, i, s, l, u, c, f, h = t.nScrollHead.getElementsByTagName("div")[0],
                            d = h.getElementsByTagName("table")[0],
                            p = t.nTable.parentNode,
                            g = [],
                            m = [],
                            _ = null !== t.nTFoot ? t.nScrollFoot.getElementsByTagName("div")[0] : null,
                            v = null !== t.nTFoot ? _.getElementsByTagName("table")[0] : null,
                            y = t.oBrowser.bScrollOversize,
                            b = function(t) {
                                s = t.style, s.paddingTop = "0", s.paddingBottom = "0", s.borderTopWidth = "0", s.borderBottomWidth = "0", s.height = 0
                            };
                        $(t.nTable).children("thead, tfoot").remove(), u = $(t.nTHead).clone()[0], t.nTable.insertBefore(u, t.nTable.childNodes[0]), r = t.nTHead.getElementsByTagName("tr"), a = u.getElementsByTagName("tr"), null !== t.nTFoot && (c = $(t.nTFoot).clone()[0], t.nTable.insertBefore(c, t.nTable.childNodes[1]), i = t.nTFoot.getElementsByTagName("tr"), o = c.getElementsByTagName("tr")), "" === t.oScroll.sX && (p.style.width = "100%", h.parentNode.style.width = "100%");
                        var w = _fnGetUniqueThs(t, u);
                        for (e = 0, n = w.length; n > e; e++) l = _fnVisibleToColumnIndex(t, e), w[e].style.width = t.aoColumns[l].sWidth;
                        if (null !== t.nTFoot && _fnApplyToChildren(function(t) {
                                t.style.width = ""
                            }, o), t.oScroll.bCollapse && "" !== t.oScroll.sY && (p.style.height = p.offsetHeight + t.nTHead.offsetHeight + "px"), f = $(t.nTable).outerWidth(), "" === t.oScroll.sX ? (t.nTable.style.width = "100%", y && ($("tbody", p).height() > p.offsetHeight || "scroll" == $(p).css("overflow-y")) && (t.nTable.style.width = _fnStringToCss($(t.nTable).outerWidth() - t.oScroll.iBarWidth))) : "" !== t.oScroll.sXInner ? t.nTable.style.width = _fnStringToCss(t.oScroll.sXInner) : f == $(p).width() && $(p).height() < $(t.nTable).height() ? (t.nTable.style.width = _fnStringToCss(f - t.oScroll.iBarWidth), $(t.nTable).outerWidth() > f - t.oScroll.iBarWidth && (t.nTable.style.width = _fnStringToCss(f))) : t.nTable.style.width = _fnStringToCss(f), f = $(t.nTable).outerWidth(), _fnApplyToChildren(b, a), _fnApplyToChildren(function(t) {
                                g.push(_fnStringToCss($(t).width()))
                            }, a), _fnApplyToChildren(function(t, e) {
                                t.style.width = g[e]
                            }, r), $(a).height(0), null !== t.nTFoot && (_fnApplyToChildren(b, o), _fnApplyToChildren(function(t) {
                                m.push(_fnStringToCss($(t).width()))
                            }, o), _fnApplyToChildren(function(t, e) {
                                t.style.width = m[e]
                            }, i), $(o).height(0)), _fnApplyToChildren(function(t, e) {
                                t.innerHTML = "", t.style.width = g[e]
                            }, a), null !== t.nTFoot && _fnApplyToChildren(function(t, e) {
                                t.innerHTML = "", t.style.width = m[e]
                            }, o), $(t.nTable).outerWidth() < f) {
                            var S = p.scrollHeight > p.offsetHeight || "scroll" == $(p).css("overflow-y") ? f + t.oScroll.iBarWidth : f;
                            y && (p.scrollHeight > p.offsetHeight || "scroll" == $(p).css("overflow-y")) && (t.nTable.style.width = _fnStringToCss(S - t.oScroll.iBarWidth)), p.style.width = _fnStringToCss(S), t.nScrollHead.style.width = _fnStringToCss(S), null !== t.nTFoot && (t.nScrollFoot.style.width = _fnStringToCss(S)), "" === t.oScroll.sX ? _fnLog(t, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.") : "" !== t.oScroll.sXInner && _fnLog(t, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")
                        } else p.style.width = _fnStringToCss("100%"), t.nScrollHead.style.width = _fnStringToCss("100%"), null !== t.nTFoot && (t.nScrollFoot.style.width = _fnStringToCss("100%"));
                        if ("" === t.oScroll.sY && y && (p.style.height = _fnStringToCss(t.nTable.offsetHeight + t.oScroll.iBarWidth)), "" !== t.oScroll.sY && t.oScroll.bCollapse) {
                            p.style.height = _fnStringToCss(t.oScroll.sY);
                            var x = "" !== t.oScroll.sX && t.nTable.offsetWidth > p.offsetWidth ? t.oScroll.iBarWidth : 0;
                            t.nTable.offsetHeight < p.offsetHeight && (p.style.height = _fnStringToCss(t.nTable.offsetHeight + x))
                        }
                        var C = $(t.nTable).outerWidth();
                        d.style.width = _fnStringToCss(C), h.style.width = _fnStringToCss(C);
                        var D = $(t.nTable).height() > p.clientHeight || "scroll" == $(p).css("overflow-y");
                        h.style.paddingRight = D ? t.oScroll.iBarWidth + "px" : "0px", null !== t.nTFoot && (v.style.width = _fnStringToCss(C), _.style.width = _fnStringToCss(C), _.style.paddingRight = D ? t.oScroll.iBarWidth + "px" : "0px"), $(p).scroll(), (t.bSorted || t.bFiltered) && (p.scrollTop = 0)
                    }

                    function _fnApplyToChildren(t, e, n) {
                        for (var r, a, o = 0, i = 0, s = e.length; s > i;) {
                            for (r = e[i].firstChild, a = n ? n[i].firstChild : null; r;) 1 === r.nodeType && (n ? t(r, a, o) : t(r, o), o++), r = r.nextSibling, a = n ? a.nextSibling : null;
                            i++
                        }
                    }

                    function _fnConvertToWidth(t, e) {
                        if (!t || null === t || "" === t) return 0;
                        e || (e = document.body);
                        var n, r = document.createElement("div");
                        return r.style.width = _fnStringToCss(t), e.appendChild(r), n = r.offsetWidth, e.removeChild(r), n
                    }

                    function _fnCalculateColumnWidths(t) {
                        var e, n, r, a, o = (t.nTable.offsetWidth, 0),
                            i = 0,
                            s = t.aoColumns.length,
                            l = $("th", t.nTHead),
                            u = t.nTable.getAttribute("width"),
                            c = t.nTable.parentNode;
                        for (n = 0; s > n; n++) t.aoColumns[n].bVisible && (i++, null !== t.aoColumns[n].sWidth && (e = _fnConvertToWidth(t.aoColumns[n].sWidthOrig, c), null !== e && (t.aoColumns[n].sWidth = _fnStringToCss(e)), o++));
                        if (s == l.length && 0 === o && i == s && "" === t.oScroll.sX && "" === t.oScroll.sY)
                            for (n = 0; n < t.aoColumns.length; n++) e = $(l[n]).width(), null !== e && (t.aoColumns[n].sWidth = _fnStringToCss(e));
                        else {
                            var f = t.nTable.cloneNode(!1),
                                h = t.nTHead.cloneNode(!0),
                                d = document.createElement("tbody"),
                                p = document.createElement("tr");
                            f.removeAttribute("id"), f.appendChild(h), null !== t.nTFoot && (f.appendChild(t.nTFoot.cloneNode(!0)), _fnApplyToChildren(function(t) {
                                t.style.width = ""
                            }, f.getElementsByTagName("tr"))), f.appendChild(d), d.appendChild(p);
                            var g = $("thead th", f);
                            0 === g.length && (g = $("tbody tr:eq(0)>td", f));
                            var m = _fnGetUniqueThs(t, h);
                            for (r = 0, n = 0; s > n; n++) {
                                var _ = t.aoColumns[n];
                                _.bVisible && null !== _.sWidthOrig && "" !== _.sWidthOrig ? m[n - r].style.width = _fnStringToCss(_.sWidthOrig) : _.bVisible ? m[n - r].style.width = "" : r++
                            }
                            for (n = 0; s > n; n++)
                                if (t.aoColumns[n].bVisible) {
                                    var v = _fnGetWidestNode(t, n);
                                    null !== v && (v = v.cloneNode(!0), "" !== t.aoColumns[n].sContentPadding && (v.innerHTML += t.aoColumns[n].sContentPadding), p.appendChild(v))
                                }
                            c.appendChild(f), "" !== t.oScroll.sX && "" !== t.oScroll.sXInner ? f.style.width = _fnStringToCss(t.oScroll.sXInner) : "" !== t.oScroll.sX ? (f.style.width = "", $(f).width() < c.offsetWidth && (f.style.width = _fnStringToCss(c.offsetWidth))) : "" !== t.oScroll.sY ? f.style.width = _fnStringToCss(c.offsetWidth) : u && (f.style.width = _fnStringToCss(u)), f.style.visibility = "hidden", _fnScrollingWidthAdjust(t, f);
                            var y = $("tbody tr:eq(0)", f).children();
                            if (0 === y.length && (y = _fnGetUniqueThs(t, $("thead", f)[0])), "" !== t.oScroll.sX) {
                                var b = 0;
                                for (r = 0, n = 0; n < t.aoColumns.length; n++) t.aoColumns[n].bVisible && (b += null === t.aoColumns[n].sWidthOrig ? $(y[r]).outerWidth() : parseInt(t.aoColumns[n].sWidth.replace("px", ""), 10) + ($(y[r]).outerWidth() - $(y[r]).width()), r++);
                                f.style.width = _fnStringToCss(b), t.nTable.style.width = _fnStringToCss(b)
                            }
                            for (r = 0, n = 0; n < t.aoColumns.length; n++) t.aoColumns[n].bVisible && (a = $(y[r]).width(), null !== a && a > 0 && (t.aoColumns[n].sWidth = _fnStringToCss(a)), r++);
                            var w = $(f).css("width");
                            t.nTable.style.width = -1 !== w.indexOf("%") ? w : _fnStringToCss($(f).outerWidth()), f.parentNode.removeChild(f)
                        }
                        u && (t.nTable.style.width = _fnStringToCss(u))
                    }

                    function _fnScrollingWidthAdjust(t, e) {
                        if ("" === t.oScroll.sX && "" !== t.oScroll.sY) {
                            $(e).width();
                            e.style.width = _fnStringToCss($(e).outerWidth() - t.oScroll.iBarWidth)
                        } else "" !== t.oScroll.sX && (e.style.width = _fnStringToCss($(e).outerWidth()))
                    }

                    function _fnGetWidestNode(t, e) {
                        var n = _fnGetMaxLenString(t, e);
                        if (0 > n) return null;
                        if (null === t.aoData[n].nTr) {
                            var r = document.createElement("td");
                            return r.innerHTML = _fnGetCellData(t, n, e, ""), r
                        }
                        return _fnGetTdNodes(t, n)[e]
                    }

                    function _fnGetMaxLenString(t, e) {
                        for (var n = -1, r = -1, a = 0; a < t.aoData.length; a++) {
                            var o = _fnGetCellData(t, a, e, "display") + "";
                            o = o.replace(/<.*?>/g, ""), o.length > n && (n = o.length, r = a)
                        }
                        return r
                    }

                    function _fnStringToCss(t) {
                        if (null === t) return "0px";
                        if ("number" == typeof t) return 0 > t ? "0px" : t + "px";
                        var e = t.charCodeAt(t.length - 1);
                        return 48 > e || e > 57 ? t : t + "px"
                    }

                    function _fnScrollBarWidth() {
                        var t = document.createElement("p"),
                            e = t.style;
                        e.width = "100%", e.height = "200px", e.padding = "0px";
                        var n = document.createElement("div");
                        e = n.style, e.position = "absolute", e.top = "0px", e.left = "0px", e.visibility = "hidden", e.width = "200px", e.height = "150px", e.padding = "0px", e.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
                        var r = t.offsetWidth;
                        n.style.overflow = "scroll";
                        var a = t.offsetWidth;
                        return r == a && (a = n.clientWidth), document.body.removeChild(n), r - a
                    }

                    function _fnSort(t, e) {
                        var n, r, a, o, i, s, l, u, c = [],
                            f = [],
                            h = DataTable.ext.oSort,
                            d = t.aoData,
                            p = t.aoColumns,
                            g = t.oLanguage.oAria;
                        if (!t.oFeatures.bServerSide && (0 !== t.aaSorting.length || null !== t.aaSortingFixed)) {
                            for (c = null !== t.aaSortingFixed ? t.aaSortingFixed.concat(t.aaSorting) : t.aaSorting.slice(), n = 0; n < c.length; n++) {
                                var m = c[n][0],
                                    _ = _fnColumnIndexToVisible(t, m);
                                if (l = t.aoColumns[m].sSortDataType, DataTable.ext.afnSortData[l]) {
                                    var v = DataTable.ext.afnSortData[l].call(t.oInstance, t, m, _);
                                    if (v.length === d.length)
                                        for (a = 0, o = d.length; o > a; a++) _fnSetCellData(t, a, m, v[a]);
                                    else _fnLog(t, 0, "Returned data sort array (col " + m + ") is the wrong length")
                                }
                            }
                            for (n = 0, r = t.aiDisplayMaster.length; r > n; n++) f[t.aiDisplayMaster[n]] = n;
                            var y, b, w = c.length;
                            for (n = 0, r = d.length; r > n; n++)
                                for (a = 0; w > a; a++)
                                    for (b = p[c[a][0]].aDataSort, i = 0, s = b.length; s > i; i++) l = p[b[i]].sType, y = h[(l ? l : "string") + "-pre"], d[n]._aSortData[b[i]] = y ? y(_fnGetCellData(t, n, b[i], "sort")) : _fnGetCellData(t, n, b[i], "sort");
                            t.aiDisplayMaster.sort(function(t, e) {
                                var n, r, a, o, i, s;
                                for (n = 0; w > n; n++)
                                    for (i = p[c[n][0]].aDataSort, r = 0, a = i.length; a > r; r++)
                                        if (s = p[i[r]].sType, o = h[(s ? s : "string") + "-" + c[n][1]](d[t]._aSortData[i[r]], d[e]._aSortData[i[r]]), 0 !== o) return o;
                                return h["numeric-asc"](f[t], f[e])
                            })
                        }
                        for (e !== undefined && !e || t.oFeatures.bDeferRender || _fnSortingClasses(t), n = 0, r = t.aoColumns.length; r > n; n++) {
                            var S = p[n].sTitle.replace(/<.*?>/g, "");
                            if (u = p[n].nTh, u.removeAttribute("aria-sort"), u.removeAttribute("aria-label"), p[n].bSortable)
                                if (c.length > 0 && c[0][0] == n) {
                                    u.setAttribute("aria-sort", "asc" == c[0][1] ? "ascending" : "descending");
                                    var x = p[n].asSorting[c[0][2] + 1] ? p[n].asSorting[c[0][2] + 1] : p[n].asSorting[0];
                                    u.setAttribute("aria-label", S + ("asc" == x ? g.sSortAscending : g.sSortDescending))
                                } else u.setAttribute("aria-label", S + ("asc" == p[n].asSorting[0] ? g.sSortAscending : g.sSortDescending));
                            else u.setAttribute("aria-label", S)
                        }
                        t.bSorted = !0, $(t.oInstance).trigger("sort", t), t.oFeatures.bFilter ? _fnFilterComplete(t, t.oPreviousSearch, 1) : (t.aiDisplay = t.aiDisplayMaster.slice(), t._iDisplayStart = 0, _fnCalculateEnd(t), _fnDraw(t))
                    }

                    function _fnSortAttachListener(t, e, n, r) {
                        _fnBindAction(e, {}, function(e) {
                            if (t.aoColumns[n].bSortable !== !1) {
                                var a = function() {
                                    var r, a;
                                    if (e.shiftKey) {
                                        for (var o = !1, i = 0; i < t.aaSorting.length; i++)
                                            if (t.aaSorting[i][0] == n) {
                                                o = !0, r = t.aaSorting[i][0], a = t.aaSorting[i][2] + 1, t.aoColumns[r].asSorting[a] ? (t.aaSorting[i][1] = t.aoColumns[r].asSorting[a], t.aaSorting[i][2] = a) : t.aaSorting.splice(i, 1);
                                                break
                                            }
                                        o === !1 && t.aaSorting.push([n, t.aoColumns[n].asSorting[0], 0])
                                    } else 1 == t.aaSorting.length && t.aaSorting[0][0] == n ? (r = t.aaSorting[0][0], a = t.aaSorting[0][2] + 1, t.aoColumns[r].asSorting[a] || (a = 0), t.aaSorting[0][1] = t.aoColumns[r].asSorting[a], t.aaSorting[0][2] = a) : (t.aaSorting.splice(0, t.aaSorting.length), t.aaSorting.push([n, t.aoColumns[n].asSorting[0], 0]));
                                    _fnSort(t)
                                };
                                t.oFeatures.bProcessing ? (_fnProcessingDisplay(t, !0), setTimeout(function() {
                                    a(), t.oFeatures.bServerSide || _fnProcessingDisplay(t, !1)
                                }, 0)) : a(), "function" == typeof r && r(t)
                            }
                        })
                    }

                    function _fnSortingClasses(t) {
                        var e, n, r, a, o, i, s = t.aoColumns.length,
                            l = t.oClasses;
                        for (e = 0; s > e; e++) t.aoColumns[e].bSortable && $(t.aoColumns[e].nTh).removeClass(l.sSortAsc + " " + l.sSortDesc + " " + t.aoColumns[e].sSortingClass);
                        for (o = null !== t.aaSortingFixed ? t.aaSortingFixed.concat(t.aaSorting) : t.aaSorting.slice(), e = 0; e < t.aoColumns.length; e++)
                            if (t.aoColumns[e].bSortable) {
                                for (i = t.aoColumns[e].sSortingClass, a = -1, r = 0; r < o.length; r++)
                                    if (o[r][0] == e) {
                                        i = "asc" == o[r][1] ? l.sSortAsc : l.sSortDesc, a = r;
                                        break
                                    }
                                if ($(t.aoColumns[e].nTh).addClass(i), t.bJUI) {
                                    var u = $("span." + l.sSortIcon, t.aoColumns[e].nTh);
                                    u.removeClass(l.sSortJUIAsc + " " + l.sSortJUIDesc + " " + l.sSortJUI + " " + l.sSortJUIAscAllowed + " " + l.sSortJUIDescAllowed);
                                    var c;
                                    c = -1 == a ? t.aoColumns[e].sSortingClassJUI : "asc" == o[a][1] ? l.sSortJUIAsc : l.sSortJUIDesc, u.addClass(c)
                                }
                            } else $(t.aoColumns[e].nTh).addClass(t.aoColumns[e].sSortingClass);
                        if (i = l.sSortColumn, t.oFeatures.bSort && t.oFeatures.bSortClasses) {
                            var f, h, d = _fnGetTdNodes(t),
                                p = [];
                            for (e = 0; s > e; e++) p.push("");
                            for (e = 0, f = 1; e < o.length; e++) h = parseInt(o[e][0], 10), p[h] = i + f, 3 > f && f++;
                            var g, m, _, v = new RegExp(i + "[123]");
                            for (e = 0, n = d.length; n > e; e++) h = e % s, m = d[e].className, _ = p[h], g = m.replace(v, _), g != m ? d[e].className = $.trim(g) : _.length > 0 && -1 == m.indexOf(_) && (d[e].className = m + " " + _)
                        }
                    }

                    function _fnSaveState(t) {
                        if (t.oFeatures.bStateSave && !t.bDestroying) {
                            var e, n, r = t.oScroll.bInfinite,
                                a = {
                                    iCreate: (new Date).getTime(),
                                    iStart: r ? 0 : t._iDisplayStart,
                                    iEnd: r ? t._iDisplayLength : t._iDisplayEnd,
                                    iLength: t._iDisplayLength,
                                    aaSorting: $.extend(!0, [], t.aaSorting),
                                    oSearch: $.extend(!0, {}, t.oPreviousSearch),
                                    aoSearchCols: $.extend(!0, [], t.aoPreSearchCols),
                                    abVisCols: []
                                };
                            for (e = 0, n = t.aoColumns.length; n > e; e++) a.abVisCols.push(t.aoColumns[e].bVisible);
                            _fnCallbackFire(t, "aoStateSaveParams", "stateSaveParams", [t, a]), t.fnStateSave.call(t.oInstance, t, a)
                        }
                    }

                    function _fnLoadState(t, e) {
                        if (t.oFeatures.bStateSave) {
                            var n = t.fnStateLoad.call(t.oInstance, t);
                            if (n) {
                                var r = _fnCallbackFire(t, "aoStateLoadParams", "stateLoadParams", [t, n]);
                                if (-1 === $.inArray(!1, r)) {
                                    t.oLoadedState = $.extend(!0, {}, n), t._iDisplayStart = n.iStart, t.iInitDisplayStart = n.iStart, t._iDisplayEnd = n.iEnd, t._iDisplayLength = n.iLength, t.aaSorting = n.aaSorting.slice(), t.saved_aaSorting = n.aaSorting.slice(), $.extend(t.oPreviousSearch, n.oSearch), $.extend(!0, t.aoPreSearchCols, n.aoSearchCols), e.saved_aoColumns = [];
                                    for (var a = 0; a < n.abVisCols.length; a++) e.saved_aoColumns[a] = {}, e.saved_aoColumns[a].bVisible = n.abVisCols[a];
                                    _fnCallbackFire(t, "aoStateLoaded", "stateLoaded", [t, n])
                                }
                            }
                        }
                    }

                    function _fnCreateCookie(sName, sValue, iSecs, sBaseName, fnCallback) {
                        var date = new Date;
                        date.setTime(date.getTime() + 1e3 * iSecs);
                        var aParts = window.location.pathname.split("/"),
                            sNameFile = sName + "_" + aParts.pop().replace(/[\/:]/g, "").toLowerCase(),
                            sFullCookie, oData;
                        null !== fnCallback ? (oData = "function" == typeof $.parseJSON ? $.parseJSON(sValue) : eval("(" + sValue + ")"), sFullCookie = fnCallback(sNameFile, oData, date.toGMTString(), aParts.join("/") + "/")) : sFullCookie = sNameFile + "=" + encodeURIComponent(sValue) + "; expires=" + date.toGMTString() + "; path=" + aParts.join("/") + "/";
                        var aCookies = document.cookie.split(";"),
                            iNewCookieLen = sFullCookie.split(";")[0].length,
                            aOldCookies = [];
                        if (iNewCookieLen + document.cookie.length + 10 > 4096) {
                            for (var i = 0, iLen = aCookies.length; iLen > i; i++)
                                if (-1 != aCookies[i].indexOf(sBaseName)) {
                                    var aSplitCookie = aCookies[i].split("=");
                                    try {
                                        oData = eval("(" + decodeURIComponent(aSplitCookie[1]) + ")"), oData && oData.iCreate && aOldCookies.push({
                                            name: aSplitCookie[0],
                                            time: oData.iCreate
                                        })
                                    } catch (e) {}
                                }
                            for (aOldCookies.sort(function(t, e) {
                                    return e.time - t.time
                                }); iNewCookieLen + document.cookie.length + 10 > 4096;) {
                                if (0 === aOldCookies.length) return;
                                var old = aOldCookies.pop();
                                document.cookie = old.name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + aParts.join("/") + "/"
                            }
                        }
                        document.cookie = sFullCookie
                    }

                    function _fnReadCookie(t) {
                        for (var e = window.location.pathname.split("/"), n = t + "_" + e[e.length - 1].replace(/[\/:]/g, "").toLowerCase() + "=", r = document.cookie.split(";"), a = 0; a < r.length; a++) {
                            for (var o = r[a];
                                " " == o.charAt(0);) o = o.substring(1, o.length);
                            if (0 === o.indexOf(n)) return decodeURIComponent(o.substring(n.length, o.length))
                        }
                        return null
                    }

                    function _fnSettingsFromNode(t) {
                        for (var e = 0; e < DataTable.settings.length; e++)
                            if (DataTable.settings[e].nTable === t) return DataTable.settings[e];
                        return null
                    }

                    function _fnGetTrNodes(t) {
                        for (var e = [], n = t.aoData, r = 0, a = n.length; a > r; r++) null !== n[r].nTr && e.push(n[r].nTr);
                        return e
                    }

                    function _fnGetTdNodes(t, e) {
                        var n, r, a, o, i, s, l, u, c = [],
                            f = t.aoData.length,
                            h = 0,
                            d = f;
                        for (e !== undefined && (h = e, d = e + 1), o = h; d > o; o++)
                            if (l = t.aoData[o], null !== l.nTr) {
                                for (r = [], a = l.nTr.firstChild; a;) u = a.nodeName.toLowerCase(), ("td" == u || "th" == u) && r.push(a), a = a.nextSibling;
                                for (n = 0, i = 0, s = t.aoColumns.length; s > i; i++) t.aoColumns[i].bVisible ? c.push(r[i - n]) : (c.push(l._anHidden[i]),
                                    n++)
                            }
                        return c
                    }

                    function _fnLog(t, e, n) {
                        var r = null === t ? "DataTables warning: " + n : "DataTables warning (table id = '" + t.sTableId + "'): " + n;
                        if (0 === e) {
                            if ("alert" != DataTable.ext.sErrMode) throw new Error(r);
                            return void alert(r)
                        }
                        window.console && console.log && console.log(r)
                    }

                    function _fnMap(t, e, n, r) {
                        r === undefined && (r = n), e[n] !== undefined && (t[r] = e[n])
                    }

                    function _fnExtend(t, e) {
                        var n;
                        for (var r in e) e.hasOwnProperty(r) && (n = e[r], "object" == typeof oInit[r] && null !== n && $.isArray(n) === !1 ? $.extend(!0, t[r], n) : t[r] = n);
                        return t
                    }

                    function _fnBindAction(t, e, n) {
                        $(t).bind("click.DT", e, function(e) {
                            t.blur(), n(e)
                        }).bind("keypress.DT", e, function(t) {
                            13 === t.which && n(t)
                        }).bind("selectstart.DT", function() {
                            return !1
                        })
                    }

                    function _fnCallbackReg(t, e, n, r) {
                        n && t[e].push({
                            fn: n,
                            sName: r
                        })
                    }

                    function _fnCallbackFire(t, e, n, r) {
                        for (var a = t[e], o = [], i = a.length - 1; i >= 0; i--) o.push(a[i].fn.apply(t.oInstance, r));
                        return null !== n && $(t.oInstance).trigger(n, r), o
                    }

                    function _fnBrowserDetect(t) {
                        var e = $('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden"><div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;"><div id="DT_BrowserTest" style="width:100%; height:10px;"></div></div></div>')[0];
                        document.body.appendChild(e), t.oBrowser.bScrollOversize = 100 === $("#DT_BrowserTest", e)[0].offsetWidth ? !0 : !1, document.body.removeChild(e)
                    }

                    function _fnExternApiFunc(t) {
                        return function() {
                            var e = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                            return DataTable.ext.oApi[t].apply(this, e)
                        }
                    }
                    var __reArray = /\[.*?\]$/,
                        _fnJsonString = window.JSON ? JSON.stringify : function(t) {
                            var e = typeof t;
                            if ("object" !== e || null === t) return "string" === e && (t = '"' + t + '"'), t + "";
                            var n, r, a = [],
                                o = $.isArray(t);
                            for (n in t) r = t[n], e = typeof r, "string" === e ? r = '"' + r + '"' : "object" === e && null !== r && (r = _fnJsonString(r)), a.push((o ? "" : '"' + n + '":') + r);
                            return (o ? "[" : "{") + a + (o ? "]" : "}")
                        };
                    this.$ = function(t, e) {
                        var n, r, a, o = [],
                            i = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]),
                            s = i.aoData,
                            l = i.aiDisplay,
                            u = i.aiDisplayMaster;
                        if (e || (e = {}), e = $.extend({}, {
                                filter: "none",
                                order: "current",
                                page: "all"
                            }, e), "current" == e.page)
                            for (n = i._iDisplayStart, r = i.fnDisplayEnd(); r > n; n++) a = s[l[n]].nTr, a && o.push(a);
                        else if ("current" == e.order && "none" == e.filter)
                            for (n = 0, r = u.length; r > n; n++) a = s[u[n]].nTr, a && o.push(a);
                        else if ("current" == e.order && "applied" == e.filter)
                            for (n = 0, r = l.length; r > n; n++) a = s[l[n]].nTr, a && o.push(a);
                        else if ("original" == e.order && "none" == e.filter)
                            for (n = 0, r = s.length; r > n; n++) a = s[n].nTr, a && o.push(a);
                        else if ("original" == e.order && "applied" == e.filter)
                            for (n = 0, r = s.length; r > n; n++) a = s[n].nTr, -1 !== $.inArray(n, l) && a && o.push(a);
                        else _fnLog(i, 1, "Unknown selection options");
                        var c = $(o),
                            f = c.filter(t),
                            h = c.find(t);
                        return $([].concat($.makeArray(f), $.makeArray(h)))
                    }, this._ = function(t, e) {
                        var n, r, a = [],
                            o = this.$(t, e);
                        for (n = 0, r = o.length; r > n; n++) a.push(this.fnGetData(o[n]));
                        return a
                    }, this.fnAddData = function(t, e) {
                        if (0 === t.length) return [];
                        var n, r = [],
                            a = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        if ("object" == typeof t[0] && null !== t[0])
                            for (var o = 0; o < t.length; o++) {
                                if (n = _fnAddData(a, t[o]), -1 == n) return r;
                                r.push(n)
                            } else {
                                if (n = _fnAddData(a, t), -1 == n) return r;
                                r.push(n)
                            }
                        return a.aiDisplay = a.aiDisplayMaster.slice(), (e === undefined || e) && _fnReDraw(a), r
                    }, this.fnAdjustColumnSizing = function(t) {
                        var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        _fnAdjustColumnSizing(e), t === undefined || t ? this.fnDraw(!1) : ("" !== e.oScroll.sX || "" !== e.oScroll.sY) && this.oApi._fnScrollDraw(e)
                    }, this.fnClearTable = function(t) {
                        var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        _fnClearTable(e), (t === undefined || t) && _fnDraw(e)
                    }, this.fnClose = function(t) {
                        for (var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), n = 0; n < e.aoOpenRows.length; n++)
                            if (e.aoOpenRows[n].nParent == t) {
                                var r = e.aoOpenRows[n].nTr.parentNode;
                                return r && r.removeChild(e.aoOpenRows[n].nTr), e.aoOpenRows.splice(n, 1), 0
                            }
                        return 1
                    }, this.fnDeleteRow = function(t, e, n) {
                        var r, a, o, i = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        o = "object" == typeof t ? _fnNodeToDataIndex(i, t) : t;
                        var s = i.aoData.splice(o, 1);
                        for (r = 0, a = i.aoData.length; a > r; r++) null !== i.aoData[r].nTr && (i.aoData[r].nTr._DT_RowIndex = r);
                        var l = $.inArray(o, i.aiDisplay);
                        return i.asDataSearch.splice(l, 1), _fnDeleteIndex(i.aiDisplayMaster, o), _fnDeleteIndex(i.aiDisplay, o), "function" == typeof e && e.call(this, i, s), i._iDisplayStart >= i.fnRecordsDisplay() && (i._iDisplayStart -= i._iDisplayLength, i._iDisplayStart < 0 && (i._iDisplayStart = 0)), (n === undefined || n) && (_fnCalculateEnd(i), _fnDraw(i)), s
                    }, this.fnDestroy = function(t) {
                        var e, n, r = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]),
                            a = r.nTableWrapper.parentNode,
                            o = r.nTBody;
                        if (t = t === undefined ? !1 : t, r.bDestroying = !0, _fnCallbackFire(r, "aoDestroyCallback", "destroy", [r]), !t)
                            for (e = 0, n = r.aoColumns.length; n > e; e++) r.aoColumns[e].bVisible === !1 && this.fnSetColumnVis(e, !0);
                        for ($(r.nTableWrapper).find("*").andSelf().unbind(".DT"), $("tbody>tr>td." + r.oClasses.sRowEmpty, r.nTable).parent().remove(), r.nTable != r.nTHead.parentNode && ($(r.nTable).children("thead").remove(), r.nTable.appendChild(r.nTHead)), r.nTFoot && r.nTable != r.nTFoot.parentNode && ($(r.nTable).children("tfoot").remove(), r.nTable.appendChild(r.nTFoot)), r.nTable.parentNode.removeChild(r.nTable), $(r.nTableWrapper).remove(), r.aaSorting = [], r.aaSortingFixed = [], _fnSortingClasses(r), $(_fnGetTrNodes(r)).removeClass(r.asStripeClasses.join(" ")), $("th, td", r.nTHead).removeClass([r.oClasses.sSortable, r.oClasses.sSortableAsc, r.oClasses.sSortableDesc, r.oClasses.sSortableNone].join(" ")), r.bJUI && ($("th span." + r.oClasses.sSortIcon + ", td span." + r.oClasses.sSortIcon, r.nTHead).remove(), $("th, td", r.nTHead).each(function() {
                                var t = $("div." + r.oClasses.sSortJUIWrapper, this),
                                    e = t.contents();
                                $(this).append(e), t.remove()
                            })), !t && r.nTableReinsertBefore ? a.insertBefore(r.nTable, r.nTableReinsertBefore) : t || a.appendChild(r.nTable), e = 0, n = r.aoData.length; n > e; e++) null !== r.aoData[e].nTr && o.appendChild(r.aoData[e].nTr);
                        if (r.oFeatures.bAutoWidth === !0 && (r.nTable.style.width = _fnStringToCss(r.sDestroyWidth)), n = r.asDestroyStripes.length) {
                            var i = $(o).children("tr");
                            for (e = 0; n > e; e++) i.filter(":nth-child(" + n + "n + " + e + ")").addClass(r.asDestroyStripes[e])
                        }
                        for (e = 0, n = DataTable.settings.length; n > e; e++) DataTable.settings[e] == r && DataTable.settings.splice(e, 1);
                        r = null, oInit = null
                    }, this.fnDraw = function(t) {
                        var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        t === !1 ? (_fnCalculateEnd(e), _fnDraw(e)) : _fnReDraw(e)
                    }, this.fnFilter = function(t, e, n, r, a, o) {
                        var i = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        if (i.oFeatures.bFilter)
                            if ((n === undefined || null === n) && (n = !1), (r === undefined || null === r) && (r = !0), (a === undefined || null === a) && (a = !0), (o === undefined || null === o) && (o = !0), e === undefined || null === e) {
                                if (_fnFilterComplete(i, {
                                        sSearch: t + "",
                                        bRegex: n,
                                        bSmart: r,
                                        bCaseInsensitive: o
                                    }, 1), a && i.aanFeatures.f)
                                    for (var s = i.aanFeatures.f, l = 0, u = s.length; u > l; l++) try {
                                        s[l]._DT_Input != document.activeElement && $(s[l]._DT_Input).val(t)
                                    } catch (c) {
                                        $(s[l]._DT_Input).val(t)
                                    }
                            } else $.extend(i.aoPreSearchCols[e], {
                                sSearch: t + "",
                                bRegex: n,
                                bSmart: r,
                                bCaseInsensitive: o
                            }), _fnFilterComplete(i, i.oPreviousSearch, 1)
                    }, this.fnGetData = function(t, e) {
                        var n = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        if (t !== undefined) {
                            var r = t;
                            if ("object" == typeof t) {
                                var a = t.nodeName.toLowerCase();
                                "tr" === a ? r = _fnNodeToDataIndex(n, t) : "td" === a && (r = _fnNodeToDataIndex(n, t.parentNode), e = _fnNodeToColumnIndex(n, r, t))
                            }
                            return e !== undefined ? _fnGetCellData(n, r, e, "") : n.aoData[r] !== undefined ? n.aoData[r]._aData : null
                        }
                        return _fnGetDataMaster(n)
                    }, this.fnGetNodes = function(t) {
                        var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        return t !== undefined ? e.aoData[t] !== undefined ? e.aoData[t].nTr : null : _fnGetTrNodes(e)
                    }, this.fnGetPosition = function(t) {
                        var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]),
                            n = t.nodeName.toUpperCase();
                        if ("TR" == n) return _fnNodeToDataIndex(e, t);
                        if ("TD" == n || "TH" == n) {
                            var r = _fnNodeToDataIndex(e, t.parentNode),
                                a = _fnNodeToColumnIndex(e, r, t);
                            return [r, _fnColumnIndexToVisible(e, a), a]
                        }
                        return null
                    }, this.fnIsOpen = function(t) {
                        for (var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), n = (e.aoOpenRows, 0); n < e.aoOpenRows.length; n++)
                            if (e.aoOpenRows[n].nParent == t) return !0;
                        return !1
                    }, this.fnOpen = function(t, e, n) {
                        var r = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]),
                            a = _fnGetTrNodes(r);
                        if (-1 !== $.inArray(t, a)) {
                            this.fnClose(t);
                            var o = document.createElement("tr"),
                                i = document.createElement("td");
                            o.appendChild(i), i.className = n, i.colSpan = _fnVisbleColumns(r), "string" == typeof e ? i.innerHTML = e : $(i).html(e);
                            var s = $("tr", r.nTBody);
                            return -1 != $.inArray(t, s) && $(o).insertAfter(t), r.aoOpenRows.push({
                                nTr: o,
                                nParent: t
                            }), o
                        }
                    }, this.fnPageChange = function(t, e) {
                        var n = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        _fnPageChange(n, t), _fnCalculateEnd(n), (e === undefined || e) && _fnDraw(n)
                    }, this.fnSetColumnVis = function(t, e, n) {
                        var r, a, o, i, s, l = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]),
                            u = l.aoColumns,
                            c = l.aoData;
                        if (u[t].bVisible != e) {
                            if (e) {
                                var f = 0;
                                for (r = 0; t > r; r++) u[r].bVisible && f++;
                                if (i = f >= _fnVisbleColumns(l), !i)
                                    for (r = t; r < u.length; r++)
                                        if (u[r].bVisible) {
                                            s = r;
                                            break
                                        }
                                for (r = 0, a = c.length; a > r; r++) null !== c[r].nTr && (i ? c[r].nTr.appendChild(c[r]._anHidden[t]) : c[r].nTr.insertBefore(c[r]._anHidden[t], _fnGetTdNodes(l, r)[s]))
                            } else
                                for (r = 0, a = c.length; a > r; r++) null !== c[r].nTr && (o = _fnGetTdNodes(l, r)[t], c[r]._anHidden[t] = o, o.parentNode.removeChild(o));
                            for (u[t].bVisible = e, _fnDrawHead(l, l.aoHeader), l.nTFoot && _fnDrawHead(l, l.aoFooter), r = 0, a = l.aoOpenRows.length; a > r; r++) l.aoOpenRows[r].nTr.colSpan = _fnVisbleColumns(l);
                            (n === undefined || n) && (_fnAdjustColumnSizing(l), _fnDraw(l)), _fnSaveState(l)
                        }
                    }, this.fnSettings = function() {
                        return _fnSettingsFromNode(this[DataTable.ext.iApiIndex])
                    }, this.fnSort = function(t) {
                        var e = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                        e.aaSorting = t, _fnSort(e)
                    }, this.fnSortListener = function(t, e, n) {
                        _fnSortAttachListener(_fnSettingsFromNode(this[DataTable.ext.iApiIndex]), t, e, n)
                    }, this.fnUpdate = function(t, e, n, r, a) {
                        var o, i, s = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]),
                            l = "object" == typeof e ? _fnNodeToDataIndex(s, e) : e;
                        if ($.isArray(t) && n === undefined)
                            for (s.aoData[l]._aData = t.slice(), o = 0; o < s.aoColumns.length; o++) this.fnUpdate(_fnGetCellData(s, l, o), l, o, !1, !1);
                        else if ($.isPlainObject(t) && n === undefined)
                            for (s.aoData[l]._aData = $.extend(!0, {}, t), o = 0; o < s.aoColumns.length; o++) this.fnUpdate(_fnGetCellData(s, l, o), l, o, !1, !1);
                        else {
                            _fnSetCellData(s, l, n, t), i = _fnGetCellData(s, l, n, "display");
                            var u = s.aoColumns[n];
                            null !== u.fnRender && (i = _fnRender(s, l, n), u.bUseRendered && _fnSetCellData(s, l, n, i)), null !== s.aoData[l].nTr && (_fnGetTdNodes(s, l)[n].innerHTML = i)
                        }
                        var c = $.inArray(l, s.aiDisplay);
                        return s.asDataSearch[c] = _fnBuildSearchRow(s, _fnGetRowData(s, l, "filter", _fnGetColumns(s, "bSearchable"))), (a === undefined || a) && _fnAdjustColumnSizing(s), (r === undefined || r) && _fnReDraw(s), 0
                    }, this.fnVersionCheck = DataTable.ext.fnVersionCheck, this.oApi = {
                        _fnExternApiFunc: _fnExternApiFunc,
                        _fnInitialise: _fnInitialise,
                        _fnInitComplete: _fnInitComplete,
                        _fnLanguageCompat: _fnLanguageCompat,
                        _fnAddColumn: _fnAddColumn,
                        _fnColumnOptions: _fnColumnOptions,
                        _fnAddData: _fnAddData,
                        _fnCreateTr: _fnCreateTr,
                        _fnGatherData: _fnGatherData,
                        _fnBuildHead: _fnBuildHead,
                        _fnDrawHead: _fnDrawHead,
                        _fnDraw: _fnDraw,
                        _fnReDraw: _fnReDraw,
                        _fnAjaxUpdate: _fnAjaxUpdate,
                        _fnAjaxParameters: _fnAjaxParameters,
                        _fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
                        _fnServerParams: _fnServerParams,
                        _fnAddOptionsHtml: _fnAddOptionsHtml,
                        _fnFeatureHtmlTable: _fnFeatureHtmlTable,
                        _fnScrollDraw: _fnScrollDraw,
                        _fnAdjustColumnSizing: _fnAdjustColumnSizing,
                        _fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
                        _fnFilterComplete: _fnFilterComplete,
                        _fnFilterCustom: _fnFilterCustom,
                        _fnFilterColumn: _fnFilterColumn,
                        _fnFilter: _fnFilter,
                        _fnBuildSearchArray: _fnBuildSearchArray,
                        _fnBuildSearchRow: _fnBuildSearchRow,
                        _fnFilterCreateSearch: _fnFilterCreateSearch,
                        _fnDataToSearch: _fnDataToSearch,
                        _fnSort: _fnSort,
                        _fnSortAttachListener: _fnSortAttachListener,
                        _fnSortingClasses: _fnSortingClasses,
                        _fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
                        _fnPageChange: _fnPageChange,
                        _fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
                        _fnUpdateInfo: _fnUpdateInfo,
                        _fnFeatureHtmlLength: _fnFeatureHtmlLength,
                        _fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
                        _fnProcessingDisplay: _fnProcessingDisplay,
                        _fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
                        _fnColumnIndexToVisible: _fnColumnIndexToVisible,
                        _fnNodeToDataIndex: _fnNodeToDataIndex,
                        _fnVisbleColumns: _fnVisbleColumns,
                        _fnCalculateEnd: _fnCalculateEnd,
                        _fnConvertToWidth: _fnConvertToWidth,
                        _fnCalculateColumnWidths: _fnCalculateColumnWidths,
                        _fnScrollingWidthAdjust: _fnScrollingWidthAdjust,
                        _fnGetWidestNode: _fnGetWidestNode,
                        _fnGetMaxLenString: _fnGetMaxLenString,
                        _fnStringToCss: _fnStringToCss,
                        _fnDetectType: _fnDetectType,
                        _fnSettingsFromNode: _fnSettingsFromNode,
                        _fnGetDataMaster: _fnGetDataMaster,
                        _fnGetTrNodes: _fnGetTrNodes,
                        _fnGetTdNodes: _fnGetTdNodes,
                        _fnEscapeRegex: _fnEscapeRegex,
                        _fnDeleteIndex: _fnDeleteIndex,
                        _fnReOrderIndex: _fnReOrderIndex,
                        _fnColumnOrdering: _fnColumnOrdering,
                        _fnLog: _fnLog,
                        _fnClearTable: _fnClearTable,
                        _fnSaveState: _fnSaveState,
                        _fnLoadState: _fnLoadState,
                        _fnCreateCookie: _fnCreateCookie,
                        _fnReadCookie: _fnReadCookie,
                        _fnDetectHeader: _fnDetectHeader,
                        _fnGetUniqueThs: _fnGetUniqueThs,
                        _fnScrollBarWidth: _fnScrollBarWidth,
                        _fnApplyToChildren: _fnApplyToChildren,
                        _fnMap: _fnMap,
                        _fnGetRowData: _fnGetRowData,
                        _fnGetCellData: _fnGetCellData,
                        _fnSetCellData: _fnSetCellData,
                        _fnGetObjectDataFn: _fnGetObjectDataFn,
                        _fnSetObjectDataFn: _fnSetObjectDataFn,
                        _fnApplyColumnDefs: _fnApplyColumnDefs,
                        _fnBindAction: _fnBindAction,
                        _fnExtend: _fnExtend,
                        _fnCallbackReg: _fnCallbackReg,
                        _fnCallbackFire: _fnCallbackFire,
                        _fnJsonString: _fnJsonString,
                        _fnRender: _fnRender,
                        _fnNodeToColumnIndex: _fnNodeToColumnIndex,
                        _fnInfoMacros: _fnInfoMacros,
                        _fnBrowserDetect: _fnBrowserDetect,
                        _fnGetColumns: _fnGetColumns
                    }, $.extend(DataTable.ext.oApi, this.oApi);
                    for (var sFunc in DataTable.ext.oApi) sFunc && (this[sFunc] = _fnExternApiFunc(sFunc));
                    var _that = this;
                    return this.each(function() {
                        var t, e, n, r = 0,
                            a = this.getAttribute("id"),
                            o = !1,
                            i = !1;
                        if ("table" != this.nodeName.toLowerCase()) return void _fnLog(null, 0, "Attempted to initialise DataTables on a node which is not a table: " + this.nodeName);
                        for (r = 0, t = DataTable.settings.length; t > r; r++) {
                            if (DataTable.settings[r].nTable == this) {
                                if (oInit === undefined || oInit.bRetrieve) return DataTable.settings[r].oInstance;
                                if (oInit.bDestroy) {
                                    DataTable.settings[r].oInstance.fnDestroy();
                                    break
                                }
                                return void _fnLog(DataTable.settings[r], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy")
                            }
                            if (DataTable.settings[r].sTableId == this.id) {
                                DataTable.settings.splice(r, 1);
                                break
                            }
                        }(null === a || "" === a) && (a = "DataTables_Table_" + DataTable.ext._oExternConfig.iNextUnique++, this.id = a);
                        var s = $.extend(!0, {}, DataTable.models.oSettings, {
                            nTable: this,
                            oApi: _that.oApi,
                            oInit: oInit,
                            sDestroyWidth: $(this).width(),
                            sInstance: a,
                            sTableId: a
                        });
                        if (DataTable.settings.push(s), s.oInstance = 1 === _that.length ? _that : $(this).dataTable(), oInit || (oInit = {}), oInit.oLanguage && _fnLanguageCompat(oInit.oLanguage), oInit = _fnExtend($.extend(!0, {}, DataTable.defaults), oInit), _fnMap(s.oFeatures, oInit, "bPaginate"), _fnMap(s.oFeatures, oInit, "bLengthChange"), _fnMap(s.oFeatures, oInit, "bFilter"), _fnMap(s.oFeatures, oInit, "bSort"), _fnMap(s.oFeatures, oInit, "bInfo"), _fnMap(s.oFeatures, oInit, "bProcessing"), _fnMap(s.oFeatures, oInit, "bAutoWidth"), _fnMap(s.oFeatures, oInit, "bSortClasses"), _fnMap(s.oFeatures, oInit, "bServerSide"), _fnMap(s.oFeatures, oInit, "bDeferRender"), _fnMap(s.oScroll, oInit, "sScrollX", "sX"), _fnMap(s.oScroll, oInit, "sScrollXInner", "sXInner"), _fnMap(s.oScroll, oInit, "sScrollY", "sY"), _fnMap(s.oScroll, oInit, "bScrollCollapse", "bCollapse"), _fnMap(s.oScroll, oInit, "bScrollInfinite", "bInfinite"), _fnMap(s.oScroll, oInit, "iScrollLoadGap", "iLoadGap"), _fnMap(s.oScroll, oInit, "bScrollAutoCss", "bAutoCss"), _fnMap(s, oInit, "asStripeClasses"), _fnMap(s, oInit, "asStripClasses", "asStripeClasses"), _fnMap(s, oInit, "fnServerData"), _fnMap(s, oInit, "fnFormatNumber"), _fnMap(s, oInit, "sServerMethod"), _fnMap(s, oInit, "aaSorting"), _fnMap(s, oInit, "aaSortingFixed"), _fnMap(s, oInit, "aLengthMenu"), _fnMap(s, oInit, "sPaginationType"), _fnMap(s, oInit, "sAjaxSource"), _fnMap(s, oInit, "sAjaxDataProp"), _fnMap(s, oInit, "iCookieDuration"), _fnMap(s, oInit, "sCookiePrefix"), _fnMap(s, oInit, "sDom"), _fnMap(s, oInit, "bSortCellsTop"), _fnMap(s, oInit, "iTabIndex"), _fnMap(s, oInit, "oSearch", "oPreviousSearch"), _fnMap(s, oInit, "aoSearchCols", "aoPreSearchCols"), _fnMap(s, oInit, "iDisplayLength", "_iDisplayLength"), _fnMap(s, oInit, "bJQueryUI", "bJUI"), _fnMap(s, oInit, "fnCookieCallback"), _fnMap(s, oInit, "fnStateLoad"), _fnMap(s, oInit, "fnStateSave"), _fnMap(s.oLanguage, oInit, "fnInfoCallback"), _fnCallbackReg(s, "aoDrawCallback", oInit.fnDrawCallback, "user"), _fnCallbackReg(s, "aoServerParams", oInit.fnServerParams, "user"), _fnCallbackReg(s, "aoStateSaveParams", oInit.fnStateSaveParams, "user"), _fnCallbackReg(s, "aoStateLoadParams", oInit.fnStateLoadParams, "user"), _fnCallbackReg(s, "aoStateLoaded", oInit.fnStateLoaded, "user"), _fnCallbackReg(s, "aoRowCallback", oInit.fnRowCallback, "user"), _fnCallbackReg(s, "aoRowCreatedCallback", oInit.fnCreatedRow, "user"), _fnCallbackReg(s, "aoHeaderCallback", oInit.fnHeaderCallback, "user"), _fnCallbackReg(s, "aoFooterCallback", oInit.fnFooterCallback, "user"), _fnCallbackReg(s, "aoInitComplete", oInit.fnInitComplete, "user"), _fnCallbackReg(s, "aoPreDrawCallback", oInit.fnPreDrawCallback, "user"), s.oFeatures.bServerSide && s.oFeatures.bSort && s.oFeatures.bSortClasses ? _fnCallbackReg(s, "aoDrawCallback", _fnSortingClasses, "server_side_sort_classes") : s.oFeatures.bDeferRender && _fnCallbackReg(s, "aoDrawCallback", _fnSortingClasses, "defer_sort_classes"), oInit.bJQueryUI ? ($.extend(s.oClasses, DataTable.ext.oJUIClasses), oInit.sDom === DataTable.defaults.sDom && "lfrtip" === DataTable.defaults.sDom && (s.sDom = '<"H"lfr>t<"F"ip>')) : $.extend(s.oClasses, DataTable.ext.oStdClasses), $(this).addClass(s.oClasses.sTable), ("" !== s.oScroll.sX || "" !== s.oScroll.sY) && (s.oScroll.iBarWidth = _fnScrollBarWidth()), s.iInitDisplayStart === undefined && (s.iInitDisplayStart = oInit.iDisplayStart, s._iDisplayStart = oInit.iDisplayStart), oInit.bStateSave && (s.oFeatures.bStateSave = !0, _fnLoadState(s, oInit), _fnCallbackReg(s, "aoDrawCallback", _fnSaveState, "state_save")), null !== oInit.iDeferLoading) {
                            s.bDeferLoading = !0;
                            var l = $.isArray(oInit.iDeferLoading);
                            s._iRecordsDisplay = l ? oInit.iDeferLoading[0] : oInit.iDeferLoading, s._iRecordsTotal = l ? oInit.iDeferLoading[1] : oInit.iDeferLoading
                        }
                        if (null !== oInit.aaData && (i = !0), "" !== oInit.oLanguage.sUrl ? (s.oLanguage.sUrl = oInit.oLanguage.sUrl, $.getJSON(s.oLanguage.sUrl, null, function(t) {
                                _fnLanguageCompat(t), $.extend(!0, s.oLanguage, oInit.oLanguage, t), _fnInitialise(s)
                            }), o = !0) : $.extend(!0, s.oLanguage, oInit.oLanguage), null === oInit.asStripeClasses && (s.asStripeClasses = [s.oClasses.sStripeOdd, s.oClasses.sStripeEven]), t = s.asStripeClasses.length, s.asDestroyStripes = [], t) {
                            var u = !1,
                                c = $(this).children("tbody").children("tr:lt(" + t + ")");
                            for (r = 0; t > r; r++) c.hasClass(s.asStripeClasses[r]) && (u = !0, s.asDestroyStripes.push(s.asStripeClasses[r]));
                            u && c.removeClass(s.asStripeClasses.join(" "))
                        }
                        var f, h = [],
                            d = this.getElementsByTagName("thead");
                        if (0 !== d.length && (_fnDetectHeader(s.aoHeader, d[0]), h = _fnGetUniqueThs(s)), null === oInit.aoColumns)
                            for (f = [], r = 0, t = h.length; t > r; r++) f.push(null);
                        else f = oInit.aoColumns;
                        for (r = 0, t = f.length; t > r; r++) oInit.saved_aoColumns !== undefined && oInit.saved_aoColumns.length == t && (null === f[r] && (f[r] = {}), f[r].bVisible = oInit.saved_aoColumns[r].bVisible), _fnAddColumn(s, h ? h[r] : null);
                        for (_fnApplyColumnDefs(s, oInit.aoColumnDefs, f, function(t, e) {
                                _fnColumnOptions(s, t, e)
                            }), r = 0, t = s.aaSorting.length; t > r; r++) {
                            s.aaSorting[r][0] >= s.aoColumns.length && (s.aaSorting[r][0] = 0);
                            var p = s.aoColumns[s.aaSorting[r][0]];
                            for (s.aaSorting[r][2] === undefined && (s.aaSorting[r][2] = 0), oInit.aaSorting === undefined && s.saved_aaSorting === undefined && (s.aaSorting[r][1] = p.asSorting[0]), e = 0, n = p.asSorting.length; n > e; e++)
                                if (s.aaSorting[r][1] == p.asSorting[e]) {
                                    s.aaSorting[r][2] = e;
                                    break
                                }
                        }
                        _fnSortingClasses(s), _fnBrowserDetect(s);
                        var g = $(this).children("caption").each(function() {
                                this._captionSide = $(this).css("caption-side")
                            }),
                            m = $(this).children("thead");
                        0 === m.length && (m = [document.createElement("thead")], this.appendChild(m[0])), s.nTHead = m[0];
                        var _ = $(this).children("tbody");
                        0 === _.length && (_ = [document.createElement("tbody")], this.appendChild(_[0])), s.nTBody = _[0], s.nTBody.setAttribute("role", "alert"), s.nTBody.setAttribute("aria-live", "polite"), s.nTBody.setAttribute("aria-relevant", "all");
                        var v = $(this).children("tfoot");
                        if (0 === v.length && g.length > 0 && ("" !== s.oScroll.sX || "" !== s.oScroll.sY) && (v = [document.createElement("tfoot")], this.appendChild(v[0])), v.length > 0 && (s.nTFoot = v[0], _fnDetectHeader(s.aoFooter, s.nTFoot)), i)
                            for (r = 0; r < oInit.aaData.length; r++) _fnAddData(s, oInit.aaData[r]);
                        else _fnGatherData(s);
                        s.aiDisplay = s.aiDisplayMaster.slice(), s.bInitialised = !0, o === !1 && _fnInitialise(s)
                    }), _that = null, this
                };
                DataTable.fnVersionCheck = function(t) {
                    for (var e = function(t, e) {
                            for (; t.length < e;) t += "0";
                            return t
                        }, n = DataTable.ext.sVersion.split("."), r = t.split("."), a = "", o = "", i = 0, s = r.length; s > i; i++) a += e(n[i], 3), o += e(r[i], 3);
                    return parseInt(a, 10) >= parseInt(o, 10)
                }, DataTable.fnIsDataTable = function(t) {
                    for (var e = DataTable.settings, n = 0; n < e.length; n++)
                        if (e[n].nTable === t || e[n].nScrollHead === t || e[n].nScrollFoot === t) return !0;
                    return !1
                }, DataTable.fnTables = function(t) {
                    var e = [];
                    return jQuery.each(DataTable.settings, function(n, r) {
                        (!t || t === !0 && $(r.nTable).is(":visible")) && e.push(r.nTable)
                    }), e
                }, DataTable.version = "1.9.4", DataTable.settings = [], DataTable.models = {}, DataTable.models.ext = {
                    afnFiltering: [],
                    afnSortData: [],
                    aoFeatures: [],
                    aTypes: [],
                    fnVersionCheck: DataTable.fnVersionCheck,
                    iApiIndex: 0,
                    ofnSearch: {},
                    oApi: {},
                    oStdClasses: {},
                    oJUIClasses: {},
                    oPagination: {},
                    oSort: {},
                    sVersion: DataTable.version,
                    sErrMode: "alert",
                    _oExternConfig: {
                        iNextUnique: 0
                    }
                }, DataTable.models.oSearch = {
                    bCaseInsensitive: !0,
                    sSearch: "",
                    bRegex: !1,
                    bSmart: !0
                }, DataTable.models.oRow = {
                    nTr: null,
                    _aData: [],
                    _aSortData: [],
                    _anHidden: [],
                    _sRowStripe: ""
                }, DataTable.models.oColumn = {
                    aDataSort: null,
                    asSorting: null,
                    bSearchable: null,
                    bSortable: null,
                    bUseRendered: null,
                    bVisible: null,
                    _bAutoType: !0,
                    fnCreatedCell: null,
                    fnGetData: null,
                    fnRender: null,
                    fnSetData: null,
                    mData: null,
                    mRender: null,
                    nTh: null,
                    nTf: null,
                    sClass: null,
                    sContentPadding: null,
                    sDefaultContent: null,
                    sName: null,
                    sSortDataType: "std",
                    sSortingClass: null,
                    sSortingClassJUI: null,
                    sTitle: null,
                    sType: null,
                    sWidth: null,
                    sWidthOrig: null
                }, DataTable.defaults = {
                    aaData: null,
                    aaSorting: [
                        [0, "asc"]
                    ],
                    aaSortingFixed: null,
                    aLengthMenu: [10, 25, 50, 100],
                    aoColumns: null,
                    aoColumnDefs: null,
                    aoSearchCols: [],
                    asStripeClasses: null,
                    bAutoWidth: !0,
                    bDeferRender: !1,
                    bDestroy: !1,
                    bFilter: !0,
                    bInfo: !0,
                    bJQueryUI: !1,
                    bLengthChange: !0,
                    bPaginate: !0,
                    bProcessing: !1,
                    bRetrieve: !1,
                    bScrollAutoCss: !0,
                    bScrollCollapse: !1,
                    bScrollInfinite: !1,
                    bServerSide: !1,
                    bSort: !0,
                    bSortCellsTop: !1,
                    bSortClasses: !0,
                    bStateSave: !1,
                    fnCookieCallback: null,
                    fnCreatedRow: null,
                    fnDrawCallback: null,
                    fnFooterCallback: null,
                    fnFormatNumber: function(t) {
                        if (1e3 > t) return t;
                        for (var e = t + "", n = e.split(""), r = "", a = e.length, o = 0; a > o; o++) o % 3 === 0 && 0 !== o && (r = this.oLanguage.sInfoThousands + r), r = n[a - o - 1] + r;
                        return r
                    },
                    fnHeaderCallback: null,
                    fnInfoCallback: null,
                    fnInitComplete: null,
                    fnPreDrawCallback: null,
                    fnRowCallback: null,
                    fnServerData: function(t, e, n, r) {
                        r.jqXHR = $.ajax({
                            url: t,
                            data: e,
                            success: function(t) {
                                t.sError && r.oApi._fnLog(r, 0, t.sError), $(r.oInstance).trigger("xhr", [r, t]), n(t)
                            },
                            dataType: "json",
                            cache: !1,
                            type: r.sServerMethod,
                            error: function(t, e, n) {
                                "parsererror" == e && r.oApi._fnLog(r, 0, "DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")
                            }
                        })
                    },
                    fnServerParams: null,
                    fnStateLoad: function(oSettings) {
                        var sData = this.oApi._fnReadCookie(oSettings.sCookiePrefix + oSettings.sInstance),
                            oData;
                        try {
                            oData = "function" == typeof $.parseJSON ? $.parseJSON(sData) : eval("(" + sData + ")")
                        } catch (e) {
                            oData = null
                        }
                        return oData
                    },
                    fnStateLoadParams: null,
                    fnStateLoaded: null,
                    fnStateSave: function(t, e) {
                        this.oApi._fnCreateCookie(t.sCookiePrefix + t.sInstance, this.oApi._fnJsonString(e), t.iCookieDuration, t.sCookiePrefix, t.fnCookieCallback)
                    },
                    fnStateSaveParams: null,
                    iCookieDuration: 7200,
                    iDeferLoading: null,
                    iDisplayLength: 10,
                    iDisplayStart: 0,
                    iScrollLoadGap: 100,
                    iTabIndex: 0,
                    oLanguage: {
                        oAria: {
                            sSortAscending: ": activate to sort column ascending",
                            sSortDescending: ": activate to sort column descending"
                        },
                        oPaginate: {
                            sFirst: "First",
                            sLast: "Last",
                            sNext: "Next",
                            sPrevious: "Previous"
                        },
                        sEmptyTable: "No data available in table",
                        sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                        sInfoEmpty: "Showing 0 to 0 of 0 entries",
                        sInfoFiltered: "(filtered from _MAX_ total entries)",
                        sInfoPostFix: "",
                        sInfoThousands: ",",
                        sLengthMenu: "Show _MENU_ entries",
                        sLoadingRecords: "Loading...",
                        sProcessing: "Processing...",
                        sSearch: "Search:",
                        sUrl: "",
                        sZeroRecords: "No matching records found"
                    },
                    oSearch: $.extend({}, DataTable.models.oSearch),
                    sAjaxDataProp: "aaData",
                    sAjaxSource: null,
                    sCookiePrefix: "SpryMedia_DataTables_",
                    sDom: "lfrtip",
                    sPaginationType: "two_button",
                    sScrollX: "",
                    sScrollXInner: "",
                    sScrollY: "",
                    sServerMethod: "GET"
                }, DataTable.defaults.columns = {
                    aDataSort: null,
                    asSorting: ["asc", "desc"],
                    bSearchable: !0,
                    bSortable: !0,
                    bUseRendered: !0,
                    bVisible: !0,
                    fnCreatedCell: null,
                    fnRender: null,
                    iDataSort: -1,
                    mData: null,
                    mRender: null,
                    sCellType: "td",
                    sClass: "",
                    sContentPadding: "",
                    sDefaultContent: null,
                    sName: "",
                    sSortDataType: "std",
                    sTitle: null,
                    sType: null,
                    sWidth: null
                }, DataTable.models.oSettings = {
                    oFeatures: {
                        bAutoWidth: null,
                        bDeferRender: null,
                        bFilter: null,
                        bInfo: null,
                        bLengthChange: null,
                        bPaginate: null,
                        bProcessing: null,
                        bServerSide: null,
                        bSort: null,
                        bSortClasses: null,
                        bStateSave: null
                    },
                    oScroll: {
                        bAutoCss: null,
                        bCollapse: null,
                        bInfinite: null,
                        iBarWidth: 0,
                        iLoadGap: null,
                        sX: null,
                        sXInner: null,
                        sY: null
                    },
                    oLanguage: {
                        fnInfoCallback: null
                    },
                    oBrowser: {
                        bScrollOversize: !1
                    },
                    aanFeatures: [],
                    aoData: [],
                    aiDisplay: [],
                    aiDisplayMaster: [],
                    aoColumns: [],
                    aoHeader: [],
                    aoFooter: [],
                    asDataSearch: [],
                    oPreviousSearch: {},
                    aoPreSearchCols: [],
                    aaSorting: null,
                    aaSortingFixed: null,
                    asStripeClasses: null,
                    asDestroyStripes: [],
                    sDestroyWidth: 0,
                    aoRowCallback: [],
                    aoHeaderCallback: [],
                    aoFooterCallback: [],
                    aoDrawCallback: [],
                    aoRowCreatedCallback: [],
                    aoPreDrawCallback: [],
                    aoInitComplete: [],
                    aoStateSaveParams: [],
                    aoStateLoadParams: [],
                    aoStateLoaded: [],
                    sTableId: "",
                    nTable: null,
                    nTHead: null,
                    nTFoot: null,
                    nTBody: null,
                    nTableWrapper: null,
                    bDeferLoading: !1,
                    bInitialised: !1,
                    aoOpenRows: [],
                    sDom: null,
                    sPaginationType: "two_button",
                    iCookieDuration: 0,
                    sCookiePrefix: "",
                    fnCookieCallback: null,
                    aoStateSave: [],
                    aoStateLoad: [],
                    oLoadedState: null,
                    sAjaxSource: null,
                    sAjaxDataProp: null,
                    bAjaxDataGet: !0,
                    jqXHR: null,
                    fnServerData: null,
                    aoServerParams: [],
                    sServerMethod: null,
                    fnFormatNumber: null,
                    aLengthMenu: null,
                    iDraw: 0,
                    bDrawing: !1,
                    iDrawError: -1,
                    _iDisplayLength: 10,
                    _iDisplayStart: 0,
                    _iDisplayEnd: 10,
                    _iRecordsTotal: 0,
                    _iRecordsDisplay: 0,
                    bJUI: null,
                    oClasses: {},
                    bFiltered: !1,
                    bSorted: !1,
                    bSortCellsTop: null,
                    oInit: null,
                    aoDestroyCallback: [],
                    fnRecordsTotal: function() {
                        return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length
                    },
                    fnRecordsDisplay: function() {
                        return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length
                    },
                    fnDisplayEnd: function() {
                        return this.oFeatures.bServerSide ? this.oFeatures.bPaginate === !1 || -1 == this._iDisplayLength ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd
                    },
                    oInstance: null,
                    sInstance: null,
                    iTabIndex: 0,
                    nScrollHead: null,
                    nScrollFoot: null
                }, DataTable.ext = $.extend(!0, {}, DataTable.models.ext), $.extend(DataTable.ext.oStdClasses, {
                    sTable: "dataTable",
                    sPagePrevEnabled: "paginate_enabled_previous",
                    sPagePrevDisabled: "paginate_disabled_previous",
                    sPageNextEnabled: "paginate_enabled_next",
                    sPageNextDisabled: "paginate_disabled_next",
                    sPageJUINext: "",
                    sPageJUIPrev: "",
                    sPageButton: "paginate_button",
                    sPageButtonActive: "paginate_active",
                    sPageButtonStaticDisabled: "paginate_button paginate_button_disabled",
                    sPageFirst: "first",
                    sPagePrevious: "previous",
                    sPageNext: "next",
                    sPageLast: "last",
                    sStripeOdd: "odd",
                    sStripeEven: "even",
                    sRowEmpty: "dataTables_empty",
                    sWrapper: "dataTables_wrapper",
                    sFilter: "dataTables_filter",
                    sInfo: "dataTables_info",
                    sPaging: "dataTables_paginate paging_",
                    sLength: "dataTables_length",
                    sProcessing: "dataTables_processing",
                    sSortAsc: "sorting_asc",
                    sSortDesc: "sorting_desc",
                    sSortable: "sorting",
                    sSortableAsc: "sorting_asc_disabled",
                    sSortableDesc: "sorting_desc_disabled",
                    sSortableNone: "sorting_disabled",
                    sSortColumn: "sorting_",
                    sSortJUIAsc: "",
                    sSortJUIDesc: "",
                    sSortJUI: "",
                    sSortJUIAscAllowed: "",
                    sSortJUIDescAllowed: "",
                    sSortJUIWrapper: "",
                    sSortIcon: "",
                    sScrollWrapper: "dataTables_scroll",
                    sScrollHead: "dataTables_scrollHead",
                    sScrollHeadInner: "dataTables_scrollHeadInner",
                    sScrollBody: "dataTables_scrollBody",
                    sScrollFoot: "dataTables_scrollFoot",
                    sScrollFootInner: "dataTables_scrollFootInner",
                    sFooterTH: "",
                    sJUIHeader: "",
                    sJUIFooter: ""
                }), $.extend(DataTable.ext.oJUIClasses, DataTable.ext.oStdClasses, {
                    sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left",
                    sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
                    sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
                    sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
                    sPageJUINext: "ui-icon ui-icon-circle-arrow-e",
                    sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w",
                    sPageButton: "fg-button ui-button ui-state-default",
                    sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled",
                    sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled",
                    sPageFirst: "first ui-corner-tl ui-corner-bl",
                    sPageLast: "last ui-corner-tr ui-corner-br",
                    sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
                    sSortAsc: "ui-state-default",
                    sSortDesc: "ui-state-default",
                    sSortable: "ui-state-default",
                    sSortableAsc: "ui-state-default",
                    sSortableDesc: "ui-state-default",
                    sSortableNone: "ui-state-default",
                    sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n",
                    sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s",
                    sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s",
                    sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n",
                    sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s",
                    sSortJUIWrapper: "DataTables_sort_wrapper",
                    sSortIcon: "DataTables_sort_icon",
                    sScrollHead: "dataTables_scrollHead ui-state-default",
                    sScrollFoot: "dataTables_scrollFoot ui-state-default",
                    sFooterTH: "ui-state-default",
                    sJUIHeader: "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
                    sJUIFooter: "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
                }), $.extend(DataTable.ext.oPagination, {
                    two_button: {
                        fnInit: function(t, e, n) {
                            var r = t.oLanguage.oPaginate,
                                a = (t.oClasses, function(e) {
                                    t.oApi._fnPageChange(t, e.data.action) && n(t)
                                }),
                                o = t.bJUI ? '<a class="' + t.oClasses.sPagePrevDisabled + '" tabindex="' + t.iTabIndex + '" role="button"><span class="' + t.oClasses.sPageJUIPrev + '"></span></a><a class="' + t.oClasses.sPageNextDisabled + '" tabindex="' + t.iTabIndex + '" role="button"><span class="' + t.oClasses.sPageJUINext + '"></span></a>' : '<a class="' + t.oClasses.sPagePrevDisabled + '" tabindex="' + t.iTabIndex + '" role="button">' + r.sPrevious + '</a><a class="' + t.oClasses.sPageNextDisabled + '" tabindex="' + t.iTabIndex + '" role="button">' + r.sNext + "</a>";
                            $(e).append(o);
                            var i = $("a", e),
                                s = i[0],
                                l = i[1];
                            t.oApi._fnBindAction(s, {
                                action: "previous"
                            }, a), t.oApi._fnBindAction(l, {
                                action: "next"
                            }, a), t.aanFeatures.p || (e.id = t.sTableId + "_paginate", s.id = t.sTableId + "_previous", l.id = t.sTableId + "_next", s.setAttribute("aria-controls", t.sTableId), l.setAttribute("aria-controls", t.sTableId))
                        },
                        fnUpdate: function(t, e) {
                            if (t.aanFeatures.p)
                                for (var n, r = t.oClasses, a = t.aanFeatures.p, o = 0, i = a.length; i > o; o++) n = a[o].firstChild, n && (n.className = 0 === t._iDisplayStart ? r.sPagePrevDisabled : r.sPagePrevEnabled, n = n.nextSibling, n.className = t.fnDisplayEnd() == t.fnRecordsDisplay() ? r.sPageNextDisabled : r.sPageNextEnabled)
                        }
                    },
                    iFullNumbersShowPages: 5,
                    full_numbers: {
                        fnInit: function(t, e, n) {
                            var r = t.oLanguage.oPaginate,
                                a = t.oClasses,
                                o = function(e) {
                                    t.oApi._fnPageChange(t, e.data.action) && n(t)
                                };
                            $(e).append('<a  tabindex="' + t.iTabIndex + '" class="' + a.sPageButton + " " + a.sPageFirst + '">' + r.sFirst + '</a><a  tabindex="' + t.iTabIndex + '" class="' + a.sPageButton + " " + a.sPagePrevious + '">' + r.sPrevious + '</a><span></span><a tabindex="' + t.iTabIndex + '" class="' + a.sPageButton + " " + a.sPageNext + '">' + r.sNext + '</a><a tabindex="' + t.iTabIndex + '" class="' + a.sPageButton + " " + a.sPageLast + '">' + r.sLast + "</a>");
                            var i = $("a", e),
                                s = i[0],
                                l = i[1],
                                u = i[2],
                                c = i[3];
                            t.oApi._fnBindAction(s, {
                                    action: "first"
                                }, o),
                                t.oApi._fnBindAction(l, {
                                    action: "previous"
                                }, o), t.oApi._fnBindAction(u, {
                                    action: "next"
                                }, o), t.oApi._fnBindAction(c, {
                                    action: "last"
                                }, o), t.aanFeatures.p || (e.id = t.sTableId + "_paginate", s.id = t.sTableId + "_first", l.id = t.sTableId + "_previous", u.id = t.sTableId + "_next", c.id = t.sTableId + "_last")
                        },
                        fnUpdate: function(t, e) {
                            if (t.aanFeatures.p) {
                                var n, r, a, o, i, s, l, u = DataTable.ext.oPagination.iFullNumbersShowPages,
                                    c = Math.floor(u / 2),
                                    f = Math.ceil(t.fnRecordsDisplay() / t._iDisplayLength),
                                    h = Math.ceil(t._iDisplayStart / t._iDisplayLength) + 1,
                                    d = "",
                                    p = t.oClasses,
                                    g = t.aanFeatures.p,
                                    m = function(r) {
                                        t.oApi._fnBindAction(this, {
                                            page: r + n - 1
                                        }, function(n) {
                                            t.oApi._fnPageChange(t, n.data.page), e(t), n.preventDefault()
                                        })
                                    };
                                for (-1 === t._iDisplayLength ? (n = 1, r = 1, h = 1) : u > f ? (n = 1, r = f) : c >= h ? (n = 1, r = u) : h >= f - c ? (n = f - u + 1, r = f) : (n = h - Math.ceil(u / 2) + 1, r = n + u - 1), a = n; r >= a; a++) d += h !== a ? '<a tabindex="' + t.iTabIndex + '" class="' + p.sPageButton + '">' + t.fnFormatNumber(a) + "</a>" : '<a tabindex="' + t.iTabIndex + '" class="' + p.sPageButtonActive + '">' + t.fnFormatNumber(a) + "</a>";
                                for (a = 0, o = g.length; o > a; a++) l = g[a], l.hasChildNodes() && ($("span:eq(0)", l).html(d).children("a").each(m), i = l.getElementsByTagName("a"), s = [i[0], i[1], i[i.length - 2], i[i.length - 1]], $(s).removeClass(p.sPageButton + " " + p.sPageButtonActive + " " + p.sPageButtonStaticDisabled), $([s[0], s[1]]).addClass(1 == h ? p.sPageButtonStaticDisabled : p.sPageButton), $([s[2], s[3]]).addClass(0 === f || h === f || -1 === t._iDisplayLength ? p.sPageButtonStaticDisabled : p.sPageButton))
                            }
                        }
                    }
                }), $.extend(DataTable.ext.oSort, {
                    "string-pre": function(t) {
                        return "string" != typeof t && (t = null !== t && t.toString ? t.toString() : ""), t.toLowerCase()
                    },
                    "string-asc": function(t, e) {
                        return e > t ? -1 : t > e ? 1 : 0
                    },
                    "string-desc": function(t, e) {
                        return e > t ? 1 : t > e ? -1 : 0
                    },
                    "html-pre": function(t) {
                        return t.replace(/<.*?>/g, "").toLowerCase()
                    },
                    "html-asc": function(t, e) {
                        return e > t ? -1 : t > e ? 1 : 0
                    },
                    "html-desc": function(t, e) {
                        return e > t ? 1 : t > e ? -1 : 0
                    },
                    "date-pre": function(t) {
                        var e = Date.parse(t);
                        return (isNaN(e) || "" === e) && (e = Date.parse("01/01/1970 00:00:00")), e
                    },
                    "date-asc": function(t, e) {
                        return t - e
                    },
                    "date-desc": function(t, e) {
                        return e - t
                    },
                    "numeric-pre": function(t) {
                        return "-" == t || "" === t ? 0 : 1 * t
                    },
                    "numeric-asc": function(t, e) {
                        return t - e
                    },
                    "numeric-desc": function(t, e) {
                        return e - t
                    }
                }), $.extend(DataTable.ext.aTypes, [function(t) {
                    if ("number" == typeof t) return "numeric";
                    if ("string" != typeof t) return null;
                    var e, n = "0123456789-",
                        r = "0123456789.",
                        a = !1;
                    if (e = t.charAt(0), -1 == n.indexOf(e)) return null;
                    for (var o = 1; o < t.length; o++) {
                        if (e = t.charAt(o), -1 == r.indexOf(e)) return null;
                        if ("." == e) {
                            if (a) return null;
                            a = !0
                        }
                    }
                    return "numeric"
                }, function(t) {
                    var e = Date.parse(t);
                    return null !== e && !isNaN(e) || "string" == typeof t && 0 === t.length ? "date" : null
                }, function(t) {
                    return "string" == typeof t && -1 != t.indexOf("<") && -1 != t.indexOf(">") ? "html" : null
                }]), $.fn.DataTable = DataTable, $.fn.dataTable = DataTable, $.fn.dataTableSettings = DataTable.settings, $.fn.dataTableExt = DataTable.ext, jQuery.extend(jQuery.fn.dataTableExt.oSort, {
                    "num-html-pre": function(t) {
                        var e = $(t),
                            n = e.attr("title") || 100;
                        return parseFloat(n)
                    },
                    "num-html-asc": function(t, e) {
                        return e > t ? -1 : t > e ? 1 : 0
                    },
                    "num-html-desc": function(t, e) {
                        return e > t ? 1 : t > e ? -1 : 0
                    }
                }), jQuery.extend(jQuery.fn.dataTableExt.oSort, {
                    "seed-pre": function(t) {
                        return t
                    },
                    "seed-asc": function(t, e) {
                        return (t.indexOf("a") > -1 || t.indexOf("b") > -1) && parseFloat(t) === parseFloat(e) ? 1 : (e.indexOf("a") > -1 || e.indexOf("b") > -1) && parseFloat(t) === parseFloat(e) ? -1 : (t = parseFloat(t), e = parseFloat(e), e > t ? -1 : t > e ? 1 : 0)
                    },
                    "seed-desc": function(t, e) {
                        return (t.indexOf("a") > -1 || t.indexOf("b") > -1) && parseFloat(t) === parseFloat(e) ? -1 : (e.indexOf("a") > -1 || e.indexOf("b") > -1) && parseFloat(t) === parseFloat(e) ? 1 : (t = parseFloat(t), e = parseFloat(e), e > t ? 1 : t > e ? -1 : 0)
                    }
                })
            })
        }(window, document)
    }, {}],
    13: [function(t, e, n) {
        "use strict";
        var r = t("lodash"),
            a = t("d3"),
            o = t("../data/teams"),
            i = t("../data/schedule"),
            s = !1;
        e.exports = {
            gamesTabEnabled: s,
            numTabs: s ? 3 : 2,
            getInterestingMatchups: function(t) {
                var e, n = this.getMatchups(t),
                    r = this.sortByKey(n, "scoringness", !0)[0],
                    a = this.sortByKey(n, "avgSPI", !0)[0],
                    o = this.sortByKey(n, "SPIDiff", !1)[0],
                    i = this.sortByKey(n, "offensiveSkewDifference", !0),
                    s = i[0];
                e = s.offensiveSkewA > 0 && s.offensiveSkewB < 0 ? s.teamA.country + " is <strong>more offensive</strong>, while " + s.teamB.country + " is <strong>more defensive</strong>." : s.offensiveSkewB > 0 && s.offensiveSkewA < 0 ? s.teamB.country + " is <strong>more offensive</strong>, while " + s.teamA.country + " is <strong>more defensive</strong>." : s.teamB.country + " and " + s.teamA.country + " have <strong>differences in their offensive and defensive strengths</strong>.";
                var l, u = i[i.length - 1];
                return l = u.offensiveSkewA > 0 && u.offensiveSkewB > 0 ? "Both teams have <strong>strong offenses</strong>" : u.offensiveSkewA < 0 && u.offensiveSkewB < 0 ? "Both teams have are <strong>more defensive</strong>" : "Both teams have <strong>balanced offenses and defenses</strong>", [{
                    description: "High Scoring",
                    matchup: r,
                    reason: "Based on analysis of both teams' expected <strong>goals for</strong> and <strong>goals against</strong>.",
                    extraClass: "high-scoring"
                }, {
                    description: "High Powered",
                    matchup: a,
                    reason: "This match has the <strong>highest average SPI</strong>.",
                    extraClass: "spi"
                }, {
                    description: "Close Match",
                    matchup: o,
                    reason: "These teams are <strong>most evenly matched</strong> based on <strong>SPI</strong>.",
                    extraClass: "close"
                }, {
                    description: "Most Similar",
                    matchup: u,
                    reason: l,
                    extraClass: "similar"
                }, {
                    description: "Differences",
                    matchup: s,
                    reason: e,
                    extraClass: "different"
                }]
            },
            getMatchups: function(t) {
                var e = [],
                    n = this;
                return r.each(t, function(t) {
                    for (var r = 0; r < t.length; r++)
                        for (var a = r + 1; a < t.length; a++) {
                            var o = t[r],
                                i = t[a];
                            e.push(n.getMatchProperties(o, i))
                        }
                }), e
            },
            groupStatus: function(t) {
                var e = r.find(t, function(t) {
                    return t.win_group > 0 && t.win_group < 1 || t.sixteen > 0 && t.sixteen < 1
                });
                return e ? "incomplete" : "complete"
            },
            getMatchProperties: function(t, e) {
                var n = {};
                return n.teamA = t, n.teamB = e, n.scoringness = (parseFloat(t.spi_offense) + parseFloat(e.spi_defense)) / 2 + (parseFloat(e.spi_offense) + parseFloat(t.spi_defense)) / 2, n.offensiveSkewA = t.spi_offense - t.spi_defense, n.offensiveSkewB = e.spi_offense - e.spi_defense, n.offensiveSkewDifference = Math.abs(n.offensiveSkewA - n.offensiveSkewB), n.avgSPI = t.spi / 2 + e.spi / 2, n.SPIDiff = Math.abs(t.spi - e.spi), n
            },
            sortByKey: function(t, e, n) {
                var a = r.sortBy(t, function(t) {
                    return +t[e]
                });
                return n ? a.reverse() : a
            },
            sortByTwoKeys: function(t, e, n, a) {
                var o = r.sortBy(t, function(t) {
                    return +t[e] + +t[n]
                });
                return a ? o.reverse() : o
            },
            toFixed: function(t, e) {
                e = e || 0;
                var n = Math.pow(10, e);
                return Math.round(t * n) / n
            },
            formatPercent: function(t, e) {
                return void 0 === e && (e = ""), 0 == t ? "&nbsp;" : .01 > t ? "<1%" : t > .99 && 1 > t ? "99%" : 1 == t ? e + "&nbsp;" : Math.round(100 * t) + "%"
            },
            getPopoverContent: function(t, e) {
                var n = e.country + "<br/><ul>";
                return r.each(t, function(t) {
                    t.country !== e.country && (n += "<li> VS. " + t.country + "</li>")
                }), n += "</ul>"
            },
            formatSpi: function(t) {
                return parseFloat(t).toFixed(1)
            },
            detailedPercent: function(t) {
                return (100 * this.toFixed(t, 8)).toFixed(5) + "%"
            },
            isTeamDead: function(t) {
                return "0" === t.win ? !0 : !1
            },
            getColor: function(t, e) {
                var n = a.scale.linear().domain([0, 1]);
                return (n = "0" === e ? n.range(["#FFFFFF", "#FFFFFF"]) : n.range(["#FFFFFF", "#00CC00"]))(t)
            },
            getGroupColor: function(t) {
                var e = a.scale.linear().domain([70, 100]).range(["#FFFFFF", "#FF0000"]);
                return e(t)
            },
            getGroups: function() {
                var t = this,
                    e = {};
                return r.each(o, function(t) {
                    r.isUndefined(e[t.group]) && (e[t.group] = []), e[t.group].push(t)
                }), r.each(e, function(e) {
                    e = t.sortByKey(e, "sixteen")
                }), e
            },
            getNonwhiteColor: function(t) {
                var e = t.color_home;
                return "#FFFFFF" === e.toUpperCase() ? t.color_away : e
            },
            parseDate: function(t) {
                var e = a.time.format("%Y-%m-%d");
                return e.parse(t)
            },
            convertDate: function(t) {
                var e = a.time.format("%b, %e");
                return e(this.parseDate(t))
            },
            isMobile: function() {
                return $(window).width() <= 767
            },
            getGroupMatchupProbabilities: function(t, e) {
                var n = r.filter(i, function(n) {
                    return n.team1 === t.country_id && n.team2 === e.country_id || n.team1 === e.country_id && n.team2 === t.country_id
                });
                if (!n.length) return null;
                var a = n[0];
                return a.team1 === t.country_id ? {
                    win: a.team1_win,
                    tie: a.tie_prob,
                    loss: a.team2_win
                } : {
                    win: a.team2_win,
                    tie: a.tie_prob,
                    loss: a.team1_win
                }
            }
        }
    }, {
        "../data/schedule": 8,
        "../data/teams": 9,
        d3: 1,
        lodash: 4
    }],
    14: [function(t, e, n) {
        "use strict";

        function r(t) {
            return this instanceof r ? (this.$el = t, a(o.isMobile()), void this.$el.find(".mobile-game").click(function() {
                if (window.isTouchDevice) {
                    var t = $(this).find(".overlay");
                    t.attr("class").indexOf("slide-down") > -1 ? t.attr("class", "overlay no-slide") : t.attr("class", "overlay slide-down")
                }
            })) : new r(selector)
        }
        var a = t("../viz/calendar"),
            o = t("../utils");
        t("node-touch"), e.exports = r
    }, {
        "../utils": 13,
        "../viz/calendar": 18,
        "node-touch": 5
    }],
    15: [
      function(t, e, n) {
        function r(t, e) {
            if (!(this instanceof r)) return new r(t, e);
            this.$el = t, 
            this.group = i.sortByKey(e, "spi", !0);
            
            var n = this;

            this.groupViz = new a(
              this.$el.find(".group-viz"), 
              this.group
            ), 
            this.cardViz = new o(
              this.$el.find(".card-viz"),
              this.group
            ), 
            this.groupViz.on("team:selected", function(t) {
                n.cardViz.setTeam(t)
            });

            var u = l.throttle(function() {
                n.redraw()
            }, 500);
            s.on("redraw", function() {
                u()
            })
        }

        var a = t("../viz/group"),
            o = t("../viz/card"),
            i = t("../utils"),
            s = t("../emitter"),
            l = t("lodash");

        r.prototype.redraw = function() {
            this.groupViz.redraw()
        }, 

        e.exports = r
      }, {
          "../emitter": 10,
          "../utils": 13,
          "../viz/card": 19,
          "../viz/group": 20,
          lodash: 4
      }
    ],
    16: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(this instanceof r)) return new r(t, groups);
            this.$el = t, this.groups = a.getGroups();
            var n = this;
            o.each(this.groups, function(t) {
                new i(n.$el.find(n.getSelector(t)), t)
            })
        }
        var a = t("../utils"),
            o = t("lodash"),
            i = t("./group");
        e.exports = r, r.prototype.getSelector = function(t) {
            return "#group-" + t[0].group
        }
    }, {
        "../utils": 13,
        "./group": 15,
        lodash: 4
    }],
    17: [function(t, e, n) {
        "use strict";

        function r(t) {
            return this instanceof r ? (this.$el = t, void this.$el.find("table").dataTable({
                bInfo: !1,
                iDisplayLength: 100,
                bLengthChange: !1,
                bPaginate: !1,
                bFilter: !1,
                aaSorting: [
                    [8, "desc"],
                    [7, "desc"],
                    [6, "desc"],
                    [5, "desc"],
                    [4, "desc"]
                ],
                columnDefs: [{
                    orderData: [0, 1],
                    targets: 0
                }],
                aoColumns: [{
                    asSorting: ["desc", "asc"]
                }, null, null, null, {
                    sType: "num-html",
                    asSorting: ["desc", "asc"]
                }, {
                    sType: "num-html",
                    asSorting: ["desc", "asc"]
                }, {
                    sType: "num-html",
                    asSorting: ["desc", "asc"]
                }, {
                    sType: "num-html",
                    asSorting: ["desc", "asc"]
                }, {
                    sType: "num-html",
                    asSorting: ["desc", "asc"]
                }]
            })) : new r(t)
        }
        t("../lib/datatables"), $(document).ready(function() {
            $(".odds.win.sorting_desc").click()
        }), e.exports = r
    }, {
        "../lib/datatables": 12
    }],
    18: [function(t, e, n) {
        "use strict";

        function r(t) {
            i.each(s, function(e) {
                var n;
                n = t ? "#" + e.team1 + "-" + e.team2 : "#" + e.group.toUpperCase() + "-" + e.date + "-" + e.slot;
                var r = o.select(n),
                    s = 75,
                    l = 75,
                    u = a(e, s, l),
                    c = r.append("svg").attr("width", s).attr("height", l);
                c.append("path").attr("d", u.team1).attr("fill", e.team1_home_color), c.append("path").attr("d", u.tie).attr("fill", "#ddd"), c.append("path").attr("d", u.team2).attr("fill", e.team2_home_color);
                var f = i.map(Array(11), function(t, e) {
                    return .1 * e
                });
                c.selectAll(".horiz-lines").data(f).enter().append("line").attr("y1", function(t) {
                    return t * l
                }).attr("y2", function(t) {
                    return t * l
                }).attr("x1", 0).attr("x2", s).attr("stroke", "#cccccc").attr("stroke-width", 1), c.selectAll(".vert-lines").data(f).enter().append("line").attr("x1", function(t) {
                    return t * s
                }).attr("x2", function(t) {
                    return t * s
                }).attr("y1", 0).attr("y2", l).attr("stroke", "#cccccc").attr("stroke-width", 1), c.append("g").classed("overlay", !0), c.selectAll("g.overlay").append("rect").attr("width", "100%").attr("height", "100%").attr("class", "calendar-overlay"), c.selectAll("g.overlay").append("text").attr("dx", "50%").attr("dy", "35%").text(e.team1).attr("class", "calendar-team"), c.selectAll("g.overlay").append("text").attr("dx", "50%").attr("dy", "60%").text("vs").attr("class", "calendar-vs"), c.selectAll("g.overlay").append("text").attr("dx", "50%").attr("dy", "90%").text(e.team2).attr("class", "calendar-team")
            })
        }

        function a(t, e, n) {
            var r, a, i, s, l, u = o.scale.linear().domain([0, .1]).range([0, e]),
                c = Math.floor(10 * t.team1_win) / 10,
                f = t.team1_win - c,
                h = .1 - f,
                d = Math.floor(10 * (t.tie_prob - h)) / 10,
                p = Math.floor(10 * t.team2_win) / 10,
                g = t.team2_win - p;
            return t.team1_win < .1 ? (r = "M 0 0 h " + u(t.team1_win) + "v " + n / 10 + "h " + -u(t.team1_win) + "z", a = {
                x: u(t.team1_win),
                y: 0
            }) : t.team1_win % .1 == 0 ? (r = "M 0 0 h " + e + "v " + t.team1_win * n + "h " + -e + "z", a = {
                x: 0,
                y: t.team1_win * n
            }) : (r = "M 0 0 h " + e + "v " + c * n + "h " + -(e - u(f)) + "v " + .1 * n + "h " + -u(f) + "z", a = {
                x: u(f),
                y: c * n
            }), t.tie_prob + f < .1 ? (i = "M " + a.x + " " + a.y + "h " + u(t.tie_prob) + "v " + .1 * n + "h " + -u(t.tie_prob) + "z", s = {
                x: u(f + t.tie_prob),
                y: a.y
            }) : t.tie_prob + f == .1 ? (i = "M " + a.x + " " + a.y + "h " + (e - u(f)) + "v " + .1 * n + "h " + -(e - u(f)) + "z", s = {
                x: 0,
                y: n * (t.team1_win + t.tie_prob)
            }) : 100 * (t.team1_win + t.tie_prob) % 10 == 0 ? (i = "M " + a.x + " " + a.y + "h " + (e - u(f)) + "v " + n * (t.tie_prob - h + .1) + "h " + -e + "v " + -n * (t.tie_prob - h) + "h " + u(f) + "v " + -.1 * n + "z", s = {
                x: 0,
                y: n * (t.team1_win + t.tie_prob)
            }) : 100 * t.team1_win % 10 == 0 ? (i = "M " + a.x + " " + a.y + "h " + (e - u(f)) + "v " + n * (.1 + d) + "h " + -(e - u(t.tie_prob - d - h)) + "v " + .1 * n + "h " + -u(t.tie_prob - d - h) + "v " + -n * (.2 + d) + "z", s = {
                x: u(t.tie_prob - d - h),
                y: n * (Math.floor(10 * (t.tie_prob + t.team1_win)) / 10)
            }) : (i = "M " + a.x + " " + a.y + "h " + (e - u(f)) + "v " + n * (.1 + d) + "h " + -(e - u(t.tie_prob - d - h)) + "v " + .1 * n + "h " + -u(t.tie_prob - d - h) + "v " + -n * (.1 + d) + "h " + u(f) + "v " + -.1 * n + "z", s = {
                x: u(t.tie_prob - d - h),
                y: n * (Math.floor(10 * (t.tie_prob + t.team1_win)) / 10)
            }), l = t.team2_win <= .1 ? "M " + s.x + " " + s.y + "h " + u(t.team2_win) + "v " + .1 * n + "h " + -u(t.team2_win) + "v " + -.1 * n + "z" : 100 * t.team2_win % 10 == 0 ? "M " + s.x + " " + s.y + "h " + e + "v " + n * t.team2_win + "h " + -e + "v " + -n * t.team2_win + "z" : "M " + s.x + " " + s.y + "h " + u(g) + "v " + n * (.1 + p) + "h " + -e + "v " + -n * p + "h " + s.x + "v " + -.1 * n + "z", {
                team1: r,
                tie: i,
                team2: l
            }
        }
        var o = t("d3"),
            i = t("lodash"),
            s = (t("../data/teams"), t("../data/schedule"));
        e.exports = r
    }, {
        "../data/schedule": 8,
        "../data/teams": 9,
        d3: 1,
        lodash: 4
    }],
    19: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(this instanceof r)) return new r(t, e);
            this.$el = t, this.teams = e, this.hasDrawn = !1;
            this.width = "100%", this.height = 230, this.container = a.select(t.selector)
        }
        var a = t("d3"),
            o = t("lodash"),
            i = t("../utils");
        t("../data/schedule");
        e.exports = r, r.prototype._update = function() {
            var t = this,
                e = o.filter(this.teams, function(e) {
                    return e.country_id !== t.team.country_id
                });
            this.probabilities = o.map(e, function(e) {
                return i.getGroupMatchupProbabilities(t.team, e)
            });
            var n = this.container.selectAll(".card"),
                r = this.team;

            n.select(".team-name").html(r.country), 
            /*
            n.select(".spi .number").html(parseFloat(r.spi).toFixed(1)), 
            n.select(".offense .number").html(parseFloat(r.spi_offense).toFixed(1)), 
            n.select(".defense .number").html(parseFloat(r.spi_defense).toFixed(1)), 
            */
            n.select(".card-flag").html("<div class='" + r.country_id.toLowerCase() + "100'> </div>");

            var a = this.$el.width(),
                s = n.select("table");
            o(e).each(function(e, n) {
                var r = s.select(".row-" + n);
                r.select("td.country").html(a > 350 ? e.country : e.country_id), r.select("td.flag").html("<div class='" + e.country_id.toLowerCase() + "30'> </div>");
                var l = o(t.probabilities[n]),
                    u = l.values().max();
                l.each(function(t, e) {
                    var n, a = t == u;
                    "loss" == e && (e = "lose", n = "âœ—");
                    var o = r.select("td." + e);
                    o.html(i.formatPercent(t, n)), o.classed({
                        max: a
                    })
                })
            })
        }, r.prototype.setTeam = function(t) {
            null != t && this.team != t && (this.team = t, this._update())
        }
    }, {
        "../data/schedule": 8,
        "../utils": 13,
        d3: 1,
        lodash: 4
    }],
    20: [function(t, e, n) {
        function r(t, e) {
            if (!(this instanceof r)) return new r(t, e);
            var n = this;
            this.$el = t, this.teams = i.sortByTwoKeys(e, "win_group", "sixteen", !0), this.groupStatus = i.groupStatus(e), this.resultRadius = 25, this.teams = o.map(this.teams, function(t, e) {
                return t.dx = 0, t.dy = 50 * e + 40, t.x = t.dx, t.y = t.dy + 10, t.first = +t.win_group, t.second = t.sixteen - t.win_group, t.out = 1 - t.sixteen, t.adv = +t.sixteen, t
            });
            var a = {
                    top: 25,
                    bottom: 10
                },
                s = 300 - a.top - a.bottom;
            this.strokeScale = function(t) {
                return 0 === t ? 0 : 14.5 * t + .5
            }, this.margin = a, this.height = s, this.width = "100%", this.$el.width() >= 364 && (this.initialize(), setTimeout(function() {
                n.showDefault()
            }, 100))
        }
        var a = t("d3"),
            o = t("lodash"),
            i = t("../utils"),
            s = t("inherits");
        s(r, t("events").EventEmitter), e.exports = r, r.prototype.initialize = function() {
            var t = this;
            this.containerSVG = a.select(this.$el.selector).append("svg").attr("width", this.width).attr("height", this.height + this.margin.top + this.margin.bottom), svg = this.containerSVG.append("g").attr("transform", "translate(0," + this.margin.top + ")"), this.svg = svg;
            var e = [{
                name: "avanza",
                dx: .7 * this.$el.width() + 8,
                dy: -15,
                c: "result-label"
            }, {
                name: "eliminado",
                dx: .7 * this.$el.width() - 8,
                dy: -15,
                c: "out-label"
            }];
            this.labels = e;
            var n = [{
                dx: this.$el.width() - 2 * t.resultRadius,
                dy: 15,
                name: "first"
            }, {
                dx: this.$el.width() - 2 * t.resultRadius,
                dy: 125,
                name: "second"
            }, {
                dx: .5 * this.$el.width(),
                dy: 185,
                name: "out"
            }, {
                dx: .7 * this.$el.width() - t.resultRadius,
                dy: 65,
                name: "adv"
            }];
            o.each(n, function(e) {
                e.x = e.dx + t.resultRadius, e.y = e.dy, "first" === e.name || "second" === e.name ? e.y += t.resultRadius - t.strokeScale(1) / 2 : e.y += t.resultRadius - t.strokeScale(1)
            }), this.results = n;
            var r = [],
                i = [],
                s = [];
            o.each(this.teams, function(e, a) {
                o.each(t.results, function(l) {
                    var u = t.strokeScale(e[l.name]) / 2,
                        c = o.pick(e, "country_id", "x", "y", "color_home", "color_away");
                    "out" === l.name ? c.y += t.strokeScale(e.adv) : ("first" === l.name || "second" === l.name) && (c.x = o.findWhere(n, {
                        name: "adv"
                    }).dx + t.resultRadius, c.y = o.findWhere(n, {
                        name: "adv"
                    }).dy + t.resultRadius - t.strokeScale(1) / 2), c.y += u;
                    var f = o.pick(l, "dx", "dy", "name", "x", "y");
                    f.y += u;
                    for (var h = a; h > 0; h--) f.y += t.strokeScale(t.teams[h - 1][l.name]), ("first" === l.name || "second" === l.name) && (c.y += t.strokeScale(t.teams[h - 1][l.name]));
                    r.push({
                        source: c,
                        target: f
                    });
                    var d = o.pick(e, "country_id", "x", "y", "color_home", "color_away");
                    "out" === l.name ? d.y += t.strokeScale(e.adv) : "first" === l.name ? (d.x = o.findWhere(n, {
                        name: "adv"
                    }).dx + t.resultRadius, d.y = o.findWhere(n, {
                        name: "adv"
                    }).dy + t.resultRadius - t.strokeScale(1)) : "second" === l.name && (d.x = o.findWhere(n, {
                        name: "adv"
                    }).dx + t.resultRadius, d.y = o.findWhere(n, {
                        name: "adv"
                    }).dy + t.resultRadius), d.y += u;
                    var p = o.pick(l, "dx", "dy", "name", "x", "y");
                    p.y += u;
                    for (var h = a; h > 0; h--) p.y += t.strokeScale(t.teams[h - 1][l.name]), ("first" === l.name || "second" === l.name) && (d.y += t.strokeScale(t.teams[h - 1][l.name]));
                    s.push({
                        source: d,
                        target: p
                    });
                    var g = o.pick(e, "country_id", "x", "y", "color_home", "color_away");
                    "out" === l.name ? g.y += t.strokeScale(e.adv) : ("first" === l.name || "second" === l.name) && (g.x = o.findWhere(n, {
                        name: "adv"
                    }).dx + t.resultRadius, g.y = o.findWhere(n, {
                        name: "adv"
                    }).dy + t.resultRadius - t.strokeScale(e.adv) / 2, "second" === l.name && (g.y += t.strokeScale(e.first))), g.y += u;
                    var m = o.pick(l, "dx", "dy", "name", "x", "y");
                    m.y = m.dy + t.resultRadius, i.push({
                        source: g,
                        target: m
                    })
                })
            }), this.resultLinks = r, this.teamLinks = i, this.completedLinks = s;
            var l = [];
            o.each(this.teams, function(e) {
                l.push({
                    country_id: e.country_id,
                    prob: e.first,
                    name: "first",
                    dy: 15 + 2 * t.resultRadius + 25,
                    dx: t.$el.width()
                }), l.push({
                    country_id: e.country_id,
                    prob: e.second,
                    name: "second",
                    dy: 125 + 2 * t.resultRadius + 25,
                    dx: t.$el.width()
                }), l.push({
                    country_id: e.country_id,
                    prob: e.out,
                    name: "out",
                    dy: 185 + 2 * t.resultRadius + 25,
                    dx: .5 * t.$el.width() + 2 * t.resultRadius
                }), l.push({
                    country_id: e.country_id,
                    prob: e.adv,
                    name: "adv",
                    dy: 65 + 2 * t.resultRadius + 25,
                    dx: .7 * t.$el.width() + t.resultRadius
                })
            }), this.odds = l;
            var u = (svg.append("g").selectAll("path"), a.geom.voronoi().x(function(t) {
                    return t.dx
                }).y(function(t) {
                    return t.dy + 20
                }).clipExtent([
                    [0, 0],
                    [this.$el.width(), this.height]
                ])),
                c = this.teams.concat(this.results);
            this.voronoi = svg.selectAll("path").data(u(c)).enter().append("path").attr("class", "voronoi").attr("d", function(t) {
                return "M" + t.join("L") + "Z"
            }).on("mouseenter", function(e, n) {
                var r = c[n];
                r !== t.status && (r.country_id ? t._hoverOnTeam(r) : "incomplete" === t.groupStatus && t._hoverOnResult(r))
            }).on("click", function(e, n) {
                var r = c[n];
                r.country_id ? t._hoverOnTeam(r) : "incomplete" === t.groupStatus && t._hoverOnResult(r)
            }), svg.selectAll(".labels").data(e).enter().append("text").text(function(t) {
                return t.name.toUpperCase()
            }).attr("x", function(t) {
                return t.dx
            }).attr("y", function(t) {
                return t.dy
            }).attr("class", function(t) {
                return "labels " + t.c
            }), svg.append("line").attr("x1", .7 * this.$el.width()).attr("x2", .7 * this.$el.width()).attr("y1", -this.margin.top).attr("y2", this.height).attr("class", "divider"), this.drawResultLabels(), this.drawTeamLabels(), this.drawOddsLabels(), this.status && (this.status.country_id ? this._drawTeam() : this._drawResult()), setTimeout(function() {
                t.voronoi.moveToFront()
            }, 100)
        }, r.prototype.drawTeamLabels = function() {
            var t = this.svg.selectAll("g.teams").data(this.teams).enter().append("g").attr("transform", function(t) {
                return "translate(0," + t.dy + ")"
            }).on("click", this._hoverOnTeam.bind(this)).on("mouseenter", this._hoverOnTeam.bind(this));
            t.append("text").attr("y", 5).attr("class", function(t) {
                return 1 == t.out ? "team-name out " + t.country_id : "team-name " + t.country_id
            }).text(function(t) {
                return t.country
            })
        }, r.prototype.drawResultLabels = function() {
            var t = this,
                e = this.customDiagonal(!0),
                n = this.customDiagonal(!1),
                r = this.svg.append("g");
            r.selectAll(".resultLink").data(o.filter(this.resultLinks, function(t) {
                return "adv" === t.target.name || "out" === t.target.name
            })).enter().append("path").attr("class", function(t) {
                var e = "resultLink";
                return t.source.country_id && (e += " " + t.source.country_id), t.target.name && (e += " " + t.target.name), e
            }).attr("d", e).style("stroke-width", 0), r.selectAll(".resultLink2").data(o.filter(this.resultLinks, function(t) {
                return "first" === t.target.name || "second" === t.target.name
            })).enter().append("path").attr("class", function(t) {
                var e = "resultLink";
                return t.source.country_id && (e += " " + t.source.country_id), t.target.name && (e += " " + t.target.name), e
            }).attr("d", n).style("stroke-width", 0), r.selectAll(".teamLink").data(o.filter(this.teamLinks, function(t) {
                return "adv" === t.target.name || "out" === t.target.name
            })).enter().append("path").attr("class", function(t) {
                var e = "teamLink";
                return t.source.country_id && (e += " " + t.source.country_id), t.target.name && (e += " " + t.target.name), e
            }).attr("d", e).style("stroke-width", 0), r.selectAll(".teamLink2").data(o.filter(this.teamLinks, function(t) {
                return "first" === t.target.name || "second" === t.target.name
            })).enter().append("path").attr("class", function(t) {
                var e = "teamLink";
                return t.source.country_id && (e += " " + t.source.country_id), t.target.name && (e += " " + t.target.name), e
            }).attr("d", n).style("stroke-width", 0), "complete" === this.groupStatus && (r.selectAll(".completedLink").data(o.filter(this.completedLinks, function(t) {
                return "adv" === t.target.name || "out" === t.target.name
            })).enter().append("path").attr("class", function(t) {
                var e = "completedLink";
                return t.source.country_id && (e += " " + t.source.country_id), t.target.name && (e += " " + t.target.name), e
            }).attr("d", e).style("stroke-width", 0), r.selectAll(".completedLink2").data(o.filter(this.completedLinks, function(t) {
                return "first" === t.target.name || "second" === t.target.name
            })).enter().append("path").attr("class", function(t) {
                var e = "completedLink";
                return t.source.country_id && (e += " " + t.source.country_id), t.target.name && (e += " " + t.target.name), e
            }).attr("d", n).style("stroke-width", 0));
            var a = this.svg.selectAll("g.results").data(this.results).enter().append("g").attr("class", function(t) {
                return "result " + t.name
            }).attr("transform", function(t) {
                return "translate(" + t.dx + "," + t.dy + ")"
            }).on("click", function() {
                "incomplete" === this.groupStatus && this._hoverOnResult.bind(this)
            }).on("mouseenter", function() {
                "incomplete" === this.groupStatus && this._hoverOnResult.bind(this)
            });
            a.append("circle"), this.svg.selectAll(".result circle").attr("class", function(t) {
                return "result " + t.name
            }).attr("fill", "#c7c7c7").attr("cx", this.resultRadius).attr("cy", this.resultRadius).attr("r", function(e) {
                return "adv" === e.name ? 0 : t.resultRadius
            }), this.svg.select("g.result.adv").append("polygon").attr("class", function(t) {
                return "result " + t.name
            }).attr("fill", "#c7c7c7").attr("transform", "translate(" + (t.resultRadius - 15) + ",0)").attr("points", "0,0 0,50 30,25"), a.append("text").attr("dx", this.resultRadius).attr("dy", 35).attr("class", function(t) {
                return "result " + t.name
            }).style("text-anchor", "middle").text(function(t) {
                return "first" === t.name ? 1 : "second" === t.name ? 2 : "out" === t.name ? "✕" : void 0
            })
        }, r.prototype.drawOddsLabels = function() {
            var t = this.svg.selectAll(".odds").data(this.odds).enter().append("g").attr("transform", function(t) {
                return "translate(" + t.dx + "," + t.dy + ")"
            }).attr("class", function(t) {
                return "odds " + t.country_id + " " + t.name
            });
            t.append("rect").attr("fill", "white").attr("y", -20).attr("x", -50).attr("width", 50).attr("height", 29), t.append("text").text(function(t) {
                var e = (100 * t.prob).toFixed(1);
                return "100.0" === e && t.prob < 1 && (e = ">99.9"), e + "%"
            }), this.oddsLabels = t
        }, r.prototype.showDefault = function() {
            "complete" === this.groupStatus ? this._showCompletedGroup() : this._hoverOnResult(this.results[0])
        }, r.prototype._hoverOnTeam = function(t) {
            this.status = t, this._unhoverOnTeam();
            var e = this;
            this.$el.find(".teamLink." + t.country_id).show(), this.$el.find("polygon").show(), this.svg.selectAll(".teamLink." + t.country_id).classed("interacting", !0), this.svg.selectAll(".team-name").classed("interacting", !0), this.svg.selectAll(".odds").transition().attr("opacity", 0).duration(10), this.svg.selectAll("circle.result").transition().attr("fill", "#c7c7c7"), this.svg.selectAll("polygon.result").transition().attr("fill", "#c7c7c7");
            var n = {
                    first: 200,
                    second: 200,
                    adv: 300,
                    out: 200
                },
                r = {
                    first: 200,
                    second: 200,
                    adv: 0,
                    out: 0
                },
                a = {
                    first: 300,
                    second: 300,
                    adv: 150,
                    out: 80
                },
                s = i.sortByKey([{
                    prob: t.first,
                    name: "first"
                }, {
                    prob: t.second,
                    name: "second"
                }, {
                    prob: t.out,
                    name: "out"
                }, {
                    prob: t.adv,
                    name: "adv"
                }], "prob", !0),
                l = [s[0].name];
            "adv" === s[0].name && "out" !== s[1].name && l.unshift(s[1].name), o.each(s, function(a) {
                e.svg.select(".teamLink." + a.name + "." + t.country_id).classed("interacting", !0).transition().delay(r[a.name]).duration(n[a.name]).style("stroke-width", e.strokeScale(a.prob))
            }), this.emit("team:selected", t), this.svg.select(".teamLink." + t.country_id + "." + l[0]).style("stroke", i.getNonwhiteColor(t)).moveToFront(), this.svg.select("circle.result." + l[0]).transition().delay(a[l[0]]).attr("fill", i.getNonwhiteColor(t)), this.svg.select("polygon.result." + l[0]).transition().delay(a[l[0]]).attr("fill", i.getNonwhiteColor(t)), l[1] && (this.svg.select(".teamLink." + t.country_id + "." + l[1]).style("stroke", i.getNonwhiteColor(t)).moveToFront(), this.svg.select("circle.result." + l[1]).transition().delay(a[l[1]]).attr("fill", i.getNonwhiteColor(t)), this.svg.select("polygon.result." + l[1]).transition().delay(a[l[1]]).attr("fill", i.getNonwhiteColor(t))), this.svg.select(".team-name." + t.country_id).classed("selected", !0), this.svg.select(".odds." + t.country_id + "." + l[0]).classed("selected", !0), this.svg.selectAll(".odds." + t.country_id).classed("interacting", !0).transition().delay(function(t) {
                return a[t.name]
            }).attr("opacity", 1)
        }, r.prototype._unhoverOnTeam = function() {
            this.svg.selectAll(".resultLink,.teamLink,.completedLink").style("stroke-width", 0).classed("interacting", !1), this.$el.find(".resultLink,.teamLink,.completedLink").hide(), this.svg.selectAll(".team-name").classed("selected", !1), this.svg.selectAll(".team-name").classed("interacting", !1), this.svg.selectAll(".odds").classed("selected", !1), this.svg.selectAll(".odds").classed("interacting", !1), this.emit("team:unselected")
        }, r.prototype._hoverOnResult = function(t) {
            this.status = t, this._unhoverOnResult(), this.$el.find(".resultLink." + t.name).show(), this.$el.find("polygon").show(), this.svg.selectAll(".resultLink,.teamLink,.completedLink").style("stroke-width", 0), this.svg.selectAll(".odds").transition().attr("opacity", 0).duration(10), this.svg.selectAll("circle.result").transition().attr("fill", "#c7c7c7"), this.svg.selectAll("polygon.result").transition().attr("fill", "#c7c7c7"), this.svg.selectAll(".team-name").classed("interacting", !0);
            var e = this,
                n = {
                    first: 200,
                    second: 200,
                    adv: 300,
                    out: 200
                },
                r = {
                    first: 200,
                    second: 200,
                    adv: 0,
                    out: 0
                },
                a = {
                    first: 300,
                    second: 300,
                    adv: 150,
                    out: 80
                },
                s = i.sortByKey(this.teams, t.name, !0)[0];
            "first" === t.name || "second" === t.name ? (this.$el.find(".resultLink.adv").show(), o.each(this.teams, function(a) {
                o.each([t.name, "adv"], function(t) {
                    e.svg.select(".resultLink." + t + "." + a.country_id).classed("interacting", !0).transition().delay(r[t]).duration(n[t]).style("stroke-width", e.strokeScale(a[t]))
                })
            })) : o.each(this.teams, function(a) {
                e.svg.select(".resultLink." + t.name + "." + a.country_id).classed("interacting", !0).transition().delay(r[t.name]).duration(n[t.name]).style("stroke-width", e.strokeScale(a[t.name]))
            }), this.emit("team:selected", s), this.svg.select(".team-name." + s.country_id).classed("selected", !0), this.svg.select(".resultLink." + t.name + "." + s.country_id).style("stroke", i.getNonwhiteColor(s)).moveToFront(), this.svg.select("circle.result." + t.name).transition().delay(a[t.name]).attr("fill", i.getNonwhiteColor(s)), this.svg.select("polygon.result." + t.name).transition().delay(a[t.name]).attr("fill", i.getNonwhiteColor(s)), ("first" === t.name || "second" === t.name) && (this.svg.select(".resultLink.adv." + s.country_id).style("stroke", i.getNonwhiteColor(s)).moveToFront(), this.svg.select("polygon.result.adv").transition().delay(a.adv).attr("fill", i.getNonwhiteColor(s)), this.svg.select(".odds.adv." + s.country_id).classed("interacting", !0).transition().delay(a.adv).attr("opacity", 1)), this.svg.select(".odds." + t.name + "." + s.country_id).classed("selected", !0).transition().attr("opacity", 1)
        }, r.prototype._unhoverOnResult = function() {
            this.svg.selectAll(".resultLink,.teamLink,.completedLink").style("stroke-width", 0).classed("interacting", !1), this.$el.find(".resultLink,.teamLink,.completedLink").hide(), this.svg.selectAll(".team-name").classed("interacting", !1), this.svg.selectAll(".team-name").classed("selected", !1), this.svg.selectAll(".odds").classed("interacting", !1), this.svg.selectAll(".odds").classed("selected", !1), this.svg.selectAll(".resultLink").classed("interacting", !1), this.svg.selectAll(".resultLink").style("stroke-width", "").style("stroke", null), this.emit("team:unselected")
        }, r.prototype._showCompletedGroup = function() {
            this._unhoverOnResult(), this.$el.find(".completedLink").show(), this.$el.find("polygon").hide(), this.svg.selectAll(".resultLink,.teamLink,.completedLink").style("stroke-width", 0), this.svg.selectAll(".odds").transition().attr("opacity", 0).duration(10), this.svg.selectAll(".team-name").classed("interacting", !0);
            var t = this,
                e = o.find(this.teams, function(t) {
                    return 1 === t.first
                }),
                n = o.find(this.teams, function(t) {
                    return 1 === t.second
                }),
                r = o.filter(this.teams, function(t) {
                    return 1 === t.out
                });
            this.svg.select(".completedLink.first." + e.country_id).classed("interacting", !0).style("stroke-width", t.strokeScale(e.first)).style("stroke", i.getNonwhiteColor(e)).moveToFront(), this.svg.select(".completedLink.second." + n.country_id).classed("interacting", !0).style("stroke-width", t.strokeScale(n.second)).style("stroke", i.getNonwhiteColor(n)).moveToFront(), o.each([e, n], function(e) {
                t.svg.select(".completedLink.adv." + e.country_id).classed("interacting", !0).style("stroke-width", t.strokeScale(e.adv)).style("stroke", i.getNonwhiteColor(e))
            }), o.each(r, function(e) {
                t.svg.select(".completedLink.out." + e.country_id).classed("interacting", !0).style("stroke-width", t.strokeScale(e.out))
            }), this.emit("team:selected", e), this.svg.select(".team-name." + e.country_id).classed("selected", !0), this.svg.select(".team-name." + n.country_id).classed("selected", !0), this.svg.select("circle.result.first").attr("fill", i.getNonwhiteColor(e)), this.svg.select("circle.result.second").attr("fill", i.getNonwhiteColor(n))
        }, r.prototype._drawTeam = function() {
            d = this.status;
            var t = this;
            this.$el.find(".teamLink." + d.country_id).show(), this.svg.selectAll(".teamLink." + d.country_id).classed("interacting", !0), this.svg.selectAll(".team-name").classed("interacting", !0);
            var e = i.sortByKey([{
                    prob: d.first,
                    name: "first"
                }, {
                    prob: d.second,
                    name: "second"
                }, {
                    prob: d.out,
                    name: "out"
                }, {
                    prob: d.adv,
                    name: "adv"
                }], "prob", !0),
                n = [e[0].name];
            "adv" === e[0].name && "out" !== e[1].name && n.unshift(e[1].name), o.each(e, function(e) {
                t.svg.select(".teamLink." + e.name + "." + d.country_id).classed("interacting", !0).style("stroke-width", t.strokeScale(e.prob))
            }), this.emit("team:selected", d), this.svg.select(".teamLink." + d.country_id + "." + n[0]).style("stroke", i.getNonwhiteColor(d)).moveToFront(), this.svg.select("circle.result." + n[0]).attr("fill", i.getNonwhiteColor(d)), this.svg.select("polygon.result." + n[0]).attr("fill", i.getNonwhiteColor(d)), n[1] && (this.svg.select(".teamLink." + d.country_id + "." + n[1]).style("stroke", i.getNonwhiteColor(d)).moveToFront(), this.svg.select("circle.result." + n[1]).attr("fill", i.getNonwhiteColor(d)), this.svg.select("polygon.result." + n[1]).attr("fill", i.getNonwhiteColor(d))), this.svg.select(".team-name." + d.country_id).classed("selected", !0), this.svg.select(".odds." + d.country_id + "." + n[0]).classed("selected", !0), this.svg.selectAll(".odds." + d.country_id).classed("interacting", !0).attr("opacity", 1)
        }, r.prototype._drawResult = function() {
            d = this.status, this.$el.find(".resultLink." + d.name).show(), this.svg.selectAll(".resultLink,.teamLink").style("stroke-width", 0),
                this.svg.selectAll(".team-name").classed("interacting", !0);
            var t = this,
                e = i.sortByKey(this.teams, d.name, !0)[0];
            "first" === d.name || "second" === d.name ? (this.$el.find(".resultLink.adv").show(), o.each(this.teams, function(e) {
                o.each([d.name, "adv"], function(n) {
                    t.svg.select(".resultLink." + n + "." + e.country_id).classed("interacting", !0).style("stroke-width", t.strokeScale(e[n]))
                })
            })) : o.each(this.teams, function(e) {
                t.svg.select(".resultLink." + d.name + "." + e.country_id).classed("interacting", !0).style("stroke-width", t.strokeScale(e[d.name]))
            }), this.emit("team:selected", e), this.svg.select(".team-name." + e.country_id).classed("selected", !0), this.svg.select(".resultLink." + d.name + "." + e.country_id).style("stroke", i.getNonwhiteColor(e)).moveToFront(), this.svg.select("circle.result." + d.name).attr("fill", i.getNonwhiteColor(e)), this.svg.select("polygon.result." + d.name).attr("fill", i.getNonwhiteColor(e)), ("first" === d.name || "second" === d.name) && (this.svg.select(".resultLink.adv." + e.country_id).style("stroke", i.getNonwhiteColor(e)).moveToFront(), this.svg.select("polygon.result.adv").attr("fill", i.getNonwhiteColor(e)), this.svg.select(".odds.adv." + e.country_id).classed("interacting", !0).attr("opacity", 1)), this.svg.select(".odds." + d.name + "." + e.country_id).classed("selected", !0).attr("opacity", 1)
        }, r.prototype.redraw = function() {
            this.$el.width() >= 364 && (this.containerSVG.remove(), this.initialize(), "complete" === this.groupStatus && this._showCompletedGroup())
        }, r.prototype.customDiagonal = function(t) {
            function e(t) {
                return t.source
            }

            function n(t) {
                return t.target
            }

            function r(t) {
                return [t.x, t.y]
            }

            function a(e, n) {
                var r = i.call(this, e, n),
                    a = s.call(this, e, n),
                    u = {
                        x: t ? .3 * o.$el.width() : r.x + .4 * (a.x - r.x),
                        y: r.y
                    },
                    c = {
                        x: t ? .45 * o.$el.width() : r.x + .6 * (a.x - r.x),
                        y: a.y
                    },
                    f = (u.x + c.x) / 2,
                    h = [r, u, {
                        x: u.x + .25 * (f - u.x),
                        y: u.y
                    }, {
                        x: c.x - .25 * (c.x - f),
                        y: c.y
                    }, c, a];
                return h = h.map(l), "M" + h[0] + "L" + h[1] + "L" + h[4] + "L" + h[5]
            }
            var o = this,
                i = e,
                s = n,
                l = r;
            return a.source = function(t) {
                return arguments.length ? (i = d3_functor(t), a) : i
            }, a.target = function(t) {
                return arguments.length ? (s = d3_functor(t), a) : s
            }, a.projection = function(t) {
                return arguments.length ? (l = t, a) : l
            }, a
        }, a.selection.prototype.moveToFront = function() {
            return this.each(function() {
                this.parentNode.appendChild(this)
            })
        }, a.selection.prototype.moveToBack = function() {
            return this.each(function() {
                var t = this.parentNode.firstChild;
                t && this.parentNode.insertBefore(this, t)
            })
        }
    }, {
        "../utils": 13,
        d3: 1,
        events: 2,
        inherits: 3,
        lodash: 4
    }]
}, {}, [11]);