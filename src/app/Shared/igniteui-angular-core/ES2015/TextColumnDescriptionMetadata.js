/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { TextColumnDescription } from "./TextColumnDescription";
/**
 * @hidden
 */
export class TextColumnDescriptionMetadata extends Base {
    static b(a) {
        if (TextColumnDescriptionMetadata.a == null) {
            TextColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TextColumnDescriptionMetadata.c(a, TextColumnDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ColumnDescriptionMetadata.c(a, b);
    }
    static d(a) {
        TextColumnDescriptionMetadata.b(a);
        a.n("TextColumn", () => new TextColumnDescription());
        a.m("TextColumn", TextColumnDescriptionMetadata.a);
    }
}
TextColumnDescriptionMetadata.$t = markType(TextColumnDescriptionMetadata, 'TextColumnDescriptionMetadata');
TextColumnDescriptionMetadata.a = null;
//# sourceMappingURL=TextColumnDescriptionMetadata.js.map