/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RingDescriptionMetadata } from "./RingDescriptionMetadata";
import { RingSeriesBaseDescriptionMetadata } from "./RingSeriesBaseDescriptionMetadata";
import { RingSeriesDescription } from "./RingSeriesDescription";
/**
 * @hidden
 */
export class RingSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (RingSeriesDescriptionMetadata.a == null) {
            RingSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RingSeriesDescriptionMetadata.c(a, RingSeriesDescriptionMetadata.a);
            RingDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        RingSeriesBaseDescriptionMetadata.c(a, b);
        b.item("Ring", "ExportedType");
    }
    static d(a) {
        RingSeriesDescriptionMetadata.b(a);
        a.n("RingSeries", () => new RingSeriesDescription());
        a.m("RingSeries", RingSeriesDescriptionMetadata.a);
    }
}
RingSeriesDescriptionMetadata.$t = markType(RingSeriesDescriptionMetadata, 'RingSeriesDescriptionMetadata');
RingSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=RingSeriesDescriptionMetadata.js.map