/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CrosshairLayerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CrosshairLayerDescription, _super);
    function CrosshairLayerDescription() {
        var _this = _super.call(this) || this;
        _this.cw = null;
        _this.cz = null;
        _this.cy = null;
        _this.b4 = false;
        _this.b2 = false;
        _this.c3 = null;
        _this.c1 = null;
        _this.cs = 0;
        _this.c2 = null;
        _this.b9 = 0;
        _this.cb = 0;
        _this.ca = 0;
        _this.b8 = 0;
        _this.ce = 0;
        _this.cg = 0;
        _this.cf = 0;
        _this.cd = 0;
        _this.cc = 0;
        _this.c6 = null;
        _this.c4 = null;
        _this.ct = 0;
        _this.c5 = null;
        _this.ch = 0;
        _this.c0 = null;
        _this.cx = null;
        _this.b3 = false;
        return _this;
    }
    CrosshairLayerDescription.prototype.get_type = function () {
        return "CrosshairLayer";
    };
    Object.defineProperty(CrosshairLayerDescription.prototype, "horizontalLineStroke", {
        get: function () {
            return this.cw;
        },
        set: function (a) {
            this.cw = a;
            this.e("HorizontalLineStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "verticalLineStroke", {
        get: function () {
            return this.cz;
        },
        set: function (a) {
            this.cz = a;
            this.e("VerticalLineStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "targetSeriesRef", {
        get: function () {
            return this.cy;
        },
        set: function (a) {
            this.cy = a;
            this.e("TargetSeriesRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "useInterpolation", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("UseInterpolation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "isAxisAnnotationEnabled", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("IsAxisAnnotationEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationTextColor", {
        get: function () {
            return this.c3;
        },
        set: function (a) {
            this.c3 = a;
            this.e("XAxisAnnotationTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationBackground", {
        get: function () {
            return this.c1;
        },
        set: function (a) {
            this.c1 = a;
            this.e("XAxisAnnotationBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationInterpolatedValuePrecision", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("XAxisAnnotationInterpolatedValuePrecision");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationOutline", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("XAxisAnnotationOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationPaddingLeft", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("XAxisAnnotationPaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationPaddingTop", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("XAxisAnnotationPaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationPaddingRight", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("XAxisAnnotationPaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationPaddingBottom", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("XAxisAnnotationPaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationPaddingLeft", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("YAxisAnnotationPaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationPaddingTop", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("YAxisAnnotationPaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationPaddingRight", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("YAxisAnnotationPaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationPaddingBottom", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("YAxisAnnotationPaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "xAxisAnnotationStrokeThickness", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("XAxisAnnotationStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationTextColor", {
        get: function () {
            return this.c6;
        },
        set: function (a) {
            this.c6 = a;
            this.e("YAxisAnnotationTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationBackground", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("YAxisAnnotationBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationInterpolatedValuePrecision", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("YAxisAnnotationInterpolatedValuePrecision");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationOutline", {
        get: function () {
            return this.c5;
        },
        set: function (a) {
            this.c5 = a;
            this.e("YAxisAnnotationOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "yAxisAnnotationStrokeThickness", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            this.ch = a;
            this.e("YAxisAnnotationStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "verticalLineVisibility", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("VerticalLineVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "horizontalLineVisibility", {
        get: function () {
            return this.cx;
        },
        set: function (a) {
            this.cx = a;
            this.e("HorizontalLineVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrosshairLayerDescription.prototype, "skipUnknownValues", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("SkipUnknownValues");
        },
        enumerable: true,
        configurable: true
    });
    CrosshairLayerDescription.$t = markType(CrosshairLayerDescription, 'CrosshairLayerDescription', AnnotationLayerDescription.$);
    return CrosshairLayerDescription;
}(AnnotationLayerDescription));
export { CrosshairLayerDescription };
//# sourceMappingURL=CrosshairLayerDescription.js.map