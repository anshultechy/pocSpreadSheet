/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineSeriesBaseDescriptionMetadata } from "./SplineSeriesBaseDescriptionMetadata";
import { SplineSeriesDescription } from "./SplineSeriesDescription";
/**
 * @hidden
 */
export class SplineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (SplineSeriesDescriptionMetadata.a == null) {
            SplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineSeriesDescriptionMetadata.c(a, SplineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SplineSeriesBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        SplineSeriesDescriptionMetadata.b(a);
        a.n("SplineSeries", () => new SplineSeriesDescription());
        a.m("SplineSeries", SplineSeriesDescriptionMetadata.a);
    }
}
SplineSeriesDescriptionMetadata.$t = markType(SplineSeriesDescriptionMetadata, 'SplineSeriesDescriptionMetadata');
SplineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=SplineSeriesDescriptionMetadata.js.map