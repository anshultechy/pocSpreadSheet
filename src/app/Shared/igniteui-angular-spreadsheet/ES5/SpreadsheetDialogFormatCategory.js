/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetDialogFormatBase } from "./SpreadsheetDialogFormatBase";
import { SpreadsheetDialogFormat } from "./SpreadsheetDialogFormat";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { markType } from "../../igniteui-angular-core/ES5/type";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
/**
 * @hidden
 */
var SpreadsheetDialogFormatCategory = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDialogFormatCategory, _super);
    function SpreadsheetDialogFormatCategory() {
        var _this = _super.call(this) || this;
        _this._d = null;
        _this._z = null;
        _this._ad = null;
        _this._ab = null;
        _this._v = null;
        _this._x = 0;
        _this._k = false;
        _this._g = false;
        _this._f = 0;
        _this._w = new List$1(SpreadsheetDialogFormat.$, 0);
        _this._y = 2;
        _this._l = false;
        _this._h = true;
        _this._e = 1;
        return _this;
    }
    SpreadsheetDialogFormatCategory.prototype.toString = function () {
        return this._aa;
    };
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_aa", {
        get: function () {
            return this._z;
        },
        set: function (a) {
            this._z = a;
            this._a("CategoryName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_ae", {
        get: function () {
            return this._ad;
        },
        set: function (a) {
            this._ad = a;
            this._a("FormatsHeader");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_ac", {
        get: function () {
            return this._ab;
        },
        set: function (a) {
            this._ab = a;
            this._a("Description");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_w", {
        get: function () {
            return this._v;
        },
        set: function (a) {
            this._v = a;
            this._a("Formats");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_y", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
            this._a("DecimalPlaces");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_l", {
        get: function () {
            return this._k;
        },
        set: function (a) {
            this._k = a;
            this._a("IsCustom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_h", {
        get: function () {
            return this._g;
        },
        set: function (a) {
            this._g = a;
            this._a("AreFormatsVisible");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_e", {
        get: function () {
            return this._f;
        },
        set: function (a) {
            this._f = a;
            this._a("CategoryType");
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetDialogFormatCategory.prototype._b = function (a) {
        var b = new SpreadsheetDialogFormat(0, a, a);
        this._w.add(b);
        return b;
    };
    SpreadsheetDialogFormatCategory.prototype._af = function (a, b) {
        this._w.add(new SpreadsheetDialogFormat(0, a, b));
    };
    SpreadsheetDialogFormatCategory.prototype._c = function (a) {
        return Enumerable.ag(SpreadsheetDialogFormat.$, this._w, function (b) { return b._e.toLowerCase() == a.toLowerCase(); });
    };
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_o", {
        get: function () {
            return this._f == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_p", {
        get: function () {
            return this._f == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_j", {
        get: function () {
            return this._f == 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_i", {
        get: function () {
            return this._f == 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_m", {
        get: function () {
            return this._f == 4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_u", {
        get: function () {
            return this._f == 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_q", {
        get: function () {
            return this._f == 6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_n", {
        get: function () {
            return this._f == 7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_r", {
        get: function () {
            return this._f == 8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_t", {
        get: function () {
            return this._f == 9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetDialogFormatCategory.prototype, "_s", {
        get: function () {
            return this._f == 10;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetDialogFormatCategory.$t = markType(SpreadsheetDialogFormatCategory, 'SpreadsheetDialogFormatCategory', SpreadsheetDialogFormatBase.$);
    return SpreadsheetDialogFormatCategory;
}(SpreadsheetDialogFormatBase));
export { SpreadsheetDialogFormatCategory };
//# sourceMappingURL=SpreadsheetDialogFormatCategory.js.map
