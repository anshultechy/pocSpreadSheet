/**
 * EventArgs class for property updated events.
*/
var PropertyUpdatedEventArgs = /** @class */ (function () {
    function PropertyUpdatedEventArgs() {
    }
    Object.defineProperty(PropertyUpdatedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    PropertyUpdatedEventArgs.prototype.onImplementationCreated = function () {
    };
    PropertyUpdatedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(PropertyUpdatedEventArgs.prototype, "propertyName", {
        /**
         * Name of the property being updated.
        */
        get: function () {
            return this.i.propertyName;
        },
        set: function (v) {
            this.i.propertyName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyUpdatedEventArgs.prototype, "oldValue", {
        /**
         * Old or previous value of the property being updated.
        */
        get: function () {
            return this.i.oldValue;
        },
        set: function (v) {
            this.i.oldValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyUpdatedEventArgs.prototype, "newValue", {
        /**
         * New or current value of the property being updated.
        */
        get: function () {
            return this.i.newValue;
        },
        set: function (v) {
            this.i.newValue = v;
        },
        enumerable: true,
        configurable: true
    });
    return PropertyUpdatedEventArgs;
}());
export { PropertyUpdatedEventArgs };
//# sourceMappingURL=igx-property-updated-event-args.js.map