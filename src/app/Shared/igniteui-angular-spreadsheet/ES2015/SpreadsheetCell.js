/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, IEquatable$1_$type, Base, callStaticConstructors, typeCast, markStruct } from "../../igniteui-angular-core/ES2015/type";
import { CultureInfo } from "../../igniteui-angular-core/ES2015/culture";
import { ExcelUtils, CellAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { wrapNullable } from "../../igniteui-angular-core/ES2015/nullable";
import { stringFormat } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * Represents a single cell in the [[Spreadsheet]]
 */
export class SpreadsheetCell extends ValueType {
    constructor(..._rest) {
        super();
        this._g = 0;
        this._h = 0;
        let a;
        if (arguments.length === 0) {
            a = 0;
        }
        else if (arguments.length === 1) {
            a = 2;
        }
        else if (arguments.length === 2) {
            a = 1;
        }
        switch (a) {
            case 0: break;
            case 1:
                {
                    let row = _rest[0];
                    let column = _rest[1];
                    SpreadsheetCell._k(row, "row");
                    SpreadsheetCell._k(column, "column");
                    this._h = row;
                    this._g = column;
                }
                break;
            case 2:
                {
                    let address = _rest[0];
                    let b;
                    let c;
                    if (!((() => { let d = ExcelUtils.bm(address, 2, CultureInfo.currentCulture, b, c); b = d.p3; c = d.p4; return d.ret; })())) {
                        throw new ArgumentException(1, stringFormat("The specified address '{0}' is not a valid A1 cell address.", address));
                    }
                    this._h = c;
                    this._g = b;
                }
                break;
            default: throw new Error('Invalid arguments');
        }
    }
    static staticInit() {
    }
    equals() {
        let n;
        if (arguments.length === 1) {
            if (typeCast(SpreadsheetCell.$, arguments[0]) !== null) {
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
     * Compares the specified [[SpreadsheetCell]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCell with the same [[row]] and [[column]].
     */
    equals1(obj) {
        if (typeCast(SpreadsheetCell.$, obj) !== null) {
            return this._equals(obj);
        }
        return false;
    }
    /**
     * Returns a hash value for the [[SpreadsheetCell]]
     * @return A hash value for the SheetCell
     */
    getHashCode() {
        return this._h ^ this._g << 8;
    }
    /**
     * Returns a string representation of the [[SpreadsheetCell]]
     * @return A string representation row and column index.
     */
    toString() {
        return CellAddress.u(this._h, this._g);
    }
    /**
     * Returns the index of the row
     */
    get row() {
        return this._h;
    }
    /**
     * Returns the index of the column.
     */
    get column() {
        return this._g;
    }
    /**
     * @hidden
     */
    static _k(a, b) {
        if (a < 0) {
            throw new ArgumentException(2, "Row and column indexes must be 0 or greater.", b);
        }
    }
    /**
     * @hidden
     */
    _equals(a) {
        return a._h == this._h && a._g == this._g;
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
        arguments[0] = wrapNullable(SpreadsheetCell.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCell.$, arguments[1]);
        return this._l_op_Equality_Lifted$i.apply(this, arguments);
    }
    /**
     * @hidden
     */
    static _l_op_Equality_Lifted$i(a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return SpreadsheetCell.l_op_Equality(a.value, b.value);
    }
    /**
     * @hidden
     */
    static l_op_Inequality(d1, d2) {
        return !(SpreadsheetCell.l_op_Equality(d1, d2));
    }
    /**
     * @hidden
     */
    static l_op_Inequality_Lifted(d1, d2) {
        arguments[0] = wrapNullable(SpreadsheetCell.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCell.$, arguments[1]);
        return this._l_op_Inequality_Lifted$i.apply(this, arguments);
    }
    /**
     * @hidden
     */
    static _l_op_Inequality_Lifted$i(a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return SpreadsheetCell.l_op_Inequality(a.value, b.value);
    }
}
SpreadsheetCell.$t = markStruct(SpreadsheetCell, 'SpreadsheetCell', ValueType.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
callStaticConstructors();
//# sourceMappingURL=SpreadsheetCell.js.map
