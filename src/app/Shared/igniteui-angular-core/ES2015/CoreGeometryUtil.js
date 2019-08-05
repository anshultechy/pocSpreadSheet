/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, markType } from "./type";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
export class CoreGeometryUtil extends Base {
    static a(a) {
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
    static b(a, b, c, d, e) {
        let f = { $type: Point_$type, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        let g = b.x - a.x;
        let h = b.y - a.y;
        let i = Math.sqrt(g * g + h * h);
        let j = h;
        let k = g * -1;
        if (e == d) {
            j = h * -1;
            k = g;
        }
        let l = Math.max(Math.abs(j), Math.abs(k));
        j = j / l;
        k = k / l;
        let m = Math.sqrt(j * j + k * k);
        let n = j / m;
        let o = k / m;
        let p = i / 2;
        let q = Math.sqrt(c * c - p * p);
        if (isNaN_(q)) {
            q = 0;
        }
        let r = q * n;
        let s = q * o;
        let t = { $type: Point_$type, x: f.x + r, y: f.y + s };
        return t;
    }
}
CoreGeometryUtil.$t = markType(CoreGeometryUtil, 'CoreGeometryUtil');
//# sourceMappingURL=CoreGeometryUtil.js.map