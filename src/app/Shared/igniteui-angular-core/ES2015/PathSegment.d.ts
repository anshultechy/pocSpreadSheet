import { Base, Type } from "./type";
import { PathSegmentType } from "./PathSegmentType";
/**
 * @hidden
 */
export declare abstract class PathSegment extends Base {
    static $t: Type;
    abstract readonly a: PathSegmentType;
}