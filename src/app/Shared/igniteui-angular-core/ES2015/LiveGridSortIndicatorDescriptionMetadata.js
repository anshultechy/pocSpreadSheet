/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LiveGridSortIndicatorDescription } from "./LiveGridSortIndicatorDescription";
/**
 * @hidden
 */
export class LiveGridSortIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (LiveGridSortIndicatorDescriptionMetadata.a == null) {
            LiveGridSortIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LiveGridSortIndicatorDescriptionMetadata.c(a, LiveGridSortIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("SortDirection", "ExportedType:string:ColumnSortDirection");
        b.item("IsAnimationEnabled", "Boolean");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
    }
    static d(a) {
        LiveGridSortIndicatorDescriptionMetadata.b(a);
        a.n("LiveGridSortIndicator", () => new LiveGridSortIndicatorDescription());
        a.m("LiveGridSortIndicator", LiveGridSortIndicatorDescriptionMetadata.a);
    }
}
LiveGridSortIndicatorDescriptionMetadata.$t = markType(LiveGridSortIndicatorDescriptionMetadata, 'LiveGridSortIndicatorDescriptionMetadata');
LiveGridSortIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=LiveGridSortIndicatorDescriptionMetadata.js.map