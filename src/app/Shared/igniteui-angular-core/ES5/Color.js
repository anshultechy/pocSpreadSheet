/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, typeCast, markStruct } from "./type";
import { ArgumentException } from "./ArgumentException";
import { truncate } from "./number";
import { stringToColor } from "./colorCore";
import { stringStartsWith } from "./string";
/**
 * @hidden
 */
var Color = /** @class */ (function (_super) {
    tslib_1.__extends(Color, _super);
    function Color() {
        var _this = _super.call(this) || this;
        _this._a = 0;
        _this._r = 0;
        _this._g = 0;
        _this._b = 0;
        _this._colorString = null;
        _this.a = false;
        return _this;
    }
    Object.defineProperty(Color.prototype, "l", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            this._a = truncate(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "o", {
        get: function () {
            return this._r;
        },
        set: function (a) {
            this._r = truncate(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "n", {
        get: function () {
            return this._g;
        },
        set: function (a) {
            this._g = truncate(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "m", {
        get: function () {
            return this._b;
        },
        set: function (a) {
            this._b = truncate(Math.round(a));
            this.a = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "colorString", {
        get: function () {
            if (this.a || this._colorString == null) {
                this.a = false;
                this.s();
            }
            return this._colorString;
        },
        set: function (a) {
            this._colorString = a;
            this.r();
        },
        enumerable: true,
        configurable: true
    });
    Color.create = function (a) {
        if (typeCast(Color.$, a) !== null) {
            return a;
        }
        var b = new Color();
        if (typeof a === 'string') {
            b.colorString = a;
        }
        else if (a != null) {
            throw new ArgumentException(1, "Unknown color type");
        }
        return b;
    };
    Color.prototype.s = function () {
        this._colorString = "rgba(" + this._r + "," + this._g + "," + this._b + "," + this._a / 255 + ")";
    };
    Color.prototype.r = function () {
        if (this.colorString == null) {
            this.l = this.o = this.n = this.m = 0;
            return;
        }
        var obj_ = stringToColor(this._colorString);
        this._a = typeof obj_.a != 'undefined' ? Math.round(obj_.a) : 0;
        this._r = typeof obj_.r != 'undefined' ? Math.round(obj_.r) : 0;
        this._g = typeof obj_.g != 'undefined' ? Math.round(obj_.g) : 0;
        this._b = typeof obj_.b != 'undefined' ? Math.round(obj_.b) : 0;
        if (stringStartsWith(this._colorString, "#") && this._colorString.length == 9) {
            this.s();
        }
    };
    Color.u = function (a_, r_, g_, b_) {
        var a = new Color();
        a._a = (a_ | 0);
        a._r = (r_ | 0);
        a._g = (g_ | 0);
        a._b = (b_ | 0);
        a.a = true;
        return a;
    };
    Color.prototype.equals = function (a) {
        if ((typeCast(Color.$, a) !== null) == false) {
            return false;
        }
        var b = a;
        return this._a == b._a && this._r == b._r && this._g == b._g && this._b == b._b;
    };
    Color.prototype.getHashCode = function () {
        return (this._a << 24) | (this._r << 16) | (this._g << 8) | this._b;
    };
    Color.d = function (a, b) {
        return !(Color.b(a, b));
    };
    Color.e = function (a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return Color.d(a.value, b.value);
    };
    Color.b = function (a, b) {
        return a._a == b._a && a._r == b._r && a._g == b._g && a._b == b._b;
    };
    Color.c = function (a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return Color.b(a.value, b.value);
    };
    Color.$t = markStruct(Color, 'Color');
    return Color;
}(ValueType));
export { Color };
//# sourceMappingURL=Color.js.map