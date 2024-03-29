/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnWidthDescription } from "./ColumnWidthDescription";
/**
 * @hidden
 */
export class ColumnWidthDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnWidthDescriptionMetadata.a == null) {
            ColumnWidthDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnWidthDescriptionMetadata.c(a, ColumnWidthDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("IsStarSized", "Boolean");
        b.item("Value", "Number:double");
        b.item("MinimumWidth", "Number:double");
    }
    static d(a) {
        ColumnWidthDescriptionMetadata.b(a);
        a.n("ColumnWidth", () => new ColumnWidthDescription());
        a.m("ColumnWidth", ColumnWidthDescriptionMetadata.a);
    }
}
ColumnWidthDescriptionMetadata.$t = markType(ColumnWidthDescriptionMetadata, 'ColumnWidthDescriptionMetadata');
ColumnWidthDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnWidthDescriptionMetadata.js.map