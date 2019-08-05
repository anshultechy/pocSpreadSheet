/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LabelClickEventArgsDescriptionMetadata } from "./LabelClickEventArgsDescriptionMetadata";
import { SelectedItemChangingEventArgsDescriptionMetadata } from "./SelectedItemChangingEventArgsDescriptionMetadata";
import { SelectedItemsChangingEventArgsDescriptionMetadata } from "./SelectedItemsChangingEventArgsDescriptionMetadata";
import { SelectedItemChangedEventArgsDescriptionMetadata } from "./SelectedItemChangedEventArgsDescriptionMetadata";
import { SelectedItemsChangedEventArgsDescriptionMetadata } from "./SelectedItemsChangedEventArgsDescriptionMetadata";
import { SliceClickEventArgsDescriptionMetadata } from "./SliceClickEventArgsDescriptionMetadata";
/**
 * @hidden
 */
var PieChartBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PieChartBaseDescriptionMetadata, _super);
    function PieChartBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieChartBaseDescriptionMetadata.e = function (a, b) {
        b.item("DataSourceRef", "(w:ItemsSource)DataRef:String");
        b.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
        b.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:TextStyle/FontFamilyTransform)String");
        b.item("FontSize", "(w:FontSize,wf:FontSize,web:TextStyle/FontSizeTransform)Number:double");
        b.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontStyle/FontStyleTransform,web:TextStyle/FontStyleTransform)String");
        b.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontStyle/FontWeightTransform,web:TextStyle/FontWeightTransform)String");
    };
    PieChartBaseDescriptionMetadata.b = function (a) {
        if (PieChartBaseDescriptionMetadata.a == null) {
            PieChartBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PieChartBaseDescriptionMetadata.c(a, PieChartBaseDescriptionMetadata.a);
            LabelClickEventArgsDescriptionMetadata.d(a);
            SelectedItemChangingEventArgsDescriptionMetadata.d(a);
            SelectedItemsChangingEventArgsDescriptionMetadata.d(a);
            SelectedItemChangedEventArgsDescriptionMetadata.d(a);
            SelectedItemsChangedEventArgsDescriptionMetadata.d(a);
            SliceClickEventArgsDescriptionMetadata.d(a);
        }
    };
    PieChartBaseDescriptionMetadata.c = function (a, b) {
        b.item("InnerExtent", "Number:double");
        b.item("ValueMemberPath", "String");
        b.item("LabelMemberPath", "String");
        b.item("LegendLabelMemberPath", "String");
        b.item("LabelsPosition", "ExportedType:string:LabelsPosition");
        b.item("LabelOuterColor", "Brush");
        b.item("LabelInnerColor", "Brush");
        b.item("LeaderLineVisibility", "ExportedType:string:Visibility");
        b.item("LeaderLineType", "ExportedType:string:LeaderLineType");
        b.item("LeaderLineMargin", "Number:double");
        b.item("OthersCategoryThreshold", "Number:double");
        b.item("OthersCategoryType", "ExportedType:string:OthersCategoryType");
        b.item("OthersCategoryText", "String");
        b.item("ExplodedRadius", "Number:double");
        b.item("RadiusFactor", "Number:double");
        b.item("AllowSliceSelection", "Boolean");
        b.item("AllowSliceExplosion", "Boolean");
        b.item("ExplodedSlices", "Collection:int:IndexCollection:Int32");
        b.item("LabelExtent", "Number:double");
        b.item("StartAngle", "Number:double");
        b.item("SweepDirection", "ExportedType:string:SweepDirection");
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
        b.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
        b.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
        b.item("IsSurfaceInteractionDisabled", "Boolean");
        b.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
        b.item("FormatLegendLabelRef", "(w:FormatLegendLabel,wf:FormatLegendLabel)MethodRef");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("SelectionMode", "ExportedType:string:SliceSelectionMode");
        b.item("SelectedItemRef", "(w:SelectedItem,wf:SelectedItem)DataRef");
        b.item("SelectedItems", "Collection:Object:ObjectCollection:Object");
        b.item("TextStyle", "String");
        b.item("LabelClickRef", "EventRef::labelClick");
        b.item("SelectedItemChangingRef", "EventRef::selectedItemChanging");
        b.item("SelectedItemsChangingRef", "EventRef::selectedItemsChanging");
        b.item("SelectedItemChangedRef", "EventRef::selectedItemChanged");
        b.item("SelectedItemsChangedRef", "EventRef::selectedItemsChanged");
        b.item("SliceClickRef", "EventRef::sliceClick");
        PieChartBaseDescriptionMetadata.e(a, b);
    };
    PieChartBaseDescriptionMetadata.d = function (a) {
        PieChartBaseDescriptionMetadata.b(a);
        a.m("PieChartBase", PieChartBaseDescriptionMetadata.a);
    };
    PieChartBaseDescriptionMetadata.$t = markType(PieChartBaseDescriptionMetadata, 'PieChartBaseDescriptionMetadata');
    PieChartBaseDescriptionMetadata.a = null;
    return PieChartBaseDescriptionMetadata;
}(Base));
export { PieChartBaseDescriptionMetadata };
//# sourceMappingURL=PieChartBaseDescriptionMetadata.js.map