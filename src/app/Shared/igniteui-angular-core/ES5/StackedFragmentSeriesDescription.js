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
var StackedFragmentSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedFragmentSeriesDescription, _super);
    function StackedFragmentSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.a4 = null;
        _this.at = null;
        _this.h = false;
        _this.f = false;
        _this.z = 0;
        _this.r = 0;
        _this.bg = null;
        _this.a2 = null;
        _this.i = false;
        _this.g = false;
        _this.aa = 0;
        _this.s = 0;
        _this.ab = 0;
        _this.t = 0;
        _this.a5 = null;
        _this.au = null;
        _this.a6 = null;
        _this.av = null;
        _this.a7 = null;
        _this.aw = null;
        _this.a8 = null;
        _this.ax = null;
        _this.a9 = null;
        _this.ay = null;
        _this.ba = null;
        _this.az = null;
        _this.bb = null;
        _this.a0 = null;
        _this.bc = null;
        _this.w = 0;
        _this.o = 0;
        _this.bd = null;
        _this.a1 = null;
        _this.v = 0;
        _this.n = 0;
        _this.x = 0;
        _this.p = 0;
        _this.y = 0;
        _this.q = 0;
        _this.ac = 0;
        _this.u = 0;
        _this.bh = null;
        _this.bi = null;
        _this.bj = null;
        _this.a3 = null;
        _this.be = null;
        _this.bf = null;
        return _this;
    }
    StackedFragmentSeriesDescription.prototype.get_type = function () {
        return "StackedFragmentSeries";
    };
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "brush", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("Brush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualBrush", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("ActualBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "isDropShadowEnabled", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("IsDropShadowEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualIsDropShadowEnabled", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ActualIsDropShadowEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "shadowBlur", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("ShadowBlur");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualShadowBlur", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("ActualShadowBlur");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "shadowColor", {
        get: function () {
            return this.bg;
        },
        set: function (a) {
            this.bg = a;
            this.e("ShadowColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualShadowColor", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("ActualShadowColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "useSingleShadow", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("UseSingleShadow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualUseSingleShadow", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("ActualUseSingleShadow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "shadowOffsetX", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("ShadowOffsetX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualShadowOffsetX", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("ActualShadowOffsetX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "shadowOffsetY", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("ShadowOffsetY");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualShadowOffsetY", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("ActualShadowOffsetY");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "legendItemBadgeTemplateRef", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("LegendItemBadgeTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualLegendItemBadgeTemplateRef", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("ActualLegendItemBadgeTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "legendItemTemplateRef", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("LegendItemTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualLegendItemTemplateRef", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("ActualLegendItemTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "legendItemVisibility", {
        get: function () {
            return this.a7;
        },
        set: function (a) {
            this.a7 = a;
            this.e("LegendItemVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualLegendItemVisibility", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("ActualLegendItemVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "markerBrush", {
        get: function () {
            return this.a8;
        },
        set: function (a) {
            this.a8 = a;
            this.e("MarkerBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualMarkerBrush", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("ActualMarkerBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "markerOutline", {
        get: function () {
            return this.a9;
        },
        set: function (a) {
            this.a9 = a;
            this.e("MarkerOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualMarkerOutline", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("ActualMarkerOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "markerTemplateRef", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("MarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualMarkerTemplateRef", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("ActualMarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "markerType", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            this.bb = a;
            this.e("MarkerType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualMarkerType", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("ActualMarkerType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "name", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("Name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "opacity", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("Opacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualOpacity", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("ActualOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "outline", {
        get: function () {
            return this.bd;
        },
        set: function (a) {
            this.bd = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualOutline", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("ActualOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "areaFillOpacity", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("AreaFillOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualAreaFillOpacity", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("ActualAreaFillOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "radiusX", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualRadiusX", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("ActualRadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "radiusY", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualRadiusY", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("ActualRadiusY");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "thickness", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("Thickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualThickness", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("ActualThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "titleRef", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
            this.e("TitleRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "valueMemberPath", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("ValueMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "visibility", {
        get: function () {
            return this.bj;
        },
        set: function (a) {
            this.bj = a;
            this.e("Visibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "actualVisibility", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("ActualVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "parentOrLocalBrush", {
        get: function () {
            return this.be;
        },
        set: function (a) {
            this.be = a;
            this.e("ParentOrLocalBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedFragmentSeriesDescription.prototype, "PropertyUpdatedRef", {
        get: function () {
            return this.bf;
        },
        set: function (a) {
            this.bf = a;
            this.e("PropertyUpdatedRef");
        },
        enumerable: true,
        configurable: true
    });
    StackedFragmentSeriesDescription.$t = markType(StackedFragmentSeriesDescription, 'StackedFragmentSeriesDescription', Description.$);
    return StackedFragmentSeriesDescription;
}(Description));
export { StackedFragmentSeriesDescription };
//# sourceMappingURL=StackedFragmentSeriesDescription.js.map