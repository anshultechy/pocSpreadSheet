/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, NotSupportedException, Boolean_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { WorkbookColorInfo, IWorkbookFont_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { wrapNullable, unwrapNullable, nullableEquals } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var ResolvedWorkbookFont = /** @class */ (function (_super) {
    tslib_1.__extends(ResolvedWorkbookFont, _super);
    function ResolvedWorkbookFont(a, b, c) {
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._b = null;
        _this._c = null;
        _this._b = a;
        _this._a = b;
        _this._c = c;
        return _this;
    }
    ResolvedWorkbookFont.prototype._d = function (a) {
        this._b = a;
    };
    ResolvedWorkbookFont.prototype.setFontFormatting = function (a) {
        throw new NotSupportedException(0);
    };
    Object.defineProperty(ResolvedWorkbookFont.prototype, "bold", {
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
    Object.defineProperty(ResolvedWorkbookFont.prototype, "_bold$i", {
        get: function () {
            var a = this._b._bold$i;
            if (nullableEquals(a, null)) {
                a = this._a._bold$i;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorkbookFont.prototype, "colorInfo", {
        get: function () {
            var a = this._b.colorInfo;
            if (WorkbookColorInfo.l_op_Equality(a, null)) {
                a = this._a.colorInfo;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorkbookFont.prototype, "height", {
        get: function () {
            var a = this._b.height;
            if (a < 0) {
                a = this._a.height;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorkbookFont.prototype, "italic", {
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
    Object.defineProperty(ResolvedWorkbookFont.prototype, "_italic$i", {
        get: function () {
            var a = this._b._italic$i;
            if (nullableEquals(a, null)) {
                a = this._a._italic$i;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorkbookFont.prototype, "name", {
        get: function () {
            var a = this._b.name;
            if (a == null) {
                a = this._a.name;
            }
            if (this._c != null) {
                a = this._c._gv(a);
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorkbookFont.prototype, "strikeout", {
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
    Object.defineProperty(ResolvedWorkbookFont.prototype, "_strikeout$i", {
        get: function () {
            var a = this._b._strikeout$i;
            if (nullableEquals(a, null)) {
                a = this._a._strikeout$i;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorkbookFont.prototype, "superscriptSubscriptStyle", {
        get: function () {
            var a = this._b.superscriptSubscriptStyle;
            if (a == -1) {
                a = this._a.superscriptSubscriptStyle;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolvedWorkbookFont.prototype, "underlineStyle", {
        get: function () {
            var a = this._b.underlineStyle;
            if (a == -1) {
                a = this._a.underlineStyle;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    ResolvedWorkbookFont.$t = markType(ResolvedWorkbookFont, 'ResolvedWorkbookFont', Base.$, [IWorkbookFont_$type]);
    return ResolvedWorkbookFont;
}(Base));
export { ResolvedWorkbookFont };
//# sourceMappingURL=ResolvedWorkbookFont.js.map
