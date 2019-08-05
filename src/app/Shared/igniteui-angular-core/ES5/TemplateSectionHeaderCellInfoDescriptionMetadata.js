/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SectionHeaderCellInfoDescriptionMetadata } from "./SectionHeaderCellInfoDescriptionMetadata";
import { TemplateSectionHeaderCellInfoDescription } from "./TemplateSectionHeaderCellInfoDescription";
/**
 * @hidden
 */
var TemplateSectionHeaderCellInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateSectionHeaderCellInfoDescriptionMetadata, _super);
    function TemplateSectionHeaderCellInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateSectionHeaderCellInfoDescriptionMetadata.b = function (a) {
        if (TemplateSectionHeaderCellInfoDescriptionMetadata.a == null) {
            TemplateSectionHeaderCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateSectionHeaderCellInfoDescriptionMetadata.c(a, TemplateSectionHeaderCellInfoDescriptionMetadata.a);
        }
    };
    TemplateSectionHeaderCellInfoDescriptionMetadata.c = function (a, b) {
        SectionHeaderCellInfoDescriptionMetadata.c(a, b);
    };
    TemplateSectionHeaderCellInfoDescriptionMetadata.d = function (a) {
        TemplateSectionHeaderCellInfoDescriptionMetadata.b(a);
        a.n("TemplateSectionHeaderCellInfo", function () { return new TemplateSectionHeaderCellInfoDescription(); });
        a.m("TemplateSectionHeaderCellInfo", TemplateSectionHeaderCellInfoDescriptionMetadata.a);
    };
    TemplateSectionHeaderCellInfoDescriptionMetadata.$t = markType(TemplateSectionHeaderCellInfoDescriptionMetadata, 'TemplateSectionHeaderCellInfoDescriptionMetadata');
    TemplateSectionHeaderCellInfoDescriptionMetadata.a = null;
    return TemplateSectionHeaderCellInfoDescriptionMetadata;
}(Base));
export { TemplateSectionHeaderCellInfoDescriptionMetadata };
//# sourceMappingURL=TemplateSectionHeaderCellInfoDescriptionMetadata.js.map