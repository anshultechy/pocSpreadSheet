/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StraightNumericAxisBaseDescriptionMetadata } from "./StraightNumericAxisBaseDescriptionMetadata";
import { NumericXAxisDescription } from "./NumericXAxisDescription";
/**
 * @hidden
 */
export class NumericXAxisDescriptionMetadata extends Base {
    static b(a) {
        if (NumericXAxisDescriptionMetadata.a == null) {
            NumericXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericXAxisDescriptionMetadata.c(a, NumericXAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StraightNumericAxisBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        NumericXAxisDescriptionMetadata.b(a);
        a.n("NumericXAxis", () => new NumericXAxisDescription());
        a.m("NumericXAxis", NumericXAxisDescriptionMetadata.a);
    }
}
NumericXAxisDescriptionMetadata.$t = markType(NumericXAxisDescriptionMetadata, 'NumericXAxisDescriptionMetadata');
NumericXAxisDescriptionMetadata.a = null;
//# sourceMappingURL=NumericXAxisDescriptionMetadata.js.map