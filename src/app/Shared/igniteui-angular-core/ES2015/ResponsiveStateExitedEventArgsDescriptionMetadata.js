/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateExitedEventArgsDescription } from "./ResponsiveStateExitedEventArgsDescription";
/**
 * @hidden
 */
export class ResponsiveStateExitedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (ResponsiveStateExitedEventArgsDescriptionMetadata.a == null) {
            ResponsiveStateExitedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateExitedEventArgsDescriptionMetadata.c(a, ResponsiveStateExitedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        ResponsiveStateExitedEventArgsDescriptionMetadata.b(a);
        a.n("ResponsiveStateExitedEventArgs", () => new ResponsiveStateExitedEventArgsDescription());
        a.m("ResponsiveStateExitedEventArgs", ResponsiveStateExitedEventArgsDescriptionMetadata.a);
    }
}
ResponsiveStateExitedEventArgsDescriptionMetadata.$t = markType(ResponsiveStateExitedEventArgsDescriptionMetadata, 'ResponsiveStateExitedEventArgsDescriptionMetadata');
ResponsiveStateExitedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=ResponsiveStateExitedEventArgsDescriptionMetadata.js.map