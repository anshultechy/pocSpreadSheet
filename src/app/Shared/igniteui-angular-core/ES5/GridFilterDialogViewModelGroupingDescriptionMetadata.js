/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogViewModelGroupingDescription } from "./GridFilterDialogViewModelGroupingDescription";
/**
 * @hidden
 */
var GridFilterDialogViewModelGroupingDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogViewModelGroupingDescriptionMetadata, _super);
    function GridFilterDialogViewModelGroupingDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridFilterDialogViewModelGroupingDescriptionMetadata.b = function (a) {
        if (GridFilterDialogViewModelGroupingDescriptionMetadata.a == null) {
            GridFilterDialogViewModelGroupingDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogViewModelGroupingDescriptionMetadata.c(a, GridFilterDialogViewModelGroupingDescriptionMetadata.a);
        }
    };
    GridFilterDialogViewModelGroupingDescriptionMetadata.c = function (a, b) {
        b.item("StartIndex", "Number:int");
        b.item("EndIndex", "Number:int");
        b.item("IsOrGrouping", "Boolean");
    };
    GridFilterDialogViewModelGroupingDescriptionMetadata.d = function (a) {
        GridFilterDialogViewModelGroupingDescriptionMetadata.b(a);
        a.n("GridFilterDialogViewModelGrouping", function () { return new GridFilterDialogViewModelGroupingDescription(); });
        a.m("GridFilterDialogViewModelGrouping", GridFilterDialogViewModelGroupingDescriptionMetadata.a);
    };
    GridFilterDialogViewModelGroupingDescriptionMetadata.$t = markType(GridFilterDialogViewModelGroupingDescriptionMetadata, 'GridFilterDialogViewModelGroupingDescriptionMetadata');
    GridFilterDialogViewModelGroupingDescriptionMetadata.a = null;
    return GridFilterDialogViewModelGroupingDescriptionMetadata;
}(Base));
export { GridFilterDialogViewModelGroupingDescriptionMetadata };
//# sourceMappingURL=GridFilterDialogViewModelGroupingDescriptionMetadata.js.map