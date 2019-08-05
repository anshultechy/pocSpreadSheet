/**
 * Event arguments for the activeTableChanged event.
*/
var SpreadsheetActiveTableChangedEventArgs = /** @class */ (function () {
    function SpreadsheetActiveTableChangedEventArgs() {
    }
    Object.defineProperty(SpreadsheetActiveTableChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActiveTableChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetActiveTableChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetActiveTableChangedEventArgs.prototype, "newValue", {
        /**
         * Returns the new value of the activeTable
        */
        get: function () {
            return this.i.newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActiveTableChangedEventArgs.prototype, "oldValue", {
        /**
         * Returns the previous value of the activeTable
        */
        get: function () {
            return this.i.oldValue;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetActiveTableChangedEventArgs;
}());
export { SpreadsheetActiveTableChangedEventArgs };
//# sourceMappingURL=igx-spreadsheet-active-table-changed-event-args.js.map