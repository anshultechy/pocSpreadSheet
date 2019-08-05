/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType, TypeRegistrar } from "./type";
import { IFastItemColumnInternal_$type } from "./IFastItemColumnInternal";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { List$1 } from "./List$1";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { NotImplementedException } from "./NotImplementedException";
import { FastItemColumn } from "./FastItemColumn";
/**
 * @hidden
 */
var FastItemObjectColumn = /** @class */ (function (_super) {
    tslib_1.__extends(FastItemObjectColumn, _super);
    function FastItemObjectColumn(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.d = false;
        _this.e = false;
        _this.a = null;
        _this.b = null;
        _this._propertyName = null;
        _this.j = null;
        _this.i = null;
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
    Object.defineProperty(FastItemObjectColumn.prototype, "c", {
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
    Object.defineProperty(FastItemObjectColumn.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            this._propertyName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemObjectColumn.prototype, "minimum", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemObjectColumn.prototype, "maximum", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
        },
        enumerable: true,
        configurable: true
    });
    FastItemObjectColumn.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return this.g._inner[a];
        }
    };
    FastItemObjectColumn.prototype.getEnumerator = function () {
        return this.g.getEnumerator();
    };
    FastItemObjectColumn.prototype.getEnumeratorObject = function () {
        return this.g.getEnumerator();
    };
    FastItemObjectColumn.prototype.contains = function (a) {
        return this.g.contains1(a);
    };
    FastItemObjectColumn.prototype.copyTo = function (a, b) {
        this.g.copyTo(a, b);
    };
    Object.defineProperty(FastItemObjectColumn.prototype, "count", {
        get: function () {
            return this.g.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemObjectColumn.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    FastItemObjectColumn.prototype.indexOf = function (a) {
        return this.g.indexOf1(a);
    };
    FastItemObjectColumn.prototype.add = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemObjectColumn.prototype.clear = function () {
        throw new NotImplementedException(0);
    };
    FastItemObjectColumn.prototype.remove = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemObjectColumn.prototype.insert = function (a, b) {
        throw new NotImplementedException(0);
    };
    FastItemObjectColumn.prototype.removeAt = function (a) {
        throw new NotImplementedException(0);
    };
    FastItemObjectColumn.prototype.reset = function () {
        this.g = null;
        return this.c != null ? this.insertRange(0, this.c.count) : true;
    };
    FastItemObjectColumn.prototype.insertRange = function (a, b) {
        var c = ((function () {
            var $ret = new List$1(Base.$, 0);
            $ret.h = b;
            return $ret;
        })());
        for (var d = a; d < a + b; ++d) {
            var e = this.k(this.c.item(d));
            c.add1(e);
        }
        if (this.g == null) {
            this.g = c;
        }
        else {
            this.g.t(a, (c));
        }
        return true;
    };
    FastItemObjectColumn.prototype.replaceRange = function (a, b) {
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
    FastItemObjectColumn.prototype.removeRange = function (a, b) {
        this.g.v(a, b);
        return true;
    };
    FastItemObjectColumn.prototype.k = function (a) {
        if (a == null) {
            return null;
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
        if (this.h != null) {
            a = this.h(a);
        }
        return a;
    };
    Object.defineProperty(FastItemObjectColumn.prototype, "mayContainUnknowns", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    FastItemObjectColumn.prototype.f = function () {
        return FastItemColumn.g(this.g, function (a, b) {
            var c = parseFloat(a);
            var d = parseFloat(b);
            if (c < d) {
                return -1;
            }
            if (c > d) {
                return 1;
            }
            return 0;
        });
    };
    FastItemObjectColumn.prototype.asArray = function () {
        return this.g.asArray();
    };
    FastItemObjectColumn.prototype.getItem = function (a) {
        return this.item(a);
    };
    FastItemObjectColumn.m = function () {
        TypeRegistrar.register("FastItemObjectColumn", FastItemObjectColumn.$);
    };
    FastItemObjectColumn.$t = markType(FastItemObjectColumn, 'FastItemObjectColumn', Base.$, [IFastItemColumnInternal_$type, IFastItemColumn$1_$type.specialize(Base.$)]);
    return FastItemObjectColumn;
}(Base));
export { FastItemObjectColumn };
//# sourceMappingURL=FastItemObjectColumn.js.map