import { Base, IEnumerable$1, IEnumerator$1, IEnumerator, Type } from "./type";
import { HalfEdge } from "./HalfEdge";
/**
 * @hidden
 */
export declare class HalfEdgeSet extends Base implements IEnumerable$1<HalfEdge> {
    static $t: Type;
    constructor();
    getEnumerator(): IEnumerator$1<HalfEdge>;
    getEnumeratorObject(): IEnumerator;
    d(a: HalfEdge): void;
    f(a: HalfEdge): void;
    e(): void;
    readonly c: number;
    a(a: HalfEdge): boolean;
    private b;
}