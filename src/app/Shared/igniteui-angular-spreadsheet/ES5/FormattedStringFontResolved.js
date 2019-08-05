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
var FormattedStringFontResolved = /** @class */ (function (_super) {
    tslib_1.__extends(FormattedStringFontResolved, _super);
    function FormattedStringFontResolved(a, b) {
        var _this = _super.call(this) || this;
        _this._b = null;
        _this._a = null;
        _this._a = a;
        _this._b = b;
        return _this;
    }
    FormattedStringFontResolved.prototype._c = function (a, b) {
        this._a = a;
        this._b = b;
    };
    FormattedStringFontResolved.prototype.setFontFormatting = function (a) {
        throw new NotSupportedException(0);
    };
    Object.defineProperty(FormattedStringFontResolved.prototype, "bold", {
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
    Object.defineProperty(FormattedStringFontResolved.prototype, "_bold$i", {
        get: function () {
            var a = this._a._bold$i;
            if (nullableEquals(a, null)) {
                a = this._b._c2;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedStringFontResolved.prototype, "colorInfo", {
        get: function () {
            var a = this._a.colorInfo;
            if (WorkbookColorInfo.l_op_Equality(a, null)) {
                a = this._b._bh;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedStringFontResolved.prototype, "height", {
        get: function () {
            var a = this._a.height;
            if (a < 0) {
                a = this._b._cq;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedStringFontResolved.prototype, "italic", {
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
    Object.defineProperty(FormattedStringFontResolved.prototype, "_italic$i", {
        get: function () {
            var a = this._a._italic$i;
            if (nullableEquals(a, null)) {
                a = this._b._c3;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedStringFontResolved.prototype, "name", {
        get: function () {
            var a = this._a.name;
            if (a == null) {
                a = this._b._df;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedStringFontResolved.prototype, "strikeout", {
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
    Object.defineProperty(FormattedStringFontResolved.prototype, "_strikeout$i", {
        get: function () {
            var a = this._a._strikeout$i;
            if (nullableEquals(a, null)) {
                a = this._b._c4;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedStringFontResolved.prototype, "superscriptSubscriptStyle", {
        get: function () {
            var a = this._a.superscriptSubscriptStyle;
            if (a == -1) {
                a = this._b._a0;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedStringFontResolved.prototype, "underlineStyle", {
        get: function () {
            var a = this._a.underlineStyle;
            if (a == -1) {
                a = this._b._a1;
            }
            return a;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    FormattedStringFontResolved.$t = markType(FormattedStringFontResolved, 'FormattedStringFontResolved', Base.$, [IWorkbookFont_$type]);
    return FormattedStringFontResolved;
}(Base));
export { FormattedStringFontResolved };
//# sourceMappingURL=FormattedStringFontResolved.js.map
