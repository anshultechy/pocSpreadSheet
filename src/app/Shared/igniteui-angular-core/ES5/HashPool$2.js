/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "./type";
import { IHashPool$2_$type } from "./IHashPool$2";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var HashPool$2 = /** @class */ (function (_super) {
    tslib_1.__extends(HashPool$2, _super);
    function HashPool$2($tKey, $tValue) {
        var _this = _super.call(this) || this;
        _this.$tKey = null;
        _this.$tValue = null;
        _this.d = null;
        _this.b = null;
        _this._create = null;
        _this._disactivate = null;
        _this._activate = null;
        _this._destroy = null;
        _this.$tKey = $tKey;
        _this.$tValue = $tValue;
        _this.$type = _this.$type.specialize(_this.$tKey, _this.$tValue);
        _this.d = new List$1(_this.$tValue, 0);
        _this.b = new Dictionary$2(_this.$tKey, _this.$tValue, 0);
        return _this;
    }
    Object.defineProperty(HashPool$2.prototype, "create", {
        get: function () {
            return this._create;
        },
        set: function (a) {
            this._create = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HashPool$2.prototype, "disactivate", {
        get: function () {
            return this._disactivate;
        },
        set: function (a) {
            this._disactivate = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HashPool$2.prototype, "activate", {
        get: function () {
            return this._activate;
        },
        set: function (a) {
            this._activate = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HashPool$2.prototype, "destroy", {
        get: function () {
            return this._destroy;
        },
        set: function (a) {
            this._destroy = a;
        },
        enumerable: true,
        configurable: true
    });
    HashPool$2.prototype.item = function (a) {
        var _this = this;
        var b;
        if (!((function () { var c = _this.b.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            if (this.d.count > 0) {
                b = this.d._inner[this.d.count - 1];
                this.d.removeAt(this.d.count - 1);
            }
            else {
                b = this.create();
            }
            if (this.activate != null) {
                this.activate(b);
            }
            this.b.item(a, b);
        }
        return b;
    };
    Object.defineProperty(HashPool$2.prototype, "c", {
        get: function () {
            return this.b.keys;
        },
        enumerable: true,
        configurable: true
    });
    HashPool$2.prototype.a = function (a) {
        return this.b.containsKey(a);
    };
    HashPool$2.prototype.g = function (a) {
        var _this = this;
        var b;
        if (((function () { var c = _this.b.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            this.b.removeItem(a);
            if (this.disactivate != null) {
                this.disactivate(b);
            }
            this.d.add(b);
            var c = this.b.count;
            var d = 2;
            while (c != 0) {
                c >>= 1;
                d <<= 1;
            }
            if (d < this.d.count) {
                for (var e = d; e < this.d.count; ++e) {
                    this.destroy(this.d._inner[e]);
                }
                this.d.v(d, this.d.count - d);
            }
        }
    };
    HashPool$2.prototype.clear = function () {
        var e_1, _a, e_2, _b;
        var a = new List$1(this.$tKey, 0);
        try {
            for (var _c = tslib_1.__values(fromEnum(this.b.keys)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var b = _d.value;
                a.add(b);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(a)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var c = _f.value;
                this.g(c);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(HashPool$2.prototype, "e", {
        get: function () {
            return this.b.count;
        },
        enumerable: true,
        configurable: true
    });
    HashPool$2.prototype.f = function (a) {
        var e_3, _a;
        for (var b = 0; b < this.d.count; b++) {
            a(this.d._inner[b]);
        }
        try {
            for (var _b = tslib_1.__values(fromEnum(this.b.values)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                a(c);
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
    HashPool$2.$t = markType(HashPool$2, 'HashPool$2', Base.$, [IHashPool$2_$type.specialize(0, 1)]);
    return HashPool$2;
}(Base));
export { HashPool$2 };
//# sourceMappingURL=HashPool$2.js.map