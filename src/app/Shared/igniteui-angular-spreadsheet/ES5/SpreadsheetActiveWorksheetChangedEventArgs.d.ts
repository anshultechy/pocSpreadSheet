import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
import { Worksheet } from "../../igniteui-angular-excel/ES5/excel.core";
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
