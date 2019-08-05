/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEqualityComparer$1_$type, markType } from "./type";
import { HalfEdge } from "./HalfEdge";
/**
 * @hidden
 */
export class EdgeComparer extends Base {
    equalsC(a, b) {
        return (a.a == b.a && a.b == b.b) || (a.a == b.b && a.b == b.a);
    }
    getHashCodeC(a) {
        return 65536 * Math.max(a.a, a.b) + Math.min(a.a, a.b);
    }
}
EdgeComparer.$t = markType(EdgeComparer, 'EdgeComparer', Base.$, [IEqualityComparer$1_$type.specialize(HalfEdge.$)]);
//# sourceMappingURL=EdgeComparer.js.map