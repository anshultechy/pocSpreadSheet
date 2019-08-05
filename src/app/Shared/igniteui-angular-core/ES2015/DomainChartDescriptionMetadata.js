/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ChartSeriesEventArgsDescriptionMetadata } from "./ChartSeriesEventArgsDescriptionMetadata";
import { DomainChartSeriesPointerEventArgsDescriptionMetadata } from "./DomainChartSeriesPointerEventArgsDescriptionMetadata";
import { CalloutStyleUpdatingEventArgsDescriptionMetadata } from "./CalloutStyleUpdatingEventArgsDescriptionMetadata";
/**
 * @hidden
 */
export class DomainChartDescriptionMetadata extends Base {
    static b(a) {
        if (DomainChartDescriptionMetadata.a == null) {
            DomainChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DomainChartDescriptionMetadata.c(a, DomainChartDescriptionMetadata.a);
            ChartSeriesEventArgsDescriptionMetadata.d(a);
            DomainChartSeriesPointerEventArgsDescriptionMetadata.d(a);
            CalloutStyleUpdatingEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("PixelScalingRatio", "Number:double");
        b.item("TitleLeftMargin", "Number:double");
        b.item("TitleRightMargin", "Number:double");
        b.item("TitleTopMargin", "Number:double");
        b.item("TitleBottomMargin", "Number:double");
        b.item("SubtitleLeftMargin", "Number:double");
        b.item("SubtitleTopMargin", "Number:double");
        b.item("SubtitleRightMargin", "Number:double");
        b.item("SubtitleBottomMargin", "Number:double");
        b.item("SubtitleTextColor", "Brush");
        b.item("TitleTextColor", "Brush");
        b.item("LeftMargin", "Number:double");
        b.item("TopMargin", "Number:double");
        b.item("RightMargin", "Number:double");
        b.item("BottomMargin", "Number:double");
        b.item("TransitionDuration", "Number:int");
        b.item("TransitionEasingFunctionRef", "(w:TransitionEasingFunction,wf:TransitionEasingFunction)MethodRef");
        b.item("SubtitleTextStyle", "String");
        b.item("TitleTextStyle", "String");
        b.item("IncludedProperties", "Array:string");
        b.item("ExcludedProperties", "Array:string");
        b.item("Brushes", "BrushCollection:string");
        b.item("Outlines", "BrushCollection:string");
        b.item("IsHorizontalZoomEnabled", "Boolean");
        b.item("IsVerticalZoomEnabled", "Boolean");
        b.item("IsSeriesHighlightingEnabled", "Boolean");
        b.item("WindowRect", "Rect");
        b.item("ChartTitle", "(w:Title,wf:Title)String");
        b.item("Subtitle", "String");
        b.item("TitleAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("SubtitleAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
        b.item("Resolution", "Number:double");
        b.item("Thickness", "Number:double");
        b.item("MarkerTypes", "Collection:string:MarkerTypeCollection:MarkerTypeDescription");
        b.item("MarkerBrushes", "BrushCollection:string");
        b.item("MarkerOutlines", "BrushCollection:string");
        b.item("MarkerMaxCount", "Number:int");
        b.item("AnimateSeriesWhenAxisRangeChanges", "Boolean");
        b.item("TrendLineBrushes", "BrushCollection:string");
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineThickness", "Number:double");
        b.item("AlignsGridLinesToPixels", "Boolean");
        b.item("TrendLinePeriod", "Number:int");
        b.item("ToolTipType", "ExportedType:string:ToolTipType");
        b.item("CrosshairsDisplayMode", "ExportedType:string:CrosshairsDisplayMode");
        b.item("CrosshairsSnapToData", "Boolean");
        b.item("CrosshairsAnnotationEnabled", "Boolean");
        b.item("FinalValueAnnotationsVisible", "Boolean");
        b.item("CalloutsVisible", "Boolean");
        b.item("CalloutStyleUpdatingEventEnabled", "Boolean");
        b.item("CalloutsXMemberPath", "String");
        b.item("CalloutsYMemberPath", "String");
        b.item("CalloutsLabelMemberPath", "String");
        b.item("CalloutsContentMemberPath", "String");
        b.item("SeriesAddedRef", "EventRef::seriesAdded");
        b.item("SeriesRemovedRef", "EventRef::seriesRemoved");
        b.item("SeriesPointerEnterRef", "EventRef::seriesPointerEnter");
        b.item("SeriesPointerLeaveRef", "EventRef::seriesPointerLeave");
        b.item("SeriesPointerMoveRef", "EventRef::seriesPointerMove");
        b.item("SeriesPointerDownRef", "EventRef::seriesPointerDown");
        b.item("SeriesPointerUpRef", "EventRef::seriesPointerUp");
        b.item("CalloutStyleUpdatingRef", "EventRef::calloutStyleUpdating");
    }
    static d(a) {
        DomainChartDescriptionMetadata.b(a);
        a.m("DomainChart", DomainChartDescriptionMetadata.a);
    }
}
DomainChartDescriptionMetadata.$t = markType(DomainChartDescriptionMetadata, 'DomainChartDescriptionMetadata');
DomainChartDescriptionMetadata.a = null;
//# sourceMappingURL=DomainChartDescriptionMetadata.js.map