/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateHeaderCellUpdatingEventArgsDescriptionMetadata } from "./TemplateHeaderCellUpdatingEventArgsDescriptionMetadata";
import { HeaderDescriptionMetadata } from "./HeaderDescriptionMetadata";
import { TemplateHeaderDescription } from "./TemplateHeaderDescription";
/**
 * @hidden
 */
export class TemplateHeaderDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateHeaderDescriptionMetadata.a == null) {
            TemplateHeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateHeaderDescriptionMetadata.c(a, TemplateHeaderDescriptionMetadata.a);
            TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        HeaderDescriptionMetadata.c(a, b);
        b.item("CellUpdatingRef", "EventRef::cellUpdating");
    }
    static d(a) {
        TemplateHeaderDescriptionMetadata.b(a);
        a.n("TemplateHeader", () => new TemplateHeaderDescription());
        a.m("TemplateHeader", TemplateHeaderDescriptionMetadata.a);
    }
}
TemplateHeaderDescriptionMetadata.$t = markType(TemplateHeaderDescriptionMetadata, 'TemplateHeaderDescriptionMetadata');
TemplateHeaderDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateHeaderDescriptionMetadata.js.map