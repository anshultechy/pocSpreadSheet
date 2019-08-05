/**
 * Event arguments for the actionExecuted event.
*/
var SpreadsheetActionExecutedEventArgs = /** @class */ (function () {
    function SpreadsheetActionExecutedEventArgs() {
    }
    Object.defineProperty(SpreadsheetActionExecutedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActionExecutedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetActionExecutedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetActionExecutedEventArgs.prototype, "command", {
        /**
         * Returns the command which was executed on the Spreadsheet.
        */
        get: function () {
            return this.i.command;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActionExecutedEventArgs.prototype, "commandParameter", {
        /**
         * Returns the parameter used when executing the command.
        */
        get: function () {
            return this.i.commandParameter;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetActionExecutedEventArgs;
}());
export { SpreadsheetActionExecutedEventArgs };
//# sourceMappingURL=igx-spreadsheet-action-executed-event-args.js.map