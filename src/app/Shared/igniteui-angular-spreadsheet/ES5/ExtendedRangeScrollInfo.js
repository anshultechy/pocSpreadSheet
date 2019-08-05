/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ScrollInfo } from "./ScrollInfo";
import { Nullable$1, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { nullableIsNull } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var ExtendedRangeScrollInfo = /** @class */ (function (_super) {
    tslib_1.__extends(ExtendedRangeScrollInfo, _super);
    function ExtendedRangeScrollInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._av = 0;
        _this._aw = Nullable$1.toNullable(Number_$type, null);
        return _this;
    }
    ExtendedRangeScrollInfo.prototype._aq = function (a) {
        if (!this._at) {
            a = this._au(a);
        }
        _super.prototype._aq.call(this, a);
    };
    Object.defineProperty(ExtendedRangeScrollInfo.prototype, "_at", {
        get: function () {
            return this._av > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedRangeScrollInfo.prototype, "_ax", {
        get: function () {
            return this._aw;
        },
        enumerable: true,
        configurable: true
    });
    ExtendedRangeScrollInfo.prototype._ay = function () {
        this._av--;
        if (this._av == 0) {
            this._aw = Nullable$1.toNullable(Number_$type, null);
            this._ak("IsRangeChangeSuspended");
            this._au(this._ac);
        }
    };
    ExtendedRangeScrollInfo.prototype._az = function (a) {
        this._ac = a;
    };
    ExtendedRangeScrollInfo.prototype._a0 = function (a) {
        if (a === void 0) { a = Nullable$1.toNullable(Number_$type, null); }
        this._av++;
        if (this._av == 1) {
            this._aw = Nullable$1.toNullable(Number_$type, !nullableIsNull(a) ? a.value : this._ac);
            this._ak("IsRangeChangeSuspended");
        }
    };
    ExtendedRangeScrollInfo.$t = markType(ExtendedRangeScrollInfo, 'ExtendedRangeScrollInfo', ScrollInfo.$);
    return ExtendedRangeScrollInfo;
}(ScrollInfo));
export { ExtendedRangeScrollInfo };
//# sourceMappingURL=ExtendedRangeScrollInfo.js.map
