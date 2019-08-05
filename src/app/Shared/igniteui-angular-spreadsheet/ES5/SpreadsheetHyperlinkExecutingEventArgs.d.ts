import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { WorksheetHyperlink } from "../../igniteui-angular-excel/ES5/excel.core";
import { Type } from "../../igniteui-angular-core/ES5/type";
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
