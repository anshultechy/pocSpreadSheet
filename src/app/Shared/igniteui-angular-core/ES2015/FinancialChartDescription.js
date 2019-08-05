/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { XYChartDescription } from "./XYChartDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class FinancialChartDescription extends XYChartDescription {
    constructor() {
        super();
        this.id = 0;
        this.ht = false;
        this.ih = 0;
        this.hz = false;
        this.i6 = 0;
        this.ij = 0;
        this.il = 0;
        this.ik = 0;
        this.im = 0;
        this.jf = null;
        this.jg = null;
        this.jj = null;
        this.hv = false;
        this.je = null;
        this.jh = null;
        this.hx = false;
        this.g7 = null;
        this.hc = null;
        this.hy = false;
        this.ig = 0;
        this.ji = null;
        this.jk = null;
        this.g8 = null;
        this.g9 = null;
        this.ha = null;
        this.hb = null;
        this.hf = null;
        this.he = null;
        this.g6 = null;
        this.g4 = null;
        this.ii = 0;
        this.ie = 0;
        this.ic = 0;
        this.g5 = null;
        this.i2 = 0;
        this.ib = 0;
        this.i5 = 0;
        this.i3 = 0;
        this.i1 = 0;
        this.i4 = 0;
        this.hd = null;
        this.g3 = null;
        this.hw = false;
        this.jl = null;
        this.io = 0;
        this.hu = false;
        this.h8 = new Date();
        this.h7 = new Date();
        this.jd = null;
    }
    get_type() {
        return "FinancialChart";
    }
    get leftMargin() {
        return this.id;
    }
    set leftMargin(a) {
        this.id = a;
        this.e("LeftMargin");
    }
    get isHorizontalZoomEnabled() {
        return this.ht;
    }
    set isHorizontalZoomEnabled(a) {
        this.ht = a;
        this.e("IsHorizontalZoomEnabled");
    }
    get toolbarHeight() {
        return this.ih;
    }
    set toolbarHeight(a) {
        this.ih = a;
        this.e("ToolbarHeight");
    }
    get yAxisIsLogarithmic() {
        return this.hz;
    }
    set yAxisIsLogarithmic(a) {
        this.hz = a;
        this.e("YAxisIsLogarithmic");
    }
    get yAxisLogarithmBase() {
        return this.i6;
    }
    set yAxisLogarithmBase(a) {
        this.i6 = a;
        this.e("YAxisLogarithmBase");
    }
    get yAxisInterval() {
        return this.ij;
    }
    set yAxisInterval(a) {
        this.ij = a;
        this.e("YAxisInterval");
    }
    get yAxisMinimumValue() {
        return this.il;
    }
    set yAxisMinimumValue(a) {
        this.il = a;
        this.e("YAxisMinimumValue");
    }
    get yAxisMaximumValue() {
        return this.ik;
    }
    set yAxisMaximumValue(a) {
        this.ik = a;
        this.e("YAxisMaximumValue");
    }
    get yAxisMinorInterval() {
        return this.im;
    }
    set yAxisMinorInterval(a) {
        this.im = a;
        this.e("YAxisMinorInterval");
    }
    get volumeType() {
        return this.jf;
    }
    set volumeType(a) {
        this.jf = a;
        this.e("VolumeType");
    }
    get xAxisMode() {
        return this.jg;
    }
    set xAxisMode(a) {
        this.jg = a;
        this.e("XAxisMode");
    }
    get yAxisMode() {
        return this.jj;
    }
    set yAxisMode(a) {
        this.jj = a;
        this.e("YAxisMode");
    }
    get isToolbarVisible() {
        return this.hv;
    }
    set isToolbarVisible(a) {
        this.hv = a;
        this.e("IsToolbarVisible");
    }
    get chartType() {
        return this.je;
    }
    set chartType(a) {
        this.je = a;
        this.e("ChartType");
    }
    get yAxisLabelHorizontalAlignment() {
        return this.jh;
    }
    set yAxisLabelHorizontalAlignment(a) {
        this.jh = a;
        this.e("YAxisLabelHorizontalAlignment");
    }
    get isWindowSyncedToVisibleRange() {
        return this.hx;
    }
    set isWindowSyncedToVisibleRange(a) {
        this.hx = a;
        this.e("IsWindowSyncedToVisibleRange");
    }
    get indicatorTypes() {
        return this.g7;
    }
    set indicatorTypes(a) {
        this.g7 = a;
        this.e("IndicatorTypes");
    }
    get overlayTypes() {
        return this.hc;
    }
    set overlayTypes(a) {
        this.hc = a;
        this.e("OverlayTypes");
    }
    get yAxisAbbreviateLargeNumbers() {
        return this.hy;
    }
    set yAxisAbbreviateLargeNumbers(a) {
        this.hy = a;
        this.e("YAxisAbbreviateLargeNumbers");
    }
    get resolution() {
        return this.ig;
    }
    set resolution(a) {
        this.ig = a;
        this.e("Resolution");
    }
    get yAxisLabelLocation() {
        return this.ji;
    }
    set yAxisLabelLocation(a) {
        this.ji = a;
        this.e("YAxisLabelLocation");
    }
    get zoomSliderType() {
        return this.jk;
    }
    set zoomSliderType(a) {
        this.jk = a;
        this.e("ZoomSliderType");
    }
    get negativeBrushes() {
        return this.g8;
    }
    set negativeBrushes(a) {
        this.g8 = a;
        this.e("NegativeBrushes");
    }
    get negativeOutlines() {
        return this.g9;
    }
    set negativeOutlines(a) {
        this.g9 = a;
        this.e("NegativeOutlines");
    }
    get overlayBrushes() {
        return this.ha;
    }
    set overlayBrushes(a) {
        this.ha = a;
        this.e("OverlayBrushes");
    }
    get overlayOutlines() {
        return this.hb;
    }
    set overlayOutlines(a) {
        this.hb = a;
        this.e("OverlayOutlines");
    }
    get volumeOutlines() {
        return this.hf;
    }
    set volumeOutlines(a) {
        this.hf = a;
        this.e("VolumeOutlines");
    }
    get volumeBrushes() {
        return this.he;
    }
    set volumeBrushes(a) {
        this.he = a;
        this.e("VolumeBrushes");
    }
    get indicatorNegativeBrushes() {
        return this.g6;
    }
    set indicatorNegativeBrushes(a) {
        this.g6 = a;
        this.e("IndicatorNegativeBrushes");
    }
    get indicatorBrushes() {
        return this.g4;
    }
    set indicatorBrushes(a) {
        this.g4 = a;
        this.e("IndicatorBrushes");
    }
    get volumeThickness() {
        return this.ii;
    }
    set volumeThickness(a) {
        this.ii = a;
        this.e("VolumeThickness");
    }
    get overlayThickness() {
        return this.ie;
    }
    set overlayThickness(a) {
        this.ie = a;
        this.e("OverlayThickness");
    }
    get indicatorThickness() {
        return this.ic;
    }
    set indicatorThickness(a) {
        this.ic = a;
        this.e("IndicatorThickness");
    }
    get indicatorDisplayTypes() {
        return this.g5;
    }
    set indicatorDisplayTypes(a) {
        this.g5 = a;
        this.e("IndicatorDisplayTypes");
    }
    get indicatorPeriod() {
        return this.i2;
    }
    set indicatorPeriod(a) {
        this.i2 = a;
        this.e("IndicatorPeriod");
    }
    get indicatorMultiplier() {
        return this.ib;
    }
    set indicatorMultiplier(a) {
        this.ib = a;
        this.e("IndicatorMultiplier");
    }
    get indicatorSmoothingPeriod() {
        return this.i5;
    }
    set indicatorSmoothingPeriod(a) {
        this.i5 = a;
        this.e("IndicatorSmoothingPeriod");
    }
    get indicatorShortPeriod() {
        return this.i3;
    }
    set indicatorShortPeriod(a) {
        this.i3 = a;
        this.e("IndicatorShortPeriod");
    }
    get indicatorLongPeriod() {
        return this.i1;
    }
    set indicatorLongPeriod(a) {
        this.i1 = a;
        this.e("IndicatorLongPeriod");
    }
    get indicatorSignalPeriod() {
        return this.i4;
    }
    set indicatorSignalPeriod(a) {
        this.i4 = a;
        this.e("IndicatorSignalPeriod");
    }
    get rangeSelectorOptions() {
        return this.hd;
    }
    set rangeSelectorOptions(a) {
        this.hd = a;
        this.e("RangeSelectorOptions");
    }
    get customIndicatorNames() {
        return this.g3;
    }
    set customIndicatorNames(a) {
        this.g3 = a;
        this.e("CustomIndicatorNames");
    }
    get isVerticalZoomEnabled() {
        return this.hw;
    }
    set isVerticalZoomEnabled(a) {
        this.hw = a;
        this.e("IsVerticalZoomEnabled");
    }
    get zoomSliderXAxisMajorStroke() {
        return this.jl;
    }
    set zoomSliderXAxisMajorStroke(a) {
        this.jl = a;
        this.e("ZoomSliderXAxisMajorStroke");
    }
    get zoomSliderXAxisMajorStrokeThickness() {
        return this.io;
    }
    set zoomSliderXAxisMajorStrokeThickness(a) {
        this.io = a;
        this.e("ZoomSliderXAxisMajorStrokeThickness");
    }
    get isLegendVisible() {
        return this.hu;
    }
    set isLegendVisible(a) {
        this.hu = a;
        this.e("IsLegendVisible");
    }
    get xAxisMinimumValue() {
        return this.h8;
    }
    set xAxisMinimumValue(a) {
        this.h8 = a;
        this.e("XAxisMinimumValue");
    }
    get xAxisMaximumValue() {
        return this.h7;
    }
    set xAxisMaximumValue(a) {
        this.h7 = a;
        this.e("XAxisMaximumValue");
    }
    get ApplyCustomIndicatorsRef() {
        return this.jd;
    }
    set ApplyCustomIndicatorsRef(a) {
        this.jd = a;
        this.e("ApplyCustomIndicatorsRef");
    }
}
FinancialChartDescription.$t = markType(FinancialChartDescription, 'FinancialChartDescription', XYChartDescription.$);
//# sourceMappingURL=FinancialChartDescription.js.map