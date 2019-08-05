/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesViewerDescriptionMetadata } from "./SeriesViewerDescriptionMetadata";
import { DataChartDescription } from "./DataChartDescription";
/**
 * @hidden
 */
var DataChartDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartDescriptionMetadata, _super);
    function DataChartDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartDescriptionMetadata.b = function (a) {
        if (DataChartDescriptionMetadata.a == null) {
            DataChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataChartDescriptionMetadata.c(a, DataChartDescriptionMetadata.a);
        }
    };
    DataChartDescriptionMetadata.c = function (a, b) {
        SeriesViewerDescriptionMetadata.c(a, b);
        b.item("IsSquare", "Boolean");
        b.item("WindowScaleHorizontal", "Number:double");
        b.item("WindowScaleVertical", "Number:double");
        b.item("ActualWindowScaleHorizontal", "Number:double");
        b.item("ActualWindowScaleVertical", "Number:double");
        b.item("IsHorizontalZoomEnabled", "Boolean");
        b.item("IsVerticalZoomEnabled", "Boolean");
        b.item("GridMode", "ExportedType:string:GridMode");
        b.item("AlignsGridLinesToPixels", "Boolean");
        b.item("Brushes", "BrushCollection:string");
        b.item("MarkerBrushes", "BrushCollection:string");
        b.item("Outlines", "BrushCollection:string");
        b.item("MarkerOutlines", "BrushCollection:string");
        b.item("DefaultAxisStroke", "Brush");
        b.item("DefaultAxisMajorStroke", "Brush");
        b.item("DefaultAxisMinorStroke", "Brush");
        b.item("PlotAreaMarginLeft", "Number:double");
        b.item("PlotAreaMarginTop", "Number:double");
        b.item("PlotAreaMarginRight", "Number:double");
        b.item("PlotAreaMarginBottom", "Number:double");
        DataChartDescriptionMetadata.e(a, b);
    };
    DataChartDescriptionMetadata.d = function (a) {
        DataChartDescriptionMetadata.b(a);
        a.n("DataChart", function () { return new DataChartDescription(); });
        a.m("DataChart", DataChartDescriptionMetadata.a);
    };
    DataChartDescriptionMetadata.e = function (a, b) {
        b.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamDataChart");
        b.item("Axes", "Collection:Axis:AxisCollection:Axis");
        b.item("Width", "(w:Width/DimensionTransform)String");
        b.item("Height", "(w:Height/DimensionTransform)String");
    };
    DataChartDescriptionMetadata.$t = markType(DataChartDescriptionMetadata, 'DataChartDescriptionMetadata');
    DataChartDescriptionMetadata.a = null;
    return DataChartDescriptionMetadata;
}(Base));
export { DataChartDescriptionMetadata };
//# sourceMappingURL=DataChartDescriptionMetadata.js.map