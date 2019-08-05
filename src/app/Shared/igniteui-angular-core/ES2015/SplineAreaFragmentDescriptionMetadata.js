/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineFragmentBaseDescriptionMetadata } from "./SplineFragmentBaseDescriptionMetadata";
import { SplineAreaFragmentDescription } from "./SplineAreaFragmentDescription";
/**
 * @hidden
 */
export class SplineAreaFragmentDescriptionMetadata extends Base {
    static b(a) {
        if (SplineAreaFragmentDescriptionMetadata.a == null) {
            SplineAreaFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineAreaFragmentDescriptionMetadata.c(a, SplineAreaFragmentDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SplineFragmentBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        SplineAreaFragmentDescriptionMetadata.b(a);
        a.n("SplineAreaFragment", () => new SplineAreaFragmentDescription());
        a.m("SplineAreaFragment", SplineAreaFragmentDescriptionMetadata.a);
    }
}
SplineAreaFragmentDescriptionMetadata.$t = markType(SplineAreaFragmentDescriptionMetadata, 'SplineAreaFragmentDescriptionMetadata');
SplineAreaFragmentDescriptionMetadata.a = null;
//# sourceMappingURL=SplineAreaFragmentDescriptionMetadata.js.map