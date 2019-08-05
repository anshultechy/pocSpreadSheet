import { Base, Point, Type } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export declare class InterpolationUtil extends Base {
    static $t: Type;
    static a(a: List$1<Point>, b: number, c: List$1<Point>, d: List$1<Point>): List$1<Point>;
    static b<T>($t: Type, a: List$1<T>, b: number, c: List$1<T>, d: List$1<T>, e: () => T, f: (arg1: number, arg2: number, arg3: T, arg4: T) => T): List$1<T>;
}
