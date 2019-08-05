/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { CalloutStyleUpdatingEventArgsDescription } from "./CalloutStyleUpdatingEventArgsDescription";
/**
 * @hidden
 */
export class CalloutStyleUpdatingEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (CalloutStyleUpdatingEventArgsDescriptionMetadata.a == null) {
            CalloutStyleUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutStyleUpdatingEventArgsDescriptionMetadata.c(a, CalloutStyleUpdatingEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("Series", "ExportedType");
        b.item("Background", "Brush");
        b.item("TextColor", "Brush");
        b.item("Outline", "Brush");
        b.item("LeaderBrush", "Brush");
        b.item("StrokeThickness", "Number:double");
    }
    static d(a) {
        CalloutStyleUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("CalloutStyleUpdatingEventArgs", () => new CalloutStyleUpdatingEventArgsDescription());
        a.m("CalloutStyleUpdatingEventArgs", CalloutStyleUpdatingEventArgsDescriptionMetadata.a);
    }
}
CalloutStyleUpdatingEventArgsDescriptionMetadata.$t = markType(CalloutStyleUpdatingEventArgsDescriptionMetadata, 'CalloutStyleUpdatingEventArgsDescriptionMetadata');
CalloutStyleUpdatingEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=CalloutStyleUpdatingEventArgsDescriptionMetadata.js.map