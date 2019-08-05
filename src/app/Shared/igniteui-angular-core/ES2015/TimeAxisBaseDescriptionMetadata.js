/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryAxisBaseDescriptionMetadata } from "./CategoryAxisBaseDescriptionMetadata";
/**
 * @hidden
 */
export class TimeAxisBaseDescriptionMetadata extends Base {
    static b(a) {
        if (TimeAxisBaseDescriptionMetadata.a == null) {
            TimeAxisBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeAxisBaseDescriptionMetadata.c(a, TimeAxisBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CategoryAxisBaseDescriptionMetadata.c(a, b);
        b.item("DateTimeMemberPath", "String");
        b.item("IsDataPreSorted", "Boolean");
        b.item("ActualMinimumValue", "Date");
        b.item("ActualMaximumValue", "Date");
        b.item("MinimumValue", "Date");
        b.item("MaximumValue", "Date");
    }
    static d(a) {
        TimeAxisBaseDescriptionMetadata.b(a);
        a.m("TimeAxisBase", TimeAxisBaseDescriptionMetadata.a);
    }
}
TimeAxisBaseDescriptionMetadata.$t = markType(TimeAxisBaseDescriptionMetadata, 'TimeAxisBaseDescriptionMetadata');
TimeAxisBaseDescriptionMetadata.a = null;
//# sourceMappingURL=TimeAxisBaseDescriptionMetadata.js.map