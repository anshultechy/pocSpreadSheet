/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
import { SectionFooterDescription } from "./SectionFooterDescription";
/**
 * @hidden
 */
export class SectionFooterDescriptionMetadata extends Base {
    static b(a) {
        if (SectionFooterDescriptionMetadata.a == null) {
            SectionFooterDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SectionFooterDescriptionMetadata.c(a, SectionFooterDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        SectionFooterDescriptionMetadata.b(a);
        a.n("SectionFooter", () => new SectionFooterDescription());
        a.m("SectionFooter", SectionFooterDescriptionMetadata.a);
    }
}
SectionFooterDescriptionMetadata.$t = markType(SectionFooterDescriptionMetadata, 'SectionFooterDescriptionMetadata');
SectionFooterDescriptionMetadata.a = null;
//# sourceMappingURL=SectionFooterDescriptionMetadata.js.map