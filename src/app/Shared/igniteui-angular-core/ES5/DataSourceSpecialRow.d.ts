import { Base, Type } from "./type";
import { DataSourceRowType } from "./DataSourceRowType";
/**
 * @hidden
 */
export declare class DataSourceSpecialRow extends Base {
    static $t: Type;
    $$isSpecialRow: boolean;
    private e;
    private d;
    private _rowType;
    rowType: DataSourceRowType;
    private _targetRow;
    targetRow: any;
    getValue(a: string): any;
    getSectionValue(a: string): any;
    setValue(a: string, b: any): void;
    setSectionValue(a: string, b: any): void;
    getSectionKeys(): string[];
}
