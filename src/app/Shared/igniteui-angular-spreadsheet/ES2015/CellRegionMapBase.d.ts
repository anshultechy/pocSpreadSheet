import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { IntRange } from "./IntRange";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare abstract class CellRegionMapBase extends Base {
    static $t: Type;
    f(a: WorksheetRegionAddress): boolean;
    abstract d(): CellRegionMapBase;
    abstract g(a: number): number;
    abstract h(a: number): number;
    e(a: number, b: number): WorksheetRegionAddress;
    abstract j(a: number): number;
    abstract i(a: number): number;
    abstract readonly a: IntRange[];
    abstract readonly c: IntRange[];
    abstract readonly b: WorksheetRegionAddress[];
    abstract readonly l: number;
    abstract readonly k: number;
}
