/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { DataSeries } from "./DataSeries";
import { markType } from "./type";
/**
 * @hidden
 */
export class DataSeriesCollection extends ObservableCollection$1 {
    constructor() {
        super(DataSeries.$, 0);
    }
}
DataSeriesCollection.$t = markType(DataSeriesCollection, 'DataSeriesCollection', ObservableCollection$1.$.specialize(DataSeries.$));
//# sourceMappingURL=DataSeriesCollection.js.map