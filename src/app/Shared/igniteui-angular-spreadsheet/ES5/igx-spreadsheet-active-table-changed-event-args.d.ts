import { SpreadsheetActiveTableChangedEventArgs as SpreadsheetActiveTableChangedEventArgs_internal } from "./SpreadsheetActiveTableChangedEventArgs";
import { WorksheetTable } from "../../igniteui-angular-excel/ES5/WorksheetTable";
/**
 * Event arguments for the activeTableChanged event.
*/
export declare class SpreadsheetActiveTableChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetActiveTableChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the new value of the activeTable
    */
    readonly newValue: WorksheetTable;
    /**
     * Returns the previous value of the activeTable
    */
    readonly oldValue: WorksheetTable;
}
