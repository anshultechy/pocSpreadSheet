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
var SpreadsheetActiveCellChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetActiveCellChangedEventArgs, _super);
    function SpreadsheetActiveCellChangedEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this._c = new SpreadsheetCell();
        _this._b = new SpreadsheetCell();
        _this._c = a;
        _this._b = b;
        return _this;
    }
    Object.defineProperty(SpreadsheetActiveCellChangedEventArgs.prototype, "newValue", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActiveCellChangedEventArgs.prototype, "oldValue", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActiveCellChangedEventArgs.$t = markType(SpreadsheetActiveCellChangedEventArgs, 'SpreadsheetActiveCellChangedEventArgs', EventArgs.$);
    return SpreadsheetActiveCellChangedEventArgs;
}(EventArgs));
export { SpreadsheetActiveCellChangedEventArgs };
//# sourceMappingURL=SpreadsheetActiveCellChangedEventArgs.js.map
