/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, IEquatable$1_$type, Base, Nullable$1, typeCast, markStruct } from "../../igniteui-angular-core/ES5/type";
import { ComparisonComparer$1 } from "./ComparisonComparer$1";
import { stringFormat } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * @hidden
 */
var IntRange = /** @class */ (function (_super) {
    tslib_1.__extends(IntRange, _super);
    function IntRange(a) {
        var _rest = [];
        for (var _k = 1; _k < arguments.length; _k++) {
            _rest[_k - 1] = arguments[_k];
        }
        var _this = _super.call(this) || this;
        _this._i = 0;
        _this._h = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    if (c < d) {
                        _this._i = c;
                        _this._h = d;
                    }
                    else {
                        _this._i = d;
                        _this._h = c;
                    }
                }
                break;
        }
        return _this;
    }
    IntRange.prototype.equals1 = function (a) {
        if (typeCast(IntRange.$, a) !== null) {
            return this.equals(a);
        }
        return false;
    };
    IntRange.prototype.getHashCode = function () {
        return this._i << 16 ^ this._h;
    };
    IntRange.prototype.toString = function () {
        return stringFormat("{0}-{1}", this._i, this._h);
    };
    Object.defineProperty(IntRange, "_f", {
        get: function () {
            if (IntRange._d == null) {
                IntRange._d = new ComparisonComparer$1(IntRange.$, function (a, b) { return Base.compareSimple(a._i, b._i); });
            }
            return IntRange._d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntRange, "_g", {
        get: function () {
            if (IntRange._e == null) {
                IntRange._e = new ComparisonComparer$1(IntRange.$, function (a, b) {
                    var c = Base.compareSimple(a._i, b._i);
                    if (c == 0) {
                        c = Base.compareSimple(a._h, b._h);
                    }
                    return c;
                });
            }
            return IntRange._e;
        },
        enumerable: true,
        configurable: true
    });
    IntRange.prototype._c = function (a) {
        return this._i <= a && a <= this._h;
    };
    IntRange.prototype._j = function (a) {
        if (this._h < a._i || this._i > a._h) {
            return Nullable$1.toNullable(IntRange.$, null);
        }
        var b = this._i < a._i ? a._i : this._i;
        var c = this._h < a._h ? this._h : a._h;
        return Nullable$1.toNullable(IntRange.$, new IntRange(1, b, c));
    };
    IntRange.prototype._a = function (a) {
        if (this._i >= a) {
            return this;
        }
        var b = a;
        var c = this._h < a ? a : this._h;
        return new IntRange(1, b, c);
    };
    IntRange.prototype._b = function (a) {
        if (this._h <= a) {
            return this;
        }
        var b = this._i < a ? this._i : a;
        var c = a;
        return new IntRange(1, b, c);
    };
    IntRange.prototype.equals = function (a) {
        return this._i == a._i && this._h == a._h;
    };
    IntRange.$t = markStruct(IntRange, 'IntRange', ValueType.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
    IntRange._d = null;
    IntRange._e = null;
    return IntRange;
}(ValueType));
export { IntRange };
//# sourceMappingURL=IntRange.js.map
