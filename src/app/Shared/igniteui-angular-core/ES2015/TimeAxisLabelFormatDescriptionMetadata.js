/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisLabelFormatDescription } from "./TimeAxisLabelFormatDescription";
/**
 * @hidden
 */
export class TimeAxisLabelFormatDescriptionMetadata extends Base {
    static b(a) {
        if (TimeAxisLabelFormatDescriptionMetadata.a == null) {
            TimeAxisLabelFormatDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeAxisLabelFormatDescriptionMetadata.c(a, TimeAxisLabelFormatDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("Range", "TimeSpan");
        b.item("Format", "String");
    }
    static d(a) {
        TimeAxisLabelFormatDescriptionMetadata.b(a);
        a.n("TimeAxisLabelFormat", () => new TimeAxisLabelFormatDescription());
        a.m("TimeAxisLabelFormat", TimeAxisLabelFormatDescriptionMetadata.a);
    }
}
TimeAxisLabelFormatDescriptionMetadata.$t = markType(TimeAxisLabelFormatDescriptionMetadata, 'TimeAxisLabelFormatDescriptionMetadata');
TimeAxisLabelFormatDescriptionMetadata.a = null;
//# sourceMappingURL=TimeAxisLabelFormatDescriptionMetadata.js.map