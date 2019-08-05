/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HeaderDescriptionMetadata } from "./HeaderDescriptionMetadata";
import { TextHeaderDescription } from "./TextHeaderDescription";
/**
 * @hidden
 */
export class TextHeaderDescriptionMetadata extends Base {
    static b(a) {
        if (TextHeaderDescriptionMetadata.a == null) {
            TextHeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TextHeaderDescriptionMetadata.c(a, TextHeaderDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HeaderDescriptionMetadata.c(a, b);
    }
    static d(a) {
        TextHeaderDescriptionMetadata.b(a);
        a.n("TextHeader", () => new TextHeaderDescription());
        a.m("TextHeader", TextHeaderDescriptionMetadata.a);
    }
}
TextHeaderDescriptionMetadata.$t = markType(TextHeaderDescriptionMetadata, 'TextHeaderDescriptionMetadata');
TextHeaderDescriptionMetadata.a = null;
//# sourceMappingURL=TextHeaderDescriptionMetadata.js.map