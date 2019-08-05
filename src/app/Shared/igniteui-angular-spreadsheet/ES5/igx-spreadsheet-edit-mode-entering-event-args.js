/**
 * Event arguments for the editModeEntering event.
*/
var SpreadsheetEditModeEnteringEventArgs = /** @class */ (function () {
    function SpreadsheetEditModeEnteringEventArgs() {
    }
    Object.defineProperty(SpreadsheetEditModeEnteringEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeEnteringEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetEditModeEnteringEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetEditModeEnteringEventArgs.prototype, "cell", {
        /**
         * Returns the cell for which the control is going into edit mode.
        */
        get: function () {
            return this.i.cell;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetEditModeEnteringEventArgs;
}());
export { SpreadsheetEditModeEnteringEventArgs };
//# sourceMappingURL=igx-spreadsheet-edit-mode-entering-event-args.js.map