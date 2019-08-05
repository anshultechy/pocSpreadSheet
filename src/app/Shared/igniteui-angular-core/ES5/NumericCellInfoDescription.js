/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var NumericCellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NumericCellInfoDescription, _super);
    function NumericCellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.c6 = 0;
        _this.c2 = false;
        _this.de = null;
        _this.df = null;
        _this.dh = null;
        _this.dg = null;
        _this.di = null;
        _this.c8 = 0;
        _this.c9 = 0;
        _this.da = 0;
        _this.c3 = false;
        return _this;
    }
    NumericCellInfoDescription.prototype.get_type = function () {
        return "NumericCellInfo";
    };
    Object.defineProperty(NumericCellInfoDescription.prototype, "numericValue", {
        get: function () {
            return this.c6;
        },
        set: function (a) {
            this.c6 = a;
            this.e("NumericValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "hasDecimalValue", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("HasDecimalValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "formatOverrideRef", {
        get: function () {
            return this.de;
        },
        set: function (a) {
            this.de = a;
            this.e("FormatOverrideRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "negativePrefix", {
        get: function () {
            return this.df;
        },
        set: function (a) {
            this.df = a;
            this.e("NegativePrefix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "positivePrefix", {
        get: function () {
            return this.dh;
        },
        set: function (a) {
            this.dh = a;
            this.e("PositivePrefix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "negativeSuffix", {
        get: function () {
            return this.dg;
        },
        set: function (a) {
            this.dg = a;
            this.e("NegativeSuffix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "positiveSuffix", {
        get: function () {
            return this.di;
        },
        set: function (a) {
            this.di = a;
            this.e("PositiveSuffix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "maxFractionDigits", {
        get: function () {
            return this.c8;
        },
        set: function (a) {
            this.c8 = a;
            this.e("MaxFractionDigits");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "minFractionDigits", {
        get: function () {
            return this.c9;
        },
        set: function (a) {
            this.c9 = a;
            this.e("MinFractionDigits");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "minIntegerDigits", {
        get: function () {
            return this.da;
        },
        set: function (a) {
            this.da = a;
            this.e("MinIntegerDigits");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericCellInfoDescription.prototype, "showGroupingSeparator", {
        get: function () {
            return this.c3;
        },
        set: function (a) {
            this.c3 = a;
            this.e("ShowGroupingSeparator");
        },
        enumerable: true,
        configurable: true
    });
    NumericCellInfoDescription.$t = markType(NumericCellInfoDescription, 'NumericCellInfoDescription', CellInfoDescription.$);
    return NumericCellInfoDescription;
}(CellInfoDescription));
export { NumericCellInfoDescription };
//# sourceMappingURL=NumericCellInfoDescription.js.map