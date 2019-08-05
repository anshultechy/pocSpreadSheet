import { SpreadsheetCommandExecutedEventArgs as SpreadsheetCommandExecutedEventArgs_internal } from "./SpreadsheetCommandExecutedEventArgs";
import { SpreadsheetAction } from "./SpreadsheetAction";
/**
 * Event arguments for the actionExecuted event.
*/
export declare class SpreadsheetActionExecutedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetCommandExecutedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the command which was executed on the Spreadsheet.
    */
    readonly command: SpreadsheetAction;
    /**
     * Returns the parameter used when executing the command.
    */
    readonly commandParameter: any;
}
