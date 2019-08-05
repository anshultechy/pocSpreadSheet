/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBaseDescriptionMetadata } from "./TimeAxisBaseDescriptionMetadata";
import { CategoryDateTimeXAxisDescription } from "./CategoryDateTimeXAxisDescription";
/**
 * @hidden
 */
export class CategoryDateTimeXAxisDescriptionMetadata extends Base {
    static b(a) {
        if (CategoryDateTimeXAxisDescriptionMetadata.a == null) {
            CategoryDateTimeXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryDateTimeXAxisDescriptionMetadata.c(a, CategoryDateTimeXAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        TimeAxisBaseDescriptionMetadata.c(a, b);
        b.item("DisplayType", "ExportedType:string:TimeAxisDisplayType");
        b.item("Interval", "Number:long");
        b.item("ActualInterval", "Number:long");
        b.item("MinorInterval", "Number:long");
        b.item("ActualMinorInterval", "Number:long");
    }
    static d(a) {
        CategoryDateTimeXAxisDescriptionMetadata.b(a);
        a.n("CategoryDateTimeXAxis", () => new CategoryDateTimeXAxisDescription());
        a.m("CategoryDateTimeXAxis", CategoryDateTimeXAxisDescriptionMetadata.a);
    }
}
CategoryDateTimeXAxisDescriptionMetadata.$t = markType(CategoryDateTimeXAxisDescriptionMetadata, 'CategoryDateTimeXAxisDescriptionMetadata');
CategoryDateTimeXAxisDescriptionMetadata.a = null;
//# sourceMappingURL=CategoryDateTimeXAxisDescriptionMetadata.js.map