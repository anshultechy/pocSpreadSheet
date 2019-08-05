/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetCommandExecutedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCommandExecutedEventArgs, _super);
    function SpreadsheetCommandExecutedEventArgs(a, b, c) {
        var _this = _super.call(this) || this;
        _this._b = 0;
        _this._d = null;
        _this._e = null;
        _this._b = a;
        _this._d = b;
        _this._e = c;
        return _this;
    }
    Object.defineProperty(SpreadsheetCommandExecutedEventArgs.prototype, "command", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCommandExecutedEventArgs.prototype, "commandParameter", {
        get: function () {
            return this._d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCommandExecutedEventArgs.prototype, "sourceElement", {
        get: function () {
            return this._e;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetCommandExecutedEventArgs.$t = markType(SpreadsheetCommandExecutedEventArgs, 'SpreadsheetCommandExecutedEventArgs', EventArgs.$);
    return SpreadsheetCommandExecutedEventArgs;
}(EventArgs));
export { SpreadsheetCommandExecutedEventArgs };
//# sourceMappingURL=SpreadsheetCommandExecutedEventArgs.js.map
