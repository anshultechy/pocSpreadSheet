/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class SplineSeriesBaseDescription extends HorizontalAnchoredCategorySeriesDescription {
    constructor() {
        super();
        this.c4 = null;
    }
    get_type() {
        return "SplineSeriesBase";
    }
    get splineType() {
        return this.c4;
    }
    set splineType(a) {
        this.c4 = a;
        this.e("SplineType");
    }
}
SplineSeriesBaseDescription.$t = markType(SplineSeriesBaseDescription, 'SplineSeriesBaseDescription', HorizontalAnchoredCategorySeriesDescription.$);
//# sourceMappingURL=SplineSeriesBaseDescription.js.map