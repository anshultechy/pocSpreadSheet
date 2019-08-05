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
var FinancialCalculationSupportingCalculationsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialCalculationSupportingCalculationsDescription, _super);
    function FinancialCalculationSupportingCalculationsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.h = null;
        _this.i = null;
        _this.g = null;
        _this.q = null;
        _this.o = null;
        _this.p = null;
        _this.n = null;
        _this.v = null;
        return _this;
    }
    FinancialCalculationSupportingCalculationsDescription.prototype.get_type = function () {
        return "FinancialCalculationSupportingCalculations";
    };
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "eMA", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("EMA");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "sMA", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("SMA");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "sTDEV", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("STDEV");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "movingSum", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("MovingSum");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "shortVolumeOscillatorAverage", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("ShortVolumeOscillatorAverage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "longVolumeOscillatorAverage", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("LongVolumeOscillatorAverage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "shortPriceOscillatorAverage", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("ShortPriceOscillatorAverage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "longPriceOscillatorAverage", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("LongPriceOscillatorAverage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialCalculationSupportingCalculationsDescription.prototype, "makeSafeRef", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("MakeSafeRef");
        },
        enumerable: true,
        configurable: true
    });
    FinancialCalculationSupportingCalculationsDescription.$t = markType(FinancialCalculationSupportingCalculationsDescription, 'FinancialCalculationSupportingCalculationsDescription', Description.$);
    return FinancialCalculationSupportingCalculationsDescription;
}(Description));
export { FinancialCalculationSupportingCalculationsDescription };
//# sourceMappingURL=FinancialCalculationSupportingCalculationsDescription.js.map