import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetEditorValue } from "./ISpreadsheetEditorValue";
import { WorksheetCellFormatData } from "../../igniteui-angular-excel/ES2015/excel.core";
import { IGFormattedTextDocument } from "./IGFormattedTextDocument";
/**
 * @hidden
 */
export declare class PlainTextWorkbookSerializationProvider_ParseEditValue extends Base implements ISpreadsheetEditorValue {
    static $t: Type;
    a: WorksheetCellFormatData;
    b: string;
    createDocument(): IGFormattedTextDocument;
    readonly unformattedText: string;
    readonly editCellFormat: WorksheetCellFormatData;
}
