/**
 * Event arguments for the hyperlinkExecuting event.
*/
export class SpreadsheetHyperlinkExecutingEventArgs {
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    /**
     * Returns the hyperlink to be executed.
    */
    get hyperlink() {
        return this.i.hyperlink;
    }
    /**
     * Returns or sets the working directory to use when the hyperlink is a file reference.
    */
    get workingDirectory() {
        return this.i.workingDirectory;
    }
    set workingDirectory(v) {
        this.i.workingDirectory = v;
    }
}
//# sourceMappingURL=igx-spreadsheet-hyperlink-executing-event-args.js.map