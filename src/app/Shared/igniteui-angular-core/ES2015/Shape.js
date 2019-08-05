/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FrameworkElement } from "./FrameworkElement";
import { markType } from "./type";
/**
 * @hidden
 */
export class Shape extends FrameworkElement {
    constructor() {
        super();
        this._fill = null;
        this._stroke = null;
        this.ab = false;
        this.ac = 0;
        this.ai = null;
        this.ad = 0;
    }
    get fill() {
        return this._fill;
    }
    set fill(a) {
        this._fill = a;
    }
    get stroke() {
        return this._stroke;
    }
    set stroke(a) {
        this._stroke = a;
    }
}
Shape.$t = markType(Shape, 'Shape', FrameworkElement.$);
//# sourceMappingURL=Shape.js.map