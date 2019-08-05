import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
import { markType } from './type';
import { DataSeries } from './DataSeries';
export class DataSeriesCollection extends IgCollection {
    constructor(list) {
        super();
        if (!DataSeries.$type) {
            DataSeries.$type = markType(DataSeries, "DataSeries");
        }
        if (list) {
            for (let i = 0; i < list.length; i++) {
                this.add(list[i]);
            }
        }
    }
    _createInnerColl() {
        if (!DataSeries.$type) {
            DataSeries.$type = markType(DataSeries, "DataSeries");
        }
        let coll = new SyncableObservableCollection$2(DataSeries.$type, DataSeries.$type, 0);
        coll.compare = (ext, int) => {
            let comp = ext;
            if (comp.equals) {
                return comp.equals(int);
            }
            return comp === int;
        };
        coll.createTo = (ext) => {
            return ext;
        };
        coll.createFrom = (int) => {
            return int;
        };
        return coll;
    }
}
//# sourceMappingURL=igx-data-series-collection.js.map