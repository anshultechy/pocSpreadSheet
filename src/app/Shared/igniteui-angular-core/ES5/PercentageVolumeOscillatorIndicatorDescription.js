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
var PercentageVolumeOscillatorIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PercentageVolumeOscillatorIndicatorDescription, _super);
    function PercentageVolumeOscillatorIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.cz = 0;
        _this.cy = 0;
        return _this;
    }
    PercentageVolumeOscillatorIndicatorDescription.prototype.get_type = function () {
        return "PercentageVolumeOscillatorIndicator";
    };
    Object.defineProperty(PercentageVolumeOscillatorIndicatorDescription.prototype, "shortPeriod", {
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
    Object.defineProperty(PercentageVolumeOscillatorIndicatorDescription.prototype, "longPeriod", {
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
    PercentageVolumeOscillatorIndicatorDescription.$t = markType(PercentageVolumeOscillatorIndicatorDescription, 'PercentageVolumeOscillatorIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return PercentageVolumeOscillatorIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { PercentageVolumeOscillatorIndicatorDescription };
//# sourceMappingURL=PercentageVolumeOscillatorIndicatorDescription.js.map