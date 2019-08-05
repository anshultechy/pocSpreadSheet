/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { ScrollBarVisualElement } from "./ScrollBarVisualElement";
/**
 * @hidden
 */
export class JsScrollBar extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.a = new ScrollBarVisualElement(a, b, "ScrollBar");
        let c = this.a.cn;
    }
    get b() {
        return this.a.u;
    }
    set b(a) {
        if (a != this.a.u) {
            this.a.u = a;
        }
    }
    c() {
        this.a.ab = true;
    }
}
JsScrollBar.$t = markType(JsScrollBar, 'JsScrollBar');
//# sourceMappingURL=JsScrollBar.js.map