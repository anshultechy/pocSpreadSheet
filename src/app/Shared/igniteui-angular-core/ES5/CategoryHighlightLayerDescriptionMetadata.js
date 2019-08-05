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
import { CategoryHighlightLayerDescription } from "./CategoryHighlightLayerDescription";
/**
 * @hidden
 */
var CategoryHighlightLayerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryHighlightLayerDescriptionMetadata, _super);
    function CategoryHighlightLayerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryHighlightLayerDescriptionMetadata.b = function (a) {
        if (CategoryHighlightLayerDescriptionMetadata.a == null) {
            CategoryHighlightLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryHighlightLayerDescriptionMetadata.c(a, CategoryHighlightLayerDescriptionMetadata.a);
        }
    };
    CategoryHighlightLayerDescriptionMetadata.c = function (a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("TargetAxisRef", "(w:TargetAxis,wf:TargetAxis)DataRef::object");
        b.item("UseInterpolation", "Boolean");
        b.item("BandHighlightWidth", "Number:double");
    };
    CategoryHighlightLayerDescriptionMetadata.d = function (a) {
        CategoryHighlightLayerDescriptionMetadata.b(a);
        a.n("CategoryHighlightLayer", function () { return new CategoryHighlightLayerDescription(); });
        a.m("CategoryHighlightLayer", CategoryHighlightLayerDescriptionMetadata.a);
    };
    CategoryHighlightLayerDescriptionMetadata.$t = markType(CategoryHighlightLayerDescriptionMetadata, 'CategoryHighlightLayerDescriptionMetadata');
    CategoryHighlightLayerDescriptionMetadata.a = null;
    return CategoryHighlightLayerDescriptionMetadata;
}(Base));
export { CategoryHighlightLayerDescriptionMetadata };
//# sourceMappingURL=CategoryHighlightLayerDescriptionMetadata.js.map