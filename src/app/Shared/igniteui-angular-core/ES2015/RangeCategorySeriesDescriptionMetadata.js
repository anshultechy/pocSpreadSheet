/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategorySeriesDescriptionMetadata } from "./CategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
export class RangeCategorySeriesDescriptionMetadata extends Base {
    static b(a) {
        if (RangeCategorySeriesDescriptionMetadata.a == null) {
            RangeCategorySeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RangeCategorySeriesDescriptionMetadata.c(a, RangeCategorySeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CategorySeriesDescriptionMetadata.c(a, b);
        b.item("LowMemberPath", "String");
        b.item("HighMemberPath", "String");
    }
    static d(a) {
        RangeCategorySeriesDescriptionMetadata.b(a);
        a.m("RangeCategorySeries", RangeCategorySeriesDescriptionMetadata.a);
    }
}
RangeCategorySeriesDescriptionMetadata.$t = markType(RangeCategorySeriesDescriptionMetadata, 'RangeCategorySeriesDescriptionMetadata');
RangeCategorySeriesDescriptionMetadata.a = null;
//# sourceMappingURL=RangeCategorySeriesDescriptionMetadata.js.map