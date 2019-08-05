/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, markType } from "./type";
import { LinearGradientBrush } from "./LinearGradientBrush";
/**
 * @hidden
 */
var BrushUtilCore = /** @class */ (function (_super) {
    tslib_1.__extends(BrushUtilCore, _super);
    function BrushUtilCore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrushUtilCore.a = function (a) {
        var b = typeCast(LinearGradientBrush.$, a);
        if (b != null) {
            return BrushUtilCore.c(b);
        }
        if (a.color.l == 0) {
            return true;
        }
        return false;
    };
    BrushUtilCore.c = function (a) {
        var d = a.gradientStops;
        for (var c = 0; c < d.length; c++) {
            var b = d[c];
            if (!BrushUtilCore.b(b)) {
                return false;
            }
        }
        return true;
    };
    BrushUtilCore.b = function (a) {
        if (a.color.l == 0) {
            return true;
        }
        return false;
    };
    BrushUtilCore.$t = markType(BrushUtilCore, 'BrushUtilCore');
    return BrushUtilCore;
}(Base));
export { BrushUtilCore };
//# sourceMappingURL=BrushUtilCore.js.map