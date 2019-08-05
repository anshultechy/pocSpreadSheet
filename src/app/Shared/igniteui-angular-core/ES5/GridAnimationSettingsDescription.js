/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var GridAnimationSettingsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridAnimationSettingsDescription, _super);
    function GridAnimationSettingsDescription() {
        return _super.call(this) || this;
    }
    GridAnimationSettingsDescription.prototype.get_type = function () {
        return "GridAnimationSettings";
    };
    Object.defineProperty(GridAnimationSettingsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    GridAnimationSettingsDescription.$t = markType(GridAnimationSettingsDescription, 'GridAnimationSettingsDescription', Description.$);
    return GridAnimationSettingsDescription;
}(Description));
export { GridAnimationSettingsDescription };
//# sourceMappingURL=GridAnimationSettingsDescription.js.map