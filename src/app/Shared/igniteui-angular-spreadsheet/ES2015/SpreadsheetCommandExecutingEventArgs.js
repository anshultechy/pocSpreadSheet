/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetCommandExecutingEventArgs extends CancelEventArgs {
    constructor(a, b, c) {
        super(0);
        this._c = 0;
        this._e = null;
        this._f = null;
        this._c = a;
        this._e = b;
        this._f = c;
    }
    get command() {
        return this._c;
    }
    get commandParameter() {
        return this._e;
    }
    get sourceElement() {
        return this._f;
    }
}
SpreadsheetCommandExecutingEventArgs.$t = markType(SpreadsheetCommandExecutingEventArgs, 'SpreadsheetCommandExecutingEventArgs', CancelEventArgs.$);
//# sourceMappingURL=SpreadsheetCommandExecutingEventArgs.js.map