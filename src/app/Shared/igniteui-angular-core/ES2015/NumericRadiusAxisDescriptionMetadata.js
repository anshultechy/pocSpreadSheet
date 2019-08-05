/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { NumericAxisBaseDescriptionMetadata } from "./NumericAxisBaseDescriptionMetadata";
import { NumericRadiusAxisDescription } from "./NumericRadiusAxisDescription";
/**
 * @hidden
 */
export class NumericRadiusAxisDescriptionMetadata extends Base {
    static b(a) {
        if (NumericRadiusAxisDescriptionMetadata.a == null) {
            NumericRadiusAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericRadiusAxisDescriptionMetadata.c(a, NumericRadiusAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        NumericAxisBaseDescriptionMetadata.c(a, b);
        b.item("RadiusExtentScale", "Number:double");
        b.item("InnerRadiusExtentScale", "Number:double");
    }
    static d(a) {
        NumericRadiusAxisDescriptionMetadata.b(a);
        a.n("NumericRadiusAxis", () => new NumericRadiusAxisDescription());
        a.m("NumericRadiusAxis", NumericRadiusAxisDescriptionMetadata.a);
    }
}
NumericRadiusAxisDescriptionMetadata.$t = markType(NumericRadiusAxisDescriptionMetadata, 'NumericRadiusAxisDescriptionMetadata');
NumericRadiusAxisDescriptionMetadata.a = null;
//# sourceMappingURL=NumericRadiusAxisDescriptionMetadata.js.map