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
export class SpreadsheetChartAdapter_ScatterSeriesDataItem extends Base {
    constructor(a, b, c, d) {
        super();
        this._Radius = 0;
        this._X = 0;
        this._Y = 0;
        this._SeriesName = null;
        this.X = a;
        this.Y = b;
        this.Radius = c;
        this.SeriesName = d;
    }
    get Radius() {
        return this._Radius;
    }
    set Radius(a) {
        this._Radius = a;
    }
    get X() {
        return this._X;
    }
    set X(a) {
        this._X = a;
    }
    get Y() {
        return this._Y;
    }
    set Y(a) {
        this._Y = a;
    }
    get SeriesName() {
        return this._SeriesName;
    }
    set SeriesName(a) {
        this._SeriesName = a;
    }
}
SpreadsheetChartAdapter_ScatterSeriesDataItem.$t = markType(SpreadsheetChartAdapter_ScatterSeriesDataItem, 'SpreadsheetChartAdapter_ScatterSeriesDataItem');
//# sourceMappingURL=SpreadsheetChartAdapter_ScatterSeriesDataItem.js.map