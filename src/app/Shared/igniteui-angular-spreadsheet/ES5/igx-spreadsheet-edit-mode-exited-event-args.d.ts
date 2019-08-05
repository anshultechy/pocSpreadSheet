import { SpreadsheetEditModeExitedEventArgs as SpreadsheetEditModeExitedEventArgs_internal } from "./SpreadsheetEditModeExitedEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * Event arguments for the editModeExited event.
*/
export declare class SpreadsheetEditModeExitedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetEditModeExitedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the cell for which the control has exitied edit mode.
    */
    readonly cell: SpreadsheetCell;
}
