/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogViewModelGroupingDescription } from "./GridFilterDialogViewModelGroupingDescription";
/**
 * @hidden
 */
export class GridFilterDialogViewModelGroupingDescriptionMetadata extends Base {
    static b(a) {
        if (GridFilterDialogViewModelGroupingDescriptionMetadata.a == null) {
            GridFilterDialogViewModelGroupingDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogViewModelGroupingDescriptionMetadata.c(a, GridFilterDialogViewModelGroupingDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("StartIndex", "Number:int");
        b.item("EndIndex", "Number:int");
        b.item("IsOrGrouping", "Boolean");
    }
    static d(a) {
        GridFilterDialogViewModelGroupingDescriptionMetadata.b(a);
        a.n("GridFilterDialogViewModelGrouping", () => new GridFilterDialogViewModelGroupingDescription());
        a.m("GridFilterDialogViewModelGrouping", GridFilterDialogViewModelGroupingDescriptionMetadata.a);
    }
}
GridFilterDialogViewModelGroupingDescriptionMetadata.$t = markType(GridFilterDialogViewModelGroupingDescriptionMetadata, 'GridFilterDialogViewModelGroupingDescriptionMetadata');
GridFilterDialogViewModelGroupingDescriptionMetadata.a = null;
//# sourceMappingURL=GridFilterDialogViewModelGroupingDescriptionMetadata.js.map