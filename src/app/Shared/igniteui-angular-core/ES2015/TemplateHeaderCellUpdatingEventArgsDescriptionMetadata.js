/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateHeaderCellUpdatingEventArgsDescription } from "./TemplateHeaderCellUpdatingEventArgsDescription";
/**
 * @hidden
 */
export class TemplateHeaderCellUpdatingEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a == null) {
            TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.c(a, TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("TemplateHeaderCellUpdatingEventArgs", () => new TemplateHeaderCellUpdatingEventArgsDescription());
        a.m("TemplateHeaderCellUpdatingEventArgs", TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a);
    }
}
TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.$t = markType(TemplateHeaderCellUpdatingEventArgsDescriptionMetadata, 'TemplateHeaderCellUpdatingEventArgsDescriptionMetadata');
TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.js.map