/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsDescriptionMetadata } from "./AssigningCategoryStyleEventArgsDescriptionMetadata";
import { AssigningCategoryMarkerStyleEventArgsDescriptionMetadata } from "./AssigningCategoryMarkerStyleEventArgsDescriptionMetadata";
import { MarkerSeriesDescriptionMetadata } from "./MarkerSeriesDescriptionMetadata";
/**
 * @hidden
 */
export class CategorySeriesDescriptionMetadata extends Base {
    static b(a) {
        if (CategorySeriesDescriptionMetadata.a == null) {
            CategorySeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategorySeriesDescriptionMetadata.c(a, CategorySeriesDescriptionMetadata.a);
            AssigningCategoryStyleEventArgsDescriptionMetadata.d(a);
            AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        MarkerSeriesDescriptionMetadata.c(a, b);
        b.item("IsCustomCategoryStyleAllowed", "Boolean");
        b.item("IsCustomCategoryMarkerStyleAllowed", "Boolean");
        b.item("UseHighMarkerFidelity", "Boolean");
        b.item("TransitionInMode", "ExportedType:string:CategoryTransitionInMode");
        b.item("IsTransitionInEnabled", "Boolean");
        b.item("AssigningCategoryStyleRef", "EventRef::assigningCategoryStyle");
        b.item("AssigningCategoryMarkerStyleRef", "EventRef::assigningCategoryMarkerStyle");
    }
    static d(a) {
        CategorySeriesDescriptionMetadata.b(a);
        a.m("CategorySeries", CategorySeriesDescriptionMetadata.a);
    }
}
CategorySeriesDescriptionMetadata.$t = markType(CategorySeriesDescriptionMetadata, 'CategorySeriesDescriptionMetadata');
CategorySeriesDescriptionMetadata.a = null;
//# sourceMappingURL=CategorySeriesDescriptionMetadata.js.map