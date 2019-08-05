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
var FinancialChartCustomIndicatorArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialChartCustomIndicatorArgsDescription, _super);
    function FinancialChartCustomIndicatorArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.h = 0;
        return _this;
    }
    FinancialChartCustomIndicatorArgsDescription.prototype.get_type = function () {
        return "FinancialChartCustomIndicatorArgs";
    };
    Object.defineProperty(FinancialChartCustomIndicatorArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartCustomIndicatorArgsDescription.prototype, "series", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartCustomIndicatorArgsDescription.prototype, "index", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Index");
        },
        enumerable: true,
        configurable: true
    });
    FinancialChartCustomIndicatorArgsDescription.$t = markType(FinancialChartCustomIndicatorArgsDescription, 'FinancialChartCustomIndicatorArgsDescription', Description.$);
    return FinancialChartCustomIndicatorArgsDescription;
}(Description));
export { FinancialChartCustomIndicatorArgsDescription };
//# sourceMappingURL=FinancialChartCustomIndicatorArgsDescription.js.map