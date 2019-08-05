/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, IEquatable$1_$type, Base, callStaticConstructors, typeCast, markStruct } from "../../igniteui-angular-core/ES5/type";
import { CultureInfo } from "../../igniteui-angular-core/ES5/culture";
import { ExcelUtils, CellAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { wrapNullable } from "../../igniteui-angular-core/ES5/nullable";
import { stringFormat } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * Represents a single cell in the [[Spreadsheet]]
 */
var SpreadsheetCell = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCell, _super);
    function SpreadsheetCell() {
        var _rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _rest[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._g = 0;
        _this._h = 0;
        var a;
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
                    var row = _rest[0];
                    var column = _rest[1];
                    SpreadsheetCell._k(row, "row");
                    SpreadsheetCell._k(column, "column");
                    _this._h = row;
                    _this._g = column;
                }
                break;
            case 2:
                {
                    var address_1 = _rest[0];
                    var b_1;
                    var c_1;
                    if (!((function () { var d = ExcelUtils.bm(address_1, 2, CultureInfo.currentCulture, b_1, c_1); b_1 = d.p3; c_1 = d.p4; return d.ret; })())) {
                        throw new ArgumentException(1, stringFormat("The specified address '{0}' is not a valid A1 cell address.", address_1));
                    }
                    _this._h = c_1;
                    _this._g = b_1;
                }
                break;
            default: throw new Error('Invalid arguments');
        }
        return _this;
    }
    SpreadsheetCell.staticInit = function () {
    };
    SpreadsheetCell.prototype.equals = function () {
        var n;
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
    };
    /**
     * Compares the specified [[SpreadsheetCell]] to this instance's values.
     * @param obj The object to compare to the current instance
     * @return True if the object is a SheetCell with the same [[row]] and [[column]].
     */
    SpreadsheetCell.prototype.equals1 = function (obj) {
        if (typeCast(SpreadsheetCell.$, obj) !== null) {
            return this._equals(obj);
        }
        return false;
    };
    /**
     * Returns a hash value for the [[SpreadsheetCell]]
     * @return A hash value for the SheetCell
     */
    SpreadsheetCell.prototype.getHashCode = function () {
        return this._h ^ this._g << 8;
    };
    /**
     * Returns a string representation of the [[SpreadsheetCell]]
     * @return A string representation row and column index.
     */
    SpreadsheetCell.prototype.toString = function () {
        return CellAddress.u(this._h, this._g);
    };
    Object.defineProperty(SpreadsheetCell.prototype, "row", {
        /**
         * Returns the index of the row
         */
        get: function () {
            return this._h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCell.prototype, "column", {
        /**
         * Returns the index of the column.
         */
        get: function () {
            return this._g;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    SpreadsheetCell._k = function (a, b) {
        if (a < 0) {
            throw new ArgumentException(2, "Row and column indexes must be 0 or greater.", b);
        }
    };
    /**
     * @hidden
     */
    SpreadsheetCell.prototype._equals = function (a) {
        return a._h == this._h && a._g == this._g;
    };
    /**
     * @hidden
     */
    SpreadsheetCell.l_op_Equality = function (d1, d2) {
        return d1._equals(d2);
    };
    /**
     * @hidden
     */
    SpreadsheetCell.l_op_Equality_Lifted = function (d1, d2) {
        arguments[0] = wrapNullable(SpreadsheetCell.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCell.$, arguments[1]);
        return this._l_op_Equality_Lifted$i.apply(this, arguments);
    };
    /**
     * @hidden
     */
    SpreadsheetCell._l_op_Equality_Lifted$i = function (a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return SpreadsheetCell.l_op_Equality(a.value, b.value);
    };
    /**
     * @hidden
     */
    SpreadsheetCell.l_op_Inequality = function (d1, d2) {
        return !(SpreadsheetCell.l_op_Equality(d1, d2));
    };
    /**
     * @hidden
     */
    SpreadsheetCell.l_op_Inequality_Lifted = function (d1, d2) {
        arguments[0] = wrapNullable(SpreadsheetCell.$, arguments[0]);
        arguments[1] = wrapNullable(SpreadsheetCell.$, arguments[1]);
        return this._l_op_Inequality_Lifted$i.apply(this, arguments);
    };
    /**
     * @hidden
     */
    SpreadsheetCell._l_op_Inequality_Lifted$i = function (a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return SpreadsheetCell.l_op_Inequality(a.value, b.value);
    };
    SpreadsheetCell.$t = markStruct(SpreadsheetCell, 'SpreadsheetCell', ValueType.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
    return SpreadsheetCell;
}(ValueType));
export { SpreadsheetCell };
callStaticConstructors();
//# sourceMappingURL=SpreadsheetCell.js.map
