/**
 * Event arguments for the actionExecuted event.
*/
export class SpreadsheetActionExecutedEventArgs {
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
     * Returns the command which was executed on the Spreadsheet.
    */
    get command() {
        return this.i.command;
    }
    /**
     * Returns the parameter used when executing the command.
    */
    get commandParameter() {
        return this.i.commandParameter;
    }
}
//# sourceMappingURL=igx-spreadsheet-action-executed-event-args.js.map