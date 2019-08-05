/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { DataSeries } from "./DataSeries";
import { markType } from "./type";
/**
 * @hidden
 */
var DataSeriesCollection = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesCollection, _super);
    function DataSeriesCollection() {
        return _super.call(this, DataSeries.$, 0) || this;
    }
    DataSeriesCollection.$t = markType(DataSeriesCollection, 'DataSeriesCollection', ObservableCollection$1.$.specialize(DataSeries.$));
    return DataSeriesCollection;
}(ObservableCollection$1));
export { DataSeriesCollection };
//# sourceMappingURL=DataSeriesCollection.js.map