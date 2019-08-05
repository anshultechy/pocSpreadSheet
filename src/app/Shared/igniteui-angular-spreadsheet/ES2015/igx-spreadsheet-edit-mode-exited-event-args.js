/**
 * Event arguments for the editModeExited event.
*/
export class SpreadsheetEditModeExitedEventArgs {
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
     * Returns the cell for which the control has exitied edit mode.
    */
    get cell() {
        return this.i.cell;
    }
}
//# sourceMappingURL=igx-spreadsheet-edit-mode-exited-event-args.js.map