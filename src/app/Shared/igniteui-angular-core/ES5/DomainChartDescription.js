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
var DomainChartDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DomainChartDescription, _super);
    function DomainChartDescription() {
        var _this = _super.call(this) || this;
        _this.at = 0;
        _this.a2 = 0;
        _this.a3 = 0;
        _this.a4 = 0;
        _this.a1 = 0;
        _this.ax = 0;
        _this.az = 0;
        _this.ay = 0;
        _this.aw = 0;
        _this.b9 = null;
        _this.cc = null;
        _this.as = 0;
        _this.a5 = 0;
        _this.av = 0;
        _this.ar = 0;
        _this.bo = 0;
        _this.cf = null;
        _this.ca = null;
        _this.cd = null;
        _this.h = null;
        _this.g = null;
        _this.f = null;
        _this.l = null;
        _this.ae = false;
        _this.ag = false;
        _this.af = false;
        _this.v = null;
        _this.by = null;
        _this.b7 = null;
        _this.cb = null;
        _this.b8 = null;
        _this.ch = null;
        _this.au = 0;
        _this.a0 = 0;
        _this.k = null;
        _this.i = null;
        _this.j = null;
        _this.bn = 0;
        _this.y = false;
        _this.m = null;
        _this.cg = null;
        _this.a6 = 0;
        _this.x = false;
        _this.bp = 0;
        _this.ce = null;
        _this.bz = null;
        _this.ac = false;
        _this.ab = false;
        _this.ad = false;
        _this.aa = false;
        _this.z = false;
        _this.bw = null;
        _this.bx = null;
        _this.bu = null;
        _this.bt = null;
        _this.b0 = null;
        _this.b6 = null;
        _this.b2 = null;
        _this.b3 = null;
        _this.b4 = null;
        _this.b1 = null;
        _this.b5 = null;
        _this.bv = null;
        return _this;
    }
    DomainChartDescription.prototype.get_type = function () {
        return "DomainChart";
    };
    Object.defineProperty(DomainChartDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "titleLeftMargin", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("TitleLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "titleRightMargin", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("TitleRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "titleTopMargin", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("TitleTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "titleBottomMargin", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("TitleBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "subtitleLeftMargin", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("SubtitleLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "subtitleTopMargin", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("SubtitleTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "subtitleRightMargin", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("SubtitleRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "subtitleBottomMargin", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("SubtitleBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "subtitleTextColor", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("SubtitleTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "titleTextColor", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("TitleTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "leftMargin", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            this.as = a;
            this.e("LeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "topMargin", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("TopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "rightMargin", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("RightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "bottomMargin", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            this.ar = a;
            this.e("BottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "transitionDuration", {
        get: function () {
            return this.bo;
        },
        set: function (a) {
            this.bo = a;
            this.e("TransitionDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "transitionEasingFunctionRef", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("TransitionEasingFunctionRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "subtitleTextStyle", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("SubtitleTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "titleTextStyle", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("TitleTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "includedProperties", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("IncludedProperties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "excludedProperties", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("ExcludedProperties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "brushes", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Brushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "outlines", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("Outlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "isHorizontalZoomEnabled", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("IsHorizontalZoomEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "isVerticalZoomEnabled", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("IsVerticalZoomEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "isSeriesHighlightingEnabled", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("IsSeriesHighlightingEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "windowRect", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("WindowRect");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "chartTitle", {
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
    Object.defineProperty(DomainChartDescription.prototype, "subtitle", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("Subtitle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "titleAlignment", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("TitleAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "subtitleAlignment", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("SubtitleAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "unknownValuePlotting", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            this.ch = a;
            this.e("UnknownValuePlotting");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "resolution", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("Resolution");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "thickness", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("Thickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "markerTypes", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("MarkerTypes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "markerBrushes", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("MarkerBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "markerOutlines", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("MarkerOutlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "markerMaxCount", {
        get: function () {
            return this.bn;
        },
        set: function (a) {
            this.bn = a;
            this.e("MarkerMaxCount");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "animateSeriesWhenAxisRangeChanges", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("AnimateSeriesWhenAxisRangeChanges");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "trendLineBrushes", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("TrendLineBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "trendLineType", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("TrendLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "trendLineThickness", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("TrendLineThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "alignsGridLinesToPixels", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("AlignsGridLinesToPixels");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "trendLinePeriod", {
        get: function () {
            return this.bp;
        },
        set: function (a) {
            this.bp = a;
            this.e("TrendLinePeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "toolTipType", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("ToolTipType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "crosshairsDisplayMode", {
        get: function () {
            return this.bz;
        },
        set: function (a) {
            this.bz = a;
            this.e("CrosshairsDisplayMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "crosshairsSnapToData", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("CrosshairsSnapToData");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "crosshairsAnnotationEnabled", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("CrosshairsAnnotationEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "finalValueAnnotationsVisible", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("FinalValueAnnotationsVisible");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "calloutsVisible", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("CalloutsVisible");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "calloutStyleUpdatingEventEnabled", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("CalloutStyleUpdatingEventEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "calloutsXMemberPath", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("CalloutsXMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "calloutsYMemberPath", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("CalloutsYMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "calloutsLabelMemberPath", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("CalloutsLabelMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "calloutsContentMemberPath", {
        get: function () {
            return this.bt;
        },
        set: function (a) {
            this.bt = a;
            this.e("CalloutsContentMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "SeriesAddedRef", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("SeriesAddedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "SeriesRemovedRef", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("SeriesRemovedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "SeriesPointerEnterRef", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("SeriesPointerEnterRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "SeriesPointerLeaveRef", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("SeriesPointerLeaveRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "SeriesPointerMoveRef", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("SeriesPointerMoveRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "SeriesPointerDownRef", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("SeriesPointerDownRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "SeriesPointerUpRef", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("SeriesPointerUpRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartDescription.prototype, "CalloutStyleUpdatingRef", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            this.bv = a;
            this.e("CalloutStyleUpdatingRef");
        },
        enumerable: true,
        configurable: true
    });
    DomainChartDescription.$t = markType(DomainChartDescription, 'DomainChartDescription', Description.$);
    return DomainChartDescription;
}(Description));
export { DomainChartDescription };
//# sourceMappingURL=DomainChartDescription.js.map