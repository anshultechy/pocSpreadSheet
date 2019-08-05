/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { GeometryData } from "./GeometryData";
import { markType } from "./type";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
/**
 * @hidden
 */
export class EllipseGeometryData extends GeometryData {
    constructor() {
        super(...arguments);
        this._centerX = 0;
        this._centerY = 0;
        this._radiusX = 0;
        this._radiusY = 0;
    }
    get_type() {
        return "Ellipse";
    }
    get type() {
        return this.get_type();
    }
    get centerX() {
        return this._centerX;
    }
    set centerX(a) {
        this._centerX = a;
    }
    get centerY() {
        return this._centerY;
    }
    set centerY(a) {
        this._centerY = a;
    }
    get radiusX() {
        return this._radiusX;
    }
    set radiusX(a) {
        this._radiusX = a;
    }
    get radiusY() {
        return this._radiusY;
    }
    set radiusY(a) {
        this._radiusY = a;
    }
    a() {
        return "centerX: " + this.centerX + ", centerY: " + this.centerY + ", radiusX: " + this.radiusX + ", radiusY: " + this.radiusY;
    }
    scaleByViewport(a) {
        this.centerX = (this.centerX - a.left) / a.width;
        this.centerY = (this.centerY - a.top) / a.height;
        this.radiusX = this.radiusX / a.width;
        this.radiusY = this.radiusY / a.height;
    }
    getPointsOverride(a, b) {
        let c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.centerX, this.centerY));
    }
}
EllipseGeometryData.$t = markType(EllipseGeometryData, 'EllipseGeometryData', GeometryData.$);
//# sourceMappingURL=EllipseGeometryData.js.map