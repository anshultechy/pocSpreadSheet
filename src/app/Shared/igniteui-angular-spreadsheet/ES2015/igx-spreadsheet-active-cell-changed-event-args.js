/**
 * Event arguments for the activeCellChanged event.
*/
export class SpreadsheetActiveCellChangedEventArgs {
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
     * Returns the new value of the activeCell
    */
    get newValue() {
        return this.i.newValue;
    }
    /**
     * Returns the previous value of the activeCell
    */
    get oldValue() {
        return this.i.oldValue;
    }
}
//# sourceMappingURL=igx-spreadsheet-active-cell-changed-event-args.js.map