/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, markType } from "./type";
import { LinearGradientBrush } from "./LinearGradientBrush";
/**
 * @hidden
 */
export class BrushUtilCore extends Base {
    static a(a) {
        let b = typeCast(LinearGradientBrush.$, a);
        if (b != null) {
            return BrushUtilCore.c(b);
        }
        if (a.color.l == 0) {
            return true;
        }
        return false;
    }
    static c(a) {
        let d = a.gradientStops;
        for (let c = 0; c < d.length; c++) {
            let b = d[c];
            if (!BrushUtilCore.b(b)) {
                return false;
            }
        }
        return true;
    }
    static b(a) {
        if (a.color.l == 0) {
            return true;
        }
        return false;
    }
}
BrushUtilCore.$t = markType(BrushUtilCore, 'BrushUtilCore');
//# sourceMappingURL=BrushUtilCore.js.map