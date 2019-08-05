/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, IList_$type, ICollection$1_$type, ICollection_$type, Type, Nullable, NotSupportedException, typeCast, fromEnum, fromEn, typeCastObjTo$t, markType, EnumUtil, getBoxIfEnum, getEnumeratorObject, INotifyPropertyChanged_$type, runOn, delegateCombine } from "../../igniteui-angular-core/ES5/type";
import { EqualityComparer$1 } from "../../igniteui-angular-core/ES5/EqualityComparer$1";
import { Comparer$1 } from "../../igniteui-angular-core/ES5/Comparer$1";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { SR } from "./SR";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { ArgumentNullException } from "../../igniteui-angular-core/ES5/ArgumentNullException";
import { intDivide } from "../../igniteui-angular-core/ES5/number";
import { TypedEnumerable$1 } from "./TypedEnumerable$1";
import { TypedEnumerable_Enumerator$1 } from "./TypedEnumerable_Enumerator$1";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
/**
 * @hidden
 */
var CoreUtilities = /** @class */ (function (_super) {
    tslib_1.__extends(CoreUtilities, _super);
    function CoreUtilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreUtilities.j = function ($t, a) {
        return new CoreUtilities_ObservableTypedList$1($t, a);
    };
    CoreUtilities.c = function (a, b) {
        if (a == b) {
            return true;
        }
        return Math.abs(a - b) < 1E-10;
    };
    CoreUtilities.h = function (a, b) {
        return a < b && !CoreUtilities.c(a, b);
    };
    CoreUtilities.e = function (a, b) {
        return a > b && !CoreUtilities.c(a, b);
    };
    CoreUtilities.i = function (a, b) {
        return a <= b || CoreUtilities.c(a, b);
    };
    CoreUtilities.f = function (a, b) {
        return a >= b || CoreUtilities.c(a, b);
    };
    CoreUtilities.d = function ($t, a, b, c) {
        if (c === void 0) { c = null; }
        if (a == b) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        if (a.count != b.count) {
            return false;
        }
        if (c == null) {
            c = EqualityComparer$1.defaultEqualityComparerValue($t);
        }
        for (var d = 0, e = a.count; d < e; d++) {
            if (!c.equalsC(a.item(d), b.item(d))) {
                return false;
            }
        }
        return true;
    };
    CoreUtilities.m = function ($t, a, b, c, d) {
        if (c == null) {
            c = Comparer$1.defaultComparerValue($t);
        }
        var e = 0, f = a.count - 1;
        var g = 0;
        var h = !d ? null : EqualityComparer$1.defaultEqualityComparerValue($t);
        while (e <= f) {
            g = intDivide((e + f), 2);
            var i = a.item(g);
            if (null != h && h.equalsC(b, i)) {
                if (g > e) {
                    i = a.item(--g);
                }
                else if (g < f) {
                    i = a.item(++g);
                }
                else {
                    return g;
                }
            }
            var j = c.compare(i, b);
            if (j > 0) {
                f = g - 1;
            }
            else if (j < 0) {
                e = g + 1;
            }
            else {
                return g;
            }
        }
        if (null != h && e < a.count - 1 && h.equalsC(b, a.item(e))) {
            return e;
        }
        return ~e;
    };
    CoreUtilities.n = function ($tItem, $tComparison, a, b, c) {
        var d = 0, e = a.count - 1;
        var f = 0;
        while (d <= e) {
            f = intDivide((d + e), 2);
            var g = a.item(f);
            var h = b(g, c);
            if (h > 0) {
                e = f - 1;
            }
            else if (h < 0) {
                d = f + 1;
            }
            else {
                return f;
            }
        }
        return ~d;
    };
    CoreUtilities.l = function (a, b, c) {
        if (a < b) {
            return b;
        }
        else if (a > c) {
            return c;
        }
        return a;
    };
    CoreUtilities.s = function ($t, a, b, c) {
        var e_1, _a;
        var d = typeCast(ICollection$1_$type.specialize($t), a);
        if (null != d) {
            d.copyTo(b, c);
        }
        else {
            try {
                for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    b[c++] = e;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    CoreUtilities.r = function (a, b, c) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(fromEn(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                b[c++] = d;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    CoreUtilities.a = function ($t, a) {
        var e_3, _a;
        if (null != a) {
            try {
                for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var b = _c.value;
                    return b;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return Type.getDefaultValue($t);
    };
    CoreUtilities.b = function ($t, a, b) {
        var e_4, _a;
        if (null != a) {
            if (b) {
                var c = typeCast(IList$1_$type.specialize($t), a);
                if (null != c) {
                    return c.count > 0 ? c.item(0) : Type.getDefaultValue($t);
                }
                var d = typeCast(IList_$type, a);
                if (null != d) {
                    return d.count > 0 ? typeCastObjTo$t($t, d.item(0)) : Type.getDefaultValue($t);
                }
            }
            try {
                for (var _b = tslib_1.__values(fromEn(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    return e;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return Type.getDefaultValue($t);
    };
    CoreUtilities.k = function ($t) {
        var a = $t;
        var b = EnumUtil.getNames(a);
        var c = new List$1($t, 0);
        for (var e = 0; e < b.length; e++) {
            var d = b[e];
            c.add(typeCastObjTo$t($t, EnumUtil.parse(a, d, false)));
        }
        return c;
    };
    CoreUtilities.q = function (a) {
        if (a == null) {
            return null;
        }
        var b = Nullable.getUnderlyingType(a);
        if (b != null) {
            a = b;
        }
        return a;
    };
    CoreUtilities.p = function (a) {
        if (null != a) {
            try {
                return a.c;
            }
            catch (b) {
            }
        }
        return null;
    };
    CoreUtilities.g = function (a) {
        var e_5, _a;
        if (null != a) {
            if (typeCast(ICollection_$type, a) !== null) {
                return a.count > 0;
            }
            if (null != a) {
                try {
                    for (var _b = tslib_1.__values(fromEn(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var b = _c.value;
                        return true;
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        return false;
    };
    CoreUtilities.t = function () {
        throw new NotSupportedException(1, "Collection is read-only.");
    };
    CoreUtilities.v = function ($t, a, b) {
        var c = CoreUtilities.o($t, a, b);
        a.v(c, a.count - c);
    };
    CoreUtilities.u = function ($t, a, b) {
        var c = CoreUtilities.o($t, a, b);
        for (var d = a.count - 1; d >= c; d--) {
            a.removeAt(d);
        }
    };
    CoreUtilities.o = function ($t, a, b) {
        var c = 0;
        var d = a.count;
        var e = EqualityComparer$1.defaultEqualityComparerValue($t);
        for (var f = 0; f < d; f++) {
            if (e.equalsC(a.item(f), b)) {
                c++;
            }
            else if (0 != c) {
                a.item(f - c, a.item(f));
            }
        }
        return d - c;
    };
    CoreUtilities.w = function (a) {
        if (a < 0) {
            throw new ArgumentException(1, SR.a("LE_ValueCannotBeNegative"));
        }
    };
    CoreUtilities.x = function (a, b) {
        if (a < 0) {
            throw new ArgumentException(2, b, SR.a("LE_ValueCannotBeNegative"));
        }
    };
    CoreUtilities.y = function (a) {
        if (null == a) {
            throw new ArgumentNullException(1);
        }
    };
    CoreUtilities.z = function (a, b) {
        if (null == a) {
            throw new ArgumentNullException(0, b);
        }
    };
    CoreUtilities.$t = markType(CoreUtilities, 'CoreUtilities');
    return CoreUtilities;
}(Base));
export { CoreUtilities };
/**
 * @hidden
 */
var CoreUtilities_TypedList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(CoreUtilities_TypedList$1, _super);
    function CoreUtilities_TypedList$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        CoreUtilities.y(a);
        _this.a = a;
        return _this;
    }
    Object.defineProperty(CoreUtilities_TypedList$1.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    CoreUtilities_TypedList$1.prototype.indexOf = function (a) {
        return this.a.indexOf(getBoxIfEnum(this.$t, a));
    };
    CoreUtilities_TypedList$1.prototype.insert = function (a, b) {
        this.a.insert(a, getBoxIfEnum(this.$t, b));
    };
    CoreUtilities_TypedList$1.prototype.removeAt = function (a) {
        this.a.removeAt(a);
    };
    CoreUtilities_TypedList$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.a.item(a, getBoxIfEnum(this.$t, b));
            return b;
        }
        else {
            return typeCastObjTo$t(this.$t, this.a.item(a));
        }
    };
    CoreUtilities_TypedList$1.prototype.add = function (a) {
        this.a.add(getBoxIfEnum(this.$t, a));
    };
    CoreUtilities_TypedList$1.prototype.clear = function () {
        this.a.clear();
    };
    CoreUtilities_TypedList$1.prototype.contains = function (a) {
        return this.a.contains(getBoxIfEnum(this.$t, a));
    };
    CoreUtilities_TypedList$1.prototype.copyTo = function (a, b) {
        CoreUtilities.s(this.$t, new TypedEnumerable$1(this.$t, this.a), a, b);
    };
    Object.defineProperty(CoreUtilities_TypedList$1.prototype, "count", {
        get: function () {
            return this.a.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreUtilities_TypedList$1.prototype, "isReadOnly", {
        get: function () {
            return this.a.isReadOnly;
        },
        enumerable: true,
        configurable: true
    });
    CoreUtilities_TypedList$1.prototype.remove = function (a) {
        var b = this.a.indexOf(getBoxIfEnum(this.$t, a));
        if (b >= 0) {
            this.a.removeAt(b);
        }
        return b >= 0;
    };
    CoreUtilities_TypedList$1.prototype.getEnumerator = function () {
        return new TypedEnumerable_Enumerator$1(this.$t, getEnumeratorObject(this.a));
    };
    CoreUtilities_TypedList$1.prototype.getEnumeratorObject = function () {
        return getEnumeratorObject(this.a);
    };
    CoreUtilities_TypedList$1.$t = markType(CoreUtilities_TypedList$1, 'CoreUtilities_TypedList$1', Base.$, [IList$1_$type.specialize(0)]);
    return CoreUtilities_TypedList$1;
}(Base));
export { CoreUtilities_TypedList$1 };
/**
 * @hidden
 */
var CoreUtilities_ObservableTypedList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(CoreUtilities_ObservableTypedList$1, _super);
    function CoreUtilities_ObservableTypedList$1($t, a) {
        var _this = _super.call(this, $t, a) || this;
        _this.$t = null;
        _this.propertyChanged = null;
        _this.collectionChanged = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        var b = typeCast(INotifyCollectionChanged_$type, a);
        if (b != null) {
            b.collectionChanged = delegateCombine(b.collectionChanged, runOn(_this, _this.c));
        }
        var c = typeCast(INotifyPropertyChanged_$type, a);
        if (c != null) {
            c.propertyChanged = delegateCombine(c.propertyChanged, runOn(_this, _this.d));
        }
        return _this;
    }
    CoreUtilities_ObservableTypedList$1.prototype.d = function (a, b) {
        var c = this.propertyChanged;
        if (null != c) {
            c(this, b);
        }
    };
    CoreUtilities_ObservableTypedList$1.prototype.c = function (a, b) {
        var c = this.collectionChanged;
        if (null != c) {
            c(this, b);
        }
    };
    CoreUtilities_ObservableTypedList$1.$t = markType(CoreUtilities_ObservableTypedList$1, 'CoreUtilities_ObservableTypedList$1', CoreUtilities_TypedList$1.$.specialize(0), [INotifyCollectionChanged_$type, INotifyPropertyChanged_$type]);
    return CoreUtilities_ObservableTypedList$1;
}(CoreUtilities_TypedList$1));
export { CoreUtilities_ObservableTypedList$1 };
//# sourceMappingURL=CoreUtilities_combined.js.map
