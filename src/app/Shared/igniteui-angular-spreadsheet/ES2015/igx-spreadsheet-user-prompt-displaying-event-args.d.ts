import { SpreadsheetUserPromptDisplayingEventArgs as SpreadsheetUserPromptDisplayingEventArgs_internal } from "./SpreadsheetUserPromptDisplayingEventArgs";
import { SpreadsheetUserPromptTrigger } from "./SpreadsheetUserPromptTrigger";
/**
 * Event arguments for the userPromptDisplaying event.
*/
export declare class SpreadsheetUserPromptDisplayingEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetUserPromptDisplayingEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns a boolean indicating if the operation that triggered the prompt can be cancelled.
    */
    readonly canCancel: boolean;
    /**
     * Returns or sets a boolean indicating whether the operation that triggered the prompt should be cancelled.
     * This property is only used if the canCancel is true, which indicates that the
     * operation supports being cancelled, and if displayMessage is set to false. Otherwise if the
     * message is shown and the operation may be cancelled then whether the operation is cancelled will be based
     * upon the users response to the prompt.
    */
    cancel: boolean;
    /**
     * Returns or sets the caption for the message dialog that will be displayed.
    */
    caption: string;
    /**
     * Returns or sets a boolean indicating if a message will be displayed to the end user.
    */
    displayMessage: boolean;
    /**
     * Returns the exception for the error, if there was one.
    */
    readonly exception: any;
    /**
     * Returns or sets the message that will be displayed.
    */
    message: string;
    /**
     * Returns an enumeration indicating the action caused the prompt to be displayed.
    */
    readonly trigger: SpreadsheetUserPromptTrigger;
}
