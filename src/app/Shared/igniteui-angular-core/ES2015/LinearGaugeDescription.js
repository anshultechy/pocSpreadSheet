/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class LinearGaugeDescription extends Description {
    constructor() {
        super();
        this.a3 = 0;
        this.cq = null;
        this.f = null;
        this.g = null;
        this.ab = 0;
        this.q = 0;
        this.aa = 0;
        this.p = 0;
        this.a4 = 0;
        this.cp = null;
        this.cn = null;
        this.ar = 0;
        this.au = 0;
        this.as = 0;
        this.av = 0;
        this.ai = 0;
        this.am = 0;
        this.ah = 0;
        this.al = 0;
        this.ak = 0;
        this.ao = 0;
        this.aj = 0;
        this.an = 0;
        this.v = 0;
        this.az = 0;
        this.a0 = 0;
        this.x = 0;
        this.w = 0;
        this.y = 0;
        this.z = 0;
        this.ac = 0;
        this.a1 = 0;
        this.ay = 0;
        this.a2 = 0;
        this.ct = null;
        this.cj = null;
        this.ag = 0;
        this.cm = null;
        this.co = null;
        this.ap = 0;
        this.ae = 0;
        this.ad = 0;
        this.af = 0;
        this.cl = null;
        this.k = false;
        this.cg = null;
        this.ch = null;
        this.u = 0;
        this.s = 0;
        this.t = 0;
        this.aw = 0;
        this.at = 0;
        this.cr = null;
        this.cs = null;
        this.ax = 0;
        this.j = false;
        this.cc = 0;
        this.cb = 0;
        this.l = false;
        this.ci = null;
        this.aq = 0;
        this.r = 0;
        this.ck = null;
        this.cf = null;
    }
    get_type() {
        return "LinearGauge";
    }
    get type() {
        return this.get_type();
    }
    get transitionProgress() {
        return this.a3;
    }
    set transitionProgress(a) {
        this.a3 = a;
        this.e("TransitionProgress");
    }
    get orientation() {
        return this.cq;
    }
    set orientation(a) {
        this.cq = a;
        this.e("Orientation");
    }
    get rangeBrushes() {
        return this.f;
    }
    set rangeBrushes(a) {
        this.f = a;
        this.e("RangeBrushes");
    }
    get rangeOutlines() {
        return this.g;
    }
    set rangeOutlines(a) {
        this.g = a;
        this.e("RangeOutlines");
    }
    get minimumValue() {
        return this.ab;
    }
    set minimumValue(a) {
        this.ab = a;
        this.e("MinimumValue");
    }
    get actualMinimumValue() {
        return this.q;
    }
    set actualMinimumValue(a) {
        this.q = a;
        this.e("ActualMinimumValue");
    }
    get maximumValue() {
        return this.aa;
    }
    set maximumValue(a) {
        this.aa = a;
        this.e("MaximumValue");
    }
    get actualMaximumValue() {
        return this.p;
    }
    set actualMaximumValue(a) {
        this.p = a;
        this.e("ActualMaximumValue");
    }
    get value() {
        return this.a4;
    }
    set value(a) {
        this.a4 = a;
        this.e("Value");
    }
    get needleShape() {
        return this.cp;
    }
    set needleShape(a) {
        this.cp = a;
        this.e("NeedleShape");
    }
    get needleName() {
        return this.cn;
    }
    set needleName(a) {
        this.cn = a;
        this.e("NeedleName");
    }
    get rangeInnerExtent() {
        return this.ar;
    }
    set rangeInnerExtent(a) {
        this.ar = a;
        this.e("RangeInnerExtent");
    }
    get scaleInnerExtent() {
        return this.au;
    }
    set scaleInnerExtent(a) {
        this.au = a;
        this.e("ScaleInnerExtent");
    }
    get rangeOuterExtent() {
        return this.as;
    }
    set rangeOuterExtent(a) {
        this.as = a;
        this.e("RangeOuterExtent");
    }
    get scaleOuterExtent() {
        return this.av;
    }
    set scaleOuterExtent(a) {
        this.av = a;
        this.e("ScaleOuterExtent");
    }
    get needleInnerExtent() {
        return this.ai;
    }
    set needleInnerExtent(a) {
        this.ai = a;
        this.e("NeedleInnerExtent");
    }
    get needleOuterExtent() {
        return this.am;
    }
    set needleOuterExtent(a) {
        this.am = a;
        this.e("NeedleOuterExtent");
    }
    get needleInnerBaseWidth() {
        return this.ah;
    }
    set needleInnerBaseWidth(a) {
        this.ah = a;
        this.e("NeedleInnerBaseWidth");
    }
    get needleOuterBaseWidth() {
        return this.al;
    }
    set needleOuterBaseWidth(a) {
        this.al = a;
        this.e("NeedleOuterBaseWidth");
    }
    get needleInnerPointWidth() {
        return this.ak;
    }
    set needleInnerPointWidth(a) {
        this.ak = a;
        this.e("NeedleInnerPointWidth");
    }
    get needleOuterPointWidth() {
        return this.ao;
    }
    set needleOuterPointWidth(a) {
        this.ao = a;
        this.e("NeedleOuterPointWidth");
    }
    get needleInnerPointExtent() {
        return this.aj;
    }
    set needleInnerPointExtent(a) {
        this.aj = a;
        this.e("NeedleInnerPointExtent");
    }
    get needleOuterPointExtent() {
        return this.an;
    }
    set needleOuterPointExtent(a) {
        this.an = a;
        this.e("NeedleOuterPointExtent");
    }
    get interval() {
        return this.v;
    }
    set interval(a) {
        this.v = a;
        this.e("Interval");
    }
    get ticksPostInitial() {
        return this.az;
    }
    set ticksPostInitial(a) {
        this.az = a;
        this.e("TicksPostInitial");
    }
    get ticksPreTerminal() {
        return this.a0;
    }
    set ticksPreTerminal(a) {
        this.a0 = a;
        this.e("TicksPreTerminal");
    }
    get labelInterval() {
        return this.x;
    }
    set labelInterval(a) {
        this.x = a;
        this.e("LabelInterval");
    }
    get labelExtent() {
        return this.w;
    }
    set labelExtent(a) {
        this.w = a;
        this.e("LabelExtent");
    }
    get labelsPostInitial() {
        return this.y;
    }
    set labelsPostInitial(a) {
        this.y = a;
        this.e("LabelsPostInitial");
    }
    get labelsPreTerminal() {
        return this.z;
    }
    set labelsPreTerminal(a) {
        this.z = a;
        this.e("LabelsPreTerminal");
    }
    get minorTickCount() {
        return this.ac;
    }
    set minorTickCount(a) {
        this.ac = a;
        this.e("MinorTickCount");
    }
    get tickStartExtent() {
        return this.a1;
    }
    set tickStartExtent(a) {
        this.a1 = a;
        this.e("TickStartExtent");
    }
    get tickEndExtent() {
        return this.ay;
    }
    set tickEndExtent(a) {
        this.ay = a;
        this.e("TickEndExtent");
    }
    get tickStrokeThickness() {
        return this.a2;
    }
    set tickStrokeThickness(a) {
        this.a2 = a;
        this.e("TickStrokeThickness");
    }
    get tickBrush() {
        return this.ct;
    }
    set tickBrush(a) {
        this.ct = a;
        this.e("TickBrush");
    }
    get fontBrush() {
        return this.cj;
    }
    set fontBrush(a) {
        this.cj = a;
        this.e("FontBrush");
    }
    get needleBreadth() {
        return this.ag;
    }
    set needleBreadth(a) {
        this.ag = a;
        this.e("NeedleBreadth");
    }
    get needleBrush() {
        return this.cm;
    }
    set needleBrush(a) {
        this.cm = a;
        this.e("NeedleBrush");
    }
    get needleOutline() {
        return this.co;
    }
    set needleOutline(a) {
        this.co = a;
        this.e("NeedleOutline");
    }
    get needleStrokeThickness() {
        return this.ap;
    }
    set needleStrokeThickness(a) {
        this.ap = a;
        this.e("NeedleStrokeThickness");
    }
    get minorTickStartExtent() {
        return this.ae;
    }
    set minorTickStartExtent(a) {
        this.ae = a;
        this.e("MinorTickStartExtent");
    }
    get minorTickEndExtent() {
        return this.ad;
    }
    set minorTickEndExtent(a) {
        this.ad = a;
        this.e("MinorTickEndExtent");
    }
    get minorTickStrokeThickness() {
        return this.af;
    }
    set minorTickStrokeThickness(a) {
        this.af = a;
        this.e("MinorTickStrokeThickness");
    }
    get minorTickBrush() {
        return this.cl;
    }
    set minorTickBrush(a) {
        this.cl = a;
        this.e("MinorTickBrush");
    }
    get isScaleInverted() {
        return this.k;
    }
    set isScaleInverted(a) {
        this.k = a;
        this.e("IsScaleInverted");
    }
    get backingBrush() {
        return this.cg;
    }
    set backingBrush(a) {
        this.cg = a;
        this.e("BackingBrush");
    }
    get backingOutline() {
        return this.ch;
    }
    set backingOutline(a) {
        this.ch = a;
        this.e("BackingOutline");
    }
    get backingStrokeThickness() {
        return this.u;
    }
    set backingStrokeThickness(a) {
        this.u = a;
        this.e("BackingStrokeThickness");
    }
    get backingInnerExtent() {
        return this.s;
    }
    set backingInnerExtent(a) {
        this.s = a;
        this.e("BackingInnerExtent");
    }
    get backingOuterExtent() {
        return this.t;
    }
    set backingOuterExtent(a) {
        this.t = a;
        this.e("BackingOuterExtent");
    }
    get scaleStartExtent() {
        return this.aw;
    }
    set scaleStartExtent(a) {
        this.aw = a;
        this.e("ScaleStartExtent");
    }
    get scaleEndExtent() {
        return this.at;
    }
    set scaleEndExtent(a) {
        this.at = a;
        this.e("ScaleEndExtent");
    }
    get scaleBrush() {
        return this.cr;
    }
    set scaleBrush(a) {
        this.cr = a;
        this.e("ScaleBrush");
    }
    get scaleOutline() {
        return this.cs;
    }
    set scaleOutline(a) {
        this.cs = a;
        this.e("ScaleOutline");
    }
    get scaleStrokeThickness() {
        return this.ax;
    }
    set scaleStrokeThickness(a) {
        this.ax = a;
        this.e("ScaleStrokeThickness");
    }
    get isNeedleDraggingEnabled() {
        return this.j;
    }
    set isNeedleDraggingEnabled(a) {
        this.j = a;
        this.e("IsNeedleDraggingEnabled");
    }
    get transitionDuration() {
        return this.cc;
    }
    set transitionDuration(a) {
        this.cc = a;
        this.e("TransitionDuration");
    }
    get showToolTipTimeout() {
        return this.cb;
    }
    set showToolTipTimeout(a) {
        this.cb = a;
        this.e("ShowToolTipTimeout");
    }
    get showToolTip() {
        return this.l;
    }
    set showToolTip(a) {
        this.l = a;
        this.e("ShowToolTip");
    }
    get font() {
        return this.ci;
    }
    set font(a) {
        this.ci = a;
        this.e("Font");
    }
    get pixelScalingRatio() {
        return this.aq;
    }
    set pixelScalingRatio(a) {
        this.aq = a;
        this.e("PixelScalingRatio");
    }
    get actualPixelScalingRatio() {
        return this.r;
    }
    set actualPixelScalingRatio(a) {
        this.r = a;
        this.e("ActualPixelScalingRatio");
    }
    get FormatLabelRef() {
        return this.ck;
    }
    set FormatLabelRef(a) {
        this.ck = a;
        this.e("FormatLabelRef");
    }
    get AlignLabelRef() {
        return this.cf;
    }
    set AlignLabelRef(a) {
        this.cf = a;
        this.e("AlignLabelRef");
    }
}
LinearGaugeDescription.$t = markType(LinearGaugeDescription, 'LinearGaugeDescription', Description.$);
//# sourceMappingURL=LinearGaugeDescription.js.map