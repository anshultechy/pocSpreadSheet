/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisDescriptionMetadata } from "./AxisDescriptionMetadata";
/**
 * @hidden
 */
export class CategoryAxisBaseDescriptionMetadata extends Base {
    static b(a) {
        if (CategoryAxisBaseDescriptionMetadata.a == null) {
            CategoryAxisBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CategoryAxisBaseDescriptionMetadata.c(a, CategoryAxisBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AxisDescriptionMetadata.c(a, b);
        b.item("ItemsCount", "Number:int");
        b.item("Gap", "Number:double");
        b.item("Overlap", "Number:double");
        b.item("UseClusteringMode", "Boolean");
        CategoryAxisBaseDescriptionMetadata.e(a, b);
    }
    static d(a) {
        CategoryAxisBaseDescriptionMetadata.b(a);
        a.m("CategoryAxisBase", CategoryAxisBaseDescriptionMetadata.a);
    }
    static e(a, b) {
        b.item("DataSourceRef", "(w:ItemsSource)DataRef:String");
    }
}
CategoryAxisBaseDescriptionMetadata.$t = markType(CategoryAxisBaseDescriptionMetadata, 'CategoryAxisBaseDescriptionMetadata');
CategoryAxisBaseDescriptionMetadata.a = null;
//# sourceMappingURL=CategoryAxisBaseDescriptionMetadata.js.map