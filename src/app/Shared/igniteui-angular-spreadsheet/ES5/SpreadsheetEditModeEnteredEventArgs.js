/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * @hidden
 */
var SpreadsheetEditModeEnteredEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetEditModeEnteredEventArgs, _super);
    function SpreadsheetEditModeEnteredEventArgs(a) {
        var _this = _super.call(this) || this;
        _this._b = new SpreadsheetCell();
        _this._b = a;
        return _this;
    }
    Object.defineProperty(SpreadsheetEditModeEnteredEventArgs.prototype, "cell", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditModeEnteredEventArgs.$t = markType(SpreadsheetEditModeEnteredEventArgs, 'SpreadsheetEditModeEnteredEventArgs', EventArgs.$);
    return SpreadsheetEditModeEnteredEventArgs;
}(EventArgs));
export { SpreadsheetEditModeEnteredEventArgs };
//# sourceMappingURL=SpreadsheetEditModeEnteredEventArgs.js.map
