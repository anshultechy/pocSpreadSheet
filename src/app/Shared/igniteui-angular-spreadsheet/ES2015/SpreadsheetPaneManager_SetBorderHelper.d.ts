import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCellRangeBorders } from "./SpreadsheetCellRangeBorders";
import { WorkbookColorInfo, CellBorderLineStyle, IWorksheetCellFormat, WorksheetCellFormatProxy, WorksheetRow, WorksheetCellFormatData, WorksheetMergedCellsRegion, WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class SpreadsheetPaneManager_SetBorderHelper extends Base {
    static $t: Type;
    private c;
    private b;
    private a;
    private f;
    private d;
    private e;
    constructor(a: SpreadsheetCellRangeBorders, b: WorkbookColorInfo, c: CellBorderLineStyle);
    g(a: IWorksheetCellFormat): void;
    h(a: WorksheetCellFormatProxy): void;
    i(a: WorksheetRow, b: WorksheetCellFormatData, c: number): void;
    j(a: IWorksheetCellFormat): void;
    k(a: IWorksheetCellFormat): void;
    l(a: WorksheetMergedCellsRegion, b: WorksheetRegionAddress, c: boolean, d: boolean): void;
    m(a: IWorksheetCellFormat): void;
    n(a: IWorksheetCellFormat): void;
    o(a: IWorksheetCellFormat): void;
}
