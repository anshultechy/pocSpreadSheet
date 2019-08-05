import { CellRegionMapBase } from "./CellRegionMapBase";
import { IComparer$1 } from "../../igniteui-angular-core/ES2015/IComparer$1";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { IntRange } from "./IntRange";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class CellRegionMapMany extends CellRegionMapBase implements IComparer$1<WorksheetRegionAddress> {
    static $t: Type;
    private _q;
    private _m;
    private _n;
    private _s;
    private _r;
    private _p;
    private _o;
    constructor(a: WorksheetRegionAddress[]);
    g(a: number): number;
    h(a: number): number;
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
    private static _t;
    private static _u;
    compare(a: WorksheetRegionAddress, b: WorksheetRegionAddress): number;
}
