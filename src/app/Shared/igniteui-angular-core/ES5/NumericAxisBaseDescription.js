/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AxisDescription } from "./AxisDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var NumericAxisBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NumericAxisBaseDescription, _super);
    function NumericAxisBaseDescription() {
        var _this = _super.call(this) || this;
        _this.de = 0;
        _this.c8 = 0;
        _this.db = 0;
        _this.dd = 0;
        _this.c7 = 0;
        _this.da = 0;
        _this.dc = 0;
        _this.c6 = 0;
        _this.df = 0;
        _this.c9 = 0;
        _this.dg = 0;
        _this.c2 = false;
        _this.c1 = false;
        _this.dt = 0;
        _this.c0 = false;
        return _this;
    }
    NumericAxisBaseDescription.prototype.get_type = function () {
        return "NumericAxisBase";
    };
    Object.defineProperty(NumericAxisBaseDescription.prototype, "minimumValue", {
        get: function () {
            return this.de;
        },
        set: function (a) {
            this.de = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "actualMinimumValue", {
        get: function () {
            return this.c8;
        },
        set: function (a) {
            this.c8 = a;
            this.e("ActualMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "actualVisibleMinimumValue", {
        get: function () {
            return this.db;
        },
        set: function (a) {
            this.db = a;
            this.e("ActualVisibleMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "maximumValue", {
        get: function () {
            return this.dd;
        },
        set: function (a) {
            this.dd = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "actualMaximumValue", {
        get: function () {
            return this.c7;
        },
        set: function (a) {
            this.c7 = a;
            this.e("ActualMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "actualVisibleMaximumValue", {
        get: function () {
            return this.da;
        },
        set: function (a) {
            this.da = a;
            this.e("ActualVisibleMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "interval", {
        get: function () {
            return this.dc;
        },
        set: function (a) {
            this.dc = a;
            this.e("Interval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "actualInterval", {
        get: function () {
            return this.c6;
        },
        set: function (a) {
            this.c6 = a;
            this.e("ActualInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "minorInterval", {
        get: function () {
            return this.df;
        },
        set: function (a) {
            this.df = a;
            this.e("MinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "actualMinorInterval", {
        get: function () {
            return this.c9;
        },
        set: function (a) {
            this.c9 = a;
            this.e("ActualMinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "referenceValue", {
        get: function () {
            return this.dg;
        },
        set: function (a) {
            this.dg = a;
            this.e("ReferenceValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "isLogarithmic", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("IsLogarithmic");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "actualIsLogarithmic", {
        get: function () {
            return this.c1;
        },
        set: function (a) {
            this.c1 = a;
            this.e("ActualIsLogarithmic");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "logarithmBase", {
        get: function () {
            return this.dt;
        },
        set: function (a) {
            this.dt = a;
            this.e("LogarithmBase");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericAxisBaseDescription.prototype, "abbreviateLargeNumbers", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("AbbreviateLargeNumbers");
        },
        enumerable: true,
        configurable: true
    });
    NumericAxisBaseDescription.$t = markType(NumericAxisBaseDescription, 'NumericAxisBaseDescription', AxisDescription.$);
    return NumericAxisBaseDescription;
}(AxisDescription));
export { NumericAxisBaseDescription };
//# sourceMappingURL=NumericAxisBaseDescription.js.map