/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetVisualDataBase } from "./SpreadsheetVisualDataBase";
import { IConvertible_$type, IEnumerable_$type, IEnumerable$1_$type, typeCast, Date_$type, fromEn, markType } from "../../igniteui-angular-core/ES5/type";
import { CultureInfo } from "../../igniteui-angular-core/ES5/culture";
import { IVisualData_$type } from "../../igniteui-angular-core/ES5/IVisualData";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { AppearanceHelper } from "../../igniteui-angular-core/ES5/AppearanceHelper";
import { stringReplace } from "../../igniteui-angular-core/ES5/string";
import { ConvertUtil } from "../../igniteui-angular-core/ES5/convertUtil";
import { RectData } from "../../igniteui-angular-core/ES5/RectData";
import { PrimitiveVisualDataList } from "../../igniteui-angular-core/ES5/PrimitiveVisualDataList";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * Represents the visual data for the spreadsheet.
 */
var SpreadsheetVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetVisualData, _super);
    function SpreadsheetVisualData() {
        var _this = _super.call(this) || this;
        _this._cellAreas = null;
        _this._rowHeaderAreas = null;
        _this._columnHeaderAreas = null;
        _this.cellAreas = new SpreadsheetCellAreaVisualDataList();
        _this.rowHeaderAreas = new SpreadsheetHeaderAreaVisualDataList();
        _this.columnHeaderAreas = new SpreadsheetHeaderAreaVisualDataList();
        return _this;
    }
    Object.defineProperty(SpreadsheetVisualData.prototype, "cellAreas", {
        /**
         * Returns or sets the visual data for the cell areas in the spreadsheet
         */
        get: function () {
            return this._cellAreas;
        },
        /**
         * Returns or sets the visual data for the cell areas in the spreadsheet
         */
        set: function (a) {
            this._cellAreas = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetVisualData.prototype, "rowHeaderAreas", {
        /**
         * Returns or sets the visual data for the row header areas in the spreadsheet
         */
        get: function () {
            return this._rowHeaderAreas;
        },
        /**
         * Returns or sets the visual data for the row header areas in the spreadsheet
         */
        set: function (a) {
            this._rowHeaderAreas = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetVisualData.prototype, "columnHeaderAreas", {
        /**
         * Returns or sets the visual data for the column header areas in the spreadsheet
         */
        get: function () {
            return this._columnHeaderAreas;
        },
        /**
         * Returns or sets the visual data for the column header areas in the spreadsheet
         */
        set: function (a) {
            this._columnHeaderAreas = a;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a string representation of the visual data
     */
    SpreadsheetVisualData.prototype.serialize = function () {
        var a = SpreadsheetVisualData._g(["cellAreas", "rowHeaderAreas", "columnHeaderAreas"], [this.cellAreas, this.rowHeaderAreas, this.columnHeaderAreas]);
        return a;
    };
    /**
     * @hidden
     */
    SpreadsheetVisualData._f = function (a) {
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
    };
    /**
     * @hidden
     */
    SpreadsheetVisualData._e = function (a) {
        var e_1, _a;
        var b = false;
        var c = null;
        try {
            for (var _b = tslib_1.__values(fromEn(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (b) {
                    c.u(", ");
                }
                else {
                    c = new StringBuilder(0);
                    c.u("[");
                    b = true;
                }
                var e = SpreadsheetVisualData._f(d);
                if (e == null) {
                    e = "null";
                }
                c.l(e);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (c == null) {
            return null;
        }
        c.u("]");
        return c.toString();
    };
    /**
     * @hidden
     */
    SpreadsheetVisualData._g = function (a, b) {
        var c = new StringBuilder(0);
        var d = false;
        c.u("{");
        for (var e = 0; e < a.length; e++) {
            var f = b[e];
            if (f == null) {
                continue;
            }
            if (typeCast(IEnumerable$1_$type.specialize(IVisualData_$type), f) !== null) {
                d = AppearanceHelper.serializeItems(c, a[e], f, !d) || d;
            }
            else {
                var g = SpreadsheetVisualData._f(f);
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
    };
    SpreadsheetVisualData.$t = markType(SpreadsheetVisualData, 'SpreadsheetVisualData', SpreadsheetVisualDataBase.$);
    return SpreadsheetVisualData;
}(SpreadsheetVisualDataBase));
export { SpreadsheetVisualData };
/**
 * Represents the visual data for a row or column header area within the spreadsheet
 */
var SpreadsheetHeaderAreaVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetHeaderAreaVisualData, _super);
    function SpreadsheetHeaderAreaVisualData() {
        var _this = _super.call(this) || this;
        _this._relativeBounds = null;
        _this._items = null;
        _this._shapes = null;
        _this.items = new SpreadsheetRowColumnVisualDataList();
        _this.shapes = new PrimitiveVisualDataList();
        _this.relativeBounds = RectData.empty;
        return _this;
    }
    Object.defineProperty(SpreadsheetHeaderAreaVisualData.prototype, "relativeBounds", {
        /**
         * The position of the area within the containing visual.
         */
        get: function () {
            return this._relativeBounds;
        },
        /**
         * The position of the area within the containing visual.
         */
        set: function (a) {
            this._relativeBounds = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetHeaderAreaVisualData.prototype, "items", {
        /**
         * The visual information about the items in the header
         */
        get: function () {
            return this._items;
        },
        /**
         * The visual information about the items in the header
         */
        set: function (a) {
            this._items = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetHeaderAreaVisualData.prototype, "shapes", {
        /**
         * The visual shape data of the header area.
         */
        get: function () {
            return this._shapes;
        },
        /**
         * The visual shape data of the header area.
         */
        set: function (a) {
            this._shapes = a;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a string representation of the visual data
     */
    SpreadsheetHeaderAreaVisualData.prototype.serialize = function () {
        return SpreadsheetVisualData._g(["relativeBounds", "items", "shapes"], [this.relativeBounds, this.items, SpreadsheetVisualData._e(this.shapes)]);
    };
    SpreadsheetHeaderAreaVisualData.$t = markType(SpreadsheetHeaderAreaVisualData, 'SpreadsheetHeaderAreaVisualData', SpreadsheetVisualDataBase.$);
    return SpreadsheetHeaderAreaVisualData;
}(SpreadsheetVisualDataBase));
export { SpreadsheetHeaderAreaVisualData };
/**
 * Represents the visual data for a list of row or column header areas within the spreadsheet
 */
var SpreadsheetHeaderAreaVisualDataList = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetHeaderAreaVisualDataList, _super);
    function SpreadsheetHeaderAreaVisualDataList() {
        return _super.call(this, SpreadsheetHeaderAreaVisualData.$, 0) || this;
    }
    SpreadsheetHeaderAreaVisualDataList.$t = markType(SpreadsheetHeaderAreaVisualDataList, 'SpreadsheetHeaderAreaVisualDataList', List$1.$.specialize(SpreadsheetHeaderAreaVisualData.$));
    return SpreadsheetHeaderAreaVisualDataList;
}(List$1));
export { SpreadsheetHeaderAreaVisualDataList };
/**
 * Represents the visual data for a cell area within the spreadsheet
 */
var SpreadsheetCellAreaVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCellAreaVisualData, _super);
    function SpreadsheetCellAreaVisualData() {
        var _this = _super.call(this) || this;
        _this._relativeBounds = null;
        _this._columns = null;
        _this._rows = null;
        _this._shapes = null;
        _this.rows = new SpreadsheetRowColumnVisualDataList();
        _this.columns = new SpreadsheetRowColumnVisualDataList();
        _this.shapes = new PrimitiveVisualDataList();
        _this.relativeBounds = RectData.empty;
        return _this;
    }
    Object.defineProperty(SpreadsheetCellAreaVisualData.prototype, "relativeBounds", {
        /**
         * The position of the area within the containing visual.
         */
        get: function () {
            return this._relativeBounds;
        },
        /**
         * The position of the area within the containing visual.
         */
        set: function (a) {
            this._relativeBounds = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellAreaVisualData.prototype, "columns", {
        /**
         * The visual information about the columns for the cells
         */
        get: function () {
            return this._columns;
        },
        /**
         * The visual information about the columns for the cells
         */
        set: function (a) {
            this._columns = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellAreaVisualData.prototype, "rows", {
        /**
         * The visual information about the rows for the cells
         */
        get: function () {
            return this._rows;
        },
        /**
         * The visual information about the rows for the cells
         */
        set: function (a) {
            this._rows = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellAreaVisualData.prototype, "shapes", {
        /**
         * The visual shape data of the header area.
         */
        get: function () {
            return this._shapes;
        },
        /**
         * The visual shape data of the header area.
         */
        set: function (a) {
            this._shapes = a;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a string representation of the visual data
     */
    SpreadsheetCellAreaVisualData.prototype.serialize = function () {
        return SpreadsheetVisualData._g(["relativeBounds", "columns", "rows", "shapes"], [this.relativeBounds, this.columns, this.rows, SpreadsheetVisualData._e(this.shapes)]);
    };
    SpreadsheetCellAreaVisualData.$t = markType(SpreadsheetCellAreaVisualData, 'SpreadsheetCellAreaVisualData', SpreadsheetVisualDataBase.$);
    return SpreadsheetCellAreaVisualData;
}(SpreadsheetVisualDataBase));
export { SpreadsheetCellAreaVisualData };
/**
 * Represents the visual data for a list of cell areas within the spreadsheet
 */
var SpreadsheetCellAreaVisualDataList = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCellAreaVisualDataList, _super);
    function SpreadsheetCellAreaVisualDataList() {
        return _super.call(this, SpreadsheetCellAreaVisualData.$, 0) || this;
    }
    SpreadsheetCellAreaVisualDataList.$t = markType(SpreadsheetCellAreaVisualDataList, 'SpreadsheetCellAreaVisualDataList', List$1.$.specialize(SpreadsheetCellAreaVisualData.$));
    return SpreadsheetCellAreaVisualDataList;
}(List$1));
export { SpreadsheetCellAreaVisualDataList };
/**
 * Represents the visual data for a row or column within the spreadsheet
 */
var SpreadsheetRowColumnVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetRowColumnVisualData, _super);
    function SpreadsheetRowColumnVisualData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._index = 0;
        _this._offset = 0;
        _this._extent = 0;
        return _this;
    }
    Object.defineProperty(SpreadsheetRowColumnVisualData.prototype, "index", {
        /**
         * The index of the associated row or column.
         */
        get: function () {
            return this._index;
        },
        /**
         * The index of the associated row or column.
         */
        set: function (a) {
            this._index = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetRowColumnVisualData.prototype, "offset", {
        /**
         * The start offset of the row or column within the containing visual.
         */
        get: function () {
            return this._offset;
        },
        /**
         * The start offset of the row or column within the containing visual.
         */
        set: function (a) {
            this._offset = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetRowColumnVisualData.prototype, "extent", {
        /**
         * The extent of the row or column within the containing visual.
         */
        get: function () {
            return this._extent;
        },
        /**
         * The extent of the row or column within the containing visual.
         */
        set: function (a) {
            this._extent = a;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a string representation of the visual data
     */
    SpreadsheetRowColumnVisualData.prototype.serialize = function () {
        return SpreadsheetVisualData._g(["index", "offset", "extent"], [this.index, this.offset, this.extent]);
    };
    SpreadsheetRowColumnVisualData.$t = markType(SpreadsheetRowColumnVisualData, 'SpreadsheetRowColumnVisualData', SpreadsheetVisualDataBase.$);
    return SpreadsheetRowColumnVisualData;
}(SpreadsheetVisualDataBase));
export { SpreadsheetRowColumnVisualData };
/**
 * Represents the visual data for a list of row or column headers within the spreadsheet
 */
var SpreadsheetRowColumnVisualDataList = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetRowColumnVisualDataList, _super);
    function SpreadsheetRowColumnVisualDataList() {
        return _super.call(this, SpreadsheetRowColumnVisualData.$, 0) || this;
    }
    SpreadsheetRowColumnVisualDataList.$t = markType(SpreadsheetRowColumnVisualDataList, 'SpreadsheetRowColumnVisualDataList', List$1.$.specialize(SpreadsheetRowColumnVisualData.$));
    return SpreadsheetRowColumnVisualDataList;
}(List$1));
export { SpreadsheetRowColumnVisualDataList };
//# sourceMappingURL=SpreadsheetVisualData_combined.js.map
