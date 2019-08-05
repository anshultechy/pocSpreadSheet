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
export class RectangleGeometryData extends GeometryData {
    constructor() {
        super(...arguments);
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
    }
    get_type() {
        return "Rectangle";
    }
    get type() {
        return this.get_type();
    }
    get x() {
        return this._x;
    }
    set x(a) {
        this._x = a;
    }
    get y() {
        return this._y;
    }
    set y(a) {
        this._y = a;
    }
    get width() {
        return this._width;
    }
    set width(a) {
        this._width = a;
    }
    get height() {
        return this._height;
    }
    set height(a) {
        this._height = a;
    }
    a() {
        return "x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height;
    }
    scaleByViewport(a) {
        this.x = (this.x - a.left) / a.width;
        this.y = (this.y - a.top) / a.height;
        this.width = this.width / a.width;
        this.height = this.height / a.height;
    }
    getPointsOverride(a, b) {
        let c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.x, this.y));
        c.add(new PointData(this.x + this.width, this.y));
        c.add(new PointData(this.x + this.width, this.y + this.height));
        c.add(new PointData(this.x, this.y + this.height));
    }
}
RectangleGeometryData.$t = markType(RectangleGeometryData, 'RectangleGeometryData', GeometryData.$);
//# sourceMappingURL=RectangleGeometryData.js.map