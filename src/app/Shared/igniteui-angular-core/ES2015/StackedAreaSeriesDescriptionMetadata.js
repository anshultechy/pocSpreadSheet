/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalStackedSeriesBaseDescriptionMetadata } from "./HorizontalStackedSeriesBaseDescriptionMetadata";
import { StackedAreaSeriesDescription } from "./StackedAreaSeriesDescription";
/**
 * @hidden
 */
export class StackedAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (StackedAreaSeriesDescriptionMetadata.a == null) {
            StackedAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedAreaSeriesDescriptionMetadata.c(a, StackedAreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalStackedSeriesBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        StackedAreaSeriesDescriptionMetadata.b(a);
        a.n("StackedAreaSeries", () => new StackedAreaSeriesDescription());
        a.m("StackedAreaSeries", StackedAreaSeriesDescriptionMetadata.a);
    }
}
StackedAreaSeriesDescriptionMetadata.$t = markType(StackedAreaSeriesDescriptionMetadata, 'StackedAreaSeriesDescriptionMetadata');
StackedAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=StackedAreaSeriesDescriptionMetadata.js.map