import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetRegionAddress, Worksheet, WorksheetCellAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class TableExpansionInfo extends Base {
    static $t: Type;
    private d;
    private b;
    private c;
    constructor();
    private static e;
    static a(a: Worksheet[], b: WorksheetRegionAddress[]): TableExpansionInfo;
    static f(a: Worksheet[], b: WorksheetRegionAddress[], c: WorksheetCellAddress): boolean;
    g(): void;
}
