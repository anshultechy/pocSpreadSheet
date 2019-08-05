/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { Size } from "./Size";
/**
 * @hidden
 */
export class SizeData extends Base {
    constructor(a, b) {
        super();
        this._width = 0;
        this._height = 0;
        this.width = a;
        this.height = b;
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
        return "{ width: " + this.width + ", height: " + this.height + "}";
    }
    static b(a) {
        let b = new SizeData(a.width, a.height);
        return b;
    }
    e() {
        let a = new Size(1, this.width, this.height);
        return a;
    }
    static get empty() {
        return new SizeData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
}
SizeData.$t = markType(SizeData, 'SizeData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=SizeData.js.map