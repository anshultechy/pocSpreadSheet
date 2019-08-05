/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CanvasGestureDOMEventProxy } from "../../igniteui-angular-core/ES2015/CanvasGestureDOMEventProxy";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class CustomDOMEventProxy extends CanvasGestureDOMEventProxy {
    constructor(a, b, c) {
        super(a, b, c);
        this._dz = null;
    }
    cl(a) {
        super.cl(a);
        if (!this.ab && a.stopPropagation != null) {
            a.stopPropagation();
        }
    }
    cm(a) {
        if (this._dz != null && this._dz(a)) {
            return;
        }
        super.cm(a);
    }
}
CustomDOMEventProxy.$t = markType(CustomDOMEventProxy, 'CustomDOMEventProxy', CanvasGestureDOMEventProxy.$);
//# sourceMappingURL=CustomDOMEventProxy.js.map
