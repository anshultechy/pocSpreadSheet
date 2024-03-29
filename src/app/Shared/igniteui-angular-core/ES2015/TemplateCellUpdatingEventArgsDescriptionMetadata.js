/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateCellUpdatingEventArgsDescription } from "./TemplateCellUpdatingEventArgsDescription";
/**
 * @hidden
 */
export class TemplateCellUpdatingEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateCellUpdatingEventArgsDescriptionMetadata.a == null) {
            TemplateCellUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateCellUpdatingEventArgsDescriptionMetadata.c(a, TemplateCellUpdatingEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        TemplateCellUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("TemplateCellUpdatingEventArgs", () => new TemplateCellUpdatingEventArgsDescription());
        a.m("TemplateCellUpdatingEventArgs", TemplateCellUpdatingEventArgsDescriptionMetadata.a);
    }
}
TemplateCellUpdatingEventArgsDescriptionMetadata.$t = markType(TemplateCellUpdatingEventArgsDescriptionMetadata, 'TemplateCellUpdatingEventArgsDescriptionMetadata');
TemplateCellUpdatingEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateCellUpdatingEventArgsDescriptionMetadata.js.map