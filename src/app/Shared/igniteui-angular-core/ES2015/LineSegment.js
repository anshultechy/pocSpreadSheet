/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PathSegment } from "./PathSegment";
import { markType } from "./type";
/**
 * @hidden
 */
export class LineSegment extends PathSegment {
    constructor(a, ..._rest) {
        super();
        this.b = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    this.c = c;
                }
                break;
            case 1: break;
        }
    }
    get c() {
        return this.b;
    }
    set c(a) {
        this.b = a;
    }
    get_a() {
        return 0;
    }
    get a() {
        return this.get_a();
    }
}
LineSegment.$t = markType(LineSegment, 'LineSegment', PathSegment.$);
//# sourceMappingURL=LineSegment.js.map