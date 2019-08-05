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
export class AxisDescription extends Description {
    constructor() {
        super();
        this.bb = null;
        this.bs = null;
        this.bq = null;
        this.a7 = null;
        this.aa = 0;
        this.bp = null;
        this.bl = null;
        this.a5 = null;
        this.y = 0;
        this.bm = null;
        this.a6 = null;
        this.z = 0;
        this.br = null;
        this.ac = 0;
        this.ab = 0;
        this.g = false;
        this.h = false;
        this.k = false;
        this.a3 = 0;
        this.bi = null;
        this.bh = null;
        this.i = false;
        this.r = 0;
        this.t = 0;
        this.v = 0;
        this.w = 0;
        this.x = 0;
        this.s = 0;
        this.bg = null;
        this.bj = null;
        this.a9 = null;
        this.ba = null;
        this.by = null;
        this.bz = null;
        this.bx = null;
        this.b1 = null;
        this.j = false;
        this.ad = 0;
        this.af = 0;
        this.ah = 0;
        this.ai = 0;
        this.aj = 0;
        this.ae = 0;
        this.bw = null;
        this.b0 = null;
        this.a8 = null;
        this.f = false;
        this.bn = null;
        this.bo = null;
        this.bc = null;
        this.bd = null;
        this.u = 0;
        this.bf = null;
        this.be = null;
        this.bt = null;
        this.ag = 0;
        this.bv = null;
        this.bu = null;
        this.bk = null;
    }
    get_type() {
        return "Axis";
    }
    get type() {
        return this.get_type();
    }
    get formatLabelRef() {
        return this.bb;
    }
    set formatLabelRef(a) {
        this.bb = a;
        this.e("FormatLabelRef");
    }
    get title() {
        return this.bs;
    }
    set title(a) {
        this.bs = a;
        this.e("Title");
    }
    get stroke() {
        return this.bq;
    }
    set stroke(a) {
        this.bq = a;
        this.e("Stroke");
    }
    get actualStroke() {
        return this.a7;
    }
    set actualStroke(a) {
        this.a7 = a;
        this.e("ActualStroke");
    }
    get strokeThickness() {
        return this.aa;
    }
    set strokeThickness(a) {
        this.aa = a;
        this.e("StrokeThickness");
    }
    get strip() {
        return this.bp;
    }
    set strip(a) {
        this.bp = a;
        this.e("Strip");
    }
    get majorStroke() {
        return this.bl;
    }
    set majorStroke(a) {
        this.bl = a;
        this.e("MajorStroke");
    }
    get actualMajorStroke() {
        return this.a5;
    }
    set actualMajorStroke(a) {
        this.a5 = a;
        this.e("ActualMajorStroke");
    }
    get majorStrokeThickness() {
        return this.y;
    }
    set majorStrokeThickness(a) {
        this.y = a;
        this.e("MajorStrokeThickness");
    }
    get minorStroke() {
        return this.bm;
    }
    set minorStroke(a) {
        this.bm = a;
        this.e("MinorStroke");
    }
    get actualMinorStroke() {
        return this.a6;
    }
    set actualMinorStroke(a) {
        this.a6 = a;
        this.e("ActualMinorStroke");
    }
    get minorStrokeThickness() {
        return this.z;
    }
    set minorStrokeThickness(a) {
        this.z = a;
        this.e("MinorStrokeThickness");
    }
    get tickStroke() {
        return this.br;
    }
    set tickStroke(a) {
        this.br = a;
        this.e("TickStroke");
    }
    get tickStrokeThickness() {
        return this.ac;
    }
    set tickStrokeThickness(a) {
        this.ac = a;
        this.e("TickStrokeThickness");
    }
    get tickLength() {
        return this.ab;
    }
    set tickLength(a) {
        this.ab = a;
        this.e("TickLength");
    }
    get isDisabled() {
        return this.g;
    }
    set isDisabled(a) {
        this.g = a;
        this.e("IsDisabled");
    }
    get isInverted() {
        return this.h;
    }
    set isInverted(a) {
        this.h = a;
        this.e("IsInverted");
    }
    get useEnhancedIntervalManagement() {
        return this.k;
    }
    set useEnhancedIntervalManagement(a) {
        this.k = a;
        this.e("UseEnhancedIntervalManagement");
    }
    get enhancedIntervalMinimumCharacters() {
        return this.a3;
    }
    set enhancedIntervalMinimumCharacters(a) {
        this.a3 = a;
        this.e("EnhancedIntervalMinimumCharacters");
    }
    get labelTextColor() {
        return this.bi;
    }
    set labelTextColor(a) {
        this.bi = a;
        this.e("LabelTextColor");
    }
    get labelLocation() {
        return this.bh;
    }
    set labelLocation(a) {
        this.bh = a;
        this.e("LabelLocation");
    }
    get labelShowFirstLabel() {
        return this.i;
    }
    set labelShowFirstLabel(a) {
        this.i = a;
        this.e("LabelShowFirstLabel");
    }
    get labelAngle() {
        return this.r;
    }
    set labelAngle(a) {
        this.r = a;
        this.e("LabelAngle");
    }
    get labelExtent() {
        return this.t;
    }
    set labelExtent(a) {
        this.t = a;
        this.e("LabelExtent");
    }
    get labelLeftMargin() {
        return this.v;
    }
    set labelLeftMargin(a) {
        this.v = a;
        this.e("LabelLeftMargin");
    }
    get labelRightMargin() {
        return this.w;
    }
    set labelRightMargin(a) {
        this.w = a;
        this.e("LabelRightMargin");
    }
    get labelTopMargin() {
        return this.x;
    }
    set labelTopMargin(a) {
        this.x = a;
        this.e("LabelTopMargin");
    }
    get labelBottomMargin() {
        return this.s;
    }
    set labelBottomMargin(a) {
        this.s = a;
        this.e("LabelBottomMargin");
    }
    get labelHorizontalAlignment() {
        return this.bg;
    }
    set labelHorizontalAlignment(a) {
        this.bg = a;
        this.e("LabelHorizontalAlignment");
    }
    get labelVerticalAlignment() {
        return this.bj;
    }
    set labelVerticalAlignment(a) {
        this.bj = a;
        this.e("LabelVerticalAlignment");
    }
    get crossingAxisRef() {
        return this.a9;
    }
    set crossingAxisRef(a) {
        this.a9 = a;
        this.e("CrossingAxisRef");
    }
    get crossingValueRef() {
        return this.ba;
    }
    set crossingValueRef(a) {
        this.ba = a;
        this.e("CrossingValueRef");
    }
    get titlePosition() {
        return this.by;
    }
    set titlePosition(a) {
        this.by = a;
        this.e("TitlePosition");
    }
    get titleTextColor() {
        return this.bz;
    }
    set titleTextColor(a) {
        this.bz = a;
        this.e("TitleTextColor");
    }
    get titleLocation() {
        return this.bx;
    }
    set titleLocation(a) {
        this.bx = a;
        this.e("TitleLocation");
    }
    get titleVisibility() {
        return this.b1;
    }
    set titleVisibility(a) {
        this.b1 = a;
        this.e("TitleVisibility");
    }
    get titleShowFirstLabel() {
        return this.j;
    }
    set titleShowFirstLabel(a) {
        this.j = a;
        this.e("TitleShowFirstLabel");
    }
    get titleAngle() {
        return this.ad;
    }
    set titleAngle(a) {
        this.ad = a;
        this.e("TitleAngle");
    }
    get titleExtent() {
        return this.af;
    }
    set titleExtent(a) {
        this.af = a;
        this.e("TitleExtent");
    }
    get titleLeftMargin() {
        return this.ah;
    }
    set titleLeftMargin(a) {
        this.ah = a;
        this.e("TitleLeftMargin");
    }
    get titleRightMargin() {
        return this.ai;
    }
    set titleRightMargin(a) {
        this.ai = a;
        this.e("TitleRightMargin");
    }
    get titleTopMargin() {
        return this.aj;
    }
    set titleTopMargin(a) {
        this.aj = a;
        this.e("TitleTopMargin");
    }
    get titleBottomMargin() {
        return this.ae;
    }
    set titleBottomMargin(a) {
        this.ae = a;
        this.e("TitleBottomMargin");
    }
    get titleHorizontalAlignment() {
        return this.bw;
    }
    set titleHorizontalAlignment(a) {
        this.bw = a;
        this.e("TitleHorizontalAlignment");
    }
    get titleVerticalAlignment() {
        return this.b0;
    }
    set titleVerticalAlignment(a) {
        this.b0 = a;
        this.e("TitleVerticalAlignment");
    }
    get coercionMethodsRef() {
        return this.a8;
    }
    set coercionMethodsRef(a) {
        this.a8 = a;
        this.e("CoercionMethodsRef");
    }
    get expectFunctions() {
        return this.f;
    }
    set expectFunctions(a) {
        this.f = a;
        this.e("ExpectFunctions");
    }
    get RangeChangedRef() {
        return this.bn;
    }
    set RangeChangedRef(a) {
        this.bn = a;
        this.e("RangeChangedRef");
    }
    get RenderRequestedRef() {
        return this.bo;
    }
    set RenderRequestedRef(a) {
        this.bo = a;
        this.e("RenderRequestedRef");
    }
    get label() {
        return this.bc;
    }
    set label(a) {
        this.bc = a;
        this.e("Label");
    }
    get labelFontFamily() {
        return this.bd;
    }
    set labelFontFamily(a) {
        this.bd = a;
        this.e("LabelFontFamily");
    }
    get labelFontSize() {
        return this.u;
    }
    set labelFontSize(a) {
        this.u = a;
        this.e("LabelFontSize");
    }
    get labelFontWeight() {
        return this.bf;
    }
    set labelFontWeight(a) {
        this.bf = a;
        this.e("LabelFontWeight");
    }
    get labelFontStyle() {
        return this.be;
    }
    set labelFontStyle(a) {
        this.be = a;
        this.e("LabelFontStyle");
    }
    get titleFontFamily() {
        return this.bt;
    }
    set titleFontFamily(a) {
        this.bt = a;
        this.e("TitleFontFamily");
    }
    get titleFontSize() {
        return this.ag;
    }
    set titleFontSize(a) {
        this.ag = a;
        this.e("TitleFontSize");
    }
    get titleFontWeight() {
        return this.bv;
    }
    set titleFontWeight(a) {
        this.bv = a;
        this.e("TitleFontWeight");
    }
    get titleFontStyle() {
        return this.bu;
    }
    set titleFontStyle(a) {
        this.bu = a;
        this.e("TitleFontStyle");
    }
    get labelVisibility() {
        return this.bk;
    }
    set labelVisibility(a) {
        this.bk = a;
        this.e("LabelVisibility");
    }
}
AxisDescription.$t = markType(AxisDescription, 'AxisDescription', Description.$);
//# sourceMappingURL=AxisDescription.js.map