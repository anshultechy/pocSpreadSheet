/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateSectionHeaderCellUpdatingEventArgsDescription } from "./TemplateSectionHeaderCellUpdatingEventArgsDescription";
/**
 * @hidden
 */
export class TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.a == null) {
            TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.c(a, TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("TemplateSectionHeaderCellUpdatingEventArgs", () => new TemplateSectionHeaderCellUpdatingEventArgsDescription());
        a.m("TemplateSectionHeaderCellUpdatingEventArgs", TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.a);
    }
}
TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.$t = markType(TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata, 'TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata');
TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.js.map