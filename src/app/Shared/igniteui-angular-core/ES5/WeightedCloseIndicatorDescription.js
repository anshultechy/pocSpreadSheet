/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ItemwiseStrategyBasedIndicatorDescription } from "./ItemwiseStrategyBasedIndicatorDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var WeightedCloseIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(WeightedCloseIndicatorDescription, _super);
    function WeightedCloseIndicatorDescription() {
        return _super.call(this) || this;
    }
    WeightedCloseIndicatorDescription.prototype.get_type = function () {
        return "WeightedCloseIndicator";
    };
    WeightedCloseIndicatorDescription.$t = markType(WeightedCloseIndicatorDescription, 'WeightedCloseIndicatorDescription', ItemwiseStrategyBasedIndicatorDescription.$);
    return WeightedCloseIndicatorDescription;
}(ItemwiseStrategyBasedIndicatorDescription));
export { WeightedCloseIndicatorDescription };
//# sourceMappingURL=WeightedCloseIndicatorDescription.js.map