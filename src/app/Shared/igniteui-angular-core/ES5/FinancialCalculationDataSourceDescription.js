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
var FinancialCalculationDataSourceDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialCalculationDataSourceDescription, _super);
    function FinancialCalculationDataSourceDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.g = null;
        _this.f = null;
        _this.x = 0;
        _this.y = 0;
        _this.w = 0;
        _this.v = 0;
        _this.u = 0;
        _this.t = 0;
        _this.p = 0;
        _this.o = 0;
        _this.n = 0;
        _this.l = false;
        return _this;
    }
    FinancialCalculationDataSourceDescription.prototype.get_type = function () {
        return "FinancialCalculationDataSource";
    };
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "typicalColumn", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("TypicalColumn");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "trueRange", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("TrueRange");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "trueLow", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("TrueLow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "period", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("Period");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "shortPeriod", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("ShortPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "longPeriod", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("LongPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "count", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("Count");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "calculateFrom", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("CalculateFrom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "calculateCount", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("CalculateCount");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "multiplier", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("Multiplier");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "minimumValue", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "maximumValue", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationDataSourceDescription.prototype, "specifiesRange", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("SpecifiesRange");
        },
        enumerable: true,
        configurable: true
    });
    FinancialCalculationDataSourceDescription.$t = markType(FinancialCalculationDataSourceDescription, 'FinancialCalculationDataSourceDescription', Description.$);
    return FinancialCalculationDataSourceDescription;
}(Description));
export { FinancialCalculationDataSourceDescription };
//# sourceMappingURL=FinancialCalculationDataSourceDescription.js.map