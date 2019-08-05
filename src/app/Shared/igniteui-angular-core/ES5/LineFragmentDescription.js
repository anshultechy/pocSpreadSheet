/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FragmentBaseDescription } from "./FragmentBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var LineFragmentDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LineFragmentDescription, _super);
    function LineFragmentDescription() {
        return _super.call(this) || this;
    }
    LineFragmentDescription.prototype.get_type = function () {
        return "LineFragment";
    };
    LineFragmentDescription.$t = markType(LineFragmentDescription, 'LineFragmentDescription', FragmentBaseDescription.$);
    return LineFragmentDescription;
}(FragmentBaseDescription));
export { LineFragmentDescription };
//# sourceMappingURL=LineFragmentDescription.js.map