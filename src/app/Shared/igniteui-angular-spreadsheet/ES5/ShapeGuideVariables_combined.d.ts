import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
/**
 * @hidden
 */
export declare class ShapeGuideVariables extends Base {
    static $t: Type;
    f: number;
    e: number;
    readonly b: Dictionary$2<string, ShapeGuide>;
    private a;
    c(a: string): number;
    g(a: string, b: number): void;
    private d;
}
/**
 * @hidden
 */
export declare abstract class ShapeGuide extends Base {
    static $t: Type;
    readonly c: string;
    constructor(a: string);
    static a(a: string, b: string): ShapeGuide;
    abstract b(a: ShapeGuideVariables): number;
}
/**
 * @hidden
 */
export declare class ShapeGuide_ConstantShapeGuide extends ShapeGuide {
    static $t: Type;
    private readonly d;
    constructor(a: string, b: number);
    b(a: ShapeGuideVariables): number;
}
/**
 * @hidden
 */
export declare class ShapeGuide_ShapeGuide1 extends ShapeGuide {
    static $t: Type;
    private e;
    private d;
    constructor(a: string, b: string, c: (arg1: number) => number);
    b(a: ShapeGuideVariables): number;
}
/**
 * @hidden
 */
export declare class ShapeGuide_ShapeGuide2 extends ShapeGuide {
    static $t: Type;
    private e;
    private f;
    private d;
    constructor(a: string, b: string, c: string, d: (arg1: number, arg2: number) => number);
    b(a: ShapeGuideVariables): number;
}
/**
 * @hidden
 */
export declare class ShapeGuide_ShapeGuide3 extends ShapeGuide {
    static $t: Type;
    private e;
    private f;
    private g;
    private d;
    constructor(a: string, b: string, c: string, d: string, e: (arg1: number, arg2: number, arg3: number) => number);
    b(a: ShapeGuideVariables): number;
}
