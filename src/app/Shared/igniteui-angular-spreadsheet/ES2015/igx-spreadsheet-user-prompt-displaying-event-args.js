import { ensureBool } from "../../igniteui-angular-core/ES2015/componentUtil";
/**
 * Event arguments for the userPromptDisplaying event.
*/
export class SpreadsheetUserPromptDisplayingEventArgs {
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    /**
     * Returns a boolean indicating if the operation that triggered the prompt can be cancelled.
    */
    get canCancel() {
        return this.i.canCancel;
    }
    /**
     * Returns or sets a boolean indicating whether the operation that triggered the prompt should be cancelled.
     * This property is only used if the canCancel is true, which indicates that the
     * operation supports being cancelled, and if displayMessage is set to false. Otherwise if the
     * message is shown and the operation may be cancelled then whether the operation is cancelled will be based
     * upon the users response to the prompt.
    */
    get cancel() {
        return this.i.cancel;
    }
    set cancel(v) {
        this.i.cancel = ensureBool(v);
    }
    /**
     * Returns or sets the caption for the message dialog that will be displayed.
    */
    get caption() {
        return this.i.caption;
    }
    set caption(v) {
        this.i.caption = v;
    }
    /**
     * Returns or sets a boolean indicating if a message will be displayed to the end user.
    */
    get displayMessage() {
        return this.i.displayMessage;
    }
    set displayMessage(v) {
        this.i.displayMessage = ensureBool(v);
    }
    /**
     * Returns the exception for the error, if there was one.
    */
    get exception() {
        return this.i.exception;
    }
    /**
     * Returns or sets the message that will be displayed.
    */
    get message() {
        return this.i.message;
    }
    set message(v) {
        this.i.message = v;
    }
    /**
     * Returns an enumeration indicating the action caused the prompt to be displayed.
    */
    get trigger() {
        return this.i.trigger;
    }
}
//# sourceMappingURL=igx-spreadsheet-user-prompt-displaying-event-args.js.map