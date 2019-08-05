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
export class SpreadsheetChartAdapter_SeriesDataItem extends Base {
    constructor() {
        super(...arguments);
        this._Col = null;
        this._Row = null;
        this._Value = 0;
    }
    get Col() {
        return this._Col;
    }
    set Col(a) {
        this._Col = a;
    }
    get Row() {
        return this._Row;
    }
    set Row(a) {
        this._Row = a;
    }
    get Value() {
        return this._Value;
    }
    set Value(a) {
        this._Value = a;
    }
}
SpreadsheetChartAdapter_SeriesDataItem.$t = markType(SpreadsheetChartAdapter_SeriesDataItem, 'SpreadsheetChartAdapter_SeriesDataItem');
//# sourceMappingURL=SpreadsheetChartAdapter_SeriesDataItem.js.map