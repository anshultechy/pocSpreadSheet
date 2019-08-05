/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { ScatterSeriesDescription } from "./ScatterSeriesDescription";
/**
 * @hidden
 */
export class ScatterSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (ScatterSeriesDescriptionMetadata.a == null) {
            ScatterSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterSeriesDescriptionMetadata.c(a, ScatterSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ScatterBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        ScatterSeriesDescriptionMetadata.b(a);
        a.n("ScatterSeries", () => new ScatterSeriesDescription());
        a.m("ScatterSeries", ScatterSeriesDescriptionMetadata.a);
    }
}
ScatterSeriesDescriptionMetadata.$t = markType(ScatterSeriesDescriptionMetadata, 'ScatterSeriesDescriptionMetadata');
ScatterSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=ScatterSeriesDescriptionMetadata.js.map