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
export class ButtonVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
        this.click = null;
    }
    get_x() {
        return true;
    }
    b2() {
        this.s = true;
        super.b2();
    }
    b4() {
        this.s = false;
        super.b4();
    }
    ad(a) {
        if (a.a() == 1) {
            return a.d();
        }
        return super.ad(a);
    }
    ah(a) {
        if (a.b()) {
            let b = a.h();
            a.f();
            if (this.aa(b.x, b.y)) {
                this.ch();
            }
            return true;
        }
        return super.ah(a);
    }
    ch() {
        let a = this.click;
        if (a != null) {
            a(this, EventArgs.empty);
        }
    }
}
ButtonVisualElement.$t = markType(ButtonVisualElement, 'ButtonVisualElement', VisualElement.$);
//# sourceMappingURL=ButtonVisualElement.js.map
