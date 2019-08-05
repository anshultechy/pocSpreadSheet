/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class HierarchicalRingSeriesDescription extends RingSeriesBaseDescription {
    constructor() {
        super();
        this.bu = null;
    }
    get_type() {
        return "HierarchicalRingSeries";
    }
    get childrenMemberPath() {
        return this.bu;
    }
    set childrenMemberPath(a) {
        this.bu = a;
        this.e("ChildrenMemberPath");
    }
}
HierarchicalRingSeriesDescription.$t = markType(HierarchicalRingSeriesDescription, 'HierarchicalRingSeriesDescription', RingSeriesBaseDescription.$);
//# sourceMappingURL=HierarchicalRingSeriesDescription.js.map