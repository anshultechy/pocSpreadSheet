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
var NegativeVolumeIndexIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NegativeVolumeIndexIndicatorDescription, _super);
    function NegativeVolumeIndexIndicatorDescription() {
        return _super.call(this) || this;
    }
    NegativeVolumeIndexIndicatorDescription.prototype.get_type = function () {
        return "NegativeVolumeIndexIndicator";
    };
    NegativeVolumeIndexIndicatorDescription.$t = markType(NegativeVolumeIndexIndicatorDescription, 'NegativeVolumeIndexIndicatorDescription', StrategyBasedIndicatorDescription.$);
    return NegativeVolumeIndexIndicatorDescription;
}(StrategyBasedIndicatorDescription));
export { NegativeVolumeIndexIndicatorDescription };
//# sourceMappingURL=NegativeVolumeIndexIndicatorDescription.js.map