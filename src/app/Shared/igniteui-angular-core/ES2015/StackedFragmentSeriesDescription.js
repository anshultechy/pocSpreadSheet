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
export class StackedFragmentSeriesDescription extends Description {
    constructor() {
        super();
        this.a4 = null;
        this.at = null;
        this.h = false;
        this.f = false;
        this.z = 0;
        this.r = 0;
        this.bg = null;
        this.a2 = null;
        this.i = false;
        this.g = false;
        this.aa = 0;
        this.s = 0;
        this.ab = 0;
        this.t = 0;
        this.a5 = null;
        this.au = null;
        this.a6 = null;
        this.av = null;
        this.a7 = null;
        this.aw = null;
        this.a8 = null;
        this.ax = null;
        this.a9 = null;
        this.ay = null;
        this.ba = null;
        this.az = null;
        this.bb = null;
        this.a0 = null;
        this.bc = null;
        this.w = 0;
        this.o = 0;
        this.bd = null;
        this.a1 = null;
        this.v = 0;
        this.n = 0;
        this.x = 0;
        this.p = 0;
        this.y = 0;
        this.q = 0;
        this.ac = 0;
        this.u = 0;
        this.bh = null;
        this.bi = null;
        this.bj = null;
        this.a3 = null;
        this.be = null;
        this.bf = null;
    }
    get_type() {
        return "StackedFragmentSeries";
    }
    get type() {
        return this.get_type();
    }
    get brush() {
        return this.a4;
    }
    set brush(a) {
        this.a4 = a;
        this.e("Brush");
    }
    get actualBrush() {
        return this.at;
    }
    set actualBrush(a) {
        this.at = a;
        this.e("ActualBrush");
    }
    get isDropShadowEnabled() {
        return this.h;
    }
    set isDropShadowEnabled(a) {
        this.h = a;
        this.e("IsDropShadowEnabled");
    }
    get actualIsDropShadowEnabled() {
        return this.f;
    }
    set actualIsDropShadowEnabled(a) {
        this.f = a;
        this.e("ActualIsDropShadowEnabled");
    }
    get shadowBlur() {
        return this.z;
    }
    set shadowBlur(a) {
        this.z = a;
        this.e("ShadowBlur");
    }
    get actualShadowBlur() {
        return this.r;
    }
    set actualShadowBlur(a) {
        this.r = a;
        this.e("ActualShadowBlur");
    }
    get shadowColor() {
        return this.bg;
    }
    set shadowColor(a) {
        this.bg = a;
        this.e("ShadowColor");
    }
    get actualShadowColor() {
        return this.a2;
    }
    set actualShadowColor(a) {
        this.a2 = a;
        this.e("ActualShadowColor");
    }
    get useSingleShadow() {
        return this.i;
    }
    set useSingleShadow(a) {
        this.i = a;
        this.e("UseSingleShadow");
    }
    get actualUseSingleShadow() {
        return this.g;
    }
    set actualUseSingleShadow(a) {
        this.g = a;
        this.e("ActualUseSingleShadow");
    }
    get shadowOffsetX() {
        return this.aa;
    }
    set shadowOffsetX(a) {
        this.aa = a;
        this.e("ShadowOffsetX");
    }
    get actualShadowOffsetX() {
        return this.s;
    }
    set actualShadowOffsetX(a) {
        this.s = a;
        this.e("ActualShadowOffsetX");
    }
    get shadowOffsetY() {
        return this.ab;
    }
    set shadowOffsetY(a) {
        this.ab = a;
        this.e("ShadowOffsetY");
    }
    get actualShadowOffsetY() {
        return this.t;
    }
    set actualShadowOffsetY(a) {
        this.t = a;
        this.e("ActualShadowOffsetY");
    }
    get legendItemBadgeTemplateRef() {
        return this.a5;
    }
    set legendItemBadgeTemplateRef(a) {
        this.a5 = a;
        this.e("LegendItemBadgeTemplateRef");
    }
    get actualLegendItemBadgeTemplateRef() {
        return this.au;
    }
    set actualLegendItemBadgeTemplateRef(a) {
        this.au = a;
        this.e("ActualLegendItemBadgeTemplateRef");
    }
    get legendItemTemplateRef() {
        return this.a6;
    }
    set legendItemTemplateRef(a) {
        this.a6 = a;
        this.e("LegendItemTemplateRef");
    }
    get actualLegendItemTemplateRef() {
        return this.av;
    }
    set actualLegendItemTemplateRef(a) {
        this.av = a;
        this.e("ActualLegendItemTemplateRef");
    }
    get legendItemVisibility() {
        return this.a7;
    }
    set legendItemVisibility(a) {
        this.a7 = a;
        this.e("LegendItemVisibility");
    }
    get actualLegendItemVisibility() {
        return this.aw;
    }
    set actualLegendItemVisibility(a) {
        this.aw = a;
        this.e("ActualLegendItemVisibility");
    }
    get markerBrush() {
        return this.a8;
    }
    set markerBrush(a) {
        this.a8 = a;
        this.e("MarkerBrush");
    }
    get actualMarkerBrush() {
        return this.ax;
    }
    set actualMarkerBrush(a) {
        this.ax = a;
        this.e("ActualMarkerBrush");
    }
    get markerOutline() {
        return this.a9;
    }
    set markerOutline(a) {
        this.a9 = a;
        this.e("MarkerOutline");
    }
    get actualMarkerOutline() {
        return this.ay;
    }
    set actualMarkerOutline(a) {
        this.ay = a;
        this.e("ActualMarkerOutline");
    }
    get markerTemplateRef() {
        return this.ba;
    }
    set markerTemplateRef(a) {
        this.ba = a;
        this.e("MarkerTemplateRef");
    }
    get actualMarkerTemplateRef() {
        return this.az;
    }
    set actualMarkerTemplateRef(a) {
        this.az = a;
        this.e("ActualMarkerTemplateRef");
    }
    get markerType() {
        return this.bb;
    }
    set markerType(a) {
        this.bb = a;
        this.e("MarkerType");
    }
    get actualMarkerType() {
        return this.a0;
    }
    set actualMarkerType(a) {
        this.a0 = a;
        this.e("ActualMarkerType");
    }
    get name() {
        return this.bc;
    }
    set name(a) {
        this.bc = a;
        this.e("Name");
    }
    get opacity() {
        return this.w;
    }
    set opacity(a) {
        this.w = a;
        this.e("Opacity");
    }
    get actualOpacity() {
        return this.o;
    }
    set actualOpacity(a) {
        this.o = a;
        this.e("ActualOpacity");
    }
    get outline() {
        return this.bd;
    }
    set outline(a) {
        this.bd = a;
        this.e("Outline");
    }
    get actualOutline() {
        return this.a1;
    }
    set actualOutline(a) {
        this.a1 = a;
        this.e("ActualOutline");
    }
    get areaFillOpacity() {
        return this.v;
    }
    set areaFillOpacity(a) {
        this.v = a;
        this.e("AreaFillOpacity");
    }
    get actualAreaFillOpacity() {
        return this.n;
    }
    set actualAreaFillOpacity(a) {
        this.n = a;
        this.e("ActualAreaFillOpacity");
    }
    get radiusX() {
        return this.x;
    }
    set radiusX(a) {
        this.x = a;
        this.e("RadiusX");
    }
    get actualRadiusX() {
        return this.p;
    }
    set actualRadiusX(a) {
        this.p = a;
        this.e("ActualRadiusX");
    }
    get radiusY() {
        return this.y;
    }
    set radiusY(a) {
        this.y = a;
        this.e("RadiusY");
    }
    get actualRadiusY() {
        return this.q;
    }
    set actualRadiusY(a) {
        this.q = a;
        this.e("ActualRadiusY");
    }
    get thickness() {
        return this.ac;
    }
    set thickness(a) {
        this.ac = a;
        this.e("Thickness");
    }
    get actualThickness() {
        return this.u;
    }
    set actualThickness(a) {
        this.u = a;
        this.e("ActualThickness");
    }
    get titleRef() {
        return this.bh;
    }
    set titleRef(a) {
        this.bh = a;
        this.e("TitleRef");
    }
    get valueMemberPath() {
        return this.bi;
    }
    set valueMemberPath(a) {
        this.bi = a;
        this.e("ValueMemberPath");
    }
    get visibility() {
        return this.bj;
    }
    set visibility(a) {
        this.bj = a;
        this.e("Visibility");
    }
    get actualVisibility() {
        return this.a3;
    }
    set actualVisibility(a) {
        this.a3 = a;
        this.e("ActualVisibility");
    }
    get parentOrLocalBrush() {
        return this.be;
    }
    set parentOrLocalBrush(a) {
        this.be = a;
        this.e("ParentOrLocalBrush");
    }
    get PropertyUpdatedRef() {
        return this.bf;
    }
    set PropertyUpdatedRef(a) {
        this.bf = a;
        this.e("PropertyUpdatedRef");
    }
}
StackedFragmentSeriesDescription.$t = markType(StackedFragmentSeriesDescription, 'StackedFragmentSeriesDescription', Description.$);
//# sourceMappingURL=StackedFragmentSeriesDescription.js.map