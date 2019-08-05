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
var FinancialChartDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialChartDescription, _super);
    function FinancialChartDescription() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        _this.ht = false;
        _this.ih = 0;
        _this.hz = false;
        _this.i6 = 0;
        _this.ij = 0;
        _this.il = 0;
        _this.ik = 0;
        _this.im = 0;
        _this.jf = null;
        _this.jg = null;
        _this.jj = null;
        _this.hv = false;
        _this.je = null;
        _this.jh = null;
        _this.hx = false;
        _this.g7 = null;
        _this.hc = null;
        _this.hy = false;
        _this.ig = 0;
        _this.ji = null;
        _this.jk = null;
        _this.g8 = null;
        _this.g9 = null;
        _this.ha = null;
        _this.hb = null;
        _this.hf = null;
        _this.he = null;
        _this.g6 = null;
        _this.g4 = null;
        _this.ii = 0;
        _this.ie = 0;
        _this.ic = 0;
        _this.g5 = null;
        _this.i2 = 0;
        _this.ib = 0;
        _this.i5 = 0;
        _this.i3 = 0;
        _this.i1 = 0;
        _this.i4 = 0;
        _this.hd = null;
        _this.g3 = null;
        _this.hw = false;
        _this.jl = null;
        _this.io = 0;
        _this.hu = false;
        _this.h8 = new Date();
        _this.h7 = new Date();
        _this.jd = null;
        return _this;
    }
    FinancialChartDescription.prototype.get_type = function () {
        return "FinancialChart";
    };
    Object.defineProperty(FinancialChartDescription.prototype, "leftMargin", {
        get: function () {
            return this.id;
        },
        set: function (a) {
            this.id = a;
            this.e("LeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "isHorizontalZoomEnabled", {
        get: function () {
            return this.ht;
        },
        set: function (a) {
            this.ht = a;
            this.e("IsHorizontalZoomEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "toolbarHeight", {
        get: function () {
            return this.ih;
        },
        set: function (a) {
            this.ih = a;
            this.e("ToolbarHeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisIsLogarithmic", {
        get: function () {
            return this.hz;
        },
        set: function (a) {
            this.hz = a;
            this.e("YAxisIsLogarithmic");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisLogarithmBase", {
        get: function () {
            return this.i6;
        },
        set: function (a) {
            this.i6 = a;
            this.e("YAxisLogarithmBase");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisInterval", {
        get: function () {
            return this.ij;
        },
        set: function (a) {
            this.ij = a;
            this.e("YAxisInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisMinimumValue", {
        get: function () {
            return this.il;
        },
        set: function (a) {
            this.il = a;
            this.e("YAxisMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisMaximumValue", {
        get: function () {
            return this.ik;
        },
        set: function (a) {
            this.ik = a;
            this.e("YAxisMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisMinorInterval", {
        get: function () {
            return this.im;
        },
        set: function (a) {
            this.im = a;
            this.e("YAxisMinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "volumeType", {
        get: function () {
            return this.jf;
        },
        set: function (a) {
            this.jf = a;
            this.e("VolumeType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "xAxisMode", {
        get: function () {
            return this.jg;
        },
        set: function (a) {
            this.jg = a;
            this.e("XAxisMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisMode", {
        get: function () {
            return this.jj;
        },
        set: function (a) {
            this.jj = a;
            this.e("YAxisMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "isToolbarVisible", {
        get: function () {
            return this.hv;
        },
        set: function (a) {
            this.hv = a;
            this.e("IsToolbarVisible");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "chartType", {
        get: function () {
            return this.je;
        },
        set: function (a) {
            this.je = a;
            this.e("ChartType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisLabelHorizontalAlignment", {
        get: function () {
            return this.jh;
        },
        set: function (a) {
            this.jh = a;
            this.e("YAxisLabelHorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "isWindowSyncedToVisibleRange", {
        get: function () {
            return this.hx;
        },
        set: function (a) {
            this.hx = a;
            this.e("IsWindowSyncedToVisibleRange");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorTypes", {
        get: function () {
            return this.g7;
        },
        set: function (a) {
            this.g7 = a;
            this.e("IndicatorTypes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "overlayTypes", {
        get: function () {
            return this.hc;
        },
        set: function (a) {
            this.hc = a;
            this.e("OverlayTypes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisAbbreviateLargeNumbers", {
        get: function () {
            return this.hy;
        },
        set: function (a) {
            this.hy = a;
            this.e("YAxisAbbreviateLargeNumbers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "resolution", {
        get: function () {
            return this.ig;
        },
        set: function (a) {
            this.ig = a;
            this.e("Resolution");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "yAxisLabelLocation", {
        get: function () {
            return this.ji;
        },
        set: function (a) {
            this.ji = a;
            this.e("YAxisLabelLocation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "zoomSliderType", {
        get: function () {
            return this.jk;
        },
        set: function (a) {
            this.jk = a;
            this.e("ZoomSliderType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "negativeBrushes", {
        get: function () {
            return this.g8;
        },
        set: function (a) {
            this.g8 = a;
            this.e("NegativeBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "negativeOutlines", {
        get: function () {
            return this.g9;
        },
        set: function (a) {
            this.g9 = a;
            this.e("NegativeOutlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "overlayBrushes", {
        get: function () {
            return this.ha;
        },
        set: function (a) {
            this.ha = a;
            this.e("OverlayBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "overlayOutlines", {
        get: function () {
            return this.hb;
        },
        set: function (a) {
            this.hb = a;
            this.e("OverlayOutlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "volumeOutlines", {
        get: function () {
            return this.hf;
        },
        set: function (a) {
            this.hf = a;
            this.e("VolumeOutlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "volumeBrushes", {
        get: function () {
            return this.he;
        },
        set: function (a) {
            this.he = a;
            this.e("VolumeBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorNegativeBrushes", {
        get: function () {
            return this.g6;
        },
        set: function (a) {
            this.g6 = a;
            this.e("IndicatorNegativeBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorBrushes", {
        get: function () {
            return this.g4;
        },
        set: function (a) {
            this.g4 = a;
            this.e("IndicatorBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "volumeThickness", {
        get: function () {
            return this.ii;
        },
        set: function (a) {
            this.ii = a;
            this.e("VolumeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "overlayThickness", {
        get: function () {
            return this.ie;
        },
        set: function (a) {
            this.ie = a;
            this.e("OverlayThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorThickness", {
        get: function () {
            return this.ic;
        },
        set: function (a) {
            this.ic = a;
            this.e("IndicatorThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorDisplayTypes", {
        get: function () {
            return this.g5;
        },
        set: function (a) {
            this.g5 = a;
            this.e("IndicatorDisplayTypes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorPeriod", {
        get: function () {
            return this.i2;
        },
        set: function (a) {
            this.i2 = a;
            this.e("IndicatorPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorMultiplier", {
        get: function () {
            return this.ib;
        },
        set: function (a) {
            this.ib = a;
            this.e("IndicatorMultiplier");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorSmoothingPeriod", {
        get: function () {
            return this.i5;
        },
        set: function (a) {
            this.i5 = a;
            this.e("IndicatorSmoothingPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorShortPeriod", {
        get: function () {
            return this.i3;
        },
        set: function (a) {
            this.i3 = a;
            this.e("IndicatorShortPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorLongPeriod", {
        get: function () {
            return this.i1;
        },
        set: function (a) {
            this.i1 = a;
            this.e("IndicatorLongPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "indicatorSignalPeriod", {
        get: function () {
            return this.i4;
        },
        set: function (a) {
            this.i4 = a;
            this.e("IndicatorSignalPeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "rangeSelectorOptions", {
        get: function () {
            return this.hd;
        },
        set: function (a) {
            this.hd = a;
            this.e("RangeSelectorOptions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "customIndicatorNames", {
        get: function () {
            return this.g3;
        },
        set: function (a) {
            this.g3 = a;
            this.e("CustomIndicatorNames");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "isVerticalZoomEnabled", {
        get: function () {
            return this.hw;
        },
        set: function (a) {
            this.hw = a;
            this.e("IsVerticalZoomEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "zoomSliderXAxisMajorStroke", {
        get: function () {
            return this.jl;
        },
        set: function (a) {
            this.jl = a;
            this.e("ZoomSliderXAxisMajorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "zoomSliderXAxisMajorStrokeThickness", {
        get: function () {
            return this.io;
        },
        set: function (a) {
            this.io = a;
            this.e("ZoomSliderXAxisMajorStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "isLegendVisible", {
        get: function () {
            return this.hu;
        },
        set: function (a) {
            this.hu = a;
            this.e("IsLegendVisible");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "xAxisMinimumValue", {
        get: function () {
            return this.h8;
        },
        set: function (a) {
            this.h8 = a;
            this.e("XAxisMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "xAxisMaximumValue", {
        get: function () {
            return this.h7;
        },
        set: function (a) {
            this.h7 = a;
            this.e("XAxisMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialChartDescription.prototype, "ApplyCustomIndicatorsRef", {
        get: function () {
            return this.jd;
        },
        set: function (a) {
            this.jd = a;
            this.e("ApplyCustomIndicatorsRef");
        },
        enumerable: true,
        configurable: true
    });
    FinancialChartDescription.$t = markType(FinancialChartDescription, 'FinancialChartDescription', XYChartDescription.$);
    return FinancialChartDescription;
}(XYChartDescription));
export { FinancialChartDescription };
//# sourceMappingURL=FinancialChartDescription.js.map