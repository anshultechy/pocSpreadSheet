import { Base, IList$1, IEnumerable$1, IList, IEnumerator$1, IEnumerator, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class WeakList$1<T> extends Base implements IList$1<T>, IList {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type);
    private _b;
    readonly count: number;
    item(a: number, b?: T): T;
    readonly syncRoot: any;
    _add(a: T): number;
    _d(a: IEnumerable$1<T>): void;
    clear(): void;
    _e(): void;
    contains(a: T): boolean;
    copyTo(a: T[], b: number): void;
    getEnumerator(): IEnumerator$1<T>;
    indexOf(a: T): number;
    insert(a: number, b: T): void;
    remove(a: T): boolean;
    removeAt(a: number): void;
    _f(a: number, b: number): void;
    private _g;
    private _a;
    getEnumeratorObject(): IEnumerator;
    add(a: T): void;
    readonly isReadOnly: boolean;
    add1(a: any): number;
    contains1(a: any): boolean;
    copyTo1(a: any[], b: number): void;
    indexOf1(a: any): number;
    readonly isFixedSize: boolean;
    readonly isReadOnly1: boolean;
    remove1(a: any): void;
    readonly isSynchronized: boolean;
}
/**
 * @hidden
 */
export declare class WeakList_Enumerator$1<T> extends Base implements IEnumerator$1<T> {
    static $t: Type;
    protected $t: Type;
    private _a;
    private _b;
    private _c;
    constructor($t: Type, a: WeakList$1<T>);
    readonly current: T;
    moveNext(): boolean;
    reset(): void;
    readonly currentObject: any;
    dispose(): void;
}
