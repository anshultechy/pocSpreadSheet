/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateCellInfoDescriptionMetadata } from "./TemplateCellInfoDescriptionMetadata";
import { TemplateHeaderCellInfoDescription } from "./TemplateHeaderCellInfoDescription";
/**
 * @hidden
 */
export class TemplateHeaderCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateHeaderCellInfoDescriptionMetadata.a == null) {
            TemplateHeaderCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateHeaderCellInfoDescriptionMetadata.c(a, TemplateHeaderCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        TemplateCellInfoDescriptionMetadata.c(a, b);
        b.item("IsFilterUIVisible", "Boolean");
    }
    static d(a) {
        TemplateHeaderCellInfoDescriptionMetadata.b(a);
        a.n("TemplateHeaderCellInfo", () => new TemplateHeaderCellInfoDescription());
        a.m("TemplateHeaderCellInfo", TemplateHeaderCellInfoDescriptionMetadata.a);
    }
}
TemplateHeaderCellInfoDescriptionMetadata.$t = markType(TemplateHeaderCellInfoDescriptionMetadata, 'TemplateHeaderCellInfoDescriptionMetadata');
TemplateHeaderCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateHeaderCellInfoDescriptionMetadata.js.map