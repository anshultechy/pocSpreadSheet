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
export class StackedSeriesCreatedEventArgsDescription extends Description {
    constructor() {
        super();
        this.j = null;
        this.l = null;
        this.k = null;
        this.m = null;
        this.r = null;
        this.h = 0;
        this.s = null;
        this.n = null;
        this.o = null;
        this.f = null;
        this.p = null;
        this.q = null;
    }
    get_type() {
        return "StackedSeriesCreatedEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get brush() {
        return this.j;
    }
    set brush(a) {
        this.j = a;
        this.e("Brush");
    }
    get legendItemTemplateRef() {
        return this.l;
    }
    set legendItemTemplateRef(a) {
        this.l = a;
        this.e("LegendItemTemplateRef");
    }
    get legendItemBadgeTemplateRef() {
        return this.k;
    }
    set legendItemBadgeTemplateRef(a) {
        this.k = a;
        this.e("LegendItemBadgeTemplateRef");
    }
    get legendItemVisibility() {
        return this.m;
    }
    set legendItemVisibility(a) {
        this.m = a;
        this.e("LegendItemVisibility");
    }
    get outline() {
        return this.r;
    }
    set outline(a) {
        this.r = a;
        this.e("Outline");
    }
    get thickness() {
        return this.h;
    }
    set thickness(a) {
        this.h = a;
        this.e("Thickness");
    }
    get titleRef() {
        return this.s;
    }
    set titleRef(a) {
        this.s = a;
        this.e("TitleRef");
    }
    get markerBrush() {
        return this.n;
    }
    set markerBrush(a) {
        this.n = a;
        this.e("MarkerBrush");
    }
    get markerOutline() {
        return this.o;
    }
    set markerOutline(a) {
        this.o = a;
        this.e("MarkerOutline");
    }
    get markerStyle() {
        return this.f;
    }
    set markerStyle(a) {
        this.f = a;
        this.e("MarkerStyle");
    }
    get markerTemplateRef() {
        return this.p;
    }
    set markerTemplateRef(a) {
        this.p = a;
        this.e("MarkerTemplateRef");
    }
    get markerType() {
        return this.q;
    }
    set markerType(a) {
        this.q = a;
        this.e("MarkerType");
    }
}
StackedSeriesCreatedEventArgsDescription.$t = markType(StackedSeriesCreatedEventArgsDescription, 'StackedSeriesCreatedEventArgsDescription', Description.$);
//# sourceMappingURL=StackedSeriesCreatedEventArgsDescription.js.map