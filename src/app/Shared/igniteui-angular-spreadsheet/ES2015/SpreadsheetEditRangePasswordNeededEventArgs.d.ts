import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { WorksheetProtectedRange, Worksheet } from "../../igniteui-angular-excel/ES2015/excel.core";
import { IList$1, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class SpreadsheetEditRangePasswordNeededEventArgs extends CancelEventArgs {
    static $t: Type;
    private _e;
    private _f;
    private _g;
    constructor(a: IList$1<WorksheetProtectedRange>, b: IList$1<Worksheet>);
    readonly ranges: WorksheetProtectedRange[];
    private _i;
    private _j;
    _getRangesArray(): WorksheetProtectedRange[];
    unprotect(): void;
}
