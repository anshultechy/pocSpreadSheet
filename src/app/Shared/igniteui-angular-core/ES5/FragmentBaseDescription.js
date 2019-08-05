/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var FragmentBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FragmentBaseDescription, _super);
    function FragmentBaseDescription() {
        return _super.call(this) || this;
    }
    FragmentBaseDescription.prototype.get_type = function () {
        return "FragmentBase";
    };
    FragmentBaseDescription.$t = markType(FragmentBaseDescription, 'FragmentBaseDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return FragmentBaseDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { FragmentBaseDescription };
//# sourceMappingURL=FragmentBaseDescription.js.map