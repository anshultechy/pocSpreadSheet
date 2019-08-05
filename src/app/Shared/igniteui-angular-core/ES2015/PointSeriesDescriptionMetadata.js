/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { PointSeriesDescription } from "./PointSeriesDescription";
/**
 * @hidden
 */
export class PointSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (PointSeriesDescriptionMetadata.a == null) {
            PointSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PointSeriesDescriptionMetadata.c(a, PointSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        PointSeriesDescriptionMetadata.b(a);
        a.n("PointSeries", () => new PointSeriesDescription());
        a.m("PointSeries", PointSeriesDescriptionMetadata.a);
    }
}
PointSeriesDescriptionMetadata.$t = markType(PointSeriesDescriptionMetadata, 'PointSeriesDescriptionMetadata');
PointSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=PointSeriesDescriptionMetadata.js.map