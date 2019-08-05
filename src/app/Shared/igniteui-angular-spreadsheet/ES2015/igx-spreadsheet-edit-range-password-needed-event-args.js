/**
 * Event arguments for the editRangePasswordNeeded event.
*/
export class SpreadsheetEditRangePasswordNeededEventArgs {
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
     * Returns the collection of protected ranges that should be unlocked.
     * This collection contains the protected ranges that overlap with the
     * locked cells that need to be unlocked. There may be multiple ranges that overlap the locked
     * cells so it may not be that every range needs to be unlocked.
    */
    get ranges() {
        return this.i.ranges;
    }
    /**
     * Unlocks the associated range(s) without validating the password.
    
    */
    unprotect() {
        this.i.unprotect();
    }
}
//# sourceMappingURL=igx-spreadsheet-edit-range-password-needed-event-args.js.map