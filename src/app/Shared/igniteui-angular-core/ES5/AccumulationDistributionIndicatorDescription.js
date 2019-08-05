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
var AccumulationDistributionIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AccumulationDistributionIndicatorDescription, _super);
    function AccumulationDistributionIndicatorDescription() {
        return _super.call(this) || this;
    }
    AccumulationDistributionIndicatorDescription.prototype.get_type = function () {
        return "AccumulationDistributionIndicator";
    };
    AccumulationDistributionIndicatorDescription.$t = markType(AccumulationDistributionIndicatorDescription, 'AccumulationDistributionIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return AccumulationDistributionIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { AccumulationDistributionIndicatorDescription };
//# sourceMappingURL=AccumulationDistributionIndicatorDescription.js.map