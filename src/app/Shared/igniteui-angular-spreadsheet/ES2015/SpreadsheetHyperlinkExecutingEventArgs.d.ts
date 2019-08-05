import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { WorksheetHyperlink } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class SpreadsheetHyperlinkExecutingEventArgs extends CancelEventArgs {
    static $t: Type;
    private _c;
    constructor(a: WorksheetHyperlink);
    readonly hyperlink: WorksheetHyperlink;
    private _workingDirectory;
    workingDirectory: string;
}
