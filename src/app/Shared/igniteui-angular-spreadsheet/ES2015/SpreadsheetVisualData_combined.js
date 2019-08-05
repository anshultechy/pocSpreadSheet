/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetVisualDataBase } from "./SpreadsheetVisualDataBase";
import { IConvertible_$type, IEnumerable_$type, IEnumerable$1_$type, typeCast, Date_$type, fromEn, markType } from "../../igniteui-angular-core/ES2015/type";
import { CultureInfo } from "../../igniteui-angular-core/ES2015/culture";
import { IVisualData_$type } from "../../igniteui-angular-core/ES2015/IVisualData";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { AppearanceHelper } from "../../igniteui-angular-core/ES2015/AppearanceHelper";
import { stringReplace } from "../../igniteui-angular-core/ES2015/string";
import { ConvertUtil } from "../../igniteui-angular-core/ES2015/convertUtil";
import { RectData } from "../../igniteui-angular-core/ES2015/RectData";
import { PrimitiveVisualDataList } from "../../igniteui-angular-core/ES2015/PrimitiveVisualDataList";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * Represents the visual data for the spreadsheet.
 */
export class SpreadsheetVisualData extends SpreadsheetVisualDataBase {
    constructor() {
        super();
        this._cellAreas = null;
        this._rowHeaderAreas = null;
        this._columnHeaderAreas = null;
        this.cellAreas = new SpreadsheetCellAreaVisualDataList();
        this.rowHeaderAreas = new SpreadsheetHeaderAreaVisualDataList();
        this.columnHeaderAreas = new SpreadsheetHeaderAreaVisualDataList();
    }
    /**
     * Returns or sets the visual data for the cell areas in the spreadsheet
     */
    get cellAreas() {
        return this._cellAreas;
    }
    /**
     * Returns or sets the visual data for the cell areas in the spreadsheet
     */
    set cellAreas(a) {
        this._cellAreas = a;
    }
    /**
     * Returns or sets the visual data for the row header areas in the spreadsheet
     */
    get rowHeaderAreas() {
        return this._rowHeaderAreas;
    }
    /**
     * Returns or sets the visual data for the row header areas in the spreadsheet
     */
    set rowHeaderAreas(a) {
        this._rowHeaderAreas = a;
    }
    /**
     * Returns or sets the visual data for the column header areas in the spreadsheet
     */
    get columnHeaderAreas() {
        return this._columnHeaderAreas;
    }
    /**
     * Returns or sets the visual data for the column header areas in the spreadsheet
     */
    set columnHeaderAreas(a) {
        this._columnHeaderAreas = a;
    }
    /**
     * Returns a string representation of the visual data
     */
    serialize() {
        let a = SpreadsheetVisualData._g(["cellAreas", "rowHeaderAreas", "columnHeaderAreas"], [this.cellAreas, this.rowHeaderAreas, this.columnHeaderAreas]);
        return a;
    }
    /**
     * @hidden
     */
    static _f(a) {
        if (a == null) {
            return null;
        }
        if (typeof a === 'string') {
            return "\"" + stringReplace(a, "\"", "\\\"") + "\"";
        }
        if (typeCast(Date_$type, a) !== null) {
            return (a.toJSON());
        }
        if (typeCast(IConvertible_$type, a) !== null) {
            return ConvertUtil.toString1(a, CultureInfo.invariantCulture);
        }
        if (typeCast(IVisualData_$type, a) !== null) {
            return a.serialize();
        }
        if (typeCast(SpreadsheetVisualDataBase.$, a) !== null) {
            return a.serialize();
        }
        if (typeCast(IEnumerable_$type, a) !== null) {
            return SpreadsheetVisualData._e(a);
        }
        return null;
    }
    /**
     * @hidden
     */
    static _e(a) {
        let b = false;
        let c = null;
        for (let d of fromEn(a)) {
            if (b) {
                c.u(", ");
            }
            else {
                c = new StringBuilder(0);
                c.u("[");
                b = true;
            }
            let e = SpreadsheetVisualData._f(d);
            if (e == null) {
                e = "null";
            }
            c.l(e);
        }
        if (c == null) {
            return null;
        }
        c.u("]");
        return c.toString();
    }
    /**
     * @hidden
     */
    static _g(a, b) {
        let c = new StringBuilder(0);
        let d = false;
        c.u("{");
        for (let e = 0; e < a.length; e++) {
            let f = b[e];
            if (f == null) {
                continue;
            }
            if (typeCast(IEnumerable$1_$type.specialize(IVisualData_$type), f) !== null) {
                d = AppearanceHelper.serializeItems(c, a[e], f, !d) || d;
            }
            else {
                let g = SpreadsheetVisualData._f(f);
                if (g != null) {
                    if (d) {
                        c.u(", ");
                    }
                    c.l(a[e]);
                    c.l(": ");
                    c.l(g);
                    d = true;
                }
            }
        }
        c.u("}");
        return c.toString();
    }
}
SpreadsheetVisualData.$t = markType(SpreadsheetVisualData, 'SpreadsheetVisualData', SpreadsheetVisualDataBase.$);
/**
 * Represents the visual data for a row or column header area within the spreadsheet
 */
