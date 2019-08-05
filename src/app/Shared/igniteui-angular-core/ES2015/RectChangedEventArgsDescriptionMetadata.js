/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RectChangedEventArgsDescription } from "./RectChangedEventArgsDescription";
/**
 * @hidden
 */
export class RectChangedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (RectChangedEventArgsDescriptionMetadata.a == null) {
            RectChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RectChangedEventArgsDescriptionMetadata.c(a, RectChangedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("OldRect", "Rect");
        b.item("NewRect", "Rect");
    }
    static d(a) {
        RectChangedEventArgsDescriptionMetadata.b(a);
        a.n("RectChangedEventArgs", () => new RectChangedEventArgsDescription());
        a.m("RectChangedEventArgs", RectChangedEventArgsDescriptionMetadata.a);
    }
}
RectChangedEventArgsDescriptionMetadata.$t = markType(RectChangedEventArgsDescriptionMetadata, 'RectChangedEventArgsDescriptionMetadata');
RectChangedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=RectChangedEventArgsDescriptionMetadata.js.map