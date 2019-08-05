/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { GridFilterDialogOpeningEventArgsDescription } from "./GridFilterDialogOpeningEventArgsDescription";
/**
 * @hidden
 */
export class GridFilterDialogOpeningEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (GridFilterDialogOpeningEventArgsDescriptionMetadata.a == null) {
            GridFilterDialogOpeningEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogOpeningEventArgsDescriptionMetadata.c(a, GridFilterDialogOpeningEventArgsDescriptionMetadata.a);
            ColumnFilterConditionDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Filter", "ExportedType");
        b.item("PropertyType", "ExportedType:string:DataSourceSchemaPropertyType");
    }
    static d(a) {
        GridFilterDialogOpeningEventArgsDescriptionMetadata.b(a);
        a.n("GridFilterDialogOpeningEventArgs", () => new GridFilterDialogOpeningEventArgsDescription());
        a.m("GridFilterDialogOpeningEventArgs", GridFilterDialogOpeningEventArgsDescriptionMetadata.a);
    }
}
GridFilterDialogOpeningEventArgsDescriptionMetadata.$t = markType(GridFilterDialogOpeningEventArgsDescriptionMetadata, 'GridFilterDialogOpeningEventArgsDescriptionMetadata');
GridFilterDialogOpeningEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=GridFilterDialogOpeningEventArgsDescriptionMetadata.js.map