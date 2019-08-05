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
var GridAnimationPhaseSettingsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridAnimationPhaseSettingsDescription, _super);
    function GridAnimationPhaseSettingsDescription() {
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.j = 0;
        _this.k = 0;
        _this.l = 0;
        _this.h = 0;
        _this.f = false;
        _this.r = null;
        return _this;
    }
    GridAnimationPhaseSettingsDescription.prototype.get_type = function () {
        return "GridAnimationPhaseSettings";
    };
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "durationMilliseconds", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("DurationMilliseconds");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "holdInitialMilliseconds", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("HoldInitialMilliseconds");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "perItemDelayMilliseconds", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("PerItemDelayMilliseconds");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "subItemDurationMilliseconds", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("SubItemDurationMilliseconds");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "desiredSubItemDurationMilliseconds", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("DesiredSubItemDurationMilliseconds");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "shouldItemsFinishSimultaneously", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ShouldItemsFinishSimultaneously");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAnimationPhaseSettingsDescription.prototype, "easingFunctionType", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("EasingFunctionType");
        },
        enumerable: true,
        configurable: true
    });
    GridAnimationPhaseSettingsDescription.$t = markType(GridAnimationPhaseSettingsDescription, 'GridAnimationPhaseSettingsDescription', Description.$);
    return GridAnimationPhaseSettingsDescription;
}(Description));
export { GridAnimationPhaseSettingsDescription };
//# sourceMappingURL=GridAnimationPhaseSettingsDescription.js.map