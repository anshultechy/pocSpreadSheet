import { Geometry } from "./Geometry";
import { Point, Type } from "./type";
import { GeometryType } from "./GeometryType";
/**
 * @hidden
 */
export declare class EllipseGeometry extends Geometry {
    static $t: Type;
    d: Point;
    b: number;
    c: number;
    protected get_a(): GeometryType;
    readonly a: GeometryType;
}
