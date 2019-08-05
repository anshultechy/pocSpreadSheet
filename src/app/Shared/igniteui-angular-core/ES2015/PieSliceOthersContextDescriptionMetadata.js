/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PieSliceOthersContextDescription } from "./PieSliceOthersContextDescription";
/**
 * @hidden
 */
export class PieSliceOthersContextDescriptionMetadata extends Base {
    static b(a) {
        if (PieSliceOthersContextDescriptionMetadata.a == null) {
            PieSliceOthersContextDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PieSliceOthersContextDescriptionMetadata.c(a, PieSliceOthersContextDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("DataRef", "(w:Data,wf:Data)DataRef::IList");
    }
    static d(a) {
        PieSliceOthersContextDescriptionMetadata.b(a);
        a.n("PieSliceOthersContext", () => new PieSliceOthersContextDescription());
        a.m("PieSliceOthersContext", PieSliceOthersContextDescriptionMetadata.a);
    }
}
PieSliceOthersContextDescriptionMetadata.$t = markType(PieSliceOthersContextDescriptionMetadata, 'PieSliceOthersContextDescriptionMetadata');
PieSliceOthersContextDescriptionMetadata.a = null;
//# sourceMappingURL=PieSliceOthersContextDescriptionMetadata.js.map