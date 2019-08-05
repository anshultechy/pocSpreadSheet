/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridSelectedItemsChangedEventArgsDescription } from "./GridSelectedItemsChangedEventArgsDescription";
/**
 * @hidden
 */
export class GridSelectedItemsChangedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (GridSelectedItemsChangedEventArgsDescriptionMetadata.a == null) {
            GridSelectedItemsChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridSelectedItemsChangedEventArgsDescriptionMetadata.c(a, GridSelectedItemsChangedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        GridSelectedItemsChangedEventArgsDescriptionMetadata.b(a);
        a.n("GridSelectedItemsChangedEventArgs", () => new GridSelectedItemsChangedEventArgsDescription());
        a.m("GridSelectedItemsChangedEventArgs", GridSelectedItemsChangedEventArgsDescriptionMetadata.a);
    }
}
GridSelectedItemsChangedEventArgsDescriptionMetadata.$t = markType(GridSelectedItemsChangedEventArgsDescriptionMetadata, 'GridSelectedItemsChangedEventArgsDescriptionMetadata');
GridSelectedItemsChangedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=GridSelectedItemsChangedEventArgsDescriptionMetadata.js.map