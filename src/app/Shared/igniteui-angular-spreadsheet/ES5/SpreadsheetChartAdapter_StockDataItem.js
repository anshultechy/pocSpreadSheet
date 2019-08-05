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
var SpreadsheetChartAdapter_StockDataItem = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapter_StockDataItem, _super);
    function SpreadsheetChartAdapter_StockDataItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._Open = 0;
        _this._High = 0;
        _this._Low = 0;
        _this._Close = 0;
        _this._Volume = 0;
        _this._CategoryName = null;
        return _this;
    }
    Object.defineProperty(SpreadsheetChartAdapter_StockDataItem.prototype, "Open", {
        get: function () {
            return this._Open;
        },
        set: function (a) {
            this._Open = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_StockDataItem.prototype, "High", {
        get: function () {
            return this._High;
        },
        set: function (a) {
            this._High = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_StockDataItem.prototype, "Low", {
        get: function () {
            return this._Low;
        },
        set: function (a) {
            this._Low = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_StockDataItem.prototype, "Close", {
        get: function () {
            return this._Close;
        },
        set: function (a) {
            this._Close = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_StockDataItem.prototype, "Volume", {
        get: function () {
            return this._Volume;
        },
        set: function (a) {
            this._Volume = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_StockDataItem.prototype, "CategoryName", {
        get: function () {
            return this._CategoryName;
        },
        set: function (a) {
            this._CategoryName = a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetChartAdapter_StockDataItem.prototype.g = function (a, b, c) {
        switch (a) {
            case 88:
                switch (b) {
                    case 0:
                        this.High = c;
                        break;
                    case 1:
                        this.Low = c;
                        break;
                    case 2:
                        this.Close = c;
                        break;
                }
                break;
            case 89:
                switch (b) {
                    case 0:
                        this.Open = c;
                        break;
                    case 1:
                        this.High = c;
                        break;
                    case 2:
                        this.Low = c;
                        break;
                    case 3:
                        this.Close = c;
                        break;
                }
                break;
            case 90:
                switch (b) {
                    case 0:
                        this.Volume = c;
                        break;
                    case 1:
                        this.High = c;
                        break;
                    case 2:
                        this.Low = c;
                        break;
                    case 3:
                        this.Close = c;
                        break;
                }
                break;
            case 91:
                switch (b) {
                    case 0:
                        this.Volume = c;
                        break;
                    case 1:
                        this.Open = c;
                        break;
                    case 2:
                        this.High = c;
                        break;
                    case 3:
                        this.Low = c;
                        break;
                    case 4:
                        this.Close = c;
                        break;
                }
                break;
        }
    };
    SpreadsheetChartAdapter_StockDataItem.$t = markType(SpreadsheetChartAdapter_StockDataItem, 'SpreadsheetChartAdapter_StockDataItem');
    return SpreadsheetChartAdapter_StockDataItem;
}(Base));
export { SpreadsheetChartAdapter_StockDataItem };
//# sourceMappingURL=SpreadsheetChartAdapter_StockDataItem.js.map
