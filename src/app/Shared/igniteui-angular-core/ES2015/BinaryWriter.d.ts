import { Base, IDisposable, Stream, SeekOrigin, Type } from "./type";
import { Encoding } from "./Encoding";
/**
 * @hidden
 */
export declare class BinaryWriter extends Base implements IDisposable {
    static $t: Type;
    private readonly b;
    private readonly d;
    constructor(a: number);
    constructor(a: number, b: Stream);
    constructor(a: number, b: Stream, c: Encoding);
    constructor(a: number, ..._rest: any[]);
    protected get_c(): Stream;
    readonly c: Stream;
    e(): void;
    dispose(): void;
    protected disposeCore(a: boolean): void;
    g(): void;
    a(a: number, b: SeekOrigin): number;
    l(a: boolean): void;
    m(a: number): void;
    h(a: number[]): void;
    n(a: string): void;
    i(a: string[]): void;
    o(a: number): void;
    t(a: number): void;
    q(a: number): void;
    r(a: number): void;
    s(a: number): void;
    p(a: number): void;
    u(a: string): void;
    w(a: number): void;
    x(a: number): void;
    v(a: number): void;
    j(a: number[], b: number, c: number): void;
    k(a: string[], b: number, c: number): void;
    protected y(a: number): void;
}
