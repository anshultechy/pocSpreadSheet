/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendMouseEventArgsDescription } from "./LegendMouseEventArgsDescription";
/**
 * @hidden
 */
export class LegendMouseEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (LegendMouseEventArgsDescriptionMetadata.a == null) {
            LegendMouseEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LegendMouseEventArgsDescriptionMetadata.c(a, LegendMouseEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("LegendItemRef", "(w:LegendItem,wf:LegendItem)DataRef");
    }
    static d(a) {
        LegendMouseEventArgsDescriptionMetadata.b(a);
        a.n("LegendMouseEventArgs", () => new LegendMouseEventArgsDescription());
        a.m("LegendMouseEventArgs", LegendMouseEventArgsDescriptionMetadata.a);
    }
}
LegendMouseEventArgsDescriptionMetadata.$t = markType(LegendMouseEventArgsDescriptionMetadata, 'LegendMouseEventArgsDescriptionMetadata');
LegendMouseEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=LegendMouseEventArgsDescriptionMetadata.js.map