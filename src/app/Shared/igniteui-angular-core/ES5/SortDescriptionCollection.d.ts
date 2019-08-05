import { Base, IList$1, Type } from "./type";
import { SyncableObservableCollection$1 } from "./SyncableObservableCollection$1";
import { SortDescription } from "./SortDescription";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
export declare class SortDescriptionCollection extends Base {
    static $t: Type;
    g(): SyncableObservableCollection$1<SortDescription>;
    private d;
    syncTarget: SortDescriptionCollection;
    private f;
    constructor();
    add(a: SortDescription): boolean;
    insert(a: number, b: SortDescription): void;
    clear(): void;
    get(a: number): SortDescription;
    indexOf(a: SortDescription): number;
    remove(a: SortDescription): boolean;
    removeAt(a: number): SortDescription;
    set(a: number, b: SortDescription): SortDescription;
    size(): number;
    n(a: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void;
    q(a: (sender: any, e: NotifyCollectionChangedEventArgs) => void): void;
    onChanged: () => void;
    readonly k: IList$1<SortDescription>;
}