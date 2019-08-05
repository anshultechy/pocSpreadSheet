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
var SpreadsheetActiveWorksheetChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetActiveWorksheetChangedEventArgs, _super);
    function SpreadsheetActiveWorksheetChangedEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this._c = null;
        _this._b = null;
        _this._c = a;
        _this._b = b;
        return _this;
    }
    Object.defineProperty(SpreadsheetActiveWorksheetChangedEventArgs.prototype, "newValue", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetActiveWorksheetChangedEventArgs.prototype, "oldValue", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetActiveWorksheetChangedEventArgs.$t = markType(SpreadsheetActiveWorksheetChangedEventArgs, 'SpreadsheetActiveWorksheetChangedEventArgs', EventArgs.$);
    return SpreadsheetActiveWorksheetChangedEventArgs;
}(EventArgs));
export { SpreadsheetActiveWorksheetChangedEventArgs };
//# sourceMappingURL=SpreadsheetActiveWorksheetChangedEventArgs.js.map
