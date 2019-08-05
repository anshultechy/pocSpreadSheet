/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LinearGraphRangeDescription } from "./LinearGraphRangeDescription";
/**
 * @hidden
 */
export class LinearGraphRangeDescriptionMetadata extends Base {
    static b(a) {
        if (LinearGraphRangeDescriptionMetadata.a == null) {
            LinearGraphRangeDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LinearGraphRangeDescriptionMetadata.c(a, LinearGraphRangeDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("Name", "String");
        b.item("Brush", "Brush");
        b.item("Outline", "Brush");
        b.item("StartValue", "Number:double");
        b.item("EndValue", "Number:double");
        b.item("InnerStartExtent", "Number:double");
        b.item("InnerEndExtent", "Number:double");
        b.item("OuterStartExtent", "Number:double");
        b.item("OuterEndExtent", "Number:double");
        b.item("StrokeThickness", "Number:double");
    }
    static d(a) {
        LinearGraphRangeDescriptionMetadata.b(a);
        a.n("LinearGraphRange", () => new LinearGraphRangeDescription());
        a.m("LinearGraphRange", LinearGraphRangeDescriptionMetadata.a);
    }
}
LinearGraphRangeDescriptionMetadata.$t = markType(LinearGraphRangeDescriptionMetadata, 'LinearGraphRangeDescriptionMetadata');
LinearGraphRangeDescriptionMetadata.a = null;
//# sourceMappingURL=LinearGraphRangeDescriptionMetadata.js.map