export class SpreadsheetHeaderAreaVisualData extends SpreadsheetVisualDataBase {
    constructor() {
        super();
        this._relativeBounds = null;
        this._items = null;
        this._shapes = null;
        this.items = new SpreadsheetRowColumnVisualDataList();
        this.shapes = new PrimitiveVisualDataList();
        this.relativeBounds = RectData.empty;
    }
    /**
     * The position of the area within the containing visual.
     */
    get relativeBounds() {
        return this._relativeBounds;
    }
    /**
     * The position of the area within the containing visual.
     */
    set relativeBounds(a) {
        this._relativeBounds = a;
    }
    /**
     * The visual information about the items in the header
     */
    get items() {
        return this._items;
    }
    /**
     * The visual information about the items in the header
     */
    set items(a) {
        this._items = a;
    }
    /**
     * The visual shape data of the header area.
     */
    get shapes() {
        return this._shapes;
    }
    /**
     * The visual shape data of the header area.
     */
    set shapes(a) {
        this._shapes = a;
    }
    /**
     * Returns a string representation of the visual data
     */
    serialize() {
        return SpreadsheetVisualData._g(["relativeBounds", "items", "shapes"], [this.relativeBounds, this.items, SpreadsheetVisualData._e(this.shapes)]);
    }
}
SpreadsheetHeaderAreaVisualData.$t = markType(SpreadsheetHeaderAreaVisualData, 'SpreadsheetHeaderAreaVisualData', SpreadsheetVisualDataBase.$);
/**
 * Represents the visual data for a list of row or column header areas within the spreadsheet
 */
export class SpreadsheetHeaderAreaVisualDataList extends List$1 {
    constructor() {
        super(SpreadsheetHeaderAreaVisualData.$, 0);
    }
}
SpreadsheetHeaderAreaVisualDataList.$t = markType(SpreadsheetHeaderAreaVisualDataList, 'SpreadsheetHeaderAreaVisualDataList', List$1.$.specialize(SpreadsheetHeaderAreaVisualData.$));
/**
 * Represents the visual data for a cell area within the spreadsheet
 */
export class SpreadsheetCellAreaVisualData extends SpreadsheetVisualDataBase {
    constructor() {
        super();
        this._relativeBounds = null;
        this._columns = null;
        this._rows = null;
        this._shapes = null;
        this.rows = new SpreadsheetRowColumnVisualDataList();
        this.columns = new SpreadsheetRowColumnVisualDataList();
        this.shapes = new PrimitiveVisualDataList();
        this.relativeBounds = RectData.empty;
    }
    /**
     * The position of the area within the containing visual.
     */
    get relativeBounds() {
        return this._relativeBounds;
    }
    /**
     * The position of the area within the containing visual.
     */
    set relativeBounds(a) {
        this._relativeBounds = a;
    }
    /**
     * The visual information about the columns for the cells
     */
    get columns() {
        return this._columns;
    }
    /**
     * The visual information about the columns for the cells
     */
    set columns(a) {
        this._columns = a;
    }
    /**
     * The visual information about the rows for the cells
     */
    get rows() {
        return this._rows;
    }
    /**
     * The visual information about the rows for the cells
     */
    set rows(a) {
        this._rows = a;
    }
    /**
     * The visual shape data of the header area.
     */
    get shapes() {
        return this._shapes;
    }
    /**
     * The visual shape data of the header area.
     */
    set shapes(a) {
        this._shapes = a;
    }
    /**
     * Returns a string representation of the visual data
     */
    serialize() {
        return SpreadsheetVisualData._g(["relativeBounds", "columns", "rows", "shapes"], [this.relativeBounds, this.columns, this.rows, SpreadsheetVisualData._e(this.shapes)]);
    }
}
SpreadsheetCellAreaVisualData.$t = markType(SpreadsheetCellAreaVisualData, 'SpreadsheetCellAreaVisualData', SpreadsheetVisualDataBase.$);
/**
 * Represents the visual data for a list of cell areas within the spreadsheet
 */
export class SpreadsheetCellAreaVisualDataList extends List$1 {
    constructor() {
        super(SpreadsheetCellAreaVisualData.$, 0);
    }
}
SpreadsheetCellAreaVisualDataList.$t = markType(SpreadsheetCellAreaVisualDataList, 'SpreadsheetCellAreaVisualDataList', List$1.$.specialize(SpreadsheetCellAreaVisualData.$));
/**
 * Represents the visual data for a row or column within the spreadsheet
 */
export class SpreadsheetRowColumnVisualData extends SpreadsheetVisualDataBase {
    constructor() {
        super(...arguments);
        this._index = 0;
        this._offset = 0;
        this._extent = 0;
    }
    /**
     * The index of the associated row or column.
     */
    get index() {
        return this._index;
    }
    /**
     * The index of the associated row or column.
     */
    set index(a) {
        this._index = a;
    }
    /**
     * The start offset of the row or column within the containing visual.
     */
    get offset() {
        return this._offset;
    }
    /**
     * The start offset of the row or column within the containing visual.
     */
    set offset(a) {
        this._offset = a;
    }
    /**
     * The extent of the row or column within the containing visual.
     */
    get extent() {
        return this._extent;
    }
    /**
     * The extent of the row or column within the containing visual.
     */
    set extent(a) {
        this._extent = a;
    }
    /**
     * Returns a string representation of the visual data
     */
    serialize() {
        return SpreadsheetVisualData._g(["index", "offset", "extent"], [this.index, this.offset, this.extent]);
    }
}
SpreadsheetRowColumnVisualData.$t = markType(SpreadsheetRowColumnVisualData, 'SpreadsheetRowColumnVisualData', SpreadsheetVisualDataBase.$);
/**
 * Represents the visual data for a list of row or column headers within the spreadsheet
 */
export class SpreadsheetRowColumnVisualDataList extends List$1 {
    constructor() {
        super(SpreadsheetRowColumnVisualData.$, 0);
    }
}
SpreadsheetRowColumnVisualDataList.$t = markType(SpreadsheetRowColumnVisualDataList, 'SpreadsheetRowColumnVisualDataList', List$1.$.specialize(SpreadsheetRowColumnVisualData.$));
//# sourceMappingURL=SpreadsheetVisualData_combined.js.map