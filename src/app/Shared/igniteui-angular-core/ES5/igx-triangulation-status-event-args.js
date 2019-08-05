var TriangulationStatusEventArgs = /** @class */ (function () {
    function TriangulationStatusEventArgs() {
    }
    Object.defineProperty(TriangulationStatusEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    TriangulationStatusEventArgs.prototype.onImplementationCreated = function () {
    };
    TriangulationStatusEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(TriangulationStatusEventArgs.prototype, "currentStatus", {
        /**
         * The current status from 0 to 100 of the progressive triangulation.
        */
        get: function () {
            return this.i.currentStatus;
        },
        set: function (v) {
            this.i.currentStatus = +v;
        },
        enumerable: true,
        configurable: true
    });
    return TriangulationStatusEventArgs;
}());
export { TriangulationStatusEventArgs };
//# sourceMappingURL=igx-triangulation-status-event-args.js.map