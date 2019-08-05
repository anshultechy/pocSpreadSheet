/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, ICollection_$type, IEnumerable$1_$type, getBoxIfEnum, toEnum, markType } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
/**
 * @hidden
 */
var Queue$1 = /** @class */ (function (_super) {
    tslib_1.__extends(Queue$1, _super);
    function Queue$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.d = 0;
        _this.e = 0;
        _this.f = 0;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = new Array(4);
        return _this;
    }
    Object.defineProperty(Queue$1.prototype, "count", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Queue$1.prototype.copyTo = function (a, b) {
        if (this.e < this.f) {
            for (var c = this.e; c < this.f; c++) {
                a[b++] = getBoxIfEnum(this.$t, this.a[c]);
            }
        }
        else {
            for (var d = this.e; d < this.a.length; d++) {
                a[b++] = getBoxIfEnum(this.$t, this.a[d]);
            }
            for (var e = 0; e < this.f; e++) {
                a[b++] = getBoxIfEnum(this.$t, this.a[e]);
            }
        }
    };
    Object.defineProperty(Queue$1.prototype, "isSynchronized", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue$1.prototype, "syncRoot", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Queue$1.prototype._getEnumerator = function () {
        var a, b, c;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(this.e < this.f)) return [3 /*break*/, 5];
                    a = this.e;
                    _a.label = 1;
                case 1:
                    if (!(a < this.f)) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.a[a]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    a++;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 13];
                case 5:
                    b = this.e;
                    _a.label = 6;
                case 6:
                    if (!(b < this.a.length)) return [3 /*break*/, 9];
                    return [4 /*yield*/, this.a[b]];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    b++;
                    return [3 /*break*/, 6];
                case 9:
                    c = 0;
                    _a.label = 10;
                case 10:
                    if (!(c < this.f)) return [3 /*break*/, 13];
                    return [4 /*yield*/, this.a[c]];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    c++;
                    return [3 /*break*/, 10];
                case 13: return [2 /*return*/];
            }
        });
    };
    Queue$1.prototype.getEnumerator = function () {
        var _this = this;
        return toEnum(function () { return _this._getEnumerator(); }).getEnumerator();
    };
    Queue$1.prototype.getEnumeratorObject = function () {
        return this.getEnumerator();
    };
    Queue$1.prototype.g = function (a) {
        if (this.d == this.a.length) {
            var b = new Array(Math.max(2, this.a.length * 2));
            this.copyTo(b, 0);
            this.e = 0;
            this.f = this.a.length;
            this.a = b;
        }
        this.a[this.f] = a;
        this.f = (this.f + 1) % this.a.length;
        this.d++;
    };
    Queue$1.prototype.b = function () {
        if (this.d == 0) {
            throw new InvalidOperationException(1, "The Queue is empty.");
        }
        var a = this.a[this.e];
        this.a[this.e] = (null);
        this.e = (this.e + 1) % this.a.length;
        this.d--;
        return a;
    };
    Queue$1.prototype.c = function () {
        if (this.d == 0) {
            throw new InvalidOperationException(1, "The Queue is empty.");
        }
        return this.a[this.e];
    };
    Queue$1.$t = markType(Queue$1, 'Queue$1', Base.$, [ICollection_$type, IEnumerable$1_$type.specialize(0)]);
    return Queue$1;
}(Base));
export { Queue$1 };
//# sourceMappingURL=Queue$1.js.map