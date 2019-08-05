/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SegmentData } from "./SegmentData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
export class BezierSegmentData extends SegmentData {
    constructor(a, ..._rest) {
        super();
        this._points = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.points = new List$1(PointData.$, 0);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.points = new List$1(PointData.$, 0);
                    this.points.add(PointData.b(c.e));
                    this.points.add(PointData.b(c.f));
                    this.points.add(PointData.b(c.g));
                }
                break;
        }
    }
    get_type() {
        return "Bezier";
    }
    get type() {
        return this.get_type();
    }
    get points() {
        return this._points;
    }
    set points(a) {
        this._points = a;
    }
    a() {
        let a = new StringBuilder(0);
        a.u("points: [");
        for (let b = 0; b < this.points.count; b++) {
            if (this.points._inner[b] == null) {
                break;
            }
            if (b != 0) {
                a.l(", ");
            }
            a.l("{ x: " + this.points._inner[b].x + ", y: " + this.points._inner[b].y + "}");
        }
        a.u("]");
        return a.toString();
    }
    scaleByViewport(a) {
        for (let b = 0; b < this.points.count; b++) {
            if (this.points._inner[b] == null) {
                break;
            }
            this.points._inner[b] = new PointData((this.points._inner[b].x - a.left) / a.width, (this.points._inner[b].y - a.top) / a.height);
        }
    }
    getPointsOverride(a, b) {
        for (let c = 0; c < this.points.count; c++) {
            a.add(new PointData(this.points._inner[c].x, this.points._inner[c].y));
        }
    }
}
BezierSegmentData.$t = markType(BezierSegmentData, 'BezierSegmentData', SegmentData.$);
//# sourceMappingURL=BezierSegmentData.js.map