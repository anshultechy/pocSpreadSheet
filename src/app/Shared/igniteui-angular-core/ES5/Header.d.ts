import { Base, Point, Type } from "./type";
import { ShapeType } from "./ShapeType";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { XBaseField } from "./XBaseField";
/**
 * @hidden
 */
export declare class Header extends Base {
    static $t: Type;
    a: ShapeType;
    e: Rect;
    readonly d: Point;
    readonly c: Point;
    b: List$1<XBaseField>;
}
