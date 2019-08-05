/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, IEquatable$1_$type, Base, callStaticConstructors, typeCast, fromEnum, markStruct } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { CultureInfo } from "../../igniteui-angular-core/ES2015/culture";
import { ExcelUtils, CellAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { wrapNullable } from "../../igniteui-angular-core/ES2015/nullable";
import { stringFormat, stringSplit } from "../../igniteui-angular-core/ES2015/stringExtended";
import { stringEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * Represents a range of one or more cells.
 */
export class SpreadsheetCellRange extends ValueType {
    constructor(..._rest) {
        super();
        this._t = 0;
        this._w = 0;
        this._u = 0;
        this._x = 0;
        this._v = 0;
        let a;
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
                    let firstRow = _rest[0];
                    let firstColumn = _rest[1];
                    let b = [firstRow, firstColumn, firstRow, firstColumn];
                    {
                        let firstRow = b[0];
                        let firstColumn = b[1];
                        let lastRow = b[2];
                        let lastColumn = b[3];
                        if (firstRow != -1 || lastRow != -1 || firstColumn != -1 || lastColumn != -1) {
                            SpreadsheetCellRange._ah(firstRow, "firstRow");
                            SpreadsheetCellRange._ah(lastRow, "lastRow");
                            SpreadsheetCellRange._ah(firstColumn, "firstColumn");
                            SpreadsheetCellRange._ah(lastColumn, "lastColumn");
                        }
                        this._u = Math.min(firstRow, lastRow);
                        this._x = Math.max(firstRow, lastRow);
                        this._t = Math.min(firstColumn, lastColumn);
                        this._w = Math.max(firstColumn, lastColumn);
                        this._v = this._u ^ this._x << 5 ^ this._t << 10 ^ this._w << 15;
                    }
                }
                break;
            case 2:
                {
                    let firstRow = _rest[0];
                    let firstColumn = _rest[1];
                    let lastRow = _rest[2];
                    let lastColumn = _rest[3];
                    if (firstRow != -1 || lastRow != -1 || firstColumn != -1 || lastColumn != -1) {
                        SpreadsheetCellRange._ah(firstRow, "firstRow");
                        SpreadsheetCellRange._ah(lastRow, "lastRow");
                        SpreadsheetCellRange._ah(firstColumn, "firstColumn");
                        SpreadsheetCellRange._ah(lastColumn, "lastColumn");
                    }
                    this._u = Math.min(firstRow, lastRow);
                    this._x = Math.max(firstRow, lastRow);
                    this._t = Math.min(firstColumn, lastColumn);
                    this._w = Math.max(firstColumn, lastColumn);
                    this._v = this._u ^ this._x << 5 ^ this._t << 10 ^ this._w << 15;
                }
                break;
            case 3:
                {
                    let address = _rest[0];
                    let b;
                    let c;
                    let d;
                    let e;
                    let f = ExcelUtils.ft(address, 2, CultureInfo.currentCulture, b, c, d, e);
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
                    this._u = Math.min(b, d);
                    this._x = Math.max(b, d);
                    this._t = Math.min(c, e);
                    this._w = Math.max(c, e);
                    this._v = this._u ^ this._x << 5 ^ this._t << 10 ^ this._w << 15;
                }
                break;
            default: throw new Error('Invalid arguments');
        }
    }
    static staticInit() {
        SpreadsheetCellRange.empty = new SpreadsheetCellRange(-1, -1, -1, -1);
    }
    equals() {
        let n;
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
    }
    /**
     * Compares the specified [[SpreadsheetCellRange]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCellRange with the same [[firstRow]], [[lastRow]], [[firstColumn]] and [[lastColumn]].
     */
    equals1(obj) {
        if (typeCast(SpreadsheetCellRange.$, obj) !== null) {
            return this._equals(obj);
        }
        return false;
    }
    /**
     * Returns a hash value for the [[SpreadsheetCellRange]]
     * @return A hash value for the SheetCellRange
     */
    getHashCode() {
        return this._v;
    }
    toString() {
        let n;
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
    }
    /**
     * @hidden
     */
    _toString() {
        return this._toString1(1);
    }
    /**
     * Returns the index of the first column in the range.
     */
    get firstColumn() {
        return this._t;
    }
    /**
     * Returns the index of the first row in the range.
     */
    get firstRow() {
        return this._u;
    }
    /**
     * @hidden
     */
    get _aa() {
        return this._x - this._u + 1;
    }
    /**
     * Returns a boolean indicating if the range represents a single cell.
     */
    get isSingleCell() {
        return this._t == this._w && this._u == this._x;
    }
    /**
     * Returns a boolean indicating if the structure represents a valid range.
     */
    get isEmpty() {
        return SpreadsheetCellRange.l_op_Equality(this, SpreadsheetCellRange.empty);
    }
    /**
     * Returns the index of the last column in the range.
     */
    get lastColumn() {
        return this._w;
    }
    /**
     * Returns the index of the last row in the range.
     */
    get lastRow() {
        return this._x;
    }
    /**
     * @hidden
     */
    get _b() {
        return new SpreadsheetCell(this._x, this._w);
    }
    /**
     * @hidden
     */
    get _c() {
        return new SpreadsheetCell(this._u, this._t);
    }
    /**
     * @hidden
     */
    get _ad() {
        return this._w - this._t + 1;
    }
    contains() {
        let n;
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
    }
    /**
     * @hidden
     */
    _contains2(a, b) {
        return !(b < this._t || b > this._w || a < this._u || a > this._x);
    }
    /**
     * @hidden
     */
    _contains(a) {
        return this._contains2(a.row, a.column);
    }
    /**
     * @hidden
     */
    _contains1(a) {
        return !(a.firstColumn < this._t || a.lastColumn > this._w || a.firstRow < this._u || a.lastRow > this._x);
    }
    /**
     * Returns a range that represents the common area within the current and specified range.
     * @param range The range to intersect with.
     * @return A range that represents the common area between the current and specified range or [[SpreadsheetCellRange.empty]] if there is no overlap.
     */
    intersect(range) {
        if (!this.intersectsWith(range)) {
            return SpreadsheetCellRange.empty;
        }
        return new SpreadsheetCellRange(this._u < range._u ? range._u : this._u, this._t < range._t ? range._t : this._t, this._x > range._x ? range._x : this._x, this._w > range._w ? range._w : this._w);
    }
    /**
     * Returns a boolean indicating if the current and specified range overlap.
     * @param range The range to compare with.
     * @return Returns true if the ranges have at least 1 row and column in common; otherwise false.
     */
    intersectsWith(range) {
        return range._u <= this._x && range._x >= this._u && range._t <= this._w && range._w >= this._t;
    }
    /**
     * @hidden
     */
    _toString1(a) {
        return this._af(a, a == 1);
    }
    /**
     * @hidden
     */
    _af(a, b) {
        let c = (((d, e, f, g, h) => CellAddress.u(d, e, void 0, g, h, void 0, void 0, void 0, f))(this._u, this._t, a, b, b));
        if (this.isSingleCell) {
            return c;
        }
        return stringFormat("{0}{1}{2}", c, ":", (((i, j, k, l, m) => CellAddress.u(i, j, void 0, l, m, void 0, void 0, void 0, k))(this._x, this._w, a, b, b)));
    }
    /**
     * Returns a range that contains the contains the current and specified range.
     * @param range The range to combine with.
     * @return A range that is large enough to contain the current and specified range.
     */
    union(range) {
        if (this.isEmpty) {
            return range;
        }
        return new SpreadsheetCellRange(this._u > range._u ? range._u : this._u, this._t > range._t ? range._t : this._t, this._x < range._x ? range._x : this._x, this._w < range._w ? range._w : this._w);
    }
    /**
     * @hidden
     */
    static _a(n) {
        let o = null;
        if (n != null && n.length > 0) {
            o = stringSplit(n, [','], 1);
        }
        let p = o == null ? 0 : o.length;
        let q = new Array(p);
        for (let r = 0; r < p; r++) {
            let s = o[r].trim();
            q[r] = new SpreadsheetCellRange(s);
        }
        return q;
    }
    /**
     * @hidden
     */
    static _j(n) {
        for (let o = 0, p = n.count; o < p; o++) {
            let q = n.item(o);
            for (let r = o + 1; r < p; r++) {
                let s = n.item(r);
                if (s.intersectsWith(q)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * @hidden
     */
    static _ag(n, o, p = ',') {
        if (n == null || n.count == 0) {
            return stringEmpty();
        }
        if (n.count == 1) {
            return n.item(0)._toString1(o);
        }
        let q = new StringBuilder(0);
        for (let r of fromEnum(n)) {
            if (q.c > 0) {
                q.h(p);
            }
            q.l(r._toString1(o));
        }
        return q.toString();
    }
    /**
     * @hidden
     */
    static _ah(n, o) {
        if (n < 0) {
            throw new ArgumentException(2, "Row and column indexes must be 0 or greater.", o);
        }
    }
    /**
     * @hidden
     */
    _equals(n) {
        return n._u == this._u && n._x == this._x && n._t == this._t && n._w == this._w;
    }
    /**
     * @hidden
     */
    static l_op_Equality(d1, d2) {
        return d1._equals(d2);
    }
    /**
     * @hidden
     */
    static l_op_Equality_Lifted(d1, d2) {
        arguments[0] = wrapNullable(SpreadsheetCellRange.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCellRange.$, arguments[1]);
        return this._l_op_Equality_Lifted$i.apply(this, arguments);
    }
    /**
     * @hidden
     */
    static _l_op_Equality_Lifted$i(n, o) {
        if (!n.hasValue) {
            return !o.hasValue;
        }
        else if (!o.hasValue) {
            return false;
        }
        return SpreadsheetCellRange.l_op_Equality(n.value, o.value);
    }
    /**
     * @hidden
     */
    static l_op_Inequality(d1, d2) {
        return !(SpreadsheetCellRange.l_op_Equality(d1, d2));
    }
    /**
     * @hidden
     */
    static l_op_Inequality_Lifted(d1, d2) {
        arguments[0] = wrapNullable(SpreadsheetCellRange.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCellRange.$, arguments[1]);
        return this._l_op_Inequality_Lifted$i.apply(this, arguments);
    }
    /**
     * @hidden
     */
    static _l_op_Inequality_Lifted$i(n, o) {
        if (!n.hasValue) {
            return o.hasValue;
        }
        else if (!o.hasValue) {
            return true;
        }
        return SpreadsheetCellRange.l_op_Inequality(n.value, o.value);
    }
}
SpreadsheetCellRange.$t = markStruct(SpreadsheetCellRange, 'SpreadsheetCellRange', ValueType.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
SpreadsheetCellRange.empty = new SpreadsheetCellRange();
callStaticConstructors();
//# sourceMappingURL=SpreadsheetCellRange.js.map
