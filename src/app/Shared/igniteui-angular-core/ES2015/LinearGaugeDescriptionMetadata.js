/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatLinearGraphLabelEventArgsDescriptionMetadata } from "./FormatLinearGraphLabelEventArgsDescriptionMetadata";
import { AlignLinearGraphLabelEventArgsDescriptionMetadata } from "./AlignLinearGraphLabelEventArgsDescriptionMetadata";
import { LinearGaugeDescription } from "./LinearGaugeDescription";
/**
 * @hidden
 */
export class LinearGaugeDescriptionMetadata extends Base {
    static b(a) {
        if (LinearGaugeDescriptionMetadata.a == null) {
            LinearGaugeDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LinearGaugeDescriptionMetadata.c(a, LinearGaugeDescriptionMetadata.a);
            FormatLinearGraphLabelEventArgsDescriptionMetadata.d(a);
            AlignLinearGraphLabelEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("TransitionProgress", "Number:double");
        b.item("Orientation", "ExportedType:string:LinearScaleOrientation");
        b.item("RangeBrushes", "BrushCollection:string");
        b.item("RangeOutlines", "BrushCollection:string");
        b.item("MinimumValue", "Number:double");
        b.item("ActualMinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("ActualMaximumValue", "Number:double");
        b.item("Value", "Number:double");
        b.item("NeedleShape", "ExportedType:string:LinearGraphNeedleShape");
        b.item("NeedleName", "String");
        b.item("RangeInnerExtent", "Number:double");
        b.item("ScaleInnerExtent", "Number:double");
        b.item("RangeOuterExtent", "Number:double");
        b.item("ScaleOuterExtent", "Number:double");
        b.item("NeedleInnerExtent", "Number:double");
        b.item("NeedleOuterExtent", "Number:double");
        b.item("NeedleInnerBaseWidth", "Number:double");
        b.item("NeedleOuterBaseWidth", "Number:double");
        b.item("NeedleInnerPointWidth", "Number:double");
        b.item("NeedleOuterPointWidth", "Number:double");
        b.item("NeedleInnerPointExtent", "Number:double");
        b.item("NeedleOuterPointExtent", "Number:double");
        b.item("Interval", "Number:double");
        b.item("TicksPostInitial", "Number:double");
        b.item("TicksPreTerminal", "Number:double");
        b.item("LabelInterval", "Number:double");
        b.item("LabelExtent", "Number:double");
        b.item("LabelsPostInitial", "Number:double");
        b.item("LabelsPreTerminal", "Number:double");
        b.item("MinorTickCount", "Number:double");
        b.item("TickStartExtent", "Number:double");
        b.item("TickEndExtent", "Number:double");
        b.item("TickStrokeThickness", "Number:double");
        b.item("TickBrush", "Brush");
        b.item("FontBrush", "Brush");
        b.item("NeedleBreadth", "Number:double");
        b.item("NeedleBrush", "Brush");
        b.item("NeedleOutline", "Brush");
        b.item("NeedleStrokeThickness", "Number:double");
        b.item("MinorTickStartExtent", "Number:double");
        b.item("MinorTickEndExtent", "Number:double");
        b.item("MinorTickStrokeThickness", "Number:double");
        b.item("MinorTickBrush", "Brush");
        b.item("IsScaleInverted", "Boolean");
        b.item("BackingBrush", "Brush");
        b.item("BackingOutline", "Brush");
        b.item("BackingStrokeThickness", "Number:double");
        b.item("BackingInnerExtent", "Number:double");
        b.item("BackingOuterExtent", "Number:double");
        b.item("ScaleStartExtent", "Number:double");
        b.item("ScaleEndExtent", "Number:double");
        b.item("ScaleBrush", "Brush");
        b.item("ScaleOutline", "Brush");
        b.item("ScaleStrokeThickness", "Number:double");
        b.item("IsNeedleDraggingEnabled", "Boolean");
        b.item("TransitionDuration", "Number:int");
        b.item("ShowToolTipTimeout", "Number:int");
        b.item("ShowToolTip", "Boolean");
        b.item("Font", "String");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("FormatLabelRef", "EventRef::formatLabel");
        b.item("AlignLabelRef", "EventRef::alignLabel");
    }
    static d(a) {
        LinearGaugeDescriptionMetadata.b(a);
        a.n("LinearGauge", () => new LinearGaugeDescription());
        a.m("LinearGauge", LinearGaugeDescriptionMetadata.a);
    }
}
LinearGaugeDescriptionMetadata.$t = markType(LinearGaugeDescriptionMetadata, 'LinearGaugeDescriptionMetadata');
LinearGaugeDescriptionMetadata.a = null;
//# sourceMappingURL=LinearGaugeDescriptionMetadata.js.map