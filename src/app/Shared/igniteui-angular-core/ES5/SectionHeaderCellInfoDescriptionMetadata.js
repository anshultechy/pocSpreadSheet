/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { SectionHeaderCellInfoDescription } from "./SectionHeaderCellInfoDescription";
/**
 * @hidden
 */
var SectionHeaderCellInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SectionHeaderCellInfoDescriptionMetadata, _super);
    function SectionHeaderCellInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionHeaderCellInfoDescriptionMetadata.b = function (a) {
        if (SectionHeaderCellInfoDescriptionMetadata.a == null) {
            SectionHeaderCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SectionHeaderCellInfoDescriptionMetadata.c(a, SectionHeaderCellInfoDescriptionMetadata.a);
        }
    };
    SectionHeaderCellInfoDescriptionMetadata.c = function (a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("ResolvedText", "String");
    };
    SectionHeaderCellInfoDescriptionMetadata.d = function (a) {
        SectionHeaderCellInfoDescriptionMetadata.b(a);
        a.n("SectionHeaderCellInfo", function () { return new SectionHeaderCellInfoDescription(); });
        a.m("SectionHeaderCellInfo", SectionHeaderCellInfoDescriptionMetadata.a);
    };
    SectionHeaderCellInfoDescriptionMetadata.$t = markType(SectionHeaderCellInfoDescriptionMetadata, 'SectionHeaderCellInfoDescriptionMetadata');
    SectionHeaderCellInfoDescriptionMetadata.a = null;
    return SectionHeaderCellInfoDescriptionMetadata;
}(Base));
export { SectionHeaderCellInfoDescriptionMetadata };
//# sourceMappingURL=SectionHeaderCellInfoDescriptionMetadata.js.map