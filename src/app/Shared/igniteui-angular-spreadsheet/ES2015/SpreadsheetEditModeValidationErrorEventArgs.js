/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * @hidden
 */
export class SpreadsheetEditModeValidationErrorEventArgs extends EventArgs {
    constructor(a, b, c) {
        super();
        this._action = 0;
        this._canStayInEditMode = false;
        this._cell = new SpreadsheetCell();
        this._validationRule = null;
        this.action = 0;
        this.cell = a;
        this.validationRule = b;
        this.canStayInEditMode = !c;
    }
    get action() {
        return this._action;
    }
    set action(a) {
        this._action = a;
    }
    get canStayInEditMode() {
        return this._canStayInEditMode;
    }
    set canStayInEditMode(a) {
        this._canStayInEditMode = a;
    }
    get cell() {
        return this._cell;
    }
    set cell(a) {
        this._cell = a;
    }
    get validationRule() {
        return this._validationRule;
    }
    set validationRule(a) {
        this._validationRule = a;
    }
}
SpreadsheetEditModeValidationErrorEventArgs.$t = markType(SpreadsheetEditModeValidationErrorEventArgs, 'SpreadsheetEditModeValidationErrorEventArgs', EventArgs.$);
//# sourceMappingURL=SpreadsheetEditModeValidationErrorEventArgs.js.map