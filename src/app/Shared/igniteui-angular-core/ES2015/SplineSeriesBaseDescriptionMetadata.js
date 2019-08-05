/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
export class SplineSeriesBaseDescriptionMetadata extends Base {
    static b(a) {
        if (SplineSeriesBaseDescriptionMetadata.a == null) {
            SplineSeriesBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineSeriesBaseDescriptionMetadata.c(a, SplineSeriesBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("SplineType", "ExportedType:string:SplineType");
    }
    static d(a) {
        SplineSeriesBaseDescriptionMetadata.b(a);
        a.m("SplineSeriesBase", SplineSeriesBaseDescriptionMetadata.a);
    }
}
SplineSeriesBaseDescriptionMetadata.$t = markType(SplineSeriesBaseDescriptionMetadata, 'SplineSeriesBaseDescriptionMetadata');
SplineSeriesBaseDescriptionMetadata.a = null;
//# sourceMappingURL=SplineSeriesBaseDescriptionMetadata.js.map