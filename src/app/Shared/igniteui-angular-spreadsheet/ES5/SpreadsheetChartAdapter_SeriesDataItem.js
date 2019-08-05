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
var SpreadsheetChartAdapter_SeriesDataItem = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapter_SeriesDataItem, _super);
    function SpreadsheetChartAdapter_SeriesDataItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._Col = null;
        _this._Row = null;
        _this._Value = 0;
        return _this;
    }
    Object.defineProperty(SpreadsheetChartAdapter_SeriesDataItem.prototype, "Col", {
        get: function () {
            return this._Col;
        },
        set: function (a) {
            this._Col = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_SeriesDataItem.prototype, "Row", {
        get: function () {
            return this._Row;
        },
        set: function (a) {
            this._Row = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_SeriesDataItem.prototype, "Value", {
        get: function () {
            return this._Value;
        },
        set: function (a) {
            this._Value = a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetChartAdapter_SeriesDataItem.$t = markType(SpreadsheetChartAdapter_SeriesDataItem, 'SpreadsheetChartAdapter_SeriesDataItem');
    return SpreadsheetChartAdapter_SeriesDataItem;
}(Base));
export { SpreadsheetChartAdapter_SeriesDataItem };
//# sourceMappingURL=SpreadsheetChartAdapter_SeriesDataItem.js.map
