/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, IEquatable$1_$type, Base, callStaticConstructors, typeCast, fromEnum, markStruct } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { CultureInfo } from "../../igniteui-angular-core/ES5/culture";
import { ExcelUtils, CellAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { wrapNullable } from "../../igniteui-angular-core/ES5/nullable";
import { stringFormat, stringSplit } from "../../igniteui-angular-core/ES5/stringExtended";
import { stringEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * Represents a range of one or more cells.
 */
var SpreadsheetCellRange = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCellRange, _super);
    function SpreadsheetCellRange() {
        var _rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _rest[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._t = 0;
        _this._w = 0;
        _this._u = 0;
        _this._x = 0;
        _this._v = 0;
        var a;
        if (arguments.length === 0) {
            a = 0;
        }
        else if (arguments.length === 1) {
            a = 3;
        }
        else if (arguments.length === 2) {
            a = 1;
        }
        else if (arguments.length === 4) {
            a = 2;
        }
        switch (a) {
            case 0: break;
            case 1:
                {
                    var firstRow = _rest[0];
                    var firstColumn = _rest[1];
                    var b = [firstRow, firstColumn, firstRow, firstColumn];
                    {
                        var firstRow_1 = b[0];
                        var firstColumn_1 = b[1];
                        var lastRow = b[2];
                        var lastColumn = b[3];
                        if (firstRow_1 != -1 || lastRow != -1 || firstColumn_1 != -1 || lastColumn != -1) {
                            SpreadsheetCellRange._ah(firstRow_1, "firstRow");
                            SpreadsheetCellRange._ah(lastRow, "lastRow");
                            SpreadsheetCellRange._ah(firstColumn_1, "firstColumn");
                            SpreadsheetCellRange._ah(lastColumn, "lastColumn");
                        }
                        _this._u = Math.min(firstRow_1, lastRow);
                        _this._x = Math.max(firstRow_1, lastRow);
                        _this._t = Math.min(firstColumn_1, lastColumn);
                        _this._w = Math.max(firstColumn_1, lastColumn);
                        _this._v = _this._u ^ _this._x << 5 ^ _this._t << 10 ^ _this._w << 15;
                    }
                }
                break;
            case 2:
                {
                    var firstRow = _rest[0];
                    var firstColumn = _rest[1];
                    var lastRow = _rest[2];
                    var lastColumn = _rest[3];
                    if (firstRow != -1 || lastRow != -1 || firstColumn != -1 || lastColumn != -1) {
                        SpreadsheetCellRange._ah(firstRow, "firstRow");
                        SpreadsheetCellRange._ah(lastRow, "lastRow");
                        SpreadsheetCellRange._ah(firstColumn, "firstColumn");
                        SpreadsheetCellRange._ah(lastColumn, "lastColumn");
                    }
                    _this._u = Math.min(firstRow, lastRow);
                    _this._x = Math.max(firstRow, lastRow);
                    _this._t = Math.min(firstColumn, lastColumn);
                    _this._w = Math.max(firstColumn, lastColumn);
                    _this._v = _this._u ^ _this._x << 5 ^ _this._t << 10 ^ _this._w << 15;
                }
                break;
            case 3:
                {
                    var address = _rest[0];
                    var b = void 0;
                    var c = void 0;
                    var d = void 0;
                    var e = void 0;
                    var f = ExcelUtils.ft(address, 2, CultureInfo.currentCulture, b, c, d, e);
                    b = f.p3;
                    c = f.p4;
                    d = f.p5;
                    e = f.p6;
                    if (d < 0 && b < 0) {
                        throw new ArgumentException(1, stringFormat("The specified address '{0}' is not a valid A1 cell range address.", address));
                    }
                    if (d < 0) {
                        d = b;
                        e = c;
                    }
                    SpreadsheetCellRange._ah(b, "firstRow");
                    SpreadsheetCellRange._ah(d, "lastRow");
                    SpreadsheetCellRange._ah(c, "firstColumn");
                    SpreadsheetCellRange._ah(e, "lastColumn");
                    _this._u = Math.min(b, d);
                    _this._x = Math.max(b, d);
                    _this._t = Math.min(c, e);
                    _this._w = Math.max(c, e);
                    _this._v = _this._u ^ _this._x << 5 ^ _this._t << 10 ^ _this._w << 15;
                }
                break;
            default: throw new Error('Invalid arguments');
        }
        return _this;
    }
    SpreadsheetCellRange.staticInit = function () {
        SpreadsheetCellRange.empty = new SpreadsheetCellRange(-1, -1, -1, -1);
    };
    SpreadsheetCellRange.prototype.equals = function () {
        var n;
        if (arguments.length === 1) {
            if (typeCast(SpreadsheetCellRange.$, arguments[0]) !== null) {
                n = 0;
            }
            else if (typeCast(Base.$, arguments[0]) !== null) {
                n = 1;
            }
            else if (arguments[0] == null) {
                n = 1;
            }
        }
        switch (n) {
            case 0: return this._equals.apply(this, arguments);
            case 1: return this.equals1.apply(this, arguments);
            default: throw new Error('Invalid arguments');
        }
    };
    /**
     * Compares the specified [[SpreadsheetCellRange]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCellRange with the same [[firstRow]], [[lastRow]], [[firstColumn]] and [[lastColumn]].
     */
    SpreadsheetCellRange.prototype.equals1 = function (obj) {
        if (typeCast(SpreadsheetCellRange.$, obj) !== null) {
            return this._equals(obj);
        }
        return false;
    };
    /**
     * Returns a hash value for the [[SpreadsheetCellRange]]
     * @return A hash value for the SheetCellRange
     */
    SpreadsheetCellRange.prototype.getHashCode = function () {
        return this._v;
    };
    SpreadsheetCellRange.prototype.toString = function () {
        var n;
        if (arguments.length === 0) {
            n = 0;
        }
        else if (arguments.length === 1) {
            n = 1;
        }
        switch (n) {
            case 0: return this._toString.apply(this, arguments);
            case 1: return this._toString1.apply(this, arguments);
            default: throw new Error('Invalid arguments');
        }
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.prototype._toString = function () {
        return this._toString1(1);
    };
    Object.defineProperty(SpreadsheetCellRange.prototype, "firstColumn", {
        /**
         * Returns the index of the first column in the range.
         */
        get: function () {
            return this._t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "firstRow", {
        /**
         * Returns the index of the first row in the range.
         */
        get: function () {
            return this._u;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "_aa", {
        /**
         * @hidden
         */
        get: function () {
            return this._x - this._u + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "isSingleCell", {
        /**
         * Returns a boolean indicating if the range represents a single cell.
         */
        get: function () {
            return this._t == this._w && this._u == this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "isEmpty", {
        /**
         * Returns a boolean indicating if the structure represents a valid range.
         */
        get: function () {
            return SpreadsheetCellRange.l_op_Equality(this, SpreadsheetCellRange.empty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "lastColumn", {
        /**
         * Returns the index of the last column in the range.
         */
        get: function () {
            return this._w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "lastRow", {
        /**
         * Returns the index of the last row in the range.
         */
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "_b", {
        /**
         * @hidden
         */
        get: function () {
            return new SpreadsheetCell(this._x, this._w);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "_c", {
        /**
         * @hidden
         */
        get: function () {
            return new SpreadsheetCell(this._u, this._t);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRange.prototype, "_ad", {
        /**
         * @hidden
         */
        get: function () {
            return this._w - this._t + 1;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetCellRange.prototype.contains = function () {
        var n;
        if (arguments.length === 1) {
            if (typeCast(SpreadsheetCell.$, arguments[0]) !== null) {
                n = 0;
            }
            else if (typeCast(SpreadsheetCellRange.$, arguments[0]) !== null) {
                n = 1;
            }
        }
        else if (arguments.length === 2) {
            n = 2;
        }
        switch (n) {
            case 0: return this._contains.apply(this, arguments);
            case 1: return this._contains1.apply(this, arguments);
            case 2: return this._contains2.apply(this, arguments);
            default: throw new Error('Invalid arguments');
        }
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.prototype._contains2 = function (a, b) {
        return !(b < this._t || b > this._w || a < this._u || a > this._x);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.prototype._contains = function (a) {
        return this._contains2(a.row, a.column);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.prototype._contains1 = function (a) {
        return !(a.firstColumn < this._t || a.lastColumn > this._w || a.firstRow < this._u || a.lastRow > this._x);
    };
    /**
     * Returns a range that represents the common area within the current and specified range.
     * @param range The range to intersect with.
     * @return A range that represents the common area between the current and specified range or [[SpreadsheetCellRange.empty]] if there is no overlap.
     */
    SpreadsheetCellRange.prototype.intersect = function (range) {
        if (!this.intersectsWith(range)) {
            return SpreadsheetCellRange.empty;
        }
        return new SpreadsheetCellRange(this._u < range._u ? range._u : this._u, this._t < range._t ? range._t : this._t, this._x > range._x ? range._x : this._x, this._w > range._w ? range._w : this._w);
    };
    /**
     * Returns a boolean indicating if the current and specified range overlap.
     * @param range The range to compare with.
     * @return Returns true if the ranges have at least 1 row and column in common; otherwise false.
     */
    SpreadsheetCellRange.prototype.intersectsWith = function (range) {
        return range._u <= this._x && range._x >= this._u && range._t <= this._w && range._w >= this._t;
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.prototype._toString1 = function (a) {
        return this._af(a, a == 1);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.prototype._af = function (a, b) {
        var c = ((function (d, e, f, g, h) { return CellAddress.u(d, e, void 0, g, h, void 0, void 0, void 0, f); })(this._u, this._t, a, b, b));
        if (this.isSingleCell) {
            return c;
        }
        return stringFormat("{0}{1}{2}", c, ":", ((function (i, j, k, l, m) { return CellAddress.u(i, j, void 0, l, m, void 0, void 0, void 0, k); })(this._x, this._w, a, b, b)));
    };
    /**
     * Returns a range that contains the contains the current and specified range.
     * @param range The range to combine with.
     * @return A range that is large enough to contain the current and specified range.
     */
    SpreadsheetCellRange.prototype.union = function (range) {
        if (this.isEmpty) {
            return range;
        }
        return new SpreadsheetCellRange(this._u > range._u ? range._u : this._u, this._t > range._t ? range._t : this._t, this._x < range._x ? range._x : this._x, this._w < range._w ? range._w : this._w);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange._a = function (n) {
        var o = null;
        if (n != null && n.length > 0) {
            o = stringSplit(n, [','], 1);
        }
        var p = o == null ? 0 : o.length;
        var q = new Array(p);
        for (var r = 0; r < p; r++) {
            var s = o[r].trim();
            q[r] = new SpreadsheetCellRange(s);
        }
        return q;
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange._j = function (n) {
        for (var o = 0, p = n.count; o < p; o++) {
            var q = n.item(o);
            for (var r = o + 1; r < p; r++) {
                var s = n.item(r);
                if (s.intersectsWith(q)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange._ag = function (n, o, p) {
        var e_1, _d;
        if (p === void 0) { p = ','; }
        if (n == null || n.count == 0) {
            return stringEmpty();
        }
        if (n.count == 1) {
            return n.item(0)._toString1(o);
        }
        var q = new StringBuilder(0);
        try {
            for (var _e = tslib_1.__values(fromEnum(n)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var r = _f.value;
                if (q.c > 0) {
                    q.h(p);
                }
                q.l(r._toString1(o));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return q.toString();
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange._ah = function (n, o) {
        if (n < 0) {
            throw new ArgumentException(2, "Row and column indexes must be 0 or greater.", o);
        }
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.prototype._equals = function (n) {
        return n._u == this._u && n._x == this._x && n._t == this._t && n._w == this._w;
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.l_op_Equality = function (d1, d2) {
        return d1._equals(d2);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.l_op_Equality_Lifted = function (d1, d2) {
        arguments[0] = wrapNullable(SpreadsheetCellRange.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCellRange.$, arguments[1]);
        return this._l_op_Equality_Lifted$i.apply(this, arguments);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange._l_op_Equality_Lifted$i = function (n, o) {
        if (!n.hasValue) {
            return !o.hasValue;
        }
        else if (!o.hasValue) {
            return false;
        }
        return SpreadsheetCellRange.l_op_Equality(n.value, o.value);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.l_op_Inequality = function (d1, d2) {
        return !(SpreadsheetCellRange.l_op_Equality(d1, d2));
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange.l_op_Inequality_Lifted = function (d1, d2) {
        arguments[0] = wrapNullable(SpreadsheetCellRange.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCellRange.$, arguments[1]);
        return this._l_op_Inequality_Lifted$i.apply(this, arguments);
    };
    /**
     * @hidden
     */
    SpreadsheetCellRange._l_op_Inequality_Lifted$i = function (n, o) {
        if (!n.hasValue) {
            return o.hasValue;
        }
        else if (!o.hasValue) {
            return true;
        }
        return SpreadsheetCellRange.l_op_Inequality(n.value, o.value);
    };
    SpreadsheetCellRange.$t = markStruct(SpreadsheetCellRange, 'SpreadsheetCellRange', ValueType.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
    SpreadsheetCellRange.empty = new SpreadsheetCellRange();
    return SpreadsheetCellRange;
}(ValueType));
export { SpreadsheetCellRange };
callStaticConstructors();
//# sourceMappingURL=SpreadsheetCellRange.js.map
