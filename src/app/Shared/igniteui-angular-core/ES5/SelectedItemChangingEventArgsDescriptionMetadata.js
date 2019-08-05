/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SelectedItemChangedEventArgsDescriptionMetadata } from "./SelectedItemChangedEventArgsDescriptionMetadata";
import { SelectedItemChangingEventArgsDescription } from "./SelectedItemChangingEventArgsDescription";
/**
 * @hidden
 */
var SelectedItemChangingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemChangingEventArgsDescriptionMetadata, _super);
    function SelectedItemChangingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedItemChangingEventArgsDescriptionMetadata.b = function (a) {
        if (SelectedItemChangingEventArgsDescriptionMetadata.a == null) {
            SelectedItemChangingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SelectedItemChangingEventArgsDescriptionMetadata.c(a, SelectedItemChangingEventArgsDescriptionMetadata.a);
        }
    };
    SelectedItemChangingEventArgsDescriptionMetadata.c = function (a, b) {
        SelectedItemChangedEventArgsDescriptionMetadata.c(a, b);
        b.item("Cancel", "Boolean");
    };
    SelectedItemChangingEventArgsDescriptionMetadata.d = function (a) {
        SelectedItemChangingEventArgsDescriptionMetadata.b(a);
        a.n("SelectedItemChangingEventArgs", function () { return new SelectedItemChangingEventArgsDescription(); });
        a.m("SelectedItemChangingEventArgs", SelectedItemChangingEventArgsDescriptionMetadata.a);
    };
    SelectedItemChangingEventArgsDescriptionMetadata.$t = markType(SelectedItemChangingEventArgsDescriptionMetadata, 'SelectedItemChangingEventArgsDescriptionMetadata');
    SelectedItemChangingEventArgsDescriptionMetadata.a = null;
    return SelectedItemChangingEventArgsDescriptionMetadata;
}(Base));
export { SelectedItemChangingEventArgsDescriptionMetadata };
//# sourceMappingURL=SelectedItemChangingEventArgsDescriptionMetadata.js.map