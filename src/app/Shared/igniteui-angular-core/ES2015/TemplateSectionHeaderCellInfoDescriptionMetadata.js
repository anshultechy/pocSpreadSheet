/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SectionHeaderCellInfoDescriptionMetadata } from "./SectionHeaderCellInfoDescriptionMetadata";
import { TemplateSectionHeaderCellInfoDescription } from "./TemplateSectionHeaderCellInfoDescription";
/**
 * @hidden
 */
export class TemplateSectionHeaderCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateSectionHeaderCellInfoDescriptionMetadata.a == null) {
            TemplateSectionHeaderCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateSectionHeaderCellInfoDescriptionMetadata.c(a, TemplateSectionHeaderCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SectionHeaderCellInfoDescriptionMetadata.c(a, b);
    }
    static d(a) {
        TemplateSectionHeaderCellInfoDescriptionMetadata.b(a);
        a.n("TemplateSectionHeaderCellInfo", () => new TemplateSectionHeaderCellInfoDescription());
        a.m("TemplateSectionHeaderCellInfo", TemplateSectionHeaderCellInfoDescriptionMetadata.a);
    }
}
TemplateSectionHeaderCellInfoDescriptionMetadata.$t = markType(TemplateSectionHeaderCellInfoDescriptionMetadata, 'TemplateSectionHeaderCellInfoDescriptionMetadata');
TemplateSectionHeaderCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateSectionHeaderCellInfoDescriptionMetadata.js.map