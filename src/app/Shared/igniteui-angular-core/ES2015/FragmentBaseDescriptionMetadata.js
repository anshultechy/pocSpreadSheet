/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
export class FragmentBaseDescriptionMetadata extends Base {
    static b(a) {
        if (FragmentBaseDescriptionMetadata.a == null) {
            FragmentBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FragmentBaseDescriptionMetadata.c(a, FragmentBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        FragmentBaseDescriptionMetadata.b(a);
        a.m("FragmentBase", FragmentBaseDescriptionMetadata.a);
    }
}
FragmentBaseDescriptionMetadata.$t = markType(FragmentBaseDescriptionMetadata, 'FragmentBaseDescriptionMetadata');
FragmentBaseDescriptionMetadata.a = null;
//# sourceMappingURL=FragmentBaseDescriptionMetadata.js.map