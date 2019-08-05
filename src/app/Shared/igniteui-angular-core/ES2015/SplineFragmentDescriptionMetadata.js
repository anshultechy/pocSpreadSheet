/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineFragmentBaseDescriptionMetadata } from "./SplineFragmentBaseDescriptionMetadata";
import { SplineFragmentDescription } from "./SplineFragmentDescription";
/**
 * @hidden
 */
export class SplineFragmentDescriptionMetadata extends Base {
    static b(a) {
        if (SplineFragmentDescriptionMetadata.a == null) {
            SplineFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineFragmentDescriptionMetadata.c(a, SplineFragmentDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SplineFragmentBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        SplineFragmentDescriptionMetadata.b(a);
        a.n("SplineFragment", () => new SplineFragmentDescription());
        a.m("SplineFragment", SplineFragmentDescriptionMetadata.a);
    }
}
SplineFragmentDescriptionMetadata.$t = markType(SplineFragmentDescriptionMetadata, 'SplineFragmentDescriptionMetadata');
SplineFragmentDescriptionMetadata.a = null;
//# sourceMappingURL=SplineFragmentDescriptionMetadata.js.map