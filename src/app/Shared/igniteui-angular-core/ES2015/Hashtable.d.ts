import { Base, IDictionary, IEnumerable$1, Type } from "./type";
/**
 * @hidden
 */
export declare class Hashtable extends Base implements IDictionary {
    static $t: Type;
    private b;
    constructor();
    readonly c: IEnumerable$1<string>;
    f(a: string): void;
    e(a: string, b: any): void;
    a(a: string): boolean;
    item(a: string, b?: any): any;
}