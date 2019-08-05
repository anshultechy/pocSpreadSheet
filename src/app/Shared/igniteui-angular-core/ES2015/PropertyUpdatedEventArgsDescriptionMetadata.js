/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescription } from "./PropertyUpdatedEventArgsDescription";
/**
 * @hidden
 */
export class PropertyUpdatedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (PropertyUpdatedEventArgsDescriptionMetadata.a == null) {
            PropertyUpdatedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PropertyUpdatedEventArgsDescriptionMetadata.c(a, PropertyUpdatedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("PropertyName", "String");
        b.item("OldValueRef", "(w:OldValue,wf:OldValue)DataRef");
        b.item("NewValueRef", "(w:NewValue,wf:NewValue)DataRef");
    }
    static d(a) {
        PropertyUpdatedEventArgsDescriptionMetadata.b(a);
        a.n("PropertyUpdatedEventArgs", () => new PropertyUpdatedEventArgsDescription());
        a.m("PropertyUpdatedEventArgs", PropertyUpdatedEventArgsDescriptionMetadata.a);
    }
}
PropertyUpdatedEventArgsDescriptionMetadata.$t = markType(PropertyUpdatedEventArgsDescriptionMetadata, 'PropertyUpdatedEventArgsDescriptionMetadata');
PropertyUpdatedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=PropertyUpdatedEventArgsDescriptionMetadata.js.map