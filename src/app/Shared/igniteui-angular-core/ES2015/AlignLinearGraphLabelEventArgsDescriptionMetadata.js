/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatLinearGraphLabelEventArgsDescriptionMetadata } from "./FormatLinearGraphLabelEventArgsDescriptionMetadata";
import { AlignLinearGraphLabelEventArgsDescription } from "./AlignLinearGraphLabelEventArgsDescription";
/**
 * @hidden
 */
export class AlignLinearGraphLabelEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (AlignLinearGraphLabelEventArgsDescriptionMetadata.a == null) {
            AlignLinearGraphLabelEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AlignLinearGraphLabelEventArgsDescriptionMetadata.c(a, AlignLinearGraphLabelEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FormatLinearGraphLabelEventArgsDescriptionMetadata.c(a, b);
    }
    static d(a) {
        AlignLinearGraphLabelEventArgsDescriptionMetadata.b(a);
        a.n("AlignLinearGraphLabelEventArgs", () => new AlignLinearGraphLabelEventArgsDescription());
        a.m("AlignLinearGraphLabelEventArgs", AlignLinearGraphLabelEventArgsDescriptionMetadata.a);
    }
}
AlignLinearGraphLabelEventArgsDescriptionMetadata.$t = markType(AlignLinearGraphLabelEventArgsDescriptionMetadata, 'AlignLinearGraphLabelEventArgsDescriptionMetadata');
AlignLinearGraphLabelEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=AlignLinearGraphLabelEventArgsDescriptionMetadata.js.map