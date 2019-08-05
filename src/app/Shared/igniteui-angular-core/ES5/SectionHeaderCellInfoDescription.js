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
var SectionHeaderCellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SectionHeaderCellInfoDescription, _super);
    function SectionHeaderCellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.c2 = null;
        return _this;
    }
    SectionHeaderCellInfoDescription.prototype.get_type = function () {
        return "SectionHeaderCellInfo";
    };
    Object.defineProperty(SectionHeaderCellInfoDescription.prototype, "resolvedText", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("ResolvedText");
        },
        enumerable: true,
        configurable: true
    });
    SectionHeaderCellInfoDescription.$t = markType(SectionHeaderCellInfoDescription, 'SectionHeaderCellInfoDescription', CellInfoDescription.$);
    return SectionHeaderCellInfoDescription;
}(CellInfoDescription));
export { SectionHeaderCellInfoDescription };
//# sourceMappingURL=SectionHeaderCellInfoDescription.js.map