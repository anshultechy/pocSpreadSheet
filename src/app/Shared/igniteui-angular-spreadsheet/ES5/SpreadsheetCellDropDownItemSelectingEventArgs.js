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
var SpreadsheetCellDropDownItemSelectingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCellDropDownItemSelectingEventArgs, _super);
    function SpreadsheetCellDropDownItemSelectingEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this._b = new SpreadsheetCell();
        _this._d = null;
        _this._b = a;
        _this._d = b;
        return _this;
    }
    Object.defineProperty(SpreadsheetCellDropDownItemSelectingEventArgs.prototype, "_cell", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellDropDownItemSelectingEventArgs.prototype, "_selectedItem", {
        get: function () {
            return this._d;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetCellDropDownItemSelectingEventArgs.$t = markType(SpreadsheetCellDropDownItemSelectingEventArgs, 'SpreadsheetCellDropDownItemSelectingEventArgs', EventArgs.$);
    return SpreadsheetCellDropDownItemSelectingEventArgs;
}(EventArgs));
export { SpreadsheetCellDropDownItemSelectingEventArgs };
//# sourceMappingURL=SpreadsheetCellDropDownItemSelectingEventArgs.js.map
