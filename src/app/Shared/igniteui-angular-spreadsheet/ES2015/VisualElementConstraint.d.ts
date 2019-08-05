import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { VisualElementThickness } from "./VisualElementThickness";
/**
 * @hidden
 */
export declare class VisualElementConstraint extends Base {
    static $t: Type;
    readonly k: number;
    readonly j: number;
    readonly m: number;
    readonly l: number;
    readonly n: number;
    readonly i: number;
    readonly b: VisualElementThickness;
    readonly c: VisualElementThickness;
    readonly a: VisualElementThickness;
    constructor(a: number, b: number, c: number, d: number, e: number, f: number, g: VisualElementThickness, h: VisualElementThickness, i: VisualElementThickness);
    e(a: number): number;
    f(a: number): number;
    g(a: number): number;
    h(a: number): number;
    d(a: number, b: number, c: number, d: number, e: (arg1: number, arg2: number, arg3: number, arg4: number) => boolean): boolean;
}
