import { SpreadsheetVisualDataBase } from "./SpreadsheetVisualDataBase";
import { IEnumerable, Type } from "../../igniteui-angular-core/ES2015/type";
import { RectData } from "../../igniteui-angular-core/ES2015/RectData";
import { PrimitiveVisualDataList } from "../../igniteui-angular-core/ES2015/PrimitiveVisualDataList";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * Represents the visual data for the spreadsheet.
 */
export declare class SpreadsheetVisualData extends SpreadsheetVisualDataBase {
    static $t: Type;
    constructor();
    private _cellAreas;
    /**
     * Returns or sets the visual data for the cell areas in the spreadsheet
     */
    /**
    * Returns or sets the visual data for the cell areas in the spreadsheet
    */
    cellAreas: SpreadsheetCellAreaVisualDataList;
    private _rowHeaderAreas;
    /**
     * Returns or sets the visual data for the row header areas in the spreadsheet
     */
    /**
    * Returns or sets the visual data for the row header areas in the spreadsheet
    */
    rowHeaderAreas: SpreadsheetHeaderAreaVisualDataList;
    private _columnHeaderAreas;
    /**
     * Returns or sets the visual data for the column header areas in the spreadsheet
     */
    /**
    * Returns or sets the visual data for the column header areas in the spreadsheet
    */
    columnHeaderAreas: SpreadsheetHeaderAreaVisualDataList;
    /**
     * Returns a string representation of the visual data
     */
    serialize(): string;
    /**
     * @hidden
     */
    static _f(a: any): string;
    /**
     * @hidden
     */
    static _e(a: IEnumerable): string;
    /**
     * @hidden
     */
    static _g(a: string[], b: any[]): string;
}
/**
 * Represents the visual data for a row or column header area within the spreadsheet
 */
export declare class SpreadsheetHeaderAreaVisualData extends SpreadsheetVisualDataBase {
    static $t: Type;
    constructor();
    private _relativeBounds;
    /**
     * The position of the area within the containing visual.
     */
    /**
    * The position of the area within the containing visual.
    */
    relativeBounds: RectData;
    private _items;
    /**
     * The visual information about the items in the header
     */
    /**
    * The visual information about the items in the header
    */
    items: SpreadsheetRowColumnVisualDataList;
    private _shapes;
    /**
     * The visual shape data of the header area.
     */
    /**
    * The visual shape data of the header area.
    */
    shapes: PrimitiveVisualDataList;
    /**
     * Returns a string representation of the visual data
     */
    serialize(): string;
}
/**
 * Represents the visual data for a list of row or column header areas within the spreadsheet
 */
export declare class SpreadsheetHeaderAreaVisualDataList extends List$1<SpreadsheetHeaderAreaVisualData> {
    static $t: Type;
    constructor();
}
/**
 * Represents the visual data for a cell area within the spreadsheet
 */
export declare class SpreadsheetCellAreaVisualData extends SpreadsheetVisualDataBase {
    static $t: Type;
    constructor();
    private _relativeBounds;
    /**
     * The position of the area within the containing visual.
     */
    /**
    * The position of the area within the containing visual.
    */
    relativeBounds: RectData;
    private _columns;
    /**
     * The visual information about the columns for the cells
     */
    /**
    * The visual information about the columns for the cells
    */
    columns: SpreadsheetRowColumnVisualDataList;
    private _rows;
    /**
     * The visual information about the rows for the cells
     */
    /**
    * The visual information about the rows for the cells
    */
    rows: SpreadsheetRowColumnVisualDataList;
    private _shapes;
    /**
     * The visual shape data of the header area.
     */
    /**
    * The visual shape data of the header area.
    */
    shapes: PrimitiveVisualDataList;
    /**
     * Returns a string representation of the visual data
     */
    serialize(): string;
}
/**
 * Represents the visual data for a list of cell areas within the spreadsheet
 */
export declare class SpreadsheetCellAreaVisualDataList extends List$1<SpreadsheetCellAreaVisualData> {
    static $t: Type;
    constructor();
}
/**
 * Represents the visual data for a row or column within the spreadsheet
 */
export declare class SpreadsheetRowColumnVisualData extends SpreadsheetVisualDataBase {
    static $t: Type;
    private _index;
    /**
     * The index of the associated row or column.
     */
    /**
    * The index of the associated row or column.
    */
    index: number;
    private _offset;
    /**
     * The start offset of the row or column within the containing visual.
     */
    /**
    * The start offset of the row or column within the containing visual.
    */
    offset: number;
    private _extent;
    /**
     * The extent of the row or column within the containing visual.
     */
    /**
    * The extent of the row or column within the containing visual.
    */
    extent: number;
    /**
     * Returns a string representation of the visual data
     */
    serialize(): string;
}
/**
 * Represents the visual data for a list of row or column headers within the spreadsheet
 */
export declare class SpreadsheetRowColumnVisualDataList extends List$1<SpreadsheetRowColumnVisualData> {
    static $t: Type;
    constructor();
}
