/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Numeric } from "./Numeric";
import { Number_$type, markType } from "./type";
import { Random } from "./Random";
import { List$1 } from "./List$1";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
var LeastSquaresFit = /** @class */ (function (_super) {
    tslib_1.__extends(LeastSquaresFit, _super);
    function LeastSquaresFit() {
        return _super.call(this) || this;
    }
    LeastSquaresFit.aa = function () {
        return LeastSquaresFit.t() && LeastSquaresFit.u() && LeastSquaresFit.s() && LeastSquaresFit.w() && LeastSquaresFit.x() && LeastSquaresFit.r() && LeastSquaresFit.y() && LeastSquaresFit.z();
    };
    LeastSquaresFit.k = function (a, b, c) {
        var d = 0;
        var e = 0;
        var f = 0;
        var g = 0;
        var h = 0;
        for (var i = 0; i < a; ++i) {
            var j = b(i);
            var k = c(i);
            if (!isNaN_(j) && !isNaN_(k)) {
                d += k;
                e += j * j;
                f += j;
                g += j * k;
                ++h;
            }
        }
        if (h < 2) {
            return null;
        }
        var l = (d * e - f * g) / (h * e - f * f);
        var m = (h * g - f * d) / (h * e - f * f);
        return [l, m];
    };
    LeastSquaresFit.ad = function (a, b) {
        if (a.length != 2) {
            return NaN;
        }
        return a[0] + a[1] * b;
    };
    LeastSquaresFit.t = function () {
        var a = new Random(0);
        var b = new Array(2);
        for (var c = 0; c < b.length; ++c) {
            b[c] = 10 * a.nextDouble();
        }
        var d = new List$1(Number_$type, 0);
        var e = new List$1(Number_$type, 0);
        for (var f = -100; f < 100; ++f) {
            var g = f;
            var h = LeastSquaresFit.ad(b, g);
            if (!isNaN_(h)) {
                d.add(g);
                e.add(h);
            }
        }
        var i = LeastSquaresFit.k(d.count, function (j) { return d._inner[j]; }, function (j) { return e._inner[j]; });
        for (var j = 0; j < b.length; ++j) {
            if (Math.abs(b[j] - i[j]) > 0.0001) {
            }
        }
        return true;
    };
    LeastSquaresFit.l = function (a, b, c) {
        var d = 0;
        var e = 0;
        var f = 0;
        var g = 0;
        var h = 0;
        for (var i = 0; i < a; ++i) {
            var j = b(i);
            var k = c(i);
            if (!isNaN_(j) && !isNaN_(k) && j > 0) {
                var l = Math.log(j);
                d += k * l;
                e += k;
                f += l;
                g += l * l;
                ++h;
            }
        }
        if (h < 2) {
            return null;
        }
        var m = (h * d - e * f) / (h * g - f * f);
        var n = (e - m * f) / h;
        return [n, m];
    };
    LeastSquaresFit.ae = function (a, b) {
        if (a.length != 2 || b < 0 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        return a[0] + a[1] * Math.log(b);
    };
    LeastSquaresFit.u = function () {
        var a = new Random(0);
        var b = new Array(2);
        for (var c = 0; c < b.length; ++c) {
            b[c] = 10 * a.nextDouble();
        }
        var d = new List$1(Number_$type, 0);
        var e = new List$1(Number_$type, 0);
        for (var f = 1; f < 100; ++f) {
            var g = f;
            var h = LeastSquaresFit.ae(b, g);
            if (!isNaN_(h)) {
                d.add(g);
                e.add(h);
            }
        }
        var i = LeastSquaresFit.l(d.count, function (j) { return d._inner[j]; }, function (j) { return e._inner[j]; });
        for (var j = 0; j < b.length; ++j) {
            if (Math.abs(b[j] - i[j]) > 0.0001) {
            }
        }
        return true;
    };
    LeastSquaresFit.j = function (a, b, c) {
        var d = 0;
        var e = 0;
        var f = 0;
        var g = 0;
        var h = 0;
        var i = 0;
        for (var j = 0; j < a; ++j) {
            var k = b(j);
            var l = c(j);
            if (!isNaN_(k) && !isNaN_(l) && l > 0) {
                var m = Math.log(l);
                d += k * k * l;
                e += l * m;
                f += k * l;
                g += k * l * m;
                h += l;
                ++i;
            }
        }
        if (i < 2) {
            return null;
        }
        var n = (d * e - f * g) / (h * d - f * f);
        var o = (h * g - f * e) / (h * d - f * f);
        return [Math.exp(n), o];
    };
    LeastSquaresFit.ac = function (a, b) {
        if (a.length != 2 || b < 0 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        return a[0] * Math.exp(a[1] * b);
    };
    LeastSquaresFit.s = function () {
        var a = new Random(0);
        var b = new Array(2);
        for (var c = 0; c < b.length; ++c) {
            b[c] = 2 * a.nextDouble();
        }
        var d = new List$1(Number_$type, 0);
        var e = new List$1(Number_$type, 0);
        for (var f = 1; f < 100; ++f) {
            var g = f;
            var h = LeastSquaresFit.ac(b, g);
            if (!isNaN_(h)) {
                d.add(g);
                e.add(h);
            }
        }
        var i = LeastSquaresFit.j(d.count, function (j) { return d._inner[j]; }, function (j) { return e._inner[j]; });
        for (var j = 0; j < b.length; ++j) {
            if (Math.abs(b[j] - i[j]) > 0.0001) {
                return false;
            }
        }
        return true;
    };
    LeastSquaresFit.n = function (a, b, c) {
        var d = 0;
        var e = 0;
        var f = 0;
        var g = 0;
        var h = 0;
        for (var i = 0; i < a; ++i) {
            var j = b(i);
            var k = c(i);
            if (!isNaN_(j) && !isNaN_(k) && j > 0 && k > 0) {
                var l = Math.log(b(i));
                var m = Math.log(c(i));
                d += l * m;
                e += l;
                f += m;
                g += l * l;
                ++h;
            }
        }
        if (h < 2) {
            return null;
        }
        var n = (h * d - e * f) / (h * g - e * e);
        var o = Math.exp((f - n * e) / h);
        return [o, n];
    };
    LeastSquaresFit.ag = function (a, b) {
        if (a.length != 2 || b < 0 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        return a[0] * Math.pow(b, a[1]);
    };
    LeastSquaresFit.w = function () {
        var a = new Random(0);
        var b = new Array(2);
        for (var c = 0; c < b.length; ++c) {
            b[c] = 10 * a.nextDouble();
        }
        var d = new List$1(Number_$type, 0);
        var e = new List$1(Number_$type, 0);
        for (var f = -100; f < 100; ++f) {
            d.add(f);
            e.add(LeastSquaresFit.ag(b, f));
        }
        var g = LeastSquaresFit.n(d.count, function (h) { return d._inner[h]; }, function (h) { return e._inner[h]; });
        for (var h = 0; h < b.length; ++h) {
            if (Math.abs(b[h] - g[h]) > 0.0001) {
                return false;
            }
        }
        return true;
    };
    LeastSquaresFit.o = function (a, b, c) {
        return LeastSquaresFit.m(a, 2, b, c);
    };
    LeastSquaresFit.ah = function (a, b) {
        return LeastSquaresFit.af(a, b);
    };
    LeastSquaresFit.x = function () {
        return LeastSquaresFit.v(2);
    };
    LeastSquaresFit.i = function (a, b, c) {
        return LeastSquaresFit.m(a, 3, b, c);
    };
    LeastSquaresFit.ab = function (a, b) {
        return LeastSquaresFit.af(a, b);
    };
    LeastSquaresFit.r = function () {
        return LeastSquaresFit.v(3);
    };
    LeastSquaresFit.p = function (a, b, c) {
        return LeastSquaresFit.m(a, 4, b, c);
    };
    LeastSquaresFit.ai = function (a, b) {
        return LeastSquaresFit.af(a, b);
    };
    LeastSquaresFit.y = function () {
        return LeastSquaresFit.v(4);
    };
    LeastSquaresFit.q = function (a, b, c) {
        return LeastSquaresFit.m(a, 5, b, c);
    };
    LeastSquaresFit.aj = function (a, b) {
        return LeastSquaresFit.af(a, b);
    };
    LeastSquaresFit.z = function () {
        return LeastSquaresFit.v(5);
    };
    LeastSquaresFit.m = function (a, b, c, d) {
        var e = new Array(1 + 2 * b);
        for (var f = 0; f < e.length; f++) {
            e[f] = 0;
        }
        var g = ((function () {
            var $firstRank;
            var $ret = new Array($firstRank = b + 1);
            var $currRet = $ret;
            for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(b + 1);
            }
            return $ret;
        })());
        var h = new Array(b + 1);
        for (var i = 0; i < h.length; i++) {
            h[i] = 0;
        }
        var j = 0;
        for (var k = 0; k < a; ++k) {
            var l = 1;
            var m = c(k);
            if (!isNaN_(m) && !isNaN_(d(k))) {
                for (var n = 0; n < e.length; ++n) {
                    e[n] += l;
                    l *= m;
                    ++j;
                }
            }
        }
        if (j < b) {
            return null;
        }
        for (var o = 0; o <= b; ++o) {
            for (var p = 0; p <= b; ++p) {
                g[o][p] = e[o + p];
            }
        }
        for (var q = 0; q < a; ++q) {
            var r = c(q);
            var s = d(q);
            if (!isNaN_(r) && !isNaN_(s)) {
                for (var t = 0; t <= b; ++t) {
                    h[t] += (Math.pow(r, t) * s);
                }
            }
        }
        return Numeric.d(g, h) ? h : null;
    };
    LeastSquaresFit.af = function (a, b) {
        if (a.length < 1 || isInfinity(b) || isNaN_(b)) {
            return NaN;
        }
        var c = 0;
        for (var d = 0; d < a.length; ++d) {
            c += a[d] * Math.pow(b, d);
        }
        return c;
    };
    LeastSquaresFit.v = function (a) {
        var b = new Random(0);
        var c = new Array(a + 1);
        for (var d = 0; d < c.length; ++d) {
            c[d] = 2 * b.nextDouble();
        }
        var e = new List$1(Number_$type, 0);
        var f = new List$1(Number_$type, 0);
        for (var g = -100; g < 100; ++g) {
            var h = g;
            var i = LeastSquaresFit.af(c, h);
            if (!isNaN_(i)) {
                e.add(h);
                f.add(i);
            }
        }
        var j = LeastSquaresFit.m(e.count, a, function (k) { return e._inner[k]; }, function (k) { return f._inner[k]; });
        for (var k = 0; k < a; ++k) {
            if (Math.abs(c[k] - j[k]) > 0.0001) {
                return false;
            }
        }
        return true;
    };
    LeastSquaresFit.$t = markType(LeastSquaresFit, 'LeastSquaresFit', Numeric.$);
    return LeastSquaresFit;
}(Numeric));
export { LeastSquaresFit };
//# sourceMappingURL=LeastSquaresFit.js.map