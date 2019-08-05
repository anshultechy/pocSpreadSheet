/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var PercentagePriceOscillatorIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PercentagePriceOscillatorIndicatorDescription, _super);
    function PercentagePriceOscillatorIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.cz = 0;
        _this.cy = 0;
        return _this;
    }
    PercentagePriceOscillatorIndicatorDescription.prototype.get_type = function () {
        return "PercentagePriceOscillatorIndicator";
    };
    Object.defineProperty(PercentagePriceOscillatorIndicatorDescription.prototype, "shortPeriod", {
        get: function () {
            return this.cz;
        },
        set: function (a) {
            this.cz = a;
            this.e("ShortPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PercentagePriceOscillatorIndicatorDescription.prototype, "longPeriod", {
        get: function () {
            return this.cy;
        },
        set: function (a) {
            this.cy = a;
            this.e("LongPeriod");
        },
        enumerable: true,
        configurable: true
    });
    PercentagePriceOscillatorIndicatorDescription.$t = markType(PercentagePriceOscillatorIndicatorDescription, 'PercentagePriceOscillatorIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return PercentagePriceOscillatorIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { PercentagePriceOscillatorIndicatorDescription };
//# sourceMappingURL=PercentagePriceOscillatorIndicatorDescription.js.map