import { PathSegment } from "./PathSegment";
import { Point, Type } from "./type";
import { SweepDirection } from "./SweepDirection";
import { Size } from "./Size";
import { PathSegmentType } from "./PathSegmentType";
/**
 * @hidden
 */
export declare class ArcSegment extends PathSegment {
    static $t: Type;
    constructor();
    e: Point;
    b: boolean;
    d: SweepDirection;
    f: Size;
    c: number;
    protected get_a(): PathSegmentType;
    readonly a: PathSegmentType;
}
