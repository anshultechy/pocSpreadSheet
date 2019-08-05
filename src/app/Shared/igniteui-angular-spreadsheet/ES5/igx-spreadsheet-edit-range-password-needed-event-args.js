/**
 * Event arguments for the editRangePasswordNeeded event.
*/
var SpreadsheetEditRangePasswordNeededEventArgs = /** @class */ (function () {
    function SpreadsheetEditRangePasswordNeededEventArgs() {
    }
    Object.defineProperty(SpreadsheetEditRangePasswordNeededEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditRangePasswordNeededEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetEditRangePasswordNeededEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetEditRangePasswordNeededEventArgs.prototype, "ranges", {
        /**
         * Returns the collection of protected ranges that should be unlocked.
         * This collection contains the protected ranges that overlap with the
         * locked cells that need to be unlocked. There may be multiple ranges that overlap the locked
         * cells so it may not be that every range needs to be unlocked.
        */
        get: function () {
            return this.i.ranges;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Unlocks the associated range(s) without validating the password.
    
    */
    SpreadsheetEditRangePasswordNeededEventArgs.prototype.unprotect = function () {
        this.i.unprotect();
    };
    return SpreadsheetEditRangePasswordNeededEventArgs;
}());
export { SpreadsheetEditRangePasswordNeededEventArgs };
//# sourceMappingURL=igx-spreadsheet-edit-range-password-needed-event-args.js.map