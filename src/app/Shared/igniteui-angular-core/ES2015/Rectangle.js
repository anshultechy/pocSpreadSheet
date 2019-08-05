/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Shape } from "./Shape";
import { Rect } from "./Rect";
import { markType } from "./type";
/**
 * @hidden
 */
export class Rectangle extends Shape {
    constructor() {
        super();
        this.ao = null;
        this.aj = 0;
        this.ak = 0;
        this.ao = new Rect(0, 0, 0, 0, 0);
    }
    get al() {
        return this.aj;
    }
    set al(a) {
        this.aj = a;
    }
    get am() {
        return this.ak;
    }
    set am(a) {
        this.ak = a;
    }
    an(a) {
    }
}
Rectangle.$t = markType(Rectangle, 'Rectangle', Shape.$);
//# sourceMappingURL=Rectangle.js.map