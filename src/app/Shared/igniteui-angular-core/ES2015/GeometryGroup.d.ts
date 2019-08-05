import { Geometry } from "./Geometry";
import { GeometryCollection } from "./GeometryCollection";
import { GeometryType } from "./GeometryType";
import { FillRule } from "./FillRule";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class GeometryGroup extends Geometry {
    static $t: Type;
    constructor();
    c: GeometryCollection;
    protected get_a(): GeometryType;
    readonly a: GeometryType;
    b: FillRule;
}
