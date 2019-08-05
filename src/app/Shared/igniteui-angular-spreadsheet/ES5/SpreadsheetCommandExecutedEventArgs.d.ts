import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetAction } from "./SpreadsheetAction";
/**
 * @hidden
 */
export declare class SpreadsheetCommandExecutedEventArgs extends EventArgs {
    static $t: Type;
    private readonly _b;
    private readonly _d;
    private readonly _e;
    constructor(a: SpreadsheetAction, b: any, c: any);
    readonly command: SpreadsheetAction;
    readonly commandParameter: any;
    readonly sourceElement: any;
}
