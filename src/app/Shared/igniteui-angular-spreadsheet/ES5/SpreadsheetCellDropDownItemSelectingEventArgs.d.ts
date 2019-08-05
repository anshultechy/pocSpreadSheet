import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
/**
 * @hidden
 */
export declare class SpreadsheetCellDropDownItemSelectingEventArgs extends EventArgs {
    static $t: Type;
    private _b;
    private _d;
    constructor(a: SpreadsheetCell, b: string);
    readonly _cell: SpreadsheetCell;
    readonly _selectedItem: string;
}
