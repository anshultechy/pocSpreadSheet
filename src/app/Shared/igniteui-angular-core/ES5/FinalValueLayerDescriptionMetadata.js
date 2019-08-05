/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { FinalValueLayerDescription } from "./FinalValueLayerDescription";
/**
 * @hidden
 */
var FinalValueLayerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinalValueLayerDescriptionMetadata, _super);
    function FinalValueLayerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinalValueLayerDescriptionMetadata.b = function (a) {
        if (FinalValueLayerDescriptionMetadata.a == null) {
            FinalValueLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinalValueLayerDescriptionMetadata.c(a, FinalValueLayerDescriptionMetadata.a);
        }
    };
    FinalValueLayerDescriptionMetadata.c = function (a, b) {
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
    };
    FinalValueLayerDescriptionMetadata.d = function (a) {
        FinalValueLayerDescriptionMetadata.b(a);
        a.n("FinalValueLayer", function () { return new FinalValueLayerDescription(); });
        a.m("FinalValueLayer", FinalValueLayerDescriptionMetadata.a);
    };
    FinalValueLayerDescriptionMetadata.$t = markType(FinalValueLayerDescriptionMetadata, 'FinalValueLayerDescriptionMetadata');
    FinalValueLayerDescriptionMetadata.a = null;
    return FinalValueLayerDescriptionMetadata;
}(Base));
export { FinalValueLayerDescriptionMetadata };
//# sourceMappingURL=FinalValueLayerDescriptionMetadata.js.map