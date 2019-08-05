import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * @hidden
 */
export declare class SpreadsheetActiveCellChangedEventArgs extends EventArgs {
    static $t: Type;
    private readonly _c;
    private readonly _b;
    constructor(a: SpreadsheetCell, b: SpreadsheetCell);
    readonly newValue: SpreadsheetCell;
    readonly oldValue: SpreadsheetCell;
}
