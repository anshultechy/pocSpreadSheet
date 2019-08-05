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
export class SpreadsheetChartAdapter_PieDataItem extends Base {
    constructor() {
        super(...arguments);
        this._CategoryName = null;
        this._SeriesName = null;
        this._Value = 0;
    }
    get CategoryName() {
        return this._CategoryName;
    }
    set CategoryName(a) {
        this._CategoryName = a;
    }
    get SeriesName() {
        return this._SeriesName;
    }
    set SeriesName(a) {
        this._SeriesName = a;
    }
    get Value() {
        return this._Value;
    }
    set Value(a) {
        this._Value = a;
    }
}
SpreadsheetChartAdapter_PieDataItem.$t = markType(SpreadsheetChartAdapter_PieDataItem, 'SpreadsheetChartAdapter_PieDataItem');
//# sourceMappingURL=SpreadsheetChartAdapter_PieDataItem.js.map