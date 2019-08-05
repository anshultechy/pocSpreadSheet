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
var BollingerBandWidthIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(BollingerBandWidthIndicatorDescription, _super);
    function BollingerBandWidthIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.c0 = 0;
        _this.cy = 0;
        return _this;
    }
    BollingerBandWidthIndicatorDescription.prototype.get_type = function () {
        return "BollingerBandWidthIndicator";
    };
    Object.defineProperty(BollingerBandWidthIndicatorDescription.prototype, "period", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("Period");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BollingerBandWidthIndicatorDescription.prototype, "multiplier", {
        get: function () {
            return this.cy;
        },
        set: function (a) {
            this.cy = a;
            this.e("Multiplier");
        },
        enumerable: true,
        configurable: true
    });
    BollingerBandWidthIndicatorDescription.$t = markType(BollingerBandWidthIndicatorDescription, 'BollingerBandWidthIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return BollingerBandWidthIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { BollingerBandWidthIndicatorDescription };
//# sourceMappingURL=BollingerBandWidthIndicatorDescription.js.map