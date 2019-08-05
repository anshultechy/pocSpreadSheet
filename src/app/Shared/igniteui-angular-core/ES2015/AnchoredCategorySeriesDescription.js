/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class AnchoredCategorySeriesDescription extends CategorySeriesDescription {
    constructor() {
        super();
        this.ct = null;
        this.cs = null;
        this.cr = null;
        this.co = null;
        this.ck = 0;
        this.cm = 0;
        this.cq = null;
        this.cp = null;
    }
    get_type() {
        return "AnchoredCategorySeries";
    }
    get valueMemberPath() {
        return this.ct;
    }
    set valueMemberPath(a) {
        this.ct = a;
        this.e("ValueMemberPath");
    }
    get trendLineType() {
        return this.cs;
    }
    set trendLineType(a) {
        this.cs = a;
        this.e("TrendLineType");
    }
    get trendLineBrush() {
        return this.cr;
    }
    set trendLineBrush(a) {
        this.cr = a;
        this.e("TrendLineBrush");
    }
    get actualTrendLineBrush() {
        return this.co;
    }
    set actualTrendLineBrush(a) {
        this.co = a;
        this.e("ActualTrendLineBrush");
    }
    get trendLineThickness() {
        return this.ck;
    }
    set trendLineThickness(a) {
        this.ck = a;
        this.e("TrendLineThickness");
    }
    get trendLinePeriod() {
        return this.cm;
    }
    set trendLinePeriod(a) {
        this.cm = a;
        this.e("TrendLinePeriod");
    }
    get markerCollisionAvoidance() {
        return this.cq;
    }
    set markerCollisionAvoidance(a) {
        this.cq = a;
        this.e("MarkerCollisionAvoidance");
    }
    get consolidatedItemHitTestBehavior() {
        return this.cp;
    }
    set consolidatedItemHitTestBehavior(a) {
        this.cp = a;
        this.e("ConsolidatedItemHitTestBehavior");
    }
}
AnchoredCategorySeriesDescription.$t = markType(AnchoredCategorySeriesDescription, 'AnchoredCategorySeriesDescription', CategorySeriesDescription.$);
//# sourceMappingURL=AnchoredCategorySeriesDescription.js.map