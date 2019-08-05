import { Geometry } from "./Geometry";
import { PathFigureCollection } from "./PathFigureCollection";
import { GeometryType } from "./GeometryType";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PathGeometry extends Geometry {
    static $t: Type;
    constructor();
    b: PathFigureCollection;
    protected get_a(): GeometryType;
    readonly a: GeometryType;
}
