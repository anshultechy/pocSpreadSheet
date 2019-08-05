/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, IList_$type, IEnumerator$1_$type, fromEnum, typeCastObjTo$t, typeCast, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { WeakReference } from "../../igniteui-angular-core/ES5/WeakReference";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
var WeakList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(WeakList$1, _super);
    function WeakList$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._b = new List$1(WeakReference.$, 0);
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    Object.defineProperty(WeakList$1.prototype, "count", {
        get: function () {
            return this._b.count;
        },
        enumerable: true,
        configurable: true
    });
    WeakList$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this._b._inner[a] = this._g(b);
            return b;
        }
        else {
            return this._a(a);
        }
    };
    Object.defineProperty(WeakList$1.prototype, "syncRoot", {
        get: function () {
            return this._b.syncRoot;
        },
        enumerable: true,
        configurable: true
    });
    WeakList$1.prototype._add = function (a) {
        this._b.add(this._g(a));
        return this._b.count - 1;
    };
    WeakList$1.prototype._d = function (a) {
        var e_1, _h;
        try {
            for (var _j = tslib_1.__values(fromEnum(a)), _k = _j.next(); !_k.done; _k = _j.next()) {
                var b = _k.value;
                this._add(b);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    WeakList$1.prototype.clear = function () {
        this._b.clear();
    };
    WeakList$1.prototype._e = function () {
        for (var a = 0, b = this._b.count; a < b; a++) {
            this._a(a);
        }
        CoreUtilities.v(WeakReference.$, this._b, null);
    };
    WeakList$1.prototype.contains = function (a) {
        return this.indexOf(a) >= 0;
    };
    WeakList$1.prototype.copyTo = function (a, b) {
        this.copyTo(a, b);
    };
    WeakList$1.prototype.getEnumerator = function () {
        return new WeakList_Enumerator$1(this.$t, this);
    };
    WeakList$1.prototype.indexOf = function (a) {
        for (var b = 0, c = this._b.count; b < c; b++) {
            if (a == this._a(b)) {
                return b;
            }
        }
        return -1;
    };
    WeakList$1.prototype.insert = function (a, b) {
        this._b.insert(a, this._g(b));
    };
    WeakList$1.prototype.remove = function (a) {
        var b = this.indexOf(a);
        if (b >= 0) {
            this.removeAt(b);
            return true;
        }
        return false;
    };
    WeakList$1.prototype.removeAt = function (a) {
        this._b.removeAt(a);
    };
    WeakList$1.prototype._f = function (a, b) {
        this._b.v(a, b);
    };
    WeakList$1.prototype._g = function (a) {
        return new WeakReference(a);
    };
    WeakList$1.prototype._a = function (a) {
        var b = this._b._inner[a];
        var c = null;
        if (null != b) {
            c = typeCastObjTo$t(this.$t, CoreUtilities.p(b));
            if (null == c) {
                this._b._inner[a] = null;
            }
        }
        return c;
    };
    WeakList$1.prototype.getEnumeratorObject = function () {
        return new WeakList_Enumerator$1(this.$t, this);
    };
    WeakList$1.prototype.add = function (a) {
        this._add(a);
    };
    Object.defineProperty(WeakList$1.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    WeakList$1.prototype.add1 = function (a) {
        return this._add(typeCastObjTo$t(this.$t, a));
    };
    WeakList$1.prototype.contains1 = function (a) {
        return typeCast(this.$t, a) !== null && this.contains(typeCastObjTo$t(this.$t, a));
    };
    WeakList$1.prototype.copyTo1 = function (a, b) {
        for (var c = 0, d = this._b.count; c < d; c++) {
            a[b++] = this._a(c);
        }
    };
    WeakList$1.prototype.indexOf1 = function (a) {
        return typeCast(this.$t, a) !== null ? this.indexOf(typeCastObjTo$t(this.$t, a)) : -1;
    };
    Object.defineProperty(WeakList$1.prototype, "isFixedSize", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeakList$1.prototype, "isReadOnly1", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    WeakList$1.prototype.remove1 = function (a) {
        if (typeCast(this.$t, a) !== null) {
            this.remove(typeCastObjTo$t(this.$t, a));
        }
    };
    Object.defineProperty(WeakList$1.prototype, "isSynchronized", {
        get: function () {
            return this._b.isSynchronized;
        },
        enumerable: true,
        configurable: true
    });
    WeakList$1.$t = markType(WeakList$1, 'WeakList$1', Base.$, [IList$1_$type.specialize(0), IList_$type]);
    return WeakList$1;
}(Base));
export { WeakList$1 };
/**
 * @hidden
 */
var WeakList_Enumerator$1 = /** @class */ (function (_super) {
    tslib_1.__extends(WeakList_Enumerator$1, _super);
    function WeakList_Enumerator$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._a = null;
        _this._b = null;
        _this._c = 0;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this._a = a;
        _this.reset();
        return _this;
    }
    Object.defineProperty(WeakList_Enumerator$1.prototype, "current", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    WeakList_Enumerator$1.prototype.moveNext = function () {
        this._b = null;
        while (++this._c < this._a.count) {
            this._b = this._a.item(this._c);
            if (null != this._b) {
                break;
            }
        }
        return null != this._b;
    };
    WeakList_Enumerator$1.prototype.reset = function () {
        this._c = -1;
        this._b = null;
    };
    Object.defineProperty(WeakList_Enumerator$1.prototype, "currentObject", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    WeakList_Enumerator$1.prototype.dispose = function () {
    };
    WeakList_Enumerator$1.$t = markType(WeakList_Enumerator$1, 'WeakList_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
    return WeakList_Enumerator$1;
}(Base));
export { WeakList_Enumerator$1 };
//# sourceMappingURL=WeakList$1_combined.js.map
