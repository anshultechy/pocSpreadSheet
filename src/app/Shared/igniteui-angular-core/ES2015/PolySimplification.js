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
export class PolySimplification extends Base {
    static b(a, b) {
        let c = a.c;
        let d = a.d;
        if (c.length == 0) {
            return 0;
        }
        let e = 0;
        let f = 0;
        let g = b * b;
        e++;
        let h;
        let i;
        let j;
        for (let k = 0; k < c.length; k++) {
            h = c[k] - c[f];
            i = d[k] - d[f];
            j = (h * h) + (i * i);
            if (j > g) {
                c[e] = c[k];
                d[e] = d[k];
                e++;
                f = k;
            }
        }
        return e;
    }
    static a(a, b) {
        let c = b.x - a.x;
        let d = b.y - a.y;
        return (c * c) + (d * d);
    }
}
PolySimplification.$t = markType(PolySimplification, 'PolySimplification');
//# sourceMappingURL=PolySimplification.js.map