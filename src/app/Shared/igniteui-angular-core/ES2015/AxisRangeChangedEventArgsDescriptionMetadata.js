/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisRangeChangedEventArgsDescription } from "./AxisRangeChangedEventArgsDescription";
/**
 * @hidden
 */
export class AxisRangeChangedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (AxisRangeChangedEventArgsDescriptionMetadata.a == null) {
            AxisRangeChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AxisRangeChangedEventArgsDescriptionMetadata.c(a, AxisRangeChangedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("OldMinimumValue", "Number:double");
        b.item("MinimumValue", "Number:double");
        b.item("OldMaximumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
    }
    static d(a) {
        AxisRangeChangedEventArgsDescriptionMetadata.b(a);
        a.n("AxisRangeChangedEventArgs", () => new AxisRangeChangedEventArgsDescription());
        a.m("AxisRangeChangedEventArgs", AxisRangeChangedEventArgsDescriptionMetadata.a);
    }
}
AxisRangeChangedEventArgsDescriptionMetadata.$t = markType(AxisRangeChangedEventArgsDescriptionMetadata, 'AxisRangeChangedEventArgsDescriptionMetadata');
AxisRangeChangedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=AxisRangeChangedEventArgsDescriptionMetadata.js.map