import { Base, IEnumerable$1, IEnumerator, IEnumerator$1, Type } from "./type";
/**
 * @hidden
 */
export declare class Stack$1<T> extends Base implements IEnumerable$1<T> {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type);
    private c;
    h(a: T): void;
    d(): T;
    e(): T;
    readonly f: number;
    g(): void;
    b(a: T): boolean;
    getEnumeratorObject(): IEnumerator;
    getEnumerator(): IEnumerator$1<T>;
    a(): T[];
}