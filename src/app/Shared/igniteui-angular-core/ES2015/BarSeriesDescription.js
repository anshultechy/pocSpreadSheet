/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { VerticalAnchoredCategorySeriesDescription } from "./VerticalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class BarSeriesDescription extends VerticalAnchoredCategorySeriesDescription {
    constructor() {
        super();
        this.c4 = 0;
        this.c5 = 0;
    }
    get_type() {
        return "BarSeries";
    }
    get radiusX() {
        return this.c4;
    }
    set radiusX(a) {
        this.c4 = a;
        this.e("RadiusX");
    }
    get radiusY() {
        return this.c5;
    }
    set radiusY(a) {
        this.c5 = a;
        this.e("RadiusY");
    }
}
BarSeriesDescription.$t = markType(BarSeriesDescription, 'BarSeriesDescription', VerticalAnchoredCategorySeriesDescription.$);
//# sourceMappingURL=BarSeriesDescription.js.map