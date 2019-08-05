import { Base, IList$1, Nullable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { LoadMathOperation } from "./LoadMathOperation";
import { Formula, WorksheetRow, Worksheet, Workbook, WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { WorkbookDataObjectLoadContext } from "./WorkbookDataObjectLoadContext";
import { WorkbookDataObjectSaveContext } from "./WorkbookDataObjectSaveContext";
/**
 * @hidden
 */
export declare abstract class WorkbookSerializationProviderBase extends Base {
    static $t: Type;
    private static readonly a;
    constructor(a: number, ...b: string[]);
    constructor(a: number, b: string[], c: string[]);
    constructor(a: number, ..._rest: any[]);
    e: IList$1<string>;
    f: IList$1<string>;
    protected b(a: LoadMathOperation, b: number, c: Formula, d: WorksheetRow, e: number): boolean;
    abstract c(a: WorkbookDataObjectLoadContext): boolean;
    private static i;
    protected static g(a: Workbook, b: any): number;
    j(a: WorkbookDataObjectLoadContext): string;
    abstract d(a: WorkbookDataObjectSaveContext): boolean;
    static h(a: Worksheet[], b: WorksheetRegionAddress[]): Nullable$1<WorksheetRegionAddress>;
}
