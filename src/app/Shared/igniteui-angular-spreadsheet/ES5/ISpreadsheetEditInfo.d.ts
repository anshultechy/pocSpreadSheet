import { Workbook } from "../../igniteui-angular-excel/ES5/excel.core";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export interface ISpreadsheetEditInfo {
    readonly workbook: Workbook;
    readonly isFixedDecimalEnabled: boolean;
    readonly fixedDecimalPlaceCount: number;
}
/**
 * @hidden
 */
export declare let ISpreadsheetEditInfo_$type: Type;
