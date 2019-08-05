/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable$1_$type, markType, getEnumerator } from "./type";
import { HalfEdge } from "./HalfEdge";
import { Dictionary$2 } from "./Dictionary$2";
import { EdgeComparer } from "./EdgeComparer";
/**
 * @hidden
 */
export class HalfEdgeSet extends Base {
    constructor() {
        super();
        this.b = null;
        this.b = new Dictionary$2(HalfEdge.$, Base.$, 2, new EdgeComparer());
    }
    getEnumerator() {
        return getEnumerator(this.b.keys);
    }
    getEnumeratorObject() {
        return this.getEnumerator();
    }
    d(a) {
        this.b.addItem(a, null);
    }
    f(a) {
        this.b.removeItem(a);
    }
    e() {
        this.b.clear();
    }
    get c() {
        return this.b.count;
    }
    a(a) {
        return this.b.containsKey(a);
    }
}
HalfEdgeSet.$t = markType(HalfEdgeSet, 'HalfEdgeSet', Base.$, [IEnumerable$1_$type.specialize(HalfEdge.$)]);
//# sourceMappingURL=HalfEdgeSet.js.map