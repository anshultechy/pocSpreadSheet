/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IDisposable_$type, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class DisposableAction extends Base {
    constructor(a) {
        super();
        this._a = null;
        this._a = a;
    }
    dispose() {
        this._a = null;
    }
    _c() {
        if (this._a != null) {
            let a = this._a;
            this._a = null;
            a();
        }
    }
    get _b() {
        return this._a != null;
    }
}
DisposableAction.$t = markType(DisposableAction, 'DisposableAction', Base.$, [IDisposable_$type]);
//# sourceMappingURL=DisposableAction.js.map
