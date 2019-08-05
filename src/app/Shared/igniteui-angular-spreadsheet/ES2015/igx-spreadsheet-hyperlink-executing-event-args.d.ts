import { SpreadsheetHyperlinkExecutingEventArgs as SpreadsheetHyperlinkExecutingEventArgs_internal } from "./SpreadsheetHyperlinkExecutingEventArgs";
import { WorksheetHyperlink } from "../../igniteui-angular-excel/ES2015/WorksheetHyperlink";
/**
 * Event arguments for the hyperlinkExecuting event.
*/
export declare class SpreadsheetHyperlinkExecutingEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetHyperlinkExecutingEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the hyperlink to be executed.
    */
    readonly hyperlink: WorksheetHyperlink;
    /**
     * Returns or sets the working directory to use when the hyperlink is a file reference.
    */
    workingDirectory: string;
}
