/**
 * Event arguments for the activeWorksheetChanged event.
*/
var SpreadsheetActiveWorksheetChangedEventArgs = /** @class */ (function () {
    function SpreadsheetActiveWorksheetChangedEventArgs() {
    }
    Object.defineProperty(SpreadsheetActiveWorksheetChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActiveWorksheetChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetActiveWorksheetChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetActiveWorksheetChangedEventArgs.prototype, "newValue", {
        /**
         * Returns the new value of the activeWorksheet
        */
        get: function () {
            return this.i.newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActiveWorksheetChangedEventArgs.prototype, "oldValue", {
        /**
         * Returns the previous value of the activeWorksheet
        */
        get: function () {
            return this.i.oldValue;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetActiveWorksheetChangedEventArgs;
}());
export { SpreadsheetActiveWorksheetChangedEventArgs };
//# sourceMappingURL=igx-spreadsheet-active-worksheet-changed-event-args.js.map