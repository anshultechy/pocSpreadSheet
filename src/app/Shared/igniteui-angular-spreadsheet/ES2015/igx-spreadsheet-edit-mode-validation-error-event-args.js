import { ensureBool } from "../../igniteui-angular-core/ES2015/componentUtil";
/**
 * Event arguments for the editModeValidationError event.
*/
export class SpreadsheetEditModeValidationErrorEventArgs {
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    /**
     * Returns or sets the action to take in response to the failed validation.
     * By default the property is set to null and the control will display a message box to obtain the action
     * from the end user. If the property is set to a non-null value, that action will be used and the message box will not be
     * displayed.
    */
    get action() {
        return this.i.action;
    }
    set action(v) {
        this.i.action = v;
    }
    /**
     * Returns a boolean indicating whether the cell is allowed to stay in edit mode.
    */
    get canStayInEditMode() {
        return this.i.canStayInEditMode;
    }
    set canStayInEditMode(v) {
        this.i.canStayInEditMode = ensureBool(v);
    }
    /**
     * Returns the cell for which the control has entered edit mode.
    */
    get cell() {
        return this.i.cell;
    }
    set cell(v) {
        this.i.cell = v;
    }
    /**
     * Returns the rule which failed validation.
    */
    get validationRule() {
        return this.i.validationRule;
    }
    set validationRule(v) {
        this.i.validationRule = v;
    }
}
//# sourceMappingURL=igx-spreadsheet-edit-mode-validation-error-event-args.js.map