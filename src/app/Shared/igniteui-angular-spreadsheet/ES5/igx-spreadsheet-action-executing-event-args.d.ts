import { SpreadsheetCommandExecutingEventArgs as SpreadsheetCommandExecutingEventArgs_internal } from "./SpreadsheetCommandExecutingEventArgs";
import { SpreadsheetAction } from "./SpreadsheetAction";
/**
 * Event arguments for the actionExecuting event.
*/
export declare class SpreadsheetActionExecutingEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: SpreadsheetCommandExecutingEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Returns the command which will be executed on the Spreadsheet.
    */
    readonly command: SpreadsheetAction;
    /**
     * Returns the parameter which will be used when executing the command.
    */
    readonly commandParameter: any;
}
