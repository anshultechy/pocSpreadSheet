/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarBaseDescriptionMetadata } from "./PolarBaseDescriptionMetadata";
import { PolarScatterSeriesDescription } from "./PolarScatterSeriesDescription";
/**
 * @hidden
 */
export class PolarScatterSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (PolarScatterSeriesDescriptionMetadata.a == null) {
            PolarScatterSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarScatterSeriesDescriptionMetadata.c(a, PolarScatterSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        PolarBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        PolarScatterSeriesDescriptionMetadata.b(a);
        a.n("PolarScatterSeries", () => new PolarScatterSeriesDescription());
        a.m("PolarScatterSeries", PolarScatterSeriesDescriptionMetadata.a);
    }
}
PolarScatterSeriesDescriptionMetadata.$t = markType(PolarScatterSeriesDescriptionMetadata, 'PolarScatterSeriesDescriptionMetadata');
PolarScatterSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=PolarScatterSeriesDescriptionMetadata.js.map