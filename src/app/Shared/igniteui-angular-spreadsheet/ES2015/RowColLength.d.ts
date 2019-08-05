import { ValueType, Type } from "../../igniteui-angular-core/ES2015/type";
import { RowColUnitType } from "./RowColUnitType";
/**
 * @hidden
 */
export declare class RowColLength extends ValueType {
    static $t: Type;
    constructor(a: number, b: number);
    constructor(a: number, b: number, c: RowColUnitType);
    constructor();
    constructor(a: number, ..._rest: any[]);
    private h;
    private c;
    private static readonly b;
    readonly e: boolean;
    readonly f: boolean;
    readonly g: boolean;
    readonly d: RowColUnitType;
    static readonly a: RowColLength;
    readonly i: number;
    private static j;
}
