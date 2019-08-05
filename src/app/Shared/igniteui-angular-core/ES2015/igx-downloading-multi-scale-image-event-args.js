import { DownloadingMultiScaleImageEventArgs as DownloadingMultiScaleImageEventArgs_internal } from "./DownloadingMultiScaleImageEventArgs";
export class DownloadingMultiScaleImageEventArgs {
    createImplementation() {
        return new DownloadingMultiScaleImageEventArgs_internal();
    }
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
    get image() {
        return this.i.image;
    }
    set image(v) {
        this.i.image = v;
    }
    get uri() {
        return this.i.uri;
    }
    set uri(v) {
        this.i.uri = v;
    }
}
//# sourceMappingURL=igx-downloading-multi-scale-image-event-args.js.map