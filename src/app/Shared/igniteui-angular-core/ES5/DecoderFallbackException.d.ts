import { ArgumentException } from "./ArgumentException";
import { BaseError, Type } from "./type";
/**
 * @hidden
 */
export declare class DecoderFallbackException extends ArgumentException {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: string);
    constructor(a: number, b: string, c: BaseError);
    constructor(a: number, b: string, c: number[], d: number);
    constructor(a: number, ..._rest: any[]);
    private c;
    private e;
    readonly bytesUnknown: number[];
    readonly index: number;
}
