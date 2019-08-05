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
var LinearContourValueResolverDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LinearContourValueResolverDescription, _super);
    function LinearContourValueResolverDescription() {
        var _this = _super.call(this) || this;
        _this.g = 0;
        return _this;
    }
    LinearContourValueResolverDescription.prototype.get_type = function () {
        return "LinearContourValueResolver";
    };
    Object.defineProperty(LinearContourValueResolverDescription.prototype, "valueCount", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("ValueCount");
        },
        enumerable: true,
        configurable: true
    });
    LinearContourValueResolverDescription.$t = markType(LinearContourValueResolverDescription, 'LinearContourValueResolverDescription', ContourValueResolverDescription.$);
    return LinearContourValueResolverDescription;
}(ContourValueResolverDescription));
export { LinearContourValueResolverDescription };
//# sourceMappingURL=LinearContourValueResolverDescription.js.map