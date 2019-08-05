import { Base, Type } from "./type";
/**
 * @hidden
 */
export declare class WeakReference extends Base {
    static $t: Type;
    private b;
    constructor(a: any);
    protected get_a(): boolean;
    readonly a: boolean;
    protected get_c(): any;
    protected set_c(a: any): void;
    c: any;
}
