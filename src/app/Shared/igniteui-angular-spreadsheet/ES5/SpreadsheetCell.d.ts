import { ValueType, IEquatable$1, Nullable$1, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Represents a single cell in the [[Spreadsheet]]
 */
export declare class SpreadsheetCell extends ValueType implements IEquatable$1<SpreadsheetCell> {
    static $t: Type;
    constructor(row: number, column: number);
    constructor(address: string);
    constructor();
    constructor(..._rest: any[]);
    private _g;
    private _h;
    static staticInit(): void;
    /**
     * Compares the value of this SheetCell instance to the specified [[SpreadsheetCell]].
     * @param other The instance of the [[SpreadsheetCell]] to compare
     * @return True if the specified SheetCell has the same [[row]] and [[column]]; otherwise false.
     */
    equals(other: SpreadsheetCell): boolean;
    /**
     * Compares the specified [[SpreadsheetCell]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCell with the same [[row]] and [[column]].
     */
    equals(obj: any): boolean;
    /**
     * Compares the specified [[SpreadsheetCell]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCell with the same [[row]] and [[column]].
     */
    equals1(obj: any): boolean;
    /**
     * Returns a hash value for the [[SpreadsheetCell]]
     * @return A hash value for the SheetCell
     */
    getHashCode(): number;
    /**
     * Returns a string representation of the [[SpreadsheetCell]]
     * @return A string representation row and column index.
     */
    toString(): string;
    /**
     * Returns the index of the row
     */
    readonly row: number;
    /**
     * Returns the index of the column.
     */
    readonly column: number;
    /**
     * @hidden
     */
    private static _k;
    /**
     * @hidden
     */
    _equals(a: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    static l_op_Equality(d1: SpreadsheetCell, d2: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    static l_op_Equality_Lifted(d1: SpreadsheetCell | null, d2: SpreadsheetCell | null): boolean;
    /**
     * @hidden
     */
    static _l_op_Equality_Lifted$i(a: Nullable$1<SpreadsheetCell>, b: Nullable$1<SpreadsheetCell>): boolean;
    /**
     * @hidden
     */
    static l_op_Inequality(d1: SpreadsheetCell, d2: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    static l_op_Inequality_Lifted(d1: SpreadsheetCell | null, d2: SpreadsheetCell | null): boolean;
    /**
     * @hidden
     */
    static _l_op_Inequality_Lifted$i(a: Nullable$1<SpreadsheetCell>, b: Nullable$1<SpreadsheetCell>): boolean;
}
