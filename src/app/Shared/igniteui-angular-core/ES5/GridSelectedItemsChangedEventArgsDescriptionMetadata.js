/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridSelectedItemsChangedEventArgsDescription } from "./GridSelectedItemsChangedEventArgsDescription";
/**
 * @hidden
 */
var GridSelectedItemsChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridSelectedItemsChangedEventArgsDescriptionMetadata, _super);
    function GridSelectedItemsChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridSelectedItemsChangedEventArgsDescriptionMetadata.b = function (a) {
        if (GridSelectedItemsChangedEventArgsDescriptionMetadata.a == null) {
            GridSelectedItemsChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridSelectedItemsChangedEventArgsDescriptionMetadata.c(a, GridSelectedItemsChangedEventArgsDescriptionMetadata.a);
        }
    };
    GridSelectedItemsChangedEventArgsDescriptionMetadata.c = function (a, b) {
    };
    GridSelectedItemsChangedEventArgsDescriptionMetadata.d = function (a) {
        GridSelectedItemsChangedEventArgsDescriptionMetadata.b(a);
        a.n("GridSelectedItemsChangedEventArgs", function () { return new GridSelectedItemsChangedEventArgsDescription(); });
        a.m("GridSelectedItemsChangedEventArgs", GridSelectedItemsChangedEventArgsDescriptionMetadata.a);
    };
    GridSelectedItemsChangedEventArgsDescriptionMetadata.$t = markType(GridSelectedItemsChangedEventArgsDescriptionMetadata, 'GridSelectedItemsChangedEventArgsDescriptionMetadata');
    GridSelectedItemsChangedEventArgsDescriptionMetadata.a = null;
    return GridSelectedItemsChangedEventArgsDescriptionMetadata;
}(Base));
export { GridSelectedItemsChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=GridSelectedItemsChangedEventArgsDescriptionMetadata.js.map