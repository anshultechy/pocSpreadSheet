/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HoleDimensionsChangedEventArgsDescription } from "./HoleDimensionsChangedEventArgsDescription";
/**
 * @hidden
 */
export class HoleDimensionsChangedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (HoleDimensionsChangedEventArgsDescriptionMetadata.a == null) {
            HoleDimensionsChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HoleDimensionsChangedEventArgsDescriptionMetadata.c(a, HoleDimensionsChangedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        HoleDimensionsChangedEventArgsDescriptionMetadata.b(a);
        a.n("HoleDimensionsChangedEventArgs", () => new HoleDimensionsChangedEventArgsDescription());
        a.m("HoleDimensionsChangedEventArgs", HoleDimensionsChangedEventArgsDescriptionMetadata.a);
    }
}
HoleDimensionsChangedEventArgsDescriptionMetadata.$t = markType(HoleDimensionsChangedEventArgsDescriptionMetadata, 'HoleDimensionsChangedEventArgsDescriptionMetadata');
HoleDimensionsChangedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=HoleDimensionsChangedEventArgsDescriptionMetadata.js.map