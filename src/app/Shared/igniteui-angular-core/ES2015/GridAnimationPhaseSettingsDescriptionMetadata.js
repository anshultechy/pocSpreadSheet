/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridAnimationPhaseSettingsDescription } from "./GridAnimationPhaseSettingsDescription";
/**
 * @hidden
 */
export class GridAnimationPhaseSettingsDescriptionMetadata extends Base {
    static b(a) {
        if (GridAnimationPhaseSettingsDescriptionMetadata.a == null) {
            GridAnimationPhaseSettingsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridAnimationPhaseSettingsDescriptionMetadata.c(a, GridAnimationPhaseSettingsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("DurationMilliseconds", "Number:int");
        b.item("HoldInitialMilliseconds", "Number:int");
        b.item("PerItemDelayMilliseconds", "Number:int");
        b.item("SubItemDurationMilliseconds", "Number:int");
        b.item("DesiredSubItemDurationMilliseconds", "Number:int");
        b.item("ShouldItemsFinishSimultaneously", "Boolean");
        b.item("EasingFunctionType", "ExportedType:string:GridEasingFunctionType");
    }
    static d(a) {
        GridAnimationPhaseSettingsDescriptionMetadata.b(a);
        a.n("GridAnimationPhaseSettings", () => new GridAnimationPhaseSettingsDescription());
        a.m("GridAnimationPhaseSettings", GridAnimationPhaseSettingsDescriptionMetadata.a);
    }
}
GridAnimationPhaseSettingsDescriptionMetadata.$t = markType(GridAnimationPhaseSettingsDescriptionMetadata, 'GridAnimationPhaseSettingsDescriptionMetadata');
GridAnimationPhaseSettingsDescriptionMetadata.a = null;
//# sourceMappingURL=GridAnimationPhaseSettingsDescriptionMetadata.js.map