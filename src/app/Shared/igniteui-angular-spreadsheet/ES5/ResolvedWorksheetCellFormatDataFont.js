/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, NotSupportedException, Boolean_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { IWorkbookFont_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { wrapNullable, unwrapNullable } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var ResolvedWorksheetCellFormatDataFont = /** @class */ (function (_super) {
    tslib_1.__extends(ResolvedWorksheetCellFormatDataFont, _super);
    function ResolvedWorksheetCellFormatDataFont(a) {
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._b(a);
        return _this;
    }
    ResolvedWorksheetCellFormatDataFont.prototype._b = function (a) {
        this._a = a;
    };
    ResolvedWorksheetCellFormatDataFont.prototype.setFontFormatting = function (a) {
        throw new NotSupportedException(0);
    };
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "bold", {
        get: function () {
            return unwrapNullable(this._bold$i);
        },
        set: function (a) {
            arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
            this._bold$i = arguments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "_bold$i", {
        get: function () {
            return this._a._c2;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "colorInfo", {
        get: function () {
            return this._a._bh;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "height", {
        get: function () {
            return this._a._cq;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "italic", {
        get: function () {
            return unwrapNullable(this._italic$i);
        },
        set: function (a) {
            arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
            this._italic$i = arguments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "_italic$i", {
        get: function () {
            return this._a._c3;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "name", {
        get: function () {
            return this._a._df;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "strikeout", {
        get: function () {
            return unwrapNullable(this._strikeout$i);
        },
        set: function (a) {
            arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
            this._strikeout$i = arguments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "_strikeout$i", {
        get: function () {
            return this._a._c4;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "superscriptSubscriptStyle", {
        get: function () {
            return this._a._a0;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorksheetCellFormatDataFont.prototype, "underlineStyle", {
        get: function () {
            return this._a._a1;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    ResolvedWorksheetCellFormatDataFont.$t = markType(ResolvedWorksheetCellFormatDataFont, 'ResolvedWorksheetCellFormatDataFont', Base.$, [IWorkbookFont_$type]);
    return ResolvedWorksheetCellFormatDataFont;
}(Base));
export { ResolvedWorksheetCellFormatDataFont };
//# sourceMappingURL=ResolvedWorksheetCellFormatDataFont.js.map
