/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ContourValueResolverDescription } from "./ContourValueResolverDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CustomContourValueResolverDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CustomContourValueResolverDescription, _super);
    function CustomContourValueResolverDescription() {
        var _this = _super.call(this) || this;
        _this.g = null;
        return _this;
    }
    CustomContourValueResolverDescription.prototype.get_type = function () {
        return "CustomContourValueResolver";
    };
    Object.defineProperty(CustomContourValueResolverDescription.prototype, "GetCustomContourValuesRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("GetCustomContourValuesRef");
        },
        enumerable: true,
        configurable: true
    });
    CustomContourValueResolverDescription.$t = markType(CustomContourValueResolverDescription, 'CustomContourValueResolverDescription', ContourValueResolverDescription.$);
    return CustomContourValueResolverDescription;
}(ContourValueResolverDescription));
export { CustomContourValueResolverDescription };
//# sourceMappingURL=CustomContourValueResolverDescription.js.map