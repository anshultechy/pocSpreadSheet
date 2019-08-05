import { SpreadsheetEditModeValidationErrorEventArgs as SpreadsheetEditModeValidationErrorEventArgs_internal } from "./SpreadsheetEditModeValidationErrorEventArgs";
import { SpreadsheetEditModeValidationErrorAction } from "./SpreadsheetEditModeValidationErrorAction";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { DataValidationRule } from "../../igniteui-angular-excel/ES5/DataValidationRule";
/**
 * Event arguments for the editModeValidationError event.
*/
export declare class SpreadsheetEditModeValidationErrorEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetEditModeValidationErrorEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns or sets the action to take in response to the failed validation.
     * By default the property is set to null and the control will display a message box to obtain the action
     * from the end user. If the property is set to a non-null value, that action will be used and the message box will not be
     * displayed.
    */
    action: SpreadsheetEditModeValidationErrorAction;
    /**
     * Returns a boolean indicating whether the cell is allowed to stay in edit mode.
    */
    canStayInEditMode: boolean;
    /**
     * Returns the cell for which the control has entered edit mode.
    */
    cell: SpreadsheetCell;
    /**
     * Returns the rule which failed validation.
    */
    validationRule: DataValidationRule;
}
