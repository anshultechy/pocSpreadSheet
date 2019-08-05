import { SpreadsheetEditModeExitingEventArgs as SpreadsheetEditModeExitingEventArgs_internal } from "./SpreadsheetEditModeExitingEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * Event arguments for the editModeExiting event.
*/
export declare class SpreadsheetEditModeExitingEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetEditModeExitingEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns or sets a boolean indicating whether the changes will be made to the cell's value when edit mode ends.
    */
    acceptChanges: boolean;
    /**
     * Returns a boolean indicating if the edit mode is being forced to exit edit mode in which case it cannot be cancelled.
    */
    readonly canCancel: boolean;
    /**
     * Returns the cell for which the control is exiting edit mode.
    */
    readonly cell: SpreadsheetCell;
    /**
     * Returns the edit text that will be used to update the cell(s).
    */
    readonly editText: string;
}
