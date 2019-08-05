/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { BitArray } from "../../igniteui-angular-core/ES5/BitArray";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES5/ArgumentOutOfRangeException";
/**
 * @hidden
 */
var MDBitArray = /** @class */ (function (_super) {
    tslib_1.__extends(MDBitArray, _super);
    function MDBitArray(a, b) {
        var _this = _super.call(this) || this;
        _this.e = 0;
        _this.f = 0;
        _this.a = null;
        _this.i(a, b);
        return _this;
    }
    Object.defineProperty(MDBitArray.prototype, "g", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDBitArray.prototype, "b", {
        get: function () {
            if (this.a != null) {
                for (var a = 0; a < this.a.length; a++) {
                    var b = this.a[a];
                    if (b != null) {
                        for (var c = 0; c < this.e; c++) {
                            if (b.item(c)) {
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
    Object.defineProperty(MDBitArray.prototype, "h", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    MDBitArray.prototype.item = function (a, b, c) {
        if (arguments.length === 3) {
            if (a < 0 || a >= this.f || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                if (c == false) {
                    return;
                }
                this.a = new Array(this.f);
            }
            var d = this.a[a];
            if (d == null) {
                if (c == false) {
                    return;
                }
                this.a[a] = d = new BitArray(2, this.e);
            }
            d.item(b, c);
            return c;
        }
        else {
            if (a < 0 || a >= this.f || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                return false;
            }
            var c_1 = this.a[a];
            if (c_1 == null) {
                return false;
            }
            return c_1.item(b);
        }
    };
    MDBitArray.prototype.c = function (a) {
        if (a < 0 || a >= this.f) {
            throw new ArgumentOutOfRangeException(0);
        }
        return this.a != null && this.a[a] != null;
    };
    MDBitArray.prototype.i = function (a, b) {
        if (a < 0 || b < 0) {
            throw new ArgumentOutOfRangeException(0);
        }
        if (this.a != null) {
            if (a > this.a.length) {
                this.a = null;
            }
            else {
                for (var c = 0; c < this.a.length; c++) {
                    var d = this.a[c];
                    if (d != null) {
                        d.j = b;
                        d.m(false);
                    }
                }
            }
        }
        this.f = a;
        this.e = b;
    };
    MDBitArray.$t = markType(MDBitArray, 'MDBitArray');
    return MDBitArray;
}(Base));
export { MDBitArray };
//# sourceMappingURL=MDBitArray.js.map
