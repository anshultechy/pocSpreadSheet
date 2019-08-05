/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RenderRequestedEventArgsDescription } from "./RenderRequestedEventArgsDescription";
/**
 * @hidden
 */
export class RenderRequestedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (RenderRequestedEventArgsDescriptionMetadata.a == null) {
            RenderRequestedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RenderRequestedEventArgsDescriptionMetadata.c(a, RenderRequestedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("Animate", "Boolean");
    }
    static d(a) {
        RenderRequestedEventArgsDescriptionMetadata.b(a);
        a.n("RenderRequestedEventArgs", () => new RenderRequestedEventArgsDescription());
        a.m("RenderRequestedEventArgs", RenderRequestedEventArgsDescriptionMetadata.a);
    }
}
RenderRequestedEventArgsDescriptionMetadata.$t = markType(RenderRequestedEventArgsDescriptionMetadata, 'RenderRequestedEventArgsDescriptionMetadata');
RenderRequestedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=RenderRequestedEventArgsDescriptionMetadata.js.map