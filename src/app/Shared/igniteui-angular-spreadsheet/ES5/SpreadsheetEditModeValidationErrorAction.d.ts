import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumeration used to identify how the validation error event should be handled.
 */
export declare enum SpreadsheetEditModeValidationErrorAction {
    /**
     * Displays a dialog to the end user to determine the action to be taken. The options displayed will depend on the ErrorStyle of the [[DataValidationRule.errorStyle]]
     */
    ShowPrompt = 0,
    /**
     * Keeps the cell in edit mode with the invalid value.
     */
    StayInEditMode = 1,
    /**
     * Exits edit mode but reverts to the previous value similar to what happens when the end user chooses Cancel from the displayed dialog.
     */
    RevertChange = 2,
    /**
     * Exits edit mode keeping the new value.
     */
    AcceptChange = 3
}
/**
 * @hidden
 */
export declare let SpreadsheetEditModeValidationErrorAction_$type: Type;
