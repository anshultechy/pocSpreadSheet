/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, IList_$type, fromEnum, getBoxIfEnum, typeCast, typeCastObjTo$t, fromEn, Number_$type, typeGetValue, Date_$type, runOn, markType, getEnumeratorObject } from "./type";
import { IArray_$type } from "./IArray";
import { IArrayList_$type } from "./IArrayList";
import { arrayCopyTo } from "./array";
import { Comparer$1 } from "./Comparer$1";
import { ReadOnlyCollection$1 } from "./ReadOnlyCollection$1";
import { NotImplementedException } from "./NotImplementedException";
import { intDivide } from "./number";
import { stringCompareTo } from "./string";
/**
 * @hidden
 */
var List$1 = /** @class */ (function (_super) {
    tslib_1.__extends(List$1, _super);
    function List$1($t, a) {
        var e_1, _a;
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._inner = null;
        _this.c = false;
        _this.h = 0;
        _this.m = {};
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this._inner = ([]);
                    _this.c = (_this.$t.InstanceConstructor && _this.$t.InstanceConstructor.prototype.equals === Base.prototype.equals);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    {
                        _this._inner = ([]);
                        _this.c = (_this.$t.InstanceConstructor && _this.$t.InstanceConstructor.prototype.equals === Base.prototype.equals);
                    }
                    if (_this.d(0, c, true)) {
                        return _this;
                    }
                    try {
                        for (var _b = tslib_1.__values(fromEnum(c)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var d = _c.value;
                            _this.add(d);
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
                break;
            case 2:
                {
                    var c = _rest[0];
                    {
                        _this._inner = ([]);
                        _this.c = (_this.$t.InstanceConstructor && _this.$t.InstanceConstructor.prototype.equals === Base.prototype.equals);
                    }
                }
                break;
        }
        return _this;
    }
    List$1.prototype.x = function (a, b) {
        this._inner[a] = b;
    };
    List$1.prototype.r = function (a, b) {
        this._inner.splice(a, 0, b);
    };
    List$1.prototype.n = function (a) {
        this._inner.push(a);
    };
    List$1.prototype.u = function (a) {
        if (a == 0) {
            this._inner.shift();
            return;
        }
        this._inner.splice(a, 1);
    };
    List$1.prototype.p = function () {
        this._inner = ([]);
    };
    List$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.x(a, b);
            return b;
        }
        else {
            return this._inner[a];
        }
    };
    List$1.prototype.indexOf = function (a) {
        if (this.c) {
            return (this._inner.indexOf(a));
        }
        for (var b = 0; b < this._inner.length; b++) {
            if (Base.equalsStatic(getBoxIfEnum(this.$t, a), getBoxIfEnum(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.indexOf2 = function (a, b) {
        if (this.c) {
            return (this._inner.indexOf(a, b));
        }
        for (; b < this._inner.length; b++) {
            if (Base.equalsStatic(getBoxIfEnum(this.$t, a), getBoxIfEnum(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.k = function (a) {
        if (this.c) {
            return (this._inner.lastIndexOf(a));
        }
        for (var b = this._inner.length - 1; b >= 0; b--) {
            if (Base.equalsStatic(getBoxIfEnum(this.$t, a), getBoxIfEnum(this.$t, this._inner[b]))) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.insert = function (a, b) {
        this.r(a, b);
    };
    List$1.prototype.removeAt = function (a) {
        this.u(a);
    };
    Object.defineProperty(List$1.prototype, "count", {
        get: function () {
            return this._inner.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List$1.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    List$1.prototype.add = function (a) {
        this.n(a);
    };
    List$1.prototype.clear = function () {
        this.p();
    };
    List$1.prototype.contains = function (a) {
        return this.indexOf(a) >= 0;
    };
    List$1.prototype.copyTo = function (a, b) {
        for (var c = 0; c < this._inner.length; c++) {
            a[b + c] = this._inner[c];
        }
    };
    List$1.prototype.remove = function (a) {
        var b = this.indexOf(a);
        if (b < 0) {
            return false;
        }
        this.u(b);
        return true;
    };
    List$1.prototype.getEnumerator = function () {
        return getEnumeratorObject(this._inner);
    };
    List$1.prototype.getEnumeratorObject = function () {
        return getEnumeratorObject(this._inner);
    };
    List$1.prototype.asArray = function () {
        return this._inner;
    };
    List$1.prototype.d = function (index_, collection_, a) {
        var b = typeCast(IArrayList_$type, collection_);
        if (b != null) {
            var a_ = b.asArrayList();
            Array.prototype.splice.apply(this._inner, Array.prototype.concat.apply([index_, 0], a_));
            return true;
        }
        var c = typeCast(IArray_$type, collection_);
        if (c != null) {
            var a_ = c.asArray();
            Array.prototype.splice.apply(this._inner, Array.prototype.concat.apply([index_, 0], a_));
            return true;
        }
        var asList_ = typeCast(IList$1_$type.specialize(this.$t), collection_);
        if (asList_ != null) {
            for (var i_ = 0; i_ < asList_.count; i_++) {
                var item_ = asList_.item(i_);
                this._inner.splice(index_ + i_, 0, item_);
            }
            return true;
        }
        var arr_ = (Array.isArray(collection_) ? collection_ : null);
        if (arr_ != null) {
            var inn_ = this._inner;
            if (this._inner.length == 0) {
                if (a) {
                    var parr_ = arr_;
                    var d = arr_.length;
                    for (var i_ = 0; i_ < d; i_++) {
                        inn_[index_++] = parr_[i_];
                    }
                }
                else {
                    var e = arr_.length;
                    for (var i_ = 0; i_ < e; i_++) {
                        inn_[index_++] = typeCastObjTo$t(this.$t, arr_[i_]);
                    }
                }
            }
            else {
                for (var i_ = 0; i_ < arr_.length; i_++) {
                    inn_.splice(index_++, 0, arr_[i_]);
                }
            }
            return true;
        }
        return false;
    };
    List$1.prototype.t = function (a, b) {
        var e_2, _a;
        if (this.d(a, b, false)) {
            return;
        }
        var j_ = a;
        try {
            for (var _b = tslib_1.__values(fromEn(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_ = _c.value;
                this._inner.splice(j_, 0, item_);
                j_++;
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
    List$1.prototype.s = function (a, b) {
        var e_3, _a;
        if (this.d(a, b, true)) {
            return;
        }
        var j_ = a;
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_ = _c.value;
                this._inner.splice(j_, 0, item_);
                j_++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    List$1.prototype.v = function (index_, numToRemove_) {
        if (index_ == 0 && numToRemove_ == 1) {
            this._inner.shift();
            return;
        }
        this._inner.splice(index_, numToRemove_);
    };
    List$1.prototype.copyTo1 = function (a, b) {
        arrayCopyTo(this._inner, a, b);
    };
    Object.defineProperty(List$1.prototype, "isFixedSize", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    List$1.prototype.add1 = function (a) {
        this.n(typeCastObjTo$t(this.$t, a));
        return this._inner.length - 1;
    };
    List$1.prototype.contains1 = function (a) {
        return this.indexOf1(a) >= 0;
    };
    List$1.prototype.indexOf1 = function (a) {
        return this.indexOf(typeCastObjTo$t(this.$t, a));
    };
    List$1.prototype.insert1 = function (a, b) {
        this.r(a, typeCastObjTo$t(this.$t, b));
    };
    List$1.prototype.remove1 = function (a) {
        var b = this.indexOf1(a);
        if (b < 0) {
            return;
        }
        this.u(b);
    };
    List$1.prototype.y = function () {
        var a = null;
        if (this.$t == Number_$type) {
            a = function (b, c) {
                var d = b;
                var e = c;
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == Number_$type) {
            a = function (b, c) {
                var d = b;
                var e = c;
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == Number_$type) {
            a = function (b, c) {
                var d = typeGetValue(b);
                var e = typeGetValue(c);
                if (d < e) {
                    return -1;
                }
                if (d == e) {
                    return 0;
                }
                return 1;
            };
        }
        else if (this.$t == Date_$type) {
            a = function (b, c) {
                var d = b;
                var e = c;
                if (d.getTime() < e.getTime()) {
                    return -1;
                }
                if (d.getTime() == e.getTime()) {
                    return 0;
                }
                return 1;
            };
        }
        else {
            a = function (b, c) { return stringCompareTo(b, c); };
        }
        this.ab(a);
    };
    List$1.prototype.ab = function (compare_) {
        this._inner.sort(compare_);
    };
    List$1.prototype.aa = function (compare_) {
        this._inner.sort(compare_);
    };
    List$1.prototype.o = function (a) {
        var e_4, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_ = _c.value;
                this._inner.push(item_);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    List$1.prototype.toArray = function () {
        return this._inner;
    };
    List$1.prototype.q = function (a) {
        for (var b = 0; b < this._inner.length; b++) {
            a(this._inner[b]);
        }
    };
    Object.defineProperty(List$1.prototype, "isSynchronized", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List$1.prototype, "syncRoot", {
        get: function () {
            return this.m;
        },
        enumerable: true,
        configurable: true
    });
    List$1.prototype.f = function (a) {
        return this.g(a, Comparer$1.defaultComparerValue(this.$t));
    };
    List$1.prototype.g = function (a, b) {
        var c = 0;
        var d = this.count - 1;
        while (c <= d) {
            var e = c + (intDivide((d - c), 2));
            var f = this._inner[e];
            var g = b.compare(f, a);
            if (g == 0) {
                return e;
            }
            if (g < 0) {
                c = e + 1;
            }
            else {
                d = e - 1;
            }
        }
        return ~c;
    };
    List$1.prototype.e = function () {
        return new ReadOnlyCollection$1(this.$t, 1, this);
    };
    List$1.prototype.w = function () {
        for (var a = 0; a < intDivide(this.count, 2); a++) {
            var b = this.count - a - 1;
            var c = this._inner[a];
            this._inner[a] = this._inner[b];
            this._inner[b] = c;
        }
    };
    List$1.prototype.z = function (a) {
        this.aa(runOn(a, a.compare));
    };
    List$1.prototype.i = function (a) {
        for (var b = 0; b < this._inner.length; b++) {
            if (a(this._inner[b])) {
                return b;
            }
        }
        return -1;
    };
    List$1.prototype.l = function (a) {
        throw new NotImplementedException(0);
    };
    List$1.$t = markType(List$1, 'List$1', Base.$, [IList$1_$type.specialize(0), IArray_$type, IList_$type]);
    return List$1;
}(Base));
export { List$1 };
//# sourceMappingURL=List$1.js.map