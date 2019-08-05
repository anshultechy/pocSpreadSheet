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
export class StackedSeriesBaseDescription extends CategorySeriesDescription {
    constructor() {
        super();
        this.cm = false;
        this.cn = false;
        this.cq = null;
        this.ck = null;
    }
    get_type() {
        return "StackedSeriesBase";
    }
    get autoGenerateSeries() {
        return this.cm;
    }
    set autoGenerateSeries(a) {
        this.cm = a;
        this.e("AutoGenerateSeries");
    }
    get reverseLegendOrder() {
        return this.cn;
    }
    set reverseLegendOrder(a) {
        this.cn = a;
        this.e("ReverseLegendOrder");
    }
    get SeriesCreatedRef() {
        return this.cq;
    }
    set SeriesCreatedRef(a) {
        this.cq = a;
        this.e("SeriesCreatedRef");
    }
    get series() {
        return this.ck;
    }
    set series(a) {
        this.ck = a;
        this.e("Series");
    }
}
StackedSeriesBaseDescription.$t = markType(StackedSeriesBaseDescription, 'StackedSeriesBaseDescription', CategorySeriesDescription.$);
//# sourceMappingURL=StackedSeriesBaseDescription.js.map