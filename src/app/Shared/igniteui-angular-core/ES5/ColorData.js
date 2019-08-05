/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { Color } from "./Color";
/**
 * @hidden
 */
var ColorData = /** @class */ (function (_super) {
    tslib_1.__extends(ColorData, _super);
    function ColorData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._a = 0;
        _this._r = 0;
        _this._g = 0;
        _this._b = 0;
        return _this;
    }
    Object.defineProperty(ColorData.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            this._a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorData.prototype, "r", {
        get: function () {
            return this._r;
        },
        set: function (a) {
            this._r = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorData.prototype, "g", {
        get: function () {
            return this._g;
        },
        set: function (a) {
            this._g = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorData.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (a) {
            this._b = a;
        },
        enumerable: true,
        configurable: true
    });
    ColorData.prototype.serialize = function () {
        return "{ a: " + this.a + ", r: " + this.r + ", g: " + this.g + ", b: " + this.b + "}";
    };
    ColorData.a_1 = function (a) {
        var b = new ColorData();
        b.a = a.l;
        b.r = a.o;
        b.g = a.n;
        b.b = a.m;
        return b;
    };
    ColorData.prototype.f = function () {
        var a = new Color();
        a.l = this.a;
        a.o = this.r;
        a.n = this.g;
        a.m = this.b;
        return a;
    };
    ColorData.$t = markType(ColorData, 'ColorData', Base.$, [IVisualData_$type]);
    return ColorData;
}(Base));
export { ColorData };
//# sourceMappingURL=ColorData.js.map