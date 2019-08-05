/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DomainChartDescriptionMetadata } from "./DomainChartDescriptionMetadata";
/**
 * @hidden
 */
var XYChartDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(XYChartDescriptionMetadata, _super);
    function XYChartDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XYChartDescriptionMetadata.b = function (a) {
        if (XYChartDescriptionMetadata.a == null) {
            XYChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            XYChartDescriptionMetadata.c(a, XYChartDescriptionMetadata.a);
        }
    };
    XYChartDescriptionMetadata.c = function (a, b) {
        DomainChartDescriptionMetadata.c(a, b);
        b.item("XAxisFormatLabelRef", "(w:XAxisFormatLabel,wf:XAxisFormatLabel)MethodRef");
        b.item("YAxisFormatLabelRef", "(w:YAxisFormatLabel,wf:YAxisFormatLabel)MethodRef");
        b.item("XAxisLabelLeftMargin", "Number:double");
        b.item("XAxisLabelTopMargin", "Number:double");
        b.item("XAxisLabelRightMargin", "Number:double");
        b.item("XAxisLabelBottomMargin", "Number:double");
        b.item("YAxisLabelLeftMargin", "Number:double");
        b.item("YAxisLabelTopMargin", "Number:double");
        b.item("YAxisLabelRightMargin", "Number:double");
        b.item("YAxisLabelBottomMargin", "Number:double");
        b.item("XAxisLabelTextColor", "Brush");
        b.item("YAxisLabelTextColor", "Brush");
        b.item("XAxisTitleMargin", "Number:double");
        b.item("YAxisTitleMargin", "Number:double");
        b.item("XAxisTitleLeftMargin", "Number:double");
        b.item("YAxisTitleLeftMargin", "Number:double");
        b.item("XAxisTitleTopMargin", "Number:double");
        b.item("YAxisTitleTopMargin", "Number:double");
        b.item("XAxisTitleRightMargin", "Number:double");
        b.item("YAxisTitleRightMargin", "Number:double");
        b.item("XAxisTitleBottomMargin", "Number:double");
        b.item("YAxisTitleBottomMargin", "Number:double");
        b.item("XAxisTitleTextColor", "Brush");
        b.item("YAxisTitleTextColor", "Brush");
        b.item("XAxisLabelTextStyle", "String");
        b.item("YAxisLabelTextStyle", "String");
        b.item("XAxisTitleTextStyle", "String");
        b.item("YAxisTitleTextStyle", "String");
        b.item("XAxisLabelRef", "(w:XAxisLabel,wf:XAxisLabel)DataRef");
        b.item("YAxisLabelRef", "(w:YAxisLabel,wf:YAxisLabel)DataRef");
        b.item("XAxisMajorStroke", "Brush");
        b.item("YAxisMajorStroke", "Brush");
        b.item("XAxisMajorStrokeThickness", "Number:double");
        b.item("YAxisMajorStrokeThickness", "Number:double");
        b.item("XAxisMinorStrokeThickness", "Number:double");
        b.item("YAxisMinorStrokeThickness", "Number:double");
        b.item("XAxisStrip", "Brush");
        b.item("YAxisStrip", "Brush");
        b.item("XAxisStroke", "Brush");
        b.item("YAxisStroke", "Brush");
        b.item("XAxisStrokeThickness", "Number:double");
        b.item("YAxisStrokeThickness", "Number:double");
        b.item("XAxisTickLength", "Number:double");
        b.item("YAxisTickLength", "Number:double");
        b.item("XAxisTickStroke", "Brush");
        b.item("YAxisTickStroke", "Brush");
        b.item("XAxisTickStrokeThickness", "Number:double");
        b.item("YAxisTickStrokeThickness", "Number:double");
        b.item("XAxisTitle", "String");
        b.item("YAxisTitle", "String");
        b.item("XAxisMinorStroke", "Brush");
        b.item("YAxisMinorStroke", "Brush");
        b.item("XAxisLabelAngle", "Number:double");
        b.item("YAxisLabelAngle", "Number:double");
        b.item("XAxisExtent", "Number:double");
        b.item("YAxisExtent", "Number:double");
        b.item("XAxisTitleAngle", "Number:double");
        b.item("YAxisTitleAngle", "Number:double");
        b.item("XAxisInverted", "Boolean");
        b.item("YAxisInverted", "Boolean");
        b.item("XAxisTitleAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("YAxisTitleAlignment", "ExportedType:string:VerticalAlignment");
        b.item("XAxisLabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("YAxisLabelHorizontalAlignment", "ExportedType:string:HorizontalAlignment");
        b.item("XAxisLabelVerticalAlignment", "ExportedType:string:VerticalAlignment");
        b.item("YAxisLabelVerticalAlignment", "ExportedType:string:VerticalAlignment");
        b.item("XAxisLabelVisibility", "ExportedType:string:Visibility");
        b.item("YAxisLabelVisibility", "ExportedType:string:Visibility");
        b.item("YAxisLabelLocation", "ExportedType:string:AxisLabelsLocation");
    };
    XYChartDescriptionMetadata.d = function (a) {
        XYChartDescriptionMetadata.b(a);
        a.m("XYChart", XYChartDescriptionMetadata.a);
    };
    XYChartDescriptionMetadata.$t = markType(XYChartDescriptionMetadata, 'XYChartDescriptionMetadata');
    XYChartDescriptionMetadata.a = null;
    return XYChartDescriptionMetadata;
}(Base));
export { XYChartDescriptionMetadata };
//# sourceMappingURL=XYChartDescriptionMetadata.js.map