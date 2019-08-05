export class TriangulationStatusEventArgs {
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
     * The current status from 0 to 100 of the progressive triangulation.
    */
    get currentStatus() {
        return this.i.currentStatus;
    }
    set currentStatus(v) {
        this.i.currentStatus = +v;
    }
}
//# sourceMappingURL=igx-triangulation-status-event-args.js.map