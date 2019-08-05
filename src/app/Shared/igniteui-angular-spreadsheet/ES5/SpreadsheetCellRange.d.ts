import { ValueType, IEquatable$1, IList$1, Nullable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { CellReferenceMode } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * Represents a range of one or more cells.
 */
export declare class SpreadsheetCellRange extends ValueType implements IEquatable$1<SpreadsheetCellRange> {
    static $t: Type;
    constructor(firstRow: number, firstColumn: number);
    constructor(firstRow: number, firstColumn: number, lastRow: number, lastColumn: number);
    constructor(address: string);
    constructor();
    constructor(..._rest: any[]);
    static empty: SpreadsheetCellRange;
    private _t;
    private _w;
    private _u;
    private _x;
    private _v;
    static staticInit(): void;
    /**
     * Compares the value of this SheetCellRange instance to the specified [[SpreadsheetCellRange]].
     * @param other The instance of the [[SpreadsheetCellRange]] to compare
     * @return True if the specified SheetCellRange has the same [[firstRow]], [[lastRow]], [[firstColumn]] and [[lastColumn]]; otherwise false.
     */
    equals(other: SpreadsheetCellRange): boolean;
    /**
     * Compares the specified [[SpreadsheetCellRange]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCellRange with the same [[firstRow]], [[lastRow]], [[firstColumn]] and [[lastColumn]].
     */
    equals(obj: any): boolean;
    /**
     * Compares the specified [[SpreadsheetCellRange]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCellRange with the same [[firstRow]], [[lastRow]], [[firstColumn]] and [[lastColumn]].
     */
    equals1(obj: any): boolean;
    /**
     * Returns a hash value for the [[SpreadsheetCellRange]]
     * @return A hash value for the SheetCellRange
     */
    getHashCode(): number;
    /**
     * Returns a string representation of the [[SpreadsheetCellRange]]
     * @return A string representation of the row and column indices.
     */
    toString(): string;
    /**
     * Returns a string representation of the range using the specified mode.
     * @param mode An enumeration used to indicate how references are represented
     * @return A string containing the upper left cell if this is a single cell otherwise a string containing the upper left and lower right cells.
     */
    toString(mode: CellReferenceMode): string;
    /**
     * @hidden
     */
    _toString(): string;
    /**
     * Returns the index of the first column in the range.
     */
    readonly firstColumn: number;
    /**
     * Returns the index of the first row in the range.
     */
    readonly firstRow: number;
    /**
     * @hidden
     */
    readonly _aa: number;
    /**
     * Returns a boolean indicating if the range represents a single cell.
     */
    readonly isSingleCell: boolean;
    /**
     * Returns a boolean indicating if the structure represents a valid range.
     */
    readonly isEmpty: boolean;
    /**
     * Returns the index of the last column in the range.
     */
    readonly lastColumn: number;
    /**
     * Returns the index of the last row in the range.
     */
    readonly lastRow: number;
    /**
     * @hidden
     */
    readonly _b: SpreadsheetCell;
    /**
     * @hidden
     */
    readonly _c: SpreadsheetCell;
    /**
     * @hidden
     */
    readonly _ad: number;
    /**
     * Returns a boolean indicating if the specified cell is within the range.
     * @param cell The cell to evaluate
     * @return Returns true if the cell is within the range; otherwise false.
     */
    contains(cell: SpreadsheetCell): boolean;
    /**
     * Returns a boolean indicating if the specified range is completely within this range.
     * @param range The range to evaluate
     * @return Returns true if the range is within this range; otherwise false.
     */
    contains(range: SpreadsheetCellRange): boolean;
    /**
     * Returns a boolean indicating if the specified cell is within the range.
     * @param row The row to evaluate
     * @param column The column to evaluate
     * @return Returns true if the cell is within the range; otherwise false.
     */
    contains(row: number, column: number): boolean;
    /**
     * @hidden
     */
    _contains2(a: number, b: number): boolean;
    /**
     * @hidden
     */
    _contains(a: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    _contains1(a: SpreadsheetCellRange): boolean;
    /**
     * Returns a range that represents the common area within the current and specified range.
     * @param range The range to intersect with.
     * @return A range that represents the common area between the current and specified range or [[SpreadsheetCellRange.empty]] if there is no overlap.
     */
    intersect(range: SpreadsheetCellRange): SpreadsheetCellRange;
    /**
     * Returns a boolean indicating if the current and specified range overlap.
     * @param range The range to compare with.
     * @return Returns true if the ranges have at least 1 row and column in common; otherwise false.
     */
    intersectsWith(range: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    _toString1(a: CellReferenceMode): string;
    /**
     * @hidden
     */
    _af(a: CellReferenceMode, b: boolean): string;
    /**
     * Returns a range that contains the contains the current and specified range.
     * @param range The range to combine with.
     * @return A range that is large enough to contain the current and specified range.
     */
    union(range: SpreadsheetCellRange): SpreadsheetCellRange;
    /**
     * @hidden
     */
    static _a(n: string): SpreadsheetCellRange[];
    /**
     * @hidden
     */
    static _j(n: IList$1<SpreadsheetCellRange>): boolean;
    /**
     * @hidden
     */
    static _ag(n: IList$1<SpreadsheetCellRange>, o: CellReferenceMode, p?: string): string;
    /**
     * @hidden
     */
    private static _ah;
    /**
     * @hidden
     */
    _equals(n: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    static l_op_Equality(d1: SpreadsheetCellRange, d2: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    static l_op_Equality_Lifted(d1: SpreadsheetCellRange | null, d2: SpreadsheetCellRange | null): boolean;
    /**
     * @hidden
     */
    static _l_op_Equality_Lifted$i(n: Nullable$1<SpreadsheetCellRange>, o: Nullable$1<SpreadsheetCellRange>): boolean;
    /**
     * @hidden
     */
    static l_op_Inequality(d1: SpreadsheetCellRange, d2: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    static l_op_Inequality_Lifted(d1: SpreadsheetCellRange | null, d2: SpreadsheetCellRange | null): boolean;
    /**
     * @hidden
     */
    static _l_op_Inequality_Lifted$i(n: Nullable$1<SpreadsheetCellRange>, o: Nullable$1<SpreadsheetCellRange>): boolean;
}
