import { PathSegment } from "./PathSegment";
import { PointCollection } from "./PointCollection";
import { PathSegmentType } from "./PathSegmentType";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PolyBezierSegment extends PathSegment {
    static $t: Type;
    constructor();
    b: PointCollection;
    protected get_a(): PathSegmentType;
    readonly a: PathSegmentType;
}
