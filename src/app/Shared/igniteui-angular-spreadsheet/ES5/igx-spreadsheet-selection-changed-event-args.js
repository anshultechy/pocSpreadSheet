/**
 * Event arguments for the selectionChanged event.
*/
var SpreadsheetSelectionChangedEventArgs = /** @class */ (function () {
    function SpreadsheetSelectionChangedEventArgs() {
    }
    Object.defineProperty(SpreadsheetSelectionChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetSelectionChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetSelectionChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetSelectionChangedEventArgs.prototype, "pane", {
        /**
         * Returns the pane whose selection has been changed.
        */
        get: function () {
            return this.i.pane;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetSelectionChangedEventArgs;
}());
export { SpreadsheetSelectionChangedEventArgs };
//# sourceMappingURL=igx-spreadsheet-selection-changed-event-args.js.map