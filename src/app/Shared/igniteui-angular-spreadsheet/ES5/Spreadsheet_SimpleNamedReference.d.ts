import { ValueType, IComparable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { NamedReference, WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class Spreadsheet_SimpleNamedReference extends ValueType implements IComparable$1<Spreadsheet_SimpleNamedReference> {
    static $t: Type;
    constructor(a: number, b: NamedReference, c: WorksheetRegionAddress);
    constructor();
    constructor(a: number, ..._rest: any[]);
    readonly _a: NamedReference;
    readonly _b: WorksheetRegionAddress;
    compareTo(a: Spreadsheet_SimpleNamedReference): number;
}
