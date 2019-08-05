import { BaseError, Type } from "./type";
/**
 * @hidden
 */
export declare class InvalidOperationException extends BaseError {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: string);
    constructor(a: number, b: string, c: BaseError);
    constructor(a: number, ..._rest: any[]);
}
