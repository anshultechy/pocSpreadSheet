/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { Rect } from "./Rect";
import { Size } from "./Size";
import { List$1 } from "./List$1";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { MathUtil } from "./MathUtil";
/**
 * @hidden
 */
var RectUtil = /** @class */ (function (_super) {
    tslib_1.__extends(RectUtil, _super);
    function RectUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectUtil.l = function (a) {
        if (a.isEmpty) {
            return { $type: Point_$type, x: NaN, y: NaN };
        }
        return { $type: Point_$type, x: 0.5 * (a.left + a.right), y: 0.5 * (a.bottom + a.top) };
    };
    RectUtil.e = function (a) {
        if (a.isEmpty) {
            return 0;
        }
        return a.width * a.height;
    };
    RectUtil.p = function (a) {
        if (a.isEmpty) {
            return a;
        }
        return new Rect(0, a.left, a.top, a.width, a.height);
    };
    RectUtil.m = function (a, b) {
        if (a.containsPoint(b)) {
            return b;
        }
        var c = { $type: Point_$type, x: a.left + 0.5 * a.width, y: a.top + 0.5 * a.height };
        var d = { $type: Point_$type, x: b.x - c.x, y: b.y - c.y };
        var e;
        if (d.x != 0) {
            e = (a.left - c.x) / d.x;
            var f = c.y + e * d.y;
            if (f > a.top && f < a.bottom) {
                return e > 0 ? { $type: Point_$type, x: a.left, y: f } : { $type: Point_$type, x: a.right, y: c.y - e * d.y };
            }
        }
        e = (a.top - c.y) / d.y;
        var g = c.x + e * d.x;
        return e > 0 ? { $type: Point_$type, x: g, y: a.top } : { $type: Point_$type, x: c.x - e * d.x, y: a.bottom };
    };
    RectUtil.g = function (a, b) {
        if (a.isEmpty) {
            return NaN;
        }
        return RectUtil.f(a, b.x, b.y);
    };
    RectUtil.h = function (a, b) {
        if (a.isEmpty) {
            return Number.POSITIVE_INFINITY;
        }
        var c = RectUtil.f(a, b.left, b.top);
        if (c > 0) {
            c = Math.min(c, RectUtil.f(a, b.left, b.bottom));
        }
        if (c > 0) {
            c = Math.min(c, RectUtil.f(a, b.right, b.bottom));
        }
        if (c > 0) {
            c = Math.min(c, RectUtil.f(a, b.right, b.top));
        }
        if (c > 0) {
            c = Math.min(c, RectUtil.f(b, a.left, a.top));
        }
        if (c > 0) {
            c = Math.min(c, RectUtil.f(b, a.left, a.bottom));
        }
        if (c > 0) {
            c = Math.min(c, RectUtil.f(b, a.right, a.bottom));
        }
        if (c > 0) {
            c = Math.min(c, RectUtil.f(b, a.right, a.top));
        }
        return c;
    };
    RectUtil.f = function (a, b, c) {
        var d = b - a.left;
        var e = c - a.top;
        var f = a.width * d;
        var g = a.height * e;
        if (f > 0) {
            var h = a.width * a.width;
            if (f < h) {
                d -= (f / h) * a.width;
            }
            else {
                d -= a.width;
            }
        }
        if (g > 0) {
            var i = a.height * a.height;
            if (g < i) {
                e -= (g / i) * a.height;
            }
            else {
                e -= a.height;
            }
        }
        return d * d + e * e;
    };
    RectUtil.a = function (a, b) {
        if (a.isEmpty || b.isEmpty) {
            return false;
        }
        if (a.left > b.left) {
            return false;
        }
        if (a.right < b.right) {
            return false;
        }
        if (a.top > b.top) {
            return false;
        }
        if (a.bottom < b.bottom) {
            return false;
        }
        return true;
    };
    RectUtil.b = function (a, b) {
        if (a.isEmpty || b.isEmpty) {
            return false;
        }
        if (a.right < b.left) {
            return false;
        }
        if (a.left > b.right) {
            return false;
        }
        if (a.top > b.bottom) {
            return false;
        }
        if (a.bottom < b.top) {
            return false;
        }
        return true;
    };
    RectUtil.i = function (a, b) {
        if (a.isEmpty || b.isEmpty) {
            return 0;
        }
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        if (c <= 0) {
            return 0;
        }
        var d = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (d <= 0) {
            return 0;
        }
        return c * d;
    };
    RectUtil.q = function (a, b, c) {
        if (a.isEmpty) {
            return a;
        }
        return new Rect(0, a.x - b, a.y - c, Math.max(0, a.width + 2 * b), Math.max(0, a.height + 2 * c));
    };
    RectUtil.t = function (a, b, c) {
        a.x = a.x - b;
        a.y = a.y - c;
        var d = a.width + 2 * b;
        var e = a.height + 2 * c;
        a.width = d > 1 ? d : 1;
        a.height = e > 1 ? e : 1;
        return a;
    };
    RectUtil.s = function (a, b, c) {
        a.x = a.x - b;
        a.y = a.y - c;
        var d = a.width + 2 * b;
        var e = a.height + 2 * c;
        a.width = d > 1 ? d : 1;
        a.height = e > 1 ? e : 1;
        return a;
    };
    RectUtil.r = function (a, b) {
        var c = a.x - b;
        var d = a.y - b;
        var e = a.width + b + b;
        var f = a.height + b + b;
        var g = e > 0 ? e : 0;
        var h = f > 0 ? f : 0;
        return new Rect(0, c, d, g, h);
    };
    RectUtil.y = function (a) {
        a.x = Math.round(a.x);
        a.y = Math.round(a.y);
        a.width = Math.round(a.width);
        a.height = Math.round(a.height);
        return a;
    };
    RectUtil.c = function (a) {
        return a.x == 0 && a.y == 0 && a.width == 0 && a.height == 0;
    };
    RectUtil.z = function (a) {
        var b = new Size(1, a.width, a.height);
        return b;
    };
    RectUtil.u = function (a, b) {
        var c = RectUtil.v(a, RectUtil.z(b));
        return c;
    };
    RectUtil.v = function (a, b) {
        var c = a;
        c.x = a.x / b.width;
        c.y = a.y / b.height;
        c.width = a.width / b.width;
        c.height = a.height / b.height;
        return c;
    };
    RectUtil.n = function (a) {
        var b = { $type: Point_$type, x: a.x, y: a.y };
        return b;
    };
    RectUtil.o = function (a) {
        var b = { $type: Point_$type, x: a.x + a.width, y: a.y };
        return b;
    };
    RectUtil.j = function (a) {
        var b = { $type: Point_$type, x: a.x, y: a.y + a.height };
        return b;
    };
    RectUtil.k = function (a) {
        var b = { $type: Point_$type, x: a.x + a.width, y: a.y + a.height };
        return b;
    };
    RectUtil.d = function (a) {
        var b = ((function () {
            var $ret = new List$1(Point_$type, 0);
            $ret.add(RectUtil.n(a));
            $ret.add(RectUtil.o(a));
            $ret.add(RectUtil.k(a));
            $ret.add(RectUtil.j(a));
            return $ret;
        })());
        return b;
    };
    RectUtil.w = function (a, b) {
        b = CoreGeometryUtil.a(b);
        if (b == 0 || b == 180) {
            return new Rect(0, a.left, a.top, a.width, a.height);
        }
        var c = RectUtil.l(a);
        if (b == 90 || b == 270) {
            var d = a.height / 2;
            var e = a.width / 2;
            return new Rect(0, c.x - d, c.y - e, a.height, a.width);
        }
        return RectUtil.x(a, c.x, c.y, b);
    };
    RectUtil.x = function (a, b, c, d) {
        var e = RectUtil.d(a);
        var f = MathUtil.k(d);
        var g = Math.cos(f);
        var h = Math.sin(f);
        var i = 1.7976931348623157E+308;
        var j = 1.7976931348623157E+308;
        var k = -1.7976931348623157E+308;
        var l = -1.7976931348623157E+308;
        var m;
        for (var n = 0; n < e.count; n++) {
            m = e._inner[n];
            var o = (g * (m.x - b) - h * (m.y - c) + b);
            var p = (h * (m.x - b) + g * (m.y - c) + c);
            i = Math.min(i, p);
            j = Math.min(j, o);
            k = Math.max(k, o);
            l = Math.max(l, p);
        }
        var q = new Rect(0, j, i, k - j, l - i);
        return q;
    };
    RectUtil.$t = markType(RectUtil, 'RectUtil');
    return RectUtil;
}(Base));
export { RectUtil };
//# sourceMappingURL=RectUtil.js.map