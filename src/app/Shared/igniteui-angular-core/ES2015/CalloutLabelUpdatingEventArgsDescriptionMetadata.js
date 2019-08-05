/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalloutLabelUpdatingEventArgsDescription } from "./CalloutLabelUpdatingEventArgsDescription";
/**
 * @hidden
 */
export class CalloutLabelUpdatingEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (CalloutLabelUpdatingEventArgsDescriptionMetadata.a == null) {
            CalloutLabelUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutLabelUpdatingEventArgsDescriptionMetadata.c(a, CalloutLabelUpdatingEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("LabelRef", "(w:Label,wf:Label)DataRef");
    }
    static d(a) {
        CalloutLabelUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("CalloutLabelUpdatingEventArgs", () => new CalloutLabelUpdatingEventArgsDescription());
        a.m("CalloutLabelUpdatingEventArgs", CalloutLabelUpdatingEventArgsDescriptionMetadata.a);
    }
}
CalloutLabelUpdatingEventArgsDescriptionMetadata.$t = markType(CalloutLabelUpdatingEventArgsDescriptionMetadata, 'CalloutLabelUpdatingEventArgsDescriptionMetadata');
CalloutLabelUpdatingEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=CalloutLabelUpdatingEventArgsDescriptionMetadata.js.map