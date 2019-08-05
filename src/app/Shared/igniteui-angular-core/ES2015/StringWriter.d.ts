import { TextWriter } from "./TextWriter";
import { Encoding } from "./Encoding";
import { StringBuilder } from "./StringBuilder";
import { IFormatProvider, Type } from "./type";
/**
 * @hidden
 */
export declare class StringWriter extends TextWriter {
    static $t: Type;
    private aw;
    private au;
    constructor(a: number);
    constructor(a: number, b: IFormatProvider);
    constructor(a: number, b: StringBuilder);
    constructor(a: number, b: StringBuilder, c: IFormatProvider);
    constructor(a: number, ..._rest: any[]);
    protected get_h(): Encoding;
    readonly h: Encoding;
    i(): void;
    protected dispose1(a: boolean): void;
    av(): StringBuilder;
    toString(): string;
    o(a: string): void;
    v(a: string): void;
    m(a: string[], b: number, c: number): void;
}