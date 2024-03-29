import { Base, IList$1, IEnumerator$1, IEnumerator, Type } from "./type";
/**
 * @hidden
 */
export declare class RearrangedList$1<T> extends Base implements IList$1<T> {
    static $t: Type;
    protected $t: Type;
    private b;
    private a;
    constructor($t: Type, a: IList$1<T>, b: IList$1<number>);
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
    private _getEnumerator;
    getEnumerator(): IEnumerator$1<T>;
    private _getEnumeratorObject;
    getEnumeratorObject(): IEnumerator;
}
