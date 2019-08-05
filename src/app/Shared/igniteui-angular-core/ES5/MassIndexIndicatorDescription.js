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
var MassIndexIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(MassIndexIndicatorDescription, _super);
    function MassIndexIndicatorDescription() {
        return _super.call(this) || this;
    }
    MassIndexIndicatorDescription.prototype.get_type = function () {
        return "MassIndexIndicator";
    };
    MassIndexIndicatorDescription.$t = markType(MassIndexIndicatorDescription, 'MassIndexIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return MassIndexIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { MassIndexIndicatorDescription };
//# sourceMappingURL=MassIndexIndicatorDescription.js.map