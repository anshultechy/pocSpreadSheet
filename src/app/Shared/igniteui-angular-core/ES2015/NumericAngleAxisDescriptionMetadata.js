/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { NumericAxisBaseDescriptionMetadata } from "./NumericAxisBaseDescriptionMetadata";
import { NumericAngleAxisDescription } from "./NumericAngleAxisDescription";
/**
 * @hidden
 */
export class NumericAngleAxisDescriptionMetadata extends Base {
    static b(a) {
        if (NumericAngleAxisDescriptionMetadata.a == null) {
            NumericAngleAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericAngleAxisDescriptionMetadata.c(a, NumericAngleAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        NumericAxisBaseDescriptionMetadata.c(a, b);
        b.item("StartAngleOffset", "Number:double");
    }
    static d(a) {
        NumericAngleAxisDescriptionMetadata.b(a);
        a.n("NumericAngleAxis", () => new NumericAngleAxisDescription());
        a.m("NumericAngleAxis", NumericAngleAxisDescriptionMetadata.a);
    }
}
NumericAngleAxisDescriptionMetadata.$t = markType(NumericAngleAxisDescriptionMetadata, 'NumericAngleAxisDescriptionMetadata');
NumericAngleAxisDescriptionMetadata.a = null;
//# sourceMappingURL=NumericAngleAxisDescriptionMetadata.js.map