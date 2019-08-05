import { Base, Type } from "./type";
import { GeometryType } from "./GeometryType";
/**
 * @hidden
 */
export declare abstract class Geometry extends Base {
    static $t: Type;
    constructor();
    abstract readonly a: GeometryType;
}
