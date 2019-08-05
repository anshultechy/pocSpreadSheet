/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, markStruct } from "../../igniteui-angular-core/ES5/type";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { isNaN_, isInfinity } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var RowColLength = /** @class */ (function (_super) {
    tslib_1.__extends(RowColLength, _super);
    function RowColLength(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.h = 0;
        _this.c = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    RowColLength.j(c, 1);
                    _this.h = c;
                    _this.c = 1;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    RowColLength.j(c, d);
                    _this.h = ((d == 0) ? 0 : c);
                    _this.c = d;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(RowColLength.prototype, "e", {
        get: function () {
            return this.c == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowColLength.prototype, "f", {
        get: function () {
            return this.c == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowColLength.prototype, "g", {
        get: function () {
            return this.c == 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowColLength.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowColLength, "a", {
        get: function () {
            return RowColLength.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowColLength.prototype, "i", {
        get: function () {
            if (this.c != 0) {
                return this.h;
            }
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    RowColLength.j = function (a, b) {
        if (isNaN_(a)) {
            throw new ArgumentException(0);
        }
        if (isInfinity(a)) {
            throw new ArgumentException(0);
        }
        if (b != 0 && b != 1 && b != 2) {
            throw new ArgumentException(0);
        }
    };
    RowColLength.$t = markStruct(RowColLength, 'RowColLength');
    RowColLength.b = new RowColLength(2, 1, 0);
    return RowColLength;
}(ValueType));
export { RowColLength };
//# sourceMappingURL=RowColLength.js.map
