import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * @hidden
 */
export declare class SpreadsheetEditModeExitedEventArgs extends EventArgs {
    static $t: Type;
    private _b;
    constructor(a: SpreadsheetCell);
    readonly cell: SpreadsheetCell;
}
