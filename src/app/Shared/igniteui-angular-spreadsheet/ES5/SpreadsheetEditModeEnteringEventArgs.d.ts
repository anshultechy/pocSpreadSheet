import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class SpreadsheetEditModeEnteringEventArgs extends CancelEventArgs {
    static $t: Type;
    private _c;
    constructor(a: SpreadsheetCell);
    readonly cell: SpreadsheetCell;
}
