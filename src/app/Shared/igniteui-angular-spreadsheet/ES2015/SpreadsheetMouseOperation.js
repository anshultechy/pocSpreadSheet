/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PropertyChangeNotifierExtended } from "./PropertyChangeNotifierExtended";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetMouseOperation extends PropertyChangeNotifierExtended {
    constructor() {
        super(...arguments);
        this._h = 0;
        this._j = null;
        this._l = null;
    }
    get _i() {
        return this._h;
    }
    set _i(a) {
        if (this._h != a) {
            let b = this._h;
            this._h = a;
            this._o(b, a);
            this.a("CurrentState");
        }
    }
    get _k() {
        return this._j;
    }
    set _k(a) {
        if (this._j != a) {
            this._j = a;
            this.a("ToolTip");
        }
    }
    _n() {
        if (this._i == 2 || this._i == 1) {
            this._i = 4;
            this._i = 0;
        }
    }
    _p(a) {
        if (a.b()) {
            a.f();
        }
        this._i = 1;
        if (this._m(a) && a.c() && this._i == 1) {
            this._i = 2;
            if (!a.b()) {
                a.d();
            }
        }
        else if (this._i == 1) {
            this._i = 0;
        }
    }
    _q(a) {
    }
    _r(a) {
    }
    _s(a) {
    }
    _t(a) {
        if (this._i == 2) {
            this._i = 3;
            if (a.b()) {
                a.f();
            }
            this._u(a);
            this._i = 0;
        }
    }
    _g(a) {
        return 0;
    }
}
SpreadsheetMouseOperation.$t = markType(SpreadsheetMouseOperation, 'SpreadsheetMouseOperation', PropertyChangeNotifierExtended.$);
//# sourceMappingURL=SpreadsheetMouseOperation.js.map