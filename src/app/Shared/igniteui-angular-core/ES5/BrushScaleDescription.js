/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var BrushScaleDescription = /** @class */ (function (_super) {
    tslib_1.__extends(BrushScaleDescription, _super);
    function BrushScaleDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.h = null;
        return _this;
    }
    BrushScaleDescription.prototype.get_type = function () {
        return "BrushScale";
    };
    Object.defineProperty(BrushScaleDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrushScaleDescription.prototype, "brushes", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Brushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrushScaleDescription.prototype, "PropertyUpdatedRef", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("PropertyUpdatedRef");
        },
        enumerable: true,
        configurable: true
    });
    BrushScaleDescription.$t = markType(BrushScaleDescription, 'BrushScaleDescription', Description.$);
    return BrushScaleDescription;
}(Description));
export { BrushScaleDescription };
//# sourceMappingURL=BrushScaleDescription.js.map