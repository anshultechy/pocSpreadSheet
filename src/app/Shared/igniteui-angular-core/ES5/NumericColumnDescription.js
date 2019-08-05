/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColumnDescription } from "./ColumnDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var NumericColumnDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NumericColumnDescription, _super);
    function NumericColumnDescription() {
        var _this = _super.call(this) || this;
        _this.cl = null;
        _this.cn = null;
        _this.cm = null;
        _this.co = null;
        _this.ce = 0;
        _this.cf = 0;
        _this.cg = 0;
        _this.cc = false;
        _this.ck = null;
        return _this;
    }
    NumericColumnDescription.prototype.get_type = function () {
        return "NumericColumn";
    };
    Object.defineProperty(NumericColumnDescription.prototype, "negativePrefix", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("NegativePrefix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "positivePrefix", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            this.cn = a;
            this.e("PositivePrefix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "negativeSuffix", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("NegativeSuffix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "positiveSuffix", {
        get: function () {
            return this.co;
        },
        set: function (a) {
            this.co = a;
            this.e("PositiveSuffix");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "maxFractionDigits", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("MaxFractionDigits");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "minFractionDigits", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("MinFractionDigits");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "minIntegerDigits", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("MinIntegerDigits");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "showGroupingSeparator", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("ShowGroupingSeparator");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericColumnDescription.prototype, "formatOverrideRef", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("FormatOverrideRef");
        },
        enumerable: true,
        configurable: true
    });
    NumericColumnDescription.$t = markType(NumericColumnDescription, 'NumericColumnDescription', ColumnDescription.$);
    return NumericColumnDescription;
}(ColumnDescription));
export { NumericColumnDescription };
//# sourceMappingURL=NumericColumnDescription.js.map