/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, markType } from "./type";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { Tuple$2 } from "./Tuple$2";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
export class GeometryUtil extends Base {
    static g(a) {
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
    }
    static c(a) {
        return Math.atan(a);
    }
    static h(a, b) {
        return (b.y - a.y) / (b.x - a.x);
    }
    static d(a) {
        return 1 - Math.pow(a.height / 2, 2) / Math.pow(a.width / 2, 2);
    }
    static n(a, b, c, d, e) {
        let f = Math.cos(a);
        let g = Math.sin(a);
        let h = Math.sqrt(d * d / (1 - (b * Math.pow(f, 2))));
        h *= e;
        return { $type: Point_$type, x: h * f + c.x, y: h * g + c.y };
    }
    static j(a, b, c, d, e) {
        let f;
        if (c) {
            f = GeometryUtil.k({ $type: Point_$type, x: a / 2, y: b / 2 }, d, e);
        }
        else {
            f = { $type: Point_$type, x: a / 2, y: b / 2 };
        }
        return f;
    }
    static k(a, b, c) {
        b = b / 180 * Math.PI;
        let d = a.y + c * Math.sin(b);
        let e = a.x + c * Math.cos(b);
        return { $type: Point_$type, x: e, y: d };
    }
    static m(a, b, c) {
        let d = b.x - a.x;
        let e = b.y - a.y;
        let f = Math.sqrt(d * d + e * e);
        d = d / f * c;
        e = e / f * c;
        return { $type: Point_$type, x: a.x + d, y: a.y + e };
    }
    static f(a, b) {
        let c = Math.abs(b.x - a.x);
        let d = Math.abs(b.y - a.y);
        return Math.sqrt(c * c + d * d);
    }
    static l(a, b, c, d, e) {
        return CoreGeometryUtil.b(a, b, c, d, e);
    }
    static e(a, b) {
        let c = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
        let d = Math.acos((b.x - a.x) / c);
        if ((b.y - a.y) < 0) {
            d = (2 * Math.PI) - d;
        }
        return d;
    }
    static i(a, b, c, d) {
        let e = a.x - c.x;
        let f = a.y - c.y;
        let g = b.x - c.x;
        let h = b.y - c.y;
        let i = g - e;
        let j = h - f;
        let k = Math.sqrt(i * i + j * j);
        let l = e * h - g * f;
        let m = d * d;
        let n = k * k;
        let o = l * l;
        let p = m * n - o;
        if (p < 0) {
            return new Tuple$2(Point_$type, Point_$type, { $type: Point_$type, x: NaN, y: NaN }, { $type: Point_$type, x: NaN, y: NaN });
        }
        let q = 1;
        if (j < 0) {
            q = -1;
        }
        let r = (l * j + q * i * Math.sqrt(p)) / n;
        let s = (l * j - q * i * Math.sqrt(p)) / n;
        let t = (-1 * l * i + Math.abs(j) * Math.sqrt(p)) / n;
        let u = (-1 * l * i - Math.abs(j) * Math.sqrt(p)) / n;
        return new Tuple$2(Point_$type, Point_$type, { $type: Point_$type, x: r + c.x, y: t + c.y }, { $type: Point_$type, x: s + c.x, y: u + c.y });
    }
    static a(a, b, c, d) {
        let e = d * d;
        let f = b.x;
        let g = b.y;
        let h = c.x;
        let i = c.y;
        let j = a.x;
        let k = a.y;
        if (g == i) {
            let l = Math.abs(g - k) < d;
            let m = j >= Math.min(f, h) - d && j <= Math.max(f, h) + d;
            if (l && m) {
                return true;
            }
            else {
                return false;
            }
        }
        if (f == h) {
            let n = Math.abs(f - j) < d;
            let o = k >= Math.min(g, i) - d && k <= Math.max(g, i) + d;
            if (n && o) {
                return true;
            }
            else {
                return false;
            }
        }
        let p = h - f;
        let q = i - g;
        let r = p * p + q * q;
        if (r == 0) {
            return (j - f) * (j - f) + (k - g) * (k - g) < e;
        }
        let s = ((j - f) * p + (k - g) * q) / r;
        s = s < 0 ? 0 : (s > 1 ? 1 : s);
        let t = f + p * s;
        let u = g + q * s;
        let v = (t - j) * (t - j) + (u - k) * (u - k);
        if (v < e) {
            return true;
        }
        return false;
    }
    static b(a, b, c, d) {
        let e;
        let f;
        let g = d * d;
        let h = c.count;
        if (h == 0) {
            return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < g;
        }
        let i = a.x;
        let j = a.y;
        for (let k = 0; k < h; k++) {
            if (k == 0) {
                f = c.item(k);
                e = b;
            }
            else {
                f = c.item(k);
                e = c.item(k - 1);
            }
            let l = e.x;
            let m = e.y;
            let n = f.x;
            let o = f.y;
            if (m == o) {
                let p = Math.abs(m - j) < d;
                let q = i >= Math.min(l, n) - d && i <= Math.max(l, n) + d;
                if (p && q) {
                    return true;
                }
                else {
                    continue;
                }
            }
            if (l == n) {
                let r = Math.abs(l - i) < d;
                let s = j >= Math.min(m, o) - d && j <= Math.max(m, o) + d;
                if (r && s) {
                    return true;
                }
                else {
                    continue;
                }
            }
            let t = n - l;
            let u = o - m;
            let v = t * t + u * u;
            if (v == 0) {
                return (i - l) * (i - l) + (j - m) * (j - m) < g;
            }
            let w = ((i - l) * t + (j - m) * u) / v;
            w = w < 0 ? 0 : (w > 1 ? 1 : w);
            let x = l + t * w;
            let y = m + u * w;
            let z = (x - i) * (x - i) + (y - j) * (y - j);
            if (z < g) {
                return true;
            }
        }
        return false;
    }
}
GeometryUtil.$t = markType(GeometryUtil, 'GeometryUtil');
//# sourceMappingURL=GeometryUtil.js.map