/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalRangeCategorySeriesDescriptionMetadata } from "./HorizontalRangeCategorySeriesDescriptionMetadata";
import { RangeColumnSeriesDescription } from "./RangeColumnSeriesDescription";
/**
 * @hidden
 */
export class RangeColumnSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (RangeColumnSeriesDescriptionMetadata.a == null) {
            RangeColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RangeColumnSeriesDescriptionMetadata.c(a, RangeColumnSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalRangeCategorySeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    }
    static d(a) {
        RangeColumnSeriesDescriptionMetadata.b(a);
        a.n("RangeColumnSeries", () => new RangeColumnSeriesDescription());
        a.m("RangeColumnSeries", RangeColumnSeriesDescriptionMetadata.a);
    }
}
RangeColumnSeriesDescriptionMetadata.$t = markType(RangeColumnSeriesDescriptionMetadata, 'RangeColumnSeriesDescriptionMetadata');
RangeColumnSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=RangeColumnSeriesDescriptionMetadata.js.map