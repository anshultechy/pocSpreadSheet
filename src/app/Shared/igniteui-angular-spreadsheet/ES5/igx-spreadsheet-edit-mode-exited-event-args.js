/**
 * Event arguments for the editModeExited event.
*/
var SpreadsheetEditModeExitedEventArgs = /** @class */ (function () {
    function SpreadsheetEditModeExitedEventArgs() {
    }
    Object.defineProperty(SpreadsheetEditModeExitedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeExitedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetEditModeExitedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetEditModeExitedEventArgs.prototype, "cell", {
        /**
         * Returns the cell for which the control has exitied edit mode.
        */
        get: function () {
            return this.i.cell;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetEditModeExitedEventArgs;
}());
export { SpreadsheetEditModeExitedEventArgs };
//# sourceMappingURL=igx-spreadsheet-edit-mode-exited-event-args.js.map