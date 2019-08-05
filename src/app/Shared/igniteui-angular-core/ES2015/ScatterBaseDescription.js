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
export class ScatterBaseDescription extends MarkerSeriesDescription {
    constructor() {
        super();
        this.ci = null;
        this.ck = null;
        this.cj = null;
        this.cl = null;
        this.ch = null;
        this.cg = null;
        this.ce = null;
        this.b6 = 0;
        this.b9 = 0;
        this.cf = null;
        this.ca = 0;
        this.b8 = 0;
    }
    get_type() {
        return "ScatterBase";
    }
    get xAxisRef() {
        return this.ci;
    }
    set xAxisRef(a) {
        this.ci = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.ck;
    }
    set yAxisRef(a) {
        this.ck = a;
        this.e("YAxisRef");
    }
    get xMemberPath() {
        return this.cj;
    }
    set xMemberPath(a) {
        this.cj = a;
        this.e("XMemberPath");
    }
    get yMemberPath() {
        return this.cl;
    }
    set yMemberPath(a) {
        this.cl = a;
        this.e("YMemberPath");
    }
    get trendLineType() {
        return this.ch;
    }
    set trendLineType(a) {
        this.ch = a;
        this.e("TrendLineType");
    }
    get trendLineBrush() {
        return this.cg;
    }
    set trendLineBrush(a) {
        this.cg = a;
        this.e("TrendLineBrush");
    }
    get actualTrendLineBrush() {
        return this.ce;
    }
    set actualTrendLineBrush(a) {
        this.ce = a;
        this.e("ActualTrendLineBrush");
    }
    get trendLineThickness() {
        return this.b6;
    }
    set trendLineThickness(a) {
        this.b6 = a;
        this.e("TrendLineThickness");
    }
    get trendLinePeriod() {
        return this.b9;
    }
    set trendLinePeriod(a) {
        this.b9 = a;
        this.e("TrendLinePeriod");
    }
    get markerCollisionAvoidance() {
        return this.cf;
    }
    set markerCollisionAvoidance(a) {
        this.cf = a;
        this.e("MarkerCollisionAvoidance");
    }
    get trendLineZIndex() {
        return this.ca;
    }
    set trendLineZIndex(a) {
        this.ca = a;
        this.e("TrendLineZIndex");
    }
    get maximumMarkers() {
        return this.b8;
    }
    set maximumMarkers(a) {
        this.b8 = a;
        this.e("MaximumMarkers");
    }
}
ScatterBaseDescription.$t = markType(ScatterBaseDescription, 'ScatterBaseDescription', MarkerSeriesDescription.$);
//# sourceMappingURL=ScatterBaseDescription.js.map