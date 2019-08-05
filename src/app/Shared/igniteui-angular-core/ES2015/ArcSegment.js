/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PathSegment } from "./PathSegment";
import { markType } from "./type";
import { Size } from "./Size";
/**
 * @hidden
 */
export class ArcSegment extends PathSegment {
    constructor() {
        super();
        this.e = null;
        this.b = false;
        this.d = 0;
        this.f = new Size();
        this.c = 0;
        this.b = false;
        this.d = 0;
    }
    get_a() {
        return 4;
    }
    get a() {
        return this.get_a();
    }
}
ArcSegment.$t = markType(ArcSegment, 'ArcSegment', PathSegment.$);
//# sourceMappingURL=ArcSegment.js.map