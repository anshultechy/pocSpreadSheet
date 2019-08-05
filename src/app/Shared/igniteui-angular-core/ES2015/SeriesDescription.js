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
export class SeriesDescription extends Description {
    constructor() {
        super();
        this.az = null;
        this.ax = null;
        this.ay = null;
        this.av = null;
        this.a5 = null;
        this.a6 = null;
        this.al = 0;
        this.x = 0;
        this.as = null;
        this.ap = null;
        this.a0 = null;
        this.ar = null;
        this.ab = 0;
        this.i = false;
        this.h = false;
        this.y = 0;
        this.a2 = null;
        this.l = false;
        this.z = 0;
        this.aa = 0;
        this.u = 0;
        this.t = 0;
        this.g = false;
        this.k = false;
        this.am = 0;
        this.a7 = null;
        this.j = false;
        this.at = null;
        this.f = false;
        this.aw = null;
        this.aq = null;
        this.v = 0;
        this.w = 0;
        this.a1 = null;
        this.a4 = null;
        this.au = null;
        this.a3 = null;
    }
    get_type() {
        return "Series";
    }
    get type() {
        return this.get_type();
    }
    get legendItemVisibility() {
        return this.az;
    }
    set legendItemVisibility(a) {
        this.az = a;
        this.e("LegendItemVisibility");
    }
    get legendItemBadgeTemplateRef() {
        return this.ax;
    }
    set legendItemBadgeTemplateRef(a) {
        this.ax = a;
        this.e("LegendItemBadgeTemplateRef");
    }
    get legendItemTemplateRef() {
        return this.ay;
    }
    set legendItemTemplateRef(a) {
        this.ay = a;
        this.e("LegendItemTemplateRef");
    }
    get discreteLegendItemTemplateRef() {
        return this.av;
    }
    set discreteLegendItemTemplateRef(a) {
        this.av = a;
        this.e("DiscreteLegendItemTemplateRef");
    }
    get transitionEasingFunctionRef() {
        return this.a5;
    }
    set transitionEasingFunctionRef(a) {
        this.a5 = a;
        this.e("TransitionEasingFunctionRef");
    }
    get transitionInEasingFunctionRef() {
        return this.a6;
    }
    set transitionInEasingFunctionRef(a) {
        this.a6 = a;
        this.e("TransitionInEasingFunctionRef");
    }
    get transitionDuration() {
        return this.al;
    }
    set transitionDuration(a) {
        this.al = a;
        this.e("TransitionDuration");
    }
    get resolution() {
        return this.x;
    }
    set resolution(a) {
        this.x = a;
        this.e("Resolution");
    }
    get brush() {
        return this.as;
    }
    set brush(a) {
        this.as = a;
        this.e("Brush");
    }
    get actualBrush() {
        return this.ap;
    }
    set actualBrush(a) {
        this.ap = a;
        this.e("ActualBrush");
    }
    get outline() {
        return this.a0;
    }
    set outline(a) {
        this.a0 = a;
        this.e("Outline");
    }
    get actualOutline() {
        return this.ar;
    }
    set actualOutline(a) {
        this.ar = a;
        this.e("ActualOutline");
    }
    get thickness() {
        return this.ab;
    }
    set thickness(a) {
        this.ab = a;
        this.e("Thickness");
    }
    get isHighlightingEnabled() {
        return this.i;
    }
    set isHighlightingEnabled(a) {
        this.i = a;
        this.e("IsHighlightingEnabled");
    }
    get isDropShadowEnabled() {
        return this.h;
    }
    set isDropShadowEnabled(a) {
        this.h = a;
        this.e("IsDropShadowEnabled");
    }
    get shadowBlur() {
        return this.y;
    }
    set shadowBlur(a) {
        this.y = a;
        this.e("ShadowBlur");
    }
    get shadowColor() {
        return this.a2;
    }
    set shadowColor(a) {
        this.a2 = a;
        this.e("ShadowColor");
    }
    get useSingleShadow() {
        return this.l;
    }
    set useSingleShadow(a) {
        this.l = a;
        this.e("UseSingleShadow");
    }
    get shadowOffsetX() {
        return this.z;
    }
    set shadowOffsetX(a) {
        this.z = a;
        this.e("ShadowOffsetX");
    }
    get shadowOffsetY() {
        return this.aa;
    }
    set shadowOffsetY(a) {
        this.aa = a;
        this.e("ShadowOffsetY");
    }
    get areaFillOpacity() {
        return this.u;
    }
    set areaFillOpacity(a) {
        this.u = a;
        this.e("AreaFillOpacity");
    }
    get actualAreaFillOpacity() {
        return this.t;
    }
    set actualAreaFillOpacity(a) {
        this.t = a;
        this.e("ActualAreaFillOpacity");
    }
    get isDefaultToolTipSelected() {
        return this.g;
    }
    set isDefaultToolTipSelected(a) {
        this.g = a;
        this.e("IsDefaultToolTipSelected");
    }
    get showDefaultTooltip() {
        return this.k;
    }
    set showDefaultTooltip(a) {
        this.k = a;
        this.e("ShowDefaultTooltip");
    }
    get transitionInDuration() {
        return this.am;
    }
    set transitionInDuration(a) {
        this.am = a;
        this.e("TransitionInDuration");
    }
    get transitionInSpeedType() {
        return this.a7;
    }
    set transitionInSpeedType(a) {
        this.a7 = a;
        this.e("TransitionInSpeedType");
    }
    get mouseOverEnabled() {
        return this.j;
    }
    set mouseOverEnabled(a) {
        this.j = a;
        this.e("MouseOverEnabled");
    }
    get coercionMethodsRef() {
        return this.at;
    }
    set coercionMethodsRef(a) {
        this.at = a;
        this.e("CoercionMethodsRef");
    }
    get expectFunctions() {
        return this.f;
    }
    set expectFunctions(a) {
        this.f = a;
        this.e("ExpectFunctions");
    }
    get hitTestMode() {
        return this.aw;
    }
    set hitTestMode(a) {
        this.aw = a;
        this.e("HitTestMode");
    }
    get actualHitTestMode() {
        return this.aq;
    }
    set actualHitTestMode(a) {
        this.aq = a;
        this.e("ActualHitTestMode");
    }
    get finalValue() {
        return this.v;
    }
    set finalValue(a) {
        this.v = a;
        this.e("FinalValue");
    }
    get percentChange() {
        return this.w;
    }
    set percentChange(a) {
        this.w = a;
        this.e("PercentChange");
    }
    get RenderRequestedRef() {
        return this.a1;
    }
    set RenderRequestedRef(a) {
        this.a1 = a;
        this.e("RenderRequestedRef");
    }
    get tooltipTemplateRef() {
        return this.a4;
    }
    set tooltipTemplateRef(a) {
        this.a4 = a;
        this.e("TooltipTemplateRef");
    }
    get dataSourceRef() {
        return this.au;
    }
    set dataSourceRef(a) {
        this.au = a;
        this.e("DataSourceRef");
    }
    get title() {
        return this.a3;
    }
    set title(a) {
        this.a3 = a;
        this.e("Title");
    }
}
SeriesDescription.$t = markType(SeriesDescription, 'SeriesDescription', Description.$);
//# sourceMappingURL=SeriesDescription.js.map