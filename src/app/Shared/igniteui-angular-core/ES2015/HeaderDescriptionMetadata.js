/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
/**
 * @hidden
 */
export class HeaderDescriptionMetadata extends Base {
    static b(a) {
        if (HeaderDescriptionMetadata.a == null) {
            HeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HeaderDescriptionMetadata.c(a, HeaderDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
        b.item("PaddingLeft", "Number:int");
        b.item("PaddingTop", "Number:int");
        b.item("PaddingRight", "Number:int");
        b.item("PaddingBottom", "Number:int");
    }
    static d(a) {
        HeaderDescriptionMetadata.b(a);
        a.m("Header", HeaderDescriptionMetadata.a);
    }
}
HeaderDescriptionMetadata.$t = markType(HeaderDescriptionMetadata, 'HeaderDescriptionMetadata');
HeaderDescriptionMetadata.a = null;
//# sourceMappingURL=HeaderDescriptionMetadata.js.map