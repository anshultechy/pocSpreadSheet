/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class PointTester extends Base {
    constructor() {
        super(...arguments);
        this.a = false;
        this.b = false;
    }
    c(a, b, c, d, e, f, g, h) {
        let i = Math.abs(d - f);
        let j = Math.abs(f - h);
        let k = 0;
        let l = 0;
        if (i == 0 && j == 0) {
            return false;
        }
        if (i == 0 && j != 0) {
            k = (e + c) / 2;
            l = (-(g - e) / (h - f)) * (k - ((e + g) / 2)) + ((f + h) / 2);
        }
        if (i != 0 && j == 0) {
            k = (g + e) / 2;
            l = (-(e - c) / (f - d)) * (k - ((c + e) / 2)) + ((d + f) / 2);
        }
        if (i != 0 && j != 0) {
            let m = -(e - c) / (f - d);
            let n = -(g - e) / (h - f);
            let o = (c + e) / 2;
            let p = (e + g) / 2;
            let q = (d + f) / 2;
            let r = (f + h) / 2;
            k = (m * o - n * p + r - q) / (m - n);
            l = i > j ? m * (k - o) + q : n * (k - p) + r;
        }
        let s = e - k;
        let t = f - l;
        let u = s * s + t * t;
        s = a - k;
        t = b - l;
        let v = s * s + t * t;
        this.b = v <= u;
        this.a = k < a && ((a - k) * (a - k)) > u;
        return true;
    }
}
PointTester.$t = markType(PointTester, 'PointTester');
//# sourceMappingURL=PointTester.js.map