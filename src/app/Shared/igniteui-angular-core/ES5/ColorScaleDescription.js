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
var ColorScaleDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColorScaleDescription, _super);
    function ColorScaleDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        return _this;
    }
    ColorScaleDescription.prototype.get_type = function () {
        return "ColorScale";
    };
    Object.defineProperty(ColorScaleDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorScaleDescription.prototype, "PropertyUpdatedRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("PropertyUpdatedRef");
        },
        enumerable: true,
        configurable: true
    });
    ColorScaleDescription.$t = markType(ColorScaleDescription, 'ColorScaleDescription', Description.$);
    return ColorScaleDescription;
}(Description));
export { ColorScaleDescription };
//# sourceMappingURL=ColorScaleDescription.js.map