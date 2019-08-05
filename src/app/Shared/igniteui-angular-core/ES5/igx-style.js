import { Style as Style_internal } from "./Style";
/**
 * A class that exposes style realted properties.
*/
var Style = /** @class */ (function () {
    function Style() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    Style.prototype.createImplementation = function () {
        return new Style_internal();
    };
    Object.defineProperty(Style.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    Style.prototype.onImplementationCreated = function () {
    };
    Style.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    return Style;
}());
export { Style };
//# sourceMappingURL=igx-style.js.map