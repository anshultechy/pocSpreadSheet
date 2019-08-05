/**
 * Event arguments for the activePaneChanged event.
*/
var SpreadsheetActivePaneChangedEventArgs = /** @class */ (function () {
    function SpreadsheetActivePaneChangedEventArgs() {
    }
    Object.defineProperty(SpreadsheetActivePaneChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActivePaneChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetActivePaneChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetActivePaneChangedEventArgs.prototype, "newValue", {
        /**
         * Returns the new value of the activePane
        */
        get: function () {
            return this.i.newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActivePaneChangedEventArgs.prototype, "oldValue", {
        /**
         * Returns the previous value of the activePane
        */
        get: function () {
            return this.i.oldValue;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetActivePaneChangedEventArgs;
}());
export { SpreadsheetActivePaneChangedEventArgs };
//# sourceMappingURL=igx-spreadsheet-active-pane-changed-event-args.js.map