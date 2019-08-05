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
var ZoomSliderDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ZoomSliderDescription, _super);
    function ZoomSliderDescription() {
        var _this = _super.call(this) || this;
        _this.a0 = 0;
        _this.x = 0;
        _this.z = 0;
        _this.j = 0;
        _this.f = null;
        _this.y = 0;
        _this.ab = 0;
        _this.m = 0;
        _this.ad = 0;
        _this.ac = 0;
        _this.k = 0;
        _this.bk = null;
        _this.bh = null;
        _this.v = 0;
        _this.q = 0;
        _this.a9 = null;
        _this.bi = null;
        _this.ba = null;
        _this.bj = null;
        _this.bb = null;
        _this.w = 0;
        _this.r = 0;
        _this.u = 0;
        _this.p = 0;
        _this.bf = null;
        _this.bg = null;
        _this.t = 0;
        _this.a7 = null;
        _this.a8 = null;
        _this.o = 0;
        _this.a2 = null;
        _this.a3 = null;
        _this.l = 0;
        _this.bl = null;
        _this.bm = null;
        _this.aa = 0;
        _this.bn = null;
        _this.bc = null;
        _this.be = null;
        _this.bd = null;
        _this.s = 0;
        _this.a4 = null;
        _this.a6 = null;
        _this.a5 = null;
        _this.n = 0;
        _this.h = false;
        _this._thumbCalloutFontFamily = null;
        _this._thumbCalloutFontSize = 0;
        _this._thumbCalloutFontStyle = null;
        _this._thumbCalloutFontWeight = null;
        _this.bo = null;
        _this.bp = null;
        return _this;
    }
    ZoomSliderDescription.prototype.get_type = function () {
        return "ZoomSlider";
    };
    Object.defineProperty(ZoomSliderDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "panTransitionDuration", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("PanTransitionDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "maxZoomWidth", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("MaxZoomWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "actualPixelScalingRatio", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("ActualPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "windowRect", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("WindowRect");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "minZoomWidth", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("MinZoomWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "startInset", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("StartInset");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "endInset", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("EndInset");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "trackStartInset", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("TrackStartInset");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "trackEndInset", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("TrackEndInset");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "barExtent", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("BarExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "orientation", {
        get: function () {
            return this.bk;
        },
        set: function (a) {
            this.bk = a;
            this.e("Orientation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerThumbBrush", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
            this.e("LowerThumbBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerThumbStrokeThickness", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("LowerThumbStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherThumbStrokeThickness", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("HigherThumbStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherThumbBrush", {
        get: function () {
            return this.a9;
        },
        set: function (a) {
            this.a9 = a;
            this.e("HigherThumbBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerThumbOutline", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("LowerThumbOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherThumbOutline", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("HigherThumbOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerThumbRidgesBrush", {
        get: function () {
            return this.bj;
        },
        set: function (a) {
            this.bj = a;
            this.e("LowerThumbRidgesBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherThumbRidgesBrush", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            this.bb = a;
            this.e("HigherThumbRidgesBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerThumbWidth", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("LowerThumbWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherThumbWidth", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("HigherThumbWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerThumbHeight", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("LowerThumbHeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherThumbHeight", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("HigherThumbHeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerShadeBrush", {
        get: function () {
            return this.bf;
        },
        set: function (a) {
            this.bf = a;
            this.e("LowerShadeBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerShadeOutline", {
        get: function () {
            return this.bg;
        },
        set: function (a) {
            this.bg = a;
            this.e("LowerShadeOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerShadeStrokeThickness", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("LowerShadeStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherShadeBrush", {
        get: function () {
            return this.a7;
        },
        set: function (a) {
            this.a7 = a;
            this.e("HigherShadeBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherShadeOutline", {
        get: function () {
            return this.a8;
        },
        set: function (a) {
            this.a8 = a;
            this.e("HigherShadeOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherShadeStrokeThickness", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("HigherShadeStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "barBrush", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("BarBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "barOutline", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("BarOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "barStrokeThickness", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("BarStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "rangeThumbBrush", {
        get: function () {
            return this.bl;
        },
        set: function (a) {
            this.bl = a;
            this.e("RangeThumbBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "rangeThumbOutline", {
        get: function () {
            return this.bm;
        },
        set: function (a) {
            this.bm = a;
            this.e("RangeThumbOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "rangeThumbStrokeThickness", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("RangeThumbStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "rangeThumbRidgesBrush", {
        get: function () {
            return this.bn;
        },
        set: function (a) {
            this.bn = a;
            this.e("RangeThumbRidgesBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerCalloutBrush", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("LowerCalloutBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerCalloutTextColor", {
        get: function () {
            return this.be;
        },
        set: function (a) {
            this.be = a;
            this.e("LowerCalloutTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerCalloutOutline", {
        get: function () {
            return this.bd;
        },
        set: function (a) {
            this.bd = a;
            this.e("LowerCalloutOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "lowerCalloutStrokeThickness", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("LowerCalloutStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherCalloutBrush", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("HigherCalloutBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherCalloutTextColor", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("HigherCalloutTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherCalloutOutline", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("HigherCalloutOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "higherCalloutStrokeThickness", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("HigherCalloutStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "areThumbCalloutsEnabled", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("AreThumbCalloutsEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "thumbCalloutFontFamily", {
        get: function () {
            return this._thumbCalloutFontFamily;
        },
        set: function (a) {
            this._thumbCalloutFontFamily = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "thumbCalloutFontSize", {
        get: function () {
            return this._thumbCalloutFontSize;
        },
        set: function (a) {
            this._thumbCalloutFontSize = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "thumbCalloutFontStyle", {
        get: function () {
            return this._thumbCalloutFontStyle;
        },
        set: function (a) {
            this._thumbCalloutFontStyle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "thumbCalloutFontWeight", {
        get: function () {
            return this._thumbCalloutFontWeight;
        },
        set: function (a) {
            this._thumbCalloutFontWeight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "ResolvingAxisValueRef", {
        get: function () {
            return this.bo;
        },
        set: function (a) {
            this.bo = a;
            this.e("ResolvingAxisValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomSliderDescription.prototype, "WindowRectChangedRef", {
        get: function () {
            return this.bp;
        },
        set: function (a) {
            this.bp = a;
            this.e("WindowRectChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    ZoomSliderDescription.$t = markType(ZoomSliderDescription, 'ZoomSliderDescription', Description.$);
    return ZoomSliderDescription;
}(Description));
export { ZoomSliderDescription };
//# sourceMappingURL=ZoomSliderDescription.js.map