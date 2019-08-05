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
export class RightClipper extends EdgeClipper {
    constructor() {
        super(...arguments);
        this.m = 0;
    }
    e(a) {
        return a.x <= this.m;
    }
    k(a, b) {
        return { $type: Point_$type, x: this.m, y: a.y + (b.y - a.y) * (this.m - a.x) / (b.x - a.x) };
    }
}
RightClipper.$t = markType(RightClipper, 'RightClipper', EdgeClipper.$);
//# sourceMappingURL=RightClipper.js.map