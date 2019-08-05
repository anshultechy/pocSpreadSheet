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
var SpreadsheetEditModeEnteringEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetEditModeEnteringEventArgs, _super);
    function SpreadsheetEditModeEnteringEventArgs(a) {
        var _this = _super.call(this, 0) || this;
        _this._c = new SpreadsheetCell();
        _this._c = a;
        return _this;
    }
    Object.defineProperty(SpreadsheetEditModeEnteringEventArgs.prototype, "cell", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeEnteringEventArgs.$t = markType(SpreadsheetEditModeEnteringEventArgs, 'SpreadsheetEditModeEnteringEventArgs', CancelEventArgs.$);
    return SpreadsheetEditModeEnteringEventArgs;
}(CancelEventArgs));
export { SpreadsheetEditModeEnteringEventArgs };
//# sourceMappingURL=SpreadsheetEditModeEnteringEventArgs.js.map
