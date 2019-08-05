/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, markType } from "./type";
import { Rect } from "./Rect";
import { Size } from "./Size";
import { List$1 } from "./List$1";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { MathUtil } from "./MathUtil";
/**
 * @hidden
 */
export class RectUtil extends Base {
    static l(a) {
        if (a.isEmpty) {
            return { $type: Point_$type, x: NaN, y: NaN };
        }
        return { $type: Point_$type, x: 0.5 * (a.left + a.right), y: 0.5 * (a.bottom + a.top) };
    }
    static e(a) {
        if (a.isEmpty) {
            return 0;
        }
        return a.width * a.height;
    }
    static p(a) {
        if (a.isEmpty) {
            return a;
        }
        return new Rect(0, a.left, a.top, a.width, a.height);
    }
    static m(a, b) {
        if (a.containsPoint(b)) {
            return b;
        }
        let c = { $type: Point_$type, x: a.left + 0.5 * a.width, y: a.top + 0.5 * a.height };
        let d = { $type: Point_$type, x: b.x - c.x, y: b.y - c.y };
        let e;
        if (d.x != 0) {
            e = (a.left - c.x) / d.x;
            let f = c.y + e * d.y;
            if (f > a.top && f < a.bottom) {
                return e > 0 ? { $type: Point_$type, x: a.left, y: f } : { $type: Point_$type, x: a.right, y: c.y - e * d.y };
            }
        }
        e = (a.top - c.y) / d.y;
        let g = c.x + e * d.x;
        return e > 0 ? { $type: Point_$type, x: g, y: a.top } : { $type: Point_$type, x: c.x - e * d.x, y: a.bottom };
    }
    static g(a, b) {
        if (a.isEmpty) {
            return NaN;
        }
        return RectUtil.f(a, b.x, b.y);
    }
    static h(a, b) {
        if (a.isEmpty) {
            return Number.POSITIVE_INFINITY;
        }
        let c = RectUtil.f(a, b.left, b.top);
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
    }
    static f(a, b, c) {
        let d = b - a.left;
        let e = c - a.top;
        let f = a.width * d;
        let g = a.height * e;
        if (f > 0) {
            let h = a.width * a.width;
            if (f < h) {
                d -= (f / h) * a.width;
            }
            else {
                d -= a.width;
            }
        }
        if (g > 0) {
            let i = a.height * a.height;
            if (g < i) {
                e -= (g / i) * a.height;
            }
            else {
                e -= a.height;
            }
        }
        return d * d + e * e;
    }
    static a(a, b) {
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
    }
    static b(a, b) {
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
    }
    static i(a, b) {
        if (a.isEmpty || b.isEmpty) {
            return 0;
        }
        let c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        if (c <= 0) {
            return 0;
        }
        let d = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (d <= 0) {
            return 0;
        }
        return c * d;
    }
    static q(a, b, c) {
        if (a.isEmpty) {
            return a;
        }
        return new Rect(0, a.x - b, a.y - c, Math.max(0, a.width + 2 * b), Math.max(0, a.height + 2 * c));
    }
    static t(a, b, c) {
        a.x = a.x - b;
        a.y = a.y - c;
        let d = a.width + 2 * b;
        let e = a.height + 2 * c;
        a.width = d > 1 ? d : 1;
        a.height = e > 1 ? e : 1;
        return a;
    }
    static s(a, b, c) {
        a.x = a.x - b;
        a.y = a.y - c;
        let d = a.width + 2 * b;
        let e = a.height + 2 * c;
        a.width = d > 1 ? d : 1;
        a.height = e > 1 ? e : 1;
        return a;
    }
    static r(a, b) {
        let c = a.x - b;
        let d = a.y - b;
        let e = a.width + b + b;
        let f = a.height + b + b;
        let g = e > 0 ? e : 0;
        let h = f > 0 ? f : 0;
        return new Rect(0, c, d, g, h);
    }
    static y(a) {
        a.x = Math.round(a.x);
        a.y = Math.round(a.y);
        a.width = Math.round(a.width);
        a.height = Math.round(a.height);
        return a;
    }
    static c(a) {
        return a.x == 0 && a.y == 0 && a.width == 0 && a.height == 0;
    }
    static z(a) {
        let b = new Size(1, a.width, a.height);
        return b;
    }
    static u(a, b) {
        let c = RectUtil.v(a, RectUtil.z(b));
        return c;
    }
    static v(a, b) {
        let c = a;
        c.x = a.x / b.width;
        c.y = a.y / b.height;
        c.width = a.width / b.width;
        c.height = a.height / b.height;
        return c;
    }
    static n(a) {
        let b = { $type: Point_$type, x: a.x, y: a.y };
        return b;
    }
    static o(a) {
        let b = { $type: Point_$type, x: a.x + a.width, y: a.y };
        return b;
    }
    static j(a) {
        let b = { $type: Point_$type, x: a.x, y: a.y + a.height };
        return b;
    }
    static k(a) {
        let b = { $type: Point_$type, x: a.x + a.width, y: a.y + a.height };
        return b;
    }
    static d(a) {
        let b = ((() => {
            let $ret = new List$1(Point_$type, 0);
            $ret.add(RectUtil.n(a));
            $ret.add(RectUtil.o(a));
            $ret.add(RectUtil.k(a));
            $ret.add(RectUtil.j(a));
            return $ret;
        })());
        return b;
    }
    static w(a, b) {
        b = CoreGeometryUtil.a(b);
        if (b == 0 || b == 180) {
            return new Rect(0, a.left, a.top, a.width, a.height);
        }
        let c = RectUtil.l(a);
        if (b == 90 || b == 270) {
            let d = a.height / 2;
            let e = a.width / 2;
            return new Rect(0, c.x - d, c.y - e, a.height, a.width);
        }
        return RectUtil.x(a, c.x, c.y, b);
    }
    static x(a, b, c, d) {
        let e = RectUtil.d(a);
        let f = MathUtil.k(d);
        let g = Math.cos(f);
        let h = Math.sin(f);
        let i = 1.7976931348623157E+308;
        let j = 1.7976931348623157E+308;
        let k = -1.7976931348623157E+308;
        let l = -1.7976931348623157E+308;
        let m;
        for (let n = 0; n < e.count; n++) {
            m = e._inner[n];
            let o = (g * (m.x - b) - h * (m.y - c) + b);
            let p = (h * (m.x - b) + g * (m.y - c) + c);
            i = Math.min(i, p);
            j = Math.min(j, o);
            k = Math.max(k, o);
            l = Math.max(l, p);
        }
        let q = new Rect(0, j, i, k - j, l - i);
        return q;
    }
}
RectUtil.$t = markType(RectUtil, 'RectUtil');
//# sourceMappingURL=RectUtil.js.map