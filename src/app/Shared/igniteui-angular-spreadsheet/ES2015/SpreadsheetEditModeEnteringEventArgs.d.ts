import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class SpreadsheetEditModeEnteringEventArgs extends CancelEventArgs {
    static $t: Type;
    private _c;
    constructor(a: SpreadsheetCell);
    readonly cell: SpreadsheetCell;
}
