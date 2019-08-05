import { Base, IList$1, Type } from "../../igniteui-angular-core/ES5/type";
import { WorkbookSerializationLoadCategories } from "./WorkbookSerializationLoadCategories";
import { LoadMathOperation } from "./LoadMathOperation";
import { Worksheet, WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class WorkbookSerializationLoadOptions extends Base {
    static $t: Type;
    constructor();
    b: WorkbookSerializationLoadCategories;
    g: number;
    c: boolean;
    a: LoadMathOperation;
    d: boolean;
    e: (arg1: number) => boolean;
    f: (arg1: IList$1<Worksheet>, arg2: IList$1<WorksheetRegionAddress>, arg3: boolean) => boolean;
}
