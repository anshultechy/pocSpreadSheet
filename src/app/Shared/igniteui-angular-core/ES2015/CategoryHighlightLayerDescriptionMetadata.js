/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { CategoryHighlightLayerDescription } from "./CategoryHighlightLayerDescription";
/**
 * @hidden
 */
export class CategoryHighlightLayerDescriptionMetadata extends Base {
    static b(a) {
        if (CategoryHighlightLayerDescriptionMetadata.a == null) {
            CategoryHighlightLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryHighlightLayerDescriptionMetadata.c(a, CategoryHighlightLayerDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("TargetAxisRef", "(w:TargetAxis,wf:TargetAxis)DataRef::object");
        b.item("UseInterpolation", "Boolean");
        b.item("BandHighlightWidth", "Number:double");
    }
    static d(a) {
        CategoryHighlightLayerDescriptionMetadata.b(a);
        a.n("CategoryHighlightLayer", () => new CategoryHighlightLayerDescription());
        a.m("CategoryHighlightLayer", CategoryHighlightLayerDescriptionMetadata.a);
    }
}
CategoryHighlightLayerDescriptionMetadata.$t = markType(CategoryHighlightLayerDescriptionMetadata, 'CategoryHighlightLayerDescriptionMetadata');
CategoryHighlightLayerDescriptionMetadata.a = null;
//# sourceMappingURL=CategoryHighlightLayerDescriptionMetadata.js.map