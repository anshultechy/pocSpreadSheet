import { Base, IList$1, ICollection$1, IEnumerable$1, IEnumerable, IList, ICollection, INotifyPropertyChanged, PropertyChangedEventArgs, IEnumerator, IEnumerator$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { INotifyCollectionChanged } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { ISupportPropertyChangeNotifications } from "./ISupportPropertyChangeNotifications";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
import { ITypedPropertyChangeListener$2 } from "./ITypedPropertyChangeListener$2";
/**
 * @hidden
 */
export declare abstract class LazyReadOnlyNotifyCollection$1<T> extends Base implements IList$1<T>, ICollection$1<T>, IEnumerable$1<T>, IList, ICollection, IEnumerable, INotifyCollectionChanged, INotifyPropertyChanged, ISupportPropertyChangeNotifications {
    static $t: Type;
    protected $t: Type;
    private _e;
    private _b;
    private _a;
    _g: number;
    constructor($t: Type);
    item(a: number, b?: T): T;
    protected readonly _d: IList$1<T>;
    protected readonly _c: boolean;
    _i(a: any, b: string, c: any): void;
    _m(a: any, b: string, c: any): void;
    protected _h(): void;
    protected _k(a: NotifyCollectionChangedEventArgs): void;
    protected _l(a: string): void;
    protected _j(): void;
    _n(): void;
    protected abstract _o(a: IList$1<T>): void;
    addListener(a: ITypedPropertyChangeListener$2<any, string>, b: boolean): void;
    removeListener(a: ITypedPropertyChangeListener$2<any, string>): void;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    collectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void;
    getEnumeratorObject(): IEnumerator;
    getEnumerator(): IEnumerator$1<T>;
    add(a: T): void;
    clear(): void;
    contains(a: T): boolean;
    copyTo(a: T[], b: number): void;
    protected get_count(): number;
    readonly count: number;
    readonly isReadOnly: boolean;
    remove(a: T): boolean;
    indexOf(a: T): number;
    insert(a: number, b: T): void;
    copyTo1(a: any[], b: number): void;
    readonly isSynchronized: boolean;
    readonly syncRoot: any;
    add1(a: any): number;
    contains1(a: any): boolean;
    indexOf1(a: any): number;
    insert1(a: number, b: any): void;
    readonly isFixedSize: boolean;
    remove1(a: any): void;
    removeAt(a: number): void;
}
/**
 * @hidden
 */
export declare class LazyReadOnlyNotifyCollection_Enumerator$1<T> extends Base implements IEnumerator$1<T> {
    static $t: Type;
    protected $t: Type;
    private _a;
    private _d;
    private _b;
    private _c;
    constructor($t: Type, a: LazyReadOnlyNotifyCollection$1<T>);
    private _e;
    dispose(): void;
    readonly currentObject: any;
    moveNext(): boolean;
    reset(): void;
    readonly current: T;
}
