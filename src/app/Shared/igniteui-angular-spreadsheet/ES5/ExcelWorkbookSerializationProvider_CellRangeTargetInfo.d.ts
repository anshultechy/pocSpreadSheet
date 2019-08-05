import { Base, IEnumerable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { Workbook, WorksheetRegionAddress, WorksheetTable } from "../../igniteui-angular-excel/ES5/excel.core";
import { CellRegionMapBase } from "./CellRegionMapBase";
import { HashSet$1 } from "../../igniteui-angular-core/ES5/HashSet$1";
/**
 * @hidden
 */
export declare class ExcelWorkbookSerializationProvider_CellRangeTargetInfo extends Base {
    static $t: Type;
    readonly e: Workbook;
    readonly d: CellRegionMapBase;
    private readonly a;
    private readonly b;
    readonly c: WorksheetRegionAddress[];
    constructor(a: Workbook, b: WorksheetRegionAddress[], c: CellRegionMapBase);
    i(a: number, b: number, c: number, d: WorksheetTable, e: string): void;
    f(): HashSet$1<string>;
    h(a: number, b: number, c: number): (arg1: string) => string;
    g(a: number, b: number, c: number): IEnumerable$1<string>;
}
