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
export class SeriesViewerDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.r = false;
        this.k = null;
        this.m = null;
        this.w = false;
        this.v = false;
        this.bs = 0;
        this.br = 0;
        this.t = false;
        this.bz = null;
        this.bv = null;
        this.u = false;
        this.cv = null;
        this.a1 = 0;
        this.b6 = null;
        this.b0 = null;
        this.b8 = null;
        this.b1 = null;
        this.b9 = null;
        this.b2 = null;
        this.b7 = null;
        this.l = null;
        this.az = 0;
        this.a0 = 0;
        this.by = null;
        this.cr = null;
        this.cl = null;
        this.ct = null;
        this.cn = null;
        this.cs = null;
        this.cm = null;
        this.ax = 0;
        this.av = 0;
        this.aw = 0;
        this.at = 0;
        this.as = 0;
        this.aq = 0;
        this.ar = 0;
        this.ao = 0;
        this.ch = null;
        this.ay = 0;
        this.al = 0;
        this.an = 0;
        this.aj = 0;
        this.ai = 0;
        this.ah = 0;
        this.s = false;
        this.am = 0;
        this.ak = 0;
        this.b5 = null;
        this.ae = 0;
        this.ad = 0;
        this.j = null;
        this.af = 0;
        this.ag = 0;
        this.ca = null;
        this.cd = null;
        this.ce = null;
        this.cf = null;
        this.cb = null;
        this.cc = null;
        this.cu = null;
        this.cg = null;
        this.bw = null;
        this.b3 = null;
        this.f = null;
        this.b4 = null;
        this.bx = null;
        this.co = null;
        this.au = 0;
        this.cq = null;
        this.cp = null;
        this.ci = null;
        this.ap = 0;
        this.ck = null;
        this.cj = null;
    }
    get_type() {
        return "SeriesViewer";
    }
    get type() {
        return this.get_type();
    }
    get crosshairPoint() {
        return this.h;
    }
    set crosshairPoint(a) {
        this.h = a;
        this.e("CrosshairPoint");
    }
    get animateSeriesWhenAxisRangeChanges() {
        return this.r;
    }
    set animateSeriesWhenAxisRangeChanges(a) {
        this.r = a;
        this.e("AnimateSeriesWhenAxisRangeChanges");
    }
    get effectiveViewport() {
        return this.k;
    }
    set effectiveViewport(a) {
        this.k = a;
        this.e("EffectiveViewport");
    }
    get windowRect() {
        return this.m;
    }
    set windowRect(a) {
        this.m = a;
        this.e("WindowRect");
    }
    get useTiledZooming() {
        return this.w;
    }
    set useTiledZooming(a) {
        this.w = a;
        this.e("UseTiledZooming");
    }
    get preferHigherResolutionTiles() {
        return this.v;
    }
    set preferHigherResolutionTiles(a) {
        this.v = a;
        this.e("PreferHigherResolutionTiles");
    }
    get zoomTileCacheSize() {
        return this.bs;
    }
    set zoomTileCacheSize(a) {
        this.bs = a;
        this.e("ZoomTileCacheSize");
    }
    get highlightingTransitionDuration() {
        return this.br;
    }
    set highlightingTransitionDuration(a) {
        this.br = a;
        this.e("HighlightingTransitionDuration");
    }
    get isPagePanningAllowed() {
        return this.t;
    }
    set isPagePanningAllowed(a) {
        this.t = a;
        this.e("IsPagePanningAllowed");
    }
    get contentHitTestMode() {
        return this.bz;
    }
    set contentHitTestMode(a) {
        this.bz = a;
        this.e("ContentHitTestMode");
    }
    get actualContentHitTestMode() {
        return this.bv;
    }
    set actualContentHitTestMode(a) {
        this.bv = a;
        this.e("ActualContentHitTestMode");
    }
    get isSurfaceInteractionDisabled() {
        return this.u;
    }
    set isSurfaceInteractionDisabled(a) {
        this.u = a;
        this.e("IsSurfaceInteractionDisabled");
    }
    get windowResponse() {
        return this.cv;
    }
    set windowResponse(a) {
        this.cv = a;
        this.e("WindowResponse");
    }
    get windowRectMinWidth() {
        return this.a1;
    }
    set windowRectMinWidth(a) {
        this.a1 = a;
        this.e("WindowRectMinWidth");
    }
    get overviewPlusDetailPaneVisibility() {
        return this.b6;
    }
    set overviewPlusDetailPaneVisibility(a) {
        this.b6 = a;
        this.e("OverviewPlusDetailPaneVisibility");
    }
    get crosshairVisibility() {
        return this.b0;
    }
    set crosshairVisibility(a) {
        this.b0 = a;
        this.e("CrosshairVisibility");
    }
    get plotAreaBackground() {
        return this.b8;
    }
    set plotAreaBackground(a) {
        this.b8 = a;
        this.e("PlotAreaBackground");
    }
    get defaultInteraction() {
        return this.b1;
    }
    set defaultInteraction(a) {
        this.b1 = a;
        this.e("DefaultInteraction");
    }
    get rightButtonDefaultInteraction() {
        return this.b9;
    }
    set rightButtonDefaultInteraction(a) {
        this.b9 = a;
        this.e("RightButtonDefaultInteraction");
    }
    get dragModifier() {
        return this.b2;
    }
    set dragModifier(a) {
        this.b2 = a;
        this.e("DragModifier");
    }
    get panModifier() {
        return this.b7;
    }
    set panModifier(a) {
        this.b7 = a;
        this.e("PanModifier");
    }
    get previewRect() {
        return this.l;
    }
    set previewRect(a) {
        this.l = a;
        this.e("PreviewRect");
    }
    get windowPositionHorizontal() {
        return this.az;
    }
    set windowPositionHorizontal(a) {
        this.az = a;
        this.e("WindowPositionHorizontal");
    }
    get windowPositionVertical() {
        return this.a0;
    }
    set windowPositionVertical(a) {
        this.a0 = a;
        this.e("WindowPositionVertical");
    }
    get chartTitle() {
        return this.by;
    }
    set chartTitle(a) {
        this.by = a;
        this.e("ChartTitle");
    }
    get titleHorizontalAlignment() {
        return this.cr;
    }
    set titleHorizontalAlignment(a) {
        this.cr = a;
        this.e("TitleHorizontalAlignment");
    }
    get subtitleHorizontalAlignment() {
        return this.cl;
    }
    set subtitleHorizontalAlignment(a) {
        this.cl = a;
        this.e("SubtitleHorizontalAlignment");
    }
    get titleTextStyle() {
        return this.ct;
    }
    set titleTextStyle(a) {
        this.ct = a;
        this.e("TitleTextStyle");
    }
    get subtitleTextStyle() {
        return this.cn;
    }
    set subtitleTextStyle(a) {
        this.cn = a;
        this.e("SubtitleTextStyle");
    }
    get titleTextColor() {
        return this.cs;
    }
    set titleTextColor(a) {
        this.cs = a;
        this.e("TitleTextColor");
    }
    get subtitleTextColor() {
        return this.cm;
    }
    set subtitleTextColor(a) {
        this.cm = a;
        this.e("SubtitleTextColor");
    }
    get titleTopMargin() {
        return this.ax;
    }
    set titleTopMargin(a) {
        this.ax = a;
        this.e("TitleTopMargin");
    }
    get titleLeftMargin() {
        return this.av;
    }
    set titleLeftMargin(a) {
        this.av = a;
        this.e("TitleLeftMargin");
    }
    get titleRightMargin() {
        return this.aw;
    }
    set titleRightMargin(a) {
        this.aw = a;
        this.e("TitleRightMargin");
    }
    get titleBottomMargin() {
        return this.at;
    }
    set titleBottomMargin(a) {
        this.at = a;
        this.e("TitleBottomMargin");
    }
    get subtitleTopMargin() {
        return this.as;
    }
    set subtitleTopMargin(a) {
        this.as = a;
        this.e("SubtitleTopMargin");
    }
    get subtitleLeftMargin() {
        return this.aq;
    }
    set subtitleLeftMargin(a) {
        this.aq = a;
        this.e("SubtitleLeftMargin");
    }
    get subtitleRightMargin() {
        return this.ar;
    }
    set subtitleRightMargin(a) {
        this.ar = a;
        this.e("SubtitleRightMargin");
    }
    get subtitleBottomMargin() {
        return this.ao;
    }
    set subtitleBottomMargin(a) {
        this.ao = a;
        this.e("SubtitleBottomMargin");
    }
    get subtitle() {
        return this.ch;
    }
    set subtitle(a) {
        this.ch = a;
        this.e("Subtitle");
    }
    get topMargin() {
        return this.ay;
    }
    set topMargin(a) {
        this.ay = a;
        this.e("TopMargin");
    }
    get leftMargin() {
        return this.al;
    }
    set leftMargin(a) {
        this.al = a;
        this.e("LeftMargin");
    }
    get rightMargin() {
        return this.an;
    }
    set rightMargin(a) {
        this.an = a;
        this.e("RightMargin");
    }
    get bottomMargin() {
        return this.aj;
    }
    set bottomMargin(a) {
        this.aj = a;
        this.e("BottomMargin");
    }
    get autoMarginWidth() {
        return this.ai;
    }
    set autoMarginWidth(a) {
        this.ai = a;
        this.e("AutoMarginWidth");
    }
    get autoMarginHeight() {
        return this.ah;
    }
    set autoMarginHeight(a) {
        this.ah = a;
        this.e("AutoMarginHeight");
    }
    get isAntiAliasingEnabledDuringInteraction() {
        return this.s;
    }
    set isAntiAliasingEnabledDuringInteraction(a) {
        this.s = a;
        this.e("IsAntiAliasingEnabledDuringInteraction");
    }
    get pixelScalingRatio() {
        return this.am;
    }
    set pixelScalingRatio(a) {
        this.am = a;
        this.e("PixelScalingRatio");
    }
    get interactionPixelScalingRatio() {
        return this.ak;
    }
    set interactionPixelScalingRatio(a) {
        this.ak = a;
        this.e("InteractionPixelScalingRatio");
    }
    get overviewPlusDetailPaneBackgroundImageUri() {
        return this.b5;
    }
    set overviewPlusDetailPaneBackgroundImageUri(a) {
        this.b5 = a;
        this.e("OverviewPlusDetailPaneBackgroundImageUri");
    }
    get actualPixelScalingRatio() {
        return this.ae;
    }
    set actualPixelScalingRatio(a) {
        this.ae = a;
        this.e("ActualPixelScalingRatio");
    }
    get actualInteractionPixelScalingRatio() {
        return this.ad;
    }
    set actualInteractionPixelScalingRatio(a) {
        this.ad = a;
        this.e("ActualInteractionPixelScalingRatio");
    }
    get actualWindowRect() {
        return this.j;
    }
    set actualWindowRect(a) {
        this.j = a;
        this.e("ActualWindowRect");
    }
    get actualWindowPositionHorizontal() {
        return this.af;
    }
    set actualWindowPositionHorizontal(a) {
        this.af = a;
        this.e("ActualWindowPositionHorizontal");
    }
    get actualWindowPositionVertical() {
        return this.ag;
    }
    set actualWindowPositionVertical(a) {
        this.ag = a;
        this.e("ActualWindowPositionVertical");
    }
    get SeriesCursorMouseMoveRef() {
        return this.ca;
    }
    set SeriesCursorMouseMoveRef(a) {
        this.ca = a;
        this.e("SeriesCursorMouseMoveRef");
    }
    get SeriesMouseLeftButtonDownRef() {
        return this.cd;
    }
    set SeriesMouseLeftButtonDownRef(a) {
        this.cd = a;
        this.e("SeriesMouseLeftButtonDownRef");
    }
    get SeriesMouseLeftButtonUpRef() {
        return this.ce;
    }
    set SeriesMouseLeftButtonUpRef(a) {
        this.ce = a;
        this.e("SeriesMouseLeftButtonUpRef");
    }
    get SeriesMouseMoveRef() {
        return this.cf;
    }
    set SeriesMouseMoveRef(a) {
        this.cf = a;
        this.e("SeriesMouseMoveRef");
    }
    get SeriesMouseEnterRef() {
        return this.cb;
    }
    set SeriesMouseEnterRef(a) {
        this.cb = a;
        this.e("SeriesMouseEnterRef");
    }
    get SeriesMouseLeaveRef() {
        return this.cc;
    }
    set SeriesMouseLeaveRef(a) {
        this.cc = a;
        this.e("SeriesMouseLeaveRef");
    }
    get WindowRectChangedRef() {
        return this.cu;
    }
    set WindowRectChangedRef(a) {
        this.cu = a;
        this.e("WindowRectChangedRef");
    }
    get SizeChangedRef() {
        return this.cg;
    }
    set SizeChangedRef(a) {
        this.cg = a;
        this.e("SizeChangedRef");
    }
    get ActualWindowRectChangedRef() {
        return this.bw;
    }
    set ActualWindowRectChangedRef(a) {
        this.bw = a;
        this.e("ActualWindowRectChangedRef");
    }
    get GridAreaRectChangedRef() {
        return this.b3;
    }
    set GridAreaRectChangedRef(a) {
        this.b3 = a;
        this.e("GridAreaRectChangedRef");
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get legendRef() {
        return this.b4;
    }
    set legendRef(a) {
        this.b4 = a;
        this.e("LegendRef");
    }
    get background() {
        return this.bx;
    }
    set background(a) {
        this.bx = a;
        this.e("Background");
    }
    get titleFontFamily() {
        return this.co;
    }
    set titleFontFamily(a) {
        this.co = a;
        this.e("TitleFontFamily");
    }
    get titleFontSize() {
        return this.au;
    }
    set titleFontSize(a) {
        this.au = a;
        this.e("TitleFontSize");
    }
    get titleFontWeight() {
        return this.cq;
    }
    set titleFontWeight(a) {
        this.cq = a;
        this.e("TitleFontWeight");
    }
    get titleFontStyle() {
        return this.cp;
    }
    set titleFontStyle(a) {
        this.cp = a;
        this.e("TitleFontStyle");
    }
    get subtitleFontFamily() {
        return this.ci;
    }
    set subtitleFontFamily(a) {
        this.ci = a;
        this.e("SubtitleFontFamily");
    }
    get subtitleFontSize() {
        return this.ap;
    }
    set subtitleFontSize(a) {
        this.ap = a;
        this.e("SubtitleFontSize");
    }
    get subtitleFontWeight() {
        return this.ck;
    }
    set subtitleFontWeight(a) {
        this.ck = a;
        this.e("SubtitleFontWeight");
    }
    get subtitleFontStyle() {
        return this.cj;
    }
    set subtitleFontStyle(a) {
        this.cj = a;
        this.e("SubtitleFontStyle");
    }
}
SeriesViewerDescription.$t = markType(SeriesViewerDescription, 'SeriesViewerDescription', Description.$);
//# sourceMappingURL=SeriesViewerDescription.js.map