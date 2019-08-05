import { Base, IEnumerator, Type } from "./type";
/**
 * @hidden
 */
export declare class AbstractEnumerator extends Base implements IEnumerator {
    static $t: Type;
    private a;
    constructor(a: any);
    readonly currentObject: any;
    moveNext(): boolean;
    reset(): void;
}