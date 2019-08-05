/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatRadialGaugeLabelEventArgsDescription } from "./FormatRadialGaugeLabelEventArgsDescription";
/**
 * @hidden
 */
export class FormatRadialGaugeLabelEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (FormatRadialGaugeLabelEventArgsDescriptionMetadata.a == null) {
            FormatRadialGaugeLabelEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FormatRadialGaugeLabelEventArgsDescriptionMetadata.c(a, FormatRadialGaugeLabelEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        FormatRadialGaugeLabelEventArgsDescriptionMetadata.b(a);
        a.n("FormatRadialGaugeLabelEventArgs", () => new FormatRadialGaugeLabelEventArgsDescription());
        a.m("FormatRadialGaugeLabelEventArgs", FormatRadialGaugeLabelEventArgsDescriptionMetadata.a);
    }
}
FormatRadialGaugeLabelEventArgsDescriptionMetadata.$t = markType(FormatRadialGaugeLabelEventArgsDescriptionMetadata, 'FormatRadialGaugeLabelEventArgsDescriptionMetadata');
FormatRadialGaugeLabelEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=FormatRadialGaugeLabelEventArgsDescriptionMetadata.js.map