/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class PolarBaseDescription extends MarkerSeriesDescription {
    constructor() {
        super();
        this.ck = null;
        this.cm = null;
        this.cj = null;
        this.cl = null;
        this.b7 = false;
        this.cc = 0;
        this.co = null;
        this.cn = null;
        this.ci = null;
        this.ca = 0;
        this.cd = 0;
        this.ce = 0;
        this.b6 = false;
    }
    get_type() {
        return "PolarBase";
    }
    get angleMemberPath() {
        return this.ck;
    }
    set angleMemberPath(a) {
        this.ck = a;
        this.e("AngleMemberPath");
    }
    get radiusMemberPath() {
        return this.cm;
    }
    set radiusMemberPath(a) {
        this.cm = a;
        this.e("RadiusMemberPath");
    }
    get angleAxisRef() {
        return this.cj;
    }
    set angleAxisRef(a) {
        this.cj = a;
        this.e("AngleAxisRef");
    }
    get radiusAxisRef() {
        return this.cl;
    }
    set radiusAxisRef(a) {
        this.cl = a;
        this.e("RadiusAxisRef");
    }
    get useCartesianInterpolation() {
        return this.b7;
    }
    set useCartesianInterpolation(a) {
        this.b7 = a;
        this.e("UseCartesianInterpolation");
    }
    get maximumMarkers() {
        return this.cc;
    }
    set maximumMarkers(a) {
        this.cc = a;
        this.e("MaximumMarkers");
    }
    get trendLineType() {
        return this.co;
    }
    set trendLineType(a) {
        this.co = a;
        this.e("TrendLineType");
    }
    get trendLineBrush() {
        return this.cn;
    }
    set trendLineBrush(a) {
        this.cn = a;
        this.e("TrendLineBrush");
    }
    get actualTrendLineBrush() {
        return this.ci;
    }
    set actualTrendLineBrush(a) {
        this.ci = a;
        this.e("ActualTrendLineBrush");
    }
    get trendLineThickness() {
        return this.ca;
    }
    set trendLineThickness(a) {
        this.ca = a;
        this.e("TrendLineThickness");
    }
    get trendLinePeriod() {
        return this.cd;
    }
    set trendLinePeriod(a) {
        this.cd = a;
        this.e("TrendLinePeriod");
    }
    get trendLineZIndex() {
        return this.ce;
    }
    set trendLineZIndex(a) {
        this.ce = a;
        this.e("TrendLineZIndex");
    }
    get clipSeriesToBounds() {
        return this.b6;
    }
    set clipSeriesToBounds(a) {
        this.b6 = a;
        this.e("ClipSeriesToBounds");
    }
}
PolarBaseDescription.$t = markType(PolarBaseDescription, 'PolarBaseDescription', MarkerSeriesDescription.$);
//# sourceMappingURL=PolarBaseDescription.js.map