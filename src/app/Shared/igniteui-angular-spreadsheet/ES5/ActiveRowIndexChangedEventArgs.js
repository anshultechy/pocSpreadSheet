/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, Nullable$1, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ActiveRowIndexChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveRowIndexChangedEventArgs, _super);
    function ActiveRowIndexChangedEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this._d = Nullable$1.toNullable(Number_$type, null);
        _this._b = Nullable$1.toNullable(Number_$type, null);
        _this._d = a;
        _this._b = b;
        return _this;
    }
    Object.defineProperty(ActiveRowIndexChangedEventArgs.prototype, "_oldActiveRowIndex", {
        get: function () {
            return this._d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveRowIndexChangedEventArgs.prototype, "_newActiveRowIndex", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    ActiveRowIndexChangedEventArgs.$t = markType(ActiveRowIndexChangedEventArgs, 'ActiveRowIndexChangedEventArgs', EventArgs.$);
    return ActiveRowIndexChangedEventArgs;
}(EventArgs));
export { ActiveRowIndexChangedEventArgs };
//# sourceMappingURL=ActiveRowIndexChangedEventArgs.js.map
