import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
/**
 * @hidden
 */
export interface ISpreadsheetDialog {
    close(a: boolean): void;
    closing: (sender: any, e: CancelEventArgs) => void;
    closed: (sender: any, e: EventArgs) => void;
}
/**
 * @hidden
 */
export declare let ISpreadsheetDialog_$type: Type;
