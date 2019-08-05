import { SpreadsheetActivePaneChangedEventArgs as SpreadsheetActivePaneChangedEventArgs_internal } from "./SpreadsheetActivePaneChangedEventArgs";
import { SpreadsheetPane } from "./SpreadsheetPane";
/**
 * Event arguments for the activePaneChanged event.
*/
export declare class SpreadsheetActivePaneChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetActivePaneChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the new value of the activePane
    */
    readonly newValue: SpreadsheetPane;
    /**
     * Returns the previous value of the activePane
    */
    readonly oldValue: SpreadsheetPane;
}
