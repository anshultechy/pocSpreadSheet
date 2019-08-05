import { CancellingMultiScaleImageEventArgs as CancellingMultiScaleImageEventArgs_internal } from "./CancellingMultiScaleImageEventArgs";
var CancellingMultiScaleImageEventArgs = /** @class */ (function () {
    function CancellingMultiScaleImageEventArgs() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    CancellingMultiScaleImageEventArgs.prototype.createImplementation = function () {
        return new CancellingMultiScaleImageEventArgs_internal();
    };
    Object.defineProperty(CancellingMultiScaleImageEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    CancellingMultiScaleImageEventArgs.prototype.onImplementationCreated = function () {
    };
    CancellingMultiScaleImageEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(CancellingMultiScaleImageEventArgs.prototype, "uri", {
        get: function () {
            return this.i.uri;
        },
        set: function (v) {
            this.i.uri = v;
        },
        enumerable: true,
        configurable: true
    });
    return CancellingMultiScaleImageEventArgs;
}());
export { CancellingMultiScaleImageEventArgs };
//# sourceMappingURL=igx-cancelling-multi-scale-image-event-args.js.map