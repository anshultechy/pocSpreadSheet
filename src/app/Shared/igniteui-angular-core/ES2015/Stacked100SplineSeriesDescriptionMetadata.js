/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSplineSeriesDescriptionMetadata } from "./StackedSplineSeriesDescriptionMetadata";
import { Stacked100SplineSeriesDescription } from "./Stacked100SplineSeriesDescription";
/**
 * @hidden
 */
export class Stacked100SplineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (Stacked100SplineSeriesDescriptionMetadata.a == null) {
            Stacked100SplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100SplineSeriesDescriptionMetadata.c(a, Stacked100SplineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StackedSplineSeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        Stacked100SplineSeriesDescriptionMetadata.b(a);
        a.n("Stacked100SplineSeries", () => new Stacked100SplineSeriesDescription());
        a.m("Stacked100SplineSeries", Stacked100SplineSeriesDescriptionMetadata.a);
    }
}
Stacked100SplineSeriesDescriptionMetadata.$t = markType(Stacked100SplineSeriesDescriptionMetadata, 'Stacked100SplineSeriesDescriptionMetadata');
Stacked100SplineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=Stacked100SplineSeriesDescriptionMetadata.js.map