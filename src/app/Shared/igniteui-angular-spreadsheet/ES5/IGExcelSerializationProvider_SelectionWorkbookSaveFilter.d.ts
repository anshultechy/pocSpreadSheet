import { WorkbookSaveFilter, Worksheet, WorksheetRow, WorksheetMergedCellsRegion, Sheet, Workbook } from "../../igniteui-angular-excel/ES5/excel.core";
import { WorkbookDataObjectSaveContext } from "./WorkbookDataObjectSaveContext";
import { IEnumerable$1, IList$1, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class IGExcelSerializationProvider_SelectionWorkbookSaveFilter extends WorkbookSaveFilter {
    static $t: Type;
    private f;
    constructor(a: WorkbookDataObjectSaveContext);
    d(a: Worksheet): number;
    e(a: Worksheet): number;
    private _a;
    a(a: Worksheet): IEnumerable$1<WorksheetMergedCellsRegion>;
    b(a: Worksheet, b: boolean): IEnumerable$1<WorksheetRow>;
    c(a: Workbook): IList$1<Sheet>;
    private k;
    private l;
    private _h;
    private h;
    private _i;
    private i;
    private static j;
    private g;
}
