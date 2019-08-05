/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { UIElement } from "./UIElement";
import { markType } from "./type";
/**
 * @hidden
 */
var FrameworkElement = /** @class */ (function (_super) {
    tslib_1.__extends(FrameworkElement, _super);
    function FrameworkElement() {
        var _this = _super.call(this) || this;
        _this._name = null;
        _this.m = 0;
        _this.l = 0;
        _this._visibility = 0;
        _this._width = 0;
        _this._height = 0;
        _this.o = 0;
        _this.n = 0;
        _this.s = 0;
        _this.x = null;
        _this._dataContext = null;
        _this._opacity = 1;
        _this.y = null;
        _this._opacity = 1;
        _this.s = 0;
        _this._visibility = 0;
        _this.width = NaN;
        _this.height = NaN;
        return _this;
    }
    Object.defineProperty(FrameworkElement.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (a) {
            this._name = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrameworkElement.prototype, "visibility", {
        get: function () {
            return this._visibility;
        },
        set: function (a) {
            if (this._visibility != a) {
                var b = this._visibility;
                this._visibility = a;
                this.w(b, this._visibility);
            }
        },
        enumerable: true,
        configurable: true
    });
    FrameworkElement.prototype.w = function (a, b) {
    };
    Object.defineProperty(FrameworkElement.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (a) {
            this._width = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrameworkElement.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (a) {
            this._height = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrameworkElement.prototype, "dataContext", {
        get: function () {
            return this._dataContext;
        },
        set: function (a) {
            this._dataContext = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrameworkElement.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (a) {
            if (this._opacity != a) {
                this._opacity = a;
                this.v();
            }
        },
        enumerable: true,
        configurable: true
    });
    FrameworkElement.prototype.v = function () {
    };
    FrameworkElement.$t = markType(FrameworkElement, 'FrameworkElement', UIElement.$);
    return FrameworkElement;
}(UIElement));
export { FrameworkElement };
//# sourceMappingURL=FrameworkElement.js.map