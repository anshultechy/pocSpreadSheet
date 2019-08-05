import { ensureBool } from "../../igniteui-angular-core/ES2015/componentUtil";
/**
 * Event arguments for the editModeExiting event.
*/
export class SpreadsheetEditModeExitingEventArgs {
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
     * Returns or sets a boolean indicating whether the changes will be made to the cell's value when edit mode ends.
    */
    get acceptChanges() {
        return this.i.acceptChanges;
    }
    set acceptChanges(v) {
        this.i.acceptChanges = ensureBool(v);
    }
    /**
     * Returns a boolean indicating if the edit mode is being forced to exit edit mode in which case it cannot be cancelled.
    */
    get canCancel() {
        return this.i.canCancel;
    }
    /**
     * Returns the cell for which the control is exiting edit mode.
    */
    get cell() {
        return this.i.cell;
    }
    /**
     * Returns the edit text that will be used to update the cell(s).
    */
    get editText() {
        return this.i.editText;
    }
}
//# sourceMappingURL=igx-spreadsheet-edit-mode-exiting-event-args.js.map