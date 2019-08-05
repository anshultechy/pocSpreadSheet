/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataContextDescriptionMetadata } from "./DataContextDescriptionMetadata";
import { PieSliceDataContextDescription } from "./PieSliceDataContextDescription";
/**
 * @hidden
 */
export class PieSliceDataContextDescriptionMetadata extends Base {
    static b(a) {
        if (PieSliceDataContextDescriptionMetadata.a == null) {
            PieSliceDataContextDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PieSliceDataContextDescriptionMetadata.c(a, PieSliceDataContextDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        DataContextDescriptionMetadata.c(a, b);
        b.item("PercentValue", "Number:double");
        b.item("IsOthersSlice", "Boolean");
    }
    static d(a) {
        PieSliceDataContextDescriptionMetadata.b(a);
        a.n("PieSliceDataContext", () => new PieSliceDataContextDescription());
        a.m("PieSliceDataContext", PieSliceDataContextDescriptionMetadata.a);
    }
}
PieSliceDataContextDescriptionMetadata.$t = markType(PieSliceDataContextDescriptionMetadata, 'PieSliceDataContextDescriptionMetadata');
PieSliceDataContextDescriptionMetadata.a = null;
//# sourceMappingURL=PieSliceDataContextDescriptionMetadata.js.map