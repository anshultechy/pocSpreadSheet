/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "./type";
import { Brush } from "./Brush";
import { BrushCollection } from "./BrushCollection";
import { MathUtil } from "./MathUtil";
import { ColorUtil } from "./ColorUtil";
import { truncate, isNaN_ } from "./number";
/**
 * @hidden
 */
export class BrushCollectionUtil extends Base {
    static b(a, b) {
        if (isNaN_(b)) {
            return null;
        }
        b = MathUtil.b(b, 0, a.count - 1);
        let c = truncate(Math.floor(b));
        if (c == b) {
            return a.item(c);
        }
        return BrushCollectionUtil.c(b - c, a.item(c), a.item(c + 1), a.af);
    }
    static c(a, b, c, d) {
        let e = b.color;
        let f = c.color;
        let g = ColorUtil.n(e, a, f, d);
        let h = new Brush();
        h.color = g;
        return h;
    }
    static a(a) {
        let b = new BrushCollection();
        for (let c of fromEnum(a)) {
            let d = ColorUtil.g(c);
            if (d != null) {
                b.add(d);
            }
        }
        return b;
    }
}
BrushCollectionUtil.$t = markType(BrushCollectionUtil, 'BrushCollectionUtil');
//# sourceMappingURL=BrushCollectionUtil.js.map