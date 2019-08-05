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
var LinearGaugeDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LinearGaugeDescription, _super);
    function LinearGaugeDescription() {
        var _this = _super.call(this) || this;
        _this.a3 = 0;
        _this.cq = null;
        _this.f = null;
        _this.g = null;
        _this.ab = 0;
        _this.q = 0;
        _this.aa = 0;
        _this.p = 0;
        _this.a4 = 0;
        _this.cp = null;
        _this.cn = null;
        _this.ar = 0;
        _this.au = 0;
        _this.as = 0;
        _this.av = 0;
        _this.ai = 0;
        _this.am = 0;
        _this.ah = 0;
        _this.al = 0;
        _this.ak = 0;
        _this.ao = 0;
        _this.aj = 0;
        _this.an = 0;
        _this.v = 0;
        _this.az = 0;
        _this.a0 = 0;
        _this.x = 0;
        _this.w = 0;
        _this.y = 0;
        _this.z = 0;
        _this.ac = 0;
        _this.a1 = 0;
        _this.ay = 0;
        _this.a2 = 0;
        _this.ct = null;
        _this.cj = null;
        _this.ag = 0;
        _this.cm = null;
        _this.co = null;
        _this.ap = 0;
        _this.ae = 0;
        _this.ad = 0;
        _this.af = 0;
        _this.cl = null;
        _this.k = false;
        _this.cg = null;
        _this.ch = null;
        _this.u = 0;
        _this.s = 0;
        _this.t = 0;
        _this.aw = 0;
        _this.at = 0;
        _this.cr = null;
        _this.cs = null;
        _this.ax = 0;
        _this.j = false;
        _this.cc = 0;
        _this.cb = 0;
        _this.l = false;
        _this.ci = null;
        _this.aq = 0;
        _this.r = 0;
        _this.ck = null;
        _this.cf = null;
        return _this;
    }
    LinearGaugeDescription.prototype.get_type = function () {
        return "LinearGauge";
    };
    Object.defineProperty(LinearGaugeDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "transitionProgress", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("TransitionProgress");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "orientation", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("Orientation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "rangeBrushes", {
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
    Object.defineProperty(LinearGaugeDescription.prototype, "rangeOutlines", {
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
    Object.defineProperty(LinearGaugeDescription.prototype, "minimumValue", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "actualMinimumValue", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("ActualMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "maximumValue", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "actualMaximumValue", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("ActualMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "value", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("Value");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleShape", {
        get: function () {
            return this.cp;
        },
        set: function (a) {
            this.cp = a;
            this.e("NeedleShape");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleName", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            this.cn = a;
            this.e("NeedleName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "rangeInnerExtent", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            this.ar = a;
            this.e("RangeInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "scaleInnerExtent", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("ScaleInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "rangeOuterExtent", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            this.as = a;
            this.e("RangeOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "scaleOuterExtent", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("ScaleOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleInnerExtent", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
            this.e("NeedleInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleOuterExtent", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("NeedleOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleInnerBaseWidth", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.ah = a;
            this.e("NeedleInnerBaseWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleOuterBaseWidth", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            this.al = a;
            this.e("NeedleOuterBaseWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleInnerPointWidth", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
            this.e("NeedleInnerPointWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleOuterPointWidth", {
        get: function () {
            return this.ao;
        },
        set: function (a) {
            this.ao = a;
            this.e("NeedleOuterPointWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleInnerPointExtent", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
            this.e("NeedleInnerPointExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleOuterPointExtent", {
        get: function () {
            return this.an;
        },
        set: function (a) {
            this.an = a;
            this.e("NeedleOuterPointExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "interval", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("Interval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "ticksPostInitial", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("TicksPostInitial");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "ticksPreTerminal", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("TicksPreTerminal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "labelInterval", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("LabelInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "labelExtent", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("LabelExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "labelsPostInitial", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("LabelsPostInitial");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "labelsPreTerminal", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("LabelsPreTerminal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "minorTickCount", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("MinorTickCount");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "tickStartExtent", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("TickStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "tickEndExtent", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("TickEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "tickStrokeThickness", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("TickStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "tickBrush", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("TickBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "fontBrush", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            this.cj = a;
            this.e("FontBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleBreadth", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("NeedleBreadth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleBrush", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("NeedleBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleOutline", {
        get: function () {
            return this.co;
        },
        set: function (a) {
            this.co = a;
            this.e("NeedleOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "needleStrokeThickness", {
        get: function () {
            return this.ap;
        },
        set: function (a) {
            this.ap = a;
            this.e("NeedleStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "minorTickStartExtent", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("MinorTickStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "minorTickEndExtent", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("MinorTickEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "minorTickStrokeThickness", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("MinorTickStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "minorTickBrush", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("MinorTickBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "isScaleInverted", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("IsScaleInverted");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "backingBrush", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("BackingBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "backingOutline", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            this.ch = a;
            this.e("BackingOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "backingStrokeThickness", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("BackingStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "backingInnerExtent", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("BackingInnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "backingOuterExtent", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("BackingOuterExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "scaleStartExtent", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("ScaleStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "scaleEndExtent", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("ScaleEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "scaleBrush", {
        get: function () {
            return this.cr;
        },
        set: function (a) {
            this.cr = a;
            this.e("ScaleBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "scaleOutline", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("ScaleOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "scaleStrokeThickness", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("ScaleStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "isNeedleDraggingEnabled", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("IsNeedleDraggingEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "transitionDuration", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("TransitionDuration");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "showToolTipTimeout", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("ShowToolTipTimeout");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "showToolTip", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("ShowToolTip");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "font", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            this.ci = a;
            this.e("Font");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            this.aq = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "actualPixelScalingRatio", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("ActualPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "FormatLabelRef", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("FormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGaugeDescription.prototype, "AlignLabelRef", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("AlignLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    LinearGaugeDescription.$t = markType(LinearGaugeDescription, 'LinearGaugeDescription', Description.$);
    return LinearGaugeDescription;
}(Description));
export { LinearGaugeDescription };
//# sourceMappingURL=LinearGaugeDescription.js.map