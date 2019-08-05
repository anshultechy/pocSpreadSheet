/**
 * Event arguments for the activeWorksheetChanged event.
*/
export class SpreadsheetActiveWorksheetChangedEventArgs {
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
     * Returns the new value of the activeWorksheet
    */
    get newValue() {
        return this.i.newValue;
    }
    /**
     * Returns the previous value of the activeWorksheet
    */
    get oldValue() {
        return this.i.oldValue;
    }
}
//# sourceMappingURL=igx-spreadsheet-active-worksheet-changed-event-args.js.map