/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsivePhaseDescription } from "./ResponsivePhaseDescription";
/**
 * @hidden
 */
export class ResponsivePhaseDescriptionMetadata extends Base {
    static b(a) {
        if (ResponsivePhaseDescriptionMetadata.a == null) {
            ResponsivePhaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsivePhaseDescriptionMetadata.c(a, ResponsivePhaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("Name", "String");
        b.item("DelayMilliseconds", "Number:int");
    }
    static d(a) {
        ResponsivePhaseDescriptionMetadata.b(a);
        a.n("ResponsivePhase", () => new ResponsivePhaseDescription());
        a.m("ResponsivePhase", ResponsivePhaseDescriptionMetadata.a);
    }
}
ResponsivePhaseDescriptionMetadata.$t = markType(ResponsivePhaseDescriptionMetadata, 'ResponsivePhaseDescriptionMetadata');
ResponsivePhaseDescriptionMetadata.a = null;
//# sourceMappingURL=ResponsivePhaseDescriptionMetadata.js.map