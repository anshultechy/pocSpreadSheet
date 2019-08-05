/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeGetValue, Number_$type, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";
/**
 * @hidden
 */
var FastItemIntColumn = /** @class */ (function (_super) {
    tslib_1.__extends(FastItemIntColumn, _super);
    function FastItemIntColumn(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.d = false;
        _this.e = false;
        _this.a = null;
        _this.b = null;
        _this._propertyName = null;
        _this.j = 0;
        _this.i = 0;
        _this.g = null;
        _this.h = c;
        _this.d = d;
        _this.propertyName = b;
        _this.e = FastReflectionHelper.needsHelper(b);
        if (_this.e) {
            _this.a = new FastReflectionHelper(true, _this.propertyName);
        }
        _this.c = a;
        return _this;
    }
    Object.defineProperty(FastItemIntColumn.prototype, "c", {
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
    Object.defineProperty(FastItemIntColumn.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            this._propertyName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemIntColumn.prototype, "minimum", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemIntColumn.prototype, "maximum", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
        },
        enumerable: true,
        configurable: true
    });
    FastItemIntColumn.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return this.g._inner[a];
        }
    };
    FastItemIntColumn.prototype.getEnumerator = function () {
        return this.g.getEnumerator();
    };
    FastItemIntColumn.prototype.getEnumeratorObject = function () {
        return this.g.getEnumerator();
    };
    FastItemIntColumn.prototype.contains = function (a) {
        return this.g.contains(a);
    };
    FastItemIntColumn.prototype.copyTo = function (a, b) {
        this.g.copyTo(a, b);
    };
    Object.defineProperty(FastItemIntColumn.prototype, "count", {
        get: function () {
            return this.g.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemIntColumn.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    FastItemIntColumn.prototype.indexOf = function (a) {
        return this.g.indexOf(a);
    };
    FastItemIntColumn.prototype.add = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemIntColumn.prototype.clear = function () {
        throw new NotImplementedException(0);
    };
    FastItemIntColumn.prototype.remove = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemIntColumn.prototype.insert = function (a, b) {
        throw new NotImplementedException(0);
    };
    FastItemIntColumn.prototype.removeAt = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemIntColumn.prototype.reset = function () {
        this.g = null;
        return this.c != null ? this.insertRange(0, this.c.count) : true;
    };
    FastItemIntColumn.prototype.insertRange = function (a, b) {
        var c = new Array(b);
        var source_ = this.b.asArray();
        var item_;
        var d = this.minimum;
        var e = this.maximum;
        var f = 0;
        var g = this.h;
        var propertyName_ = this._propertyName;
        var sourceItem_;
        if (this.e) {
            for (var i_ = a; i_ < a + b; ++i_) {
                sourceItem_ = source_[i_];
                item_ = typeGetValue(this.a.getPropertyValue(sourceItem_));
                if (this.d) {
                    if ((typeof (item_) == 'function')) {
                        item_ = item_.apply(sourceItem_);
                    }
                }
                if (g != null) {
                    item_ = g(item_);
                }
                var h = item_ == null ? 0 : typeGetValue(item_);
                c[f] = h;
                f++;
            }
        }
        else {
            if (this.h != null || this.d) {
                for (var i_ = a; i_ < a + b; ++i_) {
                    sourceItem_ = source_[i_];
                    item_ = (source_[i_][propertyName_]);
                    if (this.d) {
                        if ((typeof (item_) == 'function')) {
                            item_ = item_.apply(sourceItem_);
                        }
                    }
                    if (g != null) {
                        item_ = g(item_);
                    }
                    var i = item_ == null ? 0 : typeGetValue(item_);
                    c[f] = i;
                    f++;
                }
            }
            else {
                for (var i_ = a; i_ < a + b; ++i_) {
                    item_ = (source_[i_][propertyName_]);
                    var j = item_ == null ? 0 : typeGetValue(item_);
                    c[f] = j;
                    f++;
                }
            }
        }
        if (this.g == null) {
            this.g = new List$1(Number_$type, 1, c);
        }
        else {
            this.g.t(a, c);
        }
        return true;
    };
    FastItemIntColumn.prototype.replaceRange = function (a, b) {
        var c = false;
        for (var d = 0; d < b; ++d) {
            var e = this.g._inner[a + d];
            var f = this.k(this.c.item(a + d));
            if (e != f) {
                this.g._inner[a + d] = f;
                c = true;
            }
        }
        return c;
    };
    FastItemIntColumn.prototype.removeRange = function (a, b) {
        this.g.v(a, b);
        return true;
    };
    FastItemIntColumn.prototype.k = function (a) {
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
        if (this.h != null) {
            a = this.h(a);
        }
        if (a == null) {
            return 0;
        }
        return typeGetValue(a);
    };
    Object.defineProperty(FastItemIntColumn.prototype, "mayContainUnknowns", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    FastItemIntColumn.prototype.f = function () {
        return FastItemColumn.g(this.g, function (a, b) {
            var c = typeGetValue(a);
            var d = typeGetValue(b);
            if (c < d) {
                return -1;
            }
            if (c > d) {
                return 1;
            }
            return 0;
        });
    };
    FastItemIntColumn.prototype.asArray = function () {
        return this.g.asArray();
    };
    FastItemIntColumn.prototype.getItem = function (a) {
        return this.item(a);
    };
    FastItemIntColumn.m = function () {
        TypeRegistrar.register("FastItemIntColumn", FastItemIntColumn.$);
    };
    FastItemIntColumn.$t = markType(FastItemIntColumn, 'FastItemIntColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Number_$type)]);
    return FastItemIntColumn;
}(Base));
export { FastItemIntColumn };
//# sourceMappingURL=FastItemIntColumn.js.map