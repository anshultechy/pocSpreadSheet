/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridAnimationSettingsDescription } from "./GridAnimationSettingsDescription";
/**
 * @hidden
 */
var GridAnimationSettingsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridAnimationSettingsDescriptionMetadata, _super);
    function GridAnimationSettingsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridAnimationSettingsDescriptionMetadata.b = function (a) {
        if (GridAnimationSettingsDescriptionMetadata.a == null) {
            GridAnimationSettingsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridAnimationSettingsDescriptionMetadata.c(a, GridAnimationSettingsDescriptionMetadata.a);
        }
    };
    GridAnimationSettingsDescriptionMetadata.c = function (a, b) {
    };
    GridAnimationSettingsDescriptionMetadata.d = function (a) {
        GridAnimationSettingsDescriptionMetadata.b(a);
        a.n("GridAnimationSettings", function () { return new GridAnimationSettingsDescription(); });
        a.m("GridAnimationSettings", GridAnimationSettingsDescriptionMetadata.a);
    };
    GridAnimationSettingsDescriptionMetadata.$t = markType(GridAnimationSettingsDescriptionMetadata, 'GridAnimationSettingsDescriptionMetadata');
    GridAnimationSettingsDescriptionMetadata.a = null;
    return GridAnimationSettingsDescriptionMetadata;
}(Base));
export { GridAnimationSettingsDescriptionMetadata };
//# sourceMappingURL=GridAnimationSettingsDescriptionMetadata.js.map