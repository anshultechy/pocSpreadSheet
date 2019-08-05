/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEquatable$1_$type, Nullable$1, Boolean_$type, Number_$type, typeCast, String_$type, Type, markType } from "../../igniteui-angular-core/ES5/type";
import { WorkbookColorInfo, FontSuperscriptSubscriptStyle_$type, FontUnderlineStyle_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { EqualityComparer$1 } from "../../igniteui-angular-core/ES5/EqualityComparer$1";
import { nullableNotEquals } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var IGFormattedTextSettings = /** @class */ (function (_super) {
    tslib_1.__extends(IGFormattedTextSettings, _super);
    function IGFormattedTextSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._u = null;
        _this._i = Nullable$1.toNullable(Boolean_$type, null);
        _this._j = Nullable$1.toNullable(Number_$type, null);
        _this._k = Nullable$1.toNullable(Boolean_$type, null);
        _this._l = Nullable$1.toNullable(Boolean_$type, null);
        _this._m = Nullable$1.toNullable(FontSuperscriptSubscriptStyle_$type, null);
        _this._n = Nullable$1.toNullable(FontUnderlineStyle_$type, null);
        _this._c = null;
        _this._a = 0;
        return _this;
    }
    IGFormattedTextSettings.prototype.equals1 = function (a) {
        var b = typeCast(IGFormattedTextSettings.$, a);
        return b != null && this.equals(b);
    };
    IGFormattedTextSettings.prototype.getHashCode = function () {
        return Base.getHashCodeStatic(this._a);
    };
    Object.defineProperty(IGFormattedTextSettings.prototype, "_v", {
        get: function () {
            return this._u;
        },
        set: function (a) {
            if (this._u != a) {
                this._u = a;
                this._ab(String_$type, a, 2);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_o", {
        get: function () {
            return this._i;
        },
        set: function (a) {
            if (nullableNotEquals(this._i, a)) {
                this._i = a;
                this._ab(Nullable$1.$.specialize(Boolean_$type), a, 4);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_p", {
        get: function () {
            return this._j;
        },
        set: function (a) {
            if (nullableNotEquals(this._j, a)) {
                this._j = a;
                this._ab(Nullable$1.$.specialize(Number_$type), a, 8);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_b", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_q", {
        get: function () {
            return this._k;
        },
        set: function (a) {
            if (nullableNotEquals(this._k, a)) {
                this._k = a;
                this._ab(Nullable$1.$.specialize(Boolean_$type), a, 16);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_r", {
        get: function () {
            return this._l;
        },
        set: function (a) {
            if (nullableNotEquals(this._l, a)) {
                this._l = a;
                this._ab(Nullable$1.$.specialize(Boolean_$type), a, 32);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_s", {
        get: function () {
            return this._m;
        },
        set: function (a) {
            if (nullableNotEquals(this._m, a)) {
                this._m = a;
                this._ab(Nullable$1.$.specialize(FontSuperscriptSubscriptStyle_$type), a, 64);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_t", {
        get: function () {
            return this._n;
        },
        set: function (a) {
            if (nullableNotEquals(this._n, a)) {
                this._n = a;
                this._ab(Nullable$1.$.specialize(FontUnderlineStyle_$type), a, 256);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextSettings.prototype, "_d", {
        get: function () {
            return this._c;
        },
        set: function (a) {
            if (WorkbookColorInfo.l_op_Inequality(this._c, a)) {
                this._c = a;
                this._ab(WorkbookColorInfo.$, a, 128);
            }
        },
        enumerable: true,
        configurable: true
    });
    IGFormattedTextSettings.prototype._w = function (a) {
        this._x(a, false);
    };
    IGFormattedTextSettings.prototype._x = function (a, b) {
        var c = this._y(String_$type, this._u, a._u, b, 2);
        this._u = c.p0;
        var d = this._y(Nullable$1.$.specialize(Boolean_$type), this._i, a._i, b, 4);
        this._i = d.p0;
        var e = this._y(Nullable$1.$.specialize(Number_$type), this._j, a._j, b, 8);
        this._j = e.p0;
        var f = this._y(Nullable$1.$.specialize(Boolean_$type), this._l, a._l, b, 32);
        this._l = f.p0;
        var g = this._y(Nullable$1.$.specialize(Boolean_$type), this._k, a._k, b, 16);
        this._k = g.p0;
        var h = this._y(Nullable$1.$.specialize(FontSuperscriptSubscriptStyle_$type), this._m, a._m, b, 64);
        this._m = h.p0;
        var i = this._y(Nullable$1.$.specialize(FontUnderlineStyle_$type), this._n, a._n, b, 256);
        this._n = i.p0;
        var j = this._y(WorkbookColorInfo.$, this._c, a._c, b, 128);
        this._c = j.p0;
    };
    IGFormattedTextSettings.prototype._y = function ($t, a, b, c, d, e) {
        if (e === void 0) { e = null; }
        if ((e || EqualityComparer$1.defaultEqualityComparerValue($t)).equalsC(a, b) == c) {
            this._a &= ~d;
            a = Type.getDefaultValue($t);
        }
        return {
            p0: a
        };
    };
    IGFormattedTextSettings.prototype._z = function (a) {
        this._x(a, true);
    };
    IGFormattedTextSettings.prototype.equals = function (a) {
        if (a._a != this._a) {
            return false;
        }
        if (nullableNotEquals(a._j, this._j) || nullableNotEquals(a._l, this._l) || nullableNotEquals(a._k, this._k) || nullableNotEquals(a._m, this._m) || nullableNotEquals(a._n, this._n) || nullableNotEquals(a._i, this._i)) {
            return false;
        }
        if (!Base.equalsStatic(a._u, this._u)) {
            return false;
        }
        if (!Base.equalsStatic(a._c, this._c)) {
            return false;
        }
        return true;
    };
    IGFormattedTextSettings.prototype._f = function () {
        return this._a != 0;
    };
    IGFormattedTextSettings.prototype._g = function (a) {
        return (a & this._a) != 0;
    };
    IGFormattedTextSettings.prototype._aa = function (a) {
        if (a._a != 0) {
            if (!this._g(2)) {
                this._v = a._v;
            }
            if (!this._g(4)) {
                this._o = a._o;
            }
            if (!this._g(8)) {
                this._p = a._p;
            }
            if (!this._g(32)) {
                this._r = a._r;
            }
            if (!this._g(64)) {
                this._s = a._s;
            }
            if (!this._g(256)) {
                this._t = a._t;
            }
            if (!this._g(16)) {
                this._q = a._q;
            }
            if (!this._g(128)) {
                this._d = a._d;
            }
        }
    };
    IGFormattedTextSettings.prototype._ab = function ($t, a, b) {
        if (EqualityComparer$1.defaultEqualityComparerValue($t).equalsC(a, Type.getDefaultValue($t))) {
            this._a &= ~b;
        }
        else {
            this._a |= b;
        }
    };
    IGFormattedTextSettings.$t = markType(IGFormattedTextSettings, 'IGFormattedTextSettings', Base.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
    return IGFormattedTextSettings;
}(Base));
export { IGFormattedTextSettings };
//# sourceMappingURL=IGFormattedTextSettings.js.map
