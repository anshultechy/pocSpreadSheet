import { Base, IList$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetEditInfo } from "./ISpreadsheetEditInfo";
import { WorkbookSerializationLoadCategories } from "./WorkbookSerializationLoadCategories";
import { WorkbookSerializationLoadOptions } from "./WorkbookSerializationLoadOptions";
import { IDataObject } from "../../igniteui-angular-core/ES2015/IDataObject";
import { Worksheet, Workbook, WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { LoadMathOperation } from "./LoadMathOperation";
import { WorkbookSerializationLoadError } from "./WorkbookSerializationLoadError";
/**
 * @hidden
 */
export declare class WorkbookDataObjectLoadContext extends Base implements ISpreadsheetEditInfo {
    static $t: Type;
    private n;
    private c;
    constructor(a: Workbook, b: IDataObject, c: WorkbookSerializationLoadOptions);
    readonly b: WorkbookSerializationLoadCategories;
    o: IDataObject;
    k: string;
    readonly f: boolean;
    readonly a: LoadMathOperation;
    readonly g: boolean;
    private _workbook;
    workbook: Workbook;
    j(a: string): any;
    l(a: string): string;
    e(a: string): boolean;
    m(a: WorkbookSerializationLoadError): void;
    h(a: number): boolean;
    i(a: IList$1<Worksheet>, b: IList$1<WorksheetRegionAddress>, c: boolean): boolean;
    readonly isFixedDecimalEnabled: boolean;
    readonly fixedDecimalPlaceCount: number;
}
