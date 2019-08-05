import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { SpreadsheetDialogFormatCategory } from "./SpreadsheetDialogFormatCategory";
import { Workbook } from "../../igniteui-angular-excel/ES5/excel.core";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export interface ISpreadsheetDialogFormatsService {
    getFormatCategories(a: Workbook): List$1<SpreadsheetDialogFormatCategory>;
}
/**
 * @hidden
 */
export declare let ISpreadsheetDialogFormatsService_$type: Type;
