/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFragmentDescriptionMetadata } from "./ColumnFragmentDescriptionMetadata";
import { BarFragmentDescription } from "./BarFragmentDescription";
/**
 * @hidden
 */
export class BarFragmentDescriptionMetadata extends Base {
    static b(a) {
        if (BarFragmentDescriptionMetadata.a == null) {
            BarFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BarFragmentDescriptionMetadata.c(a, BarFragmentDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ColumnFragmentDescriptionMetadata.c(a, b);
    }
    static d(a) {
        BarFragmentDescriptionMetadata.b(a);
        a.n("BarFragment", () => new BarFragmentDescription());
        a.m("BarFragment", BarFragmentDescriptionMetadata.a);
    }
}
BarFragmentDescriptionMetadata.$t = markType(BarFragmentDescriptionMetadata, 'BarFragmentDescriptionMetadata');
BarFragmentDescriptionMetadata.a = null;
//# sourceMappingURL=BarFragmentDescriptionMetadata.js.map