/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SortDescriptionDescription } from "./SortDescriptionDescription";
/**
 * @hidden
 */
export class SortDescriptionDescriptionMetadata extends Base {
    static b(a) {
        if (SortDescriptionDescriptionMetadata.a == null) {
            SortDescriptionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SortDescriptionDescriptionMetadata.c(a, SortDescriptionDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("PropertyName", "String");
        b.item("Direction", "ExportedType:string:ListSortDirection");
    }
    static d(a) {
        SortDescriptionDescriptionMetadata.b(a);
        a.n("SortDescription", () => new SortDescriptionDescription());
        a.m("SortDescription", SortDescriptionDescriptionMetadata.a);
    }
}
SortDescriptionDescriptionMetadata.$t = markType(SortDescriptionDescriptionMetadata, 'SortDescriptionDescriptionMetadata');
SortDescriptionDescriptionMetadata.a = null;
//# sourceMappingURL=SortDescriptionDescriptionMetadata.js.map