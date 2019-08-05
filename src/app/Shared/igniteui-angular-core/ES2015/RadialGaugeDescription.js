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
export class RadialGaugeDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.g = null;
        this.ab = 0;
        this.o = 0;
        this.aa = 0;
        this.n = 0;
        this.x = 0;
        this.v = 0;
        this.w = 0;
        this.a3 = 0;
        this.ax = 0;
        this.au = 0;
        this.cu = null;
        this.cb = 0;
        this.cw = null;
        this.cm = null;
        this.cn = null;
        this.ap = 0;
        this.ai = 0;
        this.cr = null;
        this.aq = 0;
        this.aj = 0;
        this.ah = 0;
        this.ag = 0;
        this.ao = 0;
        this.an = 0;
        this.am = 0;
        this.ak = 0;
        this.cq = null;
        this.ay = 0;
        this.co = null;
        this.cp = null;
        this.ar = 0;
        this.al = 0;
        this.av = 0;
        this.y = 0;
        this.z = 0;
        this.a0 = 0;
        this.az = 0;
        this.a1 = 0;
        this.cv = null;
        this.cj = null;
        this.ae = 0;
        this.ad = 0;
        this.af = 0;
        this.cl = null;
        this.ac = 0;
        this.cs = null;
        this.ce = null;
        this.cf = null;
        this.u = 0;
        this.s = 0;
        this.t = 0;
        this.aw = 0;
        this.ct = null;
        this.q = 0;
        this.r = 0;
        this.cg = null;
        this.at = 0;
        this.ch = null;
        this.k = false;
        this.j = false;
        this.ci = null;
        this.a2 = 0;
        this.as = 0;
        this.p = 0;
        this.ck = null;
        this.cd = null;
    }
    get_type() {
        return "RadialGauge";
    }
    get type() {
        return this.get_type();
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
        return this.o;
    }
    set actualMinimumValue(a) {
        this.o = a;
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
        return this.n;
    }
    set actualMaximumValue(a) {
        this.n = a;
        this.e("ActualMaximumValue");
    }
    get interval() {
        return this.x;
    }
    set interval(a) {
        this.x = a;
        this.e("Interval");
    }
    get centerX() {
        return this.v;
    }
    set centerX(a) {
        this.v = a;
        this.e("CenterX");
    }
    get centerY() {
        return this.w;
    }
    set centerY(a) {
        this.w = a;
        this.e("CenterY");
    }
    get value() {
        return this.a3;
    }
    set value(a) {
        this.a3 = a;
        this.e("Value");
    }
    get scaleStartAngle() {
        return this.ax;
    }
    set scaleStartAngle(a) {
        this.ax = a;
        this.e("ScaleStartAngle");
    }
    get scaleEndAngle() {
        return this.au;
    }
    set scaleEndAngle(a) {
        this.au = a;
        this.e("ScaleEndAngle");
    }
    get scaleSweepDirection() {
        return this.cu;
    }
    set scaleSweepDirection(a) {
        this.cu = a;
        this.e("ScaleSweepDirection");
    }
    get transitionDuration() {
        return this.cb;
    }
    set transitionDuration(a) {
        this.cb = a;
        this.e("TransitionDuration");
    }
    get transitionEasingFunctionRef() {
        return this.cw;
    }
    set transitionEasingFunctionRef(a) {
        this.cw = a;
        this.e("TransitionEasingFunctionRef");
    }
    get needleBrush() {
        return this.cm;
    }
    set needleBrush(a) {
        this.cm = a;
        this.e("NeedleBrush");
    }
    get needleOutline() {
        return this.cn;
    }
    set needleOutline(a) {
        this.cn = a;
        this.e("NeedleOutline");
    }
    get needleStartExtent() {
        return this.ap;
    }
    set needleStartExtent(a) {
        this.ap = a;
        this.e("NeedleStartExtent");
    }
    get needleEndExtent() {
        return this.ai;
    }
    set needleEndExtent(a) {
        this.ai = a;
        this.e("NeedleEndExtent");
    }
    get needleShape() {
        return this.cr;
    }
    set needleShape(a) {
        this.cr = a;
        this.e("NeedleShape");
    }
    get needleStartWidthRatio() {
        return this.aq;
    }
    set needleStartWidthRatio(a) {
        this.aq = a;
        this.e("NeedleStartWidthRatio");
    }
    get needleEndWidthRatio() {
        return this.aj;
    }
    set needleEndWidthRatio(a) {
        this.aj = a;
        this.e("NeedleEndWidthRatio");
    }
    get needleBaseFeatureWidthRatio() {
        return this.ah;
    }
    set needleBaseFeatureWidthRatio(a) {
        this.ah = a;
        this.e("NeedleBaseFeatureWidthRatio");
    }
    get needleBaseFeatureExtent() {
        return this.ag;
    }
    set needleBaseFeatureExtent(a) {
        this.ag = a;
        this.e("NeedleBaseFeatureExtent");
    }
    get needlePointFeatureWidthRatio() {
        return this.ao;
    }
    set needlePointFeatureWidthRatio(a) {
        this.ao = a;
        this.e("NeedlePointFeatureWidthRatio");
    }
    get needlePointFeatureExtent() {
        return this.an;
    }
    set needlePointFeatureExtent(a) {
        this.an = a;
        this.e("NeedlePointFeatureExtent");
    }
    get needlePivotWidthRatio() {
        return this.am;
    }
    set needlePivotWidthRatio(a) {
        this.am = a;
        this.e("NeedlePivotWidthRatio");
    }
    get needlePivotInnerWidthRatio() {
        return this.ak;
    }
    set needlePivotInnerWidthRatio(a) {
        this.ak = a;
        this.e("NeedlePivotInnerWidthRatio");
    }
    get needlePivotShape() {
        return this.cq;
    }
    set needlePivotShape(a) {
        this.cq = a;
        this.e("NeedlePivotShape");
    }
    get scaleStartExtent() {
        return this.ay;
    }
    set scaleStartExtent(a) {
        this.ay = a;
        this.e("ScaleStartExtent");
    }
    get needlePivotBrush() {
        return this.co;
    }
    set needlePivotBrush(a) {
        this.co = a;
        this.e("NeedlePivotBrush");
    }
    get needlePivotOutline() {
        return this.cp;
    }
    set needlePivotOutline(a) {
        this.cp = a;
        this.e("NeedlePivotOutline");
    }
    get needleStrokeThickness() {
        return this.ar;
    }
    set needleStrokeThickness(a) {
        this.ar = a;
        this.e("NeedleStrokeThickness");
    }
    get needlePivotStrokeThickness() {
        return this.al;
    }
    set needlePivotStrokeThickness(a) {
        this.al = a;
        this.e("NeedlePivotStrokeThickness");
    }
    get scaleEndExtent() {
        return this.av;
    }
    set scaleEndExtent(a) {
        this.av = a;
        this.e("ScaleEndExtent");
    }
    get labelExtent() {
        return this.y;
    }
    set labelExtent(a) {
        this.y = a;
        this.e("LabelExtent");
    }
    get labelInterval() {
        return this.z;
    }
    set labelInterval(a) {
        this.z = a;
        this.e("LabelInterval");
    }
    get tickStartExtent() {
        return this.a0;
    }
    set tickStartExtent(a) {
        this.a0 = a;
        this.e("TickStartExtent");
    }
    get tickEndExtent() {
        return this.az;
    }
    set tickEndExtent(a) {
        this.az = a;
        this.e("TickEndExtent");
    }
    get tickStrokeThickness() {
        return this.a1;
    }
    set tickStrokeThickness(a) {
        this.a1 = a;
        this.e("TickStrokeThickness");
    }
    get tickBrush() {
        return this.cv;
    }
    set tickBrush(a) {
        this.cv = a;
        this.e("TickBrush");
    }
    get fontBrush() {
        return this.cj;
    }
    set fontBrush(a) {
        this.cj = a;
        this.e("FontBrush");
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
    get minorTickCount() {
        return this.ac;
    }
    set minorTickCount(a) {
        this.ac = a;
        this.e("MinorTickCount");
    }
    get scaleBrush() {
        return this.cs;
    }
    set scaleBrush(a) {
        this.cs = a;
        this.e("ScaleBrush");
    }
    get backingBrush() {
        return this.ce;
    }
    set backingBrush(a) {
        this.ce = a;
        this.e("BackingBrush");
    }
    get backingOutline() {
        return this.cf;
    }
    set backingOutline(a) {
        this.cf = a;
        this.e("BackingOutline");
    }
    get backingStrokeThickness() {
        return this.u;
    }
    set backingStrokeThickness(a) {
        this.u = a;
        this.e("BackingStrokeThickness");
    }
    get backingOuterExtent() {
        return this.s;
    }
    set backingOuterExtent(a) {
        this.s = a;
        this.e("BackingOuterExtent");
    }
    get backingOversweep() {
        return this.t;
    }
    set backingOversweep(a) {
        this.t = a;
        this.e("BackingOversweep");
    }
    get scaleOversweep() {
        return this.aw;
    }
    set scaleOversweep(a) {
        this.aw = a;
        this.e("ScaleOversweep");
    }
    get scaleOversweepShape() {
        return this.ct;
    }
    set scaleOversweepShape(a) {
        this.ct = a;
        this.e("ScaleOversweepShape");
    }
    get backingCornerRadius() {
        return this.q;
    }
    set backingCornerRadius(a) {
        this.q = a;
        this.e("BackingCornerRadius");
    }
    get backingInnerExtent() {
        return this.r;
    }
    set backingInnerExtent(a) {
        this.r = a;
        this.e("BackingInnerExtent");
    }
    get backingShape() {
        return this.cg;
    }
    set backingShape(a) {
        this.cg = a;
        this.e("BackingShape");
    }
    get radiusMultiplier() {
        return this.at;
    }
    set radiusMultiplier(a) {
        this.at = a;
        this.e("RadiusMultiplier");
    }
    get duplicateLabelOmissionStrategy() {
        return this.ch;
    }
    set duplicateLabelOmissionStrategy(a) {
        this.ch = a;
        this.e("DuplicateLabelOmissionStrategy");
    }
    get isNeedleDraggingEnabled() {
        return this.k;
    }
    set isNeedleDraggingEnabled(a) {
        this.k = a;
        this.e("IsNeedleDraggingEnabled");
    }
    get isNeedleDraggingConstrained() {
        return this.j;
    }
    set isNeedleDraggingConstrained(a) {
        this.j = a;
        this.e("IsNeedleDraggingConstrained");
    }
    get font() {
        return this.ci;
    }
    set font(a) {
        this.ci = a;
        this.e("Font");
    }
    get transitionProgress() {
        return this.a2;
    }
    set transitionProgress(a) {
        this.a2 = a;
        this.e("TransitionProgress");
    }
    get pixelScalingRatio() {
        return this.as;
    }
    set pixelScalingRatio(a) {
        this.as = a;
        this.e("PixelScalingRatio");
    }
    get actualPixelScalingRatio() {
        return this.p;
    }
    set actualPixelScalingRatio(a) {
        this.p = a;
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
        return this.cd;
    }
    set AlignLabelRef(a) {
        this.cd = a;
        this.e("AlignLabelRef");
    }
}
RadialGaugeDescription.$t = markType(RadialGaugeDescription, 'RadialGaugeDescription', Description.$);
//# sourceMappingURL=RadialGaugeDescription.js.map