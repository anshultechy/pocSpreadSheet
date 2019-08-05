/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, fromEnum, toEnum, getBoxIfEnum, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
/**
 * @hidden
 */
var RearrangedList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(RearrangedList$1, _super);
    function RearrangedList$1($t, a, b) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.b = null;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.b = a;
        _this.a = b;
        return _this;
    }
    RearrangedList$1.prototype.indexOf = function (a) {
        var b = this.b.indexOf(a);
        if (b == -1) {
            return -1;
        }
        return this.a.indexOf(b);
    };
    RearrangedList$1.prototype.insert = function (a, b) {
        throw new NotImplementedException(0);
    };
    RearrangedList$1.prototype.removeAt = function (a) {
        throw new NotImplementedException(0);
    };
    RearrangedList$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return this.b.item(this.a.item(a));
        }
    };
    RearrangedList$1.prototype.add = function (a) {
        throw new NotImplementedException(0);
    };
    RearrangedList$1.prototype.clear = function () {
        this.a.clear();
    };
    RearrangedList$1.prototype.contains = function (a) {
        return this.b.contains(a);
    };
    RearrangedList$1.prototype.copyTo = function (a, b) {
        throw new NotImplementedException(0);
    };
    Object.defineProperty(RearrangedList$1.prototype, "count", {
        get: function () {
            return this.a.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RearrangedList$1.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    RearrangedList$1.prototype.remove = function (a) {
        throw new NotImplementedException(0);
    };
    RearrangedList$1.prototype._getEnumerator = function () {
        var e_1, _a, _b, _c, a, e_1_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _b = tslib_1.__values(fromEnum(this.a)), _c = _b.next();
                    _d.label = 1;
                case 1:
                    if (!!_c.done) return [3 /*break*/, 4];
                    a = _c.value;
                    return [4 /*yield*/, this.b.item(a)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _c = _b.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    RearrangedList$1.prototype.getEnumerator = function () {
        var _this = this;
        return toEnum(function () { return _this._getEnumerator(); }).getEnumerator();
    };
    RearrangedList$1.prototype._getEnumeratorObject = function () {
        var e_2, _a, _b, _c, a, e_2_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _b = tslib_1.__values(fromEnum(this.a)), _c = _b.next();
                    _d.label = 1;
                case 1:
                    if (!!_c.done) return [3 /*break*/, 4];
                    a = _c.value;
                    return [4 /*yield*/, getBoxIfEnum(this.$t, this.b.item(a))];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _c = _b.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    RearrangedList$1.prototype.getEnumeratorObject = function () {
        var _this = this;
        return toEnum(function () { return _this._getEnumeratorObject(); }).getEnumeratorObject();
    };
    RearrangedList$1.$t = markType(RearrangedList$1, 'RearrangedList$1', Base.$, [IList$1_$type.specialize(0)]);
    return RearrangedList$1;
}(Base));
export { RearrangedList$1 };
//# sourceMappingURL=RearrangedList$1.js.map