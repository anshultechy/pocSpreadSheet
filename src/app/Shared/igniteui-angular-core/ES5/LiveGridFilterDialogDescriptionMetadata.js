/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogOpeningEventArgsDescriptionMetadata } from "./GridFilterDialogOpeningEventArgsDescriptionMetadata";
import { GridFilterDialogFilterChangeEventArgsDescriptionMetadata } from "./GridFilterDialogFilterChangeEventArgsDescriptionMetadata";
import { LiveGridFilterDialogDescription } from "./LiveGridFilterDialogDescription";
/**
 * @hidden
 */
var LiveGridFilterDialogDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LiveGridFilterDialogDescriptionMetadata, _super);
    function LiveGridFilterDialogDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiveGridFilterDialogDescriptionMetadata.b = function (a) {
        if (LiveGridFilterDialogDescriptionMetadata.a == null) {
            LiveGridFilterDialogDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LiveGridFilterDialogDescriptionMetadata.c(a, LiveGridFilterDialogDescriptionMetadata.a);
            GridFilterDialogOpeningEventArgsDescriptionMetadata.d(a);
            GridFilterDialogFilterChangeEventArgsDescriptionMetadata.d(a);
        }
    };
    LiveGridFilterDialogDescriptionMetadata.c = function (a, b) {
        b.item("IsAnimationEnabled", "Boolean");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("DialogOpeningRef", "EventRef::dialogOpening");
        b.item("FilterChangingRef", "EventRef::filterChanging");
        b.item("FilterChangedRef", "EventRef::filterChanged");
    };
    LiveGridFilterDialogDescriptionMetadata.d = function (a) {
        LiveGridFilterDialogDescriptionMetadata.b(a);
        a.n("LiveGridFilterDialog", function () { return new LiveGridFilterDialogDescription(); });
        a.m("LiveGridFilterDialog", LiveGridFilterDialogDescriptionMetadata.a);
    };
    LiveGridFilterDialogDescriptionMetadata.$t = markType(LiveGridFilterDialogDescriptionMetadata, 'LiveGridFilterDialogDescriptionMetadata');
    LiveGridFilterDialogDescriptionMetadata.a = null;
    return LiveGridFilterDialogDescriptionMetadata;
}(Base));
export { LiveGridFilterDialogDescriptionMetadata };
//# sourceMappingURL=LiveGridFilterDialogDescriptionMetadata.js.map