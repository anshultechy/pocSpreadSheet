/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataBindingEventArgsDescription } from "./DataBindingEventArgsDescription";
/**
 * @hidden
 */
var DataBindingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DataBindingEventArgsDescriptionMetadata, _super);
    function DataBindingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataBindingEventArgsDescriptionMetadata.b = function (a) {
        if (DataBindingEventArgsDescriptionMetadata.a == null) {
            DataBindingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataBindingEventArgsDescriptionMetadata.c(a, DataBindingEventArgsDescriptionMetadata.a);
        }
    };
    DataBindingEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("ResolvedValueRef", "(w:ResolvedValue,wf:ResolvedValue)DataRef");
        b.item("RowObjectRef", "(w:RowObject,wf:RowObject)DataRef");
    };
    DataBindingEventArgsDescriptionMetadata.d = function (a) {
        DataBindingEventArgsDescriptionMetadata.b(a);
        a.n("DataBindingEventArgs", function () { return new DataBindingEventArgsDescription(); });
        a.m("DataBindingEventArgs", DataBindingEventArgsDescriptionMetadata.a);
    };
    DataBindingEventArgsDescriptionMetadata.$t = markType(DataBindingEventArgsDescriptionMetadata, 'DataBindingEventArgsDescriptionMetadata');
    DataBindingEventArgsDescriptionMetadata.a = null;
    return DataBindingEventArgsDescriptionMetadata;
}(Base));
export { DataBindingEventArgsDescriptionMetadata };
//# sourceMappingURL=DataBindingEventArgsDescriptionMetadata.js.map