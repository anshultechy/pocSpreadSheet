/**
 * Event arguments for the activePaneChanged event.
*/
export class SpreadsheetActivePaneChangedEventArgs {
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
     * Returns the new value of the activePane
    */
    get newValue() {
        return this.i.newValue;
    }
    /**
     * Returns the previous value of the activePane
    */
    get oldValue() {
        return this.i.oldValue;
    }
}
//# sourceMappingURL=igx-spreadsheet-active-pane-changed-event-args.js.map