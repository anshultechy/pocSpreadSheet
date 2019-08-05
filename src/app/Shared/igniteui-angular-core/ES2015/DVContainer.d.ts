import { Base, Type } from "./type";
/**
 * @hidden
 */
export declare class DVContainer extends Base {
    static $t: Type;
    private d;
    private static a;
    static readonly instance: DVContainer;
    constructor();
    registerFactory(a: Type, b: () => any): void;
    createInstance(a: Type, b: () => string): any;
    registerIfLoaded(typeName_: string): void;
    checkLoaded(typeName_: string): boolean;
}
