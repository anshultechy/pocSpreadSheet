import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { Worksheet } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class SpreadsheetActiveWorksheetChangedEventArgs extends EventArgs {
    static $t: Type;
    private readonly _c;
    private readonly _b;
    constructor(a: Worksheet, b: Worksheet);
    readonly newValue: Worksheet;
    readonly oldValue: Worksheet;
}
