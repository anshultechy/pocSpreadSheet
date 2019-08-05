/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, ICollection$1_$type, IEnumerable$1_$type, IEnumerable_$type, fromEnum, typeCastObjTo$t, markType, String_$type, getEnumeratorObject } from "./type";
import { EqualityComparer$1 } from "./EqualityComparer$1";
import { NotImplementedException } from "./NotImplementedException";
import { arrayRemoveItem } from "./array";
/**
 * @hidden
 */
var HashSet$1 = /** @class */ (function (_super) {
    tslib_1.__extends(HashSet$1, _super);
    function HashSet$1($t, a) {
        var e_1, _a, e_2, _b;
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.k = null;
        _this.n = 0;
        _this._values = null;
        _this.c = false;
        _this._stringPlaceholder = null;
        _this.b = false;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [null];
                    {
                        var e = c[0];
                        _this._values = ({});
                        _this.k = e || EqualityComparer$1.defaultEqualityComparerValue(_this.$t);
                        _this.c = e == null && (($t === String_$type));
                        _this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                        _this._stringPlaceholder = ({});
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = [c, null];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = [g];
                        {
                            var j = h[0];
                            _this._values = ({});
                            _this.k = j || EqualityComparer$1.defaultEqualityComparerValue(_this.$t);
                            _this.c = j == null && (($t === String_$type));
                            _this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                            _this._stringPlaceholder = ({});
                        }
                        try {
                            for (var _c = tslib_1.__values(fromEnum(f)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var i = _d.value;
                                _this.add_1(i);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    _this._values = ({});
                    _this.k = c || EqualityComparer$1.defaultEqualityComparerValue(_this.$t);
                    _this.c = c == null && (($t === String_$type));
                    _this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                    _this._stringPlaceholder = ({});
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [d];
                    {
                        var g = e[0];
                        _this._values = ({});
                        _this.k = g || EqualityComparer$1.defaultEqualityComparerValue(_this.$t);
                        _this.c = g == null && (($t === String_$type));
                        _this.b = ($t === Base.$type || ($t.InstanceConstructor && !$t.InstanceConstructor.prototype.getHashCode));
                        _this._stringPlaceholder = ({});
                    }
                    try {
                        for (var _e = tslib_1.__values(fromEnum(c)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var f = _f.value;
                            _this.add_1(f);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                break;
        }
        return _this;
    }
    HashSet$1.prototype.add = function (a) {
        this.add_1(a);
    };
    Object.defineProperty(HashSet$1.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    HashSet$1.prototype.getEnumeratorObject = function () {
        return this.getEnumerator();
    };
    Object.defineProperty(HashSet$1.prototype, "l", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HashSet$1.prototype, "count", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    HashSet$1.prototype.add_1 = function (item_) {
        if (this.c) {
            if ((this._values[item_])) {
                return false;
            }
            this._values[item_] = this._stringPlaceholder;
            this.n++;
            return true;
        }
        var a = this.k.getHashCodeC(item_);
        var current_ = this._values[a];
        if ((current_)) {
            if ((current_.$isHashSetBucket)) {
                var b = (current_);
                for (var d = 0; d < b.length; d++) {
                    var c = b[d];
                    if (this.k.equalsC(c, item_)) {
                        return false;
                    }
                }
                current_.push(item_);
            }
            else {
                if (this.k.equalsC(current_, item_)) {
                    return false;
                }
                var bucket_ = typeCastObjTo$t(this.$t, ([current_, item_]));
                bucket_.$isHashSetBucket = true;
                ;
                this._values[a] = bucket_;
            }
        }
        else {
            this._values[a] = item_;
        }
        this.n++;
        return true;
    };
    HashSet$1.prototype.clear = function () {
        this.n = 0;
        this._values = ({});
    };
    HashSet$1.prototype.contains = function (item_) {
        if (this.c) {
            return (!!this._values[item_]);
        }
        var a = this.k.getHashCodeC(item_);
        var current_ = this._values[a];
        if ((current_ !== undefined)) {
            if ((current_.$isHashSetBucket)) {
                var b = (current_);
                for (var d = 0; d < b.length; d++) {
                    var c = b[d];
                    if (this.k.equalsC(c, item_)) {
                        return true;
                    }
                }
            }
            else {
                if (this.k.equalsC(current_, item_)) {
                    return true;
                }
            }
        }
        return false;
    };
    HashSet$1.prototype.copyTo1 = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.copyTo = function (a, b) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.copyTo2 = function (a, b, c) {
        throw new NotImplementedException(0);
    };
    HashSet$1.m = function ($t) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.r = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.getEnumerator = function () {
        if (this.c) {
            var a = (Base.getArrayOfProperties(this._values));
            return getEnumeratorObject(a);
        }
        var result_ = new Array(0);
        var b = (Base.getArrayOfValues(this._values));
        for (var c = 0; c < b.length; c++) {
            var item_ = b[c];
            if ((item_.$isHashSetBucket)) {
                var d = (item_);
                for (var e = 0; e < d.length; e++) {
                    var subItem_ = d[e];
                    result_.push(subItem_);
                }
            }
            else {
                result_.push(item_);
            }
        }
        return getEnumeratorObject(result_);
    };
    HashSet$1.prototype.s = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.e = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.f = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.g = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.h = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.t = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.i = function (a) {
        var e_3, _a;
        if (this.count > 0) {
            try {
                for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var b = _c.value;
                    if (this.contains(b)) {
                        return true;
                    }
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
        return false;
    };
    HashSet$1.prototype.remove = function (item_) {
        if (this.c) {
            if ((this._values[item_])) {
                return false;
            }
            delete this._values[item_];
            this.n--;
            return true;
        }
        var hashCode_ = this.k.getHashCodeC(item_);
        var current_ = this._values[hashCode_];
        if ((current_)) {
            if ((current_.$isHashSetBucket)) {
                var a = (current_);
                for (var b = 0; b < a.length; b++) {
                    var currentItem_ = a[b];
                    if (this.k.equalsC(currentItem_, item_)) {
                        arrayRemoveItem(current_, currentItem_);
                        if ((current_.length) == 1) {
                            this._values[hashCode_] = (current_[0]);
                        }
                        this.n--;
                        return true;
                    }
                }
            }
            else {
                if (this.k.equalsC(current_, item_)) {
                    delete this._values[hashCode_];
                    this.n--;
                    return true;
                }
            }
        }
        return false;
    };
    HashSet$1.prototype.j = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.u = function (a) {
        throw new NotImplementedException(0);
    };
    HashSet$1.prototype.v = function () {
    };
    HashSet$1.prototype.w = function (a) {
        var e_4, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                this.add_1(b);
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
    HashSet$1.$t = markType(HashSet$1, 'HashSet$1', Base.$, [ICollection$1_$type.specialize(0), IEnumerable$1_$type.specialize(0), IEnumerable_$type]);
    return HashSet$1;
}(Base));
export { HashSet$1 };
//# sourceMappingURL=HashSet$1.js.map