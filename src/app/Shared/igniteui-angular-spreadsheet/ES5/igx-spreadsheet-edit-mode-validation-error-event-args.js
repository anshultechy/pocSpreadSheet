import { ensureBool } from "../../igniteui-angular-core/ES5/componentUtil";
/**
 * Event arguments for the editModeValidationError event.
*/
var SpreadsheetEditModeValidationErrorEventArgs = /** @class */ (function () {
    function SpreadsheetEditModeValidationErrorEventArgs() {
    }
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeValidationErrorEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetEditModeValidationErrorEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "action", {
        /**
         * Returns or sets the action to take in response to the failed validation.
         * By default the property is set to null and the control will display a message box to obtain the action
         * from the end user. If the property is set to a non-null value, that action will be used and the message box will not be
         * displayed.
        */
        get: function () {
            return this.i.action;
        },
        set: function (v) {
            this.i.action = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "canStayInEditMode", {
        /**
         * Returns a boolean indicating whether the cell is allowed to stay in edit mode.
        */
        get: function () {
            return this.i.canStayInEditMode;
        },
        set: function (v) {
            this.i.canStayInEditMode = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "cell", {
        /**
         * Returns the cell for which the control has entered edit mode.
        */
        get: function () {
            return this.i.cell;
        },
        set: function (v) {
            this.i.cell = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeValidationErrorEventArgs.prototype, "validationRule", {
        /**
         * Returns the rule which failed validation.
        */
        get: function () {
            return this.i.validationRule;
        },
        set: function (v) {
            this.i.validationRule = v;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetEditModeValidationErrorEventArgs;
}());
export { SpreadsheetEditModeValidationErrorEventArgs };
//# sourceMappingURL=igx-spreadsheet-edit-mode-validation-error-event-args.js.map
