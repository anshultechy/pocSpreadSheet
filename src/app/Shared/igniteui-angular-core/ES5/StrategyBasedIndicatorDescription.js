/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FinancialIndicatorDescription } from "./FinancialIndicatorDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var StrategyBasedIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StrategyBasedIndicatorDescription, _super);
    function StrategyBasedIndicatorDescription() {
        return _super.call(this) || this;
    }
    StrategyBasedIndicatorDescription.prototype.get_type = function () {
        return "StrategyBasedIndicator";
    };
    StrategyBasedIndicatorDescription.$t = markType(StrategyBasedIndicatorDescription, 'StrategyBasedIndicatorDescription', FinancialIndicatorDescription.$);
    return StrategyBasedIndicatorDescription;
}(FinancialIndicatorDescription));
export { StrategyBasedIndicatorDescription };
//# sourceMappingURL=StrategyBasedIndicatorDescription.js.map