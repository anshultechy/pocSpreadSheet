import { Base, Type } from "./type";
import { QuadTreeBoundingBox } from "./QuadTreeBoundingBox";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { LinkedList$1 } from "./LinkedList$1";
import { QuadTreeForceVector } from "./QuadTreeForceVector";
/**
 * @hidden
 */
export declare class QuadTree extends Base {
    static $t: Type;
    constructor(a: number, b: number, c: number, d: number);
    private b;
    f: number;
    i: number;
    c(a: QuadTreeBoundingBox): boolean;
    d(a: QuadTreeBoundingBox): boolean;
    e(a: QuadTreeBoundingBox): List$1<QuadTreeNode>;
    j(): void;
    k(): void;
    g(): number;
    h(a: QuadTreeNode, b: HashSet$1<QuadTreeBoundingBox>): number;
    a(a: number, b: number, c: number): QuadTreeForceVector;
}
/**
 * @hidden
 */
export declare class QuadTreeNode extends Base {
    static $t: Type;
    constructor();
    k(a: QuadTreeBoundingBox): boolean;
    readonly j: boolean;
    x(a: QuadTreeBoundingBox, b: List$1<QuadTreeNode>): void;
    w(): void;
    i(a: QuadTreeBoundingBox): boolean;
    private y;
    z(): void;
    d(a: number, b: number, c: number): QuadTreeForceVector;
    b: QuadTree;
    l: LinkedList$1<QuadTreeBoundingBox>;
    t: number;
    c: QuadTreeBoundingBox;
    q: number;
    a: QuadTreeNode[];
    f: QuadTreeNode;
    e: QuadTreeNode;
    h: QuadTreeNode;
    g: QuadTreeNode;
    m: number;
    n: number;
    o: number;
}
