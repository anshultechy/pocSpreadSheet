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
export class RingSeriesBaseDescription extends Description {
    constructor() {
        super();
        this.a4 = null;
        this.aj = null;
        this.aw = null;
        this.ak = null;
        this.l = 0;
        this.am = null;
        this.al = null;
        this.a5 = null;
        this.ap = null;
        this.av = null;
        this.aq = null;
        this.au = null;
        this.ar = null;
        this.as = null;
        this.p = 0;
        this.o = 0;
        this.at = null;
        this.n = 0;
        this.s = 0;
        this.a0 = null;
        this.az = null;
        this.an = null;
        this.ao = null;
        this.m = 0;
        this.w = 0;
        this.ax = null;
        this.ay = null;
        this.r = 0;
        this.q = 0;
        this.a2 = null;
        this.a3 = null;
        this.v = 0;
        this.u = 0;
        this.f = null;
        this.g = null;
        this.j = false;
        this.t = 0;
        this.a1 = null;
    }
    get tooltipTemplateRef() {
        return this.a4;
    }
    set tooltipTemplateRef(a) {
        this.a4 = a;
        this.e("TooltipTemplateRef");
    }
    get dataSourceRef() {
        return this.aj;
    }
    set dataSourceRef(a) {
        this.aj = a;
        this.e("DataSourceRef");
    }
    get legendRef() {
        return this.aw;
    }
    set legendRef(a) {
        this.aw = a;
        this.e("LegendRef");
    }
    get fontFamily() {
        return this.ak;
    }
    set fontFamily(a) {
        this.ak = a;
        this.e("FontFamily");
    }
    get fontSize() {
        return this.l;
    }
    set fontSize(a) {
        this.l = a;
        this.e("FontSize");
    }
    get fontWeight() {
        return this.am;
    }
    set fontWeight(a) {
        this.am = a;
        this.e("FontWeight");
    }
    get fontStyle() {
        return this.al;
    }
    set fontStyle(a) {
        this.al = a;
        this.e("FontStyle");
    }
    get_type() {
        return "RingSeriesBase";
    }
    get type() {
        return this.get_type();
    }
    get valueMemberPath() {
        return this.a5;
    }
    set valueMemberPath(a) {
        this.a5 = a;
        this.e("ValueMemberPath");
    }
    get labelMemberPath() {
        return this.ap;
    }
    set labelMemberPath(a) {
        this.ap = a;
        this.e("LabelMemberPath");
    }
    get legendLabelMemberPath() {
        return this.av;
    }
    set legendLabelMemberPath(a) {
        this.av = a;
        this.e("LegendLabelMemberPath");
    }
    get labelsPosition() {
        return this.aq;
    }
    set labelsPosition(a) {
        this.aq = a;
        this.e("LabelsPosition");
    }
    get leaderLineVisibility() {
        return this.au;
    }
    set leaderLineVisibility(a) {
        this.au = a;
        this.e("LeaderLineVisibility");
    }
    get leaderLineFill() {
        return this.ar;
    }
    set leaderLineFill(a) {
        this.ar = a;
        this.e("LeaderLineFill");
    }
    get leaderLineStroke() {
        return this.as;
    }
    set leaderLineStroke(a) {
        this.as = a;
        this.e("LeaderLineStroke");
    }
    get leaderLineStrokeThickness() {
        return this.p;
    }
    set leaderLineStrokeThickness(a) {
        this.p = a;
        this.e("LeaderLineStrokeThickness");
    }
    get leaderLineOpacity() {
        return this.o;
    }
    set leaderLineOpacity(a) {
        this.o = a;
        this.e("LeaderLineOpacity");
    }
    get leaderLineType() {
        return this.at;
    }
    set leaderLineType(a) {
        this.at = a;
        this.e("LeaderLineType");
    }
    get leaderLineMargin() {
        return this.n;
    }
    set leaderLineMargin(a) {
        this.n = a;
        this.e("LeaderLineMargin");
    }
    get othersCategoryThreshold() {
        return this.s;
    }
    set othersCategoryThreshold(a) {
        this.s = a;
        this.e("OthersCategoryThreshold");
    }
    get othersCategoryType() {
        return this.a0;
    }
    set othersCategoryType(a) {
        this.a0 = a;
        this.e("OthersCategoryType");
    }
    get othersCategoryText() {
        return this.az;
    }
    set othersCategoryText(a) {
        this.az = a;
        this.e("OthersCategoryText");
    }
    get formatLabelRef() {
        return this.an;
    }
    set formatLabelRef(a) {
        this.an = a;
        this.e("FormatLabelRef");
    }
    get formatLegendLabelRef() {
        return this.ao;
    }
    set formatLegendLabelRef(a) {
        this.ao = a;
        this.e("FormatLegendLabelRef");
    }
    get labelExtent() {
        return this.m;
    }
    set labelExtent(a) {
        this.m = a;
        this.e("LabelExtent");
    }
    get startAngle() {
        return this.w;
    }
    set startAngle(a) {
        this.w = a;
        this.e("StartAngle");
    }
    get othersCategoryFill() {
        return this.ax;
    }
    set othersCategoryFill(a) {
        this.ax = a;
        this.e("OthersCategoryFill");
    }
    get othersCategoryStroke() {
        return this.ay;
    }
    set othersCategoryStroke(a) {
        this.ay = a;
        this.e("OthersCategoryStroke");
    }
    get othersCategoryStrokeThickness() {
        return this.r;
    }
    set othersCategoryStrokeThickness(a) {
        this.r = a;
        this.e("OthersCategoryStrokeThickness");
    }
    get othersCategoryOpacity() {
        return this.q;
    }
    set othersCategoryOpacity(a) {
        this.q = a;
        this.e("OthersCategoryOpacity");
    }
    get selectedSliceFill() {
        return this.a2;
    }
    set selectedSliceFill(a) {
        this.a2 = a;
        this.e("SelectedSliceFill");
    }
    get selectedSliceStroke() {
        return this.a3;
    }
    set selectedSliceStroke(a) {
        this.a3 = a;
        this.e("SelectedSliceStroke");
    }
    get selectedSliceStrokeThickness() {
        return this.v;
    }
    set selectedSliceStrokeThickness(a) {
        this.v = a;
        this.e("SelectedSliceStrokeThickness");
    }
    get selectedSliceOpacity() {
        return this.u;
    }
    set selectedSliceOpacity(a) {
        this.u = a;
        this.e("SelectedSliceOpacity");
    }
    get brushes() {
        return this.f;
    }
    set brushes(a) {
        this.f = a;
        this.e("Brushes");
    }
    get outlines() {
        return this.g;
    }
    set outlines(a) {
        this.g = a;
        this.e("Outlines");
    }
    get isSurfaceInteractionDisabled() {
        return this.j;
    }
    set isSurfaceInteractionDisabled(a) {
        this.j = a;
        this.e("IsSurfaceInteractionDisabled");
    }
    get radiusFactor() {
        return this.t;
    }
    set radiusFactor(a) {
        this.t = a;
        this.e("RadiusFactor");
    }
    get PropertyUpdatedRef() {
        return this.a1;
    }
    set PropertyUpdatedRef(a) {
        this.a1 = a;
        this.e("PropertyUpdatedRef");
    }
}
RingSeriesBaseDescription.$t = markType(RingSeriesBaseDescription, 'RingSeriesBaseDescription', Description.$);
//# sourceMappingURL=RingSeriesBaseDescription.js.map