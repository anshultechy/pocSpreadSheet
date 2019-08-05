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
var SpreadsheetChartAdapter_ScatterSeriesDataItem = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapter_ScatterSeriesDataItem, _super);
    function SpreadsheetChartAdapter_ScatterSeriesDataItem(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this._Radius = 0;
        _this._X = 0;
        _this._Y = 0;
        _this._SeriesName = null;
        _this.X = a;
        _this.Y = b;
        _this.Radius = c;
        _this.SeriesName = d;
        return _this;
    }
    Object.defineProperty(SpreadsheetChartAdapter_ScatterSeriesDataItem.prototype, "Radius", {
        get: function () {
            return this._Radius;
        },
        set: function (a) {
            this._Radius = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_ScatterSeriesDataItem.prototype, "X", {
        get: function () {
            return this._X;
        },
        set: function (a) {
            this._X = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_ScatterSeriesDataItem.prototype, "Y", {
        get: function () {
            return this._Y;
        },
        set: function (a) {
            this._Y = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_ScatterSeriesDataItem.prototype, "SeriesName", {
        get: function () {
            return this._SeriesName;
        },
        set: function (a) {
            this._SeriesName = a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetChartAdapter_ScatterSeriesDataItem.$t = markType(SpreadsheetChartAdapter_ScatterSeriesDataItem, 'SpreadsheetChartAdapter_ScatterSeriesDataItem');
    return SpreadsheetChartAdapter_ScatterSeriesDataItem;
}(Base));
export { SpreadsheetChartAdapter_ScatterSeriesDataItem };
//# sourceMappingURL=SpreadsheetChartAdapter_ScatterSeriesDataItem.js.map
