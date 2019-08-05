/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class DomainChartDescription extends Description {
    constructor() {
        super();
        this.at = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.a4 = 0;
        this.a1 = 0;
        this.ax = 0;
        this.az = 0;
        this.ay = 0;
        this.aw = 0;
        this.b9 = null;
        this.cc = null;
        this.as = 0;
        this.a5 = 0;
        this.av = 0;
        this.ar = 0;
        this.bo = 0;
        this.cf = null;
        this.ca = null;
        this.cd = null;
        this.h = null;
        this.g = null;
        this.f = null;
        this.l = null;
        this.ae = false;
        this.ag = false;
        this.af = false;
        this.v = null;
        this.by = null;
        this.b7 = null;
        this.cb = null;
        this.b8 = null;
        this.ch = null;
        this.au = 0;
        this.a0 = 0;
        this.k = null;
        this.i = null;
        this.j = null;
        this.bn = 0;
        this.y = false;
        this.m = null;
        this.cg = null;
        this.a6 = 0;
        this.x = false;
        this.bp = 0;
        this.ce = null;
        this.bz = null;
        this.ac = false;
        this.ab = false;
        this.ad = false;
        this.aa = false;
        this.z = false;
        this.bw = null;
        this.bx = null;
        this.bu = null;
        this.bt = null;
        this.b0 = null;
        this.b6 = null;
        this.b2 = null;
        this.b3 = null;
        this.b4 = null;
        this.b1 = null;
        this.b5 = null;
        this.bv = null;
    }
    get_type() {
        return "DomainChart";
    }
    get type() {
        return this.get_type();
    }
    get pixelScalingRatio() {
        return this.at;
    }
    set pixelScalingRatio(a) {
        this.at = a;
        this.e("PixelScalingRatio");
    }
    get titleLeftMargin() {
        return this.a2;
    }
    set titleLeftMargin(a) {
        this.a2 = a;
        this.e("TitleLeftMargin");
    }
    get titleRightMargin() {
        return this.a3;
    }
    set titleRightMargin(a) {
        this.a3 = a;
        this.e("TitleRightMargin");
    }
    get titleTopMargin() {
        return this.a4;
    }
    set titleTopMargin(a) {
        this.a4 = a;
        this.e("TitleTopMargin");
    }
    get titleBottomMargin() {
        return this.a1;
    }
    set titleBottomMargin(a) {
        this.a1 = a;
        this.e("TitleBottomMargin");
    }
    get subtitleLeftMargin() {
        return this.ax;
    }
    set subtitleLeftMargin(a) {
        this.ax = a;
        this.e("SubtitleLeftMargin");
    }
    get subtitleTopMargin() {
        return this.az;
    }
    set subtitleTopMargin(a) {
        this.az = a;
        this.e("SubtitleTopMargin");
    }
    get subtitleRightMargin() {
        return this.ay;
    }
    set subtitleRightMargin(a) {
        this.ay = a;
        this.e("SubtitleRightMargin");
    }
    get subtitleBottomMargin() {
        return this.aw;
    }
    set subtitleBottomMargin(a) {
        this.aw = a;
        this.e("SubtitleBottomMargin");
    }
    get subtitleTextColor() {
        return this.b9;
    }
    set subtitleTextColor(a) {
        this.b9 = a;
        this.e("SubtitleTextColor");
    }
    get titleTextColor() {
        return this.cc;
    }
    set titleTextColor(a) {
        this.cc = a;
        this.e("TitleTextColor");
    }
    get leftMargin() {
        return this.as;
    }
    set leftMargin(a) {
        this.as = a;
        this.e("LeftMargin");
    }
    get topMargin() {
        return this.a5;
    }
    set topMargin(a) {
        this.a5 = a;
        this.e("TopMargin");
    }
    get rightMargin() {
        return this.av;
    }
    set rightMargin(a) {
        this.av = a;
        this.e("RightMargin");
    }
    get bottomMargin() {
        return this.ar;
    }
    set bottomMargin(a) {
        this.ar = a;
        this.e("BottomMargin");
    }
    get transitionDuration() {
        return this.bo;
    }
    set transitionDuration(a) {
        this.bo = a;
        this.e("TransitionDuration");
    }
    get transitionEasingFunctionRef() {
        return this.cf;
    }
    set transitionEasingFunctionRef(a) {
        this.cf = a;
        this.e("TransitionEasingFunctionRef");
    }
    get subtitleTextStyle() {
        return this.ca;
    }
    set subtitleTextStyle(a) {
        this.ca = a;
        this.e("SubtitleTextStyle");
    }
    get titleTextStyle() {
        return this.cd;
    }
    set titleTextStyle(a) {
        this.cd = a;
        this.e("TitleTextStyle");
    }
    get includedProperties() {
        return this.h;
    }
    set includedProperties(a) {
        this.h = a;
        this.e("IncludedProperties");
    }
    get excludedProperties() {
        return this.g;
    }
    set excludedProperties(a) {
        this.g = a;
        this.e("ExcludedProperties");
    }
    get brushes() {
        return this.f;
    }
    set brushes(a) {
        this.f = a;
        this.e("Brushes");
    }
    get outlines() {
        return this.l;
    }
    set outlines(a) {
        this.l = a;
        this.e("Outlines");
    }
    get isHorizontalZoomEnabled() {
        return this.ae;
    }
    set isHorizontalZoomEnabled(a) {
        this.ae = a;
        this.e("IsHorizontalZoomEnabled");
    }
    get isVerticalZoomEnabled() {
        return this.ag;
    }
    set isVerticalZoomEnabled(a) {
        this.ag = a;
        this.e("IsVerticalZoomEnabled");
    }
    get isSeriesHighlightingEnabled() {
        return this.af;
    }
    set isSeriesHighlightingEnabled(a) {
        this.af = a;
        this.e("IsSeriesHighlightingEnabled");
    }
    get windowRect() {
        return this.v;
    }
    set windowRect(a) {
        this.v = a;
        this.e("WindowRect");
    }
    get chartTitle() {
        return this.by;
    }
    set chartTitle(a) {
        this.by = a;
        this.e("ChartTitle");
    }
    get subtitle() {
        return this.b7;
    }
    set subtitle(a) {
        this.b7 = a;
        this.e("Subtitle");
    }
    get titleAlignment() {
        return this.cb;
    }
    set titleAlignment(a) {
        this.cb = a;
        this.e("TitleAlignment");
    }
    get subtitleAlignment() {
        return this.b8;
    }
    set subtitleAlignment(a) {
        this.b8 = a;
        this.e("SubtitleAlignment");
    }
    get unknownValuePlotting() {
        return this.ch;
    }
    set unknownValuePlotting(a) {
        this.ch = a;
        this.e("UnknownValuePlotting");
    }
    get resolution() {
        return this.au;
    }
    set resolution(a) {
        this.au = a;
        this.e("Resolution");
    }
    get thickness() {
        return this.a0;
    }
    set thickness(a) {
        this.a0 = a;
        this.e("Thickness");
    }
    get markerTypes() {
        return this.k;
    }
    set markerTypes(a) {
        this.k = a;
        this.e("MarkerTypes");
    }
    get markerBrushes() {
        return this.i;
    }
    set markerBrushes(a) {
        this.i = a;
        this.e("MarkerBrushes");
    }
    get markerOutlines() {
        return this.j;
    }
    set markerOutlines(a) {
        this.j = a;
        this.e("MarkerOutlines");
    }
    get markerMaxCount() {
        return this.bn;
    }
    set markerMaxCount(a) {
        this.bn = a;
        this.e("MarkerMaxCount");
    }
    get animateSeriesWhenAxisRangeChanges() {
        return this.y;
    }
    set animateSeriesWhenAxisRangeChanges(a) {
        this.y = a;
        this.e("AnimateSeriesWhenAxisRangeChanges");
    }
    get trendLineBrushes() {
        return this.m;
    }
    set trendLineBrushes(a) {
        this.m = a;
        this.e("TrendLineBrushes");
    }
    get trendLineType() {
        return this.cg;
    }
    set trendLineType(a) {
        this.cg = a;
        this.e("TrendLineType");
    }
    get trendLineThickness() {
        return this.a6;
    }
    set trendLineThickness(a) {
        this.a6 = a;
        this.e("TrendLineThickness");
    }
    get alignsGridLinesToPixels() {
        return this.x;
    }
    set alignsGridLinesToPixels(a) {
        this.x = a;
        this.e("AlignsGridLinesToPixels");
    }
    get trendLinePeriod() {
        return this.bp;
    }
    set trendLinePeriod(a) {
        this.bp = a;
        this.e("TrendLinePeriod");
    }
    get toolTipType() {
        return this.ce;
    }
    set toolTipType(a) {
        this.ce = a;
        this.e("ToolTipType");
    }
    get crosshairsDisplayMode() {
        return this.bz;
    }
    set crosshairsDisplayMode(a) {
        this.bz = a;
        this.e("CrosshairsDisplayMode");
    }
    get crosshairsSnapToData() {
        return this.ac;
    }
    set crosshairsSnapToData(a) {
        this.ac = a;
        this.e("CrosshairsSnapToData");
    }
    get crosshairsAnnotationEnabled() {
        return this.ab;
    }
    set crosshairsAnnotationEnabled(a) {
        this.ab = a;
        this.e("CrosshairsAnnotationEnabled");
    }
    get finalValueAnnotationsVisible() {
        return this.ad;
    }
    set finalValueAnnotationsVisible(a) {
        this.ad = a;
        this.e("FinalValueAnnotationsVisible");
    }
    get calloutsVisible() {
        return this.aa;
    }
    set calloutsVisible(a) {
        this.aa = a;
        this.e("CalloutsVisible");
    }
    get calloutStyleUpdatingEventEnabled() {
        return this.z;
    }
    set calloutStyleUpdatingEventEnabled(a) {
        this.z = a;
        this.e("CalloutStyleUpdatingEventEnabled");
    }
    get calloutsXMemberPath() {
        return this.bw;
    }
    set calloutsXMemberPath(a) {
        this.bw = a;
        this.e("CalloutsXMemberPath");
    }
    get calloutsYMemberPath() {
        return this.bx;
    }
    set calloutsYMemberPath(a) {
        this.bx = a;
        this.e("CalloutsYMemberPath");
    }
    get calloutsLabelMemberPath() {
        return this.bu;
    }
    set calloutsLabelMemberPath(a) {
        this.bu = a;
        this.e("CalloutsLabelMemberPath");
    }
    get calloutsContentMemberPath() {
        return this.bt;
    }
    set calloutsContentMemberPath(a) {
        this.bt = a;
        this.e("CalloutsContentMemberPath");
    }
    get SeriesAddedRef() {
        return this.b0;
    }
    set SeriesAddedRef(a) {
        this.b0 = a;
        this.e("SeriesAddedRef");
    }
    get SeriesRemovedRef() {
        return this.b6;
    }
    set SeriesRemovedRef(a) {
        this.b6 = a;
        this.e("SeriesRemovedRef");
    }
    get SeriesPointerEnterRef() {
        return this.b2;
    }
    set SeriesPointerEnterRef(a) {
        this.b2 = a;
        this.e("SeriesPointerEnterRef");
    }
    get SeriesPointerLeaveRef() {
        return this.b3;
    }
    set SeriesPointerLeaveRef(a) {
        this.b3 = a;
        this.e("SeriesPointerLeaveRef");
    }
    get SeriesPointerMoveRef() {
        return this.b4;
    }
    set SeriesPointerMoveRef(a) {
        this.b4 = a;
        this.e("SeriesPointerMoveRef");
    }
    get SeriesPointerDownRef() {
        return this.b1;
    }
    set SeriesPointerDownRef(a) {
        this.b1 = a;
        this.e("SeriesPointerDownRef");
    }
    get SeriesPointerUpRef() {
        return this.b5;
    }
    set SeriesPointerUpRef(a) {
        this.b5 = a;
        this.e("SeriesPointerUpRef");
    }
    get CalloutStyleUpdatingRef() {
        return this.bv;
    }
    set CalloutStyleUpdatingRef(a) {
        this.bv = a;
        this.e("CalloutStyleUpdatingRef");
    }
}
DomainChartDescription.$t = markType(DomainChartDescription, 'DomainChartDescription', Description.$);
//# sourceMappingURL=DomainChartDescription.js.map