/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogOpeningEventArgsDescriptionMetadata } from "./GridFilterDialogOpeningEventArgsDescriptionMetadata";
import { GridFilterDialogFilterChangeEventArgsDescriptionMetadata } from "./GridFilterDialogFilterChangeEventArgsDescriptionMetadata";
import { LiveGridFilterDialogDescription } from "./LiveGridFilterDialogDescription";
/**
 * @hidden
 */
export class LiveGridFilterDialogDescriptionMetadata extends Base {
    static b(a) {
        if (LiveGridFilterDialogDescriptionMetadata.a == null) {
            LiveGridFilterDialogDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LiveGridFilterDialogDescriptionMetadata.c(a, LiveGridFilterDialogDescriptionMetadata.a);
            GridFilterDialogOpeningEventArgsDescriptionMetadata.d(a);
            GridFilterDialogFilterChangeEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("IsAnimationEnabled", "Boolean");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("DialogOpeningRef", "EventRef::dialogOpening");
        b.item("FilterChangingRef", "EventRef::filterChanging");
        b.item("FilterChangedRef", "EventRef::filterChanged");
    }
    static d(a) {
        LiveGridFilterDialogDescriptionMetadata.b(a);
        a.n("LiveGridFilterDialog", () => new LiveGridFilterDialogDescription());
        a.m("LiveGridFilterDialog", LiveGridFilterDialogDescriptionMetadata.a);
    }
}
LiveGridFilterDialogDescriptionMetadata.$t = markType(LiveGridFilterDialogDescriptionMetadata, 'LiveGridFilterDialogDescriptionMetadata');
LiveGridFilterDialogDescriptionMetadata.a = null;
//# sourceMappingURL=LiveGridFilterDialogDescriptionMetadata.js.map