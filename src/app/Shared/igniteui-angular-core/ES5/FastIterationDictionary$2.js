/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, Boolean_$type, getBoxIfEnum, markType } from "./type";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { HashSet$1 } from "./HashSet$1";
/**
 * @hidden
 */
var FastIterationDictionary$2 = /** @class */ (function (_super) {
    tslib_1.__extends(FastIterationDictionary$2, _super);
    function FastIterationDictionary$2($tKey, $tValue, a) {
        var _rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            _rest[_i - 3] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$tKey = null;
        _this.$tValue = null;
        _this.k = null;
        _this.o = null;
        _this.q = null;
        _this.p = null;
        _this.l = null;
        _this.c = false;
        _this.$tKey = $tKey;
        _this.$tValue = $tValue;
        _this.$type = _this.$type.specialize(_this.$tKey, _this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [null];
                    {
                        var e = c[0];
                        _this.k = new Dictionary$2(_this.$tKey, _this.$tValue, 2, e);
                        _this.o = new List$1(_this.$tKey, 0);
                        _this.q = new List$1(_this.$tValue, 0);
                        _this.l = new Dictionary$2(_this.$tKey, Number_$type, 0);
                        _this.p = new List$1(Boolean_$type, 0);
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.k = new Dictionary$2(_this.$tKey, _this.$tValue, 2, c);
                    _this.o = new List$1(_this.$tKey, 0);
                    _this.q = new List$1(_this.$tValue, 0);
                    _this.l = new Dictionary$2(_this.$tKey, Number_$type, 0);
                    _this.p = new List$1(Boolean_$type, 0);
                }
                break;
        }
        return _this;
    }
    FastIterationDictionary$2.prototype.s = function (a, b) {
        this.k.addItem(a, b);
        this.o.add(a);
        this.q.add(b);
        this.l.addItem(a, this.o.count - 1);
        this.p.add(false);
    };
    FastIterationDictionary$2.prototype.i = function () {
        for (var a = 0; a < this.o.count; a++) {
            if (this.p._inner[a]) {
                continue;
            }
            if (this.item(this.o._inner[a]) != this.q._inner[a]) {
                return false;
            }
        }
        return true;
    };
    FastIterationDictionary$2.prototype.e = function () {
        var a = new HashSet$1(this.$tValue, 0);
        for (var b = 0; b < this.q.count; b++) {
            if (this.p._inner[b]) {
                continue;
            }
            if (a.contains(this.q._inner[b])) {
                return true;
            }
            a.add_1(this.q._inner[b]);
        }
        return false;
    };
    FastIterationDictionary$2.prototype.j = function (a) {
        for (var b = 0; b < this.q.count; b++) {
            if (this.p._inner[b]) {
                continue;
            }
            var c = a(this.q._inner[b]);
            if (!Base.equalsStatic(c, getBoxIfEnum(this.$tKey, this.o._inner[b]))) {
                return false;
            }
        }
        return true;
    };
    FastIterationDictionary$2.prototype.u = function () {
        this.k.clear();
        this.o.clear();
        this.q.clear();
        this.l.clear();
        this.p.clear();
    };
    FastIterationDictionary$2.prototype.d = function (a) {
        return this.k.containsKey(a);
    };
    Object.defineProperty(FastIterationDictionary$2.prototype, "r", {
        get: function () {
            return this.k.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastIterationDictionary$2.prototype, "m", {
        get: function () {
            return this.k.keys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastIterationDictionary$2.prototype, "g", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
            if (this.p.count > (this.l.count * 3)) {
                this.t();
            }
        },
        enumerable: true,
        configurable: true
    });
    FastIterationDictionary$2.prototype.f = function (a) {
        var b = this.k.removeItem(a);
        if (b) {
            var c = this.l.item(a);
            this.p._inner[c] = true;
            this.l.removeItem(a);
            if (this.p.count > (this.l.count * 3)) {
                this.t();
            }
            return b;
        }
        return b;
    };
    FastIterationDictionary$2.prototype.t = function () {
        if (this.g) {
            return;
        }
        var a = this.p.count;
        var b = 0;
        var c = false;
        for (var d = 0; d < a; d++) {
            if (this.p._inner[d]) {
                this.o.removeAt(d);
                this.q.removeAt(d);
                this.p.removeAt(d);
                d--;
                a--;
                c = true;
            }
            else {
                if (c) {
                    this.l.removeItem(this.o._inner[d]);
                    this.l.addItem(this.o._inner[d], b);
                }
                b++;
            }
        }
    };
    FastIterationDictionary$2.prototype.h = function (a, b) {
        var _this = this;
        return {
            ret: ((function () { var c = _this.k.tryGetValue(a, b); b = c.p1; return c.ret; })()),
            p1: b
        };
    };
    FastIterationDictionary$2.prototype.b = function (a) {
        return this.k.f(a);
    };
    Object.defineProperty(FastIterationDictionary$2.prototype, "n", {
        get: function () {
            return this.k.values;
        },
        enumerable: true,
        configurable: true
    });
    FastIterationDictionary$2.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            if (!this.d(a)) {
                this.s(a, b);
            }
            else {
                this.k.item(a, b);
                var c = this.l.item(a);
                this.q._inner[c] = b;
                this.p._inner[c] = false;
            }
            return b;
        }
        else {
            return this.k.item(a);
        }
    };
    FastIterationDictionary$2.$t = markType(FastIterationDictionary$2, 'FastIterationDictionary$2');
    return FastIterationDictionary$2;
}(Base));
export { FastIterationDictionary$2 };
//# sourceMappingURL=FastIterationDictionary$2.js.map