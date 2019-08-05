/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ZoomSliderResolvingAxisValueEventArgsDescription } from "./ZoomSliderResolvingAxisValueEventArgsDescription";
/**
 * @hidden
 */
export class ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a == null) {
            ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.c(a, ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("Position", "Number:double");
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
    }
    static d(a) {
        ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.b(a);
        a.n("ZoomSliderResolvingAxisValueEventArgs", () => new ZoomSliderResolvingAxisValueEventArgsDescription());
        a.m("ZoomSliderResolvingAxisValueEventArgs", ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a);
    }
}
ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.$t = markType(ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata, 'ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata');
ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.js.map