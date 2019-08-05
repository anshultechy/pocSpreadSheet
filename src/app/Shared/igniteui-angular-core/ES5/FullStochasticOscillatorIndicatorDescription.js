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
var FullStochasticOscillatorIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FullStochasticOscillatorIndicatorDescription, _super);
    function FullStochasticOscillatorIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.cy = 0;
        _this.cz = 0;
        _this.c0 = 0;
        return _this;
    }
    FullStochasticOscillatorIndicatorDescription.prototype.get_type = function () {
        return "FullStochasticOscillatorIndicator";
    };
    Object.defineProperty(FullStochasticOscillatorIndicatorDescription.prototype, "period", {
        get: function () {
            return this.cy;
        },
        set: function (a) {
            this.cy = a;
            this.e("Period");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullStochasticOscillatorIndicatorDescription.prototype, "smoothingPeriod", {
        get: function () {
            return this.cz;
        },
        set: function (a) {
            this.cz = a;
            this.e("SmoothingPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullStochasticOscillatorIndicatorDescription.prototype, "triggerPeriod", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("TriggerPeriod");
        },
        enumerable: true,
        configurable: true
    });
    FullStochasticOscillatorIndicatorDescription.$t = markType(FullStochasticOscillatorIndicatorDescription, 'FullStochasticOscillatorIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return FullStochasticOscillatorIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { FullStochasticOscillatorIndicatorDescription };
//# sourceMappingURL=FullStochasticOscillatorIndicatorDescription.js.map