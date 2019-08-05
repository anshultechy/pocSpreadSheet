/**
 * Event arguments for the editModeEntered event.
*/
export class SpreadsheetEditModeEnteredEventArgs {
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
     * Returns the cell for which the control has entered edit mode.
    */
    get cell() {
        return this.i.cell;
    }
}
//# sourceMappingURL=igx-spreadsheet-edit-mode-entered-event-args.js.map