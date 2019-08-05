/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisAnnotationDescription } from "./AxisAnnotationDescription";
/**
 * @hidden
 */
export class AxisAnnotationDescriptionMetadata extends Base {
    static b(a) {
        if (AxisAnnotationDescriptionMetadata.a == null) {
            AxisAnnotationDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AxisAnnotationDescriptionMetadata.c(a, AxisAnnotationDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
        b.item("Text", "String");
        b.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
        b.item("TextColor", "Brush");
        b.item("Background", "Brush");
        b.item("Outline", "Brush");
        b.item("StrokeThickness", "Number:double");
        b.item("BackgroundPaddingLeft", "Number:double");
        b.item("BackgroundPaddingTop", "Number:double");
        b.item("BackgroundPaddingRight", "Number:double");
        b.item("BackgroundPaddingBottom", "Number:double");
    }
    static d(a) {
        AxisAnnotationDescriptionMetadata.b(a);
        a.n("AxisAnnotation", () => new AxisAnnotationDescription());
        a.m("AxisAnnotation", AxisAnnotationDescriptionMetadata.a);
    }
}
AxisAnnotationDescriptionMetadata.$t = markType(AxisAnnotationDescriptionMetadata, 'AxisAnnotationDescriptionMetadata');
AxisAnnotationDescriptionMetadata.a = null;
//# sourceMappingURL=AxisAnnotationDescriptionMetadata.js.map