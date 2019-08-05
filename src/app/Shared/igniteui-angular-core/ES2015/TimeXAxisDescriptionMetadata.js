/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBaseDescriptionMetadata } from "./TimeAxisBaseDescriptionMetadata";
import { TimeXAxisDescription } from "./TimeXAxisDescription";
/**
 * @hidden
 */
export class TimeXAxisDescriptionMetadata extends Base {
    static b(a) {
        if (TimeXAxisDescriptionMetadata.a == null) {
            TimeXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeXAxisDescriptionMetadata.c(a, TimeXAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        TimeAxisBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        TimeXAxisDescriptionMetadata.b(a);
        a.n("TimeXAxis", () => new TimeXAxisDescription());
        a.m("TimeXAxis", TimeXAxisDescriptionMetadata.a);
    }
}
TimeXAxisDescriptionMetadata.$t = markType(TimeXAxisDescriptionMetadata, 'TimeXAxisDescriptionMetadata');
TimeXAxisDescriptionMetadata.a = null;
//# sourceMappingURL=TimeXAxisDescriptionMetadata.js.map