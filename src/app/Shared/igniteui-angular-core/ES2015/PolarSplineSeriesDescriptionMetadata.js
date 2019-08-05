/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarSplineSeriesDescription } from "./PolarSplineSeriesDescription";
/**
 * @hidden
 */
export class PolarSplineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (PolarSplineSeriesDescriptionMetadata.a == null) {
            PolarSplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarSplineSeriesDescriptionMetadata.c(a, PolarSplineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        PolarLineSeriesBaseDescriptionMetadata.c(a, b);
        b.item("Stiffness", "Number:double");
    }
    static d(a) {
        PolarSplineSeriesDescriptionMetadata.b(a);
        a.n("PolarSplineSeries", () => new PolarSplineSeriesDescription());
        a.m("PolarSplineSeries", PolarSplineSeriesDescriptionMetadata.a);
    }
}
PolarSplineSeriesDescriptionMetadata.$t = markType(PolarSplineSeriesDescriptionMetadata, 'PolarSplineSeriesDescriptionMetadata');
PolarSplineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=PolarSplineSeriesDescriptionMetadata.js.map