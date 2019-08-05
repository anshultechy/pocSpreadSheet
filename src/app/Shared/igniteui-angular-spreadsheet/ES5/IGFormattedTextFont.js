/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, NotSupportedException, Nullable$1, Boolean_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { MathUtilities, IWorkbookFont_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { NotImplementedException } from "../../igniteui-angular-core/ES5/NotImplementedException";
import { wrapNullable, unwrapNullable, nullableIsNull } from "../../igniteui-angular-core/ES5/nullable";
import { truncate } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var IGFormattedTextFont = /** @class */ (function (_super) {
    tslib_1.__extends(IGFormattedTextFont, _super);
    function IGFormattedTextFont() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._a = null;
        return _this;
    }
    IGFormattedTextFont.prototype._b = function (a) {
        if (!a.hasValue) {
            return Nullable$1.toNullable(Boolean_$type, null);
        }
        return Nullable$1.toNullable(Boolean_$type, a.value ? true : false);
    };
    Object.defineProperty(IGFormattedTextFont.prototype, "bold", {
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
    Object.defineProperty(IGFormattedTextFont.prototype, "_bold$i", {
        get: function () {
            return this._b(this._a._o);
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextFont.prototype, "colorInfo", {
        get: function () {
            return this._a._d;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextFont.prototype, "height", {
        get: function () {
            return truncate(MathUtilities.f(!nullableIsNull(this._a._p) ? this._a._p.value : 0));
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextFont.prototype, "italic", {
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
    Object.defineProperty(IGFormattedTextFont.prototype, "_italic$i", {
        get: function () {
            return this._b(this._a._q);
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextFont.prototype, "name", {
        get: function () {
            return this._a._v;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextFont.prototype, "strikeout", {
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
    Object.defineProperty(IGFormattedTextFont.prototype, "_strikeout$i", {
        get: function () {
            return this._b(this._a._r);
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextFont.prototype, "superscriptSubscriptStyle", {
        get: function () {
            return !nullableIsNull(this._a._s) ? this._a._s.value : -1;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IGFormattedTextFont.prototype, "underlineStyle", {
        get: function () {
            return !nullableIsNull(this._a._t) ? this._a._t.value : -1;
        },
        set: function (a) {
            throw new NotSupportedException(0);
        },
        enumerable: true,
        configurable: true
    });
    IGFormattedTextFont.prototype.setFontFormatting = function (a) {
        throw new NotImplementedException(0);
    };
    IGFormattedTextFont.$t = markType(IGFormattedTextFont, 'IGFormattedTextFont', Base.$, [IWorkbookFont_$type]);
    return IGFormattedTextFont;
}(Base));
export { IGFormattedTextFont };
//# sourceMappingURL=IGFormattedTextFont.js.map
