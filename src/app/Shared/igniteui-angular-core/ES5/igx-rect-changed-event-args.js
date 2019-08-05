import { fromRect, toRect } from "./componentUtil";
/**
 * Provides data for rectangle changed events.
*/
var RectChangedEventArgs = /** @class */ (function () {
    function RectChangedEventArgs() {
    }
    Object.defineProperty(RectChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    RectChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    RectChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(RectChangedEventArgs.prototype, "oldRect", {
        /**
         * Gets the rectangle before the change.
        */
        get: function () {
            return fromRect(this.i.oldRect);
        },
        set: function (v) {
            this.i.oldRect = toRect(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectChangedEventArgs.prototype, "newRect", {
        /**
         * Gets the new rectangle.
        */
        get: function () {
            return fromRect(this.i.newRect);
        },
        set: function (v) {
            this.i.newRect = toRect(v);
        },
        enumerable: true,
        configurable: true
    });
    return RectChangedEventArgs;
}());
export { RectChangedEventArgs };
//# sourceMappingURL=igx-rect-changed-event-args.js.map