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
export class LineVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
        this.ch = null;
        this.cf = false;
    }
    get ci() {
        return this.ch;
    }
    set ci(a) {
        if (a != this.ch) {
            this.ch = a;
            this.cg = true;
        }
    }
    get cg() {
        return this.cf;
    }
    set cg(a) {
        if (a != this.cf) {
            this.cf = a;
            if (a) {
                this.b1();
            }
        }
    }
}
LineVisualElement.$t = markType(LineVisualElement, 'LineVisualElement', VisualElement.$);
//# sourceMappingURL=LineVisualElement.js.map