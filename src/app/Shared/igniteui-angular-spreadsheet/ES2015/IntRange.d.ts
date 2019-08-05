import { ValueType, IEquatable$1, Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { IComparer$1 } from "../../igniteui-angular-core/ES2015/IComparer$1";
/**
 * @hidden
 */
export declare class IntRange extends ValueType implements IEquatable$1<IntRange> {
    static $t: Type;
    constructor(a: number, b: number, c: number);
    constructor();
    constructor(a: number, ..._rest: any[]);
    readonly _i: number;
    readonly _h: number;
    private static _d;
    private static _e;
    equals1(a: any): boolean;
    getHashCode(): number;
    toString(): string;
    static readonly _f: IComparer$1<IntRange>;
    static readonly _g: IComparer$1<IntRange>;
    _c(a: number): boolean;
    _j(a: IntRange): Nullable$1<IntRange>;
    _a(a: number): IntRange;
    _b(a: number): IntRange;
    equals(a: IntRange): boolean;
}
