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
var LiveGridSortIndicatorDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LiveGridSortIndicatorDescription, _super);
    function LiveGridSortIndicatorDescription() {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.f = false;
        _this.i = 0;
        _this.h = 0;
        return _this;
    }
    LiveGridSortIndicatorDescription.prototype.get_type = function () {
        return "LiveGridSortIndicator";
    };
    Object.defineProperty(LiveGridSortIndicatorDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridSortIndicatorDescription.prototype, "sortDirection", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("SortDirection");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridSortIndicatorDescription.prototype, "isAnimationEnabled", {
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
    Object.defineProperty(LiveGridSortIndicatorDescription.prototype, "pixelScalingRatio", {
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
    Object.defineProperty(LiveGridSortIndicatorDescription.prototype, "actualPixelScalingRatio", {
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
    LiveGridSortIndicatorDescription.$t = markType(LiveGridSortIndicatorDescription, 'LiveGridSortIndicatorDescription', Description.$);
    return LiveGridSortIndicatorDescription;
}(Description));
export { LiveGridSortIndicatorDescription };
//# sourceMappingURL=LiveGridSortIndicatorDescription.js.map