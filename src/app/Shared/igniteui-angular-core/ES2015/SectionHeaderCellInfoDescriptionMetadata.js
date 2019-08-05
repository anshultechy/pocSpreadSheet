/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { SectionHeaderCellInfoDescription } from "./SectionHeaderCellInfoDescription";
/**
 * @hidden
 */
export class SectionHeaderCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (SectionHeaderCellInfoDescriptionMetadata.a == null) {
            SectionHeaderCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SectionHeaderCellInfoDescriptionMetadata.c(a, SectionHeaderCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("ResolvedText", "String");
    }
    static d(a) {
        SectionHeaderCellInfoDescriptionMetadata.b(a);
        a.n("SectionHeaderCellInfo", () => new SectionHeaderCellInfoDescription());
        a.m("SectionHeaderCellInfo", SectionHeaderCellInfoDescriptionMetadata.a);
    }
}
SectionHeaderCellInfoDescriptionMetadata.$t = markType(SectionHeaderCellInfoDescriptionMetadata, 'SectionHeaderCellInfoDescriptionMetadata');
SectionHeaderCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=SectionHeaderCellInfoDescriptionMetadata.js.map