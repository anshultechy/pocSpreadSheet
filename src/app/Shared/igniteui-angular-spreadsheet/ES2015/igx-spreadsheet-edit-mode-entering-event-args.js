/**
 * Event arguments for the editModeEntering event.
*/
export class SpreadsheetEditModeEnteringEventArgs {
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
     * Returns the cell for which the control is going into edit mode.
    */
    get cell() {
        return this.i.cell;
    }
}
//# sourceMappingURL=igx-spreadsheet-edit-mode-entering-event-args.js.map