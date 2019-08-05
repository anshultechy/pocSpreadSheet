/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBreakDescription } from "./TimeAxisBreakDescription";
/**
 * @hidden
 */
export class TimeAxisBreakDescriptionMetadata extends Base {
    static b(a) {
        if (TimeAxisBreakDescriptionMetadata.a == null) {
            TimeAxisBreakDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeAxisBreakDescriptionMetadata.c(a, TimeAxisBreakDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("Start", "Date");
        b.item("End", "Date");
        b.item("Interval", "TimeSpan");
    }
    static d(a) {
        TimeAxisBreakDescriptionMetadata.b(a);
        a.n("TimeAxisBreak", () => new TimeAxisBreakDescription());
        a.m("TimeAxisBreak", TimeAxisBreakDescriptionMetadata.a);
    }
}
TimeAxisBreakDescriptionMetadata.$t = markType(TimeAxisBreakDescriptionMetadata, 'TimeAxisBreakDescriptionMetadata');
TimeAxisBreakDescriptionMetadata.a = null;
//# sourceMappingURL=TimeAxisBreakDescriptionMetadata.js.map