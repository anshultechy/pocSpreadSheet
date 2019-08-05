/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalloutLabelUpdatingEventArgsDescription } from "./CalloutLabelUpdatingEventArgsDescription";
/**
 * @hidden
 */
var CalloutLabelUpdatingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutLabelUpdatingEventArgsDescriptionMetadata, _super);
    function CalloutLabelUpdatingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalloutLabelUpdatingEventArgsDescriptionMetadata.b = function (a) {
        if (CalloutLabelUpdatingEventArgsDescriptionMetadata.a == null) {
            CalloutLabelUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutLabelUpdatingEventArgsDescriptionMetadata.c(a, CalloutLabelUpdatingEventArgsDescriptionMetadata.a);
        }
    };
    CalloutLabelUpdatingEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("LabelRef", "(w:Label,wf:Label)DataRef");
    };
    CalloutLabelUpdatingEventArgsDescriptionMetadata.d = function (a) {
        CalloutLabelUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("CalloutLabelUpdatingEventArgs", function () { return new CalloutLabelUpdatingEventArgsDescription(); });
        a.m("CalloutLabelUpdatingEventArgs", CalloutLabelUpdatingEventArgsDescriptionMetadata.a);
    };
    CalloutLabelUpdatingEventArgsDescriptionMetadata.$t = markType(CalloutLabelUpdatingEventArgsDescriptionMetadata, 'CalloutLabelUpdatingEventArgsDescriptionMetadata');
    CalloutLabelUpdatingEventArgsDescriptionMetadata.a = null;
    return CalloutLabelUpdatingEventArgsDescriptionMetadata;
}(Base));
export { CalloutLabelUpdatingEventArgsDescriptionMetadata };
//# sourceMappingURL=CalloutLabelUpdatingEventArgsDescriptionMetadata.js.map