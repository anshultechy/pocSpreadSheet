/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineSeriesBaseDescriptionMetadata } from "./SplineSeriesBaseDescriptionMetadata";
/**
 * @hidden
 */
export class SplineFragmentBaseDescriptionMetadata extends Base {
    static b(a) {
        if (SplineFragmentBaseDescriptionMetadata.a == null) {
            SplineFragmentBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineFragmentBaseDescriptionMetadata.c(a, SplineFragmentBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SplineSeriesBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        SplineFragmentBaseDescriptionMetadata.b(a);
        a.m("SplineFragmentBase", SplineFragmentBaseDescriptionMetadata.a);
    }
}
SplineFragmentBaseDescriptionMetadata.$t = markType(SplineFragmentBaseDescriptionMetadata, 'SplineFragmentBaseDescriptionMetadata');
SplineFragmentBaseDescriptionMetadata.a = null;
//# sourceMappingURL=SplineFragmentBaseDescriptionMetadata.js.map