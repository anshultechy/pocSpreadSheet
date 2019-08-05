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
var PriceVolumeTrendIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PriceVolumeTrendIndicatorDescription, _super);
    function PriceVolumeTrendIndicatorDescription() {
        return _super.call(this) || this;
    }
    PriceVolumeTrendIndicatorDescription.prototype.get_type = function () {
        return "PriceVolumeTrendIndicator";
    };
    PriceVolumeTrendIndicatorDescription.$t = markType(PriceVolumeTrendIndicatorDescription, 'PriceVolumeTrendIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return PriceVolumeTrendIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { PriceVolumeTrendIndicatorDescription };
//# sourceMappingURL=PriceVolumeTrendIndicatorDescription.js.map