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
var GridFilterDialogViewModelRowDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogViewModelRowDescription, _super);
    function GridFilterDialogViewModelRowDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.g = null;
        _this.l = null;
        _this.f = null;
        _this.m = null;
        _this.n = null;
        return _this;
    }
    GridFilterDialogViewModelRowDescription.prototype.get_type = function () {
        return "GridFilterDialogViewModelRow";
    };
    Object.defineProperty(GridFilterDialogViewModelRowDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelRowDescription.prototype, "operatorTypes", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("OperatorTypes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelRowDescription.prototype, "operators", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("Operators");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelRowDescription.prototype, "currentOperator", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("CurrentOperator");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelRowDescription.prototype, "operandNumber", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("OperandNumber");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelRowDescription.prototype, "operand1Ref", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("Operand1Ref");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelRowDescription.prototype, "operand2Ref", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("Operand2Ref");
        },
        enumerable: true,
        configurable: true
    });
    GridFilterDialogViewModelRowDescription.$t = markType(GridFilterDialogViewModelRowDescription, 'GridFilterDialogViewModelRowDescription', Description.$);
    return GridFilterDialogViewModelRowDescription;
}(Description));
export { GridFilterDialogViewModelRowDescription };
//# sourceMappingURL=GridFilterDialogViewModelRowDescription.js.map