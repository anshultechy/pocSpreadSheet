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
var SplineAreaFragmentDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SplineAreaFragmentDescription, _super);
    function SplineAreaFragmentDescription() {
        return _super.call(this) || this;
    }
    SplineAreaFragmentDescription.prototype.get_type = function () {
        return "SplineAreaFragment";
    };
    SplineAreaFragmentDescription.$t = markType(SplineAreaFragmentDescription, 'SplineAreaFragmentDescription', SplineFragmentBaseDescription.$);
    return SplineAreaFragmentDescription;
}(SplineFragmentBaseDescription));
export { SplineAreaFragmentDescription };
//# sourceMappingURL=SplineAreaFragmentDescription.js.map