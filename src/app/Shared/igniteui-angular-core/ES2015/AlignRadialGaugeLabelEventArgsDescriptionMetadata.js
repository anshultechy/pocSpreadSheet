/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatRadialGaugeLabelEventArgsDescriptionMetadata } from "./FormatRadialGaugeLabelEventArgsDescriptionMetadata";
import { AlignRadialGaugeLabelEventArgsDescription } from "./AlignRadialGaugeLabelEventArgsDescription";
/**
 * @hidden
 */
export class AlignRadialGaugeLabelEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (AlignRadialGaugeLabelEventArgsDescriptionMetadata.a == null) {
            AlignRadialGaugeLabelEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AlignRadialGaugeLabelEventArgsDescriptionMetadata.c(a, AlignRadialGaugeLabelEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FormatRadialGaugeLabelEventArgsDescriptionMetadata.c(a, b);
    }
    static d(a) {
        AlignRadialGaugeLabelEventArgsDescriptionMetadata.b(a);
        a.n("AlignRadialGaugeLabelEventArgs", () => new AlignRadialGaugeLabelEventArgsDescription());
        a.m("AlignRadialGaugeLabelEventArgs", AlignRadialGaugeLabelEventArgsDescriptionMetadata.a);
    }
}
AlignRadialGaugeLabelEventArgsDescriptionMetadata.$t = markType(AlignRadialGaugeLabelEventArgsDescriptionMetadata, 'AlignRadialGaugeLabelEventArgsDescriptionMetadata');
AlignRadialGaugeLabelEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=AlignRadialGaugeLabelEventArgsDescriptionMetadata.js.map