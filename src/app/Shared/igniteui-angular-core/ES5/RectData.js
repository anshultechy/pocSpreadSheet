/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { Rect } from "./Rect";
/**
 * @hidden
 */
var RectData = /** @class */ (function (_super) {
    tslib_1.__extends(RectData, _super);
    function RectData(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this._top = 0;
        _this._left = 0;
        _this._width = 0;
        _this._height = 0;
        _this.left = a;
        _this.top = b;
        _this.width = c;
        _this.height = d;
        return _this;
    }
    Object.defineProperty(RectData.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (a) {
            this._top = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectData.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (a) {
            this._left = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectData.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (a) {
            this._width = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectData.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (a) {
            this._height = a;
        },
        enumerable: true,
        configurable: true
    });
    RectData.prototype.serialize = function () {
        return "{ top: " + this.top + ", left: " + this.left + ", width: " + this.width + ", height: " + this.height + "}";
    };
    RectData.b = function (a) {
        var b = new RectData(a.left, a.top, a.width, a.height);
        return b;
    };
    RectData.prototype.h = function () {
        var a = new Rect(0, this.left, this.top, this.width, this.height);
        return a;
    };
    Object.defineProperty(RectData.prototype, "isEmpty", {
        get: function () {
            return this.width < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectData, "empty", {
        get: function () {
            return new RectData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
        },
        enumerable: true,
        configurable: true
    });
    RectData.$t = markType(RectData, 'RectData', Base.$, [IVisualData_$type]);
    return RectData;
}(Base));
export { RectData };
//# sourceMappingURL=RectData.js.map