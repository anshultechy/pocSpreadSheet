/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleSelectorDescription } from "./StyleSelectorDescription";
/**
 * @hidden
 */
export class StyleSelectorDescriptionMetadata extends Base {
    static b(a) {
        if (StyleSelectorDescriptionMetadata.a == null) {
            StyleSelectorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StyleSelectorDescriptionMetadata.c(a, StyleSelectorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        StyleSelectorDescriptionMetadata.b(a);
        a.n("StyleSelector", () => new StyleSelectorDescription());
        a.m("StyleSelector", StyleSelectorDescriptionMetadata.a);
    }
}
StyleSelectorDescriptionMetadata.$t = markType(StyleSelectorDescriptionMetadata, 'StyleSelectorDescriptionMetadata');
StyleSelectorDescriptionMetadata.a = null;
//# sourceMappingURL=StyleSelectorDescriptionMetadata.js.map