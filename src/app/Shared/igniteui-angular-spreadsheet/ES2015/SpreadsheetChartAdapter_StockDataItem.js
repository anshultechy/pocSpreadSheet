/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetChartAdapter_StockDataItem extends Base {
    constructor() {
        super(...arguments);
        this._Open = 0;
        this._High = 0;
        this._Low = 0;
        this._Close = 0;
        this._Volume = 0;
        this._CategoryName = null;
    }
    get Open() {
        return this._Open;
    }
    set Open(a) {
        this._Open = a;
    }
    get High() {
        return this._High;
    }
    set High(a) {
        this._High = a;
    }
    get Low() {
        return this._Low;
    }
    set Low(a) {
        this._Low = a;
    }
    get Close() {
        return this._Close;
    }
    set Close(a) {
        this._Close = a;
    }
    get Volume() {
        return this._Volume;
    }
    set Volume(a) {
        this._Volume = a;
    }
    get CategoryName() {
        return this._CategoryName;
    }
    set CategoryName(a) {
        this._CategoryName = a;
    }
    g(a, b, c) {
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
    }
}
SpreadsheetChartAdapter_StockDataItem.$t = markType(SpreadsheetChartAdapter_StockDataItem, 'SpreadsheetChartAdapter_StockDataItem');
//# sourceMappingURL=SpreadsheetChartAdapter_StockDataItem.js.map