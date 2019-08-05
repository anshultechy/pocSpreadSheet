/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var SeriesViewerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesViewerDescription, _super);
    function SeriesViewerDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.r = false;
        _this.k = null;
        _this.m = null;
        _this.w = false;
        _this.v = false;
        _this.bs = 0;
        _this.br = 0;
        _this.t = false;
        _this.bz = null;
        _this.bv = null;
        _this.u = false;
        _this.cv = null;
        _this.a1 = 0;
        _this.b6 = null;
        _this.b0 = null;
        _this.b8 = null;
        _this.b1 = null;
        _this.b9 = null;
        _this.b2 = null;
        _this.b7 = null;
        _this.l = null;
        _this.az = 0;
        _this.a0 = 0;
        _this.by = null;
        _this.cr = null;
        _this.cl = null;
        _this.ct = null;
        _this.cn = null;
        _this.cs = null;
        _this.cm = null;
        _this.ax = 0;
        _this.av = 0;
        _this.aw = 0;
        _this.at = 0;
        _this.as = 0;
        _this.aq = 0;
        _this.ar = 0;
        _this.ao = 0;
        _this.ch = null;
        _this.ay = 0;
        _this.al = 0;
        _this.an = 0;
        _this.aj = 0;
        _this.ai = 0;
        _this.ah = 0;
        _this.s = false;
        _this.am = 0;
        _this.ak = 0;
        _this.b5 = null;
        _this.ae = 0;
        _this.ad = 0;
        _this.j = null;
        _this.af = 0;
        _this.ag = 0;
        _this.ca = null;
        _this.cd = null;
        _this.ce = null;
        _this.cf = null;
        _this.cb = null;
        _this.cc = null;
        _this.cu = null;
        _this.cg = null;
        _this.bw = null;
        _this.b3 = null;
        _this.f = null;
        _this.b4 = null;
        _this.bx = null;
        _this.co = null;
        _this.au = 0;
        _this.cq = null;
        _this.cp = null;
        _this.ci = null;
        _this.ap = 0;
        _this.ck = null;
        _this.cj = null;
        return _this;
    }
    SeriesViewerDescription.prototype.get_type = function () {
        return "SeriesViewer";
    };
    Object.defineProperty(SeriesViewerDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "crosshairPoint", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("CrosshairPoint");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "animateSeriesWhenAxisRangeChanges", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("AnimateSeriesWhenAxisRangeChanges");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "effectiveViewport", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("EffectiveViewport");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "windowRect", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("WindowRect");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "useTiledZooming", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("UseTiledZooming");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "preferHigherResolutionTiles", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("PreferHigherResolutionTiles");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "zoomTileCacheSize", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("ZoomTileCacheSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "highlightingTransitionDuration", {
        get: function () {
            return this.br;
        },
        set: function (a) {
            this.br = a;
            this.e("HighlightingTransitionDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "isPagePanningAllowed", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("IsPagePanningAllowed");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "contentHitTestMode", {
        get: function () {
            return this.bz;
        },
        set: function (a) {
            this.bz = a;
            this.e("ContentHitTestMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "actualContentHitTestMode", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            this.bv = a;
            this.e("ActualContentHitTestMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "isSurfaceInteractionDisabled", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("IsSurfaceInteractionDisabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "windowResponse", {
        get: function () {
            return this.cv;
        },
        set: function (a) {
            this.cv = a;
            this.e("WindowResponse");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "windowRectMinWidth", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("WindowRectMinWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "overviewPlusDetailPaneVisibility", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("OverviewPlusDetailPaneVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "crosshairVisibility", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("CrosshairVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "plotAreaBackground", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("PlotAreaBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "defaultInteraction", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("DefaultInteraction");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "rightButtonDefaultInteraction", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("RightButtonDefaultInteraction");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "dragModifier", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("DragModifier");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "panModifier", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("PanModifier");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "previewRect", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("PreviewRect");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "windowPositionHorizontal", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("WindowPositionHorizontal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "windowPositionVertical", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("WindowPositionVertical");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "chartTitle", {
        get: function () {
            return this.by;
        },
        set: function (a) {
            this.by = a;
            this.e("ChartTitle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleHorizontalAlignment", {
        get: function () {
            return this.cr;
        },
        set: function (a) {
            this.cr = a;
            this.e("TitleHorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleHorizontalAlignment", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("SubtitleHorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleTextStyle", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("TitleTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleTextStyle", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            this.cn = a;
            this.e("SubtitleTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleTextColor", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("TitleTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleTextColor", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("SubtitleTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleTopMargin", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("TitleTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleLeftMargin", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("TitleLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleRightMargin", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("TitleRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleBottomMargin", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("TitleBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleTopMargin", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            this.as = a;
            this.e("SubtitleTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleLeftMargin", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            this.aq = a;
            this.e("SubtitleLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleRightMargin", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            this.ar = a;
            this.e("SubtitleRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleBottomMargin", {
        get: function () {
            return this.ao;
        },
        set: function (a) {
            this.ao = a;
            this.e("SubtitleBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitle", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            this.ch = a;
            this.e("Subtitle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "topMargin", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("TopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "leftMargin", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            this.al = a;
            this.e("LeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "rightMargin", {
        get: function () {
            return this.an;
        },
        set: function (a) {
            this.an = a;
            this.e("RightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "bottomMargin", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
            this.e("BottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "autoMarginWidth", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
            this.e("AutoMarginWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "autoMarginHeight", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.ah = a;
            this.e("AutoMarginHeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "isAntiAliasingEnabledDuringInteraction", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("IsAntiAliasingEnabledDuringInteraction");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "interactionPixelScalingRatio", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
            this.e("InteractionPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "overviewPlusDetailPaneBackgroundImageUri", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("OverviewPlusDetailPaneBackgroundImageUri");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "actualPixelScalingRatio", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("ActualPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "actualInteractionPixelScalingRatio", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("ActualInteractionPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "actualWindowRect", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("ActualWindowRect");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "actualWindowPositionHorizontal", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("ActualWindowPositionHorizontal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "actualWindowPositionVertical", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("ActualWindowPositionVertical");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "SeriesCursorMouseMoveRef", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("SeriesCursorMouseMoveRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "SeriesMouseLeftButtonDownRef", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("SeriesMouseLeftButtonDownRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "SeriesMouseLeftButtonUpRef", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("SeriesMouseLeftButtonUpRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "SeriesMouseMoveRef", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("SeriesMouseMoveRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "SeriesMouseEnterRef", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("SeriesMouseEnterRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "SeriesMouseLeaveRef", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("SeriesMouseLeaveRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "WindowRectChangedRef", {
        get: function () {
            return this.cu;
        },
        set: function (a) {
            this.cu = a;
            this.e("WindowRectChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "SizeChangedRef", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("SizeChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "ActualWindowRectChangedRef", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("ActualWindowRectChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "GridAreaRectChangedRef", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("GridAreaRectChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "series", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "legendRef", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("LegendRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "background", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleFontFamily", {
        get: function () {
            return this.co;
        },
        set: function (a) {
            this.co = a;
            this.e("TitleFontFamily");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleFontSize", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("TitleFontSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleFontWeight", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("TitleFontWeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "titleFontStyle", {
        get: function () {
            return this.cp;
        },
        set: function (a) {
            this.cp = a;
            this.e("TitleFontStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleFontFamily", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            this.ci = a;
            this.e("SubtitleFontFamily");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleFontSize", {
        get: function () {
            return this.ap;
        },
        set: function (a) {
            this.ap = a;
            this.e("SubtitleFontSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleFontWeight", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("SubtitleFontWeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesViewerDescription.prototype, "subtitleFontStyle", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            this.cj = a;
            this.e("SubtitleFontStyle");
        },
        enumerable: true,
        configurable: true
    });
    SeriesViewerDescription.$t = markType(SeriesViewerDescription, 'SeriesViewerDescription', Description.$);
    return SeriesViewerDescription;
}(Description));
export { SeriesViewerDescription };
//# sourceMappingURL=SeriesViewerDescription.js.map