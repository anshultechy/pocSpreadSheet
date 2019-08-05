/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridColumnAnimationSettingsDescription } from "./GridColumnAnimationSettingsDescription";
/**
 * @hidden
 */
var GridColumnAnimationSettingsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridColumnAnimationSettingsDescriptionMetadata, _super);
    function GridColumnAnimationSettingsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridColumnAnimationSettingsDescriptionMetadata.b = function (a) {
        if (GridColumnAnimationSettingsDescriptionMetadata.a == null) {
            GridColumnAnimationSettingsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridColumnAnimationSettingsDescriptionMetadata.c(a, GridColumnAnimationSettingsDescriptionMetadata.a);
        }
    };
    GridColumnAnimationSettingsDescriptionMetadata.c = function (a, b) {
    };
    GridColumnAnimationSettingsDescriptionMetadata.d = function (a) {
        GridColumnAnimationSettingsDescriptionMetadata.b(a);
        a.n("GridColumnAnimationSettings", function () { return new GridColumnAnimationSettingsDescription(); });
        a.m("GridColumnAnimationSettings", GridColumnAnimationSettingsDescriptionMetadata.a);
    };
    GridColumnAnimationSettingsDescriptionMetadata.$t = markType(GridColumnAnimationSettingsDescriptionMetadata, 'GridColumnAnimationSettingsDescriptionMetadata');
    GridColumnAnimationSettingsDescriptionMetadata.a = null;
    return GridColumnAnimationSettingsDescriptionMetadata;
}(Base));
export { GridColumnAnimationSettingsDescriptionMetadata };
//# sourceMappingURL=GridColumnAnimationSettingsDescriptionMetadata.js.map