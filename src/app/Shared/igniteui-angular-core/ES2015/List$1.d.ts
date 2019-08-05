import { Base, IList$1, IEnumerable$1, IEnumerable, IList, IEnumerator$1, IEnumerator, Type } from "./type";
import { IArray } from "./IArray";
import { IComparer$1 } from "./IComparer$1";
import { ReadOnlyCollection$1 } from "./ReadOnlyCollection$1";
/**
 * @hidden
 */
export declare class List$1<T> extends Base implements IList$1<T>, IArray, IList {
    static $t: Type;
    protected $t: Type;
    _inner: T[];
    private readonly c;
    constructor($t: Type, a: number);
    constructor($t: Type, a: number, b: IEnumerable$1<T>);
    constructor($t: Type, a: number, b: number);
    constructor($t: Type, a: number, ..._rest: any[]);
    protected x(a: number, b: T): void;
    protected r(a: number, b: T): void;
    protected n(a: T): void;
    protected u(a: number): void;
    protected p(): void;
    item(a: number, b?: T): T;
    indexOf(a: T): number;
    indexOf2(a: T, b: number): number;
    k(a: T): number;
    insert(a: number, b: T): void;
    removeAt(a: number): void;
    readonly count: number;
    readonly isReadOnly: boolean;
    add(a: T): void;
    clear(): void;
    contains(a: T): boolean;
    copyTo(a: T[], b: number): void;
    remove(a: T): boolean;
    getEnumerator(): IEnumerator$1<T>;
    getEnumeratorObject(): IEnumerator;
    asArray(): any[];
    private d;
    t(a: number, b: IEnumerable): void;
    s(a: number, b: IEnumerable$1<T>): void;
    v(index_: number, numToRemove_: number): void;
    copyTo1(a: any[], b: number): void;
    readonly isFixedSize: boolean;
    add1(a: any): number;
    contains1(a: any): boolean;
    indexOf1(a: any): number;
    insert1(a: number, b: any): void;
    remove1(a: any): void;
    y(): void;
    private ab;
    aa(compare_: (arg1: T, arg2: T) => number): void;
    h: number;
    o(a: IEnumerable$1<T>): void;
    toArray(): T[];
    q(a: (arg1: T) => void): void;
    readonly isSynchronized: boolean;
    private readonly m;
    readonly syncRoot: any;
    f(a: T): number;
    g(a: T, b: IComparer$1<T>): number;
    e(): ReadOnlyCollection$1<T>;
    w(): void;
    z(a: IComparer$1<T>): void;
    i(a: (obj: T) => boolean): number;
    l(a: (obj: T) => boolean): number;
}