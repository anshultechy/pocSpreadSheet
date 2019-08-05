/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SelectedItemChangedEventArgsDescription } from "./SelectedItemChangedEventArgsDescription";
/**
 * @hidden
 */
export class SelectedItemChangedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (SelectedItemChangedEventArgsDescriptionMetadata.a == null) {
            SelectedItemChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SelectedItemChangedEventArgsDescriptionMetadata.c(a, SelectedItemChangedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("OldItemRef", "(w:OldItem,wf:OldItem)DataRef");
        b.item("NewItemRef", "(w:NewItem,wf:NewItem)DataRef");
    }
    static d(a) {
        SelectedItemChangedEventArgsDescriptionMetadata.b(a);
        a.n("SelectedItemChangedEventArgs", () => new SelectedItemChangedEventArgsDescription());
        a.m("SelectedItemChangedEventArgs", SelectedItemChangedEventArgsDescriptionMetadata.a);
    }
}
SelectedItemChangedEventArgsDescriptionMetadata.$t = markType(SelectedItemChangedEventArgsDescriptionMetadata, 'SelectedItemChangedEventArgsDescriptionMetadata');
SelectedItemChangedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=SelectedItemChangedEventArgsDescriptionMetadata.js.map