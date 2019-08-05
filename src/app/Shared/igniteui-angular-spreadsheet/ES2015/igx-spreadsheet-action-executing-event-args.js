/**
 * Event arguments for the actionExecuting event.
*/
export class SpreadsheetActionExecutingEventArgs {
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
     * Returns the command which will be executed on the Spreadsheet.
    */
    get command() {
        return this.i.command;
    }
    /**
     * Returns the parameter which will be used when executing the command.
    */
    get commandParameter() {
        return this.i.commandParameter;
    }
}
//# sourceMappingURL=igx-spreadsheet-action-executing-event-args.js.map