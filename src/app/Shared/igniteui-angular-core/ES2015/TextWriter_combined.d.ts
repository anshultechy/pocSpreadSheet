import { MarshalByRefObject } from "./MarshalByRefObject";
import { IDisposable, IFormatProvider, Type } from "./type";
import { Encoding } from "./Encoding";
/**
 * @hidden
 */
export declare abstract class TextWriter extends MarshalByRefObject implements IDisposable {
    static $t: Type;
    static staticInit(): void;
    constructor(a: number);
    constructor(a: number, b: IFormatProvider);
    constructor(a: number, ..._rest: any[]);
    protected a: string[];
    c: IFormatProvider;
    static d: TextWriter;
    abstract readonly h: Encoding;
    protected get_b(): IFormatProvider;
    readonly b: IFormatProvider;
    protected get_g(): string;
    protected set_g(a: string): void;
    g: string;
    i(): void;
    protected dispose1(a: boolean): void;
    dispose(): void;
    k(): void;
    static e(a: TextWriter): TextWriter;
    static f(a: TextWriter, b: boolean): TextWriter;
    n(a: boolean): void;
    o(a: string): void;
    l(a: string[]): void;
    p(a: number): void;
    q(a: number): void;
    r(a: number): void;
    s(a: number): void;
    t(a: any): void;
    u(a: number): void;
    v(a: string): void;
    aa(a: number): void;
    ab(a: number): void;
    x(a: string, b: any): void;
    w(a: string, ...b: any[]): void;
    m(a: string[], b: number, c: number): void;
    y(a: string, b: any, c: any): void;
    z(a: string, b: any, c: any, d: any): void;
    ac(): void;
    af(a: boolean): void;
    ag(a: string): void;
    ad(a: string[]): void;
    ah(a: number): void;
    ai(a: number): void;
    aj(a: number): void;
    ak(a: number): void;
    al(a: any): void;
    am(a: number): void;
    an(a: string): void;
    as(a: number): void;
    at(a: number): void;
    ap(a: string, b: any): void;
    ao(a: string, ...b: any[]): void;
    ae(a: string[], b: number, c: number): void;
    aq(a: string, b: any, c: any): void;
    ar(a: string, b: any, c: any, d: any): void;
}
/**
 * @hidden
 */
export declare class TextWriter_NullTextWriter extends TextWriter {
    static $t: Type;
    constructor();
    protected get_h(): Encoding;
    readonly h: Encoding;
    v(a: string): void;
    o(a: string): void;
    m(a: string[], b: number, c: number): void;
}
/**
 * @hidden
 */
export declare class SynchronizedWriter extends TextWriter {
    static $t: Type;
    private av;
    private au;
    constructor(a: number, b: TextWriter);
    constructor(a: number, b: TextWriter, c: boolean);
    constructor(a: number, ..._rest: any[]);
    i(): void;
    k(): void;
    n(a: boolean): void;
    o(a: string): void;
    l(a: string[]): void;
    p(a: number): void;
    r(a: number): void;
    s(a: number): void;
    t(a: any): void;
    u(a: number): void;
    v(a: string): void;
    aa(a: number): void;
    ab(a: number): void;
    x(a: string, b: any): void;
    w(a: string, ...b: any[]): void;
    m(a: string[], b: number, c: number): void;
    y(a: string, b: any, c: any): void;
    z(a: string, b: any, c: any, d: any): void;
    ac(): void;
    af(a: boolean): void;
    ag(a: string): void;
    ad(a: string[]): void;
    ah(a: number): void;
    ai(a: number): void;
    aj(a: number): void;
    ak(a: number): void;
    al(a: any): void;
    am(a: number): void;
    an(a: string): void;
    as(a: number): void;
    at(a: number): void;
    ap(a: string, b: any): void;
    ao(a: string, ...b: any[]): void;
    ae(a: string[], b: number, c: number): void;
    aq(a: string, b: any, c: any): void;
    ar(a: string, b: any, c: any, d: any): void;
    protected get_h(): Encoding;
    readonly h: Encoding;
    protected get_b(): IFormatProvider;
    protected get_g(): string;
    protected set_g(a: string): void;
}
