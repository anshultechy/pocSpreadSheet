/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisAnnotationDescription } from "./AxisAnnotationDescription";
/**
 * @hidden
 */
var AxisAnnotationDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AxisAnnotationDescriptionMetadata, _super);
    function AxisAnnotationDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisAnnotationDescriptionMetadata.b = function (a) {
        if (AxisAnnotationDescriptionMetadata.a == null) {
            AxisAnnotationDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AxisAnnotationDescriptionMetadata.c(a, AxisAnnotationDescriptionMetadata.a);
        }
    };
    AxisAnnotationDescriptionMetadata.c = function (a, b) {
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
    };
    AxisAnnotationDescriptionMetadata.d = function (a) {
        AxisAnnotationDescriptionMetadata.b(a);
        a.n("AxisAnnotation", function () { return new AxisAnnotationDescription(); });
        a.m("AxisAnnotation", AxisAnnotationDescriptionMetadata.a);
    };
    AxisAnnotationDescriptionMetadata.$t = markType(AxisAnnotationDescriptionMetadata, 'AxisAnnotationDescriptionMetadata');
    AxisAnnotationDescriptionMetadata.a = null;
    return AxisAnnotationDescriptionMetadata;
}(Base));
export { AxisAnnotationDescriptionMetadata };
//# sourceMappingURL=AxisAnnotationDescriptionMetadata.js.map