import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { SpreadsheetAction } from "./SpreadsheetAction";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class SpreadsheetCommandExecutingEventArgs extends CancelEventArgs {
    static $t: Type;
    private readonly _c;
    private readonly _e;
    private readonly _f;
    constructor(a: SpreadsheetAction, b: any, c: any);
    readonly command: SpreadsheetAction;
    readonly commandParameter: any;
    readonly sourceElement: any;
}
