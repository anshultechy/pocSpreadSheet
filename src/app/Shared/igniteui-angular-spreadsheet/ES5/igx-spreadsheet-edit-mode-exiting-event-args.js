import { ensureBool } from "../../igniteui-angular-core/ES5/componentUtil";
/**
 * Event arguments for the editModeExiting event.
*/
var SpreadsheetEditModeExitingEventArgs = /** @class */ (function () {
    function SpreadsheetEditModeExitingEventArgs() {
    }
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeExitingEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetEditModeExitingEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "acceptChanges", {
        /**
         * Returns or sets a boolean indicating whether the changes will be made to the cell's value when edit mode ends.
        */
        get: function () {
            return this.i.acceptChanges;
        },
        set: function (v) {
            this.i.acceptChanges = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "canCancel", {
        /**
         * Returns a boolean indicating if the edit mode is being forced to exit edit mode in which case it cannot be cancelled.
        */
        get: function () {
            return this.i.canCancel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "cell", {
        /**
         * Returns the cell for which the control is exiting edit mode.
        */
        get: function () {
            return this.i.cell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "editText", {
        /**
         * Returns the edit text that will be used to update the cell(s).
        */
        get: function () {
            return this.i.editText;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetEditModeExitingEventArgs;
}());
export { SpreadsheetEditModeExitingEventArgs };
//# sourceMappingURL=igx-spreadsheet-edit-mode-exiting-event-args.js.map
