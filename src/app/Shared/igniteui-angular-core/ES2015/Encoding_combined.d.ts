import { Base, Type } from "./type";
import { Decoder } from "./Decoder";
/**
 * @hidden
 */
export declare abstract class Encoding extends Base {
    static $t: Type;
    private static t;
    static readonly uTF8: Encoding;
    private static s;
    static readonly uTF8Unmarked: Encoding;
    private static r;
    static readonly unicode: Encoding;
    getString1(a: number[], b: number, c: number): string;
    abstract getBytes2(a: string[], b: number, c: number, d: number[], e: number): number;
    getBytes(a: string[], b: number, c: number): number[];
    getBytes1(a: string): number[];
    abstract getByteCount(a: string[], b: number, c: number): number;
    getString(a: number[]): string;
    getCharCount(a: number[]): number;
    getCharCount1(a: number[], b: number, c: number): number;
    getChars(a: number[], b: number, c: number, d: string[], e: number): number;
    private static p;
    static readonly aSCII: Encoding;
    getDecoder(): Decoder;
    getBytes3(a: string, b: number, c: number, d: number[], e: number): number;
    getMaxCharCount(a: number): number;
    getMaxByteCount(a: number): number;
    getPreamble(): number[];
    private static q;
    static readonly bigEndianUnicode: Encoding;
    static readonly defaultValue: Encoding;
    static getEncoding(a: string): Encoding;
    protected get_webName(): string;
    readonly webName: string;
}
/**
 * @hidden
 */
export declare class UnicodeEncoding extends Encoding {
    static $t: Type;
    private readonly ab;
    getString1(bytes_: number[], a: number, b: number): string;
    getCharCount1(a: number[], b: number, c: number): number;
    getBytes(a: string[], b: number, c: number): number[];
    getBytes1(a: string): number[];
    constructor(a: number);
    constructor(a: number, b: boolean, c: boolean);
    constructor(a: number, ..._rest: any[]);
    getMaxByteCount(a: number): number;
    getMaxCharCount(a: number): number;
    getBytes3(a: string, b: number, c: number, d: number[], e: number): number;
    getByteCount(a: string[], b: number, c: number): number;
    getBytes2(a: string[], b: number, c: number, d: number[], e: number): number;
    getChars(a: number[], b: number, c: number, d: string[], e: number): number;
}
/**
 * @hidden
 */
export declare class UTF8Encoding extends Encoding {
    static $t: Type;
    constructor(a: number, b: boolean, c: boolean);
    constructor(a: number);
    constructor(a: number, ..._rest: any[]);
    getString1(a: number[], b: number, c: number): string;
    getCharCount1(a: number[], b: number, c: number): number;
    getByteCount(a: string[], b: number, c: number): number;
    getBytes2(chars_: string[], charIndex_: number, charCount_: number, a: number[], b: number): number;
    getBytes(a: string[], b: number, c: number): number[];
    getBytes1(input_: string): number[];
    getChars(a: number[], b: number, c: number, d: string[], e: number): number;
    getDecoder(): Decoder;
    getMaxByteCount(a: number): number;
    getMaxCharCount(a: number): number;
}
/**
 * @hidden
 */
export declare class UTF8Encoding_UTF8Decoder extends Decoder {
    static $t: Type;
    private g;
    private h;
    private i;
    private j;
    private readonly k;
    constructor(a: Encoding);
    a(a: number[], b: number, c: number): number;
    b(a: number[], b: number, c: number, d: boolean): number;
    c(a: number[], b: number, c: number, d: string[], e: number): number;
    d(a: number[], b: number, c: number, d: string[], e: number, f: boolean): number;
}
/**
 * @hidden
 */
export declare class AsciiEncoding extends Encoding {
    static $t: Type;
    constructor(a: number, b: boolean, c: boolean);
    constructor(a: number);
    constructor(a: number, ..._rest: any[]);
    getString1(bytes_: number[], a: number, b: number): string;
    getCharCount1(a: number[], b: number, c: number): number;
    getByteCount(a: string[], b: number, c: number): number;
    getBytes2(a: string[], b: number, c: number, d: number[], e: number): number;
    getBytes(a: string[], b: number, c: number): number[];
    getBytes1(input_: string): number[];
    getChars(bytes_: number[], byteIndex_: number, a: number, b: string[], c: number): number;
}
/**
 * @hidden
 */
export declare class DefaultDecoder extends Decoder {
    static $t: Type;
    private readonly g;
    constructor(a: Encoding);
    a(a: number[], b: number, c: number): number;
    b(a: number[], b: number, c: number, d: boolean): number;
    c(a: number[], b: number, c: number, d: string[], e: number): number;
    d(a: number[], b: number, c: number, d: string[], e: number, f: boolean): number;
}
