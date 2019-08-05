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
var CommodityChannelIndexIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CommodityChannelIndexIndicatorDescription, _super);
    function CommodityChannelIndexIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.cy = 0;
        return _this;
    }
    CommodityChannelIndexIndicatorDescription.prototype.get_type = function () {
        return "CommodityChannelIndexIndicator";
    };
    Object.defineProperty(CommodityChannelIndexIndicatorDescription.prototype, "period", {
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
    CommodityChannelIndexIndicatorDescription.$t = markType(CommodityChannelIndexIndicatorDescription, 'CommodityChannelIndexIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return CommodityChannelIndexIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { CommodityChannelIndexIndicatorDescription };
//# sourceMappingURL=CommodityChannelIndexIndicatorDescription.js.map