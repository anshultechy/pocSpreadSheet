/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, NotSupportedException, Boolean_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { IWorksheetCellFormat_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { ResolvedWorksheetCellFormatDataFont } from "./ResolvedWorksheetCellFormatDataFont";
import { wrapNullable, unwrapNullable } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var ReadOnlyResolvedWorksheetCellFormatData = /** @class */ (function (_super) {
    tslib_1.__extends(ReadOnlyResolvedWorksheetCellFormatData, _super);
    function ReadOnlyResolvedWorksheetCellFormatData(a) {
        var _this = _super.call(this) || this;
        _this._b = null;
        _this._a = null;
        _this._c(a);
        return _this;
    }
    ReadOnlyResolvedWorksheetCellFormatData.prototype._c = function (a) {
        this._b = a;
        if (this._a == null) {
            this._a = new ResolvedWorksheetCellFormatDataFont(a);
        }
        else {
            this._a._b(a);
        }
    };
    ReadOnlyResolvedWorksheetCellFormatData.prototype.setFormatting = function (a) {
        throw new NotSupportedException(0);
    };
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "alignment", {
        get: function () {
            return this._b._a4;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "bottomBorderColorInfo", {
        get: function () {
            return this._b._bf;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "bottomBorderStyle", {
        get: function () {
            return this._b._al;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "diagonalBorderColorInfo", {
        get: function () {
            return this._b._bg;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "diagonalBorders", {
        get: function () {
            return this._b._aw;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "diagonalBorderStyle", {
        get: function () {
            return this._b._am;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "fill", {
        get: function () {
            return this._b._ar;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "font", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "formatOptions", {
        get: function () {
            return this._b._bz;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "formatString", {
        get: function () {
            return this._b._dg;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "indent", {
        get: function () {
            return this._b._ct;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "leftBorderColorInfo", {
        get: function () {
            return this._b._bk;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "leftBorderStyle", {
        get: function () {
            return this._b._an;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "locked", {
        get: function () {
            return unwrapNullable(this._locked$i);
        },
        set: function (a) {
            arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
            this._locked$i = arguments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "_locked$i", {
        get: function () {
            return this._b._c5;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "rightBorderColorInfo", {
        get: function () {
            return this._b._bl;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "rightBorderStyle", {
        get: function () {
            return this._b._ao;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "rotation", {
        get: function () {
            return this._b._cw;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "shrinkToFit", {
        get: function () {
            return unwrapNullable(this._shrinkToFit$i);
        },
        set: function (a) {
            arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
            this._shrinkToFit$i = arguments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "_shrinkToFit$i", {
        get: function () {
            return this._b._c6;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "style", {
        get: function () {
            return this._b._bs;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "topBorderColorInfo", {
        get: function () {
            return this._b._bm;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "topBorderStyle", {
        get: function () {
            return this._b._ap;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "verticalAlignment", {
        get: function () {
            return this._b._a9;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "wrapText", {
        get: function () {
            return unwrapNullable(this._wrapText$i);
        },
        set: function (a) {
            arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
            this._wrapText$i = arguments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyResolvedWorksheetCellFormatData.prototype, "_wrapText$i", {
        get: function () {
            return this._b._c7;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyResolvedWorksheetCellFormatData.$t = markType(ReadOnlyResolvedWorksheetCellFormatData, 'ReadOnlyResolvedWorksheetCellFormatData', Base.$, [IWorksheetCellFormat_$type]);
    return ReadOnlyResolvedWorksheetCellFormatData;
}(Base));
export { ReadOnlyResolvedWorksheetCellFormatData };
//# sourceMappingURL=ReadOnlyResolvedWorksheetCellFormatData.js.map
