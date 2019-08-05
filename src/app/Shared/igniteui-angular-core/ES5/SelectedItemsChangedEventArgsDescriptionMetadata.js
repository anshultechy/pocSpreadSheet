/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SelectedItemsChangedEventArgsDescription } from "./SelectedItemsChangedEventArgsDescription";
/**
 * @hidden
 */
var SelectedItemsChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemsChangedEventArgsDescriptionMetadata, _super);
    function SelectedItemsChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedItemsChangedEventArgsDescriptionMetadata.b = function (a) {
        if (SelectedItemsChangedEventArgsDescriptionMetadata.a == null) {
            SelectedItemsChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SelectedItemsChangedEventArgsDescriptionMetadata.c(a, SelectedItemsChangedEventArgsDescriptionMetadata.a);
        }
    };
    SelectedItemsChangedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("OldItemsRef", "(w:OldItems,wf:OldItems)DataRef::IList");
        b.item("NewItemsRef", "(w:NewItems,wf:NewItems)DataRef::IList");
    };
    SelectedItemsChangedEventArgsDescriptionMetadata.d = function (a) {
        SelectedItemsChangedEventArgsDescriptionMetadata.b(a);
        a.n("SelectedItemsChangedEventArgs", function () { return new SelectedItemsChangedEventArgsDescription(); });
        a.m("SelectedItemsChangedEventArgs", SelectedItemsChangedEventArgsDescriptionMetadata.a);
    };
    SelectedItemsChangedEventArgsDescriptionMetadata.$t = markType(SelectedItemsChangedEventArgsDescriptionMetadata, 'SelectedItemsChangedEventArgsDescriptionMetadata');
    SelectedItemsChangedEventArgsDescriptionMetadata.a = null;
    return SelectedItemsChangedEventArgsDescriptionMetadata;
}(Base));
export { SelectedItemsChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=SelectedItemsChangedEventArgsDescriptionMetadata.js.map