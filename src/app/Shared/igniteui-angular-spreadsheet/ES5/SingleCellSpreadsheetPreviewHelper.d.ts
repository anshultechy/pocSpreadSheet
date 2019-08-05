import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { Workbook, HorizontalCellAlignment, VerticalCellAlignment, CellFill } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class SingleCellSpreadsheetPreviewHelper extends Base {
    static $t: Type;
    static a(a: number, b: number, c?: HorizontalCellAlignment, d?: VerticalCellAlignment, e?: boolean): Workbook;
    static e(a: any, b: Workbook): void;
    static d(a: HTMLElement, b: any): void;
    static c(a: string, b: Workbook): void;
    static b(a: HTMLElement, b: string): void;
    static f(a: CellFill, b: Workbook): void;
    static g(a: HTMLElement, b: CellFill): void;
}
