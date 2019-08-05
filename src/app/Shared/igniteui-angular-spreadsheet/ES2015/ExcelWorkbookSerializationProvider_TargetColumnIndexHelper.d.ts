import { Base, IList$1, IEnumerable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCellRange } from "./SpreadsheetCellRange";
import { CellRegionMapBase } from "./CellRegionMapBase";
import { IntRange } from "./IntRange";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { WorksheetRow } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class ExcelWorkbookSerializationProvider_TargetColumnIndexHelper extends Base {
    static $t: Type;
    private readonly c;
    private readonly b;
    private readonly a;
    private readonly d;
    private readonly e;
    constructor(a: SpreadsheetCellRange, b: CellRegionMapBase, c: boolean, d: boolean);
    i(a: WorksheetRow): List$1<IntRange>;
    h(): IList$1<IntRange>;
    private _f;
    f(a: WorksheetRow, b: WorksheetRow): IEnumerable$1<IntRange>;
    private _g;
    private g;
    private static j;
}
