/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { PathFigureCollection } from "./PathFigureCollection";
import { PathFigure } from "./PathFigure";
import { PolyBezierSegment } from "./PolyBezierSegment";
import { LineSegment } from "./LineSegment";
import { MathUtil } from "./MathUtil";
import { arrayGetLength } from "./array";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var Numeric = /** @class */ (function (_super) {
    tslib_1.__extends(Numeric, _super);
    function Numeric() {
        return _super.call(this) || this;
    }
    Numeric.e = function (a, b, c, d, e) {
        var f;
        var g = a.count;
        var h = new Array(g);
        if (b._inner[0] == 0) {
            return false;
        }
        var i = b._inner[0];
        e._inner[0] = d._inner[0] / (i);
        for (f = 1; f < g; f++) {
            h[f] = c._inner[f - 1] / i;
            i = b._inner[f] - a._inner[f] * h[f];
            if (i == 0) {
                return false;
            }
            e._inner[f] = (d._inner[f] - a._inner[f] * e._inner[f - 1]) / i;
        }
        for (f = (g - 2); f >= 0; f--) {
            e._inner[f] -= h[f + 1] * e._inner[f + 1];
        }
        return true;
    };
    Numeric.d = function (a, b) {
        var c = arrayGetLength(a, 0);
        var d = new Array(c);
        var e = new Array(c);
        var f = new Array(c);
        for (var g = 0; g < c; g++) {
            f[g] = 0;
        }
        for (var h = 0; h < c; h++) {
            var i = 0;
            var j = 0;
            var k = 0;
            for (var l = 0; l < c; l++) {
                if (f[l] != 1) {
                    for (var m = 0; m < c; m++) {
                        if (f[m] == 0) {
                            if (Math.abs(a[l][m]) >= i) {
                                i = Math.abs(a[l][m]);
                                j = l;
                                k = m;
                            }
                        }
                    }
                }
            }
            ++(f[k]);
            if (j != k) {
                for (var n = 0; n < c; n++) {
                    var o = a[j][n];
                    a[j][n] = a[k][n];
                    a[k][n] = o;
                }
                {
                    var p = b[j];
                    b[j] = b[k];
                    b[k] = p;
                }
            }
            e[h] = j;
            d[h] = k;
            if (a[k][k] == 0) {
                return false;
            }
            var q = 1 / a[k][k];
            a[k][k] = 1;
            for (var r = 0; r < c; r++) {
                a[k][r] *= q;
            }
            b[k] *= q;
            for (var s = 0; s < c; s++) {
                if (s != k) {
                    var t = a[s][k];
                    a[s][k] = 0;
                    for (var u = 0; u < c; u++) {
                        a[s][u] -= a[k][u] * t;
                    }
                    b[s] -= b[k] * t;
                }
            }
        }
        for (var v = c - 1; v >= 0; v--) {
            if (e[v] != d[v]) {
                for (var w = 0; w < c; w++) {
                    var x = a[w][e[v]];
                    a[w][e[v]] = a[w][d[v]];
                    a[w][d[v]] = x;
                }
            }
        }
        return true;
    };
    Numeric.c = function (a, b, c, d, e) {
        var f = new List$1(Number_$type, 0);
        for (var g = 0; g < a; ++g) {
            while (g < a && (isNaN_(b(g)) || isNaN_(c(g)))) {
                f.add(NaN);
                ++g;
            }
            var h = g;
            while (g < a && !isNaN_(b(g)) && !isNaN_(c(g))) {
                ++g;
            }
            --g;
            if (g - h > 0) {
                f.o(Numeric.b(h, g - h + 1, b, c, d, e));
            }
            else {
                for (; h <= g; ++h) {
                    f.add(NaN);
                }
            }
        }
        return f.toArray();
    };
    Numeric.b = function (a, b, c, d, e, f) {
        return Numeric.a(b, function (g) { return c(g + a); }, function (g) { return d(g + a); }, e, f);
    };
    Numeric.a = function (a, b, c, d, e) {
        var f = new Array(a - 1);
        var g = new Array(a);
        g[0] = isNaN_(d) ? 0 : -0.5;
        f[0] = isNaN_(d) ? 0 : (3 / (b(1) - b(0))) * ((c(1) - c(0)) / (b(1) - b(0)) - d);
        for (var h = 1; h < a - 1; h++) {
            var i = (b(h) - b(h - 1)) / (b(h + 1) - b(h - 1));
            var j = i * g[h - 1] + 2;
            g[h] = (i - 1) / j;
            f[h] = (c(h + 1) - c(h)) / (b(h + 1) - b(h)) - (c(h) - c(h - 1)) / (b(h) - b(h - 1));
            f[h] = (6 * f[h] / (b(h + 1) - b(h - 1)) - i * f[h - 1]) / j;
        }
        var k = isNaN_(e) ? 0 : 0.5;
        var l = isNaN_(e) ? 0 : (3 / (b(a - 1) - b(a - 2))) * (e - (c(a - 1) - c(a - 2)) / (b(a - 1) - b(a - 2)));
        g[a - 1] = (l - k * f[a - 2]) / (k * g[a - 2] + 1);
        for (var m = a - 2; m >= 0; m--) {
            g[m] = g[m] * g[m + 1] + f[m];
        }
        return g;
    };
    Numeric.prototype.f = function (a, b, c, d, e, f, g) {
        var h = d - b;
        var i = (d - a) / h;
        var j = (a - b) / h;
        return i * c + j * e + ((i * i * i - i) * f + (j * j * j - j) * g) * (h * h) / 6;
    };
    Numeric.h = function (a, b, c, d) {
        var e = new PathFigureCollection();
        var f = 0;
        var g = -1;
        var h = NaN;
        var i = NaN;
        for (var j = 0; j < a; j++) {
            h = b(j);
            i = c(j);
            if (isNaN_(h) || isNaN_(i)) {
                g = j - 1;
                if (g - f > 0) {
                    e.add(Numeric.g(f, g, b, c, d));
                }
                f = j + 1;
            }
        }
        if (!isNaN_(h) && !isNaN_(i)) {
            g = a - 1;
        }
        if (g - f > 0) {
            e.add(Numeric.g(f, g, b, c, d));
        }
        return e;
    };
    Numeric.g = function (a, b, c, d, e) {
        e = 0.5 * MathUtil.b(isNaN_(e) ? 0.5 : e, 0, 1);
        var f = new PathFigure();
        var g = b - a + 1;
        if (g < 2) {
            return f;
        }
        if (g == 2) {
            f._startPoint = { $type: Point_$type, x: c(a), y: d(a) };
            var h = ((function () {
                var $ret = new LineSegment(1);
                $ret.c = { $type: Point_$type, x: c(a + 1), y: d(a + 1) };
                return $ret;
            })());
            f._segments.add(h);
            return f;
        }
        var i = new PolyBezierSegment();
        var j = c(a);
        var k = d(a);
        var l = c(a + 1);
        var m = d(a + 1);
        while (l == j && m == k && a + 1 <= b) {
            a++;
            l = c(a + 1);
            m = d(a + 1);
        }
        var n = l - j;
        var o = m - k;
        var p = Math.sqrt(n * n + o * o);
        for (var q = a + 1; q < b; ++q) {
            var r = c(q);
            var s = d(q);
            if (r == j && s == k) {
                continue;
            }
            var t = c(q + 1) - c(q - 1);
            var u = d(q + 1) - d(q - 1);
            var v = t * t + u * u;
            if (v < 0.01) {
                t = -(d(q + 1) - d(q));
                u = c(q + 1) - c(q);
                v = t * t + u * u;
            }
            v = Math.sqrt(v);
            var w = e * Math.sqrt((r - j) * (r - j) + (s - k) * (s - k));
            if (v > 0.01) {
                i.b.add({ $type: Point_$type, x: j + n * w / p, y: k + o * w / p });
                i.b.add({ $type: Point_$type, x: r - t * w / v, y: s - u * w / v });
                i.b.add({ $type: Point_$type, x: r, y: s });
                j = r;
                k = s;
                n = t;
                o = u;
                p = v;
            }
        }
        {
            var x = b;
            var y = c(x);
            var z = d(x);
            if (!(y == j && z == k)) {
                var aa = c(x) - c(x - 1);
                var ab = d(x) - d(x - 1);
                var ac = aa * aa + ab * ab;
                var ad = e * Math.sqrt((y - j) * (y - j) + (z - k) * (z - k));
                i.b.add({ $type: Point_$type, x: j + n * ad / p, y: k + o * ad / p });
                i.b.add({ $type: Point_$type, x: y - aa * ad / ac, y: z - ab * ad / ac });
                i.b.add({ $type: Point_$type, x: y, y: z });
            }
        }
        f._startPoint = { $type: Point_$type, x: c(a), y: d(a) };
        f._segments.add(i);
        return f;
    };
    Numeric.$t = markType(Numeric, 'Numeric');
    return Numeric;
}(Base));
export { Numeric };
//# sourceMappingURL=Numeric.js.map