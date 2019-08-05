import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { WorksheetCellFormatData, Worksheet } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare abstract class RowColumnBaseCellFormatEnumerator extends Base {
    static $t: Type;
    protected a: WorksheetCellFormatData;
    protected e: number;
    protected d: number;
    readonly b: WorksheetCellFormatData;
    readonly g: number;
    readonly f: number;
    abstract h(a: Worksheet, b: number, c: number, d: number): void;
    abstract c(): boolean;
}
