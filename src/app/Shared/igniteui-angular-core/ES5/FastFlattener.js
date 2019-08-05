/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { FlattenerSettings } from "./FlattenerSettings";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var FastFlattener = /** @class */ (function (_super) {
    tslib_1.__extends(FastFlattener, _super);
    function FastFlattener() {
        return _super.call(this) || this;
    }
    FastFlattener.e = function (a, b, c, d, e, f) {
        if (d > e) {
            return a;
        }
        var g = b[d];
        var h = c[d];
        while ((isNaN_(g) || isNaN_(h)) && d < e) {
            ++d;
            g = b[d];
            h = c[d];
        }
        var i = b[e];
        var j = c[e];
        while ((isNaN_(i) || isNaN_(j)) && d < e) {
            --e;
            i = b[e];
            j = c[e];
        }
        if (d == e) {
            a.add(d);
            return a;
        }
        a.add(d);
        FastFlattener.h(a, b, c, d, e, f);
        a.add(e);
        return a;
    };
    FastFlattener.c = function (a, b, c, d, e) {
        var f;
        var g;
        if (c) {
            f = 0;
            g = 1;
        }
        else if (d) {
            f = 0;
            g = 2;
        }
        else {
            f = 2;
            g = 3;
        }
        return FastFlattener.d(a, b, f, g, e);
    };
    FastFlattener.b = function (a, b, c, d, e) {
        var f = new List$1(Number_$type, 0);
        var g = FastFlattener.a(f, b, c, d, 0, a - 1, e);
        return g;
    };
    FastFlattener.d = function (a, b, c, d, e) {
        var f = new List$1(Number_$type, 0);
        FastFlattener.g(f, b, c, d, 0, a - 1, e);
        return f;
    };
    FastFlattener.a = function (a, b, c, d, e, f, g) {
        var h = FlattenerSettings.instance.chunkingAmount;
        if ((f - e + 1) <= h) {
            return FastFlattener.f(a, b, c, d, e, f, g);
        }
        var i = a;
        if (h < 0) {
            for (var j = e; j <= f; j++) {
                i.add(j);
            }
            return i;
        }
        var k = e;
        var l = f;
        var m = l - k + 1;
        while (m > 0) {
            if (m <= h) {
                FastFlattener.f(i, b, c, d, k, l, g);
                k = l + 1;
            }
            else {
                var n = k + h - 1;
                FastFlattener.f(i, b, c, d, k, n, g);
                k = n + 1;
            }
            m = l - k + 1;
        }
        return i;
    };
    FastFlattener.f = function (a, b, c, d, e, f, g) {
        var h;
        var i;
        if (c) {
            h = 0;
            i = 1;
        }
        else if (d) {
            h = 0;
            i = 2;
        }
        else {
            h = 2;
            i = 3;
        }
        return FastFlattener.g(a, b, h, i, e, f, g);
    };
    FastFlattener.g = function (a, b, c, d, e, f, g) {
        if (e > f) {
            return a;
        }
        var h = b._inner[e];
        var i, j;
        i = h[c];
        j = h[d];
        while ((isNaN_(i) || isNaN_(j)) && e < f) {
            ++e;
            h = b._inner[e];
            i = h[c];
            j = h[d];
        }
        var k = b._inner[f];
        var l, m;
        l = k[c];
        m = k[d];
        while ((isNaN_(l) || isNaN_(m)) && e < f) {
            --f;
            k = b._inner[f];
            l = k[c];
            m = k[d];
        }
        if (e == f) {
            a.add(e);
            return a;
        }
        a.add(e);
        FastFlattener.i(a, b, c, d, e, f, g);
        a.add(f);
        return a;
    };
    FastFlattener.h = function (a, b, c, d, e, f) {
        var g = b[d];
        var h = c[d];
        while ((isNaN_(g) || isNaN_(h)) && d < e) {
            ++d;
            g = b[d];
            h = c[d];
        }
        var i = b[e];
        var j = c[e];
        while ((isNaN_(i) || isNaN_(j)) && d < e) {
            --e;
            i = b[e];
            j = c[e];
        }
        if (d + 1 >= e) {
            return;
        }
        var k = -1;
        var l = f * f;
        var m;
        var n;
        m = i - g;
        n = j - h;
        var o = m * m + n * n;
        if (o == 0) {
            for (var p = d + 1; p < e; ++p) {
                var q = b[p];
                var r = c[p];
                if (isNaN_(q) || isNaN_(r)) {
                    continue;
                }
                m = i - q;
                n = j - r;
                var s = m * m + n * n;
                if (s >= l) {
                    l = s;
                    k = p;
                }
            }
        }
        else {
            var t = i - g;
            var u = j - h;
            for (var v = d + 1; v < e; ++v) {
                var w = b[v];
                var x = c[v];
                if (isNaN_(w) || isNaN_(x)) {
                    continue;
                }
                var y = NaN;
                var z = b[v] - g;
                var aa = c[v] - h;
                var ab = t * z + u * aa;
                if (ab <= 0) {
                    m = g - w;
                    n = h - x;
                    y = m * m + n * n;
                }
                else {
                    var ac = t * t + u * u;
                    if (ac <= ab) {
                        m = i - w;
                        n = j - x;
                        y = m * m + n * n;
                    }
                    else {
                        var ad = ab / ac;
                        m = g + ad * t - w;
                        n = h + ad * u - x;
                        y = m * m + n * n;
                    }
                }
                if (y >= l) {
                    l = y;
                    k = v;
                }
            }
        }
        if (k != -1) {
            FastFlattener.h(a, b, c, d, k, f);
            a.add(k);
            FastFlattener.h(a, b, c, k, e, f);
        }
        return;
    };
    FastFlattener.i = function (a, b, c, d, e, f, g) {
        var h = b._inner[e];
        var i, j;
        i = h[c];
        j = h[d];
        while ((i != i) || (j != j) && e < f) {
            ++e;
            h = b._inner[e];
            i = h[c];
            j = h[d];
        }
        var k = b._inner[f];
        var l, m;
        l = k[c];
        m = k[d];
        while ((l != l) || (m != m) && e < f) {
            --f;
            k = b._inner[f];
            l = k[c];
            m = k[d];
        }
        if (e + 1 >= f) {
            return;
        }
        var n = -1;
        var o = g * g;
        var p;
        var q;
        p = l - i;
        q = m - j;
        var r = p * p + q * q;
        if (r == 0) {
            for (var s = e + 1; s < f; ++s) {
                var t = b._inner[s];
                var u = void 0, v = void 0;
                u = t[c];
                v = t[d];
                if ((u != u) || (v != v)) {
                    continue;
                }
                p = l - u;
                q = m - v;
                var w = p * p + q * q;
                if (w >= o) {
                    o = w;
                    n = s;
                }
            }
        }
        else {
            var x = l - i;
            var y = m - j;
            for (var z = e + 1; z < f; ++z) {
                var aa = b._inner[z];
                var ab = void 0, ac = void 0;
                ab = aa[c];
                ac = aa[d];
                if ((ab != ab) || (ac != ac)) {
                    continue;
                }
                var ad = NaN;
                var ae = ab - i;
                var af = ac - j;
                var ag = x * ae + y * af;
                if (ag <= 0) {
                    p = i - ab;
                    q = j - ac;
                    ad = p * p + q * q;
                }
                else {
                    var ah = x * x + y * y;
                    if (ah <= ag) {
                        p = l - ab;
                        q = m - ac;
                        ad = p * p + q * q;
                    }
                    else {
                        var ai = ag / ah;
                        p = i + ai * x - ab;
                        q = j + ai * y - ac;
                        ad = p * p + q * q;
                    }
                }
                if (ad >= o) {
                    o = ad;
                    n = z;
                }
            }
        }
        if (n != -1) {
            FastFlattener.i(a, b, c, d, e, n, g);
            a.add(n);
            FastFlattener.i(a, b, c, d, n, f, g);
        }
        return;
    };
    FastFlattener.$t = markType(FastFlattener, 'FastFlattener');
    return FastFlattener;
}(Base));
export { FastFlattener };
//# sourceMappingURL=FastFlattener.js.map