/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendMouseButtonEventArgsDescription } from "./LegendMouseButtonEventArgsDescription";
/**
 * @hidden
 */
export class LegendMouseButtonEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (LegendMouseButtonEventArgsDescriptionMetadata.a == null) {
            LegendMouseButtonEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LegendMouseButtonEventArgsDescriptionMetadata.c(a, LegendMouseButtonEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("Handled", "Boolean");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("LegendItemRef", "(w:LegendItem,wf:LegendItem)DataRef");
    }
    static d(a) {
        LegendMouseButtonEventArgsDescriptionMetadata.b(a);
        a.n("LegendMouseButtonEventArgs", () => new LegendMouseButtonEventArgsDescription());
        a.m("LegendMouseButtonEventArgs", LegendMouseButtonEventArgsDescriptionMetadata.a);
    }
}
LegendMouseButtonEventArgsDescriptionMetadata.$t = markType(LegendMouseButtonEventArgsDescriptionMetadata, 'LegendMouseButtonEventArgsDescriptionMetadata');
LegendMouseButtonEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=LegendMouseButtonEventArgsDescriptionMetadata.js.map