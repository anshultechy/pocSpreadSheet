/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { AppearanceHelper } from "./AppearanceHelper";
import { markType } from "./type";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
/**
 * @hidden
 */
export class LineVisualData extends PrimitiveVisualData {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(1, "line1");
                    this._x1 = 0;
                    this._y1 = 0;
                    this._x2 = 0;
                    this._y2 = 0;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(1, c);
                    this._x1 = 0;
                    this._y1 = 0;
                    this._x2 = 0;
                    this._y2 = 0;
                    this.x1 = d.aj;
                    this.y1 = d.al;
                    this.x2 = d.ak;
                    this.y2 = d.am;
                    AppearanceHelper.p(this.appearance, d);
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
    get x1() {
        return this._x1;
    }
    set x1(a) {
        this._x1 = a;
    }
    get y1() {
        return this._y1;
    }
    set y1(a) {
        this._y1 = a;
    }
    get x2() {
        return this._x2;
    }
    set x2(a) {
        this._x2 = a;
    }
    get y2() {
        return this._y2;
    }
    set y2(a) {
        this._y2 = a;
    }
    e() {
        return "x1: " + this.x1 + ", y1: " + this.y1 + ", x2: " + this.x2 + ", y2: " + this.y2;
    }
    scaleByViewport(a) {
        super.scaleByViewport(a);
        this.x1 = (this.x1 - a.left) / a.width;
        this.y1 = (this.y1 - a.top) / a.height;
    }
    getPointsOverride(a, b) {
        let c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.x1, this.y1));
        c.add(new PointData(this.x2, this.y2));
    }
}
LineVisualData.$t = markType(LineVisualData, 'LineVisualData', PrimitiveVisualData.$);
//# sourceMappingURL=LineVisualData.js.map