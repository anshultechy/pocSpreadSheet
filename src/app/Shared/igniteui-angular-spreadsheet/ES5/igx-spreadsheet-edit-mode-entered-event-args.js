/**
 * Event arguments for the editModeEntered event.
*/
var SpreadsheetEditModeEnteredEventArgs = /** @class */ (function () {
    function SpreadsheetEditModeEnteredEventArgs() {
    }
    Object.defineProperty(SpreadsheetEditModeEnteredEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeEnteredEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetEditModeEnteredEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetEditModeEnteredEventArgs.prototype, "cell", {
        /**
         * Returns the cell for which the control has entered edit mode.
        */
        get: function () {
            return this.i.cell;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetEditModeEnteredEventArgs;
}());
export { SpreadsheetEditModeEnteredEventArgs };
//# sourceMappingURL=igx-spreadsheet-edit-mode-entered-event-args.js.map