/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { XYChartDescription } from "./XYChartDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CategoryChartDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryChartDescription, _super);
    function CategoryChartDescription() {
        var _this = _super.call(this) || this;
        _this.hx = 0;
        _this.h3 = null;
        _this.h1 = null;
        _this.h2 = null;
        _this.g9 = false;
        _this.h4 = null;
        _this.h5 = null;
        _this.hi = 0;
        _this.hj = 0;
        _this.hh = 0;
        _this.hk = 0;
        _this.hl = 0;
        _this.hb = false;
        _this.hy = 0;
        _this.hn = 0;
        _this.hm = 0;
        _this.ho = 0;
        _this.g3 = null;
        _this.g4 = null;
        _this.ha = false;
        _this.g7 = false;
        _this.g8 = false;
        return _this;
    }
    CategoryChartDescription.prototype.get_type = function () {
        return "CategoryChart";
    };
    Object.defineProperty(CategoryChartDescription.prototype, "transitionInDuration", {
        get: function () {
            return this.hx;
        },
        set: function (a) {
            this.hx = a;
            this.e("TransitionInDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "transitionInEasingFunctionRef", {
        get: function () {
            return this.h3;
        },
        set: function (a) {
            this.h3 = a;
            this.e("TransitionInEasingFunctionRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "chartType", {
        get: function () {
            return this.h1;
        },
        set: function (a) {
            this.h1 = a;
            this.e("ChartType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "markerCollisionAvoidance", {
        get: function () {
            return this.h2;
        },
        set: function (a) {
            this.h2 = a;
            this.e("MarkerCollisionAvoidance");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "isTransitionInEnabled", {
        get: function () {
            return this.g9;
        },
        set: function (a) {
            this.g9 = a;
            this.e("IsTransitionInEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "transitionInMode", {
        get: function () {
            return this.h4;
        },
        set: function (a) {
            this.h4 = a;
            this.e("TransitionInMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "transitionInSpeedType", {
        get: function () {
            return this.h5;
        },
        set: function (a) {
            this.h5 = a;
            this.e("TransitionInSpeedType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "xAxisInterval", {
        get: function () {
            return this.hi;
        },
        set: function (a) {
            this.hi = a;
            this.e("XAxisInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "xAxisMinorInterval", {
        get: function () {
            return this.hj;
        },
        set: function (a) {
            this.hj = a;
            this.e("XAxisMinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "xAxisGap", {
        get: function () {
            return this.hh;
        },
        set: function (a) {
            this.hh = a;
            this.e("XAxisGap");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "xAxisOverlap", {
        get: function () {
            return this.hk;
        },
        set: function (a) {
            this.hk = a;
            this.e("XAxisOverlap");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "yAxisInterval", {
        get: function () {
            return this.hl;
        },
        set: function (a) {
            this.hl = a;
            this.e("YAxisInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "yAxisIsLogarithmic", {
        get: function () {
            return this.hb;
        },
        set: function (a) {
            this.hb = a;
            this.e("YAxisIsLogarithmic");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "yAxisLogarithmBase", {
        get: function () {
            return this.hy;
        },
        set: function (a) {
            this.hy = a;
            this.e("YAxisLogarithmBase");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "yAxisMinimumValue", {
        get: function () {
            return this.hn;
        },
        set: function (a) {
            this.hn = a;
            this.e("YAxisMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "yAxisMaximumValue", {
        get: function () {
            return this.hm;
        },
        set: function (a) {
            this.hm = a;
            this.e("YAxisMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "yAxisMinorInterval", {
        get: function () {
            return this.ho;
        },
        set: function (a) {
            this.ho = a;
            this.e("YAxisMinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "negativeBrushes", {
        get: function () {
            return this.g3;
        },
        set: function (a) {
            this.g3 = a;
            this.e("NegativeBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "negativeOutlines", {
        get: function () {
            return this.g4;
        },
        set: function (a) {
            this.g4 = a;
            this.e("NegativeOutlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "yAxisAbbreviateLargeNumbers", {
        get: function () {
            return this.ha;
        },
        set: function (a) {
            this.ha = a;
            this.e("YAxisAbbreviateLargeNumbers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "isCategoryHighlightingEnabled", {
        get: function () {
            return this.g7;
        },
        set: function (a) {
            this.g7 = a;
            this.e("IsCategoryHighlightingEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryChartDescription.prototype, "isItemHighlightingEnabled", {
        get: function () {
            return this.g8;
        },
        set: function (a) {
            this.g8 = a;
            this.e("IsItemHighlightingEnabled");
        },
        enumerable: true,
        configurable: true
    });
    CategoryChartDescription.$t = markType(CategoryChartDescription, 'CategoryChartDescription', XYChartDescription.$);
    return CategoryChartDescription;
}(XYChartDescription));
export { CategoryChartDescription };
//# sourceMappingURL=CategoryChartDescription.js.map