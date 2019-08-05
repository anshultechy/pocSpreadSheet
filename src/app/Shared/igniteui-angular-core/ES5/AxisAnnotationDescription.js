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
var AxisAnnotationDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AxisAnnotationDescription, _super);
    function AxisAnnotationDescription() {
        var _this = _super.call(this) || this;
        _this.u = null;
        _this.s = null;
        _this.q = null;
        _this.t = null;
        _this.p = null;
        _this.r = null;
        _this.j = 0;
        _this.g = 0;
        _this.i = 0;
        _this.h = 0;
        _this.f = 0;
        return _this;
    }
    AxisAnnotationDescription.prototype.get_type = function () {
        return "AxisAnnotation";
    };
    Object.defineProperty(AxisAnnotationDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "valueRef", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("ValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "text", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("Text");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "formatLabelRef", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("FormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "textColor", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("TextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "background", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "outline", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "strokeThickness", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("StrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "backgroundPaddingLeft", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("BackgroundPaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "backgroundPaddingTop", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("BackgroundPaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "backgroundPaddingRight", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("BackgroundPaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisAnnotationDescription.prototype, "backgroundPaddingBottom", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("BackgroundPaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    AxisAnnotationDescription.$t = markType(AxisAnnotationDescription, 'AxisAnnotationDescription', Description.$);
    return AxisAnnotationDescription;
}(Description));
export { AxisAnnotationDescription };
//# sourceMappingURL=AxisAnnotationDescription.js.map