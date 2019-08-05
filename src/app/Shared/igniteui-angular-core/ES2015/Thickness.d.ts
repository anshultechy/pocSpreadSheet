import { Base, Type } from "./type";
/**
 * @hidden
 */
export declare class Thickness extends Base {
    static $t: Type;
    constructor(a: number, b: number);
    constructor(a: number, b: number, c: number, d: number, e: number);
    constructor(a: number, ..._rest: any[]);
    b: number;
    c: number;
    d: number;
    e: number;
    a(a: Thickness): boolean;
    toString(): string;
}
