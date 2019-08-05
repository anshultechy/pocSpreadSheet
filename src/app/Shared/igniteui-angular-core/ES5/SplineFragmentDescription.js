/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SplineFragmentBaseDescription } from "./SplineFragmentBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var SplineFragmentDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SplineFragmentDescription, _super);
    function SplineFragmentDescription() {
        return _super.call(this) || this;
    }
    SplineFragmentDescription.prototype.get_type = function () {
        return "SplineFragment";
    };
    SplineFragmentDescription.$t = markType(SplineFragmentDescription, 'SplineFragmentDescription', SplineFragmentBaseDescription.$);
    return SplineFragmentDescription;
}(SplineFragmentBaseDescription));
export { SplineFragmentDescription };
//# sourceMappingURL=SplineFragmentDescription.js.map