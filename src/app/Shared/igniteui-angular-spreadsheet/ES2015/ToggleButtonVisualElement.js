/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ButtonVisualElement } from "./ButtonVisualElement";
import { EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ToggleButtonVisualElement extends ButtonVisualElement {
    constructor(a, b) {
        super(a, b);
        this.cj = false;
        this.ci = true;
        this.isCheckedChanged = null;
    }
    ch() {
        this.cl = !this.cl;
        super.ch();
    }
    get ck() {
        return this.ci;
    }
    set ck(a) {
        if (a != this.ci) {
            this.ci = a;
            if (a) {
                this.b1();
            }
        }
    }
    get cl() {
        return this.cj;
    }
    set cl(a) {
        if (a != this.cj) {
            this.cj = a;
            this.ck = true;
            let b = this.isCheckedChanged;
            if (b != null) {
                b(this, EventArgs.empty);
            }
        }
    }
}
ToggleButtonVisualElement.$t = markType(ToggleButtonVisualElement, 'ToggleButtonVisualElement', ButtonVisualElement.$);
//# sourceMappingURL=ToggleButtonVisualElement.js.map