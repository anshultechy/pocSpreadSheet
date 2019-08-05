/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { Tuple$2 } from "./Tuple$2";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
var GeometryUtil = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryUtil, _super);
    function GeometryUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeometryUtil.g = function (a) {
        if (isNaN_(a) || isInfinity(a)) {
            return a;
        }
        while (a > 360) {
            a -= 360;
        }
        while (a < 0) {
            a += 360;
        }
        return a;
    };
    GeometryUtil.c = function (a) {
        return Math.atan(a);
    };
    GeometryUtil.h = function (a, b) {
        return (b.y - a.y) / (b.x - a.x);
    };
    GeometryUtil.d = function (a) {
        return 1 - Math.pow(a.height / 2, 2) / Math.pow(a.width / 2, 2);
    };
    GeometryUtil.n = function (a, b, c, d, e) {
        var f = Math.cos(a);
        var g = Math.sin(a);
        var h = Math.sqrt(d * d / (1 - (b * Math.pow(f, 2))));
        h *= e;
        return { $type: Point_$type, x: h * f + c.x, y: h * g + c.y };
    };
    GeometryUtil.j = function (a, b, c, d, e) {
        var f;
        if (c) {
            f = GeometryUtil.k({ $type: Point_$type, x: a / 2, y: b / 2 }, d, e);
        }
        else {
            f = { $type: Point_$type, x: a / 2, y: b / 2 };
        }
        return f;
    };
    GeometryUtil.k = function (a, b, c) {
        b = b / 180 * Math.PI;
        var d = a.y + c * Math.sin(b);
        var e = a.x + c * Math.cos(b);
        return { $type: Point_$type, x: e, y: d };
    };
    GeometryUtil.m = function (a, b, c) {
        var d = b.x - a.x;
        var e = b.y - a.y;
        var f = Math.sqrt(d * d + e * e);
        d = d / f * c;
        e = e / f * c;
        return { $type: Point_$type, x: a.x + d, y: a.y + e };
    };
    GeometryUtil.f = function (a, b) {
        var c = Math.abs(b.x - a.x);
        var d = Math.abs(b.y - a.y);
        return Math.sqrt(c * c + d * d);
    };
    GeometryUtil.l = function (a, b, c, d, e) {
        return CoreGeometryUtil.b(a, b, c, d, e);
    };
    GeometryUtil.e = function (a, b) {
        var c = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
        var d = Math.acos((b.x - a.x) / c);
        if ((b.y - a.y) < 0) {
            d = (2 * Math.PI) - d;
        }
        return d;
    };
    GeometryUtil.i = function (a, b, c, d) {
        var e = a.x - c.x;
        var f = a.y - c.y;
        var g = b.x - c.x;
        var h = b.y - c.y;
        var i = g - e;
        var j = h - f;
        var k = Math.sqrt(i * i + j * j);
        var l = e * h - g * f;
        var m = d * d;
        var n = k * k;
        var o = l * l;
        var p = m * n - o;
        if (p < 0) {
            return new Tuple$2(Point_$type, Point_$type, { $type: Point_$type, x: NaN, y: NaN }, { $type: Point_$type, x: NaN, y: NaN });
        }
        var q = 1;
        if (j < 0) {
            q = -1;
        }
        var r = (l * j + q * i * Math.sqrt(p)) / n;
        var s = (l * j - q * i * Math.sqrt(p)) / n;
        var t = (-1 * l * i + Math.abs(j) * Math.sqrt(p)) / n;
        var u = (-1 * l * i - Math.abs(j) * Math.sqrt(p)) / n;
        return new Tuple$2(Point_$type, Point_$type, { $type: Point_$type, x: r + c.x, y: t + c.y }, { $type: Point_$type, x: s + c.x, y: u + c.y });
    };
    GeometryUtil.a = function (a, b, c, d) {
        var e = d * d;
        var f = b.x;
        var g = b.y;
        var h = c.x;
        var i = c.y;
        var j = a.x;
        var k = a.y;
        if (g == i) {
            var l = Math.abs(g - k) < d;
            var m = j >= Math.min(f, h) - d && j <= Math.max(f, h) + d;
            if (l && m) {
                return true;
            }
            else {
                return false;
            }
        }
        if (f == h) {
            var n = Math.abs(f - j) < d;
            var o = k >= Math.min(g, i) - d && k <= Math.max(g, i) + d;
            if (n && o) {
                return true;
            }
            else {
                return false;
            }
        }
        var p = h - f;
        var q = i - g;
        var r = p * p + q * q;
        if (r == 0) {
            return (j - f) * (j - f) + (k - g) * (k - g) < e;
        }
        var s = ((j - f) * p + (k - g) * q) / r;
        s = s < 0 ? 0 : (s > 1 ? 1 : s);
        var t = f + p * s;
        var u = g + q * s;
        var v = (t - j) * (t - j) + (u - k) * (u - k);
        if (v < e) {
            return true;
        }
        return false;
    };
    GeometryUtil.b = function (a, b, c, d) {
        var e;
        var f;
        var g = d * d;
        var h = c.count;
        if (h == 0) {
            return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < g;
        }
        var i = a.x;
        var j = a.y;
        for (var k = 0; k < h; k++) {
            if (k == 0) {
                f = c.item(k);
                e = b;
            }
            else {
                f = c.item(k);
                e = c.item(k - 1);
            }
            var l = e.x;
            var m = e.y;
            var n = f.x;
            var o = f.y;
            if (m == o) {
                var p = Math.abs(m - j) < d;
                var q = i >= Math.min(l, n) - d && i <= Math.max(l, n) + d;
                if (p && q) {
                    return true;
                }
                else {
                    continue;
                }
            }
            if (l == n) {
                var r = Math.abs(l - i) < d;
                var s = j >= Math.min(m, o) - d && j <= Math.max(m, o) + d;
                if (r && s) {
                    return true;
                }
                else {
                    continue;
                }
            }
            var t = n - l;
            var u = o - m;
            var v = t * t + u * u;
            if (v == 0) {
                return (i - l) * (i - l) + (j - m) * (j - m) < g;
            }
            var w = ((i - l) * t + (j - m) * u) / v;
            w = w < 0 ? 0 : (w > 1 ? 1 : w);
            var x = l + t * w;
            var y = m + u * w;
            var z = (x - i) * (x - i) + (y - j) * (y - j);
            if (z < g) {
                return true;
            }
        }
        return false;
    };
    GeometryUtil.$t = markType(GeometryUtil, 'GeometryUtil');
    return GeometryUtil;
}(Base));
export { GeometryUtil };
//# sourceMappingURL=GeometryUtil.js.map