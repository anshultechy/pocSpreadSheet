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
var CalloutLayerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutLayerDescription, _super);
    function CalloutLayerDescription() {
        var _this = _super.call(this) || this;
        _this.c2 = null;
        _this.c5 = null;
        _this.c6 = null;
        _this.c1 = null;
        _this.b3 = false;
        _this.c0 = null;
        _this.c3 = null;
        _this.cz = null;
        _this.b2 = false;
        _this.b5 = false;
        _this.b4 = false;
        _this.cm = 0;
        _this.cy = null;
        _this.cq = null;
        _this.cn = 0;
        _this.cv = null;
        _this.cu = null;
        _this.cb = 0;
        _this.cd = 0;
        _this.cc = 0;
        _this.ca = 0;
        _this.cr = null;
        _this.ce = 0;
        _this.cf = 0;
        _this.c4 = null;
        _this.cx = null;
        _this.cs = null;
        _this.ct = null;
        _this.cw = null;
        return _this;
    }
    CalloutLayerDescription.prototype.get_type = function () {
        return "CalloutLayer";
    };
    Object.defineProperty(CalloutLayerDescription.prototype, "labelMemberPath", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("LabelMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "xMemberPath", {
        get: function () {
            return this.c5;
        },
        set: function (a) {
            this.c5 = a;
            this.e("XMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "yMemberPath", {
        get: function () {
            return this.c6;
        },
        set: function (a) {
            this.c6 = a;
            this.e("YMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "keyMemberPath", {
        get: function () {
            return this.c1;
        },
        set: function (a) {
            this.c1 = a;
            this.e("KeyMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "isCalloutOffsettingEnabled", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("IsCalloutOffsettingEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "contentMemberPath", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("ContentMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "targetSeriesRef", {
        get: function () {
            return this.c3;
        },
        set: function (a) {
            this.c3 = a;
            this.e("TargetSeriesRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "collisionChannel", {
        get: function () {
            return this.cz;
        },
        set: function (a) {
            this.cz = a;
            this.e("CollisionChannel");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "isAutoCalloutBehaviorEnabled", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("IsAutoCalloutBehaviorEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "useValueForAutoCalloutLabels", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("UseValueForAutoCalloutLabels");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "isCustomCalloutStyleEnabled", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("IsCustomCalloutStyleEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "autoCalloutLabelPrecision", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("AutoCalloutLabelPrecision");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutTextColor", {
        get: function () {
            return this.cy;
        },
        set: function (a) {
            this.cy = a;
            this.e("CalloutTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutBackground", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("CalloutBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutInterpolatedValuePrecision", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            this.cn = a;
            this.e("CalloutInterpolatedValuePrecision");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutOutline", {
        get: function () {
            return this.cv;
        },
        set: function (a) {
            this.cv = a;
            this.e("CalloutOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutLeaderBrush", {
        get: function () {
            return this.cu;
        },
        set: function (a) {
            this.cu = a;
            this.e("CalloutLeaderBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutPaddingLeft", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("CalloutPaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutPaddingTop", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("CalloutPaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutPaddingRight", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("CalloutPaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutPaddingBottom", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("CalloutPaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutCollisionMode", {
        get: function () {
            return this.cr;
        },
        set: function (a) {
            this.cr = a;
            this.e("CalloutCollisionMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutPositionPadding", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("CalloutPositionPadding");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "calloutStrokeThickness", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("CalloutStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "textStyle", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("TextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "CalloutStyleUpdatingRef", {
        get: function () {
            return this.cx;
        },
        set: function (a) {
            this.cx = a;
            this.e("CalloutStyleUpdatingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "CalloutContentUpdatingRef", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("CalloutContentUpdatingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "CalloutLabelUpdatingRef", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("CalloutLabelUpdatingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalloutLayerDescription.prototype, "CalloutSeriesSelectingRef", {
        get: function () {
            return this.cw;
        },
        set: function (a) {
            this.cw = a;
            this.e("CalloutSeriesSelectingRef");
        },
        enumerable: true,
        configurable: true
    });
    CalloutLayerDescription.$t = markType(CalloutLayerDescription, 'CalloutLayerDescription', AnnotationLayerDescription.$);
    return CalloutLayerDescription;
}(AnnotationLayerDescription));
export { CalloutLayerDescription };
//# sourceMappingURL=CalloutLayerDescription.js.map