import * as tslib_1 from "tslib";
import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
import { markType } from './type';
import { DataSeries } from './DataSeries';
var DataSeriesCollection = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesCollection, _super);
    function DataSeriesCollection(list) {
        var _this = _super.call(this) || this;
        if (!DataSeries.$type) {
            DataSeries.$type = markType(DataSeries, "DataSeries");
        }
        if (list) {
            for (var i = 0; i < list.length; i++) {
                _this.add(list[i]);
            }
        }
        return _this;
    }
    DataSeriesCollection.prototype._createInnerColl = function () {
        if (!DataSeries.$type) {
            DataSeries.$type = markType(DataSeries, "DataSeries");
        }
        var coll = new SyncableObservableCollection$2(DataSeries.$type, DataSeries.$type, 0);
        coll.compare = function (ext, int) {
            var comp = ext;
            if (comp.equals) {
                return comp.equals(int);
            }
            return comp === int;
        };
        coll.createTo = function (ext) {
            return ext;
        };
        coll.createFrom = function (int) {
            return int;
        };
        return coll;
    };
    return DataSeriesCollection;
}(IgCollection));
export { DataSeriesCollection };
//# sourceMappingURL=igx-data-series-collection.js.map