/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AnchoredCategorySeriesDescription } from "./AnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class HorizontalAnchoredCategorySeriesDescription extends AnchoredCategorySeriesDescription {
    constructor() {
        super();
        this.c0 = null;
        this.c1 = null;
    }
    get_type() {
        return "HorizontalAnchoredCategorySeries";
    }
    get xAxisRef() {
        return this.c0;
    }
    set xAxisRef(a) {
        this.c0 = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.c1;
    }
    set yAxisRef(a) {
        this.c1 = a;
        this.e("YAxisRef");
    }
}
HorizontalAnchoredCategorySeriesDescription.$t = markType(HorizontalAnchoredCategorySeriesDescription, 'HorizontalAnchoredCategorySeriesDescription', AnchoredCategorySeriesDescription.$);
//# sourceMappingURL=HorizontalAnchoredCategorySeriesDescription.js.map