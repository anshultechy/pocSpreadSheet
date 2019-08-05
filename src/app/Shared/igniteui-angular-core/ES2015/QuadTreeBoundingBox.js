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
export class QuadTreeBoundingBox extends Base {
    constructor() {
        super();
        this.b = 0;
        this.c = 0;
        this.e = 0;
        this.d = 0;
        this.g = null;
    }
    a(a) {
        if (this.b + this.e < a.b - a.e || this.c + this.d < a.c - a.d || this.b - this.e > a.b + a.e || this.c - this.d > a.c + a.d) {
            return false;
        }
        return true;
    }
    f(a) {
        let b = this.b - this.e;
        let c = this.c - this.d;
        let d = this.b + this.e;
        let e = this.c + this.d;
        let f = a.b - a.e;
        let g = a.c - a.d;
        let h = a.b + a.e;
        let i = a.c + a.d;
        let j = Math.max(b, f);
        let k = Math.min(d, h);
        let l = Math.max(c, g);
        let m = Math.min(e, i);
        return (k - j) * (m - l);
    }
}
QuadTreeBoundingBox.$t = markType(QuadTreeBoundingBox, 'QuadTreeBoundingBox');
//# sourceMappingURL=QuadTreeBoundingBox.js.map