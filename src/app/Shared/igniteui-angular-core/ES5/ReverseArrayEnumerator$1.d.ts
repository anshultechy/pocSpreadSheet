import { Base, IEnumerator$1, Type } from "./type";
import { ArrayBox$1 } from "./array";
/**
 * @hidden
 */
export declare class ReverseArrayEnumerator$1<T> extends Base implements IEnumerator$1<T> {
    static $t: Type;
    protected $t: Type;
    private b;
    private a;
    constructor($t: Type, a: ArrayBox$1<any>);
    readonly current: T;
    readonly currentObject: any;
    moveNext(): boolean;
    reset(): void;
    dispose(): void;
}