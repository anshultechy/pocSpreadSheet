import { Base, Type } from "./type";
import { LinkedListNode$1 } from "./LinkedListNode$1";
/**
 * @hidden
 */
export declare class LinkedList$1<T> extends Base {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type);
    private a;
    readonly c: LinkedListNode$1<T>;
    private b;
    readonly d: LinkedListNode$1<T>;
    e(a: T): void;
    f(a: T): void;
    i(): void;
    g(): void;
    h(a: LinkedListNode$1<T>): void;
}
