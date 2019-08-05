/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, NotSupportedException, Nullable$1, Boolean_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { WorkbookColorInfo, ExcelUtils, ColorsInternal, IWorkbookFont_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { nullableNotEquals, wrapNullable, unwrapNullable } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var WorkbookFontSnapshot = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookFontSnapshot, _super);
    function WorkbookFontSnapshot(a) {
        var _this = _super.call(this) || this;
        _this._f = Nullable$1.toNullable(Boolean_$type, null);
        _this._c = null;
        _this._e = 0;
        _this._g = Nullable$1.toNullable(Boolean_$type, null);
        _this._i = null;
        _this._h = Nullable$1.toNullable(Boolean_$type, null);
        _this._a = 0;
        _this._b = 0;
        _this._j = new Color();
        _this._f = a._c2;
        _this._c = a._bh;
        _this._e = a._cq;
        _this._g = a._c3;
        _this._i = a._df;
        _this._h = a._c4;
        _this._a = a._a0;
        _this._b = a._a1;
        _this._j = WorkbookFontSnapshot._l(_this._c, a.v);
        return _this;
    }
    WorkbookFontSnapshot.prototype._d = function (a) {
        if (nullableNotEquals(this._f, a._c2) || WorkbookColorInfo.l_op_Inequality(this._c, a._bh) || this._e != a._cq || nullableNotEquals(this._g, a._c3) || this._i != a._df || nullableNotEquals(this._h, a._c4) || this._a != a._a0 || this._b != a._a1) {
            return new WorkbookFontSnapshot(a);
        }
        return this;
    };
    WorkbookFontSnapshot._l = function (a, b) {
        return WorkbookColorInfo.l_op_Equality(a, null) ? ColorsInternal.c : ExcelUtils.g1(a._aj(b, true, true));
    };
    WorkbookFontSnapshot.prototype.setFontFormatting = function (a) {
        throw new NotSupportedException(0);
    };
    Object.defineProperty(WorkbookFontSnapshot.prototype, "bold", {
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
    Object.defineProperty(WorkbookFontSnapshot.prototype, "_bold$i", {
        get: function () {
            return this._f;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "colorInfo", {
        get: function () {
            return this._c;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "height", {
        get: function () {
            return this._e;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "italic", {
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
    Object.defineProperty(WorkbookFontSnapshot.prototype, "_italic$i", {
        get: function () {
            return this._g;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "name", {
        get: function () {
            return this._i;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "strikeout", {
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
    Object.defineProperty(WorkbookFontSnapshot.prototype, "_strikeout$i", {
        get: function () {
            return this._h;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "superscriptSubscriptStyle", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "underlineStyle", {
        get: function () {
            return this._b;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookFontSnapshot.prototype, "_k", {
        get: function () {
            return this._j;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    WorkbookFontSnapshot.$t = markType(WorkbookFontSnapshot, 'WorkbookFontSnapshot', Base.$, [IWorkbookFont_$type]);
    return WorkbookFontSnapshot;
}(Base));
export { WorkbookFontSnapshot };
//# sourceMappingURL=WorkbookFontSnapshot.js.map
