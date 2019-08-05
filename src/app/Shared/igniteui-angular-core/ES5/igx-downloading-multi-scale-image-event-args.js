import { DownloadingMultiScaleImageEventArgs as DownloadingMultiScaleImageEventArgs_internal } from "./DownloadingMultiScaleImageEventArgs";
var DownloadingMultiScaleImageEventArgs = /** @class */ (function () {
    function DownloadingMultiScaleImageEventArgs() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    DownloadingMultiScaleImageEventArgs.prototype.createImplementation = function () {
        return new DownloadingMultiScaleImageEventArgs_internal();
    };
    Object.defineProperty(DownloadingMultiScaleImageEventArgs.prototype, "i", {
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    DownloadingMultiScaleImageEventArgs.prototype.onImplementationCreated = function () {
    };
    DownloadingMultiScaleImageEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(DownloadingMultiScaleImageEventArgs.prototype, "image", {
        get: function () {
            return this.i.image;
        },
        set: function (v) {
            this.i.image = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadingMultiScaleImageEventArgs.prototype, "uri", {
        get: function () {
            return this.i.uri;
        },
        set: function (v) {
            this.i.uri = v;
        },
        enumerable: true,
        configurable: true
    });
    return DownloadingMultiScaleImageEventArgs;
}());
export { DownloadingMultiScaleImageEventArgs };
//# sourceMappingURL=igx-downloading-multi-scale-image-event-args.js.map