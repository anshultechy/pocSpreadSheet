/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
import { SectionHeaderDescription } from "./SectionHeaderDescription";
/**
 * @hidden
 */
export class SectionHeaderDescriptionMetadata extends Base {
    static b(a) {
        if (SectionHeaderDescriptionMetadata.a == null) {
            SectionHeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SectionHeaderDescriptionMetadata.c(a, SectionHeaderDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
        b.item("SelectedBackground", "Brush");
        b.item("ActualSelectedBackground", "Brush");
        b.item("PaddingLeft", "Number:int");
        b.item("PaddingTop", "Number:int");
        b.item("PaddingRight", "Number:int");
        b.item("PaddingBottom", "Number:int");
    }
    static d(a) {
        SectionHeaderDescriptionMetadata.b(a);
        a.n("SectionHeader", () => new SectionHeaderDescription());
        a.m("SectionHeader", SectionHeaderDescriptionMetadata.a);
    }
}
SectionHeaderDescriptionMetadata.$t = markType(SectionHeaderDescriptionMetadata, 'SectionHeaderDescriptionMetadata');
SectionHeaderDescriptionMetadata.a = null;
//# sourceMappingURL=SectionHeaderDescriptionMetadata.js.map