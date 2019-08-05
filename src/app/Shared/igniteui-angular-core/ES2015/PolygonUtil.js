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
export class PolygonUtil extends Base {
    static a(a, b) {
        if (a == null) {
            return false;
        }
        let c = a.count;
        if (c < 4) {
            return false;
        }
        let d = false;
        for (let e = 0, f = c - 1; e < c; f = e++) {
            if (((a.item(e).y > b.y) != (a.item(f).y > b.y)) && (b.x < (a.item(f).x - a.item(e).x) * (b.y - a.item(e).y) / (a.item(f).y - a.item(e).y) + a.item(e).x)) {
                d = !d;
            }
        }
        return d;
    }
}
PolygonUtil.$t = markType(PolygonUtil, 'PolygonUtil');
//# sourceMappingURL=PolygonUtil.js.map