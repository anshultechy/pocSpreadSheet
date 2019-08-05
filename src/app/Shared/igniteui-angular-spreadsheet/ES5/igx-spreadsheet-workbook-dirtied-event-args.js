import { SpreadsheetWorkbookDirtiedEventArgs as SpreadsheetWorkbookDirtiedEventArgs_internal } from "./SpreadsheetWorkbookDirtiedEventArgs";
/**
 * Event arguments for the workbookDirtied event.
*/
var SpreadsheetWorkbookDirtiedEventArgs = /** @class */ (function () {
    function SpreadsheetWorkbookDirtiedEventArgs() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    SpreadsheetWorkbookDirtiedEventArgs.prototype.createImplementation = function () {
        return new SpreadsheetWorkbookDirtiedEventArgs_internal();
    };
    Object.defineProperty(SpreadsheetWorkbookDirtiedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetWorkbookDirtiedEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetWorkbookDirtiedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    return SpreadsheetWorkbookDirtiedEventArgs;
}());
export { SpreadsheetWorkbookDirtiedEventArgs };
//# sourceMappingURL=igx-spreadsheet-workbook-dirtied-event-args.js.map