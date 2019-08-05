/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var FinancialIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialIndicatorDescription, _super);
    function FinancialIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.cr = null;
        _this.cm = 0;
        _this.ct = null;
        _this.cs = null;
        _this.cq = null;
        _this.ck = 0;
        _this.cn = 0;
        return _this;
    }
    FinancialIndicatorDescription.prototype.get_type = function () {
        return "FinancialIndicator";
    };
    Object.defineProperty(FinancialIndicatorDescription.prototype, "displayType", {
        get: function () {
            return this.cr;
        },
        set: function (a) {
            this.cr = a;
            this.e("DisplayType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialIndicatorDescription.prototype, "ignoreFirst", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("IgnoreFirst");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialIndicatorDescription.prototype, "trendLineType", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("TrendLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialIndicatorDescription.prototype, "trendLineBrush", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("TrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialIndicatorDescription.prototype, "actualTrendLineBrush", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("ActualTrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialIndicatorDescription.prototype, "trendLineThickness", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("TrendLineThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialIndicatorDescription.prototype, "trendLinePeriod", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            this.cn = a;
            this.e("TrendLinePeriod");
        },
        enumerable: true,
        configurable: true
    });
    FinancialIndicatorDescription.$t = markType(FinancialIndicatorDescription, 'FinancialIndicatorDescription', FinancialSeriesDescription.$);
    return FinancialIndicatorDescription;
}(FinancialSeriesDescription));
export { FinancialIndicatorDescription };
//# sourceMappingURL=FinancialIndicatorDescription.js.map