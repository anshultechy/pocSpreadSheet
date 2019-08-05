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
var FinancialEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialEventArgsDescription, _super);
    function FinancialEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.k = 0;
        _this.j = 0;
        _this.f = null;
        _this.h = null;
        return _this;
    }
    FinancialEventArgsDescription.prototype.get_type = function () {
        return "FinancialEventArgs";
    };
    Object.defineProperty(FinancialEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialEventArgsDescription.prototype, "position", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("Position");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialEventArgsDescription.prototype, "count", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("Count");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialEventArgsDescription.prototype, "dataSource", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("DataSource");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialEventArgsDescription.prototype, "supportingCalculations", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("SupportingCalculations");
        },
        enumerable: true,
        configurable: true
    });
    FinancialEventArgsDescription.$t = markType(FinancialEventArgsDescription, 'FinancialEventArgsDescription', Description.$);
    return FinancialEventArgsDescription;
}(Description));
export { FinancialEventArgsDescription };
//# sourceMappingURL=FinancialEventArgsDescription.js.map