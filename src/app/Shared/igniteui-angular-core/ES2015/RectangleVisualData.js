/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { markType } from "./type";
import { AppearanceHelper } from "./AppearanceHelper";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
/**
 * @hidden
 */
export class RectangleVisualData extends PrimitiveVisualData {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(1, "rect1");
                    this._width = 0;
                    this._height = 0;
                    this._radiusX = 0;
                    this._radiusY = 0;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(1, c);
                    this._width = 0;
                    this._height = 0;
                    this._radiusX = 0;
                    this._radiusY = 0;
                    this.width = d.width;
                    this.height = d.height;
                    this.radiusX = d.al;
                    this.radiusY = d.am;
                    AppearanceHelper.p(this.appearance, d);
                }
                break;
        }
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
    e() {
        return "width: " + this.width + ", height: " + this.height + ", radiusX: " + this.radiusX + ", radiusY: " + this.radiusY;
    }
    get_type() {
        return "Rectangle";
    }
    get type() {
        return this.get_type();
    }
    scaleByViewport(a) {
        super.scaleByViewport(a);
        this.width = this.width / a.width;
        this.height = this.height / a.height;
    }
    getPointsOverride(a, b) {
        let c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.appearance.canvasLeft, this.appearance.canvasTop));
        c.add(new PointData(this.appearance.canvasLeft + this.width, this.appearance.canvasTop));
        c.add(new PointData(this.appearance.canvasLeft + this.width, this.appearance.canvasTop + this.height));
        c.add(new PointData(this.appearance.canvasLeft, this.appearance.canvasTop + this.height));
    }
}
RectangleVisualData.$t = markType(RectangleVisualData, 'RectangleVisualData', PrimitiveVisualData.$);
//# sourceMappingURL=RectangleVisualData.js.map