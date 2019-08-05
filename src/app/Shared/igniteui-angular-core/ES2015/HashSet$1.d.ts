import { Base, ICollection$1, IEnumerable$1, IEnumerable, IEqualityComparer$1, IEnumerator$1, IEnumerator, Type } from "./type";
/**
 * @hidden
 */
export declare class HashSet$1<T> extends Base implements ICollection$1<T>, IEnumerable$1<T>, IEnumerable {
    static $t: Type;
    protected $t: Type;
    private k;
    private n;
    private _values;
    private c;
    private _stringPlaceholder;
    private b;
    constructor($t: Type, a: number);
    constructor($t: Type, a: number, b: IEnumerable$1<T>);
    constructor($t: Type, a: number, b: IEqualityComparer$1<T>);
    constructor($t: Type, a: number, b: IEnumerable$1<T>, c: IEqualityComparer$1<T>);
    constructor($t: Type, a: number, ..._rest: any[]);
    add(a: T): void;
    readonly isReadOnly: boolean;
    getEnumeratorObject(): IEnumerator;
    readonly l: IEqualityComparer$1<T>;
    readonly count: number;
    add_1(item_: T): boolean;
    clear(): void;
    contains(item_: T): boolean;
    copyTo1(a: T[]): void;
    copyTo(a: T[], b: number): void;
    copyTo2(a: T[], b: number, c: number): void;
    static m<T>($t: Type): IEqualityComparer$1<HashSet$1<T>>;
    r(a: IEnumerable$1<T>): void;
    getEnumerator(): IEnumerator$1<T>;
    s(a: IEnumerable$1<T>): void;
    e(a: IEnumerable$1<T>): boolean;
    f(a: IEnumerable$1<T>): boolean;
    g(a: IEnumerable$1<T>): boolean;
    h(a: IEnumerable$1<T>): boolean;
    t(a: any): void;
    i(a: IEnumerable$1<T>): boolean;
    remove(item_: T): boolean;
    j(a: IEnumerable$1<T>): boolean;
    u(a: IEnumerable$1<T>): void;
    v(): void;
    w(a: IEnumerable$1<T>): void;
}