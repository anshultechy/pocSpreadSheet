/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSortDescriptionDescription } from "./ColumnSortDescriptionDescription";
/**
 * @hidden
 */
export class ColumnSortDescriptionDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnSortDescriptionDescriptionMetadata.a == null) {
            ColumnSortDescriptionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnSortDescriptionDescriptionMetadata.c(a, ColumnSortDescriptionDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("PropertyPath", "String");
        b.item("SortDirection", "ExportedType:string:ListSortDirection");
    }
    static d(a) {
        ColumnSortDescriptionDescriptionMetadata.b(a);
        a.n("ColumnSortDescription", () => new ColumnSortDescriptionDescription());
        a.m("ColumnSortDescription", ColumnSortDescriptionDescriptionMetadata.a);
    }
}
ColumnSortDescriptionDescriptionMetadata.$t = markType(ColumnSortDescriptionDescriptionMetadata, 'ColumnSortDescriptionDescriptionMetadata');
ColumnSortDescriptionDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnSortDescriptionDescriptionMetadata.js.map