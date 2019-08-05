/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetEditModeExitingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetEditModeExitingEventArgs, _super);
    function SpreadsheetEditModeExitingEventArgs(a, b, c, d) {
        var _this = _super.call(this, 0) || this;
        _this._c = new SpreadsheetCell();
        _this._f = false;
        _this._e = false;
        _this._i = null;
        _this._c = a;
        _this._f = c;
        _this._e = b;
        _this._i = d;
        return _this;
    }
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "acceptChanges", {
        get: function () {
            return this._e;
        },
        set: function (a) {
            this._e = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "canCancel", {
        get: function () {
            return this._f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "cell", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetEditModeExitingEventArgs.prototype, "editText", {
        get: function () {
            return this._i;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeExitingEventArgs.$t = markType(SpreadsheetEditModeExitingEventArgs, 'SpreadsheetEditModeExitingEventArgs', CancelEventArgs.$);
    return SpreadsheetEditModeExitingEventArgs;
}(CancelEventArgs));
export { SpreadsheetEditModeExitingEventArgs };
//# sourceMappingURL=SpreadsheetEditModeExitingEventArgs.js.map
