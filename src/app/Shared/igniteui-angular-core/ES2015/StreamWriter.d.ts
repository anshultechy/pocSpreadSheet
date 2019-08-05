import { TextWriter } from "./TextWriter";
import { Stream, Type } from "./type";
import { Encoding } from "./Encoding";
/**
 * @hidden
 */
export declare class StreamWriter extends TextWriter {
    static $t: Type;
    private a8;
    private a6;
    private ay;
    private au;
    private a0;
    private av;
    private a1;
    private ax;
    private az;
    static readonly a7: StreamWriter;
    constructor(a: number, b: Stream);
    constructor(a: number, b: Stream, c: Encoding);
    constructor(a: number, b: Stream, c: Encoding, d: number);
    constructor(a: number, ..._rest: any[]);
    bb(a: Encoding, b: number): void;
    protected get_aw(): boolean;
    protected set_aw(a: boolean): void;
    aw: boolean;
    protected get_a5(): Stream;
    readonly a5: Stream;
    protected get_h(): Encoding;
    readonly h: Encoding;
    protected dispose1(a: boolean): void;
    k(): void;
    private ba;
    private a9;
    m(a: string[], b: number, c: number): void;
    private bc;
    private bd;
    o(a: string): void;
    l(a: string[]): void;
    v(a: string): void;
    i(): void;
}
