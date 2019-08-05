import { SpreadsheetActiveCellChangedEventArgs as SpreadsheetActiveCellChangedEventArgs_internal } from "./SpreadsheetActiveCellChangedEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * Event arguments for the activeCellChanged event.
*/
export declare class SpreadsheetActiveCellChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetActiveCellChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the new value of the activeCell
    */
    readonly newValue: SpreadsheetCell;
    /**
     * Returns the previous value of the activeCell
    */
    readonly oldValue: SpreadsheetCell;
}
