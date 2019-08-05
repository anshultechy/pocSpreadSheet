/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FilterExpressionDescription } from "./FilterExpressionDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var FunctionFilterExpressionDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FunctionFilterExpressionDescription, _super);
    function FunctionFilterExpressionDescription() {
        var _this = _super.call(this) || this;
        _this.g = null;
        return _this;
    }
    FunctionFilterExpressionDescription.prototype.get_type = function () {
        return "FunctionFilterExpression";
    };
    Object.defineProperty(FunctionFilterExpressionDescription.prototype, "functionType", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("FunctionType");
        },
        enumerable: true,
        configurable: true
    });
    FunctionFilterExpressionDescription.$t = markType(FunctionFilterExpressionDescription, 'FunctionFilterExpressionDescription', FilterExpressionDescription.$);
    return FunctionFilterExpressionDescription;
}(FilterExpressionDescription));
export { FunctionFilterExpressionDescription };
//# sourceMappingURL=FunctionFilterExpressionDescription.js.map