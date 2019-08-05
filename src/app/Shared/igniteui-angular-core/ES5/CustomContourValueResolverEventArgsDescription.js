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
var CustomContourValueResolverEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CustomContourValueResolverEventArgsDescription, _super);
    function CustomContourValueResolverEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        return _this;
    }
    CustomContourValueResolverEventArgsDescription.prototype.get_type = function () {
        return "CustomContourValueResolverEventArgs";
    };
    Object.defineProperty(CustomContourValueResolverEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomContourValueResolverEventArgsDescription.prototype, "contourValues", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ContourValues");
        },
        enumerable: true,
        configurable: true
    });
    CustomContourValueResolverEventArgsDescription.$t = markType(CustomContourValueResolverEventArgsDescription, 'CustomContourValueResolverEventArgsDescription', Description.$);
    return CustomContourValueResolverEventArgsDescription;
}(Description));
export { CustomContourValueResolverEventArgsDescription };
//# sourceMappingURL=CustomContourValueResolverEventArgsDescription.js.map