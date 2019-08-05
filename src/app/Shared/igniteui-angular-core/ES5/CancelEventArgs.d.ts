import { EventArgs, Type } from "./type";
/**
 * @hidden
 */
export declare class CancelEventArgs extends EventArgs {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: boolean);
    constructor(a: number, ..._rest: any[]);
    private _cancel;
    cancel: boolean;
}