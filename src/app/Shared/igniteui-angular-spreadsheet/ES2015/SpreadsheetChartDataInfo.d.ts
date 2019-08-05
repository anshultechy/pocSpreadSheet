import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { Worksheet, Workbook, IWorksheetRegionAddressContext, IChartObject } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class SpreadsheetChartDataInfo extends Base {
    static $t: Type;
    private c;
    private readonly b;
    private readonly g;
    private readonly h;
    constructor(a: Workbook);
    readonly d: boolean;
    readonly e: boolean;
    private i;
    j(): void;
    k(a: Worksheet, b: number, c: number): void;
    l(): void;
    m(a: Worksheet, b: IWorksheetRegionAddressContext): void;
    private a;
    f(a: IChartObject): boolean;
    private n;
}
