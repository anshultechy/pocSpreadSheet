import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetTable } from "../../igniteui-angular-excel/ES2015/excel.core";
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
