import { SpreadsheetEditModeEnteredEventArgs as SpreadsheetEditModeEnteredEventArgs_internal } from "./SpreadsheetEditModeEnteredEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * Event arguments for the editModeEntered event.
*/
export declare class SpreadsheetEditModeEnteredEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetEditModeEnteredEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the cell for which the control has entered edit mode.
    */
    readonly cell: SpreadsheetCell;
}
