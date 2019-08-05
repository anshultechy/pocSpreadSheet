/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { VerticalAnchoredCategorySeriesDescriptionMetadata } from "./VerticalAnchoredCategorySeriesDescriptionMetadata";
import { BarSeriesDescription } from "./BarSeriesDescription";
/**
 * @hidden
 */
export class BarSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (BarSeriesDescriptionMetadata.a == null) {
            BarSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BarSeriesDescriptionMetadata.c(a, BarSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        VerticalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    }
    static d(a) {
        BarSeriesDescriptionMetadata.b(a);
        a.n("BarSeries", () => new BarSeriesDescription());
        a.m("BarSeries", BarSeriesDescriptionMetadata.a);
    }
}
BarSeriesDescriptionMetadata.$t = markType(BarSeriesDescriptionMetadata, 'BarSeriesDescriptionMetadata');
BarSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=BarSeriesDescriptionMetadata.js.map