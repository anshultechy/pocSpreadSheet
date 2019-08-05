/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class JsScrollEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this._b = 0;
        this._c = 0;
        this._b = a;
        this._c = b;
    }
}
JsScrollEventArgs.$t = markType(JsScrollEventArgs, 'JsScrollEventArgs', EventArgs.$);
//# sourceMappingURL=JsScrollEventArgs.js.map