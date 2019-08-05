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
var SeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDescription, _super);
    function SeriesDescription() {
        var _this = _super.call(this) || this;
        _this.az = null;
        _this.ax = null;
        _this.ay = null;
        _this.av = null;
        _this.a5 = null;
        _this.a6 = null;
        _this.al = 0;
        _this.x = 0;
        _this.as = null;
        _this.ap = null;
        _this.a0 = null;
        _this.ar = null;
        _this.ab = 0;
        _this.i = false;
        _this.h = false;
        _this.y = 0;
        _this.a2 = null;
        _this.l = false;
        _this.z = 0;
        _this.aa = 0;
        _this.u = 0;
        _this.t = 0;
        _this.g = false;
        _this.k = false;
        _this.am = 0;
        _this.a7 = null;
        _this.j = false;
        _this.at = null;
        _this.f = false;
        _this.aw = null;
        _this.aq = null;
        _this.v = 0;
        _this.w = 0;
        _this.a1 = null;
        _this.a4 = null;
        _this.au = null;
        _this.a3 = null;
        return _this;
    }
    SeriesDescription.prototype.get_type = function () {
        return "Series";
    };
    Object.defineProperty(SeriesDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "legendItemVisibility", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("LegendItemVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "legendItemBadgeTemplateRef", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("LegendItemBadgeTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "legendItemTemplateRef", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("LegendItemTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "discreteLegendItemTemplateRef", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("DiscreteLegendItemTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "transitionEasingFunctionRef", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("TransitionEasingFunctionRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "transitionInEasingFunctionRef", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("TransitionInEasingFunctionRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "transitionDuration", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            this.al = a;
            this.e("TransitionDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "resolution", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("Resolution");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "brush", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            this.as = a;
            this.e("Brush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "actualBrush", {
        get: function () {
            return this.ap;
        },
        set: function (a) {
            this.ap = a;
            this.e("ActualBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "outline", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "actualOutline", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            this.ar = a;
            this.e("ActualOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "thickness", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("Thickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "isHighlightingEnabled", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("IsHighlightingEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "isDropShadowEnabled", {
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
    Object.defineProperty(SeriesDescription.prototype, "shadowBlur", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("ShadowBlur");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "shadowColor", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("ShadowColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "useSingleShadow", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("UseSingleShadow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "shadowOffsetX", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("ShadowOffsetX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "shadowOffsetY", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("ShadowOffsetY");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "areaFillOpacity", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("AreaFillOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "actualAreaFillOpacity", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("ActualAreaFillOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "isDefaultToolTipSelected", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("IsDefaultToolTipSelected");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "showDefaultTooltip", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("ShowDefaultTooltip");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "transitionInDuration", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("TransitionInDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "transitionInSpeedType", {
        get: function () {
            return this.a7;
        },
        set: function (a) {
            this.a7 = a;
            this.e("TransitionInSpeedType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "mouseOverEnabled", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("MouseOverEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "coercionMethodsRef", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("CoercionMethodsRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "expectFunctions", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ExpectFunctions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "hitTestMode", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("HitTestMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "actualHitTestMode", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            this.aq = a;
            this.e("ActualHitTestMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "finalValue", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("FinalValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "percentChange", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("PercentChange");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "RenderRequestedRef", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("RenderRequestedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "tooltipTemplateRef", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("TooltipTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "dataSourceRef", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("DataSourceRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesDescription.prototype, "title", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("Title");
        },
        enumerable: true,
        configurable: true
    });
    SeriesDescription.$t = markType(SeriesDescription, 'SeriesDescription', Description.$);
    return SeriesDescription;
}(Description));
export { SeriesDescription };
//# sourceMappingURL=SeriesDescription.js.map