import { DependencyObject } from "./DependencyObject";
import { IList$1, Type } from "./type";
import { List$1 } from "./List$1";
import { Triangle } from "./Triangle";
import { TriangulationStatusEventArgs } from "./TriangulationStatusEventArgs";
/**
 * @hidden
 */
export declare class Triangulator extends DependencyObject {
    static $t: Type;
    private o;
    private l;
    private m;
    constructor(a: number, b: IList$1<number>, c: IList$1<number>);
    y(): void;
    x(): void;
    private v;
    private t;
    private s;
    n(): List$1<Triangle>;
    private k;
    private w;
    r(): void;
    private u;
    private p;
    readonly q: number;
    triangulationStatusChanged: (sender: any, args: TriangulationStatusEventArgs) => void;
}