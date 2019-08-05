import { Base, Type } from "./type";
/**
 * @hidden
 */
export declare class FastReflectionHelper extends Base {
    static $t: Type;
    constructor(a: boolean, b: string);
    static needsHelper(a: string): boolean;
    private c;
    private _propertyName;
    propertyName: string;
    private a;
    private b;
    private d;
    private _index;
    private k;
    private n;
    private f;
    private _useTraditionalReflection;
    useTraditionalReflection: boolean;
    getPropertyValue(a: any): any;
    readonly invalid: boolean;
}