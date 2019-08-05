import { Base, IList$1, Point, Type } from "./type";
import { Rect } from "./Rect";
/**
 * @hidden
 */
export declare class Clipper extends Base {
    static $t: Type;
    i: IList$1<Point>;
    private g;
    private b;
    private h;
    private c;
    private a;
    private d;
    private e;
    constructor(a: number, b: Rect, c: boolean);
    constructor(a: number, b: number, c: number, d: number, e: number, f: boolean);
    constructor(a: number, ..._rest: any[]);
    j(a: Point): void;
    k(a: IList$1<Point>, b: boolean): void;
    f: boolean;
}
