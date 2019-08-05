/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetCommandExecutingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCommandExecutingEventArgs, _super);
    function SpreadsheetCommandExecutingEventArgs(a, b, c) {
        var _this = _super.call(this, 0) || this;
        _this._c = 0;
        _this._e = null;
        _this._f = null;
        _this._c = a;
        _this._e = b;
        _this._f = c;
        return _this;
    }
    Object.defineProperty(SpreadsheetCommandExecutingEventArgs.prototype, "command", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCommandExecutingEventArgs.prototype, "commandParameter", {
        get: function () {
            return this._e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCommandExecutingEventArgs.prototype, "sourceElement", {
        get: function () {
            return this._f;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetCommandExecutingEventArgs.$t = markType(SpreadsheetCommandExecutingEventArgs, 'SpreadsheetCommandExecutingEventArgs', CancelEventArgs.$);
    return SpreadsheetCommandExecutingEventArgs;
}(CancelEventArgs));
export { SpreadsheetCommandExecutingEventArgs };
//# sourceMappingURL=SpreadsheetCommandExecutingEventArgs.js.map
