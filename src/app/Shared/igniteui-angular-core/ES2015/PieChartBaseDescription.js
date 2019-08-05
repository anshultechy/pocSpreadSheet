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
export class PieChartBaseDescription extends Description {
    constructor() {
        super();
        this.bq = null;
        this.av = null;
        this.aw = null;
        this.v = 0;
        this.ay = null;
        this.ax = null;
        this.w = 0;
        this.br = null;
        this.a3 = null;
        this.ba = null;
        this.a5 = null;
        this.a4 = null;
        this.a2 = null;
        this.a7 = null;
        this.a6 = null;
        this.y = 0;
        this.ab = 0;
        this.be = null;
        this.bd = null;
        this.u = 0;
        this.ad = 0;
        this.o = false;
        this.n = false;
        this.g = null;
        this.x = 0;
        this.ag = 0;
        this.bo = null;
        this.bb = null;
        this.bc = null;
        this.aa = 0;
        this.z = 0;
        this.bk = null;
        this.bl = null;
        this.af = 0;
        this.ae = 0;
        this.f = null;
        this.h = null;
        this.a9 = null;
        this.a8 = null;
        this.p = false;
        this.az = null;
        this.a0 = null;
        this.ac = 0;
        this.t = 0;
        this.bm = null;
        this.bh = null;
        this.i = null;
        this.bp = null;
        this.a1 = null;
        this.bg = null;
        this.bj = null;
        this.bf = null;
        this.bi = null;
        this.bn = null;
    }
    get tooltipTemplateRef() {
        return this.bq;
    }
    set tooltipTemplateRef(a) {
        this.bq = a;
        this.e("TooltipTemplateRef");
    }
    get dataSourceRef() {
        return this.av;
    }
    set dataSourceRef(a) {
        this.av = a;
        this.e("DataSourceRef");
    }
    get fontFamily() {
        return this.aw;
    }
    set fontFamily(a) {
        this.aw = a;
        this.e("FontFamily");
    }
    get fontSize() {
        return this.v;
    }
    set fontSize(a) {
        this.v = a;
        this.e("FontSize");
    }
    get fontWeight() {
        return this.ay;
    }
    set fontWeight(a) {
        this.ay = a;
        this.e("FontWeight");
    }
    get fontStyle() {
        return this.ax;
    }
    set fontStyle(a) {
        this.ax = a;
        this.e("FontStyle");
    }
    get_type() {
        return "PieChartBase";
    }
    get type() {
        return this.get_type();
    }
    get innerExtent() {
        return this.w;
    }
    set innerExtent(a) {
        this.w = a;
        this.e("InnerExtent");
    }
    get valueMemberPath() {
        return this.br;
    }
    set valueMemberPath(a) {
        this.br = a;
        this.e("ValueMemberPath");
    }
    get labelMemberPath() {
        return this.a3;
    }
    set labelMemberPath(a) {
        this.a3 = a;
        this.e("LabelMemberPath");
    }
    get legendLabelMemberPath() {
        return this.ba;
    }
    set legendLabelMemberPath(a) {
        this.ba = a;
        this.e("LegendLabelMemberPath");
    }
    get labelsPosition() {
        return this.a5;
    }
    set labelsPosition(a) {
        this.a5 = a;
        this.e("LabelsPosition");
    }
    get labelOuterColor() {
        return this.a4;
    }
    set labelOuterColor(a) {
        this.a4 = a;
        this.e("LabelOuterColor");
    }
    get labelInnerColor() {
        return this.a2;
    }
    set labelInnerColor(a) {
        this.a2 = a;
        this.e("LabelInnerColor");
    }
    get leaderLineVisibility() {
        return this.a7;
    }
    set leaderLineVisibility(a) {
        this.a7 = a;
        this.e("LeaderLineVisibility");
    }
    get leaderLineType() {
        return this.a6;
    }
    set leaderLineType(a) {
        this.a6 = a;
        this.e("LeaderLineType");
    }
    get leaderLineMargin() {
        return this.y;
    }
    set leaderLineMargin(a) {
        this.y = a;
        this.e("LeaderLineMargin");
    }
    get othersCategoryThreshold() {
        return this.ab;
    }
    set othersCategoryThreshold(a) {
        this.ab = a;
        this.e("OthersCategoryThreshold");
    }
    get othersCategoryType() {
        return this.be;
    }
    set othersCategoryType(a) {
        this.be = a;
        this.e("OthersCategoryType");
    }
    get othersCategoryText() {
        return this.bd;
    }
    set othersCategoryText(a) {
        this.bd = a;
        this.e("OthersCategoryText");
    }
    get explodedRadius() {
        return this.u;
    }
    set explodedRadius(a) {
        this.u = a;
        this.e("ExplodedRadius");
    }
    get radiusFactor() {
        return this.ad;
    }
    set radiusFactor(a) {
        this.ad = a;
        this.e("RadiusFactor");
    }
    get allowSliceSelection() {
        return this.o;
    }
    set allowSliceSelection(a) {
        this.o = a;
        this.e("AllowSliceSelection");
    }
    get allowSliceExplosion() {
        return this.n;
    }
    set allowSliceExplosion(a) {
        this.n = a;
        this.e("AllowSliceExplosion");
    }
    get explodedSlices() {
        return this.g;
    }
    set explodedSlices(a) {
        this.g = a;
        this.e("ExplodedSlices");
    }
    get labelExtent() {
        return this.x;
    }
    set labelExtent(a) {
        this.x = a;
        this.e("LabelExtent");
    }
    get startAngle() {
        return this.ag;
    }
    set startAngle(a) {
        this.ag = a;
        this.e("StartAngle");
    }
    get sweepDirection() {
        return this.bo;
    }
    set sweepDirection(a) {
        this.bo = a;
        this.e("SweepDirection");
    }
    get othersCategoryFill() {
        return this.bb;
    }
    set othersCategoryFill(a) {
        this.bb = a;
        this.e("OthersCategoryFill");
    }
    get othersCategoryStroke() {
        return this.bc;
    }
    set othersCategoryStroke(a) {
        this.bc = a;
        this.e("OthersCategoryStroke");
    }
    get othersCategoryStrokeThickness() {
        return this.aa;
    }
    set othersCategoryStrokeThickness(a) {
        this.aa = a;
        this.e("OthersCategoryStrokeThickness");
    }
    get othersCategoryOpacity() {
        return this.z;
    }
    set othersCategoryOpacity(a) {
        this.z = a;
        this.e("OthersCategoryOpacity");
    }
    get selectedSliceFill() {
        return this.bk;
    }
    set selectedSliceFill(a) {
        this.bk = a;
        this.e("SelectedSliceFill");
    }
    get selectedSliceStroke() {
        return this.bl;
    }
    set selectedSliceStroke(a) {
        this.bl = a;
        this.e("SelectedSliceStroke");
    }
    get selectedSliceStrokeThickness() {
        return this.af;
    }
    set selectedSliceStrokeThickness(a) {
        this.af = a;
        this.e("SelectedSliceStrokeThickness");
    }
    get selectedSliceOpacity() {
        return this.ae;
    }
    set selectedSliceOpacity(a) {
        this.ae = a;
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
        return this.h;
    }
    set outlines(a) {
        this.h = a;
        this.e("Outlines");
    }
    get legendItemTemplateRef() {
        return this.a9;
    }
    set legendItemTemplateRef(a) {
        this.a9 = a;
        this.e("LegendItemTemplateRef");
    }
    get legendItemBadgeTemplateRef() {
        return this.a8;
    }
    set legendItemBadgeTemplateRef(a) {
        this.a8 = a;
        this.e("LegendItemBadgeTemplateRef");
    }
    get isSurfaceInteractionDisabled() {
        return this.p;
    }
    set isSurfaceInteractionDisabled(a) {
        this.p = a;
        this.e("IsSurfaceInteractionDisabled");
    }
    get formatLabelRef() {
        return this.az;
    }
    set formatLabelRef(a) {
        this.az = a;
        this.e("FormatLabelRef");
    }
    get formatLegendLabelRef() {
        return this.a0;
    }
    set formatLegendLabelRef(a) {
        this.a0 = a;
        this.e("FormatLegendLabelRef");
    }
    get pixelScalingRatio() {
        return this.ac;
    }
    set pixelScalingRatio(a) {
        this.ac = a;
        this.e("PixelScalingRatio");
    }
    get actualPixelScalingRatio() {
        return this.t;
    }
    set actualPixelScalingRatio(a) {
        this.t = a;
        this.e("ActualPixelScalingRatio");
    }
    get selectionMode() {
        return this.bm;
    }
    set selectionMode(a) {
        this.bm = a;
        this.e("SelectionMode");
    }
    get selectedItemRef() {
        return this.bh;
    }
    set selectedItemRef(a) {
        this.bh = a;
        this.e("SelectedItemRef");
    }
    get selectedItems() {
        return this.i;
    }
    set selectedItems(a) {
        this.i = a;
        this.e("SelectedItems");
    }
    get textStyle() {
        return this.bp;
    }
    set textStyle(a) {
        this.bp = a;
        this.e("TextStyle");
    }
    get LabelClickRef() {
        return this.a1;
    }
    set LabelClickRef(a) {
        this.a1 = a;
        this.e("LabelClickRef");
    }
    get SelectedItemChangingRef() {
        return this.bg;
    }
    set SelectedItemChangingRef(a) {
        this.bg = a;
        this.e("SelectedItemChangingRef");
    }
    get SelectedItemsChangingRef() {
        return this.bj;
    }
    set SelectedItemsChangingRef(a) {
        this.bj = a;
        this.e("SelectedItemsChangingRef");
    }
    get SelectedItemChangedRef() {
        return this.bf;
    }
    set SelectedItemChangedRef(a) {
        this.bf = a;
        this.e("SelectedItemChangedRef");
    }
    get SelectedItemsChangedRef() {
        return this.bi;
    }
    set SelectedItemsChangedRef(a) {
        this.bi = a;
        this.e("SelectedItemsChangedRef");
    }
    get SliceClickRef() {
        return this.bn;
    }
    set SliceClickRef(a) {
        this.bn = a;
        this.e("SliceClickRef");
    }
}
PieChartBaseDescription.$t = markType(PieChartBaseDescription, 'PieChartBaseDescription', Description.$);
//# sourceMappingURL=PieChartBaseDescription.js.map