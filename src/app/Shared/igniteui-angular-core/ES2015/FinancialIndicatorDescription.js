/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FinancialSeriesDescription } from "./FinancialSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class FinancialIndicatorDescription extends FinancialSeriesDescription {
    constructor() {
        super();
        this.cr = null;
        this.cm = 0;
        this.ct = null;
        this.cs = null;
        this.cq = null;
        this.ck = 0;
        this.cn = 0;
    }
    get_type() {
        return "FinancialIndicator";
    }
    get displayType() {
        return this.cr;
    }
    set displayType(a) {
        this.cr = a;
        this.e("DisplayType");
    }
    get ignoreFirst() {
        return this.cm;
    }
    set ignoreFirst(a) {
        this.cm = a;
        this.e("IgnoreFirst");
    }
    get trendLineType() {
        return this.ct;
    }
    set trendLineType(a) {
        this.ct = a;
        this.e("TrendLineType");
    }
    get trendLineBrush() {
        return this.cs;
    }
    set trendLineBrush(a) {
        this.cs = a;
        this.e("TrendLineBrush");
    }
    get actualTrendLineBrush() {
        return this.cq;
    }
    set actualTrendLineBrush(a) {
        this.cq = a;
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
        return this.cn;
    }
    set trendLinePeriod(a) {
        this.cn = a;
        this.e("TrendLinePeriod");
    }
}
FinancialIndicatorDescription.$t = markType(FinancialIndicatorDescription, 'FinancialIndicatorDescription', FinancialSeriesDescription.$);
//# sourceMappingURL=FinancialIndicatorDescription.js.map