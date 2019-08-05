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
var FastStochasticOscillatorIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FastStochasticOscillatorIndicatorDescription, _super);
    function FastStochasticOscillatorIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.cy = 0;
        return _this;
    }
    FastStochasticOscillatorIndicatorDescription.prototype.get_type = function () {
        return "FastStochasticOscillatorIndicator";
    };
    Object.defineProperty(FastStochasticOscillatorIndicatorDescription.prototype, "period", {
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
    FastStochasticOscillatorIndicatorDescription.$t = markType(FastStochasticOscillatorIndicatorDescription, 'FastStochasticOscillatorIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return FastStochasticOscillatorIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { FastStochasticOscillatorIndicatorDescription };
//# sourceMappingURL=FastStochasticOscillatorIndicatorDescription.js.map