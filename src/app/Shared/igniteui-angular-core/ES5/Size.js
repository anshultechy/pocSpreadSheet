/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, markStruct } from "./type";
/**
 * @hidden
 */
var Size = /** @class */ (function (_super) {
    tslib_1.__extends(Size, _super);
    function Size(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.h = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.i = c;
                    _this.h = d;
                }
                break;
        }
        return _this;
    }
    Size.prototype.equals = function (a) {
        if (a == null) {
            return _super.prototype.equals.call(this, a);
        }
        var b = a;
        return b.i == this.i && b.h == this.h;
    };
    Size.prototype.getHashCode = function () {
        return (this.i) ^ (this.h);
    };
    Object.defineProperty(Size.prototype, "width", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "height", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "isEmpty", {
        get: function () {
            return this.i < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size, "empty", {
        get: function () {
            var a = new Size(0);
            a.i = Number.NEGATIVE_INFINITY;
            a.h = Number.NEGATIVE_INFINITY;
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Size.l_op_Inequality = function (a, b) {
        return !(Size.l_op_Equality(a, b));
    };
    Size.l_op_Inequality_Lifted = function (a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return Size.l_op_Inequality(a.value, b.value);
    };
    Size.l_op_Equality = function (a, b) {
        return a.i == b.i && a.h == b.h;
    };
    Size.l_op_Equality_Lifted = function (a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return Size.l_op_Equality(a.value, b.value);
    };
    Size.$t = markStruct(Size, 'Size');
    return Size;
}(ValueType));
export { Size };
//# sourceMappingURL=Size.js.map