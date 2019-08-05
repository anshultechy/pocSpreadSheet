/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PathSegment } from "./PathSegment";
import { PointCollection } from "./PointCollection";
import { markType } from "./type";
/**
 * @hidden
 */
export class PolyLineSegment extends PathSegment {
    constructor() {
        super();
        this._points = null;
        this._points = new PointCollection(0);
    }
    get points() {
        return this._points;
    }
    set points(a) {
        this._points = a;
    }
    get_a() {
        return 3;
    }
    get a() {
        return this.get_a();
    }
}
PolyLineSegment.$t = markType(PolyLineSegment, 'PolyLineSegment', PathSegment.$);
//# sourceMappingURL=PolyLineSegment.js.map