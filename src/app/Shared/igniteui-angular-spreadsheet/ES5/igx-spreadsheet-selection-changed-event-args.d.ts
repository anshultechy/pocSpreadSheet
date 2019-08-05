import { SpreadsheetSelectionChangedEventArgs as SpreadsheetSelectionChangedEventArgs_internal } from "./SpreadsheetSelectionChangedEventArgs";
import { SpreadsheetPane } from "./SpreadsheetPane";
/**
 * Event arguments for the selectionChanged event.
*/
export declare class SpreadsheetSelectionChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetSelectionChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the pane whose selection has been changed.
    */
    readonly pane: SpreadsheetPane;
}
