/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FragmentBaseDescriptionMetadata } from "./FragmentBaseDescriptionMetadata";
import { LineFragmentDescription } from "./LineFragmentDescription";
/**
 * @hidden
 */
export class LineFragmentDescriptionMetadata extends Base {
    static b(a) {
        if (LineFragmentDescriptionMetadata.a == null) {
            LineFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LineFragmentDescriptionMetadata.c(a, LineFragmentDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FragmentBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        LineFragmentDescriptionMetadata.b(a);
        a.n("LineFragment", () => new LineFragmentDescription());
        a.m("LineFragment", LineFragmentDescriptionMetadata.a);
    }
}
LineFragmentDescriptionMetadata.$t = markType(LineFragmentDescriptionMetadata, 'LineFragmentDescriptionMetadata');
LineFragmentDescriptionMetadata.a = null;
//# sourceMappingURL=LineFragmentDescriptionMetadata.js.map