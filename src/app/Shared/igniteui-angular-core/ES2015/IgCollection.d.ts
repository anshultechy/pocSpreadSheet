import { SyncableObservableCollection$2 } from './SyncableObservableCollection$2';
export declare abstract class IgCollection<T, T2> {
    item(index: number, value?: T): T;
    indexOf(item: T): number;
    insert(index: number, item: T): void;
    removeAt(index: number): void;
    readonly count: number;
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    remove(item: T): boolean;
    toArray(): T[];
    [Symbol.iterator](): IterableIterator<any>;
    private _setSyncTarget;
    private _isIgxCollection;
    private _inner;
    private _innerColl;
    private _createFrom;
    private _createTo;
    private _fromInner;
    protected _toExternal(item: T2): T;
    protected _ensureOuter(item: any): any;
    protected _splitOuter(item: string): string[];
    private _fromOuter;
    protected abstract _createInnerColl(): SyncableObservableCollection$2<T, T2>;
    constructor();
}
