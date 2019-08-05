/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { CrosshairLayerDescription } from "./CrosshairLayerDescription";
/**
 * @hidden
 */
export class CrosshairLayerDescriptionMetadata extends Base {
    static b(a) {
        if (CrosshairLayerDescriptionMetadata.a == null) {
            CrosshairLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CrosshairLayerDescriptionMetadata.c(a, CrosshairLayerDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("HorizontalLineStroke", "Brush");
        b.item("VerticalLineStroke", "Brush");
        b.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
        b.item("UseInterpolation", "Boolean");
        b.item("IsAxisAnnotationEnabled", "Boolean");
        b.item("XAxisAnnotationTextColor", "Brush");
        b.item("XAxisAnnotationBackground", "Brush");
        b.item("XAxisAnnotationInterpolatedValuePrecision", "Number:int");
        b.item("XAxisAnnotationOutline", "Brush");
        b.item("XAxisAnnotationPaddingLeft", "Number:double");
        b.item("XAxisAnnotationPaddingTop", "Number:double");
        b.item("XAxisAnnotationPaddingRight", "Number:double");
        b.item("XAxisAnnotationPaddingBottom", "Number:double");
        b.item("YAxisAnnotationPaddingLeft", "Number:double");
        b.item("YAxisAnnotationPaddingTop", "Number:double");
        b.item("YAxisAnnotationPaddingRight", "Number:double");
        b.item("YAxisAnnotationPaddingBottom", "Number:double");
        b.item("XAxisAnnotationStrokeThickness", "Number:double");
        b.item("YAxisAnnotationTextColor", "Brush");
        b.item("YAxisAnnotationBackground", "Brush");
        b.item("YAxisAnnotationInterpolatedValuePrecision", "Number:int");
        b.item("YAxisAnnotationOutline", "Brush");
        b.item("YAxisAnnotationStrokeThickness", "Number:double");
        b.item("VerticalLineVisibility", "ExportedType:string:Visibility");
        b.item("HorizontalLineVisibility", "ExportedType:string:Visibility");
        b.item("SkipUnknownValues", "Boolean");
    }
    static d(a) {
        CrosshairLayerDescriptionMetadata.b(a);
        a.n("CrosshairLayer", () => new CrosshairLayerDescription());
        a.m("CrosshairLayer", CrosshairLayerDescriptionMetadata.a);
    }
}
CrosshairLayerDescriptionMetadata.$t = markType(CrosshairLayerDescriptionMetadata, 'CrosshairLayerDescriptionMetadata');
CrosshairLayerDescriptionMetadata.a = null;
//# sourceMappingURL=CrosshairLayerDescriptionMetadata.js.map