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
export class BulletGraphDescription extends Description {
    constructor() {
        super();
        this.au = 0;
        this.cc = null;
        this.cd = null;
        this.ce = null;
        this.ah = 0;
        this.f = null;
        this.g = null;
        this.z = 0;
        this.o = 0;
        this.y = 0;
        this.n = 0;
        this.ak = 0;
        this.cg = null;
        this.av = 0;
        this.ck = null;
        this.af = 0;
        this.ag = 0;
        this.aw = 0;
        this.ax = 0;
        this.t = 0;
        this.aq = 0;
        this.ar = 0;
        this.v = 0;
        this.u = 0;
        this.w = 0;
        this.x = 0;
        this.aa = 0;
        this.as = 0;
        this.ap = 0;
        this.at = 0;
        this.ci = null;
        this.b9 = null;
        this.cj = null;
        this.cl = null;
        this.ay = 0;
        this.ac = 0;
        this.ab = 0;
        this.ad = 0;
        this.cb = null;
        this.j = false;
        this.b6 = null;
        this.b7 = null;
        this.s = 0;
        this.q = 0;
        this.r = 0;
        this.aj = 0;
        this.ai = 0;
        this.cf = null;
        this.al = 0;
        this.am = 0;
        this.an = 0;
        this.ch = null;
        this.ao = 0;
        this.b2 = 0;
        this.b1 = 0;
        this.k = false;
        this.b8 = null;
        this.ae = 0;
        this.p = 0;
        this.ca = null;
        this.b5 = null;
    }
    get_type() {
        return "BulletGraph";
    }
    get type() {
        return this.get_type();
    }
    get transitionProgress() {
        return this.au;
    }
    set transitionProgress(a) {
        this.au = a;
        this.e("TransitionProgress");
    }
    get orientation() {
        return this.cc;
    }
    set orientation(a) {
        this.cc = a;
        this.e("Orientation");
    }
    get scaleBackgroundBrush() {
        return this.cd;
    }
    set scaleBackgroundBrush(a) {
        this.cd = a;
        this.e("ScaleBackgroundBrush");
    }
    get scaleBackgroundOutline() {
        return this.ce;
    }
    set scaleBackgroundOutline(a) {
        this.ce = a;
        this.e("ScaleBackgroundOutline");
    }
    get scaleBackgroundThickness() {
        return this.ah;
    }
    set scaleBackgroundThickness(a) {
        this.ah = a;
        this.e("ScaleBackgroundThickness");
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
        return this.z;
    }
    set minimumValue(a) {
        this.z = a;
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
        return this.y;
    }
    set maximumValue(a) {
        this.y = a;
        this.e("MaximumValue");
    }
    get actualMaximumValue() {
        return this.n;
    }
    set actualMaximumValue(a) {
        this.n = a;
        this.e("ActualMaximumValue");
    }
    get targetValue() {
        return this.ak;
    }
    set targetValue(a) {
        this.ak = a;
        this.e("TargetValue");
    }
    get targetValueName() {
        return this.cg;
    }
    set targetValueName(a) {
        this.cg = a;
        this.e("TargetValueName");
    }
    get value() {
        return this.av;
    }
    set value(a) {
        this.av = a;
        this.e("Value");
    }
    get valueName() {
        return this.ck;
    }
    set valueName(a) {
        this.ck = a;
        this.e("ValueName");
    }
    get rangeInnerExtent() {
        return this.af;
    }
    set rangeInnerExtent(a) {
        this.af = a;
        this.e("RangeInnerExtent");
    }
    get rangeOuterExtent() {
        return this.ag;
    }
    set rangeOuterExtent(a) {
        this.ag = a;
        this.e("RangeOuterExtent");
    }
    get valueInnerExtent() {
        return this.aw;
    }
    set valueInnerExtent(a) {
        this.aw = a;
        this.e("ValueInnerExtent");
    }
    get valueOuterExtent() {
        return this.ax;
    }
    set valueOuterExtent(a) {
        this.ax = a;
        this.e("ValueOuterExtent");
    }
    get interval() {
        return this.t;
    }
    set interval(a) {
        this.t = a;
        this.e("Interval");
    }
    get ticksPostInitial() {
        return this.aq;
    }
    set ticksPostInitial(a) {
        this.aq = a;
        this.e("TicksPostInitial");
    }
    get ticksPreTerminal() {
        return this.ar;
    }
    set ticksPreTerminal(a) {
        this.ar = a;
        this.e("TicksPreTerminal");
    }
    get labelInterval() {
        return this.v;
    }
    set labelInterval(a) {
        this.v = a;
        this.e("LabelInterval");
    }
    get labelExtent() {
        return this.u;
    }
    set labelExtent(a) {
        this.u = a;
        this.e("LabelExtent");
    }
    get labelsPostInitial() {
        return this.w;
    }
    set labelsPostInitial(a) {
        this.w = a;
        this.e("LabelsPostInitial");
    }
    get labelsPreTerminal() {
        return this.x;
    }
    set labelsPreTerminal(a) {
        this.x = a;
        this.e("LabelsPreTerminal");
    }
    get minorTickCount() {
        return this.aa;
    }
    set minorTickCount(a) {
        this.aa = a;
        this.e("MinorTickCount");
    }
    get tickStartExtent() {
        return this.as;
    }
    set tickStartExtent(a) {
        this.as = a;
        this.e("TickStartExtent");
    }
    get tickEndExtent() {
        return this.ap;
    }
    set tickEndExtent(a) {
        this.ap = a;
        this.e("TickEndExtent");
    }
    get tickStrokeThickness() {
        return this.at;
    }
    set tickStrokeThickness(a) {
        this.at = a;
        this.e("TickStrokeThickness");
    }
    get tickBrush() {
        return this.ci;
    }
    set tickBrush(a) {
        this.ci = a;
        this.e("TickBrush");
    }
    get fontBrush() {
        return this.b9;
    }
    set fontBrush(a) {
        this.b9 = a;
        this.e("FontBrush");
    }
    get valueBrush() {
        return this.cj;
    }
    set valueBrush(a) {
        this.cj = a;
        this.e("ValueBrush");
    }
    get valueOutline() {
        return this.cl;
    }
    set valueOutline(a) {
        this.cl = a;
        this.e("ValueOutline");
    }
    get valueStrokeThickness() {
        return this.ay;
    }
    set valueStrokeThickness(a) {
        this.ay = a;
        this.e("ValueStrokeThickness");
    }
    get minorTickStartExtent() {
        return this.ac;
    }
    set minorTickStartExtent(a) {
        this.ac = a;
        this.e("MinorTickStartExtent");
    }
    get minorTickEndExtent() {
        return this.ab;
    }
    set minorTickEndExtent(a) {
        this.ab = a;
        this.e("MinorTickEndExtent");
    }
    get minorTickStrokeThickness() {
        return this.ad;
    }
    set minorTickStrokeThickness(a) {
        this.ad = a;
        this.e("MinorTickStrokeThickness");
    }
    get minorTickBrush() {
        return this.cb;
    }
    set minorTickBrush(a) {
        this.cb = a;
        this.e("MinorTickBrush");
    }
    get isScaleInverted() {
        return this.j;
    }
    set isScaleInverted(a) {
        this.j = a;
        this.e("IsScaleInverted");
    }
    get backingBrush() {
        return this.b6;
    }
    set backingBrush(a) {
        this.b6 = a;
        this.e("BackingBrush");
    }
    get backingOutline() {
        return this.b7;
    }
    set backingOutline(a) {
        this.b7 = a;
        this.e("BackingOutline");
    }
    get backingStrokeThickness() {
        return this.s;
    }
    set backingStrokeThickness(a) {
        this.s = a;
        this.e("BackingStrokeThickness");
    }
    get backingInnerExtent() {
        return this.q;
    }
    set backingInnerExtent(a) {
        this.q = a;
        this.e("BackingInnerExtent");
    }
    get backingOuterExtent() {
        return this.r;
    }
    set backingOuterExtent(a) {
        this.r = a;
        this.e("BackingOuterExtent");
    }
    get scaleStartExtent() {
        return this.aj;
    }
    set scaleStartExtent(a) {
        this.aj = a;
        this.e("ScaleStartExtent");
    }
    get scaleEndExtent() {
        return this.ai;
    }
    set scaleEndExtent(a) {
        this.ai = a;
        this.e("ScaleEndExtent");
    }
    get targetValueBrush() {
        return this.cf;
    }
    set targetValueBrush(a) {
        this.cf = a;
        this.e("TargetValueBrush");
    }
    get targetValueBreadth() {
        return this.al;
    }
    set targetValueBreadth(a) {
        this.al = a;
        this.e("TargetValueBreadth");
    }
    get targetValueInnerExtent() {
        return this.am;
    }
    set targetValueInnerExtent(a) {
        this.am = a;
        this.e("TargetValueInnerExtent");
    }
    get targetValueOuterExtent() {
        return this.an;
    }
    set targetValueOuterExtent(a) {
        this.an = a;
        this.e("TargetValueOuterExtent");
    }
    get targetValueOutline() {
        return this.ch;
    }
    set targetValueOutline(a) {
        this.ch = a;
        this.e("TargetValueOutline");
    }
    get targetValueStrokeThickness() {
        return this.ao;
    }
    set targetValueStrokeThickness(a) {
        this.ao = a;
        this.e("TargetValueStrokeThickness");
    }
    get transitionDuration() {
        return this.b2;
    }
    set transitionDuration(a) {
        this.b2 = a;
        this.e("TransitionDuration");
    }
    get showToolTipTimeout() {
        return this.b1;
    }
    set showToolTipTimeout(a) {
        this.b1 = a;
        this.e("ShowToolTipTimeout");
    }
    get showToolTip() {
        return this.k;
    }
    set showToolTip(a) {
        this.k = a;
        this.e("ShowToolTip");
    }
    get font() {
        return this.b8;
    }
    set font(a) {
        this.b8 = a;
        this.e("Font");
    }
    get pixelScalingRatio() {
        return this.ae;
    }
    set pixelScalingRatio(a) {
        this.ae = a;
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
        return this.ca;
    }
    set FormatLabelRef(a) {
        this.ca = a;
        this.e("FormatLabelRef");
    }
    get AlignLabelRef() {
        return this.b5;
    }
    set AlignLabelRef(a) {
        this.b5 = a;
        this.e("AlignLabelRef");
    }
}
BulletGraphDescription.$t = markType(BulletGraphDescription, 'BulletGraphDescription', Description.$);
//# sourceMappingURL=BulletGraphDescription.js.map