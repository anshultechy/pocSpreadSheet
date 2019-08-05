/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogViewModelDescription } from "./GridFilterDialogViewModelDescription";
/**
 * @hidden
 */
export class GridFilterDialogViewModelDescriptionMetadata extends Base {
    static b(a) {
        if (GridFilterDialogViewModelDescriptionMetadata.a == null) {
            GridFilterDialogViewModelDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogViewModelDescriptionMetadata.c(a, GridFilterDialogViewModelDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("PropertyType", "ExportedType:string:DataSourceSchemaPropertyType");
        b.item("IsTopLevelOr", "Boolean");
        b.item("MaxGroupingLevels", "Number:int");
        b.item("Rows", "Collection:GridFilterDialogViewModelRowDescription:GridFilterDialogViewModelRowCollection:GridFilterDialogViewModelRowDescription");
    }
    static d(a) {
        GridFilterDialogViewModelDescriptionMetadata.b(a);
        a.n("GridFilterDialogViewModel", () => new GridFilterDialogViewModelDescription());
        a.m("GridFilterDialogViewModel", GridFilterDialogViewModelDescriptionMetadata.a);
    }
}
GridFilterDialogViewModelDescriptionMetadata.$t = markType(GridFilterDialogViewModelDescriptionMetadata, 'GridFilterDialogViewModelDescriptionMetadata');
GridFilterDialogViewModelDescriptionMetadata.a = null;
//# sourceMappingURL=GridFilterDialogViewModelDescriptionMetadata.js.map