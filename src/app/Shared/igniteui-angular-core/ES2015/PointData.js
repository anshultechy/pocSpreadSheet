/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, markType, PointUtil } from "./type";
import { IVisualData_$type } from "./IVisualData";
/**
 * @hidden
 */
export class PointData extends Base {
    constructor(a, b) {
        super();
        this._x = 0;
        this._y = 0;
        this.x = a;
        this.y = b;
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
    serialize() {
        return "{ x: " + this.x + ", y: " + this.y + "}";
    }
    static b(a) {
        let b = new PointData(a.x, a.y);
        return b;
    }
    g() {
        let a = PointUtil.create();
        a.x = this.x;
        a.y = this.y;
        return a;
    }
    equals(a) {
        let b = typeCast(PointData.$, a);
        if (b == null) {
            return false;
        }
        return b.x == this.x && b.y == this.y;
    }
    getHashCode() {
        return ((this.x) * 397) ^ (this.y);
    }
    static get empty() {
        return new PointData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
}
PointData.$t = markType(PointData, 'PointData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=PointData.js.map