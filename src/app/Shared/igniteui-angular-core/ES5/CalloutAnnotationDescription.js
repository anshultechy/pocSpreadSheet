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
var CalloutAnnotationDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutAnnotationDescription, _super);
    function CalloutAnnotationDescription() {
        var _this = _super.call(this) || this;
        _this.z = null;
        _this.aa = null;
        _this.x = null;
        _this.u = null;
        _this.s = null;
        _this.f = null;
        _this.t = null;
        _this.y = null;
        _this.r = null;
        _this.w = null;
        _this.v = null;
        _this.l = 0;
        _this.i = 0;
        _this.k = 0;
        _this.j = 0;
        _this.h = 0;
        return _this;
    }
    CalloutAnnotationDescription.prototype.get_type = function () {
        return "CalloutAnnotation";
    };
    Object.defineProperty(CalloutAnnotationDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "xValueRef", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("XValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "yValueRef", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("YValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "text", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("Text");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "keyRef", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("KeyRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "contentRef", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("ContentRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "series", {
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
    Object.defineProperty(CalloutAnnotationDescription.prototype, "formatLabelRef", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("FormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "textColor", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("TextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "background", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "outline", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "leaderBrush", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("LeaderBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "strokeThickness", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("StrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "backgroundPaddingLeft", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("BackgroundPaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "backgroundPaddingTop", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("BackgroundPaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "backgroundPaddingRight", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("BackgroundPaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutAnnotationDescription.prototype, "backgroundPaddingBottom", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("BackgroundPaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    CalloutAnnotationDescription.$t = markType(CalloutAnnotationDescription, 'CalloutAnnotationDescription', Description.$);
    return CalloutAnnotationDescription;
}(Description));
export { CalloutAnnotationDescription };
//# sourceMappingURL=CalloutAnnotationDescription.js.map