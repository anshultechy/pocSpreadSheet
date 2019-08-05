/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { truncate } from "./number";
/**
 * @hidden
 */
var Random = /** @class */ (function (_super) {
    tslib_1.__extends(Random, _super);
    function Random(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                }
                break;
        }
        return _this;
    }
    Random.prototype.nextDouble = function () {
        return Math.random();
    };
    Random.prototype.next = function () {
        return this.next1(0x7FFFFFFF);
    };
    Random.prototype.next1 = function (a) {
        return truncate(Math.round(this.nextDouble() * (a - 1)));
    };
    Random.prototype.next2 = function (a, b) {
        return a + truncate(Math.round(this.nextDouble() * ((b - a) - 1)));
    };
    Random.$t = markType(Random, 'Random');
    return Random;
}(Base));
export { Random };
//# sourceMappingURL=Random.js.map