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
var BulletGraphDescription = /** @class */ (function (_super) {
    tslib_1.__extends(BulletGraphDescription, _super);
    function BulletGraphDescription() {
        var _this = _super.call(this) || this;
        _this.au = 0;
        _this.cc = null;
        _this.cd = null;
        _this.ce = null;
        _this.ah = 0;
        _this.f = null;
        _this.g = null;
        _this.z = 0;
        _this.o = 0;
        _this.y = 0;
        _this.n = 0;
        _this.ak = 0;
        _this.cg = null;
        _this.av = 0;
        _this.ck = null;
        _this.af = 0;
        _this.ag = 0;
        _this.aw = 0;
        _this.ax = 0;
        _this.t = 0;
        _this.aq = 0;
        _this.ar = 0;
        _this.v = 0;
        _this.u = 0;
        _this.w = 0;
        _this.x = 0;
        _this.aa = 0;
        _this.as = 0;
        _this.ap = 0;
        _this.at = 0;
        _this.ci = null;
        _this.b9 = null;
        _this.cj = null;
        _this.cl = null;
        _this.ay = 0;
        _this.ac = 0;
        _this.ab = 0;
        _this.ad = 0;
        _this.cb = null;
        _this.j = false;
        _this.b6 = null;
        _this.b7 = null;
        _this.s = 0;
        _this.q = 0;
        _this.r = 0;
        _this.aj = 0;
        _this.ai = 0;
        _this.cf = null;
        _this.al = 0;
        _this.am = 0;
        _this.an = 0;
        _this.ch = null;
        _this.ao = 0;
        _this.b2 = 0;
        _this.b1 = 0;
        _this.k = false;
        _this.b8 = null;
        _this.ae = 0;
        _this.p = 0;
        _this.ca = null;
        _this.b5 = null;
        return _this;
    }
    BulletGraphDescription.prototype.get_type = function () {
        return "BulletGraph";
    };
    Object.defineProperty(BulletGraphDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "transitionProgress", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("TransitionProgress");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "orientation", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("Orientation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "scaleBackgroundBrush", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("ScaleBackgroundBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "scaleBackgroundOutline", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("ScaleBackgroundOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "scaleBackgroundThickness", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.ah = a;
            this.e("ScaleBackgroundThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "rangeBrushes", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("RangeBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "rangeOutlines", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("RangeOutlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "minimumValue", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "actualMinimumValue", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("ActualMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "maximumValue", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "actualMaximumValue", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("ActualMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValue", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
            this.e("TargetValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValueName", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("TargetValueName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "value", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("Value");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "valueName", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("ValueName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "rangeInnerExtent", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("RangeInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "rangeOuterExtent", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("RangeOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "valueInnerExtent", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("ValueInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "valueOuterExtent", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("ValueOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "interval", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("Interval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "ticksPostInitial", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            this.aq = a;
            this.e("TicksPostInitial");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "ticksPreTerminal", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            this.ar = a;
            this.e("TicksPreTerminal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "labelInterval", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("LabelInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "labelExtent", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("LabelExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "labelsPostInitial", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("LabelsPostInitial");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "labelsPreTerminal", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("LabelsPreTerminal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "minorTickCount", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("MinorTickCount");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "tickStartExtent", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            this.as = a;
            this.e("TickStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "tickEndExtent", {
        get: function () {
            return this.ap;
        },
        set: function (a) {
            this.ap = a;
            this.e("TickEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "tickStrokeThickness", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("TickStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "tickBrush", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            this.ci = a;
            this.e("TickBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "fontBrush", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("FontBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "valueBrush", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            this.cj = a;
            this.e("ValueBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "valueOutline", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("ValueOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "valueStrokeThickness", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("ValueStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "minorTickStartExtent", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("MinorTickStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "minorTickEndExtent", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("MinorTickEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "minorTickStrokeThickness", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("MinorTickStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "minorTickBrush", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("MinorTickBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "isScaleInverted", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("IsScaleInverted");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "backingBrush", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("BackingBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "backingOutline", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("BackingOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "backingStrokeThickness", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("BackingStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "backingInnerExtent", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("BackingInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "backingOuterExtent", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("BackingOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "scaleStartExtent", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
            this.e("ScaleStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "scaleEndExtent", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
            this.e("ScaleEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValueBrush", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("TargetValueBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValueBreadth", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            this.al = a;
            this.e("TargetValueBreadth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValueInnerExtent", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("TargetValueInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValueOuterExtent", {
        get: function () {
            return this.an;
        },
        set: function (a) {
            this.an = a;
            this.e("TargetValueOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValueOutline", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            this.ch = a;
            this.e("TargetValueOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "targetValueStrokeThickness", {
        get: function () {
            return this.ao;
        },
        set: function (a) {
            this.ao = a;
            this.e("TargetValueStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "transitionDuration", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("TransitionDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "showToolTipTimeout", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("ShowToolTipTimeout");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "showToolTip", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("ShowToolTip");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "font", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("Font");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "actualPixelScalingRatio", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("ActualPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "FormatLabelRef", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("FormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletGraphDescription.prototype, "AlignLabelRef", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("AlignLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    BulletGraphDescription.$t = markType(BulletGraphDescription, 'BulletGraphDescription', Description.$);
    return BulletGraphDescription;
}(Description));
export { BulletGraphDescription };
//# sourceMappingURL=BulletGraphDescription.js.map