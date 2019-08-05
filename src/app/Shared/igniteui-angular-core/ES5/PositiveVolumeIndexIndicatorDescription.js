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
var PositiveVolumeIndexIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PositiveVolumeIndexIndicatorDescription, _super);
    function PositiveVolumeIndexIndicatorDescription() {
        return _super.call(this) || this;
    }
    PositiveVolumeIndexIndicatorDescription.prototype.get_type = function () {
        return "PositiveVolumeIndexIndicator";
    };
    PositiveVolumeIndexIndicatorDescription.$t = markType(PositiveVolumeIndexIndicatorDescription, 'PositiveVolumeIndexIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return PositiveVolumeIndexIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { PositiveVolumeIndexIndicatorDescription };
//# sourceMappingURL=PositiveVolumeIndexIndicatorDescription.js.map