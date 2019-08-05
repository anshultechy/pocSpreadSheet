import { SpreadsheetEditModeEnteringEventArgs as SpreadsheetEditModeEnteringEventArgs_internal } from "./SpreadsheetEditModeEnteringEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * Event arguments for the editModeEntering event.
*/
export declare class SpreadsheetEditModeEnteringEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetEditModeEnteringEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the cell for which the control is going into edit mode.
    */
    readonly cell: SpreadsheetCell;
}
