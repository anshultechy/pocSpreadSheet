/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { ScatterSplineSeriesDescription } from "./ScatterSplineSeriesDescription";
/**
 * @hidden
 */
export class ScatterSplineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (ScatterSplineSeriesDescriptionMetadata.a == null) {
            ScatterSplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterSplineSeriesDescriptionMetadata.c(a, ScatterSplineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ScatterBaseDescriptionMetadata.c(a, b);
        b.item("Stiffness", "Number:double");
    }
    static d(a) {
        ScatterSplineSeriesDescriptionMetadata.b(a);
        a.n("ScatterSplineSeries", () => new ScatterSplineSeriesDescription());
        a.m("ScatterSplineSeries", ScatterSplineSeriesDescriptionMetadata.a);
    }
}
ScatterSplineSeriesDescriptionMetadata.$t = markType(ScatterSplineSeriesDescriptionMetadata, 'ScatterSplineSeriesDescriptionMetadata');
ScatterSplineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=ScatterSplineSeriesDescriptionMetadata.js.map