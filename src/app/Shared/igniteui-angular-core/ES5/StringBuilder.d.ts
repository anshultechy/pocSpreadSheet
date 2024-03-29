import { Base, IFormatProvider, Type } from "./type";
/**
 * @hidden
 */
export declare class StringBuilder extends Base {
    static $t: Type;
    private _internal;
    private internal;
    constructor(a: number);
    constructor(a: number, b: number);
    constructor(a: number, b: string);
    constructor(a: number, ..._rest: any[]);
    k(a: any): StringBuilder;
    l(str_: string): StringBuilder;
    n(a: StringBuilder): StringBuilder;
    h(chr_: string): StringBuilder;
    i(chr_: string, count_: number): StringBuilder;
    j(value_: number): StringBuilder;
    m(value_: string, startIndex_: number, count_: number): StringBuilder;
    g(value_: string[], startIndex_: number, charCount_: number): StringBuilder;
    t(): StringBuilder;
    u(str_: string): StringBuilder;
    v(): StringBuilder;
    w(index_: number, chr_: string): StringBuilder;
    x(index_: number, str_: string): StringBuilder;
    y(startIndex_: number, length_: number): StringBuilder;
    z(oldCh_: string, newCh_: string): StringBuilder;
    toString(): string;
    f(a: number, b: number): string;
    c: number;
    item(index_: number, a?: string): string;
    q(a: string, b: any): StringBuilder;
    p(a: string, ...b: any[]): StringBuilder;
    o(a: IFormatProvider, b: string, ...c: any[]): StringBuilder;
    r(a: string, b: any, c: any): StringBuilder;
    s(a: string, b: any, c: any, d: any): StringBuilder;
    b: number;
}
