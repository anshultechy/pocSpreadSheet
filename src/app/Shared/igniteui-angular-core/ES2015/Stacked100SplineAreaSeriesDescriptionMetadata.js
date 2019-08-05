/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSplineAreaSeriesDescriptionMetadata } from "./StackedSplineAreaSeriesDescriptionMetadata";
import { Stacked100SplineAreaSeriesDescription } from "./Stacked100SplineAreaSeriesDescription";
/**
 * @hidden
 */
export class Stacked100SplineAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (Stacked100SplineAreaSeriesDescriptionMetadata.a == null) {
            Stacked100SplineAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100SplineAreaSeriesDescriptionMetadata.c(a, Stacked100SplineAreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StackedSplineAreaSeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        Stacked100SplineAreaSeriesDescriptionMetadata.b(a);
        a.n("Stacked100SplineAreaSeries", () => new Stacked100SplineAreaSeriesDescription());
        a.m("Stacked100SplineAreaSeries", Stacked100SplineAreaSeriesDescriptionMetadata.a);
    }
}
Stacked100SplineAreaSeriesDescriptionMetadata.$t = markType(Stacked100SplineAreaSeriesDescriptionMetadata, 'Stacked100SplineAreaSeriesDescriptionMetadata');
Stacked100SplineAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=Stacked100SplineAreaSeriesDescriptionMetadata.js.map