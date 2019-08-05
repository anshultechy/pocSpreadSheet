import { EdgeClipper } from "./EdgeClipper";
import { Point, Type } from "./type";
/**
 * @hidden
 */
export declare class RightClipper extends EdgeClipper {
    static $t: Type;
    m: number;
    protected e(a: Point): boolean;
    k(a: Point, b: Point): Point;
}