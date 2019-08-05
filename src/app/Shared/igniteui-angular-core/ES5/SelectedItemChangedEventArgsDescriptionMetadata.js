/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SelectedItemChangedEventArgsDescription } from "./SelectedItemChangedEventArgsDescription";
/**
 * @hidden
 */
var SelectedItemChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemChangedEventArgsDescriptionMetadata, _super);
    function SelectedItemChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedItemChangedEventArgsDescriptionMetadata.b = function (a) {
        if (SelectedItemChangedEventArgsDescriptionMetadata.a == null) {
            SelectedItemChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SelectedItemChangedEventArgsDescriptionMetadata.c(a, SelectedItemChangedEventArgsDescriptionMetadata.a);
        }
    };
    SelectedItemChangedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("OldItemRef", "(w:OldItem,wf:OldItem)DataRef");
        b.item("NewItemRef", "(w:NewItem,wf:NewItem)DataRef");
    };
    SelectedItemChangedEventArgsDescriptionMetadata.d = function (a) {
        SelectedItemChangedEventArgsDescriptionMetadata.b(a);
        a.n("SelectedItemChangedEventArgs", function () { return new SelectedItemChangedEventArgsDescription(); });
        a.m("SelectedItemChangedEventArgs", SelectedItemChangedEventArgsDescriptionMetadata.a);
    };
    SelectedItemChangedEventArgsDescriptionMetadata.$t = markType(SelectedItemChangedEventArgsDescriptionMetadata, 'SelectedItemChangedEventArgsDescriptionMetadata');
    SelectedItemChangedEventArgsDescriptionMetadata.a = null;
    return SelectedItemChangedEventArgsDescriptionMetadata;
}(Base));
export { SelectedItemChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=SelectedItemChangedEventArgsDescriptionMetadata.js.map