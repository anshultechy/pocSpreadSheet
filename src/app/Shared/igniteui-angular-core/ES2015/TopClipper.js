/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EdgeClipper } from "./EdgeClipper";
import { Point_$type, markType } from "./type";
/**
 * @hidden
 */
export class TopClipper extends EdgeClipper {
    constructor() {
        super(...arguments);
        this.m = 0;
    }
    e(a) {
        return a.y >= this.m;
    }
    k(a, b) {
        return { $type: Point_$type, x: a.x + (b.x - a.x) * (this.m - a.y) / (b.y - a.y), y: this.m };
    }
}
TopClipper.$t = markType(TopClipper, 'TopClipper', EdgeClipper.$);
//# sourceMappingURL=TopClipper.js.map