import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
import { DataSeries } from './DataSeries';
export declare class DataSeriesCollection extends IgCollection<DataSeries, DataSeries> {
    constructor(list?: DataSeries[]);
    protected _createInnerColl(): SyncableObservableCollection$2<DataSeries, DataSeries>;
}
