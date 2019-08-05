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
var OperationFilterExpressionDescription = /** @class */ (function (_super) {
    tslib_1.__extends(OperationFilterExpressionDescription, _super);
    function OperationFilterExpressionDescription() {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.m = null;
        _this.g = null;
        _this.h = null;
        _this.k = null;
        return _this;
    }
    OperationFilterExpressionDescription.prototype.get_type = function () {
        return "OperationFilterExpression";
    };
    Object.defineProperty(OperationFilterExpressionDescription.prototype, "propertyName", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("PropertyName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationFilterExpressionDescription.prototype, "valueRef", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("ValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationFilterExpressionDescription.prototype, "left", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("Left");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationFilterExpressionDescription.prototype, "right", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Right");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationFilterExpressionDescription.prototype, "operator", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("Operator");
        },
        enumerable: true,
        configurable: true
    });
    OperationFilterExpressionDescription.$t = markType(OperationFilterExpressionDescription, 'OperationFilterExpressionDescription', FilterExpressionDescription.$);
    return OperationFilterExpressionDescription;
}(FilterExpressionDescription));
export { OperationFilterExpressionDescription };
//# sourceMappingURL=OperationFilterExpressionDescription.js.map