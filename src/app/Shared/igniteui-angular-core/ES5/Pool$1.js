/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IIndexedPool$1_$type } from "./IIndexedPool$1";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var Pool$1 = /** @class */ (function (_super) {
    tslib_1.__extends(Pool$1, _super);
    function Pool$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this._create = null;
        _this._disactivate = null;
        _this._activate = null;
        _this._destroy = null;
        _this.a = null;
        _this.b = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = new List$1(_this.$t, 0);
        _this.b = new List$1(_this.$t, 0);
        return _this;
    }
    Object.defineProperty(Pool$1.prototype, "create", {
        get: function () {
            return this._create;
        },
        set: function (a) {
            this._create = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pool$1.prototype, "disactivate", {
        get: function () {
            return this._disactivate;
        },
        set: function (a) {
            this._disactivate = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pool$1.prototype, "activate", {
        get: function () {
            return this._activate;
        },
        set: function (a) {
            this._activate = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pool$1.prototype, "destroy", {
        get: function () {
            return this._destroy;
        },
        set: function (a) {
            this._destroy = a;
        },
        enumerable: true,
        configurable: true
    });
    Pool$1.prototype.item = function (a) {
        if (a >= this.count) {
            this.count = a + 1;
        }
        return this.a._inner[a];
    };
    Pool$1.prototype.clear = function () {
        this.count = 0;
    };
    Object.defineProperty(Pool$1.prototype, "count", {
        get: function () {
            return this.a.count;
        },
        set: function (a) {
            var b = this.a.count;
            while (a > this.a.count && this.b.count > 0) {
                var c = this.b._inner[this.b.count - 1];
                this.a.add(c);
                this.b.removeAt(this.b.count - 1);
                if (this.activate != null) {
                    this.activate(c);
                }
            }
            while (a > this.a.count && this.b.count == 0) {
                var d = this.create();
                this.a.add(d);
                if (this.activate != null) {
                    this.activate(d);
                }
            }
            var e = 2;
            while (b != 0) {
                b >>= 1;
                e <<= 1;
            }
            while (a < this.a.count) {
                var f = this.a._inner[this.a.count - 1];
                this.a.removeAt(this.a.count - 1);
                if (this.disactivate != null) {
                    this.disactivate(f);
                }
                if (this.b.count < e) {
                    this.b.add(f);
                }
                else {
                    if (this.destroy != null) {
                        this.destroy(f);
                    }
                }
            }
            if (e < this.b.count) {
                for (var g = e; g < this.b.count; ++g) {
                    this.destroy(this.b._inner[g]);
                }
                this.b.v(e, this.b.count - e);
            }
        },
        enumerable: true,
        configurable: true
    });
    Pool$1.prototype.c = function (a) {
        for (var b = 0; b < this.b.count; b++) {
            a(this.b._inner[b]);
        }
        for (var c = 0; c < this.a.count; c++) {
            a(this.a._inner[c]);
        }
    };
    Pool$1.$t = markType(Pool$1, 'Pool$1', Base.$, [IIndexedPool$1_$type.specialize(0)]);
    return Pool$1;
}(Base));
export { Pool$1 };
//# sourceMappingURL=Pool$1.js.map