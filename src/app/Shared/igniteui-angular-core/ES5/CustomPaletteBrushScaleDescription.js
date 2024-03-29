/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { BrushScaleDescription } from "./BrushScaleDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CustomPaletteBrushScaleDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CustomPaletteBrushScaleDescription, _super);
    function CustomPaletteBrushScaleDescription() {
        var _this = _super.call(this) || this;
        _this.k = null;
        return _this;
    }
    CustomPaletteBrushScaleDescription.prototype.get_type = function () {
        return "CustomPaletteBrushScale";
    };
    Object.defineProperty(CustomPaletteBrushScaleDescription.prototype, "brushSelectionMode", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("BrushSelectionMode");
        },
        enumerable: true,
        configurable: true
    });
    CustomPaletteBrushScaleDescription.$t = markType(CustomPaletteBrushScaleDescription, 'CustomPaletteBrushScaleDescription', BrushScaleDescription.$);
    return CustomPaletteBrushScaleDescription;
}(BrushScaleDescription));
export { CustomPaletteBrushScaleDescription };
//# sourceMappingURL=CustomPaletteBrushScaleDescription.js.map