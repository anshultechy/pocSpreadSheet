import { WorksheetCellFormatData } from "../../igniteui-angular-excel/ES5/excel.core";
import { IGFormattedTextDocument } from "./IGFormattedTextDocument";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export interface ISpreadsheetEditorValue {
    createDocument(): IGFormattedTextDocument;
    readonly unformattedText: string;
    readonly editCellFormat: WorksheetCellFormatData;
}
/**
 * @hidden
 */
export declare let ISpreadsheetEditorValue_$type: Type;
