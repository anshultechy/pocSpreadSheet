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
import { CategoryToolTipLayerDescription } from "./CategoryToolTipLayerDescription";
/**
 * @hidden
 */
var CategoryToolTipLayerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryToolTipLayerDescriptionMetadata, _super);
    function CategoryToolTipLayerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryToolTipLayerDescriptionMetadata.b = function (a) {
        if (CategoryToolTipLayerDescriptionMetadata.a == null) {
            CategoryToolTipLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryToolTipLayerDescriptionMetadata.c(a, CategoryToolTipLayerDescriptionMetadata.a);
        }
    };
    CategoryToolTipLayerDescriptionMetadata.c = function (a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("UseInterpolation", "Boolean");
    };
    CategoryToolTipLayerDescriptionMetadata.d = function (a) {
        CategoryToolTipLayerDescriptionMetadata.b(a);
        a.n("CategoryToolTipLayer", function () { return new CategoryToolTipLayerDescription(); });
        a.m("CategoryToolTipLayer", CategoryToolTipLayerDescriptionMetadata.a);
    };
    CategoryToolTipLayerDescriptionMetadata.$t = markType(CategoryToolTipLayerDescriptionMetadata, 'CategoryToolTipLayerDescriptionMetadata');
    CategoryToolTipLayerDescriptionMetadata.a = null;
    return CategoryToolTipLayerDescriptionMetadata;
}(Base));
export { CategoryToolTipLayerDescriptionMetadata };
//# sourceMappingURL=CategoryToolTipLayerDescriptionMetadata.js.map