/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogViewModelDescription } from "./GridFilterDialogViewModelDescription";
/**
 * @hidden
 */
var GridFilterDialogViewModelDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogViewModelDescriptionMetadata, _super);
    function GridFilterDialogViewModelDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridFilterDialogViewModelDescriptionMetadata.b = function (a) {
        if (GridFilterDialogViewModelDescriptionMetadata.a == null) {
            GridFilterDialogViewModelDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogViewModelDescriptionMetadata.c(a, GridFilterDialogViewModelDescriptionMetadata.a);
        }
    };
    GridFilterDialogViewModelDescriptionMetadata.c = function (a, b) {
        b.item("PropertyType", "ExportedType:string:DataSourceSchemaPropertyType");
        b.item("IsTopLevelOr", "Boolean");
        b.item("MaxGroupingLevels", "Number:int");
        b.item("Rows", "Collection:GridFilterDialogViewModelRowDescription:GridFilterDialogViewModelRowCollection:GridFilterDialogViewModelRowDescription");
    };
    GridFilterDialogViewModelDescriptionMetadata.d = function (a) {
        GridFilterDialogViewModelDescriptionMetadata.b(a);
        a.n("GridFilterDialogViewModel", function () { return new GridFilterDialogViewModelDescription(); });
        a.m("GridFilterDialogViewModel", GridFilterDialogViewModelDescriptionMetadata.a);
    };
    GridFilterDialogViewModelDescriptionMetadata.$t = markType(GridFilterDialogViewModelDescriptionMetadata, 'GridFilterDialogViewModelDescriptionMetadata');
    GridFilterDialogViewModelDescriptionMetadata.a = null;
    return GridFilterDialogViewModelDescriptionMetadata;
}(Base));
export { GridFilterDialogViewModelDescriptionMetadata };
//# sourceMappingURL=GridFilterDialogViewModelDescriptionMetadata.js.map