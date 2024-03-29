/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatRadialGaugeLabelEventArgsDescriptionMetadata } from "./FormatRadialGaugeLabelEventArgsDescriptionMetadata";
import { AlignRadialGaugeLabelEventArgsDescriptionMetadata } from "./AlignRadialGaugeLabelEventArgsDescriptionMetadata";
import { RadialGaugeDescription } from "./RadialGaugeDescription";
/**
 * @hidden
 */
var RadialGaugeDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RadialGaugeDescriptionMetadata, _super);
    function RadialGaugeDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadialGaugeDescriptionMetadata.b = function (a) {
        if (RadialGaugeDescriptionMetadata.a == null) {
            RadialGaugeDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialGaugeDescriptionMetadata.c(a, RadialGaugeDescriptionMetadata.a);
            FormatRadialGaugeLabelEventArgsDescriptionMetadata.d(a);
            AlignRadialGaugeLabelEventArgsDescriptionMetadata.d(a);
        }
    };
    RadialGaugeDescriptionMetadata.c = function (a, b) {
        b.item("RangeBrushes", "BrushCollection:string");
        b.item("RangeOutlines", "BrushCollection:string");
        b.item("MinimumValue", "Number:double");
        b.item("ActualMinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("ActualMaximumValue", "Number:double");
        b.item("Interval", "Number:double");
        b.item("CenterX", "Number:double");
        b.item("CenterY", "Number:double");
        b.item("Value", "Number:double");
        b.item("ScaleStartAngle", "Number:double");
        b.item("ScaleEndAngle", "Number:double");
        b.item("ScaleSweepDirection", "ExportedType:string:SweepDirection");
        b.item("TransitionDuration", "Number:int");
        b.item("TransitionEasingFunctionRef", "(w:TransitionEasingFunction,wf:TransitionEasingFunction)MethodRef");
        b.item("NeedleBrush", "Brush");
        b.item("NeedleOutline", "Brush");
        b.item("NeedleStartExtent", "Number:double");
        b.item("NeedleEndExtent", "Number:double");
        b.item("NeedleShape", "ExportedType:string:RadialGaugeNeedleShape");
        b.item("NeedleStartWidthRatio", "Number:double");
        b.item("NeedleEndWidthRatio", "Number:double");
        b.item("NeedleBaseFeatureWidthRatio", "Number:double");
        b.item("NeedleBaseFeatureExtent", "Number:double");
        b.item("NeedlePointFeatureWidthRatio", "Number:double");
        b.item("NeedlePointFeatureExtent", "Number:double");
        b.item("NeedlePivotWidthRatio", "Number:double");
        b.item("NeedlePivotInnerWidthRatio", "Number:double");
        b.item("NeedlePivotShape", "ExportedType:string:RadialGaugePivotShape");
        b.item("ScaleStartExtent", "Number:double");
        b.item("NeedlePivotBrush", "Brush");
        b.item("NeedlePivotOutline", "Brush");
        b.item("NeedleStrokeThickness", "Number:double");
        b.item("NeedlePivotStrokeThickness", "Number:double");
        b.item("ScaleEndExtent", "Number:double");
        b.item("LabelExtent", "Number:double");
        b.item("LabelInterval", "Number:double");
        b.item("TickStartExtent", "Number:double");
        b.item("TickEndExtent", "Number:double");
        b.item("TickStrokeThickness", "Number:double");
        b.item("TickBrush", "Brush");
        b.item("FontBrush", "Brush");
        b.item("MinorTickStartExtent", "Number:double");
        b.item("MinorTickEndExtent", "Number:double");
        b.item("MinorTickStrokeThickness", "Number:double");
        b.item("MinorTickBrush", "Brush");
        b.item("MinorTickCount", "Number:double");
        b.item("ScaleBrush", "Brush");
        b.item("BackingBrush", "Brush");
        b.item("BackingOutline", "Brush");
        b.item("BackingStrokeThickness", "Number:double");
        b.item("BackingOuterExtent", "Number:double");
        b.item("BackingOversweep", "Number:double");
        b.item("ScaleOversweep", "Number:double");
        b.item("ScaleOversweepShape", "ExportedType:string:RadialGaugeScaleOversweepShape");
        b.item("BackingCornerRadius", "Number:double");
        b.item("BackingInnerExtent", "Number:double");
        b.item("BackingShape", "ExportedType:string:RadialGaugeBackingShape");
        b.item("RadiusMultiplier", "Number:double");
        b.item("DuplicateLabelOmissionStrategy", "ExportedType:string:RadialGaugeDuplicateLabelOmissionStrategy");
        b.item("IsNeedleDraggingEnabled", "Boolean");
        b.item("IsNeedleDraggingConstrained", "Boolean");
        b.item("Font", "String");
        b.item("TransitionProgress", "Number:double");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("FormatLabelRef", "EventRef::formatLabel");
        b.item("AlignLabelRef", "EventRef::alignLabel");
    };
    RadialGaugeDescriptionMetadata.d = function (a) {
        RadialGaugeDescriptionMetadata.b(a);
        a.n("RadialGauge", function () { return new RadialGaugeDescription(); });
        a.m("RadialGauge", RadialGaugeDescriptionMetadata.a);
    };
    RadialGaugeDescriptionMetadata.$t = markType(RadialGaugeDescriptionMetadata, 'RadialGaugeDescriptionMetadata');
    RadialGaugeDescriptionMetadata.a = null;
    return RadialGaugeDescriptionMetadata;
}(Base));
export { RadialGaugeDescriptionMetadata };
//# sourceMappingURL=RadialGaugeDescriptionMetadata.js.map