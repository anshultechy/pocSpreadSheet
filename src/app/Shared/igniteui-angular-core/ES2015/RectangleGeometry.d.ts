import { Geometry } from "./Geometry";
import { Rect } from "./Rect";
import { GeometryType } from "./GeometryType";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class RectangleGeometry extends Geometry {
    static $t: Type;
    d: Rect;
    b: number;
    c: number;
    protected get_a(): GeometryType;
    readonly a: GeometryType;
}
