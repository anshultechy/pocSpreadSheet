/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { Color } from "./Color";
/**
 * @hidden
 */
export class ColorData extends Base {
    constructor() {
        super(...arguments);
        this._a = 0;
        this._r = 0;
        this._g = 0;
        this._b = 0;
    }
    get a() {
        return this._a;
    }
    set a(a) {
        this._a = a;
    }
    get r() {
        return this._r;
    }
    set r(a) {
        this._r = a;
    }
    get g() {
        return this._g;
    }
    set g(a) {
        this._g = a;
    }
    get b() {
        return this._b;
    }
    set b(a) {
        this._b = a;
    }
    serialize() {
        return "{ a: " + this.a + ", r: " + this.r + ", g: " + this.g + ", b: " + this.b + "}";
    }
    static a_1(a) {
        let b = new ColorData();
        b.a = a.l;
        b.r = a.o;
        b.g = a.n;
        b.b = a.m;
        return b;
    }
    f() {
        let a = new Color();
        a.l = this.a;
        a.o = this.r;
        a.n = this.g;
        a.m = this.b;
        return a;
    }
}
ColorData.$t = markType(ColorData, 'ColorData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=ColorData.js.map