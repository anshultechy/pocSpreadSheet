/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryAxisBaseDescriptionMetadata } from "./CategoryAxisBaseDescriptionMetadata";
import { CategoryYAxisDescription } from "./CategoryYAxisDescription";
/**
 * @hidden
 */
var CategoryYAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryYAxisDescriptionMetadata, _super);
    function CategoryYAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryYAxisDescriptionMetadata.b = function (a) {
        if (CategoryYAxisDescriptionMetadata.a == null) {
            CategoryYAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryYAxisDescriptionMetadata.c(a, CategoryYAxisDescriptionMetadata.a);
        }
    };
    CategoryYAxisDescriptionMetadata.c = function (a, b) {
        CategoryAxisBaseDescriptionMetadata.c(a, b);
        b.item("Interval", "Number:double");
        b.item("ActualInterval", "Number:double");
        b.item("MinorInterval", "Number:double");
        b.item("ActualMinorInterval", "Number:double");
    };
    CategoryYAxisDescriptionMetadata.d = function (a) {
        CategoryYAxisDescriptionMetadata.b(a);
        a.n("CategoryYAxis", function () { return new CategoryYAxisDescription(); });
        a.m("CategoryYAxis", CategoryYAxisDescriptionMetadata.a);
    };
    CategoryYAxisDescriptionMetadata.$t = markType(CategoryYAxisDescriptionMetadata, 'CategoryYAxisDescriptionMetadata');
    CategoryYAxisDescriptionMetadata.a = null;
    return CategoryYAxisDescriptionMetadata;
}(Base));
export { CategoryYAxisDescriptionMetadata };
//# sourceMappingURL=CategoryYAxisDescriptionMetadata.js.map