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
import { CategoryItemHighlightLayerDescription } from "./CategoryItemHighlightLayerDescription";
/**
 * @hidden
 */
var CategoryItemHighlightLayerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryItemHighlightLayerDescriptionMetadata, _super);
    function CategoryItemHighlightLayerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryItemHighlightLayerDescriptionMetadata.b = function (a) {
        if (CategoryItemHighlightLayerDescriptionMetadata.a == null) {
            CategoryItemHighlightLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryItemHighlightLayerDescriptionMetadata.c(a, CategoryItemHighlightLayerDescriptionMetadata.a);
        }
    };
    CategoryItemHighlightLayerDescriptionMetadata.c = function (a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
        b.item("UseInterpolation", "Boolean");
        b.item("HighlightType", "ExportedType:string:CategoryItemHighlightType");
        b.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
        b.item("BandHighlightWidth", "Number:double");
        b.item("SkipUnknownValues", "Boolean");
    };
    CategoryItemHighlightLayerDescriptionMetadata.d = function (a) {
        CategoryItemHighlightLayerDescriptionMetadata.b(a);
        a.n("CategoryItemHighlightLayer", function () { return new CategoryItemHighlightLayerDescription(); });
        a.m("CategoryItemHighlightLayer", CategoryItemHighlightLayerDescriptionMetadata.a);
    };
    CategoryItemHighlightLayerDescriptionMetadata.$t = markType(CategoryItemHighlightLayerDescriptionMetadata, 'CategoryItemHighlightLayerDescriptionMetadata');
    CategoryItemHighlightLayerDescriptionMetadata.a = null;
    return CategoryItemHighlightLayerDescriptionMetadata;
}(Base));
export { CategoryItemHighlightLayerDescriptionMetadata };
//# sourceMappingURL=CategoryItemHighlightLayerDescriptionMetadata.js.map