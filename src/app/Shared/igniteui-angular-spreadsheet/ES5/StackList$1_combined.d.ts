import { Base, IEnumerable$1, ICollection, IList$1, INotifyPropertyChanged, IEnumerator$1, PropertyChangedEventArgs, IEnumerator, Type } from "../../igniteui-angular-core/ES5/type";
import { INotifyCollectionChanged } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
export declare class StackList$1<T> extends Base implements IEnumerable$1<T>, ICollection, INotifyCollectionChanged, IList$1<T>, INotifyPropertyChanged {
    static $t: Type;
    protected $t: Type;
    private g;
    e: List$1<T>;
    h: number;
    constructor($t: Type, a: number);
    readonly count: number;
    j: number;
    clear(): void;
    contains(a: T): boolean;
    getEnumerator(): IEnumerator$1<T>;
    b(a: number): T;
    private l;
    private m;
    c(): T;
    d(): T;
    n(a: T): void;
    o(a: (arg1: T) => boolean): void;
    a(): T[];
    indexOf(a: T): number;
    insert(a: number, b: T): void;
    removeAt(a: number): void;
    item(a: number, b?: T): T;
    add(a: T): void;
    copyTo1(a: T[], b: number): void;
    readonly isReadOnly: boolean;
    remove(a: T): boolean;
    copyTo(a: any[], b: number): void;
    readonly isSynchronized: boolean;
    readonly syncRoot: any;
    getEnumeratorObject(): IEnumerator;
    collectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
}
/**
 * @hidden
 */
export declare class StackList_Enumerator$1<T> extends Base implements IEnumerator$1<T> {
    static $t: Type;
    protected $t: Type;
    private a;
    private d;
    private c;
    private b;
    constructor($t: Type, a: StackList$1<T>);
    moveNext(): boolean;
    readonly current: T;
    reset(): void;
    dispose(): void;
    readonly currentObject: any;
}
