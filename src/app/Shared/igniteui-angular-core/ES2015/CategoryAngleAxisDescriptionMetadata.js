/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryAxisBaseDescriptionMetadata } from "./CategoryAxisBaseDescriptionMetadata";
import { CategoryAngleAxisDescription } from "./CategoryAngleAxisDescription";
/**
 * @hidden
 */
export class CategoryAngleAxisDescriptionMetadata extends Base {
    static b(a) {
        if (CategoryAngleAxisDescriptionMetadata.a == null) {
            CategoryAngleAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryAngleAxisDescriptionMetadata.c(a, CategoryAngleAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CategoryAxisBaseDescriptionMetadata.c(a, b);
        b.item("StartAngleOffset", "Number:double");
        b.item("Interval", "Number:double");
        b.item("ActualInterval", "Number:double");
        b.item("MinorInterval", "Number:double");
        b.item("ActualMinorInterval", "Number:double");
    }
    static d(a) {
        CategoryAngleAxisDescriptionMetadata.b(a);
        a.n("CategoryAngleAxis", () => new CategoryAngleAxisDescription());
        a.m("CategoryAngleAxis", CategoryAngleAxisDescriptionMetadata.a);
    }
}
CategoryAngleAxisDescriptionMetadata.$t = markType(CategoryAngleAxisDescriptionMetadata, 'CategoryAngleAxisDescriptionMetadata');
CategoryAngleAxisDescriptionMetadata.a = null;
//# sourceMappingURL=CategoryAngleAxisDescriptionMetadata.js.map