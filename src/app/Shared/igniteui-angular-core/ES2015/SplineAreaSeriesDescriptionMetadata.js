/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineSeriesBaseDescriptionMetadata } from "./SplineSeriesBaseDescriptionMetadata";
import { SplineAreaSeriesDescription } from "./SplineAreaSeriesDescription";
/**
 * @hidden
 */
export class SplineAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (SplineAreaSeriesDescriptionMetadata.a == null) {
            SplineAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineAreaSeriesDescriptionMetadata.c(a, SplineAreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SplineSeriesBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        SplineAreaSeriesDescriptionMetadata.b(a);
        a.n("SplineAreaSeries", () => new SplineAreaSeriesDescription());
        a.m("SplineAreaSeries", SplineAreaSeriesDescriptionMetadata.a);
    }
}
SplineAreaSeriesDescriptionMetadata.$t = markType(SplineAreaSeriesDescriptionMetadata, 'SplineAreaSeriesDescriptionMetadata');
SplineAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=SplineAreaSeriesDescriptionMetadata.js.map