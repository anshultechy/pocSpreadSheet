/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SliceClickEventArgsDescription } from "./SliceClickEventArgsDescription";
/**
 * @hidden
 */
export class SliceClickEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (SliceClickEventArgsDescriptionMetadata.a == null) {
            SliceClickEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SliceClickEventArgsDescriptionMetadata.c(a, SliceClickEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("IsSelected", "Boolean");
        b.item("IsExploded", "Boolean");
        b.item("OriginalEventRef", "(w:OriginalEvent,wf:OriginalEvent)DataRef");
    }
    static d(a) {
        SliceClickEventArgsDescriptionMetadata.b(a);
        a.n("SliceClickEventArgs", () => new SliceClickEventArgsDescription());
        a.m("SliceClickEventArgs", SliceClickEventArgsDescriptionMetadata.a);
    }
}
SliceClickEventArgsDescriptionMetadata.$t = markType(SliceClickEventArgsDescriptionMetadata, 'SliceClickEventArgsDescriptionMetadata');
SliceClickEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=SliceClickEventArgsDescriptionMetadata.js.map