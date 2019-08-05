/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { Rect } from "./Rect";
/**
 * @hidden
 */
export class RectData extends Base {
    constructor(a, b, c, d) {
        super();
        this._top = 0;
        this._left = 0;
        this._width = 0;
        this._height = 0;
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d;
    }
    get top() {
        return this._top;
    }
    set top(a) {
        this._top = a;
    }
    get left() {
        return this._left;
    }
    set left(a) {
        this._left = a;
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
    serialize() {
        return "{ top: " + this.top + ", left: " + this.left + ", width: " + this.width + ", height: " + this.height + "}";
    }
    static b(a) {
        let b = new RectData(a.left, a.top, a.width, a.height);
        return b;
    }
    h() {
        let a = new Rect(0, this.left, this.top, this.width, this.height);
        return a;
    }
    get isEmpty() {
        return this.width < 0;
    }
    static get empty() {
        return new RectData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    }
}
RectData.$t = markType(RectData, 'RectData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=RectData.js.map