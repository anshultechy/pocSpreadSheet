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
import { BulletGraphDescription } from "./BulletGraphDescription";
/**
 * @hidden
 */
export class BulletGraphDescriptionMetadata extends Base {
    static b(a) {
        if (BulletGraphDescriptionMetadata.a == null) {
            BulletGraphDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BulletGraphDescriptionMetadata.c(a, BulletGraphDescriptionMetadata.a);
            FormatLinearGraphLabelEventArgsDescriptionMetadata.d(a);
            AlignLinearGraphLabelEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("TransitionProgress", "Number:double");
        b.item("Orientation", "ExportedType:string:LinearScaleOrientation");
        b.item("ScaleBackgroundBrush", "Brush");
        b.item("ScaleBackgroundOutline", "Brush");
        b.item("ScaleBackgroundThickness", "Number:double");
        b.item("RangeBrushes", "BrushCollection:string");
        b.item("RangeOutlines", "BrushCollection:string");
        b.item("MinimumValue", "Number:double");
        b.item("ActualMinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("ActualMaximumValue", "Number:double");
        b.item("TargetValue", "Number:double");
        b.item("TargetValueName", "String");
        b.item("Value", "Number:double");
        b.item("ValueName", "String");
        b.item("RangeInnerExtent", "Number:double");
        b.item("RangeOuterExtent", "Number:double");
        b.item("ValueInnerExtent", "Number:double");
        b.item("ValueOuterExtent", "Number:double");
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
        b.item("ValueBrush", "Brush");
        b.item("ValueOutline", "Brush");
        b.item("ValueStrokeThickness", "Number:double");
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
        b.item("TargetValueBrush", "Brush");
        b.item("TargetValueBreadth", "Number:double");
        b.item("TargetValueInnerExtent", "Number:double");
        b.item("TargetValueOuterExtent", "Number:double");
        b.item("TargetValueOutline", "Brush");
        b.item("TargetValueStrokeThickness", "Number:double");
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
        BulletGraphDescriptionMetadata.b(a);
        a.n("BulletGraph", () => new BulletGraphDescription());
        a.m("BulletGraph", BulletGraphDescriptionMetadata.a);
    }
}
BulletGraphDescriptionMetadata.$t = markType(BulletGraphDescriptionMetadata, 'BulletGraphDescriptionMetadata');
BulletGraphDescriptionMetadata.a = null;
//# sourceMappingURL=BulletGraphDescriptionMetadata.js.map