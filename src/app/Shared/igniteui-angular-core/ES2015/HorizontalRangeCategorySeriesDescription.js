/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { RangeCategorySeriesDescription } from "./RangeCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class HorizontalRangeCategorySeriesDescription extends RangeCategorySeriesDescription {
    constructor() {
        super();
        this.co = null;
        this.cp = null;
    }
    get_type() {
        return "HorizontalRangeCategorySeries";
    }
    get xAxisRef() {
        return this.co;
    }
    set xAxisRef(a) {
        this.co = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.cp;
    }
    set yAxisRef(a) {
        this.cp = a;
        this.e("YAxisRef");
    }
}
HorizontalRangeCategorySeriesDescription.$t = markType(HorizontalRangeCategorySeriesDescription, 'HorizontalRangeCategorySeriesDescription', RangeCategorySeriesDescription.$);
//# sourceMappingURL=HorizontalRangeCategorySeriesDescription.js.map