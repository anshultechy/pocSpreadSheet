/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalRangeCategorySeriesDescriptionMetadata } from "./HorizontalRangeCategorySeriesDescriptionMetadata";
import { RangeAreaSeriesDescription } from "./RangeAreaSeriesDescription";
/**
 * @hidden
 */
export class RangeAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (RangeAreaSeriesDescriptionMetadata.a == null) {
            RangeAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RangeAreaSeriesDescriptionMetadata.c(a, RangeAreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalRangeCategorySeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        RangeAreaSeriesDescriptionMetadata.b(a);
        a.n("RangeAreaSeries", () => new RangeAreaSeriesDescription());
        a.m("RangeAreaSeries", RangeAreaSeriesDescriptionMetadata.a);
    }
}
RangeAreaSeriesDescriptionMetadata.$t = markType(RangeAreaSeriesDescriptionMetadata, 'RangeAreaSeriesDescriptionMetadata');
RangeAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=RangeAreaSeriesDescriptionMetadata.js.map