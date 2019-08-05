import { SpreadsheetWorkbookDirtiedEventArgs as SpreadsheetWorkbookDirtiedEventArgs_internal } from "./SpreadsheetWorkbookDirtiedEventArgs";
/**
 * Event arguments for the workbookDirtied event.
*/
export declare class SpreadsheetWorkbookDirtiedEventArgs {
    protected createImplementation(): SpreadsheetWorkbookDirtiedEventArgs_internal;
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetWorkbookDirtiedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
}
