/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetChartAdapter_PieDataItem = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapter_PieDataItem, _super);
    function SpreadsheetChartAdapter_PieDataItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._CategoryName = null;
        _this._SeriesName = null;
        _this._Value = 0;
        return _this;
    }
    Object.defineProperty(SpreadsheetChartAdapter_PieDataItem.prototype, "CategoryName", {
        get: function () {
            return this._CategoryName;
        },
        set: function (a) {
            this._CategoryName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_PieDataItem.prototype, "SeriesName", {
        get: function () {
            return this._SeriesName;
        },
        set: function (a) {
            this._SeriesName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_PieDataItem.prototype, "Value", {
        get: function () {
            return this._Value;
        },
        set: function (a) {
            this._Value = a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetChartAdapter_PieDataItem.$t = markType(SpreadsheetChartAdapter_PieDataItem, 'SpreadsheetChartAdapter_PieDataItem');
    return SpreadsheetChartAdapter_PieDataItem;
}(Base));
export { SpreadsheetChartAdapter_PieDataItem };
//# sourceMappingURL=SpreadsheetChartAdapter_PieDataItem.js.map
