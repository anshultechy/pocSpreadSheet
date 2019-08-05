import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { CellFill, CellBorderLineStyle, CellDataBarInfo } from "../../igniteui-angular-excel/ES5/excel.core";
import { CellDiagonalBorder } from "./CellDiagonalBorder";
/**
 * @hidden
 */
export declare class SpreadsheetCellRenderInfo extends Base {
    static $t: Type;
    f: CellFill;
    d: CellBorderLineStyle;
    m: Color;
    e: CellBorderLineStyle;
    n: Color;
    k: number;
    h: number;
    i: number;
    j: number;
    g: CellDataBarInfo;
    c: CellBorderLineStyle;
    l: Color;
    a: CellDiagonalBorder;
    static b(): SpreadsheetCellRenderInfo;
}
