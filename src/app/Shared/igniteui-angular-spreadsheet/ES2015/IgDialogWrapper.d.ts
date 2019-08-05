import { Base, EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetDialog } from "./ISpreadsheetDialog";
import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
/**
 * @hidden
 */
export declare class IgDialogWrapper extends Base implements ISpreadsheetDialog {
    static $t: Type;
    private b;
    private c;
    constructor(a: HTMLElement);
    closing: (sender: any, e: CancelEventArgs) => void;
    closed: (sender: any, e: EventArgs) => void;
    close(a: boolean): void;
    private e;
    private d;
    static a(a: HTMLElement, b: string, c?: boolean): IgDialogWrapper;
}
