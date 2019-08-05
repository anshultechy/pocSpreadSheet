/**
 * Event arguments for the hyperlinkExecuting event.
*/
var SpreadsheetHyperlinkExecutingEventArgs = /** @class */ (function () {
    function SpreadsheetHyperlinkExecutingEventArgs() {
    }
    Object.defineProperty(SpreadsheetHyperlinkExecutingEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetHyperlinkExecutingEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetHyperlinkExecutingEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetHyperlinkExecutingEventArgs.prototype, "hyperlink", {
        /**
         * Returns the hyperlink to be executed.
        */
        get: function () {
            return this.i.hyperlink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetHyperlinkExecutingEventArgs.prototype, "workingDirectory", {
        /**
         * Returns or sets the working directory to use when the hyperlink is a file reference.
        */
        get: function () {
            return this.i.workingDirectory;
        },
        set: function (v) {
            this.i.workingDirectory = v;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetHyperlinkExecutingEventArgs;
}());
export { SpreadsheetHyperlinkExecutingEventArgs };
//# sourceMappingURL=igx-spreadsheet-hyperlink-executing-event-args.js.map