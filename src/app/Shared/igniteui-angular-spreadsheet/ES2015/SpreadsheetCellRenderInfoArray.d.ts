import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCellRenderInfo } from "./SpreadsheetCellRenderInfo";
import { CellFill, CellDataBarInfo, CellBorderLineStyle } from "../../igniteui-angular-excel/ES2015/excel.core";
import { CellDiagonalBorder } from "./CellDiagonalBorder";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
/**
 * @hidden
 */
export declare class SpreadsheetCellRenderInfoArray extends Base {
    static $t: Type;
    private a;
    private static b;
    constructor(a: number, b: number);
    readonly e: number;
    readonly f: number;
    item(a: number, b: number): SpreadsheetCellRenderInfo;
    g(a: number, b: number, c: number, d: number): void;
    h(a: number, b: number): void;
    p(a: number, b: number, c: CellBorderLineStyle, d: Color): void;
    m(a: number, b: number, c: CellBorderLineStyle, d: Color): void;
    i(a: number, b: number, c: CellFill): void;
    k(a: number, b: number, c: CellDataBarInfo): void;
    l(a: number, b: number, c: CellDiagonalBorder, d: CellBorderLineStyle, e: Color): void;
    n(a: number, b: number, c: number): void;
    o(a: number, b: number, c: number): void;
    q(a: number, b: number, c: number): void;
    j(a: number, b: number, c: number): void;
    private c;
}
