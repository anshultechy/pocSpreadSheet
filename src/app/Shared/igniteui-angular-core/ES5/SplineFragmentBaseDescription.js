/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SplineSeriesBaseDescription } from "./SplineSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var SplineFragmentBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SplineFragmentBaseDescription, _super);
    function SplineFragmentBaseDescription() {
        return _super.call(this) || this;
    }
    SplineFragmentBaseDescription.prototype.get_type = function () {
        return "SplineFragmentBase";
    };
    SplineFragmentBaseDescription.$t = markType(SplineFragmentBaseDescription, 'SplineFragmentBaseDescription', SplineSeriesBaseDescription.$);
    return SplineFragmentBaseDescription;
}(SplineSeriesBaseDescription));
export { SplineFragmentBaseDescription };
//# sourceMappingURL=SplineFragmentBaseDescription.js.map