/**
 * Event arguments for the activeCellChanged event.
*/
var SpreadsheetActiveCellChangedEventArgs = /** @class */ (function () {
    function SpreadsheetActiveCellChangedEventArgs() {
    }
    Object.defineProperty(SpreadsheetActiveCellChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActiveCellChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetActiveCellChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetActiveCellChangedEventArgs.prototype, "newValue", {
        /**
         * Returns the new value of the activeCell
        */
        get: function () {
            return this.i.newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActiveCellChangedEventArgs.prototype, "oldValue", {
        /**
         * Returns the previous value of the activeCell
        */
        get: function () {
            return this.i.oldValue;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetActiveCellChangedEventArgs;
}());
export { SpreadsheetActiveCellChangedEventArgs };
//# sourceMappingURL=igx-spreadsheet-active-cell-changed-event-args.js.map