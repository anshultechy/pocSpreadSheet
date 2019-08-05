import { Workbook } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Type } from "../../igniteui-angular-core/ES2015/type";
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
