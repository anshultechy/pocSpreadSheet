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
export class CategoryChartDescription extends XYChartDescription {
    constructor() {
        super();
        this.hx = 0;
        this.h3 = null;
        this.h1 = null;
        this.h2 = null;
        this.g9 = false;
        this.h4 = null;
        this.h5 = null;
        this.hi = 0;
        this.hj = 0;
        this.hh = 0;
        this.hk = 0;
        this.hl = 0;
        this.hb = false;
        this.hy = 0;
        this.hn = 0;
        this.hm = 0;
        this.ho = 0;
        this.g3 = null;
        this.g4 = null;
        this.ha = false;
        this.g7 = false;
        this.g8 = false;
    }
    get_type() {
        return "CategoryChart";
    }
    get transitionInDuration() {
        return this.hx;
    }
    set transitionInDuration(a) {
        this.hx = a;
        this.e("TransitionInDuration");
    }
    get transitionInEasingFunctionRef() {
        return this.h3;
    }
    set transitionInEasingFunctionRef(a) {
        this.h3 = a;
        this.e("TransitionInEasingFunctionRef");
    }
    get chartType() {
        return this.h1;
    }
    set chartType(a) {
        this.h1 = a;
        this.e("ChartType");
    }
    get markerCollisionAvoidance() {
        return this.h2;
    }
    set markerCollisionAvoidance(a) {
        this.h2 = a;
        this.e("MarkerCollisionAvoidance");
    }
    get isTransitionInEnabled() {
        return this.g9;
    }
    set isTransitionInEnabled(a) {
        this.g9 = a;
        this.e("IsTransitionInEnabled");
    }
    get transitionInMode() {
        return this.h4;
    }
    set transitionInMode(a) {
        this.h4 = a;
        this.e("TransitionInMode");
    }
    get transitionInSpeedType() {
        return this.h5;
    }
    set transitionInSpeedType(a) {
        this.h5 = a;
        this.e("TransitionInSpeedType");
    }
    get xAxisInterval() {
        return this.hi;
    }
    set xAxisInterval(a) {
        this.hi = a;
        this.e("XAxisInterval");
    }
    get xAxisMinorInterval() {
        return this.hj;
    }
    set xAxisMinorInterval(a) {
        this.hj = a;
        this.e("XAxisMinorInterval");
    }
    get xAxisGap() {
        return this.hh;
    }
    set xAxisGap(a) {
        this.hh = a;
        this.e("XAxisGap");
    }
    get xAxisOverlap() {
        return this.hk;
    }
    set xAxisOverlap(a) {
        this.hk = a;
        this.e("XAxisOverlap");
    }
    get yAxisInterval() {
        return this.hl;
    }
    set yAxisInterval(a) {
        this.hl = a;
        this.e("YAxisInterval");
    }
    get yAxisIsLogarithmic() {
        return this.hb;
    }
    set yAxisIsLogarithmic(a) {
        this.hb = a;
        this.e("YAxisIsLogarithmic");
    }
    get yAxisLogarithmBase() {
        return this.hy;
    }
    set yAxisLogarithmBase(a) {
        this.hy = a;
        this.e("YAxisLogarithmBase");
    }
    get yAxisMinimumValue() {
        return this.hn;
    }
    set yAxisMinimumValue(a) {
        this.hn = a;
        this.e("YAxisMinimumValue");
    }
    get yAxisMaximumValue() {
        return this.hm;
    }
    set yAxisMaximumValue(a) {
        this.hm = a;
        this.e("YAxisMaximumValue");
    }
    get yAxisMinorInterval() {
        return this.ho;
    }
    set yAxisMinorInterval(a) {
        this.ho = a;
        this.e("YAxisMinorInterval");
    }
    get negativeBrushes() {
        return this.g3;
    }
    set negativeBrushes(a) {
        this.g3 = a;
        this.e("NegativeBrushes");
    }
    get negativeOutlines() {
        return this.g4;
    }
    set negativeOutlines(a) {
        this.g4 = a;
        this.e("NegativeOutlines");
    }
    get yAxisAbbreviateLargeNumbers() {
        return this.ha;
    }
    set yAxisAbbreviateLargeNumbers(a) {
        this.ha = a;
        this.e("YAxisAbbreviateLargeNumbers");
    }
    get isCategoryHighlightingEnabled() {
        return this.g7;
    }
    set isCategoryHighlightingEnabled(a) {
        this.g7 = a;
        this.e("IsCategoryHighlightingEnabled");
    }
    get isItemHighlightingEnabled() {
        return this.g8;
    }
    set isItemHighlightingEnabled(a) {
        this.g8 = a;
        this.e("IsItemHighlightingEnabled");
    }
}
CategoryChartDescription.$t = markType(CategoryChartDescription, 'CategoryChartDescription', XYChartDescription.$);
//# sourceMappingURL=CategoryChartDescription.js.map