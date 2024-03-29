/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { CalloutSeriesSelectingEventArgsDescription } from "./CalloutSeriesSelectingEventArgsDescription";
/**
 * @hidden
 */
var CalloutSeriesSelectingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutSeriesSelectingEventArgsDescriptionMetadata, _super);
    function CalloutSeriesSelectingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalloutSeriesSelectingEventArgsDescriptionMetadata.b = function (a) {
        if (CalloutSeriesSelectingEventArgsDescriptionMetadata.a == null) {
            CalloutSeriesSelectingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutSeriesSelectingEventArgsDescriptionMetadata.c(a, CalloutSeriesSelectingEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    };
    CalloutSeriesSelectingEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
        b.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("Series", "ExportedType");
        b.item("SeriesName", "String");
    };
    CalloutSeriesSelectingEventArgsDescriptionMetadata.d = function (a) {
        CalloutSeriesSelectingEventArgsDescriptionMetadata.b(a);
        a.n("CalloutSeriesSelectingEventArgs", function () { return new CalloutSeriesSelectingEventArgsDescription(); });
        a.m("CalloutSeriesSelectingEventArgs", CalloutSeriesSelectingEventArgsDescriptionMetadata.a);
    };
    CalloutSeriesSelectingEventArgsDescriptionMetadata.$t = markType(CalloutSeriesSelectingEventArgsDescriptionMetadata, 'CalloutSeriesSelectingEventArgsDescriptionMetadata');
    CalloutSeriesSelectingEventArgsDescriptionMetadata.a = null;
    return CalloutSeriesSelectingEventArgsDescriptionMetadata;
}(Base));
export { CalloutSeriesSelectingEventArgsDescriptionMetadata };
//# sourceMappingURL=CalloutSeriesSelectingEventArgsDescriptionMetadata.js.map