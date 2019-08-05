/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ScatterBaseDescription } from "./ScatterBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ScatterSplineSeriesDescription extends ScatterBaseDescription {
    constructor() {
        super();
        this.cu = 0;
    }
    get_type() {
        return "ScatterSplineSeries";
    }
    get stiffness() {
        return this.cu;
    }
    set stiffness(a) {
        this.cu = a;
        this.e("Stiffness");
    }
}
ScatterSplineSeriesDescription.$t = markType(ScatterSplineSeriesDescription, 'ScatterSplineSeriesDescription', ScatterBaseDescription.$);
//# sourceMappingURL=ScatterSplineSeriesDescription.js.map