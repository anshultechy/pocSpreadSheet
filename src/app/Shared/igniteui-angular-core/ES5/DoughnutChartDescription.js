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
var DoughnutChartDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DoughnutChartDescription, _super);
    function DoughnutChartDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.x = null;
        _this.i = false;
        _this.j = false;
        _this.h = false;
        _this.o = 0;
        _this.z = null;
        _this.aa = null;
        _this.r = 0;
        _this.q = 0;
        _this.p = 0;
        _this.n = 0;
        _this.ab = null;
        _this.y = null;
        return _this;
    }
    Object.defineProperty(DoughnutChartDescription.prototype, "series", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "background", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    DoughnutChartDescription.prototype.get_type = function () {
        return "DoughnutChart";
    };
    Object.defineProperty(DoughnutChartDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "allowSliceSelection", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("AllowSliceSelection");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "isSurfaceInteractionDisabled", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("IsSurfaceInteractionDisabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "allowSliceExplosion", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("AllowSliceExplosion");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "innerExtent", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("InnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "selectedSliceFill", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("SelectedSliceFill");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "selectedSliceStroke", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("SelectedSliceStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "selectedSliceStrokeThickness", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("SelectedSliceStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "selectedSliceOpacity", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("SelectedSliceOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "actualPixelScalingRatio", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("ActualPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "SliceClickRef", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("SliceClickRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoughnutChartDescription.prototype, "HoleDimensionsChangedRef", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("HoleDimensionsChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    DoughnutChartDescription.$t = markType(DoughnutChartDescription, 'DoughnutChartDescription', Description.$);
    return DoughnutChartDescription;
}(Description));
export { DoughnutChartDescription };
//# sourceMappingURL=DoughnutChartDescription.js.map