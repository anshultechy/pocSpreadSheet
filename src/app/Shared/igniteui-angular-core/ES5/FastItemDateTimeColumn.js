/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, Date_$type, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";
import { dateMinValue } from "./date";
/**
 * @hidden
 */
var FastItemDateTimeColumn = /** @class */ (function (_super) {
    tslib_1.__extends(FastItemDateTimeColumn, _super);
    function FastItemDateTimeColumn(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.m = null;
        _this.d = false;
        _this.e = false;
        _this.a = null;
        _this.b = null;
        _this._propertyName = null;
        _this.g = false;
        _this.f = false;
        _this.k = new Date();
        _this.j = new Date();
        _this.i = null;
        _this.m = c;
        _this.d = d;
        _this.propertyName = b;
        _this.e = FastReflectionHelper.needsHelper(b);
        if (_this.e) {
            _this.a = new FastReflectionHelper(true, _this.propertyName);
        }
        _this.c = a;
        return _this;
    }
    Object.defineProperty(FastItemDateTimeColumn.prototype, "c", {
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
    Object.defineProperty(FastItemDateTimeColumn.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            this._propertyName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemDateTimeColumn.prototype, "minimum", {
        get: function () {
            var e_1, _a;
            if (!this.g && this.i != null) {
                try {
                    for (var _b = tslib_1.__values(fromEnum(this.i)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var a = _c.value;
                        if (a < this.k) {
                            this.k = a;
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
                if (this.i.count > 0) {
                    this.g = true;
                }
            }
            return this.k;
        },
        set: function (a) {
            this.k = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemDateTimeColumn.prototype, "maximum", {
        get: function () {
            var e_2, _a;
            if (!this.f && this.i != null) {
                try {
                    for (var _b = tslib_1.__values(fromEnum(this.i)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var a = _c.value;
                        if (a > this.j) {
                            this.j = a;
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
                if (this.i.count > 0) {
                    this.f = true;
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
    FastItemDateTimeColumn.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return this.i._inner[a];
        }
    };
    FastItemDateTimeColumn.prototype.getEnumerator = function () {
        return this.i.getEnumerator();
    };
    FastItemDateTimeColumn.prototype.getEnumeratorObject = function () {
        return this.i.getEnumerator();
    };
    FastItemDateTimeColumn.prototype.contains = function (a) {
        return this.i.contains(a);
    };
    FastItemDateTimeColumn.prototype.copyTo = function (a, b) {
        this.i.copyTo(a, b);
    };
    Object.defineProperty(FastItemDateTimeColumn.prototype, "count", {
        get: function () {
            return this.i.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemDateTimeColumn.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    FastItemDateTimeColumn.prototype.indexOf = function (a) {
        return this.i.indexOf(a);
    };
    FastItemDateTimeColumn.prototype.add = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemDateTimeColumn.prototype.clear = function () {
        throw new NotImplementedException(0);
    };
    FastItemDateTimeColumn.prototype.remove = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemDateTimeColumn.prototype.insert = function (a, b) {
        throw new NotImplementedException(0);
    };
    FastItemDateTimeColumn.prototype.removeAt = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemDateTimeColumn.prototype.reset = function () {
        this.i = null;
        this.g = false;
        this.f = false;
        return this.c != null ? this.insertRange(0, this.c.count) : true;
    };
    FastItemDateTimeColumn.prototype.insertRange = function (a, b) {
        var c = new Array(b);
        var source_ = this.b.asArray();
        var item_;
        var d = this.minimum;
        var e = this.maximum;
        var f;
        var g = 0;
        var h = this.m;
        var propertyName_ = this._propertyName;
        var sourceItem_ = null;
        if (this.e) {
            for (var i_ = a; i_ < a + b; ++i_) {
                sourceItem_ = source_[i_];
                item_ = this.a.getPropertyValue(sourceItem_);
                if (this.d) {
                    if ((typeof (item_) == 'function')) {
                        item_ = item_.apply(sourceItem_);
                    }
                }
                if (h != null) {
                    item_ = h(item_);
                }
                f = item_ == null ? (new Date()) : item_;
                if (!this.g) {
                    d = f;
                    this.g = true;
                }
                else if (f < d) {
                    d = f;
                }
                if (!this.f) {
                    e = f;
                    this.f = true;
                }
                else if (f > e) {
                    e = f;
                }
                c[g] = f;
                g++;
            }
        }
        else {
            if (this.m != null || this.d) {
                for (var i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    item_ = (source_[i_][propertyName_]);
                    if (this.d) {
                        if ((typeof (item_) == 'function')) {
                            item_ = item_.apply(sourceItem_);
                        }
                    }
                    if (h != null) {
                        item_ = h(item_);
                    }
                    f = item_ == null ? (new Date()) : item_;
                    if (!this.g) {
                        d = f;
                        this.g = true;
                    }
                    else if (f < d) {
                        d = f;
                    }
                    if (!this.f) {
                        e = f;
                        this.f = true;
                    }
                    else if (f > e) {
                        e = f;
                    }
                    c[g] = f;
                    g++;
                }
            }
            else {
                for (var i_ = a; i_ < a + b; ++i_) {
                    item_ = (source_[i_][propertyName_]);
                    f = item_ == null ? (new Date()) : item_;
                    if (!this.g) {
                        d = f;
                        this.g = true;
                    }
                    else if (f < d) {
                        d = f;
                    }
                    if (!this.f) {
                        e = f;
                        this.f = true;
                    }
                    else if (f > e) {
                        e = f;
                    }
                    c[g] = f;
                    g++;
                }
            }
        }
        this.minimum = d;
        this.maximum = e;
        if (this.i == null) {
            this.i = new List$1(Date_$type, 1, c);
        }
        else {
            this.i.t(a, c);
        }
        return true;
    };
    FastItemDateTimeColumn.prototype.removeRange = function (a, b) {
        for (var c = a; c < a + b; ++c) {
            if (+(this.item(c)) == +(this.minimum)) {
                this.g = false;
            }
            if (+(this.item(c)) == +(this.maximum)) {
                this.f = false;
            }
        }
        this.i.v(a, b);
        return true;
    };
    FastItemDateTimeColumn.prototype.p = function (a, b) {
        if (+a != +(dateMinValue())) {
            if (+b != +(dateMinValue())) {
                this.minimum = b < this.minimum ? b : this.minimum;
                this.maximum = b > this.maximum ? b : this.maximum;
            }
            return;
        }
        this.minimum = b < this.minimum ? b : this.minimum;
        this.maximum = b > this.maximum ? b : this.maximum;
    };
    FastItemDateTimeColumn.prototype.replaceRange = function (a, b) {
        var c = false;
        for (var d = 0; d < b; ++d) {
            var e = this.i._inner[a + d];
            var f = this.l(this.c.item(a + d));
            if (+e != +f) {
                this.i._inner[a + d] = f;
                c = true;
                this.p(e, f);
            }
        }
        return c;
    };
    FastItemDateTimeColumn.prototype.l = function (a) {
        if (a == null) {
            return dateMinValue();
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
        if (this.m != null) {
            a = this.m(a);
        }
        if (a == null) {
            return dateMinValue();
        }
        return a;
    };
    Object.defineProperty(FastItemDateTimeColumn.prototype, "mayContainUnknowns", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    FastItemDateTimeColumn.prototype.h = function () {
        return FastItemColumn.g(this.i, function (a, b) {
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
    FastItemDateTimeColumn.prototype.asArray = function () {
        return this.i.asArray();
    };
    FastItemDateTimeColumn.prototype.getItem = function (a) {
        return this.item(a);
    };
    FastItemDateTimeColumn.o = function () {
        TypeRegistrar.register("FastItemDateTimeColumn", FastItemDateTimeColumn.$);
    };
    FastItemDateTimeColumn.$t = markType(FastItemDateTimeColumn, 'FastItemDateTimeColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Date_$type)]);
    return FastItemDateTimeColumn;
}(Base));
export { FastItemDateTimeColumn };
//# sourceMappingURL=FastItemDateTimeColumn.js.map