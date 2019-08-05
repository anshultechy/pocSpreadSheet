/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES5/ArgumentOutOfRangeException";
import { arrayClear1 } from "../../igniteui-angular-core/ES5/arrayExtended";
/**
 * @hidden
 */
var MDList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(MDList$1, _super);
    function MDList$1($t, a, b) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.e = 0;
        _this.g = 0;
        _this.a = null;
        _this.f = 0;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.j(a, b);
        return _this;
    }
    Object.defineProperty(MDList$1.prototype, "h", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDList$1.prototype, "c", {
        get: function () {
            if (this.a != null) {
                for (var a = 0; a < this.g; a++) {
                    var b = this.a[a];
                    if (b != null) {
                        for (var c = 0; c < this.e; c++) {
                            if (b[c] != null) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDList$1.prototype, "i", {
        get: function () {
            return this.g;
        },
        enumerable: true,
        configurable: true
    });
    MDList$1.prototype.item = function (a, b, c) {
        if (arguments.length === 3) {
            if (a < 0 || a >= this.g || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                if (c == null) {
                    return;
                }
                this.a = new Array(this.g);
            }
            var d = this.a[a];
            if (d == null) {
                if (c == null) {
                    return;
                }
                this.a[a] = d = new Array(this.f);
            }
            d[b] = c;
            return c;
        }
        else {
            if (a < 0 || a >= this.g || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                return null;
            }
            var c_1 = this.a[a];
            if (c_1 == null) {
                return null;
            }
            return c_1[b];
        }
    };
    MDList$1.prototype.d = function (a) {
        if (a < 0 || a >= this.g) {
            throw new ArgumentOutOfRangeException(0);
        }
        return this.a != null && this.a[a] != null;
    };
    MDList$1.prototype.j = function (a, b) {
        if (a < 0 || b < 0) {
            throw new ArgumentOutOfRangeException(0);
        }
        if (this.a != null) {
            if (a > this.a.length) {
                this.a = null;
            }
            else if (b <= this.f) {
                for (var c = 0; c < this.g; c++) {
                    var d = this.a[c];
                    if (d != null) {
                        for (var e = 0; e < this.e; e++) {
                            d[e] = null;
                        }
                    }
                }
            }
            else {
                arrayClear1(this.a, 0, this.a.length);
            }
        }
        if (b > this.f) {
            this.f = b;
        }
        this.g = a;
        this.e = b;
    };
    MDList$1.$t = markType(MDList$1, 'MDList$1');
    return MDList$1;
}(Base));
export { MDList$1 };
//# sourceMappingURL=MDList$1.js.map
