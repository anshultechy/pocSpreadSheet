import { SpreadsheetWorkbookDirtiedEventArgs as SpreadsheetWorkbookDirtiedEventArgs_internal } from "./SpreadsheetWorkbookDirtiedEventArgs";
/**
 * Event arguments for the workbookDirtied event.
*/
export class SpreadsheetWorkbookDirtiedEventArgs {
    createImplementation() {
        return new SpreadsheetWorkbookDirtiedEventArgs_internal();
    }
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
}
//# sourceMappingURL=igx-spreadsheet-workbook-dirtied-event-args.js.map