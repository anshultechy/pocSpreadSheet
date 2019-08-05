import { SpreadsheetEditRangePasswordNeededEventArgs as SpreadsheetEditRangePasswordNeededEventArgs_internal } from "./SpreadsheetEditRangePasswordNeededEventArgs";
import { WorksheetProtectedRange } from "../../igniteui-angular-excel/ES5/WorksheetProtectedRange";
/**
 * Event arguments for the editRangePasswordNeeded event.
*/
export declare class SpreadsheetEditRangePasswordNeededEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetEditRangePasswordNeededEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the collection of protected ranges that should be unlocked.
     * This collection contains the protected ranges that overlap with the
     * locked cells that need to be unlocked. There may be multiple ranges that overlap the locked
     * cells so it may not be that every range needs to be unlocked.
    */
    readonly ranges: WorksheetProtectedRange[];
    /**
     * Unlocks the associated range(s) without validating the password.
    
    */
    unprotect(): void;
}
