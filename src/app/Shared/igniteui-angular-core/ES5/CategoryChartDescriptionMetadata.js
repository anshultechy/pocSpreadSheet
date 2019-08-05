/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { XYChartDescriptionMetadata } from "./XYChartDescriptionMetadata";
import { CategoryChartDescription } from "./CategoryChartDescription";
/**
 * @hidden
 */
var CategoryChartDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryChartDescriptionMetadata, _super);
    function CategoryChartDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryChartDescriptionMetadata.b = function (a) {
        if (CategoryChartDescriptionMetadata.a == null) {
            CategoryChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryChartDescriptionMetadata.c(a, CategoryChartDescriptionMetadata.a);
        }
    };
    CategoryChartDescriptionMetadata.c = function (a, b) {
        XYChartDescriptionMetadata.c(a, b);
        b.item("TransitionInDuration", "Number:int");
        b.item("TransitionInEasingFunctionRef", "(w:TransitionInEasingFunction,wf:TransitionInEasingFunction)MethodRef");
        b.item("ChartType", "ExportedType:string:CategoryChartType");
        b.item("MarkerCollisionAvoidance", "ExportedType:string:CategorySeriesMarkerCollisionAvoidance");
        b.item("IsTransitionInEnabled", "Boolean");
        b.item("TransitionInMode", "ExportedType:string:CategoryTransitionInMode");
        b.item("TransitionInSpeedType", "ExportedType:string:TransitionInSpeedType");
        b.item("XAxisInterval", "Number:double");
        b.item("XAxisMinorInterval", "Number:double");
        b.item("XAxisGap", "Number:double");
        b.item("XAxisOverlap", "Number:double");
        b.item("YAxisInterval", "Number:double");
        b.item("YAxisIsLogarithmic", "Boolean");
        b.item("YAxisLogarithmBase", "Number:int");
        b.item("YAxisMinimumValue", "Number:double");
        b.item("YAxisMaximumValue", "Number:double");
        b.item("YAxisMinorInterval", "Number:double");
        b.item("NegativeBrushes", "BrushCollection:string");
        b.item("NegativeOutlines", "BrushCollection:string");
        b.item("YAxisAbbreviateLargeNumbers", "Boolean");
        b.item("IsCategoryHighlightingEnabled", "Boolean");
        b.item("IsItemHighlightingEnabled", "Boolean");
    };
    CategoryChartDescriptionMetadata.d = function (a) {
        CategoryChartDescriptionMetadata.b(a);
        a.n("CategoryChart", function () { return new CategoryChartDescription(); });
        a.m("CategoryChart", CategoryChartDescriptionMetadata.a);
    };
    CategoryChartDescriptionMetadata.$t = markType(CategoryChartDescriptionMetadata, 'CategoryChartDescriptionMetadata');
    CategoryChartDescriptionMetadata.a = null;
    return CategoryChartDescriptionMetadata;
}(Base));
export { CategoryChartDescriptionMetadata };
//# sourceMappingURL=CategoryChartDescriptionMetadata.js.map