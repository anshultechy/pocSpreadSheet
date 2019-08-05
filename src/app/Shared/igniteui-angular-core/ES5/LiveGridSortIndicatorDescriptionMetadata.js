/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LiveGridSortIndicatorDescription } from "./LiveGridSortIndicatorDescription";
/**
 * @hidden
 */
var LiveGridSortIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LiveGridSortIndicatorDescriptionMetadata, _super);
    function LiveGridSortIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiveGridSortIndicatorDescriptionMetadata.b = function (a) {
        if (LiveGridSortIndicatorDescriptionMetadata.a == null) {
            LiveGridSortIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LiveGridSortIndicatorDescriptionMetadata.c(a, LiveGridSortIndicatorDescriptionMetadata.a);
        }
    };
    LiveGridSortIndicatorDescriptionMetadata.c = function (a, b) {
        b.item("SortDirection", "ExportedType:string:ColumnSortDirection");
        b.item("IsAnimationEnabled", "Boolean");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
    };
    LiveGridSortIndicatorDescriptionMetadata.d = function (a) {
        LiveGridSortIndicatorDescriptionMetadata.b(a);
        a.n("LiveGridSortIndicator", function () { return new LiveGridSortIndicatorDescription(); });
        a.m("LiveGridSortIndicator", LiveGridSortIndicatorDescriptionMetadata.a);
    };
    LiveGridSortIndicatorDescriptionMetadata.$t = markType(LiveGridSortIndicatorDescriptionMetadata, 'LiveGridSortIndicatorDescriptionMetadata');
    LiveGridSortIndicatorDescriptionMetadata.a = null;
    return LiveGridSortIndicatorDescriptionMetadata;
}(Base));
export { LiveGridSortIndicatorDescriptionMetadata };
//# sourceMappingURL=LiveGridSortIndicatorDescriptionMetadata.js.map