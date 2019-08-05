/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescriptionMetadata } from "./PropertyUpdatedEventArgsDescriptionMetadata";
/**
 * @hidden
 */
var RingSeriesBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RingSeriesBaseDescriptionMetadata, _super);
    function RingSeriesBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RingSeriesBaseDescriptionMetadata.e = function (a, b) {
        b.item("DataSourceRef", "(w:ItemsSource)DataRef:String");
        b.item("LegendRef", "DataRef:String");
        b.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
        b.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:TextStyle/FontFamilyTransform)String");
        b.item("FontSize", "(w:FontSize,wf:FontSize,web:TextStyle/FontSizeTransform)Number:double");
        b.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontStyle/FontStyleTransform,web:TextStyle/FontStyleTransform)String");
        b.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontStyle/FontWeightTransform,web:TextStyle/FontWeightTransform)String");
    };
    RingSeriesBaseDescriptionMetadata.b = function (a) {
        if (RingSeriesBaseDescriptionMetadata.a == null) {
            RingSeriesBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RingSeriesBaseDescriptionMetadata.c(a, RingSeriesBaseDescriptionMetadata.a);
            PropertyUpdatedEventArgsDescriptionMetadata.d(a);
        }
    };
    RingSeriesBaseDescriptionMetadata.c = function (a, b) {
        b.item("ValueMemberPath", "String");
        b.item("LabelMemberPath", "String");
        b.item("LegendLabelMemberPath", "String");
        b.item("LabelsPosition", "ExportedType:string:LabelsPosition");
        b.item("LeaderLineVisibility", "ExportedType:string:Visibility");
        b.item("LeaderLineFill", "(w:LeaderLineStyle.Fill,wf:LeaderLineFill)String");
        b.item("LeaderLineStroke", "(w:LeaderLineStyle.Stroke,wf:LeaderLineStroke)String");
        b.item("LeaderLineStrokeThickness", "(w:LeaderLineStyle.StrokeThickness,wf:LeaderLineStrokeThickness)Number:double");
        b.item("LeaderLineOpacity", "(w:LeaderLineStyle.Opacity,wf:LeaderLineOpacity)Number:double");
        b.item("LeaderLineType", "ExportedType:string:LeaderLineType");
        b.item("LeaderLineMargin", "Number:double");
        b.item("OthersCategoryThreshold", "Number:double");
        b.item("OthersCategoryType", "ExportedType:string:OthersCategoryType");
        b.item("OthersCategoryText", "String");
        b.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
        b.item("FormatLegendLabelRef", "(w:FormatLegendLabel,wf:FormatLegendLabel)MethodRef");
        b.item("LabelExtent", "Number:double");
        b.item("StartAngle", "Number:double");
        b.item("OthersCategoryFill", "(w:OthersCategoryStyle.Fill,wf:OthersCategoryFill)String");
        b.item("OthersCategoryStroke", "(w:OthersCategoryStyle.Stroke,wf:OthersCategoryStroke)String");
        b.item("OthersCategoryStrokeThickness", "(w:OthersCategoryStyle.StrokeThickness,wf:OthersCategoryStrokeThickness)Number:double");
        b.item("OthersCategoryOpacity", "(w:OthersCategoryStyle.Opacity,wf:OthersCategoryOpacity)Number:double");
        b.item("SelectedSliceFill", "(w:SelectedStyle.Fill,wf:SelectedSliceFill)String");
        b.item("SelectedSliceStroke", "(w:SelectedStyle.Stroke,wf:SelectedSliceStroke)String");
        b.item("SelectedSliceStrokeThickness", "(w:SelectedStyle.StrokeThickness,wf:SelectedSliceStrokeThickness)Number:double");
        b.item("SelectedSliceOpacity", "(w:SelectedStyle.Opacity,wf:SelectedSliceOpacity)Number:double");
        b.item("Brushes", "BrushCollection:string");
        b.item("Outlines", "BrushCollection:string");
        b.item("IsSurfaceInteractionDisabled", "Boolean");
        b.item("RadiusFactor", "Number:double");
        b.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
        RingSeriesBaseDescriptionMetadata.e(a, b);
    };
    RingSeriesBaseDescriptionMetadata.d = function (a) {
        RingSeriesBaseDescriptionMetadata.b(a);
        a.m("RingSeriesBase", RingSeriesBaseDescriptionMetadata.a);
    };
    RingSeriesBaseDescriptionMetadata.$t = markType(RingSeriesBaseDescriptionMetadata, 'RingSeriesBaseDescriptionMetadata');
    RingSeriesBaseDescriptionMetadata.a = null;
    return RingSeriesBaseDescriptionMetadata;
}(Base));
export { RingSeriesBaseDescriptionMetadata };
//# sourceMappingURL=RingSeriesBaseDescriptionMetadata.js.map