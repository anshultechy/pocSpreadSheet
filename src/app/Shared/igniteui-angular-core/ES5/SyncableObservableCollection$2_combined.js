/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, fromEnum, Number_$type, getBoxIfEnum, typeCastObjTo$t, delegateCombine, delegateRemove, markType } from "./type";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { InvalidOperationException } from "./InvalidOperationException";
import { SyncableObservableCollectionChangedListener_$type } from "./SyncableObservableCollectionChangedListener";
/**
 * @hidden
 */
var SyncableObservableCollection$2 = /** @class */ (function (_super) {
    tslib_1.__extends(SyncableObservableCollection$2, _super);
    function SyncableObservableCollection$2($t1, $t2, a) {
        var _rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            _rest[_i - 3] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$t1 = null;
        _this.$t2 = null;
        _this.a = null;
        _this._compare = null;
        _this._createTo = null;
        _this._createFrom = null;
        _this.h = false;
        _this.i = false;
        _this.g = false;
        _this._inner = null;
        _this.n = new List$1(SyncableObservableCollectionChangedListener_$type, 0);
        _this.f = null;
        _this.$t1 = $t1;
        _this.$t2 = $t2;
        _this.$type = _this.$type.specialize(_this.$t1, _this.$t2);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this._inner = new ObservableCollection$1(_this.$t1, 0);
                    _this.addListener(runOn(_this, _this.ad));
                    var c = _this._inner;
                    c.collectionChanged = delegateCombine(c.collectionChanged, runOn(_this, _this.u));
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this._inner = c;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(SyncableObservableCollection$2.prototype, "syncTarget", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            var b = this.a;
            this.a = a;
            this.aa(b, this.a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncableObservableCollection$2.prototype, "compare", {
        get: function () {
            return this._compare;
        },
        set: function (a) {
            this._compare = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncableObservableCollection$2.prototype, "createTo", {
        get: function () {
            return this._createTo;
        },
        set: function (a) {
            this._createTo = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncableObservableCollection$2.prototype, "createFrom", {
        get: function () {
            return this._createFrom;
        },
        set: function (a) {
            this._createFrom = a;
        },
        enumerable: true,
        configurable: true
    });
    SyncableObservableCollection$2.prototype.aa = function (a, b) {
        if (a != null) {
            a.removeListener(runOn(this, this.ai));
        }
        this.af();
        if (b != null) {
            b.addListener(runOn(this, this.ai));
        }
    };
    SyncableObservableCollection$2.prototype.af = function () {
        if (this.a == null) {
            return;
        }
        this.h = true;
        var a = new List$1(this.$t1, 0);
        var b = new HashSet$1(this.$t1, 0);
        for (var c = 0; c < this.all.count; c++) {
            if (!b.contains(this.all.item(c))) {
                a.add(this.all.item(c));
                b.add_1(this.all.item(c));
            }
        }
        for (var d = 0; d < this.a.all.count; d++) {
            if (!this.k(b, this.a.all.item(d))) {
                var e = this.createFrom(this.a.all.item(d));
                a.add(e);
                b.add_1(e);
            }
        }
        this.ag(a, this.all);
        this.ah(a, this.a.all);
        this.h = false;
    };
    SyncableObservableCollection$2.prototype.k = function (a, b) {
        var e_1, _a;
        if (this.compare == null) {
            throw new InvalidOperationException(1, "SyncableObservableCollection has no Compare function provided.");
        }
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (this.compare(c, b)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    SyncableObservableCollection$2.prototype.ag = function (a, b) {
        var c = new List$1(Number_$type, 0);
        var d = 0;
        for (var e = 0; e < b.count; e++) {
            if (getBoxIfEnum(this.$t1, b.item(e)) == null) {
                c.add(e);
                continue;
            }
            if (d > a.count - 1) {
                c.add(e);
                continue;
            }
            if (Base.equalsStatic(b.item(e), getBoxIfEnum(this.$t1, a._inner[d]))) {
                d++;
                continue;
            }
            b.insert(e, a._inner[d]);
            d++;
        }
        for (var f = c.count - 1; f >= 0; f--) {
            b.removeAt(f);
        }
        for (; d < a.count; d++) {
            b.add(a._inner[d]);
        }
    };
    SyncableObservableCollection$2.prototype.ah = function (a, b) {
        var c = new List$1(Number_$type, 0);
        var d = 0;
        for (var e = 0; e < b.count; e++) {
            if (getBoxIfEnum(this.$t2, b.item(e)) == null) {
                c.add(e);
                continue;
            }
            if (d > a.count - 1) {
                c.add(e);
                continue;
            }
            if (Base.equalsStatic(b.item(e), getBoxIfEnum(this.$t1, a._inner[d]))) {
                d++;
                continue;
            }
            b.insert(e, this.createTo(a._inner[d]));
            d++;
        }
        for (var f = c.count - 1; f >= 0; f--) {
            b.removeAt(f);
        }
        for (; d < a.count; d++) {
            b.add(this.createTo(a._inner[d]));
        }
    };
    SyncableObservableCollection$2.prototype.ai = function (a, b) {
        if (this.a == null) {
            return;
        }
        if (this.h) {
            return;
        }
        if (this.g) {
            return;
        }
        var c = this.a.all;
        this.i = true;
        this.ae(this.$t1, this.$t2, b, this.all, c);
        this.i = false;
    };
    SyncableObservableCollection$2.prototype.z = function (a) {
    };
    SyncableObservableCollection$2.prototype.ad = function (a, b) {
        this.z(b);
        if (this.a == null) {
            return;
        }
        if (this.h) {
            return;
        }
        if (this.i) {
            return;
        }
        var c = this.a.all;
        this.g = true;
        this.ae(this.$t2, this.$t1, b, c, this.all);
        this.g = false;
    };
    SyncableObservableCollection$2.prototype.ae = function ($t, $f, a, b, c) {
        var e_2, _a;
        switch (a.action) {
            case 0:
                if (a.newItems != null) {
                    for (var d = 0; d < a.newItems.count; d++) {
                        var e = a.newItems.item(d);
                        if ($f != $t) {
                            if ($f == this.$t1) {
                                e = getBoxIfEnum(this.$t2, this.createTo(typeCastObjTo$t(this.$t1, a.newItems.item(d))));
                            }
                            if ($f == this.$t2) {
                                e = getBoxIfEnum(this.$t1, this.createFrom(typeCastObjTo$t(this.$t2, a.newItems.item(d))));
                            }
                        }
                        b.insert(d + a.newStartingIndex, typeCastObjTo$t($t, e));
                    }
                }
                break;
            case 1:
                if (a.oldItems != null) {
                    for (var f = 0; f < a.oldItems.count; f++) {
                        b.removeAt(a.oldStartingIndex);
                    }
                }
                break;
            case 2:
                if (a.oldItems != null) {
                    for (var g = 0; g < a.oldItems.count; g++) {
                        b.removeAt(a.oldStartingIndex);
                    }
                }
                if (a.newItems != null) {
                    for (var h = 0; h < a.newItems.count; h++) {
                        var i = a.newItems.item(h);
                        if ($f != $t) {
                            if ($f == this.$t1) {
                                i = getBoxIfEnum(this.$t2, this.createTo(typeCastObjTo$t(this.$t1, a.newItems.item(h))));
                            }
                            if ($f == this.$t2) {
                                i = getBoxIfEnum(this.$t1, this.createFrom(typeCastObjTo$t(this.$t2, a.newItems.item(h))));
                            }
                        }
                        b.insert(h + a.newStartingIndex, typeCastObjTo$t($t, a.newItems.item(h)));
                    }
                }
                break;
            case 4:
                b.clear();
                try {
                    for (var _b = tslib_1.__values(fromEnum(c)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var j = _c.value;
                        var k = getBoxIfEnum($f, j);
                        if ($f != $t) {
                            if ($f == this.$t1) {
                                k = getBoxIfEnum(this.$t2, this.createTo(typeCastObjTo$t(this.$t1, k)));
                            }
                            if ($f == this.$t2) {
                                k = getBoxIfEnum(this.$t1, this.createFrom(typeCastObjTo$t(this.$t2, k)));
                            }
                        }
                        b.add(typeCastObjTo$t($t, k));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                break;
        }
    };
    SyncableObservableCollection$2.prototype.u = function (a, b) {
        var e_3, _a;
        if (this.f != null) {
            this.f();
        }
        try {
            for (var _b = tslib_1.__values(fromEnum(this.n)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                c.onChanged(this);
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
    SyncableObservableCollection$2.prototype.add = function (a) {
        this._inner.add(a);
        return true;
    };
    SyncableObservableCollection$2.prototype.add1 = function (a, b) {
        this._inner.insert(a, b);
    };
    SyncableObservableCollection$2.prototype.clear = function () {
        this._inner.clear();
    };
    SyncableObservableCollection$2.prototype.get = function (a) {
        return this._inner._inner[a];
    };
    SyncableObservableCollection$2.prototype.indexOf = function (a) {
        return this._inner.indexOf(a);
    };
    SyncableObservableCollection$2.prototype.remove1 = function (a) {
        var b = this._inner.contains(a);
        this._inner.remove(a);
        return b;
    };
    SyncableObservableCollection$2.prototype.remove = function (a) {
        var b = this._inner._inner[a];
        this._inner.removeAt(a);
        return b;
    };
    SyncableObservableCollection$2.prototype.set = function (a, b) {
        this._inner.item(a, b);
        return b;
    };
    SyncableObservableCollection$2.prototype.size = function () {
        return this._inner.count;
    };
    SyncableObservableCollection$2.prototype.addChangedListener = function (a) {
        this.n.add(a);
    };
    SyncableObservableCollection$2.prototype.removeChangedListener = function (a) {
        this.n.remove(a);
    };
    SyncableObservableCollection$2.prototype.addListener = function (a) {
        var b = this._inner;
        b.collectionChanged = delegateCombine(b.collectionChanged, a);
    };
    SyncableObservableCollection$2.prototype.removeListener = function (a) {
        var b = this._inner;
        b.collectionChanged = delegateRemove(b.collectionChanged, a);
    };
    Object.defineProperty(SyncableObservableCollection$2.prototype, "all", {
        get: function () {
            return this._inner;
        },
        enumerable: true,
        configurable: true
    });
    SyncableObservableCollection$2.$t = markType(SyncableObservableCollection$2, 'SyncableObservableCollection$2');
    return SyncableObservableCollection$2;
}(Base));
export { SyncableObservableCollection$2 };
/**
 * @hidden
 */
var SyncableObservableCollection$1 = /** @class */ (function (_super) {
    tslib_1.__extends(SyncableObservableCollection$1, _super);
    function SyncableObservableCollection$1($t) {
        var _this = _super.call(this, $t, $t, 0) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.compare = function (a, b) { return Base.equalsStatic(a, getBoxIfEnum(_this.$t, b)); };
        _this.createFrom = function (a) { return a; };
        _this.createTo = function (a) { return a; };
        return _this;
    }
    SyncableObservableCollection$1.$t = markType(SyncableObservableCollection$1, 'SyncableObservableCollection$1', SyncableObservableCollection$2.$.specialize(0, 0));
    return SyncableObservableCollection$1;
}(SyncableObservableCollection$2));
export { SyncableObservableCollection$1 };
//# sourceMappingURL=SyncableObservableCollection$2_combined.js.map