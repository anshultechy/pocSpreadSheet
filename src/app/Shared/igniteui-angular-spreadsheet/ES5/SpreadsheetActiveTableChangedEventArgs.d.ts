import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
import { WorksheetTable } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class SpreadsheetActiveTableChangedEventArgs extends EventArgs {
    static $t: Type;
    private readonly _c;
    private readonly _b;
    constructor(a: WorksheetTable, b: WorksheetTable);
    readonly newValue: WorksheetTable;
    readonly oldValue: WorksheetTable;
}
