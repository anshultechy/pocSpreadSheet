/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var RowSeparatorInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RowSeparatorInfoDescription, _super);
    function RowSeparatorInfoDescription() {
        return _super.call(this) || this;
    }
    RowSeparatorInfoDescription.prototype.get_type = function () {
        return "RowSeparatorInfo";
    };
    RowSeparatorInfoDescription.$t = markType(RowSeparatorInfoDescription, 'RowSeparatorInfoDescription', CellInfoDescription.$);
    return RowSeparatorInfoDescription;
}(CellInfoDescription));
export { RowSeparatorInfoDescription };
//# sourceMappingURL=RowSeparatorInfoDescription.js.map