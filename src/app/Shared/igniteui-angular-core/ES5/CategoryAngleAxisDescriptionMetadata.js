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
import { CategoryAngleAxisDescription } from "./CategoryAngleAxisDescription";
/**
 * @hidden
 */
var CategoryAngleAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAngleAxisDescriptionMetadata, _super);
    function CategoryAngleAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryAngleAxisDescriptionMetadata.b = function (a) {
        if (CategoryAngleAxisDescriptionMetadata.a == null) {
            CategoryAngleAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryAngleAxisDescriptionMetadata.c(a, CategoryAngleAxisDescriptionMetadata.a);
        }
    };
    CategoryAngleAxisDescriptionMetadata.c = function (a, b) {
        CategoryAxisBaseDescriptionMetadata.c(a, b);
        b.item("StartAngleOffset", "Number:double");
        b.item("Interval", "Number:double");
        b.item("ActualInterval", "Number:double");
        b.item("MinorInterval", "Number:double");
        b.item("ActualMinorInterval", "Number:double");
    };
    CategoryAngleAxisDescriptionMetadata.d = function (a) {
        CategoryAngleAxisDescriptionMetadata.b(a);
        a.n("CategoryAngleAxis", function () { return new CategoryAngleAxisDescription(); });
        a.m("CategoryAngleAxis", CategoryAngleAxisDescriptionMetadata.a);
    };
    CategoryAngleAxisDescriptionMetadata.$t = markType(CategoryAngleAxisDescriptionMetadata, 'CategoryAngleAxisDescriptionMetadata');
    CategoryAngleAxisDescriptionMetadata.a = null;
    return CategoryAngleAxisDescriptionMetadata;
}(Base));
export { CategoryAngleAxisDescriptionMetadata };
//# sourceMappingURL=CategoryAngleAxisDescriptionMetadata.js.map