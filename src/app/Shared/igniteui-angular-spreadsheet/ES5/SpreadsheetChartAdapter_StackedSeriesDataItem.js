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
var SpreadsheetChartAdapter_StackedSeriesDataItem = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapter_StackedSeriesDataItem, _super);
    function SpreadsheetChartAdapter_StackedSeriesDataItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._CategoryName = null;
        _this._SeriesNames = null;
        _this._SeriesValues = null;
        return _this;
    }
    Object.defineProperty(SpreadsheetChartAdapter_StackedSeriesDataItem.prototype, "CategoryName", {
        get: function () {
            return this._CategoryName;
        },
        set: function (a) {
            this._CategoryName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_StackedSeriesDataItem.prototype, "SeriesNames", {
        get: function () {
            return this._SeriesNames;
        },
        set: function (a) {
            this._SeriesNames = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_StackedSeriesDataItem.prototype, "SeriesValues", {
        get: function () {
            return this._SeriesValues;
        },
        set: function (a) {
            this._SeriesValues = a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetChartAdapter_StackedSeriesDataItem.$t = markType(SpreadsheetChartAdapter_StackedSeriesDataItem, 'SpreadsheetChartAdapter_StackedSeriesDataItem');
    return SpreadsheetChartAdapter_StackedSeriesDataItem;
}(Base));
export { SpreadsheetChartAdapter_StackedSeriesDataItem };
//# sourceMappingURL=SpreadsheetChartAdapter_StackedSeriesDataItem.js.map
