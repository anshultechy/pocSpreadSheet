/**
 * Event arguments for the selectionChanged event.
*/
export class SpreadsheetSelectionChangedEventArgs {
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
     * Returns the pane whose selection has been changed.
    */
    get pane() {
        return this.i.pane;
    }
}
//# sourceMappingURL=igx-spreadsheet-selection-changed-event-args.js.map