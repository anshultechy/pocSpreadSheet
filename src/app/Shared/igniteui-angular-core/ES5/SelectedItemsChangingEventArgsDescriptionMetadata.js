/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SelectedItemsChangedEventArgsDescriptionMetadata } from "./SelectedItemsChangedEventArgsDescriptionMetadata";
import { SelectedItemsChangingEventArgsDescription } from "./SelectedItemsChangingEventArgsDescription";
/**
 * @hidden
 */
var SelectedItemsChangingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemsChangingEventArgsDescriptionMetadata, _super);
    function SelectedItemsChangingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedItemsChangingEventArgsDescriptionMetadata.b = function (a) {
        if (SelectedItemsChangingEventArgsDescriptionMetadata.a == null) {
            SelectedItemsChangingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SelectedItemsChangingEventArgsDescriptionMetadata.c(a, SelectedItemsChangingEventArgsDescriptionMetadata.a);
        }
    };
    SelectedItemsChangingEventArgsDescriptionMetadata.c = function (a, b) {
        SelectedItemsChangedEventArgsDescriptionMetadata.c(a, b);
        b.item("Cancel", "Boolean");
    };
    SelectedItemsChangingEventArgsDescriptionMetadata.d = function (a) {
        SelectedItemsChangingEventArgsDescriptionMetadata.b(a);
        a.n("SelectedItemsChangingEventArgs", function () { return new SelectedItemsChangingEventArgsDescription(); });
        a.m("SelectedItemsChangingEventArgs", SelectedItemsChangingEventArgsDescriptionMetadata.a);
    };
    SelectedItemsChangingEventArgsDescriptionMetadata.$t = markType(SelectedItemsChangingEventArgsDescriptionMetadata, 'SelectedItemsChangingEventArgsDescriptionMetadata');
    SelectedItemsChangingEventArgsDescriptionMetadata.a = null;
    return SelectedItemsChangingEventArgsDescriptionMetadata;
}(Base));
export { SelectedItemsChangingEventArgsDescriptionMetadata };
//# sourceMappingURL=SelectedItemsChangingEventArgsDescriptionMetadata.js.map