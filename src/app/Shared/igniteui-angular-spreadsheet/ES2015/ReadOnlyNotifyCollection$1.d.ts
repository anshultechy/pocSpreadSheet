import { Base, IList$1, INotifyPropertyChanged, IEnumerator$1, PropertyChangedEventArgs, IEnumerator, Type } from "../../igniteui-angular-core/ES2015/type";
import { INotifyCollectionChanged } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { ISupportPropertyChangeNotifications } from "./ISupportPropertyChangeNotifications";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
import { ITypedPropertyChangeListener$2 } from "./ITypedPropertyChangeListener$2";
/**
 * @hidden
 */
export declare class ReadOnlyNotifyCollection$1<T> extends Base implements IList$1<T>, INotifyCollectionChanged, ISupportPropertyChangeNotifications, INotifyPropertyChanged {
    static $t: Type;
    protected $t: Type;
    private c;
    private a;
    constructor($t: Type, a: IList$1<T>);
    collectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void;
    item(a: number, b?: T): T;
    contains(a: T): boolean;
    copyTo(a: T[], b: number): void;
    getEnumerator(): IEnumerator$1<T>;
    indexOf(a: T): number;
    private h;
    private i;
    j(a: NotifyCollectionChangedEventArgs, b: boolean): void;
    k(): void;
    l(a: PropertyChangedEventArgs, b: boolean): void;
    m(a: IList$1<T>): void;
    private f;
    e(): void;
    readonly count: number;
    readonly isReadOnly: boolean;
    protected readonly d: IList$1<T>;
    private readonly b;
    private g;
    insert(a: number, b: T): void;
    removeAt(a: number): void;
    add(a: T): void;
    clear(): void;
    remove(a: T): boolean;
    getEnumeratorObject(): IEnumerator;
    addListener(a: ITypedPropertyChangeListener$2<any, string>, b: boolean): void;
    removeListener(a: ITypedPropertyChangeListener$2<any, string>): void;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
}
