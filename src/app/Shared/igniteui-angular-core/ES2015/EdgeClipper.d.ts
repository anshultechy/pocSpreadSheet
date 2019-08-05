import { Base, IList$1, Point, IEnumerator, IEnumerator$1, Type } from "./type";
/**
 * @hidden
 */
export declare abstract class EdgeClipper extends Base implements IList$1<Point> {
    static $t: Type;
    i: IList$1<Point>;
    h: IList$1<Point>;
    _nextClipper: EdgeClipper;
    nextClipper: EdgeClipper;
    c: boolean;
    j: Point;
    l: Point;
    g: boolean;
    d: boolean;
    f: boolean;
    add(a: Point): void;
    clear(): void;
    protected abstract e(a: Point): boolean;
    abstract k(a: Point, b: Point): Point;
    getEnumeratorObject(): IEnumerator;
    getEnumerator(): IEnumerator$1<Point>;
    readonly isReadOnly: boolean;
    readonly count: number;
    remove(a: Point): boolean;
    removeAt(a: number): void;
    copyTo(a: Point[], b: number): void;
    contains(a: Point): boolean;
    item(a: number, b?: Point): Point;
    insert(a: number, b: Point): void;
    indexOf(a: Point): number;
}