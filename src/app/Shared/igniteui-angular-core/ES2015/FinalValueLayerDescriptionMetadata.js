/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { FinalValueLayerDescription } from "./FinalValueLayerDescription";
/**
 * @hidden
 */
export class FinalValueLayerDescriptionMetadata extends Base {
    static b(a) {
        if (FinalValueLayerDescriptionMetadata.a == null) {
            FinalValueLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinalValueLayerDescriptionMetadata.c(a, FinalValueLayerDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
        b.item("FinalValueSelectionMode", "ExportedType:string:FinalValueSelectionMode");
        b.item("AxisAnnotationTextColor", "Brush");
        b.item("AxisAnnotationBackground", "Brush");
        b.item("AxisAnnotationInterpolatedValuePrecision", "Number:int");
        b.item("AxisAnnotationOutline", "Brush");
        b.item("AxisAnnotationPaddingLeft", "Number:double");
        b.item("AxisAnnotationPaddingTop", "Number:double");
        b.item("AxisAnnotationPaddingRight", "Number:double");
        b.item("AxisAnnotationPaddingBottom", "Number:double");
        b.item("AxisAnnotationStrokeThickness", "Number:double");
    }
    static d(a) {
        FinalValueLayerDescriptionMetadata.b(a);
        a.n("FinalValueLayer", () => new FinalValueLayerDescription());
        a.m("FinalValueLayer", FinalValueLayerDescriptionMetadata.a);
    }
}
FinalValueLayerDescriptionMetadata.$t = markType(FinalValueLayerDescriptionMetadata, 'FinalValueLayerDescriptionMetadata');
FinalValueLayerDescriptionMetadata.a = null;
//# sourceMappingURL=FinalValueLayerDescriptionMetadata.js.map