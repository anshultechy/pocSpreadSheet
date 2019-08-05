/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { TemplateCellInfoDescription } from "./TemplateCellInfoDescription";
/**
 * @hidden
 */
export class TemplateCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateCellInfoDescriptionMetadata.a == null) {
            TemplateCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateCellInfoDescriptionMetadata.c(a, TemplateCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
    }
    static d(a) {
        TemplateCellInfoDescriptionMetadata.b(a);
        a.n("TemplateCellInfo", () => new TemplateCellInfoDescription());
        a.m("TemplateCellInfo", TemplateCellInfoDescriptionMetadata.a);
    }
}
TemplateCellInfoDescriptionMetadata.$t = markType(TemplateCellInfoDescriptionMetadata, 'TemplateCellInfoDescriptionMetadata');
TemplateCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateCellInfoDescriptionMetadata.js.map