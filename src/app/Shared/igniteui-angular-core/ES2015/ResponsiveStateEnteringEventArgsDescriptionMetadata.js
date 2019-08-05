/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateEnteringEventArgsDescription } from "./ResponsiveStateEnteringEventArgsDescription";
/**
 * @hidden
 */
export class ResponsiveStateEnteringEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (ResponsiveStateEnteringEventArgsDescriptionMetadata.a == null) {
            ResponsiveStateEnteringEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateEnteringEventArgsDescriptionMetadata.c(a, ResponsiveStateEnteringEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        ResponsiveStateEnteringEventArgsDescriptionMetadata.b(a);
        a.n("ResponsiveStateEnteringEventArgs", () => new ResponsiveStateEnteringEventArgsDescription());
        a.m("ResponsiveStateEnteringEventArgs", ResponsiveStateEnteringEventArgsDescriptionMetadata.a);
    }
}
ResponsiveStateEnteringEventArgsDescriptionMetadata.$t = markType(ResponsiveStateEnteringEventArgsDescriptionMetadata, 'ResponsiveStateEnteringEventArgsDescriptionMetadata');
ResponsiveStateEnteringEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=ResponsiveStateEnteringEventArgsDescriptionMetadata.js.map