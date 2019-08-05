/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { VisualElement } from "./VisualElement";
import { EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class TextBoxVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
        this.cg = false;
        this.cm = null;
        this.cf = false;
        this.ck = 1;
        this.textChanged = null;
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
    get cl() {
        return this.ck;
    }
    set cl(a) {
        if (a != this.ck) {
            this.ck = a;
            if (this._parent != null) {
                this._parent.t = true;
            }
            this.ch = true;
        }
    }
    get co() {
        return this.cm;
    }
    set co(a) {
        if (a != this.cm) {
            this.cm = a;
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
    cp() {
        let a = this.textChanged;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    }
}
TextBoxVisualElement.$t = markType(TextBoxVisualElement, 'TextBoxVisualElement', VisualElement.$);
//# sourceMappingURL=TextBoxVisualElement.js.map