/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { ObservableColorCollection } from "./ObservableColorCollection";
import { MathUtil } from "./MathUtil";
import { ColorUtil } from "./ColorUtil";
import { truncate } from "./number";
/**
 * @hidden
 */
export class ColorCollectionUtil extends Base {
    static b(a, b) {
        b = MathUtil.b(b, 0, a.count - 1);
        let c = truncate(Math.floor(b));
        if (c == b) {
            return a._inner[c];
        }
        return ColorCollectionUtil.c(b - c, a._inner[c], a._inner[c + 1], a.af);
    }
    static c(a, b, c, d) {
        return ColorUtil.n(b, a, c, d);
    }
    static a(a) {
        let b = new ObservableColorCollection();
        b.o(a);
        return b;
    }
}
ColorCollectionUtil.$t = markType(ColorCollectionUtil, 'ColorCollectionUtil');
//# sourceMappingURL=ColorCollectionUtil.js.map