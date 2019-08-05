/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalloutContentUpdatingEventArgsDescription } from "./CalloutContentUpdatingEventArgsDescription";
/**
 * @hidden
 */
export class CalloutContentUpdatingEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (CalloutContentUpdatingEventArgsDescriptionMetadata.a == null) {
            CalloutContentUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutContentUpdatingEventArgsDescriptionMetadata.c(a, CalloutContentUpdatingEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("ContentRef", "(w:Content,wf:Content)DataRef");
    }
    static d(a) {
        CalloutContentUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("CalloutContentUpdatingEventArgs", () => new CalloutContentUpdatingEventArgsDescription());
        a.m("CalloutContentUpdatingEventArgs", CalloutContentUpdatingEventArgsDescriptionMetadata.a);
    }
}
CalloutContentUpdatingEventArgsDescriptionMetadata.$t = markType(CalloutContentUpdatingEventArgsDescriptionMetadata, 'CalloutContentUpdatingEventArgsDescriptionMetadata');
CalloutContentUpdatingEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=CalloutContentUpdatingEventArgsDescriptionMetadata.js.map