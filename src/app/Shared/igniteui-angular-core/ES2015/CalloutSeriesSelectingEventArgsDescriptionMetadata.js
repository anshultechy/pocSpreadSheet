/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { CalloutSeriesSelectingEventArgsDescription } from "./CalloutSeriesSelectingEventArgsDescription";
/**
 * @hidden
 */
export class CalloutSeriesSelectingEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (CalloutSeriesSelectingEventArgsDescriptionMetadata.a == null) {
            CalloutSeriesSelectingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutSeriesSelectingEventArgsDescriptionMetadata.c(a, CalloutSeriesSelectingEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("Series", "ExportedType");
        b.item("SeriesName", "String");
    }
    static d(a) {
        CalloutSeriesSelectingEventArgsDescriptionMetadata.b(a);
        a.n("CalloutSeriesSelectingEventArgs", () => new CalloutSeriesSelectingEventArgsDescription());
        a.m("CalloutSeriesSelectingEventArgs", CalloutSeriesSelectingEventArgsDescriptionMetadata.a);
    }
}
CalloutSeriesSelectingEventArgsDescriptionMetadata.$t = markType(CalloutSeriesSelectingEventArgsDescriptionMetadata, 'CalloutSeriesSelectingEventArgsDescriptionMetadata');
CalloutSeriesSelectingEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=CalloutSeriesSelectingEventArgsDescriptionMetadata.js.map