/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, Number_$type, typeGetValue, markType } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var FastItemColumn = /** @class */ (function (_super) {
    tslib_1.__extends(FastItemColumn, _super);
    function FastItemColumn(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.d = false;
        _this.e = false;
        _this.a = null;
        _this.b = null;
        _this._propertyName = null;
        _this.j = 0;
        _this.i = 0;
        _this.h = null;
        _this.m = 0;
        _this.l = c;
        _this.d = d;
        _this.propertyName = b;
        _this.e = FastReflectionHelper.needsHelper(b);
        if (_this.e) {
            _this.a = new FastReflectionHelper(true, _this.propertyName);
        }
        _this.c = a;
        return _this;
    }
    Object.defineProperty(FastItemColumn.prototype, "c", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemColumn.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            this._propertyName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemColumn.prototype, "minimum", {
        get: function () {
            var e_1, _a;
            if (isNaN_(this.j) && this.h != null) {
                this.j = Number.POSITIVE_INFINITY;
                try {
                    for (var _b = tslib_1.__values(fromEnum(this.h)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var a = _c.value;
                        if (!isNaN_(a)) {
                            this.j = Math.min(this.j, a);
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
            }
            return this.j;
        },
        set: function (a) {
            this.j = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemColumn.prototype, "maximum", {
        get: function () {
            var e_2, _a;
            if (isNaN_(this.i) && this.h != null) {
                this.i = Number.NEGATIVE_INFINITY;
                try {
                    for (var _b = tslib_1.__values(fromEnum(this.h)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var a = _c.value;
                        if (!isNaN_(a)) {
                            this.i = Math.max(this.i, a);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            return this.i;
        },
        set: function (a) {
            this.i = a;
        },
        enumerable: true,
        configurable: true
    });
    FastItemColumn.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.h._inner[a] = b;
            return b;
        }
        else {
            return this.h._inner[a];
        }
    };
    FastItemColumn.prototype.getEnumerator = function () {
        return this.h.getEnumerator();
    };
    FastItemColumn.prototype.getEnumeratorObject = function () {
        return this.h.getEnumerator();
    };
    FastItemColumn.prototype.contains = function (a) {
        return this.h.contains(a);
    };
    FastItemColumn.prototype.copyTo = function (a, b) {
        this.h.copyTo(a, b);
    };
    Object.defineProperty(FastItemColumn.prototype, "count", {
        get: function () {
            return this.h.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemColumn.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    FastItemColumn.prototype.indexOf = function (a) {
        return this.h.indexOf(a);
    };
    FastItemColumn.prototype.add = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemColumn.prototype.clear = function () {
        throw new NotImplementedException(0);
    };
    FastItemColumn.prototype.remove = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemColumn.prototype.insert = function (a, b) {
        throw new NotImplementedException(0);
    };
    FastItemColumn.prototype.removeAt = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemColumn.prototype.reset = function () {
        this.h = null;
        this.minimum = NaN;
        this.maximum = NaN;
        this.m = 0;
        return this.c != null ? this.insertRange(0, this.c.count) : true;
    };
    FastItemColumn.prototype.insertRange = function (a, b) {
        var c = new Array(b);
        var source_ = this.b.asArray();
        var item_;
        var d = this.minimum;
        var e = this.maximum;
        var f = isNaN_(this.minimum);
        var g = isNaN_(this.maximum);
        var h = 0;
        var i;
        var j = this.l;
        var sourceItem_ = null;
        var propertyName_ = this._propertyName;
        if (this.e) {
            for (var i_ = a; i_ < a + b; ++i_) {
                sourceItem_ = source_[i_];
                if (sourceItem_ == null) {
                    item_ = NaN;
                }
                else {
                    item_ = this.a.getPropertyValue(sourceItem_);
                }
                if (this.d) {
                    if ((typeof (item_) == 'function')) {
                        item_ = item_.apply(sourceItem_);
                    }
                }
                if (j != null) {
                    item_ = j(item_);
                }
                i = item_ == null ? NaN : item_;
                var k = (i != i);
                if (k) {
                    this.m++;
                }
                if (f || i < d) {
                    d = i;
                    f = k;
                }
                if (g || i > e) {
                    e = i;
                    g = k;
                }
                c[h] = i;
                h++;
            }
        }
        else {
            if (this.l != null || this.d) {
                for (var i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    if (sourceItem_ == null) {
                        item_ = NaN;
                    }
                    else {
                        item_ = (sourceItem_[propertyName_]);
                    }
                    if (this.d) {
                        if ((typeof (item_) == 'function')) {
                            item_ = item_.apply(sourceItem_);
                        }
                    }
                    if (j != null) {
                        item_ = j(item_);
                    }
                    i = item_ == null ? NaN : item_;
                    var l = (i != i);
                    if (l) {
                        this.m++;
                    }
                    if (f || i < d) {
                        d = i;
                        f = l;
                    }
                    if (g || i > e) {
                        e = i;
                        g = l;
                    }
                    c[h] = i;
                    h++;
                }
            }
            else {
                for (var i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    if (sourceItem_ == null) {
                        item_ = NaN;
                    }
                    else {
                        item_ = (sourceItem_[propertyName_]);
                    }
                    i = item_ == null ? NaN : item_;
                    var m = (i != i);
                    if (m) {
                        this.m++;
                    }
                    if (f || i < d) {
                        d = i;
                        f = m;
                    }
                    if (g || i > e) {
                        e = i;
                        g = m;
                    }
                    c[h] = i;
                    h++;
                }
            }
        }
        this.minimum = d;
        this.maximum = e;
        if (this.h == null) {
            this.h = new List$1(Number_$type, 1, c);
        }
        else {
            this.h.t(a, c);
        }
        return true;
    };
    FastItemColumn.prototype.removeRange = function (a, b) {
        for (var c = a; c < a + b && !isNaN_(this.minimum) && !isNaN_(this.maximum); ++c) {
            if (this.item(c) == this.minimum) {
                this.minimum = NaN;
            }
            if (this.item(c) == this.maximum) {
                this.maximum = NaN;
            }
            if (isNaN_(this.item(c))) {
                this.m--;
            }
        }
        this.h.v(a, b);
        return true;
    };
    FastItemColumn.prototype.r = function (a, b) {
        if (isNaN_(a)) {
            if (!isNaN_(b)) {
                if (!isNaN_(this.minimum)) {
                    this.minimum = Math.min(b, this.minimum);
                }
                if (!isNaN_(this.maximum)) {
                    this.maximum = Math.max(b, this.maximum);
                }
            }
            return;
        }
        if (isNaN_(b)) {
            this.minimum = !isNaN_(this.minimum) && a == this.minimum ? NaN : this.minimum;
            this.maximum = !isNaN_(this.maximum) && a == this.maximum ? NaN : this.maximum;
            return;
        }
        if (!isNaN_(this.minimum)) {
            if (a == this.minimum && b > this.minimum) {
                this.minimum = NaN;
            }
            else {
                this.minimum = Math.min(b, this.minimum);
            }
        }
        if (!isNaN_(this.maximum)) {
            if (a == this.maximum && b < this.maximum) {
                this.maximum = NaN;
            }
            else {
                this.maximum = Math.max(b, this.maximum);
            }
        }
    };
    FastItemColumn.prototype.replaceRange = function (a, b) {
        var c = false;
        for (var d = 0; d < b; ++d) {
            var e = this.h._inner[a + d];
            var f = this.k(this.c.item(a + d));
            if (isNaN_(e)) {
                this.m--;
            }
            if (isNaN_(f)) {
                this.m++;
            }
            if (e != f) {
                this.h._inner[a + d] = f;
                c = true;
                this.r(e, f);
            }
        }
        return c;
    };
    FastItemColumn.prototype.k = function (a) {
        if (a == null) {
            return NaN;
        }
        var sourceItem_ = a;
        var from_ = a;
        var propertyName_ = this._propertyName;
        if (this.e) {
            a = this.a.getPropertyValue(from_);
        }
        else {
            a = from_[propertyName_];
        }
        if (this.d) {
            from_ = a;
            if ((typeof (from_) == 'function')) {
                a = from_.apply(sourceItem_);
            }
        }
        if (this.l != null) {
            a = this.l(a);
        }
        if (a == null) {
            return NaN;
        }
        return a;
    };
    Object.defineProperty(FastItemColumn.prototype, "mayContainUnknowns", {
        get: function () {
            return this.m > 0;
        },
        enumerable: true,
        configurable: true
    });
    FastItemColumn.p = function (a, b) {
        FastItemColumn.q(a, 0, a.count - 1, b);
    };
    FastItemColumn.q = function (a, b, c, d) {
        if (b < c) {
            var e = FastItemColumn.n(a, b, c, d);
            FastItemColumn.q(a, b, e - 1, d);
            FastItemColumn.q(a, e + 1, c, d);
        }
    };
    FastItemColumn.n = function (a, b, c, d) {
        var e = a.item(c);
        var f = b;
        for (var g = b; g < c; g++) {
            if (d(a.item(g), e) <= 0) {
                var h = a.item(f);
                a.item(f, a.item(g));
                a.item(g, h);
                f++;
            }
        }
        var i = a.item(f);
        a.item(f, a.item(c));
        a.item(c, i);
        return f;
    };
    FastItemColumn.g = function (a, b) {
        var c = new List$1(Number_$type, 2, a.count);
        for (var d = 0; d < a.count; d++) {
            c.add(d);
        }
        if (a.count < 22) {
            FastItemColumn.p(c, function (e, f) {
                var g = a.item(typeGetValue(e));
                var h = a.item(typeGetValue(f));
                return b(g, h);
            });
        }
        else {
            c.aa(function (e, f) {
                var g = a.item(e);
                var h = a.item(f);
                return b(g, h);
            });
        }
        return c;
    };
    FastItemColumn.prototype.f = function () {
        return FastItemColumn.g(this.h, function (a, b) {
            var c = a;
            var d = b;
            if (c < d) {
                return -1;
            }
            if (c > d) {
                return 1;
            }
            return 0;
        });
    };
    FastItemColumn.prototype.asArray = function () {
        return this.h.asArray();
    };
    FastItemColumn.prototype.getItem = function (a) {
        return this.item(a);
    };
    FastItemColumn.$t = markType(FastItemColumn, 'FastItemColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Number_$type)]);
    return FastItemColumn;
}(Base));
export { FastItemColumn };
//# sourceMappingURL=FastItemColumn.js.map