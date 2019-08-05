/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { NumericYAxisDescriptionMetadata } from "./NumericYAxisDescriptionMetadata";
import { PercentChangeYAxisDescription } from "./PercentChangeYAxisDescription";
/**
 * @hidden
 */
export class PercentChangeYAxisDescriptionMetadata extends Base {
    static b(a) {
        if (PercentChangeYAxisDescriptionMetadata.a == null) {
            PercentChangeYAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PercentChangeYAxisDescriptionMetadata.c(a, PercentChangeYAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        NumericYAxisDescriptionMetadata.c(a, b);
    }
    static d(a) {
        PercentChangeYAxisDescriptionMetadata.b(a);
        a.n("PercentChangeYAxis", () => new PercentChangeYAxisDescription());
        a.m("PercentChangeYAxis", PercentChangeYAxisDescriptionMetadata.a);
    }
}
PercentChangeYAxisDescriptionMetadata.$t = markType(PercentChangeYAxisDescriptionMetadata, 'PercentChangeYAxisDescriptionMetadata');
PercentChangeYAxisDescriptionMetadata.a = null;
//# sourceMappingURL=PercentChangeYAxisDescriptionMetadata.js.map