import { IgCollection } from './IgCollection';
import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
export declare class ObjectCollection extends IgCollection<any, any> {
    constructor(list?: any[]);
    protected _createInnerColl(): SyncableObservableCollection$2<any, any>;
}