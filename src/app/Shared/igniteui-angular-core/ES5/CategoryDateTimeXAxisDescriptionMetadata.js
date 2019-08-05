/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBaseDescriptionMetadata } from "./TimeAxisBaseDescriptionMetadata";
import { CategoryDateTimeXAxisDescription } from "./CategoryDateTimeXAxisDescription";
/**
 * @hidden
 */
var CategoryDateTimeXAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryDateTimeXAxisDescriptionMetadata, _super);
    function CategoryDateTimeXAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryDateTimeXAxisDescriptionMetadata.b = function (a) {
        if (CategoryDateTimeXAxisDescriptionMetadata.a == null) {
            CategoryDateTimeXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryDateTimeXAxisDescriptionMetadata.c(a, CategoryDateTimeXAxisDescriptionMetadata.a);
        }
    };
    CategoryDateTimeXAxisDescriptionMetadata.c = function (a, b) {
        TimeAxisBaseDescriptionMetadata.c(a, b);
        b.item("DisplayType", "ExportedType:string:TimeAxisDisplayType");
        b.item("Interval", "Number:long");
        b.item("ActualInterval", "Number:long");
        b.item("MinorInterval", "Number:long");
        b.item("ActualMinorInterval", "Number:long");
    };
    CategoryDateTimeXAxisDescriptionMetadata.d = function (a) {
        CategoryDateTimeXAxisDescriptionMetadata.b(a);
        a.n("CategoryDateTimeXAxis", function () { return new CategoryDateTimeXAxisDescription(); });
        a.m("CategoryDateTimeXAxis", CategoryDateTimeXAxisDescriptionMetadata.a);
    };
    CategoryDateTimeXAxisDescriptionMetadata.$t = markType(CategoryDateTimeXAxisDescriptionMetadata, 'CategoryDateTimeXAxisDescriptionMetadata');
    CategoryDateTimeXAxisDescriptionMetadata.a = null;
    return CategoryDateTimeXAxisDescriptionMetadata;
}(Base));
export { CategoryDateTimeXAxisDescriptionMetadata };
//# sourceMappingURL=CategoryDateTimeXAxisDescriptionMetadata.js.map