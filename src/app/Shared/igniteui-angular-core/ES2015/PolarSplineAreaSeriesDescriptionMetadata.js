/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarSplineAreaSeriesDescription } from "./PolarSplineAreaSeriesDescription";
/**
 * @hidden
 */
export class PolarSplineAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (PolarSplineAreaSeriesDescriptionMetadata.a == null) {
            PolarSplineAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarSplineAreaSeriesDescriptionMetadata.c(a, PolarSplineAreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        PolarLineSeriesBaseDescriptionMetadata.c(a, b);
        b.item("Stiffness", "Number:double");
    }
    static d(a) {
        PolarSplineAreaSeriesDescriptionMetadata.b(a);
        a.n("PolarSplineAreaSeries", () => new PolarSplineAreaSeriesDescription());
        a.m("PolarSplineAreaSeries", PolarSplineAreaSeriesDescriptionMetadata.a);
    }
}
PolarSplineAreaSeriesDescriptionMetadata.$t = markType(PolarSplineAreaSeriesDescriptionMetadata, 'PolarSplineAreaSeriesDescriptionMetadata');
PolarSplineAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=PolarSplineAreaSeriesDescriptionMetadata.js.map