/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateCellUpdatingEventArgsDescriptionMetadata } from "./TemplateCellUpdatingEventArgsDescriptionMetadata";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { TemplateColumnDescription } from "./TemplateColumnDescription";
/**
 * @hidden
 */
export class TemplateColumnDescriptionMetadata extends Base {
    static b(a) {
        if (TemplateColumnDescriptionMetadata.a == null) {
            TemplateColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateColumnDescriptionMetadata.c(a, TemplateColumnDescriptionMetadata.a);
            TemplateCellUpdatingEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        ColumnDescriptionMetadata.c(a, b);
        b.item("CellUpdatingRef", "EventRef::cellUpdating");
    }
    static d(a) {
        TemplateColumnDescriptionMetadata.b(a);
        a.n("TemplateColumn", () => new TemplateColumnDescription());
        a.m("TemplateColumn", TemplateColumnDescriptionMetadata.a);
    }
}
TemplateColumnDescriptionMetadata.$t = markType(TemplateColumnDescriptionMetadata, 'TemplateColumnDescriptionMetadata');
TemplateColumnDescriptionMetadata.a = null;
//# sourceMappingURL=TemplateColumnDescriptionMetadata.js.map