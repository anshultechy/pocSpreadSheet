import { CancellingMultiScaleImageEventArgs as CancellingMultiScaleImageEventArgs_internal } from "./CancellingMultiScaleImageEventArgs";
export class CancellingMultiScaleImageEventArgs {
    createImplementation() {
        return new CancellingMultiScaleImageEventArgs_internal();
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
    get uri() {
        return this.i.uri;
    }
    set uri(v) {
        this.i.uri = v;
    }
}
//# sourceMappingURL=igx-cancelling-multi-scale-image-event-args.js.map