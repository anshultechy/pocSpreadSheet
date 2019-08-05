/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetEditModeExitingEventArgs extends CancelEventArgs {
    constructor(a, b, c, d) {
        super(0);
        this._c = new SpreadsheetCell();
        this._f = false;
        this._e = false;
        this._i = null;
        this._c = a;
        this._f = c;
        this._e = b;
        this._i = d;
    }
    get acceptChanges() {
        return this._e;
    }
    set acceptChanges(a) {
        this._e = a;
    }
    get canCancel() {
        return this._f;
    }
    get cell() {
        return this._c;
    }
    get editText() {
        return this._i;
    }
}
SpreadsheetEditModeExitingEventArgs.$t = markType(SpreadsheetEditModeExitingEventArgs, 'SpreadsheetEditModeExitingEventArgs', CancelEventArgs.$);
//# sourceMappingURL=SpreadsheetEditModeExitingEventArgs.js.map