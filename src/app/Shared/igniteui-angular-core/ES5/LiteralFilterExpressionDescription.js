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
var LiteralFilterExpressionDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LiteralFilterExpressionDescription, _super);
    function LiteralFilterExpressionDescription() {
        var _this = _super.call(this) || this;
        _this.i = null;
        _this.g = false;
        return _this;
    }
    LiteralFilterExpressionDescription.prototype.get_type = function () {
        return "LiteralFilterExpression";
    };
    Object.defineProperty(LiteralFilterExpressionDescription.prototype, "literalValueRef", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("LiteralValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiteralFilterExpressionDescription.prototype, "leaveUnquoted", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("LeaveUnquoted");
        },
        enumerable: true,
        configurable: true
    });
    LiteralFilterExpressionDescription.$t = markType(LiteralFilterExpressionDescription, 'LiteralFilterExpressionDescription', FilterExpressionDescription.$);
    return LiteralFilterExpressionDescription;
}(FilterExpressionDescription));
export { LiteralFilterExpressionDescription };
//# sourceMappingURL=LiteralFilterExpressionDescription.js.map