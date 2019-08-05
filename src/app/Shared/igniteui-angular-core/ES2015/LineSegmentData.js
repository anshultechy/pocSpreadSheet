/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SegmentData } from "./SegmentData";
import { PointData } from "./PointData";
import { markType } from "./type";
/**
 * @hidden
 */
export class LineSegmentData extends SegmentData {
    constructor(a, ..._rest) {
        super();
        this._point = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.point = new PointData(NaN, NaN);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.point = PointData.b(c.c);
                }
                break;
        }
    }
    get_type() {
        return "Line";
    }
    get type() {
        return this.get_type();
    }
    get point() {
        return this._point;
    }
    set point(a) {
        this._point = a;
    }
    a() {
        return "point: { x: " + this.point.x + ", y: " + this.point.y + "}";
    }
    scaleByViewport(a) {
        this.point = new PointData((this.point.x - a.left) / a.width, (this.point.y - a.top) / a.height);
    }
    getPointsOverride(a, b) {
        a.add(new PointData(this.point.x, this.point.y));
    }
}
LineSegmentData.$t = markType(LineSegmentData, 'LineSegmentData', SegmentData.$);
//# sourceMappingURL=LineSegmentData.js.map