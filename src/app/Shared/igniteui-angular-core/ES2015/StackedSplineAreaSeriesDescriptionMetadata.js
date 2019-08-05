/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalStackedSeriesBaseDescriptionMetadata } from "./HorizontalStackedSeriesBaseDescriptionMetadata";
import { StackedSplineAreaSeriesDescription } from "./StackedSplineAreaSeriesDescription";
/**
 * @hidden
 */
export class StackedSplineAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (StackedSplineAreaSeriesDescriptionMetadata.a == null) {
            StackedSplineAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedSplineAreaSeriesDescriptionMetadata.c(a, StackedSplineAreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalStackedSeriesBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        StackedSplineAreaSeriesDescriptionMetadata.b(a);
        a.n("StackedSplineAreaSeries", () => new StackedSplineAreaSeriesDescription());
        a.m("StackedSplineAreaSeries", StackedSplineAreaSeriesDescriptionMetadata.a);
    }
}
StackedSplineAreaSeriesDescriptionMetadata.$t = markType(StackedSplineAreaSeriesDescriptionMetadata, 'StackedSplineAreaSeriesDescriptionMetadata');
StackedSplineAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=StackedSplineAreaSeriesDescriptionMetadata.js.map