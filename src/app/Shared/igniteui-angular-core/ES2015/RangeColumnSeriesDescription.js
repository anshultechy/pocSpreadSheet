/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { HorizontalRangeCategorySeriesDescription } from "./HorizontalRangeCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class RangeColumnSeriesDescription extends HorizontalRangeCategorySeriesDescription {
    constructor() {
        super();
        this.cs = 0;
        this.ct = 0;
    }
    get_type() {
        return "RangeColumnSeries";
    }
    get radiusX() {
        return this.cs;
    }
    set radiusX(a) {
        this.cs = a;
        this.e("RadiusX");
    }
    get radiusY() {
        return this.ct;
    }
    set radiusY(a) {
        this.ct = a;
        this.e("RadiusY");
    }
}
RangeColumnSeriesDescription.$t = markType(RangeColumnSeriesDescription, 'RangeColumnSeriesDescription', HorizontalRangeCategorySeriesDescription.$);
//# sourceMappingURL=RangeColumnSeriesDescription.js.map