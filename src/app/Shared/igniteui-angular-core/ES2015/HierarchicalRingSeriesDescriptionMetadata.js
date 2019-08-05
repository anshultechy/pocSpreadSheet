/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RingSeriesBaseDescriptionMetadata } from "./RingSeriesBaseDescriptionMetadata";
import { HierarchicalRingSeriesDescription } from "./HierarchicalRingSeriesDescription";
/**
 * @hidden
 */
export class HierarchicalRingSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (HierarchicalRingSeriesDescriptionMetadata.a == null) {
            HierarchicalRingSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HierarchicalRingSeriesDescriptionMetadata.c(a, HierarchicalRingSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        RingSeriesBaseDescriptionMetadata.c(a, b);
        b.item("ChildrenMemberPath", "String");
    }
    static d(a) {
        HierarchicalRingSeriesDescriptionMetadata.b(a);
        a.n("HierarchicalRingSeries", () => new HierarchicalRingSeriesDescription());
        a.m("HierarchicalRingSeries", HierarchicalRingSeriesDescriptionMetadata.a);
    }
}
HierarchicalRingSeriesDescriptionMetadata.$t = markType(HierarchicalRingSeriesDescriptionMetadata, 'HierarchicalRingSeriesDescriptionMetadata');
HierarchicalRingSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=HierarchicalRingSeriesDescriptionMetadata.js.map