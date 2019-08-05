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
export class ZoomSliderDescription extends Description {
    constructor() {
        super();
        this.a0 = 0;
        this.x = 0;
        this.z = 0;
        this.j = 0;
        this.f = null;
        this.y = 0;
        this.ab = 0;
        this.m = 0;
        this.ad = 0;
        this.ac = 0;
        this.k = 0;
        this.bk = null;
        this.bh = null;
        this.v = 0;
        this.q = 0;
        this.a9 = null;
        this.bi = null;
        this.ba = null;
        this.bj = null;
        this.bb = null;
        this.w = 0;
        this.r = 0;
        this.u = 0;
        this.p = 0;
        this.bf = null;
        this.bg = null;
        this.t = 0;
        this.a7 = null;
        this.a8 = null;
        this.o = 0;
        this.a2 = null;
        this.a3 = null;
        this.l = 0;
        this.bl = null;
        this.bm = null;
        this.aa = 0;
        this.bn = null;
        this.bc = null;
        this.be = null;
        this.bd = null;
        this.s = 0;
        this.a4 = null;
        this.a6 = null;
        this.a5 = null;
        this.n = 0;
        this.h = false;
        this._thumbCalloutFontFamily = null;
        this._thumbCalloutFontSize = 0;
        this._thumbCalloutFontStyle = null;
        this._thumbCalloutFontWeight = null;
        this.bo = null;
        this.bp = null;
    }
    get_type() {
        return "ZoomSlider";
    }
    get type() {
        return this.get_type();
    }
    get panTransitionDuration() {
        return this.a0;
    }
    set panTransitionDuration(a) {
        this.a0 = a;
        this.e("PanTransitionDuration");
    }
    get maxZoomWidth() {
        return this.x;
    }
    set maxZoomWidth(a) {
        this.x = a;
        this.e("MaxZoomWidth");
    }
    get pixelScalingRatio() {
        return this.z;
    }
    set pixelScalingRatio(a) {
        this.z = a;
        this.e("PixelScalingRatio");
    }
    get actualPixelScalingRatio() {
        return this.j;
    }
    set actualPixelScalingRatio(a) {
        this.j = a;
        this.e("ActualPixelScalingRatio");
    }
    get windowRect() {
        return this.f;
    }
    set windowRect(a) {
        this.f = a;
        this.e("WindowRect");
    }
    get minZoomWidth() {
        return this.y;
    }
    set minZoomWidth(a) {
        this.y = a;
        this.e("MinZoomWidth");
    }
    get startInset() {
        return this.ab;
    }
    set startInset(a) {
        this.ab = a;
        this.e("StartInset");
    }
    get endInset() {
        return this.m;
    }
    set endInset(a) {
        this.m = a;
        this.e("EndInset");
    }
    get trackStartInset() {
        return this.ad;
    }
    set trackStartInset(a) {
        this.ad = a;
        this.e("TrackStartInset");
    }
    get trackEndInset() {
        return this.ac;
    }
    set trackEndInset(a) {
        this.ac = a;
        this.e("TrackEndInset");
    }
    get barExtent() {
        return this.k;
    }
    set barExtent(a) {
        this.k = a;
        this.e("BarExtent");
    }
    get orientation() {
        return this.bk;
    }
    set orientation(a) {
        this.bk = a;
        this.e("Orientation");
    }
    get lowerThumbBrush() {
        return this.bh;
    }
    set lowerThumbBrush(a) {
        this.bh = a;
        this.e("LowerThumbBrush");
    }
    get lowerThumbStrokeThickness() {
        return this.v;
    }
    set lowerThumbStrokeThickness(a) {
        this.v = a;
        this.e("LowerThumbStrokeThickness");
    }
    get higherThumbStrokeThickness() {
        return this.q;
    }
    set higherThumbStrokeThickness(a) {
        this.q = a;
        this.e("HigherThumbStrokeThickness");
    }
    get higherThumbBrush() {
        return this.a9;
    }
    set higherThumbBrush(a) {
        this.a9 = a;
        this.e("HigherThumbBrush");
    }
    get lowerThumbOutline() {
        return this.bi;
    }
    set lowerThumbOutline(a) {
        this.bi = a;
        this.e("LowerThumbOutline");
    }
    get higherThumbOutline() {
        return this.ba;
    }
    set higherThumbOutline(a) {
        this.ba = a;
        this.e("HigherThumbOutline");
    }
    get lowerThumbRidgesBrush() {
        return this.bj;
    }
    set lowerThumbRidgesBrush(a) {
        this.bj = a;
        this.e("LowerThumbRidgesBrush");
    }
    get higherThumbRidgesBrush() {
        return this.bb;
    }
    set higherThumbRidgesBrush(a) {
        this.bb = a;
        this.e("HigherThumbRidgesBrush");
    }
    get lowerThumbWidth() {
        return this.w;
    }
    set lowerThumbWidth(a) {
        this.w = a;
        this.e("LowerThumbWidth");
    }
    get higherThumbWidth() {
        return this.r;
    }
    set higherThumbWidth(a) {
        this.r = a;
        this.e("HigherThumbWidth");
    }
    get lowerThumbHeight() {
        return this.u;
    }
    set lowerThumbHeight(a) {
        this.u = a;
        this.e("LowerThumbHeight");
    }
    get higherThumbHeight() {
        return this.p;
    }
    set higherThumbHeight(a) {
        this.p = a;
        this.e("HigherThumbHeight");
    }
    get lowerShadeBrush() {
        return this.bf;
    }
    set lowerShadeBrush(a) {
        this.bf = a;
        this.e("LowerShadeBrush");
    }
    get lowerShadeOutline() {
        return this.bg;
    }
    set lowerShadeOutline(a) {
        this.bg = a;
        this.e("LowerShadeOutline");
    }
    get lowerShadeStrokeThickness() {
        return this.t;
    }
    set lowerShadeStrokeThickness(a) {
        this.t = a;
        this.e("LowerShadeStrokeThickness");
    }
    get higherShadeBrush() {
        return this.a7;
    }
    set higherShadeBrush(a) {
        this.a7 = a;
        this.e("HigherShadeBrush");
    }
    get higherShadeOutline() {
        return this.a8;
    }
    set higherShadeOutline(a) {
        this.a8 = a;
        this.e("HigherShadeOutline");
    }
    get higherShadeStrokeThickness() {
        return this.o;
    }
    set higherShadeStrokeThickness(a) {
        this.o = a;
        this.e("HigherShadeStrokeThickness");
    }
    get barBrush() {
        return this.a2;
    }
    set barBrush(a) {
        this.a2 = a;
        this.e("BarBrush");
    }
    get barOutline() {
        return this.a3;
    }
    set barOutline(a) {
        this.a3 = a;
        this.e("BarOutline");
    }
    get barStrokeThickness() {
        return this.l;
    }
    set barStrokeThickness(a) {
        this.l = a;
        this.e("BarStrokeThickness");
    }
    get rangeThumbBrush() {
        return this.bl;
    }
    set rangeThumbBrush(a) {
        this.bl = a;
        this.e("RangeThumbBrush");
    }
    get rangeThumbOutline() {
        return this.bm;
    }
    set rangeThumbOutline(a) {
        this.bm = a;
        this.e("RangeThumbOutline");
    }
    get rangeThumbStrokeThickness() {
        return this.aa;
    }
    set rangeThumbStrokeThickness(a) {
        this.aa = a;
        this.e("RangeThumbStrokeThickness");
    }
    get rangeThumbRidgesBrush() {
        return this.bn;
    }
    set rangeThumbRidgesBrush(a) {
        this.bn = a;
        this.e("RangeThumbRidgesBrush");
    }
    get lowerCalloutBrush() {
        return this.bc;
    }
    set lowerCalloutBrush(a) {
        this.bc = a;
        this.e("LowerCalloutBrush");
    }
    get lowerCalloutTextColor() {
        return this.be;
    }
    set lowerCalloutTextColor(a) {
        this.be = a;
        this.e("LowerCalloutTextColor");
    }
    get lowerCalloutOutline() {
        return this.bd;
    }
    set lowerCalloutOutline(a) {
        this.bd = a;
        this.e("LowerCalloutOutline");
    }
    get lowerCalloutStrokeThickness() {
        return this.s;
    }
    set lowerCalloutStrokeThickness(a) {
        this.s = a;
        this.e("LowerCalloutStrokeThickness");
    }
    get higherCalloutBrush() {
        return this.a4;
    }
    set higherCalloutBrush(a) {
        this.a4 = a;
        this.e("HigherCalloutBrush");
    }
    get higherCalloutTextColor() {
        return this.a6;
    }
    set higherCalloutTextColor(a) {
        this.a6 = a;
        this.e("HigherCalloutTextColor");
    }
    get higherCalloutOutline() {
        return this.a5;
    }
    set higherCalloutOutline(a) {
        this.a5 = a;
        this.e("HigherCalloutOutline");
    }
    get higherCalloutStrokeThickness() {
        return this.n;
    }
    set higherCalloutStrokeThickness(a) {
        this.n = a;
        this.e("HigherCalloutStrokeThickness");
    }
    get areThumbCalloutsEnabled() {
        return this.h;
    }
    set areThumbCalloutsEnabled(a) {
        this.h = a;
        this.e("AreThumbCalloutsEnabled");
    }
    get thumbCalloutFontFamily() {
        return this._thumbCalloutFontFamily;
    }
    set thumbCalloutFontFamily(a) {
        this._thumbCalloutFontFamily = a;
    }
    get thumbCalloutFontSize() {
        return this._thumbCalloutFontSize;
    }
    set thumbCalloutFontSize(a) {
        this._thumbCalloutFontSize = a;
    }
    get thumbCalloutFontStyle() {
        return this._thumbCalloutFontStyle;
    }
    set thumbCalloutFontStyle(a) {
        this._thumbCalloutFontStyle = a;
    }
    get thumbCalloutFontWeight() {
        return this._thumbCalloutFontWeight;
    }
    set thumbCalloutFontWeight(a) {
        this._thumbCalloutFontWeight = a;
    }
    get ResolvingAxisValueRef() {
        return this.bo;
    }
    set ResolvingAxisValueRef(a) {
        this.bo = a;
        this.e("ResolvingAxisValueRef");
    }
    get WindowRectChangedRef() {
        return this.bp;
    }
    set WindowRectChangedRef(a) {
        this.bp = a;
        this.e("WindowRectChangedRef");
    }
}
ZoomSliderDescription.$t = markType(ZoomSliderDescription, 'ZoomSliderDescription', Description.$);
//# sourceMappingURL=ZoomSliderDescription.js.map