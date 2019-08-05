/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { VisualElement } from "./VisualElement";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetIconElement extends VisualElement {
    constructor(a) {
        super(a, "Icon");
        this.cf = 0;
        this.ch = false;
        this.cj = null;
    }
    get cg() {
        return this.cf;
    }
    set cg(a) {
        if (a != this.cf) {
            this.cf = a;
            this.ci = true;
        }
    }
    get ci() {
        return this.ch;
    }
    set ci(a) {
        if (a != this.ch) {
            this.ch = a;
            if (a) {
                this.b1();
            }
        }
    }
    an(a, b, c, d) {
        let e = this.a3;
        let f = this.av;
        let g = super.an(a, b, c, d);
        if (g && (e != this.a3 || f != this.av)) {
            this.ci = true;
        }
        return g;
    }
}
SpreadsheetIconElement.$t = markType(SpreadsheetIconElement, 'SpreadsheetIconElement', VisualElement.$);
//# sourceMappingURL=SpreadsheetIconElement.js.map