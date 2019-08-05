/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridSelectedKeysChangedEventArgsDescription } from "./GridSelectedKeysChangedEventArgsDescription";
/**
 * @hidden
 */
export class GridSelectedKeysChangedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (GridSelectedKeysChangedEventArgsDescriptionMetadata.a == null) {
            GridSelectedKeysChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridSelectedKeysChangedEventArgsDescriptionMetadata.c(a, GridSelectedKeysChangedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("AddedKeys", "Collection:PrimaryKeyValueDescription:GridSelectedKeysCollection:PrimaryKeyValueDescription");
        b.item("RemovedKeys", "Collection:PrimaryKeyValueDescription:GridSelectedKeysCollection:PrimaryKeyValueDescription");
    }
    static d(a) {
        GridSelectedKeysChangedEventArgsDescriptionMetadata.b(a);
        a.n("GridSelectedKeysChangedEventArgs", () => new GridSelectedKeysChangedEventArgsDescription());
        a.m("GridSelectedKeysChangedEventArgs", GridSelectedKeysChangedEventArgsDescriptionMetadata.a);
    }
}
GridSelectedKeysChangedEventArgsDescriptionMetadata.$t = markType(GridSelectedKeysChangedEventArgsDescriptionMetadata, 'GridSelectedKeysChangedEventArgsDescriptionMetadata');
GridSelectedKeysChangedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=GridSelectedKeysChangedEventArgsDescriptionMetadata.js.map