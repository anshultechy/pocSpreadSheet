/**
 * Event arguments for the actionExecuting event.
*/
var SpreadsheetActionExecutingEventArgs = /** @class */ (function () {
    function SpreadsheetActionExecutingEventArgs() {
    }
    Object.defineProperty(SpreadsheetActionExecutingEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActionExecutingEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetActionExecutingEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetActionExecutingEventArgs.prototype, "command", {
        /**
         * Returns the command which will be executed on the Spreadsheet.
        */
        get: function () {
            return this.i.command;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActionExecutingEventArgs.prototype, "commandParameter", {
        /**
         * Returns the parameter which will be used when executing the command.
        */
        get: function () {
            return this.i.commandParameter;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetActionExecutingEventArgs;
}());
export { SpreadsheetActionExecutingEventArgs };
//# sourceMappingURL=igx-spreadsheet-action-executing-event-args.js.map