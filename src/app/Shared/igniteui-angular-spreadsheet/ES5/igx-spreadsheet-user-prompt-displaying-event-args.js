import { ensureBool } from "../../igniteui-angular-core/ES5/componentUtil";
/**
 * Event arguments for the userPromptDisplaying event.
*/
var SpreadsheetUserPromptDisplayingEventArgs = /** @class */ (function () {
    function SpreadsheetUserPromptDisplayingEventArgs() {
    }
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetUserPromptDisplayingEventArgs.prototype.onImplementationCreated = function () {
    };
    SpreadsheetUserPromptDisplayingEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "canCancel", {
        /**
         * Returns a boolean indicating if the operation that triggered the prompt can be cancelled.
        */
        get: function () {
            return this.i.canCancel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "cancel", {
        /**
         * Returns or sets a boolean indicating whether the operation that triggered the prompt should be cancelled.
         * This property is only used if the canCancel is true, which indicates that the
         * operation supports being cancelled, and if displayMessage is set to false. Otherwise if the
         * message is shown and the operation may be cancelled then whether the operation is cancelled will be based
         * upon the users response to the prompt.
        */
        get: function () {
            return this.i.cancel;
        },
        set: function (v) {
            this.i.cancel = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "caption", {
        /**
         * Returns or sets the caption for the message dialog that will be displayed.
        */
        get: function () {
            return this.i.caption;
        },
        set: function (v) {
            this.i.caption = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "displayMessage", {
        /**
         * Returns or sets a boolean indicating if a message will be displayed to the end user.
        */
        get: function () {
            return this.i.displayMessage;
        },
        set: function (v) {
            this.i.displayMessage = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "exception", {
        /**
         * Returns the exception for the error, if there was one.
        */
        get: function () {
            return this.i.exception;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "message", {
        /**
         * Returns or sets the message that will be displayed.
        */
        get: function () {
            return this.i.message;
        },
        set: function (v) {
            this.i.message = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetUserPromptDisplayingEventArgs.prototype, "trigger", {
        /**
         * Returns an enumeration indicating the action caused the prompt to be displayed.
        */
        get: function () {
            return this.i.trigger;
        },
        enumerable: true,
        configurable: true
    });
    return SpreadsheetUserPromptDisplayingEventArgs;
}());
export { SpreadsheetUserPromptDisplayingEventArgs };
//# sourceMappingURL=igx-spreadsheet-user-prompt-displaying-event-args.js.map
