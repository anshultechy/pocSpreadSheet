/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { ChartCursorEventArgsDescription } from "./ChartCursorEventArgsDescription";
import { ChartMouseEventArgsDescription } from "./ChartMouseEventArgsDescription";
import { DataChartMouseButtonEventArgsDescription } from "./DataChartMouseButtonEventArgsDescription";
import { RectChangedEventArgsDescriptionMetadata } from "./RectChangedEventArgsDescriptionMetadata";
/**
 * @hidden
 */
var ChartCursorEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ChartCursorEventArgsDescriptionMetadata, _super);
    function ChartCursorEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartCursorEventArgsDescriptionMetadata.b = function (a) {
        if (ChartCursorEventArgsDescriptionMetadata.a == null) {
            ChartCursorEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ChartCursorEventArgsDescriptionMetadata.c(a, ChartCursorEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
            SeriesViewerDescriptionMetadata.d(a);
        }
    };
    ChartCursorEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("Series", "ExportedType");
        b.item("SeriesViewer", "ExportedType");
    };
    ChartCursorEventArgsDescriptionMetadata.d = function (a) {
        ChartCursorEventArgsDescriptionMetadata.b(a);
        a.n("ChartCursorEventArgs", function () { return new ChartCursorEventArgsDescription(); });
        a.m("ChartCursorEventArgs", ChartCursorEventArgsDescriptionMetadata.a);
    };
    ChartCursorEventArgsDescriptionMetadata.$t = markType(ChartCursorEventArgsDescriptionMetadata, 'ChartCursorEventArgsDescriptionMetadata');
    ChartCursorEventArgsDescriptionMetadata.a = null;
    return ChartCursorEventArgsDescriptionMetadata;
}(Base));
export { ChartCursorEventArgsDescriptionMetadata };
/**
 * @hidden
 */
var ChartMouseEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ChartMouseEventArgsDescriptionMetadata, _super);
    function ChartMouseEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartMouseEventArgsDescriptionMetadata.b = function (a) {
        if (ChartMouseEventArgsDescriptionMetadata.a == null) {
            ChartMouseEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ChartMouseEventArgsDescriptionMetadata.c(a, ChartMouseEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
            SeriesViewerDescriptionMetadata.d(a);
        }
    };
    ChartMouseEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("Series", "ExportedType");
        b.item("Chart", "ExportedType");
    };
    ChartMouseEventArgsDescriptionMetadata.d = function (a) {
        ChartMouseEventArgsDescriptionMetadata.b(a);
        a.n("ChartMouseEventArgs", function () { return new ChartMouseEventArgsDescription(); });
        a.m("ChartMouseEventArgs", ChartMouseEventArgsDescriptionMetadata.a);
    };
    ChartMouseEventArgsDescriptionMetadata.$t = markType(ChartMouseEventArgsDescriptionMetadata, 'ChartMouseEventArgsDescriptionMetadata');
    ChartMouseEventArgsDescriptionMetadata.a = null;
    return ChartMouseEventArgsDescriptionMetadata;
}(Base));
export { ChartMouseEventArgsDescriptionMetadata };
/**
 * @hidden
 */
var DataChartMouseButtonEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartMouseButtonEventArgsDescriptionMetadata, _super);
    function DataChartMouseButtonEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartMouseButtonEventArgsDescriptionMetadata.b = function (a) {
        if (DataChartMouseButtonEventArgsDescriptionMetadata.a == null) {
            DataChartMouseButtonEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataChartMouseButtonEventArgsDescriptionMetadata.c(a, DataChartMouseButtonEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
            SeriesViewerDescriptionMetadata.d(a);
        }
    };
    DataChartMouseButtonEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Handled", "Boolean");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("Series", "ExportedType");
        b.item("Chart", "ExportedType");
    };
    DataChartMouseButtonEventArgsDescriptionMetadata.d = function (a) {
        DataChartMouseButtonEventArgsDescriptionMetadata.b(a);
        a.n("DataChartMouseButtonEventArgs", function () { return new DataChartMouseButtonEventArgsDescription(); });
        a.m("DataChartMouseButtonEventArgs", DataChartMouseButtonEventArgsDescriptionMetadata.a);
    };
    DataChartMouseButtonEventArgsDescriptionMetadata.$t = markType(DataChartMouseButtonEventArgsDescriptionMetadata, 'DataChartMouseButtonEventArgsDescriptionMetadata');
    DataChartMouseButtonEventArgsDescriptionMetadata.a = null;
    return DataChartMouseButtonEventArgsDescriptionMetadata;
}(Base));
export { DataChartMouseButtonEventArgsDescriptionMetadata };
/**
 * @hidden
 */
var SeriesViewerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesViewerDescriptionMetadata, _super);
    function SeriesViewerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesViewerDescriptionMetadata.b = function (a) {
        if (SeriesViewerDescriptionMetadata.a == null) {
            SeriesViewerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SeriesViewerDescriptionMetadata.c(a, SeriesViewerDescriptionMetadata.a);
            ChartCursorEventArgsDescriptionMetadata.d(a);
            DataChartMouseButtonEventArgsDescriptionMetadata.d(a);
            ChartMouseEventArgsDescriptionMetadata.d(a);
            RectChangedEventArgsDescriptionMetadata.d(a);
        }
    };
    SeriesViewerDescriptionMetadata.c = function (a, b) {
        b.item("CrosshairPoint", "Point");
        b.item("AnimateSeriesWhenAxisRangeChanges", "Boolean");
        b.item("EffectiveViewport", "Rect");
        b.item("WindowRect", "Rect");
        b.item("UseTiledZooming", "Boolean");
        b.item("PreferHigherResolutionTiles", "Boolean");
        b.item("ZoomTileCacheSize", "Number:int");
        b.item("HighlightingTransitionDuration", "Number:int");
        b.item("IsPagePanningAllowed", "Boolean");
        b.item("ContentHitTestMode", "ExportedType:string:ChartHitTestMode");
        b.item("ActualContentHitTestMode", "ExportedType:string:ChartHitTestMode");
        b.item("IsSurfaceInteractionDisabled", "Boolean");
        b.item("WindowResponse", "ExportedType:string:WindowResponse");
        b.item("WindowRectMinWidth", "Number:double");
        b.item("OverviewPlusDetailPaneVisibility", "ExportedType:string:Visibility");
        b.item("CrosshairVisibility", "ExportedType:string:Visibility");
        b.item("PlotAreaBackground", "Brush");
        b.item("DefaultInteraction", "ExportedType:string:InteractionState");
        b.item("RightButtonDefaultInteraction", "ExportedType:string:InteractionState");
        b.item("DragModifier", "ExportedType:string:ModifierKeys");
        b.item("PanModifier", "ExportedType:string:ModifierKeys");
        b.item("PreviewRect", "Rect");
        b.item("WindowPositionHorizontal", "Number:double");
        b.item("WindowPositionVertical", "Number:double");
        b.item("ChartTitle", "(w:Title,wf:Title)String");
        b.item("TitleHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("SubtitleHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("TitleTextStyle", "String");
        b.item("SubtitleTextStyle", "String");
        b.item("TitleTextColor", "Brush");
        b.item("SubtitleTextColor", "Brush");
        b.item("TitleTopMargin", "Number:double");
        b.item("TitleLeftMargin", "Number:double");
        b.item("TitleRightMargin", "Number:double");
        b.item("TitleBottomMargin", "Number:double");
        b.item("SubtitleTopMargin", "Number:double");
        b.item("SubtitleLeftMargin", "Number:double");
        b.item("SubtitleRightMargin", "Number:double");
        b.item("SubtitleBottomMargin", "Number:double");
        b.item("Subtitle", "String");
        b.item("TopMargin", "Number:double");
        b.item("LeftMargin", "Number:double");
        b.item("RightMargin", "Number:double");
        b.item("BottomMargin", "Number:double");
        b.item("AutoMarginWidth", "Number:double");
        b.item("AutoMarginHeight", "Number:double");
        b.item("IsAntiAliasingEnabledDuringInteraction", "Boolean");
        b.item("PixelScalingRatio", "Number:double");
        b.item("InteractionPixelScalingRatio", "Number:double");
        b.item("OverviewPlusDetailPaneBackgroundImageUri", "String");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("ActualInteractionPixelScalingRatio", "Number:double");
        b.item("ActualWindowRect", "Rect");
        b.item("ActualWindowPositionHorizontal", "Number:double");
        b.item("ActualWindowPositionVertical", "Number:double");
        b.item("SeriesCursorMouseMoveRef", "EventRef::seriesCursorMouseMove");
        b.item("SeriesMouseLeftButtonDownRef", "EventRef::seriesMouseLeftButtonDown");
        b.item("SeriesMouseLeftButtonUpRef", "EventRef::seriesMouseLeftButtonUp");
        b.item("SeriesMouseMoveRef", "EventRef::seriesMouseMove");
        b.item("SeriesMouseEnterRef", "EventRef::seriesMouseEnter");
        b.item("SeriesMouseLeaveRef", "EventRef::seriesMouseLeave");
        b.item("WindowRectChangedRef", "EventRef::windowRectChanged");
        b.item("SizeChangedRef", "EventRef::sizeChanged");
        b.item("ActualWindowRectChangedRef", "EventRef::actualWindowRectChanged");
        b.item("GridAreaRectChangedRef", "EventRef::gridAreaRectChanged");
        SeriesViewerDescriptionMetadata.e(a, b);
    };
    SeriesViewerDescriptionMetadata.d = function (a) {
        SeriesViewerDescriptionMetadata.b(a);
        a.m("SeriesViewer", SeriesViewerDescriptionMetadata.a);
    };
    SeriesViewerDescriptionMetadata.e = function (a, b) {
        b.item("Series", "Collection:Series:SeriesCollection:Series");
        b.item("LegendRef", "(w:Legend)DataRef:String");
        b.item("Background", "(wf:BackColor/ColorTransform)Brush");
        b.item("TitleFontFamily", "(w:TitleFontFamily/FontFamilyTransform,wf:TitleFontFamily,web:TitleTextStyle/FontFamilyTransform)String");
        b.item("TitleFontSize", "(w:TitleFontSize,wf:TitleFontSize,web:TitleTextStyle/FontSizeTransform)Number:double");
        b.item("TitleFontStyle", "(w:TitleFontStyle/FontStyleTransform,wf:TitleTextStyle/FontStyleTransform,web:TitleTextStyle/FontStyleTransform)String");
        b.item("TitleFontWeight", "(w:TitleFontWeight/FontWeightTransform,wf:TitleTextStyle/FontWeightTransform,web:TitleTextStyle/FontWeightTransform)String");
        b.item("SubtitleFontFamily", "(w:SubtitleFontFamily/FontFamilyTransform,wf:SubtitleFontFamily,web:SubtitleTextStyle/FontFamilyTransform)String");
        b.item("SubtitleFontSize", "(w:SubtitleFontSize,wf:SubtitleFontSize,web:SubtitleTextStyle/FontSizeTransform)Number:double");
        b.item("SubtitleFontStyle", "(w:SubtitleFontStyle/FontStyleTransform,wf:SubtitleTextStyle/FontStyleTransform,web:SubtitleTextStyle/FontStyleTransform)String");
        b.item("SubtitleFontWeight", "(w:SubtitleFontWeight/FontWeightTransform,wf:SubtitleTextStyle/FontWeightTransform,web:SubtitleTextStyle/FontWeightTransform)String");
    };
    SeriesViewerDescriptionMetadata.$t = markType(SeriesViewerDescriptionMetadata, 'SeriesViewerDescriptionMetadata');
    SeriesViewerDescriptionMetadata.a = null;
    return SeriesViewerDescriptionMetadata;
}(Base));
export { SeriesViewerDescriptionMetadata };
//# sourceMappingURL=ChartCursorEventArgsDescriptionMetadata_combined.js.map