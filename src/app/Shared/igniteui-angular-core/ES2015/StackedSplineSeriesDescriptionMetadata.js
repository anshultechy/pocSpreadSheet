/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalStackedSeriesBaseDescriptionMetadata } from "./HorizontalStackedSeriesBaseDescriptionMetadata";
import { StackedSplineSeriesDescription } from "./StackedSplineSeriesDescription";
/**
 * @hidden
 */
export class StackedSplineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (StackedSplineSeriesDescriptionMetadata.a == null) {
            StackedSplineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedSplineSeriesDescriptionMetadata.c(a, StackedSplineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalStackedSeriesBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        StackedSplineSeriesDescriptionMetadata.b(a);
        a.n("StackedSplineSeries", () => new StackedSplineSeriesDescription());
        a.m("StackedSplineSeries", StackedSplineSeriesDescriptionMetadata.a);
    }
}
StackedSplineSeriesDescriptionMetadata.$t = markType(StackedSplineSeriesDescriptionMetadata, 'StackedSplineSeriesDescriptionMetadata');
StackedSplineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=StackedSplineSeriesDescriptionMetadata.js.map