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
var MovingAverageConvergenceDivergenceIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(MovingAverageConvergenceDivergenceIndicatorDescription, _super);
    function MovingAverageConvergenceDivergenceIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.cz = 0;
        _this.cy = 0;
        _this.c0 = 0;
        return _this;
    }
    MovingAverageConvergenceDivergenceIndicatorDescription.prototype.get_type = function () {
        return "MovingAverageConvergenceDivergenceIndicator";
    };
    Object.defineProperty(MovingAverageConvergenceDivergenceIndicatorDescription.prototype, "shortPeriod", {
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
    Object.defineProperty(MovingAverageConvergenceDivergenceIndicatorDescription.prototype, "longPeriod", {
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
    Object.defineProperty(MovingAverageConvergenceDivergenceIndicatorDescription.prototype, "signalPeriod", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("SignalPeriod");
        },
        enumerable: true,
        configurable: true
    });
    MovingAverageConvergenceDivergenceIndicatorDescription.$t = markType(MovingAverageConvergenceDivergenceIndicatorDescription, 'MovingAverageConvergenceDivergenceIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return MovingAverageConvergenceDivergenceIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { MovingAverageConvergenceDivergenceIndicatorDescription };
//# sourceMappingURL=MovingAverageConvergenceDivergenceIndicatorDescription.js.map