import { Base, IEqualityComparer$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetCellFormatData } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class WorksheetCellFormatDataEqualityComparer extends Base implements IEqualityComparer$1<WorksheetCellFormatData> {
    static $t: Type;
    static readonly _a: WorksheetCellFormatDataEqualityComparer;
    constructor();
    equalsC(a: WorksheetCellFormatData, b: WorksheetCellFormatData): boolean;
    getHashCodeC(a: WorksheetCellFormatData): number;
}
