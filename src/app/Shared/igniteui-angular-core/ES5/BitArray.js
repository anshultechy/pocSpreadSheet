/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, ICollection_$type, IEnumerable_$type, toEnum, markType } from "./type";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { IndexOutOfRangeException } from "./IndexOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { intDivide } from "./number";
/**
 * @hidden
 */
var BitArray = /** @class */ (function (_super) {
    tslib_1.__extends(BitArray, _super);
    function BitArray(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = [c.a];
                    {
                        var f = d[0];
                        _this.i = f.length * 32;
                        _this.a = new Array(f.length);
                        for (var g = 0; g < f.length; g++) {
                            _this.a[g] = f[g];
                        }
                    }
                    _this.i = c.i;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.j = c.length;
                    for (var d = 0; d < c.length; d++) {
                        _this.item(d, c[d]);
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = [c, false];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this.i = f;
                        _this.a = new Array((intDivide((f - 1), 32)) + 1);
                        _this.m(g);
                    }
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    _this.i = c.length * 32;
                    _this.a = new Array(c.length);
                    for (var d = 0; d < c.length; d++) {
                        _this.a[d] = c[d];
                    }
                }
                break;
            case 4:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.i = c;
                    _this.a = new Array((intDivide((c - 1), 32)) + 1);
                    _this.m(d);
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(BitArray.prototype, "count", {
        get: function () {
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitArray.prototype, "c", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitArray.prototype, "isSynchronized", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitArray.prototype, "j", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            if (a < 0) {
                throw new ArgumentOutOfRangeException(0);
            }
            this.i = a;
            var b = (intDivide((this.i - 1), 32)) + 1;
            if (this.a.length < b) {
                var c = this.a;
                this.a = new Array(b);
                for (var d = 0; d < c.length; d++) {
                    this.a[d] = c[d];
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitArray.prototype, "syncRoot", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    BitArray.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            if (a < 0 || this.i <= a) {
                throw new IndexOutOfRangeException(0);
            }
            if (b) {
                this.a[intDivide(a, 32)] |= 1 << (a % 32);
            }
            else {
                this.a[intDivide(a, 32)] &= ~(1 << (a % 32));
            }
            return b;
        }
        else {
            if (a < 0 || this.i <= a) {
                throw new IndexOutOfRangeException(0);
            }
            return (this.a[intDivide(a, 32)] & (1 << (a % 32))) != 0;
        }
    };
    BitArray.prototype.e = function (a) {
        if (a.j != this.j) {
            throw new ArgumentException(1, "The BitArrays do not have the same length");
        }
        for (var b = 0; b < this.a.length; b++) {
            this.a[b] &= a.a[b];
        }
        return this;
    };
    BitArray.prototype.k = function () {
        return new BitArray(0, this);
    };
    BitArray.prototype.copyTo = function (a, b) {
        for (var c = 0; c < this.i; c++) {
            a[b + c] = this.item(c);
        }
    };
    BitArray.prototype.b = function (a) {
        return this.item(a);
    };
    BitArray.prototype._getEnumeratorObject = function () {
        var a;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = 0;
                    _a.label = 1;
                case 1:
                    if (!(a < this.i)) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.item(a)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    a++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    BitArray.prototype.getEnumeratorObject = function () {
        var _this = this;
        return toEnum(function () { return _this._getEnumeratorObject(); }).getEnumeratorObject();
    };
    BitArray.prototype.f = function () {
        for (var a = 0; a < this.a.length; a++) {
            this.a[a] = ~this.a[a];
        }
        return this;
    };
    BitArray.prototype.g = function (a) {
        if (a.j != this.j) {
            throw new ArgumentException(1, "The BitArrays do not have the same length");
        }
        for (var b = 0; b < this.a.length; b++) {
            this.a[b] |= a.a[b];
        }
        return this;
    };
    BitArray.prototype.l = function (a, b) {
        this.item(a, b);
    };
    BitArray.prototype.m = function (a) {
        var b = a ? -1 : 0;
        for (var c = 0; c < this.a.length; c++) {
            this.a[c] = b;
        }
    };
    BitArray.prototype.h = function (a) {
        if (a.j != this.j) {
            throw new ArgumentException(1, "The BitArrays do not have the same length");
        }
        for (var b = 0; b < this.a.length; b++) {
            this.a[b] ^= a.a[b];
        }
        return this;
    };
    BitArray.$t = markType(BitArray, 'BitArray', Base.$, [ICollection_$type, IEnumerable_$type]);
    return BitArray;
}(Base));
export { BitArray };
//# sourceMappingURL=BitArray.js.map