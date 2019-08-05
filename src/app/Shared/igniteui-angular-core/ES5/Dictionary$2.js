/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IDictionary_$type, Type, fromEnum, typeCastObjTo$t, getBoxIfEnum, toEnum, markType, String_$type, getEnumerator } from "./type";
import { IDictionary$2_$type } from "./IDictionary$2";
import { KeyValuePair$2 } from "./KeyValuePair$2";
import { EqualityComparer$1 } from "./EqualityComparer$1";
import { Dictionary_EnumerableCollection$3 } from "./Dictionary_EnumerableCollection$3";
import { ArgumentException } from "./ArgumentException";
import { NotImplementedException } from "./NotImplementedException";
import { stringToString$1 } from "./string";
import { arrayRemoveItem } from "./array";
/**
 * @hidden
 */
var Dictionary$2 = /** @class */ (function (_super) {
    tslib_1.__extends(Dictionary$2, _super);
    function Dictionary$2($tKey, $tValue, a) {
        var e_1, _a;
        var _rest = [];
        for (var _b = 3; _b < arguments.length; _b++) {
            _rest[_b - 3] = arguments[_b];
        }
        var _this = _super.call(this) || this;
        _this.$tKey = null;
        _this.$tValue = null;
        _this.j = null;
        _this.k = 0;
        _this.e = false;
        _this.d = false;
        _this.c = false;
        _this.a = null;
        _this.b = null;
        _this.$tKey = $tKey;
        _this.$tValue = $tValue;
        _this.$type = _this.$type.specialize(_this.$tKey, _this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [0, null];
                    {
                        var e = c[0];
                        var f = c[1];
                        _this.a = ({});
                        _this.b = ({});
                        _this.j = f || EqualityComparer$1.defaultEqualityComparerValue(_this.$tKey);
                        _this.e = f == null && (($tKey === String_$type));
                        _this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                        _this.c = f == null && (_this.e || _this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
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
                        _this.a = ({});
                        _this.b = ({});
                        _this.j = g || EqualityComparer$1.defaultEqualityComparerValue(_this.$tKey);
                        _this.e = g == null && (($tKey === String_$type));
                        _this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                        _this.c = g == null && (_this.e || _this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = [0, c];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this.a = ({});
                        _this.b = ({});
                        _this.j = g || EqualityComparer$1.defaultEqualityComparerValue(_this.$tKey);
                        _this.e = g == null && (($tKey === String_$type));
                        _this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                        _this.c = g == null && (_this.e || _this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                    }
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = [c.count];
                    {
                        var f = d[0];
                        var g = [f, null];
                        {
                            var i = g[0];
                            var j = g[1];
                            _this.a = ({});
                            _this.b = ({});
                            _this.j = j || EqualityComparer$1.defaultEqualityComparerValue(_this.$tKey);
                            _this.e = j == null && (($tKey === String_$type));
                            _this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                            _this.c = j == null && (_this.e || _this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                        }
                    }
                    try {
                        for (var _c = tslib_1.__values(fromEnum(c)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var e = _d.value;
                            _this.item(e.key, e.value);
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
                break;
            case 4:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.a = ({});
                    _this.b = ({});
                    _this.j = d || EqualityComparer$1.defaultEqualityComparerValue(_this.$tKey);
                    _this.e = d == null && (($tKey === String_$type));
                    _this.d = ($tKey === Base.$type || ($tKey.InstanceConstructor && !$tKey.InstanceConstructor.prototype.getHashCode));
                    _this.c = d == null && (_this.e || _this.d || ($tKey.InstanceConstructor && $tKey.InstanceConstructor.prototype.getHashCode == Base.prototype.getHashCode));
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(Dictionary$2.prototype, "count", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary$2.prototype.item = function (key_, a) {
        if (arguments.length === 2) {
            this.o(key_, a, false);
            return a;
        }
        else {
            var result_ = this.f(key_);
            var a_1 = (result_);
            return a_1 ? result_ : Type.getDefaultValue(this.$tValue);
        }
    };
    Object.defineProperty(Dictionary$2.prototype, "m", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary$2.prototype.containsKey = function (a) {
        if (this.c) {
            var b = this.n(a);
            return (this.a.hasOwnProperty(b));
        }
        else {
            var c = this.l(a);
            var d = this.b[c];
            if (d) {
                if ((d.$isHashSetBucket)) {
                    var g = (d);
                    for (var f = 0; f < g.length; f++) {
                        var e = g[f];
                        if (this.j.equalsC((e.key), a)) {
                            return true;
                        }
                    }
                }
                else {
                    return this.j.equalsC((d.key), a);
                }
            }
        }
        return false;
    };
    Dictionary$2.prototype.removeItem = function (a) {
        if (this.c) {
            var b = this.n(a);
            if ((!this.a.hasOwnProperty(b))) {
                return false;
            }
            delete this.a[b];
            delete this.b[b];
            this.k--;
            return true;
        }
        var c = this.l(a);
        var d = this.b[c];
        if (d) {
            if ((d.$isHashSetBucket)) {
                var g = (d);
                for (var f = 0; f < g.length; f++) {
                    var e = g[f];
                    if (this.j.equalsC((e.key), a)) {
                        arrayRemoveItem(d, e);
                        if ((d.length) == 1) {
                            this.b[c] = (d[0]);
                        }
                        this.k--;
                        return true;
                    }
                }
            }
            else {
                if (this.j.equalsC((d.key), a)) {
                    delete this.b[c];
                    this.k--;
                    return true;
                }
            }
        }
        return false;
    };
    Dictionary$2.prototype.clear = function () {
        this.k = 0;
        this.a = ({});
        this.b = ({});
    };
    Dictionary$2.prototype.n = function (a) {
        if (this.e) {
            return stringToString$1(this.$tKey, a);
        }
        else {
            return Base.getHashCodeStatic(a).toString();
        }
    };
    Dictionary$2.prototype.l = function (a) {
        return this.j.getHashCodeC(a);
    };
    Dictionary$2.prototype.addItem = function (a, b) {
        this.o(a, b, true);
    };
    Dictionary$2.prototype.o = function (a, b, c) {
        if (this.c) {
            var d = this.n(a);
            if ((!this.a.hasOwnProperty(d))) {
                this.k++;
            }
            else if (c) {
                throw new ArgumentException(1, "Duplicate key added to the dictionary");
            }
            this.a[d] = a;
            this.b[d] = b;
        }
        else {
            var e = this.l(a);
            var f = this.b[e];
            if (f) {
                if ((f.$isHashSetBucket)) {
                    var i = (f);
                    for (var h = 0; h < i.length; h++) {
                        var g = i[h];
                        if (this.j.equalsC((g.key), a)) {
                            if (c) {
                                throw new ArgumentException(1, "Duplicate key added to the dictionary");
                            }
                            g.value = b;
                            return;
                        }
                    }
                    f.push({ key: a, value: b });
                    this.k++;
                }
                else {
                    if (this.j.equalsC((f.key), a)) {
                        if (c) {
                            throw new ArgumentException(1, "Duplicate key added to the dictionary");
                        }
                        f.value = b;
                    }
                    else {
                        var j = typeCastObjTo$t(this.$tValue, ([f, { key: a, value: b }]));
                        j.$isHashSetBucket = true;
                        ;
                        this.b[e] = j;
                        this.k++;
                    }
                }
            }
            else {
                this.b[e] = { key: a, value: b };
                this.k++;
            }
        }
    };
    Dictionary$2.prototype.f = function (a) {
        if (this.c) {
            var b = this.n(a);
            if ((this.a.hasOwnProperty(b))) {
                var c = (this.b[b]);
                return c;
            }
        }
        else {
            var d = this.l(a);
            var e = this.b[d];
            if (e) {
                if ((e.$isHashSetBucket)) {
                    var h = (e);
                    for (var g = 0; g < h.length; g++) {
                        var f = h[g];
                        if (this.j.equalsC((f.key), a)) {
                            var i = (f.value);
                            return i;
                        }
                    }
                }
                else {
                    if (this.j.equalsC((e.key), a)) {
                        var j = (e.value);
                        return j;
                    }
                }
            }
        }
        return typeCastObjTo$t(this.$tValue, (undefined));
    };
    Dictionary$2.prototype.tryGetValue = function (a, b) {
        if (this.c) {
            var c = this.n(a);
            if ((this.a.hasOwnProperty(c))) {
                b = (this.b[c]);
                return {
                    ret: true,
                    p1: b
                };
            }
        }
        else {
            var d = this.l(a);
            var e = this.b[d];
            if (e) {
                if ((e.$isHashSetBucket)) {
                    var h = (e);
                    for (var g = 0; g < h.length; g++) {
                        var f = h[g];
                        if (this.j.equalsC((f.key), a)) {
                            b = (f.value);
                            return {
                                ret: true,
                                p1: b
                            };
                        }
                    }
                }
                else {
                    if (this.j.equalsC((e.key), a)) {
                        b = (e.value);
                        return {
                            ret: true,
                            p1: b
                        };
                    }
                }
            }
        }
        b = Type.getDefaultValue(this.$tValue);
        return {
            ret: false,
            p1: b
        };
    };
    Object.defineProperty(Dictionary$2.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary$2.prototype.add = function (a) {
        this.addItem(a.key, a.value);
    };
    Dictionary$2.prototype.contains = function (a) {
        var _this = this;
        var b;
        return ((function () { var c = _this.tryGetValue(a.key, b); b = c.p1; return c.ret; })()) && Base.equalsStatic(getBoxIfEnum(this.$tValue, b), getBoxIfEnum(this.$tValue, a.value));
    };
    Dictionary$2.prototype.copyTo = function (a, b) {
        throw new NotImplementedException(0);
    };
    Dictionary$2.prototype.remove = function (a) {
        this.removeItem(a.key);
        return true;
    };
    Dictionary$2.prototype.getEnumerator = function () {
        return getEnumerator(this.g());
    };
    Dictionary$2.prototype._g = function () {
        var a, b, c, d, e, f, g, subItem_;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.c) return [3 /*break*/, 5];
                    a = (Base.getArrayOfProperties(this.a));
                    b = 0;
                    _a.label = 1;
                case 1:
                    if (!(b < a.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, new KeyValuePair$2(this.$tKey, this.$tValue, 1, this.a[a[b]], this.b[a[b]])];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    b++;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 14];
                case 5:
                    c = (Base.getArrayOfProperties(this.b));
                    d = 0;
                    _a.label = 6;
                case 6:
                    if (!(d < c.length)) return [3 /*break*/, 14];
                    e = this.b[c[d]];
                    if (!(e.$isHashSetBucket)) return [3 /*break*/, 11];
                    f = (e);
                    g = 0;
                    _a.label = 7;
                case 7:
                    if (!(g < f.length)) return [3 /*break*/, 10];
                    subItem_ = f[g];
                    return [4 /*yield*/, new KeyValuePair$2(this.$tKey, this.$tValue, 1, (subItem_.key), (subItem_.value))];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    g++;
                    return [3 /*break*/, 7];
                case 10: return [3 /*break*/, 13];
                case 11: return [4 /*yield*/, new KeyValuePair$2(this.$tKey, this.$tValue, 1, (e.key), (e.value))];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    d++;
                    return [3 /*break*/, 6];
                case 14: return [2 /*return*/];
            }
        });
    };
    Dictionary$2.prototype.g = function () {
        var _this = this;
        return toEnum(function () { return _this._g(); });
    };
    Dictionary$2.prototype._h = function () {
        var a, b, c, d, e, f, g, subItem_;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.c) return [3 /*break*/, 5];
                    a = (Base.getArrayOfProperties(this.a));
                    b = 0;
                    _a.label = 1;
                case 1:
                    if (!(b < a.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.a[a[b]]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    b++;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 14];
                case 5:
                    c = (Base.getArrayOfProperties(this.b));
                    d = 0;
                    _a.label = 6;
                case 6:
                    if (!(d < c.length)) return [3 /*break*/, 14];
                    e = this.b[c[d]];
                    if (!(e.$isHashSetBucket)) return [3 /*break*/, 11];
                    f = (e);
                    g = 0;
                    _a.label = 7;
                case 7:
                    if (!(g < f.length)) return [3 /*break*/, 10];
                    subItem_ = f[g];
                    return [4 /*yield*/, (subItem_.key)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    g++;
                    return [3 /*break*/, 7];
                case 10: return [3 /*break*/, 13];
                case 11: return [4 /*yield*/, (e.key)];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    d++;
                    return [3 /*break*/, 6];
                case 14: return [2 /*return*/];
            }
        });
    };
    Dictionary$2.prototype.h = function () {
        var _this = this;
        return toEnum(function () { return _this._h(); });
    };
    Dictionary$2.prototype._i = function () {
        var a, b, c, d, e, f, g, subItem_;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.c) return [3 /*break*/, 5];
                    a = (Base.getArrayOfProperties(this.a));
                    b = 0;
                    _a.label = 1;
                case 1:
                    if (!(b < a.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.b[a[b]]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    b++;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 14];
                case 5:
                    c = (Base.getArrayOfProperties(this.b));
                    d = 0;
                    _a.label = 6;
                case 6:
                    if (!(d < c.length)) return [3 /*break*/, 14];
                    e = this.b[c[d]];
                    if (!(e.$isHashSetBucket)) return [3 /*break*/, 11];
                    f = (e);
                    g = 0;
                    _a.label = 7;
                case 7:
                    if (!(g < f.length)) return [3 /*break*/, 10];
                    subItem_ = f[g];
                    return [4 /*yield*/, (subItem_.value)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    g++;
                    return [3 /*break*/, 7];
                case 10: return [3 /*break*/, 13];
                case 11: return [4 /*yield*/, (e.value)];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    d++;
                    return [3 /*break*/, 6];
                case 14: return [2 /*return*/];
            }
        });
    };
    Dictionary$2.prototype.i = function () {
        var _this = this;
        return toEnum(function () { return _this._i(); });
    };
    Dictionary$2.prototype.getEnumeratorObject = function () {
        return getEnumerator(this.g());
    };
    Object.defineProperty(Dictionary$2.prototype, "keys", {
        get: function () {
            return new Dictionary_EnumerableCollection$3(this.$tKey, this.$tValue, this.$tKey, this, this.h(), this.j || EqualityComparer$1.defaultEqualityComparerValue(this.$tKey));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary$2.prototype, "values", {
        get: function () {
            return new Dictionary_EnumerableCollection$3(this.$tKey, this.$tValue, this.$tValue, this, this.i(), EqualityComparer$1.defaultEqualityComparerValue(this.$tValue));
        },
        enumerable: true,
        configurable: true
    });
    Dictionary$2.$t = markType(Dictionary$2, 'Dictionary$2', Base.$, [IDictionary$2_$type.specialize(0, 1), IDictionary_$type]);
    return Dictionary$2;
}(Base));
export { Dictionary$2 };
//# sourceMappingURL=Dictionary$2.js.map