/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, markStruct } from "../../igniteui-angular-core/ES5/type";
import { Convert } from "../../igniteui-angular-core/ES5/Convert";
import { u32BitwiseAnd } from "../../igniteui-angular-core/ES5/numberExtended";
/**
 * @hidden
 */
var LongValue = /** @class */ (function (_super) {
    tslib_1.__extends(LongValue, _super);
    function LongValue(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.j = 0;
        _this.i = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.j = c;
                    _this.i = d;
                }
                break;
        }
        return _this;
    }
    LongValue.a = function () {
        return new LongValue(1, -1, -1);
    };
    LongValue.prototype.f = function (a) {
        return (a.j & this.j) == a.j && (a.i & this.i) == a.i;
    };
    LongValue.prototype.g = function (a) {
        return (a.j & this.j) != 0 || (a.i & this.i) != 0;
    };
    LongValue.prototype.h = function (a, b) {
        return !this.g(a) && this.f(b);
    };
    LongValue.c = function (a, b) {
        return new LongValue(1, a.j | b.j, a.i | b.i);
    };
    LongValue.prototype.d = function (a) {
        return new LongValue(1, this.j, this.i | a);
    };
    LongValue.prototype.e = function (a) {
        return new LongValue(1, this.j | a, this.i);
    };
    LongValue.b = function (a) {
        return new LongValue(1, (u32BitwiseAnd(a, 4294967295)), Convert.toInt32(a / Math.pow(2, 32)));
    };
    LongValue.prototype.k = function () {
        return Convert.toInt64(this.i * Math.pow(2, 32) + this.j);
    };
    LongValue.$t = markStruct(LongValue, 'LongValue');
    return LongValue;
}(ValueType));
export { LongValue };
//# sourceMappingURL=LongValue.js.map
