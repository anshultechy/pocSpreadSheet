/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IDisposable_$type, BaseError, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var RendererContainer = /** @class */ (function (_super) {
    tslib_1.__extends(RendererContainer, _super);
    function RendererContainer(a) {
        var _this = _super.call(this) || this;
        _this._f = null;
        _this._a = null;
        _this._onReady = null;
        _this._isDisposed = false;
        _this._isReady = false;
        _this._container = null;
        _this._e = null;
        _this._a = a;
        return _this;
    }
    RendererContainer.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var a = this._e;
            if (a != null && a.parentNode != this._f) {
                if (a.parentNode != null) {
                    a.parentNode.removeChild(a);
                }
                if (this._f != null) {
                    this._f.appendChild(a);
                }
            }
            if (this._a != null) {
                this._a();
            }
        }
    };
    Object.defineProperty(RendererContainer.prototype, "onReady", {
        get: function () {
            return this._onReady;
        },
        set: function (a) {
            this._onReady = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RendererContainer.prototype, "isDisposed", {
        get: function () {
            return this._isDisposed;
        },
        set: function (a) {
            this._isDisposed = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RendererContainer.prototype, "isReady", {
        get: function () {
            return this._isReady;
        },
        set: function (a) {
            this._isReady = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RendererContainer.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (a) {
            this._container = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RendererContainer.prototype, "containerElement", {
        get: function () {
            return this._e;
        },
        set: function (a) {
            this._e = a;
        },
        enumerable: true,
        configurable: true
    });
    RendererContainer.prototype.initialize = function (a, b) {
        if (a == this.container && b == this.containerElement) {
            return;
        }
        if (this.containerElement != null) {
            throw new BaseError(0);
        }
        this.container = a;
        this._e = b;
        if (!this.isDisposed) {
            this._f = this._e.parentElement;
            if (this._e.parentNode != null) {
                this._e.parentNode.removeChild(this._e);
            }
            this.isReady = true;
            if (this.onReady != null) {
                this.onReady();
            }
        }
    };
    RendererContainer.$t = markType(RendererContainer, 'RendererContainer', Base.$, [IDisposable_$type]);
    return RendererContainer;
}(Base));
export { RendererContainer };
//# sourceMappingURL=RendererContainer.js.map
