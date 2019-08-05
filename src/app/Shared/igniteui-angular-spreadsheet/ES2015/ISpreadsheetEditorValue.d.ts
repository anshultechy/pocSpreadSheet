import { WorksheetCellFormatData } from "../../igniteui-angular-excel/ES2015/excel.core";
import { IGFormattedTextDocument } from "./IGFormattedTextDocument";
import { Type } from "../../igniteui-angular-core/ES2015/type";
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
