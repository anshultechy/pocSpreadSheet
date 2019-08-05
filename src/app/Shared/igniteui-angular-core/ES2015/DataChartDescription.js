/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SeriesViewerDescription } from "./SeriesViewerDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class DataChartDescription extends SeriesViewerDescription {
    constructor() {
        super();
        this.eb = false;
        this.en = 0;
        this.eo = 0;
        this.eh = 0;
        this.ei = 0;
        this.ea = false;
        this.ec = false;
        this.e0 = null;
        this.d9 = false;
        this.d0 = null;
        this.d1 = null;
        this.d3 = null;
        this.d2 = null;
        this.ez = null;
        this.ex = null;
        this.ey = null;
        this.ek = 0;
        this.em = 0;
        this.el = 0;
        this.ej = 0;
        this.dz = null;
        this.e2 = null;
        this.e1 = null;
    }
    get_type() {
        return "DataChart";
    }
    get isSquare() {
        return this.eb;
    }
    set isSquare(a) {
        this.eb = a;
        this.e("IsSquare");
    }
    get windowScaleHorizontal() {
        return this.en;
    }
    set windowScaleHorizontal(a) {
        this.en = a;
        this.e("WindowScaleHorizontal");
    }
    get windowScaleVertical() {
        return this.eo;
    }
    set windowScaleVertical(a) {
        this.eo = a;
        this.e("WindowScaleVertical");
    }
    get actualWindowScaleHorizontal() {
        return this.eh;
    }
    set actualWindowScaleHorizontal(a) {
        this.eh = a;
        this.e("ActualWindowScaleHorizontal");
    }
    get actualWindowScaleVertical() {
        return this.ei;
    }
    set actualWindowScaleVertical(a) {
        this.ei = a;
        this.e("ActualWindowScaleVertical");
    }
    get isHorizontalZoomEnabled() {
        return this.ea;
    }
    set isHorizontalZoomEnabled(a) {
        this.ea = a;
        this.e("IsHorizontalZoomEnabled");
    }
    get isVerticalZoomEnabled() {
        return this.ec;
    }
    set isVerticalZoomEnabled(a) {
        this.ec = a;
        this.e("IsVerticalZoomEnabled");
    }
    get gridMode() {
        return this.e0;
    }
    set gridMode(a) {
        this.e0 = a;
        this.e("GridMode");
    }
    get alignsGridLinesToPixels() {
        return this.d9;
    }
    set alignsGridLinesToPixels(a) {
        this.d9 = a;
        this.e("AlignsGridLinesToPixels");
    }
    get brushes() {
        return this.d0;
    }
    set brushes(a) {
        this.d0 = a;
        this.e("Brushes");
    }
    get markerBrushes() {
        return this.d1;
    }
    set markerBrushes(a) {
        this.d1 = a;
        this.e("MarkerBrushes");
    }
    get outlines() {
        return this.d3;
    }
    set outlines(a) {
        this.d3 = a;
        this.e("Outlines");
    }
    get markerOutlines() {
        return this.d2;
    }
    set markerOutlines(a) {
        this.d2 = a;
        this.e("MarkerOutlines");
    }
    get defaultAxisStroke() {
        return this.ez;
    }
    set defaultAxisStroke(a) {
        this.ez = a;
        this.e("DefaultAxisStroke");
    }
    get defaultAxisMajorStroke() {
        return this.ex;
    }
    set defaultAxisMajorStroke(a) {
        this.ex = a;
        this.e("DefaultAxisMajorStroke");
    }
    get defaultAxisMinorStroke() {
        return this.ey;
    }
    set defaultAxisMinorStroke(a) {
        this.ey = a;
        this.e("DefaultAxisMinorStroke");
    }
    get plotAreaMarginLeft() {
        return this.ek;
    }
    set plotAreaMarginLeft(a) {
        this.ek = a;
        this.e("PlotAreaMarginLeft");
    }
    get plotAreaMarginTop() {
        return this.em;
    }
    set plotAreaMarginTop(a) {
        this.em = a;
        this.e("PlotAreaMarginTop");
    }
    get plotAreaMarginRight() {
        return this.el;
    }
    set plotAreaMarginRight(a) {
        this.el = a;
        this.e("PlotAreaMarginRight");
    }
    get plotAreaMarginBottom() {
        return this.ej;
    }
    set plotAreaMarginBottom(a) {
        this.ej = a;
        this.e("PlotAreaMarginBottom");
    }
    get axes() {
        return this.dz;
    }
    set axes(a) {
        this.dz = a;
        this.e("Axes");
    }
    get width() {
        return this.e2;
    }
    set width(a) {
        this.e2 = a;
        this.e("Width");
    }
    get height() {
        return this.e1;
    }
    set height(a) {
        this.e1 = a;
        this.e("Height");
    }
}
DataChartDescription.$t = markType(DataChartDescription, 'DataChartDescription', SeriesViewerDescription.$);
//# sourceMappingURL=DataChartDescription.js.map