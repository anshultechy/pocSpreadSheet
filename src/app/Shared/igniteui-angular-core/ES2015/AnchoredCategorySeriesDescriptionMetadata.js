/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategorySeriesDescriptionMetadata } from "./CategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
export class AnchoredCategorySeriesDescriptionMetadata extends Base {
    static b(a) {
        if (AnchoredCategorySeriesDescriptionMetadata.a == null) {
            AnchoredCategorySeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AnchoredCategorySeriesDescriptionMetadata.c(a, AnchoredCategorySeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CategorySeriesDescriptionMetadata.c(a, b);
        b.item("ValueMemberPath", "String");
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineBrush", "Brush");
        b.item("ActualTrendLineBrush", "Brush");
        b.item("TrendLineThickness", "Number:double");
        b.item("TrendLinePeriod", "Number:int");
        b.item("MarkerCollisionAvoidance", "ExportedType:string:CategorySeriesMarkerCollisionAvoidance");
        b.item("ConsolidatedItemHitTestBehavior", "ExportedType:string:ConsolidatedItemHitTestBehavior");
    }
    static d(a) {
        AnchoredCategorySeriesDescriptionMetadata.b(a);
        a.m("AnchoredCategorySeries", AnchoredCategorySeriesDescriptionMetadata.a);
    }
}
AnchoredCategorySeriesDescriptionMetadata.$t = markType(AnchoredCategorySeriesDescriptionMetadata, 'AnchoredCategorySeriesDescriptionMetadata');
AnchoredCategorySeriesDescriptionMetadata.a = null;
//# sourceMappingURL=AnchoredCategorySeriesDescriptionMetadata.js.map