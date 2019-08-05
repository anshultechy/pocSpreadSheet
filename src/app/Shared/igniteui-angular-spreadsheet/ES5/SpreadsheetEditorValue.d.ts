import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { ISpreadsheetEditorValue } from "./ISpreadsheetEditorValue";
import { WorksheetCellFormatData } from "../../igniteui-angular-excel/ES5/excel.core";
import { IGFormattedTextDocument } from "./IGFormattedTextDocument";
/**
 * @hidden
 */
export declare class SpreadsheetEditorValue extends Base implements ISpreadsheetEditorValue {
    static $t: Type;
    private b;
    private a;
    constructor(a: string, b: WorksheetCellFormatData);
    readonly editCellFormat: WorksheetCellFormatData;
    readonly unformattedText: string;
    createDocument(): IGFormattedTextDocument;
}
