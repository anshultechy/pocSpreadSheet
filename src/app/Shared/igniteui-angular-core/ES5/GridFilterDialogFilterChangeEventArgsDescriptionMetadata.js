/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { GridFilterDialogFilterChangeEventArgsDescription } from "./GridFilterDialogFilterChangeEventArgsDescription";
/**
 * @hidden
 */
var GridFilterDialogFilterChangeEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogFilterChangeEventArgsDescriptionMetadata, _super);
    function GridFilterDialogFilterChangeEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridFilterDialogFilterChangeEventArgsDescriptionMetadata.b = function (a) {
        if (GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a == null) {
            GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogFilterChangeEventArgsDescriptionMetadata.c(a, GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a);
            ColumnFilterConditionDescriptionMetadata.d(a);
        }
    };
    GridFilterDialogFilterChangeEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Filter", "ExportedType");
    };
    GridFilterDialogFilterChangeEventArgsDescriptionMetadata.d = function (a) {
        GridFilterDialogFilterChangeEventArgsDescriptionMetadata.b(a);
        a.n("GridFilterDialogFilterChangeEventArgs", function () { return new GridFilterDialogFilterChangeEventArgsDescription(); });
        a.m("GridFilterDialogFilterChangeEventArgs", GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a);
    };
    GridFilterDialogFilterChangeEventArgsDescriptionMetadata.$t = markType(GridFilterDialogFilterChangeEventArgsDescriptionMetadata, 'GridFilterDialogFilterChangeEventArgsDescriptionMetadata');
    GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a = null;
    return GridFilterDialogFilterChangeEventArgsDescriptionMetadata;
}(Base));
export { GridFilterDialogFilterChangeEventArgsDescriptionMetadata };
//# sourceMappingURL=GridFilterDialogFilterChangeEventArgsDescriptionMetadata.js.map