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
export class SpreadsheetInvalidDataElement extends VisualElement {
    constructor(a) {
        super(a, "InvalidData");
        this.cl = null;
        this.cf = false;
        this.cj = 0;
        this.cg = false;
    }
    get cm() {
        return this.cl;
    }
    set cm(a) {
        if (a != this.cl) {
            this.cl = a;
            this.ch = true;
        }
    }
    get ch() {
        return this.cf;
    }
    set ch(a) {
        if (a != this.cf) {
            this.cf = a;
            if (a) {
                this.b1();
            }
        }
    }
    get ck() {
        return this.cj;
    }
    set ck(a) {
        if (a != this.cj) {
            this.cj = a;
            this.ci = true;
        }
    }
    get ci() {
        return this.cg;
    }
    set ci(a) {
        if (a != this.cg) {
            this.cg = a;
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
            this.ch = true;
        }
        return g;
    }
}
SpreadsheetInvalidDataElement.$t = markType(SpreadsheetInvalidDataElement, 'SpreadsheetInvalidDataElement', VisualElement.$);
//# sourceMappingURL=SpreadsheetInvalidDataElement.js.map