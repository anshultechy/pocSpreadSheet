/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { Stack$1 } from "./Stack$1";
/**
 * @hidden
 */
var StackPool$1 = /** @class */ (function (_super) {
    tslib_1.__extends(StackPool$1, _super);
    function StackPool$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.e = false;
        _this.j = null;
        _this.c = null;
        _this.b = null;
        _this.d = null;
        _this.g = null;
        _this.i = null;
        _this.h = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.g = new Dictionary$2(_this.$t, Base.$, 0);
        _this.i = new Stack$1(_this.$t);
        _this.h = new Stack$1(_this.$t);
        return _this;
    }
    StackPool$1.prototype.a = function () {
        var a;
        if (this.i.f != 0) {
            a = this.i.e();
        }
        else {
            a = this.h.f != 0 ? this.h.e() : this.j();
            this.b(a);
        }
        this.g.addItem(a, null);
        return a;
    };
    StackPool$1.prototype.n = function (a) {
        this.g.removeItem(a);
        if (this.f) {
            this.i.h(a);
        }
        else {
            this.c(a);
            var b = StackPool$1.m(this.$t, this.g.count);
            if (this.h.f < b) {
                this.d(a);
            }
            else {
                this.h.h(a);
            }
        }
    };
    Object.defineProperty(StackPool$1.prototype, "f", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            if (this.e != a) {
                this.e = a;
                if (!this.e) {
                    var b = StackPool$1.m(this.$t, this.g.count);
                    while (this.i.f > 0 && this.h.f <= b) {
                        var c = this.i.e();
                        this.c(c);
                        this.h.h(c);
                    }
                    while (this.i.f > 0) {
                        var d = this.i.e();
                        this.c(d);
                        this.d(d);
                    }
                    while (this.h.f > b) {
                        this.d(this.h.e());
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackPool$1.prototype, "k", {
        get: function () {
            return this.g.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackPool$1.prototype, "l", {
        get: function () {
            return this.h.f;
        },
        enumerable: true,
        configurable: true
    });
    StackPool$1.m = function ($t, a) {
        var b = 2;
        while (a > b) {
            b = b << 1;
        }
        return b;
    };
    StackPool$1.$t = markType(StackPool$1, 'StackPool$1');
    return StackPool$1;
}(Base));
export { StackPool$1 };
//# sourceMappingURL=StackPool$1.js.map