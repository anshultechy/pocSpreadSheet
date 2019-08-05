/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FragmentBaseDescriptionMetadata } from "./FragmentBaseDescriptionMetadata";
import { AreaFragmentDescription } from "./AreaFragmentDescription";
/**
 * @hidden
 */
export class AreaFragmentDescriptionMetadata extends Base {
    static b(a) {
        if (AreaFragmentDescriptionMetadata.a == null) {
            AreaFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AreaFragmentDescriptionMetadata.c(a, AreaFragmentDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FragmentBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        AreaFragmentDescriptionMetadata.b(a);
        a.n("AreaFragment", () => new AreaFragmentDescription());
        a.m("AreaFragment", AreaFragmentDescriptionMetadata.a);
    }
}
AreaFragmentDescriptionMetadata.$t = markType(AreaFragmentDescriptionMetadata, 'AreaFragmentDescriptionMetadata');
AreaFragmentDescriptionMetadata.a = null;
//# sourceMappingURL=AreaFragmentDescriptionMetadata.js.map