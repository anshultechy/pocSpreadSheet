/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnchoredCategorySeriesDescriptionMetadata } from "./AnchoredCategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
export class HorizontalAnchoredCategorySeriesDescriptionMetadata extends Base {
    static b(a) {
        if (HorizontalAnchoredCategorySeriesDescriptionMetadata.a == null) {
            HorizontalAnchoredCategorySeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, HorizontalAnchoredCategorySeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
    }
    static d(a) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.b(a);
        a.m("HorizontalAnchoredCategorySeries", HorizontalAnchoredCategorySeriesDescriptionMetadata.a);
    }
}
HorizontalAnchoredCategorySeriesDescriptionMetadata.$t = markType(HorizontalAnchoredCategorySeriesDescriptionMetadata, 'HorizontalAnchoredCategorySeriesDescriptionMetadata');
HorizontalAnchoredCategorySeriesDescriptionMetadata.a = null;
//# sourceMappingURL=HorizontalAnchoredCategorySeriesDescriptionMetadata.js.map