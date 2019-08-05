/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { TextCellInfoDescription } from "./TextCellInfoDescription";
/**
 * @hidden
 */
export class TextCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (TextCellInfoDescriptionMetadata.a == null) {
            TextCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TextCellInfoDescriptionMetadata.c(a, TextCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("TextValue", "String");
    }
    static d(a) {
        TextCellInfoDescriptionMetadata.b(a);
        a.n("TextCellInfo", () => new TextCellInfoDescription());
        a.m("TextCellInfo", TextCellInfoDescriptionMetadata.a);
    }
}
TextCellInfoDescriptionMetadata.$t = markType(TextCellInfoDescriptionMetadata, 'TextCellInfoDescriptionMetadata');
TextCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=TextCellInfoDescriptionMetadata.js.map