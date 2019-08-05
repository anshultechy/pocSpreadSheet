import { SpreadsheetActiveWorksheetChangedEventArgs as SpreadsheetActiveWorksheetChangedEventArgs_internal } from "./SpreadsheetActiveWorksheetChangedEventArgs";
import { Worksheet } from "../../igniteui-angular-excel/ES2015/Worksheet";
/**
 * Event arguments for the activeWorksheetChanged event.
*/
export declare class SpreadsheetActiveWorksheetChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetActiveWorksheetChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the new value of the activeWorksheet
    */
    readonly newValue: Worksheet;
    /**
     * Returns the previous value of the activeWorksheet
    */
    readonly oldValue: Worksheet;
}
