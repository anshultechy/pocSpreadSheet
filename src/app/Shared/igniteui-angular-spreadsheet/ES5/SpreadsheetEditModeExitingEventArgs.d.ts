import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class SpreadsheetEditModeExitingEventArgs extends CancelEventArgs {
    static $t: Type;
    private _c;
    private _f;
    private _e;
    private _i;
    constructor(a: SpreadsheetCell, b: boolean, c: boolean, d: string);
    acceptChanges: boolean;
    readonly canCancel: boolean;
    readonly cell: SpreadsheetCell;
    readonly editText: string;
}
