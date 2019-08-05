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
export class SpreadsheetCommandExecutedEventArgs extends EventArgs {
    constructor(a, b, c) {
        super();
        this._b = 0;
        this._d = null;
        this._e = null;
        this._b = a;
        this._d = b;
        this._e = c;
    }
    get command() {
        return this._b;
    }
    get commandParameter() {
        return this._d;
    }
    get sourceElement() {
        return this._e;
    }
}
SpreadsheetCommandExecutedEventArgs.$t = markType(SpreadsheetCommandExecutedEventArgs, 'SpreadsheetCommandExecutedEventArgs', EventArgs.$);
//# sourceMappingURL=SpreadsheetCommandExecutedEventArgs.js.map