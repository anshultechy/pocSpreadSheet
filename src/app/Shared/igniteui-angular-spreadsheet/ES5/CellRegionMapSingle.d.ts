import { CellRegionMapBase } from "./CellRegionMapBase";
import { IntRange } from "./IntRange";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class CellRegionMapSingle extends CellRegionMapBase {
    static $t: Type;
    private p;
    private r;
    private q;
    private n;
    private m;
    private o;
    constructor(a: WorksheetRegionAddress);
    f(a: WorksheetRegionAddress): boolean;
    g(a: number): number;
    h(a: number): number;
    e(a: number, b: number): WorksheetRegionAddress;
    j(a: number): number;
    i(a: number): number;
    protected get_a(): IntRange[];
    readonly a: IntRange[];
    protected get_c(): IntRange[];
    readonly c: IntRange[];
    protected get_b(): WorksheetRegionAddress[];
    readonly b: WorksheetRegionAddress[];
    protected get_l(): number;
    readonly l: number;
    protected get_k(): number;
    readonly k: number;
    d(): CellRegionMapBase;
}
