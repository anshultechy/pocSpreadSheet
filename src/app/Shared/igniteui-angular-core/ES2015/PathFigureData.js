/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { PointData } from "./PointData";
import { List$1 } from "./List$1";
import { SegmentData } from "./SegmentData";
import { LineSegmentData } from "./LineSegmentData";
import { PolylineSegmentData } from "./PolylineSegmentData";
import { ArcSegmentData } from "./ArcSegmentData";
import { PolyBezierSegmentData } from "./PolyBezierSegmentData";
import { BezierSegmentData } from "./BezierSegmentData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
export class PathFigureData extends Base {
    constructor(a, ..._rest) {
        super();
        this._startPoint = null;
        this._segments = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.segments = new List$1(SegmentData.$, 0);
                    this.startPoint = new PointData(NaN, NaN);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.segments = new List$1(SegmentData.$, 0);
                    this.startPoint = PointData.b(c._startPoint);
                    for (let d = 0; d < c._segments.count; d++) {
                        let e = c._segments._inner[d];
                        let f = null;
                        switch (e.a) {
                            case 0:
                                f = new LineSegmentData(1, e);
                                break;
                            case 3:
                                f = new PolylineSegmentData(1, e);
                                break;
                            case 4:
                                f = new ArcSegmentData(1, e);
                                break;
                            case 2:
                                f = new PolyBezierSegmentData(1, e);
                                break;
                            case 1:
                                f = new BezierSegmentData(1, e);
                                break;
                        }
                        this.segments.add(f);
                    }
                }
                break;
        }
    }
    get startPoint() {
        return this._startPoint;
    }
    set startPoint(a) {
        this._startPoint = a;
    }
    get segments() {
        return this._segments;
    }
    set segments(a) {
        this._segments = a;
    }
    serialize() {
        let a = new StringBuilder(0);
        a.u("{");
        if (this.startPoint != null) {
            a.u("startPoint: { x: " + this.startPoint.x + ", y: " + this.startPoint.y + "}, ");
        }
        a.u("segments: [");
        for (let b = 0; b < this.segments.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l(this.segments._inner[b].serialize());
        }
        a.u("]");
        a.u("}");
        return a.toString();
    }
    d(a) {
        if (this.startPoint != null) {
            this.startPoint = new PointData((this.startPoint.x - a.left) / a.width, (this.startPoint.y - a.top) / a.height);
        }
        for (let b = 0; b < this.segments.count; b++) {
            this.segments._inner[b].scaleByViewport(a);
        }
    }
    getPointsOverride(a, b) {
        let c = new List$1(PointData.$, 0);
        a.add(c);
        if (!b.ignoreFigureStartPoint) {
            c.add(new PointData(this.startPoint.x, this.startPoint.y));
        }
        for (let d = 0; d < this.segments.count; d++) {
            this.segments._inner[d].getPointsOverride(c, b);
        }
    }
}
PathFigureData.$t = markType(PathFigureData, 'PathFigureData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=PathFigureData.js.map