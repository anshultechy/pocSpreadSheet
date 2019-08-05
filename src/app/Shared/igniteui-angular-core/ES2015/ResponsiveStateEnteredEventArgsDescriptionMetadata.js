/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateEnteredEventArgsDescription } from "./ResponsiveStateEnteredEventArgsDescription";
/**
 * @hidden
 */
export class ResponsiveStateEnteredEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (ResponsiveStateEnteredEventArgsDescriptionMetadata.a == null) {
            ResponsiveStateEnteredEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateEnteredEventArgsDescriptionMetadata.c(a, ResponsiveStateEnteredEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        ResponsiveStateEnteredEventArgsDescriptionMetadata.b(a);
        a.n("ResponsiveStateEnteredEventArgs", () => new ResponsiveStateEnteredEventArgsDescription());
        a.m("ResponsiveStateEnteredEventArgs", ResponsiveStateEnteredEventArgsDescriptionMetadata.a);
    }
}
ResponsiveStateEnteredEventArgsDescriptionMetadata.$t = markType(ResponsiveStateEnteredEventArgsDescriptionMetadata, 'ResponsiveStateEnteredEventArgsDescriptionMetadata');
ResponsiveStateEnteredEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=ResponsiveStateEnteredEventArgsDescriptionMetadata.js.map