/**
 * Event arguments for the activeTableChanged event.
*/
export class SpreadsheetActiveTableChangedEventArgs {
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
     * Returns the new value of the activeTable
    */
    get newValue() {
        return this.i.newValue;
    }
    /**
     * Returns the previous value of the activeTable
    */
    get oldValue() {
        return this.i.oldValue;
    }
}
//# sourceMappingURL=igx-spreadsheet-active-table-changed-event-args.js.map