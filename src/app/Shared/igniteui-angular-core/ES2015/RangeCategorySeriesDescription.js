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
export class RangeCategorySeriesDescription extends CategorySeriesDescription {
    constructor() {
        super();
        this.cl = null;
        this.ck = null;
    }
    get_type() {
        return "RangeCategorySeries";
    }
    get lowMemberPath() {
        return this.cl;
    }
    set lowMemberPath(a) {
        this.cl = a;
        this.e("LowMemberPath");
    }
    get highMemberPath() {
        return this.ck;
    }
    set highMemberPath(a) {
        this.ck = a;
        this.e("HighMemberPath");
    }
}
RangeCategorySeriesDescription.$t = markType(RangeCategorySeriesDescription, 'RangeCategorySeriesDescription', CategorySeriesDescription.$);
//# sourceMappingURL=RangeCategorySeriesDescription.js.map