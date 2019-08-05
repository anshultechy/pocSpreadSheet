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
var LiveGridFilterDialogDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LiveGridFilterDialogDescription, _super);
    function LiveGridFilterDialogDescription() {
        var _this = _super.call(this) || this;
        _this.f = false;
        _this.i = 0;
        _this.h = 0;
        _this.l = null;
        _this.n = null;
        _this.m = null;
        return _this;
    }
    LiveGridFilterDialogDescription.prototype.get_type = function () {
        return "LiveGridFilterDialog";
    };
    Object.defineProperty(LiveGridFilterDialogDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridFilterDialogDescription.prototype, "isAnimationEnabled", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("IsAnimationEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridFilterDialogDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridFilterDialogDescription.prototype, "actualPixelScalingRatio", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("ActualPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridFilterDialogDescription.prototype, "DialogOpeningRef", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("DialogOpeningRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridFilterDialogDescription.prototype, "FilterChangingRef", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("FilterChangingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridFilterDialogDescription.prototype, "FilterChangedRef", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("FilterChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    LiveGridFilterDialogDescription.$t = markType(LiveGridFilterDialogDescription, 'LiveGridFilterDialogDescription', Description.$);
    return LiveGridFilterDialogDescription;
}(Description));
export { LiveGridFilterDialogDescription };
//# sourceMappingURL=LiveGridFilterDialogDescription.js.map