import { Base, IList$1, IEnumerable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { WorksheetProtectedRange, Worksheet } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class LockedEditRangeInfoForOperation extends Base {
    static $t: Type;
    private d;
    private f;
    constructor();
    readonly c: IList$1<LockedEditRangeInfoForWorksheet>;
    b(): boolean;
    e(a: boolean): List$1<WorksheetProtectedRange>;
    a(a: Worksheet): LockedEditRangeInfoForWorksheet;
}
/**
 * @hidden
 */
export declare class LockedEditRangeInfoForWorksheet extends Base {
    static $t: Type;
    private readonly a;
    readonly b: Worksheet;
    private f;
    private i;
    private c;
    constructor(a: LockedEditRangeInfoForOperation, b: Worksheet);
    readonly g: IEnumerable$1<WorksheetProtectedRange>;
    readonly d: boolean;
    readonly h: IEnumerable$1<WorksheetProtectedRange>;
    j(a: IList$1<WorksheetProtectedRange>): void;
    k(): void;
    e(a: number, b: number): boolean;
}
