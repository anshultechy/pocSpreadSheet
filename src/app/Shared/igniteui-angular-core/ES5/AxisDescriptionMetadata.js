/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisRangeChangedEventArgsDescriptionMetadata } from "./AxisRangeChangedEventArgsDescriptionMetadata";
import { RenderRequestedEventArgsDescriptionMetadata } from "./RenderRequestedEventArgsDescriptionMetadata";
/**
 * @hidden
 */
var AxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AxisDescriptionMetadata, _super);
    function AxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisDescriptionMetadata.b = function (a) {
        if (AxisDescriptionMetadata.a == null) {
            AxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AxisDescriptionMetadata.c(a, AxisDescriptionMetadata.a);
            AxisRangeChangedEventArgsDescriptionMetadata.d(a);
            RenderRequestedEventArgsDescriptionMetadata.d(a);
        }
    };
    AxisDescriptionMetadata.c = function (a, b) {
        b.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
        b.item("Title", "String");
        b.item("Stroke", "Brush");
        b.item("ActualStroke", "Brush");
        b.item("StrokeThickness", "Number:double");
        b.item("Strip", "Brush");
        b.item("MajorStroke", "Brush");
        b.item("ActualMajorStroke", "Brush");
        b.item("MajorStrokeThickness", "Number:double");
        b.item("MinorStroke", "Brush");
        b.item("ActualMinorStroke", "Brush");
        b.item("MinorStrokeThickness", "Number:double");
        b.item("TickStroke", "Brush");
        b.item("TickStrokeThickness", "Number:double");
        b.item("TickLength", "Number:double");
        b.item("IsDisabled", "Boolean");
        b.item("IsInverted", "Boolean");
        b.item("UseEnhancedIntervalManagement", "Boolean");
        b.item("EnhancedIntervalMinimumCharacters", "Number:int");
        b.item("LabelTextColor", "(w:LabelSettings.TextColor,wf:LabelTextColor)Brush");
        b.item("LabelLocation", "(w:LabelSettings.Location,wf:LabelLocation)ExportedType:string:AxisLabelsLocation");
        b.item("LabelShowFirstLabel", "(w:LabelSettings.ShowFirstLabel,wf:LabelShowFirstLabel)Boolean");
        b.item("LabelAngle", "(w:LabelSettings.Angle,wf:LabelAngle)Number:double");
        b.item("LabelExtent", "(w:LabelSettings.Extent,wf:LabelExtent)Number:double");
        b.item("LabelLeftMargin", "(w:LabelSettings.LeftMargin,wf:LabelLeftMargin)Number:double");
        b.item("LabelRightMargin", "(w:LabelSettings.RightMargin,wf:LabelRightMargin)Number:double");
        b.item("LabelTopMargin", "(w:LabelSettings.TopMargin,wf:LabelTopMargin)Number:double");
        b.item("LabelBottomMargin", "(w:LabelSettings.BottomMargin,wf:LabelBottomMargin)Number:double");
        b.item("LabelHorizontalAlignment", "(w:LabelSettings.HorizontalAlignment,wf:LabelHorizontalAlignment)ExportedType:string:HorizontalAlignment");
        b.item("LabelVerticalAlignment", "(w:LabelSettings.VerticalAlignment,wf:LabelVerticalAlignment)ExportedType:string:VerticalAlignment");
        b.item("CrossingAxisRef", "(w:CrossingAxis,wf:CrossingAxis)DataRef::object");
        b.item("CrossingValueRef", "(w:CrossingValue,wf:CrossingValue)DataRef");
        b.item("TitlePosition", "(w:TitleSettings.Position,wf:TitlePosition)ExportedType:string:AxisTitlePosition");
        b.item("TitleTextColor", "(w:TitleSettings.TextColor,wf:TitleTextColor)Brush");
        b.item("TitleLocation", "(w:TitleSettings.Location,wf:TitleLocation)ExportedType:string:AxisLabelsLocation");
        b.item("TitleVisibility", "(w:TitleSettings.Visibility,wf:TitleVisibility)ExportedType:string:Visibility");
        b.item("TitleShowFirstLabel", "(w:TitleSettings.ShowFirstLabel,wf:TitleShowFirstLabel)Boolean");
        b.item("TitleAngle", "(w:TitleSettings.Angle,wf:TitleAngle)Number:double");
        b.item("TitleExtent", "(w:TitleSettings.Extent,wf:TitleExtent)Number:double");
        b.item("TitleLeftMargin", "(w:TitleSettings.LeftMargin,wf:TitleLeftMargin)Number:double");
        b.item("TitleRightMargin", "(w:TitleSettings.RightMargin,wf:TitleRightMargin)Number:double");
        b.item("TitleTopMargin", "(w:TitleSettings.TopMargin,wf:TitleTopMargin)Number:double");
        b.item("TitleBottomMargin", "(w:TitleSettings.BottomMargin,wf:TitleBottomMargin)Number:double");
        b.item("TitleHorizontalAlignment", "(w:TitleSettings.HorizontalAlignment,wf:TitleHorizontalAlignment)ExportedType:string:HorizontalAlignment");
        b.item("TitleVerticalAlignment", "(w:TitleSettings.VerticalAlignment,wf:TitleVerticalAlignment)ExportedType:string:VerticalAlignment");
        b.item("CoercionMethodsRef", "(w:CoercionMethods,wf:CoercionMethods)DataRef");
        b.item("ExpectFunctions", "Boolean");
        b.item("RangeChangedRef", "EventRef::rangeChanged");
        b.item("RenderRequestedRef", "EventRef::renderRequested");
        AxisDescriptionMetadata.e(a, b);
    };
    AxisDescriptionMetadata.d = function (a) {
        AxisDescriptionMetadata.b(a);
        a.m("Axis", AxisDescriptionMetadata.a);
    };
    AxisDescriptionMetadata.e = function (a, b) {
        b.item("Label", "(w:Label/AxisLabelTransform)String");
        b.item("LabelFontFamily", "(w:LabelSettings.FontFamily/FontFamilyTransform,wf:LabelFontFamily,web:LabelTextStyle/FontFamilyTransform)String");
        b.item("LabelFontSize", "(w:LabelSettings.FontSize,wf:LabelFontSize,web:LabelTextStyle/FontSizeTransform)Number:double");
        b.item("LabelFontStyle", "(w:LabelSettings.FontStyle/FontStyleTransform,wf:LabelTextStyle/FontStyleTransform,web:LabelTextStyle/FontStyleTransform)String");
        b.item("LabelFontWeight", "(w:LabelSettings.FontWeight/FontWeightTransform,wf:LabelTextStyle/FontWeightTransform,web:LabelTextStyle/FontWeightTransform)String");
        b.item("TitleFontFamily", "(w:TitleSettings.FontFamily/FontFamilyTransform,wf:TitleFontFamily,web:TitleTextStyle/FontFamilyTransform)String");
        b.item("TitleFontSize", "(w:TitleSettings.FontSize,wf:TitleFontSize,web:TitleTextStyle/FontSizeTransform)Number:double");
        b.item("TitleFontStyle", "(w:TitleSettings.FontStyle/FontStyleTransform,wf:TitleTextStyle/FontStyleTransform,web:TitleTextStyle/FontStyleTransform)String");
        b.item("TitleFontWeight", "(w:TitleSettings.FontWeight/FontWeightTransform,wf:TitleTextStyle/FontWeightTransform,web:TitleTextStyle/FontWeightTransform)String");
        b.item("LabelVisibility", "(w:LabelSettings.Visibility,wf:LabelsVisible/VisibilityToBooleanTransform)ExportedType:string:Visibility");
    };
    AxisDescriptionMetadata.$t = markType(AxisDescriptionMetadata, 'AxisDescriptionMetadata');
    AxisDescriptionMetadata.a = null;
    return AxisDescriptionMetadata;
}(Base));
export { AxisDescriptionMetadata };
//# sourceMappingURL=AxisDescriptionMetadata.js.map