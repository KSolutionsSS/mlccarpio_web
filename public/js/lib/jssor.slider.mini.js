﻿(function (g, f, b, d, c, e, z) {/*! Jssor */
    $Jssor$ = g.$Jssor$ = g.$Jssor$ || {};
    new (function () {
    });
    var m = function () {
        var b = this, a = {};
        b.$On = b.addEventListener = function (b, c) {
            if (typeof c != "function") {
                return;
            }
            if (!a[b]) {
                a[b] = [];
            }
            a[b].push(c)
        };
        b.$Off = b.removeEventListener = function (e, d) {
            var b = a[e];
            if (typeof d != "function") {
                return;
            } else if (!b) {
                return;
            }
            for (var c = 0; c < b.length; c++) {
                if (d == b[c]) {
                    b.splice(c, 1);
                    return
                }
            }
        };
        b.g = function (e) {
            var c = a[e], d = [];
            if (!c) {
                return;
            }
            for (var b = 1; b < arguments.length; b++) {
                d.push(arguments[b]);
            }
            for (var b = 0; b < c.length; b++) {
                try {
                    c[b].apply(g, d)
                } catch (f) {
                }
            }
        }
    }, h;
    (function () {
        h = function (a, b) {
            this.x = typeof a == "number" ? a : 0;
            this.y = typeof b == "number" ? b : 0
        };
    })();
    var l = g.$JssorEasing$ = {$EaseLinear: function (a) {
        return a
    }, $EaseGoBack: function (a) {
        return 1 - b.abs(2 - 1)
    }, $EaseSwing: function (a) {
        return-b.cos(a * b.PI) / 2 + .5
    }, $EaseInQuad: function (a) {
        return a * a
    }, $EaseOutQuad: function (a) {
        return-a * (a - 2)
    }, $EaseInOutQuad: function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
    }, $EaseInCubic: function (a) {
        return a * a * a
    }, $EaseOutCubic: function (a) {
        return(a -= 1) * a * a + 1
    }, $EaseInOutCubic: function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
    }, $EaseInQuart: function (a) {
        return a * a * a * a
    }, $EaseOutQuart: function (a) {
        return-((a -= 1) * a * a * a - 1)
    }, $EaseInOutQuart: function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
    }, $EaseInQuint: function (a) {
        return a * a * a * a * a
    }, $EaseOutQuint: function (a) {
        return(a -= 1) * a * a * a * a + 1
    }, $EaseInOutQuint: function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
    }, $EaseInSine: function (a) {
        return 1 - b.cos(a * b.PI / 2)
    }, $EaseOutSine: function (a) {
        return b.sin(a * b.PI / 2)
    }, $EaseInOutSine: function (a) {
        return-1 / 2 * (b.cos(b.PI * a) - 1)
    }, $EaseInExpo: function (a) {
        return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
    }, $EaseOutExpo: function (a) {
        return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
    }, $EaseInOutExpo: function (a) {
        return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
    }, $EaseInCirc: function (a) {
        return-(b.sqrt(1 - a * a) - 1)
    }, $EaseOutCirc: function (a) {
        return b.sqrt(1 - (a -= 1) * a)
    }, $EaseInOutCirc: function (a) {
        return(a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
    }, $EaseInElastic: function (a) {
        if (!a || a == 1) {
            return a;
        }
        var c = .3, d = .075;
        return-(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
    }, $EaseOutElastic: function (a) {
        if (!a || a == 1) {
            return a;
        }
        var c = .3, d = .075;
        return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
    }, $EaseInOutElastic: function (a) {
        if (!a || a == 1) {
            return a;
        }
        var c = .45, d = .1125;
        return(a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c)
                                                                                                 * .5 + 1
    }, $EaseInBack: function (a) {
        var b = 1.70158;
        return a * a * ((b + 1) * a - b)
    }, $EaseOutBack: function (a) {
        var b = 1.70158;
        return(a -= 1) * a * ((b + 1) * a + b) + 1
    }, $EaseInOutBack: function (a) {
        var b = 1.70158;
        return(a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
    }, $EaseInBounce: function (a) {
        return 1 - l.$EaseOutBounce(1 - a)
    }, $EaseOutBounce: function (a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a
            + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }, $EaseInOutBounce: function (a) {
        return a < 1 / 2 ? l.$EaseInBounce(a * 2) * .5 : l.$EaseOutBounce(a * 2 - 1) * .5 + .5
    }, $EaseInWave: function (a) {
        return 1 - b.cos(a * b.PI * 2)
    }, $EaseOutWave: function (a) {
        return b.sin(a * b.PI * 2)
    }, $EaseOutJump: function (a) {
        return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
    }, $EaseInJump: function (a) {
        return(a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
    }}, i = {Ff: function (a) {
        return(~a & 3) + (a & 12)
    }, Gf: function (a) {
        return(~a & 12) + (a & 3)
    }, od: function (a) {
        return(a & 3) == 1
    }, pd: function (a) {
        return(a & 3) == 2
    }, ad: function (a) {
        return(a & 12) == 4
    }, bd: function (a) {
        return(a & 12) == 8
    }, Zc: function (a) {
        return(a & 3) > 0
    }, Xc: function (a) {
        return(a & 12) > 0
    }}, q = {If: 37, Hf: 39}, o, n = {nf: 0, mf: 1, lf: 2, pf: 3, of: 4, kf: 5}, y = 1, u = 2, w = 3, v = 4, x = 5, j, a = new function () {
        var i = this, m = n.nf, j = 0, q = 0, P = 0, t = 0, cb = navigator.appName, k = navigator.userAgent;

        function D() {
            if (!m) {
                if (cb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                    var d = k.indexOf("MSIE");
                    m = n.mf;
                    q = parseFloat(k.substring(d + 5, k.indexOf(";", d)));
                    /*@cc_on P=@_jscript_version@*/
                    ;
                    j = f.documentMode || q
                } else if (cb == "Netscape" && !!g.addEventListener) {
                    var c = k.indexOf("Firefox"), a = k.indexOf("Safari"), h = k.indexOf("Chrome"), b = k.indexOf("AppleWebKit");
                    if (c >= 0) {
                        m = n.lf;
                        j = parseFloat(k.substring(c + 8))
                    } else if (a >= 0) {
                        var i = k.substring(0, a).lastIndexOf("/");
                        m = h >= 0 ? n.of : n.pf;
                        j = parseFloat(k.substring(i + 1, a))
                    }
                    if (b >= 0) {
                        t = parseFloat(k.substring(b + 12))
                    }
                } else {
                    var e = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                    if (e) {
                        m = n.kf;
                        j = parseFloat(e[2])
                    }
                }
            }
        }

        function l() {
            D();
            return m == y
        }

        function G() {
            return l() && (j < 6 || f.compatMode == "BackCompat")
        }

        function V() {
            D();
            return m == u
        }

        function M() {
            D();
            return m == w
        }

        function hb() {
            D();
            return m == v
        }

        function ib() {
            D();
            return m == x
        }

        function R() {
            return M() && t > 534 && t < 535
        }

        function s() {
            return l() && j < 9
        }

        var B;

        function r(a) {
            if (!B) {
                p(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
                    if (!i.ec(a.style[b])) {
                        B = b;
                        return c
                    }
                });
                B = B || "transform"
            }
            return B
        }

        function ab(a) {
            return Object.prototype.toString.call(a)
        }

        var J;

        function p(a, c) {
            if (ab(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++) {
                    if (c(a[b], b, a)) {
                        break
                    }
                }
            } else {
                for (var d in a) {
                    if (c(a[d], d, a)) {
                        break
                    }
                }
            }
        }

        function jb() {
            if (!J) {
                J = {};
                p(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                    J["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return J
        }

        function A(a) {
            return a == d ? String(a) : jb()[ab(a)] || "object"
        }

        function bb(b, a) {
            setTimeout(b, a || 0)
        }

        function I(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            p(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function W(b, a) {
            if (j < 9) {
                b.style.filter = a
            }
        }

        function fb(b, a, c) {
            if (P < 9) {
                var e = b.style.filter, g = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), f = a
                    ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1]
                                                                                                                              + ", SizingMethod='auto expand')"
                    : "", d = I(e, [g], f);
                W(b, d);
                i.ud(b, c.y);
                i.Ad(b, c.x)
            }
        }

        i.Ib = l;
        i.Bf = V;
        i.Af = M;
        i.hb = hb;
        i.lb = ib;
        i.H = s;
        i.Lb = function () {
            return j
        };
        i.Ef = function () {
            return q || j
        };
        i.gc = function () {
            return t
        };
        i.$Delay = bb;
        i.T = function (a) {
            if (i.zd(a)) {
                a = f.getElementById(a);
            }
            return a
        };
        i.bc = function (a) {
            return a ? a : g.event
        };
        i.Gc = function (a) {
            a = i.bc(a);
            var b = new h;
            if (a.type == "DOMMouseScroll" && V() && j < 3) {
                b.x = a.screenX;
                b.y = a.screenY
            } else if (typeof a.pageX == "number") {
                b.x = a.pageX;
                b.y = a.pageY
            } else if (typeof a.clientX == "number") {
                b.x = a.clientX + f.body.scrollLeft + f.documentElement.scrollLeft;
                b.y = a.clientY + f.body.scrollTop + f.documentElement.scrollTop
            }
            return b
        };
        i.Ac = function (b) {
            if (l() && q < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? parseFloat(a[1]) / 100 : 1
            } else {
                return parseFloat(b.style.opacity || "1")
            }
        };
        i.Kb = function (c, a, f) {
            if (l() && q < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f) {
                    d = "alpha(opacity=" + e + ") ";
                }
                var g = I(h, [i], d);
                W(c, g)
            } else {
                c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
            }
        };
        function O(g, c) {
            var f = c.$Rotate || 0, e = c.Jc || 1;
            if (s()) {
                var k = i.vf(f / 180 * b.PI, e, e);
                fb(g, !f && e == 1 ? d : k, i.wf(k, c.kb, c.jb))
            } else {
                var h = r(g);
                if (h) {
                    var j = "rotate(" + f % 360 + "deg) scale(" + e + ")";
                    if (a.hb() && t > 535) {
                        j += " perspective(2000px)";
                    }
                    g.style[h] = j
                }
            }
        }

        i.xf = function (b, a) {
            if (R()) {
                bb(i.x(d, O, b, a));
            } else {
                O(b, a)
            }
        };
        i.sf = function (b, c) {
            var a = r(b);
            if (a) {
                b.style[a + "Origin"] = c
            }
        };
        i.tf = function (a, c) {
            if (l() && q < 9 || q < 10 && G()) {
                a.style.zoom = c == 1 ? "" : c;
            } else {
                var b = r(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = I(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        i.Jf = function (a) {
            if (!a.style[r(a)] || a.style[r(a)] == "none") {
                a.style[r(a)] = "perspective(2000px)"
            }
        };
        i.uf = function (a) {
            a.style[r(a)] = "none"
        };
        i.h = function (a, c, d, b) {
            a = i.T(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        i.yf = function (a, c, d, b) {
            a = i.T(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        i.Cf = function (b, a) {
            i.h(s() ? f : g, "mouseup", b, a)
        };
        i.ib = function (a) {
            a = i.bc(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = e
        };
        i.x = function (e, d) {
            for (var b = [], a = 2; a < arguments.length; a++) {
                b.push(arguments[a]);
            }
            var c = function () {
                for (var c = b.concat([]), a = 0; a < arguments.length; a++) {
                    c.push(arguments[a]);
                }
                return d.apply(e, c)
            };
            return c
        };
        i.Df = function (a, c) {
            var b = f.createTextNode(c);
            i.Ic(a);
            a.appendChild(b)
        };
        i.Ic = function (a) {
            a.innerHTML = ""
        };
        i.db = function (c) {
            for (var b = [], a = c.firstChild; a; a = a.nextSibling) {
                a.nodeType == 1 && b.push(a);
            }
            return b
        };
        function N(a, c, b, f) {
            if (!b) {
                b = "u";
            }
            for (a = a ? a.firstChild : d; a; a = a.nextSibling) {
                if (a.nodeType == 1) {
                    if (a.getAttribute(b) == c) {
                        return a;
                    }
                    if (f) {
                        var e = N(a, c, b, f);
                        if (e) {
                            return e
                        }
                    }
                }
            }
        }

        i.v = N;
        function S(a, c, e) {
            for (a = a ? a.firstChild : d; a; a = a.nextSibling) {
                if (a.nodeType == 1) {
                    if (a.tagName == c) {
                        return a;
                    }
                    if (e) {
                        var b = S(a, c, e);
                        if (b) {
                            return b
                        }
                    }
                }
            }
        }

        i.rf = S;
        function T(a, e, g) {
            var b = [];
            for (a = a ? a.firstChild : d; a; a = a.nextSibling) {
                if (a.nodeType == 1) {
                    (!e || a.tagName == e) && b.push(a);
                    if (g) {
                        var f = T(a, e, c);
                        if (f.length) {
                            b = b.concat(f)
                        }
                    }
                }
            }
            return b
        }

        i.gf = T;
        i.hf = function (b, a) {
            return b.getElementsByTagName(a)
        };
        i.f = function (c) {
            for (var b = 1; b < arguments.length; b++) {
                var a = arguments[b];
                if (a) {
                    for (var d in a) {
                        c[d] = a[d]
                    }
                }
            }
            return c
        };
        i.ec = function (a) {
            return A(a) == "undefined"
        };
        i.Kc = function (a) {
            return A(a) == "function"
        };
        i.Vb = Array.isArray || function (a) {
            return A(a) == "array"
        };
        i.zd = function (a) {
            return A(a) == "string"
        };
        i.jc = function (a) {
            return!isNaN(parseFloat(a)) && isFinite(a)
        };
        i.b = p;
        i.Eb = function (a) {
            return i.Uc("DIV", a)
        };
        i.df = function (a) {
            return i.Uc("SPAN", a)
        };
        i.Uc = function (b, a) {
            a = a || f;
            return a.createElement(b)
        };
        i.pb = function () {
        };
        i.N = function (a, b) {
            return a.getAttribute(b)
        };
        i.ef = function (b, c, a) {
            b.setAttribute(c, a)
        };
        i.Tc = function (a) {
            return a.className
        };
        i.Wc = function (b, a) {
            b.className = a ? a : ""
        };
        i.Vc = function (a) {
            return a.style.display
        };
        i.sb = function (b, a) {
            b.style.display = a || ""
        };
        i.O = function (b, a) {
            b.style.overflow = a
        };
        i.vb = function (a) {
            return a.parentNode
        };
        i.E = function (a) {
            i.sb(a, "none")
        };
        i.o = function (a, b) {
            i.sb(a, b == e ? "none" : "")
        };
        i.qf = function (a) {
            return a.style.position
        };
        i.w = function (b, a) {
            b.style.position = a
        };
        i.Cc = function (a) {
            return parseInt(a.style.top, 10)
        };
        i.r = function (a, b) {
            a.style.top = b + "px"
        };
        i.Fc = function (a) {
            return parseInt(a.style.left, 10)
        };
        i.s = function (a, b) {
            a.style.left = b + "px"
        };
        i.m = function (a) {
            return parseInt(a.style.width, 10)
        };
        i.V = function (c, a) {
            c.style.width = b.max(a, 0) + "px"
        };
        i.n = function (a) {
            return parseInt(a.style.height, 10)
        };
        i.S = function (c, a) {
            c.style.height = b.max(a, 0) + "px"
        };
        i.Dc = function (a) {
            return a.style.cssText
        };
        i.mc = function (b, a) {
            b.style.cssText = a
        };
        i.Ec = function (b, a) {
            b.removeAttribute(a)
        };
        i.Ad = function (b, a) {
            b.style.marginLeft = a + "px"
        };
        i.ud = function (b, a) {
            b.style.marginTop = a + "px"
        };
        i.kc = function (a) {
            return parseInt(a.style.zIndex) || 0
        };
        i.nb = function (c, a) {
            c.style.zIndex = b.ceil(a)
        };
        i.Bc = function (b, a) {
            b.style.backgroundColor = a
        };
        i.de = function () {
            return l() && j < 10
        };
        i.je = function (d, c) {
            if (c) {
                d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";
            } else {
                var g = i.Dc(d), f = [
                    new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i),
                    new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)
                ], e = I(g, f, "");
                a.mc(d, e)
            }
        };
        i.G = function () {
            return+new Date
        };
        i.y = function (b, a) {
            b.appendChild(a)
        };
        i.Xd = function (b, a) {
            p(a, function (a) {
                i.y(b, a)
            })
        };
        i.Mb = function (c, b, a) {
            c.insertBefore(b, a)
        };
        i.rb = function (b, a) {
            b.removeChild(a)
        };
        i.he = function (b, a) {
            p(a, function (a) {
                i.rb(b, a)
            })
        };
        i.ge = function (a) {
            i.he(a, i.db(a))
        };
        i.ie = function (b, a) {
            return parseInt(b, a || 10)
        };
        i.Rc = function (a) {
            return parseFloat(a)
        };
        i.Sc = function (b, a) {
            var c = f.body;
            while (a && b != a && c != a) {
                try {
                    a = a.parentNode
                } catch (d) {
                    return e
                }
            }
            return b == a
        };
        i.t = function (b, a) {
            return b.cloneNode(a)
        };
        function L(b, a, c) {
            a.onload = d;
            a.abort = d;
            b && b(a, c)
        }

        i.wb = function (e, b) {
            if (i.lb() && j < 11.6 || !e) {
                L(b, d);
            } else {
                var a = new Image;
                a.onload = i.x(d, L, b, a);
                a.onabort = i.x(d, L, b, a, c);
                a.src = e
            }
        };
        i.Rd = function (e, b, f) {
            var d = e.length + 1;

            function c(a) {
                d--;
                if (b && a && a.src == b.src) {
                    b = a;
                }
                !d && f && f(b)
            }

            a.b(e, function (b) {
                a.wb(b.src, c)
            });
            c()
        };
        i.Pc = function (d, k, j, i) {
            if (i) {
                d = a.t(d, c);
            }
            for (var h = a.hf(d, k), f = h.length - 1; f > -1; f--) {
                var b = h[f], e = a.t(j, c);
                a.Wc(e, a.Tc(b));
                a.mc(e, a.Dc(b));
                var g = a.vb(b);
                a.Mb(g, e, b);
                a.rb(g, b)
            }
            return d
        };
        var C;

        function lb(b) {
            var g = this, h, d, j;

            function f() {
                var c = h;
                if (d) {
                    c += "dn";
                } else if (j) {
                    c += "av";
                }
                a.Wc(b, c)
            }

            function k() {
                C.push(g);
                d = c;
                f()
            }

            g.Md = function () {
                d = e;
                f()
            };
            g.Qc = function (a) {
                j = a;
                f()
            };
            b = i.T(b);
            if (!C) {
                i.Cf(function () {
                    var a = C;
                    C = [];
                    p(a, function (a) {
                        a.Md()
                    })
                });
                C = []
            }
            h = i.Tc(b);
            a.h(b, "mousedown", k)
        }

        i.Jb = function (a) {
            return new lb(a)
        };
        var Z = {$Opacity: i.Ac, $Top: i.Cc, $Left: i.Fc, J: i.m, K: i.n, Q: i.qf, He: i.Vc, $ZIndex: i.kc}, F = {$Opacity: i.Kb, $Top: i.r, $Left: i.s, J: i.V, K: i.S, He: i.sb, $Clip: i.je, Qg: i.Ad, Rg: i.ud, Rb: i.xf, Q: i.w, $ZIndex: i.nb};

        function H() {
            return F
        }

        function U() {
            H();
            F.Rb = F.Rb;
            return F
        }

        i.af = H;
        i.cf = U;
        i.Te = function (c, b) {
            H();
            var a = {};
            p(b, function (d, b) {
                if (Z[b]) {
                    a[b] = Z[b](c)
                }
            });
            return a
        };
        i.D = function (c, b) {
            var a = H();
            p(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        i.Se = function (b, a) {
            U();
            i.D(b, a)
        };
        o = new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++) {
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) {
                            e += d[c][a] * g[a][b];
                        }
                        k[b] = e
                    }
                }
                return f
            }

            a.Sb = function (d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return new h(a[0][0], a[1][0])
            }
        };
        i.vf = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return[
                [e * a, -f * c],
                [f * a, e * c]
            ]
        };
        i.wf = function (d, c, a) {
            var e = o.Sb(d, new h(-c / 2, -a / 2)), f = o.Sb(d, new h(c / 2, -a / 2)), g = o.Sb(d, new h(c / 2, a / 2)), i = o.Sb(d, new h(-c / 2,
                                                                                                                                           a / 2));
            return new h(b.min(e.x, f.x, g.x, i.x) + c / 2, b.min(e.y, f.y, g.y, i.y) + a / 2)
        }
    };
    j = function (n, m, g, O, z, x) {
        n = n || 0;
        var f = this, r, o, p, y, A = 0, C, M, L, D, j = 0, t = 0, E, k = n, i, h, q, u = [], B;

        function I(b) {
            i += b;
            h += b;
            k += b;
            j += b;
            t += b;
            a.b(u, function (a) {
                a, a.$Shift(b)
            })
        }

        function N(a, b) {
            var c = a - i + n * b;
            I(c);
            return h
        }

        function w(w, G) {
            var n = w;
            if (q && (n >= h || n <= i)) {
                n = ((n - i) % q + q) % q + i;
            }
            if (!E || y || G || j != n) {
                var p = b.min(n, h);
                p = b.max(p, i);
                if (!E || y || G || p != t) {
                    if (x) {
                        var e = x;
                        if (z) {
                            var s = (p - k) / (m || 1);
                            if (g.Ue && a.hb() && m) {
                                s = b.round(s * m / 16) / m * 16;
                            }
                            if (g.$Reverse) {
                                s = 1 - s;
                            }
                            e = {};
                            for (var o in x) {
                                var R = M[o] || 1, J = L[o] || [0, 1], l = (s - J[0]) / J[1];
                                l = b.min(b.max(l, 0), 1);
                                l = l * R;
                                var H = b.floor(l);
                                if (l != H) {
                                    l -= H;
                                }
                                var Q = C[o] || C.A, I = Q(l), r, K = z[o], F = x[o];
                                if (a.jc(F)) {
                                    r = K + (F - K) * I;
                                } else {
                                    r = a.f({B: {}}, z[o]);
                                    a.b(F.B, function (c, b) {
                                        var a = c * I;
                                        r.B[b] = a;
                                        r[b] += a
                                    })
                                }
                                e[o] = r
                            }
                        }
                        if (z.$Zoom) {
                            e.Rb = {$Rotate: e.$Rotate || 0, Jc: e.$Zoom, kb: g.kb, jb: g.jb};
                        }
                        if (x.$Clip && g.$Move) {
                            var v = e.$Clip.B, D = (v.$Top || 0) + (v.$Bottom || 0), A = (v.$Left || 0) + (v.$Right || 0);
                            e.$Left = (e.$Left || 0) + A;
                            e.$Top = (e.$Top || 0) + D;
                            e.$Clip.$Left -= A;
                            e.$Clip.$Right -= A;
                            e.$Clip.$Top -= D;
                            e.$Clip.$Bottom -= D
                        }
                        if (e.$Clip && a.de() && !e.$Clip.$Top && !e.$Clip.$Left && e.$Clip.$Right == g.kb && e.$Clip.$Bottom == g.jb) {
                            e.$Clip = d;
                        }
                        a.b(e, function (b, a) {
                            B[a] && B[a](O, b)
                        })
                    }
                    f.zc(t - k, p - k)
                }
                t = p;
                a.b(u, function (b, c) {
                    var a = w < j ? u[u.length - c - 1] : b;
                    a.F(w, G)
                });
                var P = j, N = w;
                j = n;
                E = c;
                f.Ab(P, N)
            }
        }

        function F(a, c) {
            c && a.yb(h, 1);
            h = b.max(h, a.W());
            u.push(a)
        }

        function H() {
            if (r) {
                var d = a.G(), e = b.min(d - A, a.lb() ? 80 : 20), c = j + e * p;
                A = d;
                if (c * p >= o * p) {
                    c = o;
                }
                w(c);
                if (!y && c * p >= o * p) {
                    J(D);
                } else {
                    a.$Delay(H, g.$Interval)
                }
            }
        }

        function v(d, e, g) {
            if (!r) {
                r = c;
                y = g;
                D = e;
                d = b.max(d, i);
                d = b.min(d, h);
                o = d;
                p = o < j ? -1 : 1;
                f.Nc();
                A = a.G();
                H()
            }
        }

        function J(a) {
            if (r) {
                y = r = D = e;
                f.Oc();
                a && a()
            }
        }

        f.$Play = function (a, b, c) {
            v(a ? j + a : h, b, c)
        };
        f.Mc = function (b, a, c) {
            v(b, a, c)
        };
        f.ab = function () {
            J()
        };
        f.Ee = function (a) {
            v(a)
        };
        f.P = function () {
            return j
        };
        f.Hc = function () {
            return o
        };
        f.Wb = function () {
            return t
        };
        f.F = w;
        f.hc = function () {
            w(i, c)
        };
        f.$Move = function (a) {
            w(j + a)
        };
        f.$IsPlaying = function () {
            return r
        };
        f.ze = function (a) {
            q = a
        };
        f.yb = N;
        f.$Shift = I;
        f.bb = function (a) {
            F(a, 0)
        };
        f.ac = function (a) {
            F(a, 1)
        };
        f.W = function () {
            return h
        };
        f.Ab = a.pb;
        f.Nc = a.pb;
        f.Oc = a.pb;
        f.zc = a.pb;
        f.Zb = a.G();
        g = a.f({$Interval: 15}, g);
        q = g.Bd;
        B = a.f({}, a.af(), g.Cd);
        i = k = n;
        h = n + m;
        var M = g.$Round || {}, L = g.$During || {};
        C = a.f({A: a.Kc(g.$Easing) && g.$Easing || l.$EaseSwing}, g.$Easing)
    };
    var r, k = g.$JssorSlideshowFormations$ = {};
    new function () {
        var u = 0, o = 1, w = 2, v = 3, I = 1, H = 2, J = 4, G = 8, O = 256, P = 512, N = 1024, M = 2048, z = M + I, y = M + H, E = P + I, C = P
            + H, D = O + J, A = O + G, B = N + J, F = N + G;

        function S(a) {
            return(a & H) == H
        }

        function T(a) {
            return(a & J) == J
        }

        function x(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }

        k.$FormationStraight = function (f) {
            for (var d = f.$Cols, e = f.$Rows, k = f.$Assembly, l = f.Xb, j = [], a = 0, b = 0, h = d - 1, i = e - 1, g = l - 1, c, b = 0; b
                < e; b++) {
                for (a = 0; a < d; a++) {
                    switch (k) {
                        case z:
                            c = g - (a * e + (i - b));
                            break;
                        case B:
                            c = g - (b * d + (h - a));
                            break;
                        case E:
                            c = g - (a * e + b);
                        case D:
                            c = g - (b * d + a);
                            break;
                        case y:
                            c = a * e + b;
                            break;
                        case A:
                            c = b * d + (h - a);
                            break;
                        case C:
                            c = a * e + (i - b);
                            break;
                        default:
                            c = b * d + a
                    }
                    x(j, c, [b, a])
                }
            }
            return j
        };
        k.$FormationSwirl = function (e) {
            var l = e.$Cols, m = e.$Rows, q = e.$Assembly, k = e.Xb, p = [], n = [], i = 0, a = 0, b = 0, f = l - 1, g = m - 1, h, d, j = 0;
            switch (q) {
                case z:
                    a = f;
                    b = 0;
                    d = [w, o, v, u];
                    break;
                case B:
                    a = 0;
                    b = g;
                    d = [u, v, o, w];
                    break;
                case E:
                    a = f;
                    b = g;
                    d = [v, o, w, u];
                    break;
                case D:
                    a = f;
                    b = g;
                    d = [o, v, u, w];
                    break;
                case y:
                    a = 0;
                    b = 0;
                    d = [w, u, v, o];
                    break;
                case A:
                    a = f;
                    b = 0;
                    d = [o, w, u, v];
                    break;
                case C:
                    a = 0;
                    b = g;
                    d = [v, u, w, o];
                    break;
                default:
                    a = 0;
                    b = 0;
                    d = [u, w, o, v]
            }
            i = 0;
            while (i < k) {
                h = b + "," + a;
                if (a >= 0 && a < l && b >= 0 && b < m && !n[h]) {
                    n[h] = c;
                    x(p, i++, [b, a])
                } else {
                    switch (d[j++ % d.length]) {
                        case u:
                            a--;
                            break;
                        case w:
                            b--;
                            break;
                        case o:
                            a++;
                            break;
                        case v:
                            b++
                    }
                }
                switch (d[j % d.length]) {
                    case u:
                        a++;
                        break;
                    case w:
                        b++;
                        break;
                    case o:
                        a--;
                        break;
                    case v:
                        b--
                }
            }
            return p
        };
        k.$FormationZigZag = function (d) {
            var k = d.$Cols, l = d.$Rows, n = d.$Assembly, j = d.Xb, h = [], i = 0, a = 0, b = 0, e = k - 1, f = l - 1, m, c, g = 0;
            switch (n) {
                case z:
                    a = e;
                    b = 0;
                    c = [w, o, v, o];
                    break;
                case B:
                    a = 0;
                    b = f;
                    c = [u, v, o, v];
                    break;
                case E:
                    a = e;
                    b = f;
                    c = [v, o, w, o];
                    break;
                case D:
                    a = e;
                    b = f;
                    c = [o, v, u, v];
                    break;
                case y:
                    a = 0;
                    b = 0;
                    c = [w, u, v, u];
                    break;
                case A:
                    a = e;
                    b = 0;
                    c = [o, w, u, w];
                    break;
                case C:
                    a = 0;
                    b = f;
                    c = [v, u, w, u];
                    break;
                default:
                    a = 0;
                    b = 0;
                    c = [u, w, o, w]
            }
            i = 0;
            while (i < j) {
                m = b + "," + a;
                if (a >= 0 && a < k && b >= 0 && b < l && typeof h[m] == "undefined") {
                    x(h, i++, [b, a]);
                    switch (c[g % c.length]) {
                        case u:
                            a++;
                            break;
                        case w:
                            b++;
                            break;
                        case o:
                            a--;
                            break;
                        case v:
                            b--
                    }
                } else {
                    switch (c[g++ % c.length]) {
                        case u:
                            a--;
                            break;
                        case w:
                            b--;
                            break;
                        case o:
                            a++;
                            break;
                        case v:
                            b++
                    }
                    switch (c[g++ % c.length]) {
                        case u:
                            a++;
                            break;
                        case w:
                            b++;
                            break;
                        case o:
                            a--;
                            break;
                        case v:
                            b--
                    }
                }
            }
            return h
        };
        k.$FormationStraightStairs = function (h) {
            var l = h.$Cols, m = h.$Rows, e = h.$Assembly, k = h.Xb, i = [], j = 0, c = 0, d = 0, f = l - 1, g = m - 1, o = k - 1;
            switch (e) {
                case z:
                case C:
                case E:
                case y:
                    var a = 0, b = 0;
                    break;
                case A:
                case B:
                case D:
                case F:
                    var a = f, b = 0;
                    break;
                default:
                    e = F;
                    var a = f, b = 0
            }
            c = a;
            d = b;
            while (j < k) {
                if (T(e) || S(e)) {
                    x(i, o - j++, [d, c]);
                } else {
                    x(i, j++, [d, c]);
                }
                switch (e) {
                    case z:
                    case C:
                        c--;
                        d++;
                        break;
                    case E:
                    case y:
                        c++;
                        d--;
                        break;
                    case A:
                    case B:
                        c--;
                        d--;
                        break;
                    case F:
                    case D:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > g) {
                    switch (e) {
                        case z:
                        case C:
                            a++;
                            break;
                        case A:
                        case B:
                        case E:
                        case y:
                            b++;
                            break;
                        case F:
                        case D:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > g) {
                        switch (e) {
                            case z:
                            case C:
                                a = f;
                                b++;
                                break;
                            case E:
                            case y:
                                b = g;
                                a++;
                                break;
                            case A:
                            case B:
                                b = g;
                                a--;
                                break;
                            case F:
                            case D:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > g) {
                            b = g;
                        } else if (b < 0) {
                            b = 0;
                        } else if (a > f) {
                            a = f;
                        } else if (a < 0) {
                            a = 0
                        }
                    }
                    d = b;
                    c = a
                }
            }
            return i
        };
        k.$FormationSquare = function (h) {
            var a = h.$Cols || 1, c = h.$Rows || 1, i = [], d, e, f, g, j;
            f = a < c ? (c - a) / 2 : 0;
            g = a > c ? (a - c) / 2 : 0;
            j = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++) {
                for (e = 0; e < c; e++) {
                    x(i, j - b.min(d + 1 + f, e + 1 + g, a - d + f, c - e + g), [e, d]);
                }
            }
            return i
        };
        k.$FormationRectangle = function (f) {
            var d = f.$Cols || 1, e = f.$Rows || 1, g = [], a, c, h;
            h = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++) {
                for (c = 0; c < e; c++) {
                    x(g, h - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
                }
            }
            return g
        };
        k.$FormationRandom = function (d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++) {
                for (a = 0; a < d.$Cols; a++) {
                    x(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
                }
            }
            return e
        };
        k.$FormationCircle = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++) {
                for (a = 0; a < f; a++) {
                    x(g, b.round(b.sqrt(b.pow(c - h, 2) + b.pow(a - i, 2))), [
                        a, c
                    ]);
                }
            }
            return g
        };
        k.$FormationCross = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++) {
                for (a = 0; a < f; a++) {
                    x(g, b.round(b.min(b.abs(c - h), b.abs(a - i))), [
                        a, c
                    ]);
                }
            }
            return g
        };
        k.$FormationRectangleCross = function (f) {
            for (var g = f.$Cols || 1, h = f.$Rows || 1, i = [], a, d = g / 2 - .5, e = h / 2 - .5, j = b.max(d, e) + 1, c = 0; c < g; c++) {
                for (a = 0; a < h; a++) {
                    x(i, b.round(j - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [
                        a, c
                    ]);
                }
            }
            return i
        };
        function Q(a) {
            var b = a.$Formation(a);
            return a.$Reverse ? b.reverse() : b
        }

        function K(g, f) {
            var d = {$Interval: f, $Duration: 1, $Delay: 0, $Cols: 1, $Rows: 1, $Opacity: 0, $Zoom: 0, $Clip: 0, $Move: e, $SlideOut: e, $FlyDirection: 0, $Reverse: e, $Formation: k.$FormationRandom, $Assembly: F, $ChessMode: {$Column: 0, $Row: 0}, $Easing: l.$EaseSwing, $Round: {}, zb: [], $During: {}};
            a.f(d, g);
            d.Xb = d.$Cols * d.$Rows;
            if (a.Kc(d.$Easing)) {
                d.$Easing = {A: d.$Easing};
            }
            d.yd = b.ceil(d.$Duration / d.$Interval);
            d.vd = R(d);
            d.Ge = function (b, a) {
                b /= d.$Cols;
                a /= d.$Rows;
                var f = b + "x" + a;
                if (!d.zb[f]) {
                    d.zb[f] = {J: b, K: a};
                    for (var c = 0; c < d.$Cols; c++) {
                        for (var e = 0; e < d.$Rows; e++) {
                            d.zb[f][e + "," + c] = {$Top: e * a, $Right: c * b + b, $Bottom: e * a + a, $Left: c * b}
                        }
                    }
                }
                return d.zb[f]
            };
            if (d.$Brother) {
                d.$Brother = K(d.$Brother, f);
                d.$SlideOut = c
            }
            return d
        }

        function R(d) {
            var c = d.$Easing;
            if (!c.A) {
                c.A = l.$EaseSwing;
            }
            var e = d.yd, f = c.$Cache;
            if (!f) {
                var g = a.f({}, d.$Easing, d.$Round);
                f = c.$Cache = {};
                a.b(g, function (n, l) {
                    var g = c[l] || c.A, j = d.$Round[l] || 1;
                    if (!a.Vb(g.$Cache)) {
                        g.$Cache = [];
                    }
                    var h = g.$Cache[e] = g.$Cache[e] || [];
                    if (!h[j]) {
                        h[j] = [0];
                        for (var k = 1; k <= e; k++) {
                            var i = k / e * j, m = b.floor(i);
                            if (i != m) {
                                i -= m;
                            }
                            h[j][k] = g(i)
                        }
                    }
                    f[l] = h
                })
            }
            return f
        }

        function L(D, k, f, y, m, l) {
            var B = this, v, w = {}, p = {}, o = [], h, g, t, r = f.$ChessMode.$Column || 0, s = f.$ChessMode.$Row || 0, j = f.Ge(m,
                                                                                                                                  l), q = Q(f), E = q.length
                - 1, u = f.$Duration + f.$Delay * E, z = y + u, n = f.$SlideOut, A;
            z += a.hb() ? 260 : 50;
            B.Dd = z;
            B.Fb = function (c) {
                c -= y;
                var d = c < u;
                if (d || A) {
                    A = d;
                    if (!n) {
                        c = u - c;
                    }
                    var e = b.ceil(c / f.$Interval);
                    a.b(p, function (c, f) {
                        var d = b.max(e, c.Ce);
                        d = b.min(d, c.length - 1);
                        if (c.Ed != d) {
                            if (!c.Ed && !n) {
                                a.o(o[f]);
                            } else {
                                d == c.Zg && n && a.E(o[f]);
                            }
                            c.Ed = d;
                            a.Se(o[f], c[d])
                        }
                    })
                }
            };
            function x(b) {
                a.uf(b);
                var c = a.db(b);
                a.b(c, function (a) {
                    x(a)
                })
            }

            k = a.t(k, c);
            x(k);
            if (a.H()) {
                var F = !k["no-image"], C = a.gf(k, d, c);
                a.b(C, function (b) {
                    (F || b["jssor-slider"]) && a.Kb(b, a.Ac(b), c)
                })
            }
            a.b(q, function (d, k) {
                a.b(d, function (N) {
                    var S = N[0], R = N[1], z = S + "," + R, u = e, x = e, A = e;
                    if (r && R % 2) {
                        if (i.Zc(r)) {
                            u = !u;
                        }
                        if (i.Xc(r)) {
                            x = !x;
                        }
                        if (r & 16) {
                            A = !A
                        }
                    }
                    if (s && S % 2) {
                        if (i.Zc(s)) {
                            u = !u;
                        }
                        if (i.Xc(s)) {
                            x = !x;
                        }
                        if (s & 16) {
                            A = !A
                        }
                    }
                    f.$Top = f.$Top || f.$Clip & 4;
                    f.$Bottom = f.$Bottom || f.$Clip & 8;
                    f.$Left = f.$Left || f.$Clip & 1;
                    f.$Right = f.$Right || f.$Clip & 2;
                    var G = x ? f.$Bottom : f.$Top, D = x ? f.$Top : f.$Bottom, F = u ? f.$Right : f.$Left, E = u ? f.$Left : f.$Right;
                    f.$Clip = G || D || F || E;
                    t = {};
                    g = {$Top: 0, $Left: 0, $Opacity: 1, J: m, K: l};
                    h = a.f({}, g);
                    v = a.f({}, j[z]);
                    if (f.$Opacity) {
                        g.$Opacity = 2 - f.$Opacity;
                    }
                    if (f.$ZIndex) {
                        g.$ZIndex = f.$ZIndex;
                        h.$ZIndex = 0
                    }
                    var Q = f.$Cols * f.$Rows > 1 || f.$Clip;
                    if (f.$Zoom || f.$Rotate) {
                        var P = c;
                        if (a.Ib() && a.Ef() < 9) {
                            if (f.$Cols * f.$Rows > 1) {
                                P = e;
                            } else {
                                Q = e;
                            }
                        }
                        if (P) {
                            g.$Zoom = f.$Zoom ? f.$Zoom - 1 : 1;
                            h.$Zoom = 1;
                            if (a.H() || a.lb()) {
                                g.$Zoom = b.min(g.$Zoom, 2);
                            }
                            var K = f.$Rotate;
                            if (K == c) {
                                K = 1;
                            }
                            g.$Rotate = K * 360 * (A ? -1 : 1);
                            h.$Rotate = 0
                        }
                    }
                    if (Q) {
                        if (f.$Clip) {
                            var y = f.$ScaleClip || 1, o = v.B = {};
                            if (G && D) {
                                o.$Top = j.K / 2 * y;
                                o.$Bottom = -o.$Top
                            } else if (G) {
                                o.$Bottom = -j.K * y;
                            } else if (D) {
                                o.$Top = j.K * y;
                            }
                            if (F && E) {
                                o.$Left = j.J / 2 * y;
                                o.$Right = -o.$Left
                            } else if (F) {
                                o.$Right = -j.J * y;
                            } else if (E) {
                                o.$Left = j.J * y
                            }
                        }
                        t.$Clip = v;
                        h.$Clip = j[z]
                    }
                    if (f.$FlyDirection) {
                        var q = f.$FlyDirection;
                        if (!u) {
                            q = i.Ff(q);
                        }
                        if (!x) {
                            q = i.Gf(q);
                        }
                        var M = f.$ScaleHorizontal || 1, O = f.$ScaleVertical || 1;
                        if (i.od(q)) {
                            g.$Left += m * M;
                        } else if (i.pd(q)) {
                            g.$Left -= m * M;
                        }
                        if (i.ad(q)) {
                            g.$Top += l * O;
                        } else if (i.bd(q)) {
                            g.$Top -= l * O
                        }
                    }
                    a.b(g, function (b, c) {
                        if (a.jc(b)) {
                            if (b != h[c]) {
                                t[c] = b - h[c]
                            }
                        }
                    });
                    w[z] = n ? h : g;
                    var L = b.round(k * f.$Delay / f.$Interval);
                    p[z] = new Array(L);
                    p[z].Ce = L;
                    for (var C = f.yd, J = 0; J <= C; J++) {
                        var d = {};
                        a.b(t, function (g, c) {
                            var m = f.vd[c] || f.vd.A, l = m[f.$Round[c] || 1], k = f.$During[c] || [0, 1], e = (J / C - k[0]) / k[1] * C;
                            e = b.round(b.min(C, b.max(e, 0)));
                            var j = l[e];
                            if (a.jc(g)) {
                                d[c] = h[c] + g * j;
                            } else {
                                var i = d[c] = a.f({}, h[c]);
                                i.B = [];
                                a.b(g.B, function (c, b) {
                                    var a = c * j;
                                    i.B[b] = a;
                                    i[b] += a
                                })
                            }
                        });
                        if (h.$Zoom) {
                            d.Rb = {$Rotate: d.$Rotate || 0, Jc: d.$Zoom, kb: m, jb: l};
                        }
                        if (d.$Clip && f.$Move) {
                            var B = d.$Clip.B, I = (B.$Top || 0) + (B.$Bottom || 0), H = (B.$Left || 0) + (B.$Right || 0);
                            d.$Left = (d.$Left || 0) + H;
                            d.$Top = (d.$Top || 0) + I;
                            d.$Clip.$Left -= H;
                            d.$Clip.$Right -= H;
                            d.$Clip.$Top -= I;
                            d.$Clip.$Bottom -= I
                        }
                        d.$ZIndex = d.$ZIndex || 1;
                        p[z].push(d)
                    }
                })
            });
            q.reverse();
            a.b(q, function (b) {
                a.b(b, function (d) {
                    var g = d[0], f = d[1], e = g + "," + f, b = k;
                    if (f || g) {
                        b = a.t(k, c);
                    }
                    a.D(b, w[e]);
                    a.O(b, "hidden");
                    a.w(b, "absolute");
                    D.oe(b);
                    o[e] = b;
                    a.o(b, n)
                })
            })
        }

        g.$JssorSlideshowRunner$ = function (h, l, i, n, p) {
            var e = this, o, f, c, s = 0, r = n.$TransitionsOrder, k, g = 16;

            function q() {
                var a = this, b = 0;
                j.call(a, 0, o);
                a.Ab = function (d, a) {
                    if (a - b > g) {
                        b = a;
                        c && c.Fb(a);
                        f && f.Fb(a)
                    }
                };
                a.xb = k
            }

            e.pe = function (f) {
                var c = 0, e = n.$Transitions, d = e.length;
                if (r) {
                    if (d > f && (a.hb() || a.Af() || a.Bf())) {
                        d -= d % f;
                    }
                    c = s++ % d
                } else {
                    c = b.floor(b.random() * d);
                }
                e[c] && (e[c].U = c);
                return e[c]
            };
            e.le = function (w, x, n, p, a) {
                k = a;
                a = K(a, g);
                var m = p.fd, j = n.fd;
                m["no-image"] = !p.Cb;
                j["no-image"] = !n.Cb;
                var q = m, r = j, v = a, d = a.$Brother || K({}, g);
                if (!a.$SlideOut) {
                    q = j;
                    r = m
                }
                var s = d.$Shift || 0;
                f = new L(h, r, d, b.max(s - d.$Interval, 0), l, i);
                c = new L(h, q, v, b.max(d.$Interval - s, 0), l, i);
                f.Fb(0);
                c.Fb(0);
                o = b.max(f.Dd, c.Dd);
                e.U = w
            };
            e.ub = function () {
                h.ub();
                f = d;
                c = d
            };
            e.me = function () {
                var a = d;
                if (c) {
                    a = new q;
                }
                return a
            };
            if (a.H() || a.lb() || p && a.gc < 537) {
                g = 32;
            }
            m.call(e);
            j.call(e, -1e7, 1e7)
        };
        function n(o, Wb) {
            var k = this;

            function rc() {
                var a = this;
                j.call(a, -1e8, 2e8);
                a.qe = function () {
                    var c = a.Wb(), d = b.floor(c), f = v(d), e = c - b.floor(c);
                    return{U: f, ue: d, Q: e}
                };
                a.Ab = function (d, a) {
                    var e = b.floor(a);
                    if (e != a && a > d) {
                        e++;
                    }
                    Lb(e, c);
                    k.g(n.$EVT_POSITION_CHANGE, v(a), v(d), a, d)
                }
            }

            function qc() {
                var b = this;
                j.call(b, 0, 0, {Bd: t});
                a.b(B, function (a) {
                    i.$Loop && a.ze(t);
                    b.ac(a);
                    a.$Shift(rb / Rb)
                })
            }

            function pc() {
                var a = this, b = Kb.$Elmt;
                j.call(a, -1, 2, {$Easing: l.$EaseLinear, Cd: {Q: Qb}, Bd: t}, b, {Q: 1}, {Q: -1});
                a.Bb = b
            }

            function ec(o, m) {
                var a = this, f, g, h, l, b;
                j.call(a, -1e8, 2e8);
                a.Nc = function () {
                    M = c;
                    Q = d;
                    k.g(n.$EVT_SWIPE_START, v(x.P()), x.P())
                };
                a.Oc = function () {
                    M = e;
                    l = e;
                    var a = x.qe();
                    k.g(n.$EVT_SWIPE_END, v(x.P()), x.P());
                    !a.Q && tc(a.ue, r)
                };
                a.Ab = function (d, c) {
                    var a;
                    if (l) {
                        a = b;
                    } else {
                        a = g;
                        if (h) {
                            a = i.$SlideEasing(c / h) * (g - f) + f
                        }
                    }
                    x.F(a)
                };
                a.Db = function (b, d, c, e) {
                    f = b;
                    g = d;
                    h = c;
                    x.F(b);
                    a.F(0);
                    a.Mc(c, e)
                };
                a.Ve = function (e) {
                    l = c;
                    b = e;
                    a.$Play(e, d, c)
                };
                a.We = function (a) {
                    b = a
                };
                x = new rc;
                x.bb(o);
                x.bb(m)
            }

            function fc() {
                var c = this, b = Pb();
                a.nb(b, 0);
                c.$Elmt = b;
                c.oe = function (c) {
                    a.y(b, c);
                    a.o(b)
                };
                c.ub = function () {
                    a.E(b);
                    a.Ic(b)
                }
            }

            function oc(p, o) {
                var f = this, s, w, G, x, g, y = [], X, q, bb, F, T, E, l, u, h;
                j.call(f, -C, C + 1, {});
                function D(a) {
                    w && w.yc();
                    s && s.yc();
                    ab(p, a);
                    s = new H.$Class(p, H, 1);
                    w = new H.$Class(p, H);
                    w.hc();
                    s.hc()
                }

                function db() {
                    s.Zb < H.Zb && D()
                }

                function M(o, q, m) {
                    if (!F) {
                        F = c;
                        if (g && m) {
                            var d = m.width, b = m.height, l = d, j = b;
                            if (d && b && i.$FillMode) {
                                if (i.$FillMode & 3) {
                                    var h = e, p = L / K * b / d;
                                    if (i.$FillMode & 1) {
                                        h = p > 1;
                                    } else if (i.$FillMode & 2) {
                                        h = p < 1;
                                    }
                                    l = h ? d * K / b : L;
                                    j = h ? K : b * L / d
                                }
                                a.V(g, l);
                                a.S(g, j);
                                a.r(g, (K - j) / 2);
                                a.s(g, (L - l) / 2)
                            }
                            a.w(g, "absolute");
                            k.g(n.$EVT_LOAD_END, Ub)
                        }
                    }
                    a.E(q);
                    o && o(f)
                }

                function cb(b, c, d, e) {
                    if (e == Q && r == o && N) {
                        if (!sc) {
                            var a = v(b);
                            z.le(a, o, c, f, d);
                            c.bf();
                            U.yb(a, 1);
                            U.F(a);
                            A.Db(b, b, 0)
                        }
                    }
                }

                function eb(b) {
                    if (b == Q && r == o) {
                        if (!l) {
                            var a = d;
                            if (z) {
                                if (z.U == o) {
                                    a = z.me();
                                } else {
                                    z.ub();
                                }
                            }
                            db();
                            l = new mc(o, a, f.Ye(), f.Ze());
                            l.nd(h)
                        }
                        !l.$IsPlaying() && l.sc()
                    }
                }

                function W(e, c) {
                    if (e == o) {
                        if (e != c) {
                            B[c] && B[c].Ke();
                        }
                        h && h.$Enable();
                        var j = Q = a.G();
                        f.wb(a.x(d, eb, j))
                    } else {
                        var g = b.abs(o - e);
                        (!T || g <= i.$LazyLoading || t - g <= i.$LazyLoading) && f.wb()
                    }
                }

                function fb() {
                    if (r == o && l) {
                        l.ab();
                        h && h.$Quit();
                        h && h.$Disable();
                        l.id()
                    }
                }

                function gb() {
                    r == o && l && l.ab()
                }

                function S(b) {
                    if (P) {
                        a.ib(b);
                    } else {
                        k.g(n.$EVT_CLICK, o, b)
                    }
                }

                function R() {
                    h = u.pInstance;
                    l && l.nd(h)
                }

                f.wb = function (e, b) {
                    b = b || x;
                    if (y.length && !F) {
                        a.o(b);
                        if (!bb) {
                            bb = c;
                            k.g(n.$EVT_LOAD_START);
                            a.b(y, function (b) {
                                if (!b.src) {
                                    b.src = a.N(b, "src2");
                                    a.sb(b, b["display-origin"])
                                }
                            })
                        }
                        a.Rd(y, g, a.x(d, M, e, b))
                    } else {
                        M(e, b)
                    }
                };
                f.Re = function () {
                    if (z) {
                        var b = z.pe(t);
                        if (b) {
                            var f = Q = a.G(), c = o + 1, e = B[v(c)];
                            return e.wb(a.x(d, cb, c, e, b, f), x)
                        }
                    }
                    V(r + i.$AutoPlaySteps)
                };
                f.pc = function () {
                    W(o, o)
                };
                f.Ke = function () {
                    h && h.$Quit();
                    h && h.$Disable();
                    f.md();
                    l && l.Ne();
                    l = d;
                    D()
                };
                f.bf = function () {
                    a.E(p)
                };
                f.md = function () {
                    a.o(p)
                };
                f.Oe = function () {
                    h && h.$Enable()
                };
                function ab(b, f, d) {
                    d = d || 0;
                    if (!E) {
                        if (b.tagName == "IMG") {
                            y.push(b);
                            if (!b.src) {
                                T = c;
                                b["display-origin"] = a.Vc(b);
                                a.E(b)
                            }
                        }
                        a.H() && a.nb(b, a.kc(b) + 1);
                        if (a.gc() > 0) {
                            (!I || a.gc() < 534 || !Z) && a.Jf(b)
                        }
                    }
                    var h = a.db(b);
                    a.b(h, function (h) {
                        var j = a.N(h, "u");
                        if (j == "player" && !u) {
                            u = h;
                            if (u.pInstance) {
                                R();
                            } else {
                                a.h(u, "dataavailable", R)
                            }
                        }
                        if (j == "caption") {
                            if (!a.Ib() && !f) {
                                var i = a.t(h, c);
                                a.Mb(b, i, h);
                                a.rb(b, h);
                                h = i;
                                f = c
                            }
                        } else if (!E && !d && !g && a.N(h, "u") == "image") {
                            g = h;
                            if (g) {
                                if (g.tagName == "A") {
                                    X = g;
                                    a.D(X, O);
                                    q = a.t(g, e);
                                    a.h(q, "click", S);
                                    a.D(q, O);
                                    a.sb(q, "block");
                                    a.Kb(q, 0);
                                    a.Bc(q, "#000");
                                    g = a.rf(g, "IMG")
                                }
                                g.border = 0;
                                a.D(g, O)
                            }
                        }
                        ab(h, f, d + 1)
                    })
                }

                f.zc = function (c, b) {
                    var a = C - b;
                    Qb(G, a)
                };
                f.Ye = function () {
                    return s
                };
                f.Ze = function () {
                    return w
                };
                f.U = o;
                m.call(f);
                var J = a.v(p, "thumb");
                if (J) {
                    f.ke = a.t(J, c);
                    a.E(J)
                }
                a.o(p);
                x = a.t(Y, c);
                a.nb(x, 1e3);
                a.h(p, "click", S);
                D(c);
                E = c;
                f.Cb = g;
                f.ld = q;
                f.fd = p;
                f.Bb = G = p;
                a.y(G, x);
                k.$On(203, W);
                k.$On(22, gb);
                k.$On(24, fb)
            }

            function mc(h, q, v, u) {
                var b = this, m = 0, x = 0, o, g, d, f, l, s, w, t, p = B[h];
                j.call(b, 0, 0);
                function y() {
                    a.ge(J);
                    Vb && l && p.ld && a.y(J, p.ld);
                    a.o(J, l || !p.Cb)
                }

                function A() {
                    if (s) {
                        s = e;
                        k.g(n.$EVT_ROLLBACK_END, h, d, m, g, d, f);
                        b.F(g)
                    }
                    b.sc()
                }

                function C(a) {
                    t = a;
                    b.ab();
                    b.sc()
                }

                b.sc = function () {
                    var a = b.Wb();
                    if (!F && !M && !t && (a != d || N && (!Nb || S)) && r == h) {
                        if (!a) {
                            if (o && !l) {
                                l = c;
                                b.id(c);
                                k.g(n.$EVT_SLIDESHOW_START, h, m, x, o, f)
                            }
                            y()
                        }
                        var e, i = n.$EVT_STATE_CHANGE;
                        if (a == f) {
                            d == f && b.F(g);
                            return p.Re()
                        } else if (a == d) {
                            e = f;
                        } else if (a == g) {
                            e = d;
                        } else if (!a) {
                            e = g;
                        } else if (a > d) {
                            s = c;
                            e = d;
                            i = n.$EVT_ROLLBACK_START
                        } else {
                            e = b.Hc();
                        }
                        k.g(i, h, a, m, g, d, f);
                        b.Mc(e, A)
                    }
                };
                b.Ne = function () {
                    z && z.U == h && z.ub();
                    var a = b.Wb();
                    a < f && k.g(n.$EVT_STATE_CHANGE, h, -a - 1, m, g, d, f)
                };
                b.id = function (b) {
                    q && a.O(cb, b && q.xb.$Outside ? "" : "hidden")
                };
                b.zc = function (b, a) {
                    if (l && a >= o) {
                        l = e;
                        y();
                        p.md();
                        z.ub();
                        k.g(n.$EVT_SLIDESHOW_END, h, m, x, o, f)
                    }
                    k.g(n.$EVT_PROGRESS_CHANGE, h, a, m, g, d, f)
                };
                b.nd = function (a) {
                    if (a && !w) {
                        w = a;
                        a.$On($JssorPlayer$.ye, C)
                    }
                };
                q && b.ac(q);
                o = b.W();
                b.W();
                b.ac(v);
                g = v.W();
                d = g + i.$AutoPlayInterval;
                u.$Shift(d);
                b.bb(u);
                f = b.W()
            }

            function Qb(c, g) {
                var f = w > 0 ? w : i.$PlayOrientation, d = b.round(vb * g * (f & 1)), e = b.round(wb * g * (f >> 1 & 1));
                if (a.Ib() && a.Lb() >= 10 && a.Lb() < 11) {
                    c.style.msTransform = "translate(" + d + "px, " + e + "px)";
                } else if (a.hb() && a.Lb() >= 30) {
                    c.style.WebkitTransition = "transform 0s";
                    c.style.WebkitTransform = "translate3d(" + d + "px, " + e + "px, 0px) perspective(2000px)"
                } else {
                    a.s(c, d);
                    a.r(c, e)
                }
            }

            function lc(a) {
                P = 0;
                !G && ic() && kc(a)
            }

            function kc(b) {
                kb = M;
                F = c;
                ub = e;
                Q = d;
                a.h(f, hb, Sb);
                a.G();
                Db = A.Hc();
                A.ab();
                if (!kb) {
                    w = 0;
                }
                if (I) {
                    var h = b.touches[0];
                    pb = h.clientX;
                    qb = h.clientY
                } else {
                    var g = a.Gc(b);
                    pb = g.x;
                    qb = g.y;
                    a.ib(b)
                }
                E = 0;
                X = 0;
                bb = 0;
                D = x.P();
                k.g(n.$EVT_DRAG_START, v(D), D, b)
            }

            function Sb(e) {
                if (F && (!a.H() || e.button)) {
                    var f;
                    if (I) {
                        var n = e.touches;
                        if (n && n.length > 0) {
                            f = new h(n[0].clientX, n[0].clientY)
                        }
                    } else {
                        f = a.Gc(e);
                    }
                    if (f) {
                        var l = f.x - pb, m = f.y - qb;
                        if (b.floor(D) != D) {
                            w = i.$PlayOrientation & G;
                        }
                        if ((l || m) && !w) {
                            if (G == 3) {
                                if (b.abs(m) > b.abs(l)) {
                                    w = 2;
                                } else {
                                    w = 1;
                                }
                            } else {
                                w = G;
                            }
                            if (I && w == 1 && b.abs(m) - b.abs(l) > 3) {
                                ub = c
                            }
                        }
                        if (w) {
                            var d = m, k = wb;
                            if (w == 1) {
                                d = l;
                                k = vb
                            }
                            if (!i.$Loop) {
                                if (d > 0) {
                                    var g = k * r, j = d - g;
                                    if (j > 0) {
                                        d = g + b.sqrt(j) * 5
                                    }
                                }
                                if (d < 0) {
                                    var g = k * (t - C - r), j = -d - g;
                                    if (j > 0) {
                                        d = -g - b.sqrt(j) * 5
                                    }
                                }
                            }
                            if (E - X < -2) {
                                bb = 1;
                            } else if (E - X > 2) {
                                bb = 0;
                            }
                            X = E;
                            E = d;
                            mb = D - E / k / (gb || 1);
                            if (E && w && !ub) {
                                a.ib(e);
                                if (!M) {
                                    A.Ve(mb);
                                } else {
                                    A.We(mb)
                                }
                            } else {
                                a.H() && a.ib(e)
                            }
                        }
                    }
                } else {
                    zb(e)
                }
            }

            function zb(h) {
                gc();
                if (F) {
                    F = e;
                    a.G();
                    a.yf(f, hb, Sb);
                    P = E;
                    P && a.ib(h);
                    A.ab();
                    var d = x.P();
                    k.g(n.$EVT_DRAG_END, v(d), d, v(D), D, h);
                    var c = b.floor(D);
                    if (b.abs(E) >= i.$MinDragOffsetToSlide) {
                        c = b.floor(d);
                        c += bb
                    }
                    if (!i.$Loop) {
                        c = b.min(t - C, b.max(c, 0));
                    }
                    var g = b.abs(c - d);
                    g = 1 - b.pow(1 - g, 5);
                    if (!P && kb) {
                        A.Ee(Db);
                    } else if (d == c) {
                        nb.Oe();
                        nb.pc()
                    } else {
                        A.Db(d, c, g * Mb)
                    }
                }
            }

            function dc(a) {
                B[r];
                r = v(a);
                nb = B[r];
                Lb(a);
                return r
            }

            function tc(a, b) {
                w = 0;
                dc(a);
                k.g(n.$EVT_PARK, v(a), b)
            }

            function Lb(b, c) {
                a.b(R, function (a) {
                    a.lc(v(b), b, c)
                })
            }

            function ic() {
                var a = n.sd || 0;
                n.sd |= i.$DragOrientation;
                return G = i.$DragOrientation & ~a
            }

            function gc() {
                if (G) {
                    n.sd &= ~i.$DragOrientation;
                    G = 0
                }
            }

            function Pb() {
                var b = a.Eb();
                a.D(b, O);
                a.w(b, "absolute");
                return b
            }

            function v(a) {
                return(a % t + t) % t
            }

            function ac(b, a) {
                V(b, i.$SlideDuration, a)
            }

            function tb() {
                a.b(R, function (a) {
                    a.nc(a.Hb.$ChanceToShow > S)
                })
            }

            function Yb(b) {
                b = a.bc(b);
                var c = b.target ? b.target : b.srcElement, d = b.relatedTarget ? b.relatedTarget : b.toElement;
                if (!a.Sc(o, c) || a.Sc(o, d)) {
                    return;
                }
                S = 1;
                tb();
                B[r].pc()
            }

            function Xb() {
                S = 0;
                tb()
            }

            function Zb() {
                O = {J: L, K: K, $Top: 0, $Left: 0};
                a.b(T, function (b) {
                    a.D(b, O);
                    a.w(b, "absolute");
                    a.O(b, "hidden");
                    a.E(b)
                });
                a.D(Y, O)
            }

            function eb(b, a) {
                V(b, a, c)
            }

            function V(h, g, l) {
                if (Jb && (!F || i.$NaviQuitDrag)) {
                    M = c;
                    F = e;
                    A.ab();
                    if (a.ec(g)) {
                        g = Mb;
                    }
                    var f = Ab.Wb(), d = h;
                    if (l) {
                        d = f + h;
                        if (h > 0) {
                            d = b.ceil(d);
                        } else {
                            d = b.floor(d)
                        }
                    }
                    if (!i.$Loop) {
                        d = b.max(0, b.min(d, t - C));
                    }
                    var k = (d - f) % t;
                    d = f + k;
                    var j = f == d ? 0 : g * b.abs(k);
                    j = b.min(j, g * C * 1.5);
                    A.Db(f, d, j)
                }
            }

            k.$PlayTo = V;
            k.$GoTo = function (a) {
                V(a, 0)
            };
            k.$Next = function () {
                eb(1)
            };
            k.$Prev = function () {
                eb(-1)
            };
            k.$Pause = function () {
                N = e
            };
            k.$Play = function () {
                if (!N) {
                    N = c;
                    B[r] && B[r].pc()
                }
            };
            k.$SetSlideshowTransitions = function (a) {
                i.$SlideshowOptions.$Transitions = a
            };
            k.$SetCaptionTransitions = function (b) {
                H.$CaptionTransitions = b;
                H.Zb = a.G()
            };
            k.$SlidesCount = function () {
                return T.length
            };
            k.$CurrentIndex = function () {
                return r
            };
            k.$IsAutoPlaying = function () {
                return N
            };
            k.$IsDragging = function () {
                return F
            };
            k.$IsSliding = function () {
                return M
            };
            k.$IsMouseOver = function () {
                return!S
            };
            k.$LastDragSucceded = function () {
                return P
            };
            k.$GetOriginalWidth = function () {
                return a.m(u || o)
            };
            k.$GetOriginalHeight = function () {
                return a.n(u || o)
            };
            k.$GetScaleWidth = function () {
                return a.m(o)
            };
            k.$GetScaleHeight = function () {
                return a.n(o)
            };
            k.$SetScaleWidth = function (c) {
                if (!u) {
                    var b = a.t(o, e);
                    a.Ec(b, "id");
                    a.w(b, "relative");
                    a.r(b, 0);
                    a.s(b, 0);
                    a.O(b, "visible");
                    u = a.t(o, e);
                    a.Ec(u, "id");
                    a.mc(u, "");
                    a.w(u, "absolute");
                    a.r(u, 0);
                    a.s(u, 0);
                    a.V(u, a.m(o));
                    a.S(u, a.n(o));
                    a.sf(u, "0 0");
                    a.y(u, b);
                    var d = a.db(o);
                    a.y(o, u);
                    a.Xd(b, d);
                    a.o(b);
                    a.o(u)
                }
                gb = c / a.m(u);
                a.tf(u, gb);
                a.V(o, c);
                a.S(o, gb * a.n(u))
            };
            k.cd = function (a) {
                var d = b.ceil(v(rb / Rb)), c = v(a - r + d);
                if (c > C) {
                    if (a - r > t / 2) {
                        a -= t;
                    } else if (a - r <= -t / 2) {
                        a += t
                    }
                } else {
                    a = r + c - d;
                }
                return a
            };
            m.call(this);
            k.$Elmt = o = a.T(o);
            var i = a.f({$FillMode: 0, $LazyLoading: 1, $StartIndex: 0, $AutoPlay: e, $Loop: c, $NaviQuitDrag: c, $AutoPlaySteps: 1, $AutoPlayInterval: 3e3, $PauseOnHover: 3, $HwaMode: 1, $SlideDuration: 500, $SlideEasing: l.$EaseOutQuad, $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $DisplayPieces: 1, $ParkingPosition: 0, $UISearchMode: 1, $PlayOrientation: 1, $DragOrientation: 1},
                        Wb), ab = i.$SlideshowOptions, H = a.f({$Class: s, $PlayInMode: 1, $PlayOutMode: 1},
                                                               i.$CaptionSliderOptions), ob = i.$NavigatorOptions, jb = i.$DirectionNavigatorOptions, W = i.$ThumbnailNavigatorOptions, db = i.$UISearchMode, u, y = a.v(o,
                                                                                                                                                                                                                         "slides",
                                                                                                                                                                                                                         d,
                                                                                                                                                                                                                         db), Y = a.v(o,
                                                                                                                                                                                                                                      "loading",
                                                                                                                                                                                                                                      d,
                                                                                                                                                                                                                                      db)
                || a.Eb(f), Gb = a.v(o, "navigator", d, db), Cb = a.v(o, "thumbnavigator", d, db), cc = a.m(y), bc = a.n(y);
            if (!i.$Loop) {
                i.$ParkingPosition = 0;
            }
            if (i.$DisplayPieces > 1 || i.$ParkingPosition) {
                i.$DragOrientation &= i.$PlayOrientation;
            }
            var O, T = a.db(y), r = -1, nb, t = T.length, L = i.$SlideWidth || cc, K = i.$SlideHeight || bc, Ob = i.$SlideSpacing, vb = L + Ob, wb = K
                + Ob, Rb = i.$PlayOrientation == 1 ? vb : wb, C = b.min(i.$DisplayPieces,
                                                                        t), cb, w, G, ub, I, R = [], Tb, Eb, Ib, Vb, sc, N, Nb = i.$PauseOnHover, Mb = i.$SlideDuration, lb, Z, rb, Jb = C
                < t, jc = Jb && i.$DragOrientation, P, S = 1, M, F, Q, pb = 0, qb = 0, E, X, bb, Ab, x, U, A, Kb = new fc, gb;
            N = i.$AutoPlay;
            k.Hb = Wb;
            Zb();
            o["jssor-slider"] = c;
            a.nb(y, a.kc(y));
            a.w(y, "absolute");
            cb = a.t(y);
            a.Mb(a.vb(y), cb, y);
            if (ab) {
                Vb = ab.$ShowLink;
                lb = ab.$Class;
                Z = C == 1 && t > 1 && lb && (!a.Ib() || a.Lb() >= 8)
            }
            rb = Z || C >= t ? 0 : i.$ParkingPosition;
            var sb = y, B = [], z, J, yb = "mousedown", hb = "mousemove", Bb = "mouseup", fb, D, kb, Db, mb;
            if (g.navigator.msPointerEnabled) {
                yb = "MSPointerDown";
                hb = "MSPointerMove";
                Bb = "MSPointerUp";
                fb = "MSPointerCancel";
                if (i.$DragOrientation) {
                    var xb = "none";
                    if (i.$DragOrientation == 1) {
                        xb = "pan-y";
                    } else if (i.$DragOrientation == 2) {
                        xb = "pan-x";
                    }
                    a.ef(sb.style, "-ms-touch-action", xb)
                }
            } else if ("ontouchstart"in g || "createTouch"in f) {
                I = c;
                yb = "touchstart";
                hb = "touchmove";
                Bb = "touchend";
                fb = "touchcancel"
            }
            U = new pc;
            if (Z) {
                z = new lb(Kb, L, K, ab, I);
            }
            a.y(cb, U.Bb);
            a.O(y, "hidden");
            J = Pb();
            a.Bc(J, "#000");
            a.Kb(J, 0);
            a.Mb(sb, J, sb.firstChild);
            for (var ib = 0; ib < T.length; ib++) {
                var nc = T[ib], Ub = new oc(nc, ib);
                B.push(Ub)
            }
            a.E(Y);
            Ab = new qc;
            A = new ec(Ab, U);
            if (jc) {
                a.h(y, yb, lc);
                a.h(f, Bb, zb);
                fb && a.h(f, fb, zb)
            }
            Nb &= I ? 2 : 1;
            if (Gb && ob) {
                Tb = new ob.$Class(Gb, ob);
                R.push(Tb)
            }
            if (jb) {
                Eb = new jb.$Class(o, jb, i.$UISearchMode);
                R.push(Eb)
            }
            if (Cb && W) {
                W.$StartIndex = i.$StartIndex;
                Ib = new W.$Class(Cb, W);
                R.push(Ib)
            }
            a.b(R, function (a) {
                a.wc(t, B, Y);
                a.$On(p.Nb, ac)
            });
            a.h(o, "mouseout", Yb);
            a.h(o, "mouseover", Xb);
            tb();
            i.$ArrowKeyNavigation && a.h(f, "keydown", function (a) {
                if (a.keyCode == q.If) {
                    eb(-1);
                } else {
                    a.keyCode == q.Hf && eb(1)
                }
            });
            k.$SetScaleWidth(k.$GetOriginalWidth());
            A.Db(i.$StartIndex, i.$StartIndex, 0)
        }

        n.$EVT_CLICK = 21;
        n.$EVT_DRAG_START = 22;
        n.$EVT_DRAG_END = 23;
        n.$EVT_SWIPE_START = 24;
        n.$EVT_SWIPE_END = 25;
        n.$EVT_LOAD_START = 26;
        n.$EVT_LOAD_END = 27;
        n.$EVT_POSITION_CHANGE = 202;
        n.$EVT_PARK = 203;
        n.$EVT_SLIDESHOW_START = 206;
        n.$EVT_SLIDESHOW_END = 207;
        n.$EVT_PROGRESS_CHANGE = 208;
        n.$EVT_STATE_CHANGE = 209;
        n.$EVT_ROLLBACK_START = 210;
        n.$EVT_ROLLBACK_END = 211;
        g.$JssorSlider$ = r = n
    };
    var p = {Nb: 1};
    g.$JssorNavigator$ = function (e, B) {
        var g = this;
        m.call(g);
        e = a.T(e);
        var s, t, r, q, k = 0, f, l, j, x, y, i, h, o, n, A = [], z = [];

        function w(a) {
            a != -1 && z[a].Qc(a == k)
        }

        function u(a) {
            g.g(p.Nb, a * l)
        }

        g.$Elmt = e;
        g.lc = function (a) {
            if (a != q) {
                var d = k, c = b.floor(a / l);
                k = c;
                q = a;
                w(d);
                w(c)
            }
        };
        g.nc = function (b) {
            a.o(e, b)
        };
        var v;
        g.wc = function (E) {
            if (!v) {
                s = b.ceil(E / l);
                k = 0;
                var q = o + x, w = n + y, p = b.ceil(s / j) - 1;
                t = o + q * (!i ? p : j - 1);
                r = n + w * (i ? p : j - 1);
                a.V(e, t);
                a.S(e, r);
                f.$AutoCenter & 1 && a.s(e, (a.m(a.vb(e)) - t) / 2);
                f.$AutoCenter & 2 && a.r(e, (a.n(a.vb(e)) - r) / 2);
                for (var g = 0; g < s; g++) {
                    var D = a.df();
                    a.Df(D, g + 1);
                    var m = a.Pc(h, "NumberTemplate", D, c);
                    a.w(m, "absolute");
                    var B = g % (p + 1);
                    a.s(m, !i ? q * B : g % j * q);
                    a.r(m, i ? w * B : b.floor(g / (p + 1)) * w);
                    a.y(e, m);
                    A[g] = m;
                    f.$ActionMode & 1 && a.h(m, "click", a.x(d, u, g));
                    f.$ActionMode & 2 && a.h(m, "mouseover", a.x(d, u, g));
                    z[g] = a.Jb(m)
                }
                v = c
            }
        };
        g.Hb = f = a.f({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, B);
        h = a.v(e, "prototype");
        o = a.m(h);
        n = a.n(h);
        a.rb(e, h);
        l = f.$Steps || 1;
        j = f.$Lanes || 1;
        x = f.$SpacingX;
        y = f.$SpacingY;
        i = f.$Orientation - 1
    };
    g.$JssorDirectionNavigator$ = function (i, t, o) {
        var e = this;
        m.call(e);
        var b = a.v(i, "arrowleft", d, o), f = a.v(i, "arrowright", d, o), h, j, n = a.m(i), l = a.n(i), r = a.m(b), q = a.n(b);

        function k(a) {
            e.g(p.Nb, a, c)
        }

        e.lc = function (b, a, c) {
            if (c) {
                ;
            }
        };
        e.nc = function (c) {
            a.o(b, c);
            a.o(f, c)
        };
        var s;
        e.wc = function (c) {
            if (!s) {
                if (h.$AutoCenter & 1) {
                    a.s(b, (n - r) / 2);
                    a.s(f, (n - r) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.r(b, (l - q) / 2);
                    a.r(f, (l - q) / 2)
                }
                a.h(b, "click", a.x(d, k, -j));
                a.h(f, "click", a.x(d, k, j));
                a.Jb(b);
                a.Jb(f)
            }
        };
        e.Hb = h = a.f({$Steps: 1}, t);
        j = h.$Steps
    };
    g.$JssorThumbnailNavigator$ = function (i, A) {
        var h = this, x, l, d, u = [], y, w, f, n, o, t, s, k, q, g, j;
        m.call(h);
        i = a.T(i);
        function z(n, e) {
            var g = this, b, m, k;

            function o() {
                m.Qc(l == e)
            }

            function i() {
                if (!q.$LastDragSucceded()) {
                    var a = (f - e % f) % f, b = q.cd((e + a) / f), c = b * f - a;
                    h.g(p.Nb, c)
                }
            }

            g.U = e;
            g.wd = o;
            k = n.ke || n.Cb || a.Eb();
            g.Bb = b = a.Pc(j, "ThumbnailTemplate", k, c);
            m = a.Jb(b);
            d.$ActionMode & 1 && a.h(b, "click", i);
            d.$ActionMode & 2 && a.h(b, "mouseover", i)
        }

        h.lc = function (c, d, e) {
            var a = l;
            l = c;
            a != -1 && u[a].wd();
            u[c].wd();
            !e && q.$PlayTo(q.cd(b.floor(d / f)))
        };
        h.nc = function (b) {
            a.o(i, b)
        };
        var v;
        h.wc = function (F, D) {
            if (!v) {
                x = F;
                b.ceil(x / f);
                l = -1;
                k = b.min(k, D.length);
                var h = d.$Orientation & 1, p = t + (t + n) * (f - 1) * (1 - h), m = s + (s + o) * (f - 1) * h, C = p + (p + n) * (k - 1) * h, A = m
                    + (m + o) * (k - 1) * (1 - h);
                a.w(g, "absolute");
                a.O(g, "hidden");
                d.$AutoCenter & 1 && a.s(g, (y - C) / 2);
                d.$AutoCenter & 2 && a.r(g, (w - A) / 2);
                a.V(g, C);
                a.S(g, A);
                var j = [];
                a.b(D, function (l, e) {
                    var i = new z(l, e), d = i.Bb, c = b.floor(e / f), k = e % f;
                    a.s(d, (t + n) * k * (1 - h));
                    a.r(d, (s + o) * k * h);
                    if (!j[c]) {
                        j[c] = a.Eb();
                        a.y(g, j[c])
                    }
                    a.y(j[c], d);
                    u.push(i)
                });
                var E = a.f({$AutoPlay: e, $NaviQuitDrag: e, $SlideWidth: p, $SlideHeight: m, $SlideSpacing: n * h + o * (1
                    - h), $MinDragOffsetToSlide: 12, $SlideDuration: 200, $PauseOnHover: 3, $PlayOrientation: d.$Orientation, $DragOrientation: d.$DisableDrag
                    ? 0 : d.$Orientation}, d);
                q = new r(i, E);
                v = c
            }
        };
        h.Hb = d = a.f({$SpacingX: 3, $SpacingY: 3, $DisplayPieces: 1, $Orientation: 1, $AutoCenter: 3, $ActionMode: 1}, A);
        y = a.m(i);
        w = a.n(i);
        g = a.v(i, "slides");
        j = a.v(g, "prototype");
        a.rb(g, j);
        f = d.$Lanes || 1;
        n = d.$SpacingX;
        o = d.$SpacingY;
        t = a.m(j);
        s = a.n(j);
        k = d.$DisplayPieces
    };
    function s() {
        j.call(this, 0, 0);
        this.yc = a.pb
    }

    g.$JssorCaptionSlider$ = function (p, k, g) {
        var d = this, h, f = k.$CaptionTransitions, o = {xb: "t", $Delay: "d", $Duration: "du", $ScaleHorizontal: "x", $ScaleVertical: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", Y: "b"}, e = {A: function (b,
                                                                                                                                                                                                                a) {
            if (!isNaN(a.Z)) {
                b = a.Z;
            } else {
                b *= a.Pd;
            }
            return b
        }, $Opacity: function (b, a) {
            return this.A(b - 1, a)
        }};
        e.$Zoom = e.$Opacity;
        j.call(d, 0, 0);
        function m(r, n) {
            var l = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.b(o, function (g, h) {
                    var e = a.N(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t") {
                            f.Z = e;
                        } else if (e.indexOf("%") + 1) {
                            f.Pd = a.Rc(e) / 100;
                        } else {
                            f.Z = a.Rc(e);
                        }
                        b[h] = f
                    }
                });
                return b
            }

            function p() {
                return f[b.floor(b.random() * f.length)]
            }

            function d(g) {
                var h;
                if (g == "*") {
                    h = p();
                } else if (g) {
                    var e = f[a.ie(g)] || f[g];
                    if (a.Vb(e)) {
                        if (g != i) {
                            i = g;
                            c[g] = 0;
                            j[g] = e[b.floor(b.random() * e.length)]
                        } else {
                            c[g]++;
                        }
                        e = j[g];
                        if (a.Vb(e)) {
                            e = e.length && e[c[g] % e.length];
                            if (a.Vb(e)) {
                                e = e[b.floor(b.random() * e.length)]
                            }
                        }
                    }
                    h = e;
                    if (a.zd(h)) {
                        h = d(h)
                    }
                }
                return h
            }

            var q = a.db(r);
            a.b(q, function (b) {
                var c = [];
                c.$Elmt = b;
                var f = a.N(b, "u") == "caption";
                a.b(g ? [0, 3] : [2], function (o, p) {
                    if (f) {
                        var l, i;
                        if (o != 2 || !a.N(b, "t3")) {
                            i = h(b, o);
                            if (o == 2 && !i.xb) {
                                i.$Delay = i.$Delay || {Z: 0};
                                i = a.f(h(b, 0), i)
                            }
                        }
                        if (i && i.xb) {
                            l = d(i.xb.Z);
                            if (l) {
                                var j = a.f({$Delay: 0, $ScaleHorizontal: 1, $ScaleVertical: 1}, l);
                                a.b(i, function (c, a) {
                                    var b = (e[a] || e.A).apply(e, [j[a], i[a]]);
                                    if (!isNaN(b)) {
                                        j[a] = b
                                    }
                                });
                                if (!p) {
                                    if (i.Y) {
                                        j.Y = i.Y.Z || 0;
                                    } else if ((g ? k.$PlayInMode : k.$PlayOutMode) & 2) {
                                        j.Y = 0
                                    }
                                }
                            }
                        }
                        c.push(j)
                    }
                    if (n % 2 && !p) {
                        c.Id = m(b, n + 1)
                    }
                });
                l.push(c)
            });
            return l
        }

        function n(E, d, F) {
            var h = {$Easing: d.$Easing, $Round: d.$Round, $During: d.$During, $Reverse: g
                && !F, Ue: c}, k = E, y = a.vb(E), o = a.m(k), n = a.n(k), u = a.m(y), t = a.n(y), f = {}, l = {}, m = d.$ScaleClip || 1;
            if (d.$Opacity) {
                f.$Opacity = 2 - d.$Opacity;
            }
            h.kb = o;
            h.jb = n;
            if (d.$Zoom || d.$Rotate) {
                f.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                if (a.H() || a.lb()) {
                    f.$Zoom = b.min(f.$Zoom, 2);
                }
                l.$Zoom = 1;
                var s = d.$Rotate || 0;
                if (s == c) {
                    s = 1;
                }
                f.$Rotate = s * 360;
                l.$Rotate = 0
            } else if (d.$Clip) {
                var z = {$Top: 0, $Right: o, $Bottom: n, $Left: 0}, D = a.f({}, z), e = D.B = {}, C = d.$Clip & 4, v = d.$Clip & 8, A = d.$Clip
                    & 1, x = d.$Clip & 2;
                if (C && v) {
                    e.$Top = n / 2 * m;
                    e.$Bottom = -e.$Top
                } else if (C) {
                    e.$Bottom = -n * m;
                } else if (v) {
                    e.$Top = n * m;
                }
                if (A && x) {
                    e.$Left = o / 2 * m;
                    e.$Right = -e.$Left
                } else if (A) {
                    e.$Right = -o * m;
                } else if (x) {
                    e.$Left = o * m;
                }
                h.$Move = d.$Move;
                f.$Clip = D;
                l.$Clip = z
            }
            var p = d.$FlyDirection, q = 0, r = 0, w = d.$ScaleHorizontal, B = d.$ScaleVertical;
            if (i.od(p)) {
                q -= u * w;
            } else if (i.pd(p)) {
                q += u * w;
            }
            if (i.ad(p)) {
                r -= t * B;
            } else if (i.bd(p)) {
                r += t * B;
            }
            if (q || r || h.$Move) {
                f.$Left = q + a.Fc(k);
                f.$Top = r + a.Cc(k)
            }
            var G = d.$Duration;
            l = a.f(l, a.Te(k, f));
            h.Cd = a.cf();
            return new j(d.$Delay, G, h, k, l, f)
        }

        function l(b, c) {
            a.b(c, function (c) {
                var f, i = c.$Elmt, e = c[0], j = c[1];
                if (e) {
                    f = n(i, e);
                    b = f.yb(a.ec(e.Y) ? b : e.Y, 1)
                }
                b = l(b, c.Id);
                if (j) {
                    var g = n(i, j, 1);
                    g.yb(b, 1);
                    d.bb(g);
                    h.bb(g)
                }
                f && d.bb(f)
            });
            return b
        }

        d.yc = function () {
            d.F(d.W() * (g || 0));
            h.hc()
        };
        h = new j(0, 0);
        l(0, m(p, 1))
    }
})(window, document, Math, null, true, false)