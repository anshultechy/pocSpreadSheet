/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialChartCustomIndicatorArgsDescriptionMetadata } from "./FinancialChartCustomIndicatorArgsDescriptionMetadata";
import { XYChartDescriptionMetadata } from "./XYChartDescriptionMetadata";
import { FinancialChartDescription } from "./FinancialChartDescription";
/**
 * @hidden
 */
var FinancialChartDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialChartDescriptionMetadata, _super);
    function FinancialChartDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialChartDescriptionMetadata.b = function (a) {
        if (FinancialChartDescriptionMetadata.a == null) {
            FinancialChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialChartDescriptionMetadata.c(a, FinancialChartDescriptionMetadata.a);
            FinancialChartCustomIndicatorArgsDescriptionMetadata.d(a);
        }
    };
    FinancialChartDescriptionMetadata.c = function (a, b) {
        XYChartDescriptionMetadata.c(a, b);
        b.item("LeftMargin", "Number:double");
        b.item("IsHorizontalZoomEnabled", "Boolean");
        b.item("ToolbarHeight", "Number:double");
        b.item("YAxisIsLogarithmic", "Boolean");
        b.item("YAxisLogarithmBase", "Number:int");
        b.item("YAxisInterval", "Number:double");
        b.item("YAxisMinimumValue", "Number:double");
        b.item("YAxisMaximumValue", "Number:double");
        b.item("YAxisMinorInterval", "Number:double");
        b.item("VolumeType", "ExportedType:string:FinancialChartVolumeType");
        b.item("XAxisMode", "ExportedType:string:FinancialChartXAxisMode");
        b.item("YAxisMode", "ExportedType:string:FinancialChartYAxisMode");
        b.item("IsToolbarVisible", "Boolean");
        b.item("ChartType", "ExportedType:string:FinancialChartType");
        b.item("YAxisLabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("IsWindowSyncedToVisibleRange", "Boolean");
        b.item("IndicatorTypes", "Collection:string:FinancialIndicatorTypeCollection:FinancialIndicatorTypeDescription");
        b.item("OverlayTypes", "Collection:string:FinancialOverlayTypeCollection:FinancialOverlayTypeDescription");
        b.item("YAxisAbbreviateLargeNumbers", "Boolean");
        b.item("Resolution", "Number:double");
        b.item("YAxisLabelLocation", "ExportedType:string:AxisLabelsLocation");
        b.item("ZoomSliderType", "ExportedType:string:FinancialChartZoomSliderType");
        b.item("NegativeBrushes", "BrushCollection:string");
        b.item("NegativeOutlines", "BrushCollection:string");
        b.item("OverlayBrushes", "BrushCollection:string");
        b.item("OverlayOutlines", "BrushCollection:string");
        b.item("VolumeOutlines", "BrushCollection:string");
        b.item("VolumeBrushes", "BrushCollection:string");
        b.item("IndicatorNegativeBrushes", "BrushCollection:string");
        b.item("IndicatorBrushes", "BrushCollection:string");
        b.item("VolumeThickness", "Number:double");
        b.item("OverlayThickness", "Number:double");
        b.item("IndicatorThickness", "Number:double");
        b.item("IndicatorDisplayTypes", "Collection:string:IndicatorDisplayTypeCollection:IndicatorDisplayTypeDescription");
        b.item("IndicatorPeriod", "Number:int");
        b.item("IndicatorMultiplier", "Number:double");
        b.item("IndicatorSmoothingPeriod", "Number:int");
        b.item("IndicatorShortPeriod", "Number:int");
        b.item("IndicatorLongPeriod", "Number:int");
        b.item("IndicatorSignalPeriod", "Number:int");
        b.item("RangeSelectorOptions", "Collection:string:FinancialChartRangeSelectorOptionCollection:FinancialChartRangeSelectorOptionDescription");
        b.item("CustomIndicatorNames", "Collection:String:CustomIndicatorNameCollection:String");
        b.item("IsVerticalZoomEnabled", "Boolean");
        b.item("ZoomSliderXAxisMajorStroke", "Brush");
        b.item("ZoomSliderXAxisMajorStrokeThickness", "Number:double");
        b.item("IsLegendVisible", "Boolean");
        b.item("XAxisMinimumValue", "Date");
        b.item("XAxisMaximumValue", "Date");
        b.item("ApplyCustomIndicatorsRef", "EventRef::applyCustomIndicators");
    };
    FinancialChartDescriptionMetadata.d = function (a) {
        FinancialChartDescriptionMetadata.b(a);
        a.n("FinancialChart", function () { return new FinancialChartDescription(); });
        a.m("FinancialChart", FinancialChartDescriptionMetadata.a);
    };
    FinancialChartDescriptionMetadata.$t = markType(FinancialChartDescriptionMetadata, 'FinancialChartDescriptionMetadata');
    FinancialChartDescriptionMetadata.a = null;
    return FinancialChartDescriptionMetadata;
}(Base));
export { FinancialChartDescriptionMetadata };
//# sourceMappingURL=FinancialChartDescriptionMetadata.js.map