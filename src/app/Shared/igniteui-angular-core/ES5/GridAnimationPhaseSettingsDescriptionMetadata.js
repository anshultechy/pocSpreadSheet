/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridAnimationPhaseSettingsDescription } from "./GridAnimationPhaseSettingsDescription";
/**
 * @hidden
 */
var GridAnimationPhaseSettingsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridAnimationPhaseSettingsDescriptionMetadata, _super);
    function GridAnimationPhaseSettingsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridAnimationPhaseSettingsDescriptionMetadata.b = function (a) {
        if (GridAnimationPhaseSettingsDescriptionMetadata.a == null) {
            GridAnimationPhaseSettingsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridAnimationPhaseSettingsDescriptionMetadata.c(a, GridAnimationPhaseSettingsDescriptionMetadata.a);
        }
    };
    GridAnimationPhaseSettingsDescriptionMetadata.c = function (a, b) {
        b.item("DurationMilliseconds", "Number:int");
        b.item("HoldInitialMilliseconds", "Number:int");
        b.item("PerItemDelayMilliseconds", "Number:int");
        b.item("SubItemDurationMilliseconds", "Number:int");
        b.item("DesiredSubItemDurationMilliseconds", "Number:int");
        b.item("ShouldItemsFinishSimultaneously", "Boolean");
        b.item("EasingFunctionType", "ExportedType:string:GridEasingFunctionType");
    };
    GridAnimationPhaseSettingsDescriptionMetadata.d = function (a) {
        GridAnimationPhaseSettingsDescriptionMetadata.b(a);
        a.n("GridAnimationPhaseSettings", function () { return new GridAnimationPhaseSettingsDescription(); });
        a.m("GridAnimationPhaseSettings", GridAnimationPhaseSettingsDescriptionMetadata.a);
    };
    GridAnimationPhaseSettingsDescriptionMetadata.$t = markType(GridAnimationPhaseSettingsDescriptionMetadata, 'GridAnimationPhaseSettingsDescriptionMetadata');
    GridAnimationPhaseSettingsDescriptionMetadata.a = null;
    return GridAnimationPhaseSettingsDescriptionMetadata;
}(Base));
export { GridAnimationPhaseSettingsDescriptionMetadata };
//# sourceMappingURL=GridAnimationPhaseSettingsDescriptionMetadata.js.map