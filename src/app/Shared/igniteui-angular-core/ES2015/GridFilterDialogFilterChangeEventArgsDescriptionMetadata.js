/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { GridFilterDialogFilterChangeEventArgsDescription } from "./GridFilterDialogFilterChangeEventArgsDescription";
/**
 * @hidden
 */
export class GridFilterDialogFilterChangeEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a == null) {
            GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogFilterChangeEventArgsDescriptionMetadata.c(a, GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a);
            ColumnFilterConditionDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Filter", "ExportedType");
    }
    static d(a) {
        GridFilterDialogFilterChangeEventArgsDescriptionMetadata.b(a);
        a.n("GridFilterDialogFilterChangeEventArgs", () => new GridFilterDialogFilterChangeEventArgsDescription());
        a.m("GridFilterDialogFilterChangeEventArgs", GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a);
    }
}
GridFilterDialogFilterChangeEventArgsDescriptionMetadata.$t = markType(GridFilterDialogFilterChangeEventArgsDescriptionMetadata, 'GridFilterDialogFilterChangeEventArgsDescriptionMetadata');
GridFilterDialogFilterChangeEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=GridFilterDialogFilterChangeEventArgsDescriptionMetadata.js.map