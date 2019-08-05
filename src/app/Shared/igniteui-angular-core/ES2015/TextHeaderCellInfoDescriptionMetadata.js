/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TextCellInfoDescriptionMetadata } from "./TextCellInfoDescriptionMetadata";
import { TextHeaderCellInfoDescription } from "./TextHeaderCellInfoDescription";
/**
 * @hidden
 */
export class TextHeaderCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (TextHeaderCellInfoDescriptionMetadata.a == null) {
            TextHeaderCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TextHeaderCellInfoDescriptionMetadata.c(a, TextHeaderCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        TextCellInfoDescriptionMetadata.c(a, b);
        b.item("IsFilterUIVisible", "Boolean");
    }
    static d(a) {
        TextHeaderCellInfoDescriptionMetadata.b(a);
        a.n("TextHeaderCellInfo", () => new TextHeaderCellInfoDescription());
        a.m("TextHeaderCellInfo", TextHeaderCellInfoDescriptionMetadata.a);
    }
}
TextHeaderCellInfoDescriptionMetadata.$t = markType(TextHeaderCellInfoDescriptionMetadata, 'TextHeaderCellInfoDescriptionMetadata');
TextHeaderCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=TextHeaderCellInfoDescriptionMetadata.js.map