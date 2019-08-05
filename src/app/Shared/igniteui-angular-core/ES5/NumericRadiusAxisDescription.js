/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { NumericAxisBaseDescription } from "./NumericAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var NumericRadiusAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NumericRadiusAxisDescription, _super);
    function NumericRadiusAxisDescription() {
        var _this = _super.call(this) || this;
        _this.dw = 0;
        _this.dv = 0;
        return _this;
    }
    NumericRadiusAxisDescription.prototype.get_type = function () {
        return "NumericRadiusAxis";
    };
    Object.defineProperty(NumericRadiusAxisDescription.prototype, "radiusExtentScale", {
        get: function () {
            return this.dw;
        },
        set: function (a) {
            this.dw = a;
            this.e("RadiusExtentScale");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericRadiusAxisDescription.prototype, "innerRadiusExtentScale", {
        get: function () {
            return this.dv;
        },
        set: function (a) {
            this.dv = a;
            this.e("InnerRadiusExtentScale");
        },
        enumerable: true,
        configurable: true
    });
    NumericRadiusAxisDescription.$t = markType(NumericRadiusAxisDescription, 'NumericRadiusAxisDescription', NumericAxisBaseDescription.$);
    return NumericRadiusAxisDescription;
}(NumericAxisBaseDescription));
export { NumericRadiusAxisDescription };
//# sourceMappingURL=NumericRadiusAxisDescription.js.map