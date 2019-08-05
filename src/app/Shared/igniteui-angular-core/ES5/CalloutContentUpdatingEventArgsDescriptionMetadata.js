/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalloutContentUpdatingEventArgsDescription } from "./CalloutContentUpdatingEventArgsDescription";
/**
 * @hidden
 */
var CalloutContentUpdatingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutContentUpdatingEventArgsDescriptionMetadata, _super);
    function CalloutContentUpdatingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalloutContentUpdatingEventArgsDescriptionMetadata.b = function (a) {
        if (CalloutContentUpdatingEventArgsDescriptionMetadata.a == null) {
            CalloutContentUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutContentUpdatingEventArgsDescriptionMetadata.c(a, CalloutContentUpdatingEventArgsDescriptionMetadata.a);
        }
    };
    CalloutContentUpdatingEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("ContentRef", "(w:Content,wf:Content)DataRef");
    };
    CalloutContentUpdatingEventArgsDescriptionMetadata.d = function (a) {
        CalloutContentUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("CalloutContentUpdatingEventArgs", function () { return new CalloutContentUpdatingEventArgsDescription(); });
        a.m("CalloutContentUpdatingEventArgs", CalloutContentUpdatingEventArgsDescriptionMetadata.a);
    };
    CalloutContentUpdatingEventArgsDescriptionMetadata.$t = markType(CalloutContentUpdatingEventArgsDescriptionMetadata, 'CalloutContentUpdatingEventArgsDescriptionMetadata');
    CalloutContentUpdatingEventArgsDescriptionMetadata.a = null;
    return CalloutContentUpdatingEventArgsDescriptionMetadata;
}(Base));
export { CalloutContentUpdatingEventArgsDescriptionMetadata };
//# sourceMappingURL=CalloutContentUpdatingEventArgsDescriptionMetadata.js.map