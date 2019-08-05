/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsDescriptionMetadata } from "./AssigningCategoryStyleEventArgsDescriptionMetadata";
import { AssigningCategoryMarkerStyleEventArgsDescriptionMetadata } from "./AssigningCategoryMarkerStyleEventArgsDescriptionMetadata";
import { MarkerSeriesDescriptionMetadata } from "./MarkerSeriesDescriptionMetadata";
/**
 * @hidden
 */
var CategorySeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategorySeriesDescriptionMetadata, _super);
    function CategorySeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategorySeriesDescriptionMetadata.b = function (a) {
        if (CategorySeriesDescriptionMetadata.a == null) {
            CategorySeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategorySeriesDescriptionMetadata.c(a, CategorySeriesDescriptionMetadata.a);
            AssigningCategoryStyleEventArgsDescriptionMetadata.d(a);
            AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.d(a);
        }
    };
    CategorySeriesDescriptionMetadata.c = function (a, b) {
        MarkerSeriesDescriptionMetadata.c(a, b);
        b.item("IsCustomCategoryStyleAllowed", "Boolean");
        b.item("IsCustomCategoryMarkerStyleAllowed", "Boolean");
        b.item("UseHighMarkerFidelity", "Boolean");
        b.item("TransitionInMode", "ExportedType:string:CategoryTransitionInMode");
        b.item("IsTransitionInEnabled", "Boolean");
        b.item("AssigningCategoryStyleRef", "EventRef::assigningCategoryStyle");
        b.item("AssigningCategoryMarkerStyleRef", "EventRef::assigningCategoryMarkerStyle");
    };
    CategorySeriesDescriptionMetadata.d = function (a) {
        CategorySeriesDescriptionMetadata.b(a);
        a.m("CategorySeries", CategorySeriesDescriptionMetadata.a);
    };
    CategorySeriesDescriptionMetadata.$t = markType(CategorySeriesDescriptionMetadata, 'CategorySeriesDescriptionMetadata');
    CategorySeriesDescriptionMetadata.a = null;
    return CategorySeriesDescriptionMetadata;
}(Base));
export { CategorySeriesDescriptionMetadata };
//# sourceMappingURL=CategorySeriesDescriptionMetadata.js.map