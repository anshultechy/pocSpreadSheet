import { Base, IEnumerator$1, Type } from "./type";
/**
 * @hidden
 */
export declare class GenericEnumerator$1<T> extends Base implements IEnumerator$1<T> {
    static $t: Type;
    protected $t: Type;
    private a;
    constructor($t: Type, a: any);
    readonly current: T;
    readonly currentObject: any;
    moveNext(): boolean;
    reset(): void;
    dispose(): void;
}