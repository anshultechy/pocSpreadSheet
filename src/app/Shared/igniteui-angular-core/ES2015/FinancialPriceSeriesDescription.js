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
export class FinancialPriceSeriesDescription extends FinancialSeriesDescription {
    constructor() {
        super();
        this.cs = null;
        this.cr = null;
        this.co = null;
        this.ck = 0;
        this.cm = 0;
        this.cp = null;
        this.cq = null;
    }
    get_type() {
        return "FinancialPriceSeries";
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
    get displayType() {
        return this.cp;
    }
    set displayType(a) {
        this.cp = a;
        this.e("DisplayType");
    }
    get negativeOutline() {
        return this.cq;
    }
    set negativeOutline(a) {
        this.cq = a;
        this.e("NegativeOutline");
    }
}
FinancialPriceSeriesDescription.$t = markType(FinancialPriceSeriesDescription, 'FinancialPriceSeriesDescription', FinancialSeriesDescription.$);
//# sourceMappingURL=FinancialPriceSeriesDescription.js.map