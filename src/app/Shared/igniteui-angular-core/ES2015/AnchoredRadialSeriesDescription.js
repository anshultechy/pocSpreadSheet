/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { RadialBaseDescription } from "./RadialBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class AnchoredRadialSeriesDescription extends RadialBaseDescription {
    constructor() {
        super();
        this.cl = null;
        this.ck = null;
        this.cj = null;
        this.ci = null;
        this.cc = 0;
        this.ce = 0;
        this.cf = 0;
    }
    get_type() {
        return "AnchoredRadialSeries";
    }
    get valueMemberPath() {
        return this.cl;
    }
    set valueMemberPath(a) {
        this.cl = a;
        this.e("ValueMemberPath");
    }
    get trendLineType() {
        return this.ck;
    }
    set trendLineType(a) {
        this.ck = a;
        this.e("TrendLineType");
    }
    get trendLineBrush() {
        return this.cj;
    }
    set trendLineBrush(a) {
        this.cj = a;
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
        return this.cc;
    }
    set trendLineThickness(a) {
        this.cc = a;
        this.e("TrendLineThickness");
    }
    get trendLinePeriod() {
        return this.ce;
    }
    set trendLinePeriod(a) {
        this.ce = a;
        this.e("TrendLinePeriod");
    }
    get trendLineZIndex() {
        return this.cf;
    }
    set trendLineZIndex(a) {
        this.cf = a;
        this.e("TrendLineZIndex");
    }
}
AnchoredRadialSeriesDescription.$t = markType(AnchoredRadialSeriesDescription, 'AnchoredRadialSeriesDescription', RadialBaseDescription.$);
//# sourceMappingURL=AnchoredRadialSeriesDescription.js.map