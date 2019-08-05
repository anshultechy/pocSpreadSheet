/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColumnFragmentDescription } from "./ColumnFragmentDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var BarFragmentDescription = /** @class */ (function (_super) {
    tslib_1.__extends(BarFragmentDescription, _super);
    function BarFragmentDescription() {
        return _super.call(this) || this;
    }
    BarFragmentDescription.prototype.get_type = function () {
        return "BarFragment";
    };
    BarFragmentDescription.$t = markType(BarFragmentDescription, 'BarFragmentDescription', ColumnFragmentDescription.$);
    return BarFragmentDescription;
}(ColumnFragmentDescription));
export { BarFragmentDescription };
//# sourceMappingURL=BarFragmentDescription.js.map