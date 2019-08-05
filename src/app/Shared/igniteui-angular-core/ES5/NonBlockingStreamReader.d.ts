import { TextReader } from "./TextReader";
import { Encoding } from "./Encoding";
import { Stream, Type } from "./type";
/**
 * @hidden
 */
export declare class NonBlockingStreamReader extends TextReader {
    static $t: Type;
    private l;
    private k;
    private p;
    private u;
    private o;
    private z;
    private x;
    private w;
    private n;
    private ab;
    constructor(a: Stream, b: Encoding);
    private y;
    readonly aa: Encoding;
    i(): void;
    protected dispose1(a: boolean): void;
    ac(): void;
    private v;
    a(): number;
    b(): number;
    c(a: string[], b: number, c: number): number;
    private m;
    private s;
    g(): string;
    h(): string;
}
