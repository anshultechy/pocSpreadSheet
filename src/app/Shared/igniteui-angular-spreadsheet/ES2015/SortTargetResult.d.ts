import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetTable, Worksheet, WorksheetRegionAddress, WorksheetCellAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { SortContext } from "./SortContext";
/**
 * @hidden
 */
export declare class SortTargetResult extends Base {
    static $t: Type;
    readonly e: WorksheetTable;
    readonly d: WorksheetRegionAddress;
    readonly b: Worksheet;
    readonly c: WorksheetCellAddress;
    readonly g: number;
    readonly a: SortContext;
    readonly f: boolean;
    constructor(a: WorksheetTable, b: Worksheet, c: WorksheetRegionAddress, d: WorksheetCellAddress, e: number, f: SortContext);
}
