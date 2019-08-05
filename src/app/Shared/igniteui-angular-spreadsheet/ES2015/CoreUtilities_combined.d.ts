import { Base, IList$1, IList, IEqualityComparer$1, IEnumerable$1, IEnumerator$1, IEnumerator, IEnumerable, Type, INotifyPropertyChanged, PropertyChangedEventArgs } from "../../igniteui-angular-core/ES2015/type";
import { IComparer$1 } from "../../igniteui-angular-core/ES2015/IComparer$1";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { WeakReference } from "../../igniteui-angular-core/ES2015/WeakReference";
import { INotifyCollectionChanged } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
export declare class CoreUtilities extends Base {
    static $t: Type;
    static j<T>($t: Type, a: IList): IList$1<T>;
    static c(a: number, b: number): boolean;
    static h(a: number, b: number): boolean;
    static e(a: number, b: number): boolean;
    static i(a: number, b: number): boolean;
    static f(a: number, b: number): boolean;
    static d<T>($t: Type, a: IList$1<T>, b: IList$1<T>, c?: IEqualityComparer$1<T>): boolean;
    static m<T>($t: Type, a: IList$1<T>, b: T, c: IComparer$1<T>, d: boolean): number;
    static n<TItem, TComparison>($tItem: Type, $tComparison: Type, a: IList$1<TItem>, b: (arg1: TItem, arg2: TComparison) => number, c: TComparison): number;
    static l(a: number, b: number, c: number): number;
    static s<T>($t: Type, a: IEnumerable$1<T>, b: T[], c: number): void;
    static r(a: IEnumerable, b: any[], c: number): void;
    static a<T>($t: Type, a: IEnumerable$1<T>): T;
    static b<T>($t: Type, a: IEnumerable, b: boolean): T;
    static k<T>($t: Type): List$1<T>;
    static q(a: Type): Type;
    static p(a: WeakReference): any;
    static g(a: IEnumerable): boolean;
    static t(): void;
    static v<T>($t: Type, a: List$1<T>, b: T): void;
    static u<T>($t: Type, a: IList$1<T>, b: T): void;
    private static o;
    static w(a: number): void;
    static x(a: number, b: string): void;
    static y(a: any): void;
    static z(a: any, b: string): void;
}
/**
 * @hidden
 */
export declare class CoreUtilities_TypedList$1<T> extends Base implements IList$1<T> {
    static $t: Type;
    protected $t: Type;
    private a;
    constructor($t: Type, a: IList);
    readonly b: IList;
    indexOf(a: T): number;
    insert(a: number, b: T): void;
    removeAt(a: number): void;
    item(a: number, b?: T): T;
    add(a: T): void;
    clear(): void;
    contains(a: T): boolean;
    copyTo(a: T[], b: number): void;
    readonly count: number;
    readonly isReadOnly: boolean;
    remove(a: T): boolean;
    getEnumerator(): IEnumerator$1<T>;
    getEnumeratorObject(): IEnumerator;
}
/**
 * @hidden
 */
export declare class CoreUtilities_ObservableTypedList$1<T> extends CoreUtilities_TypedList$1<T> implements INotifyCollectionChanged, INotifyPropertyChanged {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type, a: IList);
    private d;
    private c;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    collectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void;
}
