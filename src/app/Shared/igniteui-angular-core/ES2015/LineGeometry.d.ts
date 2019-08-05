import { Geometry } from "./Geometry";
import { Point, Type } from "./type";
import { GeometryType } from "./GeometryType";
/**
 * @hidden
 */
export declare class LineGeometry extends Geometry {
    static $t: Type;
    c: Point;
    b: Point;
    protected get_a(): GeometryType;
    readonly a: GeometryType;
}
