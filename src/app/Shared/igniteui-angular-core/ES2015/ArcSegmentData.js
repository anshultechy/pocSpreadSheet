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
export class ArcSegmentData extends SegmentData {
    constructor(a, ..._rest) {
        super();
        this._point = null;
        this._isLargeArc = false;
        this._isCounterClockwise = false;
        this._sizeX = 0;
        this._sizeY = 0;
        this._rotationAngle = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.point = new PointData(NaN, NaN);
                    this.isLargeArc = false;
                    this.isCounterClockwise = true;
                    this.rotationAngle = 0;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.point = PointData.b(c.e);
                    this.isLargeArc = c.b;
                    this.isCounterClockwise = c.d == 0;
                    this.sizeX = c.f.width;
                    this.sizeY = c.f.height;
                    this.rotationAngle = c.c;
                }
                break;
        }
    }
    get_type() {
        return "Arc";
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
    get isLargeArc() {
        return this._isLargeArc;
    }
    set isLargeArc(a) {
        this._isLargeArc = a;
    }
    get isCounterClockwise() {
        return this._isCounterClockwise;
    }
    set isCounterClockwise(a) {
        this._isCounterClockwise = a;
    }
    get sizeX() {
        return this._sizeX;
    }
    set sizeX(a) {
        this._sizeX = a;
    }
    get sizeY() {
        return this._sizeY;
    }
    set sizeY(a) {
        this._sizeY = a;
    }
    get rotationAngle() {
        return this._rotationAngle;
    }
    set rotationAngle(a) {
        this._rotationAngle = a;
    }
    a() {
        return "point: { x: " + this.point.x + ", y: " + this.point.y + " }, isLargeArc: " + (this.isLargeArc ? "true" : "false") + ", isCounterClockwise: " + (this.isCounterClockwise ? "true" : "false") + ", sizeX: " + this.sizeX + ", sizeY: " + this.sizeY + ", rotationAngle: " + this.rotationAngle;
    }
    scaleByViewport(a) {
        this.point = new PointData((this.point.x - a.left) / a.width, (this.point.y - a.top) / a.height);
        this.sizeX = this.sizeX / a.width;
        this.sizeY = this.sizeY / a.height;
    }
    getPointsOverride(a, b) {
        a.add(new PointData(this.point.x, this.point.y));
    }
}
ArcSegmentData.$t = markType(ArcSegmentData, 'ArcSegmentData', SegmentData.$);
//# sourceMappingURL=ArcSegmentData.js.map