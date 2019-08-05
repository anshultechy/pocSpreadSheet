/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { CalloutAnnotationDescription } from "./CalloutAnnotationDescription";
/**
 * @hidden
 */
export class CalloutAnnotationDescriptionMetadata extends Base {
    static b(a) {
        if (CalloutAnnotationDescriptionMetadata.a == null) {
            CalloutAnnotationDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutAnnotationDescriptionMetadata.c(a, CalloutAnnotationDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("Text", "String");
        b.item("KeyRef", "(w:Key,wf:Key)DataRef");
        b.item("ContentRef", "(w:Content,wf:Content)DataRef");
        b.item("Series", "ExportedType");
        b.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
        b.item("TextColor", "Brush");
        b.item("Background", "Brush");
        b.item("Outline", "Brush");
        b.item("LeaderBrush", "Brush");
        b.item("StrokeThickness", "Number:double");
        b.item("BackgroundPaddingLeft", "Number:double");
        b.item("BackgroundPaddingTop", "Number:double");
        b.item("BackgroundPaddingRight", "Number:double");
        b.item("BackgroundPaddingBottom", "Number:double");
    }
    static d(a) {
        CalloutAnnotationDescriptionMetadata.b(a);
        a.n("CalloutAnnotation", () => new CalloutAnnotationDescription());
        a.m("CalloutAnnotation", CalloutAnnotationDescriptionMetadata.a);
    }
}
CalloutAnnotationDescriptionMetadata.$t = markType(CalloutAnnotationDescriptionMetadata, 'CalloutAnnotationDescriptionMetadata');
CalloutAnnotationDescriptionMetadata.a = null;
//# sourceMappingURL=CalloutAnnotationDescriptionMetadata.js.